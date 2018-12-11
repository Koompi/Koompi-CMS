// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31059_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31059_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31060 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31061 = null;
var count__31062 = (0);
var i__31063 = (0);
while(true){
if((i__31063 < count__31062)){
var n = cljs.core._nth.call(null,chunk__31061,i__31063);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31064 = seq__31060;
var G__31065 = chunk__31061;
var G__31066 = count__31062;
var G__31067 = (i__31063 + (1));
seq__31060 = G__31064;
chunk__31061 = G__31065;
count__31062 = G__31066;
i__31063 = G__31067;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31060);
if(temp__4657__auto__){
var seq__31060__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31060__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31060__$1);
var G__31068 = cljs.core.chunk_rest.call(null,seq__31060__$1);
var G__31069 = c__4319__auto__;
var G__31070 = cljs.core.count.call(null,c__4319__auto__);
var G__31071 = (0);
seq__31060 = G__31068;
chunk__31061 = G__31069;
count__31062 = G__31070;
i__31063 = G__31071;
continue;
} else {
var n = cljs.core.first.call(null,seq__31060__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31072 = cljs.core.next.call(null,seq__31060__$1);
var G__31073 = null;
var G__31074 = (0);
var G__31075 = (0);
seq__31060 = G__31072;
chunk__31061 = G__31073;
count__31062 = G__31074;
i__31063 = G__31075;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31076){
var vec__31077 = p__31076;
var _ = cljs.core.nth.call(null,vec__31077,(0),null);
var v = cljs.core.nth.call(null,vec__31077,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__31080){
var vec__31081 = p__31080;
var k = cljs.core.nth.call(null,vec__31081,(0),null);
var v = cljs.core.nth.call(null,vec__31081,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31093_31101 = cljs.core.seq.call(null,deps);
var chunk__31094_31102 = null;
var count__31095_31103 = (0);
var i__31096_31104 = (0);
while(true){
if((i__31096_31104 < count__31095_31103)){
var dep_31105 = cljs.core._nth.call(null,chunk__31094_31102,i__31096_31104);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_31105;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31105));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31105,(depth + (1)),state);
} else {
}


var G__31106 = seq__31093_31101;
var G__31107 = chunk__31094_31102;
var G__31108 = count__31095_31103;
var G__31109 = (i__31096_31104 + (1));
seq__31093_31101 = G__31106;
chunk__31094_31102 = G__31107;
count__31095_31103 = G__31108;
i__31096_31104 = G__31109;
continue;
} else {
var temp__4657__auto___31110 = cljs.core.seq.call(null,seq__31093_31101);
if(temp__4657__auto___31110){
var seq__31093_31111__$1 = temp__4657__auto___31110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31093_31111__$1)){
var c__4319__auto___31112 = cljs.core.chunk_first.call(null,seq__31093_31111__$1);
var G__31113 = cljs.core.chunk_rest.call(null,seq__31093_31111__$1);
var G__31114 = c__4319__auto___31112;
var G__31115 = cljs.core.count.call(null,c__4319__auto___31112);
var G__31116 = (0);
seq__31093_31101 = G__31113;
chunk__31094_31102 = G__31114;
count__31095_31103 = G__31115;
i__31096_31104 = G__31116;
continue;
} else {
var dep_31117 = cljs.core.first.call(null,seq__31093_31111__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_31117;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31117));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31117,(depth + (1)),state);
} else {
}


var G__31118 = cljs.core.next.call(null,seq__31093_31111__$1);
var G__31119 = null;
var G__31120 = (0);
var G__31121 = (0);
seq__31093_31101 = G__31118;
chunk__31094_31102 = G__31119;
count__31095_31103 = G__31120;
i__31096_31104 = G__31121;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31097){
var vec__31098 = p__31097;
var seq__31099 = cljs.core.seq.call(null,vec__31098);
var first__31100 = cljs.core.first.call(null,seq__31099);
var seq__31099__$1 = cljs.core.next.call(null,seq__31099);
var x = first__31100;
var xs = seq__31099__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31098,seq__31099,first__31100,seq__31099__$1,x,xs,get_deps__$1){
return (function (p1__31084_SHARP_){
return clojure.set.difference.call(null,p1__31084_SHARP_,x);
});})(vec__31098,seq__31099,first__31100,seq__31099__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31122 = cljs.core.seq.call(null,provides);
var chunk__31123 = null;
var count__31124 = (0);
var i__31125 = (0);
while(true){
if((i__31125 < count__31124)){
var prov = cljs.core._nth.call(null,chunk__31123,i__31125);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31126_31134 = cljs.core.seq.call(null,requires);
var chunk__31127_31135 = null;
var count__31128_31136 = (0);
var i__31129_31137 = (0);
while(true){
if((i__31129_31137 < count__31128_31136)){
var req_31138 = cljs.core._nth.call(null,chunk__31127_31135,i__31129_31137);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31138,prov);


var G__31139 = seq__31126_31134;
var G__31140 = chunk__31127_31135;
var G__31141 = count__31128_31136;
var G__31142 = (i__31129_31137 + (1));
seq__31126_31134 = G__31139;
chunk__31127_31135 = G__31140;
count__31128_31136 = G__31141;
i__31129_31137 = G__31142;
continue;
} else {
var temp__4657__auto___31143 = cljs.core.seq.call(null,seq__31126_31134);
if(temp__4657__auto___31143){
var seq__31126_31144__$1 = temp__4657__auto___31143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31126_31144__$1)){
var c__4319__auto___31145 = cljs.core.chunk_first.call(null,seq__31126_31144__$1);
var G__31146 = cljs.core.chunk_rest.call(null,seq__31126_31144__$1);
var G__31147 = c__4319__auto___31145;
var G__31148 = cljs.core.count.call(null,c__4319__auto___31145);
var G__31149 = (0);
seq__31126_31134 = G__31146;
chunk__31127_31135 = G__31147;
count__31128_31136 = G__31148;
i__31129_31137 = G__31149;
continue;
} else {
var req_31150 = cljs.core.first.call(null,seq__31126_31144__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31150,prov);


var G__31151 = cljs.core.next.call(null,seq__31126_31144__$1);
var G__31152 = null;
var G__31153 = (0);
var G__31154 = (0);
seq__31126_31134 = G__31151;
chunk__31127_31135 = G__31152;
count__31128_31136 = G__31153;
i__31129_31137 = G__31154;
continue;
}
} else {
}
}
break;
}


var G__31155 = seq__31122;
var G__31156 = chunk__31123;
var G__31157 = count__31124;
var G__31158 = (i__31125 + (1));
seq__31122 = G__31155;
chunk__31123 = G__31156;
count__31124 = G__31157;
i__31125 = G__31158;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31122);
if(temp__4657__auto__){
var seq__31122__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31122__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31122__$1);
var G__31159 = cljs.core.chunk_rest.call(null,seq__31122__$1);
var G__31160 = c__4319__auto__;
var G__31161 = cljs.core.count.call(null,c__4319__auto__);
var G__31162 = (0);
seq__31122 = G__31159;
chunk__31123 = G__31160;
count__31124 = G__31161;
i__31125 = G__31162;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31122__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31130_31163 = cljs.core.seq.call(null,requires);
var chunk__31131_31164 = null;
var count__31132_31165 = (0);
var i__31133_31166 = (0);
while(true){
if((i__31133_31166 < count__31132_31165)){
var req_31167 = cljs.core._nth.call(null,chunk__31131_31164,i__31133_31166);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31167,prov);


var G__31168 = seq__31130_31163;
var G__31169 = chunk__31131_31164;
var G__31170 = count__31132_31165;
var G__31171 = (i__31133_31166 + (1));
seq__31130_31163 = G__31168;
chunk__31131_31164 = G__31169;
count__31132_31165 = G__31170;
i__31133_31166 = G__31171;
continue;
} else {
var temp__4657__auto___31172__$1 = cljs.core.seq.call(null,seq__31130_31163);
if(temp__4657__auto___31172__$1){
var seq__31130_31173__$1 = temp__4657__auto___31172__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31130_31173__$1)){
var c__4319__auto___31174 = cljs.core.chunk_first.call(null,seq__31130_31173__$1);
var G__31175 = cljs.core.chunk_rest.call(null,seq__31130_31173__$1);
var G__31176 = c__4319__auto___31174;
var G__31177 = cljs.core.count.call(null,c__4319__auto___31174);
var G__31178 = (0);
seq__31130_31163 = G__31175;
chunk__31131_31164 = G__31176;
count__31132_31165 = G__31177;
i__31133_31166 = G__31178;
continue;
} else {
var req_31179 = cljs.core.first.call(null,seq__31130_31173__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31179,prov);


var G__31180 = cljs.core.next.call(null,seq__31130_31173__$1);
var G__31181 = null;
var G__31182 = (0);
var G__31183 = (0);
seq__31130_31163 = G__31180;
chunk__31131_31164 = G__31181;
count__31132_31165 = G__31182;
i__31133_31166 = G__31183;
continue;
}
} else {
}
}
break;
}


var G__31184 = cljs.core.next.call(null,seq__31122__$1);
var G__31185 = null;
var G__31186 = (0);
var G__31187 = (0);
seq__31122 = G__31184;
chunk__31123 = G__31185;
count__31124 = G__31186;
i__31125 = G__31187;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31188_31192 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31189_31193 = null;
var count__31190_31194 = (0);
var i__31191_31195 = (0);
while(true){
if((i__31191_31195 < count__31190_31194)){
var ns_31196 = cljs.core._nth.call(null,chunk__31189_31193,i__31191_31195);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31196);


var G__31197 = seq__31188_31192;
var G__31198 = chunk__31189_31193;
var G__31199 = count__31190_31194;
var G__31200 = (i__31191_31195 + (1));
seq__31188_31192 = G__31197;
chunk__31189_31193 = G__31198;
count__31190_31194 = G__31199;
i__31191_31195 = G__31200;
continue;
} else {
var temp__4657__auto___31201 = cljs.core.seq.call(null,seq__31188_31192);
if(temp__4657__auto___31201){
var seq__31188_31202__$1 = temp__4657__auto___31201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31188_31202__$1)){
var c__4319__auto___31203 = cljs.core.chunk_first.call(null,seq__31188_31202__$1);
var G__31204 = cljs.core.chunk_rest.call(null,seq__31188_31202__$1);
var G__31205 = c__4319__auto___31203;
var G__31206 = cljs.core.count.call(null,c__4319__auto___31203);
var G__31207 = (0);
seq__31188_31192 = G__31204;
chunk__31189_31193 = G__31205;
count__31190_31194 = G__31206;
i__31191_31195 = G__31207;
continue;
} else {
var ns_31208 = cljs.core.first.call(null,seq__31188_31202__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31208);


var G__31209 = cljs.core.next.call(null,seq__31188_31202__$1);
var G__31210 = null;
var G__31211 = (0);
var G__31212 = (0);
seq__31188_31192 = G__31209;
chunk__31189_31193 = G__31210;
count__31190_31194 = G__31211;
i__31191_31195 = G__31212;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31213__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31214__i = 0, G__31214__a = new Array(arguments.length -  0);
while (G__31214__i < G__31214__a.length) {G__31214__a[G__31214__i] = arguments[G__31214__i + 0]; ++G__31214__i;}
  args = new cljs.core.IndexedSeq(G__31214__a,0,null);
} 
return G__31213__delegate.call(this,args);};
G__31213.cljs$lang$maxFixedArity = 0;
G__31213.cljs$lang$applyTo = (function (arglist__31215){
var args = cljs.core.seq(arglist__31215);
return G__31213__delegate(args);
});
G__31213.cljs$core$IFn$_invoke$arity$variadic = G__31213__delegate;
return G__31213;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__31216_SHARP_,p2__31217_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31216_SHARP_)].join('')),p2__31217_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__31218_SHARP_,p2__31219_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31218_SHARP_)].join(''),p2__31219_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31220 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31220.addCallback(((function (G__31220){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31220))
);

G__31220.addErrback(((function (G__31220){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31220))
);

return G__31220;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31221){if((e31221 instanceof Error)){
var e = e31221;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31221;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31222){if((e31222 instanceof Error)){
var e = e31222;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31222;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31223 = cljs.core._EQ_;
var expr__31224 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31223.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31224))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31223.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31224))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31223.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31224))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31223,expr__31224){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31223,expr__31224))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31226,callback){
var map__31227 = p__31226;
var map__31227__$1 = ((((!((map__31227 == null)))?(((((map__31227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31227):map__31227);
var file_msg = map__31227__$1;
var request_url = cljs.core.get.call(null,map__31227__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31227,map__31227__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31227,map__31227__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__){
return (function (state_31265){
var state_val_31266 = (state_31265[(1)]);
if((state_val_31266 === (7))){
var inst_31261 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31267_31293 = state_31265__$1;
(statearr_31267_31293[(2)] = inst_31261);

(statearr_31267_31293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (1))){
var state_31265__$1 = state_31265;
var statearr_31268_31294 = state_31265__$1;
(statearr_31268_31294[(2)] = null);

(statearr_31268_31294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (4))){
var inst_31231 = (state_31265[(7)]);
var inst_31231__$1 = (state_31265[(2)]);
var state_31265__$1 = (function (){var statearr_31269 = state_31265;
(statearr_31269[(7)] = inst_31231__$1);

return statearr_31269;
})();
if(cljs.core.truth_(inst_31231__$1)){
var statearr_31270_31295 = state_31265__$1;
(statearr_31270_31295[(1)] = (5));

} else {
var statearr_31271_31296 = state_31265__$1;
(statearr_31271_31296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (15))){
var inst_31246 = (state_31265[(8)]);
var inst_31244 = (state_31265[(9)]);
var inst_31248 = inst_31246.call(null,inst_31244);
var state_31265__$1 = state_31265;
var statearr_31272_31297 = state_31265__$1;
(statearr_31272_31297[(2)] = inst_31248);

(statearr_31272_31297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (13))){
var inst_31255 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31273_31298 = state_31265__$1;
(statearr_31273_31298[(2)] = inst_31255);

(statearr_31273_31298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (6))){
var state_31265__$1 = state_31265;
var statearr_31274_31299 = state_31265__$1;
(statearr_31274_31299[(2)] = null);

(statearr_31274_31299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (17))){
var inst_31252 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
var statearr_31275_31300 = state_31265__$1;
(statearr_31275_31300[(2)] = inst_31252);

(statearr_31275_31300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (3))){
var inst_31263 = (state_31265[(2)]);
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31265__$1,inst_31263);
} else {
if((state_val_31266 === (12))){
var state_31265__$1 = state_31265;
var statearr_31276_31301 = state_31265__$1;
(statearr_31276_31301[(2)] = null);

(statearr_31276_31301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (2))){
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31265__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31266 === (11))){
var inst_31236 = (state_31265[(10)]);
var inst_31242 = figwheel.client.file_reloading.blocking_load.call(null,inst_31236);
var state_31265__$1 = state_31265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31265__$1,(14),inst_31242);
} else {
if((state_val_31266 === (9))){
var inst_31236 = (state_31265[(10)]);
var state_31265__$1 = state_31265;
if(cljs.core.truth_(inst_31236)){
var statearr_31277_31302 = state_31265__$1;
(statearr_31277_31302[(1)] = (11));

} else {
var statearr_31278_31303 = state_31265__$1;
(statearr_31278_31303[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (5))){
var inst_31231 = (state_31265[(7)]);
var inst_31237 = (state_31265[(11)]);
var inst_31236 = cljs.core.nth.call(null,inst_31231,(0),null);
var inst_31237__$1 = cljs.core.nth.call(null,inst_31231,(1),null);
var state_31265__$1 = (function (){var statearr_31279 = state_31265;
(statearr_31279[(10)] = inst_31236);

(statearr_31279[(11)] = inst_31237__$1);

return statearr_31279;
})();
if(cljs.core.truth_(inst_31237__$1)){
var statearr_31280_31304 = state_31265__$1;
(statearr_31280_31304[(1)] = (8));

} else {
var statearr_31281_31305 = state_31265__$1;
(statearr_31281_31305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (14))){
var inst_31246 = (state_31265[(8)]);
var inst_31236 = (state_31265[(10)]);
var inst_31244 = (state_31265[(2)]);
var inst_31245 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31246__$1 = cljs.core.get.call(null,inst_31245,inst_31236);
var state_31265__$1 = (function (){var statearr_31282 = state_31265;
(statearr_31282[(8)] = inst_31246__$1);

(statearr_31282[(9)] = inst_31244);

return statearr_31282;
})();
if(cljs.core.truth_(inst_31246__$1)){
var statearr_31283_31306 = state_31265__$1;
(statearr_31283_31306[(1)] = (15));

} else {
var statearr_31284_31307 = state_31265__$1;
(statearr_31284_31307[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (16))){
var inst_31244 = (state_31265[(9)]);
var inst_31250 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31244);
var state_31265__$1 = state_31265;
var statearr_31285_31308 = state_31265__$1;
(statearr_31285_31308[(2)] = inst_31250);

(statearr_31285_31308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (10))){
var inst_31257 = (state_31265[(2)]);
var state_31265__$1 = (function (){var statearr_31286 = state_31265;
(statearr_31286[(12)] = inst_31257);

return statearr_31286;
})();
var statearr_31287_31309 = state_31265__$1;
(statearr_31287_31309[(2)] = null);

(statearr_31287_31309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31266 === (8))){
var inst_31237 = (state_31265[(11)]);
var inst_31239 = eval(inst_31237);
var state_31265__$1 = state_31265;
var statearr_31288_31310 = state_31265__$1;
(statearr_31288_31310[(2)] = inst_31239);

(statearr_31288_31310[(1)] = (10));


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
});})(c__28966__auto__))
;
return ((function (switch__28878__auto__,c__28966__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28879__auto__ = null;
var figwheel$client$file_reloading$state_machine__28879__auto____0 = (function (){
var statearr_31289 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31289[(0)] = figwheel$client$file_reloading$state_machine__28879__auto__);

(statearr_31289[(1)] = (1));

return statearr_31289;
});
var figwheel$client$file_reloading$state_machine__28879__auto____1 = (function (state_31265){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_31265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e31290){if((e31290 instanceof Object)){
var ex__28882__auto__ = e31290;
var statearr_31291_31311 = state_31265;
(statearr_31291_31311[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31312 = state_31265;
state_31265 = G__31312;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28879__auto__ = function(state_31265){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28879__auto____1.call(this,state_31265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28879__auto____0;
figwheel$client$file_reloading$state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28879__auto____1;
return figwheel$client$file_reloading$state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__))
})();
var state__28968__auto__ = (function (){var statearr_31292 = f__28967__auto__.call(null);
(statearr_31292[(6)] = c__28966__auto__);

return statearr_31292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__))
);

return c__28966__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31314 = arguments.length;
switch (G__31314) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31316,callback){
var map__31317 = p__31316;
var map__31317__$1 = ((((!((map__31317 == null)))?(((((map__31317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31317):map__31317);
var file_msg = map__31317__$1;
var namespace = cljs.core.get.call(null,map__31317__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31317,map__31317__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31317,map__31317__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31319){
var map__31320 = p__31319;
var map__31320__$1 = ((((!((map__31320 == null)))?(((((map__31320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31320):map__31320);
var file_msg = map__31320__$1;
var namespace = cljs.core.get.call(null,map__31320__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31322){
var map__31323 = p__31322;
var map__31323__$1 = ((((!((map__31323 == null)))?(((((map__31323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31323):map__31323);
var file_msg = map__31323__$1;
var namespace = cljs.core.get.call(null,map__31323__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31325,callback){
var map__31326 = p__31325;
var map__31326__$1 = ((((!((map__31326 == null)))?(((((map__31326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31326):map__31326);
var file_msg = map__31326__$1;
var request_url = cljs.core.get.call(null,map__31326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28966__auto___31376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto___31376,out){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto___31376,out){
return (function (state_31361){
var state_val_31362 = (state_31361[(1)]);
if((state_val_31362 === (1))){
var inst_31335 = cljs.core.seq.call(null,files);
var inst_31336 = cljs.core.first.call(null,inst_31335);
var inst_31337 = cljs.core.next.call(null,inst_31335);
var inst_31338 = files;
var state_31361__$1 = (function (){var statearr_31363 = state_31361;
(statearr_31363[(7)] = inst_31338);

(statearr_31363[(8)] = inst_31337);

(statearr_31363[(9)] = inst_31336);

return statearr_31363;
})();
var statearr_31364_31377 = state_31361__$1;
(statearr_31364_31377[(2)] = null);

(statearr_31364_31377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (2))){
var inst_31338 = (state_31361[(7)]);
var inst_31344 = (state_31361[(10)]);
var inst_31343 = cljs.core.seq.call(null,inst_31338);
var inst_31344__$1 = cljs.core.first.call(null,inst_31343);
var inst_31345 = cljs.core.next.call(null,inst_31343);
var inst_31346 = (inst_31344__$1 == null);
var inst_31347 = cljs.core.not.call(null,inst_31346);
var state_31361__$1 = (function (){var statearr_31365 = state_31361;
(statearr_31365[(11)] = inst_31345);

(statearr_31365[(10)] = inst_31344__$1);

return statearr_31365;
})();
if(inst_31347){
var statearr_31366_31378 = state_31361__$1;
(statearr_31366_31378[(1)] = (4));

} else {
var statearr_31367_31379 = state_31361__$1;
(statearr_31367_31379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (3))){
var inst_31359 = (state_31361[(2)]);
var state_31361__$1 = state_31361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31361__$1,inst_31359);
} else {
if((state_val_31362 === (4))){
var inst_31344 = (state_31361[(10)]);
var inst_31349 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31344);
var state_31361__$1 = state_31361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31361__$1,(7),inst_31349);
} else {
if((state_val_31362 === (5))){
var inst_31355 = cljs.core.async.close_BANG_.call(null,out);
var state_31361__$1 = state_31361;
var statearr_31368_31380 = state_31361__$1;
(statearr_31368_31380[(2)] = inst_31355);

(statearr_31368_31380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (6))){
var inst_31357 = (state_31361[(2)]);
var state_31361__$1 = state_31361;
var statearr_31369_31381 = state_31361__$1;
(statearr_31369_31381[(2)] = inst_31357);

(statearr_31369_31381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (7))){
var inst_31345 = (state_31361[(11)]);
var inst_31351 = (state_31361[(2)]);
var inst_31352 = cljs.core.async.put_BANG_.call(null,out,inst_31351);
var inst_31338 = inst_31345;
var state_31361__$1 = (function (){var statearr_31370 = state_31361;
(statearr_31370[(12)] = inst_31352);

(statearr_31370[(7)] = inst_31338);

return statearr_31370;
})();
var statearr_31371_31382 = state_31361__$1;
(statearr_31371_31382[(2)] = null);

(statearr_31371_31382[(1)] = (2));


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
});})(c__28966__auto___31376,out))
;
return ((function (switch__28878__auto__,c__28966__auto___31376,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto____0 = (function (){
var statearr_31372 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31372[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto__);

(statearr_31372[(1)] = (1));

return statearr_31372;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto____1 = (function (state_31361){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_31361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e31373){if((e31373 instanceof Object)){
var ex__28882__auto__ = e31373;
var statearr_31374_31383 = state_31361;
(statearr_31374_31383[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31384 = state_31361;
state_31361 = G__31384;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto__ = function(state_31361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto____1.call(this,state_31361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto___31376,out))
})();
var state__28968__auto__ = (function (){var statearr_31375 = f__28967__auto__.call(null);
(statearr_31375[(6)] = c__28966__auto___31376);

return statearr_31375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto___31376,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31385,opts){
var map__31386 = p__31385;
var map__31386__$1 = ((((!((map__31386 == null)))?(((((map__31386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31386):map__31386);
var eval_body = cljs.core.get.call(null,map__31386__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31388){var e = e31388;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31389_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31389_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31390){
var vec__31391 = p__31390;
var k = cljs.core.nth.call(null,vec__31391,(0),null);
var v = cljs.core.nth.call(null,vec__31391,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31394){
var vec__31395 = p__31394;
var k = cljs.core.nth.call(null,vec__31395,(0),null);
var v = cljs.core.nth.call(null,vec__31395,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31401,p__31402){
var map__31403 = p__31401;
var map__31403__$1 = ((((!((map__31403 == null)))?(((((map__31403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31403):map__31403);
var opts = map__31403__$1;
var before_jsload = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31403__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31404 = p__31402;
var map__31404__$1 = ((((!((map__31404 == null)))?(((((map__31404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31404):map__31404);
var msg = map__31404__$1;
var files = cljs.core.get.call(null,map__31404__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31404__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31404__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28966__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28967__auto__ = (function (){var switch__28878__auto__ = ((function (c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31558){
var state_val_31559 = (state_31558[(1)]);
if((state_val_31559 === (7))){
var inst_31419 = (state_31558[(7)]);
var inst_31418 = (state_31558[(8)]);
var inst_31420 = (state_31558[(9)]);
var inst_31421 = (state_31558[(10)]);
var inst_31426 = cljs.core._nth.call(null,inst_31419,inst_31421);
var inst_31427 = figwheel.client.file_reloading.eval_body.call(null,inst_31426,opts);
var inst_31428 = (inst_31421 + (1));
var tmp31560 = inst_31419;
var tmp31561 = inst_31418;
var tmp31562 = inst_31420;
var inst_31418__$1 = tmp31561;
var inst_31419__$1 = tmp31560;
var inst_31420__$1 = tmp31562;
var inst_31421__$1 = inst_31428;
var state_31558__$1 = (function (){var statearr_31563 = state_31558;
(statearr_31563[(7)] = inst_31419__$1);

(statearr_31563[(8)] = inst_31418__$1);

(statearr_31563[(9)] = inst_31420__$1);

(statearr_31563[(10)] = inst_31421__$1);

(statearr_31563[(11)] = inst_31427);

return statearr_31563;
})();
var statearr_31564_31647 = state_31558__$1;
(statearr_31564_31647[(2)] = null);

(statearr_31564_31647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (20))){
var inst_31461 = (state_31558[(12)]);
var inst_31469 = figwheel.client.file_reloading.sort_files.call(null,inst_31461);
var state_31558__$1 = state_31558;
var statearr_31565_31648 = state_31558__$1;
(statearr_31565_31648[(2)] = inst_31469);

(statearr_31565_31648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (27))){
var state_31558__$1 = state_31558;
var statearr_31566_31649 = state_31558__$1;
(statearr_31566_31649[(2)] = null);

(statearr_31566_31649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (1))){
var inst_31410 = (state_31558[(13)]);
var inst_31407 = before_jsload.call(null,files);
var inst_31408 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31409 = (function (){return ((function (inst_31410,inst_31407,inst_31408,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31398_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31398_SHARP_);
});
;})(inst_31410,inst_31407,inst_31408,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31410__$1 = cljs.core.filter.call(null,inst_31409,files);
var inst_31411 = cljs.core.not_empty.call(null,inst_31410__$1);
var state_31558__$1 = (function (){var statearr_31567 = state_31558;
(statearr_31567[(14)] = inst_31408);

(statearr_31567[(13)] = inst_31410__$1);

(statearr_31567[(15)] = inst_31407);

return statearr_31567;
})();
if(cljs.core.truth_(inst_31411)){
var statearr_31568_31650 = state_31558__$1;
(statearr_31568_31650[(1)] = (2));

} else {
var statearr_31569_31651 = state_31558__$1;
(statearr_31569_31651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (24))){
var state_31558__$1 = state_31558;
var statearr_31570_31652 = state_31558__$1;
(statearr_31570_31652[(2)] = null);

(statearr_31570_31652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (39))){
var inst_31511 = (state_31558[(16)]);
var state_31558__$1 = state_31558;
var statearr_31571_31653 = state_31558__$1;
(statearr_31571_31653[(2)] = inst_31511);

(statearr_31571_31653[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (46))){
var inst_31553 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31572_31654 = state_31558__$1;
(statearr_31572_31654[(2)] = inst_31553);

(statearr_31572_31654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (4))){
var inst_31455 = (state_31558[(2)]);
var inst_31456 = cljs.core.List.EMPTY;
var inst_31457 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31456);
var inst_31458 = (function (){return ((function (inst_31455,inst_31456,inst_31457,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31399_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31399_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31399_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31399_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_31455,inst_31456,inst_31457,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31459 = cljs.core.filter.call(null,inst_31458,files);
var inst_31460 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31461 = cljs.core.concat.call(null,inst_31459,inst_31460);
var state_31558__$1 = (function (){var statearr_31573 = state_31558;
(statearr_31573[(12)] = inst_31461);

(statearr_31573[(17)] = inst_31457);

(statearr_31573[(18)] = inst_31455);

return statearr_31573;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31574_31655 = state_31558__$1;
(statearr_31574_31655[(1)] = (16));

} else {
var statearr_31575_31656 = state_31558__$1;
(statearr_31575_31656[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (15))){
var inst_31445 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31576_31657 = state_31558__$1;
(statearr_31576_31657[(2)] = inst_31445);

(statearr_31576_31657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (21))){
var inst_31471 = (state_31558[(19)]);
var inst_31471__$1 = (state_31558[(2)]);
var inst_31472 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31471__$1);
var state_31558__$1 = (function (){var statearr_31577 = state_31558;
(statearr_31577[(19)] = inst_31471__$1);

return statearr_31577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31558__$1,(22),inst_31472);
} else {
if((state_val_31559 === (31))){
var inst_31556 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31558__$1,inst_31556);
} else {
if((state_val_31559 === (32))){
var inst_31511 = (state_31558[(16)]);
var inst_31516 = inst_31511.cljs$lang$protocol_mask$partition0$;
var inst_31517 = (inst_31516 & (64));
var inst_31518 = inst_31511.cljs$core$ISeq$;
var inst_31519 = (cljs.core.PROTOCOL_SENTINEL === inst_31518);
var inst_31520 = ((inst_31517) || (inst_31519));
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31520)){
var statearr_31578_31658 = state_31558__$1;
(statearr_31578_31658[(1)] = (35));

} else {
var statearr_31579_31659 = state_31558__$1;
(statearr_31579_31659[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (40))){
var inst_31533 = (state_31558[(20)]);
var inst_31532 = (state_31558[(2)]);
var inst_31533__$1 = cljs.core.get.call(null,inst_31532,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31534 = cljs.core.get.call(null,inst_31532,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31535 = cljs.core.not_empty.call(null,inst_31533__$1);
var state_31558__$1 = (function (){var statearr_31580 = state_31558;
(statearr_31580[(20)] = inst_31533__$1);

(statearr_31580[(21)] = inst_31534);

return statearr_31580;
})();
if(cljs.core.truth_(inst_31535)){
var statearr_31581_31660 = state_31558__$1;
(statearr_31581_31660[(1)] = (41));

} else {
var statearr_31582_31661 = state_31558__$1;
(statearr_31582_31661[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (33))){
var state_31558__$1 = state_31558;
var statearr_31583_31662 = state_31558__$1;
(statearr_31583_31662[(2)] = false);

(statearr_31583_31662[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (13))){
var inst_31431 = (state_31558[(22)]);
var inst_31435 = cljs.core.chunk_first.call(null,inst_31431);
var inst_31436 = cljs.core.chunk_rest.call(null,inst_31431);
var inst_31437 = cljs.core.count.call(null,inst_31435);
var inst_31418 = inst_31436;
var inst_31419 = inst_31435;
var inst_31420 = inst_31437;
var inst_31421 = (0);
var state_31558__$1 = (function (){var statearr_31584 = state_31558;
(statearr_31584[(7)] = inst_31419);

(statearr_31584[(8)] = inst_31418);

(statearr_31584[(9)] = inst_31420);

(statearr_31584[(10)] = inst_31421);

return statearr_31584;
})();
var statearr_31585_31663 = state_31558__$1;
(statearr_31585_31663[(2)] = null);

(statearr_31585_31663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (22))){
var inst_31474 = (state_31558[(23)]);
var inst_31475 = (state_31558[(24)]);
var inst_31471 = (state_31558[(19)]);
var inst_31479 = (state_31558[(25)]);
var inst_31474__$1 = (state_31558[(2)]);
var inst_31475__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31474__$1);
var inst_31476 = (function (){var all_files = inst_31471;
var res_SINGLEQUOTE_ = inst_31474__$1;
var res = inst_31475__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31474,inst_31475,inst_31471,inst_31479,inst_31474__$1,inst_31475__$1,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31400_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31400_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31474,inst_31475,inst_31471,inst_31479,inst_31474__$1,inst_31475__$1,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31477 = cljs.core.filter.call(null,inst_31476,inst_31474__$1);
var inst_31478 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31479__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31478);
var inst_31480 = cljs.core.not_empty.call(null,inst_31479__$1);
var state_31558__$1 = (function (){var statearr_31586 = state_31558;
(statearr_31586[(23)] = inst_31474__$1);

(statearr_31586[(24)] = inst_31475__$1);

(statearr_31586[(26)] = inst_31477);

(statearr_31586[(25)] = inst_31479__$1);

return statearr_31586;
})();
if(cljs.core.truth_(inst_31480)){
var statearr_31587_31664 = state_31558__$1;
(statearr_31587_31664[(1)] = (23));

} else {
var statearr_31588_31665 = state_31558__$1;
(statearr_31588_31665[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (36))){
var state_31558__$1 = state_31558;
var statearr_31589_31666 = state_31558__$1;
(statearr_31589_31666[(2)] = false);

(statearr_31589_31666[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (41))){
var inst_31533 = (state_31558[(20)]);
var inst_31537 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31538 = cljs.core.map.call(null,inst_31537,inst_31533);
var inst_31539 = cljs.core.pr_str.call(null,inst_31538);
var inst_31540 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31539)].join('');
var inst_31541 = figwheel.client.utils.log.call(null,inst_31540);
var state_31558__$1 = state_31558;
var statearr_31590_31667 = state_31558__$1;
(statearr_31590_31667[(2)] = inst_31541);

(statearr_31590_31667[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (43))){
var inst_31534 = (state_31558[(21)]);
var inst_31544 = (state_31558[(2)]);
var inst_31545 = cljs.core.not_empty.call(null,inst_31534);
var state_31558__$1 = (function (){var statearr_31591 = state_31558;
(statearr_31591[(27)] = inst_31544);

return statearr_31591;
})();
if(cljs.core.truth_(inst_31545)){
var statearr_31592_31668 = state_31558__$1;
(statearr_31592_31668[(1)] = (44));

} else {
var statearr_31593_31669 = state_31558__$1;
(statearr_31593_31669[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (29))){
var inst_31511 = (state_31558[(16)]);
var inst_31474 = (state_31558[(23)]);
var inst_31475 = (state_31558[(24)]);
var inst_31477 = (state_31558[(26)]);
var inst_31471 = (state_31558[(19)]);
var inst_31479 = (state_31558[(25)]);
var inst_31507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31510 = (function (){var all_files = inst_31471;
var res_SINGLEQUOTE_ = inst_31474;
var res = inst_31475;
var files_not_loaded = inst_31477;
var dependencies_that_loaded = inst_31479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31511,inst_31474,inst_31475,inst_31477,inst_31471,inst_31479,inst_31507,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31509){
var map__31594 = p__31509;
var map__31594__$1 = ((((!((map__31594 == null)))?(((((map__31594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31594):map__31594);
var namespace = cljs.core.get.call(null,map__31594__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31511,inst_31474,inst_31475,inst_31477,inst_31471,inst_31479,inst_31507,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31511__$1 = cljs.core.group_by.call(null,inst_31510,inst_31477);
var inst_31513 = (inst_31511__$1 == null);
var inst_31514 = cljs.core.not.call(null,inst_31513);
var state_31558__$1 = (function (){var statearr_31596 = state_31558;
(statearr_31596[(16)] = inst_31511__$1);

(statearr_31596[(28)] = inst_31507);

return statearr_31596;
})();
if(inst_31514){
var statearr_31597_31670 = state_31558__$1;
(statearr_31597_31670[(1)] = (32));

} else {
var statearr_31598_31671 = state_31558__$1;
(statearr_31598_31671[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (44))){
var inst_31534 = (state_31558[(21)]);
var inst_31547 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31534);
var inst_31548 = cljs.core.pr_str.call(null,inst_31547);
var inst_31549 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31548)].join('');
var inst_31550 = figwheel.client.utils.log.call(null,inst_31549);
var state_31558__$1 = state_31558;
var statearr_31599_31672 = state_31558__$1;
(statearr_31599_31672[(2)] = inst_31550);

(statearr_31599_31672[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (6))){
var inst_31452 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31600_31673 = state_31558__$1;
(statearr_31600_31673[(2)] = inst_31452);

(statearr_31600_31673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (28))){
var inst_31477 = (state_31558[(26)]);
var inst_31504 = (state_31558[(2)]);
var inst_31505 = cljs.core.not_empty.call(null,inst_31477);
var state_31558__$1 = (function (){var statearr_31601 = state_31558;
(statearr_31601[(29)] = inst_31504);

return statearr_31601;
})();
if(cljs.core.truth_(inst_31505)){
var statearr_31602_31674 = state_31558__$1;
(statearr_31602_31674[(1)] = (29));

} else {
var statearr_31603_31675 = state_31558__$1;
(statearr_31603_31675[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (25))){
var inst_31475 = (state_31558[(24)]);
var inst_31491 = (state_31558[(2)]);
var inst_31492 = cljs.core.not_empty.call(null,inst_31475);
var state_31558__$1 = (function (){var statearr_31604 = state_31558;
(statearr_31604[(30)] = inst_31491);

return statearr_31604;
})();
if(cljs.core.truth_(inst_31492)){
var statearr_31605_31676 = state_31558__$1;
(statearr_31605_31676[(1)] = (26));

} else {
var statearr_31606_31677 = state_31558__$1;
(statearr_31606_31677[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (34))){
var inst_31527 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31527)){
var statearr_31607_31678 = state_31558__$1;
(statearr_31607_31678[(1)] = (38));

} else {
var statearr_31608_31679 = state_31558__$1;
(statearr_31608_31679[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (17))){
var state_31558__$1 = state_31558;
var statearr_31609_31680 = state_31558__$1;
(statearr_31609_31680[(2)] = recompile_dependents);

(statearr_31609_31680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (3))){
var state_31558__$1 = state_31558;
var statearr_31610_31681 = state_31558__$1;
(statearr_31610_31681[(2)] = null);

(statearr_31610_31681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (12))){
var inst_31448 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31611_31682 = state_31558__$1;
(statearr_31611_31682[(2)] = inst_31448);

(statearr_31611_31682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (2))){
var inst_31410 = (state_31558[(13)]);
var inst_31417 = cljs.core.seq.call(null,inst_31410);
var inst_31418 = inst_31417;
var inst_31419 = null;
var inst_31420 = (0);
var inst_31421 = (0);
var state_31558__$1 = (function (){var statearr_31612 = state_31558;
(statearr_31612[(7)] = inst_31419);

(statearr_31612[(8)] = inst_31418);

(statearr_31612[(9)] = inst_31420);

(statearr_31612[(10)] = inst_31421);

return statearr_31612;
})();
var statearr_31613_31683 = state_31558__$1;
(statearr_31613_31683[(2)] = null);

(statearr_31613_31683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (23))){
var inst_31474 = (state_31558[(23)]);
var inst_31475 = (state_31558[(24)]);
var inst_31477 = (state_31558[(26)]);
var inst_31471 = (state_31558[(19)]);
var inst_31479 = (state_31558[(25)]);
var inst_31482 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31484 = (function (){var all_files = inst_31471;
var res_SINGLEQUOTE_ = inst_31474;
var res = inst_31475;
var files_not_loaded = inst_31477;
var dependencies_that_loaded = inst_31479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31474,inst_31475,inst_31477,inst_31471,inst_31479,inst_31482,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31483){
var map__31614 = p__31483;
var map__31614__$1 = ((((!((map__31614 == null)))?(((((map__31614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31614):map__31614);
var request_url = cljs.core.get.call(null,map__31614__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31474,inst_31475,inst_31477,inst_31471,inst_31479,inst_31482,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31485 = cljs.core.reverse.call(null,inst_31479);
var inst_31486 = cljs.core.map.call(null,inst_31484,inst_31485);
var inst_31487 = cljs.core.pr_str.call(null,inst_31486);
var inst_31488 = figwheel.client.utils.log.call(null,inst_31487);
var state_31558__$1 = (function (){var statearr_31616 = state_31558;
(statearr_31616[(31)] = inst_31482);

return statearr_31616;
})();
var statearr_31617_31684 = state_31558__$1;
(statearr_31617_31684[(2)] = inst_31488);

(statearr_31617_31684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (35))){
var state_31558__$1 = state_31558;
var statearr_31618_31685 = state_31558__$1;
(statearr_31618_31685[(2)] = true);

(statearr_31618_31685[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (19))){
var inst_31461 = (state_31558[(12)]);
var inst_31467 = figwheel.client.file_reloading.expand_files.call(null,inst_31461);
var state_31558__$1 = state_31558;
var statearr_31619_31686 = state_31558__$1;
(statearr_31619_31686[(2)] = inst_31467);

(statearr_31619_31686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (11))){
var state_31558__$1 = state_31558;
var statearr_31620_31687 = state_31558__$1;
(statearr_31620_31687[(2)] = null);

(statearr_31620_31687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (9))){
var inst_31450 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31621_31688 = state_31558__$1;
(statearr_31621_31688[(2)] = inst_31450);

(statearr_31621_31688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (5))){
var inst_31420 = (state_31558[(9)]);
var inst_31421 = (state_31558[(10)]);
var inst_31423 = (inst_31421 < inst_31420);
var inst_31424 = inst_31423;
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31424)){
var statearr_31622_31689 = state_31558__$1;
(statearr_31622_31689[(1)] = (7));

} else {
var statearr_31623_31690 = state_31558__$1;
(statearr_31623_31690[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (14))){
var inst_31431 = (state_31558[(22)]);
var inst_31440 = cljs.core.first.call(null,inst_31431);
var inst_31441 = figwheel.client.file_reloading.eval_body.call(null,inst_31440,opts);
var inst_31442 = cljs.core.next.call(null,inst_31431);
var inst_31418 = inst_31442;
var inst_31419 = null;
var inst_31420 = (0);
var inst_31421 = (0);
var state_31558__$1 = (function (){var statearr_31624 = state_31558;
(statearr_31624[(7)] = inst_31419);

(statearr_31624[(8)] = inst_31418);

(statearr_31624[(9)] = inst_31420);

(statearr_31624[(10)] = inst_31421);

(statearr_31624[(32)] = inst_31441);

return statearr_31624;
})();
var statearr_31625_31691 = state_31558__$1;
(statearr_31625_31691[(2)] = null);

(statearr_31625_31691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (45))){
var state_31558__$1 = state_31558;
var statearr_31626_31692 = state_31558__$1;
(statearr_31626_31692[(2)] = null);

(statearr_31626_31692[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (26))){
var inst_31474 = (state_31558[(23)]);
var inst_31475 = (state_31558[(24)]);
var inst_31477 = (state_31558[(26)]);
var inst_31471 = (state_31558[(19)]);
var inst_31479 = (state_31558[(25)]);
var inst_31494 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31496 = (function (){var all_files = inst_31471;
var res_SINGLEQUOTE_ = inst_31474;
var res = inst_31475;
var files_not_loaded = inst_31477;
var dependencies_that_loaded = inst_31479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31474,inst_31475,inst_31477,inst_31471,inst_31479,inst_31494,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31495){
var map__31627 = p__31495;
var map__31627__$1 = ((((!((map__31627 == null)))?(((((map__31627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);
var namespace = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31474,inst_31475,inst_31477,inst_31471,inst_31479,inst_31494,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31497 = cljs.core.map.call(null,inst_31496,inst_31475);
var inst_31498 = cljs.core.pr_str.call(null,inst_31497);
var inst_31499 = figwheel.client.utils.log.call(null,inst_31498);
var inst_31500 = (function (){var all_files = inst_31471;
var res_SINGLEQUOTE_ = inst_31474;
var res = inst_31475;
var files_not_loaded = inst_31477;
var dependencies_that_loaded = inst_31479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31474,inst_31475,inst_31477,inst_31471,inst_31479,inst_31494,inst_31496,inst_31497,inst_31498,inst_31499,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31474,inst_31475,inst_31477,inst_31471,inst_31479,inst_31494,inst_31496,inst_31497,inst_31498,inst_31499,state_val_31559,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31501 = setTimeout(inst_31500,(10));
var state_31558__$1 = (function (){var statearr_31629 = state_31558;
(statearr_31629[(33)] = inst_31499);

(statearr_31629[(34)] = inst_31494);

return statearr_31629;
})();
var statearr_31630_31693 = state_31558__$1;
(statearr_31630_31693[(2)] = inst_31501);

(statearr_31630_31693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (16))){
var state_31558__$1 = state_31558;
var statearr_31631_31694 = state_31558__$1;
(statearr_31631_31694[(2)] = reload_dependents);

(statearr_31631_31694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (38))){
var inst_31511 = (state_31558[(16)]);
var inst_31529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31511);
var state_31558__$1 = state_31558;
var statearr_31632_31695 = state_31558__$1;
(statearr_31632_31695[(2)] = inst_31529);

(statearr_31632_31695[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (30))){
var state_31558__$1 = state_31558;
var statearr_31633_31696 = state_31558__$1;
(statearr_31633_31696[(2)] = null);

(statearr_31633_31696[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (10))){
var inst_31431 = (state_31558[(22)]);
var inst_31433 = cljs.core.chunked_seq_QMARK_.call(null,inst_31431);
var state_31558__$1 = state_31558;
if(inst_31433){
var statearr_31634_31697 = state_31558__$1;
(statearr_31634_31697[(1)] = (13));

} else {
var statearr_31635_31698 = state_31558__$1;
(statearr_31635_31698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (18))){
var inst_31465 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
if(cljs.core.truth_(inst_31465)){
var statearr_31636_31699 = state_31558__$1;
(statearr_31636_31699[(1)] = (19));

} else {
var statearr_31637_31700 = state_31558__$1;
(statearr_31637_31700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (42))){
var state_31558__$1 = state_31558;
var statearr_31638_31701 = state_31558__$1;
(statearr_31638_31701[(2)] = null);

(statearr_31638_31701[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (37))){
var inst_31524 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31639_31702 = state_31558__$1;
(statearr_31639_31702[(2)] = inst_31524);

(statearr_31639_31702[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (8))){
var inst_31418 = (state_31558[(8)]);
var inst_31431 = (state_31558[(22)]);
var inst_31431__$1 = cljs.core.seq.call(null,inst_31418);
var state_31558__$1 = (function (){var statearr_31640 = state_31558;
(statearr_31640[(22)] = inst_31431__$1);

return statearr_31640;
})();
if(inst_31431__$1){
var statearr_31641_31703 = state_31558__$1;
(statearr_31641_31703[(1)] = (10));

} else {
var statearr_31642_31704 = state_31558__$1;
(statearr_31642_31704[(1)] = (11));

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
}
});})(c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28878__auto__,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto____0 = (function (){
var statearr_31643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31643[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto__);

(statearr_31643[(1)] = (1));

return statearr_31643;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto____1 = (function (state_31558){
while(true){
var ret_value__28880__auto__ = (function (){try{while(true){
var result__28881__auto__ = switch__28878__auto__.call(null,state_31558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28881__auto__;
}
break;
}
}catch (e31644){if((e31644 instanceof Object)){
var ex__28882__auto__ = e31644;
var statearr_31645_31705 = state_31558;
(statearr_31645_31705[(5)] = ex__28882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31706 = state_31558;
state_31558 = G__31706;
continue;
} else {
return ret_value__28880__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto__ = function(state_31558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto____1.call(this,state_31558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28879__auto__;
})()
;})(switch__28878__auto__,c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28968__auto__ = (function (){var statearr_31646 = f__28967__auto__.call(null);
(statearr_31646[(6)] = c__28966__auto__);

return statearr_31646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28968__auto__);
});})(c__28966__auto__,map__31403,map__31403__$1,opts,before_jsload,on_jsload,reload_dependents,map__31404,map__31404__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28966__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31709,link){
var map__31710 = p__31709;
var map__31710__$1 = ((((!((map__31710 == null)))?(((((map__31710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31710):map__31710);
var file = cljs.core.get.call(null,map__31710__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31710,map__31710__$1,file){
return (function (p1__31707_SHARP_,p2__31708_SHARP_){
if(cljs.core._EQ_.call(null,p1__31707_SHARP_,p2__31708_SHARP_)){
return p1__31707_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31710,map__31710__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31713){
var map__31714 = p__31713;
var map__31714__$1 = ((((!((map__31714 == null)))?(((((map__31714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31714):map__31714);
var match_length = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31714__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31712_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31712_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31716_SHARP_,p2__31717_SHARP_){
return cljs.core.assoc.call(null,p1__31716_SHARP_,cljs.core.get.call(null,p2__31717_SHARP_,key),p2__31717_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31718 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31718);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31718);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31719,p__31720){
var map__31721 = p__31719;
var map__31721__$1 = ((((!((map__31721 == null)))?(((((map__31721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31721):map__31721);
var on_cssload = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31722 = p__31720;
var map__31722__$1 = ((((!((map__31722 == null)))?(((((map__31722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31722):map__31722);
var files_msg = map__31722__$1;
var files = cljs.core.get.call(null,map__31722__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1544505250317
