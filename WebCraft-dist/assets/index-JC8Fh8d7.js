(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var cd={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Wy(){if(Vg)return Io;Vg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Io.Fragment=e,Io.jsx=i,Io.jsxs=i,Io}var kg;function qy(){return kg||(kg=1,cd.exports=Wy()),cd.exports}var C=qy(),ud={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Yy(){if(Xg)return ct;Xg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=g&&L[g]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,M={};function y(L,Y,Ce){this.props=L,this.context=Y,this.refs=M,this.updater=Ce||T}y.prototype.isReactComponent={},y.prototype.setState=function(L,Y){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Y,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function F(){}F.prototype=y.prototype;function k(L,Y,Ce){this.props=L,this.context=Y,this.refs=M,this.updater=Ce||T}var w=k.prototype=new F;w.constructor=k,D(w,y.prototype),w.isPureReactComponent=!0;var H=Array.isArray;function O(){}var P={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function N(L,Y,Ce){var he=Ce.ref;return{$$typeof:o,type:L,key:Y,ref:he!==void 0?he:null,props:Ce}}function X(L,Y){return N(L.type,Y,L.props)}function B(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function Z(L){var Y={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Ce){return Y[Ce]})}var _e=/\/+/g;function Ee(L,Y){return typeof L=="object"&&L!==null&&L.key!=null?Z(""+L.key):Y.toString(36)}function ee(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(O,O):(L.status="pending",L.then(function(Y){L.status==="pending"&&(L.status="fulfilled",L.value=Y)},function(Y){L.status==="pending"&&(L.status="rejected",L.reason=Y)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,Y,Ce,he,we){var te=typeof L;(te==="undefined"||te==="boolean")&&(L=null);var ye=!1;if(L===null)ye=!0;else switch(te){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(L.$$typeof){case o:case e:ye=!0;break;case v:return ye=L._init,z(ye(L._payload),Y,Ce,he,we)}}if(ye)return we=we(L),ye=he===""?"."+Ee(L,0):he,H(we)?(Ce="",ye!=null&&(Ce=ye.replace(_e,"$&/")+"/"),z(we,Y,Ce,"",function(rt){return rt})):we!=null&&(B(we)&&(we=X(we,Ce+(we.key==null||L&&L.key===we.key?"":(""+we.key).replace(_e,"$&/")+"/")+ye)),Y.push(we)),1;ye=0;var Re=he===""?".":he+":";if(H(L))for(var Ge=0;Ge<L.length;Ge++)he=L[Ge],te=Re+Ee(he,Ge),ye+=z(he,Y,Ce,te,we);else if(Ge=E(L),typeof Ge=="function")for(L=Ge.call(L),Ge=0;!(he=L.next()).done;)he=he.value,te=Re+Ee(he,Ge++),ye+=z(he,Y,Ce,te,we);else if(te==="object"){if(typeof L.then=="function")return z(ee(L),Y,Ce,he,we);throw Y=String(L),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(L,Y,Ce){if(L==null)return L;var he=[],we=0;return z(L,he,"","",function(te){return Y.call(Ce,te,we++)}),he}function ne(L){if(L._status===-1){var Y=L._result;Y=Y(),Y.then(function(Ce){(L._status===0||L._status===-1)&&(L._status=1,L._result=Ce)},function(Ce){(L._status===0||L._status===-1)&&(L._status=2,L._result=Ce)}),L._status===-1&&(L._status=0,L._result=Y)}if(L._status===1)return L._result.default;throw L._result}var xe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},De={map:G,forEach:function(L,Y,Ce){G(L,function(){Y.apply(this,arguments)},Ce)},count:function(L){var Y=0;return G(L,function(){Y++}),Y},toArray:function(L){return G(L,function(Y){return Y})||[]},only:function(L){if(!B(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ct.Activity=x,ct.Children=De,ct.Component=y,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=k,ct.StrictMode=r,ct.Suspense=p,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ct.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},ct.cache=function(L){return function(){return L.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(L,Y,Ce){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var he=D({},L.props),we=L.key;if(Y!=null)for(te in Y.key!==void 0&&(we=""+Y.key),Y)!S.call(Y,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Y.ref===void 0||(he[te]=Y[te]);var te=arguments.length-2;if(te===1)he.children=Ce;else if(1<te){for(var ye=Array(te),Re=0;Re<te;Re++)ye[Re]=arguments[Re+2];he.children=ye}return N(L.type,we,he)},ct.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ct.createElement=function(L,Y,Ce){var he,we={},te=null;if(Y!=null)for(he in Y.key!==void 0&&(te=""+Y.key),Y)S.call(Y,he)&&he!=="key"&&he!=="__self"&&he!=="__source"&&(we[he]=Y[he]);var ye=arguments.length-2;if(ye===1)we.children=Ce;else if(1<ye){for(var Re=Array(ye),Ge=0;Ge<ye;Ge++)Re[Ge]=arguments[Ge+2];we.children=Re}if(L&&L.defaultProps)for(he in ye=L.defaultProps,ye)we[he]===void 0&&(we[he]=ye[he]);return N(L,te,we)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(L){return{$$typeof:m,render:L}},ct.isValidElement=B,ct.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:ne}},ct.memo=function(L,Y){return{$$typeof:d,type:L,compare:Y===void 0?null:Y}},ct.startTransition=function(L){var Y=P.T,Ce={};P.T=Ce;try{var he=L(),we=P.S;we!==null&&we(Ce,he),typeof he=="object"&&he!==null&&typeof he.then=="function"&&he.then(O,xe)}catch(te){xe(te)}finally{Y!==null&&Ce.types!==null&&(Y.types=Ce.types),P.T=Y}},ct.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ct.use=function(L){return P.H.use(L)},ct.useActionState=function(L,Y,Ce){return P.H.useActionState(L,Y,Ce)},ct.useCallback=function(L,Y){return P.H.useCallback(L,Y)},ct.useContext=function(L){return P.H.useContext(L)},ct.useDebugValue=function(){},ct.useDeferredValue=function(L,Y){return P.H.useDeferredValue(L,Y)},ct.useEffect=function(L,Y){return P.H.useEffect(L,Y)},ct.useEffectEvent=function(L){return P.H.useEffectEvent(L)},ct.useId=function(){return P.H.useId()},ct.useImperativeHandle=function(L,Y,Ce){return P.H.useImperativeHandle(L,Y,Ce)},ct.useInsertionEffect=function(L,Y){return P.H.useInsertionEffect(L,Y)},ct.useLayoutEffect=function(L,Y){return P.H.useLayoutEffect(L,Y)},ct.useMemo=function(L,Y){return P.H.useMemo(L,Y)},ct.useOptimistic=function(L,Y){return P.H.useOptimistic(L,Y)},ct.useReducer=function(L,Y,Ce){return P.H.useReducer(L,Y,Ce)},ct.useRef=function(L){return P.H.useRef(L)},ct.useState=function(L){return P.H.useState(L)},ct.useSyncExternalStore=function(L,Y,Ce){return P.H.useSyncExternalStore(L,Y,Ce)},ct.useTransition=function(){return P.H.useTransition()},ct.version="19.2.8",ct}var Wg;function Vh(){return Wg||(Wg=1,ud.exports=Yy()),ud.exports}var et=Vh(),fd={exports:{}},Bo={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function jy(){return qg||(qg=1,(function(o){function e(z,G){var ne=z.length;z.push(G);e:for(;0<ne;){var xe=ne-1>>>1,De=z[xe];if(0<l(De,G))z[xe]=G,z[ne]=De,ne=xe;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],ne=z.pop();if(ne!==G){z[0]=ne;e:for(var xe=0,De=z.length,L=De>>>1;xe<L;){var Y=2*(xe+1)-1,Ce=z[Y],he=Y+1,we=z[he];if(0>l(Ce,ne))he<De&&0>l(we,Ce)?(z[xe]=we,z[he]=ne,xe=he):(z[xe]=Ce,z[Y]=ne,xe=Y);else if(he<De&&0>l(we,ne))z[xe]=we,z[he]=ne,xe=he;else break e}}return G}function l(z,G){var ne=z.sortIndex-G.sortIndex;return ne!==0?ne:z.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();o.unstable_now=function(){return h.now()-m}}var p=[],d=[],v=1,x=null,g=3,E=!1,T=!1,D=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var G=i(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=z)r(d),G.sortIndex=G.expirationTime,e(p,G);else break;G=i(d)}}function H(z){if(D=!1,w(z),!T)if(i(p)!==null)T=!0,O||(O=!0,Z());else{var G=i(d);G!==null&&ee(H,G.startTime-z)}}var O=!1,P=-1,S=5,N=-1;function X(){return M?!0:!(o.unstable_now()-N<S)}function B(){if(M=!1,O){var z=o.unstable_now();N=z;var G=!0;try{e:{T=!1,D&&(D=!1,F(P),P=-1),E=!0;var ne=g;try{t:{for(w(z),x=i(p);x!==null&&!(x.expirationTime>z&&X());){var xe=x.callback;if(typeof xe=="function"){x.callback=null,g=x.priorityLevel;var De=xe(x.expirationTime<=z);if(z=o.unstable_now(),typeof De=="function"){x.callback=De,w(z),G=!0;break t}x===i(p)&&r(p),w(z)}else r(p);x=i(p)}if(x!==null)G=!0;else{var L=i(d);L!==null&&ee(H,L.startTime-z),G=!1}}break e}finally{x=null,g=ne,E=!1}G=void 0}}finally{G?Z():O=!1}}}var Z;if(typeof k=="function")Z=function(){k(B)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ee=_e.port2;_e.port1.onmessage=B,Z=function(){Ee.postMessage(null)}}else Z=function(){y(B,0)};function ee(z,G){P=y(function(){z(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var ne=g;g=G;try{return z()}finally{g=ne}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ne=g;g=z;try{return G()}finally{g=ne}},o.unstable_scheduleCallback=function(z,G,ne){var xe=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?xe+ne:xe):ne=xe,z){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=ne+De,z={id:v++,callback:G,priorityLevel:z,startTime:ne,expirationTime:De,sortIndex:-1},ne>xe?(z.sortIndex=ne,e(d,z),i(p)===null&&z===i(d)&&(D?(F(P),P=-1):D=!0,ee(H,ne-xe))):(z.sortIndex=De,e(p,z),T||E||(T=!0,O||(O=!0,Z()))),z},o.unstable_shouldYield=X,o.unstable_wrapCallback=function(z){var G=g;return function(){var ne=g;g=G;try{return z.apply(this,arguments)}finally{g=ne}}}})(hd)),hd}var Yg;function Zy(){return Yg||(Yg=1,dd.exports=jy()),dd.exports}var pd={exports:{}},Hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function Ky(){if(jg)return Hn;jg=1;var o=Vh();function e(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,d,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Hn.createPortal=function(p,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(p,d,null,v)},Hn.flushSync=function(p){var d=h.T,v=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=d,r.p=v,r.d.f()}},Hn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,r.d.C(p,d))},Hn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Hn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var v=d.as,x=m(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?r.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:E}):v==="script"&&r.d.X(p,{crossOrigin:x,integrity:g,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Hn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=m(d.as,d.crossOrigin);r.d.M(p,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&r.d.M(p)},Hn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,x=m(v,d.crossOrigin);r.d.L(p,v,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Hn.preloadModule=function(p,d){if(typeof p=="string")if(d){var v=m(d.as,d.crossOrigin);r.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else r.d.m(p)},Hn.requestFormReset=function(p){r.d.r(p)},Hn.unstable_batchedUpdates=function(p,d){return p(d)},Hn.useFormState=function(p,d,v){return h.H.useFormState(p,d,v)},Hn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Hn.version="19.2.8",Hn}var Zg;function Qy(){if(Zg)return pd.exports;Zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),pd.exports=Ky(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Jy(){if(Kg)return Bo;Kg=1;var o=Zy(),e=Vh(),i=Qy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===s)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,s=f;break}if(R===s){_=!0,s=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,s=u;break}if(R===s){_=!0,s=f,a=u;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),k=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Symbol.for("react.client.reference");function Ee(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===_e?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case D:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case O:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case k:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:Ee(t.type)||"Memo";case S:n=t._payload,t=t._init;try{return Ee(t(n))}catch{}}return null}var ee=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},xe=[],De=-1;function L(t){return{current:t}}function Y(t){0>De||(t.current=xe[De],xe[De]=null,De--)}function Ce(t,n){De++,xe[De]=t.current,t.current=n}var he=L(null),we=L(null),te=L(null),ye=L(null);function Re(t,n){switch(Ce(te,n),Ce(we,t),Ce(he,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?fg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=fg(n),t=dg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(he),Ce(he,t)}function Ge(){Y(he),Y(we),Y(te)}function rt(t){t.memoizedState!==null&&Ce(ye,t);var n=he.current,a=dg(n,t.type);n!==a&&(Ce(we,t),Ce(he,a))}function $e(t){we.current===t&&(Y(he),Y(we)),ye.current===t&&(Y(ye),Lo._currentValue=ne)}var Nt,lt;function vt(t){if(Nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Nt=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+t+lt}var _t=!1;function gt(t,n){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(pe){var fe=pe}Reflect.construct(t,[],Ae)}else{try{Ae.call()}catch(pe){fe=pe}t.call(Ae.prototype)}}else{try{throw Error()}catch(pe){fe=pe}(Ae=t())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(pe){if(pe&&fe&&typeof pe.stack=="string")return[pe.stack,fe.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var V=_.split(`
`),se=R.split(`
`);for(u=s=0;s<V.length&&!V[s].includes("DetermineComponentFrameRoot");)s++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(s===V.length||u===se.length)for(s=V.length-1,u=se.length-1;1<=s&&0<=u&&V[s]!==se[u];)u--;for(;1<=s&&0<=u;s--,u--)if(V[s]!==se[u]){if(s!==1||u!==1)do if(s--,u--,0>u||V[s]!==se[u]){var Me=`
`+V[s].replace(" at new "," at ");return t.displayName&&Me.includes("<anonymous>")&&(Me=Me.replace("<anonymous>",t.displayName)),Me}while(1<=s&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?vt(a):""}function Wt(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return gt(t.type,!1);case 11:return gt(t.type.render,!1);case 1:return gt(t.type,!0);case 31:return vt("Activity");default:return""}}function tn(t){try{var n="",a=null;do n+=Wt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var nn=Object.prototype.hasOwnProperty,Ut=o.unstable_scheduleCallback,zt=o.unstable_cancelCallback,an=o.unstable_shouldYield,I=o.unstable_requestPaint,pt=o.unstable_now,wt=o.unstable_getCurrentPriorityLevel,U=o.unstable_ImmediatePriority,b=o.unstable_UserBlockingPriority,K=o.unstable_NormalPriority,ce=o.unstable_LowPriority,me=o.unstable_IdlePriority,Ne=o.log,Oe=o.unstable_setDisableYieldValue,ge=null,ve=null;function Le(t){if(typeof Ne=="function"&&Oe(t),ve&&typeof ve.setStrictMode=="function")try{ve.setStrictMode(ge,t)}catch{}}var He=Math.clz32?Math.clz32:Ke,ze=Math.log,Pe=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(ze(t)/Pe|0)|0}var Qe=256,it=262144,W=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?u=Ue(s):(_&=R,_!==0?u=Ue(_):a||(a=R&~t,a!==0&&(u=Ue(a))))):(R=s&~f,R!==0?u=Ue(R):_!==0?u=Ue(_):a||(a=s&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function J(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ae(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Se(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function de(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function je(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,se=t.hiddenUpdates;for(a=_&~a;0<a;){var Me=31-He(a),Ae=1<<Me;R[Me]=0,V[Me]=-1;var fe=se[Me];if(fe!==null)for(se[Me]=null,Me=0;Me<fe.length;Me++){var pe=fe[Me];pe!==null&&(pe.lane&=-536870913)}a&=~Ae}s!==0&&ot(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function ot(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-He(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Qt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-He(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function fn(t,n){var a=n&-n;return a=(a&42)!==0?1:Ai(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ai(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ri(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wi(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Pg(t.type))}function Jt(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var kn=Math.random().toString(36).slice(2),dn="__reactFiber$"+kn,rn="__reactProps$"+kn,qn="__reactContainer$"+kn,vr="__reactEvents$"+kn,el="__reactListeners$"+kn,tl="__reactHandles$"+kn,_r="__reactResources$"+kn,Na="__reactMarker$"+kn;function Ua(t){delete t[dn],delete t[rn],delete t[vr],delete t[el],delete t[tl]}function ta(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[qn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=xg(t);t!==null;){if(a=t[dn])return a;t=xg(t)}return n}t=a,a=t.parentNode}return null}function na(t){if(t=t[dn]||t[qn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function xr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function La(t){var n=t[_r];return n||(n=t[_r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vn(t){t[Na]=!0}var nl=new Set,A={};function j(t,n){ue(t,n),ue(t+"Capture",n)}function ue(t,n){for(A[t]=n,t=0;t<n.length;t++)nl.add(n[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),le={},Be={};function ke(t){return nn.call(Be,t)?!0:nn.call(le,t)?!1:oe.test(t)?Be[t]=!0:(le[t]=!0,!1)}function Ie(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function We(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Xe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ft(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Lt(t){if(!t._valueTracker){var n=ft(t)?"checked":"value";t._valueTracker=Je(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ft(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function Ht(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,s,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?xt(t,_,tt(n)):a!=null?xt(t,_,tt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+tt(R):t.removeAttribute("name")}function Fn(t,n,a,s,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Lt(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=R?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Lt(t)}function xt(t,n,a){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Mn(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ti(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function Ci(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ee(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Lt(t)}function ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Gt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Gt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Di(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&on(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&on(t,f,n[f])}function Bt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yr(t){return Oa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ia(){}var ru=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jr=null,Zr=null;function up(t){var n=na(t);if(n&&(t=n.stateNode)){var a=t[rn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[rn]||null;if(!u)throw Error(r(90));Ve(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&sn(s)}break e;case"textarea":ti(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Mn(t,!!a.multiple,n,!1)}}}var ou=!1;function fp(t,n,a){if(ou)return t(n,a);ou=!0;try{var s=t(n);return s}finally{if(ou=!1,(jr!==null||Zr!==null)&&(kl(),jr&&(n=jr,t=Zr,Zr=jr=null,up(n),t)))for(n=0;n<t.length;n++)up(t[n])}}function Zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[rn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(aa)try{var Ks={};Object.defineProperty(Ks,"passive",{get:function(){lu=!0}}),window.addEventListener("test",Ks,Ks),window.removeEventListener("test",Ks,Ks)}catch{lu=!1}var Pa=null,cu=null,il=null;function dp(){if(il)return il;var t,n=cu,a=n.length,s,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return il=u.slice(t,1<s?1-s:void 0)}function al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function hp(){return!1}function Yn(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:hp,this.isPropagationStopped=hp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Yn(Sr),Qs=x({},Sr,{view:0,detail:0}),k_=Yn(Qs),uu,fu,Js,ol=x({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(uu=t.screenX-Js.screenX,fu=t.screenY-Js.screenY):fu=uu=0,Js=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),pp=Yn(ol),X_=x({},ol,{dataTransfer:0}),W_=Yn(X_),q_=x({},Qs,{relatedTarget:0}),du=Yn(q_),Y_=x({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),j_=Yn(Y_),Z_=x({},Sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K_=Yn(Z_),Q_=x({},Sr,{data:0}),mp=Yn(Q_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ex[t])?!!n[t]:!1}function hu(){return tx}var nx=x({},Qs,{key:function(t){if(t.key){var n=J_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=Yn(nx),ax=x({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gp=Yn(ax),rx=x({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),sx=Yn(rx),ox=x({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Yn(ox),cx=x({},ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Yn(cx),fx=x({},Sr,{newState:0,oldState:0}),dx=Yn(fx),hx=[9,13,27,32],pu=aa&&"CompositionEvent"in window,$s=null;aa&&"documentMode"in document&&($s=document.documentMode);var px=aa&&"TextEvent"in window&&!$s,vp=aa&&(!pu||$s&&8<$s&&11>=$s),_p=" ",xp=!1;function yp(t,n){switch(t){case"keyup":return hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function mx(t,n){switch(t){case"compositionend":return Sp(n);case"keypress":return n.which!==32?null:(xp=!0,_p);case"textInput":return t=n.data,t===_p&&xp?null:t;default:return null}}function gx(t,n){if(Kr)return t==="compositionend"||!pu&&yp(t,n)?(t=dp(),il=cu=Pa=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vx[t.type]:n==="textarea"}function Mp(t,n,a,s){jr?Zr?Zr.push(s):Zr=[s]:jr=s,n=Kl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var eo=null,to=null;function _x(t){rg(t,0)}function ll(t){var n=xr(t);if(sn(n))return t}function Ep(t,n){if(t==="change")return n}var Tp=!1;if(aa){var mu;if(aa){var gu="oninput"in document;if(!gu){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),gu=typeof Ap.oninput=="function"}mu=gu}else mu=!1;Tp=mu&&(!document.documentMode||9<document.documentMode)}function Rp(){eo&&(eo.detachEvent("onpropertychange",wp),to=eo=null)}function wp(t){if(t.propertyName==="value"&&ll(to)){var n=[];Mp(n,to,t,su(t)),fp(_x,n)}}function xx(t,n,a){t==="focusin"?(Rp(),eo=n,to=a,eo.attachEvent("onpropertychange",wp)):t==="focusout"&&Rp()}function yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ll(to)}function Sx(t,n){if(t==="click")return ll(n)}function bx(t,n){if(t==="input"||t==="change")return ll(n)}function Mx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:Mx;function no(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!nn.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dp(t,n){var a=Cp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cp(a)}}function Np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Zt(t.document)}return n}function vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ex=aa&&"documentMode"in document&&11>=document.documentMode,Qr=null,_u=null,io=null,xu=!1;function Lp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||Qr==null||Qr!==Zt(s)||(s=Qr,"selectionStart"in s&&vu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),io&&no(io,s)||(io=s,s=Kl(_u,"onSelect"),0<s.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Qr)))}function br(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Jr={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},yu={},Op={};aa&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Mr(t){if(yu[t])return yu[t];if(!Jr[t])return t;var n=Jr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Op)return yu[t]=n[a];return t}var Pp=Mr("animationend"),zp=Mr("animationiteration"),Ip=Mr("animationstart"),Tx=Mr("transitionrun"),Ax=Mr("transitionstart"),Rx=Mr("transitioncancel"),Bp=Mr("transitionend"),Fp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Ni(t,n){Fp.set(t,n),j(n,[t])}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],$r=0,bu=0;function ul(){for(var t=$r,n=bu=$r=0;n<t;){var a=hi[n];hi[n++]=null;var s=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&Hp(a,u,f)}}function fl(t,n,a,s){hi[$r++]=t,hi[$r++]=n,hi[$r++]=a,hi[$r++]=s,bu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Mu(t,n,a,s){return fl(t,n,a,s),dl(t)}function Er(t,n){return fl(t,null,null,n),dl(t)}function Hp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-He(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function dl(t){if(50<Ao)throw Ao=0,Lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function wx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,a,s){return new wx(t,n,a,s)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var a=t.alternate;return a===null?(a=ai(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Gp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hl(t,n,a,s,u,f){var _=0;if(s=t,typeof t=="function")Eu(t)&&(_=1);else if(typeof t=="string")_=Ly(t,a,he.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ai(31,a,n,u),t.elementType=N,t.lanes=f,t;case D:return Tr(a.children,u,f,n);case M:_=8,u|=24;break;case y:return t=ai(12,a,n,u|2),t.elementType=y,t.lanes=f,t;case H:return t=ai(13,a,n,u),t.elementType=H,t.lanes=f,t;case O:return t=ai(19,a,n,u),t.elementType=O,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:_=10;break e;case F:_=9;break e;case w:_=11;break e;case P:_=14;break e;case S:_=16,s=null;break e}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=ai(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Tr(t,n,a,s){return t=ai(7,t,s,n),t.lanes=a,t}function Tu(t,n,a){return t=ai(6,t,null,n),t.lanes=a,t}function Vp(t){var n=ai(18,null,null,0);return n.stateNode=t,n}function Au(t,n,a){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var kp=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=kp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:tn(n)},kp.set(t,n),n)}return{value:t,source:n,stack:tn(n)}}var ts=[],ns=0,pl=null,ao=0,mi=[],gi=0,za=null,Gi=1,Vi="";function sa(t,n){ts[ns++]=ao,ts[ns++]=pl,pl=t,ao=n}function Xp(t,n,a){mi[gi++]=Gi,mi[gi++]=Vi,mi[gi++]=za,za=t;var s=Gi;t=Vi;var u=32-He(s)-1;s&=~(1<<u),a+=1;var f=32-He(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Gi=1<<32-He(n)+u|a<<u|s,Vi=f+t}else Gi=1<<f|a<<u|s,Vi=t}function Ru(t){t.return!==null&&(sa(t,1),Xp(t,1,0))}function wu(t){for(;t===pl;)pl=ts[--ns],ts[ns]=null,ao=ts[--ns],ts[ns]=null;for(;t===za;)za=mi[--gi],mi[gi]=null,Vi=mi[--gi],mi[gi]=null,Gi=mi[--gi],mi[gi]=null}function Wp(t,n){mi[gi++]=Gi,mi[gi++]=Vi,mi[gi++]=za,Gi=n.id,Vi=n.overflow,za=t}var Un=null,$t=null,Tt=!1,Ia=null,vi=!1,Cu=Error(r(519));function Ba(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ro(pi(n,t)),Cu}function qp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[dn]=t,n[rn]=s,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<wo.length;a++)St(wo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Fn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Ci(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||cg(n.textContent,a)?(s.popover!=null&&(St("beforetoggle",n),St("toggle",n)),s.onScroll!=null&&St("scroll",n),s.onScrollEnd!=null&&St("scrollend",n),s.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ba(t,!0)}function Yp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Un=Un.return}}function is(t){if(t!==Un)return!1;if(!Tt)return Yp(t),Tt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||jf(t.type,t.memoizedProps)),a=!a),a&&$t&&Ba(t),Yp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=_g(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));$t=_g(t)}else n===27?(n=$t,Ja(t.type)?(t=$f,$f=null,$t=t):$t=n):$t=Un?xi(t.stateNode.nextSibling):null;return!0}function Ar(){$t=Un=null,Tt=!1}function Du(){var t=Ia;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),Ia=null),t}function ro(t){Ia===null?Ia=[t]:Ia.push(t)}var Nu=L(null),Rr=null,oa=null;function Fa(t,n,a){Ce(Nu,n._currentValue),n._currentValue=a}function la(t){t._currentValue=Nu.current,Y(Nu)}function Uu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Uu(f.return,a,t),s||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Uu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function as(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=u.type;ii(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===ye.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}u=u.return}t!==null&&Lu(n,t,a,s),n.flags|=262144}function ml(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function wr(t){Rr=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return jp(Rr,t)}function gl(t,n){return Rr===null&&wr(t),jp(t,n)}function jp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(t===null)throw Error(r(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return a}var Cx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Dx=o.unstable_scheduleCallback,Nx=o.unstable_NormalPriority,_n={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Cx,data:new Map,refCount:0}}function so(t){t.refCount--,t.refCount===0&&Dx(Nx,function(){t.controller.abort()})}var oo=null,Pu=0,rs=0,ss=null;function Ux(t,n){if(oo===null){var a=oo=[];Pu=0,rs=Ff(),ss={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Pu++,n.then(Zp,Zp),n}function Zp(){if(--Pu===0&&oo!==null){ss!==null&&(ss.status="fulfilled");var t=oo;oo=null,rs=0,ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Lx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Kp=z.S;z.S=function(t,n){L0=pt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ux(t,n),Kp!==null&&Kp(t,n)};var Cr=L(null);function zu(){var t=Cr.current;return t!==null?t:Kt.pooledCache}function vl(t,n){n===null?Ce(Cr,Cr.current):Ce(Cr,n.pool)}function Qp(){var t=zu();return t===null?null:{parent:_n._currentValue,pool:t}}var os=Error(r(460)),Iu=Error(r(474)),_l=Error(r(542)),xl={then:function(){}};function Jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $p(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tm(t),t;default:if(typeof n.status=="string")n.then(ia,ia);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,tm(t),t}throw Nr=n,os}}function Dr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Nr=a,os):a}}var Nr=null;function em(){if(Nr===null)throw Error(r(459));var t=Nr;return Nr=null,t}function tm(t){if(t===os||t===_l)throw Error(r(483))}var ls=null,lo=0;function yl(t){var n=lo;return lo+=1,ls===null&&(ls=[]),$p(ls,t,n)}function co(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function nm(t){function n(Q,q){if(t){var re=Q.deletions;re===null?(Q.deletions=[q],Q.flags|=16):re.push(q)}}function a(Q,q){if(!t)return null;for(;q!==null;)n(Q,q),q=q.sibling;return null}function s(Q){for(var q=new Map;Q!==null;)Q.key!==null?q.set(Q.key,Q):q.set(Q.index,Q),Q=Q.sibling;return q}function u(Q,q){return Q=ra(Q,q),Q.index=0,Q.sibling=null,Q}function f(Q,q,re){return Q.index=re,t?(re=Q.alternate,re!==null?(re=re.index,re<q?(Q.flags|=67108866,q):re):(Q.flags|=67108866,q)):(Q.flags|=1048576,q)}function _(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,q,re,Te){return q===null||q.tag!==6?(q=Tu(re,Q.mode,Te),q.return=Q,q):(q=u(q,re),q.return=Q,q)}function V(Q,q,re,Te){var nt=re.type;return nt===D?Me(Q,q,re.props.children,Te,re.key):q!==null&&(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===S&&Dr(nt)===q.type)?(q=u(q,re.props),co(q,re),q.return=Q,q):(q=hl(re.type,re.key,re.props,null,Q.mode,Te),co(q,re),q.return=Q,q)}function se(Q,q,re,Te){return q===null||q.tag!==4||q.stateNode.containerInfo!==re.containerInfo||q.stateNode.implementation!==re.implementation?(q=Au(re,Q.mode,Te),q.return=Q,q):(q=u(q,re.children||[]),q.return=Q,q)}function Me(Q,q,re,Te,nt){return q===null||q.tag!==7?(q=Tr(re,Q.mode,Te,nt),q.return=Q,q):(q=u(q,re),q.return=Q,q)}function Ae(Q,q,re){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Tu(""+q,Q.mode,re),q.return=Q,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case E:return re=hl(q.type,q.key,q.props,null,Q.mode,re),co(re,q),re.return=Q,re;case T:return q=Au(q,Q.mode,re),q.return=Q,q;case S:return q=Dr(q),Ae(Q,q,re)}if(ee(q)||Z(q))return q=Tr(q,Q.mode,re,null),q.return=Q,q;if(typeof q.then=="function")return Ae(Q,yl(q),re);if(q.$$typeof===k)return Ae(Q,gl(Q,q),re);Sl(Q,q)}return null}function fe(Q,q,re,Te){var nt=q!==null?q.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return nt!==null?null:R(Q,q,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case E:return re.key===nt?V(Q,q,re,Te):null;case T:return re.key===nt?se(Q,q,re,Te):null;case S:return re=Dr(re),fe(Q,q,re,Te)}if(ee(re)||Z(re))return nt!==null?null:Me(Q,q,re,Te,null);if(typeof re.then=="function")return fe(Q,q,yl(re),Te);if(re.$$typeof===k)return fe(Q,q,gl(Q,re),Te);Sl(Q,re)}return null}function pe(Q,q,re,Te,nt){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return Q=Q.get(re)||null,R(q,Q,""+Te,nt);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case E:return Q=Q.get(Te.key===null?re:Te.key)||null,V(q,Q,Te,nt);case T:return Q=Q.get(Te.key===null?re:Te.key)||null,se(q,Q,Te,nt);case S:return Te=Dr(Te),pe(Q,q,re,Te,nt)}if(ee(Te)||Z(Te))return Q=Q.get(re)||null,Me(q,Q,Te,nt,null);if(typeof Te.then=="function")return pe(Q,q,re,yl(Te),nt);if(Te.$$typeof===k)return pe(Q,q,re,gl(q,Te),nt);Sl(q,Te)}return null}function qe(Q,q,re,Te){for(var nt=null,Ot=null,Ze=q,ht=q=0,Mt=null;Ze!==null&&ht<re.length;ht++){Ze.index>ht?(Mt=Ze,Ze=null):Mt=Ze.sibling;var Pt=fe(Q,Ze,re[ht],Te);if(Pt===null){Ze===null&&(Ze=Mt);break}t&&Ze&&Pt.alternate===null&&n(Q,Ze),q=f(Pt,q,ht),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt,Ze=Mt}if(ht===re.length)return a(Q,Ze),Tt&&sa(Q,ht),nt;if(Ze===null){for(;ht<re.length;ht++)Ze=Ae(Q,re[ht],Te),Ze!==null&&(q=f(Ze,q,ht),Ot===null?nt=Ze:Ot.sibling=Ze,Ot=Ze);return Tt&&sa(Q,ht),nt}for(Ze=s(Ze);ht<re.length;ht++)Mt=pe(Ze,Q,ht,re[ht],Te),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?ht:Mt.key),q=f(Mt,q,ht),Ot===null?nt=Mt:Ot.sibling=Mt,Ot=Mt);return t&&Ze.forEach(function(ir){return n(Q,ir)}),Tt&&sa(Q,ht),nt}function at(Q,q,re,Te){if(re==null)throw Error(r(151));for(var nt=null,Ot=null,Ze=q,ht=q=0,Mt=null,Pt=re.next();Ze!==null&&!Pt.done;ht++,Pt=re.next()){Ze.index>ht?(Mt=Ze,Ze=null):Mt=Ze.sibling;var ir=fe(Q,Ze,Pt.value,Te);if(ir===null){Ze===null&&(Ze=Mt);break}t&&Ze&&ir.alternate===null&&n(Q,Ze),q=f(ir,q,ht),Ot===null?nt=ir:Ot.sibling=ir,Ot=ir,Ze=Mt}if(Pt.done)return a(Q,Ze),Tt&&sa(Q,ht),nt;if(Ze===null){for(;!Pt.done;ht++,Pt=re.next())Pt=Ae(Q,Pt.value,Te),Pt!==null&&(q=f(Pt,q,ht),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt);return Tt&&sa(Q,ht),nt}for(Ze=s(Ze);!Pt.done;ht++,Pt=re.next())Pt=pe(Ze,Q,ht,Pt.value,Te),Pt!==null&&(t&&Pt.alternate!==null&&Ze.delete(Pt.key===null?ht:Pt.key),q=f(Pt,q,ht),Ot===null?nt=Pt:Ot.sibling=Pt,Ot=Pt);return t&&Ze.forEach(function(Xy){return n(Q,Xy)}),Tt&&sa(Q,ht),nt}function jt(Q,q,re,Te){if(typeof re=="object"&&re!==null&&re.type===D&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case E:e:{for(var nt=re.key;q!==null;){if(q.key===nt){if(nt=re.type,nt===D){if(q.tag===7){a(Q,q.sibling),Te=u(q,re.props.children),Te.return=Q,Q=Te;break e}}else if(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===S&&Dr(nt)===q.type){a(Q,q.sibling),Te=u(q,re.props),co(Te,re),Te.return=Q,Q=Te;break e}a(Q,q);break}else n(Q,q);q=q.sibling}re.type===D?(Te=Tr(re.props.children,Q.mode,Te,re.key),Te.return=Q,Q=Te):(Te=hl(re.type,re.key,re.props,null,Q.mode,Te),co(Te,re),Te.return=Q,Q=Te)}return _(Q);case T:e:{for(nt=re.key;q!==null;){if(q.key===nt)if(q.tag===4&&q.stateNode.containerInfo===re.containerInfo&&q.stateNode.implementation===re.implementation){a(Q,q.sibling),Te=u(q,re.children||[]),Te.return=Q,Q=Te;break e}else{a(Q,q);break}else n(Q,q);q=q.sibling}Te=Au(re,Q.mode,Te),Te.return=Q,Q=Te}return _(Q);case S:return re=Dr(re),jt(Q,q,re,Te)}if(ee(re))return qe(Q,q,re,Te);if(Z(re)){if(nt=Z(re),typeof nt!="function")throw Error(r(150));return re=nt.call(re),at(Q,q,re,Te)}if(typeof re.then=="function")return jt(Q,q,yl(re),Te);if(re.$$typeof===k)return jt(Q,q,gl(Q,re),Te);Sl(Q,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,q!==null&&q.tag===6?(a(Q,q.sibling),Te=u(q,re),Te.return=Q,Q=Te):(a(Q,q),Te=Tu(re,Q.mode,Te),Te.return=Q,Q=Te),_(Q)):a(Q,q)}return function(Q,q,re,Te){try{lo=0;var nt=jt(Q,q,re,Te);return ls=null,nt}catch(Ze){if(Ze===os||Ze===_l)throw Ze;var Ot=ai(29,Ze,null,Q.mode);return Ot.lanes=Te,Ot.return=Q,Ot}finally{}}}var Ur=nm(!0),im=nm(!1),Ha=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(It&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=dl(t),Hp(t,null,a),n}return fl(t,s,n,a),dl(t)}function uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Qt(t,a)}}function Hu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gu=!1;function fo(){if(Gu){var t=ss;if(t!==null)throw t}}function ho(t,n,a,s){Gu=!1;var u=t.updateQueue;Ha=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,se=V.next;V.next=null,_===null?f=se:_.next=se,_=V;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,R=Me.lastBaseUpdate,R!==_&&(R===null?Me.firstBaseUpdate=se:R.next=se,Me.lastBaseUpdate=V))}if(f!==null){var Ae=u.baseState;_=0,Me=se=V=null,R=f;do{var fe=R.lane&-536870913,pe=fe!==R.lane;if(pe?(bt&fe)===fe:(s&fe)===fe){fe!==0&&fe===rs&&(Gu=!0),Me!==null&&(Me=Me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,at=R;fe=n;var jt=a;switch(at.tag){case 1:if(qe=at.payload,typeof qe=="function"){Ae=qe.call(jt,Ae,fe);break e}Ae=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=at.payload,fe=typeof qe=="function"?qe.call(jt,Ae,fe):qe,fe==null)break e;Ae=x({},Ae,fe);break e;case 2:Ha=!0}}fe=R.callback,fe!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=u.callbacks,pe===null?u.callbacks=[fe]:pe.push(fe))}else pe={lane:fe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Me===null?(se=Me=pe,V=Ae):Me=Me.next=pe,_|=fe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;pe=R,R=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);Me===null&&(V=Ae),u.baseState=V,u.firstBaseUpdate=se,u.lastBaseUpdate=Me,f===null&&(u.shared.lanes=0),Ya|=_,t.lanes=_,t.memoizedState=Ae}}function am(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function rm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)am(a[t],n)}var cs=L(null),bl=L(0);function sm(t,n){t=va,Ce(bl,t),Ce(cs,n),va=t|n.baseLanes}function Vu(){Ce(bl,va),Ce(cs,cs.current)}function ku(){va=bl.current,Y(cs),Y(bl)}var ri=L(null),_i=null;function ka(t){var n=t.alternate;Ce(mn,mn.current&1),Ce(ri,t),_i===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(_i=t)}function Xu(t){Ce(mn,mn.current),Ce(ri,t),_i===null&&(_i=t)}function om(t){t.tag===22?(Ce(mn,mn.current),Ce(ri,t),_i===null&&(_i=t)):Xa()}function Xa(){Ce(mn,mn.current),Ce(ri,ri.current)}function si(t){Y(ri),_i===t&&(_i=null),Y(mn)}var mn=L(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,dt=null,qt=null,xn=null,El=!1,us=!1,Lr=!1,Tl=0,po=0,fs=null,Ox=0;function hn(){throw Error(r(321))}function Wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function qu(t,n,a,s,u,f){return ca=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Xm:lf,Lr=!1,f=a(s,u),Lr=!1,us&&(f=cm(n,a,s,u)),lm(t),f}function lm(t){z.H=vo;var n=qt!==null&&qt.next!==null;if(ca=0,xn=qt=dt=null,El=!1,po=0,fs=null,n)throw Error(r(300));t===null||yn||(t=t.dependencies,t!==null&&ml(t)&&(yn=!0))}function cm(t,n,a,s){dt=t;var u=0;do{if(us&&(fs=null),po=0,us=!1,25<=u)throw Error(r(301));if(u+=1,xn=qt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Wm,f=n(a,s)}while(us);return f}function Px(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?mo(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Yu(){var t=Tl!==0;return Tl=0,t}function ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}ca=0,xn=qt=dt=null,us=!1,po=Tl=0,fs=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?dt.memoizedState=xn=t:xn=xn.next=t,xn}function gn(){if(qt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=xn===null?dt.memoizedState:xn.next;if(n!==null)xn=n,qt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},xn===null?dt.memoizedState=xn=t:xn=xn.next=t}return xn}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mo(t){var n=po;return po+=1,fs===null&&(fs=[]),t=$p(fs,t,n),n=dt,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Xm:lf),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mo(t);if(t.$$typeof===k)return Ln(t)}throw Error(r(438,String(t)))}function Ku(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=dt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=X;return n.index++,a}function ua(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=gn();return Qu(n,qt,t)}function Qu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,V=null,se=n,Me=!1;do{var Ae=se.lane&-536870913;if(Ae!==se.lane?(bt&Ae)===Ae:(ca&Ae)===Ae){var fe=se.revertLane;if(fe===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Ae===rs&&(Me=!0);else if((ca&fe)===fe){se=se.next,fe===rs&&(Me=!0);continue}else Ae={lane:0,revertLane:se.revertLane,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(R=V=Ae,_=f):V=V.next=Ae,dt.lanes|=fe,Ya|=fe;Ae=se.action,Lr&&a(f,Ae),f=se.hasEagerState?se.eagerState:a(f,Ae)}else fe={lane:Ae,revertLane:se.revertLane,gesture:se.gesture,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},V===null?(R=V=fe,_=f):V=V.next=fe,dt.lanes|=Ae,Ya|=Ae;se=se.next}while(se!==null&&se!==n);if(V===null?_=f:V.next=R,!ii(f,t.memoizedState)&&(yn=!0,Me&&(a=ss,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=V,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ju(t){var n=gn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ii(f,n.memoizedState)||(yn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function um(t,n,a){var s=dt,u=gn(),f=Tt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ii((qt||u).memoizedState,a);if(_&&(u.memoizedState=a,yn=!0),u=u.queue,tf(hm.bind(null,s,u,t),[t]),u.getSnapshot!==n||_||xn!==null&&xn.memoizedState.tag&1){if(s.flags|=2048,ds(9,{destroy:void 0},dm.bind(null,s,u,a,n),null),Kt===null)throw Error(r(349));f||(ca&127)!==0||fm(s,n,a)}return a}function fm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Al(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function dm(t,n,a,s){n.value=a,n.getSnapshot=s,pm(n)&&mm(t)}function hm(t,n,a){return a(function(){pm(n)&&mm(t)})}function pm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function mm(t){var n=Er(t,2);n!==null&&Jn(n,t,2)}function $u(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Lr){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function gm(t,n,a,s){return t.baseState=a,Qu(t,qt,typeof s=="function"?s:ua)}function zx(t,n,a,s,u){if(Nl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,vm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function vm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var R=a(u,s),V=z.S;V!==null&&V(_,R),_m(t,n,R)}catch(se){ef(t,n,se)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(u,s),_m(t,n,f)}catch(se){ef(t,n,se)}}function _m(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){xm(t,n,s)},function(s){return ef(t,n,s)}):xm(t,n,a)}function xm(t,n,a){n.status="fulfilled",n.value=a,ym(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,vm(t,a)))}function ef(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,ym(n),n=n.next;while(n!==s)}t.action=null}function ym(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Sm(t,n){return n}function bm(t,n){if(Tt){var a=Kt.formState;if(a!==null){e:{var s=dt;if(Tt){if($t){t:{for(var u=$t,f=vi;u.nodeType!==8;){if(!f){u=null;break t}if(u=xi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=xi(u.nextSibling),s=u.data==="F!";break e}}Ba(s)}s=!1}s&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=s,a=Gm.bind(null,dt,s),s.dispatch=a,s=$u(!1),f=of.bind(null,dt,!1,s.queue),s=Xn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=zx.bind(null,dt,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mm(t){var n=gn();return Em(n,qt,t)}function Em(t,n,a){if(n=Qu(t,n,Sm)[0],t=wl(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=mo(n)}catch(_){throw _===os?_l:_}else s=n;n=gn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,ds(9,{destroy:void 0},Ix.bind(null,u,a),null)),[s,f,t]}function Ix(t,n){t.action=n}function Tm(t){var n=gn(),a=qt;if(a!==null)return Em(n,a,t);gn(),n=n.memoizedState,a=gn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ds(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Al(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Am(){return gn().memoizedState}function Cl(t,n,a,s){var u=Xn();dt.flags|=t,u.memoizedState=ds(1|n,{destroy:void 0},a,s===void 0?null:s)}function Dl(t,n,a,s){var u=gn();s=s===void 0?null:s;var f=u.memoizedState.inst;qt!==null&&s!==null&&Wu(s,qt.memoizedState.deps)?u.memoizedState=ds(n,f,a,s):(dt.flags|=t,u.memoizedState=ds(1|n,f,a,s))}function Rm(t,n){Cl(8390656,8,t,n)}function tf(t,n){Dl(2048,8,t,n)}function Bx(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Al(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function wm(t){var n=gn().memoizedState;return Bx({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Cm(t,n){return Dl(4,2,t,n)}function Dm(t,n){return Dl(4,4,t,n)}function Nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Um(t,n,a){a=a!=null?a.concat([t]):null,Dl(4,4,Nm.bind(null,n,t),a)}function nf(){}function Lm(t,n){var a=gn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Wu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Om(t,n){var a=gn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Wu(n,s[1]))return s[0];if(s=t(),Lr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[s,n],s}function af(t,n,a){return a===void 0||(ca&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=P0(),dt.lanes|=t,Ya|=t,a)}function Pm(t,n,a,s){return ii(a,n)?a:cs.current!==null?(t=af(t,a,s),ii(t,n)||(yn=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(bt&261930)===0?(yn=!0,t.memoizedState=a):(t=P0(),dt.lanes|=t,Ya|=t,n)}function zm(t,n,a,s,u){var f=G.p;G.p=f!==0&&8>f?f:8;var _=z.T,R={};z.T=R,of(t,!1,n,a);try{var V=u(),se=z.S;if(se!==null&&se(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var Me=Lx(V,s);go(t,n,Me,ci(t))}else go(t,n,s,ci(t))}catch(Ae){go(t,n,{then:function(){},status:"rejected",reason:Ae},ci())}finally{G.p=f,_!==null&&R.types!==null&&(_.types=R.types),z.T=_}}function Fx(){}function rf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Im(t).queue;zm(t,u,n,ne,a===null?Fx:function(){return Bm(t),a(s)})}function Im(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Bm(t){var n=Im(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},ci())}function sf(){return Ln(Lo)}function Fm(){return gn().memoizedState}function Hm(){return gn().memoizedState}function Hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=Ga(a);var s=Va(n,t,a);s!==null&&(Jn(s,n,a),uo(s,n,a)),n={cache:Ou()},t.payload=n;return}n=n.return}}function Gx(t,n,a){var s=ci();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(t)?Vm(n,a):(a=Mu(t,n,a,s),a!==null&&(Jn(a,t,s),km(a,n,s)))}function Gm(t,n,a){var s=ci();go(t,n,a,s)}function go(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(t))Vm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,ii(R,_))return fl(t,n,u,0),Kt===null&&ul(),!1}catch{}finally{}if(a=Mu(t,n,u,s),a!==null)return Jn(a,t,s),km(a,n,s),!0}return!1}function of(t,n,a,s){if(s={lane:2,revertLane:Ff(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nl(t)){if(n)throw Error(r(479))}else n=Mu(t,a,s,2),n!==null&&Jn(n,t,2)}function Nl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Vm(t,n){us=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function km(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Qt(t,a)}}var vo={readContext:Ln,use:Rl,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};vo.useEffectEvent=hn;var Xm={readContext:Ln,use:Rl,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Ln,useEffect:Rm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,Nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var s=t();if(Lr){Le(!0);try{t()}finally{Le(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Xn();if(a!==void 0){var u=a(n);if(Lr){Le(!0);try{a(n)}finally{Le(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Gx.bind(null,dt,t),[s.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=$u(t);var n=t.queue,a=Gm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=Xn();return af(a,t,n)},useTransition:function(){var t=$u(!1);return t=zm.bind(null,dt,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=dt,u=Xn();if(Tt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Kt===null)throw Error(r(349));(bt&127)!==0||fm(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Rm(hm.bind(null,s,f,t),[t]),s.flags|=2048,ds(9,{destroy:void 0},dm.bind(null,s,f,a,n),null),a},useId:function(){var t=Xn(),n=Kt.identifierPrefix;if(Tt){var a=Vi,s=Gi;a=(s&~(1<<32-He(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ox++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:bm,useActionState:bm,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ku,useCacheRefresh:function(){return Xn().memoizedState=Hx.bind(null,dt)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:Ln,use:Rl,useCallback:Lm,useContext:Ln,useEffect:tf,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:Dm,useMemo:Om,useReducer:wl,useRef:Am,useState:function(){return wl(ua)},useDebugValue:nf,useDeferredValue:function(t,n){var a=gn();return Pm(a,qt.memoizedState,t,n)},useTransition:function(){var t=wl(ua)[0],n=gn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:um,useId:Fm,useHostTransitionStatus:sf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=gn();return gm(a,qt,t,n)},useMemoCache:Ku,useCacheRefresh:Hm};lf.useEffectEvent=wm;var Wm={readContext:Ln,use:Rl,useCallback:Lm,useContext:Ln,useEffect:tf,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:Dm,useMemo:Om,useReducer:Ju,useRef:Am,useState:function(){return Ju(ua)},useDebugValue:nf,useDeferredValue:function(t,n){var a=gn();return qt===null?af(a,t,n):Pm(a,qt.memoizedState,t,n)},useTransition:function(){var t=Ju(ua)[0],n=gn().memoizedState;return[typeof t=="boolean"?t:mo(t),n]},useSyncExternalStore:um,useId:Fm,useHostTransitionStatus:sf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t,n){var a=gn();return qt!==null?gm(a,qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Hm};Wm.useEffectEvent=wm;function cf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ci(),u=Ga(s);u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,s),n!==null&&(Jn(n,t,s),uo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ci(),u=Ga(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Va(t,u,s),n!==null&&(Jn(n,t,s),uo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),s=Ga(a);s.tag=2,n!=null&&(s.callback=n),n=Va(t,s,a),n!==null&&(Jn(n,t,a),uo(n,t,a))}};function qm(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!no(a,s)||!no(u,f):!0}function Ym(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function Or(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function jm(t){cl(t)}function Zm(t){console.error(t)}function Km(t){cl(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Qm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Jm(t){return t=Ga(t),t.tag=3,t}function $m(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Qm(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Qm(n,a,s),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function Vx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&as(n,a,u,!0),a=ri.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?Xl():a.alternate===null&&pn===0&&(pn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),zf(t,s,u)),!1;case 22:return a.flags|=65536,s===xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),zf(t,s,u)),!1}throw Error(r(435,a.tag))}return zf(t,s,u),Xl(),!1}if(Tt)return n=ri.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Cu&&(t=Error(r(422),{cause:s}),ro(pi(t,a)))):(s!==Cu&&(n=Error(r(423),{cause:s}),ro(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=pi(s,a),u=ff(t.stateNode,s,u),Hu(t,u),pn!==4&&(pn=2)),!1;var f=Error(r(520),{cause:s});if(f=pi(f,a),To===null?To=[f]:To.push(f),pn!==4&&(pn=2),n===null)return!0;s=pi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,s,t),Hu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ja===null||!ja.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Jm(u),$m(u,t,a,s),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var df=Error(r(461)),yn=!1;function On(t,n,a,s){n.child=t===null?im(n,null,a,s):Ur(n,t.child,a,s)}function e0(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var R in s)R!=="ref"&&(_[R]=s[R])}else _=s;return wr(n),s=qu(t,n,a,_,f,u),R=Yu(),t!==null&&!yn?(ju(t,n,u),fa(t,n,u)):(Tt&&R&&Ru(n),n.flags|=1,On(t,n,s,u),n.child)}function t0(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,n0(t,n,f,s,u)):(t=hl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!yf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(_,s)&&t.ref===n.ref)return fa(t,n,u)}return n.flags|=1,t=ra(f,s),t.ref=n.ref,t.return=n,n.child=t}function n0(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(no(f,s)&&t.ref===n.ref)if(yn=!1,n.pendingProps=s=f,yf(t,u))(t.flags&131072)!==0&&(yn=!0);else return n.lanes=t.lanes,fa(t,n,u)}return hf(t,n,a,s,u)}function i0(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return a0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?sm(n,f):Vu(),om(n);else return s=n.lanes=536870912,a0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(vl(n,f.cachePool),sm(n,f),Xa(),n.memoizedState=null):(t!==null&&vl(n,null),Vu(),Xa());return On(t,n,u,a),n.child}function _o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function a0(t,n,a,s,u){var f=zu();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&vl(n,null),Vu(),om(n),t!==null&&as(t,n,s,!0),n.childLanes=u,null}function Ll(t,n){return n=Pl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function r0(t,n,a){return Ur(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function kx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(s.mode==="hidden")return t=Ll(n,s),n.lanes=536870912,_o(null,t);if(Xu(n),(t=$t)?(t=vg(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Vp(t),a.return=n,n.child=a,Un=n,$t=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return Ll(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=r0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(yn||as(t,n,a,!1),u=(a&t.childLanes)!==0,yn||u){if(s=Kt,s!==null&&(_=fn(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Er(t,_),Jn(s,t,_),df;Xl(),n=r0(t,n,a)}else t=f.treeContext,$t=xi(_.nextSibling),Un=n,Tt=!0,Ia=null,vi=!1,t!==null&&Wp(n,t),n=Ll(n,s),n.flags|=4096;return n}return t=ra(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ol(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function hf(t,n,a,s,u){return wr(n),a=qu(t,n,a,s,void 0,u),s=Yu(),t!==null&&!yn?(ju(t,n,u),fa(t,n,u)):(Tt&&s&&Ru(n),n.flags|=1,On(t,n,a,u),n.child)}function s0(t,n,a,s,u,f){return wr(n),n.updateQueue=null,a=cm(n,s,a,u),lm(t),s=Yu(),t!==null&&!yn?(ju(t,n,f),fa(t,n,f)):(Tt&&s&&Ru(n),n.flags|=1,On(t,n,a,f),n.child)}function o0(t,n,a,s,u){if(wr(n),n.stateNode===null){var f=es,_=a.contextType;typeof _=="object"&&_!==null&&(f=Ln(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Bu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Ln(_):es,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(cf(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&uf.enqueueReplaceState(f,f.state,null),ho(n,s,f,u),fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,V=Or(a,R);f.props=V;var se=f.context,Me=a.contextType;_=es,typeof Me=="object"&&Me!==null&&(_=Ln(Me));var Ae=a.getDerivedStateFromProps;Me=typeof Ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||se!==_)&&Ym(n,f,s,_),Ha=!1;var fe=n.memoizedState;f.state=fe,ho(n,s,f,u),fo(),se=n.memoizedState,R||fe!==se||Ha?(typeof Ae=="function"&&(cf(n,a,Ae,s),se=n.memoizedState),(V=Ha||qm(n,a,V,s,fe,se,_))?(Me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=se),f.props=s,f.state=se,f.context=_,s=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Fu(t,n),_=n.memoizedProps,Me=Or(a,_),f.props=Me,Ae=n.pendingProps,fe=f.context,se=a.contextType,V=es,typeof se=="object"&&se!==null&&(V=Ln(se)),R=a.getDerivedStateFromProps,(se=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Ae||fe!==V)&&Ym(n,f,s,V),Ha=!1,fe=n.memoizedState,f.state=fe,ho(n,s,f,u),fo();var pe=n.memoizedState;_!==Ae||fe!==pe||Ha||t!==null&&t.dependencies!==null&&ml(t.dependencies)?(typeof R=="function"&&(cf(n,a,R,s),pe=n.memoizedState),(Me=Ha||qm(n,a,Me,s,fe,pe,V)||t!==null&&t.dependencies!==null&&ml(t.dependencies))?(se||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,pe,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,pe,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=pe),f.props=s,f.state=pe,f.context=V,s=Me):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ol(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ur(n,t.child,null,u),n.child=Ur(n,null,a,u)):On(t,n,a,u),n.memoizedState=f.state,t=n.child):t=fa(t,n,u),t}function l0(t,n,a,s){return Ar(),n.flags|=256,On(t,n,a,s),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:Qp()}}function gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function c0(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?ka(n):Xa(),(t=$t)?(t=vg(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=Vp(t),a.return=n,n.child=a,Un=n,$t=null)):t=null,t===null)throw Ba(n);return Jf(t)?n.lanes=32:n.lanes=536870912,null}var R=s.children;return s=s.fallback,u?(Xa(),u=n.mode,R=Pl({mode:"hidden",children:R},u),s=Tr(s,u,a,null),R.return=n,s.return=n,R.sibling=s,n.child=R,s=n.child,s.memoizedState=mf(a),s.childLanes=gf(t,_,a),n.memoizedState=pf,_o(null,s)):(ka(n),vf(n,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(f)n.flags&256?(ka(n),n.flags&=-257,n=_f(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),R=s.fallback,u=n.mode,s=Pl({mode:"visible",children:s.children},u),R=Tr(R,u,a,null),R.flags|=2,s.return=n,R.return=n,s.sibling=R,n.child=s,Ur(n,t.child,null,a),s=n.child,s.memoizedState=mf(a),s.childLanes=gf(t,_,a),n.memoizedState=pf,n=_o(null,s));else if(ka(n),Jf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var se=_.dgst;_=se,s=Error(r(419)),s.stack="",s.digest=_,ro({value:s,source:null,stack:null}),n=_f(t,n,a)}else if(yn||as(t,n,a,!1),_=(a&t.childLanes)!==0,yn||_){if(_=Kt,_!==null&&(s=fn(_,a),s!==0&&s!==V.retryLane))throw V.retryLane=s,Er(t,s),Jn(_,t,s),df;Qf(R)||Xl(),n=_f(t,n,a)}else Qf(R)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,$t=xi(R.nextSibling),Un=n,Tt=!0,Ia=null,vi=!1,t!==null&&Wp(n,t),n=vf(n,s.children),n.flags|=4096);return n}return u?(Xa(),R=s.fallback,u=n.mode,V=t.child,se=V.sibling,s=ra(V,{mode:"hidden",children:s.children}),s.subtreeFlags=V.subtreeFlags&65011712,se!==null?R=ra(se,R):(R=Tr(R,u,a,null),R.flags|=2),R.return=n,s.return=n,s.sibling=R,n.child=s,_o(null,s),s=n.child,R=t.child.memoizedState,R===null?R=mf(a):(u=R.cachePool,u!==null?(V=_n._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Qp(),R={baseLanes:R.baseLanes|a,cachePool:u}),s.memoizedState=R,s.childLanes=gf(t,_,a),n.memoizedState=pf,_o(t.child,s)):(ka(n),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function vf(t,n){return n=Pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Pl(t,n){return t=ai(22,t,null,n),t.lanes=0,t}function _f(t,n,a){return Ur(n,t.child,null,a),t=vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function u0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Uu(t.return,n,a)}function xf(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function f0(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=mn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Ce(mn,_),On(t,n,s,a),s=Tt?ao:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,a,n);else if(t.tag===19)u0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xf(n,!0,a,null,f,s);break;case"together":xf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(as(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ml(t)))}function Xx(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),Fa(n,_n,t.memoizedState.cache),Ar();break;case 27:case 5:rt(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?c0(t,n,a):(ka(n),t=fa(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(as(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return f0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ce(mn,mn.current),s)break;return null;case 22:return n.lanes=0,i0(t,n,a,n.pendingProps);case 24:Fa(n,_n,t.memoizedState.cache)}return fa(t,n,a)}function d0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)yn=!0;else{if(!yf(t,a)&&(n.flags&128)===0)return yn=!1,Xx(t,n,a);yn=(t.flags&131072)!==0}else yn=!1,Tt&&(n.flags&1048576)!==0&&Xp(n,ao,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=Dr(n.elementType),n.type=t,typeof t=="function")Eu(t)?(s=Or(t,s),n.tag=1,n=o0(null,n,t,s,a)):(n.tag=0,n=hf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=e0(null,n,t,s,a);break e}else if(u===P){n.tag=14,n=t0(null,n,t,s,a);break e}}throw n=Ee(t)||t,Error(r(306,n,""))}}return n;case 0:return hf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Or(s,n.pendingProps),o0(t,n,s,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Fu(t,n),ho(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Fa(n,_n,s),s!==f.cache&&Lu(n,[_n],a,!0),fo(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=l0(t,n,s,a);break e}else if(s!==u){u=pi(Error(r(424)),n),ro(u),n=l0(t,n,s,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=xi(t.firstChild),Un=n,Tt=!0,Ia=null,vi=!0,a=im(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ar(),s===u){n=fa(t,n,a);break e}On(t,n,s,a)}n=n.child}return n;case 26:return Ol(t,n),t===null?(a=Mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,s=Ql(te.current).createElement(a),s[dn]=n,s[rn]=t,Pn(s,a,t),vn(s),n.stateNode=s):n.memoizedState=Mg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return rt(n),t===null&&Tt&&(s=n.stateNode=yg(n.type,n.pendingProps,te.current),Un=n,vi=!0,u=$t,Ja(n.type)?($f=u,$t=xi(s.firstChild)):$t=u),On(t,n,n.pendingProps.children,a),Ol(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=s=$t)&&(s=yy(s,n.type,n.pendingProps,vi),s!==null?(n.stateNode=s,Un=n,$t=xi(s.firstChild),vi=!1,u=!0):u=!1),u||Ba(n)),rt(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,jf(u,f)?s=null:_!==null&&jf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(t,n,Px,null,null,a),Lo._currentValue=u),Ol(t,n),On(t,n,s,a),n.child;case 6:return t===null&&Tt&&((t=a=$t)&&(a=Sy(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Un=n,$t=null,t=!0):t=!1),t||Ba(n)),null;case 13:return c0(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ur(n,null,s,a):On(t,n,s,a),n.child;case 11:return e0(t,n,n.type,n.pendingProps,a);case 7:return On(t,n,n.pendingProps,a),n.child;case 8:return On(t,n,n.pendingProps.children,a),n.child;case 12:return On(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Fa(n,n.type,s.value),On(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,wr(n),u=Ln(u),s=s(u),n.flags|=1,On(t,n,s,a),n.child;case 14:return t0(t,n,n.type,n.pendingProps,a);case 15:return n0(t,n,n.type,n.pendingProps,a);case 19:return f0(t,n,a);case 31:return kx(t,n,a);case 22:return i0(t,n,a,n.pendingProps);case 24:return wr(n),s=Ln(_n),t===null?(u=zu(),u===null&&(u=Kt,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Bu(n),Fa(n,_n,u)):((t.lanes&a)!==0&&(Fu(t,n),ho(n,null,null,a),fo()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,_n,s)):(s=f.cache,Fa(n,_n,s),s!==u.cache&&Lu(n,[_n],a,!0))),On(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function da(t){t.flags|=4}function Sf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(F0())t.flags|=8192;else throw Nr=xl,Iu}else t.flags&=-16777217}function h0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wg(n))if(F0())t.flags|=8192;else throw Nr=xl,Iu}function zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?$():536870912,t.lanes|=n,gs|=n)}function xo(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Wx(t,n,a){var s=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),la(_n),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(is(n)?da(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(da(n),f!==null?(en(n),h0(n,f)):(en(n),Sf(n,u,null,s,a))):f?f!==t.memoizedState?(da(n),en(n),h0(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&da(n),en(n),Sf(n,u,t,s,a)),null;case 27:if($e(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&da(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),null}t=he.current,is(n)?qp(n):(t=yg(u,s,a),n.stateNode=t,da(n))}return en(n),null;case 5:if($e(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&da(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return en(n),null}if(f=he.current,is(n))qp(n);else{var _=Ql(te.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[dn]=n,f[rn]=s;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Pn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&da(n)}}return en(n),Sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&da(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,is(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=Un,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||cg(t.nodeValue,a)),t||Ba(n,!0)}else t=Ql(t).createTextNode(s),t[dn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=is(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return en(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=is(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[dn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zl(n,n.updateQueue),en(n),null);case 4:return Ge(),t===null&&kf(n.stateNode.containerInfo),en(n),null;case 10:return la(n.type),en(n),null;case 19:if(Y(mn),s=n.memoizedState,s===null)return en(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)xo(s,!1);else{if(pn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,xo(s,!1),t=f.updateQueue,n.updateQueue=t,zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Gp(a,t),a=a.sibling;return Ce(mn,mn.current&1|2),Tt&&sa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&pt()>Gl&&(n.flags|=128,u=!0,xo(s,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,zl(n,t),xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Tt)return en(n),null}else 2*pt()-s.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,xo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=pt(),t.sibling=null,a=mn.current,Ce(mn,u?a&1|2:a&1),Tt&&sa(n,s.treeForkCount),t):(en(n),null);case 22:case 23:return si(n),ku(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Y(Cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(_n),en(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function qx(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(_n),Ge(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(r(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(mn),null;case 4:return Ge(),null;case 10:return la(n.type),null;case 22:case 23:return si(n),ku(),t!==null&&Y(Cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(_n),null;case 25:return null;default:return null}}function p0(t,n){switch(wu(n),n.tag){case 3:la(_n),Ge();break;case 26:case 27:case 5:$e(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Y(mn);break;case 10:la(n.type);break;case 22:case 23:si(n),ku(),t!==null&&Y(Cr);break;case 24:la(_n)}}function yo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(R){kt(n,n.return,R)}}function Wa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var V=a,se=R;try{se()}catch(Me){kt(u,V,Me)}}}s=s.next}while(s!==f)}}catch(Me){kt(n,n.return,Me)}}function m0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{rm(n,a)}catch(s){kt(t,t.return,s)}}}function g0(t,n,a){a.props=Or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){kt(t,n,s)}}function So(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){kt(t,n,u)}}function ki(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function v0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function bf(t,n,a){try{var s=t.stateNode;py(s,t.type,a,n),s[rn]=n}catch(u){kt(t,t.return,u)}}function _0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function Mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(s!==4&&(s===27&&Ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function Il(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Il(t,n,a),t=t.sibling;t!==null;)Il(t,n,a),t=t.sibling}function x0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Pn(n,s,a),n[dn]=t,n[rn]=a}catch(f){kt(t,t.return,f)}}var ha=!1,Sn=!1,Tf=!1,y0=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function Yx(t,n){if(t=t.containerInfo,qf=ac,t=Up(t),vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,V=-1,se=0,Me=0,Ae=t,fe=null;t:for(;;){for(var pe;Ae!==a||u!==0&&Ae.nodeType!==3||(R=_+u),Ae!==f||s!==0&&Ae.nodeType!==3||(V=_+s),Ae.nodeType===3&&(_+=Ae.nodeValue.length),(pe=Ae.firstChild)!==null;)fe=Ae,Ae=pe;for(;;){if(Ae===t)break t;if(fe===a&&++se===u&&(R=_),fe===f&&++Me===s&&(V=_),(pe=Ae.nextSibling)!==null)break;Ae=fe,fe=Ae.parentNode}Ae=pe}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:t,selectionRange:a},ac=!1,Cn=n;Cn!==null;)if(n=Cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Cn=t;else for(;Cn!==null;){switch(n=Cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var qe=Or(a.type,u);t=s.getSnapshotBeforeUpdate(qe,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(at){kt(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Cn=t;break}Cn=n.return}}function S0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),s&4&&yo(5,a);break;case 1:if(ma(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){kt(a,a.return,_)}else{var u=Or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){kt(a,a.return,_)}}s&64&&m0(a),s&512&&So(a,a.return);break;case 3:if(ma(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rm(t,n)}catch(_){kt(a,a.return,_)}}break;case 27:n===null&&s&4&&x0(a);case 26:case 5:ma(t,a),n===null&&s&4&&v0(a),s&512&&So(a,a.return);break;case 12:ma(t,a);break;case 31:ma(t,a),s&4&&E0(t,a);break;case 13:ma(t,a),s&4&&T0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ny.bind(null,a),by(t,a))));break;case 22:if(s=a.memoizedState!==null||ha,!s){n=n!==null&&n.memoizedState!==null||Sn,u=ha;var f=Sn;ha=s,(Sn=n)&&!f?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),ha=u,Sn=f}break;case 30:break;default:ma(t,a)}}function b0(t){var n=t.alternate;n!==null&&(t.alternate=null,b0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ua(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,jn=!1;function pa(t,n,a){for(a=a.child;a!==null;)M0(t,n,a),a=a.sibling}function M0(t,n,a){if(ve&&typeof ve.onCommitFiberUnmount=="function")try{ve.onCommitFiberUnmount(ge,a)}catch{}switch(a.tag){case 26:Sn||ki(a,n),pa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||ki(a,n);var s=ln,u=jn;Ja(a.type)&&(ln=a.stateNode,jn=!1),pa(t,n,a),Do(a.stateNode),ln=s,jn=u;break;case 5:Sn||ki(a,n);case 6:if(s=ln,u=jn,ln=null,pa(t,n,a),ln=s,jn=u,ln!==null)if(jn)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(f){kt(a,n,f)}else try{ln.removeChild(a.stateNode)}catch(f){kt(a,n,f)}break;case 18:ln!==null&&(jn?(t=ln,mg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Es(t)):mg(ln,a.stateNode));break;case 4:s=ln,u=jn,ln=a.stateNode.containerInfo,jn=!0,pa(t,n,a),ln=s,jn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),Sn||Wa(4,a,n),pa(t,n,a);break;case 1:Sn||(ki(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&g0(a,n,s)),pa(t,n,a);break;case 21:pa(t,n,a);break;case 22:Sn=(s=Sn)||a.memoizedState!==null,pa(t,n,a),Sn=s;break;default:pa(t,n,a)}}function E0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(a){kt(n,n.return,a)}}}function T0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(a){kt(n,n.return,a)}}function jx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new y0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new y0),n;default:throw Error(r(435,t.tag))}}function Bl(t,n){var a=jx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=iy.bind(null,t,s);s.then(u,u)}})}function Zn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Ja(R.type)){ln=R.stateNode,jn=!1;break e}break;case 5:ln=R.stateNode,jn=!1;break e;case 3:case 4:ln=R.stateNode.containerInfo,jn=!0;break e}R=R.return}if(ln===null)throw Error(r(160));M0(f,_,u),ln=null,jn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)A0(n,t),n=n.sibling}var Ui=null;function A0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(n,t),Kn(t),s&4&&(Wa(3,t,t.return),yo(3,t),Wa(5,t,t.return));break;case 1:Zn(n,t),Kn(t),s&512&&(Sn||a===null||ki(a,a.return)),s&64&&ha&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ui;if(Zn(n,t),Kn(t),s&512&&(Sn||a===null||ki(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Na]||f[dn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Pn(f,s,a),f[dn]=t,vn(f),s=f;break e;case"link":var _=Ag("link","href",u).get(s+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(s),Pn(f,s,a),u.head.appendChild(f);break;case"meta":if(_=Ag("meta","content",u).get(s+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(s),Pn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[dn]=t,vn(f),s=f}t.stateNode=s}else Rg(u,t.type,t.stateNode);else t.stateNode=Tg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Rg(u,t.type,t.stateNode):Tg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&bf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,t),Kn(t),s&512&&(Sn||a===null||ki(a,a.return)),a!==null&&s&4&&bf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,t),Kn(t),s&512&&(Sn||a===null||ki(a,a.return)),t.flags&32){u=t.stateNode;try{ni(u,"")}catch(qe){kt(t,t.return,qe)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,bf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Tf=!0);break;case 6:if(Zn(n,t),Kn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(qe){kt(t,t.return,qe)}}break;case 3:if(ec=null,u=Ui,Ui=Jl(n.containerInfo),Zn(n,t),Ui=u,Kn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(qe){kt(t,t.return,qe)}Tf&&(Tf=!1,R0(t));break;case 4:s=Ui,Ui=Jl(t.stateNode.containerInfo),Zn(n,t),Kn(t),Ui=s;break;case 12:Zn(n,t),Kn(t);break;case 31:Zn(n,t),Kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Bl(t,s)));break;case 13:Zn(n,t),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=pt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Bl(t,s)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,se=ha,Me=Sn;if(ha=se||u,Sn=Me||V,Zn(n,t),Sn=Me,ha=se,Kn(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||ha||Sn||Pr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=V.stateNode;var Ae=V.memoizedProps.style,fe=Ae!=null&&Ae.hasOwnProperty("display")?Ae.display:null;R.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(qe){kt(V,V.return,qe)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(qe){kt(V,V.return,qe)}}}else if(n.tag===18){if(a===null){V=n;try{var pe=V.stateNode;u?gg(pe,!0):gg(V.stateNode,!1)}catch(qe){kt(V,V.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Bl(t,a))));break;case 19:Zn(n,t),Kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Bl(t,s)));break;case 30:break;case 21:break;default:Zn(n,t),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(_0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Il(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(ni(_,""),a.flags&=-33);var R=Mf(t);Il(t,R,_);break;case 3:case 4:var V=a.stateNode.containerInfo,se=Mf(t);Ef(t,se,V);break;default:throw Error(r(161))}}catch(Me){kt(t,t.return,Me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function R0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;R0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)S0(t,n.alternate,n),n=n.sibling}function Pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Pr(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&g0(n,n.return,a),Pr(n);break;case 27:Do(n.stateNode);case 26:case 5:ki(n,n.return),Pr(n);break;case 22:n.memoizedState===null&&Pr(n);break;case 30:Pr(n);break;default:Pr(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ga(u,f,a),yo(4,f);break;case 1:if(ga(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){kt(s,s.return,se)}if(s=f,u=s.updateQueue,u!==null){var R=s.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)am(V[u],R)}catch(se){kt(s,s.return,se)}}a&&_&64&&m0(f),So(f,f.return);break;case 27:x0(f);case 26:case 5:ga(u,f,a),a&&s===null&&_&4&&v0(f),So(f,f.return);break;case 12:ga(u,f,a);break;case 31:ga(u,f,a),a&&_&4&&E0(u,f);break;case 13:ga(u,f,a),a&&_&4&&T0(u,f);break;case 22:f.memoizedState===null&&ga(u,f,a),So(f,f.return);break;case 30:break;default:ga(u,f,a)}n=n.sibling}}function Af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&so(a))}function Rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t))}function Li(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w0(t,n,a,s),n=n.sibling}function w0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(t,n,a,s),u&2048&&yo(9,n);break;case 1:Li(t,n,a,s);break;case 3:Li(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&so(t)));break;case 12:if(u&2048){Li(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){kt(n,n.return,V)}}else Li(t,n,a,s);break;case 31:Li(t,n,a,s);break;case 13:Li(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Li(t,n,a,s):bo(t,n):f._visibility&2?Li(t,n,a,s):(f._visibility|=2,hs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(_,n);break;case 24:Li(t,n,a,s),u&2048&&Rf(n.alternate,n);break;default:Li(t,n,a,s)}}function hs(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,V=s,se=_.flags;switch(_.tag){case 0:case 11:case 15:hs(f,_,R,V,u),yo(8,_);break;case 23:break;case 22:var Me=_.stateNode;_.memoizedState!==null?Me._visibility&2?hs(f,_,R,V,u):bo(f,_):(Me._visibility|=2,hs(f,_,R,V,u)),u&&se&2048&&Af(_.alternate,_);break;case 24:hs(f,_,R,V,u),u&&se&2048&&Rf(_.alternate,_);break;default:hs(f,_,R,V,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:bo(a,s),u&2048&&Af(s.alternate,s);break;case 24:bo(a,s),u&2048&&Rf(s.alternate,s);break;default:bo(a,s)}n=n.sibling}}var Mo=8192;function ps(t,n,a){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)C0(t,n,a),t=t.sibling}function C0(t,n,a){switch(t.tag){case 26:ps(t,n,a),t.flags&Mo&&t.memoizedState!==null&&Oy(a,Ui,t.memoizedState,t.memoizedProps);break;case 5:ps(t,n,a);break;case 3:case 4:var s=Ui;Ui=Jl(t.stateNode.containerInfo),ps(t,n,a),Ui=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Mo,Mo=16777216,ps(t,n,a),Mo=s):ps(t,n,a));break;default:ps(t,n,a)}}function D0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Eo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Cn=s,U0(s,t)}D0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)N0(t),t=t.sibling}function N0(t){switch(t.tag){case 0:case 11:case 15:Eo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Eo(t);break;case 12:Eo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):Eo(t);break;default:Eo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Cn=s,U0(s,t)}D0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function U0(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:so(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Cn=s;else e:for(a=t;Cn!==null;){s=Cn;var u=s.sibling,f=s.return;if(b0(s),s===a){Cn=null;break e}if(u!==null){u.return=f,Cn=u;break e}Cn=f}}}var Zx={getCacheForType:function(t){var n=Ln(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Ln(_n).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,It=0,Kt=null,yt=null,bt=0,Vt=0,oi=null,qa=!1,ms=!1,wf=!1,va=0,pn=0,Ya=0,zr=0,Cf=0,li=0,gs=0,To=null,Qn=null,Df=!1,Hl=0,L0=0,Gl=1/0,Vl=null,ja=null,En=0,Za=null,vs=null,_a=0,Nf=0,Uf=null,O0=null,Ao=0,Lf=null;function ci(){return(It&2)!==0&&bt!==0?bt&-bt:z.T!==null?Ff():wi()}function P0(){if(li===0)if((bt&536870912)===0||Tt){var t=it;it<<=1,(it&3932160)===0&&(it=262144),li=t}else li=536870912;return t=ri.current,t!==null&&(t.flags|=32),li}function Jn(t,n,a){(t===Kt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(_s(t,0),Ka(t,bt,li,!1)),de(t,a),((It&2)===0||t!==Kt)&&(t===Kt&&((It&2)===0&&(zr|=a),pn===4&&Ka(t,bt,li,!1)),Xi(t))}function z0(t,n,a){if((It&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||J(t,n),u=s?$x(t,n):Pf(t,n,!0),f=s;do{if(u===0){ms&&!s&&Ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Qx(a)){u=Pf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=To;var V=R.current.memoizedState.isDehydrated;if(V&&(_s(R,_).flags|=256),_=Pf(R,_,!1),_!==2){if(wf&&!V){R.errorRecoveryDisabledLanes|=f,zr|=f,u=4;break e}f=Qn,Qn=u,f!==null&&(Qn===null?Qn=f:Qn.push.apply(Qn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){_s(t,0),Ka(t,n,0,!0);break}e:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ka(s,n,li,!qa);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Hl+300-pt(),10<u)){if(Ka(s,n,li,!qa),be(s,0,!0)!==0)break e;_a=n,s.timeoutHandle=hg(I0.bind(null,s,a,Qn,Vl,Df,n,li,zr,gs,qa,f,"Throttled",-0,0),u);break e}I0(s,a,Qn,Vl,Df,n,li,zr,gs,qa,f,null,-0,0)}}break}while(!0);Xi(t)}function I0(t,n,a,s,u,f,_,R,V,se,Me,Ae,fe,pe){if(t.timeoutHandle=-1,Ae=n.subtreeFlags,Ae&8192||(Ae&16785408)===16785408){Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},C0(n,f,Ae);var qe=(f&62914560)===f?Hl-pt():(f&4194048)===f?L0-pt():0;if(qe=Py(Ae,qe),qe!==null){_a=f,t.cancelPendingCommit=qe(W0.bind(null,t,n,f,a,s,u,_,R,V,Me,Ae,null,fe,pe)),Ka(t,f,_,!se);return}}W0(t,n,f,a,s,u,_,R,V)}function Qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!ii(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(t,n,a,s){n&=~Cf,n&=~zr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-He(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&ot(t,a,n)}function kl(){return(It&6)===0?(Ro(0),!1):!0}function Of(){if(yt!==null){if(Vt===0)var t=yt.return;else t=yt,oa=Rr=null,Zu(t),ls=null,lo=0,t=yt;for(;t!==null;)p0(t.alternate,t),t=t.return;yt=null}}function _s(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,vy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),_a=0,Of(),Kt=t,yt=a=ra(t.current,null),bt=n,Vt=0,oi=null,qa=!1,ms=J(t,n),wf=!1,gs=li=Cf=zr=Ya=pn=0,Qn=To=null,Df=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-He(s),f=1<<u;n|=t[u],s&=~f}return va=n,ul(),a}function B0(t,n){dt=null,z.H=vo,n===os||n===_l?(n=em(),Vt=3):n===Iu?(n=em(),Vt=4):Vt=n===df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,yt===null&&(pn=1,Ul(t,pi(n,t.current)))}function F0(){var t=ri.current;return t===null?!0:(bt&4194048)===bt?_i===null:(bt&62914560)===bt||(bt&536870912)!==0?t===_i:!1}function H0(){var t=z.H;return z.H=vo,t===null?vo:t}function G0(){var t=z.A;return z.A=Zx,t}function Xl(){pn=4,qa||(bt&4194048)!==bt&&ri.current!==null||(ms=!0),(Ya&134217727)===0&&(zr&134217727)===0||Kt===null||Ka(Kt,bt,li,!1)}function Pf(t,n,a){var s=It;It|=2;var u=H0(),f=G0();(Kt!==t||bt!==n)&&(Vl=null,_s(t,n)),n=!1;var _=pn;e:do try{if(Vt!==0&&yt!==null){var R=yt,V=oi;switch(Vt){case 8:Of(),_=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(n=!0);var se=Vt;if(Vt=0,oi=null,xs(t,R,V,se),a&&ms){_=0;break e}break;default:se=Vt,Vt=0,oi=null,xs(t,R,V,se)}}Jx(),_=pn;break}catch(Me){B0(t,Me)}while(!0);return n&&t.shellSuspendCounter++,oa=Rr=null,It=s,z.H=u,z.A=f,yt===null&&(Kt=null,bt=0,ul()),_}function Jx(){for(;yt!==null;)V0(yt)}function $x(t,n){var a=It;It|=2;var s=H0(),u=G0();Kt!==t||bt!==n?(Vl=null,Gl=pt()+500,_s(t,n)):ms=J(t,n);e:do try{if(Vt!==0&&yt!==null){n=yt;var f=oi;t:switch(Vt){case 1:Vt=0,oi=null,xs(t,n,f,1);break;case 2:case 9:if(Jp(f)){Vt=0,oi=null,k0(n);break}n=function(){Vt!==2&&Vt!==9||Kt!==t||(Vt=7),Xi(t)},f.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Jp(f)?(Vt=0,oi=null,k0(n)):(Vt=0,oi=null,xs(t,n,f,7));break;case 5:var _=null;switch(yt.tag){case 26:_=yt.memoizedState;case 5:case 27:var R=yt;if(_?wg(_):R.stateNode.complete){Vt=0,oi=null;var V=R.sibling;if(V!==null)yt=V;else{var se=R.return;se!==null?(yt=se,Wl(se)):yt=null}break t}}Vt=0,oi=null,xs(t,n,f,5);break;case 6:Vt=0,oi=null,xs(t,n,f,6);break;case 8:Of(),pn=6;break e;default:throw Error(r(462))}}ey();break}catch(Me){B0(t,Me)}while(!0);return oa=Rr=null,z.H=s,z.A=u,It=a,yt!==null?0:(Kt=null,bt=0,ul(),pn)}function ey(){for(;yt!==null&&!an();)V0(yt)}function V0(t){var n=d0(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?Wl(t):yt=n}function k0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=s0(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=s0(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Zu(n);default:p0(a,n),n=yt=Gp(n,va),n=d0(a,n,va)}t.memoizedProps=t.pendingProps,n===null?Wl(t):yt=n}function xs(t,n,a,s){oa=Rr=null,Zu(n),ls=null,lo=0;var u=n.return;try{if(Vx(t,u,n,a,bt)){pn=1,Ul(t,pi(a,t.current)),yt=null;return}}catch(f){if(u!==null)throw yt=u,f;pn=1,Ul(t,pi(a,t.current)),yt=null;return}n.flags&32768?(Tt||s===1?t=!0:ms||(bt&536870912)!==0?t=!1:(qa=t=!0,(s===2||s===9||s===3||s===6)&&(s=ri.current,s!==null&&s.tag===13&&(s.flags|=16384))),X0(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){X0(n,qa);return}t=n.return;var a=Wx(n.alternate,n,va);if(a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);pn===0&&(pn=5)}function X0(t,n){do{var a=qx(t.alternate,t);if(a!==null){a.flags&=32767,yt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=a}while(t!==null);pn=6,yt=null}function W0(t,n,a,s,u,f,_,R,V){t.cancelPendingCommit=null;do ql();while(En!==0);if((It&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=bu,je(t,a,f,_,R,V),t===Kt&&(yt=Kt=null,bt=0),vs=n,Za=t,_a=a,Nf=f,Uf=u,O0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ay(K,function(){return K0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,u=G.p,G.p=2,_=It,It|=4;try{Yx(t,n,a)}finally{It=_,G.p=u,z.T=s}}En=1,q0(),Y0(),j0()}}function q0(){if(En===1){En=0;var t=Za,n=vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=G.p;G.p=2;var u=It;It|=4;try{A0(n,t);var f=Yf,_=Up(t.containerInfo),R=f.focusedElem,V=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Np(R.ownerDocument.documentElement,R)){if(V!==null&&vu(R)){var se=V.start,Me=V.end;if(Me===void 0&&(Me=se),"selectionStart"in R)R.selectionStart=se,R.selectionEnd=Math.min(Me,R.value.length);else{var Ae=R.ownerDocument||document,fe=Ae&&Ae.defaultView||window;if(fe.getSelection){var pe=fe.getSelection(),qe=R.textContent.length,at=Math.min(V.start,qe),jt=V.end===void 0?at:Math.min(V.end,qe);!pe.extend&&at>jt&&(_=jt,jt=at,at=_);var Q=Dp(R,at),q=Dp(R,jt);if(Q&&q&&(pe.rangeCount!==1||pe.anchorNode!==Q.node||pe.anchorOffset!==Q.offset||pe.focusNode!==q.node||pe.focusOffset!==q.offset)){var re=Ae.createRange();re.setStart(Q.node,Q.offset),pe.removeAllRanges(),at>jt?(pe.addRange(re),pe.extend(q.node,q.offset)):(re.setEnd(q.node,q.offset),pe.addRange(re))}}}}for(Ae=[],pe=R;pe=pe.parentNode;)pe.nodeType===1&&Ae.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ae.length;R++){var Te=Ae[R];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}ac=!!qf,Yf=qf=null}finally{It=u,G.p=s,z.T=a}}t.current=n,En=2}}function Y0(){if(En===2){En=0;var t=Za,n=vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=G.p;G.p=2;var u=It;It|=4;try{S0(t,n.alternate,n)}finally{It=u,G.p=s,z.T=a}}En=3}}function j0(){if(En===4||En===3){En=0,I();var t=Za,n=vs,a=_a,s=O0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,vs=Za=null,Z0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ja=null),Ri(a),n=n.stateNode,ve&&typeof ve.onCommitFiberRoot=="function")try{ve.onCommitFiberRoot(ge,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,u=G.p,G.p=2,z.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var R=s[_];f(R.value,{componentStack:R.stack})}}finally{z.T=n,G.p=u}}(_a&3)!==0&&ql(),Xi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Lf?Ao++:(Ao=0,Lf=t):Ao=0,Ro(0)}}function Z0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,so(n)))}function ql(){return q0(),Y0(),j0(),K0()}function K0(){if(En!==5)return!1;var t=Za,n=Nf;Nf=0;var a=Ri(_a),s=z.T,u=G.p;try{G.p=32>a?32:a,z.T=null,a=Uf,Uf=null;var f=Za,_=_a;if(En=0,vs=Za=null,_a=0,(It&6)!==0)throw Error(r(331));var R=It;if(It|=4,N0(f.current),w0(f,f.current,_,a),It=R,Ro(0,!1),ve&&typeof ve.onPostCommitFiberRoot=="function")try{ve.onPostCommitFiberRoot(ge,f)}catch{}return!0}finally{G.p=u,z.T=s,Z0(t,n)}}function Q0(t,n,a){n=pi(a,n),n=ff(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(de(t,2),Xi(t))}function kt(t,n,a){if(t.tag===3)Q0(t,t,a);else for(;n!==null;){if(n.tag===3){Q0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ja===null||!ja.has(s))){t=pi(a,t),a=Jm(2),s=Va(n,a,2),s!==null&&($m(a,s,n,t),de(s,2),Xi(s));break}}n=n.return}}function zf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Kx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(wf=!0,u.add(a),t=ty.bind(null,t,n,a),n.then(t,t))}function ty(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Kt===t&&(bt&a)===a&&(pn===4||pn===3&&(bt&62914560)===bt&&300>pt()-Hl?(It&2)===0&&_s(t,0):Cf|=a,gs===bt&&(gs=0)),Xi(t)}function J0(t,n){n===0&&(n=$()),t=Er(t,n),t!==null&&(de(t,n),Xi(t))}function ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),J0(t,a)}function iy(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),J0(t,a)}function ay(t,n){return Ut(t,n)}var Yl=null,ys=null,If=!1,jl=!1,Bf=!1,Qa=0;function Xi(t){t!==ys&&t.next===null&&(ys===null?Yl=ys=t:ys=ys.next=t),jl=!0,If||(If=!0,sy())}function Ro(t,n){if(!Bf&&jl){Bf=!0;do for(var a=!1,s=Yl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-He(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ng(s,f))}else f=bt,f=be(s,s===Kt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||J(s,f)||(a=!0,ng(s,f));s=s.next}while(a);Bf=!1}}function ry(){$0()}function $0(){jl=If=!1;var t=0;Qa!==0&&gy()&&(t=Qa);for(var n=pt(),a=null,s=Yl;s!==null;){var u=s.next,f=eg(s,n);f===0?(s.next=null,a===null?Yl=u:a.next=u,u===null&&(ys=a)):(a=s,(t!==0||(f&3)!==0)&&(jl=!0)),s=u}En!==0&&En!==5||Ro(t),Qa!==0&&(Qa=0)}function eg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-He(f),R=1<<_,V=u[_];V===-1?((R&a)===0||(R&s)!==0)&&(u[_]=ae(R,n)):V<=n&&(t.expiredLanes|=R),f&=~R}if(n=Kt,a=bt,a=be(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&zt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||J(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&zt(s),Ri(a)){case 2:case 8:a=b;break;case 32:a=K;break;case 268435456:a=me;break;default:a=K}return s=tg.bind(null,t),a=Ut(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&zt(s),t.callbackPriority=2,t.callbackNode=null,2}function tg(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var s=bt;return s=be(t,t===Kt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(z0(t,s,n),eg(t,pt()),t.callbackNode!=null&&t.callbackNode===a?tg.bind(null,t):null)}function ng(t,n){if(ql())return null;z0(t,n,!0)}function sy(){_y(function(){(It&6)!==0?Ut(U,ry):$0()})}function Ff(){if(Qa===0){var t=rs;t===0&&(t=Qe,Qe<<=1,(Qe&261888)===0&&(Qe=256)),Qa=t}return Qa}function ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yr(""+t)}function ag(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oy(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=ig((u[rn]||null).action),_=s.submitter;_&&(n=(n=_[rn]||null)?ig(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new sl("action","action",null,s,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Qa!==0){var V=_?ag(u,_):new FormData(u);rf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(R.preventDefault(),V=_?ag(u,_):new FormData(u),rf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Hf=0;Hf<Su.length;Hf++){var Gf=Su[Hf],ly=Gf.toLowerCase(),cy=Gf[0].toUpperCase()+Gf.slice(1);Ni(ly,"on"+cy)}Ni(Pp,"onAnimationEnd"),Ni(zp,"onAnimationIteration"),Ni(Ip,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Tx,"onTransitionRun"),Ni(Ax,"onTransitionStart"),Ni(Rx,"onTransitionCancel"),Ni(Bp,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function rg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var R=s[_],V=R.instance,se=R.currentTarget;if(R=R.listener,V!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=se;try{f(u)}catch(Me){cl(Me)}u.currentTarget=null,f=V}else for(_=0;_<s.length;_++){if(R=s[_],V=R.instance,se=R.currentTarget,R=R.listener,V!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=se;try{f(u)}catch(Me){cl(Me)}u.currentTarget=null,f=V}}}}function St(t,n){var a=n[vr];a===void 0&&(a=n[vr]=new Set);var s=t+"__bubble";a.has(s)||(sg(n,t,2,!1),a.add(s))}function Vf(t,n,a){var s=0;n&&(s|=4),sg(a,t,s,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[Zl]){t[Zl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Vf("selectionchange",!1,n))}}function sg(t,n,a,s){switch(Pg(n)){case 2:var u=By;break;case 8:u=Fy;break;default:u=ad}a=u.bind(null,n,a,t),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var R=s.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=s.return;_!==null;){var V=_.tag;if((V===3||V===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=ta(R),_===null)return;if(V=_.tag,V===5||V===6||V===26||V===27){s=f=_;continue e}R=R.parentNode}}s=s.return}fp(function(){var se=f,Me=su(a),Ae=[];e:{var fe=Fp.get(t);if(fe!==void 0){var pe=sl,qe=t;switch(t){case"keypress":if(al(a)===0)break e;case"keydown":case"keyup":pe=ix;break;case"focusin":qe="focus",pe=du;break;case"focusout":qe="blur",pe=du;break;case"beforeblur":case"afterblur":pe=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=W_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=sx;break;case Pp:case zp:case Ip:pe=j_;break;case Bp:pe=lx;break;case"scroll":case"scrollend":pe=k_;break;case"wheel":pe=ux;break;case"copy":case"cut":case"paste":pe=K_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=gp;break;case"toggle":case"beforetoggle":pe=dx}var at=(n&4)!==0,jt=!at&&(t==="scroll"||t==="scrollend"),Q=at?fe!==null?fe+"Capture":null:fe;at=[];for(var q=se,re;q!==null;){var Te=q;if(re=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||re===null||Q===null||(Te=Zs(q,Q),Te!=null&&at.push(Co(q,Te,re))),jt)break;q=q.return}0<at.length&&(fe=new pe(fe,qe,null,a,Me),Ae.push({event:fe,listeners:at}))}}if((n&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",fe&&a!==ru&&(qe=a.relatedTarget||a.fromElement)&&(ta(qe)||qe[qn]))break e;if((pe||fe)&&(fe=Me.window===Me?Me:(fe=Me.ownerDocument)?fe.defaultView||fe.parentWindow:window,pe?(qe=a.relatedTarget||a.toElement,pe=se,qe=qe?ta(qe):null,qe!==null&&(jt=c(qe),at=qe.tag,qe!==jt||at!==5&&at!==27&&at!==6)&&(qe=null)):(pe=null,qe=se),pe!==qe)){if(at=pp,Te="onMouseLeave",Q="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(at=gp,Te="onPointerLeave",Q="onPointerEnter",q="pointer"),jt=pe==null?fe:xr(pe),re=qe==null?fe:xr(qe),fe=new at(Te,q+"leave",pe,a,Me),fe.target=jt,fe.relatedTarget=re,Te=null,ta(Me)===se&&(at=new at(Q,q+"enter",qe,a,Me),at.target=re,at.relatedTarget=jt,Te=at),jt=Te,pe&&qe)t:{for(at=fy,Q=pe,q=qe,re=0,Te=Q;Te;Te=at(Te))re++;Te=0;for(var nt=q;nt;nt=at(nt))Te++;for(;0<re-Te;)Q=at(Q),re--;for(;0<Te-re;)q=at(q),Te--;for(;re--;){if(Q===q||q!==null&&Q===q.alternate){at=Q;break t}Q=at(Q),q=at(q)}at=null}else at=null;pe!==null&&og(Ae,fe,pe,at,!1),qe!==null&&jt!==null&&og(Ae,jt,qe,at,!0)}}e:{if(fe=se?xr(se):window,pe=fe.nodeName&&fe.nodeName.toLowerCase(),pe==="select"||pe==="input"&&fe.type==="file")var Ot=Ep;else if(bp(fe))if(Tp)Ot=bx;else{Ot=yx;var Ze=xx}else pe=fe.nodeName,!pe||pe.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?se&&Bt(se.elementType)&&(Ot=Ep):Ot=Sx;if(Ot&&(Ot=Ot(t,se))){Mp(Ae,Ot,a,Me);break e}Ze&&Ze(t,fe,se),t==="focusout"&&se&&fe.type==="number"&&se.memoizedProps.value!=null&&xt(fe,"number",fe.value)}switch(Ze=se?xr(se):window,t){case"focusin":(bp(Ze)||Ze.contentEditable==="true")&&(Qr=Ze,_u=se,io=null);break;case"focusout":io=_u=Qr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Lp(Ae,a,Me);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Lp(Ae,a,Me)}var ht;if(pu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Kr?yp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(vp&&a.locale!=="ko"&&(Kr||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Kr&&(ht=dp()):(Pa=Me,cu="value"in Pa?Pa.value:Pa.textContent,Kr=!0)),Ze=Kl(se,Mt),0<Ze.length&&(Mt=new mp(Mt,t,null,a,Me),Ae.push({event:Mt,listeners:Ze}),ht?Mt.data=ht:(ht=Sp(a),ht!==null&&(Mt.data=ht)))),(ht=px?mx(t,a):gx(t,a))&&(Mt=Kl(se,"onBeforeInput"),0<Mt.length&&(Ze=new mp("onBeforeInput","beforeinput",null,a,Me),Ae.push({event:Ze,listeners:Mt}),Ze.data=ht)),oy(Ae,t,se,a,Me)}rg(Ae,n)})}function Co(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Kl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Zs(t,a),u!=null&&s.unshift(Co(t,u,f)),u=Zs(t,n),u!=null&&s.push(Co(t,u,f))),t.tag===3)return s;t=t.return}return[]}function fy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function og(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var R=a,V=R.alternate,se=R.stateNode;if(R=R.tag,V!==null&&V===s)break;R!==5&&R!==26&&R!==27||se===null||(V=se,u?(se=Zs(a,f),se!=null&&_.unshift(Co(a,se,V))):u||(se=Zs(a,f),se!=null&&_.push(Co(a,se,V)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var dy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(dy,`
`).replace(hy,"")}function cg(t,n){return n=lg(n),lg(t)===n}function Yt(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ni(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ni(t,""+s);break;case"className":We(t,"class",s);break;case"tabIndex":We(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,a,s);break;case"style":Di(t,s,f);break;case"data":if(n!=="object"){We(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=yr(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Yt(t,n,"name",u.name,u,null),Yt(t,n,"formEncType",u.formEncType,u,null),Yt(t,n,"formMethod",u.formMethod,u,null),Yt(t,n,"formTarget",u.formTarget,u,null)):(Yt(t,n,"encType",u.encType,u,null),Yt(t,n,"method",u.method,u,null),Yt(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=yr(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ia);break;case"onScroll":s!=null&&St("scroll",t);break;case"onScrollEnd":s!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=yr(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":St("beforetoggle",t),St("toggle",t),Ie(t,"popover",s);break;case"xlinkActuate":Xe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Xe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Xe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Xe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Xe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Xe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Xe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ie(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Hi.get(a)||a,Ie(t,a,s))}}function Wf(t,n,a,s,u,f){switch(a){case"style":Di(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?ni(t,s):(typeof s=="number"||typeof s=="bigint")&&ni(t,""+s);break;case"onScroll":s!=null&&St("scroll",t);break;case"onScrollEnd":s!=null&&St("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[rn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ie(t,a,s)}}}function Pn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(t,n,f,_,a,null)}}u&&Yt(t,n,"srcSet",a.srcSet,a,null),s&&Yt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var R=f=_=u=null,V=null,se=null;for(s in a)if(a.hasOwnProperty(s)){var Me=a[s];if(Me!=null)switch(s){case"name":u=Me;break;case"type":_=Me;break;case"checked":V=Me;break;case"defaultChecked":se=Me;break;case"value":f=Me;break;case"defaultValue":R=Me;break;case"children":case"dangerouslySetInnerHTML":if(Me!=null)throw Error(r(137,n));break;default:Yt(t,n,s,Me,a,null)}}Fn(t,f,R,V,se,_,u,!1);return;case"select":St("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":s=R;default:Yt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!s,n!=null?Mn(t,!!s,n,!1):a!=null&&Mn(t,!!s,a,!0);return;case"textarea":St("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":s=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Yt(t,n,_,R,a,null)}Ci(t,s,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(s=a[V],s!=null))switch(V){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Yt(t,n,V,s,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(s=0;s<wo.length;s++)St(wo[s],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(s=a[se],s!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Yt(t,n,se,s,a,null)}return;default:if(Bt(n)){for(Me in a)a.hasOwnProperty(Me)&&(s=a[Me],s!==void 0&&Wf(t,n,Me,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Yt(t,n,R,s,a,null))}function py(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,V=null,se=null,Me=null;for(pe in a){var Ae=a[pe];if(a.hasOwnProperty(pe)&&Ae!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":V=Ae;default:s.hasOwnProperty(pe)||Yt(t,n,pe,null,s,Ae)}}for(var fe in s){var pe=s[fe];if(Ae=a[fe],s.hasOwnProperty(fe)&&(pe!=null||Ae!=null))switch(fe){case"type":f=pe;break;case"name":u=pe;break;case"checked":se=pe;break;case"defaultChecked":Me=pe;break;case"value":_=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:pe!==Ae&&Yt(t,n,fe,pe,s,Ae)}}Ve(t,_,R,V,se,Me,f,u);return;case"select":pe=_=R=fe=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":pe=V;default:s.hasOwnProperty(f)||Yt(t,n,f,null,s,V)}for(u in s)if(f=s[u],V=a[u],s.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":fe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==V&&Yt(t,n,u,f,s,V)}n=R,a=_,s=pe,fe!=null?Mn(t,!!a,fe,!1):!!s!=!!a&&(n!=null?Mn(t,!!a,n,!0):Mn(t,!!a,a?[]:"",!1));return;case"textarea":pe=fe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Yt(t,n,R,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":fe=u;break;case"defaultValue":pe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Yt(t,n,_,u,s,f)}ti(t,fe,pe);return;case"option":for(var qe in a)if(fe=a[qe],a.hasOwnProperty(qe)&&fe!=null&&!s.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Yt(t,n,qe,null,s,fe)}for(V in s)if(fe=s[V],pe=a[V],s.hasOwnProperty(V)&&fe!==pe&&(fe!=null||pe!=null))switch(V){case"selected":t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Yt(t,n,V,fe,s,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)fe=a[at],a.hasOwnProperty(at)&&fe!=null&&!s.hasOwnProperty(at)&&Yt(t,n,at,null,s,fe);for(se in s)if(fe=s[se],pe=a[se],s.hasOwnProperty(se)&&fe!==pe&&(fe!=null||pe!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:Yt(t,n,se,fe,s,pe)}return;default:if(Bt(n)){for(var jt in a)fe=a[jt],a.hasOwnProperty(jt)&&fe!==void 0&&!s.hasOwnProperty(jt)&&Wf(t,n,jt,void 0,s,fe);for(Me in s)fe=s[Me],pe=a[Me],!s.hasOwnProperty(Me)||fe===pe||fe===void 0&&pe===void 0||Wf(t,n,Me,fe,s,pe);return}}for(var Q in a)fe=a[Q],a.hasOwnProperty(Q)&&fe!=null&&!s.hasOwnProperty(Q)&&Yt(t,n,Q,null,s,fe);for(Ae in s)fe=s[Ae],pe=a[Ae],!s.hasOwnProperty(Ae)||fe===pe||fe==null&&pe==null||Yt(t,n,Ae,fe,s,pe)}function ug(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function my(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&ug(_)){for(_=0,R=u.responseEnd,s+=1;s<a.length;s++){var V=a[s],se=V.startTime;if(se>R)break;var Me=V.transferSize,Ae=V.initiatorType;Me&&ug(Ae)&&(V=V.responseEnd,_+=Me*(V<R?1:(R-se)/(V-se)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qf=null,Yf=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function fg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function gy(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var hg=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,pg=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof pg<"u"?function(t){return pg.resolve(null).then(t).catch(xy)}:hg;function xy(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function mg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Do(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Do(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Na]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Do(t.ownerDocument.body);a=u}while(a);Es(n)}function gg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yy(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=xi(t.nextSibling),t===null)break}return null}function Sy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xi(t.nextSibling),t===null))return null;return t}function vg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=xi(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$?"||t.data==="$~"}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function by(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function xi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $f=null;function _g(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return xi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function xg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function yg(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Do(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ua(t)}var yi=new Map,Sg=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=G.d;G.d={f:My,r:Ey,D:Ty,C:Ay,L:Ry,m:wy,X:Dy,S:Cy,M:Ny};function My(){var t=xa.f(),n=kl();return t||n}function Ey(t){var n=na(t);n!==null&&n.tag===5&&n.type==="form"?Bm(n):xa.r(t)}var Ss=typeof document>"u"?null:document;function bg(t,n,a){var s=Ss;if(s&&typeof n=="string"&&n){var u=Ht(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Sg.has(u)||(Sg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Pn(n,"link",t),vn(n),s.head.appendChild(n)))}}function Ty(t){xa.D(t),bg("dns-prefetch",t,null)}function Ay(t,n){xa.C(t,n),bg("preconnect",t,n)}function Ry(t,n,a){xa.L(t,n,a);var s=Ss;if(s&&t&&n){var u='link[rel="preload"][as="'+Ht(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ht(a.imageSizes)+'"]')):u+='[href="'+Ht(t)+'"]';var f=u;switch(n){case"style":f=bs(t);break;case"script":f=Ms(t)}yi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(No(f))||n==="script"&&s.querySelector(Uo(f))||(n=s.createElement("link"),Pn(n,"link",t),vn(n),s.head.appendChild(n)))}}function wy(t,n){xa.m(t,n);var a=Ss;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ht(s)+'"][href="'+Ht(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ms(t)}if(!yi.has(f)&&(t=x({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Uo(f)))return}s=a.createElement("link"),Pn(s,"link",t),vn(s),a.head.appendChild(s)}}}function Cy(t,n,a){xa.S(t,n,a);var s=Ss;if(s&&t){var u=La(s).hoistableStyles,f=bs(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=s.querySelector(No(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&ed(t,a);var V=_=s.createElement("link");vn(V),Pn(V,"link",t),V._p=new Promise(function(se,Me){V.onload=se,V.onerror=Me}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,$l(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function Dy(t,n){xa.X(t,n);var a=Ss;if(a&&t){var s=La(a).hoistableScripts,u=Ms(t),f=s.get(u);f||(f=a.querySelector(Uo(u)),f||(t=x({src:t,async:!0},n),(n=yi.get(u))&&td(t,n),f=a.createElement("script"),vn(f),Pn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Ny(t,n){xa.M(t,n);var a=Ss;if(a&&t){var s=La(a).hoistableScripts,u=Ms(t),f=s.get(u);f||(f=a.querySelector(Uo(u)),f||(t=x({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&td(t,n),f=a.createElement("script"),vn(f),Pn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Mg(t,n,a,s){var u=(u=te.current)?Jl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=bs(a.href),a=La(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=bs(a.href);var f=La(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(No(t)))&&!f._p&&(_.instance=f,_.state.loading=5),yi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,a),f||Uy(u,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ms(a),a=La(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function bs(t){return'href="'+Ht(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function Eg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Uy(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Pn(n,"link",a),vn(n),t.head.appendChild(n))}function Ms(t){return'[src="'+Ht(t)+'"]'}function Uo(t){return"script[async]"+t}function Tg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(s)return n.instance=s,vn(s),s;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),vn(s),Pn(s,"style",u),$l(s,a.precedence,t),n.instance=s;case"stylesheet":u=bs(a.href);var f=t.querySelector(No(u));if(f)return n.state.loading|=4,n.instance=f,vn(f),f;s=Eg(a),(u=yi.get(u))&&ed(s,u),f=(t.ownerDocument||t).createElement("link"),vn(f);var _=f;return _._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),Pn(f,"link",s),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=Ms(a.src),(u=t.querySelector(Uo(f)))?(n.instance=u,vn(u),u):(s=a,(u=yi.get(f))&&(s=x({},a),td(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),vn(u),Pn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,$l(s,a.precedence,t));return n.instance}function $l(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var R=s[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ec=null;function Ag(t,n,a){if(ec===null){var s=new Map,u=ec=new Map;u.set(a,s)}else u=ec,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Na]||f[dn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=s.get(_);R?R.push(f):s.set(_,[f])}}return s}function Rg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ly(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Oy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=bs(s.href),f=n.querySelector(No(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,vn(f);return}f=n.ownerDocument||n,s=Eg(s),(u=yi.get(u))&&ed(s,u),f=f.createElement("link"),vn(f);var _=f;_._p=new Promise(function(R,V){_.onload=R,_.onerror=V}),Pn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var nd=0;function Py(t,n){return t.stylesheets&&t.count===0&&ic(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&nd===0&&(nd=62500*my());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ic(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>nd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nc=null;function ic(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(zy,t),nc=null,tc.call(t))}function zy(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var s=a.get(null);else{a=new Map,nc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=tc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Lo={$$typeof:k,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Iy(t,n,a,s,u,f,_,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Se(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Se(0),this.hiddenUpdates=Se(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Cg(t,n,a,s,u,f,_,R,V,se,Me,Ae){return t=new Iy(t,n,a,_,V,se,Me,Ae,R),n=1,f===!0&&(n|=24),f=ai(3,null,null,n),t.current=f,f.stateNode=t,n=Ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Bu(f),t}function Dg(t){return t?(t=es,t):es}function Ng(t,n,a,s,u,f){u=Dg(u),s.context===null?s.context=u:s.pendingContext=u,s=Ga(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Va(t,s,n),a!==null&&(Jn(a,t,n),uo(a,t,n))}function Ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function id(t,n){Ug(t,n),(t=t.alternate)&&Ug(t,n)}function Lg(t){if(t.tag===13||t.tag===31){var n=Er(t,67108864);n!==null&&Jn(n,t,67108864),id(t,67108864)}}function Og(t){if(t.tag===13||t.tag===31){var n=ci();n=Ai(n);var a=Er(t,n);a!==null&&Jn(a,t,n),id(t,n)}}var ac=!0;function By(t,n,a,s){var u=z.T;z.T=null;var f=G.p;try{G.p=2,ad(t,n,a,s)}finally{G.p=f,z.T=u}}function Fy(t,n,a,s){var u=z.T;z.T=null;var f=G.p;try{G.p=8,ad(t,n,a,s)}finally{G.p=f,z.T=u}}function ad(t,n,a,s){if(ac){var u=rd(s);if(u===null)Xf(t,n,s,rc,a),zg(t,s);else if(Gy(u,t,n,a,s))s.stopPropagation();else if(zg(t,s),n&4&&-1<Hy.indexOf(t)){for(;u!==null;){var f=na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ue(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var V=1<<31-He(_);R.entanglements[1]|=V,_&=~V}Xi(f),(It&6)===0&&(Gl=pt()+500,Ro(0))}}break;case 31:case 13:R=Er(f,2),R!==null&&Jn(R,f,2),kl(),id(f,2)}if(f=rd(s),f===null&&Xf(t,n,s,rc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Xf(t,n,s,null,a)}}function rd(t){return t=su(t),sd(t)}var rc=null;function sd(t){if(rc=null,t=ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=m(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return rc=t,null}function Pg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case U:return 2;case b:return 8;case K:case ce:return 32;case me:return 268435456;default:return 32}default:return 32}}var od=!1,$a=null,er=null,tr=null,Oo=new Map,Po=new Map,nr=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zg(t,n){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Oo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(n.pointerId)}}function zo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=na(n),n!==null&&Lg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Gy(t,n,a,s,u){switch(n){case"focusin":return $a=zo($a,t,n,a,s,u),!0;case"dragenter":return er=zo(er,t,n,a,s,u),!0;case"mouseover":return tr=zo(tr,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Oo.set(f,zo(Oo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Po.set(f,zo(Po.get(f)||null,t,n,a,s,u)),!0}return!1}function Ig(t){var n=ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Jt(t.priority,function(){Og(a)});return}}else if(n===31){if(n=m(a),n!==null){t.blockedOn=n,Jt(t.priority,function(){Og(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);ru=s,a.target.dispatchEvent(s),ru=null}else return n=na(a),n!==null&&Lg(n),t.blockedOn=a,!1;n.shift()}return!0}function Bg(t,n,a){sc(t)&&a.delete(n)}function Vy(){od=!1,$a!==null&&sc($a)&&($a=null),er!==null&&sc(er)&&(er=null),tr!==null&&sc(tr)&&(tr=null),Oo.forEach(Bg),Po.forEach(Bg)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,od||(od=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vy)))}var lc=null;function Fg(t){lc!==t&&(lc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(sd(s||a)===null)continue;break}var f=na(a);f!==null&&(t.splice(n,3),n-=3,rf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Es(t){function n(V){return oc(V,t)}$a!==null&&oc($a,t),er!==null&&oc(er,t),tr!==null&&oc(tr,t),Oo.forEach(n),Po.forEach(n);for(var a=0;a<nr.length;a++){var s=nr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<nr.length&&(a=nr[0],a.blockedOn===null);)Ig(a),a.blockedOn===null&&nr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[rn]||null;if(typeof f=="function")_||Fg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[rn]||null)R=_.formAction;else if(sd(u)!==null)continue}else R=_.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),Fg(a)}}}function Hg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ld(t){this._internalRoot=t}cc.prototype.render=ld.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ci();Ng(a,s,t,n,null,null)},cc.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ng(t.current,2,null,t,null,null),kl(),n[qn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=wi();t={blockedOn:null,target:t,priority:n};for(var a=0;a<nr.length&&n!==0&&n<nr[a].priority;a++);nr.splice(a,0,t),a===0&&Ig(t)}};var Gg=e.version;if(Gg!=="19.2.8")throw Error(r(527,Gg,"19.2.8"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{ge=uc.inject(ky),ve=uc}catch{}}return Bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=jm,f=Zm,_=Km;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Cg(t,1,!1,null,null,a,s,null,u,f,_,Hg),t[qn]=n.current,kf(t),new ld(n)},Bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=jm,_=Zm,R=Km,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Cg(t,1,!0,n,a??null,s,u,V,f,_,R,Hg),n.context=Dg(null),a=n.current,s=ci(),s=Ai(s),u=Ga(s),u.callback=null,Va(a,u,s),a=s,n.current.lanes=a,de(n,a),Xi(n),t[qn]=n.current,kf(t),new cc(n)},Bo.version="19.2.8",Bo}var Qg;function $y(){if(Qg)return fd.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fd.exports=Jy(),fd.exports}var eS=$y();class tS{constructor(){this.ctx=null,this.volume=.5}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}playClick(){try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(400,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(80,this.ctx.currentTime+.08),i.gain.setValueAtTime(this.volume*.6,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}playDig(e="stone"){try{if(this.init(),!this.ctx)return;const i=this.ctx.sampleRate*.1,r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=r.getChannelData(0);for(let p=0;p<i;p++)l[p]=(Math.random()*2-1)*Math.exp(-p/(i*.3));const c=this.ctx.createBufferSource();c.buffer=r;const h=this.ctx.createBiquadFilter();h.type=e==="stone"?"bandpass":"lowpass",h.frequency.setValueAtTime(e==="stone"?800:400,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(this.volume*.8,this.ctx.currentTime),m.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),c.connect(h),h.connect(m),m.connect(this.ctx.destination),c.start()}catch{}}playFootstep(){try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(120,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(40,this.ctx.currentTime+.05),i.gain.setValueAtTime(this.volume*.3,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.05),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.05)}catch{}}playPop(){try{if(this.init(),!this.ctx)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(300,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(900,this.ctx.currentTime+.08),i.gain.setValueAtTime(this.volume*.4,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.08),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.08)}catch{}}}const Ye=new tS;function nS({onComplete:o}){const[e,i]=et.useState(0),[r,l]=et.useState(!1);return et.useEffect(()=>{const c=setInterval(()=>{i(h=>h>=100?(clearInterval(c),setTimeout(()=>{l(!0),setTimeout(o,800)},300),100):h+Math.floor(Math.random()*18)+8)},100);return()=>clearInterval(c)},[o]),C.jsx("div",{className:`fixed inset-0 bg-[#ef323d] flex flex-col items-center justify-center z-50 transition-opacity duration-700 select-none ${r?"opacity-0 pointer-events-none":"opacity-100"}`,onClick:()=>{Ye.playClick(),i(100)},children:C.jsxs("div",{className:"flex flex-col items-center max-w-md px-6 text-center",children:[C.jsx("div",{className:"text-white text-5xl md:text-7xl font-bold tracking-widest mb-6 font-['Press_Start_2P'] drop-shadow-lg",children:"MOJANG"}),C.jsx("div",{className:"text-white text-lg tracking-wider opacity-90 mb-12 font-['VT323'] text-2xl",children:"STUDIOS"}),C.jsx("div",{className:"w-64 h-3 bg-black/40 rounded-none border-2 border-black p-0.5",children:C.jsx("div",{className:"h-full bg-white transition-all duration-100 ease-out",style:{width:`${Math.min(100,e)}%`}})}),C.jsxs("div",{className:"text-white/80 font-['VT323'] text-xl mt-3",children:["Loading 1.21.4 assets... ",Math.min(100,e),"%"]})]})})}const Jg=["Also try Minecraft!","Java Edition 1.21.4!","Real Minecraft textures!","TCP-to-WebSocket bridge ready!","Multiplayer & Singleplayer!","Blocky goodness!","Open source web client!"];function iS({onNavigate:o}){const[e]=et.useState(()=>Jg[Math.floor(Math.random()*Jg.length)]),[i,r]=et.useState(0);et.useEffect(()=>{const c=setInterval(()=>{r(h=>(h+.05)%360)},50);return()=>clearInterval(c)},[]);const l=c=>{Ye.playClick(),o(c)};return C.jsxs("div",{className:"relative w-full h-screen overflow-hidden flex flex-col items-center justify-between select-none font-['VT323'] text-2xl",children:[C.jsx("div",{className:"absolute inset-0 bg-cover bg-center filter brightness-90 transform scale-105 transition-transform duration-1000",style:{backgroundImage:"url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')",transform:`scale(1.1) rotate(${Math.sin(i*.01)*1}deg)`}}),C.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-[1px]"}),C.jsxs("div",{className:"relative z-10 pt-12 flex flex-col items-center",children:[C.jsx("div",{className:"text-5xl md:text-8xl font-black text-yellow-300 tracking-wider font-['Press_Start_2P'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center animate-pulse",children:"MINECRAFT"}),C.jsxs("div",{className:"text-xl md:text-2xl text-white font-bold tracking-widest mt-2 drop-shadow-md",children:["JAVA EDITION ",C.jsx("span",{className:"text-yellow-400",children:"1.21.4"})," VANILLA"]}),C.jsx("div",{className:"absolute -right-16 top-24 transform rotate-[-15deg] text-yellow-300 text-2xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] animate-bounce pointer-events-none",children:e})]}),C.jsxs("div",{className:"relative z-10 flex flex-col gap-3 w-full max-w-md px-6 my-auto",children:[C.jsx("button",{onClick:()=>l("singleplayer"),onMouseEnter:()=>Ye.playFootstep(),className:"w-full py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold tracking-wide transition-all",children:"Tek Oyunculu (Singleplayer)"}),C.jsx("button",{onClick:()=>l("multiplayer"),onMouseEnter:()=>Ye.playFootstep(),className:"w-full py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold tracking-wide transition-all",children:"Çok Oyunculu (Multiplayer)"}),C.jsxs("button",{onClick:()=>l("realms"),onMouseEnter:()=>Ye.playFootstep(),className:"w-full py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold tracking-wide transition-all flex items-center justify-center gap-2",children:[C.jsx("span",{children:"Minecraft Realms"}),C.jsx("span",{className:"text-xs bg-red-600 px-1.5 py-0.5 text-white font-mono",children:"NEW"})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[C.jsx("button",{onClick:()=>l("options"),onMouseEnter:()=>Ye.playFootstep(),className:"py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-xl font-bold tracking-wide",children:"Seçenekler..."}),C.jsx("button",{onClick:()=>l("skins"),onMouseEnter:()=>Ye.playFootstep(),className:"py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-xl font-bold tracking-wide",children:"Karakter / Skin"})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-1",children:[C.jsx("button",{onClick:()=>l("tcp_bridge"),onMouseEnter:()=>Ye.playFootstep(),className:"py-2.5 bg-[#2563eb] hover:bg-[#3b82f6] active:bg-[#1d4ed8] text-white border-2 border-t-[#60a5fa] border-l-[#60a5fa] border-b-[#1e40af] border-r-[#1e40af] text-lg font-bold tracking-wide flex items-center justify-center gap-1.5",children:C.jsx("span",{children:"TCP Çevirici (Bridge)"})}),C.jsx("button",{onClick:()=>{Ye.playClick(),alert("Minecraft 1.21.4 Web Client is running in browser sandbox! Close tab to quit.")},onMouseEnter:()=>Ye.playFootstep(),className:"py-2.5 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-xl font-bold tracking-wide",children:"Oyundan Çık"})]})]}),C.jsxs("div",{className:"relative z-10 pb-4 text-white/80 text-lg flex justify-between w-full px-6 drop-shadow-md",children:[C.jsx("div",{children:"Minecraft 1.21.4 Vanilla Web Client (Java UI)"}),C.jsx("div",{children:"Copyright Mojang AB. Do not distribute!"})]})]})}const $g=[{id:"w1",name:"Yeni Dünya (Survival)",seed:"121400",gameMode:"survival",difficulty:"normal",lastPlayed:Date.now()-36e5},{id:"w2",name:"Yaratıcı Kale (Creative)",seed:"minecraft",gameMode:"creative",difficulty:"peaceful",lastPlayed:Date.now()-864e5}];function ev({onNavigate:o,onSelectWorld:e}){const[i,r]=et.useState($g),[l,c]=et.useState($g[0].id),h=()=>{Ye.playClick();const m=i.find(p=>p.id===l)||i[0];e(m),o("game")};return C.jsxs("div",{className:"relative w-full h-screen overflow-hidden flex flex-col items-center justify-between p-6 select-none font-['VT323'] text-2xl",children:[C.jsx("div",{className:"absolute inset-0 bg-cover bg-center filter brightness-50",style:{backgroundImage:"url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')"}}),C.jsx("div",{className:"absolute inset-0 bg-black/50"}),C.jsx("div",{className:"relative z-10 text-4xl text-white font-bold tracking-wider pt-6 drop-shadow-md",children:"Dünya Seçin (Select World)"}),C.jsx("div",{className:"relative z-10 w-full max-w-2xl h-[55vh] bg-black/60 border-4 border-[#373737] overflow-y-auto p-4 flex flex-col gap-3 shadow-inner",children:i.map(m=>{const p=m.id===l;return C.jsxs("div",{onClick:()=>{Ye.playClick(),c(m.id)},onDoubleClick:h,className:`p-3 border-2 cursor-pointer flex items-center justify-between transition-colors ${p?"bg-blue-900/60 border-blue-400 text-white":"bg-black/40 border-gray-700 hover:border-gray-500 text-gray-300"}`,children:[C.jsxs("div",{children:[C.jsx("div",{className:"text-3xl font-bold text-yellow-300",children:m.name}),C.jsxs("div",{className:"text-lg opacity-80",children:["Seed: ",m.seed," | Mod: ",m.gameMode," | Zorluk: ",m.difficulty]})]}),C.jsx("div",{className:"text-sm opacity-60",children:new Date(m.lastPlayed).toLocaleDateString()})]},m.id)})}),C.jsxs("div",{className:"relative z-10 w-full max-w-2xl flex flex-col gap-3 pb-8",children:[C.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[C.jsx("button",{onClick:h,onMouseEnter:()=>Ye.playFootstep(),className:"py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold",children:"Seçilen Dünyayı Oyna"}),C.jsx("button",{onClick:()=>{Ye.playClick(),o("create_world")},onMouseEnter:()=>Ye.playFootstep(),className:"py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold",children:"Yeni Dünya Oluştur"})]}),C.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[C.jsx("button",{onClick:()=>{Ye.playClick();const m=prompt("Yeni Dünya Adı:","Hayatta Kalma");if(m){const p={id:`world-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,name:m,seed:Math.floor(Math.random()*1e6).toString(),gameMode:"survival",difficulty:"normal",lastPlayed:Date.now()};r([p,...i]),c(p.id)}},onMouseEnter:()=>Ye.playFootstep(),className:"py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl",children:"Düzenle / Edit"}),C.jsx("button",{onClick:()=>{Ye.playClick(),i.length>1?(r(i.filter(m=>m.id!==l)),c(i[0].id)):alert("En az bir dünya kalmalı!")},onMouseEnter:()=>Ye.playFootstep(),className:"py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl",children:"Sil / Delete"}),C.jsx("button",{onClick:()=>{Ye.playClick(),o("menu")},onMouseEnter:()=>Ye.playFootstep(),className:"py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl",children:"Geri Dön"})]})]})]})}const aS=[{id:"local",name:"🏠 Yerel Vanilla (Localhost:25565)",ip:"127.0.0.1",port:25565,motd:"§eYerel Minecraft 1.21.4 Offline-Mode Sunucusu",version:"1.21.4",playersOnline:1,maxPlayers:20,ping:2,online:!0},{id:"note_online_only",name:"⚠️ Online-Mode Sunucuları (Hypixel, CubeCraft, vb.)",ip:"minecraft.net",port:25565,motd:"§cBu istemci sadece OFFLINE-MODE sunuculara bağlanabilir!",version:"1.21.4",playersOnline:0,maxPlayers:0,ping:-1,online:!1},{id:"custom_instruction",name:'📝 Custom Sunucu Eklemek İçin "Doğrudan Bağlan"a Basın',ip:"localhost",port:25565,motd:"§eKendi Offline-Mode Sunucunuzu IP/Port ile ekleyin",version:"1.21.4",playersOnline:0,maxPlayers:0,ping:-1,online:void 0}];function rS({onNavigate:o,onJoinServer:e}){const[i,r]=et.useState(()=>{try{const S=localStorage.getItem("mc_servers_list");if(S)return JSON.parse(S)}catch{}return aS}),[l,c]=et.useState(()=>{var S;return((S=i[0])==null?void 0:S.id)||"hypixel"}),[h,m]=et.useState(!1),[p,d]=et.useState(!1),[v,x]=et.useState(!1),[g,E]=et.useState("Minecraft Sunucum"),[T,D]=et.useState(""),[M,y]=et.useState("mc.hypixel.net"),F=async S=>{try{const N=await fetch(`/api/ping?host=${encodeURIComponent(S.ip)}&port=${S.port}`);if(!N.ok)throw new Error("Ping failed");const X=await N.json();return{...S,online:X.online,ping:X.ping>0?X.ping:S.ping,version:X.version||S.version,motd:X.motd||S.motd,playersOnline:X.playersOnline??S.playersOnline,maxPlayers:X.maxPlayers??S.maxPlayers,icon:X.icon||S.icon}}catch{return{...S,online:!1,ping:-1}}},k=async()=>{m(!0);const S=await Promise.all(i.map(N=>F(N)));r(S);try{localStorage.setItem("mc_servers_list",JSON.stringify(S))}catch{}m(!1)};et.useEffect(()=>{k()},[]);const w=S=>{Ye.playClick(),e(S),o("game")},H=async()=>{if(!T.trim())return;Ye.playClick();const S=T.trim().split(":"),N=S[0],X=S[1]?parseInt(S[1],10):25565,B={id:`srv-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name:g.trim()||N,ip:N,port:isNaN(X)?25565:X,motd:"Sunucu aranıyor...",version:"1.21.4",playersOnline:0,maxPlayers:0,ping:-1,online:void 0},Z=[...i,B];r(Z),c(B.id),d(!1),E("Minecraft Sunucum"),D("");const _e=await F(B);r(Ee=>{const ee=Ee.map(z=>z.id===B.id?_e:z);try{localStorage.setItem("mc_servers_list",JSON.stringify(ee))}catch{}return ee})},O=(S,N)=>{N.stopPropagation(),Ye.playClick();const X=i.filter(B=>B.id!==S);r(X),l===S&&X.length>0&&c(X[0].id);try{localStorage.setItem("mc_servers_list",JSON.stringify(X))}catch{}},P=i.find(S=>S.id===l)||i[0];return C.jsxs("div",{className:"relative w-full h-screen overflow-hidden flex flex-col items-center justify-between p-4 sm:p-6 select-none font-['VT323'] text-xl sm:text-2xl",children:[C.jsx("div",{className:"absolute inset-0 bg-cover bg-center filter brightness-40",style:{backgroundImage:"url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')"}}),C.jsx("div",{className:"absolute inset-0 bg-black/65"}),C.jsxs("div",{className:"relative z-10 text-center pt-2 sm:pt-4",children:[C.jsx("div",{className:"text-3xl sm:text-5xl text-white font-bold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",children:"🖧 Sunucu Bağlantısı (Multiplayer - 1.21.4)"}),C.jsxs("div",{className:"text-gray-300 text-sm sm:text-lg mt-2 px-4",children:[C.jsx("div",{className:"mb-1",children:'Sunucuya katılmak için çift tıklayın veya "Sunucuya Katıl" butonuna basın.'}),C.jsxs("div",{className:"text-amber-300 text-xs sm:text-sm",children:["⚠️ Not: Bu istemci sadece ",C.jsx("span",{className:"font-bold",children:"OFFLINE-MODE"})," Minecraft sunuculara bağlanabilir."]}),C.jsx("div",{className:"text-gray-400 text-xs sm:text-sm",children:"Hypixel, CubeCraft gibi büyük sunucular online-mode gerektirir ve ÇALIŞMAZ."})]}),h&&C.jsx("span",{className:"text-yellow-400 animate-pulse text-sm sm:text-base mt-2 block",children:"[Sunucular Pingleniyor...]"})]}),C.jsx("div",{className:"relative z-10 w-full max-w-3xl h-[54vh] sm:h-[58vh] bg-black/75 border-4 border-[#373737] overflow-y-auto p-2 sm:p-3 flex flex-col gap-2.5 shadow-2xl",children:i.map(S=>{var X,B;const N=S.id===l;return C.jsxs("div",{onClick:()=>{Ye.playClick(),c(S.id)},onDoubleClick:()=>w(S),className:`relative p-2.5 sm:p-3 border-2 cursor-pointer flex items-center justify-between transition-all rounded-sm ${N?"bg-blue-950/80 border-blue-400 ring-2 ring-blue-500/50 text-white":"bg-black/50 border-gray-700/80 hover:border-gray-500 text-gray-300"}`,children:[C.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[C.jsx("div",{className:"w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-stone-900 border-2 border-stone-600 rounded overflow-hidden flex items-center justify-center",children:S.icon?C.jsx("img",{src:S.icon,alt:S.name,referrerPolicy:"no-referrer",className:"w-full h-full object-cover [image-rendering:pixelated]",onError:Z=>{Z.target.style.display="none"}}):C.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-800 to-amber-900 text-white text-xs font-bold text-center px-1 font-mono",children:[C.jsx("span",{children:"MC"}),C.jsx("span",{className:"text-[10px] text-yellow-300",children:"1.21"})]})}),C.jsxs("div",{className:"flex flex-col overflow-hidden",children:[C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("span",{className:"text-2xl sm:text-3xl font-bold text-white tracking-wide truncate",children:S.name}),S.online===!1&&C.jsx("span",{className:"text-xs bg-red-950 border border-red-600 text-red-300 px-1.5 py-0.5 rounded font-mono",children:"Kapalı"})]}),C.jsx("div",{className:"text-base sm:text-xl text-gray-300 line-clamp-1 truncate font-mono",children:S.motd?S.motd.replace(/§[0-9a-fk-or]/gi,""):"Minecraft Sunucusu"}),C.jsxs("div",{className:"text-xs sm:text-sm text-yellow-400/90 font-mono flex items-center gap-2",children:[C.jsxs("span",{children:[S.ip,":",S.port]}),C.jsx("span",{className:"text-gray-400",children:"•"}),C.jsx("span",{className:"text-gray-300",children:S.version})]})]})]}),C.jsxs("div",{className:"flex flex-col items-end flex-shrink-0 pl-3",children:[C.jsxs("div",{className:"flex items-center gap-1.5 mb-1",title:S.online?`${S.ping}ms gecikme`:"Sunucu Çevrimdışı",children:[C.jsx("span",{className:"text-sm sm:text-base font-mono font-bold text-gray-300",children:S.online&&S.ping?`${S.ping}ms`:"---"}),C.jsxs("div",{className:"flex items-end gap-0.5 h-4 w-4 justify-end",children:[C.jsx("div",{className:`w-0.5 h-1 ${S.online?"bg-emerald-400":"bg-red-600"}`}),C.jsx("div",{className:`w-0.5 h-2 ${S.online&&S.ping<200?"bg-emerald-400":S.online?"bg-amber-400":"bg-red-600"}`}),C.jsx("div",{className:`w-0.5 h-3 ${S.online&&S.ping<120?"bg-emerald-400":S.online?"bg-amber-400":"bg-zinc-700"}`}),C.jsx("div",{className:`w-0.5 h-4 ${S.online&&S.ping<70?"bg-emerald-400":"bg-zinc-700"}`})]})]}),C.jsx("div",{className:"text-sm sm:text-xl font-mono text-right",children:S.online?C.jsxs("span",{className:"text-emerald-400 font-bold",children:[(X=S.playersOnline)==null?void 0:X.toLocaleString()," ",C.jsx("span",{className:"text-gray-400",children:"/"})," ",(B=S.maxPlayers)==null?void 0:B.toLocaleString()]}):C.jsx("span",{className:"text-red-400 text-sm",children:"Bağlantı Yok"})}),C.jsx("button",{onClick:Z=>O(S.id,Z),title:"Listeden Kaldır",className:"mt-1 text-xs text-red-400 hover:text-red-200 opacity-60 hover:opacity-100 transition-opacity",children:"[Sil]"})]})]},S.id)})}),C.jsxs("div",{className:"relative z-10 w-full max-w-3xl flex flex-col gap-2.5 pb-3 sm:pb-4",children:[C.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:gap-4",children:[C.jsx("button",{onClick:()=>{P&&w(P)},onMouseEnter:()=>Ye.playFootstep(),className:"py-2.5 sm:py-3 bg-[#42722b] hover:bg-[#538f36] text-white border-2 border-t-[#85c963] border-l-[#85c963] border-b-[#254217] border-r-[#254217] text-2xl sm:text-3xl font-bold shadow-lg",children:"🎮 Sunucuya Katıl (Join Server)"}),C.jsx("button",{onClick:()=>{Ye.playClick(),x(!0)},onMouseEnter:()=>Ye.playFootstep(),className:"py-2.5 sm:py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl sm:text-3xl font-bold shadow-lg",children:"Doğrudan Bağlan (Direct Connect)"})]}),C.jsxs("div",{className:"grid grid-cols-3 gap-2.5 sm:gap-3",children:[C.jsx("button",{onClick:()=>{Ye.playClick(),d(!0)},onMouseEnter:()=>Ye.playFootstep(),className:"py-2 sm:py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-lg sm:text-2xl font-bold",children:"➕ Sunucu Ekle"}),C.jsxs("button",{onClick:k,disabled:h,onMouseEnter:()=>Ye.playFootstep(),className:"py-2 sm:py-2.5 bg-[#727272] hover:bg-[#858585] disabled:opacity-50 text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-lg sm:text-2xl font-bold",children:["🔄 ",h?"Yenileniyor...":"Yenile (Refresh)"]}),C.jsx("button",{onClick:()=>{Ye.playClick(),o("menu")},onMouseEnter:()=>Ye.playFootstep(),className:"py-2 sm:py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-lg sm:text-2xl font-bold",children:"İptal / Geri Dön"})]})]}),p&&C.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:C.jsxs("div",{className:"bg-[#2b2b2b] border-4 border-[#444] p-6 w-full max-w-lg flex flex-col gap-4 text-white shadow-2xl",children:[C.jsx("div",{className:"text-3xl font-bold text-yellow-300 text-center border-b-2 border-gray-600 pb-2",children:"Sunucu Bilgisini Düzenle (Add Server)"}),C.jsxs("div",{className:"flex flex-col gap-1",children:[C.jsx("label",{className:"text-gray-300 text-lg",children:"Sunucu Adı (Server Name):"}),C.jsx("input",{type:"text",value:g,onChange:S=>E(S.target.value),className:"bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none focus:border-yellow-400",placeholder:"Örnek: Minecraft Sunucum",autoFocus:!0})]}),C.jsxs("div",{className:"flex flex-col gap-1",children:[C.jsx("label",{className:"text-gray-300 text-lg",children:"Sunucu Adresi (Server Address / IP:Port):"}),C.jsx("input",{type:"text",value:T,onChange:S=>D(S.target.value),className:"bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none focus:border-yellow-400 font-mono",placeholder:"example.com veya 192.168.1.100:25565"}),C.jsxs("span",{className:"text-xs text-gray-400",children:["⚠️ Sadece ",C.jsx("span",{className:"font-bold",children:"OFFLINE-MODE"})," Minecraft Java 1.21.x sunuculara bağlanabilir."]}),C.jsx("span",{className:"text-xs text-amber-300",children:"Örnek: Kendi/arkadaş sunucusu, Paper/Spigot offline-mode, vb."})]}),C.jsxs("div",{className:"flex gap-4 mt-2",children:[C.jsx("button",{onClick:H,className:"flex-1 py-3 bg-[#42722b] hover:bg-[#538f36] text-white border-2 border-t-[#85c963] border-l-[#85c963] border-b-[#254217] border-r-[#254217] text-2xl font-bold",children:"Tamam (Done)"}),C.jsx("button",{onClick:()=>d(!1),className:"flex-1 py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold",children:"İptal (Cancel)"})]})]})}),v&&C.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:C.jsxs("div",{className:"bg-[#2b2b2b] border-4 border-[#444] p-6 w-full max-w-lg flex flex-col gap-4 text-white shadow-2xl",children:[C.jsx("div",{className:"text-3xl font-bold text-yellow-300 text-center border-b-2 border-gray-600 pb-2",children:"🖧 Doğrudan Bağlantı (Direct Connect)"}),C.jsx("div",{className:"text-lg text-gray-300",children:"Girmek istediğiniz Minecraft 1.21.4 sunucu adresini yazın:"}),C.jsxs("div",{className:"text-sm text-amber-300 bg-black/50 border border-amber-600 p-3 rounded",children:[C.jsx("span",{className:"font-bold",children:"⚠️ Önemli:"})," Bu istemci sadece ",C.jsx("span",{className:"font-bold",children:"OFFLINE-MODE"})," sunuculara bağlanabilir.",C.jsx("br",{}),"Hypixel ve benzeri büyük sunucular çalışmaz."]}),C.jsx("input",{type:"text",value:M,onChange:S=>y(S.target.value),className:"bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none focus:border-yellow-400 font-mono",placeholder:"localhost:25565 veya example.com",autoFocus:!0}),C.jsxs("div",{className:"flex gap-4 mt-2",children:[C.jsx("button",{onClick:()=>{Ye.playClick(),x(!1);const S=M.trim().split(":"),N=S[0]||"localhost",X=S[1]?parseInt(S[1],10):25565,B={id:`direct-${Date.now()}`,name:N,ip:N,port:isNaN(X)?25565:X,motd:"Doğrudan Bağlantı",version:"1.21.4",playersOnline:1,maxPlayers:100,ping:25,online:!0};w(B)},className:"flex-1 py-3 bg-[#42722b] hover:bg-[#538f36] text-white border-2 border-t-[#85c963] border-l-[#85c963] border-b-[#254217] border-r-[#254217] text-2xl font-bold",children:"Sunucuya Katıl"}),C.jsx("button",{onClick:()=>x(!1),className:"flex-1 py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold",children:"İptal"})]})]})})]})}function sS({onNavigate:o,settings:e,onUpdateSettings:i}){const[r,l]=et.useState(e),c=()=>{Ye.playClick(),i(r),o("menu")};return C.jsxs("div",{className:"relative w-full h-screen overflow-hidden flex flex-col items-center justify-between p-6 select-none font-['VT323'] text-2xl",children:[C.jsx("div",{className:"absolute inset-0 bg-cover bg-center filter brightness-50",style:{backgroundImage:"url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')"}}),C.jsx("div",{className:"absolute inset-0 bg-black/50"}),C.jsx("div",{className:"relative z-10 text-4xl text-white font-bold tracking-wider pt-6 drop-shadow-md",children:"Seçenekler (Options) - 1.21.4"}),C.jsxs("div",{className:"relative z-10 w-full max-w-2xl h-[56vh] bg-black/60 border-4 border-[#373737] overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-inner text-white",children:[C.jsxs("div",{className:"flex flex-col gap-2",children:[C.jsxs("label",{className:"text-yellow-300",children:["Görüş Açısı (FOV): ",r.fov]}),C.jsx("input",{type:"range",min:"70",max:"110",value:r.fov,onChange:h=>{Ye.playFootstep(),l({...r,fov:Number(h.target.value)})},className:"accent-green-500 cursor-pointer"})]}),C.jsxs("div",{className:"flex flex-col gap-2",children:[C.jsxs("label",{className:"text-yellow-300",children:["Görüş Mesafesi (Render Distance): ",r.renderDistance," Çunks"]}),C.jsx("input",{type:"range",min:"2",max:"16",value:r.renderDistance,onChange:h=>{Ye.playFootstep(),l({...r,renderDistance:Number(h.target.value)})},className:"accent-green-500 cursor-pointer"})]}),C.jsxs("div",{className:"flex flex-col gap-2",children:[C.jsxs("label",{className:"text-yellow-300",children:["Ses Seviyesi (Volume): ",r.volume,"%"]}),C.jsx("input",{type:"range",min:"0",max:"100",value:r.volume,onChange:h=>{const m=Number(h.target.value);Ye.setVolume(m/100),l({...r,volume:m})},className:"accent-green-500 cursor-pointer"})]}),C.jsxs("div",{className:"flex flex-col gap-2",children:[C.jsx("label",{className:"text-yellow-300",children:"Grafikler (Graphics)"}),C.jsxs("select",{value:r.graphics,onChange:h=>{Ye.playClick(),l({...r,graphics:h.target.value})},className:"bg-black border-2 border-gray-600 px-3 py-2 text-white outline-none",children:[C.jsx("option",{value:"fast",children:"Hızlı (Fast)"}),C.jsx("option",{value:"fancy",children:"Süslü (Fancy)"}),C.jsx("option",{value:"fabulous",children:"Muhteşem (Fabulous 1.21)"})]})]}),C.jsxs("div",{className:"flex flex-col gap-2",children:[C.jsx("label",{className:"text-yellow-300",children:"Doku Paketi (Texture Pack)"}),C.jsxs("select",{value:r.texturePack,onChange:h=>{Ye.playClick(),l({...r,texturePack:h.target.value})},className:"bg-black border-2 border-yellow-500/80 px-3 py-2 text-white outline-none",children:[C.jsx("option",{value:"realistic",children:"✨ Gerçekçi HD (64x64 Realistic)"}),C.jsx("option",{value:"faithful",children:"💎 Faithful HD (32x32)"}),C.jsx("option",{value:"vanilla",children:"🧱 Klasik Vanilla (16x16)"})]})]}),C.jsxs("div",{className:"flex flex-col gap-2",children:[C.jsx("label",{className:"text-yellow-300",children:"Mobil Dokunmatik Kontroller"}),C.jsxs("select",{value:r.touchControls,onChange:h=>{Ye.playClick(),l({...r,touchControls:h.target.value})},className:"bg-black border-2 border-gray-600 px-3 py-2 text-white outline-none",children:[C.jsx("option",{value:"auto",children:"📱 Otomatik (Mobilde Aktif)"}),C.jsx("option",{value:"enabled",children:"Açık (Her Zaman Göster)"}),C.jsx("option",{value:"disabled",children:"Kapalı (Sadece Klavye/Mouse)"})]})]}),C.jsxs("div",{className:"flex flex-col gap-2",children:[C.jsx("label",{className:"text-yellow-300",children:"Dil (Language)"}),C.jsxs("select",{value:r.language,onChange:h=>{Ye.playClick(),l({...r,language:h.target.value})},className:"bg-black border-2 border-gray-600 px-3 py-2 text-white outline-none",children:[C.jsx("option",{value:"tr",children:"Türkçe (Turkey)"}),C.jsx("option",{value:"en",children:"English (US)"})]})]}),C.jsxs("div",{className:"flex flex-col gap-2",children:[C.jsx("label",{className:"text-yellow-300",children:"Arayüz Boyutu (UI Scale)"}),C.jsxs("select",{value:r.uiScale,onChange:h=>{Ye.playClick(),l({...r,uiScale:Number(h.target.value)})},className:"bg-black border-2 border-gray-600 px-3 py-2 text-white outline-none",children:[C.jsx("option",{value:"1",children:"Normal (1x)"}),C.jsx("option",{value:"2",children:"Geniş (2x)"}),C.jsx("option",{value:"3",children:"Büyük (3x)"})]})]})]}),C.jsx("div",{className:"relative z-10 w-full max-w-2xl flex gap-4 pb-6",children:C.jsx("button",{onClick:c,onMouseEnter:()=>Ye.playFootstep(),className:"flex-1 py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold",children:"Tamam (Save & Back)"})})]})}function oS({onNavigate:o,settings:e,onUpdateSettings:i}){const r=l=>{Ye.playClick(),i({skin:l})};return C.jsxs("div",{className:"relative w-full h-screen overflow-hidden flex flex-col items-center justify-between p-6 select-none font-['VT323'] text-2xl",children:[C.jsx("div",{className:"absolute inset-0 bg-cover bg-center filter brightness-50",style:{backgroundImage:"url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')"}}),C.jsx("div",{className:"absolute inset-0 bg-black/50"}),C.jsx("div",{className:"relative z-10 text-4xl text-white font-bold tracking-wider pt-6 drop-shadow-md",children:"Karakter Özelleştirme (Skin Customizer)"}),C.jsxs("div",{className:"relative z-10 w-full max-w-2xl h-[52vh] bg-black/60 border-4 border-[#373737] p-8 flex items-center justify-around gap-6 shadow-inner text-white",children:[C.jsxs("div",{onClick:()=>r("steve"),className:`flex flex-col items-center p-6 border-4 cursor-pointer transition-all ${e.skin==="steve"?"border-yellow-400 bg-yellow-900/40":"border-gray-700 bg-black/40 hover:border-gray-500"}`,children:[C.jsx("div",{className:"w-32 h-64 bg-cyan-800 border-2 border-black flex items-center justify-center text-xl font-bold",children:"STEVE"}),C.jsx("div",{className:"mt-4 text-2xl font-bold text-yellow-300",children:"Klasik (Steve)"})]}),C.jsxs("div",{onClick:()=>r("alex"),className:`flex flex-col items-center p-6 border-4 cursor-pointer transition-all ${e.skin==="alex"?"border-yellow-400 bg-yellow-900/40":"border-gray-700 bg-black/40 hover:border-gray-500"}`,children:[C.jsx("div",{className:"w-32 h-64 bg-orange-700 border-2 border-black flex items-center justify-center text-xl font-bold",children:"ALEX"}),C.jsx("div",{className:"mt-4 text-2xl font-bold text-yellow-300",children:"İnce Kol (Alex)"})]})]}),C.jsx("div",{className:"relative z-10 w-full max-w-2xl pb-6",children:C.jsx("button",{onClick:()=>{Ye.playClick(),o("menu")},onMouseEnter:()=>Ye.playFootstep(),className:"w-full py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold",children:"Geri Dön (Back)"})})]})}function lS({onNavigate:o}){const[e,i]=et.useState("play.hypixel.net"),[r,l]=et.useState("25565"),[c,h]=et.useState(null),[m,p]=et.useState(!1),d=async()=>{Ye.playClick(),p(!0),h(null);try{const x=await(await fetch(`/api/ping?host=${e}&port=${r}`)).json();h(x)}catch(v){h({online:!1,error:v.message})}finally{p(!1)}};return C.jsxs("div",{className:"relative w-full h-screen overflow-hidden flex flex-col items-center justify-between p-6 select-none font-['VT323'] text-2xl",children:[C.jsx("div",{className:"absolute inset-0 bg-cover bg-center filter brightness-50",style:{backgroundImage:"url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')"}}),C.jsx("div",{className:"absolute inset-0 bg-black/50"}),C.jsx("div",{className:"relative z-10 text-4xl text-white font-bold tracking-wider pt-6 drop-shadow-md",children:"TCP-to-WebSocket Çevirici (Bridge Mimarisi)"}),C.jsxs("div",{className:"relative z-10 w-full max-w-3xl h-[60vh] bg-black/70 border-4 border-[#373737] p-6 overflow-y-auto flex flex-col gap-4 text-white shadow-inner",children:[C.jsx("div",{className:"text-yellow-300 text-3xl font-bold",children:"Gerçek Minecraft Sunucularına Bağlantı Nasıl Çalışır?"}),C.jsxs("div",{className:"text-xl text-gray-300 leading-relaxed",children:["Tarayıcılar doğrudan ham TCP soketleri açamaz (güvenlik kısıtlamaları nedeniyle). Bu nedenle projede bir ",C.jsx("span",{className:"text-yellow-400 font-bold",children:"Node.js WebSocket-to-TCP Bridge (Çevirici)"})," mimarisi kodlanmıştır."]}),C.jsxs("div",{className:"bg-black/80 border-2 border-gray-700 p-4 text-lg font-mono text-green-400",children:["[Tarayıcı WebClient] ","-->"," [Node.js Express /ws-proxy] ","-->"," [Gerçek Minecraft Sunucusu (örn. Hypixel)]"]}),C.jsx("div",{className:"text-yellow-300 text-2xl font-bold mt-2",children:"Sunucu Bağlantı ve Ping Test Aracı"}),C.jsxs("div",{className:"flex gap-4 items-center",children:[C.jsx("input",{type:"text",value:e,onChange:v=>i(v.target.value),className:"flex-1 bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none",placeholder:"play.hypixel.net"}),C.jsx("input",{type:"text",value:r,onChange:v=>l(v.target.value),className:"w-28 bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none",placeholder:"25565"}),C.jsx("button",{onClick:d,disabled:m,className:"px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white border-2 border-blue-400 font-bold",children:m?"Test Ediliyor...":"Ping Test Et"})]}),c&&C.jsx("div",{className:`p-4 border-2 ${c.online?"bg-green-950/60 border-green-500 text-green-300":"bg-red-950/60 border-red-500 text-red-300"}`,children:c.online?C.jsxs("div",{children:[C.jsx("span",{className:"font-bold text-white",children:"✓ Sunucu Çevrimiçi!"})," Ping: ",c.ping,"ms | Sürüm: ",c.version]}):C.jsxs("div",{children:[C.jsx("span",{className:"font-bold text-white",children:"✗ Bağlantı Kurulamadı:"})," ",c.error||"Sunucu yanıt vermedi"]})})]}),C.jsx("div",{className:"relative z-10 w-full max-w-3xl pb-6",children:C.jsx("button",{onClick:()=>{Ye.playClick(),o("menu")},onMouseEnter:()=>Ye.playFootstep(),className:"w-full py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold",children:"Ana Menüye Dön"})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="185",cS=0,tv=1,uS=2,Fc=1,fS=2,Yo=3,mr=0,ei=1,Ta=2,Ra=0,Fs=1,nv=2,iv=3,av=4,dS=5,Vr=100,hS=101,pS=102,mS=103,gS=104,vS=200,_S=201,xS=202,yS=203,Kd=204,Qd=205,SS=206,bS=207,MS=208,ES=209,TS=210,AS=211,RS=212,wS=213,CS=214,Jd=0,$d=1,eh=2,Vs=3,th=4,nh=5,ih=6,ah=7,Xh=0,DS=1,NS=2,Ki=0,l_=1,c_=2,u_=3,f_=4,d_=5,h_=6,p_=7,m_=300,Wr=301,ks=302,md=303,gd=304,eu=306,rh=1e3,Aa=1001,sh=1002,An=1003,US=1004,fc=1005,zn=1006,vd=1007,dr=1008,di=1009,g_=1010,v_=1011,Zo=1012,Wh=1013,$i=1014,ji=1015,Ca=1016,qh=1017,Yh=1018,Ko=1020,__=35902,x_=35899,y_=1021,S_=1022,Ii=1023,Da=1026,Xr=1027,b_=1028,jh=1029,qr=1030,Zh=1031,Kh=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,oh=35840,lh=35841,ch=35842,uh=35843,fh=36196,dh=37492,hh=37496,ph=37488,mh=37489,qc=37490,gh=37491,vh=37808,_h=37809,xh=37810,yh=37811,Sh=37812,bh=37813,Mh=37814,Eh=37815,Th=37816,Ah=37817,Rh=37818,wh=37819,Ch=37820,Dh=37821,Nh=36492,Uh=36494,Lh=36495,Oh=36283,Ph=36284,Yc=36285,zh=36286,LS=3200,Ih=0,OS=1,fr="",bi="srgb",jc="srgb-linear",Zc="linear",Xt="srgb",Ts=7680,rv=519,PS=512,zS=513,IS=514,Qh=515,BS=516,FS=517,Jh=518,HS=519,sv=35044,ov="300 es",Zi=2e3,Qo=2001;function GS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function VS(){const o=Kc("canvas");return o.style.display="block",o}const lv={};function cv(...o){const e="THREE."+o.shift();console.log(e,...o)}function M_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function st(...o){o=M_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ct(...o){o=M_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Hs(...o){const e=o.join(" ");e in lv||(lv[e]=!0,st(...o))}function kS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const XS={[Jd]:$d,[eh]:ih,[th]:ah,[Vs]:nh,[$d]:Jd,[ih]:eh,[ah]:th,[nh]:Vs};class Yr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,Bh=180/Math.PI;function Jo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Rt(o,e,i){return Math.max(e,Math.min(i,o))}function WS(o,e){return(o%e+e)%e}function _d(o,e,i){return(1-i)*o+i*e}function Fo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const rp=class rp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rp.prototype.isVector2=!0;let Dt=rp;class qs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,m){let p=r[l+0],d=r[l+1],v=r[l+2],x=r[l+3],g=c[h+0],E=c[h+1],T=c[h+2],D=c[h+3];if(x!==D||p!==g||d!==E||v!==T){let M=p*g+d*E+v*T+x*D;M<0&&(g=-g,E=-E,T=-T,D=-D,M=-M);let y=1-m;if(M<.9995){const F=Math.acos(M),k=Math.sin(F);y=Math.sin(y*F)/k,m=Math.sin(m*F)/k,p=p*y+g*m,d=d*y+E*m,v=v*y+T*m,x=x*y+D*m}else{p=p*y+g*m,d=d*y+E*m,v=v*y+T*m,x=x*y+D*m;const F=1/Math.sqrt(p*p+d*d+v*v+x*x);p*=F,d*=F,v*=F,x*=F}}e[i]=p,e[i+1]=d,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,c,h){const m=r[l],p=r[l+1],d=r[l+2],v=r[l+3],x=c[h],g=c[h+1],E=c[h+2],T=c[h+3];return e[i]=m*T+v*x+p*E-d*g,e[i+1]=p*T+v*g+d*x-m*E,e[i+2]=d*T+v*E+m*g-p*x,e[i+3]=v*T-m*x-p*g-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,m=Math.cos,p=Math.sin,d=m(r/2),v=m(l/2),x=m(c/2),g=p(r/2),E=p(l/2),T=p(c/2);switch(h){case"XYZ":this._x=g*v*x+d*E*T,this._y=d*E*x-g*v*T,this._z=d*v*T+g*E*x,this._w=d*v*x-g*E*T;break;case"YXZ":this._x=g*v*x+d*E*T,this._y=d*E*x-g*v*T,this._z=d*v*T-g*E*x,this._w=d*v*x+g*E*T;break;case"ZXY":this._x=g*v*x-d*E*T,this._y=d*E*x+g*v*T,this._z=d*v*T+g*E*x,this._w=d*v*x-g*E*T;break;case"ZYX":this._x=g*v*x-d*E*T,this._y=d*E*x+g*v*T,this._z=d*v*T-g*E*x,this._w=d*v*x+g*E*T;break;case"YZX":this._x=g*v*x+d*E*T,this._y=d*E*x+g*v*T,this._z=d*v*T-g*E*x,this._w=d*v*x-g*E*T;break;case"XZY":this._x=g*v*x-d*E*T,this._y=d*E*x-g*v*T,this._z=d*v*T+g*E*x,this._w=d*v*x+g*E*T;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],m=i[5],p=i[9],d=i[2],v=i[6],x=i[10],g=r+m+x;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-p)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(r>m&&r>x){const E=2*Math.sqrt(1+r-m-x);this._w=(v-p)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(m>x){const E=2*Math.sqrt(1+m-r-x);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(p+v)/E}else{const E=2*Math.sqrt(1+x-r-m);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(p+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,m=i._x,p=i._y,d=i._z,v=i._w;return this._x=r*v+h*m+l*d-c*p,this._y=l*v+h*p+c*m-r*d,this._z=c*v+h*d+r*p-l*m,this._w=h*v-r*m-l*p-c*d,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,h=e._w,m=this.dot(e);m<0&&(r=-r,l=-l,c=-c,h=-h,m=-m);let p=1-i;if(m<.9995){const d=Math.acos(m),v=Math.sin(d);p=Math.sin(p*d)/v,i=Math.sin(i*d)/v,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sp=class sp{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(uv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,m=e.z,p=e.w,d=2*(h*l-m*r),v=2*(m*i-c*l),x=2*(c*r-h*i);return this.x=i+p*d+h*x-m*v,this.y=r+p*v+m*d-c*x,this.z=l+p*x+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,m=i.y,p=i.z;return this.x=l*p-c*m,this.y=c*h-r*p,this.z=r*m-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sp.prototype.isVector3=!0;let ie=sp;const xd=new ie,uv=new qs,op=class op{constructor(e,i,r,l,c,h,m,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,m,p,d)}set(e,i,r,l,c,h,m,p,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=m,v[3]=i,v[4]=c,v[5]=p,v[6]=r,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],m=r[3],p=r[6],d=r[1],v=r[4],x=r[7],g=r[2],E=r[5],T=r[8],D=l[0],M=l[3],y=l[6],F=l[1],k=l[4],w=l[7],H=l[2],O=l[5],P=l[8];return c[0]=h*D+m*F+p*H,c[3]=h*M+m*k+p*O,c[6]=h*y+m*w+p*P,c[1]=d*D+v*F+x*H,c[4]=d*M+v*k+x*O,c[7]=d*y+v*w+x*P,c[2]=g*D+E*F+T*H,c[5]=g*M+E*k+T*O,c[8]=g*y+E*w+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],m=e[5],p=e[6],d=e[7],v=e[8];return i*h*v-i*m*d-r*c*v+r*m*p+l*c*d-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],m=e[5],p=e[6],d=e[7],v=e[8],x=v*h-m*d,g=m*p-v*c,E=d*c-h*p,T=i*x+r*g+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/T;return e[0]=x*D,e[1]=(l*d-v*r)*D,e[2]=(m*r-l*h)*D,e[3]=g*D,e[4]=(v*i-l*p)*D,e[5]=(l*c-m*i)*D,e[6]=E*D,e[7]=(r*p-d*i)*D,e[8]=(h*i-r*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,m){const p=Math.cos(c),d=Math.sin(c);return this.set(r*p,r*d,-r*(p*h+d*m)+h+e,-l*d,l*p,-l*(-d*h+p*m)+m+i,0,0,1),this}scale(e,i){return Hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,i)),this}rotate(e){return Hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,i){return Hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};op.prototype.isMatrix3=!0;let ut=op;const yd=new ut,fv=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qS(){const o={enabled:!0,workingColorSpace:jc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xt&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xt&&(l.r=Gs(l.r),l.g=Gs(l.g),l.b=Gs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fr?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[jc]:{primaries:e,whitePoint:r,transfer:Zc,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),o}const At=qS();function wa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let As;class YS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=Kc("canvas")),As.width=e.width,As.height=e.height;const l=As.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Kc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=wa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(wa(i[r]/255)*255):i[r]=wa(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,m=l.length;h<m;h++)l[h].isDataTexture?c.push(Sd(l[h].image)):c.push(Sd(l[h]))}else c=Sd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?YS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let ZS=0;const bd=new ie;class In extends Yr{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Aa,l=Aa,c=zn,h=dr,m=Ii,p=di,d=In.DEFAULT_ANISOTROPY,v=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=Jo(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=m,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bd).x}get height(){return this.source.getSize(bd).y}get depth(){return this.source.getSize(bd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rh:e.x=e.x-Math.floor(e.x);break;case Aa:e.x=e.x<0?0:1;break;case sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rh:e.y=e.y-Math.floor(e.y);break;case Aa:e.y=e.y<0?0:1;break;case sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=m_;In.DEFAULT_ANISOTROPY=1;const lp=class lp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,d=p[0],v=p[4],x=p[8],g=p[1],E=p[5],T=p[9],D=p[2],M=p[6],y=p[10];if(Math.abs(v-g)<.01&&Math.abs(x-D)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+D)<.1&&Math.abs(T+M)<.1&&Math.abs(d+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const k=(d+1)/2,w=(E+1)/2,H=(y+1)/2,O=(v+g)/4,P=(x+D)/4,S=(T+M)/4;return k>w&&k>H?k<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(k),l=O/r,c=P/r):w>H?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=O/l,c=S/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=P/c,l=S/c),this.set(r,l,c,i),this}let F=Math.sqrt((M-T)*(M-T)+(x-D)*(x-D)+(g-v)*(g-v));return Math.abs(F)<.001&&(F=1),this.x=(M-T)/F,this.y=(x-D)/F,this.z=(g-v)/F,this.w=Math.acos((d+E+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lp.prototype.isVector4=!0;let un=lp;class KS extends Yr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new In(l),h=r.count;for(let m=0;m<h;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new $h(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends KS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class E_ extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QS extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=class $c{constructor(e,i,r,l,c,h,m,p,d,v,x,g,E,T,D,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,m,p,d,v,x,g,E,T,D,M)}set(e,i,r,l,c,h,m,p,d,v,x,g,E,T,D,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=h,y[9]=m,y[13]=p,y[2]=d,y[6]=v,y[10]=x,y[14]=g,y[3]=E,y[7]=T,y[11]=D,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Rs.setFromMatrixColumn(e,0).length(),c=1/Rs.setFromMatrixColumn(e,1).length(),h=1/Rs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),m=Math.sin(r),p=Math.cos(l),d=Math.sin(l),v=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const g=h*v,E=h*x,T=m*v,D=m*x;i[0]=p*v,i[4]=-p*x,i[8]=d,i[1]=E+T*d,i[5]=g-D*d,i[9]=-m*p,i[2]=D-g*d,i[6]=T+E*d,i[10]=h*p}else if(e.order==="YXZ"){const g=p*v,E=p*x,T=d*v,D=d*x;i[0]=g+D*m,i[4]=T*m-E,i[8]=h*d,i[1]=h*x,i[5]=h*v,i[9]=-m,i[2]=E*m-T,i[6]=D+g*m,i[10]=h*p}else if(e.order==="ZXY"){const g=p*v,E=p*x,T=d*v,D=d*x;i[0]=g-D*m,i[4]=-h*x,i[8]=T+E*m,i[1]=E+T*m,i[5]=h*v,i[9]=D-g*m,i[2]=-h*d,i[6]=m,i[10]=h*p}else if(e.order==="ZYX"){const g=h*v,E=h*x,T=m*v,D=m*x;i[0]=p*v,i[4]=T*d-E,i[8]=g*d+D,i[1]=p*x,i[5]=D*d+g,i[9]=E*d-T,i[2]=-d,i[6]=m*p,i[10]=h*p}else if(e.order==="YZX"){const g=h*p,E=h*d,T=m*p,D=m*d;i[0]=p*v,i[4]=D-g*x,i[8]=T*x+E,i[1]=x,i[5]=h*v,i[9]=-m*v,i[2]=-d*v,i[6]=E*x+T,i[10]=g-D*x}else if(e.order==="XZY"){const g=h*p,E=h*d,T=m*p,D=m*d;i[0]=p*v,i[4]=-x,i[8]=d*v,i[1]=g*x+D,i[5]=h*v,i[9]=E*x-T,i[2]=T*x-E,i[6]=m*v,i[10]=D*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JS,e,$S)}lookAt(e,i,r){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ar.crossVectors(r,ui),ar.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ar.crossVectors(r,ui)),ar.normalize(),dc.crossVectors(ui,ar),l[0]=ar.x,l[4]=dc.x,l[8]=ui.x,l[1]=ar.y,l[5]=dc.y,l[9]=ui.y,l[2]=ar.z,l[6]=dc.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],m=r[4],p=r[8],d=r[12],v=r[1],x=r[5],g=r[9],E=r[13],T=r[2],D=r[6],M=r[10],y=r[14],F=r[3],k=r[7],w=r[11],H=r[15],O=l[0],P=l[4],S=l[8],N=l[12],X=l[1],B=l[5],Z=l[9],_e=l[13],Ee=l[2],ee=l[6],z=l[10],G=l[14],ne=l[3],xe=l[7],De=l[11],L=l[15];return c[0]=h*O+m*X+p*Ee+d*ne,c[4]=h*P+m*B+p*ee+d*xe,c[8]=h*S+m*Z+p*z+d*De,c[12]=h*N+m*_e+p*G+d*L,c[1]=v*O+x*X+g*Ee+E*ne,c[5]=v*P+x*B+g*ee+E*xe,c[9]=v*S+x*Z+g*z+E*De,c[13]=v*N+x*_e+g*G+E*L,c[2]=T*O+D*X+M*Ee+y*ne,c[6]=T*P+D*B+M*ee+y*xe,c[10]=T*S+D*Z+M*z+y*De,c[14]=T*N+D*_e+M*G+y*L,c[3]=F*O+k*X+w*Ee+H*ne,c[7]=F*P+k*B+w*ee+H*xe,c[11]=F*S+k*Z+w*z+H*De,c[15]=F*N+k*_e+w*G+H*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],m=e[5],p=e[9],d=e[13],v=e[2],x=e[6],g=e[10],E=e[14],T=e[3],D=e[7],M=e[11],y=e[15],F=p*E-d*g,k=m*E-d*x,w=m*g-p*x,H=h*E-d*v,O=h*g-p*v,P=h*x-m*v;return i*(D*F-M*k+y*w)-r*(T*F-M*H+y*O)+l*(T*k-D*H+y*P)-c*(T*w-D*O+M*P)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],h=e[5],m=e[9],p=e[2],d=e[6],v=e[10];return i*(h*v-m*d)-r*(c*v-m*p)+l*(c*d-h*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],m=e[5],p=e[6],d=e[7],v=e[8],x=e[9],g=e[10],E=e[11],T=e[12],D=e[13],M=e[14],y=e[15],F=i*m-r*h,k=i*p-l*h,w=i*d-c*h,H=r*p-l*m,O=r*d-c*m,P=l*d-c*p,S=v*D-x*T,N=v*M-g*T,X=v*y-E*T,B=x*M-g*D,Z=x*y-E*D,_e=g*y-E*M,Ee=F*_e-k*Z+w*B+H*X-O*N+P*S;if(Ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/Ee;return e[0]=(m*_e-p*Z+d*B)*ee,e[1]=(l*Z-r*_e-c*B)*ee,e[2]=(D*P-M*O+y*H)*ee,e[3]=(g*O-x*P-E*H)*ee,e[4]=(p*X-h*_e-d*N)*ee,e[5]=(i*_e-l*X+c*N)*ee,e[6]=(M*w-T*P-y*k)*ee,e[7]=(v*P-g*w+E*k)*ee,e[8]=(h*Z-m*X+d*S)*ee,e[9]=(r*X-i*Z-c*S)*ee,e[10]=(T*O-D*w+y*F)*ee,e[11]=(x*w-v*O-E*F)*ee,e[12]=(m*N-h*B-p*S)*ee,e[13]=(i*B-r*N+l*S)*ee,e[14]=(D*k-T*H-M*F)*ee,e[15]=(v*H-x*k+g*F)*ee,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,m=e.y,p=e.z,d=c*h,v=c*m;return this.set(d*h+r,d*m-l*p,d*p+l*m,0,d*m+l*p,v*m+r,v*p-l*h,0,d*p-l*m,v*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,m=i._z,p=i._w,d=c+c,v=h+h,x=m+m,g=c*d,E=c*v,T=c*x,D=h*v,M=h*x,y=m*x,F=p*d,k=p*v,w=p*x,H=r.x,O=r.y,P=r.z;return l[0]=(1-(D+y))*H,l[1]=(E+w)*H,l[2]=(T-k)*H,l[3]=0,l[4]=(E-w)*O,l[5]=(1-(g+y))*O,l[6]=(M+F)*O,l[7]=0,l[8]=(T+k)*P,l[9]=(M-F)*P,l[10]=(1-(g+D))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let h=Rs.set(l[0],l[1],l[2]).length();const m=Rs.set(l[4],l[5],l[6]).length(),p=Rs.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Oi.copy(this);const d=1/h,v=1/m,x=1/p;return Oi.elements[0]*=d,Oi.elements[1]*=d,Oi.elements[2]*=d,Oi.elements[4]*=v,Oi.elements[5]*=v,Oi.elements[6]*=v,Oi.elements[8]*=x,Oi.elements[9]*=x,Oi.elements[10]*=x,i.setFromRotationMatrix(Oi),r.x=h,r.y=m,r.z=p,this}makePerspective(e,i,r,l,c,h,m=Zi,p=!1){const d=this.elements,v=2*c/(i-e),x=2*c/(r-l),g=(i+e)/(i-e),E=(r+l)/(r-l);let T,D;if(p)T=c/(h-c),D=h*c/(h-c);else if(m===Zi)T=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(m===Qo)T=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=D,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,r,l,c,h,m=Zi,p=!1){const d=this.elements,v=2/(i-e),x=2/(r-l),g=-(i+e)/(i-e),E=-(r+l)/(r-l);let T,D;if(p)T=1/(h-c),D=h/(h-c);else if(m===Zi)T=-2/(h-c),D=-(h+c)/(h-c);else if(m===Qo)T=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=T,d[14]=D,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};$c.prototype.isMatrix4=!0;let cn=$c;const Rs=new ie,Oi=new cn,JS=new ie(0,0,0),$S=new ie(1,1,1),ar=new ie,dc=new ie,ui=new ie,hv=new cn,pv=new qs;class gr{constructor(e=0,i=0,r=0,l=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],m=l[8],p=l[1],d=l[5],v=l[9],x=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(m,E),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(m,E));break;case"XZY":this._z=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return pv.setFromEuler(this),this.setFromQuaternion(pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eb=0;const mv=new ie,ws=new qs,ya=new cn,hc=new ie,Ho=new ie,tb=new ie,nb=new qs,gv=new ie(1,0,0),vv=new ie(0,1,0),_v=new ie(0,0,1),xv={type:"added"},ib={type:"removed"},Cs={type:"childadded",child:null},Md={type:"childremoved",child:null};class Bn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new ie,i=new gr,r=new qs,l=new ie(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new ut}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ws.setFromAxisAngle(e,i),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,i){return ws.setFromAxisAngle(e,i),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(gv,e)}rotateY(e){return this.rotateOnAxis(vv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,i){return mv.copy(e).applyQuaternion(this.quaternion),this.position.add(mv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(gv,e)}translateY(e){return this.translateOnAxis(vv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?hc.copy(e):hc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Ho,hc,this.up):ya.lookAt(hc,Ho,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),ws.setFromRotationMatrix(ya),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xv),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ib),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xv),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let h=0,m=c.length;h<m;h++)c[h].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,p){return m[p.uuid]===void 0&&(m[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const p=m.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const x=p[d];c(e.shapes,x)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let p=0,d=this.material.length;p<d;p++)m.push(c(e.materials,this.material[p]));l.material=m}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const p=this.animations[m];l.animations.push(c(e.animations,p))}}if(i){const m=h(e.geometries),p=h(e.materials),d=h(e.textures),v=h(e.images),x=h(e.shapes),g=h(e.skeletons),E=h(e.animations),T=h(e.nodes);m.length>0&&(r.geometries=m),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(m){const p=[];for(const d in m){const v=m[d];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new ie(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ab={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const m=this._targetRay,p=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const D of e.hand.values()){const M=i.getJointPose(D,r),y=this._getHandJoint(d,D);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=v.position.distanceTo(x.position),E=.02,T=.005;d.inputState.pinching&&g>E+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=E-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return m!==null&&(m.visible=l!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new pc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const T_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Td(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Et{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=At.workingColorSpace){if(e=WS(e,1),i=Rt(i,0,1),r=Rt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Td(h,c,e+1/3),this.g=Td(h,c,e),this.b=Td(h,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=bi){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],m=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=bi){const r=T_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return At.workingToColorSpace(Vn.copy(this),e),Math.round(Rt(Vn.r*255,0,255))*65536+Math.round(Rt(Vn.g*255,0,255))*256+Math.round(Rt(Vn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(Vn.copy(this),i);const r=Vn.r,l=Vn.g,c=Vn.b,h=Math.max(r,l,c),m=Math.min(r,l,c);let p,d;const v=(m+h)/2;if(m===h)p=0,d=0;else{const x=h-m;switch(d=v<=.5?x/(h+m):x/(2-h-m),h){case r:p=(l-c)/x+(l<c?6:0);break;case l:p=(c-r)/x+2;break;case c:p=(r-l)/x+4;break}p/=6}return e.h=p,e.s=d,e.l=v,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(Vn.copy(this),i),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=bi){At.workingToColorSpace(Vn.copy(this),e);const i=Vn.r,r=Vn.g,l=Vn.b;return e!==bi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+i,rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(rr),e.getHSL(mc);const r=_d(rr.h,mc.h,i),l=_d(rr.s,mc.s,i),c=_d(rr.l,mc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Et;Et.NAMES=T_;class tp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(e),this.density=i}clone(){return new tp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rb extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gr,this.environmentIntensity=1,this.environmentRotation=new gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new ie,Sa=new ie,Ad=new ie,ba=new ie,Ds=new ie,Ns=new ie,yv=new ie,Rd=new ie,wd=new ie,Cd=new ie,Dd=new un,Nd=new un,Ud=new un;class Ei{constructor(e=new ie,i=new ie,r=new ie){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Pi.subVectors(e,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Pi.subVectors(l,i),Sa.subVectors(r,i),Ad.subVectors(e,i);const h=Pi.dot(Pi),m=Pi.dot(Sa),p=Pi.dot(Ad),d=Sa.dot(Sa),v=Sa.dot(Ad),x=h*d-m*m;if(x===0)return c.set(0,0,0),null;const g=1/x,E=(d*p-m*v)*g,T=(h*v-m*p)*g;return c.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,i,r,l,c,h,m,p){return this.getBarycoord(e,i,r,l,ba)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ba.x),p.addScaledVector(h,ba.y),p.addScaledVector(m,ba.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return Dd.setScalar(0),Nd.setScalar(0),Ud.setScalar(0),Dd.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,r),Ud.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Dd,c.x),h.addScaledVector(Nd,c.y),h.addScaledVector(Ud,c.z),h}static isFrontFacing(e,i,r,l){return Pi.subVectors(r,i),Sa.subVectors(e,i),Pi.cross(Sa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Pi.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,m;Ds.subVectors(l,r),Ns.subVectors(c,r),Rd.subVectors(e,r);const p=Ds.dot(Rd),d=Ns.dot(Rd);if(p<=0&&d<=0)return i.copy(r);wd.subVectors(e,l);const v=Ds.dot(wd),x=Ns.dot(wd);if(v>=0&&x<=v)return i.copy(l);const g=p*x-v*d;if(g<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(r).addScaledVector(Ds,h);Cd.subVectors(e,c);const E=Ds.dot(Cd),T=Ns.dot(Cd);if(T>=0&&E<=T)return i.copy(c);const D=E*d-p*T;if(D<=0&&d>=0&&T<=0)return m=d/(d-T),i.copy(r).addScaledVector(Ns,m);const M=v*T-E*x;if(M<=0&&x-v>=0&&E-T>=0)return yv.subVectors(c,l),m=(x-v)/(x-v+(E-T)),i.copy(l).addScaledVector(yv,m);const y=1/(M+D+g);return h=D*y,m=g*y,i.copy(r).addScaledVector(Ds,h).addScaledVector(Ns,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $o{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,m=c.count;h<m;h++)e.isMesh===!0?e.getVertexPosition(h,zi):zi.fromBufferAttribute(c,h),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),vc.subVectors(this.max,Go),Us.subVectors(e.a,Go),Ls.subVectors(e.b,Go),Os.subVectors(e.c,Go),sr.subVectors(Ls,Us),or.subVectors(Os,Ls),Ir.subVectors(Us,Os);let i=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Ir.z,Ir.y,sr.z,0,-sr.x,or.z,0,-or.x,Ir.z,0,-Ir.x,-sr.y,sr.x,0,-or.y,or.x,0,-Ir.y,Ir.x,0];return!Ld(i,Us,Ls,Os,vc)||(i=[1,0,0,0,1,0,0,0,1],!Ld(i,Us,Ls,Os,vc))?!1:(_c.crossVectors(sr,or),i=[_c.x,_c.y,_c.z],Ld(i,Us,Ls,Os,vc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],zi=new ie,gc=new $o,Us=new ie,Ls=new ie,Os=new ie,sr=new ie,or=new ie,Ir=new ie,Go=new ie,vc=new ie,_c=new ie,Br=new ie;function Ld(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Br.fromArray(o,c);const m=l.x*Math.abs(Br.x)+l.y*Math.abs(Br.y)+l.z*Math.abs(Br.z),p=e.dot(Br),d=i.dot(Br),v=r.dot(Br);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>m)return!1}return!0}const bn=new ie,xc=new Dt;let sb=0;class Ji extends Yr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=sv,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix3(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyMatrix4(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.applyNormalMatrix(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)bn.fromBufferAttribute(this,i),bn.transformDirection(e),this.setXYZ(i,bn.x,bn.y,bn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Fo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),r=$n(r,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class A_ extends Ji{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class R_ extends Ji{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ti extends Ji{constructor(e,i,r){super(new Float32Array(e),i,r)}}const ob=new $o,Vo=new ie,Od=new ie;class tu{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ob.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Od)),this.expandByPoint(Vo.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lb=0;const Si=new cn,Pd=new Bn,Ps=new ie,fi=new $o,ko=new $o,Dn=new ie;class Fi extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(GS(e)?R_:A_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,r){return Si.makeTranslation(e,i,r),this.applyMatrix4(Si),this}scale(e,i,r){return Si.makeScale(e,i,r),this.applyMatrix4(Si),this}lookAt(e){return Pd.lookAt(e),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ti(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const m=i[c];ko.setFromBufferAttribute(m),this.morphTargetsRelative?(Dn.addVectors(fi.min,ko.min),fi.expandByPoint(Dn),Dn.addVectors(fi.max,ko.max),fi.expandByPoint(Dn)):(fi.expandByPoint(ko.min),fi.expandByPoint(ko.max))}fi.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)Dn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Dn));if(i)for(let c=0,h=i.length;c<h;c++){const m=i[c],p=this.morphTargetsRelative;for(let d=0,v=m.count;d<v;d++)Dn.fromBufferAttribute(m,d),p&&(Ps.fromBufferAttribute(e,d),Dn.add(Ps)),l=Math.max(l,r.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new Ji(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const m=[],p=[];for(let S=0;S<r.count;S++)m[S]=new ie,p[S]=new ie;const d=new ie,v=new ie,x=new ie,g=new Dt,E=new Dt,T=new Dt,D=new ie,M=new ie;function y(S,N,X){d.fromBufferAttribute(r,S),v.fromBufferAttribute(r,N),x.fromBufferAttribute(r,X),g.fromBufferAttribute(c,S),E.fromBufferAttribute(c,N),T.fromBufferAttribute(c,X),v.sub(d),x.sub(d),E.sub(g),T.sub(g);const B=1/(E.x*T.y-T.x*E.y);isFinite(B)&&(D.copy(v).multiplyScalar(T.y).addScaledVector(x,-E.y).multiplyScalar(B),M.copy(x).multiplyScalar(E.x).addScaledVector(v,-T.x).multiplyScalar(B),m[S].add(D),m[N].add(D),m[X].add(D),p[S].add(M),p[N].add(M),p[X].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let S=0,N=F.length;S<N;++S){const X=F[S],B=X.start,Z=X.count;for(let _e=B,Ee=B+Z;_e<Ee;_e+=3)y(e.getX(_e+0),e.getX(_e+1),e.getX(_e+2))}const k=new ie,w=new ie,H=new ie,O=new ie;function P(S){H.fromBufferAttribute(l,S),O.copy(H);const N=m[S];k.copy(N),k.sub(H.multiplyScalar(H.dot(N))).normalize(),w.crossVectors(O,N);const B=w.dot(p[S])<0?-1:1;h.setXYZW(S,k.x,k.y,k.z,B)}for(let S=0,N=F.length;S<N;++S){const X=F[S],B=X.start,Z=X.count;for(let _e=B,Ee=B+Z;_e<Ee;_e+=3)P(e.getX(_e+0)),P(e.getX(_e+1)),P(e.getX(_e+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,E=r.count;g<E;g++)r.setXYZ(g,0,0,0);const l=new ie,c=new ie,h=new ie,m=new ie,p=new ie,d=new ie,v=new ie,x=new ie;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),D=e.getX(g+1),M=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,D),d.fromBufferAttribute(r,M),m.add(v),p.add(v),d.add(v),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(D,p.x,p.y,p.z),r.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),x.subVectors(l,c),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Dn.fromBufferAttribute(e,i),Dn.normalize(),e.setXYZ(i,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function e(m,p){const d=m.array,v=m.itemSize,x=m.normalized,g=new d.constructor(p.length*v);let E=0,T=0;for(let D=0,M=p.length;D<M;D++){m.isInterleavedBufferAttribute?E=p[D]*m.data.stride+m.offset:E=p[D]*v;for(let y=0;y<v;y++)g[T++]=d[E++]}return new Ji(g,v,x)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fi,r=this.index.array,l=this.attributes;for(const m in l){const p=l[m],d=e(p,r);i.setAttribute(m,d)}const c=this.morphAttributes;for(const m in c){const p=[],d=c[m];for(let v=0,x=d.length;v<x;v++){const g=d[v],E=e(g,r);p.push(E)}i.morphAttributes[m]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let m=0,p=h.length;m<p;m++){const d=h[m];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const d=r[p];e.data.attributes[p]=d.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let x=0,g=d.length;x<g;x++){const E=d[x];v.push(E.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],x=c[d];for(let g=0,E=x.length;g<E;g++)v.push(x[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cb=0;class Ys extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Fs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Qd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Qd&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const m in c){const p=c[m];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Dt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ea=new ie,zd=new ie,yc=new ie,lr=new ie,Id=new ie,Sc=new ie,Bd=new ie;class np{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){zd.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),lr.copy(this.origin).sub(zd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(yc),m=lr.dot(this.direction),p=-lr.dot(yc),d=lr.lengthSq(),v=Math.abs(1-h*h);let x,g,E,T;if(v>0)if(x=h*p-m,g=h*m-p,T=c*v,x>=0)if(g>=-T)if(g<=T){const D=1/v;x*=D,g*=D,E=x*(x+h*g+2*m)+g*(h*x+g+2*p)+d}else g=c,x=Math.max(0,-(h*g+m)),E=-x*x+g*(g+2*p)+d;else g=-c,x=Math.max(0,-(h*g+m)),E=-x*x+g*(g+2*p)+d;else g<=-T?(x=Math.max(0,-(-h*c+m)),g=x>0?-c:Math.min(Math.max(-c,-p),c),E=-x*x+g*(g+2*p)+d):g<=T?(x=0,g=Math.min(Math.max(-c,-p),c),E=g*(g+2*p)+d):(x=Math.max(0,-(h*c+m)),g=x>0?c:Math.min(Math.max(-c,-p),c),E=-x*x+g*(g+2*p)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+m)),E=-x*x+g*(g+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(zd).addScaledVector(yc,g),E}intersectSphere(e,i){Ea.subVectors(e.center,this.origin);const r=Ea.dot(this.direction),l=Ea.dot(Ea)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),m=r-h,p=r+h;return p<0?null:m<0?this.at(p,i):this.at(m,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,m,p;const d=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,h=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,h=(e.min.y-g.y)*v),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(m=(e.min.z-g.z)*x,p=(e.max.z-g.z)*x):(m=(e.max.z-g.z)*x,p=(e.min.z-g.z)*x),r>p||m>l)||((m>r||r!==r)&&(r=m),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,i,r,l,c){Id.subVectors(i,e),Sc.subVectors(r,e),Bd.crossVectors(Id,Sc);let h=this.direction.dot(Bd),m;if(h>0){if(l)return null;m=1}else if(h<0)m=-1,h=-h;else return null;lr.subVectors(this.origin,e);const p=m*this.direction.dot(Sc.crossVectors(lr,Sc));if(p<0)return null;const d=m*this.direction.dot(Id.cross(lr));if(d<0||p+d>h)return null;const v=-m*lr.dot(Bd);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class w_ extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sv=new cn,Fr=new np,bc=new tu,bv=new ie,Mc=new ie,Ec=new ie,Tc=new ie,Fd=new ie,Ac=new ie,Mv=new ie,Rc=new ie;class Bi extends Bn{constructor(e=new Fi,i=new w_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const m=this.morphTargetInfluences;if(c&&m){Ac.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const v=m[p],x=c[p];v!==0&&(Fd.fromBufferAttribute(x,e),h?Ac.addScaledVector(Fd,v):Ac.addScaledVector(Fd.sub(i),v))}i.add(Ac)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(c),Fr.copy(e.ray).recast(e.near),!(bc.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(bc,bv)===null||Fr.origin.distanceToSquared(bv)>(e.far-e.near)**2))&&(Sv.copy(c).invert(),Fr.copy(e.ray).applyMatrix4(Sv),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Fr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,m=c.index,p=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,x=c.attributes.normal,g=c.groups,E=c.drawRange;if(m!==null)if(Array.isArray(h))for(let T=0,D=g.length;T<D;T++){const M=g[T],y=h[M.materialIndex],F=Math.max(M.start,E.start),k=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let w=F,H=k;w<H;w+=3){const O=m.getX(w),P=m.getX(w+1),S=m.getX(w+2);l=wc(this,y,e,r,d,v,x,O,P,S),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),D=Math.min(m.count,E.start+E.count);for(let M=T,y=D;M<y;M+=3){const F=m.getX(M),k=m.getX(M+1),w=m.getX(M+2);l=wc(this,h,e,r,d,v,x,F,k,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,D=g.length;T<D;T++){const M=g[T],y=h[M.materialIndex],F=Math.max(M.start,E.start),k=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let w=F,H=k;w<H;w+=3){const O=w,P=w+1,S=w+2;l=wc(this,y,e,r,d,v,x,O,P,S),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),D=Math.min(p.count,E.start+E.count);for(let M=T,y=D;M<y;M+=3){const F=M,k=M+1,w=M+2;l=wc(this,h,e,r,d,v,x,F,k,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function ub(o,e,i,r,l,c,h,m){let p;if(e.side===ei?p=r.intersectTriangle(h,c,l,!0,m):p=r.intersectTriangle(l,c,h,e.side===mr,m),p===null)return null;Rc.copy(m),Rc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(Rc);return d<i.near||d>i.far?null:{distance:d,point:Rc.clone(),object:o}}function wc(o,e,i,r,l,c,h,m,p,d){o.getVertexPosition(m,Mc),o.getVertexPosition(p,Ec),o.getVertexPosition(d,Tc);const v=ub(o,e,i,r,Mc,Ec,Tc,Mv);if(v){const x=new ie;Ei.getBarycoord(Mv,Mc,Ec,Tc,x),l&&(v.uv=Ei.getInterpolatedAttribute(l,m,p,d,x,new Dt)),c&&(v.uv1=Ei.getInterpolatedAttribute(c,m,p,d,x,new Dt)),h&&(v.normal=Ei.getInterpolatedAttribute(h,m,p,d,x,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:m,b:p,c:d,normal:new ie,materialIndex:0};Ei.getNormal(Mc,Ec,Tc,g.normal),v.face=g,v.barycoord=x}return v}class fb extends In{constructor(e=null,i=1,r=1,l,c,h,m,p,d=An,v=An,x,g){super(null,h,m,p,d,v,l,c,x,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hd=new ie,db=new ie,hb=new ut;class Gr{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Hd.subVectors(r,i).cross(db.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(Hd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||hb.getNormalMatrix(e),l=this.coplanarPoint(Hd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new tu,pb=new Dt(.5,.5),Cc=new ie;class ip{constructor(e=new Gr,i=new Gr,r=new Gr,l=new Gr,c=new Gr,h=new Gr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const m=this.planes;return m[0].copy(e),m[1].copy(i),m[2].copy(r),m[3].copy(l),m[4].copy(c),m[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Zi,r=!1){const l=this.planes,c=e.elements,h=c[0],m=c[1],p=c[2],d=c[3],v=c[4],x=c[5],g=c[6],E=c[7],T=c[8],D=c[9],M=c[10],y=c[11],F=c[12],k=c[13],w=c[14],H=c[15];if(l[0].setComponents(d-h,E-v,y-T,H-F).normalize(),l[1].setComponents(d+h,E+v,y+T,H+F).normalize(),l[2].setComponents(d+m,E+x,y+D,H+k).normalize(),l[3].setComponents(d-m,E-x,y-D,H-k).normalize(),r)l[4].setComponents(p,g,M,w).normalize(),l[5].setComponents(d-p,E-g,y-M,H-w).normalize();else if(l[4].setComponents(d-p,E-g,y-M,H-w).normalize(),i===Zi)l[5].setComponents(d+p,E+g,y+M,H+w).normalize();else if(i===Qo)l[5].setComponents(p,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const i=pb.distanceTo(e.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C_ extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qc=new ie,Jc=new ie,Ev=new cn,Xo=new np,Dc=new tu,Gd=new ie,Tv=new ie;class mb extends Bn{constructor(e=new Fi,i=new C_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Qc.fromBufferAttribute(i,l-1),Jc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Qc.distanceTo(Jc);e.setAttribute("lineDistance",new Ti(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dc.copy(r.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,e.ray.intersectsSphere(Dc)===!1)return;Ev.copy(l).invert(),Xo.copy(e.ray).applyMatrix4(Ev);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=m*m,d=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const E=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let D=E,M=T-1;D<M;D+=d){const y=v.getX(D),F=v.getX(D+1),k=Nc(this,e,Xo,p,y,F,D);k&&i.push(k)}if(this.isLineLoop){const D=v.getX(T-1),M=v.getX(E),y=Nc(this,e,Xo,p,D,M,T-1);y&&i.push(y)}}else{const E=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let D=E,M=T-1;D<M;D+=d){const y=Nc(this,e,Xo,p,D,D+1,D);y&&i.push(y)}if(this.isLineLoop){const D=Nc(this,e,Xo,p,T-1,E,T-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Nc(o,e,i,r,l,c,h){const m=o.geometry.attributes.position;if(Qc.fromBufferAttribute(m,l),Jc.fromBufferAttribute(m,c),i.distanceSqToSegment(Qc,Jc,Gd,Tv)>r)return;Gd.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Gd);if(!(d<e.near||d>e.far))return{distance:d,point:Tv.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Av=new ie,Rv=new ie;class gb extends mb{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Av.fromBufferAttribute(i,l),Rv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Av.distanceTo(Rv);e.setAttribute("lineDistance",new Ti(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D_ extends In{constructor(e=[],i=Wr,r,l,c,h,m,p,d,v){super(e,i,r,l,c,h,m,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vb extends In{constructor(e,i,r,l,c,h,m,p,d){super(e,i,r,l,c,h,m,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xs extends In{constructor(e,i,r=$i,l,c,h,m=An,p=An,d,v=Da,x=1){if(v!==Da&&v!==Xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:x};super(g,l,c,h,m,p,v,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class _b extends Xs{constructor(e,i=$i,r=Wr,l,c,h=An,m=An,p,d=Da){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,i,r,l,c,h,m,p,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class N_ extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pr extends Fi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const m=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],d=[],v=[],x=[];let g=0,E=0;T("z","y","x",-1,-1,r,i,e,h,c,0),T("z","y","x",1,-1,r,i,-e,h,c,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Ti(d,3)),this.setAttribute("normal",new Ti(v,3)),this.setAttribute("uv",new Ti(x,2));function T(D,M,y,F,k,w,H,O,P,S,N){const X=w/P,B=H/S,Z=w/2,_e=H/2,Ee=O/2,ee=P+1,z=S+1;let G=0,ne=0;const xe=new ie;for(let De=0;De<z;De++){const L=De*B-_e;for(let Y=0;Y<ee;Y++){const Ce=Y*X-Z;xe[D]=Ce*F,xe[M]=L*k,xe[y]=Ee,d.push(xe.x,xe.y,xe.z),xe[D]=0,xe[M]=0,xe[y]=O>0?1:-1,v.push(xe.x,xe.y,xe.z),x.push(Y/P),x.push(1-De/S),G+=1}}for(let De=0;De<S;De++)for(let L=0;L<P;L++){const Y=g+L+ee*De,Ce=g+L+ee*(De+1),he=g+(L+1)+ee*(De+1),we=g+(L+1)+ee*De;p.push(Y,Ce,we),p.push(Ce,he,we),ne+=6}m.addGroup(E,ne,N),E+=ne,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Uc=new ie,Lc=new ie,Vd=new ie,Oc=new Ei;class xb extends Fi{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(Xc*i),h=e.getIndex(),m=e.getAttribute("position"),p=h?h.count:m.count,d=[0,0,0],v=["a","b","c"],x=new Array(3),g={},E=[];for(let T=0;T<p;T+=3){h?(d[0]=h.getX(T),d[1]=h.getX(T+1),d[2]=h.getX(T+2)):(d[0]=T,d[1]=T+1,d[2]=T+2);const{a:D,b:M,c:y}=Oc;if(D.fromBufferAttribute(m,d[0]),M.fromBufferAttribute(m,d[1]),y.fromBufferAttribute(m,d[2]),Oc.getNormal(Vd),x[0]=`${Math.round(D.x*l)},${Math.round(D.y*l)},${Math.round(D.z*l)}`,x[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,x[2]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let F=0;F<3;F++){const k=(F+1)%3,w=x[F],H=x[k],O=Oc[v[F]],P=Oc[v[k]],S=`${w}_${H}`,N=`${H}_${w}`;N in g&&g[N]?(Vd.dot(g[N].normal)<=c&&(E.push(O.x,O.y,O.z),E.push(P.x,P.y,P.z)),g[N]=null):S in g||(g[S]={index0:d[F],index1:d[k],normal:Vd.clone()})}}for(const T in g)if(g[T]){const{index0:D,index1:M}=g[T];Uc.fromBufferAttribute(m,D),Lc.fromBufferAttribute(m,M),E.push(Uc.x,Uc.y,Uc.z),E.push(Lc.x,Lc.y,Lc.z)}this.setAttribute("position",new Ti(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class nu extends Fi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,m=Math.floor(r),p=Math.floor(l),d=m+1,v=p+1,x=e/m,g=i/p,E=[],T=[],D=[],M=[];for(let y=0;y<v;y++){const F=y*g-h;for(let k=0;k<d;k++){const w=k*x-c;T.push(w,-F,0),D.push(0,0,1),M.push(k/m),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let F=0;F<m;F++){const k=F+d*y,w=F+d*(y+1),H=F+1+d*(y+1),O=F+1+d*y;E.push(k,w,O),E.push(w,H,O)}this.setIndex(E),this.setAttribute("position",new Ti(T,3)),this.setAttribute("normal",new Ti(D,3)),this.setAttribute("uv",new Ti(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ws(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(wv(l))l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(wv(l[0])){const c=[];for(let h=0,m=l.length;h<m;h++)c[h]=l[h].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function Wn(o){const e={};for(let i=0;i<o.length;i++){const r=Ws(o[i]);for(const l in r)e[l]=r[l]}return e}function wv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function yb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function U_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Sb={clone:Ws,merge:Wn};var bb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(l.value);break;case"v2":this.uniforms[r].value=new Dt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(l.value);break;case"v4":this.uniforms[r].value=new un().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ut().fromArray(l.value);break;case"m4":this.uniforms[r].value=new cn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Eb extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cr extends Ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gr,this.combine=Xh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tb extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ab extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class L_ extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const kd=new cn,Cv=new ie,Dv=new ie;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ip,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Cv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cv),Dv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Dv),i.updateMatrixWorld(),kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Qo||i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pc=new ie,zc=new qs,Wi=new ie;class O_ extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pc,zc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Pc,zc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pc,zc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new ie,Nv=new Dt,Uv=new Dt;class Mi extends O_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bh*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,i){return this.getViewBounds(e,Nv,Uv),i.subVectors(Uv,Nv)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Xc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/d,l*=h.width/p,r*=h.height/d}const m=this.filmOffset;m!==0&&(c+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ap extends O_{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,m=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,m-=v*this.view.offsetY,p=m-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,m,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wb extends Rb{constructor(){super(new ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cb extends L_{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new wb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Db extends L_{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const zs=-90,Is=1;class Nb extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(zs,Is,e,i);l.layers=this.layers,this.add(l);const c=new Mi(zs,Is,e,i);c.layers=this.layers,this.add(c);const h=new Mi(zs,Is,e,i);h.layers=this.layers,this.add(h);const m=new Mi(zs,Is,e,i);m.layers=this.layers,this.add(m);const p=new Mi(zs,Is,e,i);p.layers=this.layers,this.add(p);const d=new Mi(zs,Is,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,m,p]=i;for(const d of i)this.remove(d);if(e===Zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Qo)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,m,p,d,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),r.texture.generateMipmaps=D,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(x,g,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Ub extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lv=new cn;class Lb{constructor(e,i,r=0,l=1/0){this.ray=new np(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ct("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Lv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lv),this}intersectObject(e,i=!0,r=[]){return Fh(e,this,r,i),r.sort(Ov),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Fh(e[l],this,r,i);return r.sort(Ov),r}}function Ov(o,e){return o.distance-e.distance}function Fh(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,m=c.length;h<m;h++)Fh(c[h],e,i,!0)}}const cp=class cp{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};cp.prototype.isMatrix2=!0;let Pv=cp;function zv(o,e,i,r){const l=Ob(r);switch(i){case y_:return o*e;case b_:return o*e/l.components*l.byteLength;case jh:return o*e/l.components*l.byteLength;case qr:return o*e*2/l.components*l.byteLength;case Zh:return o*e*2/l.components*l.byteLength;case S_:return o*e*3/l.components*l.byteLength;case Ii:return o*e*4/l.components*l.byteLength;case Kh:return o*e*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vc:case kc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lh:case uh:return Math.max(o,16)*Math.max(e,8)/4;case oh:case ch:return Math.max(o,8)*Math.max(e,8)/2;case fh:case dh:case ph:case mh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case hh:case qc:case gh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case xh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Uh:case Lh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Oh:case Ph:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Yc:case zh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ob(o){switch(o){case di:case g_:return{byteLength:1,components:1};case Zo:case v_:case Ca:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case $i:case Wh:case ji:return{byteLength:4,components:1};case __:case x_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function P_(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Pb(o){const e=new WeakMap;function i(m,p){const d=m.array,v=m.usage,x=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,v),m.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)m.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:m.version,size:x}}function r(m,p,d){const v=p.array,x=p.updateRanges;if(o.bindBuffer(d,m),x.length===0)o.bufferSubData(d,0,v);else{x.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<x.length;E++){const T=x[g],D=x[E];D.start<=T.start+T.count+1?T.count=Math.max(T.count,D.start+D.count-T.start):(++g,x[g]=D)}x.length=g+1;for(let E=0,T=x.length;E<T;E++){const D=x[E];o.bufferSubData(d,D.start*v.BYTES_PER_ELEMENT,v,D.start,D.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const p=e.get(m);p&&(o.deleteBuffer(p.buffer),e.delete(m))}function h(m,p){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const v=e.get(m);(!v||v.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const d=e.get(m);if(d===void 0)e.set(m,i(m,p));else if(d.version<m.version){if(d.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,m,p),d.version=m.version}}return{get:l,remove:c,update:h}}var zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ib=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,FM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,dE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ME=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,XE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,i1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,o1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:zb,alphahash_pars_fragment:Ib,alphamap_fragment:Bb,alphamap_pars_fragment:Fb,alphatest_fragment:Hb,alphatest_pars_fragment:Gb,aomap_fragment:Vb,aomap_pars_fragment:kb,batching_pars_vertex:Xb,batching_vertex:Wb,begin_vertex:qb,beginnormal_vertex:Yb,bsdfs:jb,iridescence_fragment:Zb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Qb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:$b,clipping_planes_vertex:eM,color_fragment:tM,color_pars_fragment:nM,color_pars_vertex:iM,color_vertex:aM,common:rM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:oM,displacementmap_pars_vertex:lM,displacementmap_vertex:cM,emissivemap_fragment:uM,emissivemap_pars_fragment:fM,colorspace_fragment:dM,colorspace_pars_fragment:hM,envmap_fragment:pM,envmap_common_pars_fragment:mM,envmap_pars_fragment:gM,envmap_pars_vertex:vM,envmap_physical_pars_fragment:wM,envmap_vertex:_M,fog_vertex:xM,fog_pars_vertex:yM,fog_fragment:SM,fog_pars_fragment:bM,gradientmap_pars_fragment:MM,lightmap_pars_fragment:EM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:AM,lights_pars_begin:RM,lights_toon_fragment:CM,lights_toon_pars_fragment:DM,lights_phong_fragment:NM,lights_phong_pars_fragment:UM,lights_physical_fragment:LM,lights_physical_pars_fragment:OM,lights_fragment_begin:PM,lights_fragment_maps:zM,lights_fragment_end:IM,lightprobes_pars_fragment:BM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:VM,map_fragment:kM,map_pars_fragment:XM,map_particle_fragment:WM,map_particle_pars_fragment:qM,metalnessmap_fragment:YM,metalnessmap_pars_fragment:jM,morphinstance_vertex:ZM,morphcolor_vertex:KM,morphnormal_vertex:QM,morphtarget_pars_vertex:JM,morphtarget_vertex:$M,normal_fragment_begin:eE,normal_fragment_maps:tE,normal_pars_fragment:nE,normal_pars_vertex:iE,normal_vertex:aE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:sE,clearcoat_normal_fragment_maps:oE,clearcoat_pars_fragment:lE,iridescence_pars_fragment:cE,opaque_fragment:uE,packing:fE,premultiplied_alpha_fragment:dE,project_vertex:hE,dithering_fragment:pE,dithering_pars_fragment:mE,roughnessmap_fragment:gE,roughnessmap_pars_fragment:vE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:xE,shadowmap_vertex:yE,shadowmask_pars_fragment:SE,skinbase_vertex:bE,skinning_pars_vertex:ME,skinning_vertex:EE,skinnormal_vertex:TE,specularmap_fragment:AE,specularmap_pars_fragment:RE,tonemapping_fragment:wE,tonemapping_pars_fragment:CE,transmission_fragment:DE,transmission_pars_fragment:NE,uv_pars_fragment:UE,uv_pars_vertex:LE,uv_vertex:OE,worldpos_vertex:PE,background_vert:zE,background_frag:IE,backgroundCube_vert:BE,backgroundCube_frag:FE,cube_vert:HE,cube_frag:GE,depth_vert:VE,depth_frag:kE,distance_vert:XE,distance_frag:WE,equirect_vert:qE,equirect_frag:YE,linedashed_vert:jE,linedashed_frag:ZE,meshbasic_vert:KE,meshbasic_frag:QE,meshlambert_vert:JE,meshlambert_frag:$E,meshmatcap_vert:e1,meshmatcap_frag:t1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:a1,meshphong_frag:r1,meshphysical_vert:s1,meshphysical_frag:o1,meshtoon_vert:l1,meshtoon_frag:c1,points_vert:u1,points_frag:f1,shadow_vert:d1,shadow_frag:h1,sprite_vert:p1,sprite_frag:m1},Fe={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Yi={basic:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Wn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Wn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Wn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Et(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Wn([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Wn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Wn([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Wn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Wn([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Wn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Wn([Fe.lights,Fe.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Yi.physical={uniforms:Wn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ic={r:0,b:0,g:0},g1=new cn,z_=new ut;z_.set(-1,0,0,0,1,0,0,0,1);function v1(o,e,i,r,l,c){const h=new Et(0);let m=l===!0?0:1,p,d,v=null,x=0,g=null;function E(F){let k=F.isScene===!0?F.background:null;if(k&&k.isTexture){const w=F.backgroundBlurriness>0;k=e.get(k,w)}return k}function T(F){let k=!1;const w=E(F);w===null?M(h,m):w&&w.isColor&&(M(w,1),k=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||k)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(F,k){const w=E(k);w&&(w.isCubeTexture||w.mapping===eu)?(d===void 0&&(d=new Bi(new pr(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Ws(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(H,O,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(g1.makeRotationFromEuler(k.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(z_),d.material.toneMapped=At.getTransfer(w.colorSpace)!==Xt,(v!==w||x!==w.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,v=w,x=w.version,g=o.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Bi(new nu(2,2),new ea({name:"BackgroundMaterial",uniforms:Ws(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=At.getTransfer(w.colorSpace)!==Xt,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||x!==w.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,v=w,x=w.version,g=o.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function M(F,k){F.getRGB(Ic,U_(o)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,k,c)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(F,k=1){h.set(F),m=k,M(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(F){m=F,M(h,m)},render:T,addToRenderList:D,dispose:y}}function _1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=g(null);let c=l,h=!1;function m(B,Z,_e,Ee,ee){let z=!1;const G=x(B,Ee,_e,Z);c!==G&&(c=G,d(c.object)),z=E(B,Ee,_e,ee),z&&T(B,Ee,_e,ee),ee!==null&&e.update(ee,o.ELEMENT_ARRAY_BUFFER),(z||h)&&(h=!1,w(B,Z,_e,Ee),ee!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function p(){return o.createVertexArray()}function d(B){return o.bindVertexArray(B)}function v(B){return o.deleteVertexArray(B)}function x(B,Z,_e,Ee){const ee=Ee.wireframe===!0;let z=r[Z.id];z===void 0&&(z={},r[Z.id]=z);const G=B.isInstancedMesh===!0?B.id:0;let ne=z[G];ne===void 0&&(ne={},z[G]=ne);let xe=ne[_e.id];xe===void 0&&(xe={},ne[_e.id]=xe);let De=xe[ee];return De===void 0&&(De=g(p()),xe[ee]=De),De}function g(B){const Z=[],_e=[],Ee=[];for(let ee=0;ee<i;ee++)Z[ee]=0,_e[ee]=0,Ee[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:_e,attributeDivisors:Ee,object:B,attributes:{},index:null}}function E(B,Z,_e,Ee){const ee=c.attributes,z=Z.attributes;let G=0;const ne=_e.getAttributes();for(const xe in ne)if(ne[xe].location>=0){const L=ee[xe];let Y=z[xe];if(Y===void 0&&(xe==="instanceMatrix"&&B.instanceMatrix&&(Y=B.instanceMatrix),xe==="instanceColor"&&B.instanceColor&&(Y=B.instanceColor)),L===void 0||L.attribute!==Y||Y&&L.data!==Y.data)return!0;G++}return c.attributesNum!==G||c.index!==Ee}function T(B,Z,_e,Ee){const ee={},z=Z.attributes;let G=0;const ne=_e.getAttributes();for(const xe in ne)if(ne[xe].location>=0){let L=z[xe];L===void 0&&(xe==="instanceMatrix"&&B.instanceMatrix&&(L=B.instanceMatrix),xe==="instanceColor"&&B.instanceColor&&(L=B.instanceColor));const Y={};Y.attribute=L,L&&L.data&&(Y.data=L.data),ee[xe]=Y,G++}c.attributes=ee,c.attributesNum=G,c.index=Ee}function D(){const B=c.newAttributes;for(let Z=0,_e=B.length;Z<_e;Z++)B[Z]=0}function M(B){y(B,0)}function y(B,Z){const _e=c.newAttributes,Ee=c.enabledAttributes,ee=c.attributeDivisors;_e[B]=1,Ee[B]===0&&(o.enableVertexAttribArray(B),Ee[B]=1),ee[B]!==Z&&(o.vertexAttribDivisor(B,Z),ee[B]=Z)}function F(){const B=c.newAttributes,Z=c.enabledAttributes;for(let _e=0,Ee=Z.length;_e<Ee;_e++)Z[_e]!==B[_e]&&(o.disableVertexAttribArray(_e),Z[_e]=0)}function k(B,Z,_e,Ee,ee,z,G){G===!0?o.vertexAttribIPointer(B,Z,_e,ee,z):o.vertexAttribPointer(B,Z,_e,Ee,ee,z)}function w(B,Z,_e,Ee){D();const ee=Ee.attributes,z=_e.getAttributes(),G=Z.defaultAttributeValues;for(const ne in z){const xe=z[ne];if(xe.location>=0){let De=ee[ne];if(De===void 0&&(ne==="instanceMatrix"&&B.instanceMatrix&&(De=B.instanceMatrix),ne==="instanceColor"&&B.instanceColor&&(De=B.instanceColor)),De!==void 0){const L=De.normalized,Y=De.itemSize,Ce=e.get(De);if(Ce===void 0)continue;const he=Ce.buffer,we=Ce.type,te=Ce.bytesPerElement,ye=we===o.INT||we===o.UNSIGNED_INT||De.gpuType===Wh;if(De.isInterleavedBufferAttribute){const Re=De.data,Ge=Re.stride,rt=De.offset;if(Re.isInstancedInterleavedBuffer){for(let $e=0;$e<xe.locationSize;$e++)y(xe.location+$e,Re.meshPerAttribute);B.isInstancedMesh!==!0&&Ee._maxInstanceCount===void 0&&(Ee._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let $e=0;$e<xe.locationSize;$e++)M(xe.location+$e);o.bindBuffer(o.ARRAY_BUFFER,he);for(let $e=0;$e<xe.locationSize;$e++)k(xe.location+$e,Y/xe.locationSize,we,L,Ge*te,(rt+Y/xe.locationSize*$e)*te,ye)}else{if(De.isInstancedBufferAttribute){for(let Re=0;Re<xe.locationSize;Re++)y(xe.location+Re,De.meshPerAttribute);B.isInstancedMesh!==!0&&Ee._maxInstanceCount===void 0&&(Ee._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Re=0;Re<xe.locationSize;Re++)M(xe.location+Re);o.bindBuffer(o.ARRAY_BUFFER,he);for(let Re=0;Re<xe.locationSize;Re++)k(xe.location+Re,Y/xe.locationSize,we,L,Y*te,Y/xe.locationSize*Re*te,ye)}}else if(G!==void 0){const L=G[ne];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(xe.location,L);break;case 3:o.vertexAttrib3fv(xe.location,L);break;case 4:o.vertexAttrib4fv(xe.location,L);break;default:o.vertexAttrib1fv(xe.location,L)}}}}F()}function H(){N();for(const B in r){const Z=r[B];for(const _e in Z){const Ee=Z[_e];for(const ee in Ee){const z=Ee[ee];for(const G in z)v(z[G].object),delete z[G];delete Ee[ee]}}delete r[B]}}function O(B){if(r[B.id]===void 0)return;const Z=r[B.id];for(const _e in Z){const Ee=Z[_e];for(const ee in Ee){const z=Ee[ee];for(const G in z)v(z[G].object),delete z[G];delete Ee[ee]}}delete r[B.id]}function P(B){for(const Z in r){const _e=r[Z];for(const Ee in _e){const ee=_e[Ee];if(ee[B.id]===void 0)continue;const z=ee[B.id];for(const G in z)v(z[G].object),delete z[G];delete ee[B.id]}}}function S(B){for(const Z in r){const _e=r[Z],Ee=B.isInstancedMesh===!0?B.id:0,ee=_e[Ee];if(ee!==void 0){for(const z in ee){const G=ee[z];for(const ne in G)v(G[ne].object),delete G[ne];delete ee[z]}delete _e[Ee],Object.keys(_e).length===0&&delete r[Z]}}}function N(){X(),h=!0,c!==l&&(c=l,d(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:N,resetDefaultState:X,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:D,enableAttribute:M,disableUnusedAttributes:F}}function x1(o,e,i){let r;function l(p){r=p}function c(p,d){o.drawArrays(r,p,d),i.update(d,r,1)}function h(p,d,v){v!==0&&(o.drawArraysInstanced(r,p,d,v),i.update(d,r,v))}function m(p,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,d,0,v);let g=0;for(let E=0;E<v;E++)g+=d[E];i.update(g,r,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function y1(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ii&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(P){const S=P===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==di&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ji&&!S)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=p(d);v!==d&&(st("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),k=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),O=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:m,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:D,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:F,maxVaryings:k,maxFragmentUniforms:w,maxSamples:H,samples:O}}function S1(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Gr,m=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const E=x.length!==0||g||r!==0||l;return l=g,r=x.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=v(x,g,0)},this.setState=function(x,g,E){const T=x.clippingPlanes,D=x.clipIntersection,M=x.clipShadows,y=o.get(x);if(!l||T===null||T.length===0||c&&!M)c?v(null):d();else{const F=c?0:r,k=F*4;let w=y.clippingState||null;p.value=w,w=v(T,g,k,E);for(let H=0;H!==k;++H)w[H]=i[H];y.clippingState=w,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=F}};function d(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,E,T){const D=x!==null?x.length:0;let M=null;if(D!==0){if(M=p.value,T!==!0||M===null){const y=E+D*4,F=g.matrixWorldInverse;m.getNormalMatrix(F),(M===null||M.length<y)&&(M=new Float32Array(y));for(let k=0,w=E;k!==D;++k,w+=4)h.copy(x[k]).applyMatrix4(F,m),h.normal.toArray(M,w),M[w+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,M}}const hr=4,Iv=[.125,.215,.35,.446,.526,.582],kr=20,b1=256,Wo=new ap,Bv=new Et;let Xd=null,Wd=0,qd=0,Yd=!1;const M1=new ie;class Fv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:m=M1}=c;Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,m),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,Wd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Wr||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ca,format:Ii,colorSpace:jc,depthBuffer:!1},l=Hv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E1(c)),this._blurMaterial=A1(c,e,i),this._ggxMaterial=T1(c,e,i)}return l}_compileMaterial(e){const i=new Bi(new Fi,e);this._renderer.compile(i,Wo)}_sceneToCubeUV(e,i,r,l,c){const p=new Mi(90,1,i,r),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,E=x.toneMapping;x.getClearColor(Bv),x.toneMapping=Ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bi(new pr,new w_({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,M=D.material;let y=!1;const F=e.background;F?F.isColor&&(M.color.copy(F),e.background=null,y=!0):(M.color.copy(Bv),y=!0);for(let k=0;k<6;k++){const w=k%3;w===0?(p.up.set(0,d[k],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[k],c.y,c.z)):w===1?(p.up.set(0,0,d[k]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[k],c.z)):(p.up.set(0,d[k],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[k]));const H=this._cubeSize;Bs(l,w*H,k>2?H:0,H,H),x.setRenderTarget(l),y&&x.render(D,p),x.render(e,p)}x.toneMapping=E,x.autoClear=g,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Wr||e.mapping===ks;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const m=c.uniforms;m.envMap.value=e;const p=this._cubeSize;Bs(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Wo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,m=this._lodMeshes[r];m.material=h;const p=h.uniforms,d=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-v*v),g=0+d*1.25,E=x*g,{_lodMax:T}=this,D=this._sizeLods[r],M=3*D*(r>T-hr?r-T+hr:0),y=4*(this._cubeSize-D);p.envMap.value=e.texture,p.roughness.value=E,p.mipInt.value=T-i,Bs(c,M,y,3*D,2*D),l.setRenderTarget(c),l.render(m,Wo),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,Bs(e,M,y,3*D,2*D),l.setRenderTarget(e),l.render(m,Wo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,m){const p=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,E=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*kr-1),D=c/T,M=isFinite(c)?1+Math.floor(v*D):kr;M>kr&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${kr}`);const y=[];let F=0;for(let P=0;P<kr;++P){const S=P/D,N=Math.exp(-S*S/2);y.push(N),P===0?F+=N:P<M&&(F+=2*N)}for(let P=0;P<y.length;P++)y[P]=y[P]/F;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=h==="latitudinal",m&&(g.poleAxis.value=m);const{_lodMax:k}=this;g.dTheta.value=T,g.mipInt.value=k-r;const w=this._sizeLods[l],H=3*w*(l>k-hr?l-k+hr:0),O=4*(this._cubeSize-w);Bs(i,H,O,3*w,2*w),p.setRenderTarget(i),p.render(x,Wo)}}function E1(o){const e=[],i=[],r=[];let l=o;const c=o-hr+1+Iv.length;for(let h=0;h<c;h++){const m=Math.pow(2,l);e.push(m);let p=1/m;h>o-hr?p=Iv[h-o+hr-1]:h===0&&(p=0),i.push(p);const d=1/(m-2),v=-d,x=1+d,g=[v,v,x,v,x,x,v,v,x,x,v,x],E=6,T=6,D=3,M=2,y=1,F=new Float32Array(D*T*E),k=new Float32Array(M*T*E),w=new Float32Array(y*T*E);for(let O=0;O<E;O++){const P=O%3*2/3-1,S=O>2?0:-1,N=[P,S,0,P+2/3,S,0,P+2/3,S+1,0,P,S,0,P+2/3,S+1,0,P,S+1,0];F.set(N,D*T*O),k.set(g,M*T*O);const X=[O,O,O,O,O,O];w.set(X,y*T*O)}const H=new Fi;H.setAttribute("position",new Ji(F,D)),H.setAttribute("uv",new Ji(k,M)),H.setAttribute("faceIndex",new Ji(w,y)),r.push(new Bi(H,null)),l>hr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Hv(o,e,i){const r=new Qi(o,e,i);return r.texture.mapping=eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function T1(o,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function A1(o,e,i){const r=new Float32Array(kr),l=new ie(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Gv(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Vv(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class I_ extends Qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new D_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new pr(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:Ra});c.uniforms.tEquirect.value=i;const h=new Bi(l,c),m=i.minFilter;return i.minFilter===dr&&(i.minFilter=zn),new Nb(1,10,this).update(e,h),i.minFilter=m,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}function R1(o){let e=new WeakMap,i=new WeakMap,r=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===md||E===gd)if(e.has(g)){const T=e.get(g).texture;return m(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const D=new I_(T.height);return D.fromEquirectangularTexture(o,g),e.set(g,D),g.addEventListener("dispose",d),m(D.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,T=E===md||E===gd,D=E===Wr||E===ks;if(T||D){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new Fv(o)),M=T?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const F=g.image;return T&&F&&F.height>0||D&&F&&p(F)?(r===null&&(r=new Fv(o)),M=T?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",v),M.texture):null}}}return g}function m(g,E){return E===md?g.mapping=Wr:E===gd&&(g.mapping=ks),g}function p(g){let E=0;const T=6;for(let D=0;D<T;D++)g[D]!==void 0&&E++;return E===T}function d(g){const E=g.target;E.removeEventListener("dispose",d);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:x}}function w1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Hs("WebGLRenderer: "+r+" extension not supported."),l}}}function C1(o,e,i,r){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function m(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function p(x){const g=x.attributes;for(const E in g)e.update(g[E],o.ARRAY_BUFFER)}function d(x){const g=[],E=x.index,T=x.attributes.position;let D=0;if(T===void 0)return;if(E!==null){const F=E.array;D=E.version;for(let k=0,w=F.length;k<w;k+=3){const H=F[k+0],O=F[k+1],P=F[k+2];g.push(H,O,O,P,P,H)}}else{const F=T.array;D=T.version;for(let k=0,w=F.length/3-1;k<w;k+=3){const H=k+0,O=k+1,P=k+2;g.push(H,O,O,P,P,H)}}const M=new(T.count>=65535?R_:A_)(g,1);M.version=D;const y=c.get(x);y&&e.remove(y),c.set(x,M)}function v(x){const g=c.get(x);if(g){const E=x.index;E!==null&&g.version<E.version&&d(x)}else d(x);return c.get(x)}return{get:m,update:p,getWireframeAttribute:v}}function D1(o,e,i){let r;function l(x){r=x}let c,h;function m(x){c=x.type,h=x.bytesPerElement}function p(x,g){o.drawElements(r,g,c,x*h),i.update(g,r,1)}function d(x,g,E){E!==0&&(o.drawElementsInstanced(r,g,c,x*h,E),i.update(g,r,E))}function v(x,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,x,0,E);let D=0;for(let M=0;M<E;M++)D+=g[M];i.update(D,r,1)}this.setMode=l,this.setIndex=m,this.render=p,this.renderInstances=d,this.renderMultiDraw=v}function N1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,m){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=m*(c/3);break;case o.LINES:i.lines+=m*(c/2);break;case o.LINE_STRIP:i.lines+=m*(c-1);break;case o.LINE_LOOP:i.lines+=m*c;break;case o.POINTS:i.points+=m*c;break;default:Ct("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function U1(o,e,i){const r=new WeakMap,l=new un;function c(h,m,p){const d=h.morphTargetInfluences,v=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(m);if(g===void 0||g.count!==x){let X=function(){S.dispose(),r.delete(m),m.removeEventListener("dispose",X)};var E=X;g!==void 0&&g.texture.dispose();const T=m.morphAttributes.position!==void 0,D=m.morphAttributes.normal!==void 0,M=m.morphAttributes.color!==void 0,y=m.morphAttributes.position||[],F=m.morphAttributes.normal||[],k=m.morphAttributes.color||[];let w=0;T===!0&&(w=1),D===!0&&(w=2),M===!0&&(w=3);let H=m.attributes.position.count*w,O=1;H>e.maxTextureSize&&(O=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const P=new Float32Array(H*O*4*x),S=new E_(P,H,O,x);S.type=ji,S.needsUpdate=!0;const N=w*4;for(let B=0;B<x;B++){const Z=y[B],_e=F[B],Ee=k[B],ee=H*O*4*B;for(let z=0;z<Z.count;z++){const G=z*N;T===!0&&(l.fromBufferAttribute(Z,z),P[ee+G+0]=l.x,P[ee+G+1]=l.y,P[ee+G+2]=l.z,P[ee+G+3]=0),D===!0&&(l.fromBufferAttribute(_e,z),P[ee+G+4]=l.x,P[ee+G+5]=l.y,P[ee+G+6]=l.z,P[ee+G+7]=0),M===!0&&(l.fromBufferAttribute(Ee,z),P[ee+G+8]=l.x,P[ee+G+9]=l.y,P[ee+G+10]=l.z,P[ee+G+11]=Ee.itemSize===4?l.w:1)}}g={count:x,texture:S,size:new Dt(H,O)},r.set(m,g),m.addEventListener("dispose",X)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const D=m.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",D),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function L1(o,e,i,r,l){let c=new WeakMap;function h(d){const v=l.render.frame,x=d.geometry,g=e.get(d,x);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),c.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function m(){c=new WeakMap}function p(d){const v=d.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:m}}const O1={[l_]:"LINEAR_TONE_MAPPING",[c_]:"REINHARD_TONE_MAPPING",[u_]:"CINEON_TONE_MAPPING",[f_]:"ACES_FILMIC_TONE_MAPPING",[h_]:"AGX_TONE_MAPPING",[p_]:"NEUTRAL_TONE_MAPPING",[d_]:"CUSTOM_TONE_MAPPING"};function P1(o,e,i,r,l,c){const h=new Qi(e,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:r?4:0,depthTexture:l?new Xs(e,i):void 0}),m=new Qi(e,i,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),p=new Fi;p.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ti([0,2,0,0,2,0],2));const d=new Eb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Bi(p,d),x=new ap(-1,1,1,-1,0,1);let g=null,E=null,T=!1,D,M=null,y=[],F=!1;this.setSize=function(k,w){h.setSize(k,w),m.setSize(k,w);for(let H=0;H<y.length;H++){const O=y[H];O.setSize&&O.setSize(k,w)}},this.setEffects=function(k){y=k,F=y.length>0&&y[0].isRenderPass===!0;const w=h.width,H=h.height;for(let O=0;O<y.length;O++){const P=y[O];P.setSize&&P.setSize(w,H)}},this.begin=function(k,w){if(T||k.toneMapping===Ki&&y.length===0)return!1;if(M=w,w!==null){const H=w.width,O=w.height;(h.width!==H||h.height!==O)&&this.setSize(H,O)}return F===!1&&k.setRenderTarget(h),D=k.toneMapping,k.toneMapping=Ki,!0},this.hasRenderPass=function(){return F},this.end=function(k,w){k.toneMapping=D,T=!0;let H=h,O=m;for(let P=0;P<y.length;P++){const S=y[P];if(S.enabled!==!1&&(S.render(k,O,H,w),S.needsSwap!==!1)){const N=H;H=O,O=N}}if(g!==k.outputColorSpace||E!==k.toneMapping){g=k.outputColorSpace,E=k.toneMapping,d.defines={},At.getTransfer(g)===Xt&&(d.defines.SRGB_TRANSFER="");const P=O1[E];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=H.texture,k.setRenderTarget(M),k.render(v,x),M=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),m.dispose(),p.dispose(),d.dispose()}}const B_=new In,Hh=new Xs(1,1),F_=new E_,H_=new QS,G_=new D_,kv=[],Xv=[],Wv=new Float32Array(16),qv=new Float32Array(9),Yv=new Float32Array(4);function js(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=kv[l];if(c===void 0&&(c=new Float32Array(l),kv[l]=c),e!==0){r.toArray(c,0);for(let h=1,m=0;h!==e;++h)m+=i,o[h].toArray(c,m)}return c}function Rn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function wn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function au(o,e){let i=Xv[e];i===void 0&&(i=new Int32Array(e),Xv[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function z1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function I1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;o.uniform2fv(this.addr,e),wn(i,e)}}function B1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Rn(i,e))return;o.uniform3fv(this.addr,e),wn(i,e)}}function F1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;o.uniform4fv(this.addr,e),wn(i,e)}}function H1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Rn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,r))return;Yv.set(r),o.uniformMatrix2fv(this.addr,!1,Yv),wn(i,r)}}function G1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Rn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,r))return;qv.set(r),o.uniformMatrix3fv(this.addr,!1,qv),wn(i,r)}}function V1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Rn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),wn(i,e)}else{if(Rn(i,r))return;Wv.set(r),o.uniformMatrix4fv(this.addr,!1,Wv),wn(i,r)}}function k1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function X1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;o.uniform2iv(this.addr,e),wn(i,e)}}function W1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;o.uniform3iv(this.addr,e),wn(i,e)}}function q1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;o.uniform4iv(this.addr,e),wn(i,e)}}function Y1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function j1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Rn(i,e))return;o.uniform2uiv(this.addr,e),wn(i,e)}}function Z1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Rn(i,e))return;o.uniform3uiv(this.addr,e),wn(i,e)}}function K1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Rn(i,e))return;o.uniform4uiv(this.addr,e),wn(i,e)}}function Q1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Hh.compareFunction=i.isReversedDepthBuffer()?Jh:Qh,c=Hh):c=B_,i.setTexture2D(e||c,l)}function J1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||H_,l)}function $1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||G_,l)}function eT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||F_,l)}function tT(o){switch(o){case 5126:return z1;case 35664:return I1;case 35665:return B1;case 35666:return F1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return X1;case 35668:case 35672:return W1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return j1;case 36295:return Z1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return eT}}function nT(o,e){o.uniform1fv(this.addr,e)}function iT(o,e){const i=js(e,this.size,2);o.uniform2fv(this.addr,i)}function aT(o,e){const i=js(e,this.size,3);o.uniform3fv(this.addr,i)}function rT(o,e){const i=js(e,this.size,4);o.uniform4fv(this.addr,i)}function sT(o,e){const i=js(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function oT(o,e){const i=js(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function lT(o,e){const i=js(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function cT(o,e){o.uniform1iv(this.addr,e)}function uT(o,e){o.uniform2iv(this.addr,e)}function fT(o,e){o.uniform3iv(this.addr,e)}function dT(o,e){o.uniform4iv(this.addr,e)}function hT(o,e){o.uniform1uiv(this.addr,e)}function pT(o,e){o.uniform2uiv(this.addr,e)}function mT(o,e){o.uniform3uiv(this.addr,e)}function gT(o,e){o.uniform4uiv(this.addr,e)}function vT(o,e,i){const r=this.cache,l=e.length,c=au(i,l);Rn(r,c)||(o.uniform1iv(this.addr,c),wn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Hh:h=B_;for(let m=0;m!==l;++m)i.setTexture2D(e[m]||h,c[m])}function _T(o,e,i){const r=this.cache,l=e.length,c=au(i,l);Rn(r,c)||(o.uniform1iv(this.addr,c),wn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||H_,c[h])}function xT(o,e,i){const r=this.cache,l=e.length,c=au(i,l);Rn(r,c)||(o.uniform1iv(this.addr,c),wn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||G_,c[h])}function yT(o,e,i){const r=this.cache,l=e.length,c=au(i,l);Rn(r,c)||(o.uniform1iv(this.addr,c),wn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||F_,c[h])}function ST(o){switch(o){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return rT;case 35674:return sT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return dT;case 5125:return hT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return yT}}class bT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=tT(i.type)}}class MT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ST(i.type)}}class ET{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const m=l[c];m.setValue(e,i[m.id],r)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function jv(o,e){o.seq.push(e),o.map[e.id]=e}function TT(o,e,i){const r=o.name,l=r.length;for(jd.lastIndex=0;;){const c=jd.exec(r),h=jd.lastIndex;let m=c[1];const p=c[2]==="]",d=c[3];if(p&&(m=m|0),d===void 0||d==="["&&h+2===l){jv(i,d===void 0?new bT(m,o,e):new MT(m,o,e));break}else{let x=i.map[m];x===void 0&&(x=new ET(m),jv(i,x)),i=x}}}class Wc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const m=e.getActiveUniform(i,h),p=e.getUniformLocation(i,m.name);TT(m,p,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const m=i[c],p=r[m.id];p.needsUpdate!==!1&&m.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Zv(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const AT=37297;let RT=0;function wT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const m=h+1;r.push(`${m===e?">":" "} ${m}: ${i[h]}`)}return r.join(`
`)}const Kv=new ut;function CT(o){At._getMatrix(Kv,At.workingColorSpace,o);const e=`mat3( ${Kv.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(o)){case Zc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Qv(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const m=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+wT(o.getShaderSource(e),m)}else return c}function DT(o,e){const i=CT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const NT={[l_]:"Linear",[c_]:"Reinhard",[u_]:"Cineon",[f_]:"ACESFilmic",[h_]:"AgX",[p_]:"Neutral",[d_]:"Custom"};function UT(o,e){const i=NT[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new ie;function LT(){At.getLuminanceCoefficients(Bc);const o=Bc.x.toFixed(4),e=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function PT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function zT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let m=1;c.type===o.FLOAT_MAT2&&(m=2),c.type===o.FLOAT_MAT3&&(m=3),c.type===o.FLOAT_MAT4&&(m=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:m}}return i}function jo(o){return o!==""}function Jv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(o){return o.replace(IT,FT)}const BT=new Map;function FT(o,e){let i=mt[e];if(i===void 0){const r=BT.get(e);if(r!==void 0)i=mt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gh(i)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e_(o){return o.replace(HT,GT)}function GT(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function t_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const VT={[Fc]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function kT(o){return VT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XT={[Wr]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function WT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":XT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const qT={[ks]:"ENVMAP_MODE_REFRACTION"};function YT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":qT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jT={[Xh]:"ENVMAP_BLENDING_MULTIPLY",[DS]:"ENVMAP_BLENDING_MIX",[NS]:"ENVMAP_BLENDING_ADD"};function ZT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":jT[o.combine]||"ENVMAP_BLENDING_NONE"}function KT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function QT(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,m=i.fragmentShader;const p=kT(i),d=WT(i),v=YT(i),x=ZT(i),g=KT(i),E=OT(i),T=PT(c),D=l.createProgram();let M,y,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),y.length>0&&(y+=`
`)):(M=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),y=[t_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?mt.tonemapping_pars_fragment:"",i.toneMapping!==Ki?UT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,DT("linearToOutputTexel",i.outputColorSpace),LT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),h=Gh(h),h=Jv(h,i),h=$v(h,i),m=Gh(m),m=Jv(m,i),m=$v(m,i),h=e_(h),m=e_(m),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const k=F+M+h,w=F+y+m,H=Zv(l,l.VERTEX_SHADER,k),O=Zv(l,l.FRAGMENT_SHADER,w);l.attachShader(D,H),l.attachShader(D,O),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function P(B){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(D)||"",_e=l.getShaderInfoLog(H)||"",Ee=l.getShaderInfoLog(O)||"",ee=Z.trim(),z=_e.trim(),G=Ee.trim();let ne=!0,xe=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,D,H,O);else{const De=Qv(l,H,"vertex"),L=Qv(l,O,"fragment");Ct("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+De+`
`+L)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(z===""||G==="")&&(xe=!1);xe&&(B.diagnostics={runnable:ne,programLog:ee,vertexShader:{log:z,prefix:M},fragmentShader:{log:G,prefix:y}})}l.deleteShader(H),l.deleteShader(O),S=new Wc(l,D),N=zT(l,D)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(D,AT)),X},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=RT++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=H,this.fragmentShader=O,this}let JT=0;class $T{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new eA(e),i.set(e,r)),r}}class eA{constructor(e){this.id=JT++,this.code=e,this.usedTimes=0}}function tA(o){return o===qr||o===qc||o===Yc}function nA(o,e,i,r,l,c){const h=new ep,m=new $T,p=new Set,d=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(S){return p.add(S),S===0?"uv":`uv${S}`}function D(S,N,X,B,Z,_e){const Ee=B.fog,ee=Z.geometry,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,ne=e.get(S.envMap||z,G),xe=ne&&ne.mapping===eu?ne.image.height:null,De=E[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&st("WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const L=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Y=L!==void 0?L.length:0;let Ce=0;ee.morphAttributes.position!==void 0&&(Ce=1),ee.morphAttributes.normal!==void 0&&(Ce=2),ee.morphAttributes.color!==void 0&&(Ce=3);let he,we,te,ye;if(De){const de=Yi[De];he=de.vertexShader,we=de.fragmentShader}else{he=S.vertexShader,we=S.fragmentShader;const de=m.getVertexShaderStage(S),je=m.getFragmentShaderStage(S);m.update(S,de,je),te=de.id,ye=je.id}const Re=o.getRenderTarget(),Ge=o.state.buffers.depth.getReversed(),rt=Z.isInstancedMesh===!0,$e=Z.isBatchedMesh===!0,Nt=!!S.map,lt=!!S.matcap,vt=!!ne,_t=!!S.aoMap,gt=!!S.lightMap,Wt=!!S.bumpMap&&S.wireframe===!1,tn=!!S.normalMap,nn=!!S.displacementMap,Ut=!!S.emissiveMap,zt=!!S.metalnessMap,an=!!S.roughnessMap,I=S.anisotropy>0,pt=S.clearcoat>0,wt=S.dispersion>0,U=S.iridescence>0,b=S.sheen>0,K=S.transmission>0,ce=I&&!!S.anisotropyMap,me=pt&&!!S.clearcoatMap,Ne=pt&&!!S.clearcoatNormalMap,Oe=pt&&!!S.clearcoatRoughnessMap,ge=U&&!!S.iridescenceMap,ve=U&&!!S.iridescenceThicknessMap,Le=b&&!!S.sheenColorMap,He=b&&!!S.sheenRoughnessMap,ze=!!S.specularMap,Pe=!!S.specularColorMap,Ke=!!S.specularIntensityMap,Qe=K&&!!S.transmissionMap,it=K&&!!S.thicknessMap,W=!!S.gradientMap,Ue=!!S.alphaMap,be=S.alphaTest>0,J=!!S.alphaHash,ae=!!S.extensions;let $=Ki;S.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&($=o.toneMapping);const Se={shaderID:De,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:we,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:$e,batchingColor:$e&&Z._colorsTexture!==null,instancing:rt,instancingColor:rt&&Z.instanceColor!==null,instancingMorph:rt&&Z.morphTexture!==null,outputColorSpace:Re===null?o.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Nt,matcap:lt,envMap:vt,envMapMode:vt&&ne.mapping,envMapCubeUVHeight:xe,aoMap:_t,lightMap:gt,bumpMap:Wt,normalMap:tn,displacementMap:nn,emissiveMap:Ut,normalMapObjectSpace:tn&&S.normalMapType===OS,normalMapTangentSpace:tn&&S.normalMapType===Ih,packedNormalMap:tn&&S.normalMapType===Ih&&tA(S.normalMap.format),metalnessMap:zt,roughnessMap:an,anisotropy:I,anisotropyMap:ce,clearcoat:pt,clearcoatMap:me,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Oe,dispersion:wt,iridescence:U,iridescenceMap:ge,iridescenceThicknessMap:ve,sheen:b,sheenColorMap:Le,sheenRoughnessMap:He,specularMap:ze,specularColorMap:Pe,specularIntensityMap:Ke,transmission:K,transmissionMap:Qe,thicknessMap:it,gradientMap:W,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:be,alphaHash:J,combine:S.combine,mapUv:Nt&&T(S.map.channel),aoMapUv:_t&&T(S.aoMap.channel),lightMapUv:gt&&T(S.lightMap.channel),bumpMapUv:Wt&&T(S.bumpMap.channel),normalMapUv:tn&&T(S.normalMap.channel),displacementMapUv:nn&&T(S.displacementMap.channel),emissiveMapUv:Ut&&T(S.emissiveMap.channel),metalnessMapUv:zt&&T(S.metalnessMap.channel),roughnessMapUv:an&&T(S.roughnessMap.channel),anisotropyMapUv:ce&&T(S.anisotropyMap.channel),clearcoatMapUv:me&&T(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&T(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&T(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&T(S.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&T(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(S.sheenRoughnessMap.channel),specularMapUv:ze&&T(S.specularMap.channel),specularColorMapUv:Pe&&T(S.specularColorMap.channel),specularIntensityMapUv:Ke&&T(S.specularIntensityMap.channel),transmissionMapUv:Qe&&T(S.transmissionMap.channel),thicknessMapUv:it&&T(S.thicknessMap.channel),alphaMapUv:Ue&&T(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(tn||I),vertexNormals:!!ee.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ee.attributes.uv&&(Nt||Ue),fog:!!Ee,useFog:S.fog===!0,fogExp2:!!Ee&&Ee.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||ee.attributes.normal===void 0&&tn===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ge,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Ce,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:_e.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:S.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:$,decodeVideoTexture:Nt&&S.map.isVideoTexture===!0&&At.getTransfer(S.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ut&&S.emissiveMap.isVideoTexture===!0&&At.getTransfer(S.emissiveMap.colorSpace)===Xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ta,flipSided:S.side===ei,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&S.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Se.vertexUv1s=p.has(1),Se.vertexUv2s=p.has(2),Se.vertexUv3s=p.has(3),p.clear(),Se}function M(S){const N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)N.push(X),N.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(y(N,S),F(N,S),N.push(o.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function y(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function F(S,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),N.packedNormalMap&&h.enable(22),N.vertexNormals&&h.enable(23),S.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),N.numLightProbeGrids>0&&h.enable(22),N.hasPositionAttribute&&h.enable(23),S.push(h.mask)}function k(S){const N=E[S.type];let X;if(N){const B=Yi[N];X=Sb.clone(B.uniforms)}else X=S.uniforms;return X}function w(S,N){let X=v.get(N);return X!==void 0?++X.usedTimes:(X=new QT(o,N,S,l),d.push(X),v.set(N,X)),X}function H(S){if(--S.usedTimes===0){const N=d.indexOf(S);d[N]=d[d.length-1],d.pop(),v.delete(S.cacheKey),S.destroy()}}function O(S){m.remove(S)}function P(){m.dispose()}return{getParameters:D,getProgramCacheKey:M,getUniforms:k,acquireProgram:w,releaseProgram:H,releaseShaderCache:O,programs:d,dispose:P}}function iA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let m=o.get(h);return m===void 0&&(m={},o.set(h,m)),m}function r(h){o.delete(h)}function l(h,m,p){o.get(h)[m]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function aA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function n_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function i_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function m(g,E,T,D,M,y){let F=o[e];return F===void 0?(F={id:g.id,object:g,geometry:E,material:T,materialVariant:h(g),groupOrder:D,renderOrder:g.renderOrder,z:M,group:y},o[e]=F):(F.id=g.id,F.object=g,F.geometry=E,F.material=T,F.materialVariant=h(g),F.groupOrder=D,F.renderOrder=g.renderOrder,F.z=M,F.group=y),e++,F}function p(g,E,T,D,M,y){const F=m(g,E,T,D,M,y);T.transmission>0?r.push(F):T.transparent===!0?l.push(F):i.push(F)}function d(g,E,T,D,M,y){const F=m(g,E,T,D,M,y);T.transmission>0?r.unshift(F):T.transparent===!0?l.unshift(F):i.unshift(F)}function v(g,E,T){i.length>1&&i.sort(g||aA),r.length>1&&r.sort(E||n_),l.length>1&&l.sort(E||n_),T&&(i.reverse(),r.reverse(),l.reverse())}function x(){for(let g=e,E=o.length;g<E;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:d,finish:x,sort:v}}function rA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new i_,o.set(r,[h])):l>=c.length?(h=new i_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function sA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Et};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return o[e.id]=i,i}}}function oA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let lA=0;function cA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function uA(o){const e=new sA,i=oA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ie);const l=new ie,c=new cn,h=new cn;function m(d){let v=0,x=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let E=0,T=0,D=0,M=0,y=0,F=0,k=0,w=0,H=0,O=0,P=0;d.sort(cA);for(let N=0,X=d.length;N<X;N++){const B=d[N],Z=B.color,_e=B.intensity,Ee=B.distance;let ee=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===qr?ee=B.shadow.map.texture:ee=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=Z.r*_e,x+=Z.g*_e,g+=Z.b*_e;else if(B.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(B.sh.coefficients[z],_e);P++}else if(B.isDirectionalLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const G=B.shadow,ne=i.get(B);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.directionalShadow[E]=ne,r.directionalShadowMap[E]=ee,r.directionalShadowMatrix[E]=B.shadow.matrix,F++}r.directional[E]=z,E++}else if(B.isSpotLight){const z=e.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(Z).multiplyScalar(_e),z.distance=Ee,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,r.spot[D]=z;const G=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,G.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[D]=G.matrix,B.castShadow){const ne=i.get(B);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.spotShadow[D]=ne,r.spotShadowMap[D]=ee,w++}D++}else if(B.isRectAreaLight){const z=e.get(B);z.color.copy(Z).multiplyScalar(_e),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),r.rectArea[M]=z,M++}else if(B.isPointLight){const z=e.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const G=B.shadow,ne=i.get(B);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,r.pointShadow[T]=ne,r.pointShadowMap[T]=ee,r.pointShadowMatrix[T]=B.shadow.matrix,k++}r.point[T]=z,T++}else if(B.isHemisphereLight){const z=e.get(B);z.skyColor.copy(B.color).multiplyScalar(_e),z.groundColor.copy(B.groundColor).multiplyScalar(_e),r.hemi[y]=z,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const S=r.hash;(S.directionalLength!==E||S.pointLength!==T||S.spotLength!==D||S.rectAreaLength!==M||S.hemiLength!==y||S.numDirectionalShadows!==F||S.numPointShadows!==k||S.numSpotShadows!==w||S.numSpotMaps!==H||S.numLightProbes!==P)&&(r.directional.length=E,r.spot.length=D,r.rectArea.length=M,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=k,r.pointShadowMap.length=k,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=k,r.spotLightMatrix.length=w+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=P,S.directionalLength=E,S.pointLength=T,S.spotLength=D,S.rectAreaLength=M,S.hemiLength=y,S.numDirectionalShadows=F,S.numPointShadows=k,S.numSpotShadows=w,S.numSpotMaps=H,S.numLightProbes=P,r.version=lA++)}function p(d,v){let x=0,g=0,E=0,T=0,D=0;const M=v.matrixWorldInverse;for(let y=0,F=d.length;y<F;y++){const k=d[y];if(k.isDirectionalLight){const w=r.directional[x];w.direction.setFromMatrixPosition(k.matrixWorld),l.setFromMatrixPosition(k.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(k.isSpotLight){const w=r.spot[E];w.position.setFromMatrixPosition(k.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(k.matrixWorld),l.setFromMatrixPosition(k.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),E++}else if(k.isRectAreaLight){const w=r.rectArea[T];w.position.setFromMatrixPosition(k.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(k.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(k.width*.5,0,0),w.halfHeight.set(0,k.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(k.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(k.matrixWorld),w.position.applyMatrix4(M),g++}else if(k.isHemisphereLight){const w=r.hemi[D];w.direction.setFromMatrixPosition(k.matrixWorld),w.direction.transformDirection(M),D++}}}return{setup:m,setupView:p,state:r}}function a_(o){const e=new uA(o),i=[],r=[],l=[];function c(g){x.camera=g,i.length=0,r.length=0,l.length=0}function h(g){i.push(g)}function m(g){r.push(g)}function p(g){l.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const x={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:m,pushLightProbeGrid:p}}function fA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let m;return h===void 0?(m=new a_(o),e.set(l,[m])):c>=h.length?(m=new a_(o),h.push(m)):m=h[c],m}function r(){e=new WeakMap}return{get:i,dispose:r}}const dA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pA=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],mA=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],r_=new cn,qo=new ie,Zd=new ie;function gA(o,e,i){let r=new ip;const l=new Dt,c=new Dt,h=new un,m=new Tb,p=new Ab,d={},v=i.maxTextureSize,x={[mr]:ei,[ei]:mr,[Ta]:Ta},g=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:dA,fragmentShader:hA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new Fi;T.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Bi(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let y=this.type;this.render=function(O,P,S){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;this.type===fS&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fc);const N=o.getRenderTarget(),X=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Ra),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const _e=y!==this.type;_e&&P.traverse(function(Ee){Ee.material&&(Array.isArray(Ee.material)?Ee.material.forEach(ee=>ee.needsUpdate=!0):Ee.material.needsUpdate=!0)});for(let Ee=0,ee=O.length;Ee<ee;Ee++){const z=O[Ee],G=z.shadow;if(G===void 0){st("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ne=G.getFrameExtents();l.multiply(ne),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ne.x),l.x=c.x*ne.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ne.y),l.y=c.y*ne.y,G.mapSize.y=c.y));const xe=o.state.buffers.depth.getReversed();if(G.camera._reversedDepth=xe,G.map===null||_e===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Yo){if(z.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Qi(l.x,l.y,{format:qr,type:Ca,minFilter:zn,magFilter:zn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new Xs(l.x,l.y,ji),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Da,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An}else z.isPointLight?(G.map=new I_(l.x),G.map.depthTexture=new _b(l.x,$i)):(G.map=new Qi(l.x,l.y),G.map.depthTexture=new Xs(l.x,l.y,$i)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Da,this.type===Fc?(G.map.depthTexture.compareFunction=xe?Jh:Qh,G.map.depthTexture.minFilter=zn,G.map.depthTexture.magFilter=zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An);G.camera.updateProjectionMatrix()}const De=G.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<De;L++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,L),o.clear();else{L===0&&(o.setRenderTarget(G.map),o.clear());const Y=G.getViewport(L);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),Z.viewport(h)}if(z.isPointLight){const Y=G.camera,Ce=G.matrix,he=z.distance||Y.far;he!==Y.far&&(Y.far=he,Y.updateProjectionMatrix()),qo.setFromMatrixPosition(z.matrixWorld),Y.position.copy(qo),Zd.copy(Y.position),Zd.add(pA[L]),Y.up.copy(mA[L]),Y.lookAt(Zd),Y.updateMatrixWorld(),Ce.makeTranslation(-qo.x,-qo.y,-qo.z),r_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(r_,Y.coordinateSystem,Y.reversedDepth)}else G.updateMatrices(z);r=G.getFrustum(),w(P,S,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Yo&&F(G,S),G.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(N,X,B)};function F(O,P){const S=e.update(D);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,E.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Qi(l.x,l.y,{format:qr,type:Ca})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(P,null,S,g,D,null),E.uniforms.shadow_pass.value=O.mapPass.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(P,null,S,E,D,null)}function k(O,P,S,N){let X=null;const B=S.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)X=B;else if(X=S.isPointLight===!0?p:m,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Z=X.uuid,_e=P.uuid;let Ee=d[Z];Ee===void 0&&(Ee={},d[Z]=Ee);let ee=Ee[_e];ee===void 0&&(ee=X.clone(),Ee[_e]=ee,P.addEventListener("dispose",H)),X=ee}if(X.visible=P.visible,X.wireframe=P.wireframe,N===Yo?X.side=P.shadowSide!==null?P.shadowSide:P.side:X.side=P.shadowSide!==null?P.shadowSide:x[P.side],X.alphaMap=P.alphaMap,X.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,X.map=P.map,X.clipShadows=P.clipShadows,X.clippingPlanes=P.clippingPlanes,X.clipIntersection=P.clipIntersection,X.displacementMap=P.displacementMap,X.displacementScale=P.displacementScale,X.displacementBias=P.displacementBias,X.wireframeLinewidth=P.wireframeLinewidth,X.linewidth=P.linewidth,S.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Z=o.properties.get(X);Z.light=S}return X}function w(O,P,S,N,X){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&X===Yo)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,O.matrixWorld);const _e=e.update(O),Ee=O.material;if(Array.isArray(Ee)){const ee=_e.groups;for(let z=0,G=ee.length;z<G;z++){const ne=ee[z],xe=Ee[ne.materialIndex];if(xe&&xe.visible){const De=k(O,xe,N,X);O.onBeforeShadow(o,O,P,S,_e,De,ne),o.renderBufferDirect(S,null,_e,De,O,ne),O.onAfterShadow(o,O,P,S,_e,De,ne)}}}else if(Ee.visible){const ee=k(O,Ee,N,X);O.onBeforeShadow(o,O,P,S,_e,ee,null),o.renderBufferDirect(S,null,_e,ee,O,null),O.onAfterShadow(o,O,P,S,_e,ee,null)}}const Z=O.children;for(let _e=0,Ee=Z.length;_e<Ee;_e++)w(Z[_e],P,S,N,X)}function H(O){O.target.removeEventListener("dispose",H);for(const S in d){const N=d[S],X=O.target.uuid;X in N&&(N[X].dispose(),delete N[X])}}}function vA(o,e){function i(){let W=!1;const Ue=new un;let be=null;const J=new un(0,0,0,0);return{setMask:function(ae){be!==ae&&!W&&(o.colorMask(ae,ae,ae,ae),be=ae)},setLocked:function(ae){W=ae},setClear:function(ae,$,Se,de,je){je===!0&&(ae*=de,$*=de,Se*=de),Ue.set(ae,$,Se,de),J.equals(Ue)===!1&&(o.clearColor(ae,$,Se,de),J.copy(Ue))},reset:function(){W=!1,be=null,J.set(-1,0,0,0)}}}function r(){let W=!1,Ue=!1,be=null,J=null,ae=null;return{setReversed:function($){if(Ue!==$){const Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Ue=$;const de=ae;ae=null,this.setClear(de)}},getReversed:function(){return Ue},setTest:function($){$?Re(o.DEPTH_TEST):Ge(o.DEPTH_TEST)},setMask:function($){be!==$&&!W&&(o.depthMask($),be=$)},setFunc:function($){if(Ue&&($=XS[$]),J!==$){switch($){case Jd:o.depthFunc(o.NEVER);break;case $d:o.depthFunc(o.ALWAYS);break;case eh:o.depthFunc(o.LESS);break;case Vs:o.depthFunc(o.LEQUAL);break;case th:o.depthFunc(o.EQUAL);break;case nh:o.depthFunc(o.GEQUAL);break;case ih:o.depthFunc(o.GREATER);break;case ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}J=$}},setLocked:function($){W=$},setClear:function($){ae!==$&&(ae=$,Ue&&($=1-$),o.clearDepth($))},reset:function(){W=!1,be=null,J=null,ae=null,Ue=!1}}}function l(){let W=!1,Ue=null,be=null,J=null,ae=null,$=null,Se=null,de=null,je=null;return{setTest:function(ot){W||(ot?Re(o.STENCIL_TEST):Ge(o.STENCIL_TEST))},setMask:function(ot){Ue!==ot&&!W&&(o.stencilMask(ot),Ue=ot)},setFunc:function(ot,Qt,fn){(be!==ot||J!==Qt||ae!==fn)&&(o.stencilFunc(ot,Qt,fn),be=ot,J=Qt,ae=fn)},setOp:function(ot,Qt,fn){($!==ot||Se!==Qt||de!==fn)&&(o.stencilOp(ot,Qt,fn),$=ot,Se=Qt,de=fn)},setLocked:function(ot){W=ot},setClear:function(ot){je!==ot&&(o.clearStencil(ot),je=ot)},reset:function(){W=!1,Ue=null,be=null,J=null,ae=null,$=null,Se=null,de=null,je=null}}}const c=new i,h=new r,m=new l,p=new WeakMap,d=new WeakMap;let v={},x={},g={},E=new WeakMap,T=[],D=null,M=!1,y=null,F=null,k=null,w=null,H=null,O=null,P=null,S=new Et(0,0,0),N=0,X=!1,B=null,Z=null,_e=null,Ee=null,ee=null;const z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ne=0;const xe=o.getParameter(o.VERSION);xe.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(xe)[1]),G=ne>=1):xe.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(xe)[1]),G=ne>=2);let De=null,L={};const Y=o.getParameter(o.SCISSOR_BOX),Ce=o.getParameter(o.VIEWPORT),he=new un().fromArray(Y),we=new un().fromArray(Ce);function te(W,Ue,be,J){const ae=new Uint8Array(4),$=o.createTexture();o.bindTexture(W,$),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Se=0;Se<be;Se++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,J,0,o.RGBA,o.UNSIGNED_BYTE,ae):o.texImage2D(Ue+Se,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ae);return $}const ye={};ye[o.TEXTURE_2D]=te(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=te(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=te(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=te(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),Re(o.DEPTH_TEST),h.setFunc(Vs),Wt(!1),tn(tv),Re(o.CULL_FACE),_t(Ra);function Re(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function Ge(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function rt(W,Ue){return g[W]!==Ue?(o.bindFramebuffer(W,Ue),g[W]=Ue,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ue),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function $e(W,Ue){let be=T,J=!1;if(W){be=E.get(Ue),be===void 0&&(be=[],E.set(Ue,be));const ae=W.textures;if(be.length!==ae.length||be[0]!==o.COLOR_ATTACHMENT0){for(let $=0,Se=ae.length;$<Se;$++)be[$]=o.COLOR_ATTACHMENT0+$;be.length=ae.length,J=!0}}else be[0]!==o.BACK&&(be[0]=o.BACK,J=!0);J&&o.drawBuffers(be)}function Nt(W){return D!==W?(o.useProgram(W),D=W,!0):!1}const lt={[Vr]:o.FUNC_ADD,[hS]:o.FUNC_SUBTRACT,[pS]:o.FUNC_REVERSE_SUBTRACT};lt[mS]=o.MIN,lt[gS]=o.MAX;const vt={[vS]:o.ZERO,[_S]:o.ONE,[xS]:o.SRC_COLOR,[Kd]:o.SRC_ALPHA,[TS]:o.SRC_ALPHA_SATURATE,[MS]:o.DST_COLOR,[SS]:o.DST_ALPHA,[yS]:o.ONE_MINUS_SRC_COLOR,[Qd]:o.ONE_MINUS_SRC_ALPHA,[ES]:o.ONE_MINUS_DST_COLOR,[bS]:o.ONE_MINUS_DST_ALPHA,[AS]:o.CONSTANT_COLOR,[RS]:o.ONE_MINUS_CONSTANT_COLOR,[wS]:o.CONSTANT_ALPHA,[CS]:o.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Ue,be,J,ae,$,Se,de,je,ot){if(W===Ra){M===!0&&(Ge(o.BLEND),M=!1);return}if(M===!1&&(Re(o.BLEND),M=!0),W!==dS){if(W!==y||ot!==X){if((F!==Vr||H!==Vr)&&(o.blendEquation(o.FUNC_ADD),F=Vr,H=Vr),ot)switch(W){case Fs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nv:o.blendFunc(o.ONE,o.ONE);break;case iv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case av:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ct("WebGLState: Invalid blending: ",W);break}else switch(W){case Fs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case iv:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",W);break}k=null,w=null,O=null,P=null,S.set(0,0,0),N=0,y=W,X=ot}return}ae=ae||Ue,$=$||be,Se=Se||J,(Ue!==F||ae!==H)&&(o.blendEquationSeparate(lt[Ue],lt[ae]),F=Ue,H=ae),(be!==k||J!==w||$!==O||Se!==P)&&(o.blendFuncSeparate(vt[be],vt[J],vt[$],vt[Se]),k=be,w=J,O=$,P=Se),(de.equals(S)===!1||je!==N)&&(o.blendColor(de.r,de.g,de.b,je),S.copy(de),N=je),y=W,X=!1}function gt(W,Ue){W.side===Ta?Ge(o.CULL_FACE):Re(o.CULL_FACE);let be=W.side===ei;Ue&&(be=!be),Wt(be),W.blending===Fs&&W.transparent===!1?_t(Ra):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const J=W.stencilWrite;m.setTest(J),J&&(m.setMask(W.stencilWriteMask),m.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),m.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ut(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Re(o.SAMPLE_ALPHA_TO_COVERAGE):Ge(o.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(W){B!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),B=W)}function tn(W){W!==cS?(Re(o.CULL_FACE),W!==Z&&(W===tv?o.cullFace(o.BACK):W===uS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ge(o.CULL_FACE),Z=W}function nn(W){W!==_e&&(G&&o.lineWidth(W),_e=W)}function Ut(W,Ue,be){W?(Re(o.POLYGON_OFFSET_FILL),(Ee!==Ue||ee!==be)&&(Ee=Ue,ee=be,h.getReversed()&&(Ue=-Ue),o.polygonOffset(Ue,be))):Ge(o.POLYGON_OFFSET_FILL)}function zt(W){W?Re(o.SCISSOR_TEST):Ge(o.SCISSOR_TEST)}function an(W){W===void 0&&(W=o.TEXTURE0+z-1),De!==W&&(o.activeTexture(W),De=W)}function I(W,Ue,be){be===void 0&&(De===null?be=o.TEXTURE0+z-1:be=De);let J=L[be];J===void 0&&(J={type:void 0,texture:void 0},L[be]=J),(J.type!==W||J.texture!==Ue)&&(De!==be&&(o.activeTexture(be),De=be),o.bindTexture(W,Ue||ye[W]),J.type=W,J.texture=Ue)}function pt(){const W=L[De];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function wt(){try{o.compressedTexImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function U(){try{o.compressedTexImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function b(){try{o.texSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function K(){try{o.texSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function me(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Ne(){try{o.texStorage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Oe(){try{o.texStorage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ge(){try{o.texImage2D(...arguments)}catch(W){Ct("WebGLState:",W)}}function ve(){try{o.texImage3D(...arguments)}catch(W){Ct("WebGLState:",W)}}function Le(W){return x[W]!==void 0?x[W]:o.getParameter(W)}function He(W,Ue){x[W]!==Ue&&(o.pixelStorei(W,Ue),x[W]=Ue)}function ze(W){he.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),he.copy(W))}function Pe(W){we.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),we.copy(W))}function Ke(W,Ue){let be=d.get(Ue);be===void 0&&(be=new WeakMap,d.set(Ue,be));let J=be.get(W);J===void 0&&(J=o.getUniformBlockIndex(Ue,W.name),be.set(W,J))}function Qe(W,Ue){const J=d.get(Ue).get(W);p.get(Ue)!==J&&(o.uniformBlockBinding(Ue,J,W.__bindingPointIndex),p.set(Ue,J))}function it(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},x={},De=null,L={},g={},E=new WeakMap,T=[],D=null,M=!1,y=null,F=null,k=null,w=null,H=null,O=null,P=null,S=new Et(0,0,0),N=0,X=!1,B=null,Z=null,_e=null,Ee=null,ee=null,he.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:Re,disable:Ge,bindFramebuffer:rt,drawBuffers:$e,useProgram:Nt,setBlending:_t,setMaterial:gt,setFlipSided:Wt,setCullFace:tn,setLineWidth:nn,setPolygonOffset:Ut,setScissorTest:zt,activeTexture:an,bindTexture:I,unbindTexture:pt,compressedTexImage2D:wt,compressedTexImage3D:U,texImage2D:ge,texImage3D:ve,pixelStorei:He,getParameter:Le,updateUBOMapping:Ke,uniformBlockBinding:Qe,texStorage2D:Ne,texStorage3D:Oe,texSubImage2D:b,texSubImage3D:K,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:ze,viewport:Pe,reset:it}}function _A(o,e,i,r,l,c,h){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Dt,v=new WeakMap,x=new Set;let g;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(U,b){return T?new OffscreenCanvas(U,b):Kc("canvas")}function M(U,b,K){let ce=1;const me=wt(U);if((me.width>K||me.height>K)&&(ce=K/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ne=Math.floor(ce*me.width),Oe=Math.floor(ce*me.height);g===void 0&&(g=D(Ne,Oe));const ge=b?D(Ne,Oe):g;return ge.width=Ne,ge.height=Oe,ge.getContext("2d").drawImage(U,0,0,Ne,Oe),st("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ne+"x"+Oe+")."),ge}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function y(U){return U.generateMipmaps}function F(U){o.generateMipmap(U)}function k(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(U,b,K,ce,me,Ne=!1){if(U!==null){if(o[U]!==void 0)return o[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Oe;ce&&(Oe=e.get("EXT_texture_norm16"),Oe||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=b;if(b===o.RED&&(K===o.FLOAT&&(ge=o.R32F),K===o.HALF_FLOAT&&(ge=o.R16F),K===o.UNSIGNED_BYTE&&(ge=o.R8),K===o.UNSIGNED_SHORT&&Oe&&(ge=Oe.R16_EXT),K===o.SHORT&&Oe&&(ge=Oe.R16_SNORM_EXT)),b===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ge=o.R8UI),K===o.UNSIGNED_SHORT&&(ge=o.R16UI),K===o.UNSIGNED_INT&&(ge=o.R32UI),K===o.BYTE&&(ge=o.R8I),K===o.SHORT&&(ge=o.R16I),K===o.INT&&(ge=o.R32I)),b===o.RG&&(K===o.FLOAT&&(ge=o.RG32F),K===o.HALF_FLOAT&&(ge=o.RG16F),K===o.UNSIGNED_BYTE&&(ge=o.RG8),K===o.UNSIGNED_SHORT&&Oe&&(ge=Oe.RG16_EXT),K===o.SHORT&&Oe&&(ge=Oe.RG16_SNORM_EXT)),b===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ge=o.RG8UI),K===o.UNSIGNED_SHORT&&(ge=o.RG16UI),K===o.UNSIGNED_INT&&(ge=o.RG32UI),K===o.BYTE&&(ge=o.RG8I),K===o.SHORT&&(ge=o.RG16I),K===o.INT&&(ge=o.RG32I)),b===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ge=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ge=o.RGB16UI),K===o.UNSIGNED_INT&&(ge=o.RGB32UI),K===o.BYTE&&(ge=o.RGB8I),K===o.SHORT&&(ge=o.RGB16I),K===o.INT&&(ge=o.RGB32I)),b===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ge=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ge=o.RGBA16UI),K===o.UNSIGNED_INT&&(ge=o.RGBA32UI),K===o.BYTE&&(ge=o.RGBA8I),K===o.SHORT&&(ge=o.RGBA16I),K===o.INT&&(ge=o.RGBA32I)),b===o.RGB&&(K===o.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGB16_EXT),K===o.SHORT&&Oe&&(ge=Oe.RGB16_SNORM_EXT),K===o.UNSIGNED_INT_5_9_9_9_REV&&(ge=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ge=o.R11F_G11F_B10F)),b===o.RGBA){const ve=Ne?Zc:At.getTransfer(me);K===o.FLOAT&&(ge=o.RGBA32F),K===o.HALF_FLOAT&&(ge=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ge=ve===Xt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGBA16_EXT),K===o.SHORT&&Oe&&(ge=Oe.RGBA16_SNORM_EXT),K===o.UNSIGNED_SHORT_4_4_4_4&&(ge=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ge=o.RGB5_A1)}return(ge===o.R16F||ge===o.R32F||ge===o.RG16F||ge===o.RG32F||ge===o.RGBA16F||ge===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function H(U,b){let K;return U?b===null||b===$i||b===Ko?K=o.DEPTH24_STENCIL8:b===ji?K=o.DEPTH32F_STENCIL8:b===Zo&&(K=o.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$i||b===Ko?K=o.DEPTH_COMPONENT24:b===ji?K=o.DEPTH_COMPONENT32F:b===Zo&&(K=o.DEPTH_COMPONENT16),K}function O(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==An&&U.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function P(U){const b=U.target;b.removeEventListener("dispose",P),N(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&x.delete(b)}function S(U){const b=U.target;b.removeEventListener("dispose",S),B(b)}function N(U){const b=r.get(U);if(b.__webglInit===void 0)return;const K=U.source,ce=E.get(K);if(ce){const me=ce[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&X(U),Object.keys(ce).length===0&&E.delete(K)}r.remove(U)}function X(U){const b=r.get(U);o.deleteTexture(b.__webglTexture);const K=U.source,ce=E.get(K);delete ce[b.__cacheKey],h.memory.textures--}function B(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let me=0;me<b.__webglFramebuffer[ce].length;me++)o.deleteFramebuffer(b.__webglFramebuffer[ce][me]);else o.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)o.deleteFramebuffer(b.__webglFramebuffer[ce]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=U.textures;for(let ce=0,me=K.length;ce<me;ce++){const Ne=r.get(K[ce]);Ne.__webglTexture&&(o.deleteTexture(Ne.__webglTexture),h.memory.textures--),r.remove(K[ce])}r.remove(U)}let Z=0;function _e(){Z=0}function Ee(){return Z}function ee(U){Z=U}function z(){const U=Z;return U>=l.maxTextures&&st("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),Z+=1,U}function G(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ne(U,b){const K=r.get(U);if(U.isVideoTexture&&I(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const ce=U.image;if(ce===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(K,U,b);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+b)}function xe(U,b){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Ge(K,U,b);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+b)}function De(U,b){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Ge(K,U,b);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+b)}function L(U,b){const K=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){rt(K,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+b)}const Y={[rh]:o.REPEAT,[Aa]:o.CLAMP_TO_EDGE,[sh]:o.MIRRORED_REPEAT},Ce={[An]:o.NEAREST,[US]:o.NEAREST_MIPMAP_NEAREST,[fc]:o.NEAREST_MIPMAP_LINEAR,[zn]:o.LINEAR,[vd]:o.LINEAR_MIPMAP_NEAREST,[dr]:o.LINEAR_MIPMAP_LINEAR},he={[PS]:o.NEVER,[HS]:o.ALWAYS,[zS]:o.LESS,[Qh]:o.LEQUAL,[IS]:o.EQUAL,[Jh]:o.GEQUAL,[BS]:o.GREATER,[FS]:o.NOTEQUAL};function we(U,b){if(b.type===ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===vd||b.magFilter===fc||b.magFilter===dr||b.minFilter===zn||b.minFilter===vd||b.minFilter===fc||b.minFilter===dr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Y[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Y[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Y[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Ce[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Ce[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,he[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==fc&&b.minFilter!==dr||b.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function te(U,b){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",P));const ce=b.source;let me=E.get(ce);me===void 0&&(me={},E.set(ce,me));const Ne=G(b);if(Ne!==U.__cacheKey){me[Ne]===void 0&&(me[Ne]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,K=!0),me[Ne].usedTimes++;const Oe=me[U.__cacheKey];Oe!==void 0&&(me[U.__cacheKey].usedTimes--,Oe.usedTimes===0&&X(b)),U.__cacheKey=Ne,U.__webglTexture=me[Ne].texture}return K}function ye(U,b,K){return Math.floor(Math.floor(U/K)/b)}function Re(U,b,K,ce){const Ne=U.updateRanges;if(Ne.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,K,ce,b.data);else{Ne.sort((He,ze)=>He.start-ze.start);let Oe=0;for(let He=1;He<Ne.length;He++){const ze=Ne[Oe],Pe=Ne[He],Ke=ze.start+ze.count,Qe=ye(Pe.start,b.width,4),it=ye(ze.start,b.width,4);Pe.start<=Ke+1&&Qe===it&&ye(Pe.start+Pe.count-1,b.width,4)===Qe?ze.count=Math.max(ze.count,Pe.start+Pe.count-ze.start):(++Oe,Ne[Oe]=Pe)}Ne.length=Oe+1;const ge=i.getParameter(o.UNPACK_ROW_LENGTH),ve=i.getParameter(o.UNPACK_SKIP_PIXELS),Le=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let He=0,ze=Ne.length;He<ze;He++){const Pe=Ne[He],Ke=Math.floor(Pe.start/4),Qe=Math.ceil(Pe.count/4),it=Ke%b.width,W=Math.floor(Ke/b.width),Ue=Qe,be=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,it),i.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,it,W,Ue,be,K,ce,b.data)}U.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ge),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(o.UNPACK_SKIP_ROWS,Le)}}function Ge(U,b,K){let ce=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=o.TEXTURE_3D);const me=te(U,b),Ne=b.source;i.bindTexture(ce,U.__webglTexture,o.TEXTURE0+K);const Oe=r.get(Ne);if(Ne.version!==Oe.__version||me===!0){if(i.activeTexture(o.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const be=At.getPrimaries(At.workingColorSpace),J=b.colorSpace===fr?null:At.getPrimaries(b.colorSpace),ae=b.colorSpace===fr||be===J?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment);let ve=M(b.image,!1,l.maxTextureSize);ve=pt(b,ve);const Le=c.convert(b.format,b.colorSpace),He=c.convert(b.type);let ze=w(b.internalFormat,Le,He,b.normalized,b.colorSpace,b.isVideoTexture);we(ce,b);let Pe;const Ke=b.mipmaps,Qe=b.isVideoTexture!==!0,it=Oe.__version===void 0||me===!0,W=Ne.dataReady,Ue=O(b,ve);if(b.isDepthTexture)ze=H(b.format===Xr,b.type),it&&(Qe?i.texStorage2D(o.TEXTURE_2D,1,ze,ve.width,ve.height):i.texImage2D(o.TEXTURE_2D,0,ze,ve.width,ve.height,0,Le,He,null));else if(b.isDataTexture)if(Ke.length>0){Qe&&it&&i.texStorage2D(o.TEXTURE_2D,Ue,ze,Ke[0].width,Ke[0].height);for(let be=0,J=Ke.length;be<J;be++)Pe=Ke[be],Qe?W&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Pe.width,Pe.height,Le,He,Pe.data):i.texImage2D(o.TEXTURE_2D,be,ze,Pe.width,Pe.height,0,Le,He,Pe.data);b.generateMipmaps=!1}else Qe?(it&&i.texStorage2D(o.TEXTURE_2D,Ue,ze,ve.width,ve.height),W&&Re(b,ve,Le,He)):i.texImage2D(o.TEXTURE_2D,0,ze,ve.width,ve.height,0,Le,He,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qe&&it&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,ze,Ke[0].width,Ke[0].height,ve.depth);for(let be=0,J=Ke.length;be<J;be++)if(Pe=Ke[be],b.format!==Ii)if(Le!==null)if(Qe){if(W)if(b.layerUpdates.size>0){const ae=zv(Pe.width,Pe.height,b.format,b.type);for(const $ of b.layerUpdates){const Se=Pe.data.subarray($*ae/Pe.data.BYTES_PER_ELEMENT,($+1)*ae/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,$,Pe.width,Pe.height,1,Le,Se)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Pe.width,Pe.height,ve.depth,Le,Pe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,ze,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Pe.width,Pe.height,ve.depth,Le,He,Pe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,be,ze,Pe.width,Pe.height,ve.depth,0,Le,He,Pe.data)}else{Qe&&it&&i.texStorage2D(o.TEXTURE_2D,Ue,ze,Ke[0].width,Ke[0].height);for(let be=0,J=Ke.length;be<J;be++)Pe=Ke[be],b.format!==Ii?Le!==null?Qe?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,Pe.width,Pe.height,Le,Pe.data):i.compressedTexImage2D(o.TEXTURE_2D,be,ze,Pe.width,Pe.height,0,Pe.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?W&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Pe.width,Pe.height,Le,He,Pe.data):i.texImage2D(o.TEXTURE_2D,be,ze,Pe.width,Pe.height,0,Le,He,Pe.data)}else if(b.isDataArrayTexture)if(Qe){if(it&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,ze,ve.width,ve.height,ve.depth),W)if(b.layerUpdates.size>0){const be=zv(ve.width,ve.height,b.format,b.type);for(const J of b.layerUpdates){const ae=ve.data.subarray(J*be/ve.data.BYTES_PER_ELEMENT,(J+1)*be/ve.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,J,ve.width,ve.height,1,Le,He,ae)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Le,He,ve.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,ve.width,ve.height,ve.depth,0,Le,He,ve.data);else if(b.isData3DTexture)Qe?(it&&i.texStorage3D(o.TEXTURE_3D,Ue,ze,ve.width,ve.height,ve.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Le,He,ve.data)):i.texImage3D(o.TEXTURE_3D,0,ze,ve.width,ve.height,ve.depth,0,Le,He,ve.data);else if(b.isFramebufferTexture){if(it)if(Qe)i.texStorage2D(o.TEXTURE_2D,Ue,ze,ve.width,ve.height);else{let be=ve.width,J=ve.height;for(let ae=0;ae<Ue;ae++)i.texImage2D(o.TEXTURE_2D,ae,ze,be,J,0,Le,He,null),be>>=1,J>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in o){const be=o.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),ve.parentNode!==be){be.appendChild(ve),x.add(b),be.onpaint=J=>{const ae=J.changedElements;for(const $ of x)ae.includes($.image)&&($.needsUpdate=!0)},be.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,ve);else{const ae=o.RGBA,$=o.RGBA,Se=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,ae,$,Se,ve)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(Qe&&it){const be=wt(Ke[0]);i.texStorage2D(o.TEXTURE_2D,Ue,ze,be.width,be.height)}for(let be=0,J=Ke.length;be<J;be++)Pe=Ke[be],Qe?W&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Le,He,Pe):i.texImage2D(o.TEXTURE_2D,be,ze,Le,He,Pe);b.generateMipmaps=!1}else if(Qe){if(it){const be=wt(ve);i.texStorage2D(o.TEXTURE_2D,Ue,ze,be.width,be.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Le,He,ve)}else i.texImage2D(o.TEXTURE_2D,0,ze,Le,He,ve);y(b)&&F(ce),Oe.__version=Ne.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function rt(U,b,K){if(b.image.length!==6)return;const ce=te(U,b),me=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+K);const Ne=r.get(me);if(me.version!==Ne.__version||ce===!0){i.activeTexture(o.TEXTURE0+K);const Oe=At.getPrimaries(At.workingColorSpace),ge=b.colorSpace===fr?null:At.getPrimaries(b.colorSpace),ve=b.colorSpace===fr||Oe===ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,ze=[];for(let $=0;$<6;$++)!Le&&!He?ze[$]=M(b.image[$],!0,l.maxCubemapSize):ze[$]=He?b.image[$].image:b.image[$],ze[$]=pt(b,ze[$]);const Pe=ze[0],Ke=c.convert(b.format,b.colorSpace),Qe=c.convert(b.type),it=w(b.internalFormat,Ke,Qe,b.normalized,b.colorSpace),W=b.isVideoTexture!==!0,Ue=Ne.__version===void 0||ce===!0,be=me.dataReady;let J=O(b,Pe);we(o.TEXTURE_CUBE_MAP,b);let ae;if(Le){W&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,J,it,Pe.width,Pe.height);for(let $=0;$<6;$++){ae=ze[$].mipmaps;for(let Se=0;Se<ae.length;Se++){const de=ae[Se];b.format!==Ii?Ke!==null?W?be&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,de.width,de.height,Ke,de.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,it,de.width,de.height,0,de.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?be&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,de.width,de.height,Ke,Qe,de.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,it,de.width,de.height,0,Ke,Qe,de.data)}}}else{if(ae=b.mipmaps,W&&Ue){ae.length>0&&J++;const $=wt(ze[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,J,it,$.width,$.height)}for(let $=0;$<6;$++)if(He){W?be&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ze[$].width,ze[$].height,Ke,Qe,ze[$].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,it,ze[$].width,ze[$].height,0,Ke,Qe,ze[$].data);for(let Se=0;Se<ae.length;Se++){const je=ae[Se].image[$].image;W?be&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,je.width,je.height,Ke,Qe,je.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,it,je.width,je.height,0,Ke,Qe,je.data)}}else{W?be&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ke,Qe,ze[$]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,it,Ke,Qe,ze[$]);for(let Se=0;Se<ae.length;Se++){const de=ae[Se];W?be&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,Ke,Qe,de.image[$]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,it,Ke,Qe,de.image[$])}}}y(b)&&F(o.TEXTURE_CUBE_MAP),Ne.__version=me.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function $e(U,b,K,ce,me,Ne){const Oe=c.convert(K.format,K.colorSpace),ge=c.convert(K.type),ve=w(K.internalFormat,Oe,ge,K.normalized,K.colorSpace),Le=r.get(b),He=r.get(K);if(He.__renderTarget=b,!Le.__hasExternalTextures){const ze=Math.max(1,b.width>>Ne),Pe=Math.max(1,b.height>>Ne);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?i.texImage3D(me,Ne,ve,ze,Pe,b.depth,0,Oe,ge,null):i.texImage2D(me,Ne,ve,ze,Pe,0,Oe,ge,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),an(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ce,me,He.__webglTexture,0,zt(b)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ce,me,He.__webglTexture,Ne),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(U,b,K){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const ce=b.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,Ne=H(b.stencilBuffer,me),Oe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;an(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,zt(b),Ne,b.width,b.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,zt(b),Ne,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ne,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Oe,o.RENDERBUFFER,U)}else{const ce=b.textures;for(let me=0;me<ce.length;me++){const Ne=ce[me],Oe=c.convert(Ne.format,Ne.colorSpace),ge=c.convert(Ne.type),ve=w(Ne.internalFormat,Oe,ge,Ne.normalized,Ne.colorSpace);an(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,zt(b),ve,b.width,b.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,zt(b),ve,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ve,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function lt(U,b,K){const ce=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(b.depthTexture);if(me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ce){if(me.__webglInit===void 0&&(me.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),me.__webglTexture===void 0){me.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),we(o.TEXTURE_CUBE_MAP,b.depthTexture);const Le=c.convert(b.depthTexture.format),He=c.convert(b.depthTexture.type);let ze;b.depthTexture.format===Da?ze=o.DEPTH_COMPONENT24:b.depthTexture.format===Xr&&(ze=o.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ze,b.width,b.height,0,Le,He,null)}}else ne(b.depthTexture,0);const Ne=me.__webglTexture,Oe=zt(b),ge=ce?o.TEXTURE_CUBE_MAP_POSITIVE_X+K:o.TEXTURE_2D,ve=b.depthTexture.format===Xr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Da)an(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,ge,Ne,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,ve,ge,Ne,0);else if(b.depthTexture.format===Xr)an(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ve,ge,Ne,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,ve,ge,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(U){const b=r.get(U),K=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const ce=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ce){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=ce}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let ce=0;ce<6;ce++)lt(b.__webglFramebuffer[ce],U,ce);else{const ce=U.texture.mipmaps;ce&&ce.length>0?lt(b.__webglFramebuffer[0],U,0):lt(b.__webglFramebuffer,U,0)}else if(K){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]===void 0)b.__webglDepthbuffer[ce]=o.createRenderbuffer(),Nt(b.__webglDepthbuffer[ce],U,!1);else{const me=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer[ce];o.bindRenderbuffer(o.RENDERBUFFER,Ne),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,Ne)}}else{const ce=U.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Nt(b.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ne),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,Ne)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function _t(U,b,K){const ce=r.get(U);b!==void 0&&$e(ce.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&vt(U)}function gt(U){const b=U.texture,K=r.get(U),ce=r.get(b);U.addEventListener("dispose",S);const me=U.textures,Ne=U.isWebGLCubeRenderTarget===!0,Oe=me.length>1;if(Oe||(ce.__webglTexture===void 0&&(ce.__webglTexture=o.createTexture()),ce.__version=b.version,h.memory.textures++),Ne){K.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[ge]=[];for(let ve=0;ve<b.mipmaps.length;ve++)K.__webglFramebuffer[ge][ve]=o.createFramebuffer()}else K.__webglFramebuffer[ge]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)K.__webglFramebuffer[ge]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Oe)for(let ge=0,ve=me.length;ge<ve;ge++){const Le=r.get(me[ge]);Le.__webglTexture===void 0&&(Le.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&an(U)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const ve=me[ge];K.__webglColorRenderbuffer[ge]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[ge]);const Le=c.convert(ve.format,ve.colorSpace),He=c.convert(ve.type),ze=w(ve.internalFormat,Le,He,ve.normalized,ve.colorSpace,U.isXRRenderTarget===!0),Pe=zt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pe,ze,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ge,o.RENDERBUFFER,K.__webglColorRenderbuffer[ge])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(K.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ne){i.bindTexture(o.TEXTURE_CUBE_MAP,ce.__webglTexture),we(o.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)$e(K.__webglFramebuffer[ge][ve],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ve);else $e(K.__webglFramebuffer[ge],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(b)&&F(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let ge=0,ve=me.length;ge<ve;ge++){const Le=me[ge],He=r.get(Le);let ze=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ze=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ze,He.__webglTexture),we(ze,Le),$e(K.__webglFramebuffer,U,Le,o.COLOR_ATTACHMENT0+ge,ze,0),y(Le)&&F(ze)}i.unbindTexture()}else{let ge=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ge,ce.__webglTexture),we(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)$e(K.__webglFramebuffer[ve],U,b,o.COLOR_ATTACHMENT0,ge,ve);else $e(K.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,ge,0);y(b)&&F(ge),i.unbindTexture()}U.depthBuffer&&vt(U)}function Wt(U){const b=U.textures;for(let K=0,ce=b.length;K<ce;K++){const me=b[K];if(y(me)){const Ne=k(U),Oe=r.get(me).__webglTexture;i.bindTexture(Ne,Oe),F(Ne),i.unbindTexture()}}}const tn=[],nn=[];function Ut(U){if(U.samples>0){if(an(U)===!1){const b=U.textures,K=U.width,ce=U.height;let me=o.COLOR_BUFFER_BIT;const Ne=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Oe=r.get(U),ge=b.length>1;if(ge)for(let Le=0;Le<b.length;Le++)i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ve=U.texture.mipmaps;ve&&ve.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),ge){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const He=r.get(b[Le]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,He,0)}o.blitFramebuffer(0,0,K,ce,0,0,K,ce,me,o.NEAREST),p===!0&&(tn.length=0,nn.length=0,tn.push(o.COLOR_ATTACHMENT0+Le),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tn.push(Ne),nn.push(Ne),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,nn)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,tn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ge)for(let Le=0;Le<b.length;Le++){i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const He=r.get(b[Le]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.TEXTURE_2D,He,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function zt(U){return Math.min(l.maxSamples,U.samples)}function an(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function I(U){const b=h.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function pt(U,b){const K=U.colorSpace,ce=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==jc&&K!==fr&&(At.getTransfer(K)===Xt?(ce!==Ii||me!==di)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",K)),b}function wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(d.width=U.naturalWidth||U.width,d.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(d.width=U.displayWidth,d.height=U.displayHeight):(d.width=U.width,d.height=U.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=_e,this.getTextureUnits=Ee,this.setTextureUnits=ee,this.setTexture2D=ne,this.setTexture2DArray=xe,this.setTexture3D=De,this.setTextureCube=L,this.rebindTextures=_t,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function xA(o,e){function i(r,l=fr){let c;const h=At.getTransfer(l);if(r===di)return o.UNSIGNED_BYTE;if(r===qh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Yh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===__)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===x_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===g_)return o.BYTE;if(r===v_)return o.SHORT;if(r===Zo)return o.UNSIGNED_SHORT;if(r===Wh)return o.INT;if(r===$i)return o.UNSIGNED_INT;if(r===ji)return o.FLOAT;if(r===Ca)return o.HALF_FLOAT;if(r===y_)return o.ALPHA;if(r===S_)return o.RGB;if(r===Ii)return o.RGBA;if(r===Da)return o.DEPTH_COMPONENT;if(r===Xr)return o.DEPTH_STENCIL;if(r===b_)return o.RED;if(r===jh)return o.RED_INTEGER;if(r===qr)return o.RG;if(r===Zh)return o.RG_INTEGER;if(r===Kh)return o.RGBA_INTEGER;if(r===Hc||r===Gc||r===Vc||r===kc)if(h===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oh||r===lh||r===ch||r===uh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===oh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fh||r===dh||r===hh||r===ph||r===mh||r===qc||r===gh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===fh||r===dh)return h===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===hh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===ph)return c.COMPRESSED_R11_EAC;if(r===mh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===qc)return c.COMPRESSED_RG11_EAC;if(r===gh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===vh||r===_h||r===xh||r===yh||r===Sh||r===bh||r===Mh||r===Eh||r===Th||r===Ah||r===Rh||r===wh||r===Ch||r===Dh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===vh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_h)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ch)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dh)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nh||r===Uh||r===Lh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Nh)return h===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oh||r===Ph||r===Yc||r===zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Oh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ph)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ko?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const yA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new N_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ea({vertexShader:yA,fragmentShader:SA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bi(new nu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MA extends Yr{constructor(e,i){super();const r=this;let l=null,c=1,h=null,m="local-floor",p=1,d=null,v=null,x=null,g=null,E=null,T=null;const D=typeof XRWebGLBinding<"u",M=new bA,y={},F=i.getContextAttributes();let k=null,w=null;const H=[],O=[],P=new Dt;let S=null;const N=new Mi;N.viewport=new un;const X=new Mi;X.viewport=new un;const B=[N,X],Z=new Ub;let _e=null,Ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ye=H[te];return ye===void 0&&(ye=new Ed,H[te]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(te){let ye=H[te];return ye===void 0&&(ye=new Ed,H[te]=ye),ye.getGripSpace()},this.getHand=function(te){let ye=H[te];return ye===void 0&&(ye=new Ed,H[te]=ye),ye.getHandSpace()};function ee(te){const ye=O.indexOf(te.inputSource);if(ye===-1)return;const Re=H[ye];Re!==void 0&&(Re.update(te.inputSource,te.frame,d||h),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",G);for(let te=0;te<H.length;te++){const ye=O[te];ye!==null&&(O[te]=null,H[te].disconnect(ye))}_e=null,Ee=null,M.reset();for(const te in y)delete y[te];e.setRenderTarget(k),E=null,g=null,x=null,l=null,w=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){m=te,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(k=e.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",z),l.addEventListener("inputsourceschange",G),F.xrCompatible!==!0&&await i.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Ge=null,rt=null;F.depth&&(rt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=F.stencil?Xr:Da,Ge=F.stencil?Ko:$i);const $e={colorFormat:i.RGBA8,depthFormat:rt,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer($e),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new Qi(g.textureWidth,g.textureHeight,{format:Ii,type:di,depthTexture:new Xs(g.textureWidth,g.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Re={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new Qi(E.framebufferWidth,E.framebufferHeight,{format:Ii,type:di,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),d=null,h=await l.requestReferenceSpace(m),we.setContext(l),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(te){for(let ye=0;ye<te.removed.length;ye++){const Re=te.removed[ye],Ge=O.indexOf(Re);Ge>=0&&(O[Ge]=null,H[Ge].disconnect(Re))}for(let ye=0;ye<te.added.length;ye++){const Re=te.added[ye];let Ge=O.indexOf(Re);if(Ge===-1){for(let $e=0;$e<H.length;$e++)if($e>=O.length){O.push(Re),Ge=$e;break}else if(O[$e]===null){O[$e]=Re,Ge=$e;break}if(Ge===-1)break}const rt=H[Ge];rt&&rt.connect(Re)}}const ne=new ie,xe=new ie;function De(te,ye,Re){ne.setFromMatrixPosition(ye.matrixWorld),xe.setFromMatrixPosition(Re.matrixWorld);const Ge=ne.distanceTo(xe),rt=ye.projectionMatrix.elements,$e=Re.projectionMatrix.elements,Nt=rt[14]/(rt[10]-1),lt=rt[14]/(rt[10]+1),vt=(rt[9]+1)/rt[5],_t=(rt[9]-1)/rt[5],gt=(rt[8]-1)/rt[0],Wt=($e[8]+1)/$e[0],tn=Nt*gt,nn=Nt*Wt,Ut=Ge/(-gt+Wt),zt=Ut*-gt;if(ye.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(zt),te.translateZ(Ut),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),rt[10]===-1)te.projectionMatrix.copy(ye.projectionMatrix),te.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const an=Nt+Ut,I=lt+Ut,pt=tn-zt,wt=nn+(Ge-zt),U=vt*lt/I*an,b=_t*lt/I*an;te.projectionMatrix.makePerspective(pt,wt,U,b,an,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function L(te,ye){ye===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ye.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ye=te.near,Re=te.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(Re=M.depthFar)),Z.near=X.near=N.near=ye,Z.far=X.far=N.far=Re,(_e!==Z.near||Ee!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),_e=Z.near,Ee=Z.far),Z.layers.mask=te.layers.mask|6,N.layers.mask=Z.layers.mask&-5,X.layers.mask=Z.layers.mask&-3;const Ge=te.parent,rt=Z.cameras;L(Z,Ge);for(let $e=0;$e<rt.length;$e++)L(rt[$e],Ge);rt.length===2?De(Z,N,X):Z.projectionMatrix.copy(N.projectionMatrix),Y(te,Z,Ge)};function Y(te,ye,Re){Re===null?te.matrix.copy(ye.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(ye.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ye.projectionMatrix),te.projectionMatrixInverse.copy(ye.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Bh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&E===null))return p},this.setFoveation=function(te){p=te,g!==null&&(g.fixedFoveation=te),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(te){return y[te]};let Ce=null;function he(te,ye){if(v=ye.getViewerPose(d||h),T=ye,v!==null){const Re=v.views;E!==null&&(e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w));let Ge=!1;Re.length!==Z.cameras.length&&(Z.cameras.length=0,Ge=!0);for(let lt=0;lt<Re.length;lt++){const vt=Re[lt];let _t=null;if(E!==null)_t=E.getViewport(vt);else{const Wt=x.getViewSubImage(g,vt);_t=Wt.viewport,lt===0&&(e.setRenderTargetTextures(w,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(w))}let gt=B[lt];gt===void 0&&(gt=new Mi,gt.layers.enable(lt),gt.viewport=new un,B[lt]=gt),gt.matrix.fromArray(vt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(vt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(_t.x,_t.y,_t.width,_t.height),lt===0&&(Z.matrix.copy(gt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ge===!0&&Z.cameras.push(gt)}const rt=l.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=r.getBinding();const lt=x.getDepthInformation(Re[0]);lt&&lt.isValid&&lt.texture&&M.init(lt,l.renderState)}if(rt&&rt.includes("camera-access")&&D){e.state.unbindTexture(),x=r.getBinding();for(let lt=0;lt<Re.length;lt++){const vt=Re[lt].camera;if(vt){let _t=y[vt];_t||(_t=new N_,y[vt]=_t);const gt=x.getCameraImage(vt);_t.sourceTexture=gt}}}}for(let Re=0;Re<H.length;Re++){const Ge=O[Re],rt=H[Re];Ge!==null&&rt!==void 0&&rt.update(Ge,ye,d||h)}Ce&&Ce(te,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),T=null}const we=new P_;we.setAnimationLoop(he),this.setAnimationLoop=function(te){Ce=te},this.dispose=function(){}}}const EA=new cn,V_=new ut;V_.set(-1,0,0,0,1,0,0,0,1);function TA(o,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,U_(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,F,k,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),x(M,y)):y.isMeshPhongMaterial?(c(M,y),v(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&E(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),D(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&m(M,y)):y.isPointsMaterial?p(M,y,F,k):y.isSpriteMaterial?d(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ei&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ei&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const F=e.get(y),k=F.envMap,w=F.envMapRotation;k&&(M.envMap.value=k,M.envMapRotation.value.setFromMatrix4(EA.makeRotationFromEuler(w)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(V_),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function m(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,F,k){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*F,M.scale.value=k*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function d(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function x(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function E(M,y,F){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function D(M,y){const F=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function AA(o,e,i,r){let l={},c={},h=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,H){const O=H.program;r.uniformBlockBinding(w,O)}function d(w,H){let O=l[w.id];O===void 0&&(M(w),O=v(w),l[w.id]=O,w.addEventListener("dispose",F));const P=H.program;r.updateUBOMapping(w,P);const S=e.render.frame;c[w.id]!==S&&(g(w),c[w.id]=S)}function v(w){const H=x();w.__bindingPointIndex=H;const O=o.createBuffer(),P=w.__size,S=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,P,S),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,H,O),O}function x(){for(let w=0;w<m;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const H=l[w.id],O=w.uniforms,P=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,H);for(let S=0,N=O.length;S<N;S++){const X=O[S];if(Array.isArray(X))for(let B=0,Z=X.length;B<Z;B++)E(X[B],S,B,P);else E(X,S,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(w,H,O,P){if(D(w,H,O,P)===!0){const S=w.__offset,N=w.value;if(Array.isArray(N)){let X=0;for(let B=0;B<N.length;B++){const Z=N[B],_e=y(Z);T(Z,w.__data,X),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(X+=_e.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(N,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,S,w.__data)}}function T(w,H,O){typeof w=="number"||typeof w=="boolean"?H[0]=w:w.isMatrix3?(H[0]=w.elements[0],H[1]=w.elements[1],H[2]=w.elements[2],H[3]=0,H[4]=w.elements[3],H[5]=w.elements[4],H[6]=w.elements[5],H[7]=0,H[8]=w.elements[6],H[9]=w.elements[7],H[10]=w.elements[8],H[11]=0):ArrayBuffer.isView(w)?H.set(new w.constructor(w.buffer,w.byteOffset,H.length)):w.toArray(H,O)}function D(w,H,O,P){const S=w.value,N=H+"_"+O;if(P[N]===void 0)return typeof S=="number"||typeof S=="boolean"?P[N]=S:ArrayBuffer.isView(S)?P[N]=S.slice():P[N]=S.clone(),!0;{const X=P[N];if(typeof S=="number"||typeof S=="boolean"){if(X!==S)return P[N]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(X.equals(S)===!1)return X.copy(S),!0}}return!1}function M(w){const H=w.uniforms;let O=0;const P=16;for(let N=0,X=H.length;N<X;N++){const B=Array.isArray(H[N])?H[N]:[H[N]];for(let Z=0,_e=B.length;Z<_e;Z++){const Ee=B[Z],ee=Array.isArray(Ee.value)?Ee.value:[Ee.value];for(let z=0,G=ee.length;z<G;z++){const ne=ee[z],xe=y(ne),De=O%P,L=De%xe.boundary,Y=De+L;O+=L,Y!==0&&P-Y<xe.storage&&(O+=P-Y),Ee.__data=new Float32Array(xe.storage/Float32Array.BYTES_PER_ELEMENT),Ee.__offset=O,O+=xe.storage}}}const S=O%P;return S>0&&(O+=P-S),w.__size=O,w.__cache={},this}function y(w){const H={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(H.boundary=4,H.storage=4):w.isVector2?(H.boundary=8,H.storage=8):w.isVector3||w.isColor?(H.boundary=16,H.storage=12):w.isVector4?(H.boundary=16,H.storage=16):w.isMatrix3?(H.boundary=48,H.storage=48):w.isMatrix4?(H.boundary=64,H.storage=64):w.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(H.boundary=16,H.storage=w.byteLength):st("WebGLRenderer: Unsupported uniform value type.",w),H}function F(w){const H=w.target;H.removeEventListener("dispose",F);const O=h.indexOf(H.__bindingPointIndex);h.splice(O,1),o.deleteBuffer(l[H.id]),delete l[H.id],delete c[H.id]}function k(){for(const w in l)o.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:p,update:d,dispose:k}}const RA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function wA(){return qi===null&&(qi=new fb(RA,16,16,qr,Ca),qi.name="DFG_LUT",qi.minFilter=zn,qi.magFilter=zn,qi.wrapS=Aa,qi.wrapT=Aa,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class CA{constructor(e={}){const{canvas:i=VS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:m=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:E=di}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const D=E,M=new Set([Kh,Zh,jh]),y=new Set([di,$i,Zo,Ko,qh,Yh]),F=new Uint32Array(4),k=new Int32Array(4),w=new ie;let H=null,O=null;const P=[],S=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let B=!1,Z=null,_e=null,Ee=null,ee=null;this._outputColorSpace=bi;let z=0,G=0,ne=null,xe=-1,De=null;const L=new un,Y=new un;let Ce=null;const he=new Et(0);let we=0,te=i.width,ye=i.height,Re=1,Ge=null,rt=null;const $e=new un(0,0,te,ye),Nt=new un(0,0,te,ye);let lt=!1;const vt=new ip;let _t=!1,gt=!1;const Wt=new cn,tn=new ie,nn=new un,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function an(){return ne===null?Re:1}let I=r;function pt(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",je,!1),i.addEventListener("webglcontextrestored",ot,!1),i.addEventListener("webglcontextcreationerror",Qt,!1),I===null){const j="webgl2";if(I=pt(j,A),I===null)throw pt(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let wt,U,b,K,ce,me,Ne,Oe,ge,ve,Le,He,ze,Pe,Ke,Qe,it,W,Ue,be,J,ae,$;function Se(){wt=new w1(I),wt.init(),J=new xA(I,wt),U=new y1(I,wt,e,J),b=new vA(I,wt),U.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),_e=I.createFramebuffer(),Ee=I.createFramebuffer(),ee=I.createFramebuffer(),K=new N1(I),ce=new iA,me=new _A(I,wt,b,ce,U,J,K),Ne=new R1(X),Oe=new Pb(I),ae=new _1(I,Oe),ge=new C1(I,Oe,K,ae),ve=new L1(I,ge,Oe,ae,K),W=new U1(I,U,me),Ke=new S1(ce),Le=new nA(X,Ne,wt,U,ae,Ke),He=new TA(X,ce),ze=new rA,Pe=new fA(wt),it=new v1(X,Ne,b,ve,T,p),Qe=new gA(X,ve,U),$=new AA(I,K,U,b),Ue=new x1(I,wt,K),be=new D1(I,wt,K),K.programs=Le.programs,X.capabilities=U,X.extensions=wt,X.properties=ce,X.renderLists=ze,X.shadowMap=Qe,X.state=b,X.info=K}Se(),D!==di&&(N=new P1(D,i.width,i.height,m,l,c));const de=new MA(X,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(A){A!==void 0&&(Re=A,this.setSize(te,ye,!1))},this.getSize=function(A){return A.set(te,ye)},this.setSize=function(A,j,ue=!0){if(de.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,ye=j,i.width=Math.floor(A*Re),i.height=Math.floor(j*Re),ue===!0&&(i.style.width=A+"px",i.style.height=j+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(te*Re,ye*Re).floor()},this.setDrawingBufferSize=function(A,j,ue){te=A,ye=j,Re=ue,i.width=Math.floor(A*ue),i.height=Math.floor(j*ue),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(D===di){Ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,j,ue,oe){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,j,ue,oe),b.viewport(L.copy($e).multiplyScalar(Re).round())},this.getScissor=function(A){return A.copy(Nt)},this.setScissor=function(A,j,ue,oe){A.isVector4?Nt.set(A.x,A.y,A.z,A.w):Nt.set(A,j,ue,oe),b.scissor(Y.copy(Nt).multiplyScalar(Re).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){b.setScissorTest(lt=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ue=!0){let oe=0;if(A){let le=!1;if(ne!==null){const Be=ne.texture.format;le=M.has(Be)}if(le){const Be=ne.texture.type,ke=y.has(Be),Ie=it.getClearColor(),We=it.getClearAlpha(),Xe=Ie.r,tt=Ie.g,ft=Ie.b;ke?(F[0]=Xe,F[1]=tt,F[2]=ft,F[3]=We,I.clearBufferuiv(I.COLOR,0,F)):(k[0]=Xe,k[1]=tt,k[2]=ft,k[3]=We,I.clearBufferiv(I.COLOR,0,k))}else oe|=I.COLOR_BUFFER_BIT}j&&(oe|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(oe|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&I.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",je,!1),i.removeEventListener("webglcontextrestored",ot,!1),i.removeEventListener("webglcontextcreationerror",Qt,!1),it.dispose(),ze.dispose(),Pe.dispose(),ce.dispose(),Ne.dispose(),ve.dispose(),ae.dispose(),$.dispose(),Le.dispose(),de.dispose(),de.removeEventListener("sessionstart",dn),de.removeEventListener("sessionend",rn),qn.stop()};function je(A){A.preventDefault(),cv("WebGLRenderer: Context Lost."),B=!0}function ot(){cv("WebGLRenderer: Context Restored."),B=!1;const A=K.autoReset,j=Qe.enabled,ue=Qe.autoUpdate,oe=Qe.needsUpdate,le=Qe.type;Se(),K.autoReset=A,Qe.enabled=j,Qe.autoUpdate=ue,Qe.needsUpdate=oe,Qe.type=le}function Qt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fn(A){const j=A.target;j.removeEventListener("dispose",fn),Ai(j)}function Ai(A){Ri(A),ce.remove(A)}function Ri(A){const j=ce.get(A).programs;j!==void 0&&(j.forEach(function(ue){Le.releaseProgram(ue)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ue,oe,le,Be){j===null&&(j=Ut);const ke=le.isMesh&&le.matrixWorld.determinantAffine()<0,Ie=La(A,j,ue,oe,le);b.setMaterial(oe,ke);let We=ue.index,Xe=1;if(oe.wireframe===!0){if(We=ge.getWireframeAttribute(ue),We===void 0)return;Xe=2}const tt=ue.drawRange,ft=ue.attributes.position;let Je=tt.start*Xe,Lt=(tt.start+tt.count)*Xe;Be!==null&&(Je=Math.max(Je,Be.start*Xe),Lt=Math.min(Lt,(Be.start+Be.count)*Xe)),We!==null?(Je=Math.max(Je,0),Lt=Math.min(Lt,We.count)):ft!=null&&(Je=Math.max(Je,0),Lt=Math.min(Lt,ft.count));const sn=Lt-Je;if(sn<0||sn===1/0)return;ae.setup(le,oe,Ie,ue,We);let Zt,Ft=Ue;if(We!==null&&(Zt=Oe.get(We),Ft=be,Ft.setIndex(Zt)),le.isMesh)oe.wireframe===!0?(b.setLineWidth(oe.wireframeLinewidth*an()),Ft.setMode(I.LINES)):Ft.setMode(I.TRIANGLES);else if(le.isLine){let Ht=oe.linewidth;Ht===void 0&&(Ht=1),b.setLineWidth(Ht*an()),le.isLineSegments?Ft.setMode(I.LINES):le.isLineLoop?Ft.setMode(I.LINE_LOOP):Ft.setMode(I.LINE_STRIP)}else le.isPoints?Ft.setMode(I.POINTS):le.isSprite&&Ft.setMode(I.TRIANGLES);if(le.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const Ht=le._multiDrawStarts,Ve=le._multiDrawCounts,Fn=le._multiDrawCount,xt=We?Oe.get(We).bytesPerElement:1,Mn=ce.get(oe).currentProgram.getUniforms();for(let ti=0;ti<Fn;ti++)Mn.setValue(I,"_gl_DrawID",ti),Ft.render(Ht[ti]/xt,Ve[ti])}else if(le.isInstancedMesh)Ft.renderInstances(Je,sn,le.count);else if(ue.isInstancedBufferGeometry){const Ht=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ve=Math.min(ue.instanceCount,Ht);Ft.renderInstances(Je,sn,Ve)}else Ft.render(Je,sn)};function wi(A,j,ue){A.transparent===!0&&A.side===Ta&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,Ua(A,j,ue),A.side=mr,A.needsUpdate=!0,Ua(A,j,ue),A.side=Ta):Ua(A,j,ue)}this.compile=function(A,j,ue=null){ue===null&&(ue=A),O=Pe.get(ue),O.init(j),S.push(O),ue.traverseVisible(function(le){le.isLight&&le.layers.test(j.layers)&&(O.pushLight(le),le.castShadow&&O.pushShadow(le))}),A!==ue&&A.traverseVisible(function(le){le.isLight&&le.layers.test(j.layers)&&(O.pushLight(le),le.castShadow&&O.pushShadow(le))}),O.setupLights();const oe=new Set;return A.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Be=le.material;if(Be)if(Array.isArray(Be))for(let ke=0;ke<Be.length;ke++){const Ie=Be[ke];wi(Ie,ue,le),oe.add(Ie)}else wi(Be,ue,le),oe.add(Be)}),O=S.pop(),oe},this.compileAsync=function(A,j,ue=null){const oe=this.compile(A,j,ue);return new Promise(le=>{function Be(){if(oe.forEach(function(ke){ce.get(ke).currentProgram.isReady()&&oe.delete(ke)}),oe.size===0){le(A);return}setTimeout(Be,10)}wt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Jt=null;function kn(A){Jt&&Jt(A)}function dn(){qn.stop()}function rn(){qn.start()}const qn=new P_;qn.setAnimationLoop(kn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){Jt=A,de.setAnimationLoop(A),A===null?qn.stop():qn.start()},de.addEventListener("sessionstart",dn),de.addEventListener("sessionend",rn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Z!==null&&Z.renderStart(A,j);const ue=de.enabled===!0&&de.isPresenting===!0,oe=N!==null&&(ne===null||ue)&&N.begin(X,ne);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(j),j=de.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,j,ne),O=Pe.get(A,S.length),O.init(j),O.state.textureUnits=me.getTextureUnits(),S.push(O),Wt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),vt.setFromProjectionMatrix(Wt,Zi,j.reversedDepth),gt=this.localClippingEnabled,_t=Ke.init(this.clippingPlanes,gt),H=ze.get(A,P.length),H.init(),P.push(H),de.enabled===!0&&de.isPresenting===!0){const ke=X.xr.getDepthSensingMesh();ke!==null&&vr(ke,j,-1/0,X.sortObjects)}vr(A,j,0,X.sortObjects),H.finish(),X.sortObjects===!0&&H.sort(Ge,rt,j.reversedDepth),zt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,zt&&it.addToRenderList(H,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Ke.beginShadows();const le=O.state.shadowsArray;if(Qe.render(le,A,j),_t===!0&&Ke.endShadows(),(oe&&N.hasRenderPass())===!1){const ke=H.opaque,Ie=H.transmissive;if(O.setupLights(),j.isArrayCamera){const We=j.cameras;if(Ie.length>0)for(let Xe=0,tt=We.length;Xe<tt;Xe++){const ft=We[Xe];tl(ke,Ie,A,ft)}zt&&it.render(A);for(let Xe=0,tt=We.length;Xe<tt;Xe++){const ft=We[Xe];el(H,A,ft,ft.viewport)}}else Ie.length>0&&tl(ke,Ie,A,j),zt&&it.render(A),el(H,A,j)}ne!==null&&G===0&&(me.updateMultisampleRenderTarget(ne),me.updateRenderTargetMipmap(ne)),oe&&N.end(X),A.isScene===!0&&A.onAfterRender(X,A,j),ae.resetDefaultState(),xe=-1,De=null,S.pop(),S.length>0?(O=S[S.length-1],me.setTextureUnits(O.state.textureUnits),_t===!0&&Ke.setGlobalState(X.clippingPlanes,O.state.camera)):O=null,P.pop(),P.length>0?H=P[P.length-1]:H=null,Z!==null&&Z.renderEnd()};function vr(A,j,ue,oe){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){oe&&nn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);const ke=ve.update(A),Ie=A.material;Ie.visible&&H.push(A,ke,Ie,ue,nn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const ke=ve.update(A),Ie=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nn.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),nn.copy(ke.boundingSphere.center)),nn.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ie)){const We=ke.groups;for(let Xe=0,tt=We.length;Xe<tt;Xe++){const ft=We[Xe],Je=Ie[ft.materialIndex];Je&&Je.visible&&H.push(A,ke,Je,ue,nn.z,ft)}}else Ie.visible&&H.push(A,ke,Ie,ue,nn.z,null)}}const Be=A.children;for(let ke=0,Ie=Be.length;ke<Ie;ke++)vr(Be[ke],j,ue,oe)}function el(A,j,ue,oe){const{opaque:le,transmissive:Be,transparent:ke}=A;O.setupLightsView(ue),_t===!0&&Ke.setGlobalState(X.clippingPlanes,ue),oe&&b.viewport(L.copy(oe)),le.length>0&&_r(le,j,ue),Be.length>0&&_r(Be,j,ue),ke.length>0&&_r(ke,j,ue),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function tl(A,j,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[oe.id]===void 0){const Je=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[oe.id]=new Qi(1,1,{generateMipmaps:!0,type:Je?Ca:di,minFilter:dr,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Be=O.state.transmissionRenderTarget[oe.id],ke=oe.viewport||L;Be.setSize(ke.z*X.transmissionResolutionScale,ke.w*X.transmissionResolutionScale);const Ie=X.getRenderTarget(),We=X.getActiveCubeFace(),Xe=X.getActiveMipmapLevel();X.setRenderTarget(Be),X.getClearColor(he),we=X.getClearAlpha(),we<1&&X.setClearColor(16777215,.5),X.clear(),zt&&it.render(ue);const tt=X.toneMapping;X.toneMapping=Ki;const ft=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),O.setupLightsView(oe),_t===!0&&Ke.setGlobalState(X.clippingPlanes,oe),_r(A,ue,oe),me.updateMultisampleRenderTarget(Be),me.updateRenderTargetMipmap(Be),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Lt=0,sn=j.length;Lt<sn;Lt++){const Zt=j[Lt],{object:Ft,geometry:Ht,material:Ve,group:Fn}=Zt;if(Ve.side===Ta&&Ft.layers.test(oe.layers)){const xt=Ve.side;Ve.side=ei,Ve.needsUpdate=!0,Na(Ft,ue,oe,Ht,Ve,Fn),Ve.side=xt,Ve.needsUpdate=!0,Je=!0}}Je===!0&&(me.updateMultisampleRenderTarget(Be),me.updateRenderTargetMipmap(Be))}X.setRenderTarget(Ie,We,Xe),X.setClearColor(he,we),ft!==void 0&&(oe.viewport=ft),X.toneMapping=tt}function _r(A,j,ue){const oe=j.isScene===!0?j.overrideMaterial:null;for(let le=0,Be=A.length;le<Be;le++){const ke=A[le],{object:Ie,geometry:We,group:Xe}=ke;let tt=ke.material;tt.allowOverride===!0&&oe!==null&&(tt=oe),Ie.layers.test(ue.layers)&&Na(Ie,j,ue,We,tt,Xe)}}function Na(A,j,ue,oe,le,Be){A.onBeforeRender(X,j,ue,oe,le,Be),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),le.onBeforeRender(X,j,ue,oe,A,Be),le.transparent===!0&&le.side===Ta&&le.forceSinglePass===!1?(le.side=ei,le.needsUpdate=!0,X.renderBufferDirect(ue,j,oe,le,A,Be),le.side=mr,le.needsUpdate=!0,X.renderBufferDirect(ue,j,oe,le,A,Be),le.side=Ta):X.renderBufferDirect(ue,j,oe,le,A,Be),A.onAfterRender(X,j,ue,oe,le,Be)}function Ua(A,j,ue){j.isScene!==!0&&(j=Ut);const oe=ce.get(A),le=O.state.lights,Be=O.state.shadowsArray,ke=le.state.version,Ie=Le.getParameters(A,le.state,Be,j,ue,O.state.lightProbeGridArray),We=Le.getProgramCacheKey(Ie);let Xe=oe.programs;oe.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,oe.fog=j.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;oe.envMap=Ne.get(A.envMap||oe.environment,tt),oe.envMapRotation=oe.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",fn),Xe=new Map,oe.programs=Xe);let ft=Xe.get(We);if(ft!==void 0){if(oe.currentProgram===ft&&oe.lightsStateVersion===ke)return na(A,Ie),ft}else Ie.uniforms=Le.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,ue,Ie),A.onBeforeCompile(Ie,X),ft=Le.acquireProgram(Ie,We),Xe.set(We,ft),oe.uniforms=Ie.uniforms;const Je=oe.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ke.uniform),na(A,Ie),oe.needsLights=nl(A),oe.lightsStateVersion=ke,oe.needsLights&&(Je.ambientLightColor.value=le.state.ambient,Je.lightProbe.value=le.state.probe,Je.directionalLights.value=le.state.directional,Je.directionalLightShadows.value=le.state.directionalShadow,Je.spotLights.value=le.state.spot,Je.spotLightShadows.value=le.state.spotShadow,Je.rectAreaLights.value=le.state.rectArea,Je.ltc_1.value=le.state.rectAreaLTC1,Je.ltc_2.value=le.state.rectAreaLTC2,Je.pointLights.value=le.state.point,Je.pointLightShadows.value=le.state.pointShadow,Je.hemisphereLights.value=le.state.hemi,Je.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Je.spotLightMatrix.value=le.state.spotLightMatrix,Je.spotLightMap.value=le.state.spotLightMap,Je.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=O.state.lightProbeGridArray.length>0,oe.currentProgram=ft,oe.uniformsList=null,ft}function ta(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Wc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function na(A,j){const ue=ce.get(A);ue.outputColorSpace=j.outputColorSpace,ue.batching=j.batching,ue.batchingColor=j.batchingColor,ue.instancing=j.instancing,ue.instancingColor=j.instancingColor,ue.instancingMorph=j.instancingMorph,ue.skinning=j.skinning,ue.morphTargets=j.morphTargets,ue.morphNormals=j.morphNormals,ue.morphColors=j.morphColors,ue.morphTargetsCount=j.morphTargetsCount,ue.numClippingPlanes=j.numClippingPlanes,ue.numIntersection=j.numClipIntersection,ue.vertexAlphas=j.vertexAlphas,ue.vertexTangents=j.vertexTangents,ue.toneMapping=j.toneMapping}function xr(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(j.matrixWorld);for(let ue=0,oe=A.length;ue<oe;ue++){const le=A[ue];if(le.texture!==null&&le.boundingBox.containsPoint(w))return le}return null}function La(A,j,ue,oe,le){j.isScene!==!0&&(j=Ut),me.resetTextureUnits();const Be=j.fog,ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?j.environment:null,Ie=ne===null?X.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:At.workingColorSpace,We=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Xe=Ne.get(oe.envMap||ke,We),tt=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ft=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Je=!!ue.morphAttributes.position,Lt=!!ue.morphAttributes.normal,sn=!!ue.morphAttributes.color;let Zt=Ki;oe.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Zt=X.toneMapping);const Ft=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ht=Ft!==void 0?Ft.length:0,Ve=ce.get(oe),Fn=O.state.lights;if(_t===!0&&(gt===!0||A!==De)){const Bt=A===De&&oe.id===xe;Ke.setState(oe,A,Bt)}let xt=!1;oe.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Fn.state.version||Ve.outputColorSpace!==Ie||le.isBatchedMesh&&Ve.batching===!1||!le.isBatchedMesh&&Ve.batching===!0||le.isBatchedMesh&&Ve.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Ve.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Ve.instancing===!1||!le.isInstancedMesh&&Ve.instancing===!0||le.isSkinnedMesh&&Ve.skinning===!1||!le.isSkinnedMesh&&Ve.skinning===!0||le.isInstancedMesh&&Ve.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Ve.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Ve.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Ve.instancingMorph===!1&&le.morphTexture!==null||Ve.envMap!==Xe||oe.fog===!0&&Ve.fog!==Be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ke.numPlanes||Ve.numIntersection!==Ke.numIntersection)||Ve.vertexAlphas!==tt||Ve.vertexTangents!==ft||Ve.morphTargets!==Je||Ve.morphNormals!==Lt||Ve.morphColors!==sn||Ve.toneMapping!==Zt||Ve.morphTargetsCount!==Ht||!!Ve.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ve.__version=oe.version);let Mn=Ve.currentProgram;xt===!0&&(Mn=Ua(oe,j,le),Z&&oe.isNodeMaterial&&Z.onUpdateProgram(oe,Mn,Ve));let ti=!1,Ci=!1,ni=!1;const Gt=Mn.getUniforms(),on=Ve.uniforms;if(b.useProgram(Mn.program)&&(ti=!0,Ci=!0,ni=!0),oe.id!==xe&&(xe=oe.id,Ci=!0),Ve.needsLights){const Bt=xr(O.state.lightProbeGridArray,le);Ve.lightProbeGrid!==Bt&&(Ve.lightProbeGrid=Bt,Ci=!0)}if(ti||De!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(I,"projectionMatrix",A.projectionMatrix),Gt.setValue(I,"viewMatrix",A.matrixWorldInverse);const Hi=Gt.map.cameraPosition;Hi!==void 0&&Hi.setValue(I,tn.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Gt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Gt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),De!==A&&(De=A,Ci=!0,ni=!0)}if(Ve.needsLights&&(Fn.state.directionalShadowMap.length>0&&Gt.setValue(I,"directionalShadowMap",Fn.state.directionalShadowMap,me),Fn.state.spotShadowMap.length>0&&Gt.setValue(I,"spotShadowMap",Fn.state.spotShadowMap,me),Fn.state.pointShadowMap.length>0&&Gt.setValue(I,"pointShadowMap",Fn.state.pointShadowMap,me)),le.isSkinnedMesh){Gt.setOptional(I,le,"bindMatrix"),Gt.setOptional(I,le,"bindMatrixInverse");const Bt=le.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Gt.setValue(I,"boneTexture",Bt.boneTexture,me))}le.isBatchedMesh&&(Gt.setOptional(I,le,"batchingTexture"),Gt.setValue(I,"batchingTexture",le._matricesTexture,me),Gt.setOptional(I,le,"batchingIdTexture"),Gt.setValue(I,"batchingIdTexture",le._indirectTexture,me),Gt.setOptional(I,le,"batchingColorTexture"),le._colorsTexture!==null&&Gt.setValue(I,"batchingColorTexture",le._colorsTexture,me));const Di=ue.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&W.update(le,ue,Mn),(Ci||Ve.receiveShadow!==le.receiveShadow)&&(Ve.receiveShadow=le.receiveShadow,Gt.setValue(I,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&j.environment!==null&&(on.envMapIntensity.value=j.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=wA()),Ci){if(Gt.setValue(I,"toneMappingExposure",X.toneMappingExposure),Ve.needsLights&&vn(on,ni),Be&&oe.fog===!0&&He.refreshFogUniforms(on,Be),He.refreshMaterialUniforms(on,oe,Re,ye,O.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Bt=Ve.lightProbeGrid;on.probesSH.value=Bt.texture,on.probesMin.value.copy(Bt.boundingBox.min),on.probesMax.value.copy(Bt.boundingBox.max),on.probesResolution.value.copy(Bt.resolution)}Wc.upload(I,ta(Ve),on,me)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Wc.upload(I,ta(Ve),on,me),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Gt.setValue(I,"center",le.center),Gt.setValue(I,"modelViewMatrix",le.modelViewMatrix),Gt.setValue(I,"normalMatrix",le.normalMatrix),Gt.setValue(I,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const Bt=oe.uniformsGroups;for(let Hi=0,Oa=Bt.length;Hi<Oa;Hi++){const yr=Bt[Hi];$.update(yr,Mn),$.bind(yr,Mn)}}return Mn}function vn(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function nl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(A,j,ue){const oe=ce.get(A);oe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ce.get(A.texture).__webglTexture=j,ce.get(A.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ue=ce.get(A);ue.__webglFramebuffer=j,ue.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,ue=0){ne=A,z=j,G=ue;let oe=null,le=!1,Be=!1;if(A){const Ie=ce.get(A);if(Ie.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(I.FRAMEBUFFER,Ie.__webglFramebuffer),L.copy(A.viewport),Y.copy(A.scissor),Ce=A.scissorTest,b.viewport(L),b.scissor(Y),b.setScissorTest(Ce),xe=-1;return}else if(Ie.__webglFramebuffer===void 0)me.setupRenderTarget(A);else if(Ie.__hasExternalTextures)me.rebindTextures(A,ce.get(A.texture).__webglTexture,ce.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Ie.__boundDepthTexture!==tt){if(tt!==null&&ce.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Be=!0);const Xe=ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[j])?oe=Xe[j][ue]:oe=Xe[j],le=!0):A.samples>0&&me.useMultisampledRTT(A)===!1?oe=ce.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?oe=Xe[ue]:oe=Xe,L.copy(A.viewport),Y.copy(A.scissor),Ce=A.scissorTest}else L.copy($e).multiplyScalar(Re).floor(),Y.copy(Nt).multiplyScalar(Re).floor(),Ce=lt;if(ue!==0&&(oe=_e),b.bindFramebuffer(I.FRAMEBUFFER,oe)&&b.drawBuffers(A,oe),b.viewport(L),b.scissor(Y),b.setScissorTest(Ce),le){const Ie=ce.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,ue)}else if(Be){const Ie=j;for(let We=0;We<A.textures.length;We++){const Xe=ce.get(A.textures[We]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+We,Xe.__webglTexture,ue,Ie)}}else if(A!==null&&ue!==0){const Ie=ce.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,ue)}xe=-1},this.readRenderTargetPixels=function(A,j,ue,oe,le,Be,ke,Ie=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){b.bindFramebuffer(I.FRAMEBUFFER,We);try{const Xe=A.textures[Ie],tt=Xe.format,ft=Xe.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ie),!U.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ft)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-oe&&ue>=0&&ue<=A.height-le&&I.readPixels(j,ue,oe,le,J.convert(tt),J.convert(ft),Be)}finally{const Xe=ne!==null?ce.get(ne).__webglFramebuffer:null;b.bindFramebuffer(I.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,j,ue,oe,le,Be,ke,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(j>=0&&j<=A.width-oe&&ue>=0&&ue<=A.height-le){b.bindFramebuffer(I.FRAMEBUFFER,We);const Xe=A.textures[Ie],tt=Xe.format,ft=Xe.type;if(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ie),!U.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.bufferData(I.PIXEL_PACK_BUFFER,Be.byteLength,I.STREAM_READ),I.readPixels(j,ue,oe,le,J.convert(tt),J.convert(ft),0);const Lt=ne!==null?ce.get(ne).__webglFramebuffer:null;b.bindFramebuffer(I.FRAMEBUFFER,Lt);const sn=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await kS(I,sn,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Be),I.deleteBuffer(Je),I.deleteSync(sn),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ue=0){const oe=Math.pow(2,-ue),le=Math.floor(A.image.width*oe),Be=Math.floor(A.image.height*oe),ke=j!==null?j.x:0,Ie=j!==null?j.y:0;me.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ue,0,0,ke,Ie,le,Be),b.unbindTexture()},this.copyTextureToTexture=function(A,j,ue=null,oe=null,le=0,Be=0){let ke,Ie,We,Xe,tt,ft,Je,Lt,sn;const Zt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(ue!==null)ke=ue.max.x-ue.min.x,Ie=ue.max.y-ue.min.y,We=ue.isBox3?ue.max.z-ue.min.z:1,Xe=ue.min.x,tt=ue.min.y,ft=ue.isBox3?ue.min.z:0;else{const on=Math.pow(2,-le);ke=Math.floor(Zt.width*on),Ie=Math.floor(Zt.height*on),A.isDataArrayTexture?We=Zt.depth:A.isData3DTexture?We=Math.floor(Zt.depth*on):We=1,Xe=0,tt=0,ft=0}oe!==null?(Je=oe.x,Lt=oe.y,sn=oe.z):(Je=0,Lt=0,sn=0);const Ft=J.convert(j.format),Ht=J.convert(j.type);let Ve;j.isData3DTexture?(me.setTexture3D(j,0),Ve=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(me.setTexture2DArray(j,0),Ve=I.TEXTURE_2D_ARRAY):(me.setTexture2D(j,0),Ve=I.TEXTURE_2D),b.activeTexture(I.TEXTURE0),b.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),b.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),b.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const Fn=b.getParameter(I.UNPACK_ROW_LENGTH),xt=b.getParameter(I.UNPACK_IMAGE_HEIGHT),Mn=b.getParameter(I.UNPACK_SKIP_PIXELS),ti=b.getParameter(I.UNPACK_SKIP_ROWS),Ci=b.getParameter(I.UNPACK_SKIP_IMAGES);b.pixelStorei(I.UNPACK_ROW_LENGTH,Zt.width),b.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt.height),b.pixelStorei(I.UNPACK_SKIP_PIXELS,Xe),b.pixelStorei(I.UNPACK_SKIP_ROWS,tt),b.pixelStorei(I.UNPACK_SKIP_IMAGES,ft);const ni=A.isDataArrayTexture||A.isData3DTexture,Gt=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const on=ce.get(A),Di=ce.get(j),Bt=ce.get(on.__renderTarget),Hi=ce.get(Di.__renderTarget);b.bindFramebuffer(I.READ_FRAMEBUFFER,Bt.__webglFramebuffer),b.bindFramebuffer(I.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Oa=0;Oa<We;Oa++)ni&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ce.get(A).__webglTexture,le,ft+Oa),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ce.get(j).__webglTexture,Be,sn+Oa)),I.blitFramebuffer(Xe,tt,ke,Ie,Je,Lt,ke,Ie,I.DEPTH_BUFFER_BIT,I.NEAREST);b.bindFramebuffer(I.READ_FRAMEBUFFER,null),b.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(le!==0||A.isRenderTargetTexture||ce.has(A)){const on=ce.get(A),Di=ce.get(j);b.bindFramebuffer(I.READ_FRAMEBUFFER,Ee),b.bindFramebuffer(I.DRAW_FRAMEBUFFER,ee);for(let Bt=0;Bt<We;Bt++)ni?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,le,ft+Bt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,le),Gt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Di.__webglTexture,Be,sn+Bt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Di.__webglTexture,Be),le!==0?I.blitFramebuffer(Xe,tt,ke,Ie,Je,Lt,ke,Ie,I.COLOR_BUFFER_BIT,I.NEAREST):Gt?I.copyTexSubImage3D(Ve,Be,Je,Lt,sn+Bt,Xe,tt,ke,Ie):I.copyTexSubImage2D(Ve,Be,Je,Lt,Xe,tt,ke,Ie);b.bindFramebuffer(I.READ_FRAMEBUFFER,null),b.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Gt?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ve,Be,Je,Lt,sn,ke,Ie,We,Ft,Ht,Zt.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Ve,Be,Je,Lt,sn,ke,Ie,We,Ft,Zt.data):I.texSubImage3D(Ve,Be,Je,Lt,sn,ke,Ie,We,Ft,Ht,Zt):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Be,Je,Lt,ke,Ie,Ft,Ht,Zt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Be,Je,Lt,Zt.width,Zt.height,Ft,Zt.data):I.texSubImage2D(I.TEXTURE_2D,Be,Je,Lt,ke,Ie,Ft,Ht,Zt);b.pixelStorei(I.UNPACK_ROW_LENGTH,Fn),b.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt),b.pixelStorei(I.UNPACK_SKIP_PIXELS,Mn),b.pixelStorei(I.UNPACK_SKIP_ROWS,ti),b.pixelStorei(I.UNPACK_SKIP_IMAGES,Ci),Be===0&&j.generateMipmaps&&I.generateMipmap(Ve),b.unbindTexture()},this.initRenderTarget=function(A){ce.get(A).__webglFramebuffer===void 0&&me.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){z=0,G=0,ne=null,b.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}function Nn(o,e){const i=document.createElement("canvas");i.width=o,i.height=o;const r=i.getContext("2d");r&&(r.imageSmoothingEnabled=o>=64,e(r,o));const l=new vb(i);return l.magFilter=o>=64?zn:An,l.minFilter=o>=64?dr:An,l.generateMipmaps=!0,l}const Tn={};let s_=null;function DA(o="realistic"){if(s_===o&&Object.keys(Tn).length>0)return;s_=o;const e=o==="realistic"?64:o==="faithful"?32:16,i=o==="realistic",r=Nn(e,(p,d)=>{p.fillStyle=i?"#417d29":"#55a038",p.fillRect(0,0,d,d);const v=i?280:35;for(let x=0;x<v;x++){p.fillStyle=Math.random()>.5?i?"#4c8f30":"#63b242":i?"#356920":"#478c2d";const g=i?2:1;p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),g,i?4:1)}}),l=Nn(e,(p,d)=>{p.fillStyle=i?"#704c31":"#866043",p.fillRect(0,0,d,d);const v=i?350:45;for(let x=0;x<v;x++){const g=Math.random();p.fillStyle=g>.6?"#855c3c":g>.3?"#5c3e27":"#482f1b";const E=i?2:1;p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),E,E)}}),c=Nn(e,(p,d)=>{p.fillStyle=i?"#704c31":"#866043",p.fillRect(0,0,d,d);const v=i?300:40;for(let E=0;E<v;E++)p.fillStyle=Math.random()>.5?"#5c3e27":"#855c3c",p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?2:1,i?2:1);const x=Math.floor(d*.28);p.fillStyle=i?"#417d29":"#55a038",p.fillRect(0,0,d,x);const g=i?4:2;for(let E=0;E<d;E+=g){const T=Math.floor(Math.random()*(x*.8));p.fillRect(E,x,g,T)}});Tn.grass={top:r,side:c,bottom:l},Tn.dirt=l,Tn.stone=Nn(e,(p,d)=>{p.fillStyle=i?"#6b6b6b":"#737373",p.fillRect(0,0,d,d);const v=i?400:40;for(let x=0;x<v;x++){const g=Math.random();p.fillStyle=g>.6?"#808080":g>.3?"#575757":"#454545";const E=i?Math.floor(Math.random()*3)+1:1;p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),E,E)}i&&(p.strokeStyle="#404040",p.lineWidth=1,p.beginPath(),p.moveTo(d*.2,d*.3),p.lineTo(d*.5,d*.6),p.lineTo(d*.8,d*.5),p.stroke())}),Tn.cobblestone=Nn(e,(p,d)=>{p.fillStyle=i?"#545454":"#595959",p.fillRect(0,0,d,d);const v=i?16:4;p.fillStyle="#2b2b2b";for(let g=0;g<d;g+=v)p.fillRect(g,0,i?2:1,d);for(let g=0;g<d;g+=v)p.fillRect(0,g,d,i?2:1);const x=i?350:40;for(let g=0;g<x;g++)p.fillStyle=Math.random()>.5?"#707070":"#3d3d3d",p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?2:1,i?2:1)}),Tn.oak_planks=Nn(e,(p,d)=>{p.fillStyle=i?"#bc9355":"#c49a5b",p.fillRect(0,0,d,d),p.fillStyle="#8f682f";const v=Math.floor(d/4);for(let x=0;x<d;x+=v)p.fillRect(0,x,d,i?2:1);p.fillStyle=i?"rgba(120, 85, 35, 0.4)":"#a37c3c";for(let x=0;x<(i?20:6);x++)p.fillRect(0,Math.floor(Math.random()*d),d,1);p.fillStyle="#6b4b1e",p.fillRect(Math.floor(d*.25),0,i?2:1,v),p.fillRect(Math.floor(d*.75),v,i?2:1,v),p.fillRect(Math.floor(d*.4),v*2,i?2:1,v),p.fillRect(Math.floor(d*.85),v*3,i?2:1,v)});const h=Nn(e,(p,d)=>{p.fillStyle="#543b1c",p.fillRect(0,0,d,d),p.fillStyle="#33210d";const v=i?4:3;for(let x=0;x<d;x+=v)p.fillRect(x,0,i?2:1,d);p.fillStyle="#6e4f29";for(let x=0;x<(i?40:10);x++)p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),2,i?6:2)}),m=Nn(e,(p,d)=>{p.fillStyle="#b08b52",p.fillRect(0,0,d,d),p.strokeStyle="#75582f",p.lineWidth=i?2:1,p.strokeRect(d*.15,d*.15,d*.7,d*.7),p.strokeRect(d*.32,d*.32,d*.36,d*.36)});Tn.oak_log={top:m,side:h,bottom:m},Tn.oak_leaves=Nn(e,(p,d)=>{p.fillStyle=i?"#2e5416":"#375e1d",p.fillRect(0,0,d,d);const v=i?350:50;for(let x=0;x<v;x++)p.fillStyle=Math.random()>.5?"#407521":"#1f3b0e",p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?2:1,i?2:1)}),Tn.bricks=Nn(e,(p,d)=>{p.fillStyle="#9e4a38",p.fillRect(0,0,d,d),p.fillStyle="#d1c7be";const v=Math.floor(d/4);for(let x=0;x<d;x+=v)p.fillRect(0,x,d,i?2:1);p.fillRect(Math.floor(d*.45),0,i?2:1,v),p.fillRect(Math.floor(d*.15),v,i?2:1,v),p.fillRect(Math.floor(d*.65),v*2,i?2:1,v),p.fillRect(Math.floor(d*.3),v*3,i?2:1,v)}),Tn.glass=Nn(e,(p,d)=>{p.clearRect(0,0,d,d),p.strokeStyle="#ffffff",p.lineWidth=i?2:1,p.strokeRect(0,0,d,d),p.fillStyle="rgba(255, 255, 255, 0.85)",p.fillRect(Math.floor(d*.25),Math.floor(d*.25),i?4:1,i?4:1),p.fillRect(Math.floor(d*.7),Math.floor(d*.7),i?4:1,i?4:1)}),Tn.water=Nn(e,(p,d)=>{p.fillStyle="#2563eb",p.fillRect(0,0,d,d),p.fillStyle="#60a5fa";for(let v=0;v<(i?50:15);v++)p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?4:2,1)}),Tn.bedrock=Nn(e,(p,d)=>{p.fillStyle="#222222",p.fillRect(0,0,d,d);for(let v=0;v<(i?350:60);v++)p.fillStyle=Math.random()>.5?"#111111":"#3d3d3d",p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?2:1,i?2:1)}),Tn.sand=Nn(e,(p,d)=>{p.fillStyle="#ded29d",p.fillRect(0,0,d,d);for(let v=0;v<(i?300:40);v++)p.fillStyle=Math.random()>.5?"#ccbf8c":"#ede2b0",p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?2:1,i?2:1)}),Tn.diamond_ore=Nn(e,(p,d)=>{p.fillStyle=i?"#6b6b6b":"#737373",p.fillRect(0,0,d,d);for(let x=0;x<(i?300:35);x++)p.fillStyle=Math.random()>.5?"#555555":"#858585",p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?2:1,i?2:1);p.fillStyle="#38bdf8";const v=i?6:2;p.fillRect(Math.floor(d*.2),Math.floor(d*.25),v,v),p.fillRect(Math.floor(d*.65),Math.floor(d*.15),v,v),p.fillRect(Math.floor(d*.45),Math.floor(d*.7),v,v),p.fillRect(Math.floor(d*.8),Math.floor(d*.8),i?4:1,i?4:1),p.fillStyle="#bae6fd",p.fillRect(Math.floor(d*.2)+1,Math.floor(d*.25)+1,i?2:1,i?2:1)}),Tn.obsidian=Nn(e,(p,d)=>{p.fillStyle="#120b1f",p.fillRect(0,0,d,d);for(let v=0;v<(i?250:30);v++)p.fillStyle=Math.random()>.5?"#24123b":"#3c1d63",p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?4:2,i?4:2)}),Tn.gold_ore=Nn(e,(p,d)=>{p.fillStyle=i?"#6b6b6b":"#737373",p.fillRect(0,0,d,d);for(let x=0;x<(i?300:35);x++)p.fillStyle=Math.random()>.5?"#555555":"#858585",p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?2:1,i?2:1);p.fillStyle="#facc15";const v=i?6:2;p.fillRect(Math.floor(d*.3),Math.floor(d*.35),v,v),p.fillRect(Math.floor(d*.7),Math.floor(d*.55),v,v),p.fillStyle="#fef08a",p.fillRect(Math.floor(d*.3)+1,Math.floor(d*.35)+1,i?2:1,i?2:1)}),Tn.lava=Nn(e,(p,d)=>{p.fillStyle="#c2410c",p.fillRect(0,0,d,d),p.fillStyle="#f97316";for(let v=0;v<(i?200:25);v++)p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?6:2,i?6:2);p.fillStyle="#facc15";for(let v=0;v<(i?60:10);v++)p.fillRect(Math.floor(Math.random()*d),Math.floor(Math.random()*d),i?3:1,i?3:1)})}const o_={air:"Hava",grass:"Çimen Bloğu",dirt:"Toprak",stone:"Taş",cobblestone:"Kırıktaş",oak_planks:"Meşe Tahtası",oak_log:"Meşe Kütüğü",oak_leaves:"Meşe Yaprakları",bricks:"Tuğla",glass:"Cam",water:"Su",lava:"Lav",bedrock:"Katman Kayası (Bedrock)",sand:"Kum",diamond_ore:"Elmas Cevheri",gold_ore:"Altın Cevheri",obsidian:"Obsidyen"},NA=[{type:"grass",count:64,name:"Çimen Bloğu"},{type:"dirt",count:64,name:"Toprak"},{type:"stone",count:64,name:"Taş"},{type:"cobblestone",count:64,name:"Kırıktaş"},{type:"oak_planks",count:64,name:"Meşe Tahtası"},{type:"oak_log",count:32,name:"Meşe Kütüğü"},{type:"bricks",count:64,name:"Tuğla"},{type:"glass",count:64,name:"Cam"},{type:"diamond_ore",count:16,name:"Elmas Cevheri"}];let UA=0;function LA({world:o,server:e,settings:i,onExit:r}){var Ce;const l=et.useRef(null),[c,h]=et.useState(!1),[m,p]=et.useState(!1),[d,v]=et.useState(!1),[x,g]=et.useState(""),[E,T]=et.useState([{id:"init-msg-1",sender:"Sistem",text:"Minecraft 1.21.4 Dünyasına Hoş Geldiniz!",time:"12:00",isSystem:!0},{id:"init-msg-2",sender:"Sistem",text:e?`Sunucu: ${e.name} (${e.ip}:${e.port}) - TCP WebSocket Köprüsü Aktif`:`Tek Oyunculu Dünya: ${(o==null?void 0:o.name)||"Yeni Dünya"}`,time:"12:00",isSystem:!0}]),[D,M]=et.useState(NA),[y,F]=et.useState(0),[k]=et.useState(20),[w]=et.useState(20),[H,O]=et.useState(60),[P,S]=et.useState({x:"0.0",y:"12.0",z:"0.0"}),[N,X]=et.useState(null),B=et.useRef({forward:!1,back:!1,left:!1,right:!1,jump:!1}),Z=et.useRef(null),_e=et.useRef(null),Ee=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<1024),ee=i.touchControls==="enabled"||i.touchControls==="auto"&&Ee,z=et.useRef(null),G=et.useRef(c),ne=et.useRef(m),xe=et.useRef(d),De=et.useRef(D),L=et.useRef(y);et.useEffect(()=>{G.current=c},[c]),et.useEffect(()=>{ne.current=m},[m]),et.useEffect(()=>{xe.current=d},[d]),et.useEffect(()=>{De.current=D},[D]),et.useEffect(()=>{L.current=y},[y]);const Y=et.useCallback((he,we,te=!1)=>{const ye=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),Re=`msg-${Date.now()}-${++UA}-${Math.random().toString(36).slice(2,8)}`;T(Ge=>[...Ge,{id:Re,sender:he,text:we,time:ye,isSystem:te}])},[]);return et.useEffect(()=>{if(DA(i.texturePack||"realistic"),!l.current)return;const he=l.current,we=new rb;we.background=new Et(8900331),we.fog=new tp(8900331,.022);const te=new Mi(i.fov,window.innerWidth/window.innerHeight,.1,1e3);te.position.set(0,15,0);const ye=new CA({antialias:i.graphics==="fabulous"});ye.setSize(window.innerWidth,window.innerHeight),ye.setPixelRatio(Math.min(window.devicePixelRatio,2)),he.appendChild(ye.domElement);const Re=new Db(16777215,.75);we.add(Re);const Ge=new Cb(16774630,.9);Ge.position.set(50,100,50),we.add(Ge);const rt=new xb(new pr(1.004,1.004,1.004)),$e=new C_({color:0,linewidth:2,depthTest:!0}),Nt=new gb(rt,$e);Nt.visible=!1,Nt.renderOrder=999,we.add(Nt);const lt=[],vt=new pr(.12,.12,.12),_t=(J,ae,$,Se)=>{const de=Tn[Se];let je;de&&"top"in de?je=new cr({map:de.top}):de instanceof In?je=new cr({map:de}):je=new cr({color:8947848});for(let ot=0;ot<8;ot++){const Qt=new Bi(vt,je);Qt.position.set(J+(Math.random()-.5)*.7,ae+(Math.random()-.5)*.7,$+(Math.random()-.5)*.7),we.add(Qt),lt.push({mesh:Qt,vx:(Math.random()-.5)*.08,vy:Math.random()*.1+.03,vz:(Math.random()-.5)*.08,life:20})}},gt=32,Wt=new Map,tn=new pr(1,1,1),nn=J=>{const ae=Tn[J];if(!ae)return new cr({color:8947848});if("top"in ae){const Se=new cr({map:ae.side}),de=new cr({map:ae.top}),je=new cr({map:ae.bottom});return[Se,Se,de,je,Se,Se]}const $=J==="glass"||J==="water";return new cr({map:ae,transparent:$,opacity:J==="water"?.7:J==="glass"?.85:1})},Ut=(J,ae,$,Se)=>{const de=`${J},${ae},${$}`;if(Wt.has(de))return;const je=nn(Se),ot=new Bi(tn,je);ot.position.set(J,ae,$),ot.userData={type:Se,x:J,y:ae,z:$},we.add(ot),Wt.set(de,ot)},zt=Math.floor(gt/2);if(!e)for(let J=-zt;J<zt;J++)for(let ae=-zt;ae<zt;ae++){Ut(J,0,ae,"bedrock");const $=Math.floor(Math.sin(J*.15)*Math.cos(ae*.15)*2+10);for(let Se=1;Se<=$;Se++)if(Se===$)Ut(J,Se,ae,"grass");else if(Se>$-3)Ut(J,Se,ae,"dirt");else{const de=Math.random()<.02&&Se<5,je=Math.random()<.03&&Se<7;Ut(J,Se,ae,de?"diamond_ore":je?"gold_ore":"stone")}if(Math.abs(J)%7===0&&Math.abs(ae)%7===0&&J!==0&&ae!==0){for(let Se=$+1;Se<=$+4;Se++)Ut(J,Se,ae,"oak_log");for(let Se=J-1;Se<=J+1;Se++)for(let de=ae-1;de<=ae+1;de++)for(let je=$+4;je<=$+6;je++)Ut(Se,je,de,"oak_leaves")}}const an=(J,ae,$)=>{const Se=Math.max(1,Math.min(60,$));Ut(J,0,ae,"bedrock");for(let de=1;de<=Se;de++)de===Se?Ut(J,de,ae,"grass"):de>Se-3?Ut(J,de,ae,"dirt"):Ut(J,de,ae,"stone")},I={x:0,y:13,z:0,vx:0,vy:0,vz:0,speed:.12,jumpForce:.25,gravity:.015,yaw:0,pitch:0},pt={},wt=J=>{if(pt[J.code]=!0,J.code==="KeyE"&&!xe.current&&p(ae=>!ae),J.code==="KeyT"&&!xe.current&&v(!0),J.code==="Escape"&&(xe.current?v(!1):ne.current?p(!1):h(ae=>!ae)),J.code.startsWith("Digit")){const ae=parseInt(J.code.replace("Digit",""),10);ae>=1&&ae<=9&&F(ae-1)}},U=J=>{pt[J.code]=!1};window.addEventListener("keydown",wt),window.addEventListener("keyup",U);const b=J=>{document.pointerLockElement===ye.domElement&&!G.current&&!ne.current&&!xe.current&&(I.yaw-=J.movementX*.002,I.pitch-=J.movementY*.002,I.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,I.pitch)))};window.addEventListener("mousemove",b);const K=new Lb;K.far=5.5;const ce=new ie,me=()=>{te.getWorldDirection(ce),K.set(te.position,ce);const J=[],ae=te.position;for(const Se of Wt.values())Se.position.distanceToSquared(ae)<=36&&J.push(Se);const $=K.intersectObjects(J,!1);if($.length>0&&$[0].face){const Se=$[0],de=Se.object,je=de.userData.type||"stone";return{mesh:de,type:je,name:o_[je]||je,x:Math.round(de.position.x),y:Math.round(de.position.y),z:Math.round(de.position.z),distance:Se.distance,faceNormal:Se.face.normal.clone(),isBedrock:je==="bedrock"}}return null},Ne=()=>{if(G.current||ne.current||xe.current)return;const J=me();if(!J)return;if(J.isBedrock){Ye.playClick(),Y("Sistem","Katman kayası (Bedrock) kırılamaz!",!0);return}_t(J.x,J.y,J.z,J.type);const ae=`${J.x},${J.y},${J.z}`;we.remove(J.mesh),J.mesh.geometry.dispose(),Wt.delete(ae),Ye.playDig(J.type),M($=>{const Se=[...$],de=Se.findIndex(je=>je.type===J.type);if(de!==-1)Se[de]={...Se[de],count:Se[de].count+1};else{const je=Se.findIndex(ot=>ot.count<=0);je!==-1&&(Se[je]={type:J.type,count:1,name:o_[J.type]||J.type})}return Se}),Nt.visible=!1},Oe=()=>{if(G.current||ne.current||xe.current)return;const J=me();if(!J)return;const ae=L.current,$=De.current[ae];if(!$||$.count<=0){Ye.playClick();return}const Se=Math.round(J.x+J.faceNormal.x),de=Math.round(J.y+J.faceNormal.y),je=Math.round(J.z+J.faceNormal.z),ot=I.x-.45,Qt=I.x+.45,fn=I.z-.45,Ai=I.z+.45,Ri=I.y-1.2,wi=I.y+.8;if(Qt>Se-.5&&ot<Se+.5&&Ai>je-.5&&fn<je+.5&&wi>de-.5&&Ri<de+.5)return;const kn=`${Se},${de},${je}`;Wt.has(kn)||(Ut(Se,de,je,$.type),Ye.playDig($.type),M(dn=>{const rn=[...dn];return rn[ae]&&rn[ae].count>0&&(rn[ae]={...rn[ae],count:rn[ae].count-1}),rn}))};_e.current={breakBlock:Ne,placeBlock:Oe};const ge=J=>{if(!(G.current||ne.current||xe.current)){if(document.pointerLockElement!==ye.domElement&&ye.domElement.requestPointerLock(),J.button===0)Ne();else if(J.button===2)Oe();else if(J.button===1){const ae=me();if(ae){const $=De.current.findIndex(Se=>Se.type===ae.type);$!==-1&&(F($),Ye.playPop())}}}},ve=J=>J.preventDefault(),Le=J=>{G.current||ne.current||xe.current||(J.deltaY>0?F(ae=>(ae+1)%9):J.deltaY<0&&F(ae=>(ae-1+9)%9))};ye.domElement.addEventListener("mousedown",ge),ye.domElement.addEventListener("contextmenu",ve),window.addEventListener("wheel",Le,{passive:!0});const He=J=>{for(let ae=0;ae<J.changedTouches.length;ae++){const $=J.changedTouches[ae];if($.clientX>window.innerWidth*.35){Z.current={touchId:$.identifier,lastX:$.clientX,lastY:$.clientY};break}}},ze=J=>{if(Z.current)for(let ae=0;ae<J.changedTouches.length;ae++){const $=J.changedTouches[ae];if($.identifier===Z.current.touchId){const Se=$.clientX-Z.current.lastX,de=$.clientY-Z.current.lastY;Z.current.lastX=$.clientX,Z.current.lastY=$.clientY;const je=.005;I.yaw-=Se*je,I.pitch-=de*je,I.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,I.pitch));break}}},Pe=J=>{if(Z.current){for(let ae=0;ae<J.changedTouches.length;ae++)if(J.changedTouches[ae].identifier===Z.current.touchId){Z.current=null;break}}};if(ye.domElement.addEventListener("touchstart",He,{passive:!0}),ye.domElement.addEventListener("touchmove",ze,{passive:!0}),ye.domElement.addEventListener("touchend",Pe,{passive:!0}),e){const ae=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/ws-proxy?host=${encodeURIComponent(e.ip)}&port=${e.port}&username=WebPlayer`,$=new WebSocket(ae);z.current=$,$.onopen=()=>{Y("Sistem",`${e.name} sunucusuna bağlanıyor...`,!0)},$.onmessage=Se=>{if(typeof Se.data=="string")try{const de=JSON.parse(Se.data);switch(de.type){case"tcp_connected":Y("Sistem",`TCP Köprüsü: ${de.host}:${de.port}`,!0);break;case"state":de.state==="play"&&Y("Sistem","Protokol: Play State aktif ✓",!0);break;case"login":Y("Sistem",`Login başarılı! Oyun Modu: ${de.gameMode}`,!0);break;case"joined_world":Y("Sistem",`✓ ${de.username} dünyaya katıldı!`,!0),I.y=64;break;case"spawn_position":de.x!==void 0&&de.y!==void 0&&de.z!==void 0&&(I.x=de.x+.5,I.y=de.y+1.5,I.z=de.z+.5,Y("Sistem",`Spawn: ${Math.round(de.x)}, ${Math.round(de.y)}, ${Math.round(de.z)}`,!0));break;case"position":de.x!==void 0&&de.y!==void 0&&de.z!==void 0&&(I.x=de.x,I.y=de.y,I.z=de.z);break;case"chunk":if(de.heightmapPacked&&Array.isArray(de.heightmapPacked)){const je=de.x,ot=de.z;for(let Qt=0;Qt<16;Qt++)for(let fn=0;fn<16;fn++){const Ai=fn*16+Qt,Ri=Math.floor((de.heightmapPacked[Ai%de.heightmapPacked.length]||64)/4)+1,wi=je*16+Qt,Jt=ot*16+fn;an(wi,Jt,Math.min(255,Math.max(0,Ri)))}}break;case"unload_chunk":break;case"health":typeof de.health=="number"&&Y("Sistem",`❤ Sağlık: ${de.health.toFixed(1)}/20`,!0);break;case"player_list":Array.isArray(de.players)&&de.players.length&&Y("Sistem",`Çevrimiçi: ${de.players.join(", ")}`,!0);break;case"chat":Y(de.sender||"Oyuncu",de.text);break;case"system_chat":Y("Sistem",de.text,!0);break;case"disconnected":Y("Sistem",`❌ Bağlantı kesildi: ${de.reason}`,!0);break;case"closed":Y("Sistem","⚠ Sunucu kapandı.",!0);break;case"error":Y("Sistem",`⚠ HATA: ${de.message}`,!0);break;default:break}}catch{}},$.onerror=()=>{Y("Sistem","❌ WebSocket Hatası",!0)},$.onclose=()=>{Y("Sistem","⚠ Sunucu bağlantısı kapandı.",!0)}}let Ke=performance.now(),Qe=0,it,W="";const Ue=J=>{it=requestAnimationFrame(Ue),Qe++,J-Ke>=1e3&&(O(Math.round(Qe*1e3/(J-Ke))),Qe=0,Ke=J);for(let ae=lt.length-1;ae>=0;ae--){const $=lt[ae];$.mesh.position.x+=$.vx,$.mesh.position.y+=$.vy,$.mesh.position.z+=$.vz,$.vy-=.008,$.life--,$.life<=0&&(we.remove($.mesh),$.mesh.geometry.dispose(),lt.splice(ae,1))}if(!G.current&&!ne.current&&!xe.current){const ae=I.speed;let $=0,Se=0;const de=pt.KeyW||pt.ArrowUp||B.current.forward,je=pt.KeyS||pt.ArrowDown||B.current.back,ot=pt.KeyA||pt.ArrowLeft||B.current.left,Qt=pt.KeyD||pt.ArrowRight||B.current.right,fn=pt.Space||B.current.jump;de&&($-=Math.sin(I.yaw)*ae,Se-=Math.cos(I.yaw)*ae),je&&($+=Math.sin(I.yaw)*ae,Se+=Math.cos(I.yaw)*ae),ot&&($-=Math.cos(I.yaw)*ae,Se+=Math.sin(I.yaw)*ae),Qt&&($+=Math.cos(I.yaw)*ae,Se+=Math.sin(I.yaw)*ae),I.x+=$,I.z+=Se,fn&&I.y<=11.05&&(I.vy=I.jumpForce,Ye.playFootstep()),I.y+=I.vy,I.vy-=I.gravity,I.y<11&&(I.y=11,I.vy=0),te.position.set(I.x,I.y+.6,I.z);const Ai=te.position.x-Math.sin(I.yaw)*Math.cos(I.pitch),Ri=te.position.y+Math.sin(I.pitch),wi=te.position.z-Math.cos(I.yaw)*Math.cos(I.pitch);te.lookAt(Ai,Ri,wi),Qe%8===0&&S({x:I.x.toFixed(1),y:I.y.toFixed(1),z:I.z.toFixed(1)});const Jt=me();if(Jt){Nt.visible=!0,Nt.position.set(Jt.x,Jt.y,Jt.z);const kn=`${Jt.x},${Jt.y},${Jt.z},${Jt.type}`;kn!==W&&(W=kn,X({type:Jt.type,name:Jt.name,x:Jt.x,y:Jt.y,z:Jt.z,distance:parseFloat(Jt.distance.toFixed(1)),isBedrock:Jt.isBedrock}))}else Nt.visible=!1,W!==""&&(W="",X(null))}ye.render(we,te)};it=requestAnimationFrame(Ue);const be=()=>{te.aspect=window.innerWidth/window.innerHeight,te.updateProjectionMatrix(),ye.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",be),()=>{cancelAnimationFrame(it),window.removeEventListener("keydown",wt),window.removeEventListener("keyup",U),window.removeEventListener("mousemove",b),window.removeEventListener("resize",be),window.removeEventListener("wheel",Le),ye.domElement.removeEventListener("mousedown",ge),ye.domElement.removeEventListener("contextmenu",ve),ye.domElement.removeEventListener("touchstart",He),ye.domElement.removeEventListener("touchmove",ze),ye.domElement.removeEventListener("touchend",Pe),ye.domElement.remove(),z.current&&z.current.close()}},[i.fov,i.graphics,i.texturePack,e,Y]),C.jsxs("div",{className:"relative w-full h-screen overflow-hidden select-none font-['VT323'] touch-none",children:[C.jsx("div",{ref:l,className:"absolute inset-0 cursor-crosshair"}),N?C.jsxs("div",{id:"target-block-hud",className:"absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-black/85 border-2 border-[#555] px-3 sm:px-4 py-1.5 sm:py-2 rounded shadow-2xl flex items-center gap-2 sm:gap-3 pointer-events-none text-white z-20 backdrop-blur-sm max-w-[92vw]",children:[C.jsx("div",{className:`w-3 h-3 rounded-full flex-shrink-0 ${N.isBedrock?"bg-red-500":"bg-emerald-400 animate-pulse"}`}),C.jsxs("div",{className:"flex flex-col overflow-hidden",children:[C.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2",children:[C.jsx("span",{className:"font-bold text-yellow-300 text-xl sm:text-2xl tracking-wide truncate",children:N.name}),C.jsxs("span",{className:"text-gray-300 text-xs sm:text-sm",children:["(",N.distance,"m)"]}),N.isBedrock&&C.jsx("span",{className:"text-[10px] sm:text-xs bg-red-900/80 text-red-200 px-1 py-0.5 rounded border border-red-700",children:"Kırılamaz"})]}),C.jsxs("div",{className:"text-gray-300 text-xs sm:text-sm flex gap-2 font-mono truncate",children:[C.jsxs("span",{children:["[",N.x,", ",N.y,", ",N.z,"]"]}),C.jsx("span",{className:"text-blue-300 hidden sm:inline",children:"[Sol: Kır]"}),C.jsx("span",{className:"text-emerald-300 hidden sm:inline",children:"[Sağ: Koy]"})]})]})]}):C.jsx("div",{id:"target-block-hud-empty",className:"absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-black/40 border border-white/20 px-3 py-1 rounded text-gray-400 text-xs sm:text-base pointer-events-none z-20",children:"Hedef Blok: Menzil Dışı"}),C.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none z-10",children:C.jsx("div",{className:`text-2xl sm:text-3xl font-mono transition-transform duration-75 ${N?"text-yellow-300 scale-125 opacity-100":"text-white opacity-75"}`,children:"+"})}),C.jsxs("div",{className:"absolute top-2 left-2 sm:top-4 sm:left-4 text-white text-base sm:text-xl bg-black/60 p-2 sm:p-2.5 rounded border border-white/10 pointer-events-none z-10 max-w-[50vw]",children:[C.jsxs("div",{className:"text-green-400 font-bold",children:["MC 1.21.4 • ",((Ce=i.texturePack)==null?void 0:Ce.toUpperCase())||"REALISTIC"]}),C.jsxs("div",{children:["FPS: ",H," | XYZ: ",P.x,"/",P.y,"/",P.z]}),e&&C.jsxs("div",{className:"text-yellow-300 text-xs sm:text-sm font-mono truncate",children:["🌐 ",e.name," (",e.ip,")"]})]}),C.jsxs("div",{className:"absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center gap-2 z-30",children:[C.jsxs("button",{onClick:()=>v(he=>!he),className:"p-2 sm:px-3 sm:py-1.5 bg-black/70 hover:bg-black/90 border border-gray-500 rounded text-white text-base sm:text-lg flex items-center gap-1 active:scale-95",title:"Sohbeti Aç (T)",children:["💬 ",C.jsx("span",{className:"hidden sm:inline",children:"Sohbet"})]}),C.jsxs("button",{onClick:()=>p(he=>!he),className:"p-2 sm:px-3 sm:py-1.5 bg-black/70 hover:bg-black/90 border border-gray-500 rounded text-white text-base sm:text-lg flex items-center gap-1 active:scale-95",title:"Envanteri Aç (E)",children:["🎒 ",C.jsx("span",{className:"hidden sm:inline",children:"Envanter"})]}),C.jsxs("button",{onClick:()=>h(he=>!he),className:"p-2 sm:px-3 sm:py-1.5 bg-black/70 hover:bg-black/90 border border-gray-500 rounded text-white text-base sm:text-lg flex items-center gap-1 active:scale-95",title:"Menü (Esc)",children:["⏸️ ",C.jsx("span",{className:"hidden sm:inline",children:"Menü"})]})]}),C.jsxs("div",{className:"absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-10",children:[C.jsx("div",{className:"flex gap-0.5 sm:gap-1",children:Array.from({length:10}).map((he,we)=>C.jsx("div",{className:`w-3.5 h-3.5 sm:w-5 sm:h-5 ${we<k/2?"bg-red-600":"bg-gray-600"} border border-black transform rotate-45`},we))}),C.jsx("div",{className:"flex gap-0.5 sm:gap-1",children:Array.from({length:10}).map((he,we)=>C.jsx("div",{className:`w-3.5 h-3.5 sm:w-5 sm:h-5 ${we<w/2?"bg-amber-700":"bg-gray-600"} border border-black rounded-full`},we))})]}),C.jsx("div",{className:"absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-[#3c3c3c]/90 border-2 sm:border-4 border-[#222] p-0.5 sm:p-1 flex gap-0.5 sm:gap-1 shadow-2xl z-20 max-w-[96vw] overflow-x-auto",children:D.map((he,we)=>{const te=we===y;return C.jsxs("div",{onClick:()=>{Ye.playClick(),F(we)},className:`relative w-8 h-8 sm:w-12 sm:h-12 bg-[#8b8b8b] border sm:border-2 cursor-pointer flex items-center justify-center flex-shrink-0 transition-all ${te?"border-white scale-105 bg-[#a3a3a3]":"border-[#373737] hover:border-gray-400"}`,children:[C.jsx("div",{className:"text-[9px] sm:text-xs font-bold text-yellow-300 absolute top-0.5 left-0.5 sm:left-1",children:we+1}),C.jsx("div",{className:"text-[9px] sm:text-xs uppercase font-bold text-center text-white px-0.5 truncate",children:he.type.slice(0,3)}),C.jsx("div",{className:"text-[9px] sm:text-xs font-bold text-white absolute bottom-0.5 right-0.5 sm:right-1 bg-black/70 px-0.5 rounded-sm",children:he.count})]},we)})}),ee&&C.jsxs("div",{className:"absolute inset-0 pointer-events-none z-30",children:[C.jsxs("div",{className:"absolute bottom-20 left-4 pointer-events-auto flex flex-col items-center",children:[C.jsx("button",{onTouchStart:he=>{he.preventDefault(),B.current.forward=!0},onTouchEnd:he=>{he.preventDefault(),B.current.forward=!1},onMouseDown:()=>{B.current.forward=!0},onMouseUp:()=>{B.current.forward=!1},className:"w-14 h-14 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-2xl font-bold rounded-t-lg flex items-center justify-center select-none shadow-xl",children:"▲"}),C.jsxs("div",{className:"flex gap-3",children:[C.jsx("button",{onTouchStart:he=>{he.preventDefault(),B.current.left=!0},onTouchEnd:he=>{he.preventDefault(),B.current.left=!1},onMouseDown:()=>{B.current.left=!0},onMouseUp:()=>{B.current.left=!1},className:"w-14 h-14 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-2xl font-bold rounded-l-lg flex items-center justify-center select-none shadow-xl",children:"◀"}),C.jsx("div",{className:"w-10 h-14 flex items-center justify-center text-gray-500 font-mono text-xs",children:"+"}),C.jsx("button",{onTouchStart:he=>{he.preventDefault(),B.current.right=!0},onTouchEnd:he=>{he.preventDefault(),B.current.right=!1},onMouseDown:()=>{B.current.right=!0},onMouseUp:()=>{B.current.right=!1},className:"w-14 h-14 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-2xl font-bold rounded-r-lg flex items-center justify-center select-none shadow-xl",children:"▶"})]}),C.jsx("button",{onTouchStart:he=>{he.preventDefault(),B.current.back=!0},onTouchEnd:he=>{he.preventDefault(),B.current.back=!1},onMouseDown:()=>{B.current.back=!0},onMouseUp:()=>{B.current.back=!1},className:"w-14 h-14 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-2xl font-bold rounded-b-lg flex items-center justify-center select-none shadow-xl",children:"▼"})]}),C.jsxs("div",{className:"absolute bottom-20 right-4 pointer-events-auto flex flex-col items-end gap-3",children:[C.jsxs("button",{onTouchStart:he=>{var we;he.preventDefault(),(we=_e.current)==null||we.placeBlock()},onClick:()=>{var he;return(he=_e.current)==null?void 0:he.placeBlock()},className:"w-14 h-14 bg-emerald-700/80 active:bg-emerald-600 border-2 border-emerald-400 text-white text-sm font-bold rounded-full flex flex-col items-center justify-center shadow-xl select-none",children:[C.jsx("span",{children:"🧱"}),C.jsx("span",{className:"text-[10px]",children:"KOY"})]}),C.jsxs("button",{onTouchStart:he=>{var we;he.preventDefault(),(we=_e.current)==null||we.breakBlock()},onClick:()=>{var he;return(he=_e.current)==null?void 0:he.breakBlock()},className:"w-14 h-14 bg-red-700/80 active:bg-red-600 border-2 border-red-400 text-white text-sm font-bold rounded-full flex flex-col items-center justify-center shadow-xl select-none",children:[C.jsx("span",{children:"⛏️"}),C.jsx("span",{className:"text-[10px]",children:"KIR"})]}),C.jsxs("button",{onTouchStart:he=>{he.preventDefault(),B.current.jump=!0},onTouchEnd:he=>{he.preventDefault(),B.current.jump=!1},onMouseDown:()=>{B.current.jump=!0},onMouseUp:()=>{B.current.jump=!1},className:"w-16 h-16 bg-blue-700/80 active:bg-blue-600 border-2 border-blue-400 text-white text-base font-bold rounded-full flex flex-col items-center justify-center shadow-2xl select-none",children:[C.jsx("span",{children:"⬆️"}),C.jsx("span",{className:"text-[11px]",children:"ZIPLA"})]})]})]}),C.jsxs("div",{className:"absolute bottom-20 sm:bottom-24 left-2 sm:left-4 w-[75vw] sm:w-96 flex flex-col gap-1 z-30 pointer-events-none",children:[C.jsx("div",{className:"bg-black/60 p-2 sm:p-2.5 max-h-36 sm:max-h-44 overflow-y-auto flex flex-col gap-1 text-white text-base sm:text-xl rounded border border-white/10",children:E.map((he,we)=>C.jsxs("div",{className:"drop-shadow",children:[C.jsxs("span",{className:"text-gray-400 text-xs sm:text-sm",children:["[",he.time,"] "]}),C.jsxs("span",{className:he.isSystem?"text-yellow-400 font-bold":"text-green-300",children:[he.sender,": "]}),C.jsx("span",{children:he.text})]},`${he.id||"msg"}-${we}`))}),d&&C.jsx("div",{className:"pointer-events-auto flex mt-1",children:C.jsx("input",{type:"text",value:x,onChange:he=>g(he.target.value),onKeyDown:he=>{he.key==="Enter"&&x.trim()&&(Ye.playClick(),Y("Oyuncu",x),z.current&&z.current.readyState===WebSocket.OPEN&&z.current.send(JSON.stringify({type:"chat",text:x})),g(""),v(!1))},placeholder:"Mesaj yazın...",autoFocus:!0,className:"w-full bg-black/90 border-2 border-yellow-400 px-3 py-1.5 sm:py-2 text-lg sm:text-2xl text-white outline-none"})})]}),m&&C.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:C.jsxs("div",{className:"bg-[#c6c6c6] border-4 border-[#373737] p-4 sm:p-6 w-full max-w-xl flex flex-col gap-4 text-black shadow-2xl",children:[C.jsxs("div",{className:"flex justify-between items-center border-b-2 border-gray-500 pb-2",children:[C.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-black",children:"Envanter (Survival)"}),C.jsx("button",{onClick:()=>p(!1),className:"px-3 py-1 bg-red-600 text-white font-bold text-lg hover:bg-red-500",children:"X"})]}),C.jsx("div",{className:"grid grid-cols-5 sm:grid-cols-9 gap-1.5 sm:gap-2 bg-[#8b8b8b] p-3 sm:p-4 border-2 border-inset border-gray-600 max-h-[60vh] overflow-y-auto",children:D.concat(D).map((he,we)=>C.jsxs("div",{onClick:()=>{Ye.playPop(),F(we%9)},className:"w-10 h-10 sm:w-12 sm:h-12 bg-[#c6c6c6] border-2 border-t-[#373737] border-l-[#373737] border-b-[#fff] border-r-[#fff] cursor-pointer flex flex-col items-center justify-center text-[10px] sm:text-xs font-bold hover:bg-gray-300",children:[C.jsx("span",{className:"truncate w-full text-center px-0.5",children:he.type}),C.jsx("span",{className:"text-blue-900",children:he.count})]},we))})]})}),c&&C.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:C.jsxs("div",{className:"bg-[#2e2e2e] border-4 border-[#444] p-6 sm:p-8 w-full max-w-md flex flex-col gap-3 sm:gap-4 shadow-2xl",children:[C.jsx("div",{className:"text-3xl sm:text-4xl text-center text-white font-bold mb-2",children:"Oyun Duraklatıldı"}),C.jsx("button",{onClick:()=>{Ye.playClick(),h(!1)},className:"py-2.5 sm:py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl sm:text-2xl font-bold",children:"Oyuna Dön (Resume)"}),C.jsx("button",{onClick:()=>{Ye.playClick(),h(!1),p(!0)},className:"py-2.5 sm:py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl sm:text-2xl font-bold",children:"Envanter (Inventory)"}),C.jsx("button",{onClick:()=>{Ye.playClick(),r()},className:"py-2.5 sm:py-3 bg-[#a82020] hover:bg-[#c93030] text-white border-2 border-t-[#f87171] border-l-[#f87171] border-b-[#7f1d1d] border-r-[#7f1d1d] text-xl sm:text-2xl font-bold mt-2",children:"Ana Menüye Kaydet ve Çık"})]})})]})}function OA(){const[o,e]=et.useState("splash"),[i,r]=et.useState(),[l,c]=et.useState(),[h,m]=et.useState({fov:85,renderDistance:8,volume:50,graphics:"fancy",texturePack:"realistic",touchControls:"auto",uiScale:1,language:"tr",skin:"steve",customSkinColor:"#38bdf8"}),p=d=>{m(v=>({...v,...d}))};return C.jsxs("div",{className:"w-full h-screen overflow-hidden bg-black select-none",children:[o==="splash"&&C.jsx(nS,{onComplete:()=>e("menu")}),o==="menu"&&C.jsx(iS,{onNavigate:d=>e(d)}),o==="singleplayer"&&C.jsx(ev,{onNavigate:d=>e(d),onSelectWorld:d=>{r(d),c(void 0),e("game")}}),o==="create_world"&&C.jsx(ev,{onNavigate:d=>e(d),onSelectWorld:d=>{r(d),c(void 0),e("game")}}),o==="multiplayer"&&C.jsx(rS,{onNavigate:d=>e(d),onJoinServer:d=>{c(d),r(void 0),e("game")}}),o==="options"&&C.jsx(sS,{onNavigate:d=>e(d),settings:h,onUpdateSettings:p}),o==="skins"&&C.jsx(oS,{onNavigate:d=>e(d),settings:h,onUpdateSettings:p}),o==="tcp_bridge"&&C.jsx(lS,{onNavigate:d=>e(d)}),o==="realms"&&C.jsxs("div",{className:"w-full h-screen flex flex-col items-center justify-center bg-[#1e1e1e] text-white font-['VT323'] text-3xl gap-6 p-6",children:[C.jsx("div",{className:"text-yellow-300 text-5xl",children:"Minecraft Realms (1.21.4)"}),C.jsx("div",{children:"Realms aboneliği aktif! Arkadaşlarınızla kesintisiz 7/24 sunucu keyfi."}),C.jsx("button",{onClick:()=>e("menu"),className:"px-8 py-3 bg-[#727272] hover:bg-[#858585] border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] font-bold",children:"Ana Menüye Dön"})]}),o==="game"&&C.jsx(LA,{world:i,server:l,settings:h,onExit:()=>e("menu")})]})}eS.createRoot(document.getElementById("root")).render(C.jsx(et.StrictMode,{children:C.jsx(OA,{})}));
