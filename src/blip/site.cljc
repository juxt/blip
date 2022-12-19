(ns blip.site
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require [blip.core :as core]
            #?(:clj [cheshire.core :as cheshire])
            #?(:clj [clj-http.lite.client :as http])
            #?(:cljs [cljs-http.client :as http])
            #?(:cljs [cljs.core.async :refer [<!]])))

(defn get-site-token
  "Retrieve the site token necessary to authorize all other interactions."
  [{:keys [endpoint username pass] :or {username "admin" pass "admin"} :as site-auth}]
  (let [response (http/post
                  endpoint
                  {:headers {"content-type" "application/x-wWw-form-urlencoded"}
                   :basic-auth [username pass]
                   :body "grant_type=client_credentials"})
        body #?(:clj (cheshire/parse-string (:body response))
                :cljs (js->clj (.parse js/JSON (:body response))))
        access-token (get body "access_token")]
    access-token))

;; Public API

(defn init
  "Higher-order function which is called with graphql resource handle as a first argument
  (either local filename or remote URI) and map containing query `endpoint` for making requests,
  and `site-auth` map to specify site authentication.
  Returns function which takes query/mutation name as a first and query-args as rest arguments
  and performs the graphql request when called."
  [gql-queries endpoint {:keys [site-auth]}]
  (let [headers  {"Content-Type" "application/json"
                  "authorization" (str "Bearer " (get-site-token site-auth))}]
    (core/init gql-queries endpoint {:headers headers})))

(def site-auth "http://localhost:2021/_site/token")

(def questionnaire-endpoint "http://localhost:2021/questionnaire/graphql")

(def remote-query "http://localhost:2021/questionnaire/query")

(def site-questionnaire
  (init remote-query
        questionnaire-endpoint
        {:site-auth {:endpoint site-auth
                     :username "admin"
                     :pass "admin"}}))
