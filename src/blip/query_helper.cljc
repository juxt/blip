(ns blip.query-helper
  (:require [clojure.string :as string]
            [camel-snake-kebab.core :as csk]
            [camel-snake-kebab.extras :as cske]))

(defn- type-name [head]
  ((juxt second last) (re-find #"^(query|mutation) (\w+)" head)))

(defn process-query-definitions
  "Given graphql resource in form of a line sequence, returns map with string keys 
  constructed from graphql query/mutation names prefixed by definition type
  (query or mutation) and values bound to full query/mutation definition as a string`"
  [line-seq]
  (->> line-seq
       (remove #(string/starts-with? % "#"))
       (remove empty?)
       (partition-by type-name)
       (partition 2)
       (map (fn [[[head] body]]
              (let [[tty nam] (type-name head)]
                {(str tty "-" (csk/->kebab-case-symbol nam))
                 [(keyword tty) (apply str (conj body head))]})))
       (apply merge)))

(defn prepare-query-body
  "Given query and query-args, correctly constructs query body"
  [query query-args]
  (cond-> query
    query-args
    (assoc :variables (cske/transform-keys csk/->camelCaseKeyword query-args))))

(defn extract-query-result
  "Transform graphql query result by converting keys to kebab case and extracting
  just the result"
  [query-result]
  (->> (get query-result "data") (cske/transform-keys csk/->kebab-case-keyword) vals first))
