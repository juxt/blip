(ns blip.query-helper
  (:require [clojure.string :as string]
            [camel-snake-kebab.core :as csk]
            [camel-snake-kebab.extras :as cske]))

(defn- type-name [head]
  ((juxt second last) (re-find #"^(query|mutation|fragment) (\w+)" head)))

(defn- replace-all-fragments
  [fragments-lookup [op-type op-body :as v]]
  (let [fragment-name-regex #"\.\.\.([a-zA-Z0-9_]+)"
        found-fragments (re-seq fragment-name-regex op-body)]
    (if-let [fragment-names (->> found-fragments (map last) seq)]
      [op-type
       (reduce
        (fn [body fragment-name]
          (let [lookup-name (str "fragment-" (csk/->kebab-case-symbol fragment-name))
                fragment-body (fragments-lookup lookup-name)
                fragment-regex (re-pattern (str "\\.\\.\\." fragment-name))]
            (string/replace body fragment-regex fragment-body)))
        op-body fragment-names)]
      v)))

(defn inline-fragments
  "Search for fragment usage in queries or mutations
  and replace it with the corresponding fragment body."
  [definitions-map]
  (let [fragment-body-regex #"\{(.*)\}"
        fragments-lookup (-> definitions-map
                             (update-vals
                              (fn [[op-type op-body :as v]]
                                (if (= :fragment op-type)
                                  (last (re-find fragment-body-regex op-body))
                                  v))))]
    (->> fragments-lookup
         (partial replace-all-fragments)
         (update-vals definitions-map))))

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
       (apply merge)
       inline-fragments))

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
