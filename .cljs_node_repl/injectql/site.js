// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('injectql.site');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
/**
 * Retrieve the site token necessary to authorize
 *   all other interactions.
 */
injectql.site.get_site_token = (function injectql$site$get_site_token(site_auth_endpoint){
var response = cljs_http.client.post.call(null,site_auth_endpoint,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["admin","admin"], null),new cljs.core.Keyword(null,"body","body",-2049205669),"grant_type=client_credentials"], null));
var body = cljs.core.js__GT_clj.call(null,JSON.parse(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)));
var access_token = cljs.core.get.call(null,body,"access_token");
return access_token;
});

//# sourceMappingURL=site.js.map
