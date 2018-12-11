// Compiled by ClojureScript 1.10.238 {}
goog.provide('full_stack.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('full_stack.events');
goog.require('full_stack.views');
goog.require('full_stack.config');
full_stack.core.dev_setup = (function full_stack$core$dev_setup(){
if(full_stack.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
full_stack.core.mount_root = (function full_stack$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_stack.views.main_panel], null),document.getElementById("app"));
});
full_stack.core.init = (function full_stack$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("full-stack.events","initialize-db","full-stack.events/initialize-db",-109440237)], null));

full_stack.core.dev_setup.call(null);

return full_stack.core.mount_root.call(null);
});
goog.exportSymbol('full_stack.core.init', full_stack.core.init);

//# sourceMappingURL=core.js.map?rel=1544518833867
