// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20225 = arguments.length;
switch (G__20225) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20226 = (function (f,blockable,meta20227){
this.f = f;
this.blockable = blockable;
this.meta20227 = meta20227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20228,meta20227__$1){
var self__ = this;
var _20228__$1 = this;
return (new cljs.core.async.t_cljs$core$async20226(self__.f,self__.blockable,meta20227__$1));
}));

(cljs.core.async.t_cljs$core$async20226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20228){
var self__ = this;
var _20228__$1 = this;
return self__.meta20227;
}));

(cljs.core.async.t_cljs$core$async20226.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20226.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async20226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async20226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20227","meta20227",-871767941,null)], null);
}));

(cljs.core.async.t_cljs$core$async20226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20226");

(cljs.core.async.t_cljs$core$async20226.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20226.
 */
cljs.core.async.__GT_t_cljs$core$async20226 = (function cljs$core$async$__GT_t_cljs$core$async20226(f__$1,blockable__$1,meta20227){
return (new cljs.core.async.t_cljs$core$async20226(f__$1,blockable__$1,meta20227));
});

}

return (new cljs.core.async.t_cljs$core$async20226(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__20232 = arguments.length;
switch (G__20232) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__20235 = arguments.length;
switch (G__20235) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__20238 = arguments.length;
switch (G__20238) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20240 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20240);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_20240);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__20242 = arguments.length;
switch (G__20242) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___20244 = n;
var x_20245 = (0);
while(true){
if((x_20245 < n__4613__auto___20244)){
(a[x_20245] = (0));

var G__20246 = (x_20245 + (1));
x_20245 = G__20246;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20247 = (i + (1));
i = G__20247;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20248 = (function (flag,meta20249){
this.flag = flag;
this.meta20249 = meta20249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20250,meta20249__$1){
var self__ = this;
var _20250__$1 = this;
return (new cljs.core.async.t_cljs$core$async20248(self__.flag,meta20249__$1));
}));

(cljs.core.async.t_cljs$core$async20248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20250){
var self__ = this;
var _20250__$1 = this;
return self__.meta20249;
}));

(cljs.core.async.t_cljs$core$async20248.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async20248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async20248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20249","meta20249",524912449,null)], null);
}));

(cljs.core.async.t_cljs$core$async20248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20248");

(cljs.core.async.t_cljs$core$async20248.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20248.
 */
cljs.core.async.__GT_t_cljs$core$async20248 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20248(flag__$1,meta20249){
return (new cljs.core.async.t_cljs$core$async20248(flag__$1,meta20249));
});

}

return (new cljs.core.async.t_cljs$core$async20248(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20251 = (function (flag,cb,meta20252){
this.flag = flag;
this.cb = cb;
this.meta20252 = meta20252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20253,meta20252__$1){
var self__ = this;
var _20253__$1 = this;
return (new cljs.core.async.t_cljs$core$async20251(self__.flag,self__.cb,meta20252__$1));
}));

(cljs.core.async.t_cljs$core$async20251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20253){
var self__ = this;
var _20253__$1 = this;
return self__.meta20252;
}));

(cljs.core.async.t_cljs$core$async20251.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async20251.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async20251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20252","meta20252",-1187307521,null)], null);
}));

(cljs.core.async.t_cljs$core$async20251.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20251");

(cljs.core.async.t_cljs$core$async20251.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20251");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20251.
 */
cljs.core.async.__GT_t_cljs$core$async20251 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20251(flag__$1,cb__$1,meta20252){
return (new cljs.core.async.t_cljs$core$async20251(flag__$1,cb__$1,meta20252));
});

}

return (new cljs.core.async.t_cljs$core$async20251(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20254_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20254_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20255_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20255_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20256 = (i + (1));
i = G__20256;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20262 = arguments.length;
var i__4737__auto___20263 = (0);
while(true){
if((i__4737__auto___20263 < len__4736__auto___20262)){
args__4742__auto__.push((arguments[i__4737__auto___20263]));

var G__20264 = (i__4737__auto___20263 + (1));
i__4737__auto___20263 = G__20264;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20259){
var map__20260 = p__20259;
var map__20260__$1 = (((((!((map__20260 == null))))?(((((map__20260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20260):map__20260);
var opts = map__20260__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20257){
var G__20258 = cljs.core.first.call(null,seq20257);
var seq20257__$1 = cljs.core.next.call(null,seq20257);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20258,seq20257__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__20266 = arguments.length;
switch (G__20266) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17747__auto___20312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20290){
var state_val_20291 = (state_20290[(1)]);
if((state_val_20291 === (7))){
var inst_20286 = (state_20290[(2)]);
var state_20290__$1 = state_20290;
var statearr_20292_20313 = state_20290__$1;
(statearr_20292_20313[(2)] = inst_20286);

(statearr_20292_20313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (1))){
var state_20290__$1 = state_20290;
var statearr_20293_20314 = state_20290__$1;
(statearr_20293_20314[(2)] = null);

(statearr_20293_20314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (4))){
var inst_20269 = (state_20290[(7)]);
var inst_20269__$1 = (state_20290[(2)]);
var inst_20270 = (inst_20269__$1 == null);
var state_20290__$1 = (function (){var statearr_20294 = state_20290;
(statearr_20294[(7)] = inst_20269__$1);

return statearr_20294;
})();
if(cljs.core.truth_(inst_20270)){
var statearr_20295_20315 = state_20290__$1;
(statearr_20295_20315[(1)] = (5));

} else {
var statearr_20296_20316 = state_20290__$1;
(statearr_20296_20316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (13))){
var state_20290__$1 = state_20290;
var statearr_20297_20317 = state_20290__$1;
(statearr_20297_20317[(2)] = null);

(statearr_20297_20317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (6))){
var inst_20269 = (state_20290[(7)]);
var state_20290__$1 = state_20290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20290__$1,(11),to,inst_20269);
} else {
if((state_val_20291 === (3))){
var inst_20288 = (state_20290[(2)]);
var state_20290__$1 = state_20290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20290__$1,inst_20288);
} else {
if((state_val_20291 === (12))){
var state_20290__$1 = state_20290;
var statearr_20298_20318 = state_20290__$1;
(statearr_20298_20318[(2)] = null);

(statearr_20298_20318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (2))){
var state_20290__$1 = state_20290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20290__$1,(4),from);
} else {
if((state_val_20291 === (11))){
var inst_20279 = (state_20290[(2)]);
var state_20290__$1 = state_20290;
if(cljs.core.truth_(inst_20279)){
var statearr_20299_20319 = state_20290__$1;
(statearr_20299_20319[(1)] = (12));

} else {
var statearr_20300_20320 = state_20290__$1;
(statearr_20300_20320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (9))){
var state_20290__$1 = state_20290;
var statearr_20301_20321 = state_20290__$1;
(statearr_20301_20321[(2)] = null);

(statearr_20301_20321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (5))){
var state_20290__$1 = state_20290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20302_20322 = state_20290__$1;
(statearr_20302_20322[(1)] = (8));

} else {
var statearr_20303_20323 = state_20290__$1;
(statearr_20303_20323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (14))){
var inst_20284 = (state_20290[(2)]);
var state_20290__$1 = state_20290;
var statearr_20304_20324 = state_20290__$1;
(statearr_20304_20324[(2)] = inst_20284);

(statearr_20304_20324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (10))){
var inst_20276 = (state_20290[(2)]);
var state_20290__$1 = state_20290;
var statearr_20305_20325 = state_20290__$1;
(statearr_20305_20325[(2)] = inst_20276);

(statearr_20305_20325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20291 === (8))){
var inst_20273 = cljs.core.async.close_BANG_.call(null,to);
var state_20290__$1 = state_20290;
var statearr_20306_20326 = state_20290__$1;
(statearr_20306_20326[(2)] = inst_20273);

(statearr_20306_20326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_20307 = [null,null,null,null,null,null,null,null];
(statearr_20307[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_20307[(1)] = (1));

return statearr_20307;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_20290){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20308){if((e20308 instanceof Object)){
var ex__15274__auto__ = e20308;
var statearr_20309_20327 = state_20290;
(statearr_20309_20327[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20328 = state_20290;
state_20290 = G__20328;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_20290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_20290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20310 = f__17748__auto__.call(null);
(statearr_20310[(6)] = c__17747__auto___20312);

return statearr_20310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__20329){
var vec__20330 = p__20329;
var v = cljs.core.nth.call(null,vec__20330,(0),null);
var p = cljs.core.nth.call(null,vec__20330,(1),null);
var job = vec__20330;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17747__auto___20501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20337){
var state_val_20338 = (state_20337[(1)]);
if((state_val_20338 === (1))){
var state_20337__$1 = state_20337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20337__$1,(2),res,v);
} else {
if((state_val_20338 === (2))){
var inst_20334 = (state_20337[(2)]);
var inst_20335 = cljs.core.async.close_BANG_.call(null,res);
var state_20337__$1 = (function (){var statearr_20339 = state_20337;
(statearr_20339[(7)] = inst_20334);

return statearr_20339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20337__$1,inst_20335);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0 = (function (){
var statearr_20340 = [null,null,null,null,null,null,null,null];
(statearr_20340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__);

(statearr_20340[(1)] = (1));

return statearr_20340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1 = (function (state_20337){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20341){if((e20341 instanceof Object)){
var ex__15274__auto__ = e20341;
var statearr_20342_20502 = state_20337;
(statearr_20342_20502[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20503 = state_20337;
state_20337 = G__20503;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = function(state_20337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1.call(this,state_20337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20343 = f__17748__auto__.call(null);
(statearr_20343[(6)] = c__17747__auto___20501);

return statearr_20343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__20344){
var vec__20345 = p__20344;
var v = cljs.core.nth.call(null,vec__20345,(0),null);
var p = cljs.core.nth.call(null,vec__20345,(1),null);
var job = vec__20345;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___20504 = n;
var __20505 = (0);
while(true){
if((__20505 < n__4613__auto___20504)){
var G__20348_20506 = type;
var G__20348_20507__$1 = (((G__20348_20506 instanceof cljs.core.Keyword))?G__20348_20506.fqn:null);
switch (G__20348_20507__$1) {
case "compute":
var c__17747__auto___20509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20505,c__17747__auto___20509,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async){
return (function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = ((function (__20505,c__17747__auto___20509,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async){
return (function (state_20361){
var state_val_20362 = (state_20361[(1)]);
if((state_val_20362 === (1))){
var state_20361__$1 = state_20361;
var statearr_20363_20510 = state_20361__$1;
(statearr_20363_20510[(2)] = null);

(statearr_20363_20510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20362 === (2))){
var state_20361__$1 = state_20361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20361__$1,(4),jobs);
} else {
if((state_val_20362 === (3))){
var inst_20359 = (state_20361[(2)]);
var state_20361__$1 = state_20361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20361__$1,inst_20359);
} else {
if((state_val_20362 === (4))){
var inst_20351 = (state_20361[(2)]);
var inst_20352 = process.call(null,inst_20351);
var state_20361__$1 = state_20361;
if(cljs.core.truth_(inst_20352)){
var statearr_20364_20511 = state_20361__$1;
(statearr_20364_20511[(1)] = (5));

} else {
var statearr_20365_20512 = state_20361__$1;
(statearr_20365_20512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20362 === (5))){
var state_20361__$1 = state_20361;
var statearr_20366_20513 = state_20361__$1;
(statearr_20366_20513[(2)] = null);

(statearr_20366_20513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20362 === (6))){
var state_20361__$1 = state_20361;
var statearr_20367_20514 = state_20361__$1;
(statearr_20367_20514[(2)] = null);

(statearr_20367_20514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20362 === (7))){
var inst_20357 = (state_20361[(2)]);
var state_20361__$1 = state_20361;
var statearr_20368_20515 = state_20361__$1;
(statearr_20368_20515[(2)] = inst_20357);

(statearr_20368_20515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20505,c__17747__auto___20509,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async))
;
return ((function (__20505,switch__15270__auto__,c__17747__auto___20509,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0 = (function (){
var statearr_20369 = [null,null,null,null,null,null,null];
(statearr_20369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__);

(statearr_20369[(1)] = (1));

return statearr_20369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1 = (function (state_20361){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20370){if((e20370 instanceof Object)){
var ex__15274__auto__ = e20370;
var statearr_20371_20516 = state_20361;
(statearr_20371_20516[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20517 = state_20361;
state_20361 = G__20517;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = function(state_20361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1.call(this,state_20361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__;
})()
;})(__20505,switch__15270__auto__,c__17747__auto___20509,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async))
})();
var state__17749__auto__ = (function (){var statearr_20372 = f__17748__auto__.call(null);
(statearr_20372[(6)] = c__17747__auto___20509);

return statearr_20372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
});})(__20505,c__17747__auto___20509,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async))
);


break;
case "async":
var c__17747__auto___20518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20505,c__17747__auto___20518,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async){
return (function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = ((function (__20505,c__17747__auto___20518,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async){
return (function (state_20385){
var state_val_20386 = (state_20385[(1)]);
if((state_val_20386 === (1))){
var state_20385__$1 = state_20385;
var statearr_20387_20519 = state_20385__$1;
(statearr_20387_20519[(2)] = null);

(statearr_20387_20519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20386 === (2))){
var state_20385__$1 = state_20385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20385__$1,(4),jobs);
} else {
if((state_val_20386 === (3))){
var inst_20383 = (state_20385[(2)]);
var state_20385__$1 = state_20385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20385__$1,inst_20383);
} else {
if((state_val_20386 === (4))){
var inst_20375 = (state_20385[(2)]);
var inst_20376 = async.call(null,inst_20375);
var state_20385__$1 = state_20385;
if(cljs.core.truth_(inst_20376)){
var statearr_20388_20520 = state_20385__$1;
(statearr_20388_20520[(1)] = (5));

} else {
var statearr_20389_20521 = state_20385__$1;
(statearr_20389_20521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20386 === (5))){
var state_20385__$1 = state_20385;
var statearr_20390_20522 = state_20385__$1;
(statearr_20390_20522[(2)] = null);

(statearr_20390_20522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20386 === (6))){
var state_20385__$1 = state_20385;
var statearr_20391_20523 = state_20385__$1;
(statearr_20391_20523[(2)] = null);

(statearr_20391_20523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20386 === (7))){
var inst_20381 = (state_20385[(2)]);
var state_20385__$1 = state_20385;
var statearr_20392_20524 = state_20385__$1;
(statearr_20392_20524[(2)] = inst_20381);

(statearr_20392_20524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20505,c__17747__auto___20518,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async))
;
return ((function (__20505,switch__15270__auto__,c__17747__auto___20518,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0 = (function (){
var statearr_20393 = [null,null,null,null,null,null,null];
(statearr_20393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__);

(statearr_20393[(1)] = (1));

return statearr_20393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1 = (function (state_20385){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20394){if((e20394 instanceof Object)){
var ex__15274__auto__ = e20394;
var statearr_20395_20525 = state_20385;
(statearr_20395_20525[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20526 = state_20385;
state_20385 = G__20526;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = function(state_20385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1.call(this,state_20385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__;
})()
;})(__20505,switch__15270__auto__,c__17747__auto___20518,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async))
})();
var state__17749__auto__ = (function (){var statearr_20396 = f__17748__auto__.call(null);
(statearr_20396[(6)] = c__17747__auto___20518);

return statearr_20396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
});})(__20505,c__17747__auto___20518,G__20348_20506,G__20348_20507__$1,n__4613__auto___20504,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20348_20507__$1)].join('')));

}

var G__20527 = (__20505 + (1));
__20505 = G__20527;
continue;
} else {
}
break;
}

var c__17747__auto___20528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20418){
var state_val_20419 = (state_20418[(1)]);
if((state_val_20419 === (7))){
var inst_20414 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
var statearr_20420_20529 = state_20418__$1;
(statearr_20420_20529[(2)] = inst_20414);

(statearr_20420_20529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (1))){
var state_20418__$1 = state_20418;
var statearr_20421_20530 = state_20418__$1;
(statearr_20421_20530[(2)] = null);

(statearr_20421_20530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (4))){
var inst_20399 = (state_20418[(7)]);
var inst_20399__$1 = (state_20418[(2)]);
var inst_20400 = (inst_20399__$1 == null);
var state_20418__$1 = (function (){var statearr_20422 = state_20418;
(statearr_20422[(7)] = inst_20399__$1);

return statearr_20422;
})();
if(cljs.core.truth_(inst_20400)){
var statearr_20423_20531 = state_20418__$1;
(statearr_20423_20531[(1)] = (5));

} else {
var statearr_20424_20532 = state_20418__$1;
(statearr_20424_20532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (6))){
var inst_20404 = (state_20418[(8)]);
var inst_20399 = (state_20418[(7)]);
var inst_20404__$1 = cljs.core.async.chan.call(null,(1));
var inst_20405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20406 = [inst_20399,inst_20404__$1];
var inst_20407 = (new cljs.core.PersistentVector(null,2,(5),inst_20405,inst_20406,null));
var state_20418__$1 = (function (){var statearr_20425 = state_20418;
(statearr_20425[(8)] = inst_20404__$1);

return statearr_20425;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20418__$1,(8),jobs,inst_20407);
} else {
if((state_val_20419 === (3))){
var inst_20416 = (state_20418[(2)]);
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20418__$1,inst_20416);
} else {
if((state_val_20419 === (2))){
var state_20418__$1 = state_20418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20418__$1,(4),from);
} else {
if((state_val_20419 === (9))){
var inst_20411 = (state_20418[(2)]);
var state_20418__$1 = (function (){var statearr_20426 = state_20418;
(statearr_20426[(9)] = inst_20411);

return statearr_20426;
})();
var statearr_20427_20533 = state_20418__$1;
(statearr_20427_20533[(2)] = null);

(statearr_20427_20533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (5))){
var inst_20402 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20418__$1 = state_20418;
var statearr_20428_20534 = state_20418__$1;
(statearr_20428_20534[(2)] = inst_20402);

(statearr_20428_20534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20419 === (8))){
var inst_20404 = (state_20418[(8)]);
var inst_20409 = (state_20418[(2)]);
var state_20418__$1 = (function (){var statearr_20429 = state_20418;
(statearr_20429[(10)] = inst_20409);

return statearr_20429;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20418__$1,(9),results,inst_20404);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0 = (function (){
var statearr_20430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20430[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__);

(statearr_20430[(1)] = (1));

return statearr_20430;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1 = (function (state_20418){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20431){if((e20431 instanceof Object)){
var ex__15274__auto__ = e20431;
var statearr_20432_20535 = state_20418;
(statearr_20432_20535[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20536 = state_20418;
state_20418 = G__20536;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = function(state_20418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1.call(this,state_20418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20433 = f__17748__auto__.call(null);
(statearr_20433[(6)] = c__17747__auto___20528);

return statearr_20433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


var c__17747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20471){
var state_val_20472 = (state_20471[(1)]);
if((state_val_20472 === (7))){
var inst_20467 = (state_20471[(2)]);
var state_20471__$1 = state_20471;
var statearr_20473_20537 = state_20471__$1;
(statearr_20473_20537[(2)] = inst_20467);

(statearr_20473_20537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (20))){
var state_20471__$1 = state_20471;
var statearr_20474_20538 = state_20471__$1;
(statearr_20474_20538[(2)] = null);

(statearr_20474_20538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (1))){
var state_20471__$1 = state_20471;
var statearr_20475_20539 = state_20471__$1;
(statearr_20475_20539[(2)] = null);

(statearr_20475_20539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (4))){
var inst_20436 = (state_20471[(7)]);
var inst_20436__$1 = (state_20471[(2)]);
var inst_20437 = (inst_20436__$1 == null);
var state_20471__$1 = (function (){var statearr_20476 = state_20471;
(statearr_20476[(7)] = inst_20436__$1);

return statearr_20476;
})();
if(cljs.core.truth_(inst_20437)){
var statearr_20477_20540 = state_20471__$1;
(statearr_20477_20540[(1)] = (5));

} else {
var statearr_20478_20541 = state_20471__$1;
(statearr_20478_20541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (15))){
var inst_20449 = (state_20471[(8)]);
var state_20471__$1 = state_20471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20471__$1,(18),to,inst_20449);
} else {
if((state_val_20472 === (21))){
var inst_20462 = (state_20471[(2)]);
var state_20471__$1 = state_20471;
var statearr_20479_20542 = state_20471__$1;
(statearr_20479_20542[(2)] = inst_20462);

(statearr_20479_20542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (13))){
var inst_20464 = (state_20471[(2)]);
var state_20471__$1 = (function (){var statearr_20480 = state_20471;
(statearr_20480[(9)] = inst_20464);

return statearr_20480;
})();
var statearr_20481_20543 = state_20471__$1;
(statearr_20481_20543[(2)] = null);

(statearr_20481_20543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (6))){
var inst_20436 = (state_20471[(7)]);
var state_20471__$1 = state_20471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20471__$1,(11),inst_20436);
} else {
if((state_val_20472 === (17))){
var inst_20457 = (state_20471[(2)]);
var state_20471__$1 = state_20471;
if(cljs.core.truth_(inst_20457)){
var statearr_20482_20544 = state_20471__$1;
(statearr_20482_20544[(1)] = (19));

} else {
var statearr_20483_20545 = state_20471__$1;
(statearr_20483_20545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (3))){
var inst_20469 = (state_20471[(2)]);
var state_20471__$1 = state_20471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20471__$1,inst_20469);
} else {
if((state_val_20472 === (12))){
var inst_20446 = (state_20471[(10)]);
var state_20471__$1 = state_20471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20471__$1,(14),inst_20446);
} else {
if((state_val_20472 === (2))){
var state_20471__$1 = state_20471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20471__$1,(4),results);
} else {
if((state_val_20472 === (19))){
var state_20471__$1 = state_20471;
var statearr_20484_20546 = state_20471__$1;
(statearr_20484_20546[(2)] = null);

(statearr_20484_20546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (11))){
var inst_20446 = (state_20471[(2)]);
var state_20471__$1 = (function (){var statearr_20485 = state_20471;
(statearr_20485[(10)] = inst_20446);

return statearr_20485;
})();
var statearr_20486_20547 = state_20471__$1;
(statearr_20486_20547[(2)] = null);

(statearr_20486_20547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (9))){
var state_20471__$1 = state_20471;
var statearr_20487_20548 = state_20471__$1;
(statearr_20487_20548[(2)] = null);

(statearr_20487_20548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (5))){
var state_20471__$1 = state_20471;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20488_20549 = state_20471__$1;
(statearr_20488_20549[(1)] = (8));

} else {
var statearr_20489_20550 = state_20471__$1;
(statearr_20489_20550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (14))){
var inst_20449 = (state_20471[(8)]);
var inst_20449__$1 = (state_20471[(2)]);
var inst_20450 = (inst_20449__$1 == null);
var inst_20451 = cljs.core.not.call(null,inst_20450);
var state_20471__$1 = (function (){var statearr_20490 = state_20471;
(statearr_20490[(8)] = inst_20449__$1);

return statearr_20490;
})();
if(inst_20451){
var statearr_20491_20551 = state_20471__$1;
(statearr_20491_20551[(1)] = (15));

} else {
var statearr_20492_20552 = state_20471__$1;
(statearr_20492_20552[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (16))){
var state_20471__$1 = state_20471;
var statearr_20493_20553 = state_20471__$1;
(statearr_20493_20553[(2)] = false);

(statearr_20493_20553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (10))){
var inst_20443 = (state_20471[(2)]);
var state_20471__$1 = state_20471;
var statearr_20494_20554 = state_20471__$1;
(statearr_20494_20554[(2)] = inst_20443);

(statearr_20494_20554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (18))){
var inst_20454 = (state_20471[(2)]);
var state_20471__$1 = state_20471;
var statearr_20495_20555 = state_20471__$1;
(statearr_20495_20555[(2)] = inst_20454);

(statearr_20495_20555[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20472 === (8))){
var inst_20440 = cljs.core.async.close_BANG_.call(null,to);
var state_20471__$1 = state_20471;
var statearr_20496_20556 = state_20471__$1;
(statearr_20496_20556[(2)] = inst_20440);

(statearr_20496_20556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0 = (function (){
var statearr_20497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__);

(statearr_20497[(1)] = (1));

return statearr_20497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1 = (function (state_20471){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20498){if((e20498 instanceof Object)){
var ex__15274__auto__ = e20498;
var statearr_20499_20557 = state_20471;
(statearr_20499_20557[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20558 = state_20471;
state_20471 = G__20558;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__ = function(state_20471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1.call(this,state_20471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20500 = f__17748__auto__.call(null);
(statearr_20500[(6)] = c__17747__auto__);

return statearr_20500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));

return c__17747__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__20560 = arguments.length;
switch (G__20560) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__20563 = arguments.length;
switch (G__20563) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__20566 = arguments.length;
switch (G__20566) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__17747__auto___20615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20592){
var state_val_20593 = (state_20592[(1)]);
if((state_val_20593 === (7))){
var inst_20588 = (state_20592[(2)]);
var state_20592__$1 = state_20592;
var statearr_20594_20616 = state_20592__$1;
(statearr_20594_20616[(2)] = inst_20588);

(statearr_20594_20616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (1))){
var state_20592__$1 = state_20592;
var statearr_20595_20617 = state_20592__$1;
(statearr_20595_20617[(2)] = null);

(statearr_20595_20617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (4))){
var inst_20569 = (state_20592[(7)]);
var inst_20569__$1 = (state_20592[(2)]);
var inst_20570 = (inst_20569__$1 == null);
var state_20592__$1 = (function (){var statearr_20596 = state_20592;
(statearr_20596[(7)] = inst_20569__$1);

return statearr_20596;
})();
if(cljs.core.truth_(inst_20570)){
var statearr_20597_20618 = state_20592__$1;
(statearr_20597_20618[(1)] = (5));

} else {
var statearr_20598_20619 = state_20592__$1;
(statearr_20598_20619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (13))){
var state_20592__$1 = state_20592;
var statearr_20599_20620 = state_20592__$1;
(statearr_20599_20620[(2)] = null);

(statearr_20599_20620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (6))){
var inst_20569 = (state_20592[(7)]);
var inst_20575 = p.call(null,inst_20569);
var state_20592__$1 = state_20592;
if(cljs.core.truth_(inst_20575)){
var statearr_20600_20621 = state_20592__$1;
(statearr_20600_20621[(1)] = (9));

} else {
var statearr_20601_20622 = state_20592__$1;
(statearr_20601_20622[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (3))){
var inst_20590 = (state_20592[(2)]);
var state_20592__$1 = state_20592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20592__$1,inst_20590);
} else {
if((state_val_20593 === (12))){
var state_20592__$1 = state_20592;
var statearr_20602_20623 = state_20592__$1;
(statearr_20602_20623[(2)] = null);

(statearr_20602_20623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (2))){
var state_20592__$1 = state_20592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20592__$1,(4),ch);
} else {
if((state_val_20593 === (11))){
var inst_20569 = (state_20592[(7)]);
var inst_20579 = (state_20592[(2)]);
var state_20592__$1 = state_20592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20592__$1,(8),inst_20579,inst_20569);
} else {
if((state_val_20593 === (9))){
var state_20592__$1 = state_20592;
var statearr_20603_20624 = state_20592__$1;
(statearr_20603_20624[(2)] = tc);

(statearr_20603_20624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (5))){
var inst_20572 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20573 = cljs.core.async.close_BANG_.call(null,fc);
var state_20592__$1 = (function (){var statearr_20604 = state_20592;
(statearr_20604[(8)] = inst_20572);

return statearr_20604;
})();
var statearr_20605_20625 = state_20592__$1;
(statearr_20605_20625[(2)] = inst_20573);

(statearr_20605_20625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (14))){
var inst_20586 = (state_20592[(2)]);
var state_20592__$1 = state_20592;
var statearr_20606_20626 = state_20592__$1;
(statearr_20606_20626[(2)] = inst_20586);

(statearr_20606_20626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (10))){
var state_20592__$1 = state_20592;
var statearr_20607_20627 = state_20592__$1;
(statearr_20607_20627[(2)] = fc);

(statearr_20607_20627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20593 === (8))){
var inst_20581 = (state_20592[(2)]);
var state_20592__$1 = state_20592;
if(cljs.core.truth_(inst_20581)){
var statearr_20608_20628 = state_20592__$1;
(statearr_20608_20628[(1)] = (12));

} else {
var statearr_20609_20629 = state_20592__$1;
(statearr_20609_20629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_20610 = [null,null,null,null,null,null,null,null,null];
(statearr_20610[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_20610[(1)] = (1));

return statearr_20610;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_20592){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20611){if((e20611 instanceof Object)){
var ex__15274__auto__ = e20611;
var statearr_20612_20630 = state_20592;
(statearr_20612_20630[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20631 = state_20592;
state_20592 = G__20631;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_20592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_20592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20613 = f__17748__auto__.call(null);
(statearr_20613[(6)] = c__17747__auto___20615);

return statearr_20613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20652){
var state_val_20653 = (state_20652[(1)]);
if((state_val_20653 === (7))){
var inst_20648 = (state_20652[(2)]);
var state_20652__$1 = state_20652;
var statearr_20654_20672 = state_20652__$1;
(statearr_20654_20672[(2)] = inst_20648);

(statearr_20654_20672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20653 === (1))){
var inst_20632 = init;
var state_20652__$1 = (function (){var statearr_20655 = state_20652;
(statearr_20655[(7)] = inst_20632);

return statearr_20655;
})();
var statearr_20656_20673 = state_20652__$1;
(statearr_20656_20673[(2)] = null);

(statearr_20656_20673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20653 === (4))){
var inst_20635 = (state_20652[(8)]);
var inst_20635__$1 = (state_20652[(2)]);
var inst_20636 = (inst_20635__$1 == null);
var state_20652__$1 = (function (){var statearr_20657 = state_20652;
(statearr_20657[(8)] = inst_20635__$1);

return statearr_20657;
})();
if(cljs.core.truth_(inst_20636)){
var statearr_20658_20674 = state_20652__$1;
(statearr_20658_20674[(1)] = (5));

} else {
var statearr_20659_20675 = state_20652__$1;
(statearr_20659_20675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20653 === (6))){
var inst_20635 = (state_20652[(8)]);
var inst_20632 = (state_20652[(7)]);
var inst_20639 = (state_20652[(9)]);
var inst_20639__$1 = f.call(null,inst_20632,inst_20635);
var inst_20640 = cljs.core.reduced_QMARK_.call(null,inst_20639__$1);
var state_20652__$1 = (function (){var statearr_20660 = state_20652;
(statearr_20660[(9)] = inst_20639__$1);

return statearr_20660;
})();
if(inst_20640){
var statearr_20661_20676 = state_20652__$1;
(statearr_20661_20676[(1)] = (8));

} else {
var statearr_20662_20677 = state_20652__$1;
(statearr_20662_20677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20653 === (3))){
var inst_20650 = (state_20652[(2)]);
var state_20652__$1 = state_20652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20652__$1,inst_20650);
} else {
if((state_val_20653 === (2))){
var state_20652__$1 = state_20652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20652__$1,(4),ch);
} else {
if((state_val_20653 === (9))){
var inst_20639 = (state_20652[(9)]);
var inst_20632 = inst_20639;
var state_20652__$1 = (function (){var statearr_20663 = state_20652;
(statearr_20663[(7)] = inst_20632);

return statearr_20663;
})();
var statearr_20664_20678 = state_20652__$1;
(statearr_20664_20678[(2)] = null);

(statearr_20664_20678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20653 === (5))){
var inst_20632 = (state_20652[(7)]);
var state_20652__$1 = state_20652;
var statearr_20665_20679 = state_20652__$1;
(statearr_20665_20679[(2)] = inst_20632);

(statearr_20665_20679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20653 === (10))){
var inst_20646 = (state_20652[(2)]);
var state_20652__$1 = state_20652;
var statearr_20666_20680 = state_20652__$1;
(statearr_20666_20680[(2)] = inst_20646);

(statearr_20666_20680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20653 === (8))){
var inst_20639 = (state_20652[(9)]);
var inst_20642 = cljs.core.deref.call(null,inst_20639);
var state_20652__$1 = state_20652;
var statearr_20667_20681 = state_20652__$1;
(statearr_20667_20681[(2)] = inst_20642);

(statearr_20667_20681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15271__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15271__auto____0 = (function (){
var statearr_20668 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20668[(0)] = cljs$core$async$reduce_$_state_machine__15271__auto__);

(statearr_20668[(1)] = (1));

return statearr_20668;
});
var cljs$core$async$reduce_$_state_machine__15271__auto____1 = (function (state_20652){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20669){if((e20669 instanceof Object)){
var ex__15274__auto__ = e20669;
var statearr_20670_20682 = state_20652;
(statearr_20670_20682[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20683 = state_20652;
state_20652 = G__20683;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15271__auto__ = function(state_20652){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15271__auto____1.call(this,state_20652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15271__auto____0;
cljs$core$async$reduce_$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15271__auto____1;
return cljs$core$async$reduce_$_state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20671 = f__17748__auto__.call(null);
(statearr_20671[(6)] = c__17747__auto__);

return statearr_20671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));

return c__17747__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20689){
var state_val_20690 = (state_20689[(1)]);
if((state_val_20690 === (1))){
var inst_20684 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_20689__$1 = state_20689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20689__$1,(2),inst_20684);
} else {
if((state_val_20690 === (2))){
var inst_20686 = (state_20689[(2)]);
var inst_20687 = f__$1.call(null,inst_20686);
var state_20689__$1 = state_20689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20689__$1,inst_20687);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15271__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15271__auto____0 = (function (){
var statearr_20691 = [null,null,null,null,null,null,null];
(statearr_20691[(0)] = cljs$core$async$transduce_$_state_machine__15271__auto__);

(statearr_20691[(1)] = (1));

return statearr_20691;
});
var cljs$core$async$transduce_$_state_machine__15271__auto____1 = (function (state_20689){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20692){if((e20692 instanceof Object)){
var ex__15274__auto__ = e20692;
var statearr_20693_20695 = state_20689;
(statearr_20693_20695[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20696 = state_20689;
state_20689 = G__20696;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15271__auto__ = function(state_20689){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15271__auto____1.call(this,state_20689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15271__auto____0;
cljs$core$async$transduce_$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15271__auto____1;
return cljs$core$async$transduce_$_state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20694 = f__17748__auto__.call(null);
(statearr_20694[(6)] = c__17747__auto__);

return statearr_20694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));

return c__17747__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__20698 = arguments.length;
switch (G__20698) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20723){
var state_val_20724 = (state_20723[(1)]);
if((state_val_20724 === (7))){
var inst_20705 = (state_20723[(2)]);
var state_20723__$1 = state_20723;
var statearr_20725_20746 = state_20723__$1;
(statearr_20725_20746[(2)] = inst_20705);

(statearr_20725_20746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (1))){
var inst_20699 = cljs.core.seq.call(null,coll);
var inst_20700 = inst_20699;
var state_20723__$1 = (function (){var statearr_20726 = state_20723;
(statearr_20726[(7)] = inst_20700);

return statearr_20726;
})();
var statearr_20727_20747 = state_20723__$1;
(statearr_20727_20747[(2)] = null);

(statearr_20727_20747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (4))){
var inst_20700 = (state_20723[(7)]);
var inst_20703 = cljs.core.first.call(null,inst_20700);
var state_20723__$1 = state_20723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20723__$1,(7),ch,inst_20703);
} else {
if((state_val_20724 === (13))){
var inst_20717 = (state_20723[(2)]);
var state_20723__$1 = state_20723;
var statearr_20728_20748 = state_20723__$1;
(statearr_20728_20748[(2)] = inst_20717);

(statearr_20728_20748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (6))){
var inst_20708 = (state_20723[(2)]);
var state_20723__$1 = state_20723;
if(cljs.core.truth_(inst_20708)){
var statearr_20729_20749 = state_20723__$1;
(statearr_20729_20749[(1)] = (8));

} else {
var statearr_20730_20750 = state_20723__$1;
(statearr_20730_20750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (3))){
var inst_20721 = (state_20723[(2)]);
var state_20723__$1 = state_20723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20723__$1,inst_20721);
} else {
if((state_val_20724 === (12))){
var state_20723__$1 = state_20723;
var statearr_20731_20751 = state_20723__$1;
(statearr_20731_20751[(2)] = null);

(statearr_20731_20751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (2))){
var inst_20700 = (state_20723[(7)]);
var state_20723__$1 = state_20723;
if(cljs.core.truth_(inst_20700)){
var statearr_20732_20752 = state_20723__$1;
(statearr_20732_20752[(1)] = (4));

} else {
var statearr_20733_20753 = state_20723__$1;
(statearr_20733_20753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (11))){
var inst_20714 = cljs.core.async.close_BANG_.call(null,ch);
var state_20723__$1 = state_20723;
var statearr_20734_20754 = state_20723__$1;
(statearr_20734_20754[(2)] = inst_20714);

(statearr_20734_20754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (9))){
var state_20723__$1 = state_20723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20735_20755 = state_20723__$1;
(statearr_20735_20755[(1)] = (11));

} else {
var statearr_20736_20756 = state_20723__$1;
(statearr_20736_20756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (5))){
var inst_20700 = (state_20723[(7)]);
var state_20723__$1 = state_20723;
var statearr_20737_20757 = state_20723__$1;
(statearr_20737_20757[(2)] = inst_20700);

(statearr_20737_20757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (10))){
var inst_20719 = (state_20723[(2)]);
var state_20723__$1 = state_20723;
var statearr_20738_20758 = state_20723__$1;
(statearr_20738_20758[(2)] = inst_20719);

(statearr_20738_20758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20724 === (8))){
var inst_20700 = (state_20723[(7)]);
var inst_20710 = cljs.core.next.call(null,inst_20700);
var inst_20700__$1 = inst_20710;
var state_20723__$1 = (function (){var statearr_20739 = state_20723;
(statearr_20739[(7)] = inst_20700__$1);

return statearr_20739;
})();
var statearr_20740_20759 = state_20723__$1;
(statearr_20740_20759[(2)] = null);

(statearr_20740_20759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_20741 = [null,null,null,null,null,null,null,null];
(statearr_20741[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_20741[(1)] = (1));

return statearr_20741;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_20723){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20742){if((e20742 instanceof Object)){
var ex__15274__auto__ = e20742;
var statearr_20743_20760 = state_20723;
(statearr_20743_20760[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20761 = state_20723;
state_20723 = G__20761;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_20723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_20723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20744 = f__17748__auto__.call(null);
(statearr_20744[(6)] = c__17747__auto__);

return statearr_20744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));

return c__17747__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20762 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20762.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20763 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20763.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20764 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20764.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20765 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20765.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20766 = (function (ch,cs,meta20767){
this.ch = ch;
this.cs = cs;
this.meta20767 = meta20767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20768,meta20767__$1){
var self__ = this;
var _20768__$1 = this;
return (new cljs.core.async.t_cljs$core$async20766(self__.ch,self__.cs,meta20767__$1));
}));

(cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20768){
var self__ = this;
var _20768__$1 = this;
return self__.meta20767;
}));

(cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async20766.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async20766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20767","meta20767",378789664,null)], null);
}));

(cljs.core.async.t_cljs$core$async20766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20766");

(cljs.core.async.t_cljs$core$async20766.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async20766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20766.
 */
cljs.core.async.__GT_t_cljs$core$async20766 = (function cljs$core$async$mult_$___GT_t_cljs$core$async20766(ch__$1,cs__$1,meta20767){
return (new cljs.core.async.t_cljs$core$async20766(ch__$1,cs__$1,meta20767));
});

}

return (new cljs.core.async.t_cljs$core$async20766(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__17747__auto___20988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_20903){
var state_val_20904 = (state_20903[(1)]);
if((state_val_20904 === (7))){
var inst_20899 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20905_20989 = state_20903__$1;
(statearr_20905_20989[(2)] = inst_20899);

(statearr_20905_20989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (20))){
var inst_20802 = (state_20903[(7)]);
var inst_20814 = cljs.core.first.call(null,inst_20802);
var inst_20815 = cljs.core.nth.call(null,inst_20814,(0),null);
var inst_20816 = cljs.core.nth.call(null,inst_20814,(1),null);
var state_20903__$1 = (function (){var statearr_20906 = state_20903;
(statearr_20906[(8)] = inst_20815);

return statearr_20906;
})();
if(cljs.core.truth_(inst_20816)){
var statearr_20907_20990 = state_20903__$1;
(statearr_20907_20990[(1)] = (22));

} else {
var statearr_20908_20991 = state_20903__$1;
(statearr_20908_20991[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (27))){
var inst_20846 = (state_20903[(9)]);
var inst_20844 = (state_20903[(10)]);
var inst_20771 = (state_20903[(11)]);
var inst_20851 = (state_20903[(12)]);
var inst_20851__$1 = cljs.core._nth.call(null,inst_20844,inst_20846);
var inst_20852 = cljs.core.async.put_BANG_.call(null,inst_20851__$1,inst_20771,done);
var state_20903__$1 = (function (){var statearr_20909 = state_20903;
(statearr_20909[(12)] = inst_20851__$1);

return statearr_20909;
})();
if(cljs.core.truth_(inst_20852)){
var statearr_20910_20992 = state_20903__$1;
(statearr_20910_20992[(1)] = (30));

} else {
var statearr_20911_20993 = state_20903__$1;
(statearr_20911_20993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (1))){
var state_20903__$1 = state_20903;
var statearr_20912_20994 = state_20903__$1;
(statearr_20912_20994[(2)] = null);

(statearr_20912_20994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (24))){
var inst_20802 = (state_20903[(7)]);
var inst_20821 = (state_20903[(2)]);
var inst_20822 = cljs.core.next.call(null,inst_20802);
var inst_20780 = inst_20822;
var inst_20781 = null;
var inst_20782 = (0);
var inst_20783 = (0);
var state_20903__$1 = (function (){var statearr_20913 = state_20903;
(statearr_20913[(13)] = inst_20781);

(statearr_20913[(14)] = inst_20783);

(statearr_20913[(15)] = inst_20782);

(statearr_20913[(16)] = inst_20780);

(statearr_20913[(17)] = inst_20821);

return statearr_20913;
})();
var statearr_20914_20995 = state_20903__$1;
(statearr_20914_20995[(2)] = null);

(statearr_20914_20995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (39))){
var state_20903__$1 = state_20903;
var statearr_20918_20996 = state_20903__$1;
(statearr_20918_20996[(2)] = null);

(statearr_20918_20996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (4))){
var inst_20771 = (state_20903[(11)]);
var inst_20771__$1 = (state_20903[(2)]);
var inst_20772 = (inst_20771__$1 == null);
var state_20903__$1 = (function (){var statearr_20919 = state_20903;
(statearr_20919[(11)] = inst_20771__$1);

return statearr_20919;
})();
if(cljs.core.truth_(inst_20772)){
var statearr_20920_20997 = state_20903__$1;
(statearr_20920_20997[(1)] = (5));

} else {
var statearr_20921_20998 = state_20903__$1;
(statearr_20921_20998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (15))){
var inst_20781 = (state_20903[(13)]);
var inst_20783 = (state_20903[(14)]);
var inst_20782 = (state_20903[(15)]);
var inst_20780 = (state_20903[(16)]);
var inst_20798 = (state_20903[(2)]);
var inst_20799 = (inst_20783 + (1));
var tmp20915 = inst_20781;
var tmp20916 = inst_20782;
var tmp20917 = inst_20780;
var inst_20780__$1 = tmp20917;
var inst_20781__$1 = tmp20915;
var inst_20782__$1 = tmp20916;
var inst_20783__$1 = inst_20799;
var state_20903__$1 = (function (){var statearr_20922 = state_20903;
(statearr_20922[(13)] = inst_20781__$1);

(statearr_20922[(18)] = inst_20798);

(statearr_20922[(14)] = inst_20783__$1);

(statearr_20922[(15)] = inst_20782__$1);

(statearr_20922[(16)] = inst_20780__$1);

return statearr_20922;
})();
var statearr_20923_20999 = state_20903__$1;
(statearr_20923_20999[(2)] = null);

(statearr_20923_20999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (21))){
var inst_20825 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20927_21000 = state_20903__$1;
(statearr_20927_21000[(2)] = inst_20825);

(statearr_20927_21000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (31))){
var inst_20851 = (state_20903[(12)]);
var inst_20855 = done.call(null,null);
var inst_20856 = cljs.core.async.untap_STAR_.call(null,m,inst_20851);
var state_20903__$1 = (function (){var statearr_20928 = state_20903;
(statearr_20928[(19)] = inst_20855);

return statearr_20928;
})();
var statearr_20929_21001 = state_20903__$1;
(statearr_20929_21001[(2)] = inst_20856);

(statearr_20929_21001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (32))){
var inst_20846 = (state_20903[(9)]);
var inst_20844 = (state_20903[(10)]);
var inst_20843 = (state_20903[(20)]);
var inst_20845 = (state_20903[(21)]);
var inst_20858 = (state_20903[(2)]);
var inst_20859 = (inst_20846 + (1));
var tmp20924 = inst_20844;
var tmp20925 = inst_20843;
var tmp20926 = inst_20845;
var inst_20843__$1 = tmp20925;
var inst_20844__$1 = tmp20924;
var inst_20845__$1 = tmp20926;
var inst_20846__$1 = inst_20859;
var state_20903__$1 = (function (){var statearr_20930 = state_20903;
(statearr_20930[(22)] = inst_20858);

(statearr_20930[(9)] = inst_20846__$1);

(statearr_20930[(10)] = inst_20844__$1);

(statearr_20930[(20)] = inst_20843__$1);

(statearr_20930[(21)] = inst_20845__$1);

return statearr_20930;
})();
var statearr_20931_21002 = state_20903__$1;
(statearr_20931_21002[(2)] = null);

(statearr_20931_21002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (40))){
var inst_20871 = (state_20903[(23)]);
var inst_20875 = done.call(null,null);
var inst_20876 = cljs.core.async.untap_STAR_.call(null,m,inst_20871);
var state_20903__$1 = (function (){var statearr_20932 = state_20903;
(statearr_20932[(24)] = inst_20875);

return statearr_20932;
})();
var statearr_20933_21003 = state_20903__$1;
(statearr_20933_21003[(2)] = inst_20876);

(statearr_20933_21003[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (33))){
var inst_20862 = (state_20903[(25)]);
var inst_20864 = cljs.core.chunked_seq_QMARK_.call(null,inst_20862);
var state_20903__$1 = state_20903;
if(inst_20864){
var statearr_20934_21004 = state_20903__$1;
(statearr_20934_21004[(1)] = (36));

} else {
var statearr_20935_21005 = state_20903__$1;
(statearr_20935_21005[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (13))){
var inst_20792 = (state_20903[(26)]);
var inst_20795 = cljs.core.async.close_BANG_.call(null,inst_20792);
var state_20903__$1 = state_20903;
var statearr_20936_21006 = state_20903__$1;
(statearr_20936_21006[(2)] = inst_20795);

(statearr_20936_21006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (22))){
var inst_20815 = (state_20903[(8)]);
var inst_20818 = cljs.core.async.close_BANG_.call(null,inst_20815);
var state_20903__$1 = state_20903;
var statearr_20937_21007 = state_20903__$1;
(statearr_20937_21007[(2)] = inst_20818);

(statearr_20937_21007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (36))){
var inst_20862 = (state_20903[(25)]);
var inst_20866 = cljs.core.chunk_first.call(null,inst_20862);
var inst_20867 = cljs.core.chunk_rest.call(null,inst_20862);
var inst_20868 = cljs.core.count.call(null,inst_20866);
var inst_20843 = inst_20867;
var inst_20844 = inst_20866;
var inst_20845 = inst_20868;
var inst_20846 = (0);
var state_20903__$1 = (function (){var statearr_20938 = state_20903;
(statearr_20938[(9)] = inst_20846);

(statearr_20938[(10)] = inst_20844);

(statearr_20938[(20)] = inst_20843);

(statearr_20938[(21)] = inst_20845);

return statearr_20938;
})();
var statearr_20939_21008 = state_20903__$1;
(statearr_20939_21008[(2)] = null);

(statearr_20939_21008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (41))){
var inst_20862 = (state_20903[(25)]);
var inst_20878 = (state_20903[(2)]);
var inst_20879 = cljs.core.next.call(null,inst_20862);
var inst_20843 = inst_20879;
var inst_20844 = null;
var inst_20845 = (0);
var inst_20846 = (0);
var state_20903__$1 = (function (){var statearr_20940 = state_20903;
(statearr_20940[(9)] = inst_20846);

(statearr_20940[(10)] = inst_20844);

(statearr_20940[(20)] = inst_20843);

(statearr_20940[(27)] = inst_20878);

(statearr_20940[(21)] = inst_20845);

return statearr_20940;
})();
var statearr_20941_21009 = state_20903__$1;
(statearr_20941_21009[(2)] = null);

(statearr_20941_21009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (43))){
var state_20903__$1 = state_20903;
var statearr_20942_21010 = state_20903__$1;
(statearr_20942_21010[(2)] = null);

(statearr_20942_21010[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (29))){
var inst_20887 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20943_21011 = state_20903__$1;
(statearr_20943_21011[(2)] = inst_20887);

(statearr_20943_21011[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (44))){
var inst_20896 = (state_20903[(2)]);
var state_20903__$1 = (function (){var statearr_20944 = state_20903;
(statearr_20944[(28)] = inst_20896);

return statearr_20944;
})();
var statearr_20945_21012 = state_20903__$1;
(statearr_20945_21012[(2)] = null);

(statearr_20945_21012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (6))){
var inst_20835 = (state_20903[(29)]);
var inst_20834 = cljs.core.deref.call(null,cs);
var inst_20835__$1 = cljs.core.keys.call(null,inst_20834);
var inst_20836 = cljs.core.count.call(null,inst_20835__$1);
var inst_20837 = cljs.core.reset_BANG_.call(null,dctr,inst_20836);
var inst_20842 = cljs.core.seq.call(null,inst_20835__$1);
var inst_20843 = inst_20842;
var inst_20844 = null;
var inst_20845 = (0);
var inst_20846 = (0);
var state_20903__$1 = (function (){var statearr_20946 = state_20903;
(statearr_20946[(9)] = inst_20846);

(statearr_20946[(10)] = inst_20844);

(statearr_20946[(20)] = inst_20843);

(statearr_20946[(30)] = inst_20837);

(statearr_20946[(21)] = inst_20845);

(statearr_20946[(29)] = inst_20835__$1);

return statearr_20946;
})();
var statearr_20947_21013 = state_20903__$1;
(statearr_20947_21013[(2)] = null);

(statearr_20947_21013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (28))){
var inst_20862 = (state_20903[(25)]);
var inst_20843 = (state_20903[(20)]);
var inst_20862__$1 = cljs.core.seq.call(null,inst_20843);
var state_20903__$1 = (function (){var statearr_20948 = state_20903;
(statearr_20948[(25)] = inst_20862__$1);

return statearr_20948;
})();
if(inst_20862__$1){
var statearr_20949_21014 = state_20903__$1;
(statearr_20949_21014[(1)] = (33));

} else {
var statearr_20950_21015 = state_20903__$1;
(statearr_20950_21015[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (25))){
var inst_20846 = (state_20903[(9)]);
var inst_20845 = (state_20903[(21)]);
var inst_20848 = (inst_20846 < inst_20845);
var inst_20849 = inst_20848;
var state_20903__$1 = state_20903;
if(cljs.core.truth_(inst_20849)){
var statearr_20951_21016 = state_20903__$1;
(statearr_20951_21016[(1)] = (27));

} else {
var statearr_20952_21017 = state_20903__$1;
(statearr_20952_21017[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (34))){
var state_20903__$1 = state_20903;
var statearr_20953_21018 = state_20903__$1;
(statearr_20953_21018[(2)] = null);

(statearr_20953_21018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (17))){
var state_20903__$1 = state_20903;
var statearr_20954_21019 = state_20903__$1;
(statearr_20954_21019[(2)] = null);

(statearr_20954_21019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (3))){
var inst_20901 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20903__$1,inst_20901);
} else {
if((state_val_20904 === (12))){
var inst_20830 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20955_21020 = state_20903__$1;
(statearr_20955_21020[(2)] = inst_20830);

(statearr_20955_21020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (2))){
var state_20903__$1 = state_20903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20903__$1,(4),ch);
} else {
if((state_val_20904 === (23))){
var state_20903__$1 = state_20903;
var statearr_20956_21021 = state_20903__$1;
(statearr_20956_21021[(2)] = null);

(statearr_20956_21021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (35))){
var inst_20885 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20957_21022 = state_20903__$1;
(statearr_20957_21022[(2)] = inst_20885);

(statearr_20957_21022[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (19))){
var inst_20802 = (state_20903[(7)]);
var inst_20806 = cljs.core.chunk_first.call(null,inst_20802);
var inst_20807 = cljs.core.chunk_rest.call(null,inst_20802);
var inst_20808 = cljs.core.count.call(null,inst_20806);
var inst_20780 = inst_20807;
var inst_20781 = inst_20806;
var inst_20782 = inst_20808;
var inst_20783 = (0);
var state_20903__$1 = (function (){var statearr_20958 = state_20903;
(statearr_20958[(13)] = inst_20781);

(statearr_20958[(14)] = inst_20783);

(statearr_20958[(15)] = inst_20782);

(statearr_20958[(16)] = inst_20780);

return statearr_20958;
})();
var statearr_20959_21023 = state_20903__$1;
(statearr_20959_21023[(2)] = null);

(statearr_20959_21023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (11))){
var inst_20802 = (state_20903[(7)]);
var inst_20780 = (state_20903[(16)]);
var inst_20802__$1 = cljs.core.seq.call(null,inst_20780);
var state_20903__$1 = (function (){var statearr_20960 = state_20903;
(statearr_20960[(7)] = inst_20802__$1);

return statearr_20960;
})();
if(inst_20802__$1){
var statearr_20961_21024 = state_20903__$1;
(statearr_20961_21024[(1)] = (16));

} else {
var statearr_20962_21025 = state_20903__$1;
(statearr_20962_21025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (9))){
var inst_20832 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20963_21026 = state_20903__$1;
(statearr_20963_21026[(2)] = inst_20832);

(statearr_20963_21026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (5))){
var inst_20778 = cljs.core.deref.call(null,cs);
var inst_20779 = cljs.core.seq.call(null,inst_20778);
var inst_20780 = inst_20779;
var inst_20781 = null;
var inst_20782 = (0);
var inst_20783 = (0);
var state_20903__$1 = (function (){var statearr_20964 = state_20903;
(statearr_20964[(13)] = inst_20781);

(statearr_20964[(14)] = inst_20783);

(statearr_20964[(15)] = inst_20782);

(statearr_20964[(16)] = inst_20780);

return statearr_20964;
})();
var statearr_20965_21027 = state_20903__$1;
(statearr_20965_21027[(2)] = null);

(statearr_20965_21027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (14))){
var state_20903__$1 = state_20903;
var statearr_20966_21028 = state_20903__$1;
(statearr_20966_21028[(2)] = null);

(statearr_20966_21028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (45))){
var inst_20893 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20967_21029 = state_20903__$1;
(statearr_20967_21029[(2)] = inst_20893);

(statearr_20967_21029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (26))){
var inst_20835 = (state_20903[(29)]);
var inst_20889 = (state_20903[(2)]);
var inst_20890 = cljs.core.seq.call(null,inst_20835);
var state_20903__$1 = (function (){var statearr_20968 = state_20903;
(statearr_20968[(31)] = inst_20889);

return statearr_20968;
})();
if(inst_20890){
var statearr_20969_21030 = state_20903__$1;
(statearr_20969_21030[(1)] = (42));

} else {
var statearr_20970_21031 = state_20903__$1;
(statearr_20970_21031[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (16))){
var inst_20802 = (state_20903[(7)]);
var inst_20804 = cljs.core.chunked_seq_QMARK_.call(null,inst_20802);
var state_20903__$1 = state_20903;
if(inst_20804){
var statearr_20971_21032 = state_20903__$1;
(statearr_20971_21032[(1)] = (19));

} else {
var statearr_20972_21033 = state_20903__$1;
(statearr_20972_21033[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (38))){
var inst_20882 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20973_21034 = state_20903__$1;
(statearr_20973_21034[(2)] = inst_20882);

(statearr_20973_21034[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (30))){
var state_20903__$1 = state_20903;
var statearr_20974_21035 = state_20903__$1;
(statearr_20974_21035[(2)] = null);

(statearr_20974_21035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (10))){
var inst_20781 = (state_20903[(13)]);
var inst_20783 = (state_20903[(14)]);
var inst_20791 = cljs.core._nth.call(null,inst_20781,inst_20783);
var inst_20792 = cljs.core.nth.call(null,inst_20791,(0),null);
var inst_20793 = cljs.core.nth.call(null,inst_20791,(1),null);
var state_20903__$1 = (function (){var statearr_20975 = state_20903;
(statearr_20975[(26)] = inst_20792);

return statearr_20975;
})();
if(cljs.core.truth_(inst_20793)){
var statearr_20976_21036 = state_20903__$1;
(statearr_20976_21036[(1)] = (13));

} else {
var statearr_20977_21037 = state_20903__$1;
(statearr_20977_21037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (18))){
var inst_20828 = (state_20903[(2)]);
var state_20903__$1 = state_20903;
var statearr_20978_21038 = state_20903__$1;
(statearr_20978_21038[(2)] = inst_20828);

(statearr_20978_21038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (42))){
var state_20903__$1 = state_20903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20903__$1,(45),dchan);
} else {
if((state_val_20904 === (37))){
var inst_20862 = (state_20903[(25)]);
var inst_20771 = (state_20903[(11)]);
var inst_20871 = (state_20903[(23)]);
var inst_20871__$1 = cljs.core.first.call(null,inst_20862);
var inst_20872 = cljs.core.async.put_BANG_.call(null,inst_20871__$1,inst_20771,done);
var state_20903__$1 = (function (){var statearr_20979 = state_20903;
(statearr_20979[(23)] = inst_20871__$1);

return statearr_20979;
})();
if(cljs.core.truth_(inst_20872)){
var statearr_20980_21039 = state_20903__$1;
(statearr_20980_21039[(1)] = (39));

} else {
var statearr_20981_21040 = state_20903__$1;
(statearr_20981_21040[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20904 === (8))){
var inst_20783 = (state_20903[(14)]);
var inst_20782 = (state_20903[(15)]);
var inst_20785 = (inst_20783 < inst_20782);
var inst_20786 = inst_20785;
var state_20903__$1 = state_20903;
if(cljs.core.truth_(inst_20786)){
var statearr_20982_21041 = state_20903__$1;
(statearr_20982_21041[(1)] = (10));

} else {
var statearr_20983_21042 = state_20903__$1;
(statearr_20983_21042[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15271__auto__ = null;
var cljs$core$async$mult_$_state_machine__15271__auto____0 = (function (){
var statearr_20984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20984[(0)] = cljs$core$async$mult_$_state_machine__15271__auto__);

(statearr_20984[(1)] = (1));

return statearr_20984;
});
var cljs$core$async$mult_$_state_machine__15271__auto____1 = (function (state_20903){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_20903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e20985){if((e20985 instanceof Object)){
var ex__15274__auto__ = e20985;
var statearr_20986_21043 = state_20903;
(statearr_20986_21043[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21044 = state_20903;
state_20903 = G__21044;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15271__auto__ = function(state_20903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15271__auto____1.call(this,state_20903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15271__auto____0;
cljs$core$async$mult_$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15271__auto____1;
return cljs$core$async$mult_$_state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_20987 = f__17748__auto__.call(null);
(statearr_20987[(6)] = c__17747__auto___20988);

return statearr_20987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__21046 = arguments.length;
switch (G__21046) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21048 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21048.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21049 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21049.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21050 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21050.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21051 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21051.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21052 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21052.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21063 = arguments.length;
var i__4737__auto___21064 = (0);
while(true){
if((i__4737__auto___21064 < len__4736__auto___21063)){
args__4742__auto__.push((arguments[i__4737__auto___21064]));

var G__21065 = (i__4737__auto___21064 + (1));
i__4737__auto___21064 = G__21065;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21057){
var map__21058 = p__21057;
var map__21058__$1 = (((((!((map__21058 == null))))?(((((map__21058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21058):map__21058);
var opts = map__21058__$1;
var statearr_21060_21066 = state;
(statearr_21060_21066[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_21061_21067 = state;
(statearr_21061_21067[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_21062_21068 = state;
(statearr_21062_21068[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21053){
var G__21054 = cljs.core.first.call(null,seq21053);
var seq21053__$1 = cljs.core.next.call(null,seq21053);
var G__21055 = cljs.core.first.call(null,seq21053__$1);
var seq21053__$2 = cljs.core.next.call(null,seq21053__$1);
var G__21056 = cljs.core.first.call(null,seq21053__$2);
var seq21053__$3 = cljs.core.next.call(null,seq21053__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21054,G__21055,G__21056,seq21053__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21069 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21070){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21070 = meta21070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21071,meta21070__$1){
var self__ = this;
var _21071__$1 = this;
return (new cljs.core.async.t_cljs$core$async21069(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21070__$1));
}));

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21071){
var self__ = this;
var _21071__$1 = this;
return self__.meta21070;
}));

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async21069.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async21069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21070","meta21070",-866478205,null)], null);
}));

(cljs.core.async.t_cljs$core$async21069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21069");

(cljs.core.async.t_cljs$core$async21069.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async21069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21069.
 */
cljs.core.async.__GT_t_cljs$core$async21069 = (function cljs$core$async$mix_$___GT_t_cljs$core$async21069(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21070){
return (new cljs.core.async.t_cljs$core$async21069(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21070));
});

}

return (new cljs.core.async.t_cljs$core$async21069(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17747__auto___21233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21173){
var state_val_21174 = (state_21173[(1)]);
if((state_val_21174 === (7))){
var inst_21088 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
var statearr_21175_21234 = state_21173__$1;
(statearr_21175_21234[(2)] = inst_21088);

(statearr_21175_21234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (20))){
var inst_21100 = (state_21173[(7)]);
var state_21173__$1 = state_21173;
var statearr_21176_21235 = state_21173__$1;
(statearr_21176_21235[(2)] = inst_21100);

(statearr_21176_21235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (27))){
var state_21173__$1 = state_21173;
var statearr_21177_21236 = state_21173__$1;
(statearr_21177_21236[(2)] = null);

(statearr_21177_21236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (1))){
var inst_21075 = (state_21173[(8)]);
var inst_21075__$1 = calc_state.call(null);
var inst_21077 = (inst_21075__$1 == null);
var inst_21078 = cljs.core.not.call(null,inst_21077);
var state_21173__$1 = (function (){var statearr_21178 = state_21173;
(statearr_21178[(8)] = inst_21075__$1);

return statearr_21178;
})();
if(inst_21078){
var statearr_21179_21237 = state_21173__$1;
(statearr_21179_21237[(1)] = (2));

} else {
var statearr_21180_21238 = state_21173__$1;
(statearr_21180_21238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (24))){
var inst_21124 = (state_21173[(9)]);
var inst_21133 = (state_21173[(10)]);
var inst_21147 = (state_21173[(11)]);
var inst_21147__$1 = inst_21124.call(null,inst_21133);
var state_21173__$1 = (function (){var statearr_21181 = state_21173;
(statearr_21181[(11)] = inst_21147__$1);

return statearr_21181;
})();
if(cljs.core.truth_(inst_21147__$1)){
var statearr_21182_21239 = state_21173__$1;
(statearr_21182_21239[(1)] = (29));

} else {
var statearr_21183_21240 = state_21173__$1;
(statearr_21183_21240[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (4))){
var inst_21091 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
if(cljs.core.truth_(inst_21091)){
var statearr_21184_21241 = state_21173__$1;
(statearr_21184_21241[(1)] = (8));

} else {
var statearr_21185_21242 = state_21173__$1;
(statearr_21185_21242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (15))){
var inst_21118 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
if(cljs.core.truth_(inst_21118)){
var statearr_21186_21243 = state_21173__$1;
(statearr_21186_21243[(1)] = (19));

} else {
var statearr_21187_21244 = state_21173__$1;
(statearr_21187_21244[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (21))){
var inst_21123 = (state_21173[(12)]);
var inst_21123__$1 = (state_21173[(2)]);
var inst_21124 = cljs.core.get.call(null,inst_21123__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21125 = cljs.core.get.call(null,inst_21123__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21126 = cljs.core.get.call(null,inst_21123__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21173__$1 = (function (){var statearr_21188 = state_21173;
(statearr_21188[(13)] = inst_21125);

(statearr_21188[(12)] = inst_21123__$1);

(statearr_21188[(9)] = inst_21124);

return statearr_21188;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21173__$1,(22),inst_21126);
} else {
if((state_val_21174 === (31))){
var inst_21155 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
if(cljs.core.truth_(inst_21155)){
var statearr_21189_21245 = state_21173__$1;
(statearr_21189_21245[(1)] = (32));

} else {
var statearr_21190_21246 = state_21173__$1;
(statearr_21190_21246[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (32))){
var inst_21132 = (state_21173[(14)]);
var state_21173__$1 = state_21173;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21173__$1,(35),out,inst_21132);
} else {
if((state_val_21174 === (33))){
var inst_21123 = (state_21173[(12)]);
var inst_21100 = inst_21123;
var state_21173__$1 = (function (){var statearr_21191 = state_21173;
(statearr_21191[(7)] = inst_21100);

return statearr_21191;
})();
var statearr_21192_21247 = state_21173__$1;
(statearr_21192_21247[(2)] = null);

(statearr_21192_21247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (13))){
var inst_21100 = (state_21173[(7)]);
var inst_21107 = inst_21100.cljs$lang$protocol_mask$partition0$;
var inst_21108 = (inst_21107 & (64));
var inst_21109 = inst_21100.cljs$core$ISeq$;
var inst_21110 = (cljs.core.PROTOCOL_SENTINEL === inst_21109);
var inst_21111 = ((inst_21108) || (inst_21110));
var state_21173__$1 = state_21173;
if(cljs.core.truth_(inst_21111)){
var statearr_21193_21248 = state_21173__$1;
(statearr_21193_21248[(1)] = (16));

} else {
var statearr_21194_21249 = state_21173__$1;
(statearr_21194_21249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (22))){
var inst_21132 = (state_21173[(14)]);
var inst_21133 = (state_21173[(10)]);
var inst_21131 = (state_21173[(2)]);
var inst_21132__$1 = cljs.core.nth.call(null,inst_21131,(0),null);
var inst_21133__$1 = cljs.core.nth.call(null,inst_21131,(1),null);
var inst_21134 = (inst_21132__$1 == null);
var inst_21135 = cljs.core._EQ_.call(null,inst_21133__$1,change);
var inst_21136 = ((inst_21134) || (inst_21135));
var state_21173__$1 = (function (){var statearr_21195 = state_21173;
(statearr_21195[(14)] = inst_21132__$1);

(statearr_21195[(10)] = inst_21133__$1);

return statearr_21195;
})();
if(cljs.core.truth_(inst_21136)){
var statearr_21196_21250 = state_21173__$1;
(statearr_21196_21250[(1)] = (23));

} else {
var statearr_21197_21251 = state_21173__$1;
(statearr_21197_21251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (36))){
var inst_21123 = (state_21173[(12)]);
var inst_21100 = inst_21123;
var state_21173__$1 = (function (){var statearr_21198 = state_21173;
(statearr_21198[(7)] = inst_21100);

return statearr_21198;
})();
var statearr_21199_21252 = state_21173__$1;
(statearr_21199_21252[(2)] = null);

(statearr_21199_21252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (29))){
var inst_21147 = (state_21173[(11)]);
var state_21173__$1 = state_21173;
var statearr_21200_21253 = state_21173__$1;
(statearr_21200_21253[(2)] = inst_21147);

(statearr_21200_21253[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (6))){
var state_21173__$1 = state_21173;
var statearr_21201_21254 = state_21173__$1;
(statearr_21201_21254[(2)] = false);

(statearr_21201_21254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (28))){
var inst_21143 = (state_21173[(2)]);
var inst_21144 = calc_state.call(null);
var inst_21100 = inst_21144;
var state_21173__$1 = (function (){var statearr_21202 = state_21173;
(statearr_21202[(15)] = inst_21143);

(statearr_21202[(7)] = inst_21100);

return statearr_21202;
})();
var statearr_21203_21255 = state_21173__$1;
(statearr_21203_21255[(2)] = null);

(statearr_21203_21255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (25))){
var inst_21169 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
var statearr_21204_21256 = state_21173__$1;
(statearr_21204_21256[(2)] = inst_21169);

(statearr_21204_21256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (34))){
var inst_21167 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
var statearr_21205_21257 = state_21173__$1;
(statearr_21205_21257[(2)] = inst_21167);

(statearr_21205_21257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (17))){
var state_21173__$1 = state_21173;
var statearr_21206_21258 = state_21173__$1;
(statearr_21206_21258[(2)] = false);

(statearr_21206_21258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (3))){
var state_21173__$1 = state_21173;
var statearr_21207_21259 = state_21173__$1;
(statearr_21207_21259[(2)] = false);

(statearr_21207_21259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (12))){
var inst_21171 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21173__$1,inst_21171);
} else {
if((state_val_21174 === (2))){
var inst_21075 = (state_21173[(8)]);
var inst_21080 = inst_21075.cljs$lang$protocol_mask$partition0$;
var inst_21081 = (inst_21080 & (64));
var inst_21082 = inst_21075.cljs$core$ISeq$;
var inst_21083 = (cljs.core.PROTOCOL_SENTINEL === inst_21082);
var inst_21084 = ((inst_21081) || (inst_21083));
var state_21173__$1 = state_21173;
if(cljs.core.truth_(inst_21084)){
var statearr_21208_21260 = state_21173__$1;
(statearr_21208_21260[(1)] = (5));

} else {
var statearr_21209_21261 = state_21173__$1;
(statearr_21209_21261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (23))){
var inst_21132 = (state_21173[(14)]);
var inst_21138 = (inst_21132 == null);
var state_21173__$1 = state_21173;
if(cljs.core.truth_(inst_21138)){
var statearr_21210_21262 = state_21173__$1;
(statearr_21210_21262[(1)] = (26));

} else {
var statearr_21211_21263 = state_21173__$1;
(statearr_21211_21263[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (35))){
var inst_21158 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
if(cljs.core.truth_(inst_21158)){
var statearr_21212_21264 = state_21173__$1;
(statearr_21212_21264[(1)] = (36));

} else {
var statearr_21213_21265 = state_21173__$1;
(statearr_21213_21265[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (19))){
var inst_21100 = (state_21173[(7)]);
var inst_21120 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21100);
var state_21173__$1 = state_21173;
var statearr_21214_21266 = state_21173__$1;
(statearr_21214_21266[(2)] = inst_21120);

(statearr_21214_21266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (11))){
var inst_21100 = (state_21173[(7)]);
var inst_21104 = (inst_21100 == null);
var inst_21105 = cljs.core.not.call(null,inst_21104);
var state_21173__$1 = state_21173;
if(inst_21105){
var statearr_21215_21267 = state_21173__$1;
(statearr_21215_21267[(1)] = (13));

} else {
var statearr_21216_21268 = state_21173__$1;
(statearr_21216_21268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (9))){
var inst_21075 = (state_21173[(8)]);
var state_21173__$1 = state_21173;
var statearr_21217_21269 = state_21173__$1;
(statearr_21217_21269[(2)] = inst_21075);

(statearr_21217_21269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (5))){
var state_21173__$1 = state_21173;
var statearr_21218_21270 = state_21173__$1;
(statearr_21218_21270[(2)] = true);

(statearr_21218_21270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (14))){
var state_21173__$1 = state_21173;
var statearr_21219_21271 = state_21173__$1;
(statearr_21219_21271[(2)] = false);

(statearr_21219_21271[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (26))){
var inst_21133 = (state_21173[(10)]);
var inst_21140 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21133);
var state_21173__$1 = state_21173;
var statearr_21220_21272 = state_21173__$1;
(statearr_21220_21272[(2)] = inst_21140);

(statearr_21220_21272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (16))){
var state_21173__$1 = state_21173;
var statearr_21221_21273 = state_21173__$1;
(statearr_21221_21273[(2)] = true);

(statearr_21221_21273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (38))){
var inst_21163 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
var statearr_21222_21274 = state_21173__$1;
(statearr_21222_21274[(2)] = inst_21163);

(statearr_21222_21274[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (30))){
var inst_21125 = (state_21173[(13)]);
var inst_21124 = (state_21173[(9)]);
var inst_21133 = (state_21173[(10)]);
var inst_21150 = cljs.core.empty_QMARK_.call(null,inst_21124);
var inst_21151 = inst_21125.call(null,inst_21133);
var inst_21152 = cljs.core.not.call(null,inst_21151);
var inst_21153 = ((inst_21150) && (inst_21152));
var state_21173__$1 = state_21173;
var statearr_21223_21275 = state_21173__$1;
(statearr_21223_21275[(2)] = inst_21153);

(statearr_21223_21275[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (10))){
var inst_21075 = (state_21173[(8)]);
var inst_21096 = (state_21173[(2)]);
var inst_21097 = cljs.core.get.call(null,inst_21096,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21098 = cljs.core.get.call(null,inst_21096,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21099 = cljs.core.get.call(null,inst_21096,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21100 = inst_21075;
var state_21173__$1 = (function (){var statearr_21224 = state_21173;
(statearr_21224[(16)] = inst_21099);

(statearr_21224[(7)] = inst_21100);

(statearr_21224[(17)] = inst_21098);

(statearr_21224[(18)] = inst_21097);

return statearr_21224;
})();
var statearr_21225_21276 = state_21173__$1;
(statearr_21225_21276[(2)] = null);

(statearr_21225_21276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (18))){
var inst_21115 = (state_21173[(2)]);
var state_21173__$1 = state_21173;
var statearr_21226_21277 = state_21173__$1;
(statearr_21226_21277[(2)] = inst_21115);

(statearr_21226_21277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (37))){
var state_21173__$1 = state_21173;
var statearr_21227_21278 = state_21173__$1;
(statearr_21227_21278[(2)] = null);

(statearr_21227_21278[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21174 === (8))){
var inst_21075 = (state_21173[(8)]);
var inst_21093 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21075);
var state_21173__$1 = state_21173;
var statearr_21228_21279 = state_21173__$1;
(statearr_21228_21279[(2)] = inst_21093);

(statearr_21228_21279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15271__auto__ = null;
var cljs$core$async$mix_$_state_machine__15271__auto____0 = (function (){
var statearr_21229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21229[(0)] = cljs$core$async$mix_$_state_machine__15271__auto__);

(statearr_21229[(1)] = (1));

return statearr_21229;
});
var cljs$core$async$mix_$_state_machine__15271__auto____1 = (function (state_21173){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21230){if((e21230 instanceof Object)){
var ex__15274__auto__ = e21230;
var statearr_21231_21280 = state_21173;
(statearr_21231_21280[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21281 = state_21173;
state_21173 = G__21281;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15271__auto__ = function(state_21173){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15271__auto____1.call(this,state_21173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15271__auto____0;
cljs$core$async$mix_$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15271__auto____1;
return cljs$core$async$mix_$_state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21232 = f__17748__auto__.call(null);
(statearr_21232[(6)] = c__17747__auto___21233);

return statearr_21232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21284 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21284.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21285 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21285.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21286 = (function() {
var G__21287 = null;
var G__21287__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__21287__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__21287 = function(p,v){
switch(arguments.length){
case 1:
return G__21287__1.call(this,p);
case 2:
return G__21287__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21287.cljs$core$IFn$_invoke$arity$1 = G__21287__1;
G__21287.cljs$core$IFn$_invoke$arity$2 = G__21287__2;
return G__21287;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21283 = arguments.length;
switch (G__21283) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21286.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21286.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__21291 = arguments.length;
switch (G__21291) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__21289_SHARP_){
if(cljs.core.truth_(p1__21289_SHARP_.call(null,topic))){
return p1__21289_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21289_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21292 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21293){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21293 = meta21293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21294,meta21293__$1){
var self__ = this;
var _21294__$1 = this;
return (new cljs.core.async.t_cljs$core$async21292(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21293__$1));
}));

(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21294){
var self__ = this;
var _21294__$1 = this;
return self__.meta21293;
}));

(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async21292.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async21292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21293","meta21293",-310889712,null)], null);
}));

(cljs.core.async.t_cljs$core$async21292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21292");

(cljs.core.async.t_cljs$core$async21292.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async21292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21292.
 */
cljs.core.async.__GT_t_cljs$core$async21292 = (function cljs$core$async$__GT_t_cljs$core$async21292(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21293){
return (new cljs.core.async.t_cljs$core$async21292(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21293));
});

}

return (new cljs.core.async.t_cljs$core$async21292(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17747__auto___21412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21366){
var state_val_21367 = (state_21366[(1)]);
if((state_val_21367 === (7))){
var inst_21362 = (state_21366[(2)]);
var state_21366__$1 = state_21366;
var statearr_21368_21413 = state_21366__$1;
(statearr_21368_21413[(2)] = inst_21362);

(statearr_21368_21413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (20))){
var state_21366__$1 = state_21366;
var statearr_21369_21414 = state_21366__$1;
(statearr_21369_21414[(2)] = null);

(statearr_21369_21414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (1))){
var state_21366__$1 = state_21366;
var statearr_21370_21415 = state_21366__$1;
(statearr_21370_21415[(2)] = null);

(statearr_21370_21415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (24))){
var inst_21345 = (state_21366[(7)]);
var inst_21354 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21345);
var state_21366__$1 = state_21366;
var statearr_21371_21416 = state_21366__$1;
(statearr_21371_21416[(2)] = inst_21354);

(statearr_21371_21416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (4))){
var inst_21297 = (state_21366[(8)]);
var inst_21297__$1 = (state_21366[(2)]);
var inst_21298 = (inst_21297__$1 == null);
var state_21366__$1 = (function (){var statearr_21372 = state_21366;
(statearr_21372[(8)] = inst_21297__$1);

return statearr_21372;
})();
if(cljs.core.truth_(inst_21298)){
var statearr_21373_21417 = state_21366__$1;
(statearr_21373_21417[(1)] = (5));

} else {
var statearr_21374_21418 = state_21366__$1;
(statearr_21374_21418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (15))){
var inst_21339 = (state_21366[(2)]);
var state_21366__$1 = state_21366;
var statearr_21375_21419 = state_21366__$1;
(statearr_21375_21419[(2)] = inst_21339);

(statearr_21375_21419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (21))){
var inst_21359 = (state_21366[(2)]);
var state_21366__$1 = (function (){var statearr_21376 = state_21366;
(statearr_21376[(9)] = inst_21359);

return statearr_21376;
})();
var statearr_21377_21420 = state_21366__$1;
(statearr_21377_21420[(2)] = null);

(statearr_21377_21420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (13))){
var inst_21321 = (state_21366[(10)]);
var inst_21323 = cljs.core.chunked_seq_QMARK_.call(null,inst_21321);
var state_21366__$1 = state_21366;
if(inst_21323){
var statearr_21378_21421 = state_21366__$1;
(statearr_21378_21421[(1)] = (16));

} else {
var statearr_21379_21422 = state_21366__$1;
(statearr_21379_21422[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (22))){
var inst_21351 = (state_21366[(2)]);
var state_21366__$1 = state_21366;
if(cljs.core.truth_(inst_21351)){
var statearr_21380_21423 = state_21366__$1;
(statearr_21380_21423[(1)] = (23));

} else {
var statearr_21381_21424 = state_21366__$1;
(statearr_21381_21424[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (6))){
var inst_21297 = (state_21366[(8)]);
var inst_21345 = (state_21366[(7)]);
var inst_21347 = (state_21366[(11)]);
var inst_21345__$1 = topic_fn.call(null,inst_21297);
var inst_21346 = cljs.core.deref.call(null,mults);
var inst_21347__$1 = cljs.core.get.call(null,inst_21346,inst_21345__$1);
var state_21366__$1 = (function (){var statearr_21382 = state_21366;
(statearr_21382[(7)] = inst_21345__$1);

(statearr_21382[(11)] = inst_21347__$1);

return statearr_21382;
})();
if(cljs.core.truth_(inst_21347__$1)){
var statearr_21383_21425 = state_21366__$1;
(statearr_21383_21425[(1)] = (19));

} else {
var statearr_21384_21426 = state_21366__$1;
(statearr_21384_21426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (25))){
var inst_21356 = (state_21366[(2)]);
var state_21366__$1 = state_21366;
var statearr_21385_21427 = state_21366__$1;
(statearr_21385_21427[(2)] = inst_21356);

(statearr_21385_21427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (17))){
var inst_21321 = (state_21366[(10)]);
var inst_21330 = cljs.core.first.call(null,inst_21321);
var inst_21331 = cljs.core.async.muxch_STAR_.call(null,inst_21330);
var inst_21332 = cljs.core.async.close_BANG_.call(null,inst_21331);
var inst_21333 = cljs.core.next.call(null,inst_21321);
var inst_21307 = inst_21333;
var inst_21308 = null;
var inst_21309 = (0);
var inst_21310 = (0);
var state_21366__$1 = (function (){var statearr_21386 = state_21366;
(statearr_21386[(12)] = inst_21307);

(statearr_21386[(13)] = inst_21309);

(statearr_21386[(14)] = inst_21310);

(statearr_21386[(15)] = inst_21308);

(statearr_21386[(16)] = inst_21332);

return statearr_21386;
})();
var statearr_21387_21428 = state_21366__$1;
(statearr_21387_21428[(2)] = null);

(statearr_21387_21428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (3))){
var inst_21364 = (state_21366[(2)]);
var state_21366__$1 = state_21366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21366__$1,inst_21364);
} else {
if((state_val_21367 === (12))){
var inst_21341 = (state_21366[(2)]);
var state_21366__$1 = state_21366;
var statearr_21388_21429 = state_21366__$1;
(statearr_21388_21429[(2)] = inst_21341);

(statearr_21388_21429[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (2))){
var state_21366__$1 = state_21366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21366__$1,(4),ch);
} else {
if((state_val_21367 === (23))){
var state_21366__$1 = state_21366;
var statearr_21389_21430 = state_21366__$1;
(statearr_21389_21430[(2)] = null);

(statearr_21389_21430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (19))){
var inst_21297 = (state_21366[(8)]);
var inst_21347 = (state_21366[(11)]);
var inst_21349 = cljs.core.async.muxch_STAR_.call(null,inst_21347);
var state_21366__$1 = state_21366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21366__$1,(22),inst_21349,inst_21297);
} else {
if((state_val_21367 === (11))){
var inst_21321 = (state_21366[(10)]);
var inst_21307 = (state_21366[(12)]);
var inst_21321__$1 = cljs.core.seq.call(null,inst_21307);
var state_21366__$1 = (function (){var statearr_21390 = state_21366;
(statearr_21390[(10)] = inst_21321__$1);

return statearr_21390;
})();
if(inst_21321__$1){
var statearr_21391_21431 = state_21366__$1;
(statearr_21391_21431[(1)] = (13));

} else {
var statearr_21392_21432 = state_21366__$1;
(statearr_21392_21432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (9))){
var inst_21343 = (state_21366[(2)]);
var state_21366__$1 = state_21366;
var statearr_21393_21433 = state_21366__$1;
(statearr_21393_21433[(2)] = inst_21343);

(statearr_21393_21433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (5))){
var inst_21304 = cljs.core.deref.call(null,mults);
var inst_21305 = cljs.core.vals.call(null,inst_21304);
var inst_21306 = cljs.core.seq.call(null,inst_21305);
var inst_21307 = inst_21306;
var inst_21308 = null;
var inst_21309 = (0);
var inst_21310 = (0);
var state_21366__$1 = (function (){var statearr_21394 = state_21366;
(statearr_21394[(12)] = inst_21307);

(statearr_21394[(13)] = inst_21309);

(statearr_21394[(14)] = inst_21310);

(statearr_21394[(15)] = inst_21308);

return statearr_21394;
})();
var statearr_21395_21434 = state_21366__$1;
(statearr_21395_21434[(2)] = null);

(statearr_21395_21434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (14))){
var state_21366__$1 = state_21366;
var statearr_21399_21435 = state_21366__$1;
(statearr_21399_21435[(2)] = null);

(statearr_21399_21435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (16))){
var inst_21321 = (state_21366[(10)]);
var inst_21325 = cljs.core.chunk_first.call(null,inst_21321);
var inst_21326 = cljs.core.chunk_rest.call(null,inst_21321);
var inst_21327 = cljs.core.count.call(null,inst_21325);
var inst_21307 = inst_21326;
var inst_21308 = inst_21325;
var inst_21309 = inst_21327;
var inst_21310 = (0);
var state_21366__$1 = (function (){var statearr_21400 = state_21366;
(statearr_21400[(12)] = inst_21307);

(statearr_21400[(13)] = inst_21309);

(statearr_21400[(14)] = inst_21310);

(statearr_21400[(15)] = inst_21308);

return statearr_21400;
})();
var statearr_21401_21436 = state_21366__$1;
(statearr_21401_21436[(2)] = null);

(statearr_21401_21436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (10))){
var inst_21307 = (state_21366[(12)]);
var inst_21309 = (state_21366[(13)]);
var inst_21310 = (state_21366[(14)]);
var inst_21308 = (state_21366[(15)]);
var inst_21315 = cljs.core._nth.call(null,inst_21308,inst_21310);
var inst_21316 = cljs.core.async.muxch_STAR_.call(null,inst_21315);
var inst_21317 = cljs.core.async.close_BANG_.call(null,inst_21316);
var inst_21318 = (inst_21310 + (1));
var tmp21396 = inst_21307;
var tmp21397 = inst_21309;
var tmp21398 = inst_21308;
var inst_21307__$1 = tmp21396;
var inst_21308__$1 = tmp21398;
var inst_21309__$1 = tmp21397;
var inst_21310__$1 = inst_21318;
var state_21366__$1 = (function (){var statearr_21402 = state_21366;
(statearr_21402[(12)] = inst_21307__$1);

(statearr_21402[(13)] = inst_21309__$1);

(statearr_21402[(17)] = inst_21317);

(statearr_21402[(14)] = inst_21310__$1);

(statearr_21402[(15)] = inst_21308__$1);

return statearr_21402;
})();
var statearr_21403_21437 = state_21366__$1;
(statearr_21403_21437[(2)] = null);

(statearr_21403_21437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (18))){
var inst_21336 = (state_21366[(2)]);
var state_21366__$1 = state_21366;
var statearr_21404_21438 = state_21366__$1;
(statearr_21404_21438[(2)] = inst_21336);

(statearr_21404_21438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21367 === (8))){
var inst_21309 = (state_21366[(13)]);
var inst_21310 = (state_21366[(14)]);
var inst_21312 = (inst_21310 < inst_21309);
var inst_21313 = inst_21312;
var state_21366__$1 = state_21366;
if(cljs.core.truth_(inst_21313)){
var statearr_21405_21439 = state_21366__$1;
(statearr_21405_21439[(1)] = (10));

} else {
var statearr_21406_21440 = state_21366__$1;
(statearr_21406_21440[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_21407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21407[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_21407[(1)] = (1));

return statearr_21407;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_21366){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21408){if((e21408 instanceof Object)){
var ex__15274__auto__ = e21408;
var statearr_21409_21441 = state_21366;
(statearr_21409_21441[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21442 = state_21366;
state_21366 = G__21442;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_21366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_21366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21410 = f__17748__auto__.call(null);
(statearr_21410[(6)] = c__17747__auto___21412);

return statearr_21410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__21444 = arguments.length;
switch (G__21444) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__21447 = arguments.length;
switch (G__21447) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__21450 = arguments.length;
switch (G__21450) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__17747__auto___21517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21489){
var state_val_21490 = (state_21489[(1)]);
if((state_val_21490 === (7))){
var state_21489__$1 = state_21489;
var statearr_21491_21518 = state_21489__$1;
(statearr_21491_21518[(2)] = null);

(statearr_21491_21518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (1))){
var state_21489__$1 = state_21489;
var statearr_21492_21519 = state_21489__$1;
(statearr_21492_21519[(2)] = null);

(statearr_21492_21519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (4))){
var inst_21453 = (state_21489[(7)]);
var inst_21455 = (inst_21453 < cnt);
var state_21489__$1 = state_21489;
if(cljs.core.truth_(inst_21455)){
var statearr_21493_21520 = state_21489__$1;
(statearr_21493_21520[(1)] = (6));

} else {
var statearr_21494_21521 = state_21489__$1;
(statearr_21494_21521[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (15))){
var inst_21485 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
var statearr_21495_21522 = state_21489__$1;
(statearr_21495_21522[(2)] = inst_21485);

(statearr_21495_21522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (13))){
var inst_21478 = cljs.core.async.close_BANG_.call(null,out);
var state_21489__$1 = state_21489;
var statearr_21496_21523 = state_21489__$1;
(statearr_21496_21523[(2)] = inst_21478);

(statearr_21496_21523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (6))){
var state_21489__$1 = state_21489;
var statearr_21497_21524 = state_21489__$1;
(statearr_21497_21524[(2)] = null);

(statearr_21497_21524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (3))){
var inst_21487 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21489__$1,inst_21487);
} else {
if((state_val_21490 === (12))){
var inst_21475 = (state_21489[(8)]);
var inst_21475__$1 = (state_21489[(2)]);
var inst_21476 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21475__$1);
var state_21489__$1 = (function (){var statearr_21498 = state_21489;
(statearr_21498[(8)] = inst_21475__$1);

return statearr_21498;
})();
if(cljs.core.truth_(inst_21476)){
var statearr_21499_21525 = state_21489__$1;
(statearr_21499_21525[(1)] = (13));

} else {
var statearr_21500_21526 = state_21489__$1;
(statearr_21500_21526[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (2))){
var inst_21452 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21453 = (0);
var state_21489__$1 = (function (){var statearr_21501 = state_21489;
(statearr_21501[(7)] = inst_21453);

(statearr_21501[(9)] = inst_21452);

return statearr_21501;
})();
var statearr_21502_21527 = state_21489__$1;
(statearr_21502_21527[(2)] = null);

(statearr_21502_21527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (11))){
var inst_21453 = (state_21489[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21489,(10),Object,null,(9));
var inst_21462 = chs__$1.call(null,inst_21453);
var inst_21463 = done.call(null,inst_21453);
var inst_21464 = cljs.core.async.take_BANG_.call(null,inst_21462,inst_21463);
var state_21489__$1 = state_21489;
var statearr_21503_21528 = state_21489__$1;
(statearr_21503_21528[(2)] = inst_21464);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21489__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (9))){
var inst_21453 = (state_21489[(7)]);
var inst_21466 = (state_21489[(2)]);
var inst_21467 = (inst_21453 + (1));
var inst_21453__$1 = inst_21467;
var state_21489__$1 = (function (){var statearr_21504 = state_21489;
(statearr_21504[(7)] = inst_21453__$1);

(statearr_21504[(10)] = inst_21466);

return statearr_21504;
})();
var statearr_21505_21529 = state_21489__$1;
(statearr_21505_21529[(2)] = null);

(statearr_21505_21529[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (5))){
var inst_21473 = (state_21489[(2)]);
var state_21489__$1 = (function (){var statearr_21506 = state_21489;
(statearr_21506[(11)] = inst_21473);

return statearr_21506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21489__$1,(12),dchan);
} else {
if((state_val_21490 === (14))){
var inst_21475 = (state_21489[(8)]);
var inst_21480 = cljs.core.apply.call(null,f,inst_21475);
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21489__$1,(16),out,inst_21480);
} else {
if((state_val_21490 === (16))){
var inst_21482 = (state_21489[(2)]);
var state_21489__$1 = (function (){var statearr_21507 = state_21489;
(statearr_21507[(12)] = inst_21482);

return statearr_21507;
})();
var statearr_21508_21530 = state_21489__$1;
(statearr_21508_21530[(2)] = null);

(statearr_21508_21530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (10))){
var inst_21457 = (state_21489[(2)]);
var inst_21458 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21489__$1 = (function (){var statearr_21509 = state_21489;
(statearr_21509[(13)] = inst_21457);

return statearr_21509;
})();
var statearr_21510_21531 = state_21489__$1;
(statearr_21510_21531[(2)] = inst_21458);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21489__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (8))){
var inst_21471 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
var statearr_21511_21532 = state_21489__$1;
(statearr_21511_21532[(2)] = inst_21471);

(statearr_21511_21532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_21512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21512[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_21512[(1)] = (1));

return statearr_21512;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_21489){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21513){if((e21513 instanceof Object)){
var ex__15274__auto__ = e21513;
var statearr_21514_21533 = state_21489;
(statearr_21514_21533[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21534 = state_21489;
state_21489 = G__21534;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_21489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_21489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21515 = f__17748__auto__.call(null);
(statearr_21515[(6)] = c__17747__auto___21517);

return statearr_21515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__21537 = arguments.length;
switch (G__21537) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17747__auto___21591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21569){
var state_val_21570 = (state_21569[(1)]);
if((state_val_21570 === (7))){
var inst_21548 = (state_21569[(7)]);
var inst_21549 = (state_21569[(8)]);
var inst_21548__$1 = (state_21569[(2)]);
var inst_21549__$1 = cljs.core.nth.call(null,inst_21548__$1,(0),null);
var inst_21550 = cljs.core.nth.call(null,inst_21548__$1,(1),null);
var inst_21551 = (inst_21549__$1 == null);
var state_21569__$1 = (function (){var statearr_21571 = state_21569;
(statearr_21571[(7)] = inst_21548__$1);

(statearr_21571[(9)] = inst_21550);

(statearr_21571[(8)] = inst_21549__$1);

return statearr_21571;
})();
if(cljs.core.truth_(inst_21551)){
var statearr_21572_21592 = state_21569__$1;
(statearr_21572_21592[(1)] = (8));

} else {
var statearr_21573_21593 = state_21569__$1;
(statearr_21573_21593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (1))){
var inst_21538 = cljs.core.vec.call(null,chs);
var inst_21539 = inst_21538;
var state_21569__$1 = (function (){var statearr_21574 = state_21569;
(statearr_21574[(10)] = inst_21539);

return statearr_21574;
})();
var statearr_21575_21594 = state_21569__$1;
(statearr_21575_21594[(2)] = null);

(statearr_21575_21594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (4))){
var inst_21539 = (state_21569[(10)]);
var state_21569__$1 = state_21569;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21569__$1,(7),inst_21539);
} else {
if((state_val_21570 === (6))){
var inst_21565 = (state_21569[(2)]);
var state_21569__$1 = state_21569;
var statearr_21576_21595 = state_21569__$1;
(statearr_21576_21595[(2)] = inst_21565);

(statearr_21576_21595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (3))){
var inst_21567 = (state_21569[(2)]);
var state_21569__$1 = state_21569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21569__$1,inst_21567);
} else {
if((state_val_21570 === (2))){
var inst_21539 = (state_21569[(10)]);
var inst_21541 = cljs.core.count.call(null,inst_21539);
var inst_21542 = (inst_21541 > (0));
var state_21569__$1 = state_21569;
if(cljs.core.truth_(inst_21542)){
var statearr_21578_21596 = state_21569__$1;
(statearr_21578_21596[(1)] = (4));

} else {
var statearr_21579_21597 = state_21569__$1;
(statearr_21579_21597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (11))){
var inst_21539 = (state_21569[(10)]);
var inst_21558 = (state_21569[(2)]);
var tmp21577 = inst_21539;
var inst_21539__$1 = tmp21577;
var state_21569__$1 = (function (){var statearr_21580 = state_21569;
(statearr_21580[(11)] = inst_21558);

(statearr_21580[(10)] = inst_21539__$1);

return statearr_21580;
})();
var statearr_21581_21598 = state_21569__$1;
(statearr_21581_21598[(2)] = null);

(statearr_21581_21598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (9))){
var inst_21549 = (state_21569[(8)]);
var state_21569__$1 = state_21569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21569__$1,(11),out,inst_21549);
} else {
if((state_val_21570 === (5))){
var inst_21563 = cljs.core.async.close_BANG_.call(null,out);
var state_21569__$1 = state_21569;
var statearr_21582_21599 = state_21569__$1;
(statearr_21582_21599[(2)] = inst_21563);

(statearr_21582_21599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (10))){
var inst_21561 = (state_21569[(2)]);
var state_21569__$1 = state_21569;
var statearr_21583_21600 = state_21569__$1;
(statearr_21583_21600[(2)] = inst_21561);

(statearr_21583_21600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21570 === (8))){
var inst_21548 = (state_21569[(7)]);
var inst_21550 = (state_21569[(9)]);
var inst_21539 = (state_21569[(10)]);
var inst_21549 = (state_21569[(8)]);
var inst_21553 = (function (){var cs = inst_21539;
var vec__21544 = inst_21548;
var v = inst_21549;
var c = inst_21550;
return (function (p1__21535_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21535_SHARP_);
});
})();
var inst_21554 = cljs.core.filterv.call(null,inst_21553,inst_21539);
var inst_21539__$1 = inst_21554;
var state_21569__$1 = (function (){var statearr_21584 = state_21569;
(statearr_21584[(10)] = inst_21539__$1);

return statearr_21584;
})();
var statearr_21585_21601 = state_21569__$1;
(statearr_21585_21601[(2)] = null);

(statearr_21585_21601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_21586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21586[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_21586[(1)] = (1));

return statearr_21586;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_21569){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21587){if((e21587 instanceof Object)){
var ex__15274__auto__ = e21587;
var statearr_21588_21602 = state_21569;
(statearr_21588_21602[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21603 = state_21569;
state_21569 = G__21603;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_21569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_21569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21589 = f__17748__auto__.call(null);
(statearr_21589[(6)] = c__17747__auto___21591);

return statearr_21589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__21605 = arguments.length;
switch (G__21605) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17747__auto___21650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21629){
var state_val_21630 = (state_21629[(1)]);
if((state_val_21630 === (7))){
var inst_21611 = (state_21629[(7)]);
var inst_21611__$1 = (state_21629[(2)]);
var inst_21612 = (inst_21611__$1 == null);
var inst_21613 = cljs.core.not.call(null,inst_21612);
var state_21629__$1 = (function (){var statearr_21631 = state_21629;
(statearr_21631[(7)] = inst_21611__$1);

return statearr_21631;
})();
if(inst_21613){
var statearr_21632_21651 = state_21629__$1;
(statearr_21632_21651[(1)] = (8));

} else {
var statearr_21633_21652 = state_21629__$1;
(statearr_21633_21652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (1))){
var inst_21606 = (0);
var state_21629__$1 = (function (){var statearr_21634 = state_21629;
(statearr_21634[(8)] = inst_21606);

return statearr_21634;
})();
var statearr_21635_21653 = state_21629__$1;
(statearr_21635_21653[(2)] = null);

(statearr_21635_21653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (4))){
var state_21629__$1 = state_21629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21629__$1,(7),ch);
} else {
if((state_val_21630 === (6))){
var inst_21624 = (state_21629[(2)]);
var state_21629__$1 = state_21629;
var statearr_21636_21654 = state_21629__$1;
(statearr_21636_21654[(2)] = inst_21624);

(statearr_21636_21654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (3))){
var inst_21626 = (state_21629[(2)]);
var inst_21627 = cljs.core.async.close_BANG_.call(null,out);
var state_21629__$1 = (function (){var statearr_21637 = state_21629;
(statearr_21637[(9)] = inst_21626);

return statearr_21637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21629__$1,inst_21627);
} else {
if((state_val_21630 === (2))){
var inst_21606 = (state_21629[(8)]);
var inst_21608 = (inst_21606 < n);
var state_21629__$1 = state_21629;
if(cljs.core.truth_(inst_21608)){
var statearr_21638_21655 = state_21629__$1;
(statearr_21638_21655[(1)] = (4));

} else {
var statearr_21639_21656 = state_21629__$1;
(statearr_21639_21656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (11))){
var inst_21606 = (state_21629[(8)]);
var inst_21616 = (state_21629[(2)]);
var inst_21617 = (inst_21606 + (1));
var inst_21606__$1 = inst_21617;
var state_21629__$1 = (function (){var statearr_21640 = state_21629;
(statearr_21640[(10)] = inst_21616);

(statearr_21640[(8)] = inst_21606__$1);

return statearr_21640;
})();
var statearr_21641_21657 = state_21629__$1;
(statearr_21641_21657[(2)] = null);

(statearr_21641_21657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (9))){
var state_21629__$1 = state_21629;
var statearr_21642_21658 = state_21629__$1;
(statearr_21642_21658[(2)] = null);

(statearr_21642_21658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (5))){
var state_21629__$1 = state_21629;
var statearr_21643_21659 = state_21629__$1;
(statearr_21643_21659[(2)] = null);

(statearr_21643_21659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (10))){
var inst_21621 = (state_21629[(2)]);
var state_21629__$1 = state_21629;
var statearr_21644_21660 = state_21629__$1;
(statearr_21644_21660[(2)] = inst_21621);

(statearr_21644_21660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21630 === (8))){
var inst_21611 = (state_21629[(7)]);
var state_21629__$1 = state_21629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21629__$1,(11),out,inst_21611);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_21645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21645[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_21645[(1)] = (1));

return statearr_21645;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_21629){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21646){if((e21646 instanceof Object)){
var ex__15274__auto__ = e21646;
var statearr_21647_21661 = state_21629;
(statearr_21647_21661[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21662 = state_21629;
state_21629 = G__21662;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_21629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_21629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21648 = f__17748__auto__.call(null);
(statearr_21648[(6)] = c__17747__auto___21650);

return statearr_21648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21664 = (function (f,ch,meta21665){
this.f = f;
this.ch = ch;
this.meta21665 = meta21665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21666,meta21665__$1){
var self__ = this;
var _21666__$1 = this;
return (new cljs.core.async.t_cljs$core$async21664(self__.f,self__.ch,meta21665__$1));
}));

(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21666){
var self__ = this;
var _21666__$1 = this;
return self__.meta21665;
}));

(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21667 = (function (f,ch,meta21665,_,fn1,meta21668){
this.f = f;
this.ch = ch;
this.meta21665 = meta21665;
this._ = _;
this.fn1 = fn1;
this.meta21668 = meta21668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21669,meta21668__$1){
var self__ = this;
var _21669__$1 = this;
return (new cljs.core.async.t_cljs$core$async21667(self__.f,self__.ch,self__.meta21665,self__._,self__.fn1,meta21668__$1));
}));

(cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21669){
var self__ = this;
var _21669__$1 = this;
return self__.meta21668;
}));

(cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__21663_SHARP_){
return f1.call(null,(((p1__21663_SHARP_ == null))?null:self__.f.call(null,p1__21663_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async21667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21665","meta21665",-2143355308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21664","cljs.core.async/t_cljs$core$async21664",218269205,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21668","meta21668",727907310,null)], null);
}));

(cljs.core.async.t_cljs$core$async21667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21667");

(cljs.core.async.t_cljs$core$async21667.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async21667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21667.
 */
cljs.core.async.__GT_t_cljs$core$async21667 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21667(f__$1,ch__$1,meta21665__$1,___$2,fn1__$1,meta21668){
return (new cljs.core.async.t_cljs$core$async21667(f__$1,ch__$1,meta21665__$1,___$2,fn1__$1,meta21668));
});

}

return (new cljs.core.async.t_cljs$core$async21667(self__.f,self__.ch,self__.meta21665,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async21664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21665","meta21665",-2143355308,null)], null);
}));

(cljs.core.async.t_cljs$core$async21664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21664");

(cljs.core.async.t_cljs$core$async21664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async21664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21664.
 */
cljs.core.async.__GT_t_cljs$core$async21664 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21664(f__$1,ch__$1,meta21665){
return (new cljs.core.async.t_cljs$core$async21664(f__$1,ch__$1,meta21665));
});

}

return (new cljs.core.async.t_cljs$core$async21664(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21670 = (function (f,ch,meta21671){
this.f = f;
this.ch = ch;
this.meta21671 = meta21671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21672,meta21671__$1){
var self__ = this;
var _21672__$1 = this;
return (new cljs.core.async.t_cljs$core$async21670(self__.f,self__.ch,meta21671__$1));
}));

(cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21672){
var self__ = this;
var _21672__$1 = this;
return self__.meta21671;
}));

(cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async21670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21671","meta21671",1498986021,null)], null);
}));

(cljs.core.async.t_cljs$core$async21670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21670");

(cljs.core.async.t_cljs$core$async21670.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async21670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21670.
 */
cljs.core.async.__GT_t_cljs$core$async21670 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21670(f__$1,ch__$1,meta21671){
return (new cljs.core.async.t_cljs$core$async21670(f__$1,ch__$1,meta21671));
});

}

return (new cljs.core.async.t_cljs$core$async21670(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21673 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21673 = (function (p,ch,meta21674){
this.p = p;
this.ch = ch;
this.meta21674 = meta21674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21675,meta21674__$1){
var self__ = this;
var _21675__$1 = this;
return (new cljs.core.async.t_cljs$core$async21673(self__.p,self__.ch,meta21674__$1));
}));

(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21675){
var self__ = this;
var _21675__$1 = this;
return self__.meta21674;
}));

(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async21673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21674","meta21674",2072293792,null)], null);
}));

(cljs.core.async.t_cljs$core$async21673.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21673");

(cljs.core.async.t_cljs$core$async21673.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async21673");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21673.
 */
cljs.core.async.__GT_t_cljs$core$async21673 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21673(p__$1,ch__$1,meta21674){
return (new cljs.core.async.t_cljs$core$async21673(p__$1,ch__$1,meta21674));
});

}

return (new cljs.core.async.t_cljs$core$async21673(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__21677 = arguments.length;
switch (G__21677) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17747__auto___21717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21698){
var state_val_21699 = (state_21698[(1)]);
if((state_val_21699 === (7))){
var inst_21694 = (state_21698[(2)]);
var state_21698__$1 = state_21698;
var statearr_21700_21718 = state_21698__$1;
(statearr_21700_21718[(2)] = inst_21694);

(statearr_21700_21718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21699 === (1))){
var state_21698__$1 = state_21698;
var statearr_21701_21719 = state_21698__$1;
(statearr_21701_21719[(2)] = null);

(statearr_21701_21719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21699 === (4))){
var inst_21680 = (state_21698[(7)]);
var inst_21680__$1 = (state_21698[(2)]);
var inst_21681 = (inst_21680__$1 == null);
var state_21698__$1 = (function (){var statearr_21702 = state_21698;
(statearr_21702[(7)] = inst_21680__$1);

return statearr_21702;
})();
if(cljs.core.truth_(inst_21681)){
var statearr_21703_21720 = state_21698__$1;
(statearr_21703_21720[(1)] = (5));

} else {
var statearr_21704_21721 = state_21698__$1;
(statearr_21704_21721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21699 === (6))){
var inst_21680 = (state_21698[(7)]);
var inst_21685 = p.call(null,inst_21680);
var state_21698__$1 = state_21698;
if(cljs.core.truth_(inst_21685)){
var statearr_21705_21722 = state_21698__$1;
(statearr_21705_21722[(1)] = (8));

} else {
var statearr_21706_21723 = state_21698__$1;
(statearr_21706_21723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21699 === (3))){
var inst_21696 = (state_21698[(2)]);
var state_21698__$1 = state_21698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21698__$1,inst_21696);
} else {
if((state_val_21699 === (2))){
var state_21698__$1 = state_21698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21698__$1,(4),ch);
} else {
if((state_val_21699 === (11))){
var inst_21688 = (state_21698[(2)]);
var state_21698__$1 = state_21698;
var statearr_21707_21724 = state_21698__$1;
(statearr_21707_21724[(2)] = inst_21688);

(statearr_21707_21724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21699 === (9))){
var state_21698__$1 = state_21698;
var statearr_21708_21725 = state_21698__$1;
(statearr_21708_21725[(2)] = null);

(statearr_21708_21725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21699 === (5))){
var inst_21683 = cljs.core.async.close_BANG_.call(null,out);
var state_21698__$1 = state_21698;
var statearr_21709_21726 = state_21698__$1;
(statearr_21709_21726[(2)] = inst_21683);

(statearr_21709_21726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21699 === (10))){
var inst_21691 = (state_21698[(2)]);
var state_21698__$1 = (function (){var statearr_21710 = state_21698;
(statearr_21710[(8)] = inst_21691);

return statearr_21710;
})();
var statearr_21711_21727 = state_21698__$1;
(statearr_21711_21727[(2)] = null);

(statearr_21711_21727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21699 === (8))){
var inst_21680 = (state_21698[(7)]);
var state_21698__$1 = state_21698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21698__$1,(11),out,inst_21680);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_21712 = [null,null,null,null,null,null,null,null,null];
(statearr_21712[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_21712[(1)] = (1));

return statearr_21712;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_21698){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21713){if((e21713 instanceof Object)){
var ex__15274__auto__ = e21713;
var statearr_21714_21728 = state_21698;
(statearr_21714_21728[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21729 = state_21698;
state_21698 = G__21729;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_21698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_21698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21715 = f__17748__auto__.call(null);
(statearr_21715[(6)] = c__17747__auto___21717);

return statearr_21715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21731 = arguments.length;
switch (G__21731) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17747__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21794){
var state_val_21795 = (state_21794[(1)]);
if((state_val_21795 === (7))){
var inst_21790 = (state_21794[(2)]);
var state_21794__$1 = state_21794;
var statearr_21796_21834 = state_21794__$1;
(statearr_21796_21834[(2)] = inst_21790);

(statearr_21796_21834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (20))){
var inst_21760 = (state_21794[(7)]);
var inst_21771 = (state_21794[(2)]);
var inst_21772 = cljs.core.next.call(null,inst_21760);
var inst_21746 = inst_21772;
var inst_21747 = null;
var inst_21748 = (0);
var inst_21749 = (0);
var state_21794__$1 = (function (){var statearr_21797 = state_21794;
(statearr_21797[(8)] = inst_21746);

(statearr_21797[(9)] = inst_21747);

(statearr_21797[(10)] = inst_21771);

(statearr_21797[(11)] = inst_21749);

(statearr_21797[(12)] = inst_21748);

return statearr_21797;
})();
var statearr_21798_21835 = state_21794__$1;
(statearr_21798_21835[(2)] = null);

(statearr_21798_21835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (1))){
var state_21794__$1 = state_21794;
var statearr_21799_21836 = state_21794__$1;
(statearr_21799_21836[(2)] = null);

(statearr_21799_21836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (4))){
var inst_21735 = (state_21794[(13)]);
var inst_21735__$1 = (state_21794[(2)]);
var inst_21736 = (inst_21735__$1 == null);
var state_21794__$1 = (function (){var statearr_21800 = state_21794;
(statearr_21800[(13)] = inst_21735__$1);

return statearr_21800;
})();
if(cljs.core.truth_(inst_21736)){
var statearr_21801_21837 = state_21794__$1;
(statearr_21801_21837[(1)] = (5));

} else {
var statearr_21802_21838 = state_21794__$1;
(statearr_21802_21838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (15))){
var state_21794__$1 = state_21794;
var statearr_21806_21839 = state_21794__$1;
(statearr_21806_21839[(2)] = null);

(statearr_21806_21839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (21))){
var state_21794__$1 = state_21794;
var statearr_21807_21840 = state_21794__$1;
(statearr_21807_21840[(2)] = null);

(statearr_21807_21840[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (13))){
var inst_21746 = (state_21794[(8)]);
var inst_21747 = (state_21794[(9)]);
var inst_21749 = (state_21794[(11)]);
var inst_21748 = (state_21794[(12)]);
var inst_21756 = (state_21794[(2)]);
var inst_21757 = (inst_21749 + (1));
var tmp21803 = inst_21746;
var tmp21804 = inst_21747;
var tmp21805 = inst_21748;
var inst_21746__$1 = tmp21803;
var inst_21747__$1 = tmp21804;
var inst_21748__$1 = tmp21805;
var inst_21749__$1 = inst_21757;
var state_21794__$1 = (function (){var statearr_21808 = state_21794;
(statearr_21808[(8)] = inst_21746__$1);

(statearr_21808[(9)] = inst_21747__$1);

(statearr_21808[(14)] = inst_21756);

(statearr_21808[(11)] = inst_21749__$1);

(statearr_21808[(12)] = inst_21748__$1);

return statearr_21808;
})();
var statearr_21809_21841 = state_21794__$1;
(statearr_21809_21841[(2)] = null);

(statearr_21809_21841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (22))){
var state_21794__$1 = state_21794;
var statearr_21810_21842 = state_21794__$1;
(statearr_21810_21842[(2)] = null);

(statearr_21810_21842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (6))){
var inst_21735 = (state_21794[(13)]);
var inst_21744 = f.call(null,inst_21735);
var inst_21745 = cljs.core.seq.call(null,inst_21744);
var inst_21746 = inst_21745;
var inst_21747 = null;
var inst_21748 = (0);
var inst_21749 = (0);
var state_21794__$1 = (function (){var statearr_21811 = state_21794;
(statearr_21811[(8)] = inst_21746);

(statearr_21811[(9)] = inst_21747);

(statearr_21811[(11)] = inst_21749);

(statearr_21811[(12)] = inst_21748);

return statearr_21811;
})();
var statearr_21812_21843 = state_21794__$1;
(statearr_21812_21843[(2)] = null);

(statearr_21812_21843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (17))){
var inst_21760 = (state_21794[(7)]);
var inst_21764 = cljs.core.chunk_first.call(null,inst_21760);
var inst_21765 = cljs.core.chunk_rest.call(null,inst_21760);
var inst_21766 = cljs.core.count.call(null,inst_21764);
var inst_21746 = inst_21765;
var inst_21747 = inst_21764;
var inst_21748 = inst_21766;
var inst_21749 = (0);
var state_21794__$1 = (function (){var statearr_21813 = state_21794;
(statearr_21813[(8)] = inst_21746);

(statearr_21813[(9)] = inst_21747);

(statearr_21813[(11)] = inst_21749);

(statearr_21813[(12)] = inst_21748);

return statearr_21813;
})();
var statearr_21814_21844 = state_21794__$1;
(statearr_21814_21844[(2)] = null);

(statearr_21814_21844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (3))){
var inst_21792 = (state_21794[(2)]);
var state_21794__$1 = state_21794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21794__$1,inst_21792);
} else {
if((state_val_21795 === (12))){
var inst_21780 = (state_21794[(2)]);
var state_21794__$1 = state_21794;
var statearr_21815_21845 = state_21794__$1;
(statearr_21815_21845[(2)] = inst_21780);

(statearr_21815_21845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (2))){
var state_21794__$1 = state_21794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21794__$1,(4),in$);
} else {
if((state_val_21795 === (23))){
var inst_21788 = (state_21794[(2)]);
var state_21794__$1 = state_21794;
var statearr_21816_21846 = state_21794__$1;
(statearr_21816_21846[(2)] = inst_21788);

(statearr_21816_21846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (19))){
var inst_21775 = (state_21794[(2)]);
var state_21794__$1 = state_21794;
var statearr_21817_21847 = state_21794__$1;
(statearr_21817_21847[(2)] = inst_21775);

(statearr_21817_21847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (11))){
var inst_21760 = (state_21794[(7)]);
var inst_21746 = (state_21794[(8)]);
var inst_21760__$1 = cljs.core.seq.call(null,inst_21746);
var state_21794__$1 = (function (){var statearr_21818 = state_21794;
(statearr_21818[(7)] = inst_21760__$1);

return statearr_21818;
})();
if(inst_21760__$1){
var statearr_21819_21848 = state_21794__$1;
(statearr_21819_21848[(1)] = (14));

} else {
var statearr_21820_21849 = state_21794__$1;
(statearr_21820_21849[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (9))){
var inst_21782 = (state_21794[(2)]);
var inst_21783 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21794__$1 = (function (){var statearr_21821 = state_21794;
(statearr_21821[(15)] = inst_21782);

return statearr_21821;
})();
if(cljs.core.truth_(inst_21783)){
var statearr_21822_21850 = state_21794__$1;
(statearr_21822_21850[(1)] = (21));

} else {
var statearr_21823_21851 = state_21794__$1;
(statearr_21823_21851[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (5))){
var inst_21738 = cljs.core.async.close_BANG_.call(null,out);
var state_21794__$1 = state_21794;
var statearr_21824_21852 = state_21794__$1;
(statearr_21824_21852[(2)] = inst_21738);

(statearr_21824_21852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (14))){
var inst_21760 = (state_21794[(7)]);
var inst_21762 = cljs.core.chunked_seq_QMARK_.call(null,inst_21760);
var state_21794__$1 = state_21794;
if(inst_21762){
var statearr_21825_21853 = state_21794__$1;
(statearr_21825_21853[(1)] = (17));

} else {
var statearr_21826_21854 = state_21794__$1;
(statearr_21826_21854[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (16))){
var inst_21778 = (state_21794[(2)]);
var state_21794__$1 = state_21794;
var statearr_21827_21855 = state_21794__$1;
(statearr_21827_21855[(2)] = inst_21778);

(statearr_21827_21855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21795 === (10))){
var inst_21747 = (state_21794[(9)]);
var inst_21749 = (state_21794[(11)]);
var inst_21754 = cljs.core._nth.call(null,inst_21747,inst_21749);
var state_21794__$1 = state_21794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21794__$1,(13),out,inst_21754);
} else {
if((state_val_21795 === (18))){
var inst_21760 = (state_21794[(7)]);
var inst_21769 = cljs.core.first.call(null,inst_21760);
var state_21794__$1 = state_21794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21794__$1,(20),out,inst_21769);
} else {
if((state_val_21795 === (8))){
var inst_21749 = (state_21794[(11)]);
var inst_21748 = (state_21794[(12)]);
var inst_21751 = (inst_21749 < inst_21748);
var inst_21752 = inst_21751;
var state_21794__$1 = state_21794;
if(cljs.core.truth_(inst_21752)){
var statearr_21828_21856 = state_21794__$1;
(statearr_21828_21856[(1)] = (10));

} else {
var statearr_21829_21857 = state_21794__$1;
(statearr_21829_21857[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15271__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15271__auto____0 = (function (){
var statearr_21830 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21830[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15271__auto__);

(statearr_21830[(1)] = (1));

return statearr_21830;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15271__auto____1 = (function (state_21794){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21831){if((e21831 instanceof Object)){
var ex__15274__auto__ = e21831;
var statearr_21832_21858 = state_21794;
(statearr_21832_21858[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21859 = state_21794;
state_21794 = G__21859;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15271__auto__ = function(state_21794){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15271__auto____1.call(this,state_21794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15271__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15271__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21833 = f__17748__auto__.call(null);
(statearr_21833[(6)] = c__17747__auto__);

return statearr_21833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));

return c__17747__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21861 = arguments.length;
switch (G__21861) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__21864 = arguments.length;
switch (G__21864) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__21867 = arguments.length;
switch (G__21867) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17747__auto___21914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21891){
var state_val_21892 = (state_21891[(1)]);
if((state_val_21892 === (7))){
var inst_21886 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21893_21915 = state_21891__$1;
(statearr_21893_21915[(2)] = inst_21886);

(statearr_21893_21915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (1))){
var inst_21868 = null;
var state_21891__$1 = (function (){var statearr_21894 = state_21891;
(statearr_21894[(7)] = inst_21868);

return statearr_21894;
})();
var statearr_21895_21916 = state_21891__$1;
(statearr_21895_21916[(2)] = null);

(statearr_21895_21916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (4))){
var inst_21871 = (state_21891[(8)]);
var inst_21871__$1 = (state_21891[(2)]);
var inst_21872 = (inst_21871__$1 == null);
var inst_21873 = cljs.core.not.call(null,inst_21872);
var state_21891__$1 = (function (){var statearr_21896 = state_21891;
(statearr_21896[(8)] = inst_21871__$1);

return statearr_21896;
})();
if(inst_21873){
var statearr_21897_21917 = state_21891__$1;
(statearr_21897_21917[(1)] = (5));

} else {
var statearr_21898_21918 = state_21891__$1;
(statearr_21898_21918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (6))){
var state_21891__$1 = state_21891;
var statearr_21899_21919 = state_21891__$1;
(statearr_21899_21919[(2)] = null);

(statearr_21899_21919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (3))){
var inst_21888 = (state_21891[(2)]);
var inst_21889 = cljs.core.async.close_BANG_.call(null,out);
var state_21891__$1 = (function (){var statearr_21900 = state_21891;
(statearr_21900[(9)] = inst_21888);

return statearr_21900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21891__$1,inst_21889);
} else {
if((state_val_21892 === (2))){
var state_21891__$1 = state_21891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21891__$1,(4),ch);
} else {
if((state_val_21892 === (11))){
var inst_21871 = (state_21891[(8)]);
var inst_21880 = (state_21891[(2)]);
var inst_21868 = inst_21871;
var state_21891__$1 = (function (){var statearr_21901 = state_21891;
(statearr_21901[(10)] = inst_21880);

(statearr_21901[(7)] = inst_21868);

return statearr_21901;
})();
var statearr_21902_21920 = state_21891__$1;
(statearr_21902_21920[(2)] = null);

(statearr_21902_21920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (9))){
var inst_21871 = (state_21891[(8)]);
var state_21891__$1 = state_21891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21891__$1,(11),out,inst_21871);
} else {
if((state_val_21892 === (5))){
var inst_21871 = (state_21891[(8)]);
var inst_21868 = (state_21891[(7)]);
var inst_21875 = cljs.core._EQ_.call(null,inst_21871,inst_21868);
var state_21891__$1 = state_21891;
if(inst_21875){
var statearr_21904_21921 = state_21891__$1;
(statearr_21904_21921[(1)] = (8));

} else {
var statearr_21905_21922 = state_21891__$1;
(statearr_21905_21922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (10))){
var inst_21883 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21906_21923 = state_21891__$1;
(statearr_21906_21923[(2)] = inst_21883);

(statearr_21906_21923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (8))){
var inst_21868 = (state_21891[(7)]);
var tmp21903 = inst_21868;
var inst_21868__$1 = tmp21903;
var state_21891__$1 = (function (){var statearr_21907 = state_21891;
(statearr_21907[(7)] = inst_21868__$1);

return statearr_21907;
})();
var statearr_21908_21924 = state_21891__$1;
(statearr_21908_21924[(2)] = null);

(statearr_21908_21924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_21909 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21909[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_21909[(1)] = (1));

return statearr_21909;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_21891){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21910){if((e21910 instanceof Object)){
var ex__15274__auto__ = e21910;
var statearr_21911_21925 = state_21891;
(statearr_21911_21925[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21926 = state_21891;
state_21891 = G__21926;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_21891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_21891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21912 = f__17748__auto__.call(null);
(statearr_21912[(6)] = c__17747__auto___21914);

return statearr_21912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21928 = arguments.length;
switch (G__21928) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17747__auto___21994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_21966){
var state_val_21967 = (state_21966[(1)]);
if((state_val_21967 === (7))){
var inst_21962 = (state_21966[(2)]);
var state_21966__$1 = state_21966;
var statearr_21968_21995 = state_21966__$1;
(statearr_21968_21995[(2)] = inst_21962);

(statearr_21968_21995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (1))){
var inst_21929 = (new Array(n));
var inst_21930 = inst_21929;
var inst_21931 = (0);
var state_21966__$1 = (function (){var statearr_21969 = state_21966;
(statearr_21969[(7)] = inst_21930);

(statearr_21969[(8)] = inst_21931);

return statearr_21969;
})();
var statearr_21970_21996 = state_21966__$1;
(statearr_21970_21996[(2)] = null);

(statearr_21970_21996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (4))){
var inst_21934 = (state_21966[(9)]);
var inst_21934__$1 = (state_21966[(2)]);
var inst_21935 = (inst_21934__$1 == null);
var inst_21936 = cljs.core.not.call(null,inst_21935);
var state_21966__$1 = (function (){var statearr_21971 = state_21966;
(statearr_21971[(9)] = inst_21934__$1);

return statearr_21971;
})();
if(inst_21936){
var statearr_21972_21997 = state_21966__$1;
(statearr_21972_21997[(1)] = (5));

} else {
var statearr_21973_21998 = state_21966__$1;
(statearr_21973_21998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (15))){
var inst_21956 = (state_21966[(2)]);
var state_21966__$1 = state_21966;
var statearr_21974_21999 = state_21966__$1;
(statearr_21974_21999[(2)] = inst_21956);

(statearr_21974_21999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (13))){
var state_21966__$1 = state_21966;
var statearr_21975_22000 = state_21966__$1;
(statearr_21975_22000[(2)] = null);

(statearr_21975_22000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (6))){
var inst_21931 = (state_21966[(8)]);
var inst_21952 = (inst_21931 > (0));
var state_21966__$1 = state_21966;
if(cljs.core.truth_(inst_21952)){
var statearr_21976_22001 = state_21966__$1;
(statearr_21976_22001[(1)] = (12));

} else {
var statearr_21977_22002 = state_21966__$1;
(statearr_21977_22002[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (3))){
var inst_21964 = (state_21966[(2)]);
var state_21966__$1 = state_21966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21966__$1,inst_21964);
} else {
if((state_val_21967 === (12))){
var inst_21930 = (state_21966[(7)]);
var inst_21954 = cljs.core.vec.call(null,inst_21930);
var state_21966__$1 = state_21966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21966__$1,(15),out,inst_21954);
} else {
if((state_val_21967 === (2))){
var state_21966__$1 = state_21966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21966__$1,(4),ch);
} else {
if((state_val_21967 === (11))){
var inst_21946 = (state_21966[(2)]);
var inst_21947 = (new Array(n));
var inst_21930 = inst_21947;
var inst_21931 = (0);
var state_21966__$1 = (function (){var statearr_21978 = state_21966;
(statearr_21978[(7)] = inst_21930);

(statearr_21978[(10)] = inst_21946);

(statearr_21978[(8)] = inst_21931);

return statearr_21978;
})();
var statearr_21979_22003 = state_21966__$1;
(statearr_21979_22003[(2)] = null);

(statearr_21979_22003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (9))){
var inst_21930 = (state_21966[(7)]);
var inst_21944 = cljs.core.vec.call(null,inst_21930);
var state_21966__$1 = state_21966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21966__$1,(11),out,inst_21944);
} else {
if((state_val_21967 === (5))){
var inst_21934 = (state_21966[(9)]);
var inst_21939 = (state_21966[(11)]);
var inst_21930 = (state_21966[(7)]);
var inst_21931 = (state_21966[(8)]);
var inst_21938 = (inst_21930[inst_21931] = inst_21934);
var inst_21939__$1 = (inst_21931 + (1));
var inst_21940 = (inst_21939__$1 < n);
var state_21966__$1 = (function (){var statearr_21980 = state_21966;
(statearr_21980[(11)] = inst_21939__$1);

(statearr_21980[(12)] = inst_21938);

return statearr_21980;
})();
if(cljs.core.truth_(inst_21940)){
var statearr_21981_22004 = state_21966__$1;
(statearr_21981_22004[(1)] = (8));

} else {
var statearr_21982_22005 = state_21966__$1;
(statearr_21982_22005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (14))){
var inst_21959 = (state_21966[(2)]);
var inst_21960 = cljs.core.async.close_BANG_.call(null,out);
var state_21966__$1 = (function (){var statearr_21984 = state_21966;
(statearr_21984[(13)] = inst_21959);

return statearr_21984;
})();
var statearr_21985_22006 = state_21966__$1;
(statearr_21985_22006[(2)] = inst_21960);

(statearr_21985_22006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (10))){
var inst_21950 = (state_21966[(2)]);
var state_21966__$1 = state_21966;
var statearr_21986_22007 = state_21966__$1;
(statearr_21986_22007[(2)] = inst_21950);

(statearr_21986_22007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21967 === (8))){
var inst_21939 = (state_21966[(11)]);
var inst_21930 = (state_21966[(7)]);
var tmp21983 = inst_21930;
var inst_21930__$1 = tmp21983;
var inst_21931 = inst_21939;
var state_21966__$1 = (function (){var statearr_21987 = state_21966;
(statearr_21987[(7)] = inst_21930__$1);

(statearr_21987[(8)] = inst_21931);

return statearr_21987;
})();
var statearr_21988_22008 = state_21966__$1;
(statearr_21988_22008[(2)] = null);

(statearr_21988_22008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_21989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21989[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_21989[(1)] = (1));

return statearr_21989;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_21966){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_21966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e21990){if((e21990 instanceof Object)){
var ex__15274__auto__ = e21990;
var statearr_21991_22009 = state_21966;
(statearr_21991_22009[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22010 = state_21966;
state_21966 = G__22010;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_21966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_21966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_21992 = f__17748__auto__.call(null);
(statearr_21992[(6)] = c__17747__auto___21994);

return statearr_21992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22012 = arguments.length;
switch (G__22012) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__17747__auto___22082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__17748__auto__ = (function (){var switch__15270__auto__ = (function (state_22054){
var state_val_22055 = (state_22054[(1)]);
if((state_val_22055 === (7))){
var inst_22050 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22056_22083 = state_22054__$1;
(statearr_22056_22083[(2)] = inst_22050);

(statearr_22056_22083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (1))){
var inst_22013 = [];
var inst_22014 = inst_22013;
var inst_22015 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22054__$1 = (function (){var statearr_22057 = state_22054;
(statearr_22057[(7)] = inst_22015);

(statearr_22057[(8)] = inst_22014);

return statearr_22057;
})();
var statearr_22058_22084 = state_22054__$1;
(statearr_22058_22084[(2)] = null);

(statearr_22058_22084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (4))){
var inst_22018 = (state_22054[(9)]);
var inst_22018__$1 = (state_22054[(2)]);
var inst_22019 = (inst_22018__$1 == null);
var inst_22020 = cljs.core.not.call(null,inst_22019);
var state_22054__$1 = (function (){var statearr_22059 = state_22054;
(statearr_22059[(9)] = inst_22018__$1);

return statearr_22059;
})();
if(inst_22020){
var statearr_22060_22085 = state_22054__$1;
(statearr_22060_22085[(1)] = (5));

} else {
var statearr_22061_22086 = state_22054__$1;
(statearr_22061_22086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (15))){
var inst_22044 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22062_22087 = state_22054__$1;
(statearr_22062_22087[(2)] = inst_22044);

(statearr_22062_22087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (13))){
var state_22054__$1 = state_22054;
var statearr_22063_22088 = state_22054__$1;
(statearr_22063_22088[(2)] = null);

(statearr_22063_22088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (6))){
var inst_22014 = (state_22054[(8)]);
var inst_22039 = inst_22014.length;
var inst_22040 = (inst_22039 > (0));
var state_22054__$1 = state_22054;
if(cljs.core.truth_(inst_22040)){
var statearr_22064_22089 = state_22054__$1;
(statearr_22064_22089[(1)] = (12));

} else {
var statearr_22065_22090 = state_22054__$1;
(statearr_22065_22090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (3))){
var inst_22052 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22054__$1,inst_22052);
} else {
if((state_val_22055 === (12))){
var inst_22014 = (state_22054[(8)]);
var inst_22042 = cljs.core.vec.call(null,inst_22014);
var state_22054__$1 = state_22054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22054__$1,(15),out,inst_22042);
} else {
if((state_val_22055 === (2))){
var state_22054__$1 = state_22054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22054__$1,(4),ch);
} else {
if((state_val_22055 === (11))){
var inst_22018 = (state_22054[(9)]);
var inst_22022 = (state_22054[(10)]);
var inst_22032 = (state_22054[(2)]);
var inst_22033 = [];
var inst_22034 = inst_22033.push(inst_22018);
var inst_22014 = inst_22033;
var inst_22015 = inst_22022;
var state_22054__$1 = (function (){var statearr_22066 = state_22054;
(statearr_22066[(11)] = inst_22034);

(statearr_22066[(7)] = inst_22015);

(statearr_22066[(12)] = inst_22032);

(statearr_22066[(8)] = inst_22014);

return statearr_22066;
})();
var statearr_22067_22091 = state_22054__$1;
(statearr_22067_22091[(2)] = null);

(statearr_22067_22091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (9))){
var inst_22014 = (state_22054[(8)]);
var inst_22030 = cljs.core.vec.call(null,inst_22014);
var state_22054__$1 = state_22054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22054__$1,(11),out,inst_22030);
} else {
if((state_val_22055 === (5))){
var inst_22015 = (state_22054[(7)]);
var inst_22018 = (state_22054[(9)]);
var inst_22022 = (state_22054[(10)]);
var inst_22022__$1 = f.call(null,inst_22018);
var inst_22023 = cljs.core._EQ_.call(null,inst_22022__$1,inst_22015);
var inst_22024 = cljs.core.keyword_identical_QMARK_.call(null,inst_22015,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22025 = ((inst_22023) || (inst_22024));
var state_22054__$1 = (function (){var statearr_22068 = state_22054;
(statearr_22068[(10)] = inst_22022__$1);

return statearr_22068;
})();
if(cljs.core.truth_(inst_22025)){
var statearr_22069_22092 = state_22054__$1;
(statearr_22069_22092[(1)] = (8));

} else {
var statearr_22070_22093 = state_22054__$1;
(statearr_22070_22093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (14))){
var inst_22047 = (state_22054[(2)]);
var inst_22048 = cljs.core.async.close_BANG_.call(null,out);
var state_22054__$1 = (function (){var statearr_22072 = state_22054;
(statearr_22072[(13)] = inst_22047);

return statearr_22072;
})();
var statearr_22073_22094 = state_22054__$1;
(statearr_22073_22094[(2)] = inst_22048);

(statearr_22073_22094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (10))){
var inst_22037 = (state_22054[(2)]);
var state_22054__$1 = state_22054;
var statearr_22074_22095 = state_22054__$1;
(statearr_22074_22095[(2)] = inst_22037);

(statearr_22074_22095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22055 === (8))){
var inst_22018 = (state_22054[(9)]);
var inst_22022 = (state_22054[(10)]);
var inst_22014 = (state_22054[(8)]);
var inst_22027 = inst_22014.push(inst_22018);
var tmp22071 = inst_22014;
var inst_22014__$1 = tmp22071;
var inst_22015 = inst_22022;
var state_22054__$1 = (function (){var statearr_22075 = state_22054;
(statearr_22075[(7)] = inst_22015);

(statearr_22075[(14)] = inst_22027);

(statearr_22075[(8)] = inst_22014__$1);

return statearr_22075;
})();
var statearr_22076_22096 = state_22054__$1;
(statearr_22076_22096[(2)] = null);

(statearr_22076_22096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15271__auto__ = null;
var cljs$core$async$state_machine__15271__auto____0 = (function (){
var statearr_22077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22077[(0)] = cljs$core$async$state_machine__15271__auto__);

(statearr_22077[(1)] = (1));

return statearr_22077;
});
var cljs$core$async$state_machine__15271__auto____1 = (function (state_22054){
while(true){
var ret_value__15272__auto__ = (function (){try{while(true){
var result__15273__auto__ = switch__15270__auto__.call(null,state_22054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15273__auto__;
}
break;
}
}catch (e22078){if((e22078 instanceof Object)){
var ex__15274__auto__ = e22078;
var statearr_22079_22097 = state_22054;
(statearr_22079_22097[(5)] = ex__15274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22098 = state_22054;
state_22054 = G__22098;
continue;
} else {
return ret_value__15272__auto__;
}
break;
}
});
cljs$core$async$state_machine__15271__auto__ = function(state_22054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15271__auto____1.call(this,state_22054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15271__auto____0;
cljs$core$async$state_machine__15271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15271__auto____1;
return cljs$core$async$state_machine__15271__auto__;
})()
})();
var state__17749__auto__ = (function (){var statearr_22080 = f__17748__auto__.call(null);
(statearr_22080[(6)] = c__17747__auto___22082);

return statearr_22080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17749__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
