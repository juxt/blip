(ns blip.site
  (:require [blip.core :as core]
            [cheshire.core :as cheshire]
            [clj-http.lite.client :as http]))

(defn get-site-token
  "Retrieve the site token necessary to authorize all other interactions."
  [{:keys [endpoint username pass] :or {username "admin" pass "admin"} :as site-auth}]
  (let [response (http/post
                  endpoint
                  {:headers {"content-type" "application/x-www-form-urlencoded"}
                   :basic-auth [username pass]
                   :body "grant_type=client_credentials"})
        body (cheshire/parse-string (:body response))
        access-token (get body "access_token")]
    access-token))

;; Public API

(defn init
  "Higher-order function which is called with graphql resource handle as a first argument
  (either local filename or remote URI) and map containing query `endpoint` for making requests,
  and `site-auth` map to specify site authentication.
  Returns function which takes query/mutation name as a first and query-args as rest arguments
  and performs the graphql request when called."
  [gql-queries endpoint & {:keys [site-auth] :as opts}]
  (let [headers (delay {"Content-Type" "application/json"
                        "authorization" (str "Bearer " (get-site-token site-auth))})]
    (core/init gql-queries endpoint (merge opts {:headers headers}))))


