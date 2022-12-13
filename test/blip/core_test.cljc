(ns blip.core-test
  (:require #?(:cljs [clojure.test :refer :all])
            #?(:clj [clojure.test :refer :all])
            [blip.core :as blip]))

(deftest inject!
    (let [_ (blip/inject! "test/blip/test-query.graphql" nil)]
      (is (-> 'blip.core-test
              ns-publics
              (contains? 'query-user)))))


