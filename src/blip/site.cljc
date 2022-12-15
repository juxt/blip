(ns blip.site
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]]))
  (:require #?(:clj [cheshire.core :as cheshire])
            #?(:clj [clj-http.lite.client :as http])
            #?(:cljs [cljs-http.client :as http])
            #?(:cljs [cljs.core.async :refer [<!]])))

(defn get-site-token
  "Retrieve the site token necessary to authorize
  all other interactions."
  [{:keys [endpoint username pass] :or {username "admin" pass "admin"} :as site-auth}]
  (let [response (http/post
                  endpoint
                  {:headers {"content-type" "application/x-www-form-urlencoded"}
                   :basic-auth [username pass]
                   :body "grant_type=client_credentials"})
        body #?(:clj (cheshire/parse-string (:body response))
                :cljs (js->clj (.parse js/JSON (:body response))))
        access-token (get body "access_token")]
    access-token))
