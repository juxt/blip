(ns blip.core-test
  (:require
   #?(:cljs [clojure.test :refer :all])
   #?(:clj [clojure.test :refer [deftest is]])
   [clj-http.lite.client :as http]
   [blip.core :as blip]))

(deftest load-queries-test
  (is (=
       {"fragment-mission-fragment"
        [:fragment "fragment MissionFragment on Mission {  flight  name}"],
        "fragment-landing-fragment"
        [:fragment "fragment LandingFragment on Landing {  time  location}"],
        "query-capsule"
        [:query
         "query capsule($capsuleId: ID!) {  capsule(id: $capsuleId) {    original_launch    reuse_count    status    type  }}"],
        "mutation-delete-user"
        [:mutation
         "mutation deleteUser($where: users_bool_exp!) {  delete_users(where: $where) {  }}"],
        "query-capsules"
        [:query
         "query capsules {  capsules {    id    landings {        time  location    }    missions {        flight  name    }  }}"],
        "mutation-insert-user"
        [:mutation
         "mutation insertUser($objects: [users_insert_input!]!) {  insert_users(objects: $objects) {    returning {      name      id      rocket      timestamp    }  }}"]}
       (blip/load-queries "test/blip/spacex.graphql" nil))))

(deftest blipping-around-test
  (with-redefs [http/post (constantly {:body "{\"data\": {\"query-name\": \"results\"}}"})]
    (let [f (blip/init "test/blip/spacex.graphql" "")]
      (is (= "results" (f "query-capsule"))))))
