(ns blip.core
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require [clojure.string :as string]
            [camel-snake-kebab.core :as csk]
            [camel-snake-kebab.extras :as cske]
            #?(:clj [cheshire.core :as cheshire])
            #?(:clj [clojure.java.io :as io])
            #?(:clj [clj-http.lite.client :as http])
            #?(:cljs [cljs-http.client :as http])
            #?(:cljs [cljs.core.async :refer [<!]])))

(defn type-name [head]
  ((juxt second last) (re-find #"^(query|mutation) (\w+)" head)))

(defn get-request [url headers]
  (http/get url {:headers headers}))

(defn post-request [url body headers]
  (let [response (http/post
                  url
                  {:body #?(:clj (cheshire/generate-string body)
                            :cljs (.stringify js/JSON (clj->js body)))
                   :headers headers})]
    (-> response
        :body
        #?(:clj cheshire/parse-string
           :cljs (js->clj (.parse js/JSON (:body response))))
        (get "data"))))

;; TODO: something more robust to check whether filename is url location
(defmulti get-query-definition (fn [file-name _] (if (string/starts-with? file-name "http") :remote :local)))

#?(:clj (defmethod get-query-definition :local
          [file-name _]
          (-> file-name io/reader line-seq)))

#?(:cljs (defn node-slurp
           [file-path]
           (let [file-stream (js/require "fs")]
             (.readFileSync file-stream file-path "utf8"))))

#?(:cljs (defmethod get-query-definition :local
           [file-name _]
           (-> file-name node-slurp string/split-lines)))

(defmethod get-query-definition :remote
  [file-name headers]
  (-> file-name (get-request headers) :body string/split-lines))

(defn load-queries
  "Given graphql resource handle and site-auth map, fetches graphql resource and returns map
  with string keys constructed from graphql query/mutation names prefixed by definition type
  (query or mutation) and values bound to full query/mutation definition as a string`"
  [file-name headers]
  (->> (get-query-definition file-name headers)
       (remove #(string/starts-with? % "#"))
       (remove empty?)
       (partition-by type-name)
       (partition 2)
       (map (fn [[[head] body]]
              (let [[tty nam] (type-name head)]
                {(str tty "-" (csk/->kebab-case-symbol nam))
                 [(keyword tty) (apply str (conj body head))]})))
       (apply merge)))

;; Public API

(defn init
  "Higher-order function which is called with graphql resource handle as a first argument
  (either local filename or remote URI) and map containing query `endpoint` for making requests,
  and `post-headers`/`get-headers` maps.
  Returns function which takes query/mutation name as a first and query-args as rest arguments
  and performs the graphql request when called."
  [file-name {:keys [endpoint post-headers get-headers]}]
  (fn [query-name & query-args]
    (let [query-val (get (load-queries file-name get-headers) query-name)
          query {:query (second query-val)}]
      (post-request endpoint
                    (cond-> query
                      query-args
                      (assoc :variables query-args))
                    post-headers))))
