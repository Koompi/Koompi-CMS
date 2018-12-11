// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_24425 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__24426 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24427 = null;
var count__24428 = (0);
var i__24429 = (0);
while(true){
if((i__24429 < count__24428)){
var vec__24430 = cljs.core._nth.call(null,chunk__24427,i__24429);
var effect_key = cljs.core.nth.call(null,vec__24430,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24430,(1),null);
var temp__4655__auto___24446 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24446)){
var effect_fn_24447 = temp__4655__auto___24446;
effect_fn_24447.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24448 = seq__24426;
var G__24449 = chunk__24427;
var G__24450 = count__24428;
var G__24451 = (i__24429 + (1));
seq__24426 = G__24448;
chunk__24427 = G__24449;
count__24428 = G__24450;
i__24429 = G__24451;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24426);
if(temp__4657__auto__){
var seq__24426__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24426__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24426__$1);
var G__24452 = cljs.core.chunk_rest.call(null,seq__24426__$1);
var G__24453 = c__4319__auto__;
var G__24454 = cljs.core.count.call(null,c__4319__auto__);
var G__24455 = (0);
seq__24426 = G__24452;
chunk__24427 = G__24453;
count__24428 = G__24454;
i__24429 = G__24455;
continue;
} else {
var vec__24433 = cljs.core.first.call(null,seq__24426__$1);
var effect_key = cljs.core.nth.call(null,vec__24433,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24433,(1),null);
var temp__4655__auto___24456 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24456)){
var effect_fn_24457 = temp__4655__auto___24456;
effect_fn_24457.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24458 = cljs.core.next.call(null,seq__24426__$1);
var G__24459 = null;
var G__24460 = (0);
var G__24461 = (0);
seq__24426 = G__24458;
chunk__24427 = G__24459;
count__24428 = G__24460;
i__24429 = G__24461;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__24261__auto___24462 = re_frame.interop.now.call(null);
var duration__24262__auto___24463 = (end__24261__auto___24462 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24262__auto___24463,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__24261__auto___24462);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_24425;
}} else {
var seq__24436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__24437 = null;
var count__24438 = (0);
var i__24439 = (0);
while(true){
if((i__24439 < count__24438)){
var vec__24440 = cljs.core._nth.call(null,chunk__24437,i__24439);
var effect_key = cljs.core.nth.call(null,vec__24440,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24440,(1),null);
var temp__4655__auto___24464 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24464)){
var effect_fn_24465 = temp__4655__auto___24464;
effect_fn_24465.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24466 = seq__24436;
var G__24467 = chunk__24437;
var G__24468 = count__24438;
var G__24469 = (i__24439 + (1));
seq__24436 = G__24466;
chunk__24437 = G__24467;
count__24438 = G__24468;
i__24439 = G__24469;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24436);
if(temp__4657__auto__){
var seq__24436__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24436__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24436__$1);
var G__24470 = cljs.core.chunk_rest.call(null,seq__24436__$1);
var G__24471 = c__4319__auto__;
var G__24472 = cljs.core.count.call(null,c__4319__auto__);
var G__24473 = (0);
seq__24436 = G__24470;
chunk__24437 = G__24471;
count__24438 = G__24472;
i__24439 = G__24473;
continue;
} else {
var vec__24443 = cljs.core.first.call(null,seq__24436__$1);
var effect_key = cljs.core.nth.call(null,vec__24443,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24443,(1),null);
var temp__4655__auto___24474 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___24474)){
var effect_fn_24475 = temp__4655__auto___24474;
effect_fn_24475.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24476 = cljs.core.next.call(null,seq__24436__$1);
var G__24477 = null;
var G__24478 = (0);
var G__24479 = (0);
seq__24436 = G__24476;
chunk__24437 = G__24477;
count__24438 = G__24478;
i__24439 = G__24479;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__24480 = cljs.core.seq.call(null,value);
var chunk__24481 = null;
var count__24482 = (0);
var i__24483 = (0);
while(true){
if((i__24483 < count__24482)){
var map__24484 = cljs.core._nth.call(null,chunk__24481,i__24483);
var map__24484__$1 = ((((!((map__24484 == null)))?(((((map__24484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24484):map__24484);
var effect = map__24484__$1;
var ms = cljs.core.get.call(null,map__24484__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24484__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24480,chunk__24481,count__24482,i__24483,map__24484,map__24484__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24480,chunk__24481,count__24482,i__24483,map__24484,map__24484__$1,effect,ms,dispatch))
,ms);
}


var G__24488 = seq__24480;
var G__24489 = chunk__24481;
var G__24490 = count__24482;
var G__24491 = (i__24483 + (1));
seq__24480 = G__24488;
chunk__24481 = G__24489;
count__24482 = G__24490;
i__24483 = G__24491;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24480);
if(temp__4657__auto__){
var seq__24480__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24480__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24480__$1);
var G__24492 = cljs.core.chunk_rest.call(null,seq__24480__$1);
var G__24493 = c__4319__auto__;
var G__24494 = cljs.core.count.call(null,c__4319__auto__);
var G__24495 = (0);
seq__24480 = G__24492;
chunk__24481 = G__24493;
count__24482 = G__24494;
i__24483 = G__24495;
continue;
} else {
var map__24486 = cljs.core.first.call(null,seq__24480__$1);
var map__24486__$1 = ((((!((map__24486 == null)))?(((((map__24486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24486):map__24486);
var effect = map__24486__$1;
var ms = cljs.core.get.call(null,map__24486__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24486__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__24480,chunk__24481,count__24482,i__24483,map__24486,map__24486__$1,effect,ms,dispatch,seq__24480__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__24480,chunk__24481,count__24482,i__24483,map__24486,map__24486__$1,effect,ms,dispatch,seq__24480__$1,temp__4657__auto__))
,ms);
}


var G__24496 = cljs.core.next.call(null,seq__24480__$1);
var G__24497 = null;
var G__24498 = (0);
var G__24499 = (0);
seq__24480 = G__24496;
chunk__24481 = G__24497;
count__24482 = G__24498;
i__24483 = G__24499;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__24500 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__24501 = null;
var count__24502 = (0);
var i__24503 = (0);
while(true){
if((i__24503 < count__24502)){
var event = cljs.core._nth.call(null,chunk__24501,i__24503);
re_frame.router.dispatch.call(null,event);


var G__24504 = seq__24500;
var G__24505 = chunk__24501;
var G__24506 = count__24502;
var G__24507 = (i__24503 + (1));
seq__24500 = G__24504;
chunk__24501 = G__24505;
count__24502 = G__24506;
i__24503 = G__24507;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24500);
if(temp__4657__auto__){
var seq__24500__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24500__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24500__$1);
var G__24508 = cljs.core.chunk_rest.call(null,seq__24500__$1);
var G__24509 = c__4319__auto__;
var G__24510 = cljs.core.count.call(null,c__4319__auto__);
var G__24511 = (0);
seq__24500 = G__24508;
chunk__24501 = G__24509;
count__24502 = G__24510;
i__24503 = G__24511;
continue;
} else {
var event = cljs.core.first.call(null,seq__24500__$1);
re_frame.router.dispatch.call(null,event);


var G__24512 = cljs.core.next.call(null,seq__24500__$1);
var G__24513 = null;
var G__24514 = (0);
var G__24515 = (0);
seq__24500 = G__24512;
chunk__24501 = G__24513;
count__24502 = G__24514;
i__24503 = G__24515;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__24516 = cljs.core.seq.call(null,value);
var chunk__24517 = null;
var count__24518 = (0);
var i__24519 = (0);
while(true){
if((i__24519 < count__24518)){
var event = cljs.core._nth.call(null,chunk__24517,i__24519);
clear_event.call(null,event);


var G__24520 = seq__24516;
var G__24521 = chunk__24517;
var G__24522 = count__24518;
var G__24523 = (i__24519 + (1));
seq__24516 = G__24520;
chunk__24517 = G__24521;
count__24518 = G__24522;
i__24519 = G__24523;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24516);
if(temp__4657__auto__){
var seq__24516__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24516__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__24516__$1);
var G__24524 = cljs.core.chunk_rest.call(null,seq__24516__$1);
var G__24525 = c__4319__auto__;
var G__24526 = cljs.core.count.call(null,c__4319__auto__);
var G__24527 = (0);
seq__24516 = G__24524;
chunk__24517 = G__24525;
count__24518 = G__24526;
i__24519 = G__24527;
continue;
} else {
var event = cljs.core.first.call(null,seq__24516__$1);
clear_event.call(null,event);


var G__24528 = cljs.core.next.call(null,seq__24516__$1);
var G__24529 = null;
var G__24530 = (0);
var G__24531 = (0);
seq__24516 = G__24528;
chunk__24517 = G__24529;
count__24518 = G__24530;
i__24519 = G__24531;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1544505234720
