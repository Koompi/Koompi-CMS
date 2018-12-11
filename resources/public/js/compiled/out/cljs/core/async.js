// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29012 = arguments.length;
switch (G__29012) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29013 = (function (f,blockable,meta29014){
this.f = f;
this.blockable = blockable;
this.meta29014 = meta29014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29015,meta29014__$1){
var self__ = this;
var _29015__$1 = this;
return (new cljs.core.async.t_cljs$core$async29013(self__.f,self__.blockable,meta29014__$1));
});

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29015){
var self__ = this;
var _29015__$1 = this;
return self__.meta29014;
});

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29014","meta29014",1906307392,null)], null);
});

cljs.core.async.t_cljs$core$async29013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29013";

cljs.core.async.t_cljs$core$async29013.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29013");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29013.
 */
cljs.core.async.__GT_t_cljs$core$async29013 = (function cljs$core$async$__GT_t_cljs$core$async29013(f__$1,blockable__$1,meta29014){
return (new cljs.core.async.t_cljs$core$async29013(f__$1,blockable__$1,meta29014));
});

}

return (new cljs.core.async.t_cljs$core$async29013(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
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
var G__29019 = arguments.length;
switch (G__29019) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29022 = arguments.length;
switch (G__29022) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__29025 = arguments.length;
switch (G__29025) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29027 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29027);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29027,ret){
return (function (){
return fn1.call(null,val_29027);
});})(val_29027,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__29029 = arguments.length;
switch (G__29029) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___29031 = n;
var x_29032 = (0);
while(true){
if((x_29032 < n__4376__auto___29031)){
(a[x_29032] = (0));

var G__29033 = (x_29032 + (1));
x_29032 = G__29033;
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

var G__29034 = (i + (1));
i = G__29034;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29035 = (function (flag,meta29036){
this.flag = flag;
this.meta29036 = meta29036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29037,meta29036__$1){
var self__ = this;
var _29037__$1 = this;
return (new cljs.core.async.t_cljs$core$async29035(self__.flag,meta29036__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29037){
var self__ = this;
var _29037__$1 = this;
return self__.meta29036;
});})(flag))
;

cljs.core.async.t_cljs$core$async29035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29035.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29036","meta29036",-1550868648,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29035";

cljs.core.async.t_cljs$core$async29035.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29035");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29035.
 */
cljs.core.async.__GT_t_cljs$core$async29035 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29035(flag__$1,meta29036){
return (new cljs.core.async.t_cljs$core$async29035(flag__$1,meta29036));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29035(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29038 = (function (flag,cb,meta29039){
this.flag = flag;
this.cb = cb;
this.meta29039 = meta29039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29040,meta29039__$1){
var self__ = this;
var _29040__$1 = this;
return (new cljs.core.async.t_cljs$core$async29038(self__.flag,self__.cb,meta29039__$1));
});

cljs.core.async.t_cljs$core$async29038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29040){
var self__ = this;
var _29040__$1 = this;
return self__.meta29039;
});

cljs.core.async.t_cljs$core$async29038.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29039","meta29039",-31417928,null)], null);
});

cljs.core.async.t_cljs$core$async29038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29038";

cljs.core.async.t_cljs$core$async29038.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29038");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29038.
 */
cljs.core.async.__GT_t_cljs$core$async29038 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29038(flag__$1,cb__$1,meta29039){
return (new cljs.core.async.t_cljs$core$async29038(flag__$1,cb__$1,meta29039));
});

}

return (new cljs.core.async.t_cljs$core$async29038(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29041_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29041_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29042_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29042_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29043 = (i + (1));
i = G__29043;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___29049 = arguments.length;
var i__4500__auto___29050 = (0);
while(true){
if((i__4500__auto___29050 < len__4499__auto___29049)){
args__4502__auto__.push((arguments[i__4500__auto___29050]));

var G__29051 = (i__4500__auto___29050 + (1));
i__4500__auto___29050 = G__29051;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29046){
var map__29047 = p__29046;
var map__29047__$1 = ((((!((map__29047 == null)))?(((((map__29047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29047):map__29047);
var opts = map__29047__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29044){
var G__29045 = cljs.core.first.call(null,seq29044);
var seq29044__$1 = cljs.core.next.call(null,seq29044);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29045,seq29044__$1);
});

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
var G__29053 = arguments.length;
switch (G__29053) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28966__auto___29099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___29099){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___29099){
return (function (state_29077){
var state_val_29078 = (state_29077[(1)]);
if((state_val_29078 === (7))){
var inst_29073 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
var statearr_29079_29100 = state_29077__$1;
(statearr_29079_29100[(2)] = inst_29073);

(statearr_29079_29100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (1))){
var state_29077__$1 = state_29077;
var statearr_29080_29101 = state_29077__$1;
(statearr_29080_29101[(2)] = null);

(statearr_29080_29101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (4))){
var inst_29056 = (state_29077[(7)]);
var inst_29056__$1 = (state_29077[(2)]);
var inst_29057 = (inst_29056__$1 == null);
var state_29077__$1 = (function (){var statearr_29081 = state_29077;
(statearr_29081[(7)] = inst_29056__$1);

return statearr_29081;
})();
if(cljs.core.truth_(inst_29057)){
var statearr_29082_29102 = state_29077__$1;
(statearr_29082_29102[(1)] = (5));

} else {
var statearr_29083_29103 = state_29077__$1;
(statearr_29083_29103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (13))){
var state_29077__$1 = state_29077;
var statearr_29084_29104 = state_29077__$1;
(statearr_29084_29104[(2)] = null);

(statearr_29084_29104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (6))){
var inst_29056 = (state_29077[(7)]);
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29077__$1,(11),to,inst_29056);
} else {
if((state_val_29078 === (3))){
var inst_29075 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29077__$1,inst_29075);
} else {
if((state_val_29078 === (12))){
var state_29077__$1 = state_29077;
var statearr_29085_29105 = state_29077__$1;
(statearr_29085_29105[(2)] = null);

(statearr_29085_29105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (2))){
var state_29077__$1 = state_29077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29077__$1,(4),from);
} else {
if((state_val_29078 === (11))){
var inst_29066 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
if(cljs.core.truth_(inst_29066)){
var statearr_29086_29106 = state_29077__$1;
(statearr_29086_29106[(1)] = (12));

} else {
var statearr_29087_29107 = state_29077__$1;
(statearr_29087_29107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (9))){
var state_29077__$1 = state_29077;
var statearr_29088_29108 = state_29077__$1;
(statearr_29088_29108[(2)] = null);

(statearr_29088_29108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (5))){
var state_29077__$1 = state_29077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29089_29109 = state_29077__$1;
(statearr_29089_29109[(1)] = (8));

} else {
var statearr_29090_29110 = state_29077__$1;
(statearr_29090_29110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (14))){
var inst_29071 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
var statearr_29091_29111 = state_29077__$1;
(statearr_29091_29111[(2)] = inst_29071);

(statearr_29091_29111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (10))){
var inst_29063 = (state_29077[(2)]);
var state_29077__$1 = state_29077;
var statearr_29092_29112 = state_29077__$1;
(statearr_29092_29112[(2)] = inst_29063);

(statearr_29092_29112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (8))){
var inst_29060 = cljs.core.async.close_BANG_.call(null,to);
var state_29077__$1 = state_29077;
var statearr_29093_29113 = state_29077__$1;
(statearr_29093_29113[(2)] = inst_29060);

(statearr_29093_29113[(1)] = (10));


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
});})(c__28966__auto___29099))
;
return ((function (switch__28878__auto__,c__28966__auto___29099){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_29094 = [null,null,null,null,null,null,null,null];
(statearr_29094[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_29094[(1)] = (1));

return statearr_29094;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_29077){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29095){if((e29095 instanceof Object)){
var ex__28882__auto__ = e29095;
var statearr_29096_29114 = state_29077;
(statearr_29096_29114[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29115 = state_29077;
state_29077 = G__29115;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_29077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_29077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___29099))
})();
var state__28968__auto__ = (function (){var statearr_29097 = f__28967__auto__.call(null);
(statearr_29097[(6)] = c__28966__auto___29099);

return statearr_29097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___29099))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29116){
var vec__29117 = p__29116;
var v = cljs.core.nth.call(null,vec__29117,(0),null);
var p = cljs.core.nth.call(null,vec__29117,(1),null);
var job = vec__29117;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28966__auto___29288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___29288,res,vec__29117,v,p,job,jobs,results){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___29288,res,vec__29117,v,p,job,jobs,results){
return (function (state_29124){
var state_val_29125 = (state_29124[(1)]);
if((state_val_29125 === (1))){
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29124__$1,(2),res,v);
} else {
if((state_val_29125 === (2))){
var inst_29121 = (state_29124[(2)]);
var inst_29122 = cljs.core.async.close_BANG_.call(null,res);
var state_29124__$1 = (function (){var statearr_29126 = state_29124;
(statearr_29126[(7)] = inst_29121);

return statearr_29126;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29124__$1,inst_29122);
} else {
return null;
}
}
});})(c__28966__auto___29288,res,vec__29117,v,p,job,jobs,results))
;
return ((function (switch__28878__auto__,c__28966__auto___29288,res,vec__29117,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0 = (function (){
var statearr_29127 = [null,null,null,null,null,null,null,null];
(statearr_29127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__);

(statearr_29127[(1)] = (1));

return statearr_29127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1 = (function (state_29124){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29128){if((e29128 instanceof Object)){
var ex__28882__auto__ = e29128;
var statearr_29129_29289 = state_29124;
(statearr_29129_29289[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29290 = state_29124;
state_29124 = G__29290;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = function(state_29124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1.call(this,state_29124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___29288,res,vec__29117,v,p,job,jobs,results))
})();
var state__28968__auto__ = (function (){var statearr_29130 = f__28967__auto__.call(null);
(statearr_29130[(6)] = c__28966__auto___29288);

return statearr_29130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___29288,res,vec__29117,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29131){
var vec__29132 = p__29131;
var v = cljs.core.nth.call(null,vec__29132,(0),null);
var p = cljs.core.nth.call(null,vec__29132,(1),null);
var job = vec__29132;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___29291 = n;
var __29292 = (0);
while(true){
if((__29292 < n__4376__auto___29291)){
var G__29135_29293 = type;
var G__29135_29294__$1 = (((G__29135_29293 instanceof cljs.core.Keyword))?G__29135_29293.fqn:null);
switch (G__29135_29294__$1) {
case "compute":
var c__28966__auto___29296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29292,c__28966__auto___29296,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (__29292,c__28966__auto___29296,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async){
return (function (state_29148){
var state_val_29149 = (state_29148[(1)]);
if((state_val_29149 === (1))){
var state_29148__$1 = state_29148;
var statearr_29150_29297 = state_29148__$1;
(statearr_29150_29297[(2)] = null);

(statearr_29150_29297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (2))){
var state_29148__$1 = state_29148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29148__$1,(4),jobs);
} else {
if((state_val_29149 === (3))){
var inst_29146 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29148__$1,inst_29146);
} else {
if((state_val_29149 === (4))){
var inst_29138 = (state_29148[(2)]);
var inst_29139 = process.call(null,inst_29138);
var state_29148__$1 = state_29148;
if(cljs.core.truth_(inst_29139)){
var statearr_29151_29298 = state_29148__$1;
(statearr_29151_29298[(1)] = (5));

} else {
var statearr_29152_29299 = state_29148__$1;
(statearr_29152_29299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (5))){
var state_29148__$1 = state_29148;
var statearr_29153_29300 = state_29148__$1;
(statearr_29153_29300[(2)] = null);

(statearr_29153_29300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (6))){
var state_29148__$1 = state_29148;
var statearr_29154_29301 = state_29148__$1;
(statearr_29154_29301[(2)] = null);

(statearr_29154_29301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29149 === (7))){
var inst_29144 = (state_29148[(2)]);
var state_29148__$1 = state_29148;
var statearr_29155_29302 = state_29148__$1;
(statearr_29155_29302[(2)] = inst_29144);

(statearr_29155_29302[(1)] = (3));


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
});})(__29292,c__28966__auto___29296,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async))
;
return ((function (__29292,switch__28878__auto__,c__28966__auto___29296,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0 = (function (){
var statearr_29156 = [null,null,null,null,null,null,null];
(statearr_29156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__);

(statearr_29156[(1)] = (1));

return statearr_29156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1 = (function (state_29148){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29157){if((e29157 instanceof Object)){
var ex__28882__auto__ = e29157;
var statearr_29158_29303 = state_29148;
(statearr_29158_29303[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29304 = state_29148;
state_29148 = G__29304;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = function(state_29148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1.call(this,state_29148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__;
})()
;})(__29292,switch__28878__auto__,c__28966__auto___29296,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async))
})();
var state__28968__auto__ = (function (){var statearr_29159 = f__28967__auto__.call(null);
(statearr_29159[(6)] = c__28966__auto___29296);

return statearr_29159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(__29292,c__28966__auto___29296,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async))
);


break;
case "async":
var c__28966__auto___29305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29292,c__28966__auto___29305,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (__29292,c__28966__auto___29305,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async){
return (function (state_29172){
var state_val_29173 = (state_29172[(1)]);
if((state_val_29173 === (1))){
var state_29172__$1 = state_29172;
var statearr_29174_29306 = state_29172__$1;
(statearr_29174_29306[(2)] = null);

(statearr_29174_29306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29173 === (2))){
var state_29172__$1 = state_29172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29172__$1,(4),jobs);
} else {
if((state_val_29173 === (3))){
var inst_29170 = (state_29172[(2)]);
var state_29172__$1 = state_29172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29172__$1,inst_29170);
} else {
if((state_val_29173 === (4))){
var inst_29162 = (state_29172[(2)]);
var inst_29163 = async.call(null,inst_29162);
var state_29172__$1 = state_29172;
if(cljs.core.truth_(inst_29163)){
var statearr_29175_29307 = state_29172__$1;
(statearr_29175_29307[(1)] = (5));

} else {
var statearr_29176_29308 = state_29172__$1;
(statearr_29176_29308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29173 === (5))){
var state_29172__$1 = state_29172;
var statearr_29177_29309 = state_29172__$1;
(statearr_29177_29309[(2)] = null);

(statearr_29177_29309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29173 === (6))){
var state_29172__$1 = state_29172;
var statearr_29178_29310 = state_29172__$1;
(statearr_29178_29310[(2)] = null);

(statearr_29178_29310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29173 === (7))){
var inst_29168 = (state_29172[(2)]);
var state_29172__$1 = state_29172;
var statearr_29179_29311 = state_29172__$1;
(statearr_29179_29311[(2)] = inst_29168);

(statearr_29179_29311[(1)] = (3));


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
});})(__29292,c__28966__auto___29305,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async))
;
return ((function (__29292,switch__28878__auto__,c__28966__auto___29305,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0 = (function (){
var statearr_29180 = [null,null,null,null,null,null,null];
(statearr_29180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__);

(statearr_29180[(1)] = (1));

return statearr_29180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1 = (function (state_29172){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29181){if((e29181 instanceof Object)){
var ex__28882__auto__ = e29181;
var statearr_29182_29312 = state_29172;
(statearr_29182_29312[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29313 = state_29172;
state_29172 = G__29313;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = function(state_29172){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1.call(this,state_29172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__;
})()
;})(__29292,switch__28878__auto__,c__28966__auto___29305,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async))
})();
var state__28968__auto__ = (function (){var statearr_29183 = f__28967__auto__.call(null);
(statearr_29183[(6)] = c__28966__auto___29305);

return statearr_29183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(__29292,c__28966__auto___29305,G__29135_29293,G__29135_29294__$1,n__4376__auto___29291,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29135_29294__$1)].join('')));

}

var G__29314 = (__29292 + (1));
__29292 = G__29314;
continue;
} else {
}
break;
}

var c__28966__auto___29315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___29315,jobs,results,process,async){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___29315,jobs,results,process,async){
return (function (state_29205){
var state_val_29206 = (state_29205[(1)]);
if((state_val_29206 === (1))){
var state_29205__$1 = state_29205;
var statearr_29207_29316 = state_29205__$1;
(statearr_29207_29316[(2)] = null);

(statearr_29207_29316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (2))){
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29205__$1,(4),from);
} else {
if((state_val_29206 === (3))){
var inst_29203 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29205__$1,inst_29203);
} else {
if((state_val_29206 === (4))){
var inst_29186 = (state_29205[(7)]);
var inst_29186__$1 = (state_29205[(2)]);
var inst_29187 = (inst_29186__$1 == null);
var state_29205__$1 = (function (){var statearr_29208 = state_29205;
(statearr_29208[(7)] = inst_29186__$1);

return statearr_29208;
})();
if(cljs.core.truth_(inst_29187)){
var statearr_29209_29317 = state_29205__$1;
(statearr_29209_29317[(1)] = (5));

} else {
var statearr_29210_29318 = state_29205__$1;
(statearr_29210_29318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (5))){
var inst_29189 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29205__$1 = state_29205;
var statearr_29211_29319 = state_29205__$1;
(statearr_29211_29319[(2)] = inst_29189);

(statearr_29211_29319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (6))){
var inst_29191 = (state_29205[(8)]);
var inst_29186 = (state_29205[(7)]);
var inst_29191__$1 = cljs.core.async.chan.call(null,(1));
var inst_29192 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29193 = [inst_29186,inst_29191__$1];
var inst_29194 = (new cljs.core.PersistentVector(null,2,(5),inst_29192,inst_29193,null));
var state_29205__$1 = (function (){var statearr_29212 = state_29205;
(statearr_29212[(8)] = inst_29191__$1);

return statearr_29212;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29205__$1,(8),jobs,inst_29194);
} else {
if((state_val_29206 === (7))){
var inst_29201 = (state_29205[(2)]);
var state_29205__$1 = state_29205;
var statearr_29213_29320 = state_29205__$1;
(statearr_29213_29320[(2)] = inst_29201);

(statearr_29213_29320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29206 === (8))){
var inst_29191 = (state_29205[(8)]);
var inst_29196 = (state_29205[(2)]);
var state_29205__$1 = (function (){var statearr_29214 = state_29205;
(statearr_29214[(9)] = inst_29196);

return statearr_29214;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29205__$1,(9),results,inst_29191);
} else {
if((state_val_29206 === (9))){
var inst_29198 = (state_29205[(2)]);
var state_29205__$1 = (function (){var statearr_29215 = state_29205;
(statearr_29215[(10)] = inst_29198);

return statearr_29215;
})();
var statearr_29216_29321 = state_29205__$1;
(statearr_29216_29321[(2)] = null);

(statearr_29216_29321[(1)] = (2));


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
});})(c__28966__auto___29315,jobs,results,process,async))
;
return ((function (switch__28878__auto__,c__28966__auto___29315,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0 = (function (){
var statearr_29217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__);

(statearr_29217[(1)] = (1));

return statearr_29217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1 = (function (state_29205){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29218){if((e29218 instanceof Object)){
var ex__28882__auto__ = e29218;
var statearr_29219_29322 = state_29205;
(statearr_29219_29322[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29323 = state_29205;
state_29205 = G__29323;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = function(state_29205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1.call(this,state_29205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___29315,jobs,results,process,async))
})();
var state__28968__auto__ = (function (){var statearr_29220 = f__28967__auto__.call(null);
(statearr_29220[(6)] = c__28966__auto___29315);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___29315,jobs,results,process,async))
);


var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__,jobs,results,process,async){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__,jobs,results,process,async){
return (function (state_29258){
var state_val_29259 = (state_29258[(1)]);
if((state_val_29259 === (7))){
var inst_29254 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29260_29324 = state_29258__$1;
(statearr_29260_29324[(2)] = inst_29254);

(statearr_29260_29324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (20))){
var state_29258__$1 = state_29258;
var statearr_29261_29325 = state_29258__$1;
(statearr_29261_29325[(2)] = null);

(statearr_29261_29325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (1))){
var state_29258__$1 = state_29258;
var statearr_29262_29326 = state_29258__$1;
(statearr_29262_29326[(2)] = null);

(statearr_29262_29326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (4))){
var inst_29223 = (state_29258[(7)]);
var inst_29223__$1 = (state_29258[(2)]);
var inst_29224 = (inst_29223__$1 == null);
var state_29258__$1 = (function (){var statearr_29263 = state_29258;
(statearr_29263[(7)] = inst_29223__$1);

return statearr_29263;
})();
if(cljs.core.truth_(inst_29224)){
var statearr_29264_29327 = state_29258__$1;
(statearr_29264_29327[(1)] = (5));

} else {
var statearr_29265_29328 = state_29258__$1;
(statearr_29265_29328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (15))){
var inst_29236 = (state_29258[(8)]);
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29258__$1,(18),to,inst_29236);
} else {
if((state_val_29259 === (21))){
var inst_29249 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29266_29329 = state_29258__$1;
(statearr_29266_29329[(2)] = inst_29249);

(statearr_29266_29329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (13))){
var inst_29251 = (state_29258[(2)]);
var state_29258__$1 = (function (){var statearr_29267 = state_29258;
(statearr_29267[(9)] = inst_29251);

return statearr_29267;
})();
var statearr_29268_29330 = state_29258__$1;
(statearr_29268_29330[(2)] = null);

(statearr_29268_29330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (6))){
var inst_29223 = (state_29258[(7)]);
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29258__$1,(11),inst_29223);
} else {
if((state_val_29259 === (17))){
var inst_29244 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
if(cljs.core.truth_(inst_29244)){
var statearr_29269_29331 = state_29258__$1;
(statearr_29269_29331[(1)] = (19));

} else {
var statearr_29270_29332 = state_29258__$1;
(statearr_29270_29332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (3))){
var inst_29256 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29258__$1,inst_29256);
} else {
if((state_val_29259 === (12))){
var inst_29233 = (state_29258[(10)]);
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29258__$1,(14),inst_29233);
} else {
if((state_val_29259 === (2))){
var state_29258__$1 = state_29258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29258__$1,(4),results);
} else {
if((state_val_29259 === (19))){
var state_29258__$1 = state_29258;
var statearr_29271_29333 = state_29258__$1;
(statearr_29271_29333[(2)] = null);

(statearr_29271_29333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (11))){
var inst_29233 = (state_29258[(2)]);
var state_29258__$1 = (function (){var statearr_29272 = state_29258;
(statearr_29272[(10)] = inst_29233);

return statearr_29272;
})();
var statearr_29273_29334 = state_29258__$1;
(statearr_29273_29334[(2)] = null);

(statearr_29273_29334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (9))){
var state_29258__$1 = state_29258;
var statearr_29274_29335 = state_29258__$1;
(statearr_29274_29335[(2)] = null);

(statearr_29274_29335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (5))){
var state_29258__$1 = state_29258;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29275_29336 = state_29258__$1;
(statearr_29275_29336[(1)] = (8));

} else {
var statearr_29276_29337 = state_29258__$1;
(statearr_29276_29337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (14))){
var inst_29236 = (state_29258[(8)]);
var inst_29238 = (state_29258[(11)]);
var inst_29236__$1 = (state_29258[(2)]);
var inst_29237 = (inst_29236__$1 == null);
var inst_29238__$1 = cljs.core.not.call(null,inst_29237);
var state_29258__$1 = (function (){var statearr_29277 = state_29258;
(statearr_29277[(8)] = inst_29236__$1);

(statearr_29277[(11)] = inst_29238__$1);

return statearr_29277;
})();
if(inst_29238__$1){
var statearr_29278_29338 = state_29258__$1;
(statearr_29278_29338[(1)] = (15));

} else {
var statearr_29279_29339 = state_29258__$1;
(statearr_29279_29339[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (16))){
var inst_29238 = (state_29258[(11)]);
var state_29258__$1 = state_29258;
var statearr_29280_29340 = state_29258__$1;
(statearr_29280_29340[(2)] = inst_29238);

(statearr_29280_29340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (10))){
var inst_29230 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29281_29341 = state_29258__$1;
(statearr_29281_29341[(2)] = inst_29230);

(statearr_29281_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (18))){
var inst_29241 = (state_29258[(2)]);
var state_29258__$1 = state_29258;
var statearr_29282_29342 = state_29258__$1;
(statearr_29282_29342[(2)] = inst_29241);

(statearr_29282_29342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29259 === (8))){
var inst_29227 = cljs.core.async.close_BANG_.call(null,to);
var state_29258__$1 = state_29258;
var statearr_29283_29343 = state_29258__$1;
(statearr_29283_29343[(2)] = inst_29227);

(statearr_29283_29343[(1)] = (10));


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
});})(c__28966__auto__,jobs,results,process,async))
;
return ((function (switch__28878__auto__,c__28966__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0 = (function (){
var statearr_29284 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__);

(statearr_29284[(1)] = (1));

return statearr_29284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1 = (function (state_29258){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29285){if((e29285 instanceof Object)){
var ex__28882__auto__ = e29285;
var statearr_29286_29344 = state_29258;
(statearr_29286_29344[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29345 = state_29258;
state_29258 = G__29345;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__ = function(state_29258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1.call(this,state_29258);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__,jobs,results,process,async))
})();
var state__28968__auto__ = (function (){var statearr_29287 = f__28967__auto__.call(null);
(statearr_29287[(6)] = c__28966__auto__);

return statearr_29287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__,jobs,results,process,async))
);

return c__28966__auto__;
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
var G__29347 = arguments.length;
switch (G__29347) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__29350 = arguments.length;
switch (G__29350) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__29353 = arguments.length;
switch (G__29353) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28966__auto___29402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___29402,tc,fc){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___29402,tc,fc){
return (function (state_29379){
var state_val_29380 = (state_29379[(1)]);
if((state_val_29380 === (7))){
var inst_29375 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29381_29403 = state_29379__$1;
(statearr_29381_29403[(2)] = inst_29375);

(statearr_29381_29403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (1))){
var state_29379__$1 = state_29379;
var statearr_29382_29404 = state_29379__$1;
(statearr_29382_29404[(2)] = null);

(statearr_29382_29404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (4))){
var inst_29356 = (state_29379[(7)]);
var inst_29356__$1 = (state_29379[(2)]);
var inst_29357 = (inst_29356__$1 == null);
var state_29379__$1 = (function (){var statearr_29383 = state_29379;
(statearr_29383[(7)] = inst_29356__$1);

return statearr_29383;
})();
if(cljs.core.truth_(inst_29357)){
var statearr_29384_29405 = state_29379__$1;
(statearr_29384_29405[(1)] = (5));

} else {
var statearr_29385_29406 = state_29379__$1;
(statearr_29385_29406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (13))){
var state_29379__$1 = state_29379;
var statearr_29386_29407 = state_29379__$1;
(statearr_29386_29407[(2)] = null);

(statearr_29386_29407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (6))){
var inst_29356 = (state_29379[(7)]);
var inst_29362 = p.call(null,inst_29356);
var state_29379__$1 = state_29379;
if(cljs.core.truth_(inst_29362)){
var statearr_29387_29408 = state_29379__$1;
(statearr_29387_29408[(1)] = (9));

} else {
var statearr_29388_29409 = state_29379__$1;
(statearr_29388_29409[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (3))){
var inst_29377 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29379__$1,inst_29377);
} else {
if((state_val_29380 === (12))){
var state_29379__$1 = state_29379;
var statearr_29389_29410 = state_29379__$1;
(statearr_29389_29410[(2)] = null);

(statearr_29389_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (2))){
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29379__$1,(4),ch);
} else {
if((state_val_29380 === (11))){
var inst_29356 = (state_29379[(7)]);
var inst_29366 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29379__$1,(8),inst_29366,inst_29356);
} else {
if((state_val_29380 === (9))){
var state_29379__$1 = state_29379;
var statearr_29390_29411 = state_29379__$1;
(statearr_29390_29411[(2)] = tc);

(statearr_29390_29411[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (5))){
var inst_29359 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29360 = cljs.core.async.close_BANG_.call(null,fc);
var state_29379__$1 = (function (){var statearr_29391 = state_29379;
(statearr_29391[(8)] = inst_29359);

return statearr_29391;
})();
var statearr_29392_29412 = state_29379__$1;
(statearr_29392_29412[(2)] = inst_29360);

(statearr_29392_29412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (14))){
var inst_29373 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29393_29413 = state_29379__$1;
(statearr_29393_29413[(2)] = inst_29373);

(statearr_29393_29413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (10))){
var state_29379__$1 = state_29379;
var statearr_29394_29414 = state_29379__$1;
(statearr_29394_29414[(2)] = fc);

(statearr_29394_29414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (8))){
var inst_29368 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
if(cljs.core.truth_(inst_29368)){
var statearr_29395_29415 = state_29379__$1;
(statearr_29395_29415[(1)] = (12));

} else {
var statearr_29396_29416 = state_29379__$1;
(statearr_29396_29416[(1)] = (13));

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
});})(c__28966__auto___29402,tc,fc))
;
return ((function (switch__28878__auto__,c__28966__auto___29402,tc,fc){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_29397 = [null,null,null,null,null,null,null,null,null];
(statearr_29397[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_29397[(1)] = (1));

return statearr_29397;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_29379){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29398){if((e29398 instanceof Object)){
var ex__28882__auto__ = e29398;
var statearr_29399_29417 = state_29379;
(statearr_29399_29417[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29418 = state_29379;
state_29379 = G__29418;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_29379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_29379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___29402,tc,fc))
})();
var state__28968__auto__ = (function (){var statearr_29400 = f__28967__auto__.call(null);
(statearr_29400[(6)] = c__28966__auto___29402);

return statearr_29400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___29402,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__){
return (function (state_29439){
var state_val_29440 = (state_29439[(1)]);
if((state_val_29440 === (7))){
var inst_29435 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29441_29459 = state_29439__$1;
(statearr_29441_29459[(2)] = inst_29435);

(statearr_29441_29459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (1))){
var inst_29419 = init;
var state_29439__$1 = (function (){var statearr_29442 = state_29439;
(statearr_29442[(7)] = inst_29419);

return statearr_29442;
})();
var statearr_29443_29460 = state_29439__$1;
(statearr_29443_29460[(2)] = null);

(statearr_29443_29460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (4))){
var inst_29422 = (state_29439[(8)]);
var inst_29422__$1 = (state_29439[(2)]);
var inst_29423 = (inst_29422__$1 == null);
var state_29439__$1 = (function (){var statearr_29444 = state_29439;
(statearr_29444[(8)] = inst_29422__$1);

return statearr_29444;
})();
if(cljs.core.truth_(inst_29423)){
var statearr_29445_29461 = state_29439__$1;
(statearr_29445_29461[(1)] = (5));

} else {
var statearr_29446_29462 = state_29439__$1;
(statearr_29446_29462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (6))){
var inst_29426 = (state_29439[(9)]);
var inst_29422 = (state_29439[(8)]);
var inst_29419 = (state_29439[(7)]);
var inst_29426__$1 = f.call(null,inst_29419,inst_29422);
var inst_29427 = cljs.core.reduced_QMARK_.call(null,inst_29426__$1);
var state_29439__$1 = (function (){var statearr_29447 = state_29439;
(statearr_29447[(9)] = inst_29426__$1);

return statearr_29447;
})();
if(inst_29427){
var statearr_29448_29463 = state_29439__$1;
(statearr_29448_29463[(1)] = (8));

} else {
var statearr_29449_29464 = state_29439__$1;
(statearr_29449_29464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (3))){
var inst_29437 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else {
if((state_val_29440 === (2))){
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(4),ch);
} else {
if((state_val_29440 === (9))){
var inst_29426 = (state_29439[(9)]);
var inst_29419 = inst_29426;
var state_29439__$1 = (function (){var statearr_29450 = state_29439;
(statearr_29450[(7)] = inst_29419);

return statearr_29450;
})();
var statearr_29451_29465 = state_29439__$1;
(statearr_29451_29465[(2)] = null);

(statearr_29451_29465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (5))){
var inst_29419 = (state_29439[(7)]);
var state_29439__$1 = state_29439;
var statearr_29452_29466 = state_29439__$1;
(statearr_29452_29466[(2)] = inst_29419);

(statearr_29452_29466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (10))){
var inst_29433 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29453_29467 = state_29439__$1;
(statearr_29453_29467[(2)] = inst_29433);

(statearr_29453_29467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (8))){
var inst_29426 = (state_29439[(9)]);
var inst_29429 = cljs.core.deref.call(null,inst_29426);
var state_29439__$1 = state_29439;
var statearr_29454_29468 = state_29439__$1;
(statearr_29454_29468[(2)] = inst_29429);

(statearr_29454_29468[(1)] = (10));


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
});})(c__28966__auto__))
;
return ((function (switch__28878__auto__,c__28966__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28879__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28879__auto____0 = (function (){
var statearr_29455 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29455[(0)] = cljs$core$async$reduce_$_state_machine__28879__auto__);

(statearr_29455[(1)] = (1));

return statearr_29455;
});
var cljs$core$async$reduce_$_state_machine__28879__auto____1 = (function (state_29439){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29456){if((e29456 instanceof Object)){
var ex__28882__auto__ = e29456;
var statearr_29457_29469 = state_29439;
(statearr_29457_29469[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29470 = state_29439;
state_29439 = G__29470;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28879__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28879__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28879__auto____0;
cljs$core$async$reduce_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28879__auto____1;
return cljs$core$async$reduce_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__))
})();
var state__28968__auto__ = (function (){var statearr_29458 = f__28967__auto__.call(null);
(statearr_29458[(6)] = c__28966__auto__);

return statearr_29458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__))
);

return c__28966__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__,f__$1){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__,f__$1){
return (function (state_29476){
var state_val_29477 = (state_29476[(1)]);
if((state_val_29477 === (1))){
var inst_29471 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_29476__$1 = state_29476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29476__$1,(2),inst_29471);
} else {
if((state_val_29477 === (2))){
var inst_29473 = (state_29476[(2)]);
var inst_29474 = f__$1.call(null,inst_29473);
var state_29476__$1 = state_29476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29476__$1,inst_29474);
} else {
return null;
}
}
});})(c__28966__auto__,f__$1))
;
return ((function (switch__28878__auto__,c__28966__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28879__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28879__auto____0 = (function (){
var statearr_29478 = [null,null,null,null,null,null,null];
(statearr_29478[(0)] = cljs$core$async$transduce_$_state_machine__28879__auto__);

(statearr_29478[(1)] = (1));

return statearr_29478;
});
var cljs$core$async$transduce_$_state_machine__28879__auto____1 = (function (state_29476){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29479){if((e29479 instanceof Object)){
var ex__28882__auto__ = e29479;
var statearr_29480_29482 = state_29476;
(statearr_29480_29482[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29483 = state_29476;
state_29476 = G__29483;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28879__auto__ = function(state_29476){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28879__auto____1.call(this,state_29476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28879__auto____0;
cljs$core$async$transduce_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28879__auto____1;
return cljs$core$async$transduce_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__,f__$1))
})();
var state__28968__auto__ = (function (){var statearr_29481 = f__28967__auto__.call(null);
(statearr_29481[(6)] = c__28966__auto__);

return statearr_29481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__,f__$1))
);

return c__28966__auto__;
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
var G__29485 = arguments.length;
switch (G__29485) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__){
return (function (state_29510){
var state_val_29511 = (state_29510[(1)]);
if((state_val_29511 === (7))){
var inst_29492 = (state_29510[(2)]);
var state_29510__$1 = state_29510;
var statearr_29512_29533 = state_29510__$1;
(statearr_29512_29533[(2)] = inst_29492);

(statearr_29512_29533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (1))){
var inst_29486 = cljs.core.seq.call(null,coll);
var inst_29487 = inst_29486;
var state_29510__$1 = (function (){var statearr_29513 = state_29510;
(statearr_29513[(7)] = inst_29487);

return statearr_29513;
})();
var statearr_29514_29534 = state_29510__$1;
(statearr_29514_29534[(2)] = null);

(statearr_29514_29534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (4))){
var inst_29487 = (state_29510[(7)]);
var inst_29490 = cljs.core.first.call(null,inst_29487);
var state_29510__$1 = state_29510;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29510__$1,(7),ch,inst_29490);
} else {
if((state_val_29511 === (13))){
var inst_29504 = (state_29510[(2)]);
var state_29510__$1 = state_29510;
var statearr_29515_29535 = state_29510__$1;
(statearr_29515_29535[(2)] = inst_29504);

(statearr_29515_29535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (6))){
var inst_29495 = (state_29510[(2)]);
var state_29510__$1 = state_29510;
if(cljs.core.truth_(inst_29495)){
var statearr_29516_29536 = state_29510__$1;
(statearr_29516_29536[(1)] = (8));

} else {
var statearr_29517_29537 = state_29510__$1;
(statearr_29517_29537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (3))){
var inst_29508 = (state_29510[(2)]);
var state_29510__$1 = state_29510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29510__$1,inst_29508);
} else {
if((state_val_29511 === (12))){
var state_29510__$1 = state_29510;
var statearr_29518_29538 = state_29510__$1;
(statearr_29518_29538[(2)] = null);

(statearr_29518_29538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (2))){
var inst_29487 = (state_29510[(7)]);
var state_29510__$1 = state_29510;
if(cljs.core.truth_(inst_29487)){
var statearr_29519_29539 = state_29510__$1;
(statearr_29519_29539[(1)] = (4));

} else {
var statearr_29520_29540 = state_29510__$1;
(statearr_29520_29540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (11))){
var inst_29501 = cljs.core.async.close_BANG_.call(null,ch);
var state_29510__$1 = state_29510;
var statearr_29521_29541 = state_29510__$1;
(statearr_29521_29541[(2)] = inst_29501);

(statearr_29521_29541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (9))){
var state_29510__$1 = state_29510;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29522_29542 = state_29510__$1;
(statearr_29522_29542[(1)] = (11));

} else {
var statearr_29523_29543 = state_29510__$1;
(statearr_29523_29543[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (5))){
var inst_29487 = (state_29510[(7)]);
var state_29510__$1 = state_29510;
var statearr_29524_29544 = state_29510__$1;
(statearr_29524_29544[(2)] = inst_29487);

(statearr_29524_29544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (10))){
var inst_29506 = (state_29510[(2)]);
var state_29510__$1 = state_29510;
var statearr_29525_29545 = state_29510__$1;
(statearr_29525_29545[(2)] = inst_29506);

(statearr_29525_29545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29511 === (8))){
var inst_29487 = (state_29510[(7)]);
var inst_29497 = cljs.core.next.call(null,inst_29487);
var inst_29487__$1 = inst_29497;
var state_29510__$1 = (function (){var statearr_29526 = state_29510;
(statearr_29526[(7)] = inst_29487__$1);

return statearr_29526;
})();
var statearr_29527_29546 = state_29510__$1;
(statearr_29527_29546[(2)] = null);

(statearr_29527_29546[(1)] = (2));


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
});})(c__28966__auto__))
;
return ((function (switch__28878__auto__,c__28966__auto__){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_29528 = [null,null,null,null,null,null,null,null];
(statearr_29528[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_29528[(1)] = (1));

return statearr_29528;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_29510){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29529){if((e29529 instanceof Object)){
var ex__28882__auto__ = e29529;
var statearr_29530_29547 = state_29510;
(statearr_29530_29547[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29548 = state_29510;
state_29510 = G__29548;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_29510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_29510);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__))
})();
var state__28968__auto__ = (function (){var statearr_29531 = f__28967__auto__.call(null);
(statearr_29531[(6)] = c__28966__auto__);

return statearr_29531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__))
);

return c__28966__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
if(typeof cljs.core.async.t_cljs$core$async29549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29549 = (function (ch,cs,meta29550){
this.ch = ch;
this.cs = cs;
this.meta29550 = meta29550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29551,meta29550__$1){
var self__ = this;
var _29551__$1 = this;
return (new cljs.core.async.t_cljs$core$async29549(self__.ch,self__.cs,meta29550__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29551){
var self__ = this;
var _29551__$1 = this;
return self__.meta29550;
});})(cs))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29549.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29549.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29550","meta29550",821529584,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29549";

cljs.core.async.t_cljs$core$async29549.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29549");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29549.
 */
cljs.core.async.__GT_t_cljs$core$async29549 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29549(ch__$1,cs__$1,meta29550){
return (new cljs.core.async.t_cljs$core$async29549(ch__$1,cs__$1,meta29550));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29549(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28966__auto___29771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___29771,cs,m,dchan,dctr,done){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___29771,cs,m,dchan,dctr,done){
return (function (state_29686){
var state_val_29687 = (state_29686[(1)]);
if((state_val_29687 === (7))){
var inst_29682 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29688_29772 = state_29686__$1;
(statearr_29688_29772[(2)] = inst_29682);

(statearr_29688_29772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (20))){
var inst_29585 = (state_29686[(7)]);
var inst_29597 = cljs.core.first.call(null,inst_29585);
var inst_29598 = cljs.core.nth.call(null,inst_29597,(0),null);
var inst_29599 = cljs.core.nth.call(null,inst_29597,(1),null);
var state_29686__$1 = (function (){var statearr_29689 = state_29686;
(statearr_29689[(8)] = inst_29598);

return statearr_29689;
})();
if(cljs.core.truth_(inst_29599)){
var statearr_29690_29773 = state_29686__$1;
(statearr_29690_29773[(1)] = (22));

} else {
var statearr_29691_29774 = state_29686__$1;
(statearr_29691_29774[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (27))){
var inst_29554 = (state_29686[(9)]);
var inst_29627 = (state_29686[(10)]);
var inst_29629 = (state_29686[(11)]);
var inst_29634 = (state_29686[(12)]);
var inst_29634__$1 = cljs.core._nth.call(null,inst_29627,inst_29629);
var inst_29635 = cljs.core.async.put_BANG_.call(null,inst_29634__$1,inst_29554,done);
var state_29686__$1 = (function (){var statearr_29692 = state_29686;
(statearr_29692[(12)] = inst_29634__$1);

return statearr_29692;
})();
if(cljs.core.truth_(inst_29635)){
var statearr_29693_29775 = state_29686__$1;
(statearr_29693_29775[(1)] = (30));

} else {
var statearr_29694_29776 = state_29686__$1;
(statearr_29694_29776[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (1))){
var state_29686__$1 = state_29686;
var statearr_29695_29777 = state_29686__$1;
(statearr_29695_29777[(2)] = null);

(statearr_29695_29777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (24))){
var inst_29585 = (state_29686[(7)]);
var inst_29604 = (state_29686[(2)]);
var inst_29605 = cljs.core.next.call(null,inst_29585);
var inst_29563 = inst_29605;
var inst_29564 = null;
var inst_29565 = (0);
var inst_29566 = (0);
var state_29686__$1 = (function (){var statearr_29696 = state_29686;
(statearr_29696[(13)] = inst_29564);

(statearr_29696[(14)] = inst_29604);

(statearr_29696[(15)] = inst_29565);

(statearr_29696[(16)] = inst_29563);

(statearr_29696[(17)] = inst_29566);

return statearr_29696;
})();
var statearr_29697_29778 = state_29686__$1;
(statearr_29697_29778[(2)] = null);

(statearr_29697_29778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (39))){
var state_29686__$1 = state_29686;
var statearr_29701_29779 = state_29686__$1;
(statearr_29701_29779[(2)] = null);

(statearr_29701_29779[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (4))){
var inst_29554 = (state_29686[(9)]);
var inst_29554__$1 = (state_29686[(2)]);
var inst_29555 = (inst_29554__$1 == null);
var state_29686__$1 = (function (){var statearr_29702 = state_29686;
(statearr_29702[(9)] = inst_29554__$1);

return statearr_29702;
})();
if(cljs.core.truth_(inst_29555)){
var statearr_29703_29780 = state_29686__$1;
(statearr_29703_29780[(1)] = (5));

} else {
var statearr_29704_29781 = state_29686__$1;
(statearr_29704_29781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (15))){
var inst_29564 = (state_29686[(13)]);
var inst_29565 = (state_29686[(15)]);
var inst_29563 = (state_29686[(16)]);
var inst_29566 = (state_29686[(17)]);
var inst_29581 = (state_29686[(2)]);
var inst_29582 = (inst_29566 + (1));
var tmp29698 = inst_29564;
var tmp29699 = inst_29565;
var tmp29700 = inst_29563;
var inst_29563__$1 = tmp29700;
var inst_29564__$1 = tmp29698;
var inst_29565__$1 = tmp29699;
var inst_29566__$1 = inst_29582;
var state_29686__$1 = (function (){var statearr_29705 = state_29686;
(statearr_29705[(13)] = inst_29564__$1);

(statearr_29705[(15)] = inst_29565__$1);

(statearr_29705[(16)] = inst_29563__$1);

(statearr_29705[(18)] = inst_29581);

(statearr_29705[(17)] = inst_29566__$1);

return statearr_29705;
})();
var statearr_29706_29782 = state_29686__$1;
(statearr_29706_29782[(2)] = null);

(statearr_29706_29782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (21))){
var inst_29608 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29710_29783 = state_29686__$1;
(statearr_29710_29783[(2)] = inst_29608);

(statearr_29710_29783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (31))){
var inst_29634 = (state_29686[(12)]);
var inst_29638 = done.call(null,null);
var inst_29639 = cljs.core.async.untap_STAR_.call(null,m,inst_29634);
var state_29686__$1 = (function (){var statearr_29711 = state_29686;
(statearr_29711[(19)] = inst_29638);

return statearr_29711;
})();
var statearr_29712_29784 = state_29686__$1;
(statearr_29712_29784[(2)] = inst_29639);

(statearr_29712_29784[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (32))){
var inst_29627 = (state_29686[(10)]);
var inst_29629 = (state_29686[(11)]);
var inst_29628 = (state_29686[(20)]);
var inst_29626 = (state_29686[(21)]);
var inst_29641 = (state_29686[(2)]);
var inst_29642 = (inst_29629 + (1));
var tmp29707 = inst_29627;
var tmp29708 = inst_29628;
var tmp29709 = inst_29626;
var inst_29626__$1 = tmp29709;
var inst_29627__$1 = tmp29707;
var inst_29628__$1 = tmp29708;
var inst_29629__$1 = inst_29642;
var state_29686__$1 = (function (){var statearr_29713 = state_29686;
(statearr_29713[(22)] = inst_29641);

(statearr_29713[(10)] = inst_29627__$1);

(statearr_29713[(11)] = inst_29629__$1);

(statearr_29713[(20)] = inst_29628__$1);

(statearr_29713[(21)] = inst_29626__$1);

return statearr_29713;
})();
var statearr_29714_29785 = state_29686__$1;
(statearr_29714_29785[(2)] = null);

(statearr_29714_29785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (40))){
var inst_29654 = (state_29686[(23)]);
var inst_29658 = done.call(null,null);
var inst_29659 = cljs.core.async.untap_STAR_.call(null,m,inst_29654);
var state_29686__$1 = (function (){var statearr_29715 = state_29686;
(statearr_29715[(24)] = inst_29658);

return statearr_29715;
})();
var statearr_29716_29786 = state_29686__$1;
(statearr_29716_29786[(2)] = inst_29659);

(statearr_29716_29786[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (33))){
var inst_29645 = (state_29686[(25)]);
var inst_29647 = cljs.core.chunked_seq_QMARK_.call(null,inst_29645);
var state_29686__$1 = state_29686;
if(inst_29647){
var statearr_29717_29787 = state_29686__$1;
(statearr_29717_29787[(1)] = (36));

} else {
var statearr_29718_29788 = state_29686__$1;
(statearr_29718_29788[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (13))){
var inst_29575 = (state_29686[(26)]);
var inst_29578 = cljs.core.async.close_BANG_.call(null,inst_29575);
var state_29686__$1 = state_29686;
var statearr_29719_29789 = state_29686__$1;
(statearr_29719_29789[(2)] = inst_29578);

(statearr_29719_29789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (22))){
var inst_29598 = (state_29686[(8)]);
var inst_29601 = cljs.core.async.close_BANG_.call(null,inst_29598);
var state_29686__$1 = state_29686;
var statearr_29720_29790 = state_29686__$1;
(statearr_29720_29790[(2)] = inst_29601);

(statearr_29720_29790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (36))){
var inst_29645 = (state_29686[(25)]);
var inst_29649 = cljs.core.chunk_first.call(null,inst_29645);
var inst_29650 = cljs.core.chunk_rest.call(null,inst_29645);
var inst_29651 = cljs.core.count.call(null,inst_29649);
var inst_29626 = inst_29650;
var inst_29627 = inst_29649;
var inst_29628 = inst_29651;
var inst_29629 = (0);
var state_29686__$1 = (function (){var statearr_29721 = state_29686;
(statearr_29721[(10)] = inst_29627);

(statearr_29721[(11)] = inst_29629);

(statearr_29721[(20)] = inst_29628);

(statearr_29721[(21)] = inst_29626);

return statearr_29721;
})();
var statearr_29722_29791 = state_29686__$1;
(statearr_29722_29791[(2)] = null);

(statearr_29722_29791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (41))){
var inst_29645 = (state_29686[(25)]);
var inst_29661 = (state_29686[(2)]);
var inst_29662 = cljs.core.next.call(null,inst_29645);
var inst_29626 = inst_29662;
var inst_29627 = null;
var inst_29628 = (0);
var inst_29629 = (0);
var state_29686__$1 = (function (){var statearr_29723 = state_29686;
(statearr_29723[(27)] = inst_29661);

(statearr_29723[(10)] = inst_29627);

(statearr_29723[(11)] = inst_29629);

(statearr_29723[(20)] = inst_29628);

(statearr_29723[(21)] = inst_29626);

return statearr_29723;
})();
var statearr_29724_29792 = state_29686__$1;
(statearr_29724_29792[(2)] = null);

(statearr_29724_29792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (43))){
var state_29686__$1 = state_29686;
var statearr_29725_29793 = state_29686__$1;
(statearr_29725_29793[(2)] = null);

(statearr_29725_29793[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (29))){
var inst_29670 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29726_29794 = state_29686__$1;
(statearr_29726_29794[(2)] = inst_29670);

(statearr_29726_29794[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (44))){
var inst_29679 = (state_29686[(2)]);
var state_29686__$1 = (function (){var statearr_29727 = state_29686;
(statearr_29727[(28)] = inst_29679);

return statearr_29727;
})();
var statearr_29728_29795 = state_29686__$1;
(statearr_29728_29795[(2)] = null);

(statearr_29728_29795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (6))){
var inst_29618 = (state_29686[(29)]);
var inst_29617 = cljs.core.deref.call(null,cs);
var inst_29618__$1 = cljs.core.keys.call(null,inst_29617);
var inst_29619 = cljs.core.count.call(null,inst_29618__$1);
var inst_29620 = cljs.core.reset_BANG_.call(null,dctr,inst_29619);
var inst_29625 = cljs.core.seq.call(null,inst_29618__$1);
var inst_29626 = inst_29625;
var inst_29627 = null;
var inst_29628 = (0);
var inst_29629 = (0);
var state_29686__$1 = (function (){var statearr_29729 = state_29686;
(statearr_29729[(29)] = inst_29618__$1);

(statearr_29729[(10)] = inst_29627);

(statearr_29729[(11)] = inst_29629);

(statearr_29729[(20)] = inst_29628);

(statearr_29729[(30)] = inst_29620);

(statearr_29729[(21)] = inst_29626);

return statearr_29729;
})();
var statearr_29730_29796 = state_29686__$1;
(statearr_29730_29796[(2)] = null);

(statearr_29730_29796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (28))){
var inst_29645 = (state_29686[(25)]);
var inst_29626 = (state_29686[(21)]);
var inst_29645__$1 = cljs.core.seq.call(null,inst_29626);
var state_29686__$1 = (function (){var statearr_29731 = state_29686;
(statearr_29731[(25)] = inst_29645__$1);

return statearr_29731;
})();
if(inst_29645__$1){
var statearr_29732_29797 = state_29686__$1;
(statearr_29732_29797[(1)] = (33));

} else {
var statearr_29733_29798 = state_29686__$1;
(statearr_29733_29798[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (25))){
var inst_29629 = (state_29686[(11)]);
var inst_29628 = (state_29686[(20)]);
var inst_29631 = (inst_29629 < inst_29628);
var inst_29632 = inst_29631;
var state_29686__$1 = state_29686;
if(cljs.core.truth_(inst_29632)){
var statearr_29734_29799 = state_29686__$1;
(statearr_29734_29799[(1)] = (27));

} else {
var statearr_29735_29800 = state_29686__$1;
(statearr_29735_29800[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (34))){
var state_29686__$1 = state_29686;
var statearr_29736_29801 = state_29686__$1;
(statearr_29736_29801[(2)] = null);

(statearr_29736_29801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (17))){
var state_29686__$1 = state_29686;
var statearr_29737_29802 = state_29686__$1;
(statearr_29737_29802[(2)] = null);

(statearr_29737_29802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (3))){
var inst_29684 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29686__$1,inst_29684);
} else {
if((state_val_29687 === (12))){
var inst_29613 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29738_29803 = state_29686__$1;
(statearr_29738_29803[(2)] = inst_29613);

(statearr_29738_29803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (2))){
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29686__$1,(4),ch);
} else {
if((state_val_29687 === (23))){
var state_29686__$1 = state_29686;
var statearr_29739_29804 = state_29686__$1;
(statearr_29739_29804[(2)] = null);

(statearr_29739_29804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (35))){
var inst_29668 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29740_29805 = state_29686__$1;
(statearr_29740_29805[(2)] = inst_29668);

(statearr_29740_29805[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (19))){
var inst_29585 = (state_29686[(7)]);
var inst_29589 = cljs.core.chunk_first.call(null,inst_29585);
var inst_29590 = cljs.core.chunk_rest.call(null,inst_29585);
var inst_29591 = cljs.core.count.call(null,inst_29589);
var inst_29563 = inst_29590;
var inst_29564 = inst_29589;
var inst_29565 = inst_29591;
var inst_29566 = (0);
var state_29686__$1 = (function (){var statearr_29741 = state_29686;
(statearr_29741[(13)] = inst_29564);

(statearr_29741[(15)] = inst_29565);

(statearr_29741[(16)] = inst_29563);

(statearr_29741[(17)] = inst_29566);

return statearr_29741;
})();
var statearr_29742_29806 = state_29686__$1;
(statearr_29742_29806[(2)] = null);

(statearr_29742_29806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (11))){
var inst_29585 = (state_29686[(7)]);
var inst_29563 = (state_29686[(16)]);
var inst_29585__$1 = cljs.core.seq.call(null,inst_29563);
var state_29686__$1 = (function (){var statearr_29743 = state_29686;
(statearr_29743[(7)] = inst_29585__$1);

return statearr_29743;
})();
if(inst_29585__$1){
var statearr_29744_29807 = state_29686__$1;
(statearr_29744_29807[(1)] = (16));

} else {
var statearr_29745_29808 = state_29686__$1;
(statearr_29745_29808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (9))){
var inst_29615 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29746_29809 = state_29686__$1;
(statearr_29746_29809[(2)] = inst_29615);

(statearr_29746_29809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (5))){
var inst_29561 = cljs.core.deref.call(null,cs);
var inst_29562 = cljs.core.seq.call(null,inst_29561);
var inst_29563 = inst_29562;
var inst_29564 = null;
var inst_29565 = (0);
var inst_29566 = (0);
var state_29686__$1 = (function (){var statearr_29747 = state_29686;
(statearr_29747[(13)] = inst_29564);

(statearr_29747[(15)] = inst_29565);

(statearr_29747[(16)] = inst_29563);

(statearr_29747[(17)] = inst_29566);

return statearr_29747;
})();
var statearr_29748_29810 = state_29686__$1;
(statearr_29748_29810[(2)] = null);

(statearr_29748_29810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (14))){
var state_29686__$1 = state_29686;
var statearr_29749_29811 = state_29686__$1;
(statearr_29749_29811[(2)] = null);

(statearr_29749_29811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (45))){
var inst_29676 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29750_29812 = state_29686__$1;
(statearr_29750_29812[(2)] = inst_29676);

(statearr_29750_29812[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (26))){
var inst_29618 = (state_29686[(29)]);
var inst_29672 = (state_29686[(2)]);
var inst_29673 = cljs.core.seq.call(null,inst_29618);
var state_29686__$1 = (function (){var statearr_29751 = state_29686;
(statearr_29751[(31)] = inst_29672);

return statearr_29751;
})();
if(inst_29673){
var statearr_29752_29813 = state_29686__$1;
(statearr_29752_29813[(1)] = (42));

} else {
var statearr_29753_29814 = state_29686__$1;
(statearr_29753_29814[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (16))){
var inst_29585 = (state_29686[(7)]);
var inst_29587 = cljs.core.chunked_seq_QMARK_.call(null,inst_29585);
var state_29686__$1 = state_29686;
if(inst_29587){
var statearr_29754_29815 = state_29686__$1;
(statearr_29754_29815[(1)] = (19));

} else {
var statearr_29755_29816 = state_29686__$1;
(statearr_29755_29816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (38))){
var inst_29665 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29756_29817 = state_29686__$1;
(statearr_29756_29817[(2)] = inst_29665);

(statearr_29756_29817[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (30))){
var state_29686__$1 = state_29686;
var statearr_29757_29818 = state_29686__$1;
(statearr_29757_29818[(2)] = null);

(statearr_29757_29818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (10))){
var inst_29564 = (state_29686[(13)]);
var inst_29566 = (state_29686[(17)]);
var inst_29574 = cljs.core._nth.call(null,inst_29564,inst_29566);
var inst_29575 = cljs.core.nth.call(null,inst_29574,(0),null);
var inst_29576 = cljs.core.nth.call(null,inst_29574,(1),null);
var state_29686__$1 = (function (){var statearr_29758 = state_29686;
(statearr_29758[(26)] = inst_29575);

return statearr_29758;
})();
if(cljs.core.truth_(inst_29576)){
var statearr_29759_29819 = state_29686__$1;
(statearr_29759_29819[(1)] = (13));

} else {
var statearr_29760_29820 = state_29686__$1;
(statearr_29760_29820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (18))){
var inst_29611 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29761_29821 = state_29686__$1;
(statearr_29761_29821[(2)] = inst_29611);

(statearr_29761_29821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (42))){
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29686__$1,(45),dchan);
} else {
if((state_val_29687 === (37))){
var inst_29554 = (state_29686[(9)]);
var inst_29654 = (state_29686[(23)]);
var inst_29645 = (state_29686[(25)]);
var inst_29654__$1 = cljs.core.first.call(null,inst_29645);
var inst_29655 = cljs.core.async.put_BANG_.call(null,inst_29654__$1,inst_29554,done);
var state_29686__$1 = (function (){var statearr_29762 = state_29686;
(statearr_29762[(23)] = inst_29654__$1);

return statearr_29762;
})();
if(cljs.core.truth_(inst_29655)){
var statearr_29763_29822 = state_29686__$1;
(statearr_29763_29822[(1)] = (39));

} else {
var statearr_29764_29823 = state_29686__$1;
(statearr_29764_29823[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (8))){
var inst_29565 = (state_29686[(15)]);
var inst_29566 = (state_29686[(17)]);
var inst_29568 = (inst_29566 < inst_29565);
var inst_29569 = inst_29568;
var state_29686__$1 = state_29686;
if(cljs.core.truth_(inst_29569)){
var statearr_29765_29824 = state_29686__$1;
(statearr_29765_29824[(1)] = (10));

} else {
var statearr_29766_29825 = state_29686__$1;
(statearr_29766_29825[(1)] = (11));

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
});})(c__28966__auto___29771,cs,m,dchan,dctr,done))
;
return ((function (switch__28878__auto__,c__28966__auto___29771,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28879__auto__ = null;
var cljs$core$async$mult_$_state_machine__28879__auto____0 = (function (){
var statearr_29767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29767[(0)] = cljs$core$async$mult_$_state_machine__28879__auto__);

(statearr_29767[(1)] = (1));

return statearr_29767;
});
var cljs$core$async$mult_$_state_machine__28879__auto____1 = (function (state_29686){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e29768){if((e29768 instanceof Object)){
var ex__28882__auto__ = e29768;
var statearr_29769_29826 = state_29686;
(statearr_29769_29826[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29827 = state_29686;
state_29686 = G__29827;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28879__auto__ = function(state_29686){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28879__auto____1.call(this,state_29686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28879__auto____0;
cljs$core$async$mult_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28879__auto____1;
return cljs$core$async$mult_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___29771,cs,m,dchan,dctr,done))
})();
var state__28968__auto__ = (function (){var statearr_29770 = f__28967__auto__.call(null);
(statearr_29770[(6)] = c__28966__auto___29771);

return statearr_29770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___29771,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29829 = arguments.length;
switch (G__29829) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29841 = arguments.length;
var i__4500__auto___29842 = (0);
while(true){
if((i__4500__auto___29842 < len__4499__auto___29841)){
args__4502__auto__.push((arguments[i__4500__auto___29842]));

var G__29843 = (i__4500__auto___29842 + (1));
i__4500__auto___29842 = G__29843;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29835){
var map__29836 = p__29835;
var map__29836__$1 = ((((!((map__29836 == null)))?(((((map__29836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29836):map__29836);
var opts = map__29836__$1;
var statearr_29838_29844 = state;
(statearr_29838_29844[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29836,map__29836__$1,opts){
return (function (val){
var statearr_29839_29845 = state;
(statearr_29839_29845[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29836,map__29836__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29840_29846 = state;
(statearr_29840_29846[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29831){
var G__29832 = cljs.core.first.call(null,seq29831);
var seq29831__$1 = cljs.core.next.call(null,seq29831);
var G__29833 = cljs.core.first.call(null,seq29831__$1);
var seq29831__$2 = cljs.core.next.call(null,seq29831__$1);
var G__29834 = cljs.core.first.call(null,seq29831__$2);
var seq29831__$3 = cljs.core.next.call(null,seq29831__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29832,G__29833,G__29834,seq29831__$3);
});

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
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29847 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29848){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29848 = meta29848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29849,meta29848__$1){
var self__ = this;
var _29849__$1 = this;
return (new cljs.core.async.t_cljs$core$async29847(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29848__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29849){
var self__ = this;
var _29849__$1 = this;
return self__.meta29848;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29848","meta29848",-551918528,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29847";

cljs.core.async.t_cljs$core$async29847.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async29847");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29847.
 */
cljs.core.async.__GT_t_cljs$core$async29847 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29847(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29848){
return (new cljs.core.async.t_cljs$core$async29847(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29848));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29847(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28966__auto___30011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29951){
var state_val_29952 = (state_29951[(1)]);
if((state_val_29952 === (7))){
var inst_29866 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_29953_30012 = state_29951__$1;
(statearr_29953_30012[(2)] = inst_29866);

(statearr_29953_30012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (20))){
var inst_29878 = (state_29951[(7)]);
var state_29951__$1 = state_29951;
var statearr_29954_30013 = state_29951__$1;
(statearr_29954_30013[(2)] = inst_29878);

(statearr_29954_30013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (27))){
var state_29951__$1 = state_29951;
var statearr_29955_30014 = state_29951__$1;
(statearr_29955_30014[(2)] = null);

(statearr_29955_30014[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (1))){
var inst_29853 = (state_29951[(8)]);
var inst_29853__$1 = calc_state.call(null);
var inst_29855 = (inst_29853__$1 == null);
var inst_29856 = cljs.core.not.call(null,inst_29855);
var state_29951__$1 = (function (){var statearr_29956 = state_29951;
(statearr_29956[(8)] = inst_29853__$1);

return statearr_29956;
})();
if(inst_29856){
var statearr_29957_30015 = state_29951__$1;
(statearr_29957_30015[(1)] = (2));

} else {
var statearr_29958_30016 = state_29951__$1;
(statearr_29958_30016[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (24))){
var inst_29911 = (state_29951[(9)]);
var inst_29902 = (state_29951[(10)]);
var inst_29925 = (state_29951[(11)]);
var inst_29925__$1 = inst_29902.call(null,inst_29911);
var state_29951__$1 = (function (){var statearr_29959 = state_29951;
(statearr_29959[(11)] = inst_29925__$1);

return statearr_29959;
})();
if(cljs.core.truth_(inst_29925__$1)){
var statearr_29960_30017 = state_29951__$1;
(statearr_29960_30017[(1)] = (29));

} else {
var statearr_29961_30018 = state_29951__$1;
(statearr_29961_30018[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (4))){
var inst_29869 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29869)){
var statearr_29962_30019 = state_29951__$1;
(statearr_29962_30019[(1)] = (8));

} else {
var statearr_29963_30020 = state_29951__$1;
(statearr_29963_30020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (15))){
var inst_29896 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29896)){
var statearr_29964_30021 = state_29951__$1;
(statearr_29964_30021[(1)] = (19));

} else {
var statearr_29965_30022 = state_29951__$1;
(statearr_29965_30022[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (21))){
var inst_29901 = (state_29951[(12)]);
var inst_29901__$1 = (state_29951[(2)]);
var inst_29902 = cljs.core.get.call(null,inst_29901__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29903 = cljs.core.get.call(null,inst_29901__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29904 = cljs.core.get.call(null,inst_29901__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29951__$1 = (function (){var statearr_29966 = state_29951;
(statearr_29966[(13)] = inst_29903);

(statearr_29966[(12)] = inst_29901__$1);

(statearr_29966[(10)] = inst_29902);

return statearr_29966;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29951__$1,(22),inst_29904);
} else {
if((state_val_29952 === (31))){
var inst_29933 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29933)){
var statearr_29967_30023 = state_29951__$1;
(statearr_29967_30023[(1)] = (32));

} else {
var statearr_29968_30024 = state_29951__$1;
(statearr_29968_30024[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (32))){
var inst_29910 = (state_29951[(14)]);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29951__$1,(35),out,inst_29910);
} else {
if((state_val_29952 === (33))){
var inst_29901 = (state_29951[(12)]);
var inst_29878 = inst_29901;
var state_29951__$1 = (function (){var statearr_29969 = state_29951;
(statearr_29969[(7)] = inst_29878);

return statearr_29969;
})();
var statearr_29970_30025 = state_29951__$1;
(statearr_29970_30025[(2)] = null);

(statearr_29970_30025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (13))){
var inst_29878 = (state_29951[(7)]);
var inst_29885 = inst_29878.cljs$lang$protocol_mask$partition0$;
var inst_29886 = (inst_29885 & (64));
var inst_29887 = inst_29878.cljs$core$ISeq$;
var inst_29888 = (cljs.core.PROTOCOL_SENTINEL === inst_29887);
var inst_29889 = ((inst_29886) || (inst_29888));
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29889)){
var statearr_29971_30026 = state_29951__$1;
(statearr_29971_30026[(1)] = (16));

} else {
var statearr_29972_30027 = state_29951__$1;
(statearr_29972_30027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (22))){
var inst_29911 = (state_29951[(9)]);
var inst_29910 = (state_29951[(14)]);
var inst_29909 = (state_29951[(2)]);
var inst_29910__$1 = cljs.core.nth.call(null,inst_29909,(0),null);
var inst_29911__$1 = cljs.core.nth.call(null,inst_29909,(1),null);
var inst_29912 = (inst_29910__$1 == null);
var inst_29913 = cljs.core._EQ_.call(null,inst_29911__$1,change);
var inst_29914 = ((inst_29912) || (inst_29913));
var state_29951__$1 = (function (){var statearr_29973 = state_29951;
(statearr_29973[(9)] = inst_29911__$1);

(statearr_29973[(14)] = inst_29910__$1);

return statearr_29973;
})();
if(cljs.core.truth_(inst_29914)){
var statearr_29974_30028 = state_29951__$1;
(statearr_29974_30028[(1)] = (23));

} else {
var statearr_29975_30029 = state_29951__$1;
(statearr_29975_30029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (36))){
var inst_29901 = (state_29951[(12)]);
var inst_29878 = inst_29901;
var state_29951__$1 = (function (){var statearr_29976 = state_29951;
(statearr_29976[(7)] = inst_29878);

return statearr_29976;
})();
var statearr_29977_30030 = state_29951__$1;
(statearr_29977_30030[(2)] = null);

(statearr_29977_30030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (29))){
var inst_29925 = (state_29951[(11)]);
var state_29951__$1 = state_29951;
var statearr_29978_30031 = state_29951__$1;
(statearr_29978_30031[(2)] = inst_29925);

(statearr_29978_30031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (6))){
var state_29951__$1 = state_29951;
var statearr_29979_30032 = state_29951__$1;
(statearr_29979_30032[(2)] = false);

(statearr_29979_30032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (28))){
var inst_29921 = (state_29951[(2)]);
var inst_29922 = calc_state.call(null);
var inst_29878 = inst_29922;
var state_29951__$1 = (function (){var statearr_29980 = state_29951;
(statearr_29980[(7)] = inst_29878);

(statearr_29980[(15)] = inst_29921);

return statearr_29980;
})();
var statearr_29981_30033 = state_29951__$1;
(statearr_29981_30033[(2)] = null);

(statearr_29981_30033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (25))){
var inst_29947 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_29982_30034 = state_29951__$1;
(statearr_29982_30034[(2)] = inst_29947);

(statearr_29982_30034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (34))){
var inst_29945 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_29983_30035 = state_29951__$1;
(statearr_29983_30035[(2)] = inst_29945);

(statearr_29983_30035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (17))){
var state_29951__$1 = state_29951;
var statearr_29984_30036 = state_29951__$1;
(statearr_29984_30036[(2)] = false);

(statearr_29984_30036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (3))){
var state_29951__$1 = state_29951;
var statearr_29985_30037 = state_29951__$1;
(statearr_29985_30037[(2)] = false);

(statearr_29985_30037[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (12))){
var inst_29949 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29951__$1,inst_29949);
} else {
if((state_val_29952 === (2))){
var inst_29853 = (state_29951[(8)]);
var inst_29858 = inst_29853.cljs$lang$protocol_mask$partition0$;
var inst_29859 = (inst_29858 & (64));
var inst_29860 = inst_29853.cljs$core$ISeq$;
var inst_29861 = (cljs.core.PROTOCOL_SENTINEL === inst_29860);
var inst_29862 = ((inst_29859) || (inst_29861));
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29862)){
var statearr_29986_30038 = state_29951__$1;
(statearr_29986_30038[(1)] = (5));

} else {
var statearr_29987_30039 = state_29951__$1;
(statearr_29987_30039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (23))){
var inst_29910 = (state_29951[(14)]);
var inst_29916 = (inst_29910 == null);
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29916)){
var statearr_29988_30040 = state_29951__$1;
(statearr_29988_30040[(1)] = (26));

} else {
var statearr_29989_30041 = state_29951__$1;
(statearr_29989_30041[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (35))){
var inst_29936 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
if(cljs.core.truth_(inst_29936)){
var statearr_29990_30042 = state_29951__$1;
(statearr_29990_30042[(1)] = (36));

} else {
var statearr_29991_30043 = state_29951__$1;
(statearr_29991_30043[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (19))){
var inst_29878 = (state_29951[(7)]);
var inst_29898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29878);
var state_29951__$1 = state_29951;
var statearr_29992_30044 = state_29951__$1;
(statearr_29992_30044[(2)] = inst_29898);

(statearr_29992_30044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (11))){
var inst_29878 = (state_29951[(7)]);
var inst_29882 = (inst_29878 == null);
var inst_29883 = cljs.core.not.call(null,inst_29882);
var state_29951__$1 = state_29951;
if(inst_29883){
var statearr_29993_30045 = state_29951__$1;
(statearr_29993_30045[(1)] = (13));

} else {
var statearr_29994_30046 = state_29951__$1;
(statearr_29994_30046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (9))){
var inst_29853 = (state_29951[(8)]);
var state_29951__$1 = state_29951;
var statearr_29995_30047 = state_29951__$1;
(statearr_29995_30047[(2)] = inst_29853);

(statearr_29995_30047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (5))){
var state_29951__$1 = state_29951;
var statearr_29996_30048 = state_29951__$1;
(statearr_29996_30048[(2)] = true);

(statearr_29996_30048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (14))){
var state_29951__$1 = state_29951;
var statearr_29997_30049 = state_29951__$1;
(statearr_29997_30049[(2)] = false);

(statearr_29997_30049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (26))){
var inst_29911 = (state_29951[(9)]);
var inst_29918 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29911);
var state_29951__$1 = state_29951;
var statearr_29998_30050 = state_29951__$1;
(statearr_29998_30050[(2)] = inst_29918);

(statearr_29998_30050[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (16))){
var state_29951__$1 = state_29951;
var statearr_29999_30051 = state_29951__$1;
(statearr_29999_30051[(2)] = true);

(statearr_29999_30051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (38))){
var inst_29941 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_30000_30052 = state_29951__$1;
(statearr_30000_30052[(2)] = inst_29941);

(statearr_30000_30052[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (30))){
var inst_29903 = (state_29951[(13)]);
var inst_29911 = (state_29951[(9)]);
var inst_29902 = (state_29951[(10)]);
var inst_29928 = cljs.core.empty_QMARK_.call(null,inst_29902);
var inst_29929 = inst_29903.call(null,inst_29911);
var inst_29930 = cljs.core.not.call(null,inst_29929);
var inst_29931 = ((inst_29928) && (inst_29930));
var state_29951__$1 = state_29951;
var statearr_30001_30053 = state_29951__$1;
(statearr_30001_30053[(2)] = inst_29931);

(statearr_30001_30053[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (10))){
var inst_29853 = (state_29951[(8)]);
var inst_29874 = (state_29951[(2)]);
var inst_29875 = cljs.core.get.call(null,inst_29874,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29876 = cljs.core.get.call(null,inst_29874,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29877 = cljs.core.get.call(null,inst_29874,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29878 = inst_29853;
var state_29951__$1 = (function (){var statearr_30002 = state_29951;
(statearr_30002[(16)] = inst_29876);

(statearr_30002[(17)] = inst_29875);

(statearr_30002[(7)] = inst_29878);

(statearr_30002[(18)] = inst_29877);

return statearr_30002;
})();
var statearr_30003_30054 = state_29951__$1;
(statearr_30003_30054[(2)] = null);

(statearr_30003_30054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (18))){
var inst_29893 = (state_29951[(2)]);
var state_29951__$1 = state_29951;
var statearr_30004_30055 = state_29951__$1;
(statearr_30004_30055[(2)] = inst_29893);

(statearr_30004_30055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (37))){
var state_29951__$1 = state_29951;
var statearr_30005_30056 = state_29951__$1;
(statearr_30005_30056[(2)] = null);

(statearr_30005_30056[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29952 === (8))){
var inst_29853 = (state_29951[(8)]);
var inst_29871 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29853);
var state_29951__$1 = state_29951;
var statearr_30006_30057 = state_29951__$1;
(statearr_30006_30057[(2)] = inst_29871);

(statearr_30006_30057[(1)] = (10));


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
});})(c__28966__auto___30011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28878__auto__,c__28966__auto___30011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28879__auto__ = null;
var cljs$core$async$mix_$_state_machine__28879__auto____0 = (function (){
var statearr_30007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30007[(0)] = cljs$core$async$mix_$_state_machine__28879__auto__);

(statearr_30007[(1)] = (1));

return statearr_30007;
});
var cljs$core$async$mix_$_state_machine__28879__auto____1 = (function (state_29951){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_29951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30008){if((e30008 instanceof Object)){
var ex__28882__auto__ = e30008;
var statearr_30009_30058 = state_29951;
(statearr_30009_30058[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30059 = state_29951;
state_29951 = G__30059;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28879__auto__ = function(state_29951){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28879__auto____1.call(this,state_29951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28879__auto____0;
cljs$core$async$mix_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28879__auto____1;
return cljs$core$async$mix_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28968__auto__ = (function (){var statearr_30010 = f__28967__auto__.call(null);
(statearr_30010[(6)] = c__28966__auto___30011);

return statearr_30010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30011,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30061 = arguments.length;
switch (G__30061) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__30065 = arguments.length;
switch (G__30065) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__30063_SHARP_){
if(cljs.core.truth_(p1__30063_SHARP_.call(null,topic))){
return p1__30063_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30063_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30066 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30067){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30067 = meta30067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30068,meta30067__$1){
var self__ = this;
var _30068__$1 = this;
return (new cljs.core.async.t_cljs$core$async30066(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30067__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30068){
var self__ = this;
var _30068__$1 = this;
return self__.meta30067;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30066.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30066.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30067","meta30067",886231260,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30066";

cljs.core.async.t_cljs$core$async30066.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30066");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30066.
 */
cljs.core.async.__GT_t_cljs$core$async30066 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30066(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30067){
return (new cljs.core.async.t_cljs$core$async30066(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30067));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30066(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28966__auto___30186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30186,mults,ensure_mult,p){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30186,mults,ensure_mult,p){
return (function (state_30140){
var state_val_30141 = (state_30140[(1)]);
if((state_val_30141 === (7))){
var inst_30136 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
var statearr_30142_30187 = state_30140__$1;
(statearr_30142_30187[(2)] = inst_30136);

(statearr_30142_30187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (20))){
var state_30140__$1 = state_30140;
var statearr_30143_30188 = state_30140__$1;
(statearr_30143_30188[(2)] = null);

(statearr_30143_30188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (1))){
var state_30140__$1 = state_30140;
var statearr_30144_30189 = state_30140__$1;
(statearr_30144_30189[(2)] = null);

(statearr_30144_30189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (24))){
var inst_30119 = (state_30140[(7)]);
var inst_30128 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30119);
var state_30140__$1 = state_30140;
var statearr_30145_30190 = state_30140__$1;
(statearr_30145_30190[(2)] = inst_30128);

(statearr_30145_30190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (4))){
var inst_30071 = (state_30140[(8)]);
var inst_30071__$1 = (state_30140[(2)]);
var inst_30072 = (inst_30071__$1 == null);
var state_30140__$1 = (function (){var statearr_30146 = state_30140;
(statearr_30146[(8)] = inst_30071__$1);

return statearr_30146;
})();
if(cljs.core.truth_(inst_30072)){
var statearr_30147_30191 = state_30140__$1;
(statearr_30147_30191[(1)] = (5));

} else {
var statearr_30148_30192 = state_30140__$1;
(statearr_30148_30192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (15))){
var inst_30113 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
var statearr_30149_30193 = state_30140__$1;
(statearr_30149_30193[(2)] = inst_30113);

(statearr_30149_30193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (21))){
var inst_30133 = (state_30140[(2)]);
var state_30140__$1 = (function (){var statearr_30150 = state_30140;
(statearr_30150[(9)] = inst_30133);

return statearr_30150;
})();
var statearr_30151_30194 = state_30140__$1;
(statearr_30151_30194[(2)] = null);

(statearr_30151_30194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (13))){
var inst_30095 = (state_30140[(10)]);
var inst_30097 = cljs.core.chunked_seq_QMARK_.call(null,inst_30095);
var state_30140__$1 = state_30140;
if(inst_30097){
var statearr_30152_30195 = state_30140__$1;
(statearr_30152_30195[(1)] = (16));

} else {
var statearr_30153_30196 = state_30140__$1;
(statearr_30153_30196[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (22))){
var inst_30125 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
if(cljs.core.truth_(inst_30125)){
var statearr_30154_30197 = state_30140__$1;
(statearr_30154_30197[(1)] = (23));

} else {
var statearr_30155_30198 = state_30140__$1;
(statearr_30155_30198[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (6))){
var inst_30121 = (state_30140[(11)]);
var inst_30071 = (state_30140[(8)]);
var inst_30119 = (state_30140[(7)]);
var inst_30119__$1 = topic_fn.call(null,inst_30071);
var inst_30120 = cljs.core.deref.call(null,mults);
var inst_30121__$1 = cljs.core.get.call(null,inst_30120,inst_30119__$1);
var state_30140__$1 = (function (){var statearr_30156 = state_30140;
(statearr_30156[(11)] = inst_30121__$1);

(statearr_30156[(7)] = inst_30119__$1);

return statearr_30156;
})();
if(cljs.core.truth_(inst_30121__$1)){
var statearr_30157_30199 = state_30140__$1;
(statearr_30157_30199[(1)] = (19));

} else {
var statearr_30158_30200 = state_30140__$1;
(statearr_30158_30200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (25))){
var inst_30130 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
var statearr_30159_30201 = state_30140__$1;
(statearr_30159_30201[(2)] = inst_30130);

(statearr_30159_30201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (17))){
var inst_30095 = (state_30140[(10)]);
var inst_30104 = cljs.core.first.call(null,inst_30095);
var inst_30105 = cljs.core.async.muxch_STAR_.call(null,inst_30104);
var inst_30106 = cljs.core.async.close_BANG_.call(null,inst_30105);
var inst_30107 = cljs.core.next.call(null,inst_30095);
var inst_30081 = inst_30107;
var inst_30082 = null;
var inst_30083 = (0);
var inst_30084 = (0);
var state_30140__$1 = (function (){var statearr_30160 = state_30140;
(statearr_30160[(12)] = inst_30083);

(statearr_30160[(13)] = inst_30082);

(statearr_30160[(14)] = inst_30081);

(statearr_30160[(15)] = inst_30084);

(statearr_30160[(16)] = inst_30106);

return statearr_30160;
})();
var statearr_30161_30202 = state_30140__$1;
(statearr_30161_30202[(2)] = null);

(statearr_30161_30202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (3))){
var inst_30138 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30140__$1,inst_30138);
} else {
if((state_val_30141 === (12))){
var inst_30115 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
var statearr_30162_30203 = state_30140__$1;
(statearr_30162_30203[(2)] = inst_30115);

(statearr_30162_30203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (2))){
var state_30140__$1 = state_30140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30140__$1,(4),ch);
} else {
if((state_val_30141 === (23))){
var state_30140__$1 = state_30140;
var statearr_30163_30204 = state_30140__$1;
(statearr_30163_30204[(2)] = null);

(statearr_30163_30204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (19))){
var inst_30121 = (state_30140[(11)]);
var inst_30071 = (state_30140[(8)]);
var inst_30123 = cljs.core.async.muxch_STAR_.call(null,inst_30121);
var state_30140__$1 = state_30140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30140__$1,(22),inst_30123,inst_30071);
} else {
if((state_val_30141 === (11))){
var inst_30095 = (state_30140[(10)]);
var inst_30081 = (state_30140[(14)]);
var inst_30095__$1 = cljs.core.seq.call(null,inst_30081);
var state_30140__$1 = (function (){var statearr_30164 = state_30140;
(statearr_30164[(10)] = inst_30095__$1);

return statearr_30164;
})();
if(inst_30095__$1){
var statearr_30165_30205 = state_30140__$1;
(statearr_30165_30205[(1)] = (13));

} else {
var statearr_30166_30206 = state_30140__$1;
(statearr_30166_30206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (9))){
var inst_30117 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
var statearr_30167_30207 = state_30140__$1;
(statearr_30167_30207[(2)] = inst_30117);

(statearr_30167_30207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (5))){
var inst_30078 = cljs.core.deref.call(null,mults);
var inst_30079 = cljs.core.vals.call(null,inst_30078);
var inst_30080 = cljs.core.seq.call(null,inst_30079);
var inst_30081 = inst_30080;
var inst_30082 = null;
var inst_30083 = (0);
var inst_30084 = (0);
var state_30140__$1 = (function (){var statearr_30168 = state_30140;
(statearr_30168[(12)] = inst_30083);

(statearr_30168[(13)] = inst_30082);

(statearr_30168[(14)] = inst_30081);

(statearr_30168[(15)] = inst_30084);

return statearr_30168;
})();
var statearr_30169_30208 = state_30140__$1;
(statearr_30169_30208[(2)] = null);

(statearr_30169_30208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (14))){
var state_30140__$1 = state_30140;
var statearr_30173_30209 = state_30140__$1;
(statearr_30173_30209[(2)] = null);

(statearr_30173_30209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (16))){
var inst_30095 = (state_30140[(10)]);
var inst_30099 = cljs.core.chunk_first.call(null,inst_30095);
var inst_30100 = cljs.core.chunk_rest.call(null,inst_30095);
var inst_30101 = cljs.core.count.call(null,inst_30099);
var inst_30081 = inst_30100;
var inst_30082 = inst_30099;
var inst_30083 = inst_30101;
var inst_30084 = (0);
var state_30140__$1 = (function (){var statearr_30174 = state_30140;
(statearr_30174[(12)] = inst_30083);

(statearr_30174[(13)] = inst_30082);

(statearr_30174[(14)] = inst_30081);

(statearr_30174[(15)] = inst_30084);

return statearr_30174;
})();
var statearr_30175_30210 = state_30140__$1;
(statearr_30175_30210[(2)] = null);

(statearr_30175_30210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (10))){
var inst_30083 = (state_30140[(12)]);
var inst_30082 = (state_30140[(13)]);
var inst_30081 = (state_30140[(14)]);
var inst_30084 = (state_30140[(15)]);
var inst_30089 = cljs.core._nth.call(null,inst_30082,inst_30084);
var inst_30090 = cljs.core.async.muxch_STAR_.call(null,inst_30089);
var inst_30091 = cljs.core.async.close_BANG_.call(null,inst_30090);
var inst_30092 = (inst_30084 + (1));
var tmp30170 = inst_30083;
var tmp30171 = inst_30082;
var tmp30172 = inst_30081;
var inst_30081__$1 = tmp30172;
var inst_30082__$1 = tmp30171;
var inst_30083__$1 = tmp30170;
var inst_30084__$1 = inst_30092;
var state_30140__$1 = (function (){var statearr_30176 = state_30140;
(statearr_30176[(12)] = inst_30083__$1);

(statearr_30176[(13)] = inst_30082__$1);

(statearr_30176[(14)] = inst_30081__$1);

(statearr_30176[(15)] = inst_30084__$1);

(statearr_30176[(17)] = inst_30091);

return statearr_30176;
})();
var statearr_30177_30211 = state_30140__$1;
(statearr_30177_30211[(2)] = null);

(statearr_30177_30211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (18))){
var inst_30110 = (state_30140[(2)]);
var state_30140__$1 = state_30140;
var statearr_30178_30212 = state_30140__$1;
(statearr_30178_30212[(2)] = inst_30110);

(statearr_30178_30212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30141 === (8))){
var inst_30083 = (state_30140[(12)]);
var inst_30084 = (state_30140[(15)]);
var inst_30086 = (inst_30084 < inst_30083);
var inst_30087 = inst_30086;
var state_30140__$1 = state_30140;
if(cljs.core.truth_(inst_30087)){
var statearr_30179_30213 = state_30140__$1;
(statearr_30179_30213[(1)] = (10));

} else {
var statearr_30180_30214 = state_30140__$1;
(statearr_30180_30214[(1)] = (11));

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
});})(c__28966__auto___30186,mults,ensure_mult,p))
;
return ((function (switch__28878__auto__,c__28966__auto___30186,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_30181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30181[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_30181[(1)] = (1));

return statearr_30181;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_30140){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30182){if((e30182 instanceof Object)){
var ex__28882__auto__ = e30182;
var statearr_30183_30215 = state_30140;
(statearr_30183_30215[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30216 = state_30140;
state_30140 = G__30216;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_30140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_30140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30186,mults,ensure_mult,p))
})();
var state__28968__auto__ = (function (){var statearr_30184 = f__28967__auto__.call(null);
(statearr_30184[(6)] = c__28966__auto___30186);

return statearr_30184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30186,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__30218 = arguments.length;
switch (G__30218) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__30221 = arguments.length;
switch (G__30221) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__30224 = arguments.length;
switch (G__30224) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28966__auto___30291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30291,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30291,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30263){
var state_val_30264 = (state_30263[(1)]);
if((state_val_30264 === (7))){
var state_30263__$1 = state_30263;
var statearr_30265_30292 = state_30263__$1;
(statearr_30265_30292[(2)] = null);

(statearr_30265_30292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (1))){
var state_30263__$1 = state_30263;
var statearr_30266_30293 = state_30263__$1;
(statearr_30266_30293[(2)] = null);

(statearr_30266_30293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (4))){
var inst_30227 = (state_30263[(7)]);
var inst_30229 = (inst_30227 < cnt);
var state_30263__$1 = state_30263;
if(cljs.core.truth_(inst_30229)){
var statearr_30267_30294 = state_30263__$1;
(statearr_30267_30294[(1)] = (6));

} else {
var statearr_30268_30295 = state_30263__$1;
(statearr_30268_30295[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (15))){
var inst_30259 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
var statearr_30269_30296 = state_30263__$1;
(statearr_30269_30296[(2)] = inst_30259);

(statearr_30269_30296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (13))){
var inst_30252 = cljs.core.async.close_BANG_.call(null,out);
var state_30263__$1 = state_30263;
var statearr_30270_30297 = state_30263__$1;
(statearr_30270_30297[(2)] = inst_30252);

(statearr_30270_30297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (6))){
var state_30263__$1 = state_30263;
var statearr_30271_30298 = state_30263__$1;
(statearr_30271_30298[(2)] = null);

(statearr_30271_30298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (3))){
var inst_30261 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30263__$1,inst_30261);
} else {
if((state_val_30264 === (12))){
var inst_30249 = (state_30263[(8)]);
var inst_30249__$1 = (state_30263[(2)]);
var inst_30250 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30249__$1);
var state_30263__$1 = (function (){var statearr_30272 = state_30263;
(statearr_30272[(8)] = inst_30249__$1);

return statearr_30272;
})();
if(cljs.core.truth_(inst_30250)){
var statearr_30273_30299 = state_30263__$1;
(statearr_30273_30299[(1)] = (13));

} else {
var statearr_30274_30300 = state_30263__$1;
(statearr_30274_30300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (2))){
var inst_30226 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30227 = (0);
var state_30263__$1 = (function (){var statearr_30275 = state_30263;
(statearr_30275[(7)] = inst_30227);

(statearr_30275[(9)] = inst_30226);

return statearr_30275;
})();
var statearr_30276_30301 = state_30263__$1;
(statearr_30276_30301[(2)] = null);

(statearr_30276_30301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (11))){
var inst_30227 = (state_30263[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30263,(10),Object,null,(9));
var inst_30236 = chs__$1.call(null,inst_30227);
var inst_30237 = done.call(null,inst_30227);
var inst_30238 = cljs.core.async.take_BANG_.call(null,inst_30236,inst_30237);
var state_30263__$1 = state_30263;
var statearr_30277_30302 = state_30263__$1;
(statearr_30277_30302[(2)] = inst_30238);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (9))){
var inst_30227 = (state_30263[(7)]);
var inst_30240 = (state_30263[(2)]);
var inst_30241 = (inst_30227 + (1));
var inst_30227__$1 = inst_30241;
var state_30263__$1 = (function (){var statearr_30278 = state_30263;
(statearr_30278[(10)] = inst_30240);

(statearr_30278[(7)] = inst_30227__$1);

return statearr_30278;
})();
var statearr_30279_30303 = state_30263__$1;
(statearr_30279_30303[(2)] = null);

(statearr_30279_30303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (5))){
var inst_30247 = (state_30263[(2)]);
var state_30263__$1 = (function (){var statearr_30280 = state_30263;
(statearr_30280[(11)] = inst_30247);

return statearr_30280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30263__$1,(12),dchan);
} else {
if((state_val_30264 === (14))){
var inst_30249 = (state_30263[(8)]);
var inst_30254 = cljs.core.apply.call(null,f,inst_30249);
var state_30263__$1 = state_30263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30263__$1,(16),out,inst_30254);
} else {
if((state_val_30264 === (16))){
var inst_30256 = (state_30263[(2)]);
var state_30263__$1 = (function (){var statearr_30281 = state_30263;
(statearr_30281[(12)] = inst_30256);

return statearr_30281;
})();
var statearr_30282_30304 = state_30263__$1;
(statearr_30282_30304[(2)] = null);

(statearr_30282_30304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (10))){
var inst_30231 = (state_30263[(2)]);
var inst_30232 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30263__$1 = (function (){var statearr_30283 = state_30263;
(statearr_30283[(13)] = inst_30231);

return statearr_30283;
})();
var statearr_30284_30305 = state_30263__$1;
(statearr_30284_30305[(2)] = inst_30232);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30264 === (8))){
var inst_30245 = (state_30263[(2)]);
var state_30263__$1 = state_30263;
var statearr_30285_30306 = state_30263__$1;
(statearr_30285_30306[(2)] = inst_30245);

(statearr_30285_30306[(1)] = (5));


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
});})(c__28966__auto___30291,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28878__auto__,c__28966__auto___30291,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_30286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30286[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_30286[(1)] = (1));

return statearr_30286;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_30263){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30287){if((e30287 instanceof Object)){
var ex__28882__auto__ = e30287;
var statearr_30288_30307 = state_30263;
(statearr_30288_30307[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30308 = state_30263;
state_30263 = G__30308;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_30263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_30263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30291,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28968__auto__ = (function (){var statearr_30289 = f__28967__auto__.call(null);
(statearr_30289[(6)] = c__28966__auto___30291);

return statearr_30289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30291,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__30311 = arguments.length;
switch (G__30311) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28966__auto___30365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30365,out){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30365,out){
return (function (state_30343){
var state_val_30344 = (state_30343[(1)]);
if((state_val_30344 === (7))){
var inst_30323 = (state_30343[(7)]);
var inst_30322 = (state_30343[(8)]);
var inst_30322__$1 = (state_30343[(2)]);
var inst_30323__$1 = cljs.core.nth.call(null,inst_30322__$1,(0),null);
var inst_30324 = cljs.core.nth.call(null,inst_30322__$1,(1),null);
var inst_30325 = (inst_30323__$1 == null);
var state_30343__$1 = (function (){var statearr_30345 = state_30343;
(statearr_30345[(7)] = inst_30323__$1);

(statearr_30345[(8)] = inst_30322__$1);

(statearr_30345[(9)] = inst_30324);

return statearr_30345;
})();
if(cljs.core.truth_(inst_30325)){
var statearr_30346_30366 = state_30343__$1;
(statearr_30346_30366[(1)] = (8));

} else {
var statearr_30347_30367 = state_30343__$1;
(statearr_30347_30367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (1))){
var inst_30312 = cljs.core.vec.call(null,chs);
var inst_30313 = inst_30312;
var state_30343__$1 = (function (){var statearr_30348 = state_30343;
(statearr_30348[(10)] = inst_30313);

return statearr_30348;
})();
var statearr_30349_30368 = state_30343__$1;
(statearr_30349_30368[(2)] = null);

(statearr_30349_30368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (4))){
var inst_30313 = (state_30343[(10)]);
var state_30343__$1 = state_30343;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30343__$1,(7),inst_30313);
} else {
if((state_val_30344 === (6))){
var inst_30339 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30350_30369 = state_30343__$1;
(statearr_30350_30369[(2)] = inst_30339);

(statearr_30350_30369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (3))){
var inst_30341 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30343__$1,inst_30341);
} else {
if((state_val_30344 === (2))){
var inst_30313 = (state_30343[(10)]);
var inst_30315 = cljs.core.count.call(null,inst_30313);
var inst_30316 = (inst_30315 > (0));
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30316)){
var statearr_30352_30370 = state_30343__$1;
(statearr_30352_30370[(1)] = (4));

} else {
var statearr_30353_30371 = state_30343__$1;
(statearr_30353_30371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (11))){
var inst_30313 = (state_30343[(10)]);
var inst_30332 = (state_30343[(2)]);
var tmp30351 = inst_30313;
var inst_30313__$1 = tmp30351;
var state_30343__$1 = (function (){var statearr_30354 = state_30343;
(statearr_30354[(10)] = inst_30313__$1);

(statearr_30354[(11)] = inst_30332);

return statearr_30354;
})();
var statearr_30355_30372 = state_30343__$1;
(statearr_30355_30372[(2)] = null);

(statearr_30355_30372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (9))){
var inst_30323 = (state_30343[(7)]);
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30343__$1,(11),out,inst_30323);
} else {
if((state_val_30344 === (5))){
var inst_30337 = cljs.core.async.close_BANG_.call(null,out);
var state_30343__$1 = state_30343;
var statearr_30356_30373 = state_30343__$1;
(statearr_30356_30373[(2)] = inst_30337);

(statearr_30356_30373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (10))){
var inst_30335 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30357_30374 = state_30343__$1;
(statearr_30357_30374[(2)] = inst_30335);

(statearr_30357_30374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (8))){
var inst_30323 = (state_30343[(7)]);
var inst_30322 = (state_30343[(8)]);
var inst_30324 = (state_30343[(9)]);
var inst_30313 = (state_30343[(10)]);
var inst_30327 = (function (){var cs = inst_30313;
var vec__30318 = inst_30322;
var v = inst_30323;
var c = inst_30324;
return ((function (cs,vec__30318,v,c,inst_30323,inst_30322,inst_30324,inst_30313,state_val_30344,c__28966__auto___30365,out){
return (function (p1__30309_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30309_SHARP_);
});
;})(cs,vec__30318,v,c,inst_30323,inst_30322,inst_30324,inst_30313,state_val_30344,c__28966__auto___30365,out))
})();
var inst_30328 = cljs.core.filterv.call(null,inst_30327,inst_30313);
var inst_30313__$1 = inst_30328;
var state_30343__$1 = (function (){var statearr_30358 = state_30343;
(statearr_30358[(10)] = inst_30313__$1);

return statearr_30358;
})();
var statearr_30359_30375 = state_30343__$1;
(statearr_30359_30375[(2)] = null);

(statearr_30359_30375[(1)] = (2));


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
});})(c__28966__auto___30365,out))
;
return ((function (switch__28878__auto__,c__28966__auto___30365,out){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_30360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30360[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_30360[(1)] = (1));

return statearr_30360;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_30343){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30361){if((e30361 instanceof Object)){
var ex__28882__auto__ = e30361;
var statearr_30362_30376 = state_30343;
(statearr_30362_30376[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30377 = state_30343;
state_30343 = G__30377;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_30343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_30343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30365,out))
})();
var state__28968__auto__ = (function (){var statearr_30363 = f__28967__auto__.call(null);
(statearr_30363[(6)] = c__28966__auto___30365);

return statearr_30363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30365,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__30379 = arguments.length;
switch (G__30379) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28966__auto___30424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30424,out){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30424,out){
return (function (state_30403){
var state_val_30404 = (state_30403[(1)]);
if((state_val_30404 === (7))){
var inst_30385 = (state_30403[(7)]);
var inst_30385__$1 = (state_30403[(2)]);
var inst_30386 = (inst_30385__$1 == null);
var inst_30387 = cljs.core.not.call(null,inst_30386);
var state_30403__$1 = (function (){var statearr_30405 = state_30403;
(statearr_30405[(7)] = inst_30385__$1);

return statearr_30405;
})();
if(inst_30387){
var statearr_30406_30425 = state_30403__$1;
(statearr_30406_30425[(1)] = (8));

} else {
var statearr_30407_30426 = state_30403__$1;
(statearr_30407_30426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (1))){
var inst_30380 = (0);
var state_30403__$1 = (function (){var statearr_30408 = state_30403;
(statearr_30408[(8)] = inst_30380);

return statearr_30408;
})();
var statearr_30409_30427 = state_30403__$1;
(statearr_30409_30427[(2)] = null);

(statearr_30409_30427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (4))){
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30403__$1,(7),ch);
} else {
if((state_val_30404 === (6))){
var inst_30398 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
var statearr_30410_30428 = state_30403__$1;
(statearr_30410_30428[(2)] = inst_30398);

(statearr_30410_30428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (3))){
var inst_30400 = (state_30403[(2)]);
var inst_30401 = cljs.core.async.close_BANG_.call(null,out);
var state_30403__$1 = (function (){var statearr_30411 = state_30403;
(statearr_30411[(9)] = inst_30400);

return statearr_30411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30403__$1,inst_30401);
} else {
if((state_val_30404 === (2))){
var inst_30380 = (state_30403[(8)]);
var inst_30382 = (inst_30380 < n);
var state_30403__$1 = state_30403;
if(cljs.core.truth_(inst_30382)){
var statearr_30412_30429 = state_30403__$1;
(statearr_30412_30429[(1)] = (4));

} else {
var statearr_30413_30430 = state_30403__$1;
(statearr_30413_30430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (11))){
var inst_30380 = (state_30403[(8)]);
var inst_30390 = (state_30403[(2)]);
var inst_30391 = (inst_30380 + (1));
var inst_30380__$1 = inst_30391;
var state_30403__$1 = (function (){var statearr_30414 = state_30403;
(statearr_30414[(8)] = inst_30380__$1);

(statearr_30414[(10)] = inst_30390);

return statearr_30414;
})();
var statearr_30415_30431 = state_30403__$1;
(statearr_30415_30431[(2)] = null);

(statearr_30415_30431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (9))){
var state_30403__$1 = state_30403;
var statearr_30416_30432 = state_30403__$1;
(statearr_30416_30432[(2)] = null);

(statearr_30416_30432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (5))){
var state_30403__$1 = state_30403;
var statearr_30417_30433 = state_30403__$1;
(statearr_30417_30433[(2)] = null);

(statearr_30417_30433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (10))){
var inst_30395 = (state_30403[(2)]);
var state_30403__$1 = state_30403;
var statearr_30418_30434 = state_30403__$1;
(statearr_30418_30434[(2)] = inst_30395);

(statearr_30418_30434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30404 === (8))){
var inst_30385 = (state_30403[(7)]);
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30403__$1,(11),out,inst_30385);
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
});})(c__28966__auto___30424,out))
;
return ((function (switch__28878__auto__,c__28966__auto___30424,out){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_30419 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30419[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_30419[(1)] = (1));

return statearr_30419;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_30403){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30420){if((e30420 instanceof Object)){
var ex__28882__auto__ = e30420;
var statearr_30421_30435 = state_30403;
(statearr_30421_30435[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30436 = state_30403;
state_30403 = G__30436;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_30403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_30403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30424,out))
})();
var state__28968__auto__ = (function (){var statearr_30422 = f__28967__auto__.call(null);
(statearr_30422[(6)] = c__28966__auto___30424);

return statearr_30422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30424,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30438 = (function (f,ch,meta30439){
this.f = f;
this.ch = ch;
this.meta30439 = meta30439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30440,meta30439__$1){
var self__ = this;
var _30440__$1 = this;
return (new cljs.core.async.t_cljs$core$async30438(self__.f,self__.ch,meta30439__$1));
});

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30440){
var self__ = this;
var _30440__$1 = this;
return self__.meta30439;
});

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30441 = (function (f,ch,meta30439,_,fn1,meta30442){
this.f = f;
this.ch = ch;
this.meta30439 = meta30439;
this._ = _;
this.fn1 = fn1;
this.meta30442 = meta30442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30443,meta30442__$1){
var self__ = this;
var _30443__$1 = this;
return (new cljs.core.async.t_cljs$core$async30441(self__.f,self__.ch,self__.meta30439,self__._,self__.fn1,meta30442__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30443){
var self__ = this;
var _30443__$1 = this;
return self__.meta30442;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30437_SHARP_){
return f1.call(null,(((p1__30437_SHARP_ == null))?null:self__.f.call(null,p1__30437_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30441.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30439","meta30439",-326554582,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30438","cljs.core.async/t_cljs$core$async30438",-2136559218,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30442","meta30442",1440305563,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30441";

cljs.core.async.t_cljs$core$async30441.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30441");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30441.
 */
cljs.core.async.__GT_t_cljs$core$async30441 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30441(f__$1,ch__$1,meta30439__$1,___$2,fn1__$1,meta30442){
return (new cljs.core.async.t_cljs$core$async30441(f__$1,ch__$1,meta30439__$1,___$2,fn1__$1,meta30442));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30441(self__.f,self__.ch,self__.meta30439,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30438.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30439","meta30439",-326554582,null)], null);
});

cljs.core.async.t_cljs$core$async30438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30438";

cljs.core.async.t_cljs$core$async30438.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30438");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30438.
 */
cljs.core.async.__GT_t_cljs$core$async30438 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30438(f__$1,ch__$1,meta30439){
return (new cljs.core.async.t_cljs$core$async30438(f__$1,ch__$1,meta30439));
});

}

return (new cljs.core.async.t_cljs$core$async30438(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30444 = (function (f,ch,meta30445){
this.f = f;
this.ch = ch;
this.meta30445 = meta30445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30446,meta30445__$1){
var self__ = this;
var _30446__$1 = this;
return (new cljs.core.async.t_cljs$core$async30444(self__.f,self__.ch,meta30445__$1));
});

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30446){
var self__ = this;
var _30446__$1 = this;
return self__.meta30445;
});

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30445","meta30445",1793562967,null)], null);
});

cljs.core.async.t_cljs$core$async30444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30444";

cljs.core.async.t_cljs$core$async30444.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30444");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30444.
 */
cljs.core.async.__GT_t_cljs$core$async30444 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30444(f__$1,ch__$1,meta30445){
return (new cljs.core.async.t_cljs$core$async30444(f__$1,ch__$1,meta30445));
});

}

return (new cljs.core.async.t_cljs$core$async30444(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30447 = (function (p,ch,meta30448){
this.p = p;
this.ch = ch;
this.meta30448 = meta30448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30449,meta30448__$1){
var self__ = this;
var _30449__$1 = this;
return (new cljs.core.async.t_cljs$core$async30447(self__.p,self__.ch,meta30448__$1));
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30449){
var self__ = this;
var _30449__$1 = this;
return self__.meta30448;
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30447.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30448","meta30448",143756127,null)], null);
});

cljs.core.async.t_cljs$core$async30447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30447";

cljs.core.async.t_cljs$core$async30447.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async30447");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30447.
 */
cljs.core.async.__GT_t_cljs$core$async30447 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30447(p__$1,ch__$1,meta30448){
return (new cljs.core.async.t_cljs$core$async30447(p__$1,ch__$1,meta30448));
});

}

return (new cljs.core.async.t_cljs$core$async30447(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30451 = arguments.length;
switch (G__30451) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28966__auto___30491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30491,out){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30491,out){
return (function (state_30472){
var state_val_30473 = (state_30472[(1)]);
if((state_val_30473 === (7))){
var inst_30468 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
var statearr_30474_30492 = state_30472__$1;
(statearr_30474_30492[(2)] = inst_30468);

(statearr_30474_30492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (1))){
var state_30472__$1 = state_30472;
var statearr_30475_30493 = state_30472__$1;
(statearr_30475_30493[(2)] = null);

(statearr_30475_30493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (4))){
var inst_30454 = (state_30472[(7)]);
var inst_30454__$1 = (state_30472[(2)]);
var inst_30455 = (inst_30454__$1 == null);
var state_30472__$1 = (function (){var statearr_30476 = state_30472;
(statearr_30476[(7)] = inst_30454__$1);

return statearr_30476;
})();
if(cljs.core.truth_(inst_30455)){
var statearr_30477_30494 = state_30472__$1;
(statearr_30477_30494[(1)] = (5));

} else {
var statearr_30478_30495 = state_30472__$1;
(statearr_30478_30495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (6))){
var inst_30454 = (state_30472[(7)]);
var inst_30459 = p.call(null,inst_30454);
var state_30472__$1 = state_30472;
if(cljs.core.truth_(inst_30459)){
var statearr_30479_30496 = state_30472__$1;
(statearr_30479_30496[(1)] = (8));

} else {
var statearr_30480_30497 = state_30472__$1;
(statearr_30480_30497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (3))){
var inst_30470 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30472__$1,inst_30470);
} else {
if((state_val_30473 === (2))){
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30472__$1,(4),ch);
} else {
if((state_val_30473 === (11))){
var inst_30462 = (state_30472[(2)]);
var state_30472__$1 = state_30472;
var statearr_30481_30498 = state_30472__$1;
(statearr_30481_30498[(2)] = inst_30462);

(statearr_30481_30498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (9))){
var state_30472__$1 = state_30472;
var statearr_30482_30499 = state_30472__$1;
(statearr_30482_30499[(2)] = null);

(statearr_30482_30499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (5))){
var inst_30457 = cljs.core.async.close_BANG_.call(null,out);
var state_30472__$1 = state_30472;
var statearr_30483_30500 = state_30472__$1;
(statearr_30483_30500[(2)] = inst_30457);

(statearr_30483_30500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (10))){
var inst_30465 = (state_30472[(2)]);
var state_30472__$1 = (function (){var statearr_30484 = state_30472;
(statearr_30484[(8)] = inst_30465);

return statearr_30484;
})();
var statearr_30485_30501 = state_30472__$1;
(statearr_30485_30501[(2)] = null);

(statearr_30485_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30473 === (8))){
var inst_30454 = (state_30472[(7)]);
var state_30472__$1 = state_30472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30472__$1,(11),out,inst_30454);
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
});})(c__28966__auto___30491,out))
;
return ((function (switch__28878__auto__,c__28966__auto___30491,out){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_30486 = [null,null,null,null,null,null,null,null,null];
(statearr_30486[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_30486[(1)] = (1));

return statearr_30486;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_30472){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30487){if((e30487 instanceof Object)){
var ex__28882__auto__ = e30487;
var statearr_30488_30502 = state_30472;
(statearr_30488_30502[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30503 = state_30472;
state_30472 = G__30503;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_30472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_30472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30491,out))
})();
var state__28968__auto__ = (function (){var statearr_30489 = f__28967__auto__.call(null);
(statearr_30489[(6)] = c__28966__auto___30491);

return statearr_30489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30491,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__30505 = arguments.length;
switch (G__30505) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__){
return (function (state_30568){
var state_val_30569 = (state_30568[(1)]);
if((state_val_30569 === (7))){
var inst_30564 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30570_30608 = state_30568__$1;
(statearr_30570_30608[(2)] = inst_30564);

(statearr_30570_30608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (20))){
var inst_30534 = (state_30568[(7)]);
var inst_30545 = (state_30568[(2)]);
var inst_30546 = cljs.core.next.call(null,inst_30534);
var inst_30520 = inst_30546;
var inst_30521 = null;
var inst_30522 = (0);
var inst_30523 = (0);
var state_30568__$1 = (function (){var statearr_30571 = state_30568;
(statearr_30571[(8)] = inst_30522);

(statearr_30571[(9)] = inst_30545);

(statearr_30571[(10)] = inst_30523);

(statearr_30571[(11)] = inst_30520);

(statearr_30571[(12)] = inst_30521);

return statearr_30571;
})();
var statearr_30572_30609 = state_30568__$1;
(statearr_30572_30609[(2)] = null);

(statearr_30572_30609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (1))){
var state_30568__$1 = state_30568;
var statearr_30573_30610 = state_30568__$1;
(statearr_30573_30610[(2)] = null);

(statearr_30573_30610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (4))){
var inst_30509 = (state_30568[(13)]);
var inst_30509__$1 = (state_30568[(2)]);
var inst_30510 = (inst_30509__$1 == null);
var state_30568__$1 = (function (){var statearr_30574 = state_30568;
(statearr_30574[(13)] = inst_30509__$1);

return statearr_30574;
})();
if(cljs.core.truth_(inst_30510)){
var statearr_30575_30611 = state_30568__$1;
(statearr_30575_30611[(1)] = (5));

} else {
var statearr_30576_30612 = state_30568__$1;
(statearr_30576_30612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (15))){
var state_30568__$1 = state_30568;
var statearr_30580_30613 = state_30568__$1;
(statearr_30580_30613[(2)] = null);

(statearr_30580_30613[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (21))){
var state_30568__$1 = state_30568;
var statearr_30581_30614 = state_30568__$1;
(statearr_30581_30614[(2)] = null);

(statearr_30581_30614[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (13))){
var inst_30522 = (state_30568[(8)]);
var inst_30523 = (state_30568[(10)]);
var inst_30520 = (state_30568[(11)]);
var inst_30521 = (state_30568[(12)]);
var inst_30530 = (state_30568[(2)]);
var inst_30531 = (inst_30523 + (1));
var tmp30577 = inst_30522;
var tmp30578 = inst_30520;
var tmp30579 = inst_30521;
var inst_30520__$1 = tmp30578;
var inst_30521__$1 = tmp30579;
var inst_30522__$1 = tmp30577;
var inst_30523__$1 = inst_30531;
var state_30568__$1 = (function (){var statearr_30582 = state_30568;
(statearr_30582[(8)] = inst_30522__$1);

(statearr_30582[(14)] = inst_30530);

(statearr_30582[(10)] = inst_30523__$1);

(statearr_30582[(11)] = inst_30520__$1);

(statearr_30582[(12)] = inst_30521__$1);

return statearr_30582;
})();
var statearr_30583_30615 = state_30568__$1;
(statearr_30583_30615[(2)] = null);

(statearr_30583_30615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (22))){
var state_30568__$1 = state_30568;
var statearr_30584_30616 = state_30568__$1;
(statearr_30584_30616[(2)] = null);

(statearr_30584_30616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (6))){
var inst_30509 = (state_30568[(13)]);
var inst_30518 = f.call(null,inst_30509);
var inst_30519 = cljs.core.seq.call(null,inst_30518);
var inst_30520 = inst_30519;
var inst_30521 = null;
var inst_30522 = (0);
var inst_30523 = (0);
var state_30568__$1 = (function (){var statearr_30585 = state_30568;
(statearr_30585[(8)] = inst_30522);

(statearr_30585[(10)] = inst_30523);

(statearr_30585[(11)] = inst_30520);

(statearr_30585[(12)] = inst_30521);

return statearr_30585;
})();
var statearr_30586_30617 = state_30568__$1;
(statearr_30586_30617[(2)] = null);

(statearr_30586_30617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (17))){
var inst_30534 = (state_30568[(7)]);
var inst_30538 = cljs.core.chunk_first.call(null,inst_30534);
var inst_30539 = cljs.core.chunk_rest.call(null,inst_30534);
var inst_30540 = cljs.core.count.call(null,inst_30538);
var inst_30520 = inst_30539;
var inst_30521 = inst_30538;
var inst_30522 = inst_30540;
var inst_30523 = (0);
var state_30568__$1 = (function (){var statearr_30587 = state_30568;
(statearr_30587[(8)] = inst_30522);

(statearr_30587[(10)] = inst_30523);

(statearr_30587[(11)] = inst_30520);

(statearr_30587[(12)] = inst_30521);

return statearr_30587;
})();
var statearr_30588_30618 = state_30568__$1;
(statearr_30588_30618[(2)] = null);

(statearr_30588_30618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (3))){
var inst_30566 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30568__$1,inst_30566);
} else {
if((state_val_30569 === (12))){
var inst_30554 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30589_30619 = state_30568__$1;
(statearr_30589_30619[(2)] = inst_30554);

(statearr_30589_30619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (2))){
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(4),in$);
} else {
if((state_val_30569 === (23))){
var inst_30562 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30590_30620 = state_30568__$1;
(statearr_30590_30620[(2)] = inst_30562);

(statearr_30590_30620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (19))){
var inst_30549 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30591_30621 = state_30568__$1;
(statearr_30591_30621[(2)] = inst_30549);

(statearr_30591_30621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (11))){
var inst_30534 = (state_30568[(7)]);
var inst_30520 = (state_30568[(11)]);
var inst_30534__$1 = cljs.core.seq.call(null,inst_30520);
var state_30568__$1 = (function (){var statearr_30592 = state_30568;
(statearr_30592[(7)] = inst_30534__$1);

return statearr_30592;
})();
if(inst_30534__$1){
var statearr_30593_30622 = state_30568__$1;
(statearr_30593_30622[(1)] = (14));

} else {
var statearr_30594_30623 = state_30568__$1;
(statearr_30594_30623[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (9))){
var inst_30556 = (state_30568[(2)]);
var inst_30557 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30568__$1 = (function (){var statearr_30595 = state_30568;
(statearr_30595[(15)] = inst_30556);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30557)){
var statearr_30596_30624 = state_30568__$1;
(statearr_30596_30624[(1)] = (21));

} else {
var statearr_30597_30625 = state_30568__$1;
(statearr_30597_30625[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (5))){
var inst_30512 = cljs.core.async.close_BANG_.call(null,out);
var state_30568__$1 = state_30568;
var statearr_30598_30626 = state_30568__$1;
(statearr_30598_30626[(2)] = inst_30512);

(statearr_30598_30626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (14))){
var inst_30534 = (state_30568[(7)]);
var inst_30536 = cljs.core.chunked_seq_QMARK_.call(null,inst_30534);
var state_30568__$1 = state_30568;
if(inst_30536){
var statearr_30599_30627 = state_30568__$1;
(statearr_30599_30627[(1)] = (17));

} else {
var statearr_30600_30628 = state_30568__$1;
(statearr_30600_30628[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (16))){
var inst_30552 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
var statearr_30601_30629 = state_30568__$1;
(statearr_30601_30629[(2)] = inst_30552);

(statearr_30601_30629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (10))){
var inst_30523 = (state_30568[(10)]);
var inst_30521 = (state_30568[(12)]);
var inst_30528 = cljs.core._nth.call(null,inst_30521,inst_30523);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30568__$1,(13),out,inst_30528);
} else {
if((state_val_30569 === (18))){
var inst_30534 = (state_30568[(7)]);
var inst_30543 = cljs.core.first.call(null,inst_30534);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30568__$1,(20),out,inst_30543);
} else {
if((state_val_30569 === (8))){
var inst_30522 = (state_30568[(8)]);
var inst_30523 = (state_30568[(10)]);
var inst_30525 = (inst_30523 < inst_30522);
var inst_30526 = inst_30525;
var state_30568__$1 = state_30568;
if(cljs.core.truth_(inst_30526)){
var statearr_30602_30630 = state_30568__$1;
(statearr_30602_30630[(1)] = (10));

} else {
var statearr_30603_30631 = state_30568__$1;
(statearr_30603_30631[(1)] = (11));

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
});})(c__28966__auto__))
;
return ((function (switch__28878__auto__,c__28966__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28879__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28879__auto____0 = (function (){
var statearr_30604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30604[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28879__auto__);

(statearr_30604[(1)] = (1));

return statearr_30604;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28879__auto____1 = (function (state_30568){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30605){if((e30605 instanceof Object)){
var ex__28882__auto__ = e30605;
var statearr_30606_30632 = state_30568;
(statearr_30606_30632[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30633 = state_30568;
state_30568 = G__30633;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28879__auto__ = function(state_30568){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28879__auto____1.call(this,state_30568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28879__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28879__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__))
})();
var state__28968__auto__ = (function (){var statearr_30607 = f__28967__auto__.call(null);
(statearr_30607[(6)] = c__28966__auto__);

return statearr_30607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__))
);

return c__28966__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__30635 = arguments.length;
switch (G__30635) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__30638 = arguments.length;
switch (G__30638) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__30641 = arguments.length;
switch (G__30641) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28966__auto___30688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30688,out){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30688,out){
return (function (state_30665){
var state_val_30666 = (state_30665[(1)]);
if((state_val_30666 === (7))){
var inst_30660 = (state_30665[(2)]);
var state_30665__$1 = state_30665;
var statearr_30667_30689 = state_30665__$1;
(statearr_30667_30689[(2)] = inst_30660);

(statearr_30667_30689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (1))){
var inst_30642 = null;
var state_30665__$1 = (function (){var statearr_30668 = state_30665;
(statearr_30668[(7)] = inst_30642);

return statearr_30668;
})();
var statearr_30669_30690 = state_30665__$1;
(statearr_30669_30690[(2)] = null);

(statearr_30669_30690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (4))){
var inst_30645 = (state_30665[(8)]);
var inst_30645__$1 = (state_30665[(2)]);
var inst_30646 = (inst_30645__$1 == null);
var inst_30647 = cljs.core.not.call(null,inst_30646);
var state_30665__$1 = (function (){var statearr_30670 = state_30665;
(statearr_30670[(8)] = inst_30645__$1);

return statearr_30670;
})();
if(inst_30647){
var statearr_30671_30691 = state_30665__$1;
(statearr_30671_30691[(1)] = (5));

} else {
var statearr_30672_30692 = state_30665__$1;
(statearr_30672_30692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (6))){
var state_30665__$1 = state_30665;
var statearr_30673_30693 = state_30665__$1;
(statearr_30673_30693[(2)] = null);

(statearr_30673_30693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (3))){
var inst_30662 = (state_30665[(2)]);
var inst_30663 = cljs.core.async.close_BANG_.call(null,out);
var state_30665__$1 = (function (){var statearr_30674 = state_30665;
(statearr_30674[(9)] = inst_30662);

return statearr_30674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30665__$1,inst_30663);
} else {
if((state_val_30666 === (2))){
var state_30665__$1 = state_30665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30665__$1,(4),ch);
} else {
if((state_val_30666 === (11))){
var inst_30645 = (state_30665[(8)]);
var inst_30654 = (state_30665[(2)]);
var inst_30642 = inst_30645;
var state_30665__$1 = (function (){var statearr_30675 = state_30665;
(statearr_30675[(10)] = inst_30654);

(statearr_30675[(7)] = inst_30642);

return statearr_30675;
})();
var statearr_30676_30694 = state_30665__$1;
(statearr_30676_30694[(2)] = null);

(statearr_30676_30694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (9))){
var inst_30645 = (state_30665[(8)]);
var state_30665__$1 = state_30665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30665__$1,(11),out,inst_30645);
} else {
if((state_val_30666 === (5))){
var inst_30642 = (state_30665[(7)]);
var inst_30645 = (state_30665[(8)]);
var inst_30649 = cljs.core._EQ_.call(null,inst_30645,inst_30642);
var state_30665__$1 = state_30665;
if(inst_30649){
var statearr_30678_30695 = state_30665__$1;
(statearr_30678_30695[(1)] = (8));

} else {
var statearr_30679_30696 = state_30665__$1;
(statearr_30679_30696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (10))){
var inst_30657 = (state_30665[(2)]);
var state_30665__$1 = state_30665;
var statearr_30680_30697 = state_30665__$1;
(statearr_30680_30697[(2)] = inst_30657);

(statearr_30680_30697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30666 === (8))){
var inst_30642 = (state_30665[(7)]);
var tmp30677 = inst_30642;
var inst_30642__$1 = tmp30677;
var state_30665__$1 = (function (){var statearr_30681 = state_30665;
(statearr_30681[(7)] = inst_30642__$1);

return statearr_30681;
})();
var statearr_30682_30698 = state_30665__$1;
(statearr_30682_30698[(2)] = null);

(statearr_30682_30698[(1)] = (2));


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
});})(c__28966__auto___30688,out))
;
return ((function (switch__28878__auto__,c__28966__auto___30688,out){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_30683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30683[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_30683[(1)] = (1));

return statearr_30683;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_30665){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30684){if((e30684 instanceof Object)){
var ex__28882__auto__ = e30684;
var statearr_30685_30699 = state_30665;
(statearr_30685_30699[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30700 = state_30665;
state_30665 = G__30700;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_30665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_30665);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30688,out))
})();
var state__28968__auto__ = (function (){var statearr_30686 = f__28967__auto__.call(null);
(statearr_30686[(6)] = c__28966__auto___30688);

return statearr_30686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30688,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30702 = arguments.length;
switch (G__30702) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28966__auto___30768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30768,out){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30768,out){
return (function (state_30740){
var state_val_30741 = (state_30740[(1)]);
if((state_val_30741 === (7))){
var inst_30736 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30742_30769 = state_30740__$1;
(statearr_30742_30769[(2)] = inst_30736);

(statearr_30742_30769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (1))){
var inst_30703 = (new Array(n));
var inst_30704 = inst_30703;
var inst_30705 = (0);
var state_30740__$1 = (function (){var statearr_30743 = state_30740;
(statearr_30743[(7)] = inst_30704);

(statearr_30743[(8)] = inst_30705);

return statearr_30743;
})();
var statearr_30744_30770 = state_30740__$1;
(statearr_30744_30770[(2)] = null);

(statearr_30744_30770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (4))){
var inst_30708 = (state_30740[(9)]);
var inst_30708__$1 = (state_30740[(2)]);
var inst_30709 = (inst_30708__$1 == null);
var inst_30710 = cljs.core.not.call(null,inst_30709);
var state_30740__$1 = (function (){var statearr_30745 = state_30740;
(statearr_30745[(9)] = inst_30708__$1);

return statearr_30745;
})();
if(inst_30710){
var statearr_30746_30771 = state_30740__$1;
(statearr_30746_30771[(1)] = (5));

} else {
var statearr_30747_30772 = state_30740__$1;
(statearr_30747_30772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (15))){
var inst_30730 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30748_30773 = state_30740__$1;
(statearr_30748_30773[(2)] = inst_30730);

(statearr_30748_30773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (13))){
var state_30740__$1 = state_30740;
var statearr_30749_30774 = state_30740__$1;
(statearr_30749_30774[(2)] = null);

(statearr_30749_30774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (6))){
var inst_30705 = (state_30740[(8)]);
var inst_30726 = (inst_30705 > (0));
var state_30740__$1 = state_30740;
if(cljs.core.truth_(inst_30726)){
var statearr_30750_30775 = state_30740__$1;
(statearr_30750_30775[(1)] = (12));

} else {
var statearr_30751_30776 = state_30740__$1;
(statearr_30751_30776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (3))){
var inst_30738 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30740__$1,inst_30738);
} else {
if((state_val_30741 === (12))){
var inst_30704 = (state_30740[(7)]);
var inst_30728 = cljs.core.vec.call(null,inst_30704);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30740__$1,(15),out,inst_30728);
} else {
if((state_val_30741 === (2))){
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30740__$1,(4),ch);
} else {
if((state_val_30741 === (11))){
var inst_30720 = (state_30740[(2)]);
var inst_30721 = (new Array(n));
var inst_30704 = inst_30721;
var inst_30705 = (0);
var state_30740__$1 = (function (){var statearr_30752 = state_30740;
(statearr_30752[(7)] = inst_30704);

(statearr_30752[(10)] = inst_30720);

(statearr_30752[(8)] = inst_30705);

return statearr_30752;
})();
var statearr_30753_30777 = state_30740__$1;
(statearr_30753_30777[(2)] = null);

(statearr_30753_30777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (9))){
var inst_30704 = (state_30740[(7)]);
var inst_30718 = cljs.core.vec.call(null,inst_30704);
var state_30740__$1 = state_30740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30740__$1,(11),out,inst_30718);
} else {
if((state_val_30741 === (5))){
var inst_30704 = (state_30740[(7)]);
var inst_30713 = (state_30740[(11)]);
var inst_30708 = (state_30740[(9)]);
var inst_30705 = (state_30740[(8)]);
var inst_30712 = (inst_30704[inst_30705] = inst_30708);
var inst_30713__$1 = (inst_30705 + (1));
var inst_30714 = (inst_30713__$1 < n);
var state_30740__$1 = (function (){var statearr_30754 = state_30740;
(statearr_30754[(12)] = inst_30712);

(statearr_30754[(11)] = inst_30713__$1);

return statearr_30754;
})();
if(cljs.core.truth_(inst_30714)){
var statearr_30755_30778 = state_30740__$1;
(statearr_30755_30778[(1)] = (8));

} else {
var statearr_30756_30779 = state_30740__$1;
(statearr_30756_30779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (14))){
var inst_30733 = (state_30740[(2)]);
var inst_30734 = cljs.core.async.close_BANG_.call(null,out);
var state_30740__$1 = (function (){var statearr_30758 = state_30740;
(statearr_30758[(13)] = inst_30733);

return statearr_30758;
})();
var statearr_30759_30780 = state_30740__$1;
(statearr_30759_30780[(2)] = inst_30734);

(statearr_30759_30780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (10))){
var inst_30724 = (state_30740[(2)]);
var state_30740__$1 = state_30740;
var statearr_30760_30781 = state_30740__$1;
(statearr_30760_30781[(2)] = inst_30724);

(statearr_30760_30781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30741 === (8))){
var inst_30704 = (state_30740[(7)]);
var inst_30713 = (state_30740[(11)]);
var tmp30757 = inst_30704;
var inst_30704__$1 = tmp30757;
var inst_30705 = inst_30713;
var state_30740__$1 = (function (){var statearr_30761 = state_30740;
(statearr_30761[(7)] = inst_30704__$1);

(statearr_30761[(8)] = inst_30705);

return statearr_30761;
})();
var statearr_30762_30782 = state_30740__$1;
(statearr_30762_30782[(2)] = null);

(statearr_30762_30782[(1)] = (2));


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
});})(c__28966__auto___30768,out))
;
return ((function (switch__28878__auto__,c__28966__auto___30768,out){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_30763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30763[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_30763[(1)] = (1));

return statearr_30763;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_30740){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30764){if((e30764 instanceof Object)){
var ex__28882__auto__ = e30764;
var statearr_30765_30783 = state_30740;
(statearr_30765_30783[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30784 = state_30740;
state_30740 = G__30784;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_30740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_30740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30768,out))
})();
var state__28968__auto__ = (function (){var statearr_30766 = f__28967__auto__.call(null);
(statearr_30766[(6)] = c__28966__auto___30768);

return statearr_30766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30768,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30786 = arguments.length;
switch (G__30786) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28966__auto___30856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___30856,out){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___30856,out){
return (function (state_30828){
var state_val_30829 = (state_30828[(1)]);
if((state_val_30829 === (7))){
var inst_30824 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30830_30857 = state_30828__$1;
(statearr_30830_30857[(2)] = inst_30824);

(statearr_30830_30857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (1))){
var inst_30787 = [];
var inst_30788 = inst_30787;
var inst_30789 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30828__$1 = (function (){var statearr_30831 = state_30828;
(statearr_30831[(7)] = inst_30789);

(statearr_30831[(8)] = inst_30788);

return statearr_30831;
})();
var statearr_30832_30858 = state_30828__$1;
(statearr_30832_30858[(2)] = null);

(statearr_30832_30858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (4))){
var inst_30792 = (state_30828[(9)]);
var inst_30792__$1 = (state_30828[(2)]);
var inst_30793 = (inst_30792__$1 == null);
var inst_30794 = cljs.core.not.call(null,inst_30793);
var state_30828__$1 = (function (){var statearr_30833 = state_30828;
(statearr_30833[(9)] = inst_30792__$1);

return statearr_30833;
})();
if(inst_30794){
var statearr_30834_30859 = state_30828__$1;
(statearr_30834_30859[(1)] = (5));

} else {
var statearr_30835_30860 = state_30828__$1;
(statearr_30835_30860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (15))){
var inst_30818 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30836_30861 = state_30828__$1;
(statearr_30836_30861[(2)] = inst_30818);

(statearr_30836_30861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (13))){
var state_30828__$1 = state_30828;
var statearr_30837_30862 = state_30828__$1;
(statearr_30837_30862[(2)] = null);

(statearr_30837_30862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (6))){
var inst_30788 = (state_30828[(8)]);
var inst_30813 = inst_30788.length;
var inst_30814 = (inst_30813 > (0));
var state_30828__$1 = state_30828;
if(cljs.core.truth_(inst_30814)){
var statearr_30838_30863 = state_30828__$1;
(statearr_30838_30863[(1)] = (12));

} else {
var statearr_30839_30864 = state_30828__$1;
(statearr_30839_30864[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (3))){
var inst_30826 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30828__$1,inst_30826);
} else {
if((state_val_30829 === (12))){
var inst_30788 = (state_30828[(8)]);
var inst_30816 = cljs.core.vec.call(null,inst_30788);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30828__$1,(15),out,inst_30816);
} else {
if((state_val_30829 === (2))){
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30828__$1,(4),ch);
} else {
if((state_val_30829 === (11))){
var inst_30796 = (state_30828[(10)]);
var inst_30792 = (state_30828[(9)]);
var inst_30806 = (state_30828[(2)]);
var inst_30807 = [];
var inst_30808 = inst_30807.push(inst_30792);
var inst_30788 = inst_30807;
var inst_30789 = inst_30796;
var state_30828__$1 = (function (){var statearr_30840 = state_30828;
(statearr_30840[(11)] = inst_30808);

(statearr_30840[(7)] = inst_30789);

(statearr_30840[(12)] = inst_30806);

(statearr_30840[(8)] = inst_30788);

return statearr_30840;
})();
var statearr_30841_30865 = state_30828__$1;
(statearr_30841_30865[(2)] = null);

(statearr_30841_30865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (9))){
var inst_30788 = (state_30828[(8)]);
var inst_30804 = cljs.core.vec.call(null,inst_30788);
var state_30828__$1 = state_30828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30828__$1,(11),out,inst_30804);
} else {
if((state_val_30829 === (5))){
var inst_30789 = (state_30828[(7)]);
var inst_30796 = (state_30828[(10)]);
var inst_30792 = (state_30828[(9)]);
var inst_30796__$1 = f.call(null,inst_30792);
var inst_30797 = cljs.core._EQ_.call(null,inst_30796__$1,inst_30789);
var inst_30798 = cljs.core.keyword_identical_QMARK_.call(null,inst_30789,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30799 = ((inst_30797) || (inst_30798));
var state_30828__$1 = (function (){var statearr_30842 = state_30828;
(statearr_30842[(10)] = inst_30796__$1);

return statearr_30842;
})();
if(cljs.core.truth_(inst_30799)){
var statearr_30843_30866 = state_30828__$1;
(statearr_30843_30866[(1)] = (8));

} else {
var statearr_30844_30867 = state_30828__$1;
(statearr_30844_30867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (14))){
var inst_30821 = (state_30828[(2)]);
var inst_30822 = cljs.core.async.close_BANG_.call(null,out);
var state_30828__$1 = (function (){var statearr_30846 = state_30828;
(statearr_30846[(13)] = inst_30821);

return statearr_30846;
})();
var statearr_30847_30868 = state_30828__$1;
(statearr_30847_30868[(2)] = inst_30822);

(statearr_30847_30868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (10))){
var inst_30811 = (state_30828[(2)]);
var state_30828__$1 = state_30828;
var statearr_30848_30869 = state_30828__$1;
(statearr_30848_30869[(2)] = inst_30811);

(statearr_30848_30869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30829 === (8))){
var inst_30788 = (state_30828[(8)]);
var inst_30796 = (state_30828[(10)]);
var inst_30792 = (state_30828[(9)]);
var inst_30801 = inst_30788.push(inst_30792);
var tmp30845 = inst_30788;
var inst_30788__$1 = tmp30845;
var inst_30789 = inst_30796;
var state_30828__$1 = (function (){var statearr_30849 = state_30828;
(statearr_30849[(7)] = inst_30789);

(statearr_30849[(8)] = inst_30788__$1);

(statearr_30849[(14)] = inst_30801);

return statearr_30849;
})();
var statearr_30850_30870 = state_30828__$1;
(statearr_30850_30870[(2)] = null);

(statearr_30850_30870[(1)] = (2));


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
});})(c__28966__auto___30856,out))
;
return ((function (switch__28878__auto__,c__28966__auto___30856,out){
return (function() {
var cljs$core$async$state_machine__28879__auto__ = null;
var cljs$core$async$state_machine__28879__auto____0 = (function (){
var statearr_30851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30851[(0)] = cljs$core$async$state_machine__28879__auto__);

(statearr_30851[(1)] = (1));

return statearr_30851;
});
var cljs$core$async$state_machine__28879__auto____1 = (function (state_30828){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_30828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e30852){if((e30852 instanceof Object)){
var ex__28882__auto__ = e30852;
var statearr_30853_30871 = state_30828;
(statearr_30853_30871[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30872 = state_30828;
state_30828 = G__30872;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
cljs$core$async$state_machine__28879__auto__ = function(state_30828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28879__auto____1.call(this,state_30828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28879__auto____0;
cljs$core$async$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28879__auto____1;
return cljs$core$async$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___30856,out))
})();
var state__28968__auto__ = (function (){var statearr_30854 = f__28967__auto__.call(null);
(statearr_30854[(6)] = c__28966__auto___30856);

return statearr_30854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___30856,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544505248834
