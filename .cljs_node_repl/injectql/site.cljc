(ns injectql.site
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require #?(:clj [cheshire.core :as cheshire])
            #?(:clj [clj-http.lite.client :as http])
            #?(:cljs [cljs-http.client :as http])
            #?(:cljs [cljs.core.async :refer [<!]])))

(defn get-site-token
  "Retrieve the site token necessary to authorize
  all other interactions."
  [site-auth-endpoint]
  (let [response (http/post
                  site-auth-endpoint
                  {:headers {"content-type" "application/x-www-form-urlencoded"}
                   :basic-auth ["admin" "admin"]
                   :body "grant_type=client_credentials"})
        #?@(:clj [body (cheshire/parse-string (:body response))]
            :cljs [body (js->clj (.parse js/JSON (:body response)))])
        access-token (get body "access_token")]
    access-token))

