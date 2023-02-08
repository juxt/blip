(ns blip.re-frame
  (:require [ajax.core :as ajax]
            [clojure.string :as string]
            [blip.query-helper :as blip-qh]
            [day8.re-frame.http-fx]
            #?(:cljs [goog.crypt.base64 :as b64])
            #?(:clj [cheshire.core :as cheshire]))
  #?(:clj (:import java.util.Base64)))

(defn- encode-b64 [item]
  #?(:clj (.encodeToString (Base64/getEncoder) (.getBytes item))
     :cljs (b64/encodeString item)))

(defn auth-header [username password]
  (str "Basic " (encode-b64 (str username ":" password))))

(defn request-site-token [{:keys [username password endpoint-path on-success-event on-failure-event]
                           :or {username "admin"
                                password "admin"
                                endpoint-path [:blip/site-auth-endpoint]}}
                          {:keys [db]}]
  (let [endpoint (get-in db endpoint-path)]
    {:http-xhrio {:method          :post
                  :uri             endpoint
                  :response-format (ajax/json-response-format {:keywords? true})
                  :headers         {"Authorization" (auth-header username password)
                                    "content-type" "application/x-wWw-form-urlencoded"}
                  :body            "grant_type=client_credentials"
                  :on-success      on-success-event
                  :on-failure      on-failure-event}
     :db (assoc db :blip/auth-in-progress? true)}))

(defn receive-access-token [{:keys [access_token] :as response} {:keys [db]}]
  {:db (assoc db
              :blip/site-access-token access_token
              :blip/auth-in-progress? false)})


(defn request-query-definitions
  [{:keys [endpoint-path on-success-event on-failure-event]} {:keys [db]}]
  (let [endpoint (get-in db endpoint-path)
        token    (:blip/site-access-token db)]
    {:http-xhrio {:method          :get
                  :uri             endpoint
                  :response-format (ajax/ring-response-format)
                  :headers         {"Content-Type" "application/json"
                                    "authorization" (str "Bearer " token)}
                  :on-success      on-success-event
                  :on-failure      on-failure-event}
     :db (assoc db :blip/query-definition-load-in-progress? true)}))

(defn receive-query-definitions [{:keys [query-definitions-path response]} {:keys [db]}]
  {:db (-> db
           (assoc :blip/query-definition-load-in-progress? false)
           (assoc-in query-definitions-path (blip-qh/process-query-definitions
                                             (string/split-lines (:body response)))))})

(defn post-graphql-request
  [{:keys [query query-args query-definitions-path endpoint-path on-success-event on-failure-event]} {:keys [db]}]
  (let [endpoint      (get-in db endpoint-path)
        token         (:blip/site-access-token db)
        query-request (-> db
                          (get-in (conj query-definitions-path query))
                          second)
        request-body  (blip-qh/prepare-query-body {:query query-request} query-args)]
    {:http-xhrio {:method          :post
                  :uri             endpoint
                  :response-format (ajax/ring-response-format)
                  :headers         {"Content-Type" "application/json"
                                    "authorization" (str "Bearer " token)}
                  :body            #?(:clj (cheshire/generate-string request-body)
                                      :cljs (.stringify js/JSON (clj->js request-body)))
                  :on-success      on-success-event
                  :on-failure      on-failure-event}
     :db (assoc db :blip/graphql-request-in-progress? true)}))

(defn receive-query-result [{:keys [query-result-path response]} {:keys [db]}]
  {:db (-> db
           (assoc :blip/graphql-request-in-progress? false)
           (assoc-in query-result-path (blip-qh/extract-query-result
                                        #?(:clj (cheshire/parse-string (:body response))
                                           :cljs (js->clj (.parse js/JSON (:body response)))))))})
