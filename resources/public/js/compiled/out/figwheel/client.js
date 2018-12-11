// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e32810){if((e32810 instanceof Error)){
var e = e32810;
return "Error: Unable to stringify";
} else {
throw e32810;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__32813 = arguments.length;
switch (G__32813) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__32811_SHARP_){
if(typeof p1__32811_SHARP_ === 'string'){
return p1__32811_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__32811_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32816 = arguments.length;
var i__4500__auto___32817 = (0);
while(true){
if((i__4500__auto___32817 < len__4499__auto___32816)){
args__4502__auto__.push((arguments[i__4500__auto___32817]));

var G__32818 = (i__4500__auto___32817 + (1));
i__4500__auto___32817 = G__32818;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32815){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32815));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___32820 = arguments.length;
var i__4500__auto___32821 = (0);
while(true){
if((i__4500__auto___32821 < len__4499__auto___32820)){
args__4502__auto__.push((arguments[i__4500__auto___32821]));

var G__32822 = (i__4500__auto___32821 + (1));
i__4500__auto___32821 = G__32822;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32819){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32819));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32823){
var map__32824 = p__32823;
var map__32824__$1 = ((((!((map__32824 == null)))?(((((map__32824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32824):map__32824);
var message = cljs.core.get.call(null,map__32824__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32824__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28966__auto___32903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___32903,ch){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___32903,ch){
return (function (state_32875){
var state_val_32876 = (state_32875[(1)]);
if((state_val_32876 === (7))){
var inst_32871 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32877_32904 = state_32875__$1;
(statearr_32877_32904[(2)] = inst_32871);

(statearr_32877_32904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (1))){
var state_32875__$1 = state_32875;
var statearr_32878_32905 = state_32875__$1;
(statearr_32878_32905[(2)] = null);

(statearr_32878_32905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (4))){
var inst_32828 = (state_32875[(7)]);
var inst_32828__$1 = (state_32875[(2)]);
var state_32875__$1 = (function (){var statearr_32879 = state_32875;
(statearr_32879[(7)] = inst_32828__$1);

return statearr_32879;
})();
if(cljs.core.truth_(inst_32828__$1)){
var statearr_32880_32906 = state_32875__$1;
(statearr_32880_32906[(1)] = (5));

} else {
var statearr_32881_32907 = state_32875__$1;
(statearr_32881_32907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (15))){
var inst_32835 = (state_32875[(8)]);
var inst_32850 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32835);
var inst_32851 = cljs.core.first.call(null,inst_32850);
var inst_32852 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32851);
var inst_32853 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32852)].join('');
var inst_32854 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32853);
var state_32875__$1 = state_32875;
var statearr_32882_32908 = state_32875__$1;
(statearr_32882_32908[(2)] = inst_32854);

(statearr_32882_32908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (13))){
var inst_32859 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32883_32909 = state_32875__$1;
(statearr_32883_32909[(2)] = inst_32859);

(statearr_32883_32909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (6))){
var state_32875__$1 = state_32875;
var statearr_32884_32910 = state_32875__$1;
(statearr_32884_32910[(2)] = null);

(statearr_32884_32910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (17))){
var inst_32857 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32885_32911 = state_32875__$1;
(statearr_32885_32911[(2)] = inst_32857);

(statearr_32885_32911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (3))){
var inst_32873 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32875__$1,inst_32873);
} else {
if((state_val_32876 === (12))){
var inst_32834 = (state_32875[(9)]);
var inst_32848 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32834,opts);
var state_32875__$1 = state_32875;
if(cljs.core.truth_(inst_32848)){
var statearr_32886_32912 = state_32875__$1;
(statearr_32886_32912[(1)] = (15));

} else {
var statearr_32887_32913 = state_32875__$1;
(statearr_32887_32913[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (2))){
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32875__$1,(4),ch);
} else {
if((state_val_32876 === (11))){
var inst_32835 = (state_32875[(8)]);
var inst_32840 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32841 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32835);
var inst_32842 = cljs.core.async.timeout.call(null,(1000));
var inst_32843 = [inst_32841,inst_32842];
var inst_32844 = (new cljs.core.PersistentVector(null,2,(5),inst_32840,inst_32843,null));
var state_32875__$1 = state_32875;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32875__$1,(14),inst_32844);
} else {
if((state_val_32876 === (9))){
var inst_32835 = (state_32875[(8)]);
var inst_32861 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32862 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32835);
var inst_32863 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32862);
var inst_32864 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32863)].join('');
var inst_32865 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32864);
var state_32875__$1 = (function (){var statearr_32888 = state_32875;
(statearr_32888[(10)] = inst_32861);

return statearr_32888;
})();
var statearr_32889_32914 = state_32875__$1;
(statearr_32889_32914[(2)] = inst_32865);

(statearr_32889_32914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (5))){
var inst_32828 = (state_32875[(7)]);
var inst_32830 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32831 = (new cljs.core.PersistentArrayMap(null,2,inst_32830,null));
var inst_32832 = (new cljs.core.PersistentHashSet(null,inst_32831,null));
var inst_32833 = figwheel.client.focus_msgs.call(null,inst_32832,inst_32828);
var inst_32834 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32833);
var inst_32835 = cljs.core.first.call(null,inst_32833);
var inst_32836 = figwheel.client.autoload_QMARK_.call(null);
var state_32875__$1 = (function (){var statearr_32890 = state_32875;
(statearr_32890[(8)] = inst_32835);

(statearr_32890[(9)] = inst_32834);

return statearr_32890;
})();
if(cljs.core.truth_(inst_32836)){
var statearr_32891_32915 = state_32875__$1;
(statearr_32891_32915[(1)] = (8));

} else {
var statearr_32892_32916 = state_32875__$1;
(statearr_32892_32916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (14))){
var inst_32846 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32893_32917 = state_32875__$1;
(statearr_32893_32917[(2)] = inst_32846);

(statearr_32893_32917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (16))){
var state_32875__$1 = state_32875;
var statearr_32894_32918 = state_32875__$1;
(statearr_32894_32918[(2)] = null);

(statearr_32894_32918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (10))){
var inst_32867 = (state_32875[(2)]);
var state_32875__$1 = (function (){var statearr_32895 = state_32875;
(statearr_32895[(11)] = inst_32867);

return statearr_32895;
})();
var statearr_32896_32919 = state_32875__$1;
(statearr_32896_32919[(2)] = null);

(statearr_32896_32919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (8))){
var inst_32834 = (state_32875[(9)]);
var inst_32838 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32834,opts);
var state_32875__$1 = state_32875;
if(cljs.core.truth_(inst_32838)){
var statearr_32897_32920 = state_32875__$1;
(statearr_32897_32920[(1)] = (11));

} else {
var statearr_32898_32921 = state_32875__$1;
(statearr_32898_32921[(1)] = (12));

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
});})(c__28966__auto___32903,ch))
;
return ((function (switch__28878__auto__,c__28966__auto___32903,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28879__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28879__auto____0 = (function (){
var statearr_32899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32899[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28879__auto__);

(statearr_32899[(1)] = (1));

return statearr_32899;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28879__auto____1 = (function (state_32875){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_32875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e32900){if((e32900 instanceof Object)){
var ex__28882__auto__ = e32900;
var statearr_32901_32922 = state_32875;
(statearr_32901_32922[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32923 = state_32875;
state_32875 = G__32923;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28879__auto__ = function(state_32875){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28879__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28879__auto____1.call(this,state_32875);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28879__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28879__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___32903,ch))
})();
var state__28968__auto__ = (function (){var statearr_32902 = f__28967__auto__.call(null);
(statearr_32902[(6)] = c__28966__auto___32903);

return statearr_32902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___32903,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32924_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32924_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32928 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32928){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_32926 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32927 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_32926,_STAR_print_fn_STAR_32927,sb,base_path_32928){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_32926,_STAR_print_fn_STAR_32927,sb,base_path_32928))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32927;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32926;
}}catch (e32925){if((e32925 instanceof Error)){
var e = e32925;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32928], null));
} else {
var e = e32925;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32928))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32929){
var map__32930 = p__32929;
var map__32930__$1 = ((((!((map__32930 == null)))?(((((map__32930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32930):map__32930);
var opts = map__32930__$1;
var build_id = cljs.core.get.call(null,map__32930__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32930,map__32930__$1,opts,build_id){
return (function (p__32932){
var vec__32933 = p__32932;
var seq__32934 = cljs.core.seq.call(null,vec__32933);
var first__32935 = cljs.core.first.call(null,seq__32934);
var seq__32934__$1 = cljs.core.next.call(null,seq__32934);
var map__32936 = first__32935;
var map__32936__$1 = ((((!((map__32936 == null)))?(((((map__32936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32936):map__32936);
var msg = map__32936__$1;
var msg_name = cljs.core.get.call(null,map__32936__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32934__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32933,seq__32934,first__32935,seq__32934__$1,map__32936,map__32936__$1,msg,msg_name,_,map__32930,map__32930__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32933,seq__32934,first__32935,seq__32934__$1,map__32936,map__32936__$1,msg,msg_name,_,map__32930,map__32930__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32930,map__32930__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32938){
var vec__32939 = p__32938;
var seq__32940 = cljs.core.seq.call(null,vec__32939);
var first__32941 = cljs.core.first.call(null,seq__32940);
var seq__32940__$1 = cljs.core.next.call(null,seq__32940);
var map__32942 = first__32941;
var map__32942__$1 = ((((!((map__32942 == null)))?(((((map__32942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32942):map__32942);
var msg = map__32942__$1;
var msg_name = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32940__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32944){
var map__32945 = p__32944;
var map__32945__$1 = ((((!((map__32945 == null)))?(((((map__32945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32945):map__32945);
var on_compile_warning = cljs.core.get.call(null,map__32945__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32945__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32945,map__32945__$1,on_compile_warning,on_compile_fail){
return (function (p__32947){
var vec__32948 = p__32947;
var seq__32949 = cljs.core.seq.call(null,vec__32948);
var first__32950 = cljs.core.first.call(null,seq__32949);
var seq__32949__$1 = cljs.core.next.call(null,seq__32949);
var map__32951 = first__32950;
var map__32951__$1 = ((((!((map__32951 == null)))?(((((map__32951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32951):map__32951);
var msg = map__32951__$1;
var msg_name = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32949__$1;
var pred__32953 = cljs.core._EQ_;
var expr__32954 = msg_name;
if(cljs.core.truth_(pred__32953.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32954))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32953.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32954))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32945,map__32945__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__,msg_hist,msg_names,msg){
return (function (state_33043){
var state_val_33044 = (state_33043[(1)]);
if((state_val_33044 === (7))){
var inst_32963 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_32963)){
var statearr_33045_33092 = state_33043__$1;
(statearr_33045_33092[(1)] = (8));

} else {
var statearr_33046_33093 = state_33043__$1;
(statearr_33046_33093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (20))){
var inst_33037 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33047_33094 = state_33043__$1;
(statearr_33047_33094[(2)] = inst_33037);

(statearr_33047_33094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (27))){
var inst_33033 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33048_33095 = state_33043__$1;
(statearr_33048_33095[(2)] = inst_33033);

(statearr_33048_33095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (1))){
var inst_32956 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_32956)){
var statearr_33049_33096 = state_33043__$1;
(statearr_33049_33096[(1)] = (2));

} else {
var statearr_33050_33097 = state_33043__$1;
(statearr_33050_33097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (24))){
var inst_33035 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33051_33098 = state_33043__$1;
(statearr_33051_33098[(2)] = inst_33035);

(statearr_33051_33098[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (4))){
var inst_33041 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33043__$1,inst_33041);
} else {
if((state_val_33044 === (15))){
var inst_33039 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33052_33099 = state_33043__$1;
(statearr_33052_33099[(2)] = inst_33039);

(statearr_33052_33099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (21))){
var inst_32992 = (state_33043[(2)]);
var inst_32993 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32994 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32993);
var state_33043__$1 = (function (){var statearr_33053 = state_33043;
(statearr_33053[(7)] = inst_32992);

return statearr_33053;
})();
var statearr_33054_33100 = state_33043__$1;
(statearr_33054_33100[(2)] = inst_32994);

(statearr_33054_33100[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (31))){
var inst_33022 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_33022)){
var statearr_33055_33101 = state_33043__$1;
(statearr_33055_33101[(1)] = (34));

} else {
var statearr_33056_33102 = state_33043__$1;
(statearr_33056_33102[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (32))){
var inst_33031 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33057_33103 = state_33043__$1;
(statearr_33057_33103[(2)] = inst_33031);

(statearr_33057_33103[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (33))){
var inst_33018 = (state_33043[(2)]);
var inst_33019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33020 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33019);
var state_33043__$1 = (function (){var statearr_33058 = state_33043;
(statearr_33058[(8)] = inst_33018);

return statearr_33058;
})();
var statearr_33059_33104 = state_33043__$1;
(statearr_33059_33104[(2)] = inst_33020);

(statearr_33059_33104[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (13))){
var inst_32977 = figwheel.client.heads_up.clear.call(null);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(16),inst_32977);
} else {
if((state_val_33044 === (22))){
var inst_32998 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32999 = figwheel.client.heads_up.append_warning_message.call(null,inst_32998);
var state_33043__$1 = state_33043;
var statearr_33060_33105 = state_33043__$1;
(statearr_33060_33105[(2)] = inst_32999);

(statearr_33060_33105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (36))){
var inst_33029 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33061_33106 = state_33043__$1;
(statearr_33061_33106[(2)] = inst_33029);

(statearr_33061_33106[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (29))){
var inst_33009 = (state_33043[(2)]);
var inst_33010 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33011 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33010);
var state_33043__$1 = (function (){var statearr_33062 = state_33043;
(statearr_33062[(9)] = inst_33009);

return statearr_33062;
})();
var statearr_33063_33107 = state_33043__$1;
(statearr_33063_33107[(2)] = inst_33011);

(statearr_33063_33107[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (6))){
var inst_32958 = (state_33043[(10)]);
var state_33043__$1 = state_33043;
var statearr_33064_33108 = state_33043__$1;
(statearr_33064_33108[(2)] = inst_32958);

(statearr_33064_33108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (28))){
var inst_33005 = (state_33043[(2)]);
var inst_33006 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33007 = figwheel.client.heads_up.display_warning.call(null,inst_33006);
var state_33043__$1 = (function (){var statearr_33065 = state_33043;
(statearr_33065[(11)] = inst_33005);

return statearr_33065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(29),inst_33007);
} else {
if((state_val_33044 === (25))){
var inst_33003 = figwheel.client.heads_up.clear.call(null);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(28),inst_33003);
} else {
if((state_val_33044 === (34))){
var inst_33024 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(37),inst_33024);
} else {
if((state_val_33044 === (17))){
var inst_32983 = (state_33043[(2)]);
var inst_32984 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32985 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32984);
var state_33043__$1 = (function (){var statearr_33066 = state_33043;
(statearr_33066[(12)] = inst_32983);

return statearr_33066;
})();
var statearr_33067_33109 = state_33043__$1;
(statearr_33067_33109[(2)] = inst_32985);

(statearr_33067_33109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (3))){
var inst_32975 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_32975)){
var statearr_33068_33110 = state_33043__$1;
(statearr_33068_33110[(1)] = (13));

} else {
var statearr_33069_33111 = state_33043__$1;
(statearr_33069_33111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (12))){
var inst_32971 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33070_33112 = state_33043__$1;
(statearr_33070_33112[(2)] = inst_32971);

(statearr_33070_33112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (2))){
var inst_32958 = (state_33043[(10)]);
var inst_32958__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33043__$1 = (function (){var statearr_33071 = state_33043;
(statearr_33071[(10)] = inst_32958__$1);

return statearr_33071;
})();
if(cljs.core.truth_(inst_32958__$1)){
var statearr_33072_33113 = state_33043__$1;
(statearr_33072_33113[(1)] = (5));

} else {
var statearr_33073_33114 = state_33043__$1;
(statearr_33073_33114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (23))){
var inst_33001 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_33001)){
var statearr_33074_33115 = state_33043__$1;
(statearr_33074_33115[(1)] = (25));

} else {
var statearr_33075_33116 = state_33043__$1;
(statearr_33075_33116[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (35))){
var state_33043__$1 = state_33043;
var statearr_33076_33117 = state_33043__$1;
(statearr_33076_33117[(2)] = null);

(statearr_33076_33117[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (19))){
var inst_32996 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_32996)){
var statearr_33077_33118 = state_33043__$1;
(statearr_33077_33118[(1)] = (22));

} else {
var statearr_33078_33119 = state_33043__$1;
(statearr_33078_33119[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (11))){
var inst_32967 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33079_33120 = state_33043__$1;
(statearr_33079_33120[(2)] = inst_32967);

(statearr_33079_33120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (9))){
var inst_32969 = figwheel.client.heads_up.clear.call(null);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(12),inst_32969);
} else {
if((state_val_33044 === (5))){
var inst_32960 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33043__$1 = state_33043;
var statearr_33080_33121 = state_33043__$1;
(statearr_33080_33121[(2)] = inst_32960);

(statearr_33080_33121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (14))){
var inst_32987 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_32987)){
var statearr_33081_33122 = state_33043__$1;
(statearr_33081_33122[(1)] = (18));

} else {
var statearr_33082_33123 = state_33043__$1;
(statearr_33082_33123[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (26))){
var inst_33013 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33043__$1 = state_33043;
if(cljs.core.truth_(inst_33013)){
var statearr_33083_33124 = state_33043__$1;
(statearr_33083_33124[(1)] = (30));

} else {
var statearr_33084_33125 = state_33043__$1;
(statearr_33084_33125[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (16))){
var inst_32979 = (state_33043[(2)]);
var inst_32980 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32981 = figwheel.client.heads_up.display_exception.call(null,inst_32980);
var state_33043__$1 = (function (){var statearr_33085 = state_33043;
(statearr_33085[(13)] = inst_32979);

return statearr_33085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(17),inst_32981);
} else {
if((state_val_33044 === (30))){
var inst_33015 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33016 = figwheel.client.heads_up.display_warning.call(null,inst_33015);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(33),inst_33016);
} else {
if((state_val_33044 === (10))){
var inst_32973 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33086_33126 = state_33043__$1;
(statearr_33086_33126[(2)] = inst_32973);

(statearr_33086_33126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (18))){
var inst_32989 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32990 = figwheel.client.heads_up.display_exception.call(null,inst_32989);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(21),inst_32990);
} else {
if((state_val_33044 === (37))){
var inst_33026 = (state_33043[(2)]);
var state_33043__$1 = state_33043;
var statearr_33087_33127 = state_33043__$1;
(statearr_33087_33127[(2)] = inst_33026);

(statearr_33087_33127[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33044 === (8))){
var inst_32965 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33043__$1 = state_33043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33043__$1,(11),inst_32965);
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
});})(c__28966__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28878__auto__,c__28966__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto____0 = (function (){
var statearr_33088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33088[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto__);

(statearr_33088[(1)] = (1));

return statearr_33088;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto____1 = (function (state_33043){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_33043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e33089){if((e33089 instanceof Object)){
var ex__28882__auto__ = e33089;
var statearr_33090_33128 = state_33043;
(statearr_33090_33128[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33129 = state_33043;
state_33043 = G__33129;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto__ = function(state_33043){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto____1.call(this,state_33043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__,msg_hist,msg_names,msg))
})();
var state__28968__auto__ = (function (){var statearr_33091 = f__28967__auto__.call(null);
(statearr_33091[(6)] = c__28966__auto__);

return statearr_33091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__,msg_hist,msg_names,msg))
);

return c__28966__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28966__auto___33158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___33158,ch){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___33158,ch){
return (function (state_33144){
var state_val_33145 = (state_33144[(1)]);
if((state_val_33145 === (1))){
var state_33144__$1 = state_33144;
var statearr_33146_33159 = state_33144__$1;
(statearr_33146_33159[(2)] = null);

(statearr_33146_33159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (2))){
var state_33144__$1 = state_33144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33144__$1,(4),ch);
} else {
if((state_val_33145 === (3))){
var inst_33142 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33144__$1,inst_33142);
} else {
if((state_val_33145 === (4))){
var inst_33132 = (state_33144[(7)]);
var inst_33132__$1 = (state_33144[(2)]);
var state_33144__$1 = (function (){var statearr_33147 = state_33144;
(statearr_33147[(7)] = inst_33132__$1);

return statearr_33147;
})();
if(cljs.core.truth_(inst_33132__$1)){
var statearr_33148_33160 = state_33144__$1;
(statearr_33148_33160[(1)] = (5));

} else {
var statearr_33149_33161 = state_33144__$1;
(statearr_33149_33161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (5))){
var inst_33132 = (state_33144[(7)]);
var inst_33134 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33132);
var state_33144__$1 = state_33144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33144__$1,(8),inst_33134);
} else {
if((state_val_33145 === (6))){
var state_33144__$1 = state_33144;
var statearr_33150_33162 = state_33144__$1;
(statearr_33150_33162[(2)] = null);

(statearr_33150_33162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (7))){
var inst_33140 = (state_33144[(2)]);
var state_33144__$1 = state_33144;
var statearr_33151_33163 = state_33144__$1;
(statearr_33151_33163[(2)] = inst_33140);

(statearr_33151_33163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33145 === (8))){
var inst_33136 = (state_33144[(2)]);
var state_33144__$1 = (function (){var statearr_33152 = state_33144;
(statearr_33152[(8)] = inst_33136);

return statearr_33152;
})();
var statearr_33153_33164 = state_33144__$1;
(statearr_33153_33164[(2)] = null);

(statearr_33153_33164[(1)] = (2));


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
});})(c__28966__auto___33158,ch))
;
return ((function (switch__28878__auto__,c__28966__auto___33158,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28879__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28879__auto____0 = (function (){
var statearr_33154 = [null,null,null,null,null,null,null,null,null];
(statearr_33154[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28879__auto__);

(statearr_33154[(1)] = (1));

return statearr_33154;
});
var figwheel$client$heads_up_plugin_$_state_machine__28879__auto____1 = (function (state_33144){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_33144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e33155){if((e33155 instanceof Object)){
var ex__28882__auto__ = e33155;
var statearr_33156_33165 = state_33144;
(statearr_33156_33165[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_33144;
state_33144 = G__33166;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28879__auto__ = function(state_33144){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28879__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28879__auto____1.call(this,state_33144);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28879__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28879__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___33158,ch))
})();
var state__28968__auto__ = (function (){var statearr_33157 = f__28967__auto__.call(null);
(statearr_33157[(6)] = c__28966__auto___33158);

return statearr_33157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___33158,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__){
return (function (state_33172){
var state_val_33173 = (state_33172[(1)]);
if((state_val_33173 === (1))){
var inst_33167 = cljs.core.async.timeout.call(null,(3000));
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33172__$1,(2),inst_33167);
} else {
if((state_val_33173 === (2))){
var inst_33169 = (state_33172[(2)]);
var inst_33170 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33172__$1 = (function (){var statearr_33174 = state_33172;
(statearr_33174[(7)] = inst_33169);

return statearr_33174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33172__$1,inst_33170);
} else {
return null;
}
}
});})(c__28966__auto__))
;
return ((function (switch__28878__auto__,c__28966__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28879__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28879__auto____0 = (function (){
var statearr_33175 = [null,null,null,null,null,null,null,null];
(statearr_33175[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28879__auto__);

(statearr_33175[(1)] = (1));

return statearr_33175;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28879__auto____1 = (function (state_33172){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_33172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e33176){if((e33176 instanceof Object)){
var ex__28882__auto__ = e33176;
var statearr_33177_33179 = state_33172;
(statearr_33177_33179[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33180 = state_33172;
state_33172 = G__33180;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28879__auto__ = function(state_33172){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28879__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28879__auto____1.call(this,state_33172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28879__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28879__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__))
})();
var state__28968__auto__ = (function (){var statearr_33178 = f__28967__auto__.call(null);
(statearr_33178[(6)] = c__28966__auto__);

return statearr_33178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__))
);

return c__28966__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__,figwheel_version,temp__4657__auto__){
return (function (state_33187){
var state_val_33188 = (state_33187[(1)]);
if((state_val_33188 === (1))){
var inst_33181 = cljs.core.async.timeout.call(null,(2000));
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33187__$1,(2),inst_33181);
} else {
if((state_val_33188 === (2))){
var inst_33183 = (state_33187[(2)]);
var inst_33184 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_33185 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33184);
var state_33187__$1 = (function (){var statearr_33189 = state_33187;
(statearr_33189[(7)] = inst_33183);

return statearr_33189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33187__$1,inst_33185);
} else {
return null;
}
}
});})(c__28966__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28878__auto__,c__28966__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto____0 = (function (){
var statearr_33190 = [null,null,null,null,null,null,null,null];
(statearr_33190[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto__);

(statearr_33190[(1)] = (1));

return statearr_33190;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto____1 = (function (state_33187){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_33187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e33191){if((e33191 instanceof Object)){
var ex__28882__auto__ = e33191;
var statearr_33192_33194 = state_33187;
(statearr_33192_33194[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33195 = state_33187;
state_33187 = G__33195;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto__ = function(state_33187){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto____1.call(this,state_33187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28968__auto__ = (function (){var statearr_33193 = f__28967__auto__.call(null);
(statearr_33193[(6)] = c__28966__auto__);

return statearr_33193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__,figwheel_version,temp__4657__auto__))
);

return c__28966__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33196){
var map__33197 = p__33196;
var map__33197__$1 = ((((!((map__33197 == null)))?(((((map__33197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33197):map__33197);
var file = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33199 = "";
var G__33199__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33199),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__33199);
var G__33199__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33199__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__33199__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33199__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__33199__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33200){
var map__33201 = p__33200;
var map__33201__$1 = ((((!((map__33201 == null)))?(((((map__33201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33201):map__33201);
var ed = map__33201__$1;
var formatted_exception = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33201__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33203_33207 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33204_33208 = null;
var count__33205_33209 = (0);
var i__33206_33210 = (0);
while(true){
if((i__33206_33210 < count__33205_33209)){
var msg_33211 = cljs.core._nth.call(null,chunk__33204_33208,i__33206_33210);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33211);


var G__33212 = seq__33203_33207;
var G__33213 = chunk__33204_33208;
var G__33214 = count__33205_33209;
var G__33215 = (i__33206_33210 + (1));
seq__33203_33207 = G__33212;
chunk__33204_33208 = G__33213;
count__33205_33209 = G__33214;
i__33206_33210 = G__33215;
continue;
} else {
var temp__4657__auto___33216 = cljs.core.seq.call(null,seq__33203_33207);
if(temp__4657__auto___33216){
var seq__33203_33217__$1 = temp__4657__auto___33216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33203_33217__$1)){
var c__4319__auto___33218 = cljs.core.chunk_first.call(null,seq__33203_33217__$1);
var G__33219 = cljs.core.chunk_rest.call(null,seq__33203_33217__$1);
var G__33220 = c__4319__auto___33218;
var G__33221 = cljs.core.count.call(null,c__4319__auto___33218);
var G__33222 = (0);
seq__33203_33207 = G__33219;
chunk__33204_33208 = G__33220;
count__33205_33209 = G__33221;
i__33206_33210 = G__33222;
continue;
} else {
var msg_33223 = cljs.core.first.call(null,seq__33203_33217__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33223);


var G__33224 = cljs.core.next.call(null,seq__33203_33217__$1);
var G__33225 = null;
var G__33226 = (0);
var G__33227 = (0);
seq__33203_33207 = G__33224;
chunk__33204_33208 = G__33225;
count__33205_33209 = G__33226;
i__33206_33210 = G__33227;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33228){
var map__33229 = p__33228;
var map__33229__$1 = ((((!((map__33229 == null)))?(((((map__33229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33229):map__33229);
var w = map__33229__$1;
var message = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33231 = cljs.core.seq.call(null,plugins);
var chunk__33232 = null;
var count__33233 = (0);
var i__33234 = (0);
while(true){
if((i__33234 < count__33233)){
var vec__33235 = cljs.core._nth.call(null,chunk__33232,i__33234);
var k = cljs.core.nth.call(null,vec__33235,(0),null);
var plugin = cljs.core.nth.call(null,vec__33235,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33241 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33231,chunk__33232,count__33233,i__33234,pl_33241,vec__33235,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33241.call(null,msg_hist);
});})(seq__33231,chunk__33232,count__33233,i__33234,pl_33241,vec__33235,k,plugin))
);
} else {
}


var G__33242 = seq__33231;
var G__33243 = chunk__33232;
var G__33244 = count__33233;
var G__33245 = (i__33234 + (1));
seq__33231 = G__33242;
chunk__33232 = G__33243;
count__33233 = G__33244;
i__33234 = G__33245;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33231);
if(temp__4657__auto__){
var seq__33231__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33231__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33231__$1);
var G__33246 = cljs.core.chunk_rest.call(null,seq__33231__$1);
var G__33247 = c__4319__auto__;
var G__33248 = cljs.core.count.call(null,c__4319__auto__);
var G__33249 = (0);
seq__33231 = G__33246;
chunk__33232 = G__33247;
count__33233 = G__33248;
i__33234 = G__33249;
continue;
} else {
var vec__33238 = cljs.core.first.call(null,seq__33231__$1);
var k = cljs.core.nth.call(null,vec__33238,(0),null);
var plugin = cljs.core.nth.call(null,vec__33238,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33250 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33231,chunk__33232,count__33233,i__33234,pl_33250,vec__33238,k,plugin,seq__33231__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33250.call(null,msg_hist);
});})(seq__33231,chunk__33232,count__33233,i__33234,pl_33250,vec__33238,k,plugin,seq__33231__$1,temp__4657__auto__))
);
} else {
}


var G__33251 = cljs.core.next.call(null,seq__33231__$1);
var G__33252 = null;
var G__33253 = (0);
var G__33254 = (0);
seq__33231 = G__33251;
chunk__33232 = G__33252;
count__33233 = G__33253;
i__33234 = G__33254;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__33256 = arguments.length;
switch (G__33256) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33257_33262 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33258_33263 = null;
var count__33259_33264 = (0);
var i__33260_33265 = (0);
while(true){
if((i__33260_33265 < count__33259_33264)){
var msg_33266 = cljs.core._nth.call(null,chunk__33258_33263,i__33260_33265);
figwheel.client.socket.handle_incoming_message.call(null,msg_33266);


var G__33267 = seq__33257_33262;
var G__33268 = chunk__33258_33263;
var G__33269 = count__33259_33264;
var G__33270 = (i__33260_33265 + (1));
seq__33257_33262 = G__33267;
chunk__33258_33263 = G__33268;
count__33259_33264 = G__33269;
i__33260_33265 = G__33270;
continue;
} else {
var temp__4657__auto___33271 = cljs.core.seq.call(null,seq__33257_33262);
if(temp__4657__auto___33271){
var seq__33257_33272__$1 = temp__4657__auto___33271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33257_33272__$1)){
var c__4319__auto___33273 = cljs.core.chunk_first.call(null,seq__33257_33272__$1);
var G__33274 = cljs.core.chunk_rest.call(null,seq__33257_33272__$1);
var G__33275 = c__4319__auto___33273;
var G__33276 = cljs.core.count.call(null,c__4319__auto___33273);
var G__33277 = (0);
seq__33257_33262 = G__33274;
chunk__33258_33263 = G__33275;
count__33259_33264 = G__33276;
i__33260_33265 = G__33277;
continue;
} else {
var msg_33278 = cljs.core.first.call(null,seq__33257_33272__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33278);


var G__33279 = cljs.core.next.call(null,seq__33257_33272__$1);
var G__33280 = null;
var G__33281 = (0);
var G__33282 = (0);
seq__33257_33262 = G__33279;
chunk__33258_33263 = G__33280;
count__33259_33264 = G__33281;
i__33260_33265 = G__33282;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33287 = arguments.length;
var i__4500__auto___33288 = (0);
while(true){
if((i__4500__auto___33288 < len__4499__auto___33287)){
args__4502__auto__.push((arguments[i__4500__auto___33288]));

var G__33289 = (i__4500__auto___33288 + (1));
i__4500__auto___33288 = G__33289;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33284){
var map__33285 = p__33284;
var map__33285__$1 = ((((!((map__33285 == null)))?(((((map__33285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33285):map__33285);
var opts = map__33285__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33283){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33283));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33290){if((e33290 instanceof Error)){
var e = e33290;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33290;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33291){
var map__33292 = p__33291;
var map__33292__$1 = ((((!((map__33292 == null)))?(((((map__33292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33292):map__33292);
var msg_name = cljs.core.get.call(null,map__33292__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1544505254685
