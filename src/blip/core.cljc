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

(defn get-request [url & {:keys [headers]}]
  (let [accept {"Accept" "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"}]
    (http/get
     url
     {:headers
      (merge (if (delay? headers) @headers headers) accept)})))

(defn post-request [url body & {:keys [headers]}]
  (let [response (http/post
                  url
                  {:body #?(:clj (cheshire/generate-string body)
                            :cljs (.stringify js/JSON (clj->js body)))
                   :headers (if (delay? headers) @headers headers)})]
    (-> response
        :body
        #?(:clj cheshire/parse-string
           :cljs (js->clj (.parse js/JSON (:body response))))
        (get "data"))))

;; TODO: something more robust to check whether filename is url location
(defmulti get-query-definition
  (fn [file-name & _]
    (if (string/starts-with? file-name "http")
      :remote
      :local)))

#?(:clj (defmethod get-query-definition :local
          [file-name & _]
          (-> file-name io/reader line-seq)))

#?(:cljs (defn node-slurp
           [file-path]
           (let [file-stream (js/require "fs")]
             (.readFileSync file-stream file-path "utf8"))))

#?(:cljs (defmethod get-query-definition :local
           [file-name & _]
           (-> file-name node-slurp string/split-lines)))

(defmethod get-query-definition :remote
  [file-name & [opts]]
  (-> file-name (get-request opts) :body string/split-lines))

(defn load-queries
  "Given graphql resource handle and site-auth map, fetches graphql resource and returns map
  with string keys constructed from graphql query/mutation names prefixed by definition type
  (query or mutation) and values bound to full query/mutation definition as a string`"
  [file-name & [opts]]
  (->> (get-query-definition file-name opts)
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

(def memoized-load-queries (memoize load-queries))

(defn init
  "Higher-order function which is called with a graphql resource handle as a first argument
  (either local filename or remote URI) and map containing query `endpoint` for making requests,
  plus optional parameters like HTTP headers.
  Returns function which takes query/mutation name as a first and query-args as rest arguments
  and performs the graphql request when called."
  [gql-queries endpoint & [opts]]
  (fn [query-name & query-args]
    (let [query-val (get (memoized-load-queries gql-queries opts) query-name)
          query {:query (second query-val)}]
      (->> (post-request endpoint
                         (cond-> query
                           query-args
                           (assoc :variables (cske/transform-keys csk/->camelCaseKeyword query-args)))
                         opts)
           (cske/transform-keys csk/->kebab-case-keyword)
           vals
           first))))
