(ns blip.core
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require [clojure.string :as string]
            [camel-snake-kebab.core :as csk]
            [camel-snake-kebab.extras :as cske]
            [blip.site :as site]
            #?(:clj [cheshire.core :as cheshire])
            #?(:clj [clojure.java.io :as io])
            #?(:clj [clj-http.lite.client :as http])
            #?(:cljs [cljs-http.client :as http])
            #?(:cljs [cljs.core.async :refer [<!]])))

(defn type-name [head]
  ((juxt second last) (re-find #"^(query|mutation) (\w+)" head)))

(def ^:private get-base-headers
  {"Accept" "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"})

(defn get-request [url & {:keys [site-auth]}]
  (let [headers  (cond-> get-base-headers
                   site-auth
                   (assoc "authorization" (str "Bearer " (site/get-site-token site-auth))))]
    (http/get url headers)))

(def ^:private post-base-headers
  {"Content-Type" "application/json"})

(defn post-request [url body & {:keys [site-auth]}]
  (let [headers  (cond-> post-base-headers
                   site-auth
                   (assoc "authorization" (str "Bearer" (site/get-site-token site-auth))))
        response (http/post
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
  [file-name site-auth-endpoint]
  (-> file-name (get-request :site-auth-endpoint site-auth-endpoint) :body string/split-lines))

#?(:clj (defn post-request [url body]
          (let [response (http/post
                          url
                          {:body (cheshire/generate-string body)
                           :headers {"authorization" (str "Bearer " (site/get-site-token))
                                     "Content-Type" "application/json"}})]
            (-> response
                :body
                cheshire/parse-string
                (get "data")))))

;; Public API

(defn load-queries
  ""
  [file-name site-auth-endpoint]
  (->> (get-query-definition file-name site-auth-endpoint)
       (remove empty?)
       (partition-by type-name)
       (partition 2)
       (map (fn [[[head] body]]
              (let [[tty nam] (type-name head)]
                {(str tty "-" (csk/->kebab-case-symbol nam))
                 (apply str (conj body head))})))
       (apply merge)))

(defn feeds
  ""
  [site-endpoint queries & {:keys [site-auth]}]
  (-> (post-request site-endpoint
                    {:query (get queries "query-feeds")}
                    site-auth)
      (get "feeds")))

(defmacro inject!
  "Injects vars into the caller namespace at compile time.
  It returns the map of injected var names and their values."
  [file-name & {:keys [site-auth]}] 
  (let [queries (load-queries file-name site-auth)]
    (doseq [[varname body] queries]
      #?(:clj (intern (ns-name *ns*) (symbol varname) body))
      #?(:cljs (set! (.-property varname) body)))))
