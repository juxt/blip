(ns blip.core
  (:require [clojure.string :as string]
            [cheshire.core :as cheshire]
            [clojure.java.io :as io]
            [clj-http.lite.client :as http]
            [blip.query-helper :as qh]))

;; TODO: something more robust to check whether filename is url location
(defmulti get-query-definition
  (fn [file-name & _]
    (if (string/starts-with? file-name "http")
      :remote
      :local)))

(defn get-request [url & {:keys [headers]}]
  (let [accept {"Accept" "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"}]
    (http/get
     url
     {:headers
      (merge (if (delay? headers) @headers headers) accept)})))

(defn post-request [url body & {:keys [headers]}]
  (let [{:keys [body]} (http/post
                        url
                        {:body    (cheshire/generate-string body)
                         :headers (if (delay? headers) @headers headers)})]
    (cheshire/parse-string body)))

(defmethod get-query-definition :local
  [file-name & _]
  (-> file-name io/reader line-seq))

(defmethod get-query-definition :remote
  [file-name & [opts]]
  (-> file-name (get-request opts) :body string/split-lines))

;; Public API

(defn load-queries
  "Given graphql resource handle and site-auth map, fetches graphql resource
  and calls `blip.query-helper/process-query-definitions` on it"
  [file-name & [opts]]
  (-> file-name (get-query-definition opts) qh/process-query-definitions))

(def memoized-load-queries (memoize load-queries))

(defn init
  "Higher-order function which is called with a graphql resource handle as a first argument
  (either local filename or remote URI) and map containing query `endpoint` for making requests,
  plus optional parameters like HTTP headers.
  Returns function which takes query/mutation name as a first and query-args as rest arguments
  and performs the graphql request when called."
  [gql-queries endpoint & [opts]]
  (fn [query-name & query-args]
    (let [[query-name query-body] (get (memoized-load-queries gql-queries opts) query-name)]
      (when (:debug opts)
        (println "[BLIP] retrieved query" {query-name query-body}))
      (if query-body
        (-> endpoint
            (post-request (qh/prepare-query-body {:query query-body} query-args) opts)
            qh/extract-query-result)
        (throw
         (ex-info (format "Requested query %s not found" query-name)
                  {:query-name query-name}))))))
