// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__12219 = Object.getPrototypeOf(obj__$1);
var G__12220 = cljs.core.conj.call(null,protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors.call(null,obj__$1)], null));
obj__$1 = G__12219;
protos = G__12220;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$property_names_and_types(var_args){
var G__12222 = arguments.length;
switch (G__12222) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.call(null,js_obj,null);
}));

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4529__auto__ = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12223(s__12224){
return (new cljs.core.LazySeq(null,(function (){
var s__12224__$1 = s__12224;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12224__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__12229 = cljs.core.first.call(null,xs__6360__auto__);
var i = cljs.core.nth.call(null,vec__12229,(0),null);
var map__12232 = cljs.core.nth.call(null,vec__12229,(1),null);
var map__12232__$1 = (((((!((map__12232 == null))))?(((((map__12232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12232):map__12232);
var _obj = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.call(null,map__12232__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4525__auto__ = ((function (s__12224__$1,vec__12229,i,map__12232,map__12232__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12223_$_iter__12225(s__12226){
return (new cljs.core.LazySeq(null,((function (s__12224__$1,vec__12229,i,map__12232,map__12232__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function (){
var s__12226__$1 = s__12226;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__12226__$1);
if(temp__5804__auto____$1){
var s__12226__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12226__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__12226__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__12228 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__12227 = (0);
while(true){
if((i__12227 < size__4528__auto__)){
var key = cljs.core._nth.call(null,c__4527__auto__,i__12227);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
cljs.core.chunk_append.call(null,b__12228,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__4126__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.call(null,goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e12234){if((e12234 instanceof Error)){
var _e = e12234;
return "var";
} else {
throw e12234;

}
}})()], null);
})());

var G__12237 = (i__12227 + (1));
i__12227 = G__12237;
continue;
} else {
var G__12238 = (i__12227 + (1));
i__12227 = G__12238;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12228),cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12223_$_iter__12225.call(null,cljs.core.chunk_rest.call(null,s__12226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12228),null);
}
} else {
var key = cljs.core.first.call(null,s__12226__$2);
if(((cljs.core.not.call(null,cljs.core.get.call(null,seen,key))) && (((cljs.core.empty_QMARK_.call(null,prefix)) || (clojure.string.starts_with_QMARK_.call(null,key,prefix)))))){
return cljs.core.cons.call(null,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.call(null,seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__4126__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.call(null,goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_.call(null,value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e12235){if((e12235 instanceof Error)){
var _e = e12235;
return "var";
} else {
throw e12235;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12223_$_iter__12225.call(null,cljs.core.rest.call(null,s__12226__$2)));
} else {
var G__12239 = cljs.core.rest.call(null,s__12226__$2);
s__12226__$1 = G__12239;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__12224__$1,vec__12229,i,map__12232,map__12232__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
,null,null));
});})(s__12224__$1,vec__12229,i,map__12232,map__12232__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,cljs.core.js_keys.call(null,props)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__12223.call(null,cljs.core.rest.call(null,s__12224__$1)));
} else {
var G__12240 = cljs.core.rest.call(null,s__12224__$1);
s__12224__$1 = G__12240;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype.call(null,js_obj)));
}));

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=js_introspection.js.map
