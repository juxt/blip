// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('injectql.main');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
goog.require('injectql.site');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
injectql.main.plus_plus = (function injectql$main$plus_plus(a,b){
return (a + b);
});
injectql.main.type_name = (function injectql$main$type_name(head){
return cljs.core.juxt.call(null,cljs.core.second,cljs.core.last).call(null,cljs.core.re_find.call(null,/^(query|mutation) (\w+)/,head));
});
injectql.main.base_headers = new cljs.core.PersistentArrayMap(null, 1, ["Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"], null);
injectql.main.get_query_doc = (function injectql$main$get_query_doc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10405 = arguments.length;
var i__4737__auto___10406 = (0);
while(true){
if((i__4737__auto___10406 < len__4736__auto___10405)){
args__4742__auto__.push((arguments[i__4737__auto___10406]));

var G__10407 = (i__4737__auto___10406 + (1));
i__4737__auto___10406 = G__10407;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return injectql.main.get_query_doc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(injectql.main.get_query_doc.cljs$core$IFn$_invoke$arity$variadic = (function (file_name,p__10401){
var map__10402 = p__10401;
var map__10402__$1 = (((((!((map__10402 == null))))?(((((map__10402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10402):map__10402);
var site_auth_endpoint = cljs.core.get.call(null,map__10402__$1,new cljs.core.Keyword(null,"site-auth-endpoint","site-auth-endpoint",1522558409));
var headers = (function (){var G__10404 = injectql.main.base_headers;
if(cljs.core.truth_(site_auth_endpoint)){
return cljs.core.assoc.call(null,G__10404,"authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(injectql.site.get_site_token.call(null,site_auth_endpoint))].join(''));
} else {
return G__10404;
}
})();
return cljs_http.client.get.call(null,file_name,headers);
}));

(injectql.main.get_query_doc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(injectql.main.get_query_doc.cljs$lang$applyTo = (function (seq10399){
var G__10400 = cljs.core.first.call(null,seq10399);
var seq10399__$1 = cljs.core.next.call(null,seq10399);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10400,seq10399__$1);
}));

if((typeof injectql !== 'undefined') && (typeof injectql.main !== 'undefined') && (typeof injectql.main.get_query_definition !== 'undefined')){
} else {
injectql.main.get_query_definition = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"injectql.main","get-query-definition"),(function (file_name,_){
if(clojure.string.starts_with_QMARK_.call(null,file_name,"http")){
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
} else {
return new cljs.core.Keyword(null,"local","local",-1497766724);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,injectql.main.get_query_definition,new cljs.core.Keyword(null,"local","local",-1497766724),(function (file_name,_){
return injectql.main.line_seq.call(null,io.reader(file_name));
}));
cljs.core._add_method.call(null,injectql.main.get_query_definition,new cljs.core.Keyword(null,"remote","remote",-1593576576),(function (file_name,site_auth_endpoint){
return clojure.string.split_lines.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(injectql.main.get_query_doc.call(null,file_name,new cljs.core.Keyword(null,"site-auth-endpoint","site-auth-endpoint",1522558409),site_auth_endpoint)));
}));
injectql.main.load_queries = (function injectql$main$load_queries(file_name,site_auth_endpoint){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__10408){
var vec__10409 = p__10408;
var vec__10412 = cljs.core.nth.call(null,vec__10409,(0),null);
var head = cljs.core.nth.call(null,vec__10412,(0),null);
var body = cljs.core.nth.call(null,vec__10409,(1),null);
var vec__10415 = injectql.main.type_name.call(null,head);
var tty = cljs.core.nth.call(null,vec__10415,(0),null);
var nam = cljs.core.nth.call(null,vec__10415,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tty),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.core.__GT_kebab_case_symbol.call(null,nam))].join(''),cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,body,head))]);
}),cljs.core.partition.call(null,(2),cljs.core.partition_by.call(null,injectql.main.type_name,cljs.core.remove.call(null,cljs.core.empty_QMARK_,injectql.main.get_query_definition.call(null,file_name,site_auth_endpoint))))));
});
var ret__4785__auto___10434 = /**
 * Injects vars into the caller namespace at compile time.
 *   It returns the map of injected var names and their values.
 */
injectql.main.inject_BANG_ = (function injectql$main$inject_BANG_(_AMPERSAND_form,_AMPERSAND_env,file_name,site_auth_endpoint){
var queries = injectql.main.load_queries.call(null,file_name,site_auth_endpoint);
var seq__10418 = cljs.core.seq.call(null,queries);
var chunk__10419 = null;
var count__10420 = (0);
var i__10421 = (0);
while(true){
if((i__10421 < count__10420)){
var vec__10428 = cljs.core._nth.call(null,chunk__10419,i__10421);
var varname = cljs.core.nth.call(null,vec__10428,(0),null);
var body = cljs.core.nth.call(null,vec__10428,(1),null);
(varname.property = body);


var G__10435 = seq__10418;
var G__10436 = chunk__10419;
var G__10437 = count__10420;
var G__10438 = (i__10421 + (1));
seq__10418 = G__10435;
chunk__10419 = G__10436;
count__10420 = G__10437;
i__10421 = G__10438;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__10418);
if(temp__5804__auto__){
var seq__10418__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10418__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10418__$1);
var G__10439 = cljs.core.chunk_rest.call(null,seq__10418__$1);
var G__10440 = c__4556__auto__;
var G__10441 = cljs.core.count.call(null,c__4556__auto__);
var G__10442 = (0);
seq__10418 = G__10439;
chunk__10419 = G__10440;
count__10420 = G__10441;
i__10421 = G__10442;
continue;
} else {
var vec__10431 = cljs.core.first.call(null,seq__10418__$1);
var varname = cljs.core.nth.call(null,vec__10431,(0),null);
var body = cljs.core.nth.call(null,vec__10431,(1),null);
(varname.property = body);


var G__10443 = cljs.core.next.call(null,seq__10418__$1);
var G__10444 = null;
var G__10445 = (0);
var G__10446 = (0);
seq__10418 = G__10443;
chunk__10419 = G__10444;
count__10420 = G__10445;
i__10421 = G__10446;
continue;
}
} else {
return null;
}
}
break;
}
});
(injectql.main.inject_BANG_.cljs$lang$macro = true);


//# sourceMappingURL=main.js.map
