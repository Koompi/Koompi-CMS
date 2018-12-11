// Compiled by ClojureScript 1.10.238 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__23527,handler){
var map__23528 = p__23527;
var map__23528__$1 = ((((!((map__23528 == null)))?(((((map__23528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23528):map__23528);
var uri = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23528__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23528,map__23528__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__23526_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__23526_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23528,map__23528__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___23540 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___23540)){
var response_type_23541 = temp__4657__auto___23540;
this$__$1.responseType = cljs.core.name.call(null,response_type_23541);
} else {
}

var seq__23530_23542 = cljs.core.seq.call(null,headers);
var chunk__23531_23543 = null;
var count__23532_23544 = (0);
var i__23533_23545 = (0);
while(true){
if((i__23533_23545 < count__23532_23544)){
var vec__23534_23546 = cljs.core._nth.call(null,chunk__23531_23543,i__23533_23545);
var k_23547 = cljs.core.nth.call(null,vec__23534_23546,(0),null);
var v_23548 = cljs.core.nth.call(null,vec__23534_23546,(1),null);
this$__$1.setRequestHeader(k_23547,v_23548);


var G__23549 = seq__23530_23542;
var G__23550 = chunk__23531_23543;
var G__23551 = count__23532_23544;
var G__23552 = (i__23533_23545 + (1));
seq__23530_23542 = G__23549;
chunk__23531_23543 = G__23550;
count__23532_23544 = G__23551;
i__23533_23545 = G__23552;
continue;
} else {
var temp__4657__auto___23553 = cljs.core.seq.call(null,seq__23530_23542);
if(temp__4657__auto___23553){
var seq__23530_23554__$1 = temp__4657__auto___23553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23530_23554__$1)){
var c__4319__auto___23555 = cljs.core.chunk_first.call(null,seq__23530_23554__$1);
var G__23556 = cljs.core.chunk_rest.call(null,seq__23530_23554__$1);
var G__23557 = c__4319__auto___23555;
var G__23558 = cljs.core.count.call(null,c__4319__auto___23555);
var G__23559 = (0);
seq__23530_23542 = G__23556;
chunk__23531_23543 = G__23557;
count__23532_23544 = G__23558;
i__23533_23545 = G__23559;
continue;
} else {
var vec__23537_23560 = cljs.core.first.call(null,seq__23530_23554__$1);
var k_23561 = cljs.core.nth.call(null,vec__23537_23560,(0),null);
var v_23562 = cljs.core.nth.call(null,vec__23537_23560,(1),null);
this$__$1.setRequestHeader(k_23561,v_23562);


var G__23563 = cljs.core.next.call(null,seq__23530_23554__$1);
var G__23564 = null;
var G__23565 = (0);
var G__23566 = (0);
seq__23530_23542 = G__23563;
chunk__23531_23543 = G__23564;
count__23532_23544 = G__23565;
i__23533_23545 = G__23566;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1544505232249
