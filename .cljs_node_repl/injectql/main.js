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
var len__4736__auto___11810 = arguments.length;
var i__4737__auto___11811 = (0);
while(true){
if((i__4737__auto___11811 < len__4736__auto___11810)){
args__4742__auto__.push((arguments[i__4737__auto___11811]));

var G__11812 = (i__4737__auto___11811 + (1));
i__4737__auto___11811 = G__11812;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return injectql.main.get_query_doc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(injectql.main.get_query_doc.cljs$core$IFn$_invoke$arity$variadic = (function (file_name,p__11806){
var map__11807 = p__11806;
var map__11807__$1 = (((((!((map__11807 == null))))?(((((map__11807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11807):map__11807);
var site_auth_endpoint = cljs.core.get.call(null,map__11807__$1,new cljs.core.Keyword(null,"site-auth-endpoint","site-auth-endpoint",1522558409));
var headers = (function (){var G__11809 = injectql.main.base_headers;
if(cljs.core.truth_(site_auth_endpoint)){
return cljs.core.assoc.call(null,G__11809,"authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(injectql.site.get_site_token.call(null,site_auth_endpoint))].join(''));
} else {
return G__11809;
}
})();
return cljs_http.client.get.call(null,file_name,headers);
}));

(injectql.main.get_query_doc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(injectql.main.get_query_doc.cljs$lang$applyTo = (function (seq11804){
var G__11805 = cljs.core.first.call(null,seq11804);
var seq11804__$1 = cljs.core.next.call(null,seq11804);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11805,seq11804__$1);
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
injectql.main.node_slurp = (function injectql$main$node_slurp(file_path){
var file_stream = require("fs");
return file_stream.readFileSync(file_path,"utf8");
});
cljs.core._add_method.call(null,injectql.main.get_query_definition,new cljs.core.Keyword(null,"local","local",-1497766724),(function (file_name,_){
return clojure.string.split_lines.call(null,injectql.main.node_slurp.call(null,file_name));
}));
cljs.core._add_method.call(null,injectql.main.get_query_definition,new cljs.core.Keyword(null,"remote","remote",-1593576576),(function (file_name,site_auth_endpoint){
return clojure.string.split_lines.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(injectql.main.get_query_doc.call(null,file_name,new cljs.core.Keyword(null,"site-auth-endpoint","site-auth-endpoint",1522558409),site_auth_endpoint)));
}));
injectql.main.load_queries = (function injectql$main$load_queries(file_name,site_auth_endpoint){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__11813){
var vec__11814 = p__11813;
var vec__11817 = cljs.core.nth.call(null,vec__11814,(0),null);
var head = cljs.core.nth.call(null,vec__11817,(0),null);
var body = cljs.core.nth.call(null,vec__11814,(1),null);
var vec__11820 = injectql.main.type_name.call(null,head);
var tty = cljs.core.nth.call(null,vec__11820,(0),null);
var nam = cljs.core.nth.call(null,vec__11820,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tty),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(camel_snake_kebab.core.__GT_kebab_case_symbol.call(null,nam))].join(''),cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,body,head))]);
}),cljs.core.partition.call(null,(2),cljs.core.partition_by.call(null,injectql.main.type_name,cljs.core.remove.call(null,cljs.core.empty_QMARK_,injectql.main.get_query_definition.call(null,file_name,site_auth_endpoint))))));
});
var ret__4785__auto___11839 = /**
 * Injects vars into the caller namespace at compile time.
 *   It returns the map of injected var names and their values.
 */
injectql.main.inject_BANG_ = (function injectql$main$inject_BANG_(_AMPERSAND_form,_AMPERSAND_env,file_name,site_auth_endpoint){
var queries = injectql.main.load_queries.call(null,file_name,site_auth_endpoint);
var seq__11823 = cljs.core.seq.call(null,queries);
var chunk__11824 = null;
var count__11825 = (0);
var i__11826 = (0);
while(true){
if((i__11826 < count__11825)){
var vec__11833 = cljs.core._nth.call(null,chunk__11824,i__11826);
var varname = cljs.core.nth.call(null,vec__11833,(0),null);
var body = cljs.core.nth.call(null,vec__11833,(1),null);
(varname.property = body);


var G__11840 = seq__11823;
var G__11841 = chunk__11824;
var G__11842 = count__11825;
var G__11843 = (i__11826 + (1));
seq__11823 = G__11840;
chunk__11824 = G__11841;
count__11825 = G__11842;
i__11826 = G__11843;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__11823);
if(temp__5804__auto__){
var seq__11823__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11823__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__11823__$1);
var G__11844 = cljs.core.chunk_rest.call(null,seq__11823__$1);
var G__11845 = c__4556__auto__;
var G__11846 = cljs.core.count.call(null,c__4556__auto__);
var G__11847 = (0);
seq__11823 = G__11844;
chunk__11824 = G__11845;
count__11825 = G__11846;
i__11826 = G__11847;
continue;
} else {
var vec__11836 = cljs.core.first.call(null,seq__11823__$1);
var varname = cljs.core.nth.call(null,vec__11836,(0),null);
var body = cljs.core.nth.call(null,vec__11836,(1),null);
(varname.property = body);


var G__11848 = cljs.core.next.call(null,seq__11823__$1);
var G__11849 = null;
var G__11850 = (0);
var G__11851 = (0);
seq__11823 = G__11848;
chunk__11824 = G__11849;
count__11825 = G__11850;
i__11826 = G__11851;
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
