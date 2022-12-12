// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22642 = arguments.length;
var i__4737__auto___22643 = (0);
while(true){
if((i__4737__auto___22643 < len__4736__auto___22642)){
args__4742__auto__.push((arguments[i__4737__auto___22643]));

var G__22644 = (i__4737__auto___22643 + (1));
i__4737__auto___22643 = G__22644;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq22637){
var G__22638 = cljs.core.first.call(null,seq22637);
var seq22637__$1 = cljs.core.next.call(null,seq22637);
var G__22639 = cljs.core.first.call(null,seq22637__$1);
var seq22637__$2 = cljs.core.next.call(null,seq22637__$1);
var G__22640 = cljs.core.first.call(null,seq22637__$2);
var seq22637__$3 = cljs.core.next.call(null,seq22637__$2);
var G__22641 = cljs.core.first.call(null,seq22637__$3);
var seq22637__$4 = cljs.core.next.call(null,seq22637__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22638,G__22639,G__22640,G__22641,seq22637__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22653 = arguments.length;
var i__4737__auto___22654 = (0);
while(true){
if((i__4737__auto___22654 < len__4736__auto___22653)){
args__4742__auto__.push((arguments[i__4737__auto___22654]));

var G__22655 = (i__4737__auto___22654 + (1));
i__4737__auto___22654 = G__22655;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__11708__auto__,rest__11709__auto__){
var convert_case__11710__auto__ = (function (p1__11707__11711__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__11707__11711__auto__,rest__11709__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__11708__auto__,convert_case__11710__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq22645){
var G__22646 = cljs.core.first.call(null,seq22645);
var seq22645__$1 = cljs.core.next.call(null,seq22645);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22646,seq22645__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22656 = arguments.length;
var i__4737__auto___22657 = (0);
while(true){
if((i__4737__auto___22657 < len__4736__auto___22656)){
args__4742__auto__.push((arguments[i__4737__auto___22657]));

var G__22658 = (i__4737__auto___22657 + (1));
i__4737__auto___22657 = G__22658;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq22647){
var G__22648 = cljs.core.first.call(null,seq22647);
var seq22647__$1 = cljs.core.next.call(null,seq22647);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22648,seq22647__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22659 = arguments.length;
var i__4737__auto___22660 = (0);
while(true){
if((i__4737__auto___22660 < len__4736__auto___22659)){
args__4742__auto__.push((arguments[i__4737__auto___22660]));

var G__22661 = (i__4737__auto___22660 + (1));
i__4737__auto___22660 = G__22661;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq22649){
var G__22650 = cljs.core.first.call(null,seq22649);
var seq22649__$1 = cljs.core.next.call(null,seq22649);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22650,seq22649__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22662 = arguments.length;
var i__4737__auto___22663 = (0);
while(true){
if((i__4737__auto___22663 < len__4736__auto___22662)){
args__4742__auto__.push((arguments[i__4737__auto___22663]));

var G__22664 = (i__4737__auto___22663 + (1));
i__4737__auto___22663 = G__22664;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq22651){
var G__22652 = cljs.core.first.call(null,seq22651);
var seq22651__$1 = cljs.core.next.call(null,seq22651);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22652,seq22651__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22673 = arguments.length;
var i__4737__auto___22674 = (0);
while(true){
if((i__4737__auto___22674 < len__4736__auto___22673)){
args__4742__auto__.push((arguments[i__4737__auto___22674]));

var G__22675 = (i__4737__auto___22674 + (1));
i__4737__auto___22674 = G__22675;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__11708__auto__,rest__11709__auto__){
var convert_case__11710__auto__ = (function (p1__11707__11711__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__11707__11711__auto__,rest__11709__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__11708__auto__,convert_case__11710__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq22665){
var G__22666 = cljs.core.first.call(null,seq22665);
var seq22665__$1 = cljs.core.next.call(null,seq22665);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22666,seq22665__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22676 = arguments.length;
var i__4737__auto___22677 = (0);
while(true){
if((i__4737__auto___22677 < len__4736__auto___22676)){
args__4742__auto__.push((arguments[i__4737__auto___22677]));

var G__22678 = (i__4737__auto___22677 + (1));
i__4737__auto___22677 = G__22678;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq22667){
var G__22668 = cljs.core.first.call(null,seq22667);
var seq22667__$1 = cljs.core.next.call(null,seq22667);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22668,seq22667__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22679 = arguments.length;
var i__4737__auto___22680 = (0);
while(true){
if((i__4737__auto___22680 < len__4736__auto___22679)){
args__4742__auto__.push((arguments[i__4737__auto___22680]));

var G__22681 = (i__4737__auto___22680 + (1));
i__4737__auto___22680 = G__22681;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq22669){
var G__22670 = cljs.core.first.call(null,seq22669);
var seq22669__$1 = cljs.core.next.call(null,seq22669);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22670,seq22669__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22682 = arguments.length;
var i__4737__auto___22683 = (0);
while(true){
if((i__4737__auto___22683 < len__4736__auto___22682)){
args__4742__auto__.push((arguments[i__4737__auto___22683]));

var G__22684 = (i__4737__auto___22683 + (1));
i__4737__auto___22683 = G__22684;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq22671){
var G__22672 = cljs.core.first.call(null,seq22671);
var seq22671__$1 = cljs.core.next.call(null,seq22671);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22672,seq22671__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22693 = arguments.length;
var i__4737__auto___22694 = (0);
while(true){
if((i__4737__auto___22694 < len__4736__auto___22693)){
args__4742__auto__.push((arguments[i__4737__auto___22694]));

var G__22695 = (i__4737__auto___22694 + (1));
i__4737__auto___22694 = G__22695;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__11708__auto__,rest__11709__auto__){
var convert_case__11710__auto__ = (function (p1__11707__11711__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__11707__11711__auto__,rest__11709__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__11708__auto__,convert_case__11710__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq22685){
var G__22686 = cljs.core.first.call(null,seq22685);
var seq22685__$1 = cljs.core.next.call(null,seq22685);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22686,seq22685__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22696 = arguments.length;
var i__4737__auto___22697 = (0);
while(true){
if((i__4737__auto___22697 < len__4736__auto___22696)){
args__4742__auto__.push((arguments[i__4737__auto___22697]));

var G__22698 = (i__4737__auto___22697 + (1));
i__4737__auto___22697 = G__22698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq22687){
var G__22688 = cljs.core.first.call(null,seq22687);
var seq22687__$1 = cljs.core.next.call(null,seq22687);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22688,seq22687__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22699 = arguments.length;
var i__4737__auto___22700 = (0);
while(true){
if((i__4737__auto___22700 < len__4736__auto___22699)){
args__4742__auto__.push((arguments[i__4737__auto___22700]));

var G__22701 = (i__4737__auto___22700 + (1));
i__4737__auto___22700 = G__22701;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq22689){
var G__22690 = cljs.core.first.call(null,seq22689);
var seq22689__$1 = cljs.core.next.call(null,seq22689);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22690,seq22689__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22702 = arguments.length;
var i__4737__auto___22703 = (0);
while(true){
if((i__4737__auto___22703 < len__4736__auto___22702)){
args__4742__auto__.push((arguments[i__4737__auto___22703]));

var G__22704 = (i__4737__auto___22703 + (1));
i__4737__auto___22703 = G__22704;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq22691){
var G__22692 = cljs.core.first.call(null,seq22691);
var seq22691__$1 = cljs.core.next.call(null,seq22691);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22692,seq22691__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22713 = arguments.length;
var i__4737__auto___22714 = (0);
while(true){
if((i__4737__auto___22714 < len__4736__auto___22713)){
args__4742__auto__.push((arguments[i__4737__auto___22714]));

var G__22715 = (i__4737__auto___22714 + (1));
i__4737__auto___22714 = G__22715;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__11708__auto__,rest__11709__auto__){
var convert_case__11710__auto__ = (function (p1__11707__11711__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__11707__11711__auto__,rest__11709__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__11708__auto__,convert_case__11710__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq22705){
var G__22706 = cljs.core.first.call(null,seq22705);
var seq22705__$1 = cljs.core.next.call(null,seq22705);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22706,seq22705__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22716 = arguments.length;
var i__4737__auto___22717 = (0);
while(true){
if((i__4737__auto___22717 < len__4736__auto___22716)){
args__4742__auto__.push((arguments[i__4737__auto___22717]));

var G__22718 = (i__4737__auto___22717 + (1));
i__4737__auto___22717 = G__22718;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq22707){
var G__22708 = cljs.core.first.call(null,seq22707);
var seq22707__$1 = cljs.core.next.call(null,seq22707);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22708,seq22707__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22719 = arguments.length;
var i__4737__auto___22720 = (0);
while(true){
if((i__4737__auto___22720 < len__4736__auto___22719)){
args__4742__auto__.push((arguments[i__4737__auto___22720]));

var G__22721 = (i__4737__auto___22720 + (1));
i__4737__auto___22720 = G__22721;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq22709){
var G__22710 = cljs.core.first.call(null,seq22709);
var seq22709__$1 = cljs.core.next.call(null,seq22709);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22710,seq22709__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22722 = arguments.length;
var i__4737__auto___22723 = (0);
while(true){
if((i__4737__auto___22723 < len__4736__auto___22722)){
args__4742__auto__.push((arguments[i__4737__auto___22723]));

var G__22724 = (i__4737__auto___22723 + (1));
i__4737__auto___22723 = G__22724;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq22711){
var G__22712 = cljs.core.first.call(null,seq22711);
var seq22711__$1 = cljs.core.next.call(null,seq22711);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22712,seq22711__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22733 = arguments.length;
var i__4737__auto___22734 = (0);
while(true){
if((i__4737__auto___22734 < len__4736__auto___22733)){
args__4742__auto__.push((arguments[i__4737__auto___22734]));

var G__22735 = (i__4737__auto___22734 + (1));
i__4737__auto___22734 = G__22735;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__11708__auto__,rest__11709__auto__){
var convert_case__11710__auto__ = (function (p1__11707__11711__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__11707__11711__auto__,rest__11709__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__11708__auto__,convert_case__11710__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq22725){
var G__22726 = cljs.core.first.call(null,seq22725);
var seq22725__$1 = cljs.core.next.call(null,seq22725);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22726,seq22725__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22736 = arguments.length;
var i__4737__auto___22737 = (0);
while(true){
if((i__4737__auto___22737 < len__4736__auto___22736)){
args__4742__auto__.push((arguments[i__4737__auto___22737]));

var G__22738 = (i__4737__auto___22737 + (1));
i__4737__auto___22737 = G__22738;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq22727){
var G__22728 = cljs.core.first.call(null,seq22727);
var seq22727__$1 = cljs.core.next.call(null,seq22727);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22728,seq22727__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22739 = arguments.length;
var i__4737__auto___22740 = (0);
while(true){
if((i__4737__auto___22740 < len__4736__auto___22739)){
args__4742__auto__.push((arguments[i__4737__auto___22740]));

var G__22741 = (i__4737__auto___22740 + (1));
i__4737__auto___22740 = G__22741;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq22729){
var G__22730 = cljs.core.first.call(null,seq22729);
var seq22729__$1 = cljs.core.next.call(null,seq22729);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22730,seq22729__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22742 = arguments.length;
var i__4737__auto___22743 = (0);
while(true){
if((i__4737__auto___22743 < len__4736__auto___22742)){
args__4742__auto__.push((arguments[i__4737__auto___22743]));

var G__22744 = (i__4737__auto___22743 + (1));
i__4737__auto___22743 = G__22744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq22731){
var G__22732 = cljs.core.first.call(null,seq22731);
var seq22731__$1 = cljs.core.next.call(null,seq22731);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22732,seq22731__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22753 = arguments.length;
var i__4737__auto___22754 = (0);
while(true){
if((i__4737__auto___22754 < len__4736__auto___22753)){
args__4742__auto__.push((arguments[i__4737__auto___22754]));

var G__22755 = (i__4737__auto___22754 + (1));
i__4737__auto___22754 = G__22755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__11708__auto__,rest__11709__auto__){
var convert_case__11710__auto__ = (function (p1__11707__11711__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__11707__11711__auto__,rest__11709__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__11708__auto__,convert_case__11710__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq22745){
var G__22746 = cljs.core.first.call(null,seq22745);
var seq22745__$1 = cljs.core.next.call(null,seq22745);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22746,seq22745__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22756 = arguments.length;
var i__4737__auto___22757 = (0);
while(true){
if((i__4737__auto___22757 < len__4736__auto___22756)){
args__4742__auto__.push((arguments[i__4737__auto___22757]));

var G__22758 = (i__4737__auto___22757 + (1));
i__4737__auto___22757 = G__22758;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq22747){
var G__22748 = cljs.core.first.call(null,seq22747);
var seq22747__$1 = cljs.core.next.call(null,seq22747);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22748,seq22747__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22759 = arguments.length;
var i__4737__auto___22760 = (0);
while(true){
if((i__4737__auto___22760 < len__4736__auto___22759)){
args__4742__auto__.push((arguments[i__4737__auto___22760]));

var G__22761 = (i__4737__auto___22760 + (1));
i__4737__auto___22760 = G__22761;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq22749){
var G__22750 = cljs.core.first.call(null,seq22749);
var seq22749__$1 = cljs.core.next.call(null,seq22749);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22750,seq22749__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22762 = arguments.length;
var i__4737__auto___22763 = (0);
while(true){
if((i__4737__auto___22763 < len__4736__auto___22762)){
args__4742__auto__.push((arguments[i__4737__auto___22763]));

var G__22764 = (i__4737__auto___22763 + (1));
i__4737__auto___22763 = G__22764;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq22751){
var G__22752 = cljs.core.first.call(null,seq22751);
var seq22751__$1 = cljs.core.next.call(null,seq22751);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22752,seq22751__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22773 = arguments.length;
var i__4737__auto___22774 = (0);
while(true){
if((i__4737__auto___22774 < len__4736__auto___22773)){
args__4742__auto__.push((arguments[i__4737__auto___22774]));

var G__22775 = (i__4737__auto___22774 + (1));
i__4737__auto___22774 = G__22775;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__11708__auto__,rest__11709__auto__){
var convert_case__11710__auto__ = (function (p1__11707__11711__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__11707__11711__auto__,rest__11709__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__11708__auto__,convert_case__11710__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq22765){
var G__22766 = cljs.core.first.call(null,seq22765);
var seq22765__$1 = cljs.core.next.call(null,seq22765);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22766,seq22765__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22776 = arguments.length;
var i__4737__auto___22777 = (0);
while(true){
if((i__4737__auto___22777 < len__4736__auto___22776)){
args__4742__auto__.push((arguments[i__4737__auto___22777]));

var G__22778 = (i__4737__auto___22777 + (1));
i__4737__auto___22777 = G__22778;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq22767){
var G__22768 = cljs.core.first.call(null,seq22767);
var seq22767__$1 = cljs.core.next.call(null,seq22767);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22768,seq22767__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22779 = arguments.length;
var i__4737__auto___22780 = (0);
while(true){
if((i__4737__auto___22780 < len__4736__auto___22779)){
args__4742__auto__.push((arguments[i__4737__auto___22780]));

var G__22781 = (i__4737__auto___22780 + (1));
i__4737__auto___22780 = G__22781;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq22769){
var G__22770 = cljs.core.first.call(null,seq22769);
var seq22769__$1 = cljs.core.next.call(null,seq22769);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22770,seq22769__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22782 = arguments.length;
var i__4737__auto___22783 = (0);
while(true){
if((i__4737__auto___22783 < len__4736__auto___22782)){
args__4742__auto__.push((arguments[i__4737__auto___22783]));

var G__22784 = (i__4737__auto___22783 + (1));
i__4737__auto___22783 = G__22784;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__11713__auto__,rest__11714__auto__){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__11713__auto__),rest__11714__auto__));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq22771){
var G__22772 = cljs.core.first.call(null,seq22771);
var seq22771__$1 = cljs.core.next.call(null,seq22771);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22772,seq22771__$1);
}));


//# sourceMappingURL=core.js.map
