// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10210){
var map__10211 = p__10210;
var map__10211__$1 = (((((!((map__10211 == null))))?(((((map__10211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10211):map__10211);
var m = map__10211__$1;
var n = cljs.core.get.call(null,map__10211__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10211__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10213_10245 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10214_10246 = null;
var count__10215_10247 = (0);
var i__10216_10248 = (0);
while(true){
if((i__10216_10248 < count__10215_10247)){
var f_10249 = cljs.core._nth.call(null,chunk__10214_10246,i__10216_10248);
cljs.core.println.call(null,"  ",f_10249);


var G__10250 = seq__10213_10245;
var G__10251 = chunk__10214_10246;
var G__10252 = count__10215_10247;
var G__10253 = (i__10216_10248 + (1));
seq__10213_10245 = G__10250;
chunk__10214_10246 = G__10251;
count__10215_10247 = G__10252;
i__10216_10248 = G__10253;
continue;
} else {
var temp__5804__auto___10254 = cljs.core.seq.call(null,seq__10213_10245);
if(temp__5804__auto___10254){
var seq__10213_10255__$1 = temp__5804__auto___10254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10213_10255__$1)){
var c__4556__auto___10256 = cljs.core.chunk_first.call(null,seq__10213_10255__$1);
var G__10257 = cljs.core.chunk_rest.call(null,seq__10213_10255__$1);
var G__10258 = c__4556__auto___10256;
var G__10259 = cljs.core.count.call(null,c__4556__auto___10256);
var G__10260 = (0);
seq__10213_10245 = G__10257;
chunk__10214_10246 = G__10258;
count__10215_10247 = G__10259;
i__10216_10248 = G__10260;
continue;
} else {
var f_10261 = cljs.core.first.call(null,seq__10213_10255__$1);
cljs.core.println.call(null,"  ",f_10261);


var G__10262 = cljs.core.next.call(null,seq__10213_10255__$1);
var G__10263 = null;
var G__10264 = (0);
var G__10265 = (0);
seq__10213_10245 = G__10262;
chunk__10214_10246 = G__10263;
count__10215_10247 = G__10264;
i__10216_10248 = G__10265;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10266 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10266);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10266)))?cljs.core.second.call(null,arglists_10266):arglists_10266));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10217_10267 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10218_10268 = null;
var count__10219_10269 = (0);
var i__10220_10270 = (0);
while(true){
if((i__10220_10270 < count__10219_10269)){
var vec__10231_10271 = cljs.core._nth.call(null,chunk__10218_10268,i__10220_10270);
var name_10272 = cljs.core.nth.call(null,vec__10231_10271,(0),null);
var map__10234_10273 = cljs.core.nth.call(null,vec__10231_10271,(1),null);
var map__10234_10274__$1 = (((((!((map__10234_10273 == null))))?(((((map__10234_10273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10234_10273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10234_10273):map__10234_10273);
var doc_10275 = cljs.core.get.call(null,map__10234_10274__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10276 = cljs.core.get.call(null,map__10234_10274__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10272);

cljs.core.println.call(null," ",arglists_10276);

if(cljs.core.truth_(doc_10275)){
cljs.core.println.call(null," ",doc_10275);
} else {
}


var G__10277 = seq__10217_10267;
var G__10278 = chunk__10218_10268;
var G__10279 = count__10219_10269;
var G__10280 = (i__10220_10270 + (1));
seq__10217_10267 = G__10277;
chunk__10218_10268 = G__10278;
count__10219_10269 = G__10279;
i__10220_10270 = G__10280;
continue;
} else {
var temp__5804__auto___10281 = cljs.core.seq.call(null,seq__10217_10267);
if(temp__5804__auto___10281){
var seq__10217_10282__$1 = temp__5804__auto___10281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10217_10282__$1)){
var c__4556__auto___10283 = cljs.core.chunk_first.call(null,seq__10217_10282__$1);
var G__10284 = cljs.core.chunk_rest.call(null,seq__10217_10282__$1);
var G__10285 = c__4556__auto___10283;
var G__10286 = cljs.core.count.call(null,c__4556__auto___10283);
var G__10287 = (0);
seq__10217_10267 = G__10284;
chunk__10218_10268 = G__10285;
count__10219_10269 = G__10286;
i__10220_10270 = G__10287;
continue;
} else {
var vec__10236_10288 = cljs.core.first.call(null,seq__10217_10282__$1);
var name_10289 = cljs.core.nth.call(null,vec__10236_10288,(0),null);
var map__10239_10290 = cljs.core.nth.call(null,vec__10236_10288,(1),null);
var map__10239_10291__$1 = (((((!((map__10239_10290 == null))))?(((((map__10239_10290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10239_10290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10239_10290):map__10239_10290);
var doc_10292 = cljs.core.get.call(null,map__10239_10291__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10293 = cljs.core.get.call(null,map__10239_10291__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10289);

cljs.core.println.call(null," ",arglists_10293);

if(cljs.core.truth_(doc_10292)){
cljs.core.println.call(null," ",doc_10292);
} else {
}


var G__10294 = cljs.core.next.call(null,seq__10217_10282__$1);
var G__10295 = null;
var G__10296 = (0);
var G__10297 = (0);
seq__10217_10267 = G__10294;
chunk__10218_10268 = G__10295;
count__10219_10269 = G__10296;
i__10220_10270 = G__10297;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__10241 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10242 = null;
var count__10243 = (0);
var i__10244 = (0);
while(true){
if((i__10244 < count__10243)){
var role = cljs.core._nth.call(null,chunk__10242,i__10244);
var temp__5804__auto___10298__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___10298__$1)){
var spec_10299 = temp__5804__auto___10298__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10299));
} else {
}


var G__10300 = seq__10241;
var G__10301 = chunk__10242;
var G__10302 = count__10243;
var G__10303 = (i__10244 + (1));
seq__10241 = G__10300;
chunk__10242 = G__10301;
count__10243 = G__10302;
i__10244 = G__10303;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__10241);
if(temp__5804__auto____$1){
var seq__10241__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10241__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10241__$1);
var G__10304 = cljs.core.chunk_rest.call(null,seq__10241__$1);
var G__10305 = c__4556__auto__;
var G__10306 = cljs.core.count.call(null,c__4556__auto__);
var G__10307 = (0);
seq__10241 = G__10304;
chunk__10242 = G__10305;
count__10243 = G__10306;
i__10244 = G__10307;
continue;
} else {
var role = cljs.core.first.call(null,seq__10241__$1);
var temp__5804__auto___10308__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___10308__$2)){
var spec_10309 = temp__5804__auto___10308__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10309));
} else {
}


var G__10310 = cljs.core.next.call(null,seq__10241__$1);
var G__10311 = null;
var G__10312 = (0);
var G__10313 = (0);
seq__10241 = G__10310;
chunk__10242 = G__10311;
count__10243 = G__10312;
i__10244 = G__10313;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__10314 = cljs.core.conj.call(null,via,t);
var G__10315 = cljs.core.ex_cause.call(null,t);
via = G__10314;
t = G__10315;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__10318 = datafied_throwable;
var map__10318__$1 = (((((!((map__10318 == null))))?(((((map__10318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10318):map__10318);
var via = cljs.core.get.call(null,map__10318__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__10318__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__10318__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__10319 = cljs.core.last.call(null,via);
var map__10319__$1 = (((((!((map__10319 == null))))?(((((map__10319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10319):map__10319);
var type = cljs.core.get.call(null,map__10319__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__10319__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__10319__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__10320 = data;
var map__10320__$1 = (((((!((map__10320 == null))))?(((((map__10320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10320):map__10320);
var problems = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__10321 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__10321__$1 = (((((!((map__10321 == null))))?(((((map__10321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10321):map__10321);
var top_data = map__10321__$1;
var source = cljs.core.get.call(null,map__10321__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__10326 = phase;
var G__10326__$1 = (((G__10326 instanceof cljs.core.Keyword))?G__10326.fqn:null);
switch (G__10326__$1) {
case "read-source":
var map__10327 = data;
var map__10327__$1 = (((((!((map__10327 == null))))?(((((map__10327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10327):map__10327);
var line = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10327__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__10329 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__10329__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10329,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10329);
var G__10329__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10329__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10329__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10329__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10329__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__10330 = top_data;
var G__10330__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10330,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10330);
var G__10330__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10330__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10330__$1);
var G__10330__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10330__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10330__$2);
var G__10330__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10330__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10330__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10330__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10330__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__10331 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10331,(0),null);
var method = cljs.core.nth.call(null,vec__10331,(1),null);
var file = cljs.core.nth.call(null,vec__10331,(2),null);
var line = cljs.core.nth.call(null,vec__10331,(3),null);
var G__10334 = top_data;
var G__10334__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__10334,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__10334);
var G__10334__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__10334__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__10334__$1);
var G__10334__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__10334__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__10334__$2);
var G__10334__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10334__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10334__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10334__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10334__$4;
}

break;
case "execution":
var vec__10335 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10335,(0),null);
var method = cljs.core.nth.call(null,vec__10335,(1),null);
var file = cljs.core.nth.call(null,vec__10335,(2),null);
var line = cljs.core.nth.call(null,vec__10335,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__10317_SHARP_){
var or__4126__auto__ = (p1__10317_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__10317_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__10338 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__10338__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__10338,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__10338);
var G__10338__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10338__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10338__$1);
var G__10338__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__10338__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__10338__$2);
var G__10338__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__10338__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__10338__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10338__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10338__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10326__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__10342){
var map__10343 = p__10342;
var map__10343__$1 = (((((!((map__10343 == null))))?(((((map__10343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10343):map__10343);
var triage_data = map__10343__$1;
var phase = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__10343__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__10345 = phase;
var G__10345__$1 = (((G__10345 instanceof cljs.core.Keyword))?G__10345.fqn:null);
switch (G__10345__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10346_10355 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10347_10356 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10348_10357 = true;
var _STAR_print_fn_STAR__temp_val__10349_10358 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10348_10357);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10349_10358);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__10340_SHARP_){
return cljs.core.dissoc.call(null,p1__10340_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10347_10356);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10346_10355);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10350_10359 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10351_10360 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10352_10361 = true;
var _STAR_print_fn_STAR__temp_val__10353_10362 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10352_10361);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10353_10362);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__10341_SHARP_){
return cljs.core.dissoc.call(null,p1__10341_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10351_10360);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10350_10359);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10345__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
