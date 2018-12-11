// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__23039__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23040__i = 0, G__23040__a = new Array(arguments.length -  0);
while (G__23040__i < G__23040__a.length) {G__23040__a[G__23040__i] = arguments[G__23040__i + 0]; ++G__23040__i;}
  args = new cljs.core.IndexedSeq(G__23040__a,0,null);
} 
return G__23039__delegate.call(this,args);};
G__23039.cljs$lang$maxFixedArity = 0;
G__23039.cljs$lang$applyTo = (function (arglist__23041){
var args = cljs.core.seq(arglist__23041);
return G__23039__delegate(args);
});
G__23039.cljs$core$IFn$_invoke$arity$variadic = G__23039__delegate;
return G__23039;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23042__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23043__i = 0, G__23043__a = new Array(arguments.length -  0);
while (G__23043__i < G__23043__a.length) {G__23043__a[G__23043__i] = arguments[G__23043__i + 0]; ++G__23043__i;}
  args = new cljs.core.IndexedSeq(G__23043__a,0,null);
} 
return G__23042__delegate.call(this,args);};
G__23042.cljs$lang$maxFixedArity = 0;
G__23042.cljs$lang$applyTo = (function (arglist__23044){
var args = cljs.core.seq(arglist__23044);
return G__23042__delegate(args);
});
G__23042.cljs$core$IFn$_invoke$arity$variadic = G__23042__delegate;
return G__23042;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1544505229412
