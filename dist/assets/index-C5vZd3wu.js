(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function tE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E_={exports:{}},Zc={},T_={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),nE=Symbol.for("react.portal"),iE=Symbol.for("react.fragment"),rE=Symbol.for("react.strict_mode"),sE=Symbol.for("react.profiler"),aE=Symbol.for("react.provider"),oE=Symbol.for("react.context"),lE=Symbol.for("react.forward_ref"),cE=Symbol.for("react.suspense"),uE=Symbol.for("react.memo"),fE=Symbol.for("react.lazy"),$m=Symbol.iterator;function dE(t){return t===null||typeof t!="object"?null:(t=$m&&t[$m]||t["@@iterator"],typeof t=="function"?t:null)}var w_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A_=Object.assign,R_={};function Ta(t,e,n){this.props=t,this.context=e,this.refs=R_,this.updater=n||w_}Ta.prototype.isReactComponent={};Ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C_(){}C_.prototype=Ta.prototype;function jh(t,e,n){this.props=t,this.context=e,this.refs=R_,this.updater=n||w_}var Zh=jh.prototype=new C_;Zh.constructor=jh;A_(Zh,Ta.prototype);Zh.isPureReactComponent=!0;var Km=Array.isArray,b_=Object.prototype.hasOwnProperty,Qh={current:null},P_={key:!0,ref:!0,__self:!0,__source:!0};function D_(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)b_.call(e,i)&&!P_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Vo,type:t,key:s,ref:a,props:r,_owner:Qh.current}}function hE(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function pE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jm=/\/+/g;function Au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pE(""+t.key):e.toString(36)}function Yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Vo:case nE:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Au(a,0):i,Km(r)?(n="",t!=null&&(n=t.replace(jm,"$&/")+"/"),Yl(r,e,n,"",function(c){return c})):r!=null&&(Jh(r)&&(r=hE(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(jm,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Km(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Au(s,o);a+=Yl(s,e,n,l,r)}else if(l=dE(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Au(s,o++),a+=Yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function nl(t,e,n){if(t==null)return t;var i=[],r=0;return Yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function mE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},ql={transition:null},gE={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:ql,ReactCurrentOwner:Qh};function L_(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ta;Ye.Fragment=iE;Ye.Profiler=sE;Ye.PureComponent=jh;Ye.StrictMode=rE;Ye.Suspense=cE;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gE;Ye.act=L_;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=A_({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)b_.call(e,l)&&!P_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Vo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:oE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:aE,_context:t},t.Consumer=t};Ye.createElement=D_;Ye.createFactory=function(t){var e=D_.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:lE,render:t}};Ye.isValidElement=Jh;Ye.lazy=function(t){return{$$typeof:fE,_payload:{_status:-1,_result:t},_init:mE}};Ye.memo=function(t,e){return{$$typeof:uE,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};Ye.unstable_act=L_;Ye.useCallback=function(t,e){return _n.current.useCallback(t,e)};Ye.useContext=function(t){return _n.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return _n.current.useEffect(t,e)};Ye.useId=function(){return _n.current.useId()};Ye.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return _n.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};Ye.useRef=function(t){return _n.current.useRef(t)};Ye.useState=function(t){return _n.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return _n.current.useTransition()};Ye.version="18.3.1";T_.exports=Ye;var ce=T_.exports;const vE=tE(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _E=ce,xE=Symbol.for("react.element"),yE=Symbol.for("react.fragment"),SE=Object.prototype.hasOwnProperty,ME=_E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EE={key:!0,ref:!0,__self:!0,__source:!0};function N_(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)SE.call(e,i)&&!EE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:xE,type:t,key:s,ref:a,props:r,_owner:ME.current}}Zc.Fragment=yE;Zc.jsx=N_;Zc.jsxs=N_;E_.exports=Zc;var Y=E_.exports,Kf={},I_={exports:{}},Bn={},U_={exports:{}},F_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,U){var X=P.length;P.push(U);e:for(;0<X;){var ne=X-1>>>1,se=P[ne];if(0<r(se,U))P[ne]=U,P[X]=se,X=ne;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var U=P[0],X=P.pop();if(X!==U){P[0]=X;e:for(var ne=0,se=P.length,He=se>>>1;ne<He;){var nt=2*(ne+1)-1,Xe=P[nt],j=nt+1,ae=P[j];if(0>r(Xe,X))j<se&&0>r(ae,Xe)?(P[ne]=ae,P[j]=X,ne=j):(P[ne]=Xe,P[nt]=X,ne=nt);else if(j<se&&0>r(ae,X))P[ne]=ae,P[j]=X,ne=j;else break e}}return U}function r(P,U){var X=P.sortIndex-U.sortIndex;return X!==0?X:P.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var U=n(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=P)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(c)}}function S(P){if(M=!1,x(P),!g)if(n(l)!==null)g=!0,Z(T);else{var U=n(c);U!==null&&F(S,U.startTime-P)}}function T(P,U){g=!1,M&&(M=!1,h(_),_=-1),p=!0;var X=f;try{for(x(U),d=n(l);d!==null&&(!(d.expirationTime>U)||P&&!D());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var se=ne(d.expirationTime<=U);U=t.unstable_now(),typeof se=="function"?d.callback=se:d===n(l)&&i(l),x(U)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var nt=n(c);nt!==null&&F(S,nt.startTime-U),He=!1}return He}finally{d=null,f=X,p=!1}}var w=!1,R=null,_=-1,A=5,b=-1;function D(){return!(t.unstable_now()-b<A)}function B(){if(R!==null){var P=t.unstable_now();b=P;var U=!0;try{U=R(!0,P)}finally{U?$():(w=!1,R=null)}}else w=!1}var $;if(typeof v=="function")$=function(){v(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,k=ee.port2;ee.port1.onmessage=B,$=function(){k.postMessage(null)}}else $=function(){m(B,0)};function Z(P){R=P,w||(w=!0,$())}function F(P,U){_=m(function(){P(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Z(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var X=f;f=U;try{return P()}finally{f=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,U){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=f;f=P;try{return U()}finally{f=X}},t.unstable_scheduleCallback=function(P,U,X){var ne=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ne+X:ne):X=ne,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=X+se,P={id:u++,callback:U,priorityLevel:P,startTime:X,expirationTime:se,sortIndex:-1},X>ne?(P.sortIndex=X,e(c,P),n(l)===null&&P===n(c)&&(M?(h(_),_=-1):M=!0,F(S,X-ne))):(P.sortIndex=se,e(l,P),g||p||(g=!0,Z(T))),P},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(P){var U=f;return function(){var X=f;f=U;try{return P.apply(this,arguments)}finally{f=X}}}})(F_);U_.exports=F_;var TE=U_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE=ce,Fn=TE;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O_=new Set,vo={};function vs(t,e){ca(t,e),ca(t+"Capture",e)}function ca(t,e){for(vo[t]=e,t=0;t<e.length;t++)O_.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jf=Object.prototype.hasOwnProperty,AE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zm={},Qm={};function RE(t){return jf.call(Qm,t)?!0:jf.call(Zm,t)?!1:AE.test(t)?Qm[t]=!0:(Zm[t]=!0,!1)}function CE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bE(t,e,n,i){if(e===null||typeof e>"u"||CE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tn[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tn[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tn[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tn[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tn[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tn[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tn[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tn[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tn[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ep=/[\-:]([a-z])/g;function tp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ep,tp);tn[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ep,tp);tn[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ep,tp);tn[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tn[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});tn.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tn[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function np(t,e,n,i){var r=tn.hasOwnProperty(e)?tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bE(e,n,r,i)&&(n=null),i||r===null?RE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=wE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),Os=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),k_=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),Qf=Symbol.for("react.suspense"),Jf=Symbol.for("react.suspense_list"),sp=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),V_=Symbol.for("react.offscreen"),Jm=Symbol.iterator;function La(t){return t===null||typeof t!="object"?null:(t=Jm&&t[Jm]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,Ru;function $a(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Cu=!1;function bu(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$a(t):""}function PE(t){switch(t.tag){case 5:return $a(t.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bs:return"Fragment";case Os:return"Portal";case Zf:return"Profiler";case ip:return"StrictMode";case Qf:return"Suspense";case Jf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k_:return(t.displayName||"Context")+".Consumer";case B_:return(t._context.displayName||"Context")+".Provider";case rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sp:return e=t.displayName||null,e!==null?e:ed(t.type)||"Memo";case mr:e=t._payload,t=t._init;try{return ed(t(e))}catch{}}return null}function DE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ed(e);case 8:return e===ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LE(t){var e=z_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=LE(t))}function G_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=z_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function td(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H_(t,e){e=e.checked,e!=null&&np(t,"checked",e,!1)}function nd(t,e){H_(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?id(t,e.type,n):e.hasOwnProperty("defaultValue")&&id(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function id(t,e,n){(e!=="number"||hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ka=Array.isArray;function ea(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ka(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function W_(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ig(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,Y_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},NE=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){NE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function q_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function $_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=q_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var IE=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(t,e){if(e){if(IE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=null;function ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cd=null,ta=null,na=null;function rg(t){if(t=Ho(t)){if(typeof cd!="function")throw Error(re(280));var e=t.stateNode;e&&(e=nu(e),cd(t.stateNode,t.type,e))}}function K_(t){ta?na?na.push(t):na=[t]:ta=t}function j_(){if(ta){var t=ta,e=na;if(na=ta=null,rg(t),e)for(t=0;t<e.length;t++)rg(e[t])}}function Z_(t,e){return t(e)}function Q_(){}var Pu=!1;function J_(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return Z_(t,e,n)}finally{Pu=!1,(ta!==null||na!==null)&&(Q_(),j_())}}function xo(t,e){var n=t.stateNode;if(n===null)return null;var i=nu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var ud=!1;if($i)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{ud=!1}function UE(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ro=!1,pc=null,mc=!1,fd=null,FE={onError:function(t){ro=!0,pc=t}};function OE(t,e,n,i,r,s,a,o,l){ro=!1,pc=null,UE.apply(FE,arguments)}function BE(t,e,n,i,r,s,a,o,l){if(OE.apply(this,arguments),ro){if(ro){var c=pc;ro=!1,pc=null}else throw Error(re(198));mc||(mc=!0,fd=c)}}function _s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ex(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sg(t){if(_s(t)!==t)throw Error(re(188))}function kE(t){var e=t.alternate;if(!e){if(e=_s(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sg(r),t;if(s===i)return sg(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function tx(t){return t=kE(t),t!==null?nx(t):null}function nx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nx(t);if(e!==null)return e;t=t.sibling}return null}var ix=Fn.unstable_scheduleCallback,ag=Fn.unstable_cancelCallback,VE=Fn.unstable_shouldYield,zE=Fn.unstable_requestPaint,Bt=Fn.unstable_now,GE=Fn.unstable_getCurrentPriorityLevel,op=Fn.unstable_ImmediatePriority,rx=Fn.unstable_UserBlockingPriority,gc=Fn.unstable_NormalPriority,HE=Fn.unstable_LowPriority,sx=Fn.unstable_IdlePriority,Qc=null,Ai=null;function WE(t){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:qE,XE=Math.log,YE=Math.LN2;function qE(t){return t>>>=0,t===0?32:31-(XE(t)/YE|0)|0}var al=64,ol=4194304;function ja(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ja(o):(s&=a,s!==0&&(i=ja(s)))}else a=n&~r,a!==0?i=ja(a):s!==0&&(i=ja(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function $E(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ui(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=$E(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ax(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function jE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function lp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function ox(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lx,cp,cx,ux,fx,hd=!1,ll=[],Er=null,Tr=null,wr=null,yo=new Map,So=new Map,vr=[],ZE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function og(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Ia(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ho(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function QE(t,e,n,i,r){switch(e){case"focusin":return Er=Ia(Er,t,e,n,i,r),!0;case"dragenter":return Tr=Ia(Tr,t,e,n,i,r),!0;case"mouseover":return wr=Ia(wr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return yo.set(s,Ia(yo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,So.set(s,Ia(So.get(s)||null,t,e,n,i,r)),!0}return!1}function dx(t){var e=Jr(t.target);if(e!==null){var n=_s(e);if(n!==null){if(e=n.tag,e===13){if(e=ex(n),e!==null){t.blockedOn=e,fx(t.priority,function(){cx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ld=i,n.target.dispatchEvent(i),ld=null}else return e=Ho(n),e!==null&&cp(e),t.blockedOn=n,!1;e.shift()}return!0}function lg(t,e,n){$l(t)&&n.delete(e)}function JE(){hd=!1,Er!==null&&$l(Er)&&(Er=null),Tr!==null&&$l(Tr)&&(Tr=null),wr!==null&&$l(wr)&&(wr=null),yo.forEach(lg),So.forEach(lg)}function Ua(t,e){t.blockedOn===e&&(t.blockedOn=null,hd||(hd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,JE)))}function Mo(t){function e(r){return Ua(r,t)}if(0<ll.length){Ua(ll[0],t);for(var n=1;n<ll.length;n++){var i=ll[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&Ua(Er,t),Tr!==null&&Ua(Tr,t),wr!==null&&Ua(wr,t),yo.forEach(e),So.forEach(e),n=0;n<vr.length;n++)i=vr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)dx(n),n.blockedOn===null&&vr.shift()}var ia=nr.ReactCurrentBatchConfig,_c=!0;function eT(t,e,n,i){var r=ut,s=ia.transition;ia.transition=null;try{ut=1,up(t,e,n,i)}finally{ut=r,ia.transition=s}}function tT(t,e,n,i){var r=ut,s=ia.transition;ia.transition=null;try{ut=4,up(t,e,n,i)}finally{ut=r,ia.transition=s}}function up(t,e,n,i){if(_c){var r=pd(t,e,n,i);if(r===null)zu(t,e,i,xc,n),og(t,i);else if(QE(r,t,e,n,i))i.stopPropagation();else if(og(t,i),e&4&&-1<ZE.indexOf(t)){for(;r!==null;){var s=Ho(r);if(s!==null&&lx(s),s=pd(t,e,n,i),s===null&&zu(t,e,i,xc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zu(t,e,i,null,n)}}var xc=null;function pd(t,e,n,i){if(xc=null,t=ap(i),t=Jr(t),t!==null)if(e=_s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ex(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xc=t,null}function hx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GE()){case op:return 1;case rx:return 4;case gc:case HE:return 16;case sx:return 536870912;default:return 16}default:return 16}}var xr=null,fp=null,Kl=null;function px(){if(Kl)return Kl;var t,e=fp,n=e.length,i,r="value"in xr?xr.value:xr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Kl=r.slice(t,1<i?1-i:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function cg(){return!1}function kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?cl:cg,this.isPropagationStopped=cg,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),e}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dp=kn(wa),Go=At({},wa,{view:0,detail:0}),nT=kn(Go),Lu,Nu,Fa,Jc=At({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(Lu=t.screenX-Fa.screenX,Nu=t.screenY-Fa.screenY):Nu=Lu=0,Fa=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Nu}}),ug=kn(Jc),iT=At({},Jc,{dataTransfer:0}),rT=kn(iT),sT=At({},Go,{relatedTarget:0}),Iu=kn(sT),aT=At({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),oT=kn(aT),lT=At({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cT=kn(lT),uT=At({},wa,{data:0}),fg=kn(uT),fT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hT[t])?!!e[t]:!1}function hp(){return pT}var mT=At({},Go,{key:function(t){if(t.key){var e=fT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gT=kn(mT),vT=At({},Jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dg=kn(vT),_T=At({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),xT=kn(_T),yT=At({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ST=kn(yT),MT=At({},Jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ET=kn(MT),TT=[9,13,27,32],pp=$i&&"CompositionEvent"in window,so=null;$i&&"documentMode"in document&&(so=document.documentMode);var wT=$i&&"TextEvent"in window&&!so,mx=$i&&(!pp||so&&8<so&&11>=so),hg=" ",pg=!1;function gx(t,e){switch(t){case"keyup":return TT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function AT(t,e){switch(t){case"compositionend":return vx(e);case"keypress":return e.which!==32?null:(pg=!0,hg);case"textInput":return t=e.data,t===hg&&pg?null:t;default:return null}}function RT(t,e){if(ks)return t==="compositionend"||!pp&&gx(t,e)?(t=px(),Kl=fp=xr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mx&&e.locale!=="ko"?null:e.data;default:return null}}var CT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CT[t.type]:e==="textarea"}function _x(t,e,n,i){K_(i),e=yc(e,"onChange"),0<e.length&&(n=new dp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ao=null,Eo=null;function bT(t){bx(t,0)}function eu(t){var e=Gs(t);if(G_(e))return t}function PT(t,e){if(t==="change")return e}var xx=!1;if($i){var Uu;if($i){var Fu="oninput"in document;if(!Fu){var gg=document.createElement("div");gg.setAttribute("oninput","return;"),Fu=typeof gg.oninput=="function"}Uu=Fu}else Uu=!1;xx=Uu&&(!document.documentMode||9<document.documentMode)}function vg(){ao&&(ao.detachEvent("onpropertychange",yx),Eo=ao=null)}function yx(t){if(t.propertyName==="value"&&eu(Eo)){var e=[];_x(e,Eo,t,ap(t)),J_(bT,e)}}function DT(t,e,n){t==="focusin"?(vg(),ao=e,Eo=n,ao.attachEvent("onpropertychange",yx)):t==="focusout"&&vg()}function LT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(Eo)}function NT(t,e){if(t==="click")return eu(e)}function IT(t,e){if(t==="input"||t==="change")return eu(e)}function UT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:UT;function To(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!jf.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function _g(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=_g(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_g(n)}}function Sx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mx(){for(var t=window,e=hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hc(t.document)}return e}function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function FT(t){var e=Mx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sx(n.ownerDocument.documentElement,n)){if(i!==null&&mp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=xg(n,s);var a=xg(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OT=$i&&"documentMode"in document&&11>=document.documentMode,Vs=null,md=null,oo=null,gd=!1;function yg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gd||Vs==null||Vs!==hc(i)||(i=Vs,"selectionStart"in i&&mp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&To(oo,i)||(oo=i,i=yc(md,"onSelect"),0<i.length&&(e=new dp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vs)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},Ou={},Ex={};$i&&(Ex=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function tu(t){if(Ou[t])return Ou[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ex)return Ou[t]=e[n];return t}var Tx=tu("animationend"),wx=tu("animationiteration"),Ax=tu("animationstart"),Rx=tu("transitionend"),Cx=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){Cx.set(t,e),vs(e,[t])}for(var Bu=0;Bu<Sg.length;Bu++){var ku=Sg[Bu],BT=ku.toLowerCase(),kT=ku[0].toUpperCase()+ku.slice(1);Ur(BT,"on"+kT)}Ur(Tx,"onAnimationEnd");Ur(wx,"onAnimationIteration");Ur(Ax,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(Rx,"onTransitionEnd");ca("onMouseEnter",["mouseout","mouseover"]);ca("onMouseLeave",["mouseout","mouseover"]);ca("onPointerEnter",["pointerout","pointerover"]);ca("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function Mg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,BE(i,e,void 0,t),t.currentTarget=null}function bx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Mg(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Mg(r,o,c),s=l}}}if(mc)throw t=fd,mc=!1,fd=null,t}function _t(t,e){var n=e[Sd];n===void 0&&(n=e[Sd]=new Set);var i=t+"__bubble";n.has(i)||(Px(e,t,2,!1),n.add(i))}function Vu(t,e,n){var i=0;e&&(i|=4),Px(n,t,i,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function wo(t){if(!t[fl]){t[fl]=!0,O_.forEach(function(n){n!=="selectionchange"&&(VT.has(n)||Vu(n,!1,t),Vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,Vu("selectionchange",!1,e))}}function Px(t,e,n,i){switch(hx(e)){case 1:var r=eT;break;case 4:r=tT;break;default:r=up}n=r.bind(null,e,n,t),r=void 0,!ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}J_(function(){var c=s,u=ap(n),d=[];e:{var f=Cx.get(t);if(f!==void 0){var p=dp,g=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":p=gT;break;case"focusin":g="focus",p=Iu;break;case"focusout":g="blur",p=Iu;break;case"beforeblur":case"afterblur":p=Iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xT;break;case Tx:case wx:case Ax:p=oT;break;case Rx:p=ST;break;case"scroll":p=nT;break;case"wheel":p=ET;break;case"copy":case"cut":case"paste":p=cT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dg}var M=(e&4)!==0,m=!M&&t==="scroll",h=M?f!==null?f+"Capture":null:f;M=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=xo(v,h),S!=null&&M.push(Ao(v,S,x)))),m)break;v=v.return}0<M.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==ld&&(g=n.relatedTarget||n.fromElement)&&(Jr(g)||g[Ki]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Jr(g):null,g!==null&&(m=_s(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(M=ug,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=dg,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Gs(p),x=g==null?f:Gs(g),f=new M(S,v+"leave",p,n,u),f.target=m,f.relatedTarget=x,S=null,Jr(u)===c&&(M=new M(h,v+"enter",g,n,u),M.target=x,M.relatedTarget=m,S=M),m=S,p&&g)t:{for(M=p,h=g,v=0,x=M;x;x=Ms(x))v++;for(x=0,S=h;S;S=Ms(S))x++;for(;0<v-x;)M=Ms(M),v--;for(;0<x-v;)h=Ms(h),x--;for(;v--;){if(M===h||h!==null&&M===h.alternate)break t;M=Ms(M),h=Ms(h)}M=null}else M=null;p!==null&&Eg(d,f,p,M,!1),g!==null&&m!==null&&Eg(d,m,g,M,!0)}}e:{if(f=c?Gs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=PT;else if(mg(f))if(xx)T=IT;else{T=LT;var w=DT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=NT);if(T&&(T=T(t,c))){_x(d,T,n,u);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&id(f,"number",f.value)}switch(w=c?Gs(c):window,t){case"focusin":(mg(w)||w.contentEditable==="true")&&(Vs=w,md=c,oo=null);break;case"focusout":oo=md=Vs=null;break;case"mousedown":gd=!0;break;case"contextmenu":case"mouseup":case"dragend":gd=!1,yg(d,n,u);break;case"selectionchange":if(OT)break;case"keydown":case"keyup":yg(d,n,u)}var R;if(pp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ks?gx(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(mx&&n.locale!=="ko"&&(ks||_!=="onCompositionStart"?_==="onCompositionEnd"&&ks&&(R=px()):(xr=u,fp="value"in xr?xr.value:xr.textContent,ks=!0)),w=yc(c,_),0<w.length&&(_=new fg(_,t,null,n,u),d.push({event:_,listeners:w}),R?_.data=R:(R=vx(n),R!==null&&(_.data=R)))),(R=wT?AT(t,n):RT(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(u=new fg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=R))}bx(d,e)})}function Ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xo(t,n),s!=null&&i.unshift(Ao(t,s,r)),s=xo(t,e),s!=null&&i.push(Ao(t,s,r))),t=t.return}return i}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eg(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=xo(n,s),l!=null&&a.unshift(Ao(n,l,o))):r||(l=xo(n,s),l!=null&&a.push(Ao(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var zT=/\r\n?/g,GT=/\u0000|\uFFFD/g;function Tg(t){return(typeof t=="string"?t:""+t).replace(zT,`
`).replace(GT,"")}function dl(t,e,n){if(e=Tg(e),Tg(t)!==e&&n)throw Error(re(425))}function Sc(){}var vd=null,_d=null;function xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,HT=typeof clearTimeout=="function"?clearTimeout:void 0,wg=typeof Promise=="function"?Promise:void 0,WT=typeof queueMicrotask=="function"?queueMicrotask:typeof wg<"u"?function(t){return wg.resolve(null).then(t).catch(XT)}:yd;function XT(t){setTimeout(function(){throw t})}function Gu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Mo(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Aa=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Aa,Ro="__reactProps$"+Aa,Ki="__reactContainer$"+Aa,Sd="__reactEvents$"+Aa,YT="__reactListeners$"+Aa,qT="__reactHandles$"+Aa;function Jr(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ag(t);t!==null;){if(n=t[Ei])return n;t=Ag(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[Ei]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function nu(t){return t[Ro]||null}var Md=[],Hs=-1;function Fr(t){return{current:t}}function xt(t){0>Hs||(t.current=Md[Hs],Md[Hs]=null,Hs--)}function gt(t,e){Hs++,Md[Hs]=t.current,t.current=e}var Lr={},hn=Fr(Lr),En=Fr(!1),ls=Lr;function ua(t,e){var n=t.type.contextTypes;if(!n)return Lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Tn(t){return t=t.childContextTypes,t!=null}function Mc(){xt(En),xt(hn)}function Rg(t,e,n){if(hn.current!==Lr)throw Error(re(168));gt(hn,e),gt(En,n)}function Dx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,DE(t)||"Unknown",r));return At({},n,i)}function Ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,ls=hn.current,gt(hn,t),gt(En,En.current),!0}function Cg(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Dx(t,e,ls),i.__reactInternalMemoizedMergedChildContext=t,xt(En),xt(hn),gt(hn,t)):xt(En),gt(En,n)}var ki=null,iu=!1,Hu=!1;function Lx(t){ki===null?ki=[t]:ki.push(t)}function $T(t){iu=!0,Lx(t)}function Or(){if(!Hu&&ki!==null){Hu=!0;var t=0,e=ut;try{var n=ki;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ki=null,iu=!1}catch(r){throw ki!==null&&(ki=ki.slice(t+1)),ix(op,Or),r}finally{ut=e,Hu=!1}}return null}var Ws=[],Xs=0,Tc=null,wc=0,Wn=[],Xn=0,cs=null,Vi=1,zi="";function Yr(t,e){Ws[Xs++]=wc,Ws[Xs++]=Tc,Tc=t,wc=e}function Nx(t,e,n){Wn[Xn++]=Vi,Wn[Xn++]=zi,Wn[Xn++]=cs,cs=t;var i=Vi;t=zi;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Vi=1<<32-ui(e)+r|n<<r|i,zi=s+t}else Vi=1<<s|n<<r|i,zi=t}function gp(t){t.return!==null&&(Yr(t,1),Nx(t,1,0))}function vp(t){for(;t===Tc;)Tc=Ws[--Xs],Ws[Xs]=null,wc=Ws[--Xs],Ws[Xs]=null;for(;t===cs;)cs=Wn[--Xn],Wn[Xn]=null,zi=Wn[--Xn],Wn[Xn]=null,Vi=Wn[--Xn],Wn[Xn]=null}var Nn=null,Ln=null,St=!1,ai=null;function Ix(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Ln=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cs!==null?{id:Vi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Ln=null,!0):!1;default:return!1}}function Ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(St){var e=Ln;if(e){var n=e;if(!bg(t,e)){if(Ed(t))throw Error(re(418));e=Ar(n.nextSibling);var i=Nn;e&&bg(t,e)?Ix(i,n):(t.flags=t.flags&-4097|2,St=!1,Nn=t)}}else{if(Ed(t))throw Error(re(418));t.flags=t.flags&-4097|2,St=!1,Nn=t}}}function Pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function hl(t){if(t!==Nn)return!1;if(!St)return Pg(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xd(t.type,t.memoizedProps)),e&&(e=Ln)){if(Ed(t))throw Ux(),Error(re(418));for(;e;)Ix(t,e),e=Ar(e.nextSibling)}if(Pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Nn?Ar(t.stateNode.nextSibling):null;return!0}function Ux(){for(var t=Ln;t;)t=Ar(t.nextSibling)}function fa(){Ln=Nn=null,St=!1}function _p(t){ai===null?ai=[t]:ai.push(t)}var KT=nr.ReactCurrentBatchConfig;function Oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dg(t){var e=t._init;return e(t._payload)}function Fx(t){function e(h,v){if(t){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Pr(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,v,x,S){return v===null||v.tag!==6?(v=ju(x,h.mode,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,S){var T=x.type;return T===Bs?u(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===mr&&Dg(T)===v.type)?(S=r(v,x.props),S.ref=Oa(h,v,x),S.return=h,S):(S=ic(x.type,x.key,x.props,null,h.mode,S),S.ref=Oa(h,v,x),S.return=h,S)}function c(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Zu(x,h.mode,S),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function u(h,v,x,S,T){return v===null||v.tag!==7?(v=ss(x,h.mode,S,T),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ju(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case il:return x=ic(v.type,v.key,v.props,null,h.mode,x),x.ref=Oa(h,null,v),x.return=h,x;case Os:return v=Zu(v,h.mode,x),v.return=h,v;case mr:var S=v._init;return d(h,S(v._payload),x)}if(Ka(v)||La(v))return v=ss(v,h.mode,x,null),v.return=h,v;pl(h,v)}return null}function f(h,v,x,S){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:o(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case il:return x.key===T?l(h,v,x,S):null;case Os:return x.key===T?c(h,v,x,S):null;case mr:return T=x._init,f(h,v,T(x._payload),S)}if(Ka(x)||La(x))return T!==null?null:u(h,v,x,S,null);pl(h,x)}return null}function p(h,v,x,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,o(v,h,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case il:return h=h.get(S.key===null?x:S.key)||null,l(v,h,S,T);case Os:return h=h.get(S.key===null?x:S.key)||null,c(v,h,S,T);case mr:var w=S._init;return p(h,v,x,w(S._payload),T)}if(Ka(S)||La(S))return h=h.get(x)||null,u(v,h,S,T,null);pl(v,S)}return null}function g(h,v,x,S){for(var T=null,w=null,R=v,_=v=0,A=null;R!==null&&_<x.length;_++){R.index>_?(A=R,R=null):A=R.sibling;var b=f(h,R,x[_],S);if(b===null){R===null&&(R=A);break}t&&R&&b.alternate===null&&e(h,R),v=s(b,v,_),w===null?T=b:w.sibling=b,w=b,R=A}if(_===x.length)return n(h,R),St&&Yr(h,_),T;if(R===null){for(;_<x.length;_++)R=d(h,x[_],S),R!==null&&(v=s(R,v,_),w===null?T=R:w.sibling=R,w=R);return St&&Yr(h,_),T}for(R=i(h,R);_<x.length;_++)A=p(R,h,_,x[_],S),A!==null&&(t&&A.alternate!==null&&R.delete(A.key===null?_:A.key),v=s(A,v,_),w===null?T=A:w.sibling=A,w=A);return t&&R.forEach(function(D){return e(h,D)}),St&&Yr(h,_),T}function M(h,v,x,S){var T=La(x);if(typeof T!="function")throw Error(re(150));if(x=T.call(x),x==null)throw Error(re(151));for(var w=T=null,R=v,_=v=0,A=null,b=x.next();R!==null&&!b.done;_++,b=x.next()){R.index>_?(A=R,R=null):A=R.sibling;var D=f(h,R,b.value,S);if(D===null){R===null&&(R=A);break}t&&R&&D.alternate===null&&e(h,R),v=s(D,v,_),w===null?T=D:w.sibling=D,w=D,R=A}if(b.done)return n(h,R),St&&Yr(h,_),T;if(R===null){for(;!b.done;_++,b=x.next())b=d(h,b.value,S),b!==null&&(v=s(b,v,_),w===null?T=b:w.sibling=b,w=b);return St&&Yr(h,_),T}for(R=i(h,R);!b.done;_++,b=x.next())b=p(R,h,_,b.value,S),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?_:b.key),v=s(b,v,_),w===null?T=b:w.sibling=b,w=b);return t&&R.forEach(function(B){return e(h,B)}),St&&Yr(h,_),T}function m(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===Bs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case il:e:{for(var T=x.key,w=v;w!==null;){if(w.key===T){if(T=x.type,T===Bs){if(w.tag===7){n(h,w.sibling),v=r(w,x.props.children),v.return=h,h=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===mr&&Dg(T)===w.type){n(h,w.sibling),v=r(w,x.props),v.ref=Oa(h,w,x),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}x.type===Bs?(v=ss(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=ic(x.type,x.key,x.props,null,h.mode,S),S.ref=Oa(h,v,x),S.return=h,h=S)}return a(h);case Os:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Zu(x,h.mode,S),v.return=h,h=v}return a(h);case mr:return w=x._init,m(h,v,w(x._payload),S)}if(Ka(x))return g(h,v,x,S);if(La(x))return M(h,v,x,S);pl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,x),v.return=h,h=v):(n(h,v),v=ju(x,h.mode,S),v.return=h,h=v),a(h)):n(h,v)}return m}var da=Fx(!0),Ox=Fx(!1),Ac=Fr(null),Rc=null,Ys=null,xp=null;function yp(){xp=Ys=Rc=null}function Sp(t){var e=Ac.current;xt(Ac),t._currentValue=e}function wd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ra(t,e){Rc=t,xp=Ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function Zn(t){var e=t._currentValue;if(xp!==t)if(t={context:t,memoizedValue:e,next:null},Ys===null){if(Rc===null)throw Error(re(308));Ys=t,Rc.dependencies={lanes:0,firstContext:t}}else Ys=Ys.next=t;return e}var es=null;function Mp(t){es===null?es=[t]:es.push(t)}function Bx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function Ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lp(t,n)}}function Lg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cc(t,e,n,i){var r=t.updateQueue;gr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,M=o;switch(f=e,p=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=At({},d,f);break e;case 2:gr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);fs|=a,t.lanes=a,t.memoizedState=d}}function Ng(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Wo={},Ri=Fr(Wo),Co=Fr(Wo),bo=Fr(Wo);function ts(t){if(t===Wo)throw Error(re(174));return t}function Tp(t,e){switch(gt(bo,e),gt(Co,t),gt(Ri,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sd(e,t)}xt(Ri),gt(Ri,e)}function ha(){xt(Ri),xt(Co),xt(bo)}function Vx(t){ts(bo.current);var e=ts(Ri.current),n=sd(e,t.type);e!==n&&(gt(Co,t),gt(Ri,n))}function wp(t){Co.current===t&&(xt(Ri),xt(Co))}var Et=Fr(0);function bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wu=[];function Ap(){for(var t=0;t<Wu.length;t++)Wu[t]._workInProgressVersionPrimary=null;Wu.length=0}var Ql=nr.ReactCurrentDispatcher,Xu=nr.ReactCurrentBatchConfig,us=0,wt=null,Gt=null,qt=null,Pc=!1,lo=!1,Po=0,jT=0;function sn(){throw Error(re(321))}function Rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Cp(t,e,n,i,r,s){if(us=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?e1:t1,t=n(i,r),lo){s=0;do{if(lo=!1,Po=0,25<=s)throw Error(re(301));s+=1,qt=Gt=null,e.updateQueue=null,Ql.current=n1,t=n(i,r)}while(lo)}if(Ql.current=Dc,e=Gt!==null&&Gt.next!==null,us=0,qt=Gt=wt=null,Pc=!1,e)throw Error(re(300));return t}function bp(){var t=Po!==0;return Po=0,t}function Si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?wt.memoizedState=qt=t:qt=qt.next=t,qt}function Qn(){if(Gt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=qt===null?wt.memoizedState:qt.next;if(e!==null)qt=e,Gt=t;else{if(t===null)throw Error(re(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},qt===null?wt.memoizedState=qt=t:qt=qt.next=t}return qt}function Do(t,e){return typeof e=="function"?e(t):e}function Yu(t){var e=Qn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((us&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,wt.lanes|=u,fs|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,hi(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,fs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qu(t){var e=Qn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);hi(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zx(){}function Gx(t,e){var n=wt,i=Qn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Pp(Xx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,Lo(9,Wx.bind(null,n,i,r,e),void 0,null),Kt===null)throw Error(re(349));us&30||Hx(n,e,r)}return r}function Hx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wx(t,e,n,i){e.value=n,e.getSnapshot=i,Yx(e)&&qx(t)}function Xx(t,e,n){return n(function(){Yx(e)&&qx(t)})}function Yx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function qx(t){var e=ji(t,1);e!==null&&fi(e,t,1,-1)}function Ig(t){var e=Si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=JT.bind(null,wt,t),[e.memoizedState,t]}function Lo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $x(){return Qn().memoizedState}function Jl(t,e,n,i){var r=Si();wt.flags|=t,r.memoizedState=Lo(1|e,n,void 0,i===void 0?null:i)}function ru(t,e,n,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var a=Gt.memoizedState;if(s=a.destroy,i!==null&&Rp(i,a.deps)){r.memoizedState=Lo(e,n,s,i);return}}wt.flags|=t,r.memoizedState=Lo(1|e,n,s,i)}function Ug(t,e){return Jl(8390656,8,t,e)}function Pp(t,e){return ru(2048,8,t,e)}function Kx(t,e){return ru(4,2,t,e)}function jx(t,e){return ru(4,4,t,e)}function Zx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qx(t,e,n){return n=n!=null?n.concat([t]):null,ru(4,4,Zx.bind(null,e,t),n)}function Dp(){}function Jx(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ey(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ty(t,e,n){return us&21?(hi(n,e)||(n=ax(),wt.lanes|=n,fs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function ZT(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Xu.transition;Xu.transition={};try{t(!1),e()}finally{ut=n,Xu.transition=i}}function ny(){return Qn().memoizedState}function QT(t,e,n){var i=br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},iy(t))ry(e,n);else if(n=Bx(t,e,n,i),n!==null){var r=gn();fi(n,t,i,r),sy(n,e,i)}}function JT(t,e,n){var i=br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(iy(t))ry(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,hi(o,a)){var l=e.interleaved;l===null?(r.next=r,Mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Bx(t,e,r,i),n!==null&&(r=gn(),fi(n,t,i,r),sy(n,e,i))}}function iy(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function ry(t,e){lo=Pc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lp(t,n)}}var Dc={readContext:Zn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},e1={readContext:Zn,useCallback:function(t,e){return Si().memoizedState=[t,e===void 0?null:e],t},useContext:Zn,useEffect:Ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,Zx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=Si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=QT.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=Si();return t={current:t},e.memoizedState=t},useState:Ig,useDebugValue:Dp,useDeferredValue:function(t){return Si().memoizedState=t},useTransition:function(){var t=Ig(!1),e=t[0];return t=ZT.bind(null,t[1]),Si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=Si();if(St){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Kt===null)throw Error(re(349));us&30||Hx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ug(Xx.bind(null,i,s,t),[t]),i.flags|=2048,Lo(9,Wx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Si(),e=Kt.identifierPrefix;if(St){var n=zi,i=Vi;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},t1={readContext:Zn,useCallback:Jx,useContext:Zn,useEffect:Pp,useImperativeHandle:Qx,useInsertionEffect:Kx,useLayoutEffect:jx,useMemo:ey,useReducer:Yu,useRef:$x,useState:function(){return Yu(Do)},useDebugValue:Dp,useDeferredValue:function(t){var e=Qn();return ty(e,Gt.memoizedState,t)},useTransition:function(){var t=Yu(Do)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:zx,useSyncExternalStore:Gx,useId:ny,unstable_isNewReconciler:!1},n1={readContext:Zn,useCallback:Jx,useContext:Zn,useEffect:Pp,useImperativeHandle:Qx,useInsertionEffect:Kx,useLayoutEffect:jx,useMemo:ey,useReducer:qu,useRef:$x,useState:function(){return qu(Do)},useDebugValue:Dp,useDeferredValue:function(t){var e=Qn();return Gt===null?e.memoizedState=t:ty(e,Gt.memoizedState,t)},useTransition:function(){var t=qu(Do)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:zx,useSyncExternalStore:Gx,useId:ny,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ad(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var su={isMounted:function(t){return(t=t._reactInternals)?_s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=br(t),s=Hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(fi(e,t,r,i),Zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=br(t),s=Hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(fi(e,t,r,i),Zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=br(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(fi(e,t,i,n),Zl(e,t,i))}};function Fg(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!To(n,i)||!To(r,s):!0}function ay(t,e,n){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=Tn(e)?ls:hn.current,i=e.contextTypes,s=(i=i!=null)?ua(t,r):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Og(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&su.enqueueReplaceState(e,e.state,null)}function Rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ep(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=Tn(e)?ls:hn.current,r.context=ua(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ad(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&su.enqueueReplaceState(r,r.state,null),Cc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function pa(t,e){try{var n="",i=e;do n+=PE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var i1=typeof WeakMap=="function"?WeakMap:Map;function oy(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nc||(Nc=!0,Bd=i),Cd(t,e)},n}function ly(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cd(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Bg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new i1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=v1.bind(null,t,e,n),e.then(t,t))}function kg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var r1=nr.ReactCurrentOwner,Mn=!1;function mn(t,e,n,i){e.child=t===null?Ox(e,null,n,i):da(e,t.child,n,i)}function zg(t,e,n,i,r){n=n.render;var s=e.ref;return ra(e,r),i=Cp(t,e,n,i,s,r),n=bp(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&n&&gp(e),e.flags|=1,mn(t,e,i,r),e.child)}function Gg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cy(t,e,s,i,r)):(t=ic(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(a,i)&&t.ref===e.ref)return Zi(t,e,r)}return e.flags|=1,t=Pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function cy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(To(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,Zi(t,e,r)}return bd(t,e,n,i,r)}function uy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt($s,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt($s,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt($s,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt($s,Pn),Pn|=i;return mn(t,e,r,n),e.child}function fy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bd(t,e,n,i,r){var s=Tn(n)?ls:hn.current;return s=ua(e,s),ra(e,r),n=Cp(t,e,n,i,s,r),i=bp(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Zi(t,e,r)):(St&&i&&gp(e),e.flags|=1,mn(t,e,n,r),e.child)}function Hg(t,e,n,i,r){if(Tn(n)){var s=!0;Ec(e)}else s=!1;if(ra(e,r),e.stateNode===null)ec(t,e),ay(e,n,i),Rd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=Tn(n)?ls:hn.current,c=ua(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Og(e,a,i,c),gr=!1;var f=e.memoizedState;a.state=f,Cc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||En.current||gr?(typeof u=="function"&&(Ad(e,n,u,i),l=e.memoizedState),(o=gr||Fg(e,n,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,kx(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ri(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=Tn(n)?ls:hn.current,l=ua(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Og(e,a,i,l),gr=!1,f=e.memoizedState,a.state=f,Cc(e,i,a,r);var g=e.memoizedState;o!==d||f!==g||En.current||gr?(typeof p=="function"&&(Ad(e,n,p,i),g=e.memoizedState),(c=gr||Fg(e,n,c,i,f,g,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Pd(t,e,n,i,s,r)}function Pd(t,e,n,i,r,s){fy(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Cg(e,n,!1),Zi(t,e,s);i=e.stateNode,r1.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=da(e,t.child,null,s),e.child=da(e,null,o,s)):mn(t,e,o,s),e.memoizedState=i.state,r&&Cg(e,n,!0),e.child}function dy(t){var e=t.stateNode;e.pendingContext?Rg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rg(t,e.context,!1),Tp(t,e.containerInfo)}function Wg(t,e,n,i,r){return fa(),_p(r),e.flags|=256,mn(t,e,n,i),e.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function Ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function hy(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(Et,r&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=lu(a,i,0,null),t=ss(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ld(n),e.memoizedState=Dd,t):Lp(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return s1(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Pr(o,s):(s=ss(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ld(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Dd,i}return s=t.child,t=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lp(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,i){return i!==null&&_p(i),da(e,t.child,null,n),t=Lp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function s1(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=$u(Error(re(422))),ml(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lu({mode:"visible",children:i.children},r,0,null),s=ss(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&da(e,t.child,null,a),e.child.memoizedState=Ld(a),e.memoizedState=Dd,s);if(!(e.mode&1))return ml(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=$u(s,i,void 0),ml(t,e,a,i)}if(o=(a&t.childLanes)!==0,Mn||o){if(i=Kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),fi(i,t,r,-1))}return Bp(),i=$u(Error(re(421))),ml(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Ar(r.nextSibling),Nn=e,St=!0,ai=null,t!==null&&(Wn[Xn++]=Vi,Wn[Xn++]=zi,Wn[Xn++]=cs,Vi=t.id,zi=t.overflow,cs=e),e=Lp(e,i.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wd(t.return,e,n)}function Ku(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function py(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ku(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ku(e,!0,n,null,s);break;case"together":Ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function a1(t,e,n){switch(e.tag){case 3:dy(e),fa();break;case 5:Vx(e);break;case 1:Tn(e.type)&&Ec(e);break;case 4:Tp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?hy(t,e,n):(gt(Et,Et.current&1),t=Zi(t,e,n),t!==null?t.sibling:null);gt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return py(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,uy(t,e,n)}return Zi(t,e,n)}var my,Nd,gy,vy;my=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nd=function(){};gy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Ri.current);var s=null;switch(n){case"input":r=td(t,r),i=td(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=rd(t,r),i=rd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sc)}ad(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};vy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ba(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function o1(t,e,n){var i=e.pendingProps;switch(vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return Tn(e.type)&&Mc(),an(e),null;case 3:return i=e.stateNode,ha(),xt(En),xt(hn),Ap(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(zd(ai),ai=null))),Nd(t,e),an(e),null;case 5:wp(e);var r=ts(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)gy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return an(e),null}if(t=ts(Ri.current),hl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Za.length;r++)_t(Za[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":eg(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":ng(i,s),_t("invalid",i)}ad(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&dl(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&dl(i.textContent,o,t),r=["children",""+o]):vo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&_t("scroll",i)}switch(n){case"input":rl(i),tg(i,s,!0);break;case"textarea":rl(i),ig(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ei]=e,t[Ro]=i,my(t,e,!1,!1),e.stateNode=t;e:{switch(a=od(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Za.length;r++)_t(Za[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":eg(t,i),r=td(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),_t("invalid",t);break;case"textarea":ng(t,i),r=rd(t,i),_t("invalid",t);break;default:r=i}ad(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?$_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Y_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_o(t,l):typeof l=="number"&&_o(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&np(t,s,l,a))}switch(n){case"input":rl(t),tg(t,i,!1);break;case"textarea":rl(t),ig(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ea(t,!!i.multiple,s,!1):i.defaultValue!=null&&ea(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)vy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=ts(bo.current),ts(Ri.current),hl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:dl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return an(e),null;case 13:if(xt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Ln!==null&&e.mode&1&&!(e.flags&128))Ux(),fa(),e.flags|=98560,s=!1;else if(s=hl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Ei]=e}else fa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else ai!==null&&(zd(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ht===0&&(Ht=3):Bp())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return ha(),Nd(t,e),t===null&&wo(e.stateNode.containerInfo),an(e),null;case 10:return Sp(e.type._context),an(e),null;case 17:return Tn(e.type)&&Mc(),an(e),null;case 19:if(xt(Et),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ba(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=bc(t),a!==null){for(e.flags|=128,Ba(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Bt()>ma&&(e.flags|=128,i=!0,Ba(s,!1),e.lanes=4194304)}else{if(!i)if(t=bc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return an(e),null}else 2*Bt()-s.renderingStartTime>ma&&n!==1073741824&&(e.flags|=128,i=!0,Ba(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Bt(),e.sibling=null,n=Et.current,gt(Et,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return Op(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function l1(t,e){switch(vp(e),e.tag){case 1:return Tn(e.type)&&Mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ha(),xt(En),xt(hn),Ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wp(e),null;case 13:if(xt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));fa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(Et),null;case 4:return ha(),null;case 10:return Sp(e.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var gl=!1,un=!1,c1=typeof WeakSet=="function"?WeakSet:Set,Me=null;function qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function Id(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var Yg=!1;function u1(t,e){if(vd=_c,t=Mx(),mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_d={focusedElem:t,selectionRange:n},_c=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?M:ri(e.type,M),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){Pt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return g=Yg,Yg=!1,g}function co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Id(e,n,s)}r=r.next}while(r!==i)}}function au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ud(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _y(t){var e=t.alternate;e!==null&&(t.alternate=null,_y(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[Ro],delete e[Sd],delete e[YT],delete e[qT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xy(t){return t.tag===5||t.tag===3||t.tag===4}function qg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sc));else if(i!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}function Od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}var Zt=null,si=!1;function or(t,e,n){for(n=n.child;n!==null;)yy(t,e,n),n=n.sibling}function yy(t,e,n){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:un||qs(n,e);case 6:var i=Zt,r=si;Zt=null,or(t,e,n),Zt=i,si=r,Zt!==null&&(si?(t=Zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(si?(t=Zt,n=n.stateNode,t.nodeType===8?Gu(t.parentNode,n):t.nodeType===1&&Gu(t,n),Mo(t)):Gu(Zt,n.stateNode));break;case 4:i=Zt,r=si,Zt=n.stateNode.containerInfo,si=!0,or(t,e,n),Zt=i,si=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Id(n,e,a),r=r.next}while(r!==i)}or(t,e,n);break;case 1:if(!un&&(qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Pt(n,e,o)}or(t,e,n);break;case 21:or(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,or(t,e,n),un=i):or(t,e,n);break;default:or(t,e,n)}}function $g(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new c1),e.forEach(function(i){var r=x1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Zt=o.stateNode,si=!1;break e;case 3:Zt=o.stateNode.containerInfo,si=!0;break e;case 4:Zt=o.stateNode.containerInfo,si=!0;break e}o=o.return}if(Zt===null)throw Error(re(160));yy(s,a,r),Zt=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sy(e,t),e=e.sibling}function Sy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),_i(t),i&4){try{co(3,t,t.return),au(3,t)}catch(M){Pt(t,t.return,M)}try{co(5,t,t.return)}catch(M){Pt(t,t.return,M)}}break;case 1:Jn(e,t),_i(t),i&512&&n!==null&&qs(n,n.return);break;case 5:if(Jn(e,t),_i(t),i&512&&n!==null&&qs(n,n.return),t.flags&32){var r=t.stateNode;try{_o(r,"")}catch(M){Pt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&H_(r,s),od(o,a);var c=od(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?$_(r,d):u==="dangerouslySetInnerHTML"?Y_(r,d):u==="children"?_o(r,d):np(r,u,d,c)}switch(o){case"input":nd(r,s);break;case"textarea":W_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ea(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ea(r,!!s.multiple,s.defaultValue,!0):ea(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(M){Pt(t,t.return,M)}}break;case 6:if(Jn(e,t),_i(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Pt(t,t.return,M)}}break;case 3:if(Jn(e,t),_i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(M){Pt(t,t.return,M)}break;case 4:Jn(e,t),_i(t);break;case 13:Jn(e,t),_i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Up=Bt())),i&4&&$g(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(un=(c=un)||u,Jn(e,t),un=c):Jn(e,t),_i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Me=t,u=t.child;u!==null;){for(d=Me=u;Me!==null;){switch(f=Me,p=f.child,f.tag){case 0:case 11:case 14:case 15:co(4,f,f.return);break;case 1:qs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(M){Pt(i,n,M)}}break;case 5:qs(f,f.return);break;case 22:if(f.memoizedState!==null){jg(d);continue}}p!==null?(p.return=f,Me=p):jg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=q_("display",a))}catch(M){Pt(t,t.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Pt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Jn(e,t),_i(t),i&4&&$g(t);break;case 21:break;default:Jn(e,t),_i(t)}}function _i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(xy(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_o(r,""),i.flags&=-33);var s=qg(t);Od(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=qg(t);Fd(t,o,a);break;default:throw Error(re(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function f1(t,e,n){Me=t,My(t)}function My(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||gl;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||un;o=gl;var c=un;if(gl=a,(un=l)&&!c)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?Zg(r):l!==null?(l.return=a,Me=l):Zg(r);for(;s!==null;)Me=s,My(s),s=s.sibling;Me=r,gl=o,un=c}Kg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Kg(t)}}function Kg(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||au(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ng(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ng(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Mo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}un||e.flags&512&&Ud(e)}catch(f){Pt(e,e.return,f)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function jg(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Zg(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{au(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{Ud(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{Ud(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var d1=Math.ceil,Lc=nr.ReactCurrentDispatcher,Np=nr.ReactCurrentOwner,Kn=nr.ReactCurrentBatchConfig,tt=0,Kt=null,Vt=null,en=0,Pn=0,$s=Fr(0),Ht=0,No=null,fs=0,ou=0,Ip=0,uo=null,Sn=null,Up=0,ma=1/0,Bi=null,Nc=!1,Bd=null,Cr=null,vl=!1,yr=null,Ic=0,fo=0,kd=null,tc=-1,nc=0;function gn(){return tt&6?Bt():tc!==-1?tc:tc=Bt()}function br(t){return t.mode&1?tt&2&&en!==0?en&-en:KT.transition!==null?(nc===0&&(nc=ax()),nc):(t=ut,t!==0||(t=window.event,t=t===void 0?16:hx(t.type)),t):1}function fi(t,e,n,i){if(50<fo)throw fo=0,kd=null,Error(re(185));zo(t,n,i),(!(tt&2)||t!==Kt)&&(t===Kt&&(!(tt&2)&&(ou|=n),Ht===4&&_r(t,en)),wn(t,i),n===1&&tt===0&&!(e.mode&1)&&(ma=Bt()+500,iu&&Or()))}function wn(t,e){var n=t.callbackNode;KE(t,e);var i=vc(t,t===Kt?en:0);if(i===0)n!==null&&ag(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ag(n),e===1)t.tag===0?$T(Qg.bind(null,t)):Lx(Qg.bind(null,t)),WT(function(){!(tt&6)&&Or()}),n=null;else{switch(ox(i)){case 1:n=op;break;case 4:n=rx;break;case 16:n=gc;break;case 536870912:n=sx;break;default:n=gc}n=Py(n,Ey.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ey(t,e){if(tc=-1,nc=0,tt&6)throw Error(re(327));var n=t.callbackNode;if(sa()&&t.callbackNode!==n)return null;var i=vc(t,t===Kt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Uc(t,i);else{e=i;var r=tt;tt|=2;var s=wy();(Kt!==t||en!==e)&&(Bi=null,ma=Bt()+500,rs(t,e));do try{m1();break}catch(o){Ty(t,o)}while(!0);yp(),Lc.current=s,tt=r,Vt!==null?e=0:(Kt=null,en=0,e=Ht)}if(e!==0){if(e===2&&(r=dd(t),r!==0&&(i=r,e=Vd(t,r))),e===1)throw n=No,rs(t,0),_r(t,i),wn(t,Bt()),n;if(e===6)_r(t,i);else{if(r=t.current.alternate,!(i&30)&&!h1(r)&&(e=Uc(t,i),e===2&&(s=dd(t),s!==0&&(i=s,e=Vd(t,s))),e===1))throw n=No,rs(t,0),_r(t,i),wn(t,Bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:qr(t,Sn,Bi);break;case 3:if(_r(t,i),(i&130023424)===i&&(e=Up+500-Bt(),10<e)){if(vc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yd(qr.bind(null,t,Sn,Bi),e);break}qr(t,Sn,Bi);break;case 4:if(_r(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ui(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*d1(i/1960))-i,10<i){t.timeoutHandle=yd(qr.bind(null,t,Sn,Bi),i);break}qr(t,Sn,Bi);break;case 5:qr(t,Sn,Bi);break;default:throw Error(re(329))}}}return wn(t,Bt()),t.callbackNode===n?Ey.bind(null,t):null}function Vd(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=Uc(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&zd(e)),t}function zd(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function h1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _r(t,e){for(e&=~Ip,e&=~ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function Qg(t){if(tt&6)throw Error(re(327));sa();var e=vc(t,0);if(!(e&1))return wn(t,Bt()),null;var n=Uc(t,e);if(t.tag!==0&&n===2){var i=dd(t);i!==0&&(e=i,n=Vd(t,i))}if(n===1)throw n=No,rs(t,0),_r(t,e),wn(t,Bt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,Sn,Bi),wn(t,Bt()),null}function Fp(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(ma=Bt()+500,iu&&Or())}}function ds(t){yr!==null&&yr.tag===0&&!(tt&6)&&sa();var e=tt;tt|=1;var n=Kn.transition,i=ut;try{if(Kn.transition=null,ut=1,t)return t()}finally{ut=i,Kn.transition=n,tt=e,!(tt&6)&&Or()}}function Op(){Pn=$s.current,xt($s)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HT(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(vp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mc();break;case 3:ha(),xt(En),xt(hn),Ap();break;case 5:wp(i);break;case 4:ha();break;case 13:xt(Et);break;case 19:xt(Et);break;case 10:Sp(i.type._context);break;case 22:case 23:Op()}n=n.return}if(Kt=t,Vt=t=Pr(t.current,null),en=Pn=e,Ht=0,No=null,Ip=ou=fs=0,Sn=uo=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}es=null}return t}function Ty(t,e){do{var n=Vt;try{if(yp(),Ql.current=Dc,Pc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pc=!1}if(us=0,qt=Gt=wt=null,lo=!1,Po=0,Np.current=null,n===null||n.return===null){Ht=1,No=e,Vt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=en,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=kg(a);if(p!==null){p.flags&=-257,Vg(p,a,o,s,e),p.mode&1&&Bg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var M=new Set;M.add(l),e.updateQueue=M}else g.add(l);break e}else{if(!(e&1)){Bg(s,c,e),Bp();break e}l=Error(re(426))}}else if(St&&o.mode&1){var m=kg(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vg(m,a,o,s,e),_p(pa(l,o));break e}}s=l=pa(l,o),Ht!==4&&(Ht=2),uo===null?uo=[s]:uo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=oy(s,l,e);Lg(s,h);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cr===null||!Cr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ly(s,o,e);Lg(s,S);break e}}s=s.return}while(s!==null)}Ry(n)}catch(T){e=T,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function wy(){var t=Lc.current;return Lc.current=Dc,t===null?Dc:t}function Bp(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Kt===null||!(fs&268435455)&&!(ou&268435455)||_r(Kt,en)}function Uc(t,e){var n=tt;tt|=2;var i=wy();(Kt!==t||en!==e)&&(Bi=null,rs(t,e));do try{p1();break}catch(r){Ty(t,r)}while(!0);if(yp(),tt=n,Lc.current=i,Vt!==null)throw Error(re(261));return Kt=null,en=0,Ht}function p1(){for(;Vt!==null;)Ay(Vt)}function m1(){for(;Vt!==null&&!VE();)Ay(Vt)}function Ay(t){var e=by(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?Ry(t):Vt=e,Np.current=null}function Ry(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=l1(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,Vt=null;return}}else if(n=o1(n,e,Pn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Ht===0&&(Ht=5)}function qr(t,e,n){var i=ut,r=Kn.transition;try{Kn.transition=null,ut=1,g1(t,e,n,i)}finally{Kn.transition=r,ut=i}return null}function g1(t,e,n,i){do sa();while(yr!==null);if(tt&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jE(t,s),t===Kt&&(Vt=Kt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,Py(gc,function(){return sa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var a=ut;ut=1;var o=tt;tt|=4,Np.current=null,u1(t,n),Sy(n,t),FT(_d),_c=!!vd,_d=vd=null,t.current=n,f1(n),zE(),tt=o,ut=a,Kn.transition=s}else t.current=n;if(vl&&(vl=!1,yr=t,Ic=r),s=t.pendingLanes,s===0&&(Cr=null),WE(n.stateNode),wn(t,Bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nc)throw Nc=!1,t=Bd,Bd=null,t;return Ic&1&&t.tag!==0&&sa(),s=t.pendingLanes,s&1?t===kd?fo++:(fo=0,kd=t):fo=0,Or(),null}function sa(){if(yr!==null){var t=ox(Ic),e=Kn.transition,n=ut;try{if(Kn.transition=null,ut=16>t?16:t,yr===null)var i=!1;else{if(t=yr,yr=null,Ic=0,tt&6)throw Error(re(331));var r=tt;for(tt|=4,Me=t.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:co(8,u,s)}var d=u.child;if(d!==null)d.return=u,Me=d;else for(;Me!==null;){u=Me;var f=u.sibling,p=u.return;if(_y(u),u===c){Me=null;break}if(f!==null){f.return=p,Me=f;break}Me=p}}}var g=s.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Me=h;break e}Me=s.return}}var v=t.current;for(Me=v;Me!==null;){a=Me;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Me=x;else e:for(a=v;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:au(9,o)}}catch(T){Pt(o,o.return,T)}if(o===a){Me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Me=S;break e}Me=o.return}}if(tt=r,Or(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(Qc,t)}catch{}i=!0}return i}finally{ut=n,Kn.transition=e}}return!1}function Jg(t,e,n){e=pa(n,e),e=oy(t,e,1),t=Rr(t,e,1),e=gn(),t!==null&&(zo(t,1,e),wn(t,e))}function Pt(t,e,n){if(t.tag===3)Jg(t,t,n);else for(;e!==null;){if(e.tag===3){Jg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=pa(n,t),t=ly(e,t,1),e=Rr(e,t,1),t=gn(),e!==null&&(zo(e,1,t),wn(e,t));break}}e=e.return}}function v1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Kt===t&&(en&n)===n&&(Ht===4||Ht===3&&(en&130023424)===en&&500>Bt()-Up?rs(t,0):Ip|=n),wn(t,e)}function Cy(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=gn();t=ji(t,e),t!==null&&(zo(t,e,n),wn(t,n))}function _1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cy(t,n)}function x1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Cy(t,n)}var by;by=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||En.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,a1(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,St&&e.flags&1048576&&Nx(e,wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ec(t,e),t=e.pendingProps;var r=ua(e,hn.current);ra(e,n),r=Cp(null,e,i,t,r,n);var s=bp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tn(i)?(s=!0,Ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ep(e),r.updater=su,e.stateNode=r,r._reactInternals=e,Rd(e,i,t,n),e=Pd(null,e,i,!0,s,n)):(e.tag=0,St&&s&&gp(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ec(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=S1(i),t=ri(i,t),r){case 0:e=bd(null,e,i,t,n);break e;case 1:e=Hg(null,e,i,t,n);break e;case 11:e=zg(null,e,i,t,n);break e;case 14:e=Gg(null,e,i,ri(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),bd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Hg(t,e,i,r,n);case 3:e:{if(dy(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kx(t,e),Cc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=pa(Error(re(423)),e),e=Wg(t,e,i,n,r);break e}else if(i!==r){r=pa(Error(re(424)),e),e=Wg(t,e,i,n,r);break e}else for(Ln=Ar(e.stateNode.containerInfo.firstChild),Nn=e,St=!0,ai=null,n=Ox(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fa(),i===r){e=Zi(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return Vx(e),t===null&&Td(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,xd(i,r)?a=null:s!==null&&xd(i,s)&&(e.flags|=32),fy(t,e),mn(t,e,a,n),e.child;case 6:return t===null&&Td(e),null;case 13:return hy(t,e,n);case 4:return Tp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=da(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),zg(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(Ac,i._currentValue),i._currentValue=a,s!==null)if(hi(s.value,a)){if(s.children===r.children&&!En.current){e=Zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),wd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ra(e,n),r=Zn(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),Gg(t,e,i,r,n);case 15:return cy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),ec(t,e),e.tag=1,Tn(i)?(t=!0,Ec(e)):t=!1,ra(e,n),ay(e,i,r),Rd(e,i,r,n),Pd(null,e,i,!0,t,n);case 19:return py(t,e,n);case 22:return uy(t,e,n)}throw Error(re(156,e.tag))};function Py(t,e){return ix(t,e)}function y1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new y1(t,e,n,i)}function kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S1(t){if(typeof t=="function")return kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rp)return 11;if(t===sp)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")kp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Bs:return ss(n.children,r,s,e);case ip:a=8,r|=8;break;case Zf:return t=$n(12,n,e,r|2),t.elementType=Zf,t.lanes=s,t;case Qf:return t=$n(13,n,e,r),t.elementType=Qf,t.lanes=s,t;case Jf:return t=$n(19,n,e,r),t.elementType=Jf,t.lanes=s,t;case V_:return lu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B_:a=10;break e;case k_:a=9;break e;case rp:a=11;break e;case sp:a=14;break e;case mr:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=$n(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ss(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function lu(t,e,n,i){return t=$n(22,t,i,e),t.elementType=V_,t.lanes=n,t.stateNode={isHidden:!1},t}function ju(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function Zu(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function M1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vp(t,e,n,i,r,s,a,o,l){return t=new M1(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ep(s),t}function E1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Dy(t){if(!t)return Lr;t=t._reactInternals;e:{if(_s(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Tn(n))return Dx(t,n,e)}return e}function Ly(t,e,n,i,r,s,a,o,l){return t=Vp(n,i,!0,t,r,s,a,o,l),t.context=Dy(null),n=t.current,i=gn(),r=br(n),s=Hi(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,zo(t,r,i),wn(t,i),t}function cu(t,e,n,i){var r=e.current,s=gn(),a=br(r);return n=Dy(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,a),t!==null&&(fi(t,r,a,s),Zl(t,r,a)),a}function Fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ev(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zp(t,e){ev(t,e),(t=t.alternate)&&ev(t,e)}function T1(){return null}var Ny=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gp(t){this._internalRoot=t}uu.prototype.render=Gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));cu(t,e,null,null)};uu.prototype.unmount=Gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ds(function(){cu(null,t,null,null)}),e[Ki]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ux();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&dx(t)}};function Hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tv(){}function w1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fc(a);s.call(c)}}var a=Ly(e,i,t,0,null,!1,!1,"",tv);return t._reactRootContainer=a,t[Ki]=a.current,wo(t.nodeType===8?t.parentNode:t),ds(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Fc(l);o.call(c)}}var l=Vp(t,0,!1,null,null,!1,!1,"",tv);return t._reactRootContainer=l,t[Ki]=l.current,wo(t.nodeType===8?t.parentNode:t),ds(function(){cu(e,l,n,i)}),l}function du(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Fc(a);o.call(l)}}cu(e,a,t,r)}else a=w1(n,e,t,r,i);return Fc(a)}lx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ja(e.pendingLanes);n!==0&&(lp(e,n|1),wn(e,Bt()),!(tt&6)&&(ma=Bt()+500,Or()))}break;case 13:ds(function(){var i=ji(t,1);if(i!==null){var r=gn();fi(i,t,1,r)}}),zp(t,1)}};cp=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=gn();fi(e,t,134217728,n)}zp(t,134217728)}};cx=function(t){if(t.tag===13){var e=br(t),n=ji(t,e);if(n!==null){var i=gn();fi(n,t,e,i)}zp(t,e)}};ux=function(){return ut};fx=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};cd=function(t,e,n){switch(e){case"input":if(nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nu(i);if(!r)throw Error(re(90));G_(i),nd(i,r)}}}break;case"textarea":W_(t,n);break;case"select":e=n.value,e!=null&&ea(t,!!n.multiple,e,!1)}};Z_=Fp;Q_=ds;var A1={usingClientEntryPoint:!1,Events:[Ho,Gs,nu,K_,j_,Fp]},ka={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R1={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tx(t),t===null?null:t.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||T1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Qc=_l.inject(R1),Ai=_l}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A1;Bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(re(200));return E1(t,e,null,n)};Bn.createRoot=function(t,e){if(!Hp(t))throw Error(re(299));var n=!1,i="",r=Ny;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vp(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,wo(t.nodeType===8?t.parentNode:t),new Gp(e)};Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=tx(e),t=t===null?null:t.stateNode,t};Bn.flushSync=function(t){return ds(t)};Bn.hydrate=function(t,e,n){if(!fu(e))throw Error(re(200));return du(null,t,e,!0,n)};Bn.hydrateRoot=function(t,e,n){if(!Hp(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ny;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ly(e,null,t,1,n??null,r,!1,s,a),t[Ki]=e.current,wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uu(e)};Bn.render=function(t,e,n){if(!fu(e))throw Error(re(200));return du(null,t,e,!1,n)};Bn.unmountComponentAtNode=function(t){if(!fu(t))throw Error(re(40));return t._reactRootContainer?(ds(function(){du(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};Bn.unstable_batchedUpdates=Fp;Bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return du(t,e,n,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iy)}catch(t){console.error(t)}}Iy(),I_.exports=Bn;var C1=I_.exports,nv=C1;Kf.createRoot=nv.createRoot,Kf.hydrateRoot=nv.hydrateRoot;const iv=[{href:"#trabalhos",label:"Trabalhos"},{href:"#capacidades",label:"Capacidades"},{href:"#metodo",label:"Método"}];function b1(){const[t,e]=ce.useState(""),[n,i]=ce.useState(!1),[r,s]=ce.useState(!1);return ce.useEffect(()=>{const a=()=>e(new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}));a();const o=setInterval(a,3e4),l=()=>i(window.scrollY>12);return window.addEventListener("scroll",l),()=>{clearInterval(o),window.removeEventListener("scroll",l)}},[]),ce.useEffect(()=>{r&&s(!1)},[n]),Y.jsx("header",{className:"fixed top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4",children:Y.jsxs("div",{className:`mx-auto max-w-6xl rounded-2xl border border-asphalt-border bg-asphalt-light/95 backdrop-blur transition-colors duration-300 ${n?"bg-asphalt-light":""}`,children:[Y.jsxs("div",{className:"grid grid-cols-3 items-center px-4 sm:px-10",children:[Y.jsxs("button",{type:"button","aria-label":r?"Fechar menu":"Abrir menu","aria-expanded":r,onClick:()=>s(a=>!a),className:"flex h-9 w-9 flex-col items-start justify-center gap-1.5 md:hidden",children:[Y.jsx("span",{className:`h-px w-6 bg-chalk transition-transform duration-300 ${r?"translate-y-[3.5px] rotate-45":""}`}),Y.jsx("span",{className:`h-px w-6 bg-chalk transition-transform duration-300 ${r?"-translate-y-[3.5px] -rotate-45":""}`})]}),Y.jsx("nav",{className:"hidden items-center gap-8 md:flex",children:iv.map(a=>Y.jsx("a",{href:a.href,className:"font-mono text-xs uppercase tracking-[0.15em] text-chalk-muted transition-colors hover:text-chalk",children:a.label},a.href))}),Y.jsx("div",{className:"flex flex-col items-center gap-1",children:Y.jsx("a",{href:"#top",children:Y.jsx("img",{src:"/br7hori.png",alt:"BR7",className:"h-14 w-auto sm:h-16 md:h-20"})})}),Y.jsx("div",{className:"flex justify-end",children:Y.jsxs("a",{href:"#contato",className:"whitespace-nowrap rounded-full border border-lane/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-lane transition-colors hover:bg-lane hover:text-asphalt sm:px-4 sm:py-2 sm:text-xs",children:[Y.jsx("span",{className:"sm:hidden",children:"Falar →"}),Y.jsx("span",{className:"hidden sm:inline",children:"Vamos Conversar →"})]})})]}),Y.jsx("nav",{className:`grid overflow-hidden px-4 transition-[grid-template-rows,padding] duration-300 md:hidden ${r?"grid-rows-[1fr] py-2":"grid-rows-[0fr] py-0"}`,children:Y.jsx("div",{className:"flex min-h-0 flex-col gap-1 overflow-hidden border-t border-asphalt-border pt-2",children:iv.map(a=>Y.jsx("a",{href:a.href,onClick:()=>s(!1),className:"rounded-lg px-2 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-chalk-muted transition-colors hover:bg-asphalt-surface hover:text-chalk",children:a.label},a.href))})})]})})}const Qu=[{id:"top",code:"BR-00",label:"Início"},{id:"intro",code:"BR-01",label:"Visão"},{id:"trabalhos",code:"BR-02",label:"Trabalhos"},{id:"capacidades",code:"BR-03",label:"Capacidades"},{id:"metodo",code:"BR-04",label:"Método"},{id:"contato",code:"BR-05",label:"Contato"}];function P1(){const[t,e]=ce.useState(Qu[0].id);return ce.useEffect(()=>{const n=Qu.map(r=>document.getElementById(r.id)).filter(Boolean),i=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&e(s.target.id)})},{rootMargin:"-45% 0px -45% 0px",threshold:0});return n.forEach(r=>i.observe(r)),()=>i.disconnect()},[]),Y.jsx("nav",{"aria-label":"Seções da página",className:"fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex",children:Qu.map(n=>{const i=n.id===t;return Y.jsxs("a",{href:`#${n.id}`,className:"group flex items-center gap-3",children:[Y.jsxs("span",{className:`font-mono text-[10px] uppercase tracking-[0.15em] transition-all duration-300 ${i?"text-lane opacity-100":"text-chalk-muted opacity-0 group-hover:opacity-100"}`,children:[n.code," · ",n.label]}),Y.jsx("span",{className:`h-px transition-all duration-300 ${i?"w-8 bg-lane":"w-4 bg-chalk-faint group-hover:w-6 group-hover:bg-chalk-muted"}`})]},n.id)})})}const Wp=ce.createContext({});function Xp(t){const e=ce.useRef(null);return e.current===null&&(e.current=t()),e.current}const hu=ce.createContext(null),Yp=ce.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class D1 extends ce.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function L1({children:t,isPresent:e}){const n=ce.useId(),i=ce.useRef(null),r=ce.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ce.useContext(Yp);return ce.useInsertionEffect(()=>{const{width:a,height:o,top:l,left:c}=r.current;if(e||!i.current||!a||!o)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),Y.jsx(D1,{isPresent:e,childRef:i,sizeRef:r,children:ce.cloneElement(t,{ref:i})})}const N1=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:a})=>{const o=Xp(I1),l=ce.useId(),c=ce.useCallback(d=>{o.set(d,!0);for(const f of o.values())if(!f)return;i&&i()},[o,i]),u=ce.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c,register:d=>(o.set(d,!1),()=>o.delete(d))}),s?[Math.random(),c]:[n,c]);return ce.useMemo(()=>{o.forEach((d,f)=>o.set(f,!1))},[n]),ce.useEffect(()=>{!n&&!o.size&&i&&i()},[n]),a==="popLayout"&&(t=Y.jsx(L1,{isPresent:n,children:t})),Y.jsx(hu.Provider,{value:u,children:t})};function I1(){return new Map}function Uy(t=!0){const e=ce.useContext(hu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ce.useId();ce.useEffect(()=>{t&&r(s)},[t]);const a=ce.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,a]:[!0]}const xl=t=>t.key||"";function rv(t){const e=[];return ce.Children.forEach(t,n=>{ce.isValidElement(n)&&e.push(n)}),e}const qp=typeof window<"u",Fy=qp?ce.useLayoutEffect:ce.useEffect,U1=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:a=!1})=>{const[o,l]=Uy(a),c=ce.useMemo(()=>rv(t),[t]),u=a&&!o?[]:c.map(xl),d=ce.useRef(!0),f=ce.useRef(c),p=Xp(()=>new Map),[g,M]=ce.useState(c),[m,h]=ce.useState(c);Fy(()=>{d.current=!1,f.current=c;for(let S=0;S<m.length;S++){const T=xl(m[S]);u.includes(T)?p.delete(T):p.get(T)!==!0&&p.set(T,!1)}},[m,u.length,u.join("-")]);const v=[];if(c!==g){let S=[...c];for(let T=0;T<m.length;T++){const w=m[T],R=xl(w);u.includes(R)||(S.splice(T,0,w),v.push(w))}s==="wait"&&v.length&&(S=v),h(rv(S)),M(c);return}const{forceRender:x}=ce.useContext(Wp);return Y.jsx(Y.Fragment,{children:m.map(S=>{const T=xl(S),w=a&&!o?!1:c===m||u.includes(T),R=()=>{if(p.has(T))p.set(T,!0);else return;let _=!0;p.forEach(A=>{A||(_=!1)}),_&&(x==null||x(),h(f.current),a&&(l==null||l()),i&&i())};return Y.jsx(N1,{isPresent:w,initial:!d.current||n?void 0:!1,custom:w?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:w?void 0:R,children:S},T)})})},In=t=>t;let Oy=In;function $p(t){let e;return()=>(e===void 0&&(e=t()),e)}const ga=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Wi=t=>t*1e3,Xi=t=>t/1e3,F1={useManualTiming:!1};function O1(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(c){s.has(c)&&(l.schedule(c),t()),c(a)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(a=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(o),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const yl=["read","resolveKeyframes","update","preRender","render","postRender"],B1=40;function By(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=yl.reduce((h,v)=>(h[v]=O1(s),h),{}),{read:o,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=a,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,B1),1),r.timestamp=h,r.isProcessing=!0,o.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},g=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:yl.reduce((h,v)=>{const x=a[v];return h[v]=(S,T=!1,w=!1)=>(n||g(),x.schedule(S,T,w)),h},{}),cancel:h=>{for(let v=0;v<yl.length;v++)a[yl[v]].cancel(h)},state:r,steps:a}}const{schedule:yt,cancel:Nr,state:Qt,steps:Ju}=By(typeof requestAnimationFrame<"u"?requestAnimationFrame:In,!0),ky=ce.createContext({strict:!1}),sv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},va={};for(const t in sv)va[t]={isEnabled:e=>sv[t].some(n=>!!e[n])};function k1(t){for(const e in t)va[e]={...va[e],...t[e]}}const V1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Oc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||V1.has(t)}let Vy=t=>!Oc(t);function z1(t){t&&(Vy=e=>e.startsWith("on")?!Oc(e):t(e))}try{z1(require("@emotion/is-prop-valid").default)}catch{}function G1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(Vy(r)||n===!0&&Oc(r)||!e&&!Oc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function H1(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const pu=ce.createContext({});function Io(t){return typeof t=="string"||Array.isArray(t)}function mu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Kp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jp=["initial",...Kp];function gu(t){return mu(t.animate)||jp.some(e=>Io(t[e]))}function zy(t){return!!(gu(t)||t.variants)}function W1(t,e){if(gu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Io(n)?n:void 0,animate:Io(i)?i:void 0}}return t.inherit!==!1?e:{}}function X1(t){const{initial:e,animate:n}=W1(t,ce.useContext(pu));return ce.useMemo(()=>({initial:e,animate:n}),[av(e),av(n)])}function av(t){return Array.isArray(t)?t.join(" "):t}const Y1=Symbol.for("motionComponentSymbol");function Ks(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function q1(t,e,n){return ce.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ks(n)&&(n.current=i))},[e])}const Zp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),$1="framerAppearId",Gy="data-"+Zp($1),{schedule:Qp}=By(queueMicrotask,!1),Hy=ce.createContext({});function K1(t,e,n,i,r){var s,a;const{visualElement:o}=ce.useContext(pu),l=ce.useContext(ky),c=ce.useContext(hu),u=ce.useContext(Yp).reducedMotion,d=ce.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,p=ce.useContext(Hy);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&j1(d.current,n,r,p);const g=ce.useRef(!1);ce.useInsertionEffect(()=>{f&&g.current&&f.update(n,c)});const M=n[Gy],m=ce.useRef(!!M&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,M))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,M)));return Fy(()=>{f&&(g.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Qp.render(f.render),m.current&&f.animationState&&f.animationState.animateChanges())}),ce.useEffect(()=>{f&&(!m.current&&f.animationState&&f.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,M)}),m.current=!1))}),f}function j1(t,e,n,i){const{layoutId:r,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Wy(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!a||o&&Ks(o),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Wy(t){if(t)return t.options.allowProjection!==!1?t.projection:Wy(t.parent)}function Z1({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,a;t&&k1(t);function o(c,u){let d;const f={...ce.useContext(Yp),...c,layoutId:Q1(c)},{isStatic:p}=f,g=X1(c),M=i(c,p);if(!p&&qp){J1();const m=ew(f);d=m.MeasureLayout,g.visualElement=K1(r,M,f,e,m.ProjectionNode)}return Y.jsxs(pu.Provider,{value:g,children:[d&&g.visualElement?Y.jsx(d,{visualElement:g.visualElement,...f}):null,n(r,c,q1(M,g.visualElement,u),M,p,g.visualElement)]})}o.displayName=`motion.${typeof r=="string"?r:`create(${(a=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&a!==void 0?a:""})`}`;const l=ce.forwardRef(o);return l[Y1]=r,l}function Q1({layoutId:t}){const e=ce.useContext(Wp).id;return e&&t!==void 0?e+"-"+t:t}function J1(t,e){ce.useContext(ky).strict}function ew(t){const{drag:e,layout:n}=va;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const tw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jp(t){return typeof t!="string"||t.includes("-")?!1:!!(tw.indexOf(t)>-1||/[A-Z]/u.test(t))}function ov(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function em(t,e,n,i){if(typeof e=="function"){const[r,s]=ov(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=ov(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const Gd=t=>Array.isArray(t),nw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),iw=t=>Gd(t)?t[t.length-1]||0:t,dn=t=>!!(t&&t.getVelocity);function rc(t){const e=dn(t)?t.get():t;return nw(e)?e.toValue():e}function rw({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const a={latestValues:sw(i,r,s,t),renderState:e()};return n&&(a.onMount=o=>n({props:i,current:o,...a}),a.onUpdate=o=>n(o)),a}const Xy=t=>(e,n)=>{const i=ce.useContext(pu),r=ce.useContext(hu),s=()=>rw(t,e,i,r);return n?s():Xp(s)};function sw(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=rc(s[f]);let{initial:a,animate:o}=t;const l=gu(t),c=zy(t);e&&c&&!l&&t.inherit!==!1&&(a===void 0&&(a=e.initial),o===void 0&&(o=e.animate));let u=n?n.initial===!1:!1;u=u||a===!1;const d=u?o:a;if(d&&typeof d!="boolean"&&!mu(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const g=em(t,f[p]);if(g){const{transitionEnd:M,transition:m,...h}=g;for(const v in h){let x=h[v];if(Array.isArray(x)){const S=u?x.length-1:0;x=x[S]}x!==null&&(r[v]=x)}for(const v in M)r[v]=M[v]}}}return r}const Ra=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xs=new Set(Ra),Yy=t=>e=>typeof e=="string"&&e.startsWith(t),qy=Yy("--"),aw=Yy("var(--"),tm=t=>aw(t)?ow.test(t.split("/*")[0].trim()):!1,ow=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$y=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Qi=(t,e,n)=>n>e?e:n<t?t:n,Ca={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Uo={...Ca,transform:t=>Qi(0,1,t)},Sl={...Ca,default:1},Xo=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),pr=Xo("deg"),Ci=Xo("%"),De=Xo("px"),lw=Xo("vh"),cw=Xo("vw"),lv={...Ci,parse:t=>Ci.parse(t)/100,transform:t=>Ci.transform(t*100)},uw={borderWidth:De,borderTopWidth:De,borderRightWidth:De,borderBottomWidth:De,borderLeftWidth:De,borderRadius:De,radius:De,borderTopLeftRadius:De,borderTopRightRadius:De,borderBottomRightRadius:De,borderBottomLeftRadius:De,width:De,maxWidth:De,height:De,maxHeight:De,top:De,right:De,bottom:De,left:De,padding:De,paddingTop:De,paddingRight:De,paddingBottom:De,paddingLeft:De,margin:De,marginTop:De,marginRight:De,marginBottom:De,marginLeft:De,backgroundPositionX:De,backgroundPositionY:De},fw={rotate:pr,rotateX:pr,rotateY:pr,rotateZ:pr,scale:Sl,scaleX:Sl,scaleY:Sl,scaleZ:Sl,skew:pr,skewX:pr,skewY:pr,distance:De,translateX:De,translateY:De,translateZ:De,x:De,y:De,z:De,perspective:De,transformPerspective:De,opacity:Uo,originX:lv,originY:lv,originZ:De},cv={...Ca,transform:Math.round},nm={...uw,...fw,zIndex:cv,size:De,fillOpacity:Uo,strokeOpacity:Uo,numOctaves:cv},dw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},hw=Ra.length;function pw(t,e,n){let i="",r=!0;for(let s=0;s<hw;s++){const a=Ra[s],o=t[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const c=$y(o,nm[a]);if(!l){r=!1;const u=dw[a]||a;i+=`${u}(${c}) `}n&&(e[a]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function im(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let a=!1,o=!1;for(const l in e){const c=e[l];if(xs.has(l)){a=!0;continue}else if(qy(l)){r[l]=c;continue}else{const u=$y(c,nm[l]);l.startsWith("origin")?(o=!0,s[l]=u):i[l]=u}}if(e.transform||(a||n?i.transform=pw(e,t.transform,n):i.transform&&(i.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const mw={offset:"stroke-dashoffset",array:"stroke-dasharray"},gw={offset:"strokeDashoffset",array:"strokeDasharray"};function vw(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?mw:gw;t[s.offset]=De.transform(-i);const a=De.transform(e),o=De.transform(n);t[s.array]=`${a} ${o}`}function uv(t,e,n){return typeof t=="string"?t:De.transform(e+n*t)}function _w(t,e,n){const i=uv(e,t.x,t.width),r=uv(n,t.y,t.height);return`${i} ${r}`}function rm(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...c},u,d){if(im(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:g}=t;f.transform&&(g&&(p.transform=f.transform),delete f.transform),g&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=_w(g,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),a!==void 0&&vw(f,a,o,l,!1)}const sm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ky=()=>({...sm(),attrs:{}}),am=t=>typeof t=="string"&&t.toLowerCase()==="svg";function jy(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Zy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Qy(t,e,n,i){jy(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Zy.has(r)?r:Zp(r),e.attrs[r])}const Bc={};function xw(t){Object.assign(Bc,t)}function Jy(t,{layout:e,layoutId:n}){return xs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Bc[t]||t==="opacity")}function om(t,e,n){var i;const{style:r}=t,s={};for(const a in r)(dn(r[a])||e.style&&dn(e.style[a])||Jy(a,t)||((i=n==null?void 0:n.getValue(a))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[a]=r[a]);return s}function eS(t,e,n){const i=om(t,e,n);for(const r in t)if(dn(t[r])||dn(e[r])){const s=Ra.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function yw(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const fv=["x","y","width","height","cx","cy","r"],Sw={useVisualState:Xy({scrapeMotionValuesFromProps:eS,createRenderState:Ky,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const o in r)if(xs.has(o)){s=!0;break}}if(!s)return;let a=!e;if(e)for(let o=0;o<fv.length;o++){const l=fv[o];t[l]!==e[l]&&(a=!0)}a&&yt.read(()=>{yw(n,i),yt.render(()=>{rm(i,r,am(n.tagName),t.transformTemplate),Qy(n,i)})})}})},Mw={useVisualState:Xy({scrapeMotionValuesFromProps:om,createRenderState:sm})};function tS(t,e,n){for(const i in e)!dn(e[i])&&!Jy(i,n)&&(t[i]=e[i])}function Ew({transformTemplate:t},e){return ce.useMemo(()=>{const n=sm();return im(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Tw(t,e){const n=t.style||{},i={};return tS(i,n,t),Object.assign(i,Ew(t,e)),i}function ww(t,e){const n={},i=Tw(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function Aw(t,e,n,i){const r=ce.useMemo(()=>{const s=Ky();return rm(s,e,am(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};tS(s,t.style,t),r.style={...s,...r.style}}return r}function Rw(t=!1){return(n,i,r,{latestValues:s},a)=>{const l=(Jp(n)?Aw:ww)(i,s,a,n),c=G1(i,typeof n=="string",t),u=n!==ce.Fragment?{...c,...l,ref:r}:{},{children:d}=i,f=ce.useMemo(()=>dn(d)?d.get():d,[d]);return ce.createElement(n,{...u,children:f})}}function Cw(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const a={...Jp(i)?Sw:Mw,preloadedFeatures:t,useRender:Rw(r),createVisualElement:e,Component:i};return Z1(a)}}function nS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function vu(t,e,n){const i=t.getProps();return em(i,e,n!==void 0?n:i.custom,t)}const bw=$p(()=>window.ScrollTimeline!==void 0);class Pw{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(bw()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Dw extends Pw{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function lm(t,e){return t?t[e]||t.default||t:void 0}const Hd=2e4;function iS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Hd;)e+=n,i=t.next(e);return e>=Hd?1/0:e}function cm(t){return typeof t=="function"}function dv(t,e){t.timeline=e,t.onfinish=null}const um=t=>Array.isArray(t)&&typeof t[0]=="number",Lw={linearEasing:void 0};function Nw(t,e){const n=$p(t);return()=>{var i;return(i=Lw[e])!==null&&i!==void 0?i:n()}}const kc=Nw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),rS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(ga(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function sS(t){return!!(typeof t=="function"&&kc()||!t||typeof t=="string"&&(t in Wd||kc())||um(t)||Array.isArray(t)&&t.every(sS))}const Qa=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Wd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Qa([0,.65,.55,1]),circOut:Qa([.55,0,1,.45]),backIn:Qa([.31,.01,.66,-.59]),backOut:Qa([.33,1.53,.69,.99])};function aS(t,e){if(t)return typeof t=="function"&&kc()?rS(t,e):um(t)?Qa(t):Array.isArray(t)?t.map(n=>aS(n,e)||Wd.easeOut):Wd[t]}const ii={x:!1,y:!1};function oS(){return ii.x||ii.y}function Iw(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function lS(t,e){const n=Iw(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function hv(t){return e=>{e.pointerType==="touch"||oS()||t(e)}}function Uw(t,e,n={}){const[i,r,s]=lS(t,n),a=hv(o=>{const{target:l}=o,c=e(o);if(typeof c!="function"||!l)return;const u=hv(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(o=>{o.addEventListener("pointerenter",a,r)}),s}const cS=(t,e)=>e?t===e?!0:cS(t,e.parentElement):!1,fm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Fw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Ow(t){return Fw.has(t.tagName)||t.tabIndex!==-1}const Ja=new WeakSet;function pv(t){return e=>{e.key==="Enter"&&t(e)}}function ef(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Bw=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=pv(()=>{if(Ja.has(n))return;ef(n,"down");const r=pv(()=>{ef(n,"up")}),s=()=>ef(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function mv(t){return fm(t)&&!oS()}function kw(t,e,n={}){const[i,r,s]=lS(t,n),a=o=>{const l=o.currentTarget;if(!mv(o)||Ja.has(l))return;Ja.add(l);const c=e(o),u=(p,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!mv(p)||!Ja.has(l))&&(Ja.delete(l),typeof c=="function"&&c(p,{success:g}))},d=p=>{u(p,n.useGlobalTarget||cS(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(o=>{!Ow(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,r),o.addEventListener("focus",c=>Bw(c,r),r)}),s}function Vw(t){return t==="x"||t==="y"?ii[t]?null:(ii[t]=!0,()=>{ii[t]=!1}):ii.x||ii.y?null:(ii.x=ii.y=!0,()=>{ii.x=ii.y=!1})}const uS=new Set(["width","height","top","left","right","bottom",...Ra]);let sc;function zw(){sc=void 0}const bi={now:()=>(sc===void 0&&bi.set(Qt.isProcessing||F1.useManualTiming?Qt.timestamp:performance.now()),sc),set:t=>{sc=t,queueMicrotask(zw)}};function dm(t,e){t.indexOf(e)===-1&&t.push(e)}function hm(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class pm{constructor(){this.subscriptions=[]}add(e){return dm(this.subscriptions,e),()=>hm(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const a=this.subscriptions[s];a&&a(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function fS(t,e){return e?t*(1e3/e):0}const gv=30,Gw=t=>!isNaN(parseFloat(t));class Hw{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=bi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=bi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Gw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new pm);const i=this.events[e].add(n);return e==="change"?()=>{i(),yt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=bi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>gv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,gv);return fS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fo(t,e){return new Hw(t,e)}function Ww(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Fo(n))}function Xw(t,e){const n=vu(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const a in s){const o=iw(s[a]);Ww(t,a,o)}}function Yw(t){return!!(dn(t)&&t.add)}function Xd(t,e){const n=t.getValue("willChange");if(Yw(n))return n.add(e)}function dS(t){return t.props[Gy]}const hS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,qw=1e-7,$w=12;function Kw(t,e,n,i,r){let s,a,o=0;do a=e+(n-e)/2,s=hS(a,i,r)-t,s>0?n=a:e=a;while(Math.abs(s)>qw&&++o<$w);return a}function Yo(t,e,n,i){if(t===e&&n===i)return In;const r=s=>Kw(s,0,1,t,n);return s=>s===0||s===1?s:hS(r(s),e,i)}const pS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,mS=t=>e=>1-t(1-e),gS=Yo(.33,1.53,.69,.99),mm=mS(gS),vS=pS(mm),_S=t=>(t*=2)<1?.5*mm(t):.5*(2-Math.pow(2,-10*(t-1))),gm=t=>1-Math.sin(Math.acos(t)),xS=mS(gm),yS=pS(gm),SS=t=>/^0[^.\s]+$/u.test(t);function jw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||SS(t):!0}const ho=t=>Math.round(t*1e5)/1e5,vm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Zw(t){return t==null}const Qw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,_m=(t,e)=>n=>!!(typeof n=="string"&&Qw.test(n)&&n.startsWith(t)||e&&!Zw(n)&&Object.prototype.hasOwnProperty.call(n,e)),MS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,a,o]=i.match(vm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},Jw=t=>Qi(0,255,t),tf={...Ca,transform:t=>Math.round(Jw(t))},ns={test:_m("rgb","red"),parse:MS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+tf.transform(t)+", "+tf.transform(e)+", "+tf.transform(n)+", "+ho(Uo.transform(i))+")"};function eA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Yd={test:_m("#"),parse:eA,transform:ns.transform},js={test:_m("hsl","hue"),parse:MS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ci.transform(ho(e))+", "+Ci.transform(ho(n))+", "+ho(Uo.transform(i))+")"},cn={test:t=>ns.test(t)||Yd.test(t)||js.test(t),parse:t=>ns.test(t)?ns.parse(t):js.test(t)?js.parse(t):Yd.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ns.transform(t):js.transform(t)},tA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(vm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(tA))===null||n===void 0?void 0:n.length)||0)>0}const ES="number",TS="color",iA="var",rA="var(",vv="${}",sA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Oo(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const o=e.replace(sA,l=>(cn.test(l)?(i.color.push(s),r.push(TS),n.push(cn.parse(l))):l.startsWith(rA)?(i.var.push(s),r.push(iA),n.push(l)):(i.number.push(s),r.push(ES),n.push(parseFloat(l))),++s,vv)).split(vv);return{values:n,split:o,indexes:i,types:r}}function wS(t){return Oo(t).values}function AS(t){const{split:e,types:n}=Oo(t),i=e.length;return r=>{let s="";for(let a=0;a<i;a++)if(s+=e[a],r[a]!==void 0){const o=n[a];o===ES?s+=ho(r[a]):o===TS?s+=cn.transform(r[a]):s+=r[a]}return s}}const aA=t=>typeof t=="number"?0:t;function oA(t){const e=wS(t);return AS(t)(e.map(aA))}const Ir={test:nA,parse:wS,createTransformer:AS,getAnimatableNone:oA},lA=new Set(["brightness","contrast","saturate","opacity"]);function cA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(vm)||[];if(!i)return t;const r=n.replace(i,"");let s=lA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const uA=/\b([a-z-]*)\(.*?\)/gu,qd={...Ir,getAnimatableNone:t=>{const e=t.match(uA);return e?e.map(cA).join(" "):t}},fA={...nm,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:qd,WebkitFilter:qd},xm=t=>fA[t];function RS(t,e){let n=xm(t);return n!==qd&&(n=Ir),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const dA=new Set(["auto","none","0"]);function hA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!dA.has(s)&&Oo(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=RS(n,r)}const _v=t=>t===Ca||t===De,xv=(t,e)=>parseFloat(t.split(", ")[e]),yv=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return xv(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?xv(s[1],t):0}},pA=new Set(["x","y","z"]),mA=Ra.filter(t=>!pA.has(t));function gA(t){const e=[];return mA.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const _a={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:yv(4,13),y:yv(5,14)};_a.translateX=_a.x;_a.translateY=_a.y;const as=new Set;let $d=!1,Kd=!1;function CS(){if(Kd){const t=Array.from(as).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=gA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,a])=>{var o;(o=i.getValue(s))===null||o===void 0||o.set(a)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Kd=!1,$d=!1,as.forEach(t=>t.complete()),as.clear()}function bS(){as.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Kd=!0)})}function vA(){bS(),CS()}class ym{constructor(e,n,i,r,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(as.add(this),$d||($d=!0,yt.read(bS),yt.resolveKeyframes(CS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const a=r==null?void 0:r.get(),o=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&n){const l=i.readValue(n,o);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=o),r&&a===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),as.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,as.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const PS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),_A=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xA(t){const e=_A.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function DS(t,e,n=1){const[i,r]=xA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const a=s.trim();return PS(a)?parseFloat(a):a}return tm(r)?DS(r,e,n+1):r}const LS=t=>e=>e.test(t),yA={test:t=>t==="auto",parse:t=>t},NS=[Ca,De,Ci,pr,cw,lw,yA],Sv=t=>NS.find(LS(t));class IS extends ym{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),tm(c))){const u=DS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!uS.has(i)||e.length!==2)return;const[r,s]=e,a=Sv(r),o=Sv(s);if(a!==o)if(_v(a)&&_v(o))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)jw(e[r])&&i.push(r);i.length&&hA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_a[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const a=r.length-1,o=r[a];r[a]=_a[i](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Mv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ir.test(t)||t==="0")&&!t.startsWith("url("));function SA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function MA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],a=Mv(r,e),o=Mv(s,e);return!a||!o?!1:SA(t)||(n==="spring"||cm(n))&&i}const EA=t=>t!==null;function _u(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(EA),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const TA=40;class US{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=bi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>TA?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&vA(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=bi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:c}=this.options;if(!c&&!MA(e,i,r,s))if(a)this.options.duration=0;else{l&&l(_u(e,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Tt=(t,e,n)=>t+(e-t)*n;function nf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function wA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,a=0;if(!e)r=s=a=n;else{const o=n<.5?n*(1+e):n+e-n*e,l=2*n-o;r=nf(l,o,t+1/3),s=nf(l,o,t),a=nf(l,o,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:i}}function Vc(t,e){return n=>n>0?e:t}const rf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},AA=[Yd,ns,js],RA=t=>AA.find(e=>e.test(t));function Ev(t){const e=RA(t);if(!e)return!1;let n=e.parse(t);return e===js&&(n=wA(n)),n}const Tv=(t,e)=>{const n=Ev(t),i=Ev(e);if(!n||!i)return Vc(t,e);const r={...n};return s=>(r.red=rf(n.red,i.red,s),r.green=rf(n.green,i.green,s),r.blue=rf(n.blue,i.blue,s),r.alpha=Tt(n.alpha,i.alpha,s),ns.transform(r))},CA=(t,e)=>n=>e(t(n)),qo=(...t)=>t.reduce(CA),jd=new Set(["none","hidden"]);function bA(t,e){return jd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function PA(t,e){return n=>Tt(t,e,n)}function Sm(t){return typeof t=="number"?PA:typeof t=="string"?tm(t)?Vc:cn.test(t)?Tv:NA:Array.isArray(t)?FS:typeof t=="object"?cn.test(t)?Tv:DA:Vc}function FS(t,e){const n=[...t],i=n.length,r=t.map((s,a)=>Sm(s)(s,e[a]));return s=>{for(let a=0;a<i;a++)n[a]=r[a](s);return n}}function DA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Sm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function LA(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const a=e.types[s],o=t.indexes[a][r[a]],l=(n=t.values[o])!==null&&n!==void 0?n:0;i[s]=l,r[a]++}return i}const NA=(t,e)=>{const n=Ir.createTransformer(e),i=Oo(t),r=Oo(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?jd.has(t)&&!r.values.length||jd.has(e)&&!i.values.length?bA(t,e):qo(FS(LA(i,r),r.values),n):Vc(t,e)};function OS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Tt(t,e,n):Sm(t)(t,e)}const IA=5;function BS(t,e,n){const i=Math.max(e-IA,0);return fS(n-t(i),e-i)}const bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},sf=.001;function UA({duration:t=bt.duration,bounce:e=bt.bounce,velocity:n=bt.velocity,mass:i=bt.mass}){let r,s,a=1-e;a=Qi(bt.minDamping,bt.maxDamping,a),t=Qi(bt.minDuration,bt.maxDuration,Xi(t)),a<1?(r=c=>{const u=c*a,d=u*t,f=u-n,p=Zd(c,a),g=Math.exp(-d);return sf-f/p*g},s=c=>{const d=c*a*t,f=d*n+n,p=Math.pow(a,2)*Math.pow(c,2)*t,g=Math.exp(-d),M=Zd(Math.pow(c,2),a);return(-r(c)+sf>0?-1:1)*((f-p)*g)/M}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-sf+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const o=5/t,l=OA(r,s,o);if(t=Wi(t),isNaN(l))return{stiffness:bt.stiffness,damping:bt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:t}}}const FA=12;function OA(t,e,n){let i=n;for(let r=1;r<FA;r++)i=i-t(i)/e(i);return i}function Zd(t,e){return t*Math.sqrt(1-e*e)}const BA=["duration","bounce"],kA=["stiffness","damping","mass"];function wv(t,e){return e.some(n=>t[n]!==void 0)}function VA(t){let e={velocity:bt.velocity,stiffness:bt.stiffness,damping:bt.damping,mass:bt.mass,isResolvedFromDuration:!1,...t};if(!wv(t,kA)&&wv(t,BA))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Qi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:bt.mass,stiffness:r,damping:s}}else{const n=UA(t);e={...e,...n,mass:bt.mass},e.isResolvedFromDuration=!0}return e}function kS(t=bt.visualDuration,e=bt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=VA({...n,velocity:-Xi(n.velocity||0)}),g=f||0,M=c/(2*Math.sqrt(l*u)),m=a-s,h=Xi(Math.sqrt(l/u)),v=Math.abs(m)<5;i||(i=v?bt.restSpeed.granular:bt.restSpeed.default),r||(r=v?bt.restDelta.granular:bt.restDelta.default);let x;if(M<1){const T=Zd(h,M);x=w=>{const R=Math.exp(-M*h*w);return a-R*((g+M*h*m)/T*Math.sin(T*w)+m*Math.cos(T*w))}}else if(M===1)x=T=>a-Math.exp(-h*T)*(m+(g+h*m)*T);else{const T=h*Math.sqrt(M*M-1);x=w=>{const R=Math.exp(-M*h*w),_=Math.min(T*w,300);return a-R*((g+M*h*m)*Math.sinh(_)+T*m*Math.cosh(_))/T}}const S={calculatedDuration:p&&d||null,next:T=>{const w=x(T);if(p)o.done=T>=d;else{let R=0;M<1&&(R=T===0?Wi(g):BS(x,T,w));const _=Math.abs(R)<=i,A=Math.abs(a-w)<=r;o.done=_&&A}return o.value=o.done?a:w,o},toString:()=>{const T=Math.min(iS(S),Hd),w=rS(R=>S.next(T*R).value,T,30);return T+"ms "+w}};return S}function Av({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=_=>o!==void 0&&_<o||l!==void 0&&_>l,g=_=>o===void 0?l:l===void 0||Math.abs(o-_)<Math.abs(l-_)?o:l;let M=n*e;const m=d+M,h=a===void 0?m:a(m);h!==m&&(M=h-d);const v=_=>-M*Math.exp(-_/i),x=_=>h+v(_),S=_=>{const A=v(_),b=x(_);f.done=Math.abs(A)<=c,f.value=f.done?h:b};let T,w;const R=_=>{p(f.value)&&(T=_,w=kS({keyframes:[f.value,g(f.value)],velocity:BS(x,_,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return R(0),{calculatedDuration:null,next:_=>{let A=!1;return!w&&T===void 0&&(A=!0,S(_),R(_)),T!==void 0&&_>=T?w.next(_-T):(!A&&S(_),f)}}}const zA=Yo(.42,0,1,1),GA=Yo(0,0,.58,1),VS=Yo(.42,0,.58,1),HA=t=>Array.isArray(t)&&typeof t[0]!="number",WA={linear:In,easeIn:zA,easeInOut:VS,easeOut:GA,circIn:gm,circInOut:yS,circOut:xS,backIn:mm,backInOut:vS,backOut:gS,anticipate:_S},Rv=t=>{if(um(t)){Oy(t.length===4);const[e,n,i,r]=t;return Yo(e,n,i,r)}else if(typeof t=="string")return WA[t];return t};function XA(t,e,n){const i=[],r=n||OS,s=t.length-1;for(let a=0;a<s;a++){let o=r(t[a],t[a+1]);if(e){const l=Array.isArray(e)?e[a]||In:e;o=qo(l,o)}i.push(o)}return i}function YA(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Oy(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const a=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=XA(e,i,r),l=o.length,c=u=>{if(a&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=ga(t[d],t[d+1],u);return o[d](f)};return n?u=>c(Qi(t[0],t[s-1],u)):c}function qA(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=ga(0,e,i);t.push(Tt(n,1,r))}}function $A(t){const e=[0];return qA(e,t.length-1),e}function KA(t,e){return t.map(n=>n*e)}function jA(t,e){return t.map(()=>e||VS).splice(0,t.length-1)}function zc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=HA(i)?i.map(Rv):Rv(i),s={done:!1,value:e[0]},a=KA(n&&n.length===e.length?n:$A(e),t),o=YA(a,e,{ease:Array.isArray(r)?r:jA(e,r)});return{calculatedDuration:t,next:l=>(s.value=o(l),s.done=l>=t,s)}}const ZA=t=>{const e=({timestamp:n})=>t(n);return{start:()=>yt.update(e,!0),stop:()=>Nr(e),now:()=>Qt.isProcessing?Qt.timestamp:bi.now()}},QA={decay:Av,inertia:Av,tween:zc,keyframes:zc,spring:kS},JA=t=>t/100;class Mm extends US{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,a=(r==null?void 0:r.KeyframeResolver)||ym,o=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new a(s,o,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:a=0}=this.options,o=cm(n)?n:QA[n]||zc;let l,c;o!==zc&&typeof e[0]!="number"&&(l=qo(JA,OS(e[0],e[1])),e=[0,100]);const u=o({...this.options,keyframes:e});s==="mirror"&&(c=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=iS(u));const{calculatedDuration:d}=u,f=d+r,p=f*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:_}=this.options;return{done:!0,value:_[_.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:g,repeatDelay:M,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>u;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let x=this.currentTime,S=s;if(p){const _=Math.min(this.currentTime,u)/d;let A=Math.floor(_),b=_%1;!b&&_>=1&&(b=1),b===1&&A--,A=Math.min(A,p+1),!!(A%2)&&(g==="reverse"?(b=1-b,M&&(b-=M/d)):g==="mirror"&&(S=a)),x=Qi(0,1,b)*d}const T=v?{done:!1,value:l[0]}:S.next(x);o&&(T.value=o(T.value));let{done:w}=T;!v&&c!==null&&(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const R=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return R&&r!==void 0&&(T.value=_u(l,this.options,r)),m&&m(T.value),R&&this.finish(),T}get duration(){const{resolved:e}=this;return e?Xi(e.calculatedDuration):0}get time(){return Xi(this.currentTime)}set time(e){e=Wi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Xi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=ZA,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const eR=new Set(["opacity","clipPath","filter","transform"]);function tR(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=aS(o,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const nR=$p(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Gc=10,iR=2e4;function rR(t){return cm(t.type)||t.type==="spring"||!sS(t.ease)}function sR(t,e){const n=new Mm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<iR;)i=n.sample(s),r.push(i.value),s+=Gc;return{times:void 0,keyframes:r,duration:s-Gc,ease:"linear"}}const zS={anticipate:_S,backInOut:vS,circInOut:yS};function aR(t){return t in zS}class Cv extends US{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new IS(s,(a,o)=>this.onKeyframesResolved(a,o),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:a,motionValue:o,name:l,startTime:c}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&kc()&&aR(s)&&(s=zS[s]),rR(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,element:g,...M}=this.options,m=sR(e,M);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,a="keyframes"}const u=tR(o.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(dv(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;o.set(_u(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:a,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Xi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Xi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Wi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return In;const{animation:i}=n;dv(i,e)}return In}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:a,times:o}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:f,...p}=this.options,g=new Mm({...p,keyframes:i,duration:r,type:s,ease:a,times:o,isGenerator:!0}),M=Wi(this.time);c.setWithVelocity(g.sample(M-Gc).value,g.sample(M).value,Gc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:a,type:o}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return nR()&&i&&eR.has(i)&&!l&&!c&&!r&&s!=="mirror"&&a!==0&&o!=="inertia"}}const oR={type:"spring",stiffness:500,damping:25,restSpeed:10},lR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),cR={type:"keyframes",duration:.8},uR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fR=(t,{keyframes:e})=>e.length>2?cR:xs.has(t)?t.startsWith("scale")?lR(e[1]):oR:uR;function dR({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Em=(t,e,n,i={},r,s)=>a=>{const o=lm(i,t)||{},l=o.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Wi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...o,delay:-c,onUpdate:f=>{e.set(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:t,motionValue:e,element:s?void 0:r};dR(o)||(u={...u,...fR(t,u)}),u.duration&&(u.duration=Wi(u.duration)),u.repeatDelay&&(u.repeatDelay=Wi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=_u(u.keyframes,o);if(f!==void 0)return yt.update(()=>{u.onUpdate(f),u.onComplete()}),new Dw([])}return!s&&Cv.supports(u)?new Cv(u):new Mm(u)};function hR({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function GS(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:a=t.getDefaultTransition(),transitionEnd:o,...l}=e;i&&(a=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&hR(u,d))continue;const g={delay:n,...lm(a||{},d)};let M=!1;if(window.MotionHandoffAnimation){const h=dS(t);if(h){const v=window.MotionHandoffAnimation(h,d,yt);v!==null&&(g.startTime=v,M=!0)}}Xd(t,d),f.start(Em(d,f,p,t.shouldReduceMotion&&uS.has(d)?{type:!1}:g,t,M));const m=f.animation;m&&c.push(m)}return o&&Promise.all(c).then(()=>{yt.update(()=>{o&&Xw(t,o)})}),c}function Qd(t,e,n={}){var i;const r=vu(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const a=r?()=>Promise.all(GS(t,r,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=s;return pR(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[a,o]:[o,a];return c().then(()=>u())}else return Promise.all([a(),o(n.delay)])}function pR(t,e,n=0,i=0,r=1,s){const a=[],o=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>o-c*i;return Array.from(t.variantChildren).sort(mR).forEach((c,u)=>{c.notify("AnimationStart",e),a.push(Qd(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(a)}function mR(t,e){return t.sortNodePosition(e)}function gR(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Qd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Qd(t,e,n);else{const r=typeof e=="function"?vu(t,e,n.custom):e;i=Promise.all(GS(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const vR=jp.length;function HS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?HS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<vR;n++){const i=jp[n],r=t.props[i];(Io(r)||r===!1)&&(e[i]=r)}return e}const _R=[...Kp].reverse(),xR=Kp.length;function yR(t){return e=>Promise.all(e.map(({animation:n,options:i})=>gR(t,n,i)))}function SR(t){let e=yR(t),n=bv(),i=!0;const r=l=>(c,u)=>{var d;const f=vu(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:g,...M}=f;c={...c,...M,...g}}return c};function s(l){e=l(t)}function a(l){const{props:c}=t,u=HS(t.parent)||{},d=[],f=new Set;let p={},g=1/0;for(let m=0;m<xR;m++){const h=_R[m],v=n[h],x=c[h]!==void 0?c[h]:u[h],S=Io(x),T=h===l?v.isActive:null;T===!1&&(g=m);let w=x===u[h]&&x!==c[h]&&S;if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),v.protectedKeys={...p},!v.isActive&&T===null||!x&&!v.prevProp||mu(x)||typeof x=="boolean")continue;const R=MR(v.prevProp,x);let _=R||h===l&&v.isActive&&!w&&S||m>g&&S,A=!1;const b=Array.isArray(x)?x:[x];let D=b.reduce(r(h),{});T===!1&&(D={});const{prevResolvedValues:B={}}=v,$={...B,...D},ee=F=>{_=!0,f.has(F)&&(A=!0,f.delete(F)),v.needsAnimating[F]=!0;const P=t.getValue(F);P&&(P.liveStyle=!1)};for(const F in $){const P=D[F],U=B[F];if(p.hasOwnProperty(F))continue;let X=!1;Gd(P)&&Gd(U)?X=!nS(P,U):X=P!==U,X?P!=null?ee(F):f.add(F):P!==void 0&&f.has(F)?ee(F):v.protectedKeys[F]=!0}v.prevProp=x,v.prevResolvedValues=D,v.isActive&&(p={...p,...D}),i&&t.blockInitialAnimation&&(_=!1),_&&(!(w&&R)||A)&&d.push(...b.map(F=>({animation:F,options:{type:h}})))}if(f.size){const m={};f.forEach(h=>{const v=t.getBaseTarget(h),x=t.getValue(h);x&&(x.liveStyle=!0),m[h]=v??null}),d.push({animation:m})}let M=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(M=!1),i=!1,M?e(d):Promise.resolve()}function o(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=a(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n,reset:()=>{n=bv(),i=!0}}}function MR(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!nS(e,t):!1}function zr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function bv(){return{animate:zr(!0),whileInView:zr(),whileHover:zr(),whileTap:zr(),whileDrag:zr(),whileFocus:zr(),exit:zr()}}class Br{constructor(e){this.isMounted=!1,this.node=e}update(){}}class ER extends Br{constructor(e){super(e),e.animationState||(e.animationState=SR(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();mu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let TR=0;class wR extends Br{constructor(){super(...arguments),this.id=TR++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const AR={animation:{Feature:ER},exit:{Feature:wR}};function Bo(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function $o(t){return{point:{x:t.pageX,y:t.pageY}}}const RR=t=>e=>fm(e)&&t(e,$o(e));function po(t,e,n,i){return Bo(t,e,RR(n),i)}const Pv=(t,e)=>Math.abs(t-e);function CR(t,e){const n=Pv(t.x,e.x),i=Pv(t.y,e.y);return Math.sqrt(n**2+i**2)}class WS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=of(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=CR(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:g}=d,{timestamp:M}=Qt;this.history.push({...g,timestamp:M});const{onStart:m,onMove:h}=this.handlers;f||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=af(f,this.transformPagePoint),yt.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=of(d.type==="pointercancel"?this.lastMoveEventInfo:af(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),g&&g(d,m)},!fm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const a=$o(e),o=af(a,this.transformPagePoint),{point:l}=o,{timestamp:c}=Qt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,of(o,this.history)),this.removeListeners=qo(po(this.contextWindow,"pointermove",this.handlePointerMove),po(this.contextWindow,"pointerup",this.handlePointerUp),po(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Nr(this.updatePoint)}}function af(t,e){return e?{point:e(t.point)}:t}function Dv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function of({point:t},e){return{point:t,delta:Dv(t,XS(e)),offset:Dv(t,bR(e)),velocity:PR(e,.1)}}function bR(t){return t[0]}function XS(t){return t[t.length-1]}function PR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=XS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Wi(e)));)n--;if(!i)return{x:0,y:0};const s=Xi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const a={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const YS=1e-4,DR=1-YS,LR=1+YS,qS=.01,NR=0-qS,IR=0+qS;function On(t){return t.max-t.min}function UR(t,e,n){return Math.abs(t-e)<=n}function Lv(t,e,n,i=.5){t.origin=i,t.originPoint=Tt(e.min,e.max,t.origin),t.scale=On(n)/On(e),t.translate=Tt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=DR&&t.scale<=LR||isNaN(t.scale))&&(t.scale=1),(t.translate>=NR&&t.translate<=IR||isNaN(t.translate))&&(t.translate=0)}function mo(t,e,n,i){Lv(t.x,e.x,n.x,i?i.originX:void 0),Lv(t.y,e.y,n.y,i?i.originY:void 0)}function Nv(t,e,n){t.min=n.min+e.min,t.max=t.min+On(e)}function FR(t,e,n){Nv(t.x,e.x,n.x),Nv(t.y,e.y,n.y)}function Iv(t,e,n){t.min=e.min-n.min,t.max=t.min+On(e)}function go(t,e,n){Iv(t.x,e.x,n.x),Iv(t.y,e.y,n.y)}function OR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Tt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Tt(n,t,i.max):Math.min(t,n)),t}function Uv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function BR(t,{top:e,left:n,bottom:i,right:r}){return{x:Uv(t.x,n,r),y:Uv(t.y,e,i)}}function Fv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function kR(t,e){return{x:Fv(t.x,e.x),y:Fv(t.y,e.y)}}function VR(t,e){let n=.5;const i=On(t),r=On(e);return r>i?n=ga(e.min,e.max-i,t.min):i>r&&(n=ga(t.min,t.max-r,e.min)),Qi(0,1,n)}function zR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Jd=.35;function GR(t=Jd){return t===!1?t=0:t===!0&&(t=Jd),{x:Ov(t,"left","right"),y:Ov(t,"top","bottom")}}function Ov(t,e,n){return{min:Bv(t,e),max:Bv(t,n)}}function Bv(t,e){return typeof t=="number"?t:t[e]||0}const kv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Zs=()=>({x:kv(),y:kv()}),Vv=()=>({min:0,max:0}),Ut=()=>({x:Vv(),y:Vv()});function Hn(t){return[t("x"),t("y")]}function $S({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function HR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function WR(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function lf(t){return t===void 0||t===1}function eh({scale:t,scaleX:e,scaleY:n}){return!lf(t)||!lf(e)||!lf(n)}function $r(t){return eh(t)||KS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function KS(t){return zv(t.x)||zv(t.y)}function zv(t){return t&&t!=="0%"}function Hc(t,e,n){const i=t-n,r=e*i;return n+r}function Gv(t,e,n,i,r){return r!==void 0&&(t=Hc(t,r,i)),Hc(t,n,i)+e}function th(t,e=0,n=1,i,r){t.min=Gv(t.min,e,n,i,r),t.max=Gv(t.max,e,n,i,r)}function jS(t,{x:e,y:n}){th(t.x,e.translate,e.scale,e.originPoint),th(t.y,n.translate,n.scale,n.originPoint)}const Hv=.999999999999,Wv=1.0000000000001;function XR(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,a;for(let o=0;o<r;o++){s=n[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Js(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,jS(t,a)),i&&$r(s.latestValues)&&Js(t,s.latestValues))}e.x<Wv&&e.x>Hv&&(e.x=1),e.y<Wv&&e.y>Hv&&(e.y=1)}function Qs(t,e){t.min=t.min+e,t.max=t.max+e}function Xv(t,e,n,i,r=.5){const s=Tt(t.min,t.max,r);th(t,e,n,s,i)}function Js(t,e){Xv(t.x,e.x,e.scaleX,e.scale,e.originX),Xv(t.y,e.y,e.scaleY,e.scale,e.originY)}function ZS(t,e){return $S(WR(t.getBoundingClientRect(),e))}function YR(t,e,n){const i=ZS(t,n),{scroll:r}=e;return r&&(Qs(i.x,r.offset.x),Qs(i.y,r.offset.y)),i}const QS=({current:t})=>t?t.ownerDocument.defaultView:null,qR=new WeakMap;class $R{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ut(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor($o(u).point)},s=(u,d)=>{const{drag:f,dragPropagation:p,onDragStart:g}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Vw(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Hn(m=>{let h=this.getAxisMotionValue(m).get()||0;if(Ci.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const x=v.layout.layoutBox[m];x&&(h=On(x)*(parseFloat(h)/100))}}this.originPoint[m]=h}),g&&yt.postRender(()=>g(u,d)),Xd(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},a=(u,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:g,onDrag:M}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=KR(m),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),M&&M(u,d)},o=(u,d)=>this.stop(u,d),l=()=>Hn(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new WS(e,{onSessionStart:r,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:QS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&yt.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Ml(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let a=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(a=OR(a,this.constraints[e],this.elastic[e])),s.set(a)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ks(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=BR(r.layoutBox,n):this.constraints=!1,this.elastic=GR(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Hn(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=zR(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ks(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=YR(i,r.root,this.visualElement.getTransformPagePoint());let a=kR(r.layout.layoutBox,s);if(n){const o=n(HR(a));this.hasMutatedConstraints=!!o,o&&(a=$S(o))}return a}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=Hn(u=>{if(!Ml(u,n,this.currentDirection))return;let d=l&&l[u]||{};a&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(o)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Xd(this.visualElement,e),i.start(Em(e,i,0,n,this.visualElement,!1))}stopAnimation(){Hn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Hn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Hn(n=>{const{drag:i}=this.getProps();if(!Ml(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:a,max:o}=r.layout.layoutBox[n];s.set(e[n]-Tt(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ks(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Hn(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();r[a]=VR({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Hn(a=>{if(!Ml(a,e,null))return;const o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(Tt(l,c,r[a]))})}addListeners(){if(!this.visualElement.current)return;qR.set(this.visualElement,this);const e=this.visualElement.current,n=po(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ks(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),yt.read(i);const a=Bo(window,"resize",()=>this.scalePositionWithinConstraints()),o=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Hn(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:a=Jd,dragMomentum:o=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function Ml(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function KR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class jR extends Br{constructor(e){super(e),this.removeGroupControls=In,this.removeListeners=In,this.controls=new $R(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||In}unmount(){this.removeGroupControls(),this.removeListeners()}}const Yv=t=>(e,n)=>{t&&yt.postRender(()=>t(e,n))};class ZR extends Br{constructor(){super(...arguments),this.removePointerDownListener=In}onPointerDown(e){this.session=new WS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:QS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Yv(e),onStart:Yv(n),onMove:i,onEnd:(s,a)=>{delete this.session,r&&yt.postRender(()=>r(s,a))}}}mount(){this.removePointerDownListener=po(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ac={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function qv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Va={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(De.test(t))t=parseFloat(t);else return t;const n=qv(t,e.target.x),i=qv(t,e.target.y);return`${n}% ${i}%`}},QR={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Ir.parse(t);if(r.length>5)return i;const s=Ir.createTransformer(t),a=typeof r[0]!="number"?1:0,o=n.x.scale*e.x,l=n.y.scale*e.y;r[0+a]/=o,r[1+a]/=l;const c=Tt(o,l,.5);return typeof r[2+a]=="number"&&(r[2+a]/=c),typeof r[3+a]=="number"&&(r[3+a]/=c),s(r)}};class JR extends ce.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;xw(eC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ac.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,a=i.projection;return a&&(a.isPresent=s,r||e.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?a.promote():a.relegate()||yt.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Qp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function JS(t){const[e,n]=Uy(),i=ce.useContext(Wp);return Y.jsx(JR,{...t,layoutGroup:i,switchLayoutGroup:ce.useContext(Hy),isPresent:e,safeToRemove:n})}const eC={borderRadius:{...Va,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Va,borderTopRightRadius:Va,borderBottomLeftRadius:Va,borderBottomRightRadius:Va,boxShadow:QR};function tC(t,e,n){const i=dn(t)?t:Fo(t);return i.start(Em("",i,e,n)),i.animation}function nC(t){return t instanceof SVGElement&&t.tagName!=="svg"}const iC=(t,e)=>t.depth-e.depth;class rC{constructor(){this.children=[],this.isDirty=!1}add(e){dm(this.children,e),this.isDirty=!0}remove(e){hm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(iC),this.isDirty=!1,this.children.forEach(e)}}function sC(t,e){const n=bi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Nr(i),t(s-e))};return yt.read(i,!0),()=>Nr(i)}const eM=["TopLeft","TopRight","BottomLeft","BottomRight"],aC=eM.length,$v=t=>typeof t=="string"?parseFloat(t):t,Kv=t=>typeof t=="number"||De.test(t);function oC(t,e,n,i,r,s){r?(t.opacity=Tt(0,n.opacity!==void 0?n.opacity:1,lC(i)),t.opacityExit=Tt(e.opacity!==void 0?e.opacity:1,0,cC(i))):s&&(t.opacity=Tt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let a=0;a<aC;a++){const o=`border${eM[a]}Radius`;let l=jv(e,o),c=jv(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Kv(l)===Kv(c)?(t[o]=Math.max(Tt($v(l),$v(c),i),0),(Ci.test(c)||Ci.test(l))&&(t[o]+="%")):t[o]=c}(e.rotate||n.rotate)&&(t.rotate=Tt(e.rotate||0,n.rotate||0,i))}function jv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const lC=tM(0,.5,xS),cC=tM(.5,.95,In);function tM(t,e,n){return i=>i<t?0:i>e?1:n(ga(t,e,i))}function Zv(t,e){t.min=e.min,t.max=e.max}function zn(t,e){Zv(t.x,e.x),Zv(t.y,e.y)}function Qv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Jv(t,e,n,i,r){return t-=e,t=Hc(t,1/n,i),r!==void 0&&(t=Hc(t,1/r,i)),t}function uC(t,e=0,n=1,i=.5,r,s=t,a=t){if(Ci.test(e)&&(e=parseFloat(e),e=Tt(a.min,a.max,e/100)-a.min),typeof e!="number")return;let o=Tt(s.min,s.max,i);t===s&&(o-=e),t.min=Jv(t.min,e,n,o,r),t.max=Jv(t.max,e,n,o,r)}function e0(t,e,[n,i,r],s,a){uC(t,e[n],e[i],e[r],e.scale,s,a)}const fC=["x","scaleX","originX"],dC=["y","scaleY","originY"];function t0(t,e,n,i){e0(t.x,e,fC,n?n.x:void 0,i?i.x:void 0),e0(t.y,e,dC,n?n.y:void 0,i?i.y:void 0)}function n0(t){return t.translate===0&&t.scale===1}function nM(t){return n0(t.x)&&n0(t.y)}function i0(t,e){return t.min===e.min&&t.max===e.max}function hC(t,e){return i0(t.x,e.x)&&i0(t.y,e.y)}function r0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function iM(t,e){return r0(t.x,e.x)&&r0(t.y,e.y)}function s0(t){return On(t.x)/On(t.y)}function a0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class pC{constructor(){this.members=[]}add(e){dm(this.members,e),e.scheduleRender()}remove(e){if(hm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function mC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,a=(n==null?void 0:n.z)||0;if((r||s||a)&&(i=`translate3d(${r}px, ${s}px, ${a}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const o=t.x.scale*e.x,l=t.y.scale*e.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}const Kr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},eo=typeof window<"u"&&window.MotionDebug!==void 0,cf=["","X","Y","Z"],gC={visibility:"hidden"},o0=1e3;let vC=0;function uf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function rM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=dS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",yt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&rM(i)}function sM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(a={},o=e==null?void 0:e()){this.id=vC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,eo&&(Kr.totalNodes=Kr.resolvedTargetDeltas=Kr.recalculatedProjection=0),this.nodes.forEach(yC),this.nodes.forEach(wC),this.nodes.forEach(AC),this.nodes.forEach(SC),eo&&window.MotionDebug.record(Kr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new rC)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new pm),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=nC(a),this.instance=a;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(a,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=sC(f,250),ac.hasAnimatedSinceResize&&(ac.hasAnimatedSinceResize=!1,this.nodes.forEach(c0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||u.getDefaultTransition()||DC,{onLayoutAnimationStart:m,onLayoutAnimationComplete:h}=u.getProps(),v=!this.targetLayout||!iM(this.targetLayout,g)||p,x=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||f&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,x);const S={...lm(M,"layout"),onPlay:m,onComplete:h};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||c0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Nr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(RC),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(l0);return}this.isUpdating||this.nodes.forEach(EC),this.isUpdating=!1,this.nodes.forEach(TC),this.nodes.forEach(_C),this.nodes.forEach(xC),this.clearAllSnapshots();const o=bi.now();Qt.delta=Qi(0,1e3/60,o-Qt.timestamp),Qt.timestamp=o,Qt.isProcessing=!0,Ju.update.process(Qt),Ju.preRender.process(Qt),Ju.render.process(Qt),Qt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Qp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(MC),this.sharedNodes.forEach(CC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,yt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){yt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ut(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!nM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&(o||$r(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),LC(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return Ut();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(NC))){const{scroll:u}=this.root;u&&(Qs(l.x,u.offset.x),Qs(l.y,u.offset.y))}return l}removeElementScroll(a){var o;const l=Ut();if(zn(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&zn(l,a),Qs(l.x,d.offset.x),Qs(l.y,d.offset.y))}return l}applyTransform(a,o=!1){const l=Ut();zn(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Js(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),$r(u.latestValues)&&Js(l,u.latestValues)}return $r(this.latestValues)&&Js(l,this.latestValues),l}removeTransform(a){const o=Ut();zn(o,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!$r(c.latestValues))continue;eh(c.latestValues)&&c.updateSnapshot();const u=Ut(),d=c.measurePageBox();zn(u,d),t0(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return $r(this.latestValues)&&t0(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Qt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ut(),this.relativeTargetOrigin=Ut(),go(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ut(),this.targetWithTransforms=Ut()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),FR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zn(this.target,this.layout.layoutBox),jS(this.target,this.targetDelta)):zn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ut(),this.relativeTargetOrigin=Ut(),go(this.relativeTargetOrigin,this.target,p.target),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}eo&&Kr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||eh(this.parent.latestValues)||KS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Qt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;zn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;XR(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ut());const{target:g}=o;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Qv(this.prevProjectionDelta.x,this.projectionDelta.x),Qv(this.prevProjectionDelta.y,this.projectionDelta.y)),mo(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!a0(this.projectionDelta.x,this.prevProjectionDelta.x)||!a0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),eo&&Kr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Zs(),this.projectionDelta=Zs(),this.projectionDeltaWithTransform=Zs()}setAnimationOrigin(a,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Zs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const f=Ut(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,M=p!==g,m=this.getStack(),h=!m||m.members.length<=1,v=!!(M&&!h&&this.options.crossfade===!0&&!this.path.some(PC));this.animationProgress=0;let x;this.mixTargetDelta=S=>{const T=S/1e3;u0(d.x,a.x,T),u0(d.y,a.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(go(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),bC(this.relativeTarget,this.relativeTargetOrigin,f,T),x&&hC(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ut()),zn(x,this.relativeTarget)),M&&(this.animationValues=u,oC(u,c,this.latestValues,T,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Nr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=yt.update(()=>{ac.hasAnimatedSinceResize=!0,this.currentAnimation=tC(0,o0,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(o0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&aM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ut();const d=On(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+d;const f=On(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}zn(o,l),Js(o,u),mo(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new pC),this.sharedNodes.get(a).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&uf("z",a,c,this.animationValues);for(let u=0;u<cf.length;u++)uf(`rotate${cf[u]}`,a,c,this.animationValues),uf(`skew${cf[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return gC;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=rc(a==null?void 0:a.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const M={};return this.options.layoutId&&(M.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,M.pointerEvents=rc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!$r(this.latestValues)&&(M.transform=u?u({},""):"none",this.hasProjected=!1),M}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=mC(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:p,y:g}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(o=f.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const M in Bc){if(f[M]===void 0)continue;const{correct:m,applyTo:h}=Bc[M],v=c.transform==="none"?f[M]:m(f[M],d);if(h){const x=h.length;for(let S=0;S<x;S++)c[h[S]]=v}else c[M]=v}return this.options.layoutId&&(c.pointerEvents=d===this?rc(a==null?void 0:a.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(l0),this.root.sharedNodes.clear()}}}function _C(t){t.updateLayout()}function xC(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,a=n.source!==t.layout.source;s==="size"?Hn(d=>{const f=a?n.measuredBox[d]:n.layoutBox[d],p=On(f);f.min=i[d].min,f.max=f.min+p}):aM(s,n.layoutBox,i)&&Hn(d=>{const f=a?n.measuredBox[d]:n.layoutBox[d],p=On(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const o=Zs();mo(o,i,n.layoutBox);const l=Zs();a?mo(l,t.applyTransform(r,!0),n.measuredBox):mo(l,i,n.layoutBox);const c=!nM(o);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const g=Ut();go(g,n.layoutBox,f.layoutBox);const M=Ut();go(M,i,p.layoutBox),iM(g,M)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=M,t.relativeTargetOrigin=g,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function yC(t){eo&&Kr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function SC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function MC(t){t.clearSnapshot()}function l0(t){t.clearMeasurements()}function EC(t){t.isLayoutDirty=!1}function TC(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function c0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function wC(t){t.resolveTargetDelta()}function AC(t){t.calcProjection()}function RC(t){t.resetSkewAndRotation()}function CC(t){t.removeLeadSnapshot()}function u0(t,e,n){t.translate=Tt(e.translate,0,n),t.scale=Tt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function f0(t,e,n,i){t.min=Tt(e.min,n.min,i),t.max=Tt(e.max,n.max,i)}function bC(t,e,n,i){f0(t.x,e.x,n.x,i),f0(t.y,e.y,n.y,i)}function PC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const DC={duration:.45,ease:[.4,0,.1,1]},d0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),h0=d0("applewebkit/")&&!d0("chrome/")?Math.round:In;function p0(t){t.min=h0(t.min),t.max=h0(t.max)}function LC(t){p0(t.x),p0(t.y)}function aM(t,e,n){return t==="position"||t==="preserve-aspect"&&!UR(s0(e),s0(n),.2)}function NC(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const IC=sM({attachResizeListener:(t,e)=>Bo(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ff={current:void 0},oM=sM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ff.current){const t=new IC({});t.mount(window),t.setOptions({layoutScroll:!0}),ff.current=t}return ff.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),UC={pan:{Feature:ZR},drag:{Feature:jR,ProjectionNode:oM,MeasureLayout:JS}};function m0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&yt.postRender(()=>s(e,$o(e)))}class FC extends Br{mount(){const{current:e}=this.node;e&&(this.unmount=Uw(e,n=>(m0(this.node,n,"Start"),i=>m0(this.node,i,"End"))))}unmount(){}}class OC extends Br{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qo(Bo(this.node.current,"focus",()=>this.onFocus()),Bo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function g0(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&yt.postRender(()=>s(e,$o(e)))}class BC extends Br{mount(){const{current:e}=this.node;e&&(this.unmount=kw(e,n=>(g0(this.node,n,"Start"),(i,{success:r})=>g0(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const nh=new WeakMap,df=new WeakMap,kC=t=>{const e=nh.get(t.target);e&&e(t)},VC=t=>{t.forEach(kC)};function zC({root:t,...e}){const n=t||document;df.has(n)||df.set(n,{});const i=df.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(VC,{root:t,...e})),i[r]}function GC(t,e,n){const i=zC(e);return nh.set(t,n),i.observe(t),()=>{nh.delete(t),i.unobserve(t)}}const HC={some:0,all:1};class WC extends Br{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:HC[r]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return GC(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(XC(e,n))&&this.startObserver()}unmount(){}}function XC({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const YC={inView:{Feature:WC},tap:{Feature:BC},focus:{Feature:OC},hover:{Feature:FC}},qC={layout:{ProjectionNode:oM,MeasureLayout:JS}},ih={current:null},lM={current:!1};function $C(){if(lM.current=!0,!!qp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ih.current=t.matches;t.addListener(e),e()}else ih.current=!1}const KC=[...NS,cn,Ir],jC=t=>KC.find(LS(t)),v0=new WeakMap;function ZC(t,e,n){for(const i in e){const r=e[i],s=n[i];if(dn(r))t.addValue(i,r);else if(dn(s))t.addValue(i,Fo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const a=t.getValue(i);a.liveStyle===!0?a.jump(r):a.hasAnimated||a.set(r)}else{const a=t.getStaticValue(i);t.addValue(i,Fo(a!==void 0?a:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const _0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class QC{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ym,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=bi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,yt.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=a;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=gu(n),this.isVariantNode=zy(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const g=f[p];l[p]!==void 0&&dn(g)&&g.set(l[p],!1)}}mount(e){this.current=e,v0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),lM.current||$C(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ih.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){v0.delete(this.current),this.projection&&this.projection.unmount(),Nr(this.notifyUpdate),Nr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=xs.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&yt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in va){const n=va[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ut()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<_0.length;i++){const r=_0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,a=e[s];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=ZC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Fo(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(PS(r)||SS(r))?r=parseFloat(r):!jC(r)&&Ir.test(n)&&(r=RS(e,n)),this.setBaseTarget(e,dn(r)?r.get():r)),dn(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const a=em(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(r=a[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!dn(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new pm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class cM extends QC{constructor(){super(...arguments),this.KeyframeResolver=IS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;dn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function JC(t){return window.getComputedStyle(t)}class eb extends cM{constructor(){super(...arguments),this.type="html",this.renderInstance=jy}readValueFromInstance(e,n){if(xs.has(n)){const i=xm(n);return i&&i.default||0}else{const i=JC(e),r=(qy(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return ZS(e,n)}build(e,n,i){im(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return om(e,n,i)}}class tb extends cM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ut}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(xs.has(n)){const i=xm(n);return i&&i.default||0}return n=Zy.has(n)?n:Zp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return eS(e,n,i)}build(e,n,i){rm(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Qy(e,n,i,r)}mount(e){this.isSVGTag=am(e.tagName),super.mount(e)}}const nb=(t,e)=>Jp(t)?new tb(e):new eb(e,{allowProjection:t!==ce.Fragment}),ib=Cw({...AR,...YC,...UC,...qC},nb),Yn=H1(ib);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="185",rb=0,x0=1,sb=2,oc=1,ab=2,to=3,Ji=0,$t=1,Dn=2,di=0,aa=1,y0=2,S0=3,M0=4,ob=5,Zr=100,lb=101,cb=102,ub=103,fb=104,db=200,hb=201,pb=202,mb=203,rh=204,sh=205,gb=206,vb=207,_b=208,xb=209,yb=210,Sb=211,Mb=212,Eb=213,Tb=214,ah=0,Wc=1,oh=2,xa=3,lh=4,ch=5,uh=6,fh=7,uM=0,wb=1,Ab=2,Pi=0,fM=1,dM=2,hM=3,pM=4,mM=5,gM=6,vM=7,_M=300,hs=301,ya=302,hf=303,pf=304,yu=306,dh=1e3,Gi=1001,hh=1002,Jt=1003,Rb=1004,El=1005,Lt=1006,mf=1007,is=1008,fn=1009,xM=1010,yM=1011,ko=1012,Tm=1013,Di=1014,li=1015,er=1016,wm=1017,Am=1018,Sa=1020,SM=35902,MM=35899,EM=1021,TM=1022,ci=1023,tr=1026,Sr=1027,wM=1028,Rm=1029,ps=1030,Cm=1031,bm=1033,lc=33776,cc=33777,uc=33778,fc=33779,ph=35840,mh=35841,gh=35842,vh=35843,_h=36196,xh=37492,yh=37496,Sh=37488,Mh=37489,Xc=37490,Eh=37491,Th=37808,wh=37809,Ah=37810,Rh=37811,Ch=37812,bh=37813,Ph=37814,Dh=37815,Lh=37816,Nh=37817,Ih=37818,Uh=37819,Fh=37820,Oh=37821,Bh=36492,kh=36494,Vh=36495,zh=36283,Gh=36284,Yc=36285,Hh=36286,Ko=3200,E0=0,Cb=1,Ti="",Ot="srgb",Ma="srgb-linear",qc="linear",ct="srgb",Es=7680,T0=519,bb=512,Pb=513,Db=514,Pm=515,Lb=516,Nb=517,Dm=518,Ib=519,w0=35044,Wh="300 es",wi=2e3,$c=2001;function Ub(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Fb(){const t=Kc("canvas");return t.style.display="block",t}const A0={};function R0(...t){const e="THREE."+t.shift();console.log(e,...t)}function AM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=AM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=AM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function oa(...t){const e=t.join(" ");e in A0||(A0[e]=!0,Le(...t))}function Ob(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Bb={[ah]:Wc,[oh]:uh,[lh]:fh,[xa]:ch,[Wc]:ah,[uh]:oh,[fh]:lh,[ch]:xa};class ir{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=Math.PI/180,Xh=180/Math.PI;function jo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[t&255]+on[t>>8&255]+on[t>>16&255]+on[t>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[n&63|128]+on[n>>8&255]+"-"+on[n>>16&255]+on[n>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function kb(t,e){return(t%e+e)%e}function vf(t,e,n){return(1-n)*t+n*e}function za(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Im=class Im{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Im.prototype.isVector2=!0;let ze=Im;class ba{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],g=s[a+2],M=s[a+3];if(d!==M||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+d*M;m<0&&(f=-f,p=-p,g=-g,M=-M,m=-m);let h=1-o;if(m<.9995){const v=Math.acos(m),x=Math.sin(v);h=Math.sin(h*v)/x,o=Math.sin(o*v)/x,l=l*h+f*o,c=c*h+p*o,u=u*h+g*o,d=d*h+M*o}else{l=l*h+f*o,c=c*h+p*o,u=u*h+g*o,d=d*h+M*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[n]=o*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-o*p,e[n+2]=c*g+u*p+o*f-l*d,e[n+3]=u*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Um=class Um{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(C0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(C0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _f.copy(this).projectOnVector(e),this.sub(_f)}reflect(e){return this.sub(_f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Um.prototype.isVector3=!0;let H=Um;const _f=new H,C0=new ba,Fm=class Fm{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],M=r[0],m=r[3],h=r[6],v=r[1],x=r[4],S=r[7],T=r[2],w=r[5],R=r[8];return s[0]=a*M+o*v+l*T,s[3]=a*m+o*x+l*w,s[6]=a*h+o*S+l*R,s[1]=c*M+u*v+d*T,s[4]=c*m+u*x+d*w,s[7]=c*h+u*S+d*R,s[2]=f*M+p*v+g*T,s[5]=f*m+p*x+g*w,s[8]=f*h+p*S+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return oa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xf.makeScale(e,n)),this}rotate(e){return oa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xf.makeRotation(-e)),this}translate(e,n){return oa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fm.prototype.isMatrix3=!0;let Fe=Fm;const xf=new Fe,b0=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P0=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vb(){const t={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Yi(r.r),r.g=Yi(r.g),r.b=Yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=la(r.r),r.g=la(r.g),r.b=la(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?qc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return oa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return oa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ma]:{primaries:e,whitePoint:i,transfer:qc,toXYZ:b0,fromXYZ:P0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:b0,fromXYZ:P0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),t}const je=Vb();function Yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function la(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ts;class zb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ts===void 0&&(Ts=Kc("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ts}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yi(n[i]/255)*255):n[i]=Yi(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gb=0;class Lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yf(r[a].image)):s.push(yf(r[a]))}else s=yf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function yf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Hb=0;const Sf=new H;class jt extends ir{constructor(e=jt.DEFAULT_IMAGE,n=jt.DEFAULT_MAPPING,i=Gi,r=Gi,s=Lt,a=is,o=ci,l=fn,c=jt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=jo(),this.name="",this.source=new Lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sf).x}get height(){return this.source.getSize(Sf).y}get depth(){return this.source.getSize(Sf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_M)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dh:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dh:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=_M;jt.DEFAULT_ANISOTROPY=1;const Om=class Om{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],M=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,T=(h+1)/2,w=(u+f)/4,R=(d+M)/4,_=(g+m)/4;return x>S&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=R/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=_/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-M)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Om.prototype.isVector4=!0;let Dt=Om;class Wb extends ir{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new jt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Lm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Wb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class RM extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xb extends jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,n,i,r,s,a,o,l,c,u,d,f,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,f,p,g,M,m)}set(e,n,i,r,s,a,o,l,c,u,d,f,p,g,M,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=M,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,g=o*u,M=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,M=c*d;n[0]=f+M*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-g,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,M=c*d;n[0]=f-M*o,n[4]=-a*d,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*u,n[9]=M-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,g=o*u,M=o*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+M,n[1]=l*d,n[5]=M*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,M=o*c;n[0]=l*u,n[4]=M-f*d,n[8]=g*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-M*d}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,M=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+M,n[5]=a*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=o*u,n[10]=M*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yb,e,qb)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),lr.crossVectors(i,Cn),lr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),lr.crossVectors(i,Cn)),lr.normalize(),Tl.crossVectors(Cn,lr),r[0]=lr.x,r[4]=Tl.x,r[8]=Cn.x,r[1]=lr.y,r[5]=Tl.y,r[9]=Cn.y,r[2]=lr.z,r[6]=Tl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],M=i[6],m=i[10],h=i[14],v=i[3],x=i[7],S=i[11],T=i[15],w=r[0],R=r[4],_=r[8],A=r[12],b=r[1],D=r[5],B=r[9],$=r[13],ee=r[2],k=r[6],Z=r[10],F=r[14],P=r[3],U=r[7],X=r[11],ne=r[15];return s[0]=a*w+o*b+l*ee+c*P,s[4]=a*R+o*D+l*k+c*U,s[8]=a*_+o*B+l*Z+c*X,s[12]=a*A+o*$+l*F+c*ne,s[1]=u*w+d*b+f*ee+p*P,s[5]=u*R+d*D+f*k+p*U,s[9]=u*_+d*B+f*Z+p*X,s[13]=u*A+d*$+f*F+p*ne,s[2]=g*w+M*b+m*ee+h*P,s[6]=g*R+M*D+m*k+h*U,s[10]=g*_+M*B+m*Z+h*X,s[14]=g*A+M*$+m*F+h*ne,s[3]=v*w+x*b+S*ee+T*P,s[7]=v*R+x*D+S*k+T*U,s[11]=v*_+x*B+S*Z+T*X,s[15]=v*A+x*$+S*F+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],M=e[7],m=e[11],h=e[15],v=l*p-c*f,x=o*p-c*d,S=o*f-l*d,T=a*p-c*u,w=a*f-l*u,R=a*d-o*u;return n*(M*v-m*x+h*S)-i*(g*v-m*T+h*w)+r*(g*x-M*T+h*R)-s*(g*S-M*w+m*R)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],M=e[13],m=e[14],h=e[15],v=n*o-i*a,x=n*l-r*a,S=n*c-s*a,T=i*l-r*o,w=i*c-s*o,R=r*c-s*l,_=u*M-d*g,A=u*m-f*g,b=u*h-p*g,D=d*m-f*M,B=d*h-p*M,$=f*h-p*m,ee=v*$-x*B+S*D+T*b-w*A+R*_;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/ee;return e[0]=(o*$-l*B+c*D)*k,e[1]=(r*B-i*$-s*D)*k,e[2]=(M*R-m*w+h*T)*k,e[3]=(f*w-d*R-p*T)*k,e[4]=(l*b-a*$-c*A)*k,e[5]=(n*$-r*b+s*A)*k,e[6]=(m*S-g*R-h*x)*k,e[7]=(u*R-f*S+p*x)*k,e[8]=(a*B-o*b+c*_)*k,e[9]=(i*b-n*B-s*_)*k,e[10]=(g*w-M*S+h*v)*k,e[11]=(d*S-u*w-p*v)*k,e[12]=(o*A-a*D-l*_)*k,e[13]=(n*D-i*A+r*_)*k,e[14]=(M*x-g*T-m*v)*k,e[15]=(u*T-d*x+f*v)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,f=s*c,p=s*u,g=s*d,M=a*u,m=a*d,h=o*d,v=l*c,x=l*u,S=l*d,T=i.x,w=i.y,R=i.z;return r[0]=(1-(M+h))*T,r[1]=(p+S)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*R,r[9]=(m-v)*R,r[10]=(1-(f+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ws.set(r[0],r[1],r[2]).length();const o=ws.set(r[4],r[5],r[6]).length(),l=ws.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ei.copy(this);const c=1/a,u=1/o,d=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,n.setFromRotationMatrix(ei),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=wi,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,M;if(l)g=s/(a-s),M=a*s/(a-s);else if(o===wi)g=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===$c)g=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=wi,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,M;if(l)g=1/(a-s),M=a/(a-s);else if(o===wi)g=-2/(a-s),M=-(a+s)/(a-s);else if(o===$c)g=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};jc.prototype.isMatrix4=!0;let zt=jc;const ws=new H,ei=new zt,Yb=new H(0,0,0),qb=new H(1,1,1),lr=new H,Tl=new H,Cn=new H,D0=new zt,L0=new ba;class ms{constructor(e=0,n=0,i=0,r=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return D0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return L0.setFromEuler(this),this.setFromQuaternion(L0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class CM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $b=0;const N0=new H,As=new ba,Ni=new zt,wl=new H,Ga=new H,Kb=new H,jb=new ba,I0=new H(1,0,0),U0=new H(0,1,0),F0=new H(0,0,1),O0={type:"added"},Zb={type:"removed"},Rs={type:"childadded",child:null},Mf={type:"childremoved",child:null};class Un extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new H,n=new ms,i=new ba,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new Fe}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new CM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(I0,e)}rotateY(e){return this.rotateOnAxis(U0,e)}rotateZ(e){return this.rotateOnAxis(F0,e)}translateOnAxis(e,n){return N0.copy(e).applyQuaternion(this.quaternion),this.position.add(N0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(I0,e)}translateY(e){return this.translateOnAxis(U0,e)}translateZ(e){return this.translateOnAxis(F0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wl.copy(e):wl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Ga,wl,this.up):Ni.lookAt(wl,Ga,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),As.setFromRotationMatrix(Ni),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Zb),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O0),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,Kb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,jb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Un.DEFAULT_UP=new H(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Al extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qb={type:"move"};class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),h=this._getHandJoint(c,M);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Al;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function Tf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=kb(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Tf(a,s,e+1/3),this.g=Tf(a,s,e),this.b=Tf(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=bM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return je.workingToColorSpace(ln.copy(this),e),Math.round(Ze(ln.r*255,0,255))*65536+Math.round(Ze(ln.g*255,0,255))*256+Math.round(Ze(ln.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Ot){je.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(Rl);const i=vf(cr.h,Rl.h,n),r=vf(cr.s,Rl.s,n),s=vf(cr.l,Rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new rt;rt.NAMES=bM;class Yh extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ti=new H,Ii=new H,wf=new H,Ui=new H,Cs=new H,bs=new H,B0=new H,Af=new H,Rf=new H,Cf=new H,bf=new Dt,Pf=new Dt,Df=new Dt;class oi{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Ii.subVectors(i,n),wf.subVectors(e,n);const a=ti.dot(ti),o=ti.dot(Ii),l=ti.dot(wf),c=Ii.dot(Ii),u=Ii.dot(wf),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return bf.setScalar(0),Pf.setScalar(0),Df.setScalar(0),bf.fromBufferAttribute(e,n),Pf.fromBufferAttribute(e,i),Df.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(bf,s.x),a.addScaledVector(Pf,s.y),a.addScaledVector(Df,s.z),a}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Ii.subVectors(e,n),ti.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ti.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Cs.subVectors(r,i),bs.subVectors(s,i),Af.subVectors(e,i);const l=Cs.dot(Af),c=bs.dot(Af);if(l<=0&&c<=0)return n.copy(i);Rf.subVectors(e,r);const u=Cs.dot(Rf),d=bs.dot(Rf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Cs,a);Cf.subVectors(e,s);const p=Cs.dot(Cf),g=bs.dot(Cf);if(g>=0&&p<=g)return n.copy(s);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(bs,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return B0.subVectors(s,r),o=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(B0,o);const h=1/(m+M+f);return a=M*h,o=f*h,n.copy(i).addScaledVector(Cs,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Zo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cl.copy(i.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),bl.subVectors(this.max,Ha),Ps.subVectors(e.a,Ha),Ds.subVectors(e.b,Ha),Ls.subVectors(e.c,Ha),ur.subVectors(Ds,Ps),fr.subVectors(Ls,Ds),Gr.subVectors(Ps,Ls);let n=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-Gr.z,Gr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,Gr.z,0,-Gr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-Gr.y,Gr.x,0];return!Lf(n,Ps,Ds,Ls,bl)||(n=[1,0,0,0,1,0,0,0,1],!Lf(n,Ps,Ds,Ls,bl))?!1:(Pl.crossVectors(ur,fr),n=[Pl.x,Pl.y,Pl.z],Lf(n,Ps,Ds,Ls,bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new H,new H,new H,new H,new H,new H,new H,new H],ni=new H,Cl=new Zo,Ps=new H,Ds=new H,Ls=new H,ur=new H,fr=new H,Gr=new H,Ha=new H,bl=new H,Pl=new H,Hr=new H;function Lf(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Hr.fromArray(t,s);const o=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),c=n.dot(Hr),u=i.dot(Hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kt=new H,Dl=new ze;let Jb=0;class jn extends ir{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=w0,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Dl.fromBufferAttribute(this,n),Dl.applyMatrix3(e),this.setXY(n,Dl.x,Dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=za(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=za(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=za(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=za(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=za(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class PM extends jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class DM extends jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qi extends jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const eP=new Zo,Wa=new H,Nf=new H;class Nm{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const n=Wa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Nf)),this.expandByPoint(Wa.copy(e.center).sub(Nf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tP=0;const Gn=new zt,If=new Un,Ns=new H,bn=new Zo,Xa=new Zo,Yt=new H;class Li extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tP++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ub(e)?DM:PM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return If.lookAt(e),If.updateMatrix(),this.applyMatrix4(If.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(bn.min,Xa.min),bn.expandByPoint(Yt),Yt.addVectors(bn.max,Xa.max),bn.expandByPoint(Yt)):(bn.expandByPoint(Xa.min),bn.expandByPoint(Xa.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(e,c),Yt.add(Ns)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new H,l[_]=new H;const c=new H,u=new H,d=new H,f=new ze,p=new ze,g=new ze,M=new H,m=new H;function h(_,A,b){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,b),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[_].add(M),o[A].add(M),o[b].add(M),l[_].add(m),l[A].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,A=v.length;_<A;++_){const b=v[_],D=b.start,B=b.count;for(let $=D,ee=D+B;$<ee;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}const x=new H,S=new H,T=new H,w=new H;function R(_){T.fromBufferAttribute(r,_),w.copy(T);const A=o[_];x.copy(A),x.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(w,A);const D=S.dot(l[_])<0?-1:1;a.setXYZW(_,x.x,x.y,x.z,D)}for(let _=0,A=v.length;_<A;++_){const b=v[_],D=b.start,B=b.count;for(let $=D,ee=D+B;$<ee;$+=3)R(e.getX($+0)),R(e.getX($+1)),R(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new jn(f,u,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Li,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nP=0;class Pa extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nP++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=aa,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==sh&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Oi=new H,Uf=new H,Ll=new H,dr=new H,Ff=new H,Nl=new H,Of=new H;class iP{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Uf.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Uf);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ll),o=dr.dot(this.direction),l=-dr.dot(Ll),c=dr.lengthSq(),u=Math.abs(1-a*a);let d,f,p,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const M=1/u;d*=M,f*=M,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Uf).addScaledVector(Ll,f),p}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){Ff.subVectors(n,e),Nl.subVectors(i,e),Of.crossVectors(Ff,Nl);let a=this.direction.dot(Of),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;dr.subVectors(this.origin,e);const l=o*this.direction.dot(Nl.crossVectors(dr,Nl));if(l<0)return null;const c=o*this.direction.dot(Ff.cross(dr));if(c<0||l+c>a)return null;const u=-o*dr.dot(Of);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class LM extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=uM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const k0=new zt,Wr=new iP,Il=new Nm,V0=new H,Ul=new H,Fl=new H,Ol=new H,Bf=new H,Bl=new H,z0=new H,kl=new H;class pi extends Un{constructor(e=new Li,n=new LM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Bf.fromBufferAttribute(d,e),a?Bl.addScaledVector(Bf,u):Bl.addScaledVector(Bf.sub(n),u))}n.add(Bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(Il.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Il,V0)===null||Wr.origin.distanceToSquared(V0)>(e.far-e.near)**2))&&(k0.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(k0),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],h=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=x;S<T;S+=3){const w=o.getX(S),R=o.getX(S+1),_=o.getX(S+2);r=Vl(this,h,e,i,c,u,d,w,R,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,h=M;m<h;m+=3){const v=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=Vl(this,a,e,i,c,u,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],h=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,T=x;S<T;S+=3){const w=S,R=S+1,_=S+2;r=Vl(this,h,e,i,c,u,d,w,R,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,h=M;m<h;m+=3){const v=m,x=m+1,S=m+2;r=Vl(this,a,e,i,c,u,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function rP(t,e,n,i,r,s,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ji,o),l===null)return null;kl.copy(o),kl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(kl);return c<n.near||c>n.far?null:{distance:c,point:kl.clone(),object:t}}function Vl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ul),t.getVertexPosition(l,Fl),t.getVertexPosition(c,Ol);const u=rP(t,e,n,i,Ul,Fl,Ol,z0);if(u){const d=new H;oi.getBarycoord(z0,Ul,Fl,Ol,d),r&&(u.uv=oi.getInterpolatedAttribute(r,o,l,c,d,new ze)),s&&(u.uv1=oi.getInterpolatedAttribute(s,o,l,c,d,new ze)),a&&(u.normal=oi.getInterpolatedAttribute(a,o,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};oi.getNormal(Ul,Fl,Ol,f.normal),u.face=f,u.barycoord=d}return u}class sP extends jt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Jt,u=Jt,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kf=new H,aP=new H,oP=new Fe;class jr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=kf.subVectors(i,n).cross(aP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(kf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oP.getNormalMatrix(e),r=this.coplanarPoint(kf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Nm,lP=new ze(.5,.5),zl=new H;class NM{constructor(e=new jr,n=new jr,i=new jr,r=new jr,s=new jr,a=new jr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],M=s[9],m=s[10],h=s[11],v=s[12],x=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-a,p-u,h-g,T-v).normalize(),r[1].setComponents(c+a,p+u,h+g,T+v).normalize(),r[2].setComponents(c+o,p+d,h+M,T+x).normalize(),r[3].setComponents(c-o,p-d,h-M,T-x).normalize(),i)r[4].setComponents(l,f,m,S).normalize(),r[5].setComponents(c-l,p-f,h-m,T-S).normalize();else if(r[4].setComponents(c-l,p-f,h-m,T-S).normalize(),n===wi)r[5].setComponents(c+l,p+f,h+m,T+S).normalize();else if(n===$c)r[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const n=lP.distanceTo(e.center);return Xr.radius=.7071067811865476+n,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zl.x=r.normal.x>0?e.max.x:e.min.x,zl.y=r.normal.y>0?e.max.y:e.min.y,zl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class IM extends jt{constructor(e=[],n=hs,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gs extends jt{constructor(e,n,i=Di,r,s,a,o=Jt,l=Jt,c,u=tr,d=1){if(u!==tr&&u!==Sr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cP extends gs{constructor(e,n=Di,i=hs,r,s,a=Jt,o=Jt,l,c=tr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class UM extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qo extends Li{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qi(c,3)),this.setAttribute("normal",new qi(u,3)),this.setAttribute("uv",new qi(d,2));function g(M,m,h,v,x,S,T,w,R,_,A){const b=S/R,D=T/_,B=S/2,$=T/2,ee=w/2,k=R+1,Z=_+1;let F=0,P=0;const U=new H;for(let X=0;X<Z;X++){const ne=X*D-$;for(let se=0;se<k;se++){const He=se*b-B;U[M]=He*v,U[m]=ne*x,U[h]=ee,c.push(U.x,U.y,U.z),U[M]=0,U[m]=0,U[h]=w>0?1:-1,u.push(U.x,U.y,U.z),d.push(se/R),d.push(1-X/_),F+=1}}for(let X=0;X<_;X++)for(let ne=0;ne<R;ne++){const se=f+ne+k*X,He=f+ne+k*(X+1),nt=f+(ne+1)+k*(X+1),Xe=f+(ne+1)+k*X;l.push(se,He,Xe),l.push(He,nt,Xe),P+=6}o.addGroup(p,P,A),p+=P,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jo extends Li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=n/l,p=[],g=[],M=[],m=[];for(let h=0;h<u;h++){const v=h*f-a;for(let x=0;x<c;x++){const S=x*d-s;g.push(S,-v,0),M.push(0,0,1),m.push(x/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){const x=v+c*h,S=v+c*(h+1),T=v+1+c*(h+1),w=v+1+c*h;p.push(x,S,w),p.push(S,T,w)}this.setIndex(p),this.setAttribute("position",new qi(g,3)),this.setAttribute("normal",new qi(M,3)),this.setAttribute("uv",new qi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(G0(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(G0(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=Ea(t[n]);for(const r in i)e[r]=i[r]}return e}function G0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function uP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function FM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const fP={clone:Ea,merge:pn};var dP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dP,this.fragmentShader=hP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=uP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new rt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new zt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pP extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mP extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ko,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gP extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gl=new H,Hl=new ba,xi=new H;class OM extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Hl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Hl,xi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Gl,Hl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Hl,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new H,H0=new ze,W0=new ze;class qn extends OM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,H0,W0),n.subVectors(W0,H0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Su extends OM{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=-90,Us=1;class vP extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Is,Us,e,n);r.layers=this.layers,this.add(r);const s=new qn(Is,Us,e,n);s.layers=this.layers,this.add(s);const a=new qn(Is,Us,e,n);a.layers=this.layers,this.add(a);const o=new qn(Is,Us,e,n);o.layers=this.layers,this.add(o);const l=new qn(Is,Us,e,n);l.layers=this.layers,this.add(l);const c=new qn(Is,Us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$c)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _P extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ft{constructor(e){this.value=e}clone(){return new Ft(this.value.clone===void 0?this.value:this.value.clone())}}class xP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Bm=class Bm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Bm.prototype.isMatrix2=!0;let X0=Bm;function Y0(t,e,n,i){const r=yP(i);switch(n){case EM:return t*e;case wM:return t*e/r.components*r.byteLength;case Rm:return t*e/r.components*r.byteLength;case ps:return t*e*2/r.components*r.byteLength;case Cm:return t*e*2/r.components*r.byteLength;case TM:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case bm:return t*e*4/r.components*r.byteLength;case lc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uc:case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mh:case vh:return Math.max(t,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(t,8)*Math.max(e,8)/2;case _h:case xh:case Sh:case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yh:case Xc:case Eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Bh:case kh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yc:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yP(t){switch(t){case fn:case xM:return{byteLength:1,components:1};case ko:case yM:case er:return{byteLength:2,components:1};case wm:case Am:return{byteLength:2,components:4};case Di:case Tm:case li:return{byteLength:4,components:1};case SM:case MM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function BM(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function SP(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],M=d[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,d[f]=M)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const M=d[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var MP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EP=`#ifdef USE_ALPHAHASH
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
#endif`,TP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CP=`#ifdef USE_AOMAP
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
#endif`,bP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PP=`#ifdef USE_BATCHING
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
#endif`,DP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UP=`#ifdef USE_IRIDESCENCE
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
#endif`,FP=`#ifdef USE_BUMPMAP
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
#endif`,OP=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,WP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,XP=`#define PI 3.141592653589793
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
} // validated`,YP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qP=`vec3 transformedNormal = objectNormal;
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
#endif`,$P=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QP="gl_FragColor = linearToOutputTexel( gl_FragColor );",JP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e3=`#ifdef USE_ENVMAP
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
#endif`,t3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n3=`#ifdef USE_ENVMAP
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
#endif`,i3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r3=`#ifdef USE_ENVMAP
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
#endif`,s3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c3=`#ifdef USE_GRADIENTMAP
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
}`,u3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,h3=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,p3=`#ifdef USE_ENVMAP
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
#endif`,m3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x3=`PhysicalMaterial material;
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
#endif`,y3=`uniform sampler2D dfgLUT;
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
}`,S3=`
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
#endif`,M3=`#if defined( RE_IndirectDiffuse )
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
#endif`,E3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T3=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,w3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L3=`#if defined( USE_POINTS_UV )
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
#endif`,N3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B3=`#ifdef USE_MORPHTARGETS
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
#endif`,k3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,X3=`#ifdef USE_NORMALMAP
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
#endif`,Y3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oD=`float getShadowMask() {
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
}`,lD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cD=`#ifdef USE_SKINNING
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
#endif`,uD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fD=`#ifdef USE_SKINNING
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
#endif`,dD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gD=`#ifdef USE_TRANSMISSION
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
#endif`,vD=`#ifdef USE_TRANSMISSION
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
#endif`,_D=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ED=`uniform sampler2D t2D;
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
}`,TD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CD=`#include <common>
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
}`,bD=`#if DEPTH_PACKING == 3200
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
}`,PD=`#define DISTANCE
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
}`,DD=`#define DISTANCE
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
}`,LD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ND=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ID=`uniform float scale;
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
}`,UD=`uniform vec3 diffuse;
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
}`,FD=`#include <common>
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
}`,OD=`uniform vec3 diffuse;
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
}`,BD=`#define LAMBERT
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
}`,kD=`#define LAMBERT
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
}`,VD=`#define MATCAP
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
}`,zD=`#define MATCAP
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
}`,GD=`#define NORMAL
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
}`,HD=`#define NORMAL
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
}`,WD=`#define PHONG
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
}`,XD=`#define PHONG
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
}`,YD=`#define STANDARD
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
}`,qD=`#define STANDARD
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
}`,$D=`#define TOON
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
}`,KD=`#define TOON
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
}`,jD=`uniform float size;
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
}`,ZD=`uniform vec3 diffuse;
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
}`,QD=`#include <common>
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
}`,JD=`uniform vec3 color;
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
}`,e2=`uniform float rotation;
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
}`,t2=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:MP,alphahash_pars_fragment:EP,alphamap_fragment:TP,alphamap_pars_fragment:wP,alphatest_fragment:AP,alphatest_pars_fragment:RP,aomap_fragment:CP,aomap_pars_fragment:bP,batching_pars_vertex:PP,batching_vertex:DP,begin_vertex:LP,beginnormal_vertex:NP,bsdfs:IP,iridescence_fragment:UP,bumpmap_pars_fragment:FP,clipping_planes_fragment:OP,clipping_planes_pars_fragment:BP,clipping_planes_pars_vertex:kP,clipping_planes_vertex:VP,color_fragment:zP,color_pars_fragment:GP,color_pars_vertex:HP,color_vertex:WP,common:XP,cube_uv_reflection_fragment:YP,defaultnormal_vertex:qP,displacementmap_pars_vertex:$P,displacementmap_vertex:KP,emissivemap_fragment:jP,emissivemap_pars_fragment:ZP,colorspace_fragment:QP,colorspace_pars_fragment:JP,envmap_fragment:e3,envmap_common_pars_fragment:t3,envmap_pars_fragment:n3,envmap_pars_vertex:i3,envmap_physical_pars_fragment:p3,envmap_vertex:r3,fog_vertex:s3,fog_pars_vertex:a3,fog_fragment:o3,fog_pars_fragment:l3,gradientmap_pars_fragment:c3,lightmap_pars_fragment:u3,lights_lambert_fragment:f3,lights_lambert_pars_fragment:d3,lights_pars_begin:h3,lights_toon_fragment:m3,lights_toon_pars_fragment:g3,lights_phong_fragment:v3,lights_phong_pars_fragment:_3,lights_physical_fragment:x3,lights_physical_pars_fragment:y3,lights_fragment_begin:S3,lights_fragment_maps:M3,lights_fragment_end:E3,lightprobes_pars_fragment:T3,logdepthbuf_fragment:w3,logdepthbuf_pars_fragment:A3,logdepthbuf_pars_vertex:R3,logdepthbuf_vertex:C3,map_fragment:b3,map_pars_fragment:P3,map_particle_fragment:D3,map_particle_pars_fragment:L3,metalnessmap_fragment:N3,metalnessmap_pars_fragment:I3,morphinstance_vertex:U3,morphcolor_vertex:F3,morphnormal_vertex:O3,morphtarget_pars_vertex:B3,morphtarget_vertex:k3,normal_fragment_begin:V3,normal_fragment_maps:z3,normal_pars_fragment:G3,normal_pars_vertex:H3,normal_vertex:W3,normalmap_pars_fragment:X3,clearcoat_normal_fragment_begin:Y3,clearcoat_normal_fragment_maps:q3,clearcoat_pars_fragment:$3,iridescence_pars_fragment:K3,opaque_fragment:j3,packing:Z3,premultiplied_alpha_fragment:Q3,project_vertex:J3,dithering_fragment:eD,dithering_pars_fragment:tD,roughnessmap_fragment:nD,roughnessmap_pars_fragment:iD,shadowmap_pars_fragment:rD,shadowmap_pars_vertex:sD,shadowmap_vertex:aD,shadowmask_pars_fragment:oD,skinbase_vertex:lD,skinning_pars_vertex:cD,skinning_vertex:uD,skinnormal_vertex:fD,specularmap_fragment:dD,specularmap_pars_fragment:hD,tonemapping_fragment:pD,tonemapping_pars_fragment:mD,transmission_fragment:gD,transmission_pars_fragment:vD,uv_pars_fragment:_D,uv_pars_vertex:xD,uv_vertex:yD,worldpos_vertex:SD,background_vert:MD,background_frag:ED,backgroundCube_vert:TD,backgroundCube_frag:wD,cube_vert:AD,cube_frag:RD,depth_vert:CD,depth_frag:bD,distance_vert:PD,distance_frag:DD,equirect_vert:LD,equirect_frag:ND,linedashed_vert:ID,linedashed_frag:UD,meshbasic_vert:FD,meshbasic_frag:OD,meshlambert_vert:BD,meshlambert_frag:kD,meshmatcap_vert:VD,meshmatcap_frag:zD,meshnormal_vert:GD,meshnormal_frag:HD,meshphong_vert:WD,meshphong_frag:XD,meshphysical_vert:YD,meshphysical_frag:qD,meshtoon_vert:$D,meshtoon_frag:KD,points_vert:jD,points_frag:ZD,shadow_vert:QD,shadow_frag:JD,sprite_vert:e2,sprite_frag:t2},me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Mi={basic:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:pn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:pn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:pn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:pn([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:pn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:pn([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:pn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:pn([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:pn([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:pn([me.lights,me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Mi.physical={uniforms:pn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Wl={r:0,b:0,g:0},n2=new zt,kM=new Fe;kM.set(-1,0,0,0,1,0,0,0,1);function i2(t,e,n,i,r,s){const a=new rt(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function p(v){let x=v.isScene===!0?v.background:null;if(x&&x.isTexture){const S=v.backgroundBlurriness>0;x=e.get(x,S)}return x}function g(v){let x=!1;const S=p(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),x=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(v,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===yu)?(c===void 0&&(c=new pi(new Qo(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ea(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(n2.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kM),c.material.toneMapped=je.getTransfer(S.colorSpace)!==ct,(u!==S||d!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new pi(new Jo(2,2),new An({name:"BackgroundMaterial",uniforms:Ea(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,x){v.getRGB(Wl,FM(t)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,x,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),o=x,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:M,dispose:h}}function r2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(D,B,$,ee,k){let Z=!1;const F=d(D,ee,$,B);s!==F&&(s=F,c(s.object)),Z=p(D,ee,$,k),Z&&g(D,ee,$,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(D,B,$,ee),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function u(D){return t.deleteVertexArray(D)}function d(D,B,$,ee){const k=ee.wireframe===!0;let Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);const F=D.isInstancedMesh===!0?D.id:0;let P=Z[F];P===void 0&&(P={},Z[F]=P);let U=P[$.id];U===void 0&&(U={},P[$.id]=U);let X=U[k];return X===void 0&&(X=f(l()),U[k]=X),X}function f(D){const B=[],$=[],ee=[];for(let k=0;k<n;k++)B[k]=0,$[k]=0,ee[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:ee,object:D,attributes:{},index:null}}function p(D,B,$,ee){const k=s.attributes,Z=B.attributes;let F=0;const P=$.getAttributes();for(const U in P)if(P[U].location>=0){const ne=k[U];let se=Z[U];if(se===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;F++}return s.attributesNum!==F||s.index!==ee}function g(D,B,$,ee){const k={},Z=B.attributes;let F=0;const P=$.getAttributes();for(const U in P)if(P[U].location>=0){let ne=Z[U];ne===void 0&&(U==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),U==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),k[U]=se,F++}s.attributes=k,s.attributesNum=F,s.index=ee}function M(){const D=s.newAttributes;for(let B=0,$=D.length;B<$;B++)D[B]=0}function m(D){h(D,0)}function h(D,B){const $=s.newAttributes,ee=s.enabledAttributes,k=s.attributeDivisors;$[D]=1,ee[D]===0&&(t.enableVertexAttribArray(D),ee[D]=1),k[D]!==B&&(t.vertexAttribDivisor(D,B),k[D]=B)}function v(){const D=s.newAttributes,B=s.enabledAttributes;for(let $=0,ee=B.length;$<ee;$++)B[$]!==D[$]&&(t.disableVertexAttribArray($),B[$]=0)}function x(D,B,$,ee,k,Z,F){F===!0?t.vertexAttribIPointer(D,B,$,k,Z):t.vertexAttribPointer(D,B,$,ee,k,Z)}function S(D,B,$,ee){M();const k=ee.attributes,Z=$.getAttributes(),F=B.defaultAttributeValues;for(const P in Z){const U=Z[P];if(U.location>=0){let X=k[P];if(X===void 0&&(P==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),P==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const ne=X.normalized,se=X.itemSize,He=e.get(X);if(He===void 0)continue;const nt=He.buffer,Xe=He.type,j=He.bytesPerElement,ae=Xe===t.INT||Xe===t.UNSIGNED_INT||X.gpuType===Tm;if(X.isInterleavedBufferAttribute){const ie=X.data,Ne=ie.stride,Ue=X.offset;if(ie.isInstancedInterleavedBuffer){for(let xe=0;xe<U.locationSize;xe++)h(U.location+xe,ie.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let xe=0;xe<U.locationSize;xe++)m(U.location+xe);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let xe=0;xe<U.locationSize;xe++)x(U.location+xe,se/U.locationSize,Xe,ne,Ne*j,(Ue+se/U.locationSize*xe)*j,ae)}else{if(X.isInstancedBufferAttribute){for(let ie=0;ie<U.locationSize;ie++)h(U.location+ie,X.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ie=0;ie<U.locationSize;ie++)m(U.location+ie);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let ie=0;ie<U.locationSize;ie++)x(U.location+ie,se/U.locationSize,Xe,ne,se*j,se/U.locationSize*ie*j,ae)}}else if(F!==void 0){const ne=F[P];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(U.location,ne);break;case 3:t.vertexAttrib3fv(U.location,ne);break;case 4:t.vertexAttrib4fv(U.location,ne);break;default:t.vertexAttrib1fv(U.location,ne)}}}}v()}function T(){A();for(const D in i){const B=i[D];for(const $ in B){const ee=B[$];for(const k in ee){const Z=ee[k];for(const F in Z)u(Z[F].object),delete Z[F];delete ee[k]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const $ in B){const ee=B[$];for(const k in ee){const Z=ee[k];for(const F in Z)u(Z[F].object),delete Z[F];delete ee[k]}}delete i[D.id]}function R(D){for(const B in i){const $=i[B];for(const ee in $){const k=$[ee];if(k[D.id]===void 0)continue;const Z=k[D.id];for(const F in Z)u(Z[F].object),delete Z[F];delete k[D.id]}}}function _(D){for(const B in i){const $=i[B],ee=D.isInstancedMesh===!0?D.id:0,k=$[ee];if(k!==void 0){for(const Z in k){const F=k[Z];for(const P in F)u(F[P].object),delete F[P];delete k[Z]}delete $[ee],Object.keys($).length===0&&delete i[B]}}}function A(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function s2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function a2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==ci&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==li&&!_)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Le("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:w}}function o2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new jr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,x=v*4;let S=h.clippingState||null;l.value=S,S=u(g,f,x,p);for(let T=0;T!==x;++T)S[T]=n[T];h.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const h=p+M*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==M;++x,S+=4)a.copy(d[x]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Mr=4,q0=[.125,.215,.35,.446,.526,.582],Qr=20,l2=256,Ya=new Su,$0=new rt;let Vf=null,zf=0,Gf=0,Hf=!1;const c2=new H;class K0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=c2}=s;Vf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vf,zf,Gf),this._renderer.xr.enabled=Hf,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===hs||e.mapping===ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:er,format:ci,colorSpace:Ma,depthBuffer:!1},r=j0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=u2(s)),this._blurMaterial=d2(s,e,n),this._ggxMaterial=f2(s,e,n)}return r}_compileMaterial(e){const n=new pi(new Li,e);this._renderer.compile(n,Ya)}_sceneToCubeUV(e,n,i,r,s){const l=new qn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor($0),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new Qo,new LM({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let h=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,h=!0):(m.color.copy($0),h=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const T=this._cubeSize;Fs(r,S*T,x>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(M,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===hs||e.mapping===ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z0());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Fs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ya)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-Mr?i-g+Mr:0),h=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Fs(s,m,h,3*M,2*M),r.setRenderTarget(s),r.render(o,Ya),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Fs(e,m,h,3*M,2*M),r.setRenderTarget(e),r.render(o,Ya)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qr-1),M=s/g,m=isFinite(s)?1+Math.floor(u*M):Qr;m>Qr&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);const h=[];let v=0;for(let R=0;R<Qr;++R){const _=R/M,A=Math.exp(-_*_/2);h.push(A),R===0?v+=A:R<m&&(v+=2*A)}for(let R=0;R<h.length;R++)h[R]=h[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[r],T=3*S*(r>x-Mr?r-x+Mr:0),w=4*(this._cubeSize-S);Fs(n,T,w,3*S,2*S),l.setRenderTarget(n),l.render(d,Ya)}}function u2(t){const e=[],n=[],i=[];let r=t;const s=t-Mr+1+q0.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Mr?l=q0[a-t+Mr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,M=3,m=2,h=1,v=new Float32Array(M*g*p),x=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,_=w>2?0:-1,A=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];v.set(A,M*g*w),x.set(f,m*g*w);const b=[w,w,w,w,w,w];S.set(b,h*g*w)}const T=new Li;T.setAttribute("position",new jn(v,M)),T.setAttribute("uv",new jn(x,m)),T.setAttribute("faceIndex",new jn(S,h)),i.push(new pi(T,null)),r>Mr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function j0(t,e,n){const i=new vn(t,e,n);return i.texture.mapping=yu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function f2(t,e,n){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function d2(t,e,n){const i=new Float32Array(Qr),r=new H(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Z0(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Q0(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}class VM extends vn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new IM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qo(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:Ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:di});s.uniforms.tEquirect.value=n;const a=new pi(r,s),o=n.minFilter;return n.minFilter===is&&(n.minFilter=Lt),new vP(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function h2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===hf||p===pf)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const M=new VM(g.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,g=p===hf||p===pf,M=p===hs||p===ya;if(g||M){let m=n.get(f);const h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new K0(t)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return g&&v&&v.height>0||M&&v&&l(v)?(i===null&&(i=new K0(t)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,p){return p===hf?f.mapping=hs:p===pf&&(f.mapping=ya),f}function l(f){let p=0;const g=6;for(let M=0;M<g;M++)f[M]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function p2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&oa("WebGLRenderer: "+i+" extension not supported."),r}}}function m2(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let M=0;if(g===void 0)return;if(p!==null){const v=p.array;M=p.version;for(let x=0,S=v.length;x<S;x+=3){const T=v[x+0],w=v[x+1],R=v[x+2];f.push(T,w,w,R,R,T)}}else{const v=g.array;M=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const T=x+0,w=x+1,R=x+2;f.push(T,w,w,R,R,T)}}const m=new(g.count>=65535?DM:PM)(f,1);m.version=M;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function g2(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*a),n.update(f,i,1)}function c(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*a,p),n.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let M=0;for(let m=0;m<p;m++)M+=f[m];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function v2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _2(t,e,n){const i=new WeakMap,r=new Dt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let b=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*w*4*d),_=new RM(R,T,w,d);_.type=li,_.needsUpdate=!0;const A=S*4;for(let D=0;D<d;D++){const B=h[D],$=v[D],ee=x[D],k=T*w*4*D;for(let Z=0;Z<B.count;Z++){const F=Z*A;g===!0&&(r.fromBufferAttribute(B,Z),R[k+F+0]=r.x,R[k+F+1]=r.y,R[k+F+2]=r.z,R[k+F+3]=0),M===!0&&(r.fromBufferAttribute($,Z),R[k+F+4]=r.x,R[k+F+5]=r.y,R[k+F+6]=r.z,R[k+F+7]=0),m===!0&&(r.fromBufferAttribute(ee,Z),R[k+F+8]=r.x,R[k+F+9]=r.y,R[k+F+10]=r.z,R[k+F+11]=ee.itemSize===4?r.w:1)}}f={count:d,texture:_,size:new ze(T,w)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function x2(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const y2={[fM]:"LINEAR_TONE_MAPPING",[dM]:"REINHARD_TONE_MAPPING",[hM]:"CINEON_TONE_MAPPING",[pM]:"ACES_FILMIC_TONE_MAPPING",[gM]:"AGX_TONE_MAPPING",[vM]:"NEUTRAL_TONE_MAPPING",[mM]:"CUSTOM_TONE_MAPPING"};function S2(t,e,n,i,r,s){const a=new vn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new gs(e,n):void 0}),o=new vn(e,n,{type:er,depthBuffer:!1,stencilBuffer:!1}),l=new Li;l.setAttribute("position",new qi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new qi([0,2,0,0,2,0],2));const c=new pP({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new pi(l,c),d=new Su(-1,1,1,-1,0,1);let f=null,p=null,g=!1,M,m=null,h=[],v=!1;this.setSize=function(x,S){a.setSize(x,S),o.setSize(x,S);for(let T=0;T<h.length;T++){const w=h[T];w.setSize&&w.setSize(x,S)}},this.setEffects=function(x){h=x,v=h.length>0&&h[0].isRenderPass===!0;const S=a.width,T=a.height;for(let w=0;w<h.length;w++){const R=h[w];R.setSize&&R.setSize(S,T)}},this.begin=function(x,S){if(g||x.toneMapping===Pi&&h.length===0)return!1;if(m=S,S!==null){const T=S.width,w=S.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return v===!1&&x.setRenderTarget(a),M=x.toneMapping,x.toneMapping=Pi,!0},this.hasRenderPass=function(){return v},this.end=function(x,S){x.toneMapping=M,g=!0;let T=a,w=o;for(let R=0;R<h.length;R++){const _=h[R];if(_.enabled!==!1&&(_.render(x,w,T,S),_.needsSwap!==!1)){const A=T;T=w,w=A}}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,c.defines={},je.getTransfer(f)===ct&&(c.defines.SRGB_TRANSFER="");const R=y2[p];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const zM=new jt,qh=new gs(1,1),GM=new RM,HM=new Xb,WM=new IM,J0=[],e_=[],t_=new Float32Array(16),n_=new Float32Array(9),i_=new Float32Array(4);function Da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=J0[r];if(s===void 0&&(s=new Float32Array(r),J0[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Eu(t,e){let n=e_[e];n===void 0&&(n=new Int32Array(e),e_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function M2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function E2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function T2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function A2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;i_.set(i),t.uniformMatrix2fv(this.addr,!1,i_),Xt(n,i)}}function R2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;n_.set(i),t.uniformMatrix3fv(this.addr,!1,n_),Xt(n,i)}}function C2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;t_.set(i),t.uniformMatrix4fv(this.addr,!1,t_),Xt(n,i)}}function b2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function P2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function L2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function N2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function F2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function O2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qh.compareFunction=n.isReversedDepthBuffer()?Dm:Pm,s=qh):s=zM,n.setTexture2D(e||s,r)}function B2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||HM,r)}function k2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||WM,r)}function V2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||GM,r)}function z2(t){switch(t){case 5126:return M2;case 35664:return E2;case 35665:return T2;case 35666:return w2;case 35674:return A2;case 35675:return R2;case 35676:return C2;case 5124:case 35670:return b2;case 35667:case 35671:return P2;case 35668:case 35672:return D2;case 35669:case 35673:return L2;case 5125:return N2;case 36294:return I2;case 36295:return U2;case 36296:return F2;case 35678:case 36198:case 36298:case 36306:case 35682:return O2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return k2;case 36289:case 36303:case 36311:case 36292:return V2}}function G2(t,e){t.uniform1fv(this.addr,e)}function H2(t,e){const n=Da(e,this.size,2);t.uniform2fv(this.addr,n)}function W2(t,e){const n=Da(e,this.size,3);t.uniform3fv(this.addr,n)}function X2(t,e){const n=Da(e,this.size,4);t.uniform4fv(this.addr,n)}function Y2(t,e){const n=Da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function q2(t,e){const n=Da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $2(t,e){const n=Da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function K2(t,e){t.uniform1iv(this.addr,e)}function j2(t,e){t.uniform2iv(this.addr,e)}function Z2(t,e){t.uniform3iv(this.addr,e)}function Q2(t,e){t.uniform4iv(this.addr,e)}function J2(t,e){t.uniform1uiv(this.addr,e)}function eL(t,e){t.uniform2uiv(this.addr,e)}function tL(t,e){t.uniform3uiv(this.addr,e)}function nL(t,e){t.uniform4uiv(this.addr,e)}function iL(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=qh:a=zM;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function rL(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||HM,s[a])}function sL(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||WM,s[a])}function aL(t,e,n){const i=this.cache,r=e.length,s=Eu(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||GM,s[a])}function oL(t){switch(t){case 5126:return G2;case 35664:return H2;case 35665:return W2;case 35666:return X2;case 35674:return Y2;case 35675:return q2;case 35676:return $2;case 5124:case 35670:return K2;case 35667:case 35671:return j2;case 35668:case 35672:return Z2;case 35669:case 35673:return Q2;case 5125:return J2;case 36294:return eL;case 36295:return tL;case 36296:return nL;case 35678:case 36198:case 36298:case 36306:case 35682:return iL;case 35679:case 36299:case 36307:return rL;case 35680:case 36300:case 36308:case 36293:return sL;case 36289:case 36303:case 36311:case 36292:return aL}}class lL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=z2(n.type)}}class cL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oL(n.type)}}class uL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Wf=/(\w+)(\])?(\[|\.)?/g;function r_(t,e){t.seq.push(e),t.map[e.id]=e}function fL(t,e,n){const i=t.name,r=i.length;for(Wf.lastIndex=0;;){const s=Wf.exec(i),a=Wf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){r_(n,c===void 0?new lL(o,t,e):new cL(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new uL(o),r_(n,d)),n=d}}}class dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);fL(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function s_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dL=37297;let hL=0;function pL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const a_=new Fe;function mL(t){je._getMatrix(a_,je.workingColorSpace,t);const e=`mat3( ${a_.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case qc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function o_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+pL(t.getShaderSource(e),o)}else return s}function gL(t,e){const n=mL(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const vL={[fM]:"Linear",[dM]:"Reinhard",[hM]:"Cineon",[pM]:"ACESFilmic",[gM]:"AgX",[vM]:"Neutral",[mM]:"Custom"};function _L(t,e){const n=vL[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xl=new H;function xL(){je.getLuminanceCoefficients(Xl);const t=Xl.x.toFixed(4),e=Xl.y.toFixed(4),n=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function SL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ML(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function no(t){return t!==""}function l_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EL=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(t){return t.replace(EL,wL)}const TL=new Map;function wL(t,e){let n=Ge[e];if(n===void 0){const i=TL.get(e);if(i!==void 0)n=Ge[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $h(n)}const AL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(t){return t.replace(AL,RL)}function RL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CL={[oc]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function bL(t){return CL[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PL={[hs]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE",[yu]:"ENVMAP_TYPE_CUBE_UV"};function DL(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":PL[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const LL={[ya]:"ENVMAP_MODE_REFRACTION"};function NL(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":LL[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IL={[uM]:"ENVMAP_BLENDING_MULTIPLY",[wb]:"ENVMAP_BLENDING_MIX",[Ab]:"ENVMAP_BLENDING_ADD"};function UL(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":IL[t.combine]||"ENVMAP_BLENDING_NONE"}function FL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OL(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=bL(n),c=DL(n),u=NL(n),d=UL(n),f=FL(n),p=yL(n),g=SL(s),M=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(no).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(no).join(`
`),h.length>0&&(h+=`
`)):(m=[f_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),h=[f_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Pi?_L("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,gL("linearToOutputTexel",n.outputColorSpace),xL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(no).join(`
`)),a=$h(a),a=l_(a,n),a=c_(a,n),o=$h(o),o=l_(o,n),o=c_(o,n),a=u_(a),o=u_(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+a,S=v+h+o,T=s_(r,r.VERTEX_SHADER,x),w=s_(r,r.FRAGMENT_SHADER,S);r.attachShader(M,T),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(M)||"",$=r.getShaderInfoLog(T)||"",ee=r.getShaderInfoLog(w)||"",k=B.trim(),Z=$.trim(),F=ee.trim();let P=!0,U=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(P=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,w);else{const X=o_(r,T,"vertex"),ne=o_(r,w,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+X+`
`+ne)}else k!==""?Le("WebGLProgram: Program Info Log:",k):(Z===""||F==="")&&(U=!1);U&&(D.diagnostics={runnable:P,programLog:k,vertexShader:{log:Z,prefix:m},fragmentShader:{log:F,prefix:h}})}r.deleteShader(T),r.deleteShader(w),_=new dc(r,M),A=ML(r,M)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,dL)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hL++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=w,this}let BL=0;class kL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VL(e),n.set(e,i)),i}}class VL{constructor(e){this.id=BL++,this.code=e,this.usedTimes=0}}function zL(t){return t===ps||t===Xc||t===Yc}function GL(t,e,n,i,r,s){const a=new CM,o=new kL,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,A,b,D,B,$){const ee=D.fog,k=B.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,P=e.get(_.envMap||Z,F),U=P&&P.mapping===yu?P.image.height:null,X=p[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=ne!==void 0?ne.length:0;let He=0;k.morphAttributes.position!==void 0&&(He=1),k.morphAttributes.normal!==void 0&&(He=2),k.morphAttributes.color!==void 0&&(He=3);let nt,Xe,j,ae;if(X){const Ee=Mi[X];nt=Ee.vertexShader,Xe=Ee.fragmentShader}else{nt=_.vertexShader,Xe=_.fragmentShader;const Ee=o.getVertexShaderStage(_),Rt=o.getFragmentShaderStage(_);o.update(_,Ee,Rt),j=Ee.id,ae=Rt.id}const ie=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,xe=B.isBatchedMesh===!0,at=!!_.map,Oe=!!_.matcap,ot=!!P,Qe=!!_.aoMap,qe=!!_.lightMap,vt=!!_.bumpMap&&_.wireframe===!1,Mt=!!_.normalMap,Ie=!!_.displacementMap,Ve=!!_.emissiveMap,$e=!!_.metalnessMap,st=!!_.roughnessMap,L=_.anisotropy>0,nn=_.clearcoat>0,lt=_.dispersion>0,C=_.iridescence>0,y=_.sheen>0,O=_.transmission>0,G=L&&!!_.anisotropyMap,q=nn&&!!_.clearcoatMap,oe=nn&&!!_.clearcoatNormalMap,ue=nn&&!!_.clearcoatRoughnessMap,K=C&&!!_.iridescenceMap,J=C&&!!_.iridescenceThicknessMap,fe=y&&!!_.sheenColorMap,Ae=y&&!!_.sheenRoughnessMap,pe=!!_.specularMap,de=!!_.specularColorMap,be=!!_.specularIntensityMap,Pe=O&&!!_.transmissionMap,Be=O&&!!_.thicknessMap,N=!!_.gradientMap,le=!!_.alphaMap,Q=_.alphaTest>0,he=!!_.alphaHash,_e=!!_.extensions;let te=Pi;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(te=t.toneMapping);const we={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:nt,fragmentShader:Xe,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:xe,batchingColor:xe&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:at,matcap:Oe,envMap:ot,envMapMode:ot&&P.mapping,envMapCubeUVHeight:U,aoMap:Qe,lightMap:qe,bumpMap:vt,normalMap:Mt,displacementMap:Ie,emissiveMap:Ve,normalMapObjectSpace:Mt&&_.normalMapType===Cb,normalMapTangentSpace:Mt&&_.normalMapType===E0,packedNormalMap:Mt&&_.normalMapType===E0&&zL(_.normalMap.format),metalnessMap:$e,roughnessMap:st,anisotropy:L,anisotropyMap:G,clearcoat:nn,clearcoatMap:q,clearcoatNormalMap:oe,clearcoatRoughnessMap:ue,dispersion:lt,iridescence:C,iridescenceMap:K,iridescenceThicknessMap:J,sheen:y,sheenColorMap:fe,sheenRoughnessMap:Ae,specularMap:pe,specularColorMap:de,specularIntensityMap:be,transmission:O,transmissionMap:Pe,thicknessMap:Be,gradientMap:N,opaque:_.transparent===!1&&_.blending===aa&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:Q,alphaHash:he,combine:_.combine,mapUv:at&&g(_.map.channel),aoMapUv:Qe&&g(_.aoMap.channel),lightMapUv:qe&&g(_.lightMap.channel),bumpMapUv:vt&&g(_.bumpMap.channel),normalMapUv:Mt&&g(_.normalMap.channel),displacementMapUv:Ie&&g(_.displacementMap.channel),emissiveMapUv:Ve&&g(_.emissiveMap.channel),metalnessMapUv:$e&&g(_.metalnessMap.channel),roughnessMapUv:st&&g(_.roughnessMap.channel),anisotropyMapUv:G&&g(_.anisotropyMap.channel),clearcoatMapUv:q&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(_.sheenRoughnessMap.channel),specularMapUv:pe&&g(_.specularMap.channel),specularColorMapUv:de&&g(_.specularColorMap.channel),specularIntensityMapUv:be&&g(_.specularIntensityMap.channel),transmissionMapUv:Pe&&g(_.transmissionMap.channel),thicknessMapUv:Be&&g(_.thicknessMap.channel),alphaMapUv:le&&g(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Mt||L),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(at||le),fog:!!ee,useFog:_.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&Mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:He,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:at&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const b in _.defines)A.push(b),A.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(h(A,_),v(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function h(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const A=p[_.type];let b;if(A){const D=Mi[A];b=fP.clone(D.uniforms)}else b=_.uniforms;return b}function S(_,A){let b=u.get(A);return b!==void 0?++b.usedTimes:(b=new OL(t,A,_,r),c.push(b),u.set(A,b)),b}function T(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:R}}function HL(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function WL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function d_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function h_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,M,m,h){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:h},t[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=g,v.materialVariant=a(f),v.groupOrder=M,v.renderOrder=f.renderOrder,v.z=m,v.group=h),e++,v}function l(f,p,g,M,m,h){const v=o(f,p,g,M,m,h);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):n.push(v)}function c(f,p,g,M,m,h){const v=o(f,p,g,M,m,h);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function u(f,p,g){n.length>1&&n.sort(f||WL),i.length>1&&i.sort(p||d_),r.length>1&&r.sort(p||d_),g&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function XL(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new h_,t.set(i,[a])):r>=s.length?(a=new h_,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function YL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new rt};break;case"SpotLight":n={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function qL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $L=0;function KL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jL(t){const e=new YL,n=qL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new zt,a=new zt;function o(c){let u=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,M=0,m=0,h=0,v=0,x=0,S=0,T=0,w=0,R=0;c.sort(KL);for(let A=0,b=c.length;A<b;A++){const D=c[A],B=D.color,$=D.intensity,ee=D.distance;let k=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ps?k=D.shadow.map.texture:k=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=B.r*$,d+=B.g*$,f+=B.b*$;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],$);R++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,P=n.get(D);P.shadowIntensity=F.intensity,P.shadowBias=F.bias,P.shadowNormalBias=F.normalBias,P.shadowRadius=F.radius,P.shadowMapSize=F.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=Z,p++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(B).multiplyScalar($),Z.distance=ee,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[M]=Z;const F=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,F.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[M]=F.matrix,D.castShadow){const P=n.get(D);P.shadowIntensity=F.intensity,P.shadowBias=F.bias,P.shadowNormalBias=F.normalBias,P.shadowRadius=F.radius,P.shadowMapSize=F.mapSize,i.spotShadow[M]=P,i.spotShadowMap[M]=k,S++}M++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(B).multiplyScalar($),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const F=D.shadow,P=n.get(D);P.shadowIntensity=F.intensity,P.shadowBias=F.bias,P.shadowNormalBias=F.normalBias,P.shadowRadius=F.radius,P.shadowMapSize=F.mapSize,P.shadowCameraNear=F.camera.near,P.shadowCameraFar=F.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar($),Z.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[h]=Z,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==M||_.rectAreaLength!==m||_.hemiLength!==h||_.numDirectionalShadows!==v||_.numPointShadows!==x||_.numSpotShadows!==S||_.numSpotMaps!==T||_.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,_.directionalLength=p,_.pointLength=g,_.spotLength=M,_.rectAreaLength=m,_.hemiLength=h,_.numDirectionalShadows=v,_.numPointShadows=x,_.numSpotShadows=S,_.numSpotMaps=T,_.numLightProbes=R,i.version=$L++)}function l(c,u){let d=0,f=0,p=0,g=0,M=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const x=c[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function p_(t){const e=new jL(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ZL(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new p_(t),e.set(r,[o])):s>=a.length?(o=new p_(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const QL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JL=`uniform sampler2D shadow_pass;
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
}`,eN=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],tN=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],m_=new zt,qa=new H,Xf=new H;function nN(t,e,n){let i=new NM;const r=new ze,s=new ze,a=new Dt,o=new mP,l=new gP,c={},u=n.maxTextureSize,d={[Ji]:$t,[$t]:Ji,[Dn]:Dn},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:QL,fragmentShader:JL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Li;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new pi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let h=this.type;this.render=function(w,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===ab&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oc);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(di),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=h!==this.type;$&&R.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(k=>k.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,k=w.length;ee<k;ee++){const Z=w[ee],F=Z.shadow;if(F===void 0){Le("WebGLShadowMap:",Z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const P=F.getFrameExtents();r.multiply(P),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/P.x),r.x=s.x*P.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/P.y),r.y=s.y*P.y,F.mapSize.y=s.y));const U=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=U,F.map===null||$===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===to){if(Z.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new vn(r.x,r.y,{format:ps,type:er,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),F.map.texture.name=Z.name+".shadowMap",F.map.depthTexture=new gs(r.x,r.y,li),F.map.depthTexture.name=Z.name+".shadowMapDepth",F.map.depthTexture.format=tr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Jt,F.map.depthTexture.magFilter=Jt}else Z.isPointLight?(F.map=new VM(r.x),F.map.depthTexture=new cP(r.x,Di)):(F.map=new vn(r.x,r.y),F.map.depthTexture=new gs(r.x,r.y,Di)),F.map.depthTexture.name=Z.name+".shadowMap",F.map.depthTexture.format=tr,this.type===oc?(F.map.depthTexture.compareFunction=U?Dm:Pm,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Jt,F.map.depthTexture.magFilter=Jt);F.camera.updateProjectionMatrix()}const X=F.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<X;ne++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(F.map),t.clear());const se=F.getViewport(ne);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),B.viewport(a)}if(Z.isPointLight){const se=F.camera,He=F.matrix,nt=Z.distance||se.far;nt!==se.far&&(se.far=nt,se.updateProjectionMatrix()),qa.setFromMatrixPosition(Z.matrixWorld),se.position.copy(qa),Xf.copy(se.position),Xf.add(eN[ne]),se.up.copy(tN[ne]),se.lookAt(Xf),se.updateMatrixWorld(),He.makeTranslation(-qa.x,-qa.y,-qa.z),m_.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),F._frustum.setFromProjectionMatrix(m_,se.coordinateSystem,se.reversedDepth)}else F.updateMatrices(Z);i=F.getFrustum(),S(R,_,F.camera,Z,this.type)}F.isPointLightShadow!==!0&&this.type===to&&v(F,_),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(A,b,D)};function v(w,R){const _=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vn(r.x,r.y,{format:ps,type:er})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(R,null,_,f,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(R,null,_,p,M,null)}function x(w,R,_,A){let b=null;const D=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=_.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=b.uuid,$=R.uuid;let ee=c[B];ee===void 0&&(ee={},c[B]=ee);let k=ee[$];k===void 0&&(k=b.clone(),ee[$]=k,R.addEventListener("dispose",T)),b=k}if(b.visible=R.visible,b.wireframe=R.wireframe,A===to?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,_.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=t.properties.get(b);B.light=_}return b}function S(w,R,_,A,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===to)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const $=e.update(w),ee=w.material;if(Array.isArray(ee)){const k=$.groups;for(let Z=0,F=k.length;Z<F;Z++){const P=k[Z],U=ee[P.materialIndex];if(U&&U.visible){const X=x(w,U,A,b);w.onBeforeShadow(t,w,R,_,$,X,P),t.renderBufferDirect(_,null,$,X,w,P),w.onAfterShadow(t,w,R,_,$,X,P)}}}else if(ee.visible){const k=x(w,ee,A,b);w.onBeforeShadow(t,w,R,_,$,k,null),t.renderBufferDirect(_,null,$,k,w,null),w.onAfterShadow(t,w,R,_,$,k,null)}}const B=w.children;for(let $=0,ee=B.length;$<ee;$++)S(B[$],R,_,A,b)}function T(w){w.target.removeEventListener("dispose",T);for(const _ in c){const A=c[_],b=w.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function iN(t,e){function n(){let N=!1;const le=new Dt;let Q=null;const he=new Dt(0,0,0,0);return{setMask:function(_e){Q!==_e&&!N&&(t.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){N=_e},setClear:function(_e,te,we,Ee,Rt){Rt===!0&&(_e*=Ee,te*=Ee,we*=Ee),le.set(_e,te,we,Ee),he.equals(le)===!1&&(t.clearColor(_e,te,we,Ee),he.copy(le))},reset:function(){N=!1,Q=null,he.set(-1,0,0,0)}}}function i(){let N=!1,le=!1,Q=null,he=null,_e=null;return{setReversed:function(te){if(le!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),le=te;const Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return le},setTest:function(te){te?ie(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(te){Q!==te&&!N&&(t.depthMask(te),Q=te)},setFunc:function(te){if(le&&(te=Bb[te]),he!==te){switch(te){case ah:t.depthFunc(t.NEVER);break;case Wc:t.depthFunc(t.ALWAYS);break;case oh:t.depthFunc(t.LESS);break;case xa:t.depthFunc(t.LEQUAL);break;case lh:t.depthFunc(t.EQUAL);break;case ch:t.depthFunc(t.GEQUAL);break;case uh:t.depthFunc(t.GREATER);break;case fh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=te}},setLocked:function(te){N=te},setClear:function(te){_e!==te&&(_e=te,le&&(te=1-te),t.clearDepth(te))},reset:function(){N=!1,Q=null,he=null,_e=null,le=!1}}}function r(){let N=!1,le=null,Q=null,he=null,_e=null,te=null,we=null,Ee=null,Rt=null;return{setTest:function(pt){N||(pt?ie(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(pt){le!==pt&&!N&&(t.stencilMask(pt),le=pt)},setFunc:function(pt,mi,gi){(Q!==pt||he!==mi||_e!==gi)&&(t.stencilFunc(pt,mi,gi),Q=pt,he=mi,_e=gi)},setOp:function(pt,mi,gi){(te!==pt||we!==mi||Ee!==gi)&&(t.stencilOp(pt,mi,gi),te=pt,we=mi,Ee=gi)},setLocked:function(pt){N=pt},setClear:function(pt){Rt!==pt&&(t.clearStencil(pt),Rt=pt)},reset:function(){N=!1,le=null,Q=null,he=null,_e=null,te=null,we=null,Ee=null,Rt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,g=[],M=null,m=!1,h=null,v=null,x=null,S=null,T=null,w=null,R=null,_=new rt(0,0,0),A=0,b=!1,D=null,B=null,$=null,ee=null,k=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,P=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(U)[1]),F=P>=1):U.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),F=P>=2);let X=null,ne={};const se=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),nt=new Dt().fromArray(se),Xe=new Dt().fromArray(He);function j(N,le,Q,he){const _e=new Uint8Array(4),te=t.createTexture();t.bindTexture(N,te),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<Q;we++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(le+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return te}const ae={};ae[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(xa),vt(!1),Mt(x0),ie(t.CULL_FACE),Qe(di);function ie(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function Ne(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Ue(N,le){return f[N]!==le?(t.bindFramebuffer(N,le),f[N]=le,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=le),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=le),!0):!1}function xe(N,le){let Q=g,he=!1;if(N){Q=p.get(le),Q===void 0&&(Q=[],p.set(le,Q));const _e=N.textures;if(Q.length!==_e.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let te=0,we=_e.length;te<we;te++)Q[te]=t.COLOR_ATTACHMENT0+te;Q.length=_e.length,he=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,he=!0);he&&t.drawBuffers(Q)}function at(N){return M!==N?(t.useProgram(N),M=N,!0):!1}const Oe={[Zr]:t.FUNC_ADD,[lb]:t.FUNC_SUBTRACT,[cb]:t.FUNC_REVERSE_SUBTRACT};Oe[ub]=t.MIN,Oe[fb]=t.MAX;const ot={[db]:t.ZERO,[hb]:t.ONE,[pb]:t.SRC_COLOR,[rh]:t.SRC_ALPHA,[yb]:t.SRC_ALPHA_SATURATE,[_b]:t.DST_COLOR,[gb]:t.DST_ALPHA,[mb]:t.ONE_MINUS_SRC_COLOR,[sh]:t.ONE_MINUS_SRC_ALPHA,[xb]:t.ONE_MINUS_DST_COLOR,[vb]:t.ONE_MINUS_DST_ALPHA,[Sb]:t.CONSTANT_COLOR,[Mb]:t.ONE_MINUS_CONSTANT_COLOR,[Eb]:t.CONSTANT_ALPHA,[Tb]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(N,le,Q,he,_e,te,we,Ee,Rt,pt){if(N===di){m===!0&&(Ne(t.BLEND),m=!1);return}if(m===!1&&(ie(t.BLEND),m=!0),N!==ob){if(N!==h||pt!==b){if((v!==Zr||T!==Zr)&&(t.blendEquation(t.FUNC_ADD),v=Zr,T=Zr),pt)switch(N){case aa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case y0:t.blendFunc(t.ONE,t.ONE);break;case S0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case M0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",N);break}else switch(N){case aa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case y0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case S0:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M0:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",N);break}x=null,S=null,w=null,R=null,_.set(0,0,0),A=0,h=N,b=pt}return}_e=_e||le,te=te||Q,we=we||he,(le!==v||_e!==T)&&(t.blendEquationSeparate(Oe[le],Oe[_e]),v=le,T=_e),(Q!==x||he!==S||te!==w||we!==R)&&(t.blendFuncSeparate(ot[Q],ot[he],ot[te],ot[we]),x=Q,S=he,w=te,R=we),(Ee.equals(_)===!1||Rt!==A)&&(t.blendColor(Ee.r,Ee.g,Ee.b,Rt),_.copy(Ee),A=Rt),h=N,b=!1}function qe(N,le){N.side===Dn?Ne(t.CULL_FACE):ie(t.CULL_FACE);let Q=N.side===$t;le&&(Q=!Q),vt(Q),N.blending===aa&&N.transparent===!1?Qe(di):Qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const he=N.stencilWrite;o.setTest(he),he&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(N){D!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),D=N)}function Mt(N){N!==rb?(ie(t.CULL_FACE),N!==B&&(N===x0?t.cullFace(t.BACK):N===sb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),B=N}function Ie(N){N!==$&&(F&&t.lineWidth(N),$=N)}function Ve(N,le,Q){N?(ie(t.POLYGON_OFFSET_FILL),(ee!==le||k!==Q)&&(ee=le,k=Q,a.getReversed()&&(le=-le),t.polygonOffset(le,Q))):Ne(t.POLYGON_OFFSET_FILL)}function $e(N){N?ie(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function st(N){N===void 0&&(N=t.TEXTURE0+Z-1),X!==N&&(t.activeTexture(N),X=N)}function L(N,le,Q){Q===void 0&&(X===null?Q=t.TEXTURE0+Z-1:Q=X);let he=ne[Q];he===void 0&&(he={type:void 0,texture:void 0},ne[Q]=he),(he.type!==N||he.texture!==le)&&(X!==Q&&(t.activeTexture(Q),X=Q),t.bindTexture(N,le||ae[N]),he.type=N,he.texture=le)}function nn(){const N=ne[X];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function lt(){try{t.compressedTexImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function y(){try{t.texSubImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function O(){try{t.texSubImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function oe(){try{t.texStorage2D(...arguments)}catch(N){et("WebGLState:",N)}}function ue(){try{t.texStorage3D(...arguments)}catch(N){et("WebGLState:",N)}}function K(){try{t.texImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function J(){try{t.texImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function fe(N){return d[N]!==void 0?d[N]:t.getParameter(N)}function Ae(N,le){d[N]!==le&&(t.pixelStorei(N,le),d[N]=le)}function pe(N){nt.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),nt.copy(N))}function de(N){Xe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Xe.copy(N))}function be(N,le){let Q=c.get(le);Q===void 0&&(Q=new WeakMap,c.set(le,Q));let he=Q.get(N);he===void 0&&(he=t.getUniformBlockIndex(le,N.name),Q.set(N,he))}function Pe(N,le){const he=c.get(le).get(N);l.get(le)!==he&&(t.uniformBlockBinding(le,he,N.__bindingPointIndex),l.set(le,he))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},X=null,ne={},f={},p=new WeakMap,g=[],M=null,m=!1,h=null,v=null,x=null,S=null,T=null,w=null,R=null,_=new rt(0,0,0),A=0,b=!1,D=null,B=null,$=null,ee=null,k=null,nt.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:Ne,bindFramebuffer:Ue,drawBuffers:xe,useProgram:at,setBlending:Qe,setMaterial:qe,setFlipSided:vt,setCullFace:Mt,setLineWidth:Ie,setPolygonOffset:Ve,setScissorTest:$e,activeTexture:st,bindTexture:L,unbindTexture:nn,compressedTexImage2D:lt,compressedTexImage3D:C,texImage2D:K,texImage3D:J,pixelStorei:Ae,getParameter:fe,updateUBOMapping:be,uniformBlockBinding:Pe,texStorage2D:oe,texStorage3D:ue,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:pe,viewport:de,reset:Be}}function rN(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,y){return g?new OffscreenCanvas(C,y):Kc("canvas")}function m(C,y,O){let G=1;const q=lt(C);if((q.width>O||q.height>O)&&(G=O/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const oe=Math.floor(G*q.width),ue=Math.floor(G*q.height);f===void 0&&(f=M(oe,ue));const K=y?M(oe,ue):f;return K.width=oe,K.height=ue,K.getContext("2d").drawImage(C,0,0,oe,ue),Le("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+oe+"x"+ue+")."),K}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function h(C){return C.generateMipmaps}function v(C){t.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,y,O,G,q,oe=!1){if(C!==null){if(t[C]!==void 0)return t[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue;G&&(ue=e.get("EXT_texture_norm16"),ue||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===t.RED&&(O===t.FLOAT&&(K=t.R32F),O===t.HALF_FLOAT&&(K=t.R16F),O===t.UNSIGNED_BYTE&&(K=t.R8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),O===t.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),y===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.R8UI),O===t.UNSIGNED_SHORT&&(K=t.R16UI),O===t.UNSIGNED_INT&&(K=t.R32UI),O===t.BYTE&&(K=t.R8I),O===t.SHORT&&(K=t.R16I),O===t.INT&&(K=t.R32I)),y===t.RG&&(O===t.FLOAT&&(K=t.RG32F),O===t.HALF_FLOAT&&(K=t.RG16F),O===t.UNSIGNED_BYTE&&(K=t.RG8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),O===t.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RG8UI),O===t.UNSIGNED_SHORT&&(K=t.RG16UI),O===t.UNSIGNED_INT&&(K=t.RG32UI),O===t.BYTE&&(K=t.RG8I),O===t.SHORT&&(K=t.RG16I),O===t.INT&&(K=t.RG32I)),y===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RGB8UI),O===t.UNSIGNED_SHORT&&(K=t.RGB16UI),O===t.UNSIGNED_INT&&(K=t.RGB32UI),O===t.BYTE&&(K=t.RGB8I),O===t.SHORT&&(K=t.RGB16I),O===t.INT&&(K=t.RGB32I)),y===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),O===t.UNSIGNED_INT&&(K=t.RGBA32UI),O===t.BYTE&&(K=t.RGBA8I),O===t.SHORT&&(K=t.RGBA16I),O===t.INT&&(K=t.RGBA32I)),y===t.RGB&&(O===t.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),O===t.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),y===t.RGBA){const J=oe?qc:je.getTransfer(q);O===t.FLOAT&&(K=t.RGBA32F),O===t.HALF_FLOAT&&(K=t.RGBA16F),O===t.UNSIGNED_BYTE&&(K=J===ct?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),O===t.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function T(C,y){let O;return C?y===null||y===Di||y===Sa?O=t.DEPTH24_STENCIL8:y===li?O=t.DEPTH32F_STENCIL8:y===ko&&(O=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Di||y===Sa?O=t.DEPTH_COMPONENT24:y===li?O=t.DEPTH_COMPONENT32F:y===ko&&(O=t.DEPTH_COMPONENT16),O}function w(C,y){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==Jt&&C.minFilter!==Lt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function _(C){const y=C.target;y.removeEventListener("dispose",_),D(y)}function A(C){const y=i.get(C);if(y.__webglInit===void 0)return;const O=C.source,G=p.get(O);if(G){const q=G[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&b(C),Object.keys(G).length===0&&p.delete(O)}i.remove(C)}function b(C){const y=i.get(C);t.deleteTexture(y.__webglTexture);const O=C.source,G=p.get(O);delete G[y.__cacheKey],a.memory.textures--}function D(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let q=0;q<y.__webglFramebuffer[G].length;q++)t.deleteFramebuffer(y.__webglFramebuffer[G][q]);else t.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)t.deleteFramebuffer(y.__webglFramebuffer[G]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=C.textures;for(let G=0,q=O.length;G<q;G++){const oe=i.get(O[G]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(O[G])}i.remove(C)}let B=0;function $(){B=0}function ee(){return B}function k(C){B=C}function Z(){const C=B;return C>=r.maxTextures&&Le("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),B+=1,C}function F(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function P(C,y){const O=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const G=C.image;if(G===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(O,C,y);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+y)}function U(C,y){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Ne(O,C,y);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+y)}function X(C,y){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Ne(O,C,y);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+y)}function ne(C,y){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Ue(O,C,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+y)}const se={[dh]:t.REPEAT,[Gi]:t.CLAMP_TO_EDGE,[hh]:t.MIRRORED_REPEAT},He={[Jt]:t.NEAREST,[Rb]:t.NEAREST_MIPMAP_NEAREST,[El]:t.NEAREST_MIPMAP_LINEAR,[Lt]:t.LINEAR,[mf]:t.LINEAR_MIPMAP_NEAREST,[is]:t.LINEAR_MIPMAP_LINEAR},nt={[bb]:t.NEVER,[Ib]:t.ALWAYS,[Pb]:t.LESS,[Pm]:t.LEQUAL,[Db]:t.EQUAL,[Dm]:t.GEQUAL,[Lb]:t.GREATER,[Nb]:t.NOTEQUAL};function Xe(C,y){if(y.type===li&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Lt||y.magFilter===mf||y.magFilter===El||y.magFilter===is||y.minFilter===Lt||y.minFilter===mf||y.minFilter===El||y.minFilter===is)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,se[y.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,se[y.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,se[y.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,He[y.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,He[y.minFilter]),y.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt||y.minFilter!==El&&y.minFilter!==is||y.type===li&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function j(C,y){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const G=y.source;let q=p.get(G);q===void 0&&(q={},p.set(G,q));const oe=F(y);if(oe!==C.__cacheKey){q[oe]===void 0&&(q[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),q[oe].usedTimes++;const ue=q[C.__cacheKey];ue!==void 0&&(q[C.__cacheKey].usedTimes--,ue.usedTimes===0&&b(y)),C.__cacheKey=oe,C.__webglTexture=q[oe].texture}return O}function ae(C,y,O){return Math.floor(Math.floor(C/O)/y)}function ie(C,y,O,G){const oe=C.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,O,G,y.data);else{oe.sort((Ae,pe)=>Ae.start-pe.start);let ue=0;for(let Ae=1;Ae<oe.length;Ae++){const pe=oe[ue],de=oe[Ae],be=pe.start+pe.count,Pe=ae(de.start,y.width,4),Be=ae(pe.start,y.width,4);de.start<=be+1&&Pe===Be&&ae(de.start+de.count-1,y.width,4)===Pe?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ue,oe[ue]=de)}oe.length=ue+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Ae=0,pe=oe.length;Ae<pe;Ae++){const de=oe[Ae],be=Math.floor(de.start/4),Pe=Math.ceil(de.count/4),Be=be%y.width,N=Math.floor(be/y.width),le=Pe,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,Be,N,le,Q,O,G,y.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Ne(C,y,O){let G=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=t.TEXTURE_3D);const q=j(C,y),oe=y.source;n.bindTexture(G,C.__webglTexture,t.TEXTURE0+O);const ue=i.get(oe);if(oe.version!==ue.__version||q===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Q=je.getPrimaries(je.workingColorSpace),he=y.colorSpace===Ti?null:je.getPrimaries(y.colorSpace),_e=y.colorSpace===Ti||Q===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let J=m(y.image,!1,r.maxTextureSize);J=nn(y,J);const fe=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type);let pe=S(y.internalFormat,fe,Ae,y.normalized,y.colorSpace,y.isVideoTexture);Xe(G,y);let de;const be=y.mipmaps,Pe=y.isVideoTexture!==!0,Be=ue.__version===void 0||q===!0,N=oe.dataReady,le=w(y,J);if(y.isDepthTexture)pe=T(y.format===Sr,y.type),Be&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,fe,Ae,null));else if(y.isDataTexture)if(be.length>0){Pe&&Be&&n.texStorage2D(t.TEXTURE_2D,le,pe,be[0].width,be[0].height);for(let Q=0,he=be.length;Q<he;Q++)de=be[Q],Pe?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,fe,Ae,de.data):n.texImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,fe,Ae,de.data);y.generateMipmaps=!1}else Pe?(Be&&n.texStorage2D(t.TEXTURE_2D,le,pe,J.width,J.height),N&&ie(y,J,fe,Ae)):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,fe,Ae,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Pe&&Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,be[0].width,be[0].height,J.depth);for(let Q=0,he=be.length;Q<he;Q++)if(de=be[Q],y.format!==ci)if(fe!==null)if(Pe){if(N)if(y.layerUpdates.size>0){const _e=Y0(de.width,de.height,y.format,y.type);for(const te of y.layerUpdates){const we=de.data.subarray(te*_e/de.data.BYTES_PER_ELEMENT,(te+1)*_e/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,te,de.width,de.height,1,fe,we)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,fe,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,pe,de.width,de.height,J.depth,0,de.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,fe,Ae,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,pe,de.width,de.height,J.depth,0,fe,Ae,de.data)}else{Pe&&Be&&n.texStorage2D(t.TEXTURE_2D,le,pe,be[0].width,be[0].height);for(let Q=0,he=be.length;Q<he;Q++)de=be[Q],y.format!==ci?fe!==null?Pe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,fe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,de.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,fe,Ae,de.data):n.texImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,fe,Ae,de.data)}else if(y.isDataArrayTexture)if(Pe){if(Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,J.width,J.height,J.depth),N)if(y.layerUpdates.size>0){const Q=Y0(J.width,J.height,y.format,y.type);for(const he of y.layerUpdates){const _e=J.data.subarray(he*Q/J.data.BYTES_PER_ELEMENT,(he+1)*Q/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,fe,Ae,_e)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,Ae,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,fe,Ae,J.data);else if(y.isData3DTexture)Pe?(Be&&n.texStorage3D(t.TEXTURE_3D,le,pe,J.width,J.height,J.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,Ae,J.data)):n.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,fe,Ae,J.data);else if(y.isFramebufferTexture){if(Be)if(Pe)n.texStorage2D(t.TEXTURE_2D,le,pe,J.width,J.height);else{let Q=J.width,he=J.height;for(let _e=0;_e<le;_e++)n.texImage2D(t.TEXTURE_2D,_e,pe,Q,he,0,fe,Ae,null),Q>>=1,he>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),J.parentNode!==Q){Q.appendChild(J),d.add(y),Q.onpaint=he=>{const _e=he.changedElements;for(const te of d)_e.includes(te.image)&&(te.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const _e=t.RGBA,te=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,te,we,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(Pe&&Be){const Q=lt(be[0]);n.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height)}for(let Q=0,he=be.length;Q<he;Q++)de=be[Q],Pe?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe,Ae,de):n.texImage2D(t.TEXTURE_2D,Q,pe,fe,Ae,de);y.generateMipmaps=!1}else if(Pe){if(Be){const Q=lt(J);n.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Ae,J)}else n.texImage2D(t.TEXTURE_2D,0,pe,fe,Ae,J);h(y)&&v(G),ue.__version=oe.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ue(C,y,O){if(y.image.length!==6)return;const G=j(C,y),q=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const oe=i.get(q);if(q.version!==oe.__version||G===!0){n.activeTexture(t.TEXTURE0+O);const ue=je.getPrimaries(je.workingColorSpace),K=y.colorSpace===Ti?null:je.getPrimaries(y.colorSpace),J=y.colorSpace===Ti||ue===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ae=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!fe&&!Ae?pe[te]=m(y.image[te],!0,r.maxCubemapSize):pe[te]=Ae?y.image[te].image:y.image[te],pe[te]=nn(y,pe[te]);const de=pe[0],be=s.convert(y.format,y.colorSpace),Pe=s.convert(y.type),Be=S(y.internalFormat,be,Pe,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,le=oe.__version===void 0||G===!0,Q=q.dataReady;let he=w(y,de);Xe(t.TEXTURE_CUBE_MAP,y);let _e;if(fe){N&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Be,de.width,de.height);for(let te=0;te<6;te++){_e=pe[te].mipmaps;for(let we=0;we<_e.length;we++){const Ee=_e[we];y.format!==ci?be!==null?N?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Ee.width,Ee.height,be,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Be,Ee.width,Ee.height,0,Ee.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Ee.width,Ee.height,be,Pe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Be,Ee.width,Ee.height,0,be,Pe,Ee.data)}}}else{if(_e=y.mipmaps,N&&le){_e.length>0&&he++;const te=lt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Be,te.width,te.height)}for(let te=0;te<6;te++)if(Ae){N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,be,Pe,pe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,pe[te].width,pe[te].height,0,be,Pe,pe[te].data);for(let we=0;we<_e.length;we++){const Rt=_e[we].image[te].image;N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Rt.width,Rt.height,be,Pe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Be,Rt.width,Rt.height,0,be,Pe,Rt.data)}}else{N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be,Pe,pe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Be,be,Pe,pe[te]);for(let we=0;we<_e.length;we++){const Ee=_e[we];N?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,be,Pe,Ee.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Be,be,Pe,Ee.image[te])}}}h(y)&&v(t.TEXTURE_CUBE_MAP),oe.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function xe(C,y,O,G,q,oe){const ue=s.convert(O.format,O.colorSpace),K=s.convert(O.type),J=S(O.internalFormat,ue,K,O.normalized,O.colorSpace),fe=i.get(y),Ae=i.get(O);if(Ae.__renderTarget=y,!fe.__hasExternalTextures){const pe=Math.max(1,y.width>>oe),de=Math.max(1,y.height>>oe);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,oe,J,pe,de,y.depth,0,ue,K,null):n.texImage2D(q,oe,J,pe,de,0,ue,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),st(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,q,Ae.__webglTexture,0,$e(y)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,q,Ae.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function at(C,y,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),y.depthBuffer){const G=y.depthTexture,q=G&&G.isDepthTexture?G.type:null,oe=T(y.stencilBuffer,q),ue=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;st(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(y),oe,y.width,y.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(y),oe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,oe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,C)}else{const G=y.textures;for(let q=0;q<G.length;q++){const oe=G[q],ue=s.convert(oe.format,oe.colorSpace),K=s.convert(oe.type),J=S(oe.internalFormat,ue,K,oe.normalized,oe.colorSpace);st(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(y),J,y.width,y.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(y),J,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,J,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(C,y,O){const G=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,y.depthTexture);const fe=s.convert(y.depthTexture.format),Ae=s.convert(y.depthTexture.type);let pe;y.depthTexture.format===tr?pe=t.DEPTH_COMPONENT24:y.depthTexture.format===Sr&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,y.width,y.height,0,fe,Ae,null)}}else P(y.depthTexture,0);const oe=q.__webglTexture,ue=$e(y),K=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,J=y.depthTexture.format===Sr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===tr)st(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,K,oe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,K,oe,0);else if(y.depthTexture.format===Sr)st(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,K,oe,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(C){const y=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const G=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){const q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=G}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Oe(y.__webglFramebuffer[G],C,G);else{const G=C.texture.mipmaps;G&&G.length>0?Oe(y.__webglFramebuffer[0],C,0):Oe(y.__webglFramebuffer,C,0)}else if(O){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=t.createRenderbuffer(),at(y.__webglDepthbuffer[G],C,!1);else{const q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,oe)}}else{const G=C.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),at(y.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(C,y,O){const G=i.get(C);y!==void 0&&xe(G.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&ot(C)}function qe(C){const y=C.texture,O=i.get(C),G=i.get(y);C.addEventListener("dispose",_);const q=C.textures,oe=C.isWebGLCubeRenderTarget===!0,ue=q.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=y.version,a.memory.textures++),oe){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let J=0;J<y.mipmaps.length;J++)O.__webglFramebuffer[K][J]=t.createFramebuffer()}else O.__webglFramebuffer[K]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)O.__webglFramebuffer[K]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ue)for(let K=0,J=q.length;K<J;K++){const fe=i.get(q[K]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&st(C)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const J=q[K];O.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const fe=s.convert(J.format,J.colorSpace),Ae=s.convert(J.type),pe=S(J.internalFormat,fe,Ae,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),de=$e(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,O.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),at(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)xe(O.__webglFramebuffer[K][J],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else xe(O.__webglFramebuffer[K],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(y)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let K=0,J=q.length;K<J;K++){const fe=q[K],Ae=i.get(fe);let pe=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ae.__webglTexture),Xe(pe,fe),xe(O.__webglFramebuffer,C,fe,t.COLOR_ATTACHMENT0+K,pe,0),h(fe)&&v(pe)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,G.__webglTexture),Xe(K,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)xe(O.__webglFramebuffer[J],C,y,t.COLOR_ATTACHMENT0,K,J);else xe(O.__webglFramebuffer,C,y,t.COLOR_ATTACHMENT0,K,0);h(y)&&v(K),n.unbindTexture()}C.depthBuffer&&ot(C)}function vt(C){const y=C.textures;for(let O=0,G=y.length;O<G;O++){const q=y[O];if(h(q)){const oe=x(C),ue=i.get(q).__webglTexture;n.bindTexture(oe,ue),v(oe),n.unbindTexture()}}}const Mt=[],Ie=[];function Ve(C){if(C.samples>0){if(st(C)===!1){const y=C.textures,O=C.width,G=C.height;let q=t.COLOR_BUFFER_BIT;const oe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(C),K=y.length>1;if(K)for(let fe=0;fe<y.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const J=C.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ae=i.get(y[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,O,G,0,0,O,G,q,t.NEAREST),l===!0&&(Mt.length=0,Ie.length=0,Mt.push(t.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Mt.push(oe),Ie.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let fe=0;fe<y.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ae=i.get(y[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function $e(C){return Math.min(r.maxSamples,C.samples)}function st(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(C){const y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function nn(C,y){const O=C.colorSpace,G=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ma&&O!==Ti&&(je.getTransfer(O)===ct?(G!==ci||q!==fn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",O)),y}function lt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.getTextureUnits=ee,this.setTextureUnits=k,this.setTexture2D=P,this.setTexture2DArray=U,this.setTexture3D=X,this.setTextureCube=ne,this.rebindTextures=Qe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function sN(t,e){function n(i,r=Ti){let s;const a=je.getTransfer(r);if(i===fn)return t.UNSIGNED_BYTE;if(i===wm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Am)return t.UNSIGNED_SHORT_5_5_5_1;if(i===SM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===MM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===xM)return t.BYTE;if(i===yM)return t.SHORT;if(i===ko)return t.UNSIGNED_SHORT;if(i===Tm)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===li)return t.FLOAT;if(i===er)return t.HALF_FLOAT;if(i===EM)return t.ALPHA;if(i===TM)return t.RGB;if(i===ci)return t.RGBA;if(i===tr)return t.DEPTH_COMPONENT;if(i===Sr)return t.DEPTH_STENCIL;if(i===wM)return t.RED;if(i===Rm)return t.RED_INTEGER;if(i===ps)return t.RG;if(i===Cm)return t.RG_INTEGER;if(i===bm)return t.RGBA_INTEGER;if(i===lc||i===cc||i===uc||i===fc)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ph||i===mh||i===gh||i===vh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===xh||i===yh||i===Sh||i===Mh||i===Xc||i===Eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_h||i===xh)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sh)return s.COMPRESSED_R11_EAC;if(i===Mh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xc)return s.COMPRESSED_RG11_EAC;if(i===Eh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Th||i===wh||i===Ah||i===Rh||i===Ch||i===bh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih||i===Uh||i===Fh||i===Oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Th)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ah)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ph)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ih)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oh)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bh||i===kh||i===Vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bh)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zh||i===Gh||i===Yc||i===Hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oN=`
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

}`;class lN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new UM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new An({vertexShader:aN,fragmentShader:oN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new Jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cN extends ir{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const M=typeof XRWebGLBinding<"u",m=new lN,h={},v=n.getContextAttributes();let x=null,S=null;const T=[],w=[],R=new ze;let _=null;const A=new qn;A.viewport=new Dt;const b=new qn;b.viewport=new Dt;const D=[A,b],B=new _P;let $=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ae=T[j];return ae===void 0&&(ae=new Ef,T[j]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(j){let ae=T[j];return ae===void 0&&(ae=new Ef,T[j]=ae),ae.getGripSpace()},this.getHand=function(j){let ae=T[j];return ae===void 0&&(ae=new Ef,T[j]=ae),ae.getHandSpace()};function k(j){const ae=w.indexOf(j.inputSource);if(ae===-1)return;const ie=T[ae];ie!==void 0&&(ie.update(j.inputSource,j.frame,c||a),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function Z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",F);for(let j=0;j<T.length;j++){const ae=w[j];ae!==null&&(w[j]=null,T[j].disconnect(ae))}$=null,ee=null,m.reset();for(const j in h)delete h[j];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ne=null,Ue=null;v.depth&&(Ue=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=v.stencil?Sr:tr,Ne=v.stencil?Sa:Di);const xe={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new vn(f.textureWidth,f.textureHeight,{format:ci,type:fn,depthTexture:new gs(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new vn(p.framebufferWidth,p.framebufferHeight,{format:ci,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(j){for(let ae=0;ae<j.removed.length;ae++){const ie=j.removed[ae],Ne=w.indexOf(ie);Ne>=0&&(w[Ne]=null,T[Ne].disconnect(ie))}for(let ae=0;ae<j.added.length;ae++){const ie=j.added[ae];let Ne=w.indexOf(ie);if(Ne===-1){for(let xe=0;xe<T.length;xe++)if(xe>=w.length){w.push(ie),Ne=xe;break}else if(w[xe]===null){w[xe]=ie,Ne=xe;break}if(Ne===-1)break}const Ue=T[Ne];Ue&&Ue.connect(ie)}}const P=new H,U=new H;function X(j,ae,ie){P.setFromMatrixPosition(ae.matrixWorld),U.setFromMatrixPosition(ie.matrixWorld);const Ne=P.distanceTo(U),Ue=ae.projectionMatrix.elements,xe=ie.projectionMatrix.elements,at=Ue[14]/(Ue[10]-1),Oe=Ue[14]/(Ue[10]+1),ot=(Ue[9]+1)/Ue[5],Qe=(Ue[9]-1)/Ue[5],qe=(Ue[8]-1)/Ue[0],vt=(xe[8]+1)/xe[0],Mt=at*qe,Ie=at*vt,Ve=Ne/(-qe+vt),$e=Ve*-qe;if(ae.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($e),j.translateZ(Ve),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ue[10]===-1)j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const st=at+Ve,L=Oe+Ve,nn=Mt-$e,lt=Ie+(Ne-$e),C=ot*Oe/L*st,y=Qe*Oe/L*st;j.projectionMatrix.makePerspective(nn,lt,C,y,st,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,ae){ae===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ae.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ae=j.near,ie=j.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),B.near=b.near=A.near=ae,B.far=b.far=A.far=ie,($!==B.near||ee!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),$=B.near,ee=B.far),B.layers.mask=j.layers.mask|6,A.layers.mask=B.layers.mask&-5,b.layers.mask=B.layers.mask&-3;const Ne=j.parent,Ue=B.cameras;ne(B,Ne);for(let xe=0;xe<Ue.length;xe++)ne(Ue[xe],Ne);Ue.length===2?X(B,A,b):B.projectionMatrix.copy(A.projectionMatrix),se(j,B,Ne)};function se(j,ae,ie){ie===null?j.matrix.copy(ae.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(ae.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ae.projectionMatrix),j.projectionMatrixInverse.copy(ae.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return h[j]};let He=null;function nt(j,ae){if(u=ae.getViewerPose(c||a),g=ae,u!==null){const ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ne=!1;ie.length!==B.cameras.length&&(B.cameras.length=0,Ne=!0);for(let Oe=0;Oe<ie.length;Oe++){const ot=ie[Oe];let Qe=null;if(p!==null)Qe=p.getViewport(ot);else{const vt=d.getViewSubImage(f,ot);Qe=vt.viewport,Oe===0&&(e.setRenderTargetTextures(S,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(S))}let qe=D[Oe];qe===void 0&&(qe=new qn,qe.layers.enable(Oe),qe.viewport=new Dt,D[Oe]=qe),qe.matrix.fromArray(ot.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ot.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Oe===0&&(B.matrix.copy(qe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ne===!0&&B.cameras.push(qe)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const Oe=d.getDepthInformation(ie[0]);Oe&&Oe.isValid&&Oe.texture&&m.init(Oe,r.renderState)}if(Ue&&Ue.includes("camera-access")&&M){e.state.unbindTexture(),d=i.getBinding();for(let Oe=0;Oe<ie.length;Oe++){const ot=ie[Oe].camera;if(ot){let Qe=h[ot];Qe||(Qe=new UM,h[ot]=Qe);const qe=d.getCameraImage(ot);Qe.sourceTexture=qe}}}}for(let ie=0;ie<T.length;ie++){const Ne=w[ie],Ue=T[ie];Ne!==null&&Ue!==void 0&&Ue.update(Ne,ae,c||a)}He&&He(j,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const Xe=new BM;Xe.setAnimationLoop(nt),this.setAnimationLoop=function(j){He=j},this.dispose=function(){}}}const uN=new zt,XM=new Fe;XM.set(-1,0,0,0,1,0,0,0,1);function fN(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,FM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,S){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),M(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===$t&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===$t&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,m.envMapRotation.value.setFromMatrix4(uN.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(XM),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===$t&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function M(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dN(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const w=T.program;i.uniformBlockBinding(S,w)}function c(S,T){let w=r[S.id];w===void 0&&(m(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",v));const R=T.program;i.updateUBOMapping(S,R);const _=e.render.frame;s[S.id]!==_&&(f(S),s[S.id]=_)}function u(S){const T=d();S.__bindingPointIndex=T;const w=t.createBuffer(),R=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,R,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=r[S.id],w=S.uniforms,R=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let _=0,A=w.length;_<A;_++){const b=w[_];if(Array.isArray(b))for(let D=0,B=b.length;D<B;D++)p(b[D],_,D,R);else p(b,_,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,T,w,R){if(M(S,T,w,R)===!0){const _=S.__offset,A=S.value;if(Array.isArray(A)){let b=0;for(let D=0;D<A.length;D++){const B=A[D],$=h(B);g(B,S.__data,b),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(b+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function g(S,T,w){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,w)}function M(S,T,w,R){const _=S.value,A=T+"_"+w;if(R[A]===void 0)return typeof _=="number"||typeof _=="boolean"?R[A]=_:ArrayBuffer.isView(_)?R[A]=_.slice():R[A]=_.clone(),!0;{const b=R[A];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return R[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function m(S){const T=S.uniforms;let w=0;const R=16;for(let A=0,b=T.length;A<b;A++){const D=Array.isArray(T[A])?T[A]:[T[A]];for(let B=0,$=D.length;B<$;B++){const ee=D[B],k=Array.isArray(ee.value)?ee.value:[ee.value];for(let Z=0,F=k.length;Z<F;Z++){const P=k[Z],U=h(P),X=w%R,ne=X%U.boundary,se=X+ne;w+=ne,se!==0&&R-se<U.storage&&(w+=R-se),ee.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=w,w+=U.storage}}}const _=w%R;return _>0&&(w+=R-_),S.__size=w,S.__cache={},this}function h(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),T}function v(S){const T=S.target;T.removeEventListener("dispose",v);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function x(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:x}}const hN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function pN(){return yi===null&&(yi=new sP(hN,16,16,ps,er),yi.name="DFG_LUT",yi.minFilter=Lt,yi.magFilter=Lt,yi.wrapS=Gi,yi.wrapT=Gi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class mN{constructor(e={}){const{canvas:n=Fb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=fn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const M=p,m=new Set([bm,Cm,Rm]),h=new Set([fn,Di,ko,Sa,wm,Am]),v=new Uint32Array(4),x=new Int32Array(4),S=new H;let T=null,w=null;const R=[],_=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let D=!1,B=null,$=null,ee=null,k=null;this._outputColorSpace=Ot;let Z=0,F=0,P=null,U=-1,X=null;const ne=new Dt,se=new Dt;let He=null;const nt=new rt(0);let Xe=0,j=n.width,ae=n.height,ie=1,Ne=null,Ue=null;const xe=new Dt(0,0,j,ae),at=new Dt(0,0,j,ae);let Oe=!1;const ot=new NM;let Qe=!1,qe=!1;const vt=new zt,Mt=new H,Ie=new Dt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function st(){return P===null?ie:1}let L=i;function nn(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xu}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",pt,!1),n.addEventListener("webglcontextcreationerror",mi,!1),L===null){const I="webgl2";if(L=nn(I,E),L===null)throw nn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw et("WebGLRenderer: "+E.message),E}let lt,C,y,O,G,q,oe,ue,K,J,fe,Ae,pe,de,be,Pe,Be,N,le,Q,he,_e,te;function we(){lt=new p2(L),lt.init(),he=new sN(L,lt),C=new a2(L,lt,e,he),y=new iN(L,lt),C.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),$=L.createFramebuffer(),ee=L.createFramebuffer(),k=L.createFramebuffer(),O=new v2(L),G=new HL,q=new rN(L,lt,y,G,C,he,O),oe=new h2(b),ue=new SP(L),_e=new r2(L,ue),K=new m2(L,ue,O,_e),J=new x2(L,K,ue,_e,O),N=new _2(L,C,q),be=new o2(G),fe=new GL(b,oe,lt,C,_e,be),Ae=new fN(b,G),pe=new XL,de=new ZL(lt),Be=new i2(b,oe,y,J,g,l),Pe=new nN(b,J,C),te=new dN(L,O,C,y),le=new s2(L,lt,O),Q=new g2(L,lt,O),O.programs=fe.programs,b.capabilities=C,b.extensions=lt,b.properties=G,b.renderLists=pe,b.shadowMap=Pe,b.state=y,b.info=O}we(),M!==fn&&(A=new S2(M,n.width,n.height,o,r,s));const Ee=new cN(b,L);this.xr=Ee,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(j,ae,!1))},this.getSize=function(E){return E.set(j,ae)},this.setSize=function(E,I,W=!0){if(Ee.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,ae=I,n.width=Math.floor(E*ie),n.height=Math.floor(I*ie),W===!0&&(n.style.width=E+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(j*ie,ae*ie).floor()},this.setDrawingBufferSize=function(E,I,W){j=E,ae=I,ie=W,n.width=Math.floor(E*W),n.height=Math.floor(I*W),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(M===fn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,I,W,V){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,I,W,V),y.viewport(ne.copy(xe).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,I,W,V){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,I,W,V),y.scissor(se.copy(at).multiplyScalar(ie).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){y.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){Ne=E},this.setTransparentSort=function(E){Ue=E},this.getClearColor=function(E){return E.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,W=!0){let V=0;if(E){let z=!1;if(P!==null){const ve=P.texture.format;z=m.has(ve)}if(z){const ve=P.texture.type,Se=h.has(ve),ge=Be.getClearColor(),Te=Be.getClearAlpha(),Re=ge.r,ke=ge.g,We=ge.b;Se?(v[0]=Re,v[1]=ke,v[2]=We,v[3]=Te,L.clearBufferuiv(L.COLOR,0,v)):(x[0]=Re,x[1]=ke,x[2]=We,x[3]=Te,L.clearBufferiv(L.COLOR,0,x))}else V|=L.COLOR_BUFFER_BIT}I&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",pt,!1),n.removeEventListener("webglcontextcreationerror",mi,!1),Be.dispose(),pe.dispose(),de.dispose(),G.dispose(),oe.dispose(),J.dispose(),_e.dispose(),te.dispose(),fe.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Vm),Ee.removeEventListener("sessionend",zm),Vr.stop()};function Rt(E){E.preventDefault(),R0("WebGLRenderer: Context Lost."),D=!0}function pt(){R0("WebGLRenderer: Context Restored."),D=!1;const E=O.autoReset,I=Pe.enabled,W=Pe.autoUpdate,V=Pe.needsUpdate,z=Pe.type;we(),O.autoReset=E,Pe.enabled=I,Pe.autoUpdate=W,Pe.needsUpdate=V,Pe.type=z}function mi(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function gi(E){const I=E.target;I.removeEventListener("dispose",gi),$M(I)}function $M(E){KM(E),G.remove(E)}function KM(E){const I=G.get(E).programs;I!==void 0&&(I.forEach(function(W){fe.releaseProgram(W)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,W,V,z,ve){I===null&&(I=Ve);const Se=z.isMesh&&z.matrixWorld.determinantAffine()<0,ge=QM(E,I,W,V,z);y.setMaterial(V,Se);let Te=W.index,Re=1;if(V.wireframe===!0){if(Te=K.getWireframeAttribute(W),Te===void 0)return;Re=2}const ke=W.drawRange,We=W.attributes.position;let Ce=ke.start*Re,ft=(ke.start+ke.count)*Re;ve!==null&&(Ce=Math.max(Ce,ve.start*Re),ft=Math.min(ft,(ve.start+ve.count)*Re)),Te!==null?(Ce=Math.max(Ce,0),ft=Math.min(ft,Te.count)):We!=null&&(Ce=Math.max(Ce,0),ft=Math.min(ft,We.count));const Nt=ft-Ce;if(Nt<0||Nt===1/0)return;_e.setup(z,V,ge,W,Te);let Ct,dt=le;if(Te!==null&&(Ct=ue.get(Te),dt=Q,dt.setIndex(Ct)),z.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*st()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(z.isLine){let rn=V.linewidth;rn===void 0&&(rn=1),y.setLineWidth(rn*st()),z.isLineSegments?dt.setMode(L.LINES):z.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else z.isPoints?dt.setMode(L.POINTS):z.isSprite&&dt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const rn=z._multiDrawStarts,ye=z._multiDrawCounts,Rn=z._multiDrawCount,Je=Te?ue.get(Te).bytesPerElement:1,Vn=G.get(V).currentProgram.getUniforms();for(let vi=0;vi<Rn;vi++)Vn.setValue(L,"_gl_DrawID",vi),dt.render(rn[vi]/Je,ye[vi])}else if(z.isInstancedMesh)dt.renderInstances(Ce,Nt,z.count);else if(W.isInstancedBufferGeometry){const rn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,rn);dt.renderInstances(Ce,Nt,ye)}else dt.render(Ce,Nt)};function km(E,I,W){E.transparent===!0&&E.side===Dn&&E.forceSinglePass===!1?(E.side=$t,E.needsUpdate=!0,tl(E,I,W),E.side=Ji,E.needsUpdate=!0,tl(E,I,W),E.side=Dn):tl(E,I,W)}this.compile=function(E,I,W=null){W===null&&(W=E),w=de.get(W),w.init(I),_.push(w),W.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights();const V=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ve=z.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){const ge=ve[Se];km(ge,W,z),V.add(ge)}else km(ve,W,z),V.add(ve)}),w=_.pop(),V},this.compileAsync=function(E,I,W=null){const V=this.compile(E,I,W);return new Promise(z=>{function ve(){if(V.forEach(function(Se){G.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){z(E);return}setTimeout(ve,10)}lt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Tu=null;function jM(E){Tu&&Tu(E)}function Vm(){Vr.stop()}function zm(){Vr.start()}const Vr=new BM;Vr.setAnimationLoop(jM),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(E){Tu=E,Ee.setAnimationLoop(E),E===null?Vr.stop():Vr.start()},Ee.addEventListener("sessionstart",Vm),Ee.addEventListener("sessionend",zm),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(E,I);const W=Ee.enabled===!0&&Ee.isPresenting===!0,V=A!==null&&(P===null||W)&&A.begin(b,P);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(I),I=Ee.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,I,P),w=de.get(E,_.length),w.init(I),w.state.textureUnits=q.getTextureUnits(),_.push(w),vt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ot.setFromProjectionMatrix(vt,wi,I.reversedDepth),qe=this.localClippingEnabled,Qe=be.init(this.clippingPlanes,qe),T=pe.get(E,R.length),T.init(),R.push(T),Ee.enabled===!0&&Ee.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&wu(Se,I,-1/0,b.sortObjects)}wu(E,I,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort(Ne,Ue,I.reversedDepth),$e=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,$e&&Be.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&be.beginShadows();const z=w.state.shadowsArray;if(Pe.render(z,E,I),Qe===!0&&be.endShadows(),(V&&A.hasRenderPass())===!1){const Se=T.opaque,ge=T.transmissive;if(w.setupLights(),I.isArrayCamera){const Te=I.cameras;if(ge.length>0)for(let Re=0,ke=Te.length;Re<ke;Re++){const We=Te[Re];Hm(Se,ge,E,We)}$e&&Be.render(E);for(let Re=0,ke=Te.length;Re<ke;Re++){const We=Te[Re];Gm(T,E,We,We.viewport)}}else ge.length>0&&Hm(Se,ge,E,I),$e&&Be.render(E),Gm(T,E,I)}P!==null&&F===0&&(q.updateMultisampleRenderTarget(P),q.updateRenderTargetMipmap(P)),V&&A.end(b),E.isScene===!0&&E.onAfterRender(b,E,I),_e.resetDefaultState(),U=-1,X=null,_.pop(),_.length>0?(w=_[_.length-1],q.setTextureUnits(w.state.textureUnits),Qe===!0&&be.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,B!==null&&B.renderEnd()};function wu(E,I,W,V){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ot.intersectsSprite(E)){V&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(vt);const Se=J.update(E),ge=E.material;ge.visible&&T.push(E,Se,ge,W,Ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ot.intersectsObject(E))){const Se=J.update(E),ge=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ie.copy(Se.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(vt)),Array.isArray(ge)){const Te=Se.groups;for(let Re=0,ke=Te.length;Re<ke;Re++){const We=Te[Re],Ce=ge[We.materialIndex];Ce&&Ce.visible&&T.push(E,Se,Ce,W,Ie.z,We)}}else ge.visible&&T.push(E,Se,ge,W,Ie.z,null)}}const ve=E.children;for(let Se=0,ge=ve.length;Se<ge;Se++)wu(ve[Se],I,W,V)}function Gm(E,I,W,V){const{opaque:z,transmissive:ve,transparent:Se}=E;w.setupLightsView(W),Qe===!0&&be.setGlobalState(b.clippingPlanes,W),V&&y.viewport(ne.copy(V)),z.length>0&&el(z,I,W),ve.length>0&&el(ve,I,W),Se.length>0&&el(Se,I,W),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Hm(E,I,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Ce=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new vn(1,1,{generateMipmaps:!0,type:Ce?er:fn,minFilter:is,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ve=w.state.transmissionRenderTarget[V.id],Se=V.viewport||ne;ve.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),Te=b.getActiveCubeFace(),Re=b.getActiveMipmapLevel();b.setRenderTarget(ve),b.getClearColor(nt),Xe=b.getClearAlpha(),Xe<1&&b.setClearColor(16777215,.5),b.clear(),$e&&Be.render(W);const ke=b.toneMapping;b.toneMapping=Pi;const We=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Qe===!0&&be.setGlobalState(b.clippingPlanes,V),el(E,W,V),q.updateMultisampleRenderTarget(ve),q.updateRenderTargetMipmap(ve),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ft=0,Nt=I.length;ft<Nt;ft++){const Ct=I[ft],{object:dt,geometry:rn,material:ye,group:Rn}=Ct;if(ye.side===Dn&&dt.layers.test(V.layers)){const Je=ye.side;ye.side=$t,ye.needsUpdate=!0,Wm(dt,W,V,rn,ye,Rn),ye.side=Je,ye.needsUpdate=!0,Ce=!0}}Ce===!0&&(q.updateMultisampleRenderTarget(ve),q.updateRenderTargetMipmap(ve))}b.setRenderTarget(ge,Te,Re),b.setClearColor(nt,Xe),We!==void 0&&(V.viewport=We),b.toneMapping=ke}function el(E,I,W){const V=I.isScene===!0?I.overrideMaterial:null;for(let z=0,ve=E.length;z<ve;z++){const Se=E[z],{object:ge,geometry:Te,group:Re}=Se;let ke=Se.material;ke.allowOverride===!0&&V!==null&&(ke=V),ge.layers.test(W.layers)&&Wm(ge,I,W,Te,ke,Re)}}function Wm(E,I,W,V,z,ve){E.onBeforeRender(b,I,W,V,z,ve),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,I,W,V,E,ve),z.transparent===!0&&z.side===Dn&&z.forceSinglePass===!1?(z.side=$t,z.needsUpdate=!0,b.renderBufferDirect(W,I,V,z,E,ve),z.side=Ji,z.needsUpdate=!0,b.renderBufferDirect(W,I,V,z,E,ve),z.side=Dn):b.renderBufferDirect(W,I,V,z,E,ve),E.onAfterRender(b,I,W,V,z,ve)}function tl(E,I,W){I.isScene!==!0&&(I=Ve);const V=G.get(E),z=w.state.lights,ve=w.state.shadowsArray,Se=z.state.version,ge=fe.getParameters(E,z.state,ve,I,W,w.state.lightProbeGridArray),Te=fe.getProgramCacheKey(ge);let Re=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=oe.get(E.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",gi),Re=new Map,V.programs=Re);let We=Re.get(Te);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===Se)return Ym(E,ge),We}else ge.uniforms=fe.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,W,ge),E.onBeforeCompile(ge,b),We=fe.acquireProgram(ge,Te),Re.set(Te,We),V.uniforms=ge.uniforms;const Ce=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=be.uniform),Ym(E,ge),V.needsLights=eE(E),V.lightsStateVersion=Se,V.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=We,V.uniformsList=null,We}function Xm(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=dc.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Ym(E,I){const W=G.get(E);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function ZM(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let W=0,V=E.length;W<V;W++){const z=E[W];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function QM(E,I,W,V,z){I.isScene!==!0&&(I=Ve),q.resetTextureUnits();const ve=I.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,ge=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:je.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=oe.get(V.envMap||Se,Te),ke=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ce=!!W.morphAttributes.position,ft=!!W.morphAttributes.normal,Nt=!!W.morphAttributes.color;let Ct=Pi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ct=b.toneMapping);const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rn=dt!==void 0?dt.length:0,ye=G.get(V),Rn=w.state.lights;if(Qe===!0&&(qe===!0||E!==X)){const mt=E===X&&V.id===U;be.setState(V,E,mt)}let Je=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Rn.state.version||ye.outputColorSpace!==ge||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==Re||V.fog===!0&&ye.fog!==ve||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==be.numPlanes||ye.numIntersection!==be.numIntersection)||ye.vertexAlphas!==ke||ye.vertexTangents!==We||ye.morphTargets!==Ce||ye.morphNormals!==ft||ye.morphColors!==Nt||ye.toneMapping!==Ct||ye.morphTargetsCount!==rn||!!ye.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ye.__version=V.version);let Vn=ye.currentProgram;Je===!0&&(Vn=tl(V,I,z),B&&V.isNodeMaterial&&B.onUpdateProgram(V,Vn,ye));let vi=!1,rr=!1,ys=!1;const ht=Vn.getUniforms(),It=ye.uniforms;if(y.useProgram(Vn.program)&&(vi=!0,rr=!0,ys=!0),V.id!==U&&(U=V.id,rr=!0),ye.needsLights){const mt=ZM(w.state.lightProbeGridArray,z);ye.lightProbeGrid!==mt&&(ye.lightProbeGrid=mt,rr=!0)}if(vi||X!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ht.setValue(L,"projectionMatrix",E.projectionMatrix),ht.setValue(L,"viewMatrix",E.matrixWorldInverse);const ar=ht.map.cameraPosition;ar!==void 0&&ar.setValue(L,Mt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ht.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,rr=!0,ys=!0)}if(ye.needsLights&&(Rn.state.directionalShadowMap.length>0&&ht.setValue(L,"directionalShadowMap",Rn.state.directionalShadowMap,q),Rn.state.spotShadowMap.length>0&&ht.setValue(L,"spotShadowMap",Rn.state.spotShadowMap,q),Rn.state.pointShadowMap.length>0&&ht.setValue(L,"pointShadowMap",Rn.state.pointShadowMap,q)),z.isSkinnedMesh){ht.setOptional(L,z,"bindMatrix"),ht.setOptional(L,z,"bindMatrixInverse");const mt=z.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),ht.setValue(L,"boneTexture",mt.boneTexture,q))}z.isBatchedMesh&&(ht.setOptional(L,z,"batchingTexture"),ht.setValue(L,"batchingTexture",z._matricesTexture,q),ht.setOptional(L,z,"batchingIdTexture"),ht.setValue(L,"batchingIdTexture",z._indirectTexture,q),ht.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&ht.setValue(L,"batchingColorTexture",z._colorsTexture,q));const sr=W.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&N.update(z,W,Vn),(rr||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,ht.setValue(L,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(It.envMapIntensity.value=I.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=pN()),rr){if(ht.setValue(L,"toneMappingExposure",b.toneMappingExposure),ye.needsLights&&JM(It,ys),ve&&V.fog===!0&&Ae.refreshFogUniforms(It,ve),Ae.refreshMaterialUniforms(It,V,ie,ae,w.state.transmissionRenderTarget[E.id]),ye.needsLights&&ye.lightProbeGrid){const mt=ye.lightProbeGrid;It.probesSH.value=mt.texture,It.probesMin.value.copy(mt.boundingBox.min),It.probesMax.value.copy(mt.boundingBox.max),It.probesResolution.value.copy(mt.resolution)}dc.upload(L,Xm(ye),It,q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(dc.upload(L,Xm(ye),It,q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(L,"center",z.center),ht.setValue(L,"modelViewMatrix",z.modelViewMatrix),ht.setValue(L,"normalMatrix",z.normalMatrix),ht.setValue(L,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){const mt=V.uniformsGroups;for(let ar=0,Ss=mt.length;ar<Ss;ar++){const qm=mt[ar];te.update(qm,Vn),te.bind(qm,Vn)}}return Vn}function JM(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function eE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,I,W){const V=G.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=I,G.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const W=G.get(E);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,W=0){P=E,Z=I,F=W;let V=null,z=!1,ve=!1;if(E){const ge=G.get(E);if(ge.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,ge.__webglFramebuffer),ne.copy(E.viewport),se.copy(E.scissor),He=E.scissorTest,y.viewport(ne),y.scissor(se),y.setScissorTest(He),U=-1;return}else if(ge.__webglFramebuffer===void 0)q.setupRenderTarget(E);else if(ge.__hasExternalTextures)q.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&G.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Re=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?V=Re[I][W]:V=Re[I],z=!0):E.samples>0&&q.useMultisampledRTT(E)===!1?V=G.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[W]:V=Re,ne.copy(E.viewport),se.copy(E.scissor),He=E.scissorTest}else ne.copy(xe).multiplyScalar(ie).floor(),se.copy(at).multiplyScalar(ie).floor(),He=Oe;if(W!==0&&(V=$),y.bindFramebuffer(L.FRAMEBUFFER,V)&&y.drawBuffers(E,V),y.viewport(ne),y.scissor(se),y.setScissorTest(He),z){const ge=G.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,W)}else if(ve){const ge=I;for(let Te=0;Te<E.textures.length;Te++){const Re=G.get(E.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,Re.__webglTexture,W,ge)}}else if(E!==null&&W!==0){const ge=G.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,W)}U=-1},this.readRenderTargetPixels=function(E,I,W,V,z,ve,Se,ge=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){y.bindFramebuffer(L.FRAMEBUFFER,Te);try{const Re=E.textures[ge],ke=Re.format,We=Re.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!C.textureFormatReadable(ke)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(We)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-V&&W>=0&&W<=E.height-z&&L.readPixels(I,W,V,z,he.convert(ke),he.convert(We),ve)}finally{const Re=P!==null?G.get(P).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(E,I,W,V,z,ve,Se,ge=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(I>=0&&I<=E.width-V&&W>=0&&W<=E.height-z){y.bindFramebuffer(L.FRAMEBUFFER,Te);const Re=E.textures[ge],ke=Re.format,We=Re.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!C.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,ve.byteLength,L.STREAM_READ),L.readPixels(I,W,V,z,he.convert(ke),he.convert(We),0);const ft=P!==null?G.get(P).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,ft);const Nt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ob(L,Nt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ve),L.deleteBuffer(Ce),L.deleteSync(Nt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,W=0){const V=Math.pow(2,-W),z=Math.floor(E.image.width*V),ve=Math.floor(E.image.height*V),Se=I!==null?I.x:0,ge=I!==null?I.y:0;q.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Se,ge,z,ve),y.unbindTexture()},this.copyTextureToTexture=function(E,I,W=null,V=null,z=0,ve=0){let Se,ge,Te,Re,ke,We,Ce,ft,Nt;const Ct=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(W!==null)Se=W.max.x-W.min.x,ge=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,ke=W.min.y,We=W.isBox3?W.min.z:0;else{const It=Math.pow(2,-z);Se=Math.floor(Ct.width*It),ge=Math.floor(Ct.height*It),E.isDataArrayTexture?Te=Ct.depth:E.isData3DTexture?Te=Math.floor(Ct.depth*It):Te=1,Re=0,ke=0,We=0}V!==null?(Ce=V.x,ft=V.y,Nt=V.z):(Ce=0,ft=0,Nt=0);const dt=he.convert(I.format),rn=he.convert(I.type);let ye;I.isData3DTexture?(q.setTexture3D(I,0),ye=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(q.setTexture2DArray(I,0),ye=L.TEXTURE_2D_ARRAY):(q.setTexture2D(I,0),ye=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Rn=y.getParameter(L.UNPACK_ROW_LENGTH),Je=y.getParameter(L.UNPACK_IMAGE_HEIGHT),Vn=y.getParameter(L.UNPACK_SKIP_PIXELS),vi=y.getParameter(L.UNPACK_SKIP_ROWS),rr=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),y.pixelStorei(L.UNPACK_SKIP_ROWS,ke),y.pixelStorei(L.UNPACK_SKIP_IMAGES,We);const ys=E.isDataArrayTexture||E.isData3DTexture,ht=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const It=G.get(E),sr=G.get(I),mt=G.get(It.__renderTarget),ar=G.get(sr.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,mt.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Ss=0;Ss<Te;Ss++)ys&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(E).__webglTexture,z,We+Ss),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(I).__webglTexture,ve,Nt+Ss)),L.blitFramebuffer(Re,ke,Se,ge,Ce,ft,Se,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||G.has(E)){const It=G.get(E),sr=G.get(I);y.bindFramebuffer(L.READ_FRAMEBUFFER,ee),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let mt=0;mt<Te;mt++)ys?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,It.__webglTexture,z,We+mt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,It.__webglTexture,z),ht?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sr.__webglTexture,ve,Nt+mt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sr.__webglTexture,ve),z!==0?L.blitFramebuffer(Re,ke,Se,ge,Ce,ft,Se,ge,L.COLOR_BUFFER_BIT,L.NEAREST):ht?L.copyTexSubImage3D(ye,ve,Ce,ft,Nt+mt,Re,ke,Se,ge):L.copyTexSubImage2D(ye,ve,Ce,ft,Re,ke,Se,ge);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(ye,ve,Ce,ft,Nt,Se,ge,Te,dt,rn,Ct.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,ve,Ce,ft,Nt,Se,ge,Te,dt,Ct.data):L.texSubImage3D(ye,ve,Ce,ft,Nt,Se,ge,Te,dt,rn,Ct):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ve,Ce,ft,Se,ge,dt,rn,Ct.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ve,Ce,ft,Ct.width,Ct.height,dt,Ct.data):L.texSubImage2D(L.TEXTURE_2D,ve,Ce,ft,Se,ge,dt,rn,Ct);y.pixelStorei(L.UNPACK_ROW_LENGTH,Rn),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Vn),y.pixelStorei(L.UNPACK_SKIP_ROWS,vi),y.pixelStorei(L.UNPACK_SKIP_IMAGES,rr),ve===0&&I.generateMipmaps&&L.generateMipmap(ye),y.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?q.setTextureCube(E,0):E.isData3DTexture?q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?q.setTexture2DArray(E,0):q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){Z=0,F=0,P=null,y.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}/**
 * postprocessing v6.39.3 build Sat Jul 18 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var gN=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new Li;return n.setAttribute("position",new jn(t,3)),n.setAttribute("uv",new jn(e,2)),n})(),kr=class Kh{static get fullscreenGeometry(){return gN}constructor(e="Pass",n=new Yh,i=new Su){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new pi(Kh.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Yh),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Ko){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof vn||n instanceof Pa||n instanceof jt||n instanceof Kh)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},vN=class extends kr{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},_N=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,xN="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",yN=class extends An{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ft(null),depthBuffer:new Ft(null),channelWeights:new Ft(null),opacity:new Ft(1)},blending:di,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:_N,vertexShader:xN}),this.depthFunc=Wc}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){const e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){const e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},SN=class extends kr{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new yN,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new vn(1,1,{minFilter:Lt,magFilter:Lt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==fn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===Ot&&(this.renderTarget.texture.colorSpace=Ot))}},g_=new rt,YM=class extends kr{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=s!==null,c=a>=0;l?(t.getClearColor(g_),t.setClearColor(s,c?a:o)):c&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(g_,o):c&&t.setClearAlpha(o)}},MN=class extends kr{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new YM(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,d=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,u,4294967295),a.stencil.setClear(d),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(t,null):(c.render(t,e),c.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},Yf=1/1e3,EN=1e3,TN=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*Yf}get fixedDelta(){return this._fixedDelta*Yf}set fixedDelta(t){this._fixedDelta=t*EN}get elapsed(){return this._elapsed*Yf}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},v_=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new SN,this.depthRenderTarget=null,this.passes=[],this.timer=new TN,this.autoRenderToScreen=!0,this.setRenderer(t)}get stableDepthTexture(){var t,e;return(e=(t=this.depthRenderTarget)==null?void 0:t.depthTexture)!=null?e:null}get multisampling(){return this.inputBuffer.samples}set multisampling(t){this.multisampling!==t&&(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new ze),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===fn&&t.outputColorSpace===Ot&&(this.inputBuffer.texture.colorSpace=Ot,this.outputBuffer.texture.colorSpace=Ot,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=new gs;t.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(t.format=Sr,t.type=Sa):t.type=li;const e=t.clone();e.name="EffectComposer.OutputDepth";const n=t.clone();n.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=t,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:i,height:r}=this.inputBuffer;this.depthRenderTarget=new vn(i,r,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:n})}blitDepthBuffer(t){const e=this.renderer,n=this.depthRenderTarget,i=e.properties,r=e.getContext();e.setRenderTarget(n);const s=i.get(t).__webglFramebuffer,a=i.get(n).__webglFramebuffer,o=t.stencilBuffer?r.DEPTH_BUFFER_BIT|r.STENCIL_BUFFER_BIT:r.DEPTH_BUFFER_BIT;r.bindFramebuffer(r.READ_FRAMEBUFFER,s),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,a),r.blitFramebuffer(0,0,t.width,t.height,0,0,n.width,n.height,o,r.NEAREST),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){var t,e,n;const i=this.stableDepthTexture;for(const r of this.passes)r.getDepthTexture()===i&&r.setDepthTexture(null);(t=this.depthRenderTarget)==null||t.dispose(),this.depthRenderTarget=null,(e=this.inputBuffer.depthTexture)==null||e.dispose(),this.inputBuffer.depthTexture=null,(n=this.outputBuffer.depthTexture)==null||n.dispose(),this.outputBuffer.depthTexture=null}createBuffer(t,e,n,i){const r=this.renderer,s=r===null?new ze:r.getDrawingBufferSize(new ze),a=new vn(s.width,s.height,{minFilter:Lt,magFilter:Lt,samples:i,stencilBuffer:e,depthBuffer:t,type:n});return n===fn&&r!==null&&r.outputColorSpace===Ot&&(a.texture.colorSpace=Ot),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new ze),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.renderer=i,t.setSize(r.width,r.height),t.initialize(i,s,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const o of n)o.setDepthTexture(this.stableDepthTexture)}else t.setDepthTexture(this.stableDepthTexture)}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){const s=this.stableDepthTexture;if(s!==null){const a=(l,c)=>l||c.needsDepthTexture;e.reduce(a,!1)||(t.getDepthTexture()===s&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s,a=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(o.render(e,i,r,t,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){n.renderToScreen=o.renderToScreen;const l=e.getContext(),c=e.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),n.render(e,i,r,t,a),c.setFunc(l.EQUAL,1,4294967295)}s=i,i=r,r=s}o instanceof MN?a=!0:o instanceof vN&&(a=!1)}}setSize(t,e,n){const i=this.renderer,r=i.getSize(new ze);(t===void 0||e===void 0)&&(t=r.width,e=r.height),(r.width!==t||r.height!==e)&&i.setSize(t,e,n);const s=i.getDrawingBufferSize(new ze);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],kr.fullscreenGeometry.dispose()}},os={NONE:0,DEPTH:1,CONVOLUTION:2},it={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},wN=class{constructor(){this.shaderParts=new Map([[it.FRAGMENT_HEAD,null],[it.FRAGMENT_MAIN_UV,null],[it.FRAGMENT_MAIN_IMAGE,null],[it.VERTEX_HEAD,null],[it.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=os.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ma}},qf=!1,__=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case Dn:n=this.materialsFlatShadedDoubleSide;break;case $t:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case Dn:n=this.materialsDoubleSide;break;case $t:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof An))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=Ji;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=$t,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Dn,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=$t,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Dn,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,qf){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return qf}static set workaroundEnabled(t){qf=t}},Ke={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},AN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",CN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ON="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",HN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$N="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",KN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",QN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",JN="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eI="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tI="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",nI="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iI="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rI=new Map([[Ke.ADD,AN],[Ke.ALPHA,RN],[Ke.AVERAGE,CN],[Ke.COLOR,bN],[Ke.COLOR_BURN,PN],[Ke.COLOR_DODGE,DN],[Ke.DARKEN,LN],[Ke.DIFFERENCE,NN],[Ke.DIVIDE,IN],[Ke.DST,null],[Ke.EXCLUSION,UN],[Ke.HARD_LIGHT,FN],[Ke.HARD_MIX,ON],[Ke.HUE,BN],[Ke.INVERT,kN],[Ke.INVERT_RGB,VN],[Ke.LIGHTEN,zN],[Ke.LINEAR_BURN,GN],[Ke.LINEAR_DODGE,HN],[Ke.LINEAR_LIGHT,WN],[Ke.LUMINOSITY,XN],[Ke.MULTIPLY,YN],[Ke.NEGATION,qN],[Ke.NORMAL,$N],[Ke.OVERLAY,KN],[Ke.PIN_LIGHT,jN],[Ke.REFLECT,ZN],[Ke.SATURATION,QN],[Ke.SCREEN,JN],[Ke.SOFT_LIGHT,eI],[Ke.SRC,tI],[Ke.SUBTRACT,nI],[Ke.VIVID_LIGHT,iI]]),sI=class extends ir{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new Ft(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return rI.get(this.blendFunction)}},qM=class extends ir{constructor(t,e,{attributes:n=os.NONE,blendFunction:i=Ke.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new sI(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Ma,this._outputColorSpace=Ti}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Ko){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof vn||e instanceof Pa||e instanceof jt||e instanceof kr)&&this[t].dispose()}}},x_=class extends kr{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new YM,this.overrideMaterialManager=n===null?null:new __(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new __(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,u=t.shadowMap.autoUpdate,d=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(d),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,a):t.render(s,a),a.layers.mask=l,s.background=c,t.shadowMap.autoUpdate=u}},aI=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,oI="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",lI=class extends An{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:xu.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ft(null),depthBuffer:new Ft(null),resolution:new Ft(new ze),texelSize:new Ft(new ze),cameraNear:new Ft(.3),cameraFar:new Ft(1e3),aspect:new Ft(1),time:new Ft(0)},blending:di,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Ko){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=aI.replace(it.FRAGMENT_HEAD,t.get(it.FRAGMENT_HEAD)||"").replace(it.FRAGMENT_MAIN_UV,t.get(it.FRAGMENT_MAIN_UV)||"").replace(it.FRAGMENT_MAIN_IMAGE,t.get(it.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=oI.replace(it.VERTEX_HEAD,t.get(it.VERTEX_HEAD)||"").replace(it.VERTEX_MAIN_SUPPORT,t.get(it.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof qn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return it}};function y_(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(s,r))}}function cI(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&n.attributes&os.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts;let c=l.get(it.FRAGMENT_HEAD)||"",u=l.get(it.FRAGMENT_MAIN_UV)||"",d=l.get(it.FRAGMENT_MAIN_IMAGE)||"",f=l.get(it.VERTEX_HEAD)||"",p=l.get(it.VERTEX_MAIN_SUPPORT)||"";const g=new Set,M=new Set;if(a&&(u+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const v=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${t}MainSupport(`,p+=v?`vUv);
`:`);
`;for(const x of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const S of x[1].split(/\s*,\s*/))n.varyings.add(S),g.add(S),M.add(S);for(const x of r.matchAll(o))M.add(x[1])}for(const v of i.matchAll(o))M.add(v[1]);for(const v of e.defines.keys())M.add(v.replace(/\([\w\s,]*\)/g,""));for(const v of e.uniforms.keys())M.add(v);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((v,x)=>n.uniforms.set(t+x.charAt(0).toUpperCase()+x.slice(1),v)),e.defines.forEach((v,x)=>n.defines.set(t+x.charAt(0).toUpperCase()+x.slice(1),v));const m=new Map([["fragment",i],["vertex",r]]);y_(t,M,n.defines),y_(t,M,m),i=m.get("fragment"),r=m.get("vertex");const h=e.blendMode;if(n.blendModes.set(h.blendFunction,h),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(d+=e.inputColorSpace===Ot?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ti?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const v=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;d+=`${t}MainImage(color0, UV, `,n.attributes&os.DEPTH&&v.test(i)&&(d+="depth, ",n.readDepth=!0),d+=`color1);
	`;const x=t+"BlendOpacity";n.uniforms.set(x,h.opacity),d+=`color0 = blend${h.blendFunction}(color0, color1, ${x});

	`,c+=`uniform float ${x};

`}if(c+=i+`
`,r!==null&&(f+=r+`
`),l.set(it.FRAGMENT_HEAD,c),l.set(it.FRAGMENT_MAIN_UV,u),l.set(it.FRAGMENT_MAIN_IMAGE,d),l.set(it.VERTEX_HEAD,f),l.set(it.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const v of e.extensions)n.extensions.add(v)}}var S_=class extends kr{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new lI(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new wN;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Ke.DST)t.attributes|=a.getAttributes()&os.DEPTH;else{if(t.attributes&a.getAttributes()&os.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);cI("e"+e++,a,t)}let n=t.shaderParts.get(it.FRAGMENT_HEAD),i=t.shaderParts.get(it.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(it.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of t.blendModes.values())n+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;t.attributes&os.DEPTH?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===Ot&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(it.FRAGMENT_HEAD,n),t.shaderParts.set(it.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(it.FRAGMENT_MAIN_UV,r);for(const[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=Ko){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==fn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};const uI=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");if(!n)throw new Error("2D context not available");n.fillStyle="black",n.fillRect(0,0,e.width,e.height);const i=new jt(e);i.minFilter=Lt,i.magFilter=Lt,i.generateMipmaps=!1;const r=[];let s=null;const a=64;let o=.1*64;const l=1/a,c=()=>{n.fillStyle="black",n.fillRect(0,0,e.width,e.height)},u=p=>{const g={x:p.x*64,y:(1-p.y)*64};let M=1;const m=S=>Math.sin(S*Math.PI/2),h=S=>-S*(S-2);p.age<a*.3?M=m(p.age/(a*.3)):M=h(1-(p.age-a*.3)/(a*.7))||0,M*=p.force;const v=`${(p.vx+1)/2*255}, ${(p.vy+1)/2*255}, ${M*255}`,x=64*5;n.shadowOffsetX=x,n.shadowOffsetY=x,n.shadowBlur=o,n.shadowColor=`rgba(${v},${.22*M})`,n.beginPath(),n.fillStyle="rgba(255,0,0,1)",n.arc(g.x-x,g.y-x,o,0,Math.PI*2),n.fill()};return{canvas:e,texture:i,addTouch:p=>{let g=0,M=0,m=0;if(s){const h=p.x-s.x,v=p.y-s.y;if(h===0&&v===0)return;const x=h*h+v*v,S=Math.sqrt(x);M=h/(S||1),m=v/(S||1),g=Math.min(x*1e4,1)}s={x:p.x,y:p.y},r.push({x:p.x,y:p.y,age:0,force:g,vx:M,vy:m})},update:()=>{c();for(let p=r.length-1;p>=0;p--){const g=r[p],M=g.force*l*(1-g.age/a);g.x+=g.vx*M,g.y+=g.vy*M,g.age++,g.age>a&&r.splice(p,1)}for(let p=0;p<r.length;p++)u(r[p]);i.needsUpdate=!0},set radiusScale(p){o=.1*64*p},get radiusScale(){return o/(.1*64)},size:64}},fI=(t,e)=>{const n=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new qM("LiquidEffect",n,{uniforms:new Map([["uTexture",new Ft(t)],["uStrength",new Ft((e==null?void 0:e.strength)??.025)],["uTime",new Ft(0)],["uFreq",new Ft((e==null?void 0:e.freq)??4.5)]])})},M_={square:0,circle:1,triangle:2,diamond:3},dI=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,hI=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,$f=10,pI=({variant:t="square",pixelSize:e=3,color:n="#B497CF",className:i,style:r,antialias:s=!0,patternScale:a=2,patternDensity:o=1,liquid:l=!1,liquidStrength:c=.1,liquidRadius:u=1,pixelSizeJitter:d=0,enableRipples:f=!0,rippleIntensityScale:p=1,rippleThickness:g=.1,rippleSpeed:M=.3,liquidWobbleSpeed:m=4.5,autoPauseOffscreen:h=!0,speed:v=.5,transparent:x=!0,edgeFade:S=.5,noiseAmount:T=0})=>{const w=ce.useRef(null),R=ce.useRef({visible:!0}),_=ce.useRef(v),A=ce.useRef(null),b=ce.useRef(null);return ce.useEffect(()=>{var k,Z,F;const D=w.current;if(!D)return;_.current=v;const B=["antialias","liquid","noiseAmount"],$={antialias:s,liquid:l,noiseAmount:T};let ee=!1;if(!A.current)ee=!0;else if(b.current){for(const P of B)if(b.current[P]!==$[P]){ee=!0;break}}if(ee){if(A.current){const Ie=A.current;(k=Ie.resizeObserver)==null||k.disconnect(),cancelAnimationFrame(Ie.raf),(Z=Ie.quad)==null||Z.geometry.dispose(),Ie.material.dispose(),(F=Ie.composer)==null||F.dispose(),Ie.renderer.dispose(),Ie.renderer.forceContextLoss(),Ie.renderer.domElement.parentElement===D&&D.removeChild(Ie.renderer.domElement),A.current=null}const P=document.createElement("canvas"),U=new mN({canvas:P,antialias:s,alpha:!0,powerPreference:"high-performance"});U.domElement.style.width="100%",U.domElement.style.height="100%",U.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),D.appendChild(U.domElement),x?U.setClearAlpha(0):U.setClearColor(0,1);const X={uResolution:{value:new ze(0,0)},uTime:{value:0},uColor:{value:new rt(n)},uClickPos:{value:Array.from({length:$f},()=>new ze(-1,-1))},uClickTimes:{value:new Float32Array($f)},uShapeType:{value:M_[t]??0},uPixelSize:{value:e*U.getPixelRatio()},uScale:{value:a},uDensity:{value:o},uPixelJitter:{value:d},uEnableRipples:{value:f?1:0},uRippleSpeed:{value:M},uRippleThickness:{value:g},uRippleIntensity:{value:p},uEdgeFade:{value:S}},ne=new Yh,se=new Su(-1,1,1,-1,0,1),He=new An({vertexShader:dI,fragmentShader:hI,uniforms:X,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Wh}),nt=new Jo(2,2),Xe=new pi(nt,He);ne.add(Xe);const j=new xP,ae=()=>{var $e;const Ie=D.clientWidth||1,Ve=D.clientHeight||1;U.setSize(Ie,Ve,!1),X.uResolution.value.set(U.domElement.width,U.domElement.height),($e=A.current)!=null&&$e.composer&&A.current.composer.setSize(U.domElement.width,U.domElement.height),X.uPixelSize.value=e*U.getPixelRatio()};ae();const ie=new ResizeObserver(ae);ie.observe(D);const Ue=(()=>{var Ie;if(typeof window<"u"&&((Ie=window.crypto)!=null&&Ie.getRandomValues)){const Ve=new Uint32Array(1);return window.crypto.getRandomValues(Ve),Ve[0]/4294967295}return Math.random()})()*1e3;let xe,at,Oe;if(l){at=uI(),at.radiusScale=u,xe=new v_(U);const Ie=new x_(ne,se);Oe=fI(at.texture,{strength:c,freq:m});const Ve=new S_(se,Oe);Ve.renderToScreen=!0,xe.addPass(Ie),xe.addPass(Ve)}if(T>0){xe||(xe=new v_(U),xe.addPass(new x_(ne,se)));const Ie=new qM("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new Ft(0)],["uAmount",new Ft(T)]])}),Ve=new S_(se,Ie);Ve.renderToScreen=!0,xe&&xe.passes.length>0&&xe.passes.forEach($e=>$e.renderToScreen=!1),xe.addPass(Ve)}xe&&xe.setSize(U.domElement.width,U.domElement.height);const ot=Ie=>{const Ve=U.domElement.getBoundingClientRect(),$e=U.domElement.width/Ve.width,st=U.domElement.height/Ve.height,L=(Ie.clientX-Ve.left)*$e,nn=(Ve.height-(Ie.clientY-Ve.top))*st;return{fx:L,fy:nn,w:U.domElement.width,h:U.domElement.height}},Qe=Ie=>{var L;const{fx:Ve,fy:$e}=ot(Ie),st=((L=A.current)==null?void 0:L.clickIx)??0;X.uClickPos.value[st].set(Ve,$e),X.uClickTimes.value[st]=X.uTime.value,A.current&&(A.current.clickIx=(st+1)%$f)},qe=Ie=>{if(!at)return;const{fx:Ve,fy:$e,w:st,h:L}=ot(Ie);at.addTouch({x:Ve/st,y:$e/L})};U.domElement.addEventListener("pointerdown",Qe,{passive:!0}),U.domElement.addEventListener("pointermove",qe,{passive:!0});let vt=0;const Mt=()=>{if(h&&!R.current.visible){vt=requestAnimationFrame(Mt);return}X.uTime.value=Ue+j.getElapsedTime()*_.current,Oe&&(Oe.uniforms.get("uTime").value=X.uTime.value),xe?(at&&at.update(),xe.passes.forEach(Ie=>{const Ve=Ie.effects;Ve&&Ve.forEach($e=>{var L;const st=(L=$e.uniforms)==null?void 0:L.get("uTime");st&&(st.value=X.uTime.value)})}),xe.render()):U.render(ne,se),vt=requestAnimationFrame(Mt)};vt=requestAnimationFrame(Mt),A.current={renderer:U,scene:ne,camera:se,material:He,clock:j,clickIx:0,uniforms:X,resizeObserver:ie,raf:vt,quad:Xe,timeOffset:Ue,composer:xe,touch:at,liquidEffect:Oe}}else{const P=A.current;if(P.uniforms.uShapeType.value=M_[t]??0,P.uniforms.uPixelSize.value=e*P.renderer.getPixelRatio(),P.uniforms.uColor.value.set(n),P.uniforms.uScale.value=a,P.uniforms.uDensity.value=o,P.uniforms.uPixelJitter.value=d,P.uniforms.uEnableRipples.value=f?1:0,P.uniforms.uRippleIntensity.value=p,P.uniforms.uRippleThickness.value=g,P.uniforms.uRippleSpeed.value=M,P.uniforms.uEdgeFade.value=S,x?P.renderer.setClearAlpha(0):P.renderer.setClearColor(0,1),P.liquidEffect){const U=P.liquidEffect;U&&(U.value=c);const X=P.liquidEffect.uniforms.get("uFreq");X&&(X.value=m)}P.touch&&(P.touch.radiusScale=u)}return b.current=$,()=>{var U,X,ne;if(A.current&&ee||!A.current)return;const P=A.current;(U=P.resizeObserver)==null||U.disconnect(),cancelAnimationFrame(P.raf),(X=P.quad)==null||X.geometry.dispose(),P.material.dispose(),(ne=P.composer)==null||ne.dispose(),P.renderer.dispose(),P.renderer.forceContextLoss(),P.renderer.domElement.parentElement===D&&D.removeChild(P.renderer.domElement),A.current=null}},[s,l,T,e,a,o,f,p,g,M,d,S,x,c,u,m,h,t,n,v]),Y.jsx("div",{ref:w,className:`pixel-blast-container ${i??""}`,style:r,"aria-label":"PixelBlast interactive background"})};function mI(){const[t,e]=ce.useState(!1);return ce.useEffect(()=>{const n=()=>e(window.scrollY>80);return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),Y.jsxs("section",{id:"top",className:"relative flex min-h-screen flex-col justify-center overflow-hidden pt-20 pb-12",children:[Y.jsx("div",{className:"pointer-events-none absolute inset-0 z-0 opacity-60",children:Y.jsx(pI,{variant:"square",color:"#7A0C3A",pixelSize:3,patternScale:2.5,patternDensity:.55,speed:.35,edgeFade:.35,enableRipples:!1,antialias:!0})}),Y.jsx("div",{className:"pointer-events-none absolute inset-0 z-[5] bg-gradient-to-r from-asphalt from-5% via-asphalt/85 via-35% to-transparent to-75%"}),!1,Y.jsxs("div",{className:"relative z-10 mx-auto w-full max-w-[1800px] px-[4vw]",children:[Y.jsxs(Yn.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},className:"flex flex-wrap items-start justify-between gap-x-6 gap-y-2",children:[Y.jsx("span",{className:"eyebrow max-w-[240px] text-chalk-muted",children:"Estúdio de marca, conteúdo e web · Campo Grande, MS"}),Y.jsx("span",{className:"eyebrow max-w-[260px] text-chalk-muted sm:text-right",children:"Est. Para quem move o Brasil +"})]}),Y.jsxs(Yn.h1,{initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1,ease:"easeOut"},className:"mt-8 font-display text-[13vw] font-600 uppercase leading-[0.95] tracking-tight text-chalk sm:text-[9vw] lg:text-[6.5vw]",children:["Marcas",Y.jsx("br",{}),Y.jsxs("span",{className:"relative inline-block",children:[Y.jsx("span",{className:"text-transparent",style:{WebkitTextStrokeWidth:"1.5px",WebkitTextStrokeColor:"#E0176A"},children:"em movimento"}),Y.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 text-transparent animate-stroke-shimmer",style:{WebkitTextStrokeWidth:"1.5px",WebkitTextStrokeColor:"#FFFFFF",WebkitMaskImage:"linear-gradient(100deg, transparent 0%, transparent 42%, #FFFFFF 48%, #FFFFFF 52%, transparent 58%, transparent 100%)",maskImage:"linear-gradient(100deg, transparent 0%, transparent 42%, #FFFFFF 48%, #FFFFFF 52%, transparent 58%, transparent 100%)",WebkitMaskSize:"250% 100%",maskSize:"250% 100%"},children:"em movimento"})]})]}),Y.jsxs(Yn.p,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.6,delay:.25},className:"mt-8 max-w-xl text-lg text-chalk-muted",children:[Y.jsx("span",{className:"font-600 text-chalk",children:"BR7"})," tira marcas de transporte, logística e negócios locais da invisibilidade com estratégia, design e conteúdo que viram autoridade e contrato."]})]}),Y.jsx(U1,{children:!t&&Y.jsxs(Yn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},className:"fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-2",children:[Y.jsx("div",{className:"flex h-9 w-6 items-start justify-center rounded-full border-2 border-chalk-faint p-1.5",children:Y.jsx(Yn.div,{animate:{y:[0,10,0],opacity:[1,0,1]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},className:"h-1.5 w-1.5 rounded-full bg-chalk-faint"})}),Y.jsx(Yn.span,{animate:{y:[0,4,0]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},className:"font-mono text-xs text-chalk-faint",children:"↓"})]})})]})}function gI(){return Y.jsx("section",{id:"intro",className:"border-b border-asphalt-border py-24",children:Y.jsxs("div",{className:"mx-auto max-w-6xl px-6",children:[Y.jsxs(Yn.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},className:"max-w-3xl font-display text-3xl font-500 leading-tight text-chalk sm:text-4xl",children:["Sua marca pode até ser boa.",Y.jsx("br",{}),Y.jsx("span",{className:"text-chalk-muted",children:"Mas boa está vendendo?"})]}),Y.jsx(Yn.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6,delay:.1},className:"mt-6 max-w-xl text-chalk-muted",children:"Logo bonita não paga boleto. A gente junta posicionamento, design e execução para transformar atenção em cliente — sem terceirizar o que importa."})]})})}const vI={"No ar":"bg-lane/10 text-lane border-lane/30",Construindo:"bg-brake/10 text-brake border-brake/30",Refazendo:"bg-chalk-muted/10 text-chalk-muted border-chalk-muted/30"},_I=[{nome:"Upper GR",status:"No ar",tags:"Branding · Site · Posicionamento",desc:"Reposicionamento digital de um grupo de gestão de risco com 20 anos de estrada e 6× GPTW.",href:"https://www.grupouppergr.com.br/"},{nome:"Motora Match",status:"No ar",tags:"App · Site · Marca",desc:"A plataforma que conecta motoristas e transportadoras — do nome ao app.",href:"https://motoramatch.com.br/"},{nome:"Galeria Sandra Novas",status:"No ar",tags:"Posicionamento premium · Site",desc:"Presença premium para uma artista plástica de Campo Grande.",href:"https://www.galeriasandranovas.com.br/"},{nome:"Transmano",status:"Construindo",tags:"Site do zero · Identidade",desc:"Marca e site do zero para uma transportadora de alimentos em 5 estados.",href:"#contato"},{nome:"RCR Quality",status:"Refazendo",tags:"Novo site · 18 anos · SASSMAQ",desc:"Novo site para 18 anos de logística certificada.",href:"http://www.rcrtransportes.com.br/"},{nome:"TransConceição",status:"Refazendo",tags:"Identidade · Site",desc:"Identidade e site renovados para uma transportadora consolidada.",href:"https://transconceicao.com.br/"}];function xI(){return Y.jsx("section",{id:"trabalhos",className:"border-b border-asphalt-border py-24",children:Y.jsxs("div",{className:"mx-auto max-w-6xl px-6",children:[Y.jsx("span",{className:"eyebrow",children:"Trabalhos selecionados ✦"}),Y.jsx("h2",{className:"mt-4 font-display text-3xl font-500 text-chalk sm:text-4xl",children:"Marcas que já estão em movimento"}),Y.jsx("p",{className:"mt-3 max-w-lg text-chalk-muted",children:"Clientes reais do transporte, logística e negócios locais. Imagens são provisórias — entram as artes finais."}),Y.jsx("div",{className:"mt-14 grid gap-px overflow-hidden rounded-2xl border border-asphalt-border bg-asphalt-border sm:grid-cols-2 lg:grid-cols-3",children:_I.map((t,e)=>Y.jsxs(Yn.a,{href:t.href,target:t.href.startsWith("http")?"_blank":void 0,rel:"noreferrer",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,delay:e%3*.08},className:"group relative flex flex-col justify-between bg-asphalt-surface p-6 transition-colors hover:bg-asphalt-light",children:[Y.jsxs("div",{children:[Y.jsxs("div",{className:"flex items-center justify-between",children:[Y.jsxs("span",{className:"font-mono text-[11px] text-chalk-faint",children:["BR-0",e+1]}),Y.jsx("span",{className:`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${vI[t.status]}`,children:t.status})]}),Y.jsx("h3",{className:"mt-6 font-display text-xl font-600 text-chalk",children:t.nome}),Y.jsx("p",{className:"mt-1 font-mono text-[11px] uppercase tracking-wide text-chalk-faint",children:t.tags}),Y.jsx("p",{className:"mt-3 text-sm text-chalk-muted",children:t.desc})]}),Y.jsx("span",{className:"mt-6 inline-flex items-center gap-1 font-mono text-xs text-lane opacity-0 transition-opacity group-hover:opacity-100",children:"Ver projeto →"})]},t.nome))})]})})}const yI=[{code:"BR-01",title:"Branding & Identidade",desc:"Logo · Manual de marca · Rebranding"},{code:"BR-02",title:"Sites & Web",desc:"WordPress · Framer · Landing pages"},{code:"BR-03",title:"Redes Sociais",desc:"Instagram · LinkedIn · TikTok"},{code:"BR-04",title:"Vídeo & Reels",desc:"Roteiro · Premiere · After Effects"},{code:"BR-05",title:"Apresentações",desc:"Institucional · Proposta comercial"},{code:"BR-06",title:"Endomarketing",desc:"Comunicação interna · Campanhas"},{code:"BR-07",title:"Papelaria & Print",desc:"Cartão · Folder · Banner · Assinatura"},{code:"BR-08",title:"Apps & Produto",desc:"Plataformas digitais para o setor"}];function SI(){return Y.jsx("section",{id:"capacidades",className:"border-b border-asphalt-border py-24",children:Y.jsxs("div",{className:"mx-auto max-w-6xl px-6",children:[Y.jsx("span",{className:"eyebrow",children:"O que fazemos ✦"}),Y.jsx("h2",{className:"mt-4 font-display text-3xl font-500 text-chalk sm:text-4xl",children:"Capacidades"}),Y.jsx("p",{className:"mt-3 max-w-lg text-chalk-muted",children:"Estratégia, criação e execução sob o mesmo teto. Suite Adobe completa, Framer, CapCut."}),Y.jsx("div",{className:"mt-14 grid divide-y divide-asphalt-border border-t border-asphalt-border sm:grid-cols-2 sm:divide-x sm:divide-y-0",children:yI.map((t,e)=>Y.jsxs(Yn.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,delay:e%2*.06},className:"group flex items-start gap-5 px-2 py-6 sm:px-8",children:[Y.jsx("span",{className:"mt-1 font-mono text-xs text-lane",children:t.code}),Y.jsxs("div",{children:[Y.jsx("h3",{className:"font-display text-lg font-600 text-chalk",children:t.title}),Y.jsx("p",{className:"mt-1 text-sm text-chalk-muted",children:t.desc})]})]},t.code))})]})})}const MI=[{marker:"KM 01 — FOCO",title:"Falamos a sua língua",desc:"Conhecemos o B2B rodoviário por dentro: cargas, frotas, gestão de risco, recrutamento de motoristas. Nada de campanha genérica."},{marker:"KM 02 — TIME",title:"Estratégia + criação + execução",desc:"Da primeira ideia ao deploy, fazemos com a equipe — sem terceirizar o que importa nem empurrar atalho de Canva."},{marker:"KM 03 — RANGE",title:"Do logo ao aplicativo",desc:"Marca, site, conteúdo, vídeo, papelaria e produto digital. Uma marca consistente em todos os pontos de contato."}];function EI(){return Y.jsx("section",{id:"metodo",className:"border-b border-asphalt-border py-24",children:Y.jsxs("div",{className:"mx-auto max-w-6xl px-6",children:[Y.jsx("span",{className:"eyebrow",children:"Por que a BR7 ✦"}),Y.jsx("h2",{className:"mt-4 max-w-2xl font-display text-3xl font-500 text-chalk sm:text-4xl",children:"Marketing que se move com o seu negócio"}),Y.jsx("div",{className:"mt-14 grid gap-8 sm:grid-cols-3",children:MI.map((t,e)=>Y.jsxs(Yn.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,delay:e*.1},className:"rounded-2xl border border-asphalt-border bg-asphalt-surface p-6",children:[Y.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.15em] text-lane",children:t.marker}),Y.jsx("h3",{className:"mt-4 font-display text-xl font-600 text-chalk",children:t.title}),Y.jsx("p",{className:"mt-3 text-sm text-chalk-muted",children:t.desc})]},t.marker))})]})})}function TI(){return Y.jsxs("section",{id:"contato",className:"relative overflow-hidden py-28",children:[Y.jsx("div",{className:"lane-strip animate-lane-move absolute top-0 left-0"}),Y.jsxs("div",{className:"mx-auto max-w-6xl px-6",children:[Y.jsx("span",{className:"eyebrow",children:"Bora começar ✦"}),Y.jsxs(Yn.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},className:"mt-4 max-w-2xl font-display text-4xl font-500 leading-tight text-chalk sm:text-5xl",children:["Coloque sua marca ",Y.jsx("span",{className:"italic text-lane",children:"em movimento"})]}),Y.jsxs("div",{className:"mt-10 flex flex-col gap-4 sm:flex-row sm:items-center",children:[Y.jsx("a",{href:"https://wa.me/5567981494797?text=Oi%20BR7!%20Quero%20colocar%20minha%20marca%20em%20movimento.",target:"_blank",rel:"noreferrer",className:"rounded-full bg-lane px-6 py-3 text-center font-mono text-sm uppercase tracking-[0.1em] text-asphalt transition-transform hover:scale-[1.02]",children:"Chamar no WhatsApp"}),Y.jsx("a",{href:"mailto:mkt@agenciabr7.com.br",className:"font-mono text-sm text-chalk-muted underline decoration-asphalt-border underline-offset-4 hover:text-chalk",children:"mkt@agenciabr7.com.br"})]}),Y.jsxs("div",{className:"mt-16 grid gap-8 border-t border-asphalt-border pt-10 sm:grid-cols-3",children:[Y.jsxs("div",{children:[Y.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.15em] text-chalk-faint",children:"WhatsApp"}),Y.jsx("p",{className:"mt-2 text-chalk",children:Y.jsx("a",{href:"https://wa.me/5567981494797",target:"_blank",rel:"noreferrer",className:"hover:text-lane",children:"+55 67 98149-4797"})})]}),Y.jsxs("div",{children:[Y.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.15em] text-chalk-faint",children:"Instagram"}),Y.jsx("p",{className:"mt-2 text-chalk",children:Y.jsx("a",{href:"https://www.instagram.com/br7.mkt_/",target:"_blank",rel:"noreferrer",className:"hover:text-lane",children:"@br7.mkt_"})})]}),Y.jsxs("div",{children:[Y.jsx("span",{className:"font-mono text-[11px] uppercase tracking-[0.15em] text-chalk-faint",children:"Base"}),Y.jsx("p",{className:"mt-2 text-chalk",children:"Campo Grande · MS"})]})]})]})]})}function wI(){return Y.jsx("footer",{className:"py-10",children:Y.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left",children:[Y.jsxs("p",{className:"font-mono text-xs text-chalk-faint",children:["© ",new Date().getFullYear()," BR7 Marketing — Marketing em Movimento"]}),Y.jsxs("div",{className:"flex gap-6 font-mono text-xs text-chalk-muted",children:[Y.jsx("a",{href:"https://www.instagram.com/br7.mkt_/",target:"_blank",rel:"noreferrer",className:"hover:text-lane",children:"Instagram"}),Y.jsx("a",{href:"https://wa.me/5567981494797",target:"_blank",rel:"noreferrer",className:"hover:text-lane",children:"WhatsApp"}),Y.jsx("a",{href:"mailto:mkt@agenciabr7.com.br",className:"hover:text-lane",children:"E-mail"})]})]})})}function AI(){return Y.jsxs("div",{className:"min-h-screen bg-asphalt",children:[Y.jsx(b1,{}),Y.jsx(P1,{}),Y.jsxs("main",{children:[Y.jsx(mI,{}),Y.jsx(gI,{}),Y.jsx(xI,{}),Y.jsx(SI,{}),Y.jsx(EI,{}),Y.jsx(TI,{})]}),Y.jsx(wI,{})]})}Kf.createRoot(document.getElementById("root")).render(Y.jsx(vE.StrictMode,{children:Y.jsx(AI,{})}));
