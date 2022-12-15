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
    (http/get url {:headers headers})))

(def ^:private post-base-headers
  {"Content-Type" "application/json"})

(defn post-request [url body & {:keys [site-auth]}]
  (let [headers  (cond-> post-base-headers
                   site-auth
                   (assoc "authorization" (str "Bearer " (site/get-site-token site-auth))))
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
  [file-name site-auth]
  (-> file-name (get-request :site-auth site-auth) :body string/split-lines))

;; Public API

(defn load-queries
  "Given graphql resource handle and site-auth map, fetches graphql resource and returns map
  with string keys constructed from graphql query/mutation names prefixed by definition type
  (query or mutation) and values bound to full query/mutation definition as a string`"
  [file-name site-auth]
  (->> (get-query-definition file-name site-auth)
       (remove empty?)
       (partition-by type-name)
       (partition 2)
       (map (fn [[[head] body]]
              (let [[tty nam] (type-name head)]
                {(str tty "-" (csk/->kebab-case-symbol nam))
                 (apply str (conj body head))})))
       (apply merge)))

;;TODO - this is probably too specific and doesn't belong to generic query injection library
(defn feeds
  "Given site endpoint, map of query definitions (as loaded by `load-queries` fn) and (optional)
  site auth map, performs selects `query-feeds` query and performs the data fetch against site
  endpoint, returning `feeds` field from result."
  [site-endpoint queries & {:keys [site-auth]}]
  (-> (post-request site-endpoint
                    {:query (get queries "query-feeds")}
                    site-auth)
      (get "feeds")))

;;TODO - binding vars into caller namespace can be dangerous, as generated var names (such as `query-user`)
;; can potentially re-define existing vars in caller namespace (imagine that `query-user` is already bound
;; to existing fn in the namespace.
;; Safer solution would be to always inject graphql vars into dedicated library ns (such as `blip.qraphql-defs`)
(defmacro inject!
  "Given graphql resource handle (either as a name of local file, or remote URI on graphql server)
  and optional `site-auth` map (containing `endpoint`, `username` and `pass` keys), fetches graphql
  resource, and injects it as vars into callers namespace.
  For each qraphql query/mutation, separate var with query/mutation name is created, value of the
  var bound to query/mutation body."
  [file-name & {:keys [site-auth]}] 
  (let [queries (load-queries file-name site-auth)]
    (doseq [[varname body] queries]
      #?(:clj (intern (ns-name *ns*) (symbol varname) body))
      #?(:cljs (set! (.-property varname) body)))))
