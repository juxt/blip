(ns blip.core-test
  (:require #?(:cljs [clojure.test :refer :all])
            #?(:clj [clojure.test :refer :all])
            [blip.core :as blip]))

(deftest load-queries-test
  (is (=
       {"fragment-mission-fragment"
        [:fragment "fragment MissionFragment on Mission {  flight  name}"],
        "query-capsule"
        [:query
         "query capsule($capsuleId: ID!) {  capsule(id: $capsuleId) {    original_launch    reuse_count    status    type  }}"],
        "mutation-delete-user"
        [:mutation
         "mutation deleteUser($where: users_bool_exp!) {  delete_users(where: $where) {  }}"],
        "query-capsules"
        [:query
         "query capsules {  capsules {    id    landings    missions {        flight  name    }  }}"],
        "mutation-insert-user"
        [:mutation
         "mutation insertUser($objects: [users_insert_input!]!) {  insert_users(objects: $objects) {    returning {      name      id      rocket      timestamp    }  }}"]}
       (blip/load-queries "test/blip/spacex.graphql" nil))))
