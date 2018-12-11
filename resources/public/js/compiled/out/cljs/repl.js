// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32522){
var map__32523 = p__32522;
var map__32523__$1 = ((((!((map__32523 == null)))?(((((map__32523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32523):map__32523);
var m = map__32523__$1;
var n = cljs.core.get.call(null,map__32523__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32523__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32525_32547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32526_32548 = null;
var count__32527_32549 = (0);
var i__32528_32550 = (0);
while(true){
if((i__32528_32550 < count__32527_32549)){
var f_32551 = cljs.core._nth.call(null,chunk__32526_32548,i__32528_32550);
cljs.core.println.call(null,"  ",f_32551);


var G__32552 = seq__32525_32547;
var G__32553 = chunk__32526_32548;
var G__32554 = count__32527_32549;
var G__32555 = (i__32528_32550 + (1));
seq__32525_32547 = G__32552;
chunk__32526_32548 = G__32553;
count__32527_32549 = G__32554;
i__32528_32550 = G__32555;
continue;
} else {
var temp__4657__auto___32556 = cljs.core.seq.call(null,seq__32525_32547);
if(temp__4657__auto___32556){
var seq__32525_32557__$1 = temp__4657__auto___32556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32525_32557__$1)){
var c__4319__auto___32558 = cljs.core.chunk_first.call(null,seq__32525_32557__$1);
var G__32559 = cljs.core.chunk_rest.call(null,seq__32525_32557__$1);
var G__32560 = c__4319__auto___32558;
var G__32561 = cljs.core.count.call(null,c__4319__auto___32558);
var G__32562 = (0);
seq__32525_32547 = G__32559;
chunk__32526_32548 = G__32560;
count__32527_32549 = G__32561;
i__32528_32550 = G__32562;
continue;
} else {
var f_32563 = cljs.core.first.call(null,seq__32525_32557__$1);
cljs.core.println.call(null,"  ",f_32563);


var G__32564 = cljs.core.next.call(null,seq__32525_32557__$1);
var G__32565 = null;
var G__32566 = (0);
var G__32567 = (0);
seq__32525_32547 = G__32564;
chunk__32526_32548 = G__32565;
count__32527_32549 = G__32566;
i__32528_32550 = G__32567;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32568 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32568);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32568)))?cljs.core.second.call(null,arglists_32568):arglists_32568));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32529_32569 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32530_32570 = null;
var count__32531_32571 = (0);
var i__32532_32572 = (0);
while(true){
if((i__32532_32572 < count__32531_32571)){
var vec__32533_32573 = cljs.core._nth.call(null,chunk__32530_32570,i__32532_32572);
var name_32574 = cljs.core.nth.call(null,vec__32533_32573,(0),null);
var map__32536_32575 = cljs.core.nth.call(null,vec__32533_32573,(1),null);
var map__32536_32576__$1 = ((((!((map__32536_32575 == null)))?(((((map__32536_32575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32536_32575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32536_32575):map__32536_32575);
var doc_32577 = cljs.core.get.call(null,map__32536_32576__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32578 = cljs.core.get.call(null,map__32536_32576__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32574);

cljs.core.println.call(null," ",arglists_32578);

if(cljs.core.truth_(doc_32577)){
cljs.core.println.call(null," ",doc_32577);
} else {
}


var G__32579 = seq__32529_32569;
var G__32580 = chunk__32530_32570;
var G__32581 = count__32531_32571;
var G__32582 = (i__32532_32572 + (1));
seq__32529_32569 = G__32579;
chunk__32530_32570 = G__32580;
count__32531_32571 = G__32581;
i__32532_32572 = G__32582;
continue;
} else {
var temp__4657__auto___32583 = cljs.core.seq.call(null,seq__32529_32569);
if(temp__4657__auto___32583){
var seq__32529_32584__$1 = temp__4657__auto___32583;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32529_32584__$1)){
var c__4319__auto___32585 = cljs.core.chunk_first.call(null,seq__32529_32584__$1);
var G__32586 = cljs.core.chunk_rest.call(null,seq__32529_32584__$1);
var G__32587 = c__4319__auto___32585;
var G__32588 = cljs.core.count.call(null,c__4319__auto___32585);
var G__32589 = (0);
seq__32529_32569 = G__32586;
chunk__32530_32570 = G__32587;
count__32531_32571 = G__32588;
i__32532_32572 = G__32589;
continue;
} else {
var vec__32538_32590 = cljs.core.first.call(null,seq__32529_32584__$1);
var name_32591 = cljs.core.nth.call(null,vec__32538_32590,(0),null);
var map__32541_32592 = cljs.core.nth.call(null,vec__32538_32590,(1),null);
var map__32541_32593__$1 = ((((!((map__32541_32592 == null)))?(((((map__32541_32592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32541_32592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32541_32592):map__32541_32592);
var doc_32594 = cljs.core.get.call(null,map__32541_32593__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32595 = cljs.core.get.call(null,map__32541_32593__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32591);

cljs.core.println.call(null," ",arglists_32595);

if(cljs.core.truth_(doc_32594)){
cljs.core.println.call(null," ",doc_32594);
} else {
}


var G__32596 = cljs.core.next.call(null,seq__32529_32584__$1);
var G__32597 = null;
var G__32598 = (0);
var G__32599 = (0);
seq__32529_32569 = G__32596;
chunk__32530_32570 = G__32597;
count__32531_32571 = G__32598;
i__32532_32572 = G__32599;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32543 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32544 = null;
var count__32545 = (0);
var i__32546 = (0);
while(true){
if((i__32546 < count__32545)){
var role = cljs.core._nth.call(null,chunk__32544,i__32546);
var temp__4657__auto___32600__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32600__$1)){
var spec_32601 = temp__4657__auto___32600__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32601));
} else {
}


var G__32602 = seq__32543;
var G__32603 = chunk__32544;
var G__32604 = count__32545;
var G__32605 = (i__32546 + (1));
seq__32543 = G__32602;
chunk__32544 = G__32603;
count__32545 = G__32604;
i__32546 = G__32605;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32543);
if(temp__4657__auto____$1){
var seq__32543__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32543__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32543__$1);
var G__32606 = cljs.core.chunk_rest.call(null,seq__32543__$1);
var G__32607 = c__4319__auto__;
var G__32608 = cljs.core.count.call(null,c__4319__auto__);
var G__32609 = (0);
seq__32543 = G__32606;
chunk__32544 = G__32607;
count__32545 = G__32608;
i__32546 = G__32609;
continue;
} else {
var role = cljs.core.first.call(null,seq__32543__$1);
var temp__4657__auto___32610__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32610__$2)){
var spec_32611 = temp__4657__auto___32610__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32611));
} else {
}


var G__32612 = cljs.core.next.call(null,seq__32543__$1);
var G__32613 = null;
var G__32614 = (0);
var G__32615 = (0);
seq__32543 = G__32612;
chunk__32544 = G__32613;
count__32545 = G__32614;
i__32546 = G__32615;
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

//# sourceMappingURL=repl.js.map?rel=1544505253496
