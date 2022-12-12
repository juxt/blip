(ns blip.core
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require [clojure.string :as string]
            [camel-snake-kebab.core :as csk]
            [camel-snake-kebab.extras :as cske]
            [blip.site :as site]
            #?(:clj [clojure.java.io :as io])
            #?(:clj [clj-http.lite.client :as http])
            #?(:cljs [cljs-http.client :as http])
            #?(:cljs [cljs.core.async :refer [<!]])))

(defn type-name [head]
  ((juxt second last) (re-find #"^(query|mutation) (\w+)" head)))

(def ^:private base-headers
  {"Accept" "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"})

(defn get-query-doc [file-name & {:keys [site-auth-endpoint]}]
  (let [headers  (cond-> base-headers
                   site-auth-endpoint
                   (assoc "authorization" (str "Bearer " (site/get-site-token site-auth-endpoint))))]
    (http/get file-name headers)))

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
  (-> file-name (get-query-doc :site-auth-endpoint site-auth-endpoint) :body string/split-lines))

;; Public API

(defn load-queries [file-name site-auth-endpoint]
  (->> (get-query-definition file-name site-auth-endpoint)
       (remove empty?)
       (partition-by type-name)
       (partition 2)
       (map (fn [[[head] body]]
              (let [[tty nam] (type-name head)]
                {(str tty "-" (csk/->kebab-case-symbol nam))
                 (apply str (conj body head))})))
       (apply merge)))


(defmacro inject!
  "Injects vars into the caller namespace at compile time.
  It returns the map of injected var names and their values."
  [file-name site-auth-endpoint] 
  (let [queries (load-queries file-name site-auth-endpoint)]
    (doseq [[varname body] queries]
      #?(:clj (intern (ns-name *ns*) (symbol varname) body))
      #?(:cljs (set! (.-property varname) body)))))
