(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function l(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(c){if(c.ep)return;c.ep=!0;const d=l(c);fetch(c.href,d)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};Object.keys(window.Vaadin.featureFlags).length===0&&(window.Vaadin.featureFlags.exampleFeatureFlag=!1,window.Vaadin.featureFlags.collaborationEngineBackend=!1,window.Vaadin.featureFlags.formFillerAddon=!1,window.Vaadin.featureFlags.hillaI18n=!1,window.Vaadin.featureFlags.fullstackSignals=!1,window.Vaadin.featureFlags.copilotExperimentalFeatures=!1,window.Vaadin.featureFlags.dashboardComponent=!1,window.Vaadin.featureFlags.cardComponent=!1,window.Vaadin.featureFlags.react19=!1,window.Vaadin.featureFlags.accessibleDisabledButtons=!1,window.Vaadin.featureFlags.layoutComponentImprovements=!1);if(window.Vaadin.featureFlagsUpdaters){const o=r=>window.Vaadin.featureFlags[r]=!0;window.Vaadin.featureFlagsUpdaters.forEach(r=>r(o)),delete window.Vaadin.featureFlagsUpdaters}var Ds={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function Nh(){if(ef)return ke;ef=1;var o=Symbol.for("react.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.iterator;function E(k){return k===null||typeof k!="object"?null:(k=C&&k[C]||k["@@iterator"],typeof k=="function"?k:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,O={};function M(k,F,de){this.props=k,this.context=F,this.refs=O,this.updater=de||b}M.prototype.isReactComponent={},M.prototype.setState=function(k,F){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,F,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function I(){}I.prototype=M.prototype;function Q(k,F,de){this.props=k,this.context=F,this.refs=O,this.updater=de||b}var A=Q.prototype=new I;A.constructor=Q,N(A,M.prototype),A.isPureReactComponent=!0;var X=Array.isArray,ce=Object.prototype.hasOwnProperty,_={current:null},ae={key:!0,ref:!0,__self:!0,__source:!0};function fe(k,F,de){var ve,we={},Se=null,be=null;if(F!=null)for(ve in F.ref!==void 0&&(be=F.ref),F.key!==void 0&&(Se=""+F.key),F)ce.call(F,ve)&&!ae.hasOwnProperty(ve)&&(we[ve]=F[ve]);var D=arguments.length-2;if(D===1)we.children=de;else if(1<D){for(var V=Array(D),Z=0;Z<D;Z++)V[Z]=arguments[Z+2];we.children=V}if(k&&k.defaultProps)for(ve in D=k.defaultProps,D)we[ve]===void 0&&(we[ve]=D[ve]);return{$$typeof:o,type:k,key:Se,ref:be,props:we,_owner:_.current}}function se(k,F){return{$$typeof:o,type:k.type,key:F,ref:k.ref,props:k.props,_owner:k._owner}}function xe(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function Me(k){var F={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(de){return F[de]})}var Ke=/\/+/g;function Ze(k,F){return typeof k=="object"&&k!==null&&k.key!=null?Me(""+k.key):F.toString(36)}function Xe(k,F,de,ve,we){var Se=typeof k;(Se==="undefined"||Se==="boolean")&&(k=null);var be=!1;if(k===null)be=!0;else switch(Se){case"string":case"number":be=!0;break;case"object":switch(k.$$typeof){case o:case r:be=!0}}if(be)return be=k,we=we(be),k=ve===""?"."+Ze(be,0):ve,X(we)?(de="",k!=null&&(de=k.replace(Ke,"$&/")+"/"),Xe(we,F,de,"",function(Z){return Z})):we!=null&&(xe(we)&&(we=se(we,de+(!we.key||be&&be.key===we.key?"":(""+we.key).replace(Ke,"$&/")+"/")+k)),F.push(we)),1;if(be=0,ve=ve===""?".":ve+":",X(k))for(var D=0;D<k.length;D++){Se=k[D];var V=ve+Ze(Se,D);be+=Xe(Se,F,de,V,we)}else if(V=E(k),typeof V=="function")for(k=V.call(k),D=0;!(Se=k.next()).done;)Se=Se.value,V=ve+Ze(Se,D++),be+=Xe(Se,F,de,V,we);else if(Se==="object")throw F=String(k),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return be}function qe(k,F,de){if(k==null)return k;var ve=[],we=0;return Xe(k,ve,"","",function(Se){return F.call(de,Se,we++)}),ve}function Ee(k){if(k._status===-1){var F=k._result;F=F(),F.then(function(de){(k._status===0||k._status===-1)&&(k._status=1,k._result=de)},function(de){(k._status===0||k._status===-1)&&(k._status=2,k._result=de)}),k._status===-1&&(k._status=0,k._result=F)}if(k._status===1)return k._result.default;throw k._result}var Pe={current:null},K={transition:null},re={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:K,ReactCurrentOwner:_};function Y(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:qe,forEach:function(k,F,de){qe(k,function(){F.apply(this,arguments)},de)},count:function(k){var F=0;return qe(k,function(){F++}),F},toArray:function(k){return qe(k,function(F){return F})||[]},only:function(k){if(!xe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ke.Component=M,ke.Fragment=l,ke.Profiler=c,ke.PureComponent=Q,ke.StrictMode=s,ke.Suspense=h,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,ke.act=Y,ke.cloneElement=function(k,F,de){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ve=N({},k.props),we=k.key,Se=k.ref,be=k._owner;if(F!=null){if(F.ref!==void 0&&(Se=F.ref,be=_.current),F.key!==void 0&&(we=""+F.key),k.type&&k.type.defaultProps)var D=k.type.defaultProps;for(V in F)ce.call(F,V)&&!ae.hasOwnProperty(V)&&(ve[V]=F[V]===void 0&&D!==void 0?D[V]:F[V])}var V=arguments.length-2;if(V===1)ve.children=de;else if(1<V){D=Array(V);for(var Z=0;Z<V;Z++)D[Z]=arguments[Z+2];ve.children=D}return{$$typeof:o,type:k.type,key:we,ref:Se,props:ve,_owner:be}},ke.createContext=function(k){return k={$$typeof:p,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:d,_context:k},k.Consumer=k},ke.createElement=fe,ke.createFactory=function(k){var F=fe.bind(null,k);return F.type=k,F},ke.createRef=function(){return{current:null}},ke.forwardRef=function(k){return{$$typeof:m,render:k}},ke.isValidElement=xe,ke.lazy=function(k){return{$$typeof:S,_payload:{_status:-1,_result:k},_init:Ee}},ke.memo=function(k,F){return{$$typeof:g,type:k,compare:F===void 0?null:F}},ke.startTransition=function(k){var F=K.transition;K.transition={};try{k()}finally{K.transition=F}},ke.unstable_act=Y,ke.useCallback=function(k,F){return Pe.current.useCallback(k,F)},ke.useContext=function(k){return Pe.current.useContext(k)},ke.useDebugValue=function(){},ke.useDeferredValue=function(k){return Pe.current.useDeferredValue(k)},ke.useEffect=function(k,F){return Pe.current.useEffect(k,F)},ke.useId=function(){return Pe.current.useId()},ke.useImperativeHandle=function(k,F,de){return Pe.current.useImperativeHandle(k,F,de)},ke.useInsertionEffect=function(k,F){return Pe.current.useInsertionEffect(k,F)},ke.useLayoutEffect=function(k,F){return Pe.current.useLayoutEffect(k,F)},ke.useMemo=function(k,F){return Pe.current.useMemo(k,F)},ke.useReducer=function(k,F,de){return Pe.current.useReducer(k,F,de)},ke.useRef=function(k){return Pe.current.useRef(k)},ke.useState=function(k){return Pe.current.useState(k)},ke.useSyncExternalStore=function(k,F,de){return Pe.current.useSyncExternalStore(k,F,de)},ke.useTransition=function(){return Pe.current.useTransition()},ke.version="18.3.1",ke}var tf;function Gl(){return tf||(tf=1,Ds.exports=Nh()),Ds.exports}var T=Gl(),$l={},Ms={exports:{}},$t={},Os={exports:{}},As={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function Dh(){return nf||(nf=1,function(o){function r(K,re){var Y=K.length;K.push(re);e:for(;0<Y;){var k=Y-1>>>1,F=K[k];if(0<c(F,re))K[k]=re,K[Y]=F,Y=k;else break e}}function l(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var re=K[0],Y=K.pop();if(Y!==re){K[0]=Y;e:for(var k=0,F=K.length,de=F>>>1;k<de;){var ve=2*(k+1)-1,we=K[ve],Se=ve+1,be=K[Se];if(0>c(we,Y))Se<F&&0>c(be,we)?(K[k]=be,K[Se]=Y,k=Se):(K[k]=we,K[ve]=Y,k=ve);else if(Se<F&&0>c(be,Y))K[k]=be,K[Se]=Y,k=Se;else break e}}return re}function c(K,re){var Y=K.sortIndex-re.sortIndex;return Y!==0?Y:K.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();o.unstable_now=function(){return p.now()-m}}var h=[],g=[],S=1,C=null,E=3,b=!1,N=!1,O=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(K){for(var re=l(g);re!==null;){if(re.callback===null)s(g);else if(re.startTime<=K)s(g),re.sortIndex=re.expirationTime,r(h,re);else break;re=l(g)}}function X(K){if(O=!1,A(K),!N)if(l(h)!==null)N=!0,Ee(ce);else{var re=l(g);re!==null&&Pe(X,re.startTime-K)}}function ce(K,re){N=!1,O&&(O=!1,I(fe),fe=-1),b=!0;var Y=E;try{for(A(re),C=l(h);C!==null&&(!(C.expirationTime>re)||K&&!Me());){var k=C.callback;if(typeof k=="function"){C.callback=null,E=C.priorityLevel;var F=k(C.expirationTime<=re);re=o.unstable_now(),typeof F=="function"?C.callback=F:C===l(h)&&s(h),A(re)}else s(h);C=l(h)}if(C!==null)var de=!0;else{var ve=l(g);ve!==null&&Pe(X,ve.startTime-re),de=!1}return de}finally{C=null,E=Y,b=!1}}var _=!1,ae=null,fe=-1,se=5,xe=-1;function Me(){return!(o.unstable_now()-xe<se)}function Ke(){if(ae!==null){var K=o.unstable_now();xe=K;var re=!0;try{re=ae(!0,K)}finally{re?Ze():(_=!1,ae=null)}}else _=!1}var Ze;if(typeof Q=="function")Ze=function(){Q(Ke)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,qe=Xe.port2;Xe.port1.onmessage=Ke,Ze=function(){qe.postMessage(null)}}else Ze=function(){M(Ke,0)};function Ee(K){ae=K,_||(_=!0,Ze())}function Pe(K,re){fe=M(function(){K(o.unstable_now())},re)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(K){K.callback=null},o.unstable_continueExecution=function(){N||b||(N=!0,Ee(ce))},o.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<K?Math.floor(1e3/K):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_getFirstCallbackNode=function(){return l(h)},o.unstable_next=function(K){switch(E){case 1:case 2:case 3:var re=3;break;default:re=E}var Y=E;E=re;try{return K()}finally{E=Y}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(K,re){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Y=E;E=K;try{return re()}finally{E=Y}},o.unstable_scheduleCallback=function(K,re,Y){var k=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?k+Y:k):Y=k,K){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Y+F,K={id:S++,callback:re,priorityLevel:K,startTime:Y,expirationTime:F,sortIndex:-1},Y>k?(K.sortIndex=Y,r(g,K),l(h)===null&&K===l(g)&&(O?(I(fe),fe=-1):O=!0,Pe(X,Y-k))):(K.sortIndex=F,r(h,K),N||b||(N=!0,Ee(ce))),K},o.unstable_shouldYield=Me,o.unstable_wrapCallback=function(K){var re=E;return function(){var Y=E;E=re;try{return K.apply(this,arguments)}finally{E=Y}}}}(As)),As}var rf;function Mh(){return rf||(rf=1,Os.exports=Dh()),Os.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function Oh(){if(of)return $t;of=1;var o=Gl(),r=Mh();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,c={};function d(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(c[e]=t,e=0;e<t.length;e++)s.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},C={};function E(e){return h.call(C,e)?!0:h.call(S,e)?!1:g.test(e)?C[e]=!0:(S[e]=!0,!1)}function b(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N(e,t,n,i){if(t===null||typeof t>"u"||b(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,i,a,u,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u,this.removeEmptyString=f}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){M[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];M[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){M[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){M[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){M[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){M[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){M[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){M[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){M[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,Q);M[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,Q);M[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,Q);M[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){M[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),M.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){M[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,n,i){var a=M.hasOwnProperty(t)?M[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N(t,n,a,i)&&(n=null),i||a===null?E(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,i=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var X=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),_=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),xe=Symbol.for("react.provider"),Me=Symbol.for("react.context"),Ke=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),K=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,k;function F(e){if(k===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var de=!1;function ve(e,t){if(!e||de)return"";de=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(z){var i=z}Reflect.construct(e,[],t)}else{try{t.call()}catch(z){i=z}e.call(t.prototype)}else{try{throw Error()}catch(z){i=z}e()}}catch(z){if(z&&i&&typeof z.stack=="string"){for(var a=z.stack.split(`
`),u=i.stack.split(`
`),f=a.length-1,v=u.length-1;1<=f&&0<=v&&a[f]!==u[v];)v--;for(;1<=f&&0<=v;f--,v--)if(a[f]!==u[v]){if(f!==1||v!==1)do if(f--,v--,0>v||a[f]!==u[v]){var y=`
`+a[f].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=f&&0<=v);break}}}finally{de=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?F(e):""}function we(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return""}}function Se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ae:return"Fragment";case _:return"Portal";case se:return"Profiler";case fe:return"StrictMode";case Ze:return"Suspense";case Xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Me:return(e.displayName||"Context")+".Consumer";case xe:return(e._context.displayName||"Context")+".Provider";case Ke:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qe:return t=e.displayName||null,t!==null?t:Se(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}function be(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(t);case 8:return t===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function D(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(f){i=""+f,u.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(f){i=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oe(e){e._valueTracker||(e._valueTracker=Z(e))}function ot(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=V(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Be(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ut(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ki(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=D(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ei(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function Dr(e,t){Ei(e,t);var n=D(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?go(e,t.type,n):t.hasOwnProperty("defaultValue")&&go(e,t.type,D(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ci(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function go(e,t,n){(t!=="number"||Be(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function Pn(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+D(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Jt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tn(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(lr(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:D(n)}}function yo(e,t){var n=D(t.value),i=D(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Mr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zt(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,Or=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _t={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bi=["Webkit","ms","Moz","O"];Object.keys(_t).forEach(function(e){bi.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_t[t]=_t[e]})});function xo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_t.hasOwnProperty(e)&&_t[e]?(""+t).trim():t+"px"}function wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,a=xo(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,a):e[n]=a}}var ea=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ar(e,t){if(t){if(ea[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Ln(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fr=null;function ur(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var So=null,vn=null,zn=null;function ko(e){if(e=Vo(e)){if(typeof So!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Ki(t),So(e.stateNode,e.type,t))}}function cr(e){vn?zn?zn.push(e):zn=[e]:vn=e}function dr(){if(vn){var e=vn,t=zn;if(zn=vn=null,ko(e),t)for(e=0;e<t.length;e++)ko(t[e])}}function _i(e,t){return e(t)}function Ri(){}var x=!1;function R(e,t,n){if(x)return e(t,n);x=!0;try{return _i(e,t,n)}finally{x=!1,(vn!==null||zn!==null)&&(Ri(),dr())}}function $(e,t){var n=e.stateNode;if(n===null)return null;var i=Ki(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var H=!1;if(m)try{var q={};Object.defineProperty(q,"passive",{get:function(){H=!0}}),window.addEventListener("test",q,q),window.removeEventListener("test",q,q)}catch{H=!1}function ue(e,t,n,i,a,u,f,v,y){var z=Array.prototype.slice.call(arguments,3);try{t.apply(n,z)}catch(j){this.onError(j)}}var he=!1,ee=null,oe=!1,G=null,ye={onError:function(e){he=!0,ee=e}};function Te(e,t,n,i,a,u,f,v,y){he=!1,ee=null,ue.apply(ye,arguments)}function We(e,t,n,i,a,u,f,v,y){if(Te.apply(this,arguments),he){if(he){var z=ee;he=!1,ee=null}else throw Error(l(198));oe||(oe=!0,G=z)}}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function De(e){if(Ue(e)!==e)throw Error(l(188))}function et(e){var t=e.alternate;if(!t){if(t=Ue(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var u=a.alternate;if(u===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===u.child){for(u=a.child;u;){if(u===n)return De(a),e;if(u===i)return De(a),t;u=u.sibling}throw Error(l(188))}if(n.return!==i.return)n=a,i=u;else{for(var f=!1,v=a.child;v;){if(v===n){f=!0,n=a,i=u;break}if(v===i){f=!0,i=a,n=u;break}v=v.sibling}if(!f){for(v=u.child;v;){if(v===n){f=!0,n=u,i=a;break}if(v===i){f=!0,i=u,n=a;break}v=v.sibling}if(!f)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function gn(e){return e=et(e),e!==null?$n(e):null}function $n(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$n(e);if(t!==null)return t;e=e.sibling}return null}var Bt=r.unstable_scheduleCallback,Dt=r.unstable_cancelCallback,Eo=r.unstable_shouldYield,fr=r.unstable_requestPaint,ze=r.unstable_now,Ir=r.unstable_getCurrentPriorityLevel,Nn=r.unstable_ImmediatePriority,$e=r.unstable_UserBlockingPriority,tt=r.unstable_NormalPriority,Ur=r.unstable_LowPriority,Dn=r.unstable_IdlePriority,je=null,ht=null;function Pi(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(je,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:qp,Yp=Math.log,Xp=Math.LN2;function qp(e){return e>>>=0,e===0?32:31-(Yp(e)/Xp|0)|0}var Ti=64,Li=4194304;function Co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,a=e.suspendedLanes,u=e.pingedLanes,f=n&268435455;if(f!==0){var v=f&~a;v!==0?i=Co(v):(u&=f,u!==0&&(i=Co(u)))}else f=n&~a,f!==0?i=Co(f):u!==0&&(i=Co(u));if(i===0)return 0;if(t!==0&&t!==i&&(t&a)===0&&(a=i&-i,u=t&-t,a>=u||a===16&&(u&4194240)!==0))return t;if((i&4)!==0&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Mt(t),a=1<<n,i|=e[n],t&=~a;return i}function Jp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zp(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,u=e.pendingLanes;0<u;){var f=31-Mt(u),v=1<<f,y=a[f];y===-1?((v&n)===0||(v&i)!==0)&&(a[f]=Jp(v,t)):y<=t&&(e.expiredLanes|=v),u&=~v}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=Ti;return Ti<<=1,(Ti&4194240)===0&&(Ti=64),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function em(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Mt(n),u=1<<a;t[a]=0,i[a]=-1,e[a]=-1,n&=~u}}function ra(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Mt(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}var Ne=0;function $u(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Nu,oa,Du,Mu,Ou,ia=!1,$i=[],Mn=null,On=null,An=null,_o=new Map,Ro=new Map,Fn=[],tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Au(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":_o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function Po(e,t,n,i,a,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:u,targetContainers:[a]},t!==null&&(t=Vo(t),t!==null&&oa(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function nm(e,t,n,i,a){switch(t){case"focusin":return Mn=Po(Mn,e,t,n,i,a),!0;case"dragenter":return On=Po(On,e,t,n,i,a),!0;case"mouseover":return An=Po(An,e,t,n,i,a),!0;case"pointerover":var u=a.pointerId;return _o.set(u,Po(_o.get(u)||null,e,t,n,i,a)),!0;case"gotpointercapture":return u=a.pointerId,Ro.set(u,Po(Ro.get(u)||null,e,t,n,i,a)),!0}return!1}function Fu(e){var t=pr(e.target);if(t!==null){var n=Ue(t);if(n!==null){if(t=n.tag,t===13){if(t=Fe(n),t!==null){e.blockedOn=t,Ou(e.priority,function(){Du(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Fr=i,n.target.dispatchEvent(i),Fr=null}else return t=Vo(n),t!==null&&oa(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){Ni(e)&&n.delete(t)}function rm(){ia=!1,Mn!==null&&Ni(Mn)&&(Mn=null),On!==null&&Ni(On)&&(On=null),An!==null&&Ni(An)&&(An=null),_o.forEach(Iu),Ro.forEach(Iu)}function To(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,rm)))}function Lo(e){function t(a){return To(a,e)}if(0<$i.length){To($i[0],e);for(var n=1;n<$i.length;n++){var i=$i[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Mn!==null&&To(Mn,e),On!==null&&To(On,e),An!==null&&To(An,e),_o.forEach(t),Ro.forEach(t),n=0;n<Fn.length;n++)i=Fn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)Fu(n),n.blockedOn===null&&Fn.shift()}var jr=X.ReactCurrentBatchConfig,Di=!0;function om(e,t,n,i){var a=Ne,u=jr.transition;jr.transition=null;try{Ne=1,la(e,t,n,i)}finally{Ne=a,jr.transition=u}}function im(e,t,n,i){var a=Ne,u=jr.transition;jr.transition=null;try{Ne=4,la(e,t,n,i)}finally{Ne=a,jr.transition=u}}function la(e,t,n,i){if(Di){var a=aa(e,t,n,i);if(a===null)Ca(e,t,i,Mi,n),Au(e,i);else if(nm(a,e,t,n,i))i.stopPropagation();else if(Au(e,i),t&4&&-1<tm.indexOf(e)){for(;a!==null;){var u=Vo(a);if(u!==null&&Nu(u),u=aa(e,t,n,i),u===null&&Ca(e,t,i,Mi,n),u===a)break;a=u}a!==null&&i.stopPropagation()}else Ca(e,t,i,null,n)}}var Mi=null;function aa(e,t,n,i){if(Mi=null,e=ur(i),e=pr(e),e!==null)if(t=Ue(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fe(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function Uu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ir()){case Nn:return 1;case $e:return 4;case tt:case Ur:return 16;case Dn:return 536870912;default:return 16}default:return 16}}var In=null,sa=null,Oi=null;function ju(){if(Oi)return Oi;var e,t=sa,n=t.length,i,a="value"in In?In.value:In.textContent,u=a.length;for(e=0;e<n&&t[e]===a[e];e++);var f=n-e;for(i=1;i<=f&&t[n-i]===a[u-i];i++);return Oi=a.slice(e,1<i?1-i:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function Vu(){return!1}function Ot(e){function t(n,i,a,u,f){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Fi:Vu,this.isPropagationStopped=Vu,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=Ot(Vr),zo=Y({},Vr,{view:0,detail:0}),lm=Ot(zo),ca,da,$o,Ii=Y({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$o&&($o&&e.type==="mousemove"?(ca=e.screenX-$o.screenX,da=e.screenY-$o.screenY):da=ca=0,$o=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Hu=Ot(Ii),am=Y({},Ii,{dataTransfer:0}),sm=Ot(am),um=Y({},zo,{relatedTarget:0}),fa=Ot(um),cm=Y({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),dm=Ot(cm),fm=Y({},Vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pm=Ot(fm),mm=Y({},Vr,{data:0}),Bu=Ot(mm),hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ym(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gm[e])?!!t[e]:!1}function pa(){return ym}var xm=Y({},zo,{key:function(e){if(e.key){var t=hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wm=Ot(xm),Sm=Y({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wu=Ot(Sm),km=Y({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),Em=Ot(km),Cm=Y({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bm=Ot(Cm),_m=Y({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rm=Ot(_m),Pm=[9,13,27,32],ma=m&&"CompositionEvent"in window,No=null;m&&"documentMode"in document&&(No=document.documentMode);var Tm=m&&"TextEvent"in window&&!No,Qu=m&&(!ma||No&&8<No&&11>=No),Ku=" ",Gu=!1;function Yu(e,t){switch(e){case"keyup":return Pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hr=!1;function Lm(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(Gu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Gu?null:e;default:return null}}function zm(e,t){if(Hr)return e==="compositionend"||!ma&&Yu(e,t)?(e=ju(),Oi=sa=In=null,Hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qu&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function Ju(e,t,n,i){cr(i),t=Bi(t,"onChange"),0<t.length&&(n=new ua("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Do=null,Mo=null;function Nm(e){vc(e,0)}function Ui(e){var t=Gr(e);if(ot(t))return e}function Dm(e,t){if(e==="change")return t}var Zu=!1;if(m){var ha;if(m){var va="oninput"in document;if(!va){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),va=typeof ec.oninput=="function"}ha=va}else ha=!1;Zu=ha&&(!document.documentMode||9<document.documentMode)}function tc(){Do&&(Do.detachEvent("onpropertychange",nc),Mo=Do=null)}function nc(e){if(e.propertyName==="value"&&Ui(Mo)){var t=[];Ju(t,Mo,e,ur(e)),R(Nm,t)}}function Mm(e,t,n){e==="focusin"?(tc(),Do=t,Mo=n,Do.attachEvent("onpropertychange",nc)):e==="focusout"&&tc()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(Mo)}function Am(e,t){if(e==="click")return Ui(t)}function Fm(e,t){if(e==="input"||e==="change")return Ui(t)}function Im(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:Im;function Oo(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!h.call(t,a)||!en(e[a],t[a]))return!1}return!0}function rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oc(e,t){var n=rc(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rc(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lc(){for(var e=window,t=Be();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Be(e.document)}return t}function ga(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Um(e){var t=lc(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ic(n.ownerDocument.documentElement,n)){if(i!==null&&ga(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,u=Math.min(i.start,a);i=i.end===void 0?u:Math.min(i.end,a),!e.extend&&u>i&&(a=i,i=u,u=a),a=oc(n,u);var f=oc(n,i);a&&f&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),u>i?(e.addRange(t),e.extend(f.node,f.offset)):(t.setEnd(f.node,f.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jm=m&&"documentMode"in document&&11>=document.documentMode,Br=null,ya=null,Ao=null,xa=!1;function ac(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xa||Br==null||Br!==Be(i)||(i=Br,"selectionStart"in i&&ga(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ao&&Oo(Ao,i)||(Ao=i,i=Bi(ya,"onSelect"),0<i.length&&(t=new ua("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Br)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wr={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},wa={},sc={};m&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),"TransitionEvent"in window||delete Wr.transitionend.transition);function Vi(e){if(wa[e])return wa[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sc)return wa[e]=t[n];return e}var uc=Vi("animationend"),cc=Vi("animationiteration"),dc=Vi("animationstart"),fc=Vi("transitionend"),pc=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){pc.set(e,t),d(t,[e])}for(var Sa=0;Sa<mc.length;Sa++){var ka=mc[Sa],Vm=ka.toLowerCase(),Hm=ka[0].toUpperCase()+ka.slice(1);Un(Vm,"on"+Hm)}Un(uc,"onAnimationEnd"),Un(cc,"onAnimationIteration"),Un(dc,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(fc,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function hc(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,We(i,t,void 0,e),e.currentTarget=null}function vc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var f=i.length-1;0<=f;f--){var v=i[f],y=v.instance,z=v.currentTarget;if(v=v.listener,y!==u&&a.isPropagationStopped())break e;hc(a,v,z),u=y}else for(f=0;f<i.length;f++){if(v=i[f],y=v.instance,z=v.currentTarget,v=v.listener,y!==u&&a.isPropagationStopped())break e;hc(a,v,z),u=y}}}if(oe)throw e=G,oe=!1,G=null,e}function Ve(e,t){var n=t[La];n===void 0&&(n=t[La]=new Set);var i=e+"__bubble";n.has(i)||(gc(t,e,2,!1),n.add(i))}function Ea(e,t,n){var i=0;t&&(i|=4),gc(n,e,i,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function Io(e){if(!e[Hi]){e[Hi]=!0,s.forEach(function(n){n!=="selectionchange"&&(Bm.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Ea("selectionchange",!1,t))}}function gc(e,t,n,i){switch(Uu(t)){case 1:var a=om;break;case 4:a=im;break;default:a=la}n=a.bind(null,t,n,e),a=void 0,!H||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ca(e,t,n,i,a){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var f=i.tag;if(f===3||f===4){var v=i.stateNode.containerInfo;if(v===a||v.nodeType===8&&v.parentNode===a)break;if(f===4)for(f=i.return;f!==null;){var y=f.tag;if((y===3||y===4)&&(y=f.stateNode.containerInfo,y===a||y.nodeType===8&&y.parentNode===a))return;f=f.return}for(;v!==null;){if(f=pr(v),f===null)return;if(y=f.tag,y===5||y===6){i=u=f;continue e}v=v.parentNode}}i=i.return}R(function(){var z=u,j=ur(n),B=[];e:{var U=pc.get(e);if(U!==void 0){var J=ua,ne=e;switch(e){case"keypress":if(Ai(n)===0)break e;case"keydown":case"keyup":J=wm;break;case"focusin":ne="focus",J=fa;break;case"focusout":ne="blur",J=fa;break;case"beforeblur":case"afterblur":J=fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Em;break;case uc:case cc:case dc:J=dm;break;case fc:J=bm;break;case"scroll":J=lm;break;case"wheel":J=Rm;break;case"copy":case"cut":case"paste":J=pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Wu}var ie=(t&4)!==0,nt=!ie&&e==="scroll",P=ie?U!==null?U+"Capture":null:U;ie=[];for(var w=z,L;w!==null;){L=w;var W=L.stateNode;if(L.tag===5&&W!==null&&(L=W,P!==null&&(W=$(w,P),W!=null&&ie.push(Uo(w,W,L)))),nt)break;w=w.return}0<ie.length&&(U=new J(U,ne,null,n,j),B.push({event:U,listeners:ie}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",U&&n!==Fr&&(ne=n.relatedTarget||n.fromElement)&&(pr(ne)||ne[yn]))break e;if((J||U)&&(U=j.window===j?j:(U=j.ownerDocument)?U.defaultView||U.parentWindow:window,J?(ne=n.relatedTarget||n.toElement,J=z,ne=ne?pr(ne):null,ne!==null&&(nt=Ue(ne),ne!==nt||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(J=null,ne=z),J!==ne)){if(ie=Hu,W="onMouseLeave",P="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Wu,W="onPointerLeave",P="onPointerEnter",w="pointer"),nt=J==null?U:Gr(J),L=ne==null?U:Gr(ne),U=new ie(W,w+"leave",J,n,j),U.target=nt,U.relatedTarget=L,W=null,pr(j)===z&&(ie=new ie(P,w+"enter",ne,n,j),ie.target=L,ie.relatedTarget=nt,W=ie),nt=W,J&&ne)t:{for(ie=J,P=ne,w=0,L=ie;L;L=Qr(L))w++;for(L=0,W=P;W;W=Qr(W))L++;for(;0<w-L;)ie=Qr(ie),w--;for(;0<L-w;)P=Qr(P),L--;for(;w--;){if(ie===P||P!==null&&ie===P.alternate)break t;ie=Qr(ie),P=Qr(P)}ie=null}else ie=null;J!==null&&yc(B,U,J,ie,!1),ne!==null&&nt!==null&&yc(B,nt,ne,ie,!0)}}e:{if(U=z?Gr(z):window,J=U.nodeName&&U.nodeName.toLowerCase(),J==="select"||J==="input"&&U.type==="file")var le=Dm;else if(qu(U))if(Zu)le=Fm;else{le=Om;var pe=Mm}else(J=U.nodeName)&&J.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(le=Am);if(le&&(le=le(e,z))){Ju(B,le,n,j);break e}pe&&pe(e,U,z),e==="focusout"&&(pe=U._wrapperState)&&pe.controlled&&U.type==="number"&&go(U,"number",U.value)}switch(pe=z?Gr(z):window,e){case"focusin":(qu(pe)||pe.contentEditable==="true")&&(Br=pe,ya=z,Ao=null);break;case"focusout":Ao=ya=Br=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,ac(B,n,j);break;case"selectionchange":if(jm)break;case"keydown":case"keyup":ac(B,n,j)}var me;if(ma)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Hr?Yu(e,n)&&(ge="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ge="onCompositionStart");ge&&(Qu&&n.locale!=="ko"&&(Hr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Hr&&(me=ju()):(In=j,sa="value"in In?In.value:In.textContent,Hr=!0)),pe=Bi(z,ge),0<pe.length&&(ge=new Bu(ge,e,null,n,j),B.push({event:ge,listeners:pe}),me?ge.data=me:(me=Xu(n),me!==null&&(ge.data=me)))),(me=Tm?Lm(e,n):zm(e,n))&&(z=Bi(z,"onBeforeInput"),0<z.length&&(j=new Bu("onBeforeInput","beforeinput",null,n,j),B.push({event:j,listeners:z}),j.data=me))}vc(B,t)})}function Uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bi(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,u=a.stateNode;a.tag===5&&u!==null&&(a=u,u=$(e,n),u!=null&&i.unshift(Uo(e,u,a)),u=$(e,t),u!=null&&i.push(Uo(e,u,a))),e=e.return}return i}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yc(e,t,n,i,a){for(var u=t._reactName,f=[];n!==null&&n!==i;){var v=n,y=v.alternate,z=v.stateNode;if(y!==null&&y===i)break;v.tag===5&&z!==null&&(v=z,a?(y=$(n,u),y!=null&&f.unshift(Uo(n,y,v))):a||(y=$(n,u),y!=null&&f.push(Uo(n,y,v)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var Wm=/\r\n?/g,Qm=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(Wm,`
`).replace(Qm,"")}function Wi(e,t,n){if(t=xc(t),xc(e)!==t&&n)throw Error(l(425))}function Qi(){}var ba=null,_a=null;function Ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,Km=typeof clearTimeout=="function"?clearTimeout:void 0,wc=typeof Promise=="function"?Promise:void 0,Gm=typeof queueMicrotask=="function"?queueMicrotask:typeof wc<"u"?function(e){return wc.resolve(null).then(e).catch(Ym)}:Pa;function Ym(e){setTimeout(function(){throw e})}function Ta(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(i===0){e.removeChild(a),Lo(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=a}while(n);Lo(t)}function jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),un="__reactFiber$"+Kr,jo="__reactProps$"+Kr,yn="__reactContainer$"+Kr,La="__reactEvents$"+Kr,Xm="__reactListeners$"+Kr,qm="__reactHandles$"+Kr;function pr(e){var t=e[un];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yn]||n[un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sc(e);e!==null;){if(n=e[un])return n;e=Sc(e)}return t}e=n,n=e.parentNode}return null}function Vo(e){return e=e[un]||e[yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Ki(e){return e[jo]||null}var za=[],Yr=-1;function Vn(e){return{current:e}}function He(e){0>Yr||(e.current=za[Yr],za[Yr]=null,Yr--)}function Ie(e,t){Yr++,za[Yr]=e.current,e.current=t}var Hn={},xt=Vn(Hn),Rt=Vn(!1),mr=Hn;function Xr(e,t){var n=e.type.contextTypes;if(!n)return Hn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},u;for(u in n)a[u]=t[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Pt(e){return e=e.childContextTypes,e!=null}function Gi(){He(Rt),He(xt)}function kc(e,t,n){if(xt.current!==Hn)throw Error(l(168));Ie(xt,t),Ie(Rt,n)}function Ec(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(l(108,be(e)||"Unknown",a));return Y({},n,i)}function Yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,mr=xt.current,Ie(xt,e),Ie(Rt,Rt.current),!0}function Cc(e,t,n){var i=e.stateNode;if(!i)throw Error(l(169));n?(e=Ec(e,t,mr),i.__reactInternalMemoizedMergedChildContext=e,He(Rt),He(xt),Ie(xt,e)):He(Rt),Ie(Rt,n)}var xn=null,Xi=!1,$a=!1;function bc(e){xn===null?xn=[e]:xn.push(e)}function Jm(e){Xi=!0,bc(e)}function Bn(){if(!$a&&xn!==null){$a=!0;var e=0,t=Ne;try{var n=xn;for(Ne=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}xn=null,Xi=!1}catch(a){throw xn!==null&&(xn=xn.slice(e+1)),Bt(Nn,Bn),a}finally{Ne=t,$a=!1}}return null}var qr=[],Jr=0,qi=null,Ji=0,Wt=[],Qt=0,hr=null,wn=1,Sn="";function vr(e,t){qr[Jr++]=Ji,qr[Jr++]=qi,qi=e,Ji=t}function _c(e,t,n){Wt[Qt++]=wn,Wt[Qt++]=Sn,Wt[Qt++]=hr,hr=e;var i=wn;e=Sn;var a=32-Mt(i)-1;i&=~(1<<a),n+=1;var u=32-Mt(t)+a;if(30<u){var f=a-a%5;u=(i&(1<<f)-1).toString(32),i>>=f,a-=f,wn=1<<32-Mt(t)+a|n<<a|i,Sn=u+e}else wn=1<<u|n<<a|i,Sn=e}function Na(e){e.return!==null&&(vr(e,1),_c(e,1,0))}function Da(e){for(;e===qi;)qi=qr[--Jr],qr[Jr]=null,Ji=qr[--Jr],qr[Jr]=null;for(;e===hr;)hr=Wt[--Qt],Wt[Qt]=null,Sn=Wt[--Qt],Wt[Qt]=null,wn=Wt[--Qt],Wt[Qt]=null}var At=null,Ft=null,Qe=!1,tn=null;function Rc(e,t){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,Ft=jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,Ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hr!==null?{id:wn,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,Ft=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(Qe){var t=Ft;if(t){var n=t;if(!Pc(e,t)){if(Ma(e))throw Error(l(418));t=jn(n.nextSibling);var i=At;t&&Pc(e,t)?Rc(i,n):(e.flags=e.flags&-4097|2,Qe=!1,At=e)}}else{if(Ma(e))throw Error(l(418));e.flags=e.flags&-4097|2,Qe=!1,At=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function Zi(e){if(e!==At)return!1;if(!Qe)return Tc(e),Qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ra(e.type,e.memoizedProps)),t&&(t=Ft)){if(Ma(e))throw Lc(),Error(l(418));for(;t;)Rc(e,t),t=jn(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ft=jn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ft=null}}else Ft=At?jn(e.stateNode.nextSibling):null;return!0}function Lc(){for(var e=Ft;e;)e=jn(e.nextSibling)}function Zr(){Ft=At=null,Qe=!1}function Aa(e){tn===null?tn=[e]:tn.push(e)}var Zm=X.ReactCurrentBatchConfig;function Ho(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var i=n.stateNode}if(!i)throw Error(l(147,e));var a=i,u=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===u?t.ref:(t=function(f){var v=a.refs;f===null?delete v[u]:v[u]=f},t._stringRef=u,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function el(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zc(e){var t=e._init;return t(e._payload)}function $c(e){function t(P,w){if(e){var L=P.deletions;L===null?(P.deletions=[w],P.flags|=16):L.push(w)}}function n(P,w){if(!e)return null;for(;w!==null;)t(P,w),w=w.sibling;return null}function i(P,w){for(P=new Map;w!==null;)w.key!==null?P.set(w.key,w):P.set(w.index,w),w=w.sibling;return P}function a(P,w){return P=Jn(P,w),P.index=0,P.sibling=null,P}function u(P,w,L){return P.index=L,e?(L=P.alternate,L!==null?(L=L.index,L<w?(P.flags|=2,w):L):(P.flags|=2,w)):(P.flags|=1048576,w)}function f(P){return e&&P.alternate===null&&(P.flags|=2),P}function v(P,w,L,W){return w===null||w.tag!==6?(w=Ps(L,P.mode,W),w.return=P,w):(w=a(w,L),w.return=P,w)}function y(P,w,L,W){var le=L.type;return le===ae?j(P,w,L.props.children,W,L.key):w!==null&&(w.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ee&&zc(le)===w.type)?(W=a(w,L.props),W.ref=Ho(P,w,L),W.return=P,W):(W=Cl(L.type,L.key,L.props,null,P.mode,W),W.ref=Ho(P,w,L),W.return=P,W)}function z(P,w,L,W){return w===null||w.tag!==4||w.stateNode.containerInfo!==L.containerInfo||w.stateNode.implementation!==L.implementation?(w=Ts(L,P.mode,W),w.return=P,w):(w=a(w,L.children||[]),w.return=P,w)}function j(P,w,L,W,le){return w===null||w.tag!==7?(w=Cr(L,P.mode,W,le),w.return=P,w):(w=a(w,L),w.return=P,w)}function B(P,w,L){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ps(""+w,P.mode,L),w.return=P,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ce:return L=Cl(w.type,w.key,w.props,null,P.mode,L),L.ref=Ho(P,null,w),L.return=P,L;case _:return w=Ts(w,P.mode,L),w.return=P,w;case Ee:var W=w._init;return B(P,W(w._payload),L)}if(lr(w)||re(w))return w=Cr(w,P.mode,L,null),w.return=P,w;el(P,w)}return null}function U(P,w,L,W){var le=w!==null?w.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return le!==null?null:v(P,w,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ce:return L.key===le?y(P,w,L,W):null;case _:return L.key===le?z(P,w,L,W):null;case Ee:return le=L._init,U(P,w,le(L._payload),W)}if(lr(L)||re(L))return le!==null?null:j(P,w,L,W,null);el(P,L)}return null}function J(P,w,L,W,le){if(typeof W=="string"&&W!==""||typeof W=="number")return P=P.get(L)||null,v(w,P,""+W,le);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case ce:return P=P.get(W.key===null?L:W.key)||null,y(w,P,W,le);case _:return P=P.get(W.key===null?L:W.key)||null,z(w,P,W,le);case Ee:var pe=W._init;return J(P,w,L,pe(W._payload),le)}if(lr(W)||re(W))return P=P.get(L)||null,j(w,P,W,le,null);el(w,W)}return null}function ne(P,w,L,W){for(var le=null,pe=null,me=w,ge=w=0,ft=null;me!==null&&ge<L.length;ge++){me.index>ge?(ft=me,me=null):ft=me.sibling;var Re=U(P,me,L[ge],W);if(Re===null){me===null&&(me=ft);break}e&&me&&Re.alternate===null&&t(P,me),w=u(Re,w,ge),pe===null?le=Re:pe.sibling=Re,pe=Re,me=ft}if(ge===L.length)return n(P,me),Qe&&vr(P,ge),le;if(me===null){for(;ge<L.length;ge++)me=B(P,L[ge],W),me!==null&&(w=u(me,w,ge),pe===null?le=me:pe.sibling=me,pe=me);return Qe&&vr(P,ge),le}for(me=i(P,me);ge<L.length;ge++)ft=J(me,P,ge,L[ge],W),ft!==null&&(e&&ft.alternate!==null&&me.delete(ft.key===null?ge:ft.key),w=u(ft,w,ge),pe===null?le=ft:pe.sibling=ft,pe=ft);return e&&me.forEach(function(Zn){return t(P,Zn)}),Qe&&vr(P,ge),le}function ie(P,w,L,W){var le=re(L);if(typeof le!="function")throw Error(l(150));if(L=le.call(L),L==null)throw Error(l(151));for(var pe=le=null,me=w,ge=w=0,ft=null,Re=L.next();me!==null&&!Re.done;ge++,Re=L.next()){me.index>ge?(ft=me,me=null):ft=me.sibling;var Zn=U(P,me,Re.value,W);if(Zn===null){me===null&&(me=ft);break}e&&me&&Zn.alternate===null&&t(P,me),w=u(Zn,w,ge),pe===null?le=Zn:pe.sibling=Zn,pe=Zn,me=ft}if(Re.done)return n(P,me),Qe&&vr(P,ge),le;if(me===null){for(;!Re.done;ge++,Re=L.next())Re=B(P,Re.value,W),Re!==null&&(w=u(Re,w,ge),pe===null?le=Re:pe.sibling=Re,pe=Re);return Qe&&vr(P,ge),le}for(me=i(P,me);!Re.done;ge++,Re=L.next())Re=J(me,P,ge,Re.value,W),Re!==null&&(e&&Re.alternate!==null&&me.delete(Re.key===null?ge:Re.key),w=u(Re,w,ge),pe===null?le=Re:pe.sibling=Re,pe=Re);return e&&me.forEach(function($h){return t(P,$h)}),Qe&&vr(P,ge),le}function nt(P,w,L,W){if(typeof L=="object"&&L!==null&&L.type===ae&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case ce:e:{for(var le=L.key,pe=w;pe!==null;){if(pe.key===le){if(le=L.type,le===ae){if(pe.tag===7){n(P,pe.sibling),w=a(pe,L.props.children),w.return=P,P=w;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ee&&zc(le)===pe.type){n(P,pe.sibling),w=a(pe,L.props),w.ref=Ho(P,pe,L),w.return=P,P=w;break e}n(P,pe);break}else t(P,pe);pe=pe.sibling}L.type===ae?(w=Cr(L.props.children,P.mode,W,L.key),w.return=P,P=w):(W=Cl(L.type,L.key,L.props,null,P.mode,W),W.ref=Ho(P,w,L),W.return=P,P=W)}return f(P);case _:e:{for(pe=L.key;w!==null;){if(w.key===pe)if(w.tag===4&&w.stateNode.containerInfo===L.containerInfo&&w.stateNode.implementation===L.implementation){n(P,w.sibling),w=a(w,L.children||[]),w.return=P,P=w;break e}else{n(P,w);break}else t(P,w);w=w.sibling}w=Ts(L,P.mode,W),w.return=P,P=w}return f(P);case Ee:return pe=L._init,nt(P,w,pe(L._payload),W)}if(lr(L))return ne(P,w,L,W);if(re(L))return ie(P,w,L,W);el(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,w!==null&&w.tag===6?(n(P,w.sibling),w=a(w,L),w.return=P,P=w):(n(P,w),w=Ps(L,P.mode,W),w.return=P,P=w),f(P)):n(P,w)}return nt}var eo=$c(!0),Nc=$c(!1),tl=Vn(null),nl=null,to=null,Fa=null;function Ia(){Fa=to=nl=null}function Ua(e){var t=tl.current;He(tl),e._currentValue=t}function ja(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function no(e,t){nl=e,Fa=to=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Tt=!0),e.firstContext=null)}function Kt(e){var t=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:t,next:null},to===null){if(nl===null)throw Error(l(308));to=e,nl.dependencies={lanes:0,firstContext:e}}else to=to.next=e;return t}var gr=null;function Va(e){gr===null?gr=[e]:gr.push(e)}function Dc(e,t,n,i){var a=t.interleaved;return a===null?(n.next=n,Va(t)):(n.next=a.next,a.next=n),t.interleaved=n,kn(e,i)}function kn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(_e&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,kn(e,n)}return a=i.interleaved,a===null?(t.next=t,Va(i)):(t.next=a.next,a.next=t),i.interleaved=t,kn(e,n)}function rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ra(e,n)}}function Oc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var f={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};u===null?a=u=f:u=u.next=f,n=n.next}while(n!==null);u===null?a=u=t:u=u.next=t}else a=u=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,i){var a=e.updateQueue;Wn=!1;var u=a.firstBaseUpdate,f=a.lastBaseUpdate,v=a.shared.pending;if(v!==null){a.shared.pending=null;var y=v,z=y.next;y.next=null,f===null?u=z:f.next=z,f=y;var j=e.alternate;j!==null&&(j=j.updateQueue,v=j.lastBaseUpdate,v!==f&&(v===null?j.firstBaseUpdate=z:v.next=z,j.lastBaseUpdate=y))}if(u!==null){var B=a.baseState;f=0,j=z=y=null,v=u;do{var U=v.lane,J=v.eventTime;if((i&U)===U){j!==null&&(j=j.next={eventTime:J,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var ne=e,ie=v;switch(U=t,J=n,ie.tag){case 1:if(ne=ie.payload,typeof ne=="function"){B=ne.call(J,B,U);break e}B=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ie.payload,U=typeof ne=="function"?ne.call(J,B,U):ne,U==null)break e;B=Y({},B,U);break e;case 2:Wn=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,U=a.effects,U===null?a.effects=[v]:U.push(v))}else J={eventTime:J,lane:U,tag:v.tag,payload:v.payload,callback:v.callback,next:null},j===null?(z=j=J,y=B):j=j.next=J,f|=U;if(v=v.next,v===null){if(v=a.shared.pending,v===null)break;U=v,v=U.next,U.next=null,a.lastBaseUpdate=U,a.shared.pending=null}}while(!0);if(j===null&&(y=B),a.baseState=y,a.firstBaseUpdate=z,a.lastBaseUpdate=j,t=a.shared.interleaved,t!==null){a=t;do f|=a.lane,a=a.next;while(a!==t)}else u===null&&(a.shared.lanes=0);wr|=f,e.lanes=f,e.memoizedState=B}}function Ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!="function")throw Error(l(191,a));a.call(i)}}}var Bo={},cn=Vn(Bo),Wo=Vn(Bo),Qo=Vn(Bo);function yr(e){if(e===Bo)throw Error(l(174));return e}function Ba(e,t){switch(Ie(Qo,t),Ie(Wo,e),Ie(cn,Bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nt(t,e)}He(cn),Ie(cn,t)}function ro(){He(cn),He(Wo),He(Qo)}function Fc(e){yr(Qo.current);var t=yr(cn.current),n=Nt(t,e.type);t!==n&&(Ie(Wo,e),Ie(cn,n))}function Wa(e){Wo.current===e&&(He(cn),He(Wo))}var Ge=Vn(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function Ka(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var ll=X.ReactCurrentDispatcher,Ga=X.ReactCurrentBatchConfig,xr=0,Ye=null,lt=null,ct=null,al=!1,Ko=!1,Go=0,eh=0;function wt(){throw Error(l(321))}function Ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!en(e[n],t[n]))return!1;return!0}function Xa(e,t,n,i,a,u){if(xr=u,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ll.current=e===null||e.memoizedState===null?oh:ih,e=n(i,a),Ko){u=0;do{if(Ko=!1,Go=0,25<=u)throw Error(l(301));u+=1,ct=lt=null,t.updateQueue=null,ll.current=lh,e=n(i,a)}while(Ko)}if(ll.current=cl,t=lt!==null&&lt.next!==null,xr=0,ct=lt=Ye=null,al=!1,t)throw Error(l(300));return e}function qa(){var e=Go!==0;return Go=0,e}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ye.memoizedState=ct=e:ct=ct.next=e,ct}function Gt(){if(lt===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var t=ct===null?Ye.memoizedState:ct.next;if(t!==null)ct=t,lt=e;else{if(e===null)throw Error(l(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},ct===null?Ye.memoizedState=ct=e:ct=ct.next=e}return ct}function Yo(e,t){return typeof t=="function"?t(e):t}function Ja(e){var t=Gt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=lt,a=i.baseQueue,u=n.pending;if(u!==null){if(a!==null){var f=a.next;a.next=u.next,u.next=f}i.baseQueue=a=u,n.pending=null}if(a!==null){u=a.next,i=i.baseState;var v=f=null,y=null,z=u;do{var j=z.lane;if((xr&j)===j)y!==null&&(y=y.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),i=z.hasEagerState?z.eagerState:e(i,z.action);else{var B={lane:j,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};y===null?(v=y=B,f=i):y=y.next=B,Ye.lanes|=j,wr|=j}z=z.next}while(z!==null&&z!==u);y===null?f=i:y.next=v,en(i,t.memoizedState)||(Tt=!0),t.memoizedState=i,t.baseState=f,t.baseQueue=y,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do u=a.lane,Ye.lanes|=u,wr|=u,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Za(e){var t=Gt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,u=t.memoizedState;if(a!==null){n.pending=null;var f=a=a.next;do u=e(u,f.action),f=f.next;while(f!==a);en(u,t.memoizedState)||(Tt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,i]}function Ic(){}function Uc(e,t){var n=Ye,i=Gt(),a=t(),u=!en(i.memoizedState,a);if(u&&(i.memoizedState=a,Tt=!0),i=i.queue,es(Hc.bind(null,n,i,e),[e]),i.getSnapshot!==t||u||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,Xo(9,Vc.bind(null,n,i,a,t),void 0,null),dt===null)throw Error(l(349));(xr&30)!==0||jc(n,t,a)}return a}function jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vc(e,t,n,i){t.value=n,t.getSnapshot=i,Bc(t)&&Wc(e)}function Hc(e,t,n){return n(function(){Bc(t)&&Wc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!en(e,n)}catch{return!0}}function Wc(e){var t=kn(e,1);t!==null&&ln(t,e,1,-1)}function Qc(e){var t=dn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:e},t.queue=e,e=e.dispatch=rh.bind(null,Ye,e),[t.memoizedState,e]}function Xo(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Kc(){return Gt().memoizedState}function sl(e,t,n,i){var a=dn();Ye.flags|=e,a.memoizedState=Xo(1|t,n,void 0,i===void 0?null:i)}function ul(e,t,n,i){var a=Gt();i=i===void 0?null:i;var u=void 0;if(lt!==null){var f=lt.memoizedState;if(u=f.destroy,i!==null&&Ya(i,f.deps)){a.memoizedState=Xo(t,n,u,i);return}}Ye.flags|=e,a.memoizedState=Xo(1|t,n,u,i)}function Gc(e,t){return sl(8390656,8,e,t)}function es(e,t){return ul(2048,8,e,t)}function Yc(e,t){return ul(4,2,e,t)}function Xc(e,t){return ul(4,4,e,t)}function qc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jc(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,qc.bind(null,t,e),n)}function ts(){}function Zc(e,t){var n=Gt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Ya(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function ed(e,t){var n=Gt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Ya(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function td(e,t,n){return(xr&21)===0?(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=n):(en(n,t)||(n=zu(),Ye.lanes|=n,wr|=n,e.baseState=!0),t)}function th(e,t){var n=Ne;Ne=n!==0&&4>n?n:4,e(!0);var i=Ga.transition;Ga.transition={};try{e(!1),t()}finally{Ne=n,Ga.transition=i}}function nd(){return Gt().memoizedState}function nh(e,t,n){var i=Xn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},rd(e))od(t,n);else if(n=Dc(e,t,n,i),n!==null){var a=Ct();ln(n,e,i,a),id(n,t,i)}}function rh(e,t,n){var i=Xn(e),a={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(rd(e))od(t,a);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var f=t.lastRenderedState,v=u(f,n);if(a.hasEagerState=!0,a.eagerState=v,en(v,f)){var y=t.interleaved;y===null?(a.next=a,Va(t)):(a.next=y.next,y.next=a),t.interleaved=a;return}}catch{}finally{}n=Dc(e,t,a,i),n!==null&&(a=Ct(),ln(n,e,i,a),id(n,t,i))}}function rd(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function od(e,t){Ko=al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function id(e,t,n){if((n&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ra(e,n)}}var cl={readContext:Kt,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},oh={readContext:Kt,useCallback:function(e,t){return dn().memoizedState=[e,t===void 0?null:t],e},useContext:Kt,useEffect:Gc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,sl(4194308,4,qc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sl(4194308,4,e,t)},useInsertionEffect:function(e,t){return sl(4,2,e,t)},useMemo:function(e,t){var n=dn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=dn();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=nh.bind(null,Ye,e),[i.memoizedState,e]},useRef:function(e){var t=dn();return e={current:e},t.memoizedState=e},useState:Qc,useDebugValue:ts,useDeferredValue:function(e){return dn().memoizedState=e},useTransition:function(){var e=Qc(!1),t=e[0];return e=th.bind(null,e[1]),dn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=Ye,a=dn();if(Qe){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),dt===null)throw Error(l(349));(xr&30)!==0||jc(i,t,n)}a.memoizedState=n;var u={value:n,getSnapshot:t};return a.queue=u,Gc(Hc.bind(null,i,u,e),[e]),i.flags|=2048,Xo(9,Vc.bind(null,i,u,n,t),void 0,null),n},useId:function(){var e=dn(),t=dt.identifierPrefix;if(Qe){var n=Sn,i=wn;n=(i&~(1<<32-Mt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=eh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ih={readContext:Kt,useCallback:Zc,useContext:Kt,useEffect:es,useImperativeHandle:Jc,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:ed,useReducer:Ja,useRef:Kc,useState:function(){return Ja(Yo)},useDebugValue:ts,useDeferredValue:function(e){var t=Gt();return td(t,lt.memoizedState,e)},useTransition:function(){var e=Ja(Yo)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Uc,useId:nd,unstable_isNewReconciler:!1},lh={readContext:Kt,useCallback:Zc,useContext:Kt,useEffect:es,useImperativeHandle:Jc,useInsertionEffect:Yc,useLayoutEffect:Xc,useMemo:ed,useReducer:Za,useRef:Kc,useState:function(){return Za(Yo)},useDebugValue:ts,useDeferredValue:function(e){var t=Gt();return lt===null?t.memoizedState=e:td(t,lt.memoizedState,e)},useTransition:function(){var e=Za(Yo)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Uc,useId:nd,unstable_isNewReconciler:!1};function nn(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ns(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?Ue(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ct(),a=Xn(e),u=En(i,a);u.payload=t,n!=null&&(u.callback=n),t=Qn(e,u,a),t!==null&&(ln(t,e,a,i),rl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ct(),a=Xn(e),u=En(i,a);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Qn(e,u,a),t!==null&&(ln(t,e,a,i),rl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ct(),i=Xn(e),a=En(n,i);a.tag=2,t!=null&&(a.callback=t),t=Qn(e,a,i),t!==null&&(ln(t,e,i,n),rl(t,e,i))}};function ld(e,t,n,i,a,u,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,f):t.prototype&&t.prototype.isPureReactComponent?!Oo(n,i)||!Oo(a,u):!0}function ad(e,t,n){var i=!1,a=Hn,u=t.contextType;return typeof u=="object"&&u!==null?u=Kt(u):(a=Pt(t)?mr:xt.current,i=t.contextTypes,u=(i=i!=null)?Xr(e,a):Hn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=u),t}function sd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function rs(e,t,n,i){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ha(e);var u=t.contextType;typeof u=="object"&&u!==null?a.context=Kt(u):(u=Pt(t)?mr:xt.current,a.context=Xr(e,u)),a.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ns(e,t,u,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&dl.enqueueReplaceState(a,a.state,null),ol(e,n,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function oo(e,t){try{var n="",i=t;do n+=we(i),i=i.return;while(i);var a=n}catch(u){a=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:t,stack:a,digest:null}}function os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function is(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ah=typeof WeakMap=="function"?WeakMap:Map;function ud(e,t,n){n=En(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){yl||(yl=!0,ws=i),is(e,t)},n}function cd(e,t,n){n=En(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;n.payload=function(){return i(a)},n.callback=function(){is(e,t)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){is(e,t),typeof i!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var f=t.stack;this.componentDidCatch(t.value,{componentStack:f!==null?f:""})}),n}function dd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new ah;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(a.add(n),e=Sh.bind(null,e,t,n),t.then(e,e))}function fd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pd(e,t,n,i,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=En(-1,1),t.tag=2,Qn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var sh=X.ReactCurrentOwner,Tt=!1;function Et(e,t,n,i){t.child=e===null?Nc(t,null,n,i):eo(t,e.child,n,i)}function md(e,t,n,i,a){n=n.render;var u=t.ref;return no(t,a),i=Xa(e,t,n,i,u,a),n=qa(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cn(e,t,a)):(Qe&&n&&Na(t),t.flags|=1,Et(e,t,i,a),t.child)}function hd(e,t,n,i,a){if(e===null){var u=n.type;return typeof u=="function"&&!Rs(u)&&u.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=u,vd(e,t,u,i,a)):(e=Cl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,(e.lanes&a)===0){var f=u.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(f,i)&&e.ref===t.ref)return Cn(e,t,a)}return t.flags|=1,e=Jn(u,i),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,n,i,a){if(e!==null){var u=e.memoizedProps;if(Oo(u,i)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=i=u,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Tt=!0);else return t.lanes=e.lanes,Cn(e,t,a)}return ls(e,t,n,i,a)}function gd(e,t,n){var i=t.pendingProps,a=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(lo,It),It|=n;else{if((n&1073741824)===0)return e=u!==null?u.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(lo,It),It|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:n,Ie(lo,It),It|=i}else u!==null?(i=u.baseLanes|n,t.memoizedState=null):i=n,Ie(lo,It),It|=i;return Et(e,t,a,n),t.child}function yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ls(e,t,n,i,a){var u=Pt(n)?mr:xt.current;return u=Xr(t,u),no(t,a),n=Xa(e,t,n,i,u,a),i=qa(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Cn(e,t,a)):(Qe&&i&&Na(t),t.flags|=1,Et(e,t,n,a),t.child)}function xd(e,t,n,i,a){if(Pt(n)){var u=!0;Yi(t)}else u=!1;if(no(t,a),t.stateNode===null)pl(e,t),ad(t,n,i),rs(t,n,i,a),i=!0;else if(e===null){var f=t.stateNode,v=t.memoizedProps;f.props=v;var y=f.context,z=n.contextType;typeof z=="object"&&z!==null?z=Kt(z):(z=Pt(n)?mr:xt.current,z=Xr(t,z));var j=n.getDerivedStateFromProps,B=typeof j=="function"||typeof f.getSnapshotBeforeUpdate=="function";B||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==i||y!==z)&&sd(t,f,i,z),Wn=!1;var U=t.memoizedState;f.state=U,ol(t,i,f,a),y=t.memoizedState,v!==i||U!==y||Rt.current||Wn?(typeof j=="function"&&(ns(t,n,j,i),y=t.memoizedState),(v=Wn||ld(t,n,v,i,U,y,z))?(B||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=y),f.props=i,f.state=y,f.context=z,i=v):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{f=t.stateNode,Mc(e,t),v=t.memoizedProps,z=t.type===t.elementType?v:nn(t.type,v),f.props=z,B=t.pendingProps,U=f.context,y=n.contextType,typeof y=="object"&&y!==null?y=Kt(y):(y=Pt(n)?mr:xt.current,y=Xr(t,y));var J=n.getDerivedStateFromProps;(j=typeof J=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==B||U!==y)&&sd(t,f,i,y),Wn=!1,U=t.memoizedState,f.state=U,ol(t,i,f,a);var ne=t.memoizedState;v!==B||U!==ne||Rt.current||Wn?(typeof J=="function"&&(ns(t,n,J,i),ne=t.memoizedState),(z=Wn||ld(t,n,z,i,U,ne,y)||!1)?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(i,ne,y),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(i,ne,y)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=ne),f.props=i,f.state=ne,f.context=y,i=z):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),i=!1)}return as(e,t,n,i,u,a)}function as(e,t,n,i,a,u){yd(e,t);var f=(t.flags&128)!==0;if(!i&&!f)return a&&Cc(t,n,!1),Cn(e,t,u);i=t.stateNode,sh.current=t;var v=f&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&f?(t.child=eo(t,e.child,null,u),t.child=eo(t,null,v,u)):Et(e,t,v,u),t.memoizedState=i.state,a&&Cc(t,n,!0),t.child}function wd(e){var t=e.stateNode;t.pendingContext?kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kc(e,t.context,!1),Ba(e,t.containerInfo)}function Sd(e,t,n,i,a){return Zr(),Aa(a),t.flags|=256,Et(e,t,n,i),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function kd(e,t,n){var i=t.pendingProps,a=Ge.current,u=!1,f=(t.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(a&2)!==0),v?(u=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ie(Ge,a&1),e===null)return Oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(f=i.children,e=i.fallback,u?(i=t.mode,u=t.child,f={mode:"hidden",children:f},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=f):u=bl(f,i,0,null),e=Cr(e,i,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,t.child.memoizedState=us(n),t.memoizedState=ss,e):cs(t,f));if(a=e.memoizedState,a!==null&&(v=a.dehydrated,v!==null))return uh(e,t,f,i,v,a,n);if(u){u=i.fallback,f=t.mode,a=e.child,v=a.sibling;var y={mode:"hidden",children:i.children};return(f&1)===0&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=y,t.deletions=null):(i=Jn(a,y),i.subtreeFlags=a.subtreeFlags&14680064),v!==null?u=Jn(v,u):(u=Cr(u,f,n,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,i=u,u=t.child,f=e.child.memoizedState,f=f===null?us(n):{baseLanes:f.baseLanes|n,cachePool:null,transitions:f.transitions},u.memoizedState=f,u.childLanes=e.childLanes&~n,t.memoizedState=ss,i}return u=e.child,e=u.sibling,i=Jn(u,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function cs(e,t){return t=bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fl(e,t,n,i){return i!==null&&Aa(i),eo(t,e.child,null,n),e=cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uh(e,t,n,i,a,u,f){if(n)return t.flags&256?(t.flags&=-257,i=os(Error(l(422))),fl(e,t,f,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(u=i.fallback,a=t.mode,i=bl({mode:"visible",children:i.children},a,0,null),u=Cr(u,a,f,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,(t.mode&1)!==0&&eo(t,e.child,null,f),t.child.memoizedState=us(f),t.memoizedState=ss,u);if((t.mode&1)===0)return fl(e,t,f,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var v=i.dgst;return i=v,u=Error(l(419)),i=os(u,i,void 0),fl(e,t,f,i)}if(v=(f&e.childLanes)!==0,Tt||v){if(i=dt,i!==null){switch(f&-f){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|f))!==0?0:a,a!==0&&a!==u.retryLane&&(u.retryLane=a,kn(e,a),ln(i,e,a,-1))}return _s(),i=os(Error(l(421))),fl(e,t,f,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=kh.bind(null,e),a._reactRetry=t,null):(e=u.treeContext,Ft=jn(a.nextSibling),At=t,Qe=!0,tn=null,e!==null&&(Wt[Qt++]=wn,Wt[Qt++]=Sn,Wt[Qt++]=hr,wn=e.id,Sn=e.overflow,hr=t),t=cs(t,i.children),t.flags|=4096,t)}function Ed(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ja(e.return,t,n)}function ds(e,t,n,i,a){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=a)}function Cd(e,t,n){var i=t.pendingProps,a=i.revealOrder,u=i.tail;if(Et(e,t,i.children,n),i=Ge.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,n,t);else if(e.tag===19)Ed(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ie(Ge,i),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ds(t,!1,a,n,u);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&il(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ds(t,!0,n,null,u);break;case"together":ds(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Cn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ch(e,t,n){switch(t.tag){case 3:wd(t),Zr();break;case 5:Fc(t);break;case 1:Pt(t.type)&&Yi(t);break;case 4:Ba(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;Ie(tl,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Ie(Ge,Ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?kd(e,t,n):(Ie(Ge,Ge.current&1),e=Cn(e,t,n),e!==null?e.sibling:null);Ie(Ge,Ge.current&1);break;case 19:if(i=(n&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Cd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ie(Ge,Ge.current),i)break;return null;case 22:case 23:return t.lanes=0,gd(e,t,n)}return Cn(e,t,n)}var bd,fs,_d,Rd;bd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},fs=function(){},_d=function(e,t,n,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,yr(cn.current);var u=null;switch(n){case"input":a=ut(e,a),i=ut(e,i),u=[];break;case"select":a=Y({},a,{value:void 0}),i=Y({},i,{value:void 0}),u=[];break;case"textarea":a=Jt(e,a),i=Jt(e,i),u=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Qi)}Ar(n,i);var f;n=null;for(z in a)if(!i.hasOwnProperty(z)&&a.hasOwnProperty(z)&&a[z]!=null)if(z==="style"){var v=a[z];for(f in v)v.hasOwnProperty(f)&&(n||(n={}),n[f]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(c.hasOwnProperty(z)?u||(u=[]):(u=u||[]).push(z,null));for(z in i){var y=i[z];if(v=a?.[z],i.hasOwnProperty(z)&&y!==v&&(y!=null||v!=null))if(z==="style")if(v){for(f in v)!v.hasOwnProperty(f)||y&&y.hasOwnProperty(f)||(n||(n={}),n[f]="");for(f in y)y.hasOwnProperty(f)&&v[f]!==y[f]&&(n||(n={}),n[f]=y[f])}else n||(u||(u=[]),u.push(z,n)),n=y;else z==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,v=v?v.__html:void 0,y!=null&&v!==y&&(u=u||[]).push(z,y)):z==="children"?typeof y!="string"&&typeof y!="number"||(u=u||[]).push(z,""+y):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(c.hasOwnProperty(z)?(y!=null&&z==="onScroll"&&Ve("scroll",e),u||v===y||(u=[])):(u=u||[]).push(z,y))}n&&(u=u||[]).push("style",n);var z=u;(t.updateQueue=z)&&(t.flags|=4)}},Rd=function(e,t,n,i){n!==i&&(t.flags|=4)};function qo(e,t){if(!Qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function dh(e,t,n){var i=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return Pt(t.type)&&Gi(),St(t),null;case 3:return i=t.stateNode,ro(),He(Rt),He(xt),Ka(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tn!==null&&(Es(tn),tn=null))),fs(e,t),St(t),null;case 5:Wa(t);var a=yr(Qo.current);if(n=t.type,e!==null&&t.stateNode!=null)_d(e,t,n,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(l(166));return St(t),null}if(e=yr(cn.current),Zi(t)){i=t.stateNode,n=t.type;var u=t.memoizedProps;switch(i[un]=t,i[jo]=u,e=(t.mode&1)!==0,n){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<Fo.length;a++)Ve(Fo[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":ki(i,u),Ve("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Ve("invalid",i);break;case"textarea":Tn(i,u),Ve("invalid",i)}Ar(n,u),a=null;for(var f in u)if(u.hasOwnProperty(f)){var v=u[f];f==="children"?typeof v=="string"?i.textContent!==v&&(u.suppressHydrationWarning!==!0&&Wi(i.textContent,v,e),a=["children",v]):typeof v=="number"&&i.textContent!==""+v&&(u.suppressHydrationWarning!==!0&&Wi(i.textContent,v,e),a=["children",""+v]):c.hasOwnProperty(f)&&v!=null&&f==="onScroll"&&Ve("scroll",i)}switch(n){case"input":Oe(i),Ci(i,u,!0);break;case"textarea":Oe(i),Mr(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=Qi)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{f=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zt(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=f.createElement(n,{is:i.is}):(e=f.createElement(n),n==="select"&&(f=e,i.multiple?f.multiple=!0:i.size&&(f.size=i.size))):e=f.createElementNS(e,n),e[un]=t,e[jo]=i,bd(e,t,!1,!1),t.stateNode=e;e:{switch(f=Ln(n,i),n){case"dialog":Ve("cancel",e),Ve("close",e),a=i;break;case"iframe":case"object":case"embed":Ve("load",e),a=i;break;case"video":case"audio":for(a=0;a<Fo.length;a++)Ve(Fo[a],e);a=i;break;case"source":Ve("error",e),a=i;break;case"img":case"image":case"link":Ve("error",e),Ve("load",e),a=i;break;case"details":Ve("toggle",e),a=i;break;case"input":ki(e,i),a=ut(e,i),Ve("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=Y({},i,{value:void 0}),Ve("invalid",e);break;case"textarea":Tn(e,i),a=Jt(e,i),Ve("invalid",e);break;default:a=i}Ar(n,a),v=a;for(u in v)if(v.hasOwnProperty(u)){var y=v[u];u==="style"?wo(e,y):u==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Or(e,y)):u==="children"?typeof y=="string"?(n!=="textarea"||y!=="")&&sr(e,y):typeof y=="number"&&sr(e,""+y):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?y!=null&&u==="onScroll"&&Ve("scroll",e):y!=null&&A(e,u,y,f))}switch(n){case"input":Oe(e),Ci(e,i,!1);break;case"textarea":Oe(e),Mr(e);break;case"option":i.value!=null&&e.setAttribute("value",""+D(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?Pn(e,!!i.multiple,u,!1):i.defaultValue!=null&&Pn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Qi)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)Rd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(n=yr(Qo.current),yr(cn.current),Zi(t)){if(i=t.stateNode,n=t.memoizedProps,i[un]=t,(u=i.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:Wi(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wi(i.nodeValue,n,(e.mode&1)!==0)}u&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[un]=t,t.stateNode=i}return St(t),null;case 13:if(He(Ge),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Qe&&Ft!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Lc(),Zr(),t.flags|=98560,u=!1;else if(u=Zi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[un]=t}else Zr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;St(t),u=!1}else tn!==null&&(Es(tn),tn=null),u=!0;if(!u)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ge.current&1)!==0?at===0&&(at=3):_s())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return ro(),fs(e,t),e===null&&Io(t.stateNode.containerInfo),St(t),null;case 10:return Ua(t.type._context),St(t),null;case 17:return Pt(t.type)&&Gi(),St(t),null;case 19:if(He(Ge),u=t.memoizedState,u===null)return St(t),null;if(i=(t.flags&128)!==0,f=u.rendering,f===null)if(i)qo(u,!1);else{if(at!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=il(e),f!==null){for(t.flags|=128,qo(u,!1),i=f.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)u=n,e=i,u.flags&=14680066,f=u.alternate,f===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=f.childLanes,u.lanes=f.lanes,u.child=f.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=f.memoizedProps,u.memoizedState=f.memoizedState,u.updateQueue=f.updateQueue,u.type=f.type,e=f.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Ge,Ge.current&1|2),t.child}e=e.sibling}u.tail!==null&&ze()>ao&&(t.flags|=128,i=!0,qo(u,!1),t.lanes=4194304)}else{if(!i)if(e=il(f),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Qe)return St(t),null}else 2*ze()-u.renderingStartTime>ao&&n!==1073741824&&(t.flags|=128,i=!0,qo(u,!1),t.lanes=4194304);u.isBackwards?(f.sibling=t.child,t.child=f):(n=u.last,n!==null?n.sibling=f:t.child=f,u.last=f)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=ze(),t.sibling=null,n=Ge.current,Ie(Ge,i?n&1|2:n&1),t):(St(t),null);case 22:case 23:return bs(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(It&1073741824)!==0&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function fh(e,t){switch(Da(t),t.tag){case 1:return Pt(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ro(),He(Rt),He(xt),Ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Wa(t),null;case 13:if(He(Ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Ge),null;case 4:return ro(),null;case 10:return Ua(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var ml=!1,kt=!1,ph=typeof WeakSet=="function"?WeakSet:Set,te=null;function io(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Je(e,t,i)}else n.current=null}function ps(e,t,n){try{n()}catch(i){Je(e,t,i)}}var Pd=!1;function mh(e,t){if(ba=Di,e=lc(),ga(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var f=0,v=-1,y=-1,z=0,j=0,B=e,U=null;t:for(;;){for(var J;B!==n||a!==0&&B.nodeType!==3||(v=f+a),B!==u||i!==0&&B.nodeType!==3||(y=f+i),B.nodeType===3&&(f+=B.nodeValue.length),(J=B.firstChild)!==null;)U=B,B=J;for(;;){if(B===e)break t;if(U===n&&++z===a&&(v=f),U===u&&++j===i&&(y=f),(J=B.nextSibling)!==null)break;B=U,U=B.parentNode}B=J}n=v===-1||y===-1?null:{start:v,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(_a={focusedElem:e,selectionRange:n},Di=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var ne=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var ie=ne.memoizedProps,nt=ne.memoizedState,P=t.stateNode,w=P.getSnapshotBeforeUpdate(t.elementType===t.type?ie:nn(t.type,ie),nt);P.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(W){Je(t,t.return,W)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return ne=Pd,Pd=!1,ne}function Jo(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var u=a.destroy;a.destroy=void 0,u!==void 0&&ps(t,n,u)}a=a.next}while(a!==i)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function ms(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Td(e){var t=e.alternate;t!==null&&(e.alternate=null,Td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[un],delete t[jo],delete t[La],delete t[Xm],delete t[qm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function zd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi));else if(i!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}function vs(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}var vt=null,rn=!1;function Kn(e,t,n){for(n=n.child;n!==null;)$d(e,t,n),n=n.sibling}function $d(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(je,n)}catch{}switch(n.tag){case 5:kt||io(n,t);case 6:var i=vt,a=rn;vt=null,Kn(e,t,n),vt=i,rn=a,vt!==null&&(rn?(e=vt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(rn?(e=vt,n=n.stateNode,e.nodeType===8?Ta(e.parentNode,n):e.nodeType===1&&Ta(e,n),Lo(e)):Ta(vt,n.stateNode));break;case 4:i=vt,a=rn,vt=n.stateNode.containerInfo,rn=!0,Kn(e,t,n),vt=i,rn=a;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var u=a,f=u.destroy;u=u.tag,f!==void 0&&((u&2)!==0||(u&4)!==0)&&ps(n,t,f),a=a.next}while(a!==i)}Kn(e,t,n);break;case 1:if(!kt&&(io(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(v){Je(n,t,v)}Kn(e,t,n);break;case 21:Kn(e,t,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,Kn(e,t,n),kt=i):Kn(e,t,n);break;default:Kn(e,t,n)}}function Nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ph),t.forEach(function(i){var a=Eh.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}}function on(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var u=e,f=t,v=f;e:for(;v!==null;){switch(v.tag){case 5:vt=v.stateNode,rn=!1;break e;case 3:vt=v.stateNode.containerInfo,rn=!0;break e;case 4:vt=v.stateNode.containerInfo,rn=!0;break e}v=v.return}if(vt===null)throw Error(l(160));$d(u,f,a),vt=null,rn=!1;var y=a.alternate;y!==null&&(y.return=null),a.return=null}catch(z){Je(a,t,z)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}function Dd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(t,e),fn(e),i&4){try{Jo(3,e,e.return),hl(3,e)}catch(ie){Je(e,e.return,ie)}try{Jo(5,e,e.return)}catch(ie){Je(e,e.return,ie)}}break;case 1:on(t,e),fn(e),i&512&&n!==null&&io(n,n.return);break;case 5:if(on(t,e),fn(e),i&512&&n!==null&&io(n,n.return),e.flags&32){var a=e.stateNode;try{sr(a,"")}catch(ie){Je(e,e.return,ie)}}if(i&4&&(a=e.stateNode,a!=null)){var u=e.memoizedProps,f=n!==null?n.memoizedProps:u,v=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{v==="input"&&u.type==="radio"&&u.name!=null&&Ei(a,u),Ln(v,f);var z=Ln(v,u);for(f=0;f<y.length;f+=2){var j=y[f],B=y[f+1];j==="style"?wo(a,B):j==="dangerouslySetInnerHTML"?Or(a,B):j==="children"?sr(a,B):A(a,j,B,z)}switch(v){case"input":Dr(a,u);break;case"textarea":yo(a,u);break;case"select":var U=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!u.multiple;var J=u.value;J!=null?Pn(a,!!u.multiple,J,!1):U!==!!u.multiple&&(u.defaultValue!=null?Pn(a,!!u.multiple,u.defaultValue,!0):Pn(a,!!u.multiple,u.multiple?[]:"",!1))}a[jo]=u}catch(ie){Je(e,e.return,ie)}}break;case 6:if(on(t,e),fn(e),i&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,u=e.memoizedProps;try{a.nodeValue=u}catch(ie){Je(e,e.return,ie)}}break;case 3:if(on(t,e),fn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(t.containerInfo)}catch(ie){Je(e,e.return,ie)}break;case 4:on(t,e),fn(e);break;case 13:on(t,e),fn(e),a=e.child,a.flags&8192&&(u=a.memoizedState!==null,a.stateNode.isHidden=u,!u||a.alternate!==null&&a.alternate.memoizedState!==null||(xs=ze())),i&4&&Nd(e);break;case 22:if(j=n!==null&&n.memoizedState!==null,e.mode&1?(kt=(z=kt)||j,on(t,e),kt=z):on(t,e),fn(e),i&8192){if(z=e.memoizedState!==null,(e.stateNode.isHidden=z)&&!j&&(e.mode&1)!==0)for(te=e,j=e.child;j!==null;){for(B=te=j;te!==null;){switch(U=te,J=U.child,U.tag){case 0:case 11:case 14:case 15:Jo(4,U,U.return);break;case 1:io(U,U.return);var ne=U.stateNode;if(typeof ne.componentWillUnmount=="function"){i=U,n=U.return;try{t=i,ne.props=t.memoizedProps,ne.state=t.memoizedState,ne.componentWillUnmount()}catch(ie){Je(i,n,ie)}}break;case 5:io(U,U.return);break;case 22:if(U.memoizedState!==null){Ad(B);continue}}J!==null?(J.return=U,te=J):Ad(B)}j=j.sibling}e:for(j=null,B=e;;){if(B.tag===5){if(j===null){j=B;try{a=B.stateNode,z?(u=a.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(v=B.stateNode,y=B.memoizedProps.style,f=y!=null&&y.hasOwnProperty("display")?y.display:null,v.style.display=xo("display",f))}catch(ie){Je(e,e.return,ie)}}}else if(B.tag===6){if(j===null)try{B.stateNode.nodeValue=z?"":B.memoizedProps}catch(ie){Je(e,e.return,ie)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;j===B&&(j=null),B=B.return}j===B&&(j=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:on(t,e),fn(e),i&4&&Nd(e);break;case 21:break;default:on(t,e),fn(e)}}function fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ld(n)){var i=n;break e}n=n.return}throw Error(l(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(sr(a,""),i.flags&=-33);var u=zd(e);vs(e,u,a);break;case 3:case 4:var f=i.stateNode.containerInfo,v=zd(e);hs(e,v,f);break;default:throw Error(l(161))}}catch(y){Je(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hh(e,t,n){te=e,Md(e)}function Md(e,t,n){for(var i=(e.mode&1)!==0;te!==null;){var a=te,u=a.child;if(a.tag===22&&i){var f=a.memoizedState!==null||ml;if(!f){var v=a.alternate,y=v!==null&&v.memoizedState!==null||kt;v=ml;var z=kt;if(ml=f,(kt=y)&&!z)for(te=a;te!==null;)f=te,y=f.child,f.tag===22&&f.memoizedState!==null?Fd(a):y!==null?(y.return=f,te=y):Fd(a);for(;u!==null;)te=u,Md(u),u=u.sibling;te=a,ml=v,kt=z}Od(e)}else(a.subtreeFlags&8772)!==0&&u!==null?(u.return=a,te=u):Od(e)}}function Od(e){for(;te!==null;){var t=te;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:kt||hl(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!kt)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nn(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=t.updateQueue;u!==null&&Ac(t,u,i);break;case 3:var f=t.updateQueue;if(f!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ac(t,f,n)}break;case 5:var v=t.stateNode;if(n===null&&t.flags&4){n=v;var y=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&n.focus();break;case"img":y.src&&(n.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var z=t.alternate;if(z!==null){var j=z.memoizedState;if(j!==null){var B=j.dehydrated;B!==null&&Lo(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}kt||t.flags&512&&ms(t)}catch(U){Je(t,t.return,U)}}if(t===e){te=null;break}if(n=t.sibling,n!==null){n.return=t.return,te=n;break}te=t.return}}function Ad(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var n=t.sibling;if(n!==null){n.return=t.return,te=n;break}te=t.return}}function Fd(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(y){Je(t,n,y)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(y){Je(t,a,y)}}var u=t.return;try{ms(t)}catch(y){Je(t,u,y)}break;case 5:var f=t.return;try{ms(t)}catch(y){Je(t,f,y)}}}catch(y){Je(t,t.return,y)}if(t===e){te=null;break}var v=t.sibling;if(v!==null){v.return=t.return,te=v;break}te=t.return}}var vh=Math.ceil,vl=X.ReactCurrentDispatcher,gs=X.ReactCurrentOwner,Yt=X.ReactCurrentBatchConfig,_e=0,dt=null,it=null,gt=0,It=0,lo=Vn(0),at=0,Zo=null,wr=0,gl=0,ys=0,ei=null,Lt=null,xs=0,ao=1/0,bn=null,yl=!1,ws=null,Gn=null,xl=!1,Yn=null,wl=0,ti=0,Ss=null,Sl=-1,kl=0;function Ct(){return(_e&6)!==0?ze():Sl!==-1?Sl:Sl=ze()}function Xn(e){return(e.mode&1)===0?1:(_e&2)!==0&&gt!==0?gt&-gt:Zm.transition!==null?(kl===0&&(kl=zu()),kl):(e=Ne,e!==0||(e=window.event,e=e===void 0?16:Uu(e.type)),e)}function ln(e,t,n,i){if(50<ti)throw ti=0,Ss=null,Error(l(185));bo(e,n,i),((_e&2)===0||e!==dt)&&(e===dt&&((_e&2)===0&&(gl|=n),at===4&&qn(e,gt)),zt(e,i),n===1&&_e===0&&(t.mode&1)===0&&(ao=ze()+500,Xi&&Bn()))}function zt(e,t){var n=e.callbackNode;Zp(e,t);var i=zi(e,e===dt?gt:0);if(i===0)n!==null&&Dt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Dt(n),t===1)e.tag===0?Jm(Ud.bind(null,e)):bc(Ud.bind(null,e)),Gm(function(){(_e&6)===0&&Bn()}),n=null;else{switch($u(i)){case 1:n=Nn;break;case 4:n=$e;break;case 16:n=tt;break;case 536870912:n=Dn;break;default:n=tt}n=Gd(n,Id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Id(e,t){if(Sl=-1,kl=0,(_e&6)!==0)throw Error(l(327));var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var i=zi(e,e===dt?gt:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=El(e,i);else{t=i;var a=_e;_e|=2;var u=Vd();(dt!==e||gt!==t)&&(bn=null,ao=ze()+500,kr(e,t));do try{xh();break}catch(v){jd(e,v)}while(!0);Ia(),vl.current=u,_e=a,it!==null?t=0:(dt=null,gt=0,t=at)}if(t!==0){if(t===2&&(a=ta(e),a!==0&&(i=a,t=ks(e,a))),t===1)throw n=Zo,kr(e,0),qn(e,i),zt(e,ze()),n;if(t===6)qn(e,i);else{if(a=e.current.alternate,(i&30)===0&&!gh(a)&&(t=El(e,i),t===2&&(u=ta(e),u!==0&&(i=u,t=ks(e,u))),t===1))throw n=Zo,kr(e,0),qn(e,i),zt(e,ze()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(l(345));case 2:Er(e,Lt,bn);break;case 3:if(qn(e,i),(i&130023424)===i&&(t=xs+500-ze(),10<t)){if(zi(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){Ct(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Pa(Er.bind(null,e,Lt,bn),t);break}Er(e,Lt,bn);break;case 4:if(qn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var f=31-Mt(i);u=1<<f,f=t[f],f>a&&(a=f),i&=~u}if(i=a,i=ze()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vh(i/1960))-i,10<i){e.timeoutHandle=Pa(Er.bind(null,e,Lt,bn),i);break}Er(e,Lt,bn);break;case 5:Er(e,Lt,bn);break;default:throw Error(l(329))}}}return zt(e,ze()),e.callbackNode===n?Id.bind(null,e):null}function ks(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(kr(e,t).flags|=256),e=El(e,t),e!==2&&(t=Lt,Lt=n,t!==null&&Es(t)),e}function Es(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function gh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var a=n[i],u=a.getSnapshot;a=a.value;try{if(!en(u(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qn(e,t){for(t&=~ys,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),i=1<<n;e[n]=-1,t&=~i}}function Ud(e){if((_e&6)!==0)throw Error(l(327));so();var t=zi(e,0);if((t&1)===0)return zt(e,ze()),null;var n=El(e,t);if(e.tag!==0&&n===2){var i=ta(e);i!==0&&(t=i,n=ks(e,i))}if(n===1)throw n=Zo,kr(e,0),qn(e,t),zt(e,ze()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Er(e,Lt,bn),zt(e,ze()),null}function Cs(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(ao=ze()+500,Xi&&Bn())}}function Sr(e){Yn!==null&&Yn.tag===0&&(_e&6)===0&&so();var t=_e;_e|=1;var n=Yt.transition,i=Ne;try{if(Yt.transition=null,Ne=1,e)return e()}finally{Ne=i,Yt.transition=n,_e=t,(_e&6)===0&&Bn()}}function bs(){It=lo.current,He(lo)}function kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Km(n)),it!==null)for(n=it.return;n!==null;){var i=n;switch(Da(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gi();break;case 3:ro(),He(Rt),He(xt),Ka();break;case 5:Wa(i);break;case 4:ro();break;case 13:He(Ge);break;case 19:He(Ge);break;case 10:Ua(i.type._context);break;case 22:case 23:bs()}n=n.return}if(dt=e,it=e=Jn(e.current,null),gt=It=t,at=0,Zo=null,ys=gl=wr=0,Lt=ei=null,gr!==null){for(t=0;t<gr.length;t++)if(n=gr[t],i=n.interleaved,i!==null){n.interleaved=null;var a=i.next,u=n.pending;if(u!==null){var f=u.next;u.next=a,i.next=f}n.pending=i}gr=null}return e}function jd(e,t){do{var n=it;try{if(Ia(),ll.current=cl,al){for(var i=Ye.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}al=!1}if(xr=0,ct=lt=Ye=null,Ko=!1,Go=0,gs.current=null,n===null||n.return===null){at=1,Zo=t,it=null;break}e:{var u=e,f=n.return,v=n,y=t;if(t=gt,v.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var z=y,j=v,B=j.tag;if((j.mode&1)===0&&(B===0||B===11||B===15)){var U=j.alternate;U?(j.updateQueue=U.updateQueue,j.memoizedState=U.memoizedState,j.lanes=U.lanes):(j.updateQueue=null,j.memoizedState=null)}var J=fd(f);if(J!==null){J.flags&=-257,pd(J,f,v,u,t),J.mode&1&&dd(u,z,t),t=J,y=z;var ne=t.updateQueue;if(ne===null){var ie=new Set;ie.add(y),t.updateQueue=ie}else ne.add(y);break e}else{if((t&1)===0){dd(u,z,t),_s();break e}y=Error(l(426))}}else if(Qe&&v.mode&1){var nt=fd(f);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),pd(nt,f,v,u,t),Aa(oo(y,v));break e}}u=y=oo(y,v),at!==4&&(at=2),ei===null?ei=[u]:ei.push(u),u=f;do{switch(u.tag){case 3:u.flags|=65536,t&=-t,u.lanes|=t;var P=ud(u,y,t);Oc(u,P);break e;case 1:v=y;var w=u.type,L=u.stateNode;if((u.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(Gn===null||!Gn.has(L)))){u.flags|=65536,t&=-t,u.lanes|=t;var W=cd(u,v,t);Oc(u,W);break e}}u=u.return}while(u!==null)}Bd(n)}catch(le){t=le,it===n&&n!==null&&(it=n=n.return);continue}break}while(!0)}function Vd(){var e=vl.current;return vl.current=cl,e===null?cl:e}function _s(){(at===0||at===3||at===2)&&(at=4),dt===null||(wr&268435455)===0&&(gl&268435455)===0||qn(dt,gt)}function El(e,t){var n=_e;_e|=2;var i=Vd();(dt!==e||gt!==t)&&(bn=null,kr(e,t));do try{yh();break}catch(a){jd(e,a)}while(!0);if(Ia(),_e=n,vl.current=i,it!==null)throw Error(l(261));return dt=null,gt=0,at}function yh(){for(;it!==null;)Hd(it)}function xh(){for(;it!==null&&!Eo();)Hd(it)}function Hd(e){var t=Kd(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Bd(e):it=t,gs.current=null}function Bd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=dh(n,t,It),n!==null){it=n;return}}else{if(n=fh(n,t),n!==null){n.flags&=32767,it=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,it=null;return}}if(t=t.sibling,t!==null){it=t;return}it=t=e}while(t!==null);at===0&&(at=5)}function Er(e,t,n){var i=Ne,a=Yt.transition;try{Yt.transition=null,Ne=1,wh(e,t,n,i)}finally{Yt.transition=a,Ne=i}return null}function wh(e,t,n,i){do so();while(Yn!==null);if((_e&6)!==0)throw Error(l(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var u=n.lanes|n.childLanes;if(em(e,u),e===dt&&(it=dt=null,gt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xl||(xl=!0,Gd(tt,function(){return so(),null})),u=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||u){u=Yt.transition,Yt.transition=null;var f=Ne;Ne=1;var v=_e;_e|=4,gs.current=null,mh(e,n),Dd(n,e),Um(_a),Di=!!ba,_a=ba=null,e.current=n,hh(n),fr(),_e=v,Ne=f,Yt.transition=u}else e.current=n;if(xl&&(xl=!1,Yn=e,wl=a),u=e.pendingLanes,u===0&&(Gn=null),Pi(n.stateNode),zt(e,ze()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(yl)throw yl=!1,e=ws,ws=null,e;return(wl&1)!==0&&e.tag!==0&&so(),u=e.pendingLanes,(u&1)!==0?e===Ss?ti++:(ti=0,Ss=e):ti=0,Bn(),null}function so(){if(Yn!==null){var e=$u(wl),t=Yt.transition,n=Ne;try{if(Yt.transition=null,Ne=16>e?16:e,Yn===null)var i=!1;else{if(e=Yn,Yn=null,wl=0,(_e&6)!==0)throw Error(l(331));var a=_e;for(_e|=4,te=e.current;te!==null;){var u=te,f=u.child;if((te.flags&16)!==0){var v=u.deletions;if(v!==null){for(var y=0;y<v.length;y++){var z=v[y];for(te=z;te!==null;){var j=te;switch(j.tag){case 0:case 11:case 15:Jo(8,j,u)}var B=j.child;if(B!==null)B.return=j,te=B;else for(;te!==null;){j=te;var U=j.sibling,J=j.return;if(Td(j),j===z){te=null;break}if(U!==null){U.return=J,te=U;break}te=J}}}var ne=u.alternate;if(ne!==null){var ie=ne.child;if(ie!==null){ne.child=null;do{var nt=ie.sibling;ie.sibling=null,ie=nt}while(ie!==null)}}te=u}}if((u.subtreeFlags&2064)!==0&&f!==null)f.return=u,te=f;else e:for(;te!==null;){if(u=te,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Jo(9,u,u.return)}var P=u.sibling;if(P!==null){P.return=u.return,te=P;break e}te=u.return}}var w=e.current;for(te=w;te!==null;){f=te;var L=f.child;if((f.subtreeFlags&2064)!==0&&L!==null)L.return=f,te=L;else e:for(f=w;te!==null;){if(v=te,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:hl(9,v)}}catch(le){Je(v,v.return,le)}if(v===f){te=null;break e}var W=v.sibling;if(W!==null){W.return=v.return,te=W;break e}te=v.return}}if(_e=a,Bn(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(je,e)}catch{}i=!0}return i}finally{Ne=n,Yt.transition=t}}return!1}function Wd(e,t,n){t=oo(n,t),t=ud(e,t,1),e=Qn(e,t,1),t=Ct(),e!==null&&(bo(e,1,t),zt(e,t))}function Je(e,t,n){if(e.tag===3)Wd(e,e,n);else for(;t!==null;){if(t.tag===3){Wd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gn===null||!Gn.has(i))){e=oo(n,e),e=cd(t,e,1),t=Qn(t,e,1),e=Ct(),t!==null&&(bo(t,1,e),zt(t,e));break}}t=t.return}}function Sh(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&n,dt===e&&(gt&n)===n&&(at===4||at===3&&(gt&130023424)===gt&&500>ze()-xs?kr(e,0):ys|=n),zt(e,t)}function Qd(e,t){t===0&&((e.mode&1)===0?t=1:(t=Li,Li<<=1,(Li&130023424)===0&&(Li=4194304)));var n=Ct();e=kn(e,t),e!==null&&(bo(e,t,n),zt(e,n))}function kh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qd(e,n)}function Eh(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(l(314))}i!==null&&i.delete(t),Qd(e,n)}var Kd;Kd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rt.current)Tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Tt=!1,ch(e,t,n);Tt=(e.flags&131072)!==0}else Tt=!1,Qe&&(t.flags&1048576)!==0&&_c(t,Ji,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;pl(e,t),e=t.pendingProps;var a=Xr(t,xt.current);no(t,n),a=Xa(null,t,i,e,a,n);var u=qa();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(i)?(u=!0,Yi(t)):u=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ha(t),a.updater=dl,t.stateNode=a,a._reactInternals=t,rs(t,i,e,n),t=as(null,t,i,!0,u,n)):(t.tag=0,Qe&&u&&Na(t),Et(null,t,a,n),t=t.child),t;case 16:i=t.elementType;e:{switch(pl(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=bh(i),e=nn(i,e),a){case 0:t=ls(null,t,i,e,n);break e;case 1:t=xd(null,t,i,e,n);break e;case 11:t=md(null,t,i,e,n);break e;case 14:t=hd(null,t,i,nn(i.type,e),n);break e}throw Error(l(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:nn(i,a),ls(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:nn(i,a),xd(e,t,i,a,n);case 3:e:{if(wd(t),e===null)throw Error(l(387));i=t.pendingProps,u=t.memoizedState,a=u.element,Mc(e,t),ol(t,i,null,n);var f=t.memoizedState;if(i=f.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){a=oo(Error(l(423)),t),t=Sd(e,t,i,n,a);break e}else if(i!==a){a=oo(Error(l(424)),t),t=Sd(e,t,i,n,a);break e}else for(Ft=jn(t.stateNode.containerInfo.firstChild),At=t,Qe=!0,tn=null,n=Nc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),i===a){t=Cn(e,t,n);break e}Et(e,t,i,n)}t=t.child}return t;case 5:return Fc(t),e===null&&Oa(t),i=t.type,a=t.pendingProps,u=e!==null?e.memoizedProps:null,f=a.children,Ra(i,a)?f=null:u!==null&&Ra(i,u)&&(t.flags|=32),yd(e,t),Et(e,t,f,n),t.child;case 6:return e===null&&Oa(t),null;case 13:return kd(e,t,n);case 4:return Ba(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=eo(t,null,i,n):Et(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:nn(i,a),md(e,t,i,a,n);case 7:return Et(e,t,t.pendingProps,n),t.child;case 8:return Et(e,t,t.pendingProps.children,n),t.child;case 12:return Et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,u=t.memoizedProps,f=a.value,Ie(tl,i._currentValue),i._currentValue=f,u!==null)if(en(u.value,f)){if(u.children===a.children&&!Rt.current){t=Cn(e,t,n);break e}}else for(u=t.child,u!==null&&(u.return=t);u!==null;){var v=u.dependencies;if(v!==null){f=u.child;for(var y=v.firstContext;y!==null;){if(y.context===i){if(u.tag===1){y=En(-1,n&-n),y.tag=2;var z=u.updateQueue;if(z!==null){z=z.shared;var j=z.pending;j===null?y.next=y:(y.next=j.next,j.next=y),z.pending=y}}u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),ja(u.return,n,t),v.lanes|=n;break}y=y.next}}else if(u.tag===10)f=u.type===t.type?null:u.child;else if(u.tag===18){if(f=u.return,f===null)throw Error(l(341));f.lanes|=n,v=f.alternate,v!==null&&(v.lanes|=n),ja(f,n,t),f=u.sibling}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===t){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}Et(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,no(t,n),a=Kt(a),i=i(a),t.flags|=1,Et(e,t,i,n),t.child;case 14:return i=t.type,a=nn(i,t.pendingProps),a=nn(i.type,a),hd(e,t,i,a,n);case 15:return vd(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:nn(i,a),pl(e,t),t.tag=1,Pt(i)?(e=!0,Yi(t)):e=!1,no(t,n),ad(t,i,a),rs(t,i,a,n),as(null,t,i,!0,e,n);case 19:return Cd(e,t,n);case 22:return gd(e,t,n)}throw Error(l(156,t.tag))};function Gd(e,t){return Bt(e,t)}function Ch(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(e,t,n,i){return new Ch(e,t,n,i)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bh(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ke)return 11;if(e===qe)return 14}return 2}function Jn(e,t){var n=e.alternate;return n===null?(n=Xt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,i,a,u){var f=2;if(i=e,typeof e=="function")Rs(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case ae:return Cr(n.children,a,u,t);case fe:f=8,a|=8;break;case se:return e=Xt(12,n,t,a|2),e.elementType=se,e.lanes=u,e;case Ze:return e=Xt(13,n,t,a),e.elementType=Ze,e.lanes=u,e;case Xe:return e=Xt(19,n,t,a),e.elementType=Xe,e.lanes=u,e;case Pe:return bl(n,a,u,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:f=10;break e;case Me:f=9;break e;case Ke:f=11;break e;case qe:f=14;break e;case Ee:f=16,i=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=Xt(f,n,t,a),t.elementType=e,t.type=i,t.lanes=u,t}function Cr(e,t,n,i){return e=Xt(7,e,i,t),e.lanes=n,e}function bl(e,t,n,i){return e=Xt(22,e,i,t),e.elementType=Pe,e.lanes=n,e.stateNode={isHidden:!1},e}function Ps(e,t,n){return e=Xt(6,e,null,t),e.lanes=n,e}function Ts(e,t,n){return t=Xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _h(e,t,n,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ls(e,t,n,i,a,u,f,v,y){return e=new _h(e,t,n,v,y),t===1?(t=1,u===!0&&(t|=8)):t=0,u=Xt(3,null,null,t),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ha(u),e}function Rh(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Yd(e){if(!e)return Hn;e=e._reactInternals;e:{if(Ue(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Ec(e,n,t)}return t}function Xd(e,t,n,i,a,u,f,v,y){return e=Ls(n,i,!0,e,a,u,f,v,y),e.context=Yd(null),n=e.current,i=Ct(),a=Xn(n),u=En(i,a),u.callback=t??null,Qn(n,u,a),e.current.lanes=a,bo(e,a,i),zt(e,i),e}function _l(e,t,n,i){var a=t.current,u=Ct(),f=Xn(a);return n=Yd(n),t.context===null?t.context=n:t.pendingContext=n,t=En(u,f),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Qn(a,t,f),e!==null&&(ln(e,a,f,u),rl(e,a,f)),f}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zs(e,t){qd(e,t),(e=e.alternate)&&qd(e,t)}function Ph(){return null}var Jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}Pl.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));_l(e,t,null,null)},Pl.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sr(function(){_l(null,e,null,null)}),t[yn]=null}};function Pl(e){this._internalRoot=e}Pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&Fu(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zd(){}function Th(e,t,n,i,a){if(a){if(typeof i=="function"){var u=i;i=function(){var z=Rl(f);u.call(z)}}var f=Xd(t,i,e,0,null,!1,!1,"",Zd);return e._reactRootContainer=f,e[yn]=f.current,Io(e.nodeType===8?e.parentNode:e),Sr(),f}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var v=i;i=function(){var z=Rl(y);v.call(z)}}var y=Ls(e,0,!1,null,null,!1,!1,"",Zd);return e._reactRootContainer=y,e[yn]=y.current,Io(e.nodeType===8?e.parentNode:e),Sr(function(){_l(t,y,n,i)}),y}function Ll(e,t,n,i,a){var u=n._reactRootContainer;if(u){var f=u;if(typeof a=="function"){var v=a;a=function(){var y=Rl(f);v.call(y)}}_l(t,f,e,a)}else f=Th(n,t,e,a,i);return Rl(f)}Nu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Co(t.pendingLanes);n!==0&&(ra(t,n|1),zt(t,ze()),(_e&6)===0&&(ao=ze()+500,Bn()))}break;case 13:Sr(function(){var i=kn(e,1);if(i!==null){var a=Ct();ln(i,e,1,a)}}),zs(e,1)}},oa=function(e){if(e.tag===13){var t=kn(e,134217728);if(t!==null){var n=Ct();ln(t,e,134217728,n)}zs(e,134217728)}},Du=function(e){if(e.tag===13){var t=Xn(e),n=kn(e,t);if(n!==null){var i=Ct();ln(n,e,t,i)}zs(e,t)}},Mu=function(){return Ne},Ou=function(e,t){var n=Ne;try{return Ne=e,t()}finally{Ne=n}},So=function(e,t,n){switch(t){case"input":if(Dr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ki(i);if(!a)throw Error(l(90));ot(i),Dr(i,a)}}}break;case"textarea":yo(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}},_i=Cs,Ri=Sr;var Lh={usingClientEntryPoint:!1,Events:[Vo,Gr,Ki,cr,dr,Cs]},ni={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zh={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gn(e),e===null?null:e.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||Ph,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zl.isDisabled&&zl.supportsFiber)try{je=zl.inject(zh),ht=zl}catch{}}return $t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh,$t.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(l(200));return Rh(e,t,null,n)},$t.createRoot=function(e,t){if(!Ns(e))throw Error(l(299));var n=!1,i="",a=Jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ls(e,1,!1,null,null,n,!1,i,a),e[yn]=t.current,Io(e.nodeType===8?e.parentNode:e),new $s(t)},$t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=gn(t),e=e===null?null:e.stateNode,e},$t.flushSync=function(e){return Sr(e)},$t.hydrate=function(e,t,n){if(!Tl(t))throw Error(l(200));return Ll(null,e,t,!0,n)},$t.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(l(405));var i=n!=null&&n.hydratedSources||null,a=!1,u="",f=Jd;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError)),t=Xd(t,null,e,1,n??null,a,!1,u,f),e[yn]=t.current,Io(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Pl(t)},$t.render=function(e,t,n){if(!Tl(t))throw Error(l(200));return Ll(null,e,t,!1,n)},$t.unmountComponentAtNode=function(e){if(!Tl(e))throw Error(l(40));return e._reactRootContainer?(Sr(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[yn]=null})}),!0):!1},$t.unstable_batchedUpdates=Cs,$t.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Tl(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ll(e,t,n,!1,i)},$t.version="18.3.1-next-f1338f8080-20240426",$t}var lf;function Jf(){if(lf)return Ms.exports;lf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),Ms.exports=Oh(),Ms.exports}var af;function Ah(){if(af)return $l;af=1;var o=Jf();return $l.createRoot=o.createRoot,$l.hydrateRoot=o.hydrateRoot,$l}var Fh=Ah(),ri={},sf;function Ih(){if(sf)return ri;sf=1,Object.defineProperty(ri,"__esModule",{value:!0}),ri.parse=p,ri.serialize=g;const o=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,l=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,c=Object.prototype.toString,d=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function p(E,b){const N=new d,O=E.length;if(O<2)return N;const M=b?.decode||S;let I=0;do{const Q=E.indexOf("=",I);if(Q===-1)break;const A=E.indexOf(";",I),X=A===-1?O:A;if(Q>X){I=E.lastIndexOf(";",Q-1)+1;continue}const ce=m(E,I,Q),_=h(E,Q,ce),ae=E.slice(ce,_);if(N[ae]===void 0){let fe=m(E,Q+1,X),se=h(E,X,fe);const xe=M(E.slice(fe,se));N[ae]=xe}I=X+1}while(I<O);return N}function m(E,b,N){do{const O=E.charCodeAt(b);if(O!==32&&O!==9)return b}while(++b<N);return N}function h(E,b,N){for(;b>N;){const O=E.charCodeAt(--b);if(O!==32&&O!==9)return b+1}return N}function g(E,b,N){const O=N?.encode||encodeURIComponent;if(!o.test(E))throw new TypeError(`argument name is invalid: ${E}`);const M=O(b);if(!r.test(M))throw new TypeError(`argument val is invalid: ${b}`);let I=E+"="+M;if(!N)return I;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);I+="; Max-Age="+N.maxAge}if(N.domain){if(!l.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);I+="; Domain="+N.domain}if(N.path){if(!s.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);I+="; Path="+N.path}if(N.expires){if(!C(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);I+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(I+="; HttpOnly"),N.secure&&(I+="; Secure"),N.partitioned&&(I+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":I+="; Priority=Low";break;case"medium":I+="; Priority=Medium";break;case"high":I+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":I+="; SameSite=Strict";break;case"lax":I+="; SameSite=Lax";break;case"none":I+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return I}function S(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function C(E){return c.call(E)==="[object Date]"}return ri}Ih();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var uf="popstate";function Uh(o={}){function r(s,c){let{pathname:d,search:p,hash:m}=s.location;return di("",{pathname:d,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function l(s,c){return typeof c=="string"?c:nr(c)}return Vh(r,l,null,o)}function Ce(o,r){if(o===!1||o===null||typeof o>"u")throw new Error(r)}function yt(o,r){if(!o){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function jh(){return Math.random().toString(36).substring(2,10)}function cf(o,r){return{usr:o.state,key:o.key,idx:r}}function di(o,r,l=null,s){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof r=="string"?rr(r):r,state:l,key:r&&r.key||s||jh()}}function nr({pathname:o="/",search:r="",hash:l=""}){return r&&r!=="?"&&(o+=r.charAt(0)==="?"?r:"?"+r),l&&l!=="#"&&(o+=l.charAt(0)==="#"?l:"#"+l),o}function rr(o){let r={};if(o){let l=o.indexOf("#");l>=0&&(r.hash=o.substring(l),o=o.substring(0,l));let s=o.indexOf("?");s>=0&&(r.search=o.substring(s),o=o.substring(0,s)),o&&(r.pathname=o)}return r}function Vh(o,r,l,s={}){let{window:c=document.defaultView,v5Compat:d=!1}=s,p=c.history,m="POP",h=null,g=S();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function S(){return(p.state||{idx:null}).idx}function C(){m="POP";let M=S(),I=M==null?null:M-g;g=M,h&&h({action:m,location:O.location,delta:I})}function E(M,I){m="PUSH";let Q=di(O.location,M,I);g=S()+1;let A=cf(Q,g),X=O.createHref(Q);try{p.pushState(A,"",X)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;c.location.assign(X)}d&&h&&h({action:m,location:O.location,delta:1})}function b(M,I){m="REPLACE";let Q=di(O.location,M,I);g=S();let A=cf(Q,g),X=O.createHref(Q);p.replaceState(A,"",X),d&&h&&h({action:m,location:O.location,delta:0})}function N(M){let I=c.location.origin!=="null"?c.location.origin:c.location.href,Q=typeof M=="string"?M:nr(M);return Q=Q.replace(/ $/,"%20"),Ce(I,`No window.location.(origin|href) available to create URL for href: ${Q}`),new URL(Q,I)}let O={get action(){return m},get location(){return o(c,p)},listen(M){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(uf,C),h=M,()=>{c.removeEventListener(uf,C),h=null}},createHref(M){return r(c,M)},createURL:N,encodeLocation(M){let I=N(M);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:E,replace:b,go(M){return p.go(M)}};return O}var Hh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Bh(o){return o.index===!0}function Ul(o,r,l=[],s={}){return o.map((c,d)=>{let p=[...l,String(d)],m=typeof c.id=="string"?c.id:p.join("-");if(Ce(c.index!==!0||!c.children,"Cannot specify children on an index route"),Ce(!s[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),Bh(c)){let h={...c,...r(c),id:m};return s[m]=h,h}else{let h={...c,...r(c),id:m,children:void 0};return s[m]=h,c.children&&(h.children=Ul(c.children,r,p,s)),h}})}function Rn(o,r,l="/"){return Ol(o,r,l,!1)}function Ol(o,r,l,s){let c=typeof r=="string"?rr(r):r,d=jt(c.pathname||"/",l);if(d==null)return null;let p=Zf(o);Qh(p);let m=null;for(let h=0;m==null&&h<p.length;++h){let g=rv(d);m=tv(p[h],g,s)}return m}function Wh(o,r){let{route:l,pathname:s,params:c}=o;return{id:l.id,pathname:s,params:c,data:r[l.id],handle:l.handle}}function Zf(o,r=[],l=[],s=""){let c=(d,p,m)=>{let h={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};h.relativePath.startsWith("/")&&(Ce(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length));let g=pn([s,h.relativePath]),S=l.concat(h);d.children&&d.children.length>0&&(Ce(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Zf(d.children,r,S,g)),!(d.path==null&&!d.index)&&r.push({path:g,score:Zh(g,d.index),routesMeta:S})};return o.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))c(d,p);else for(let m of ep(d.path))c(d,p,m)}),r}function ep(o){let r=o.split("/");if(r.length===0)return[];let[l,...s]=r,c=l.endsWith("?"),d=l.replace(/\?$/,"");if(s.length===0)return c?[d,""]:[d];let p=ep(s.join("/")),m=[];return m.push(...p.map(h=>h===""?d:[d,h].join("/"))),c&&m.push(...p),m.map(h=>o.startsWith("/")&&h===""?"/":h)}function Qh(o){o.sort((r,l)=>r.score!==l.score?l.score-r.score:ev(r.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}var Kh=/^:[\w-]+$/,Gh=3,Yh=2,Xh=1,qh=10,Jh=-2,df=o=>o==="*";function Zh(o,r){let l=o.split("/"),s=l.length;return l.some(df)&&(s+=Jh),r&&(s+=Yh),l.filter(c=>!df(c)).reduce((c,d)=>c+(Kh.test(d)?Gh:d===""?Xh:qh),s)}function ev(o,r){return o.length===r.length&&o.slice(0,-1).every((s,c)=>s===r[c])?o[o.length-1]-r[r.length-1]:0}function tv(o,r,l=!1){let{routesMeta:s}=o,c={},d="/",p=[];for(let m=0;m<s.length;++m){let h=s[m],g=m===s.length-1,S=d==="/"?r:r.slice(d.length)||"/",C=jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},S),E=h.route;if(!C&&g&&l&&!s[s.length-1].route.index&&(C=jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},S)),!C)return null;Object.assign(c,C.params),p.push({params:c,pathname:pn([d,C.pathname]),pathnameBase:lv(pn([d,C.pathnameBase])),route:E}),C.pathnameBase!=="/"&&(d=pn([d,C.pathnameBase]))}return p}function jl(o,r){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[l,s]=nv(o.path,o.caseSensitive,o.end),c=r.match(l);if(!c)return null;let d=c[0],p=d.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:s.reduce((g,{paramName:S,isOptional:C},E)=>{if(S==="*"){let N=m[E]||"";p=d.slice(0,d.length-N.length).replace(/(.)\/+$/,"$1")}const b=m[E];return C&&!b?g[S]=void 0:g[S]=(b||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:p,pattern:o}}function nv(o,r=!1,l=!0){yt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let s=[],c="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,m,h)=>(s.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(s.push({paramName:"*"}),c+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?c+="\\/*$":o!==""&&o!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),s]}function rv(o){try{return o.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return yt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),o}}function jt(o,r){if(r==="/")return o;if(!o.toLowerCase().startsWith(r.toLowerCase()))return null;let l=r.endsWith("/")?r.length-1:r.length,s=o.charAt(l);return s&&s!=="/"?null:o.slice(l)||"/"}function ov(o,r="/"){let{pathname:l,search:s="",hash:c=""}=typeof o=="string"?rr(o):o;return{pathname:l?l.startsWith("/")?l:iv(l,r):r,search:av(s),hash:sv(c)}}function iv(o,r){let l=r.replace(/\/+$/,"").split("/");return o.split("/").forEach(c=>{c===".."?l.length>1&&l.pop():c!=="."&&l.push(c)}),l.length>1?l.join("/"):"/"}function Fs(o,r,l,s){return`Cannot include a '${o}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tp(o){return o.filter((r,l)=>l===0||r.route.path&&r.route.path.length>0)}function lu(o){let r=tp(o);return r.map((l,s)=>s===r.length-1?l.pathname:l.pathnameBase)}function au(o,r,l,s=!1){let c;typeof o=="string"?c=rr(o):(c={...o},Ce(!c.pathname||!c.pathname.includes("?"),Fs("?","pathname","search",c)),Ce(!c.pathname||!c.pathname.includes("#"),Fs("#","pathname","hash",c)),Ce(!c.search||!c.search.includes("#"),Fs("#","search","hash",c)));let d=o===""||c.pathname==="",p=d?"/":c.pathname,m;if(p==null)m=l;else{let C=r.length-1;if(!s&&p.startsWith("..")){let E=p.split("/");for(;E[0]==="..";)E.shift(),C-=1;c.pathname=E.join("/")}m=C>=0?r[C]:"/"}let h=ov(c,m),g=p&&p!=="/"&&p.endsWith("/"),S=(d||p===".")&&l.endsWith("/");return!h.pathname.endsWith("/")&&(g||S)&&(h.pathname+="/"),h}var pn=o=>o.join("/").replace(/\/\/+/g,"/"),lv=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),av=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,sv=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Vl=class{constructor(o,r,l,s=!1){this.status=o,this.statusText=r||"",this.internal=s,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function fi(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}var np=["POST","PUT","PATCH","DELETE"],uv=new Set(np),cv=["GET",...np],dv=new Set(cv),fv=new Set([301,302,303,307,308]),pv=new Set([307,308]),Is={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},fo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},su=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hv=o=>({hasErrorBoundary:!!o.hasErrorBoundary}),rp="remix-router-transitions",op=Symbol("ResetLoaderData");function vv(o){const r=o.window?o.window:typeof window<"u"?window:void 0,l=typeof r<"u"&&typeof r.document<"u"&&typeof r.document.createElement<"u";Ce(o.routes.length>0,"You must provide a non-empty routes array to createRouter");let s=o.mapRouteProperties||hv,c={},d=Ul(o.routes,s,void 0,c),p,m=o.basename||"/",h=o.dataStrategy||Sv,g=o.patchRoutesOnNavigation,S={...o.future},C=null,E=new Set,b=null,N=null,O=null,M=o.hydrationData!=null,I=Rn(d,o.history.location,m),Q=!1,A=null;if(I==null&&!g){let x=qt(404,{pathname:o.history.location.pathname}),{matches:R,route:$}=kf(d);I=R,A={[$.id]:x}}I&&!o.hydrationData&&cr(I,d,o.history.location.pathname).active&&(I=null);let X;if(I)if(I.some(x=>x.route.lazy))X=!1;else if(!I.some(x=>x.route.loader))X=!0;else{let x=o.hydrationData?o.hydrationData.loaderData:null,R=o.hydrationData?o.hydrationData.errors:null;if(R){let $=I.findIndex(H=>R[H.route.id]!==void 0);X=I.slice(0,$+1).every(H=>!Js(H.route,x,R))}else X=I.every($=>!Js($.route,x,R))}else{X=!1,I=[];let x=cr(null,d,o.history.location.pathname);x.active&&x.matches&&(Q=!0,I=x.matches)}let ce,_={historyAction:o.history.action,location:o.history.location,matches:I,initialized:X,navigation:Is,restoreScrollPosition:o.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:o.hydrationData&&o.hydrationData.loaderData||{},actionData:o.hydrationData&&o.hydrationData.actionData||null,errors:o.hydrationData&&o.hydrationData.errors||A,fetchers:new Map,blockers:new Map},ae="POP",fe=!1,se,xe=!1,Me=new Map,Ke=null,Ze=!1,Xe=!1,qe=new Set,Ee=new Map,Pe=0,K=-1,re=new Map,Y=new Set,k=new Map,F=new Map,de=new Set,ve=new Map,we,Se=null;function be(){if(C=o.history.listen(({action:x,location:R,delta:$})=>{if(we){we(),we=void 0;return}yt(ve.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=Fr({currentLocation:_.location,nextLocation:R,historyAction:x});if(H&&$!=null){let q=new Promise(ue=>{we=ue});o.history.go($*-1),Ln(H,{state:"blocked",location:R,proceed(){Ln(H,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),q.then(()=>o.history.go($))},reset(){let ue=new Map(_.blockers);ue.set(H,fo),Z({blockers:ue})}});return}return ut(x,R)}),l){$v(r,Me);let x=()=>Nv(r,Me);r.addEventListener("pagehide",x),Ke=()=>r.removeEventListener("pagehide",x)}return _.initialized||ut("POP",_.location,{initialHydration:!0}),ce}function D(){C&&C(),Ke&&Ke(),E.clear(),se&&se.abort(),_.fetchers.forEach((x,R)=>Or(R)),_.blockers.forEach((x,R)=>Ar(R))}function V(x){return E.add(x),()=>E.delete(x)}function Z(x,R={}){_={..._,...x};let $=[],H=[];_.fetchers.forEach((q,ue)=>{q.state==="idle"&&(de.has(ue)?$.push(ue):H.push(ue))}),de.forEach(q=>{!_.fetchers.has(q)&&!Ee.has(q)&&$.push(q)}),[...E].forEach(q=>q(_,{deletedFetchers:$,viewTransitionOpts:R.viewTransitionOpts,flushSync:R.flushSync===!0})),$.forEach(q=>Or(q)),H.forEach(q=>_.fetchers.delete(q))}function Oe(x,R,{flushSync:$}={}){let H=_.actionData!=null&&_.navigation.formMethod!=null&&sn(_.navigation.formMethod)&&_.navigation.state==="loading"&&x.state?._isRedirect!==!0,q;R.actionData?Object.keys(R.actionData).length>0?q=R.actionData:q=null:H?q=_.actionData:q=null;let ue=R.loaderData?wf(_.loaderData,R.loaderData,R.matches||[],R.errors):_.loaderData,he=_.blockers;he.size>0&&(he=new Map(he),he.forEach((G,ye)=>he.set(ye,fo)));let ee=fe===!0||_.navigation.formMethod!=null&&sn(_.navigation.formMethod)&&x.state?._isRedirect!==!0;p&&(d=p,p=void 0),Ze||ae==="POP"||(ae==="PUSH"?o.history.push(x,x.state):ae==="REPLACE"&&o.history.replace(x,x.state));let oe;if(ae==="POP"){let G=Me.get(_.location.pathname);G&&G.has(x.pathname)?oe={currentLocation:_.location,nextLocation:x}:Me.has(x.pathname)&&(oe={currentLocation:x,nextLocation:_.location})}else if(xe){let G=Me.get(_.location.pathname);G?G.add(x.pathname):(G=new Set([x.pathname]),Me.set(_.location.pathname,G)),oe={currentLocation:_.location,nextLocation:x}}Z({...R,actionData:q,loaderData:ue,historyAction:ae,location:x,initialized:!0,navigation:Is,revalidation:"idle",restoreScrollPosition:ko(x,R.matches||_.matches),preventScrollReset:ee,blockers:he},{viewTransitionOpts:oe,flushSync:$===!0}),ae="POP",fe=!1,xe=!1,Ze=!1,Xe=!1,Se?.resolve(),Se=null}async function ot(x,R){if(typeof x=="number"){o.history.go(x);return}let $=qs(_.location,_.matches,m,x,R?.fromRouteId,R?.relative),{path:H,submission:q,error:ue}=ff(!1,$,R),he=_.location,ee=di(_.location,H,R&&R.state);ee={...ee,...o.history.encodeLocation(ee)};let oe=R&&R.replace!=null?R.replace:void 0,G="PUSH";oe===!0?G="REPLACE":oe===!1||q!=null&&sn(q.formMethod)&&q.formAction===_.location.pathname+_.location.search&&(G="REPLACE");let ye=R&&"preventScrollReset"in R?R.preventScrollReset===!0:void 0,Te=(R&&R.flushSync)===!0,We=Fr({currentLocation:he,nextLocation:ee,historyAction:G});if(We){Ln(We,{state:"blocked",location:ee,proceed(){Ln(We,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),ot(x,R)},reset(){let Ue=new Map(_.blockers);Ue.set(We,fo),Z({blockers:Ue})}});return}await ut(G,ee,{submission:q,pendingError:ue,preventScrollReset:ye,replace:R&&R.replace,enableViewTransition:R&&R.viewTransition,flushSync:Te})}function Be(){Se||(Se=Dv()),Mr(),Z({revalidation:"loading"});let x=Se.promise;return _.navigation.state==="submitting"?x:_.navigation.state==="idle"?(ut(_.historyAction,_.location,{startUninterruptedRevalidation:!0}),x):(ut(ae||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation,enableViewTransition:xe===!0}),x)}async function ut(x,R,$){se&&se.abort(),se=null,ae=x,Ze=($&&$.startUninterruptedRevalidation)===!0,zn(_.location,_.matches),fe=($&&$.preventScrollReset)===!0,xe=($&&$.enableViewTransition)===!0;let H=p||d,q=$&&$.overrideNavigation,ue=$?.initialHydration&&_.matches&&_.matches.length>0&&!Q?_.matches:Rn(H,R,m),he=($&&$.flushSync)===!0;if(ue&&_.initialized&&!Xe&&Rv(_.location,R)&&!($&&$.submission&&sn($.submission.formMethod))){Oe(R,{matches:ue},{flushSync:he});return}let ee=cr(ue,H,R.pathname);if(ee.active&&ee.matches&&(ue=ee.matches),!ue){let{error:Fe,notFoundMatches:De,route:et}=ur(R.pathname);Oe(R,{matches:De,loaderData:{},errors:{[et.id]:Fe}},{flushSync:he});return}se=new AbortController;let oe=uo(o.history,R,se.signal,$&&$.submission),G;if($&&$.pendingError)G=[_r(ue).route.id,{type:"error",error:$.pendingError}];else if($&&$.submission&&sn($.submission.formMethod)){let Fe=await ki(oe,R,$.submission,ue,ee.active,{replace:$.replace,flushSync:he});if(Fe.shortCircuited)return;if(Fe.pendingActionResult){let[De,et]=Fe.pendingActionResult;if(Ut(et)&&fi(et.error)&&et.error.status===404){se=null,Oe(R,{matches:Fe.matches,loaderData:{},errors:{[De]:et.error}});return}}ue=Fe.matches||ue,G=Fe.pendingActionResult,q=Us(R,$.submission),he=!1,ee.active=!1,oe=uo(o.history,oe.url,oe.signal)}let{shortCircuited:ye,matches:Te,loaderData:We,errors:Ue}=await Ei(oe,R,ue,ee.active,q,$&&$.submission,$&&$.fetcherSubmission,$&&$.replace,$&&$.initialHydration===!0,he,G);ye||(se=null,Oe(R,{matches:Te||ue,...Sf(G),loaderData:We,errors:Ue}))}async function ki(x,R,$,H,q,ue={}){Mr();let he=Lv(R,$);if(Z({navigation:he},{flushSync:ue.flushSync===!0}),q){let G=await dr(H,R.pathname,x.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let ye=_r(G.partialMatches).route.id;return{matches:G.partialMatches,pendingActionResult:[ye,{type:"error",error:G.error}]}}else if(G.matches)H=G.matches;else{let{notFoundMatches:ye,error:Te,route:We}=ur(R.pathname);return{matches:ye,pendingActionResult:[We.id,{type:"error",error:Te}]}}}let ee,oe=si(H,R);if(!oe.route.action&&!oe.route.lazy)ee={type:"error",error:qt(405,{method:x.method,pathname:R.pathname,routeId:oe.route.id})};else if(ee=(await Tn("action",_,x,[oe],H,null))[oe.route.id],x.signal.aborted)return{shortCircuited:!0};if(Rr(ee)){let G;return ue&&ue.replace!=null?G=ue.replace:G=gf(ee.response.headers.get("Location"),new URL(x.url),m)===_.location.pathname+_.location.search,await Jt(x,ee,!0,{submission:$,replace:G}),{shortCircuited:!0}}if(Ut(ee)){let G=_r(H,oe.route.id);return(ue&&ue.replace)!==!0&&(ae="PUSH"),{matches:H,pendingActionResult:[G.route.id,ee]}}return{matches:H,pendingActionResult:[oe.route.id,ee]}}async function Ei(x,R,$,H,q,ue,he,ee,oe,G,ye){let Te=q||Us(R,ue),We=ue||he||Cf(Te),Ue=!Ze&&!oe;if(H){if(Ue){let tt=Dr(ye);Z({navigation:Te,...tt!==void 0?{actionData:tt}:{}},{flushSync:G})}let $e=await dr($,R.pathname,x.signal);if($e.type==="aborted")return{shortCircuited:!0};if($e.type==="error"){let tt=_r($e.partialMatches).route.id;return{matches:$e.partialMatches,loaderData:{},errors:{[tt]:$e.error}}}else if($e.matches)$=$e.matches;else{let{error:tt,notFoundMatches:Ur,route:Dn}=ur(R.pathname);return{matches:Ur,loaderData:{},errors:{[Dn.id]:tt}}}}let Fe=p||d,[De,et]=mf(o.history,_,$,We,R,oe===!0,Xe,qe,de,k,Y,Fe,m,ye);if(K=++Pe,De.length===0&&et.length===0){let $e=xo();return Oe(R,{matches:$,loaderData:{},errors:ye&&Ut(ye[1])?{[ye[0]]:ye[1].error}:null,...Sf(ye),...$e?{fetchers:new Map(_.fetchers)}:{}},{flushSync:G}),{shortCircuited:!0}}if(Ue){let $e={};if(!H){$e.navigation=Te;let tt=Dr(ye);tt!==void 0&&($e.actionData=tt)}et.length>0&&($e.fetchers=Ci(et)),Z($e,{flushSync:G})}et.forEach($e=>{_t($e.key),$e.controller&&Ee.set($e.key,$e.controller)});let gn=()=>et.forEach($e=>_t($e.key));se&&se.signal.addEventListener("abort",gn);let{loaderResults:$n,fetcherResults:Bt}=await yo(_,$,De,et,x);if(x.signal.aborted)return{shortCircuited:!0};se&&se.signal.removeEventListener("abort",gn),et.forEach($e=>Ee.delete($e.key));let Dt=Nl($n);if(Dt)return await Jt(x,Dt.result,!0,{replace:ee}),{shortCircuited:!0};if(Dt=Nl(Bt),Dt)return Y.add(Dt.key),await Jt(x,Dt.result,!0,{replace:ee}),{shortCircuited:!0};let{loaderData:Eo,errors:fr}=xf(_,$,$n,ye,et,Bt);oe&&_.errors&&(fr={..._.errors,...fr});let ze=xo(),Ir=wo(K),Nn=ze||Ir||et.length>0;return{matches:$,loaderData:Eo,errors:fr,...Nn?{fetchers:new Map(_.fetchers)}:{}}}function Dr(x){if(x&&!Ut(x[1]))return{[x[0]]:x[1].data};if(_.actionData)return Object.keys(_.actionData).length===0?null:_.actionData}function Ci(x){return x.forEach(R=>{let $=_.fetchers.get(R.key),H=oi(void 0,$?$.data:void 0);_.fetchers.set(R.key,H)}),new Map(_.fetchers)}async function go(x,R,$,H){_t(x);let q=(H&&H.flushSync)===!0,ue=p||d,he=qs(_.location,_.matches,m,$,R,H?.relative),ee=Rn(ue,he,m),oe=cr(ee,ue,he);if(oe.active&&oe.matches&&(ee=oe.matches),!ee){Nt(x,R,qt(404,{pathname:he}),{flushSync:q});return}let{path:G,submission:ye,error:Te}=ff(!0,he,H);if(Te){Nt(x,R,Te,{flushSync:q});return}let We=si(ee,G),Ue=(H&&H.preventScrollReset)===!0;if(ye&&sn(ye.formMethod)){await lr(x,R,G,We,ee,oe.active,q,Ue,ye);return}k.set(x,{routeId:R,path:G}),await Pn(x,R,G,We,ee,oe.active,q,Ue,ye)}async function lr(x,R,$,H,q,ue,he,ee,oe){Mr(),k.delete(x);function G(je){if(!je.route.action&&!je.route.lazy){let ht=qt(405,{method:oe.formMethod,pathname:$,routeId:R});return Nt(x,R,ht,{flushSync:he}),!0}return!1}if(!ue&&G(H))return;let ye=_.fetchers.get(x);Zt(x,zv(oe,ye),{flushSync:he});let Te=new AbortController,We=uo(o.history,$,Te.signal,oe);if(ue){let je=await dr(q,$,We.signal);if(je.type==="aborted")return;if(je.type==="error"){Nt(x,R,je.error,{flushSync:he});return}else if(je.matches){if(q=je.matches,H=si(q,$),G(H))return}else{Nt(x,R,qt(404,{pathname:$}),{flushSync:he});return}}Ee.set(x,Te);let Ue=Pe,De=(await Tn("action",_,We,[H],q,x))[H.route.id];if(We.signal.aborted){Ee.get(x)===Te&&Ee.delete(x);return}if(de.has(x)){if(Rr(De)||Ut(De)){Zt(x,er(void 0));return}}else{if(Rr(De))if(Ee.delete(x),K>Ue){Zt(x,er(void 0));return}else return Y.add(x),Zt(x,oi(oe)),Jt(We,De,!1,{fetcherSubmission:oe,preventScrollReset:ee});if(Ut(De)){Nt(x,R,De.error);return}}let et=_.navigation.location||_.location,gn=uo(o.history,et,Te.signal),$n=p||d,Bt=_.navigation.state!=="idle"?Rn($n,_.navigation.location,m):_.matches;Ce(Bt,"Didn't find any matches after fetcher action");let Dt=++Pe;re.set(x,Dt);let Eo=oi(oe,De.data);_.fetchers.set(x,Eo);let[fr,ze]=mf(o.history,_,Bt,oe,et,!1,Xe,qe,de,k,Y,$n,m,[H.route.id,De]);ze.filter(je=>je.key!==x).forEach(je=>{let ht=je.key,Pi=_.fetchers.get(ht),Mt=oi(void 0,Pi?Pi.data:void 0);_.fetchers.set(ht,Mt),_t(ht),je.controller&&Ee.set(ht,je.controller)}),Z({fetchers:new Map(_.fetchers)});let Ir=()=>ze.forEach(je=>_t(je.key));Te.signal.addEventListener("abort",Ir);let{loaderResults:Nn,fetcherResults:$e}=await yo(_,Bt,fr,ze,gn);if(Te.signal.aborted)return;Te.signal.removeEventListener("abort",Ir),re.delete(x),Ee.delete(x),ze.forEach(je=>Ee.delete(je.key));let tt=Nl(Nn);if(tt)return Jt(gn,tt.result,!1,{preventScrollReset:ee});if(tt=Nl($e),tt)return Y.add(tt.key),Jt(gn,tt.result,!1,{preventScrollReset:ee});let{loaderData:Ur,errors:Dn}=xf(_,Bt,Nn,void 0,ze,$e);if(_.fetchers.has(x)){let je=er(De.data);_.fetchers.set(x,je)}wo(Dt),_.navigation.state==="loading"&&Dt>K?(Ce(ae,"Expected pending action"),se&&se.abort(),Oe(_.navigation.location,{matches:Bt,loaderData:Ur,errors:Dn,fetchers:new Map(_.fetchers)})):(Z({errors:Dn,loaderData:wf(_.loaderData,Ur,Bt,Dn),fetchers:new Map(_.fetchers)}),Xe=!1)}async function Pn(x,R,$,H,q,ue,he,ee,oe){let G=_.fetchers.get(x);Zt(x,oi(oe,G?G.data:void 0),{flushSync:he});let ye=new AbortController,Te=uo(o.history,$,ye.signal);if(ue){let De=await dr(q,$,Te.signal);if(De.type==="aborted")return;if(De.type==="error"){Nt(x,R,De.error,{flushSync:he});return}else if(De.matches)q=De.matches,H=si(q,$);else{Nt(x,R,qt(404,{pathname:$}),{flushSync:he});return}}Ee.set(x,ye);let We=Pe,Fe=(await Tn("loader",_,Te,[H],q,x))[H.route.id];if(Ee.get(x)===ye&&Ee.delete(x),!Te.signal.aborted){if(de.has(x)){Zt(x,er(void 0));return}if(Rr(Fe))if(K>We){Zt(x,er(void 0));return}else{Y.add(x),await Jt(Te,Fe,!1,{preventScrollReset:ee});return}if(Ut(Fe)){Nt(x,R,Fe.error);return}Zt(x,er(Fe.data))}}async function Jt(x,R,$,{submission:H,fetcherSubmission:q,preventScrollReset:ue,replace:he}={}){R.response.headers.has("X-Remix-Revalidate")&&(Xe=!0);let ee=R.response.headers.get("Location");Ce(ee,"Expected a Location header on the redirect Response"),ee=gf(ee,new URL(x.url),m);let oe=di(_.location,ee,{_isRedirect:!0});if(l){let Fe=!1;if(R.response.headers.has("X-Remix-Reload-Document"))Fe=!0;else if(su.test(ee)){const De=o.history.createURL(ee);Fe=De.origin!==r.location.origin||jt(De.pathname,m)==null}if(Fe){he?r.location.replace(ee):r.location.assign(ee);return}}se=null;let G=he===!0||R.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ye,formAction:Te,formEncType:We}=_.navigation;!H&&!q&&ye&&Te&&We&&(H=Cf(_.navigation));let Ue=H||q;if(pv.has(R.response.status)&&Ue&&sn(Ue.formMethod))await ut(G,oe,{submission:{...Ue,formAction:ee},preventScrollReset:ue||fe,enableViewTransition:$?xe:void 0});else{let Fe=Us(oe,H);await ut(G,oe,{overrideNavigation:Fe,fetcherSubmission:q,preventScrollReset:ue||fe,enableViewTransition:$?xe:void 0})}}async function Tn(x,R,$,H,q,ue){let he,ee={};try{he=await kv(h,x,R,$,H,q,ue,c,s)}catch(oe){return H.forEach(G=>{ee[G.route.id]={type:"error",error:oe}}),ee}for(let[oe,G]of Object.entries(he))if(Pv(G)){let ye=G.result;ee[oe]={type:"redirect",response:bv(ye,$,oe,q,m)}}else ee[oe]=await Cv(G);return ee}async function yo(x,R,$,H,q){let ue=Tn("loader",x,q,$,R,null),he=Promise.all(H.map(async G=>{if(G.matches&&G.match&&G.controller){let Te=(await Tn("loader",x,uo(o.history,G.path,G.controller.signal),[G.match],G.matches,G.key))[G.match.route.id];return{[G.key]:Te}}else return Promise.resolve({[G.key]:{type:"error",error:qt(404,{pathname:G.path})}})})),ee=await ue,oe=(await he).reduce((G,ye)=>Object.assign(G,ye),{});return{loaderResults:ee,fetcherResults:oe}}function Mr(){Xe=!0,k.forEach((x,R)=>{Ee.has(R)&&qe.add(R),_t(R)})}function Zt(x,R,$={}){_.fetchers.set(x,R),Z({fetchers:new Map(_.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Nt(x,R,$,H={}){let q=_r(_.matches,R);Or(x),Z({errors:{[q.route.id]:$},fetchers:new Map(_.fetchers)},{flushSync:(H&&H.flushSync)===!0})}function ar(x){return F.set(x,(F.get(x)||0)+1),de.has(x)&&de.delete(x),_.fetchers.get(x)||mv}function Or(x){let R=_.fetchers.get(x);Ee.has(x)&&!(R&&R.state==="loading"&&re.has(x))&&_t(x),k.delete(x),re.delete(x),Y.delete(x),de.delete(x),qe.delete(x),_.fetchers.delete(x)}function sr(x){let R=(F.get(x)||0)-1;R<=0?(F.delete(x),de.add(x)):F.set(x,R),Z({fetchers:new Map(_.fetchers)})}function _t(x){let R=Ee.get(x);R&&(R.abort(),Ee.delete(x))}function bi(x){for(let R of x){let $=ar(R),H=er($.data);_.fetchers.set(R,H)}}function xo(){let x=[],R=!1;for(let $ of Y){let H=_.fetchers.get($);Ce(H,`Expected fetcher: ${$}`),H.state==="loading"&&(Y.delete($),x.push($),R=!0)}return bi(x),R}function wo(x){let R=[];for(let[$,H]of re)if(H<x){let q=_.fetchers.get($);Ce(q,`Expected fetcher: ${$}`),q.state==="loading"&&(_t($),re.delete($),R.push($))}return bi(R),R.length>0}function ea(x,R){let $=_.blockers.get(x)||fo;return ve.get(x)!==R&&ve.set(x,R),$}function Ar(x){_.blockers.delete(x),ve.delete(x)}function Ln(x,R){let $=_.blockers.get(x)||fo;Ce($.state==="unblocked"&&R.state==="blocked"||$.state==="blocked"&&R.state==="blocked"||$.state==="blocked"&&R.state==="proceeding"||$.state==="blocked"&&R.state==="unblocked"||$.state==="proceeding"&&R.state==="unblocked",`Invalid blocker state transition: ${$.state} -> ${R.state}`);let H=new Map(_.blockers);H.set(x,R),Z({blockers:H})}function Fr({currentLocation:x,nextLocation:R,historyAction:$}){if(ve.size===0)return;ve.size>1&&yt(!1,"A router only supports one blocker at a time");let H=Array.from(ve.entries()),[q,ue]=H[H.length-1],he=_.blockers.get(q);if(!(he&&he.state==="proceeding")&&ue({currentLocation:x,nextLocation:R,historyAction:$}))return q}function ur(x){let R=qt(404,{pathname:x}),$=p||d,{matches:H,route:q}=kf($);return{notFoundMatches:H,route:q,error:R}}function So(x,R,$){if(b=x,O=R,N=$||null,!M&&_.navigation===Is){M=!0;let H=ko(_.location,_.matches);H!=null&&Z({restoreScrollPosition:H})}return()=>{b=null,O=null,N=null}}function vn(x,R){return N&&N(x,R.map(H=>Wh(H,_.loaderData)))||x.key}function zn(x,R){if(b&&O){let $=vn(x,R);b[$]=O()}}function ko(x,R){if(b){let $=vn(x,R),H=b[$];if(typeof H=="number")return H}return null}function cr(x,R,$){if(g)if(x){if(Object.keys(x[0].params).length>0)return{active:!0,matches:Ol(R,$,m,!0)}}else return{active:!0,matches:Ol(R,$,m,!0)||[]};return{active:!1,matches:null}}async function dr(x,R,$){if(!g)return{type:"success",matches:x};let H=x;for(;;){let q=p==null,ue=p||d,he=c;try{await g({signal:$,path:R,matches:H,patch:(G,ye)=>{$.aborted||vf(G,ye,ue,he,s)}})}catch(G){return{type:"error",error:G,partialMatches:H}}finally{q&&!$.aborted&&(d=[...d])}if($.aborted)return{type:"aborted"};let ee=Rn(ue,R,m);if(ee)return{type:"success",matches:ee};let oe=Ol(ue,R,m,!0);if(!oe||H.length===oe.length&&H.every((G,ye)=>G.route.id===oe[ye].route.id))return{type:"success",matches:null};H=oe}}function _i(x){c={},p=Ul(x,s,void 0,c)}function Ri(x,R){let $=p==null;vf(x,R,p||d,c,s),$&&(d=[...d],Z({}))}return ce={get basename(){return m},get future(){return S},get state(){return _},get routes(){return d},get window(){return r},initialize:be,subscribe:V,enableScrollRestoration:So,navigate:ot,fetch:go,revalidate:Be,createHref:x=>o.history.createHref(x),encodeLocation:x=>o.history.encodeLocation(x),getFetcher:ar,deleteFetcher:sr,dispose:D,getBlocker:ea,deleteBlocker:Ar,patchRoutes:Ri,_internalFetchControllers:Ee,_internalSetRoutes:_i},ce}function gv(o){return o!=null&&("formData"in o&&o.formData!=null||"body"in o&&o.body!==void 0)}function qs(o,r,l,s,c,d){let p,m;if(c){p=[];for(let g of r)if(p.push(g),g.route.id===c){m=g;break}}else p=r,m=r[r.length-1];let h=au(s||".",lu(p),jt(o.pathname,l)||o.pathname,d==="path");if(s==null&&(h.search=o.search,h.hash=o.hash),(s==null||s===""||s===".")&&m){let g=uu(h.search);if(m.route.index&&!g)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!m.route.index&&g){let S=new URLSearchParams(h.search),C=S.getAll("index");S.delete("index"),C.filter(b=>b).forEach(b=>S.append("index",b));let E=S.toString();h.search=E?`?${E}`:""}}return l!=="/"&&(h.pathname=h.pathname==="/"?l:pn([l,h.pathname])),nr(h)}function ff(o,r,l){if(!l||!gv(l))return{path:r};if(l.formMethod&&!Tv(l.formMethod))return{path:r,error:qt(405,{method:l.formMethod})};let s=()=>({path:r,error:qt(400,{type:"invalid-body"})}),d=(l.formMethod||"get").toUpperCase(),p=lp(r);if(l.body!==void 0){if(l.formEncType==="text/plain"){if(!sn(d))return s();let C=typeof l.body=="string"?l.body:l.body instanceof FormData||l.body instanceof URLSearchParams?Array.from(l.body.entries()).reduce((E,[b,N])=>`${E}${b}=${N}
`,""):String(l.body);return{path:r,submission:{formMethod:d,formAction:p,formEncType:l.formEncType,formData:void 0,json:void 0,text:C}}}else if(l.formEncType==="application/json"){if(!sn(d))return s();try{let C=typeof l.body=="string"?JSON.parse(l.body):l.body;return{path:r,submission:{formMethod:d,formAction:p,formEncType:l.formEncType,formData:void 0,json:C,text:void 0}}}catch{return s()}}}Ce(typeof FormData=="function","FormData is not available in this environment");let m,h;if(l.formData)m=Zs(l.formData),h=l.formData;else if(l.body instanceof FormData)m=Zs(l.body),h=l.body;else if(l.body instanceof URLSearchParams)m=l.body,h=yf(m);else if(l.body==null)m=new URLSearchParams,h=new FormData;else try{m=new URLSearchParams(l.body),h=yf(m)}catch{return s()}let g={formMethod:d,formAction:p,formEncType:l&&l.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(sn(g.formMethod))return{path:r,submission:g};let S=rr(r);return o&&S.search&&uu(S.search)&&m.append("index",""),S.search=`?${m}`,{path:nr(S),submission:g}}function pf(o,r,l=!1){let s=o.findIndex(c=>c.route.id===r);return s>=0?o.slice(0,l?s+1:s):o}function mf(o,r,l,s,c,d,p,m,h,g,S,C,E,b){let N=b?Ut(b[1])?b[1].error:b[1].data:void 0,O=o.createURL(r.location),M=o.createURL(c),I=l;d&&r.errors?I=pf(l,Object.keys(r.errors)[0],!0):b&&Ut(b[1])&&(I=pf(l,b[0]));let Q=b?b[1].statusCode:void 0,A=Q&&Q>=400,X=I.filter((_,ae)=>{let{route:fe}=_;if(fe.lazy)return!0;if(fe.loader==null)return!1;if(d)return Js(fe,r.loaderData,r.errors);if(yv(r.loaderData,r.matches[ae],_))return!0;let se=r.matches[ae],xe=_;return hf(_,{currentUrl:O,currentParams:se.params,nextUrl:M,nextParams:xe.params,...s,actionResult:N,actionStatus:Q,defaultShouldRevalidate:A?!1:p||O.pathname+O.search===M.pathname+M.search||O.search!==M.search||xv(se,xe)})}),ce=[];return g.forEach((_,ae)=>{if(d||!l.some(Ke=>Ke.route.id===_.routeId)||h.has(ae))return;let fe=Rn(C,_.path,E);if(!fe){ce.push({key:ae,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let se=r.fetchers.get(ae),xe=si(fe,_.path),Me=!1;S.has(ae)?Me=!1:m.has(ae)?(m.delete(ae),Me=!0):se&&se.state!=="idle"&&se.data===void 0?Me=p:Me=hf(xe,{currentUrl:O,currentParams:r.matches[r.matches.length-1].params,nextUrl:M,nextParams:l[l.length-1].params,...s,actionResult:N,actionStatus:Q,defaultShouldRevalidate:A?!1:p}),Me&&ce.push({key:ae,routeId:_.routeId,path:_.path,matches:fe,match:xe,controller:new AbortController})}),[X,ce]}function Js(o,r,l){if(o.lazy)return!0;if(!o.loader)return!1;let s=r!=null&&r[o.id]!==void 0,c=l!=null&&l[o.id]!==void 0;return!s&&c?!1:typeof o.loader=="function"&&o.loader.hydrate===!0?!0:!s&&!c}function yv(o,r,l){let s=!r||l.route.id!==r.route.id,c=!o.hasOwnProperty(l.route.id);return s||c}function xv(o,r){let l=o.route.path;return o.pathname!==r.pathname||l!=null&&l.endsWith("*")&&o.params["*"]!==r.params["*"]}function hf(o,r){if(o.route.shouldRevalidate){let l=o.route.shouldRevalidate(r);if(typeof l=="boolean")return l}return r.defaultShouldRevalidate}function vf(o,r,l,s,c){let d;if(o){let h=s[o];Ce(h,`No route found to patch children into: routeId = ${o}`),h.children||(h.children=[]),d=h.children}else d=l;let p=r.filter(h=>!d.some(g=>ip(h,g))),m=Ul(p,c,[o||"_","patch",String(d?.length||"0")],s);d.push(...m)}function ip(o,r){return"id"in o&&"id"in r&&o.id===r.id?!0:o.index===r.index&&o.path===r.path&&o.caseSensitive===r.caseSensitive?(!o.children||o.children.length===0)&&(!r.children||r.children.length===0)?!0:o.children.every((l,s)=>r.children?.some(c=>ip(l,c))):!1}async function wv(o,r,l){if(!o.lazy)return;let s=await o.lazy();if(!o.lazy)return;let c=l[o.id];Ce(c,"No route found in manifest");let d={};for(let p in s){let h=c[p]!==void 0&&p!=="hasErrorBoundary";yt(!h,`Route "${c.id}" has a static property "${p}" defined but its lazy function is also returning a value for this property. The lazy route property "${p}" will be ignored.`),!h&&!Hh.has(p)&&(d[p]=s[p])}Object.assign(c,d),Object.assign(c,{...r(c),lazy:void 0})}async function Sv({matches:o}){let r=o.filter(s=>s.shouldLoad);return(await Promise.all(r.map(s=>s.resolve()))).reduce((s,c,d)=>Object.assign(s,{[r[d].route.id]:c}),{})}async function kv(o,r,l,s,c,d,p,m,h,g){let S=d.map(b=>b.route.lazy?wv(b.route,h,m):void 0),C=d.map((b,N)=>{let O=S[N],M=c.some(Q=>Q.route.id===b.route.id);return{...b,shouldLoad:M,resolve:async Q=>(Q&&s.method==="GET"&&(b.route.lazy||b.route.loader)&&(M=!0),M?Ev(r,s,b,O,Q,g):Promise.resolve({type:"data",result:void 0}))}}),E=await o({matches:C,request:s,params:d[0].params,fetcherKey:p,context:g});try{await Promise.all(S)}catch{}return E}async function Ev(o,r,l,s,c,d){let p,m,h=g=>{let S,C=new Promise((N,O)=>S=O);m=()=>S(),r.signal.addEventListener("abort",m);let E=N=>typeof g!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${o}" [routeId: ${l.route.id}]`)):g({request:r,params:l.params,context:d},...N!==void 0?[N]:[]),b=(async()=>{try{return{type:"data",result:await(c?c(O=>E(O)):E())}}catch(N){return{type:"error",result:N}}})();return Promise.race([b,C])};try{let g=l.route[o];if(s)if(g){let S,[C]=await Promise.all([h(g).catch(E=>{S=E}),s]);if(S!==void 0)throw S;p=C}else if(await s,g=l.route[o],g)p=await h(g);else if(o==="action"){let S=new URL(r.url),C=S.pathname+S.search;throw qt(405,{method:r.method,pathname:C,routeId:l.route.id})}else return{type:"data",result:void 0};else if(g)p=await h(g);else{let S=new URL(r.url),C=S.pathname+S.search;throw qt(404,{pathname:C})}}catch(g){return{type:"error",result:g}}finally{m&&r.signal.removeEventListener("abort",m)}return p}async function Cv(o){let{result:r,type:l}=o;if(ap(r)){let s;try{let c=r.headers.get("Content-Type");c&&/\bapplication\/json\b/.test(c)?r.body==null?s=null:s=await r.json():s=await r.text()}catch(c){return{type:"error",error:c}}return l==="error"?{type:"error",error:new Vl(r.status,r.statusText,s),statusCode:r.status,headers:r.headers}:{type:"data",data:s,statusCode:r.status,headers:r.headers}}return l==="error"?Ef(r)?r.data instanceof Error?{type:"error",error:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:new Vl(r.init?.status||500,void 0,r.data),statusCode:fi(r)?r.status:void 0,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"error",error:r,statusCode:fi(r)?r.status:void 0}:Ef(r)?{type:"data",data:r.data,statusCode:r.init?.status,headers:r.init?.headers?new Headers(r.init.headers):void 0}:{type:"data",data:r}}function bv(o,r,l,s,c){let d=o.headers.get("Location");if(Ce(d,"Redirects returned/thrown from loaders/actions must have a Location header"),!su.test(d)){let p=s.slice(0,s.findIndex(m=>m.route.id===l)+1);d=qs(new URL(r.url),p,c,d),o.headers.set("Location",d)}return o}function gf(o,r,l){if(su.test(o)){let s=o,c=s.startsWith("//")?new URL(r.protocol+s):new URL(s),d=jt(c.pathname,l)!=null;if(c.origin===r.origin&&d)return c.pathname+c.search+c.hash}return o}function uo(o,r,l,s){let c=o.createURL(lp(r)).toString(),d={signal:l};if(s&&sn(s.formMethod)){let{formMethod:p,formEncType:m}=s;d.method=p.toUpperCase(),m==="application/json"?(d.headers=new Headers({"Content-Type":m}),d.body=JSON.stringify(s.json)):m==="text/plain"?d.body=s.text:m==="application/x-www-form-urlencoded"&&s.formData?d.body=Zs(s.formData):d.body=s.formData}return new Request(c,d)}function Zs(o){let r=new URLSearchParams;for(let[l,s]of o.entries())r.append(l,typeof s=="string"?s:s.name);return r}function yf(o){let r=new FormData;for(let[l,s]of o.entries())r.append(l,s);return r}function _v(o,r,l,s=!1,c=!1){let d={},p=null,m,h=!1,g={},S=l&&Ut(l[1])?l[1].error:void 0;return o.forEach(C=>{if(!(C.route.id in r))return;let E=C.route.id,b=r[E];if(Ce(!Rr(b),"Cannot handle redirect results in processLoaderData"),Ut(b)){let N=b.error;if(S!==void 0&&(N=S,S=void 0),p=p||{},c)p[E]=N;else{let O=_r(o,E);p[O.route.id]==null&&(p[O.route.id]=N)}s||(d[E]=op),h||(h=!0,m=fi(b.error)?b.error.status:500),b.headers&&(g[E]=b.headers)}else d[E]=b.data,b.statusCode&&b.statusCode!==200&&!h&&(m=b.statusCode),b.headers&&(g[E]=b.headers)}),S!==void 0&&l&&(p={[l[0]]:S},d[l[0]]=void 0),{loaderData:d,errors:p,statusCode:m||200,loaderHeaders:g}}function xf(o,r,l,s,c,d){let{loaderData:p,errors:m}=_v(r,l,s);return c.forEach(h=>{let{key:g,match:S,controller:C}=h,E=d[g];if(Ce(E,"Did not find corresponding fetcher result"),!(C&&C.signal.aborted))if(Ut(E)){let b=_r(o.matches,S?.route.id);m&&m[b.route.id]||(m={...m,[b.route.id]:E.error}),o.fetchers.delete(g)}else if(Rr(E))Ce(!1,"Unhandled fetcher revalidation redirect");else{let b=er(E.data);o.fetchers.set(g,b)}}),{loaderData:p,errors:m}}function wf(o,r,l,s){let c=Object.entries(r).filter(([,d])=>d!==op).reduce((d,[p,m])=>(d[p]=m,d),{});for(let d of l){let p=d.route.id;if(!r.hasOwnProperty(p)&&o.hasOwnProperty(p)&&d.route.loader&&(c[p]=o[p]),s&&s.hasOwnProperty(p))break}return c}function Sf(o){return o?Ut(o[1])?{actionData:{}}:{actionData:{[o[0]]:o[1].data}}:{}}function _r(o,r){return(r?o.slice(0,o.findIndex(s=>s.route.id===r)+1):[...o]).reverse().find(s=>s.route.hasErrorBoundary===!0)||o[0]}function kf(o){let r=o.length===1?o[0]:o.find(l=>l.index||!l.path||l.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:r}],route:r}}function qt(o,{pathname:r,routeId:l,method:s,type:c,message:d}={}){let p="Unknown Server Error",m="Unknown @remix-run/router error";return o===400?(p="Bad Request",s&&r&&l?m=`You made a ${s} request to "${r}" but did not provide a \`loader\` for route "${l}", so there is no way to handle the request.`:c==="invalid-body"&&(m="Unable to encode submission body")):o===403?(p="Forbidden",m=`Route "${l}" does not match URL "${r}"`):o===404?(p="Not Found",m=`No route matches URL "${r}"`):o===405&&(p="Method Not Allowed",s&&r&&l?m=`You made a ${s.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${l}", so there is no way to handle the request.`:s&&(m=`Invalid request method "${s.toUpperCase()}"`)),new Vl(o||500,p,new Error(m),!0)}function Nl(o){let r=Object.entries(o);for(let l=r.length-1;l>=0;l--){let[s,c]=r[l];if(Rr(c))return{key:s,result:c}}}function lp(o){let r=typeof o=="string"?rr(o):o;return nr({...r,hash:""})}function Rv(o,r){return o.pathname!==r.pathname||o.search!==r.search?!1:o.hash===""?r.hash!=="":o.hash===r.hash?!0:r.hash!==""}function Pv(o){return ap(o.result)&&fv.has(o.result.status)}function Ut(o){return o.type==="error"}function Rr(o){return(o&&o.type)==="redirect"}function Ef(o){return typeof o=="object"&&o!=null&&"type"in o&&"data"in o&&"init"in o&&o.type==="DataWithResponseInit"}function ap(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.headers=="object"&&typeof o.body<"u"}function Tv(o){return dv.has(o.toUpperCase())}function sn(o){return uv.has(o.toUpperCase())}function uu(o){return new URLSearchParams(o).getAll("index").some(r=>r==="")}function si(o,r){let l=typeof r=="string"?rr(r).search:r.search;if(o[o.length-1].route.index&&uu(l||""))return o[o.length-1];let s=tp(o);return s[s.length-1]}function Cf(o){let{formMethod:r,formAction:l,formEncType:s,text:c,formData:d,json:p}=o;if(!(!r||!l||!s)){if(c!=null)return{formMethod:r,formAction:l,formEncType:s,formData:void 0,json:void 0,text:c};if(d!=null)return{formMethod:r,formAction:l,formEncType:s,formData:d,json:void 0,text:void 0};if(p!==void 0)return{formMethod:r,formAction:l,formEncType:s,formData:void 0,json:p,text:void 0}}}function Us(o,r){return r?{state:"loading",location:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:o,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Lv(o,r){return{state:"submitting",location:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function oi(o,r){return o?{state:"loading",formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text,data:r}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:r}}function zv(o,r){return{state:"submitting",formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text,data:r?r.data:void 0}}function er(o){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:o}}function $v(o,r){try{let l=o.sessionStorage.getItem(rp);if(l){let s=JSON.parse(l);for(let[c,d]of Object.entries(s||{}))d&&Array.isArray(d)&&r.set(c,new Set(d||[]))}}catch{}}function Nv(o,r){if(r.size>0){let l={};for(let[s,c]of r)l[s]=[...c];try{o.sessionStorage.setItem(rp,JSON.stringify(l))}catch(s){yt(!1,`Failed to save applied view transitions in sessionStorage (${s}).`)}}}function Dv(){let o,r,l=new Promise((s,c)=>{o=async d=>{s(d);try{await l}catch{}},r=async d=>{c(d);try{await l}catch{}}});return{promise:l,resolve:o,reject:r}}var Nr=T.createContext(null);Nr.displayName="DataRouter";var vi=T.createContext(null);vi.displayName="DataRouterState";var cu=T.createContext({isTransitioning:!1});cu.displayName="ViewTransition";var sp=T.createContext(new Map);sp.displayName="Fetchers";var Mv=T.createContext(null);Mv.displayName="Await";var mn=T.createContext(null);mn.displayName="Navigation";var Yl=T.createContext(null);Yl.displayName="Location";var hn=T.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var du=T.createContext(null);du.displayName="RouteError";function up(o,{relative:r}={}){Ce(gi(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:s}=T.useContext(mn),{hash:c,pathname:d,search:p}=yi(o,{relative:r}),m=d;return l!=="/"&&(m=d==="/"?l:pn([l,d])),s.createHref({pathname:m,search:p,hash:c})}function gi(){return T.useContext(Yl)!=null}function or(){return Ce(gi(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Yl).location}var cp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dp(o){T.useContext(mn).static||T.useLayoutEffect(o)}function fu(){let{isDataRoute:o}=T.useContext(hn);return o?Xv():Ov()}function Ov(){Ce(gi(),"useNavigate() may be used only in the context of a <Router> component.");let o=T.useContext(Nr),{basename:r,navigator:l}=T.useContext(mn),{matches:s}=T.useContext(hn),{pathname:c}=or(),d=JSON.stringify(lu(s)),p=T.useRef(!1);return dp(()=>{p.current=!0}),T.useCallback((h,g={})=>{if(yt(p.current,cp),!p.current)return;if(typeof h=="number"){l.go(h);return}let S=au(h,JSON.parse(d),c,g.relative==="path");o==null&&r!=="/"&&(S.pathname=S.pathname==="/"?r:pn([r,S.pathname])),(g.replace?l.replace:l.push)(S,g.state,g)},[r,l,d,c,o])}var Av=T.createContext(null);function Fv(o){let r=T.useContext(hn).outlet;return r&&T.createElement(Av.Provider,{value:o},r)}function yi(o,{relative:r}={}){let{matches:l}=T.useContext(hn),{pathname:s}=or(),c=JSON.stringify(lu(l));return T.useMemo(()=>au(o,JSON.parse(c),s,r==="path"),[o,c,s,r])}function Iv(o,r,l,s){Ce(gi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c,static:d}=T.useContext(mn),{matches:p}=T.useContext(hn),m=p[p.length-1],h=m?m.params:{},g=m?m.pathname:"/",S=m?m.pathnameBase:"/",C=m&&m.route;{let Q=C&&C.path||"";mp(g,!C||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let E=or(),b;b=E;let N=b.pathname||"/",O=N;if(S!=="/"){let Q=S.replace(/^\//,"").split("/");O="/"+N.replace(/^\//,"").split("/").slice(Q.length).join("/")}let M=!d&&l&&l.matches&&l.matches.length>0?l.matches:Rn(o,{pathname:O});return yt(C||M!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),yt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Bv(M&&M.map(Q=>Object.assign({},Q,{params:Object.assign({},h,Q.params),pathname:pn([S,c.encodeLocation?c.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?S:pn([S,c.encodeLocation?c.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),p,l,s)}function Uv(){let o=Kv(),r=fi(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),l=o instanceof Error?o.stack:null,s="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",o),p=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:d},"ErrorBoundary")," or"," ",T.createElement("code",{style:d},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},r),l?T.createElement("pre",{style:c},l):null,p)}var jv=T.createElement(Uv,null),Vv=class extends T.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,r){return r.location!==o.location||r.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:r.error,location:r.location,revalidation:o.revalidation||r.revalidation}}componentDidCatch(o,r){console.error("React Router caught the following error during render",o,r)}render(){return this.state.error!==void 0?T.createElement(hn.Provider,{value:this.props.routeContext},T.createElement(du.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hv({routeContext:o,match:r,children:l}){let s=T.useContext(Nr);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),T.createElement(hn.Provider,{value:o},l)}function Bv(o,r=[],l=null,s=null){if(o==null){if(!l)return null;if(l.errors)o=l.matches;else if(r.length===0&&!l.initialized&&l.matches.length>0)o=l.matches;else return null}let c=o,d=l?.errors;if(d!=null){let h=c.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);Ce(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),c=c.slice(0,Math.min(c.length,h+1))}let p=!1,m=-1;if(l)for(let h=0;h<c.length;h++){let g=c[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=h),g.route.id){let{loaderData:S,errors:C}=l,E=g.route.loader&&!S.hasOwnProperty(g.route.id)&&(!C||C[g.route.id]===void 0);if(g.route.lazy||E){p=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((h,g,S)=>{let C,E=!1,b=null,N=null;l&&(C=d&&g.route.id?d[g.route.id]:void 0,b=g.route.errorElement||jv,p&&(m<0&&S===0?(mp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,N=null):m===S&&(E=!0,N=g.route.hydrateFallbackElement||null)));let O=r.concat(c.slice(0,S+1)),M=()=>{let I;return C?I=b:E?I=N:g.route.Component?I=T.createElement(g.route.Component,null):g.route.element?I=g.route.element:I=h,T.createElement(Hv,{match:g,routeContext:{outlet:h,matches:O,isDataRoute:l!=null},children:I})};return l&&(g.route.ErrorBoundary||g.route.errorElement||S===0)?T.createElement(Vv,{location:l.location,revalidation:l.revalidation,component:b,error:C,children:M(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):M()},null)}function pu(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fp(o){let r=T.useContext(Nr);return Ce(r,pu(o)),r}function pp(o){let r=T.useContext(vi);return Ce(r,pu(o)),r}function Wv(o){let r=T.useContext(hn);return Ce(r,pu(o)),r}function mu(o){let r=Wv(o),l=r.matches[r.matches.length-1];return Ce(l.route.id,`${o} can only be used on routes that contain a unique "id"`),l.route.id}function Qv(){return mu("useRouteId")}function Kv(){let o=T.useContext(du),r=pp("useRouteError"),l=mu("useRouteError");return o!==void 0?o:r.errors?.[l]}var Gv=0;function Yv(o){let{router:r,basename:l}=fp("useBlocker"),s=pp("useBlocker"),[c,d]=T.useState(""),p=T.useCallback(m=>{if(typeof o!="function")return!!o;if(l==="/")return o(m);let{currentLocation:h,nextLocation:g,historyAction:S}=m;return o({currentLocation:{...h,pathname:jt(h.pathname,l)||h.pathname},nextLocation:{...g,pathname:jt(g.pathname,l)||g.pathname},historyAction:S})},[l,o]);return T.useEffect(()=>{let m=String(++Gv);return d(m),()=>r.deleteBlocker(m)},[r]),T.useEffect(()=>{c!==""&&r.getBlocker(c,p)},[r,c,p]),c&&s.blockers.has(c)?s.blockers.get(c):fo}function Xv(){let{router:o}=fp("useNavigate"),r=mu("useNavigate"),l=T.useRef(!1);return dp(()=>{l.current=!0}),T.useCallback(async(c,d={})=>{yt(l.current,cp),l.current&&(typeof c=="number"?o.navigate(c):await o.navigate(c,{fromRouteId:r,...d}))},[o,r])}var bf={};function mp(o,r,l){!r&&!bf[o]&&(bf[o]=!0,yt(!1,l))}var _f={};function Rf(o,r){!o&&!_f[r]&&(_f[r]=!0,console.warn(r))}function qv(o){let r={hasErrorBoundary:o.hasErrorBoundary||o.ErrorBoundary!=null||o.errorElement!=null};return o.Component&&(o.element&&yt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(r,{element:T.createElement(o.Component),Component:void 0})),o.HydrateFallback&&(o.hydrateFallbackElement&&yt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(r,{hydrateFallbackElement:T.createElement(o.HydrateFallback),HydrateFallback:void 0})),o.ErrorBoundary&&(o.errorElement&&yt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(r,{errorElement:T.createElement(o.ErrorBoundary),ErrorBoundary:void 0})),r}var Jv=class{constructor(){this.status="pending",this.promise=new Promise((o,r)=>{this.resolve=l=>{this.status==="pending"&&(this.status="resolved",o(l))},this.reject=l=>{this.status==="pending"&&(this.status="rejected",r(l))}})}};function Zv({router:o,flushSync:r}){let[l,s]=T.useState(o.state),[c,d]=T.useState(),[p,m]=T.useState({isTransitioning:!1}),[h,g]=T.useState(),[S,C]=T.useState(),[E,b]=T.useState(),N=T.useRef(new Map),O=T.useCallback((A,{deletedFetchers:X,flushSync:ce,viewTransitionOpts:_})=>{A.fetchers.forEach((fe,se)=>{fe.data!==void 0&&N.current.set(se,fe.data)}),X.forEach(fe=>N.current.delete(fe)),Rf(ce===!1||r!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let ae=o.window!=null&&o.window.document!=null&&typeof o.window.document.startViewTransition=="function";if(Rf(_==null||ae,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!_||!ae){r&&ce?r(()=>s(A)):T.startTransition(()=>s(A));return}if(r&&ce){r(()=>{S&&(h&&h.resolve(),S.skipTransition()),m({isTransitioning:!0,flushSync:!0,currentLocation:_.currentLocation,nextLocation:_.nextLocation})});let fe=o.window.document.startViewTransition(()=>{r(()=>s(A))});fe.finished.finally(()=>{r(()=>{g(void 0),C(void 0),d(void 0),m({isTransitioning:!1})})}),r(()=>C(fe));return}S?(h&&h.resolve(),S.skipTransition(),b({state:A,currentLocation:_.currentLocation,nextLocation:_.nextLocation})):(d(A),m({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}))},[o.window,r,S,h]);T.useLayoutEffect(()=>o.subscribe(O),[o,O]),T.useEffect(()=>{p.isTransitioning&&!p.flushSync&&g(new Jv)},[p]),T.useEffect(()=>{if(h&&c&&o.window){let A=c,X=h.promise,ce=o.window.document.startViewTransition(async()=>{T.startTransition(()=>s(A)),await X});ce.finished.finally(()=>{g(void 0),C(void 0),d(void 0),m({isTransitioning:!1})}),C(ce)}},[c,h,o.window]),T.useEffect(()=>{h&&c&&l.location.key===c.location.key&&h.resolve()},[h,S,l.location,c]),T.useEffect(()=>{!p.isTransitioning&&E&&(d(E.state),m({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),b(void 0))},[p.isTransitioning,E]);let M=T.useMemo(()=>({createHref:o.createHref,encodeLocation:o.encodeLocation,go:A=>o.navigate(A),push:(A,X,ce)=>o.navigate(A,{state:X,preventScrollReset:ce?.preventScrollReset}),replace:(A,X,ce)=>o.navigate(A,{replace:!0,state:X,preventScrollReset:ce?.preventScrollReset})}),[o]),I=o.basename||"/",Q=T.useMemo(()=>({router:o,navigator:M,static:!1,basename:I}),[o,M,I]);return T.createElement(T.Fragment,null,T.createElement(Nr.Provider,{value:Q},T.createElement(vi.Provider,{value:l},T.createElement(sp.Provider,{value:N.current},T.createElement(cu.Provider,{value:p},T.createElement(ng,{basename:I,location:l.location,navigationType:l.historyAction,navigator:M},T.createElement(eg,{routes:o.routes,future:o.future,state:l})))))),null)}var eg=T.memo(tg);function tg({routes:o,future:r,state:l}){return Iv(o,void 0,l,r)}function L0(o){return Fv(o.context)}function ng({basename:o="/",children:r=null,location:l,navigationType:s="POP",navigator:c,static:d=!1}){Ce(!gi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=o.replace(/^\/*/,"/"),m=T.useMemo(()=>({basename:p,navigator:c,static:d,future:{}}),[p,c,d]);typeof l=="string"&&(l=rr(l));let{pathname:h="/",search:g="",hash:S="",state:C=null,key:E="default"}=l,b=T.useMemo(()=>{let N=jt(h,p);return N==null?null:{location:{pathname:N,search:g,hash:S,state:C,key:E},navigationType:s}},[p,h,g,S,C,E,s]);return yt(b!=null,`<Router basename="${p}"> is not able to match the URL "${h}${g}${S}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:T.createElement(mn.Provider,{value:m},T.createElement(Yl.Provider,{children:r,value:b}))}var Al="get",Fl="application/x-www-form-urlencoded";function Xl(o){return o!=null&&typeof o.tagName=="string"}function rg(o){return Xl(o)&&o.tagName.toLowerCase()==="button"}function og(o){return Xl(o)&&o.tagName.toLowerCase()==="form"}function ig(o){return Xl(o)&&o.tagName.toLowerCase()==="input"}function lg(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function ag(o,r){return o.button===0&&(!r||r==="_self")&&!lg(o)}var Dl=null;function sg(){if(Dl===null)try{new FormData(document.createElement("form"),0),Dl=!1}catch{Dl=!0}return Dl}var ug=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function js(o){return o!=null&&!ug.has(o)?(yt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fl}"`),null):o}function cg(o,r){let l,s,c,d,p;if(og(o)){let m=o.getAttribute("action");s=m?jt(m,r):null,l=o.getAttribute("method")||Al,c=js(o.getAttribute("enctype"))||Fl,d=new FormData(o)}else if(rg(o)||ig(o)&&(o.type==="submit"||o.type==="image")){let m=o.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=o.getAttribute("formaction")||m.getAttribute("action");if(s=h?jt(h,r):null,l=o.getAttribute("formmethod")||m.getAttribute("method")||Al,c=js(o.getAttribute("formenctype"))||js(m.getAttribute("enctype"))||Fl,d=new FormData(m,o),!sg()){let{name:g,type:S,value:C}=o;if(S==="image"){let E=g?`${g}.`:"";d.append(`${E}x`,"0"),d.append(`${E}y`,"0")}else g&&d.append(g,C)}}else{if(Xl(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Al,s=null,c=Fl,p=o}return d&&c==="text/plain"&&(p=d,d=void 0),{action:s,method:l.toLowerCase(),encType:c,formData:d,body:p}}function hu(o,r){if(o===!1||o===null||typeof o>"u")throw new Error(r)}async function dg(o,r){if(o.id in r)return r[o.id];try{let l=await import(o.module);return r[o.id]=l,l}catch(l){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fg(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function pg(o,r,l){let s=await Promise.all(o.map(async c=>{let d=r.routes[c.route.id];if(d){let p=await dg(d,l);return p.links?p.links():[]}return[]}));return gg(s.flat(1).filter(fg).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Pf(o,r,l,s,c,d){let p=(h,g)=>l[g]?h.route.id!==l[g].route.id:!0,m=(h,g)=>l[g].pathname!==h.pathname||l[g].route.path?.endsWith("*")&&l[g].params["*"]!==h.params["*"];return d==="assets"?r.filter((h,g)=>p(h,g)||m(h,g)):d==="data"?r.filter((h,g)=>{let S=s.routes[h.route.id];if(!S||!S.hasLoader)return!1;if(p(h,g)||m(h,g))return!0;if(h.route.shouldRevalidate){let C=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(o,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function mg(o,r,{includeHydrateFallback:l}={}){return hg(o.map(s=>{let c=r.routes[s.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),l&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function hg(o){return[...new Set(o)]}function vg(o){let r={},l=Object.keys(o).sort();for(let s of l)r[s]=o[s];return r}function gg(o,r){let l=new Set;return new Set(r),o.reduce((s,c)=>{let d=JSON.stringify(vg(c));return l.has(d)||(l.add(d),s.push({key:d,link:c})),s},[])}function yg(o){let r=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function xg(){let o=T.useContext(Nr);return hu(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function wg(){let o=T.useContext(vi);return hu(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var vu=T.createContext(void 0);vu.displayName="FrameworkContext";function hp(){let o=T.useContext(vu);return hu(o,"You must render this element inside a <HydratedRouter> element"),o}function Sg(o,r){let l=T.useContext(vu),[s,c]=T.useState(!1),[d,p]=T.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:g,onMouseLeave:S,onTouchStart:C}=r,E=T.useRef(null);T.useEffect(()=>{if(o==="render"&&p(!0),o==="viewport"){let O=I=>{I.forEach(Q=>{p(Q.isIntersecting)})},M=new IntersectionObserver(O,{threshold:.5});return E.current&&M.observe(E.current),()=>{M.disconnect()}}},[o]),T.useEffect(()=>{if(s){let O=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(O)}}},[s]);let b=()=>{c(!0)},N=()=>{c(!1),p(!1)};return l?o!=="intent"?[d,E,{}]:[d,E,{onFocus:ii(m,b),onBlur:ii(h,N),onMouseEnter:ii(g,b),onMouseLeave:ii(S,N),onTouchStart:ii(C,b)}]:[!1,E,{}]}function ii(o,r){return l=>{o&&o(l),l.defaultPrevented||r(l)}}function kg({page:o,...r}){let{router:l}=xg(),s=T.useMemo(()=>Rn(l.routes,o,l.basename),[l.routes,o,l.basename]);return s?T.createElement(Cg,{page:o,matches:s,...r}):null}function Eg(o){let{manifest:r,routeModules:l}=hp(),[s,c]=T.useState([]);return T.useEffect(()=>{let d=!1;return pg(o,r,l).then(p=>{d||c(p)}),()=>{d=!0}},[o,r,l]),s}function Cg({page:o,matches:r,...l}){let s=or(),{manifest:c,routeModules:d}=hp(),{loaderData:p,matches:m}=wg(),h=T.useMemo(()=>Pf(o,r,m,c,s,"data"),[o,r,m,c,s]),g=T.useMemo(()=>Pf(o,r,m,c,s,"assets"),[o,r,m,c,s]),S=T.useMemo(()=>{if(o===s.pathname+s.search+s.hash)return[];let b=new Set,N=!1;if(r.forEach(M=>{let I=c.routes[M.route.id];!I||!I.hasLoader||(!h.some(Q=>Q.route.id===M.route.id)&&M.route.id in p&&d[M.route.id]?.shouldRevalidate||I.hasClientLoader?N=!0:b.add(M.route.id))}),b.size===0)return[];let O=yg(o);return N&&b.size>0&&O.searchParams.set("_routes",r.filter(M=>b.has(M.route.id)).map(M=>M.route.id).join(",")),[O.pathname+O.search]},[p,s,c,h,r,o,d]),C=T.useMemo(()=>mg(g,c),[g,c]),E=Eg(g);return T.createElement(T.Fragment,null,S.map(b=>T.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...l})),C.map(b=>T.createElement("link",{key:b,rel:"modulepreload",href:b,...l})),E.map(({key:b,link:N})=>T.createElement("link",{key:b,...N})))}function bg(...o){return r=>{o.forEach(l=>{typeof l=="function"?l(r):l!=null&&(l.current=r)})}}var vp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vp&&(window.__reactRouterVersion="7.2.0")}catch{}function _g(o,r){return vv({basename:r?.basename,future:r?.future,history:Uh({window:r?.window}),hydrationData:r?.hydrationData||Rg(),routes:o,mapRouteProperties:qv,dataStrategy:r?.dataStrategy,patchRoutesOnNavigation:r?.patchRoutesOnNavigation,window:r?.window}).initialize()}function Rg(){let o=window?.__staticRouterHydrationData;return o&&o.errors&&(o={...o,errors:Pg(o.errors)}),o}function Pg(o){if(!o)return null;let r=Object.entries(o),l={};for(let[s,c]of r)if(c&&c.__type==="RouteErrorResponse")l[s]=new Vl(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let d=window[c.__subType];if(typeof d=="function")try{let p=new d(c.message);p.stack="",l[s]=p}catch{}}if(l[s]==null){let d=new Error(c.message);d.stack="",l[s]=d}}else l[s]=c;return l}var gp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yp=T.forwardRef(function({onClick:r,discover:l="render",prefetch:s="none",relative:c,reloadDocument:d,replace:p,state:m,target:h,to:g,preventScrollReset:S,viewTransition:C,...E},b){let{basename:N}=T.useContext(mn),O=typeof g=="string"&&gp.test(g),M,I=!1;if(typeof g=="string"&&O&&(M=g,vp))try{let se=new URL(window.location.href),xe=g.startsWith("//")?new URL(se.protocol+g):new URL(g),Me=jt(xe.pathname,N);xe.origin===se.origin&&Me!=null?g=Me+xe.search+xe.hash:I=!0}catch{yt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Q=up(g,{relative:c}),[A,X,ce]=Sg(s,E),_=$g(g,{replace:p,state:m,target:h,preventScrollReset:S,relative:c,viewTransition:C});function ae(se){r&&r(se),se.defaultPrevented||_(se)}let fe=T.createElement("a",{...E,...ce,href:M||Q,onClick:I||d?r:ae,ref:bg(b,X),target:h,"data-discover":!O&&l==="render"?"true":void 0});return A&&!O?T.createElement(T.Fragment,null,fe,T.createElement(kg,{page:Q})):fe});yp.displayName="Link";var Tg=T.forwardRef(function({"aria-current":r="page",caseSensitive:l=!1,className:s="",end:c=!1,style:d,to:p,viewTransition:m,children:h,...g},S){let C=yi(p,{relative:g.relative}),E=or(),b=T.useContext(vi),{navigator:N,basename:O}=T.useContext(mn),M=b!=null&&Ag(C)&&m===!0,I=N.encodeLocation?N.encodeLocation(C).pathname:C.pathname,Q=E.pathname,A=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;l||(Q=Q.toLowerCase(),A=A?A.toLowerCase():null,I=I.toLowerCase()),A&&O&&(A=jt(A,O)||A);const X=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let ce=Q===I||!c&&Q.startsWith(I)&&Q.charAt(X)==="/",_=A!=null&&(A===I||!c&&A.startsWith(I)&&A.charAt(I.length)==="/"),ae={isActive:ce,isPending:_,isTransitioning:M},fe=ce?r:void 0,se;typeof s=="function"?se=s(ae):se=[s,ce?"active":null,_?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let xe=typeof d=="function"?d(ae):d;return T.createElement(yp,{...g,"aria-current":fe,className:se,ref:S,style:xe,to:p,viewTransition:m},typeof h=="function"?h(ae):h)});Tg.displayName="NavLink";var Lg=T.forwardRef(({discover:o="render",fetcherKey:r,navigate:l,reloadDocument:s,replace:c,state:d,method:p=Al,action:m,onSubmit:h,relative:g,preventScrollReset:S,viewTransition:C,...E},b)=>{let N=Mg(),O=Og(m,{relative:g}),M=p.toLowerCase()==="get"?"get":"post",I=typeof m=="string"&&gp.test(m),Q=A=>{if(h&&h(A),A.defaultPrevented)return;A.preventDefault();let X=A.nativeEvent.submitter,ce=X?.getAttribute("formmethod")||p;N(X||A.currentTarget,{fetcherKey:r,method:ce,navigate:l,replace:c,state:d,relative:g,preventScrollReset:S,viewTransition:C})};return T.createElement("form",{ref:b,method:M,action:O,onSubmit:s?h:Q,...E,"data-discover":!I&&o==="render"?"true":void 0})});Lg.displayName="Form";function zg(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xp(o){let r=T.useContext(Nr);return Ce(r,zg(o)),r}function $g(o,{target:r,replace:l,state:s,preventScrollReset:c,relative:d,viewTransition:p}={}){let m=fu(),h=or(),g=yi(o,{relative:d});return T.useCallback(S=>{if(ag(S,r)){S.preventDefault();let C=l!==void 0?l:nr(h)===nr(g);m(o,{replace:C,state:s,preventScrollReset:c,relative:d,viewTransition:p})}},[h,m,g,l,s,r,o,c,d,p])}var Ng=0,Dg=()=>`__${String(++Ng)}__`;function Mg(){let{router:o}=xp("useSubmit"),{basename:r}=T.useContext(mn),l=Qv();return T.useCallback(async(s,c={})=>{let{action:d,method:p,encType:m,formData:h,body:g}=cg(s,r);if(c.navigate===!1){let S=c.fetcherKey||Dg();await o.fetch(S,l,c.action||d,{preventScrollReset:c.preventScrollReset,formData:h,body:g,formMethod:c.method||p,formEncType:c.encType||m,flushSync:c.flushSync})}else await o.navigate(c.action||d,{preventScrollReset:c.preventScrollReset,formData:h,body:g,formMethod:c.method||p,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:l,flushSync:c.flushSync,viewTransition:c.viewTransition})},[o,r,l])}function Og(o,{relative:r}={}){let{basename:l}=T.useContext(mn),s=T.useContext(hn);Ce(s,"useFormAction must be used inside a RouteContext");let[c]=s.matches.slice(-1),d={...yi(o||".",{relative:r})},p=or();if(o==null){d.search=p.search;let m=new URLSearchParams(d.search),h=m.getAll("index");if(h.some(S=>S==="")){m.delete("index"),h.filter(C=>C).forEach(C=>m.append("index",C));let S=m.toString();d.search=S?`?${S}`:""}}return(!o||o===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(d.pathname=d.pathname==="/"?l:pn([l,d.pathname])),nr(d)}function Ag(o,r={}){let l=T.useContext(cu);Ce(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=xp("useViewTransitionState"),c=yi(o,{relative:r.relative});if(!l.isTransitioning)return!1;let d=jt(l.currentLocation.pathname,s)||l.currentLocation.pathname,p=jt(l.nextLocation.pathname,s)||l.nextLocation.pathname;return jl(c.pathname,p)!=null||jl(c.pathname,d)!=null}new TextEncoder;const Fg="modulepreload",Ig=function(o,r){return new URL(o,r).href},Tf={},eu=function(r,l,s){let c=Promise.resolve();if(l&&l.length>0){const p=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),h=m?.nonce||m?.getAttribute("nonce");c=Promise.allSettled(l.map(g=>{if(g=Ig(g,s),g in Tf)return;Tf[g]=!0;const S=g.endsWith(".css"),C=S?'[rel="stylesheet"]':"";if(!!s)for(let N=p.length-1;N>=0;N--){const O=p[N];if(O.href===g&&(!S||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${C}`))return;const b=document.createElement("link");if(b.rel=S?"stylesheet":Fg,S||(b.as="script"),b.crossOrigin="",b.href=g,h&&b.setAttribute("nonce",h),document.head.appendChild(b),S)return new Promise((N,O)=>{b.addEventListener("load",N),b.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${g}`)))})}))}function d(p){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=p,window.dispatchEvent(m),!m.defaultPrevented)throw p}return c.then(p=>{for(const m of p||[])m.status==="rejected"&&d(m.reason);return r().catch(d)})};var Vs,st;(function(o){o.CONNECTED="connected",o.LOADING="loading",o.RECONNECTING="reconnecting",o.CONNECTION_LOST="connection-lost"})(st||(st={}));class Ug{constructor(r){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=r,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(l=>{var s;(s=l.active)===null||s===void 0||s.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(r){this.stateChangeListeners.add(r)}removeStateChangeListener(r){this.stateChangeListeners.delete(r)}loadingStarted(){this.state=st.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(st.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(st.CONNECTION_LOST)}decreaseLoadingCount(r){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=r))}get state(){return this.connectionState}set state(r){if(r!==this.connectionState){const l=this.connectionState;this.connectionState=r,this.loadingCount=0;for(const s of this.stateChangeListeners)s(l,this.connectionState)}}get online(){return this.connectionState===st.CONNECTED||this.connectionState===st.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(r){typeof r.data=="object"&&r.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(r.data.result===!0&&(this.state=st.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const jg=o=>!!(o==="localhost"||o==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(o)),Ml=window;if(!(!((Vs=Ml.Vaadin)===null||Vs===void 0)&&Vs.connectionState)){let o;jg(window.location.hostname)?o=!0:o=navigator.onLine,Ml.Vaadin||(Ml.Vaadin={}),Ml.Vaadin.connectionState=new Ug(o?st.CONNECTED:st.CONNECTION_LOST)}function Vt(o,r,l,s){var c=arguments.length,d=c<3?r:s===null?s=Object.getOwnPropertyDescriptor(r,l):s,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")d=Reflect.decorate(o,r,l,s);else for(var m=o.length-1;m>=0;m--)(p=o[m])&&(d=(c<3?p(d):c>3?p(r,l,d):p(r,l))||d);return c>3&&d&&Object.defineProperty(r,l,d),d}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Il=globalThis,gu=Il.ShadowRoot&&(Il.ShadyCSS===void 0||Il.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yu=Symbol(),Lf=new WeakMap;let xu=class{constructor(r,l,s){if(this._$cssResult$=!0,s!==yu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=l}get styleSheet(){let r=this.o;const l=this.t;if(gu&&r===void 0){const s=l!==void 0&&l.length===1;s&&(r=Lf.get(l)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),s&&Lf.set(l,r))}return r}toString(){return this.cssText}};const wp=o=>new xu(typeof o=="string"?o:o+"",void 0,yu),rt=(o,...r)=>{const l=o.length===1?o[0]:r.reduce((s,c,d)=>s+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(c)+o[d+1],o[0]);return new xu(l,o,yu)},Sp=(o,r)=>{if(gu)o.adoptedStyleSheets=r.map(l=>l instanceof CSSStyleSheet?l:l.styleSheet);else for(const l of r){const s=document.createElement("style"),c=Il.litNonce;c!==void 0&&s.setAttribute("nonce",c),s.textContent=l.cssText,o.appendChild(s)}},zf=gu?o=>o:o=>o instanceof CSSStyleSheet?(r=>{let l="";for(const s of r.cssRules)l+=s.cssText;return wp(l)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vg,defineProperty:Hg,getOwnPropertyDescriptor:Bg,getOwnPropertyNames:Wg,getOwnPropertySymbols:Qg,getPrototypeOf:Kg}=Object,ql=globalThis,$f=ql.trustedTypes,Gg=$f?$f.emptyScript:"",Yg=ql.reactiveElementPolyfillSupport,ui=(o,r)=>o,Hl={toAttribute(o,r){switch(r){case Boolean:o=o?Gg:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,r){let l=o;switch(r){case Boolean:l=o!==null;break;case Number:l=o===null?null:Number(o);break;case Object:case Array:try{l=JSON.parse(o)}catch{l=null}}return l}},wu=(o,r)=>!Vg(o,r),Nf={attribute:!0,type:String,converter:Hl,reflect:!1,hasChanged:wu};Symbol.metadata??=Symbol("metadata"),ql.litPropertyMetadata??=new WeakMap;let po=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,l=Nf){if(l.state&&(l.attribute=!1),this._$Ei(),this.elementProperties.set(r,l),!l.noAccessor){const s=Symbol(),c=this.getPropertyDescriptor(r,s,l);c!==void 0&&Hg(this.prototype,r,c)}}static getPropertyDescriptor(r,l,s){const{get:c,set:d}=Bg(this.prototype,r)??{get(){return this[l]},set(p){this[l]=p}};return{get(){return c?.call(this)},set(p){const m=c?.call(this);d.call(this,p),this.requestUpdate(r,m,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Nf}static _$Ei(){if(this.hasOwnProperty(ui("elementProperties")))return;const r=Kg(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(ui("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ui("properties"))){const l=this.properties,s=[...Wg(l),...Qg(l)];for(const c of s)this.createProperty(c,l[c])}const r=this[Symbol.metadata];if(r!==null){const l=litPropertyMetadata.get(r);if(l!==void 0)for(const[s,c]of l)this.elementProperties.set(s,c)}this._$Eh=new Map;for(const[l,s]of this.elementProperties){const c=this._$Eu(l,s);c!==void 0&&this._$Eh.set(c,l)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const l=[];if(Array.isArray(r)){const s=new Set(r.flat(1/0).reverse());for(const c of s)l.unshift(zf(c))}else r!==void 0&&l.push(zf(r));return l}static _$Eu(r,l){const s=l.attribute;return s===!1?void 0:typeof s=="string"?s:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(r=>r(this))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,l=this.constructor.elementProperties;for(const s of l.keys())this.hasOwnProperty(s)&&(r.set(s,this[s]),delete this[s]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Sp(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(r=>r.hostConnected?.())}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach(r=>r.hostDisconnected?.())}attributeChangedCallback(r,l,s){this._$AK(r,s)}_$EC(r,l){const s=this.constructor.elementProperties.get(r),c=this.constructor._$Eu(r,s);if(c!==void 0&&s.reflect===!0){const d=(s.converter?.toAttribute!==void 0?s.converter:Hl).toAttribute(l,s.type);this._$Em=r,d==null?this.removeAttribute(c):this.setAttribute(c,d),this._$Em=null}}_$AK(r,l){const s=this.constructor,c=s._$Eh.get(r);if(c!==void 0&&this._$Em!==c){const d=s.getPropertyOptions(c),p=typeof d.converter=="function"?{fromAttribute:d.converter}:d.converter?.fromAttribute!==void 0?d.converter:Hl;this._$Em=c,this[c]=p.fromAttribute(l,d.type),this._$Em=null}}requestUpdate(r,l,s){if(r!==void 0){if(s??=this.constructor.getPropertyOptions(r),!(s.hasChanged??wu)(this[r],l))return;this.P(r,l,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(r,l,s){this._$AL.has(r)||this._$AL.set(r,l),s.reflect===!0&&this._$Em!==r&&(this._$Ej??=new Set).add(r)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(l){Promise.reject(l)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[c,d]of this._$Ep)this[c]=d;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[c,d]of s)d.wrapped!==!0||this._$AL.has(c)||this[c]===void 0||this.P(c,this[c],d)}let r=!1;const l=this._$AL;try{r=this.shouldUpdate(l),r?(this.willUpdate(l),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(l)):this._$EU()}catch(s){throw r=!1,this._$EU(),s}r&&this._$AE(l)}willUpdate(r){}_$AE(r){this._$EO?.forEach(l=>l.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Ej&&=this._$Ej.forEach(l=>this._$EC(l,this[l])),this._$EU()}updated(r){}firstUpdated(r){}};po.elementStyles=[],po.shadowRootOptions={mode:"open"},po[ui("elementProperties")]=new Map,po[ui("finalized")]=new Map,Yg?.({ReactiveElement:po}),(ql.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Su=globalThis,Bl=Su.trustedTypes,Df=Bl?Bl.createPolicy("lit-html",{createHTML:o=>o}):void 0,kp="$lit$",tr=`lit$${Math.random().toFixed(9).slice(2)}$`,Ep="?"+tr,Xg=`<${Ep}>`,zr=document,pi=()=>zr.createComment(""),mi=o=>o===null||typeof o!="object"&&typeof o!="function",ku=Array.isArray,qg=o=>ku(o)||typeof o?.[Symbol.iterator]=="function",Hs=`[ 	
\f\r]`,li=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mf=/-->/g,Of=/>/g,br=RegExp(`>|${Hs}(?:([^\\s"'>=/]+)(${Hs}*=${Hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Af=/'/g,Ff=/"/g,Cp=/^(?:script|style|textarea|title)$/i,bp=o=>(r,...l)=>({_$litType$:o,strings:r,values:l}),Jg=bp(1),N0=bp(2),$r=Symbol.for("lit-noChange"),pt=Symbol.for("lit-nothing"),If=new WeakMap,Pr=zr.createTreeWalker(zr,129);function _p(o,r){if(!ku(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Df!==void 0?Df.createHTML(r):r}const Zg=(o,r)=>{const l=o.length-1,s=[];let c,d=r===2?"<svg>":r===3?"<math>":"",p=li;for(let m=0;m<l;m++){const h=o[m];let g,S,C=-1,E=0;for(;E<h.length&&(p.lastIndex=E,S=p.exec(h),S!==null);)E=p.lastIndex,p===li?S[1]==="!--"?p=Mf:S[1]!==void 0?p=Of:S[2]!==void 0?(Cp.test(S[2])&&(c=RegExp("</"+S[2],"g")),p=br):S[3]!==void 0&&(p=br):p===br?S[0]===">"?(p=c??li,C=-1):S[1]===void 0?C=-2:(C=p.lastIndex-S[2].length,g=S[1],p=S[3]===void 0?br:S[3]==='"'?Ff:Af):p===Ff||p===Af?p=br:p===Mf||p===Of?p=li:(p=br,c=void 0);const b=p===br&&o[m+1].startsWith("/>")?" ":"";d+=p===li?h+Xg:C>=0?(s.push(g),h.slice(0,C)+kp+h.slice(C)+tr+b):h+tr+(C===-2?m:b)}return[_p(o,d+(o[l]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),s]};class hi{constructor({strings:r,_$litType$:l},s){let c;this.parts=[];let d=0,p=0;const m=r.length-1,h=this.parts,[g,S]=Zg(r,l);if(this.el=hi.createElement(g,s),Pr.currentNode=this.el.content,l===2||l===3){const C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(c=Pr.nextNode())!==null&&h.length<m;){if(c.nodeType===1){if(c.hasAttributes())for(const C of c.getAttributeNames())if(C.endsWith(kp)){const E=S[p++],b=c.getAttribute(C).split(tr),N=/([.?@])?(.*)/.exec(E);h.push({type:1,index:d,name:N[2],strings:b,ctor:N[1]==="."?ty:N[1]==="?"?ny:N[1]==="@"?ry:Jl}),c.removeAttribute(C)}else C.startsWith(tr)&&(h.push({type:6,index:d}),c.removeAttribute(C));if(Cp.test(c.tagName)){const C=c.textContent.split(tr),E=C.length-1;if(E>0){c.textContent=Bl?Bl.emptyScript:"";for(let b=0;b<E;b++)c.append(C[b],pi()),Pr.nextNode(),h.push({type:2,index:++d});c.append(C[E],pi())}}}else if(c.nodeType===8)if(c.data===Ep)h.push({type:2,index:d});else{let C=-1;for(;(C=c.data.indexOf(tr,C+1))!==-1;)h.push({type:7,index:d}),C+=tr.length-1}d++}}static createElement(r,l){const s=zr.createElement("template");return s.innerHTML=r,s}}function vo(o,r,l=o,s){if(r===$r)return r;let c=s!==void 0?l._$Co?.[s]:l._$Cl;const d=mi(r)?void 0:r._$litDirective$;return c?.constructor!==d&&(c?._$AO?.(!1),d===void 0?c=void 0:(c=new d(o),c._$AT(o,l,s)),s!==void 0?(l._$Co??=[])[s]=c:l._$Cl=c),c!==void 0&&(r=vo(o,c._$AS(o,r.values),c,s)),r}class ey{constructor(r,l){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=l}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:l},parts:s}=this._$AD,c=(r?.creationScope??zr).importNode(l,!0);Pr.currentNode=c;let d=Pr.nextNode(),p=0,m=0,h=s[0];for(;h!==void 0;){if(p===h.index){let g;h.type===2?g=new xi(d,d.nextSibling,this,r):h.type===1?g=new h.ctor(d,h.name,h.strings,this,r):h.type===6&&(g=new oy(d,this,r)),this._$AV.push(g),h=s[++m]}p!==h?.index&&(d=Pr.nextNode(),p++)}return Pr.currentNode=zr,c}p(r){let l=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(r,s,l),l+=s.strings.length-2):s._$AI(r[l])),l++}}class xi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,l,s,c){this.type=2,this._$AH=pt,this._$AN=void 0,this._$AA=r,this._$AB=l,this._$AM=s,this.options=c,this._$Cv=c?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const l=this._$AM;return l!==void 0&&r?.nodeType===11&&(r=l.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,l=this){r=vo(this,r,l),mi(r)?r===pt||r==null||r===""?(this._$AH!==pt&&this._$AR(),this._$AH=pt):r!==this._$AH&&r!==$r&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):qg(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==pt&&mi(this._$AH)?this._$AA.nextSibling.data=r:this.T(zr.createTextNode(r)),this._$AH=r}$(r){const{values:l,_$litType$:s}=r,c=typeof s=="number"?this._$AC(r):(s.el===void 0&&(s.el=hi.createElement(_p(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===c)this._$AH.p(l);else{const d=new ey(c,this),p=d.u(this.options);d.p(l),this.T(p),this._$AH=d}}_$AC(r){let l=If.get(r.strings);return l===void 0&&If.set(r.strings,l=new hi(r)),l}k(r){ku(this._$AH)||(this._$AH=[],this._$AR());const l=this._$AH;let s,c=0;for(const d of r)c===l.length?l.push(s=new xi(this.O(pi()),this.O(pi()),this,this.options)):s=l[c],s._$AI(d),c++;c<l.length&&(this._$AR(s&&s._$AB.nextSibling,c),l.length=c)}_$AR(r=this._$AA.nextSibling,l){for(this._$AP?.(!1,!0,l);r&&r!==this._$AB;){const s=r.nextSibling;r.remove(),r=s}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}let Jl=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,l,s,c,d){this.type=1,this._$AH=pt,this._$AN=void 0,this.element=r,this.name=l,this._$AM=c,this.options=d,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=pt}_$AI(r,l=this,s,c){const d=this.strings;let p=!1;if(d===void 0)r=vo(this,r,l,0),p=!mi(r)||r!==this._$AH&&r!==$r,p&&(this._$AH=r);else{const m=r;let h,g;for(r=d[0],h=0;h<d.length-1;h++)g=vo(this,m[s+h],l,h),g===$r&&(g=this._$AH[h]),p||=!mi(g)||g!==this._$AH[h],g===pt?r=pt:r!==pt&&(r+=(g??"")+d[h+1]),this._$AH[h]=g}p&&!c&&this.j(r)}j(r){r===pt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}};class ty extends Jl{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===pt?void 0:r}}class ny extends Jl{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==pt)}}class ry extends Jl{constructor(r,l,s,c,d){super(r,l,s,c,d),this.type=5}_$AI(r,l=this){if((r=vo(this,r,l,0)??pt)===$r)return;const s=this._$AH,c=r===pt&&s!==pt||r.capture!==s.capture||r.once!==s.once||r.passive!==s.passive,d=r!==pt&&(s===pt||c);c&&this.element.removeEventListener(this.name,this,s),d&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class oy{constructor(r,l,s){this.element=r,this.type=6,this._$AN=void 0,this._$AM=l,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(r){vo(this,r)}}const iy=Su.litHtmlPolyfillSupport;iy?.(hi,xi),(Su.litHtmlVersions??=[]).push("3.2.1");const ly=(o,r,l)=>{const s=l?.renderBefore??r;let c=s._$litPart$;if(c===void 0){const d=l?.renderBefore??null;s._$litPart$=c=new xi(r.insertBefore(pi(),d),d,void 0,l??{})}return c._$AI(o),c};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lr=class extends po{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const l=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=ly(l,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $r}};Lr._$litElement$=!0,Lr.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Lr});const ay=globalThis.litElementPolyfillSupport;ay?.({LitElement:Lr});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sy={attribute:!0,type:String,converter:Hl,reflect:!1,hasChanged:wu},uy=(o=sy,r,l)=>{const{kind:s,metadata:c}=l;let d=globalThis.litPropertyMetadata.get(c);if(d===void 0&&globalThis.litPropertyMetadata.set(c,d=new Map),d.set(l.name,o),s==="accessor"){const{name:p}=l;return{set(m){const h=r.get.call(this);r.set.call(this,m),this.requestUpdate(p,h,o)},init(m){return m!==void 0&&this.P(p,void 0,o),m}}}if(s==="setter"){const{name:p}=l;return function(m){const h=this[p];r.call(this,m),this.requestUpdate(p,h,o)}}throw Error("Unsupported decorator location: "+s)};function Ht(o){return(r,l)=>typeof l=="object"?uy(o,r,l):((s,c,d)=>{const p=c.hasOwnProperty(d);return c.constructor.createProperty(d,p?{...s,wrapped:!0}:s),p?Object.getOwnPropertyDescriptor(c,d):void 0})(o,r,l)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cy={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},dy=o=>(...r)=>({_$litDirective$:o,values:r});let fy=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,l,s){this._$Ct=r,this._$AM=l,this._$Ci=s}_$AS(r,l){return this.update(r,l)}update(r,l){return this.render(...l)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const py=dy(class extends fy{constructor(o){if(super(o),o.type!==cy.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(r=>o[r]).join(" ")+" "}update(o,[r]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in r)r[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(r)}const l=o.element.classList;for(const s of this.st)s in r||(l.remove(s),this.st.delete(s));for(const s in r){const c=!!r[s];c===this.st.has(s)||this.nt?.has(s)||(c?(l.add(s),this.st.add(s)):(l.remove(s),this.st.delete(s)))}return $r}}),Bs="css-loading-indicator";var an;(function(o){o.IDLE="",o.FIRST="first",o.SECOND="second",o.THIRD="third"})(an||(an={}));class mt extends Lr{static create(){var r,l;const s=window;return!((r=s.Vaadin)===null||r===void 0)&&r.connectionIndicator||(s.Vaadin||(s.Vaadin={}),s.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(s.Vaadin.connectionIndicator)),(l=s.Vaadin)===null||l===void 0?void 0:l.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=an.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=st.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return Jg`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${py({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var r;super.connectedCallback();const l=window;!((r=l.Vaadin)===null||r===void 0)&&r.connectionState&&(this.connectionStateStore=l.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(r){r!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=r,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var r;const l=(r=this.connectionStateStore)===null||r===void 0?void 0:r.state;return this.offline=l===st.CONNECTION_LOST,this.reconnecting=l===st.RECONNECTING,this.updateLoading(l===st.LOADING),this.loading?!1:l!==this.lastMessageState?(this.lastMessageState=l,!0):!1}updateLoading(r){this.loading=r,this.loadingBarState=an.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,r,()=>{this.loadingBarState=an.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,r,()=>{this.loadingBarState=an.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,r,()=>{this.loadingBarState=an.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(Bs)){const r=document.createElement("style");r.id=Bs,r.textContent=this.getDefaultStyle(),document.head.appendChild(r)}}else{const r=document.getElementById(Bs);r&&document.head.removeChild(r)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case an.IDLE:return"display: none";case an.FIRST:case an.SECOND:case an.THIRD:return"display: block";default:return""}}timeoutFor(r,l,s,c){return r!==0&&window.clearTimeout(r),l?window.setTimeout(s,c):0}static get instance(){return mt.create()}}Vt([Ht({type:Number})],mt.prototype,"firstDelay",void 0);Vt([Ht({type:Number})],mt.prototype,"secondDelay",void 0);Vt([Ht({type:Number})],mt.prototype,"thirdDelay",void 0);Vt([Ht({type:Number})],mt.prototype,"expandedDuration",void 0);Vt([Ht({type:String})],mt.prototype,"onlineText",void 0);Vt([Ht({type:String})],mt.prototype,"offlineText",void 0);Vt([Ht({type:String})],mt.prototype,"reconnectingText",void 0);Vt([Ht({type:Boolean,reflect:!0})],mt.prototype,"offline",void 0);Vt([Ht({type:Boolean,reflect:!0})],mt.prototype,"reconnecting",void 0);Vt([Ht({type:Boolean,reflect:!0})],mt.prototype,"expanded",void 0);Vt([Ht({type:Boolean,reflect:!0})],mt.prototype,"loading",void 0);Vt([Ht({type:String})],mt.prototype,"loadingBarState",void 0);Vt([Ht({type:Boolean})],mt.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",mt);mt.instance;var Uf;const Wl=window;Wl.Vaadin||(Wl.Vaadin={});(Uf=Wl.Vaadin).registrations||(Uf.registrations=[]);Wl.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class jf extends Error{}const Ws=window.document.body,Le=window,my=1;function Rp(){return Object.keys(Le.Vaadin.Flow.clients).filter(o=>o!=="TypeScript").map(o=>Le.Vaadin.Flow.clients[o])}function Vf(o,r){Rp().forEach(l=>l.sendEventMessage(my,o,r))}let hy=class{constructor(r){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",Ws.$=Ws.$||[],this.config=r||{},Le.Vaadin=Le.Vaadin||{},Le.Vaadin.Flow=Le.Vaadin.Flow||{},Le.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const l=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||l&&l.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,Le.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,Le.Vaadin.connectionState.loadingFinished(),!Le.Vaadin.listener&&(Le.Vaadin.listener={},document.addEventListener("click",r=>{r.target&&(r.target.hasAttribute("router-link")?this.navigation="link":r.composedPath().some(l=>l.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async r=>{if(this.pathname=r.pathname,Le.Vaadin.connectionState.online)try{await this.flowInit()}catch(l){if(l instanceof jf)return Le.Vaadin.connectionState.state=st.CONNECTION_LOST,this.offlineStubAction();throw l}else return this.offlineStubAction();return this.container.onBeforeEnter=(l,s)=>this.flowNavigate(l,s),this.container.onBeforeLeave=(l,s)=>this.flowLeave(l,s),this.container}}async flowLeave(r,l){const{connectionState:s}=Le.Vaadin;return this.pathname===r.pathname||!this.isFlowClientLoaded()||s.offline?Promise.resolve({}):new Promise(c=>{this.loadingStarted(),this.container.serverConnected=d=>{var p;c(l&&d?l.prevent():(p=l?.continue)===null||p===void 0?void 0:p.call(l)),this.loadingFinished()},Vf("ui-leave-navigation",{route:this.getFlowRoutePath(r),query:this.getFlowRouteQuery(r)})})}async flowNavigate(r,l){return this.response?new Promise(s=>{this.loadingStarted(),this.container.serverConnected=(c,d)=>{var p;l&&c?s(l.prevent()):l&&l.redirect&&d?s(l.redirect(d.pathname)):((p=l?.continue)===null||p===void 0||p.call(l),this.container.style.display="",s(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},Vf("ui-navigate",{route:this.getFlowRoutePath(r),query:this.getFlowRouteQuery(r),appShellTitle:this.appShellTitle,historyState:history.state,trigger:this.navigation}),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(r){return decodeURIComponent(r.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(r){return r.search&&r.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){Le.Vaadin.Flow.nonce=this.findNonce(),this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:r,appConfig:l}=this.response;typeof r=="string"&&await this.loadScript(r);const{appId:s}=l,c=`flow-container-${s.toLowerCase()}`,d=document.querySelector(c);d?this.container=d:(this.container=document.createElement(c),this.container.id=s),Ws.$[s]=this.container,(await eu(()=>import("./FlowBootstrap-BRNFttkU.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(s),await this.config.imports());const m=await eu(()=>import("./FlowClient-BmDvJZvi.js"),[],import.meta.url);await this.flowInitClient(m),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(r){return new Promise((l,s)=>{const c=document.createElement("script");c.onload=()=>l(),c.onerror=s,c.src=r;const{nonce:d}=Le.Vaadin.Flow;d!==void 0&&c.setAttribute("nonce",d),document.body.appendChild(c)})}findNonce(){let r;const l=document.head.getElementsByTagName("script");for(const s of l)if(s.nonce){r=s.nonce;break}return r}injectAppIdScript(r){const l=r.substring(0,r.lastIndexOf("-")),s=document.createElement("script");s.type="module",s.setAttribute("data-app-id",l);const{nonce:c}=Le.Vaadin.Flow;c!==void 0&&s.setAttribute("nonce",c),document.body.append(s)}async flowInitClient(r){return r.init(),new Promise(l=>{const s=setInterval(()=>{Rp().reduce((d,p)=>d||p.isActive(),!1)||(clearInterval(s),l())},5)})}async flowInitUi(){const r=Le.Vaadin&&Le.Vaadin.TypeScript&&Le.Vaadin.TypeScript.initial;return r?(Le.Vaadin.TypeScript.initial=void 0,Promise.resolve(r)):new Promise((l,s)=>{const d=new XMLHttpRequest,p=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;d.open("GET",p),d.onerror=()=>s(new jf(`Invalid server response when initializing Flow UI.
        ${d.status}
        ${d.responseText}`)),d.onload=()=>{const m=d.getResponseHeader("content-type");m&&m.indexOf("application/json")!==-1?l(JSON.parse(d.responseText)):d.onerror()},d.send()})}addConnectionIndicator(){mt.create(),Le.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){Le.Vaadin.connectionState.state=st.RECONNECTING;const r=new XMLHttpRequest;r.open("HEAD","sw.js"),r.onload=()=>{Le.Vaadin.connectionState.state=st.CONNECTED},r.onerror=()=>{Le.Vaadin.connectionState.state=st.CONNECTION_LOST},setTimeout(()=>r.send(),50)}}),Le.addEventListener("offline",()=>{this.isFlowClientLoaded()||(Le.Vaadin.connectionState.state=st.CONNECTION_LOST)})}async offlineStubAction(){const r=document.createElement("iframe");r.setAttribute("src","./offline-stub.html"),r.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let s;const c=()=>{s!==void 0&&(Le.Vaadin.connectionState.removeStateChangeListener(s),s=void 0)};return r.onBeforeEnter=(d,p,m)=>{s=()=>{Le.Vaadin.connectionState.online&&(c(),m.render(d,!1))},Le.Vaadin.connectionState.addStateChangeListener(s)},r.onBeforeLeave=(d,p,m)=>{c()},r}isFlowClientLoaded(){return this.response!==void 0}};var vy=Jf(),Qs={exports:{}},ai={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function gy(){if(Hf)return ai;Hf=1;var o=Gl(),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(m,h,g){var S,C={},E=null,b=null;g!==void 0&&(E=""+g),h.key!==void 0&&(E=""+h.key),h.ref!==void 0&&(b=h.ref);for(S in h)s.call(h,S)&&!d.hasOwnProperty(S)&&(C[S]=h[S]);if(m&&m.defaultProps)for(S in h=m.defaultProps,h)C[S]===void 0&&(C[S]=h[S]);return{$$typeof:r,type:m,key:E,ref:b,props:C,_owner:c.current}}return ai.Fragment=l,ai.jsx=p,ai.jsxs=p,ai}var Bf;function yy(){return Bf||(Bf=1,Qs.exports=gy()),Qs.exports}var mo=yy(),xy=Symbol.for("preact-signals");function Eu(){if(ho>1)ho--;else{for(var o,r=!1;ci!==void 0;){var l=ci;for(ci=void 0,tu++;l!==void 0;){var s=l.o;if(l.o=void 0,l.f&=-3,!(8&l.f)&&Tp(l))try{l.c()}catch(c){r||(o=c,r=!0)}l=s}}if(tu=0,ho--,r)throw o}}var Ae=void 0,ci=void 0,ho=0,tu=0,Ql=0;function Pp(o){if(Ae!==void 0){var r=o.n;if(r===void 0||r.t!==Ae)return r={i:0,S:o,p:Ae.s,n:void 0,t:Ae,e:void 0,x:void 0,r},Ae.s!==void 0&&(Ae.s.n=r),Ae.s=r,o.n=r,32&Ae.f&&o.S(r),r;if(r.i===-1)return r.i=0,r.n!==void 0&&(r.n.p=r.p,r.p!==void 0&&(r.p.n=r.n),r.p=Ae.s,r.n=void 0,Ae.s.n=r,Ae.s=r),r}}function bt(o){this.v=o,this.i=0,this.n=void 0,this.t=void 0}bt.prototype.brand=xy;bt.prototype.h=function(){return!0};bt.prototype.S=function(o){this.t!==o&&o.e===void 0&&(o.x=this.t,this.t!==void 0&&(this.t.e=o),this.t=o)};bt.prototype.U=function(o){if(this.t!==void 0){var r=o.e,l=o.x;r!==void 0&&(r.x=l,o.e=void 0),l!==void 0&&(l.e=r,o.x=void 0),o===this.t&&(this.t=l)}};bt.prototype.subscribe=function(o){var r=this;return Np(function(){var l=r.value,s=Ae;Ae=void 0;try{o(l)}finally{Ae=s}})};bt.prototype.valueOf=function(){return this.value};bt.prototype.toString=function(){return this.value+""};bt.prototype.toJSON=function(){return this.value};bt.prototype.peek=function(){var o=Ae;Ae=void 0;try{return this.value}finally{Ae=o}};Object.defineProperty(bt.prototype,"value",{get:function(){var o=Pp(this);return o!==void 0&&(o.i=this.i),this.v},set:function(o){if(o!==this.v){if(tu>100)throw new Error("Cycle detected");this.v=o,this.i++,Ql++,ho++;try{for(var r=this.t;r!==void 0;r=r.x)r.t.N()}finally{Eu()}}}});function Tp(o){for(var r=o.s;r!==void 0;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function Lp(o){for(var r=o.s;r!==void 0;r=r.n){var l=r.S.n;if(l!==void 0&&(r.r=l),r.S.n=r,r.i=-1,r.n===void 0){o.s=r;break}}}function zp(o){for(var r=o.s,l=void 0;r!==void 0;){var s=r.p;r.i===-1?(r.S.U(r),s!==void 0&&(s.n=r.n),r.n!==void 0&&(r.n.p=s)):l=r,r.S.n=r.r,r.r!==void 0&&(r.r=void 0),r=s}o.s=l}function wi(o){bt.call(this,void 0),this.x=o,this.s=void 0,this.g=Ql-1,this.f=4}(wi.prototype=new bt).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ql))return!0;if(this.g=Ql,this.f|=1,this.i>0&&!Tp(this))return this.f&=-2,!0;var o=Ae;try{Lp(this),Ae=this;var r=this.x();(16&this.f||this.v!==r||this.i===0)&&(this.v=r,this.f&=-17,this.i++)}catch(l){this.v=l,this.f|=16,this.i++}return Ae=o,zp(this),this.f&=-2,!0};wi.prototype.S=function(o){if(this.t===void 0){this.f|=36;for(var r=this.s;r!==void 0;r=r.n)r.S.S(r)}bt.prototype.S.call(this,o)};wi.prototype.U=function(o){if(this.t!==void 0&&(bt.prototype.U.call(this,o),this.t===void 0)){this.f&=-33;for(var r=this.s;r!==void 0;r=r.n)r.S.U(r)}};wi.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var o=this.t;o!==void 0;o=o.x)o.t.N()}};Object.defineProperty(wi.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var o=Pp(this);if(this.h(),o!==void 0&&(o.i=this.i),16&this.f)throw this.v;return this.v}});function $p(o){var r=o.u;if(o.u=void 0,typeof r=="function"){ho++;var l=Ae;Ae=void 0;try{r()}catch(s){throw o.f&=-2,o.f|=8,Cu(o),s}finally{Ae=l,Eu()}}}function Cu(o){for(var r=o.s;r!==void 0;r=r.n)r.S.U(r);o.x=void 0,o.s=void 0,$p(o)}function wy(o){if(Ae!==this)throw new Error("Out-of-order effect");zp(this),Ae=o,this.f&=-2,8&this.f&&Cu(this),Eu()}function Si(o){this.x=o,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Si.prototype.c=function(){var o=this.S();try{if(8&this.f||this.x===void 0)return;var r=this.x();typeof r=="function"&&(this.u=r)}finally{o()}};Si.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,$p(this),Lp(this),ho++;var o=Ae;return Ae=this,wy.bind(this,o)};Si.prototype.N=function(){2&this.f||(this.f|=2,this.o=ci,ci=this)};Si.prototype.d=function(){this.f|=8,1&this.f||Cu(this)};function Np(o){var r=new Si(o);try{r.c()}catch(l){throw r.d(),l}return r.d.bind(r)}var Ks={exports:{}},Gs={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function Sy(){if(Wf)return Gs;Wf=1;var o=Gl();function r(C,E){return C===E&&(C!==0||1/C===1/E)||C!==C&&E!==E}var l=typeof Object.is=="function"?Object.is:r,s=o.useState,c=o.useEffect,d=o.useLayoutEffect,p=o.useDebugValue;function m(C,E){var b=E(),N=s({inst:{value:b,getSnapshot:E}}),O=N[0].inst,M=N[1];return d(function(){O.value=b,O.getSnapshot=E,h(O)&&M({inst:O})},[C,b,E]),c(function(){return h(O)&&M({inst:O}),C(function(){h(O)&&M({inst:O})})},[C]),p(b),b}function h(C){var E=C.getSnapshot;C=C.value;try{var b=E();return!l(C,b)}catch{return!0}}function g(C,E){return E()}var S=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g:m;return Gs.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:S,Gs}var Qf;function ky(){return Qf||(Qf=1,Ks.exports=Sy()),Ks.exports}var Ey=ky(),Cy=T.version.split(".").map(Number)[0],by=Symbol.for(Cy>=19?"react.transitional.element":"react.element"),Tr,Dp=Symbol.dispose||Symbol.for("Symbol.dispose");function Ys(o,r){var l=r.effect.S();return Tr=r,_y.bind(r,o,l)}function _y(o,r){r(),Tr=o}var Kf,nu,Gf=function(){},Ry=((Kf={o:0,effect:{s:void 0,c:function(){},S:function(){return Gf},d:function(){}},subscribe:function(){return Gf},getSnapshot:function(){return 0},S:function(){},f:function(){}})[Dp]=function(){},Kf),Py=Promise.prototype.then.bind(Promise.resolve());function Ty(){nu||(nu=Py(Ly))}function Ly(){var o;nu=void 0,(o=Tr)==null||o.f()}function Mp(o){Ty();var r=T.useRef();r.current==null&&(typeof window>"u"?r.current=Ry:r.current=function(s){var c,d,p,m,h=0,g=Np(function(){d=this});return d.c=function(){h=h+1|0,m&&m()},(c={o:s,effect:d,subscribe:function(S){return m=S,function(){h=h+1|0,m=void 0,g()}},getSnapshot:function(){return h},S:function(){if(Tr!=null){var S=Tr.o,C=this.o;S==0&&C==0||S==0&&C==1?(Tr.f(),p=Ys(void 0,this)):S==1&&C==0||S==2&&C==0||(p=Ys(Tr,this))}else p=Ys(void 0,this)},f:function(){var S=p;p=void 0,S?.()}})[Dp]=function(){this.f()},c}(o));var l=r.current;return Ey.useSyncExternalStore(l.subscribe,l.getSnapshot,l.getSnapshot),l.S(),l}Object.defineProperties(bt.prototype,{$$typeof:{configurable:!0,value:by},type:{configurable:!0,value:function(o){var r=o.data,l=Mp(1);try{return r.value}finally{l.f()}}},props:{configurable:!0,get:function(){return{data:this}}},ref:{configurable:!0,value:null}});function Op(o){return Mp(o)}const zy=new hy({imports:()=>eu(()=>import("./generated-flow-imports-TmN_mjkH.js").then(o=>o.e),[],import.meta.url)}),Xs={render(){return Promise.resolve()}};function $y(o){const r=o.port,l=o.protocol,d=l==="http:"&&r==="80"||l==="https:"&&r==="443"?o.hostname:o.host;return`${l}//${d}`}function Ap(o){if(o.href.startsWith(document.baseURI))return"/"+o.href.slice(document.baseURI.length)}function Ny(o){if(o.defaultPrevented||o.button!==0||o.shiftKey||o.ctrlKey||o.altKey||o.metaKey)return;let r=o.target;const l=o.composedPath?o.composedPath():o.path||[];for(let d=0;d<l.length;d++){const p=l[d];if(p.nodeName&&p.nodeName.toLowerCase()==="a"){r=p;break}}for(;r&&r.nodeName.toLowerCase()!=="a";)r=r.parentNode;if(!r||r.nodeName.toLowerCase()!=="a")return;const s=r;if(s.target&&s.target.toLowerCase()!=="_self"||s.hasAttribute("download")||s.hasAttribute("router-ignore"))return;if(s.pathname===window.location.pathname&&s.hash!==""){window.location.hash=s.hash;return}if((s.origin||$y(s))===window.location.origin)return Ap(new URL(s.href,s.baseURI))}function Yf(o,r){setTimeout(()=>{window.dispatchEvent(new CustomEvent("vaadin-navigated",{detail:{pathname:o,search:r}})),delete window.Vaadin.Flow.navigation})}function Fp(){}const Xf=()=>Fp;function Dy({children:o,domNode:r,onRemove:l}){return T.useEffect(()=>{r.addEventListener("flow-portal-remove",s=>{s.preventDefault(),l()},{once:!0})},[]),vy.createPortal(o,r)}const Ip="ADD_FLOW_PORTAL";function My(o){return{type:Ip,portal:o}}const Up="REMOVE_FLOW_PORTAL";function Oy(o){return{type:Up,key:o}}function Ay(o,r){switch(r.type){case Ip:return[...o,r.portal];case Up:return o.filter(({key:l})=>l!==r.key);default:return o}}function Fy(o,r){const l=fu(),s=T.useRef([]).current,[c,d]=T.useState(0),p=T.useCallback(()=>{const g=s.shift();if(g===void 0)return;(async()=>{o.current&&(await o.current,o.current=void 0),r.current=!g.callback,l(g.to,g.opts),d(s.length)})()},[l,d]),m=T.useCallback(()=>{queueMicrotask(p)},[p]),h=T.useCallback((g,S,C)=>{s.push({to:g,callback:S,opts:C}),d(s.length),s.length===1&&m()},[d,m]);return T.useEffect(()=>()=>{m()},[c,m]),h}function bu(){var o=Op(1);try{const r=T.useRef(null),l=fu(),s=Yv(({currentLocation:A,nextLocation:X})=>(d.current=d.current||X.pathname===A.pathname&&X.search===A.search&&X.hash===A.hash,!0)),c=or(),d=T.useRef(!1),p=T.useRef(!1),m=T.useRef(!1),h=T.useRef(void 0),g=T.useRef(void 0),S=Fy(g,d),C=up("/"),[E,b]=T.useReducer(Ay,[]),N=T.useCallback(A=>{A.preventDefault();const X=Math.random().toString(36).slice(2);b(My(mo.jsx(Dy,{domNode:A.detail.domNode,onRemove:()=>b(Oy(X)),children:A.detail.children},X)))},[b]),O=T.useCallback(A=>{const X=Ny(A);X&&(A&&A.preventDefault&&A.preventDefault(),d.current=!1,m.current=!0,l(X),window.dispatchEvent(new CustomEvent("close-overlay-drawer")))},[l]),M=T.useCallback(A=>{const X=A.detail,ce=Ap(X);ce&&(A.preventDefault(),l(ce))},[l]),I=T.useCallback(A=>{window.Vaadin.Flow.navigation=!0;const X=A.detail.url.startsWith(document.baseURI)?"/"+A.detail.url.slice(document.baseURI.length):"/"+A.detail.url;m.current=!1,S(X,A.detail.callback,{state:A.detail.state,replace:A.detail.replace})},[l]),Q=T.useCallback(A=>()=>{l(A,{replace:!0})},[l]);return T.useEffect(()=>(window.addEventListener("vaadin-router-go",M),window.addEventListener("vaadin-navigate",I),()=>{window.removeEventListener("vaadin-router-go",M),window.removeEventListener("vaadin-navigate",I)}),[M,I]),T.useEffect(()=>()=>{h.current?.parentNode?.removeChild(h.current),h.current?.removeEventListener("flow-portal-add",N),h.current=void 0},[]),T.useEffect(()=>{if(s.state==="blocked"){if(p.current){const{pathname:fe,state:se}=s.location,xe=fe.substring(C.length);S(xe.startsWith("/")?xe:"/"+xe,!0,{state:se,replace:!0});return}p.current=!0;let A;if(g.current=new Promise((fe,se)=>A={resolve:fe,reject:se}),g.current.then(()=>p.current=!1,()=>p.current=!1),d.current&&!m.current){s.proceed(),A.resolve();return}m.current=!1;const{pathname:X,search:ce}=s.location,_=window?.Vaadin?.routesConfig||[];let ae=Rn(Array.from(_),X);ae&&ae.filter(fe=>fe.route?.element?.type?.name===bu.name).length!=0?(h.current?.onBeforeEnter?.call(h?.current,{pathname:X,search:ce},{prevent(){s.reset(),A.resolve(),d.current=!1},redirect:Q,continue(){s.proceed(),A.resolve()}},Xs),d.current=!0):Promise.resolve(h.current?.onBeforeLeave?.call(h?.current,{pathname:X,search:ce},{prevent:Xf},Xs)).then(fe=>{fe===Fp&&h.current?h.current.serverConnected=se=>{se?(s.reset(),A.resolve()):(s.proceed(),A.resolve())}:(s.proceed(),A.resolve())})}},[s.state,s.location]),T.useEffect(()=>{if(s.state!=="blocked"){if(d.current){d.current=!1,Yf(c.pathname,c.search);return}zy.serverSideRoutes[0].action({pathname:c.pathname,search:c.search}).then(A=>{const X=r.current?.parentNode;return X&&X!==A.parentNode&&(X.append(A),A.addEventListener("flow-portal-add",N),window.addEventListener("click",O),h.current=A),A.onBeforeEnter?.call(A,{pathname:c.pathname,search:c.search},{prevent:Xf,redirect:Q,continue(){Yf(c.pathname,c.search)}},Xs)}).then(A=>{typeof A=="function"&&A()})}},[c]),mo.jsxs(mo.Fragment,{children:[mo.jsx("output",{ref:r,style:{display:"none"}}),E]})}finally{o.f()}}bu.type="FlowContainer";const Iy=[{path:"/*",element:mo.jsx(bu,{})}];function Uy(){const o=[...Iy];return{router:_g([...o],{basename:new URL(document.baseURI).pathname}),routes:o}}const{router:jy,routes:Vy}=Uy();function Hy(){var o=Op(1);try{return mo.jsx(Zv,{router:jy})}finally{o.f()}}const ru=document.getElementById("outlet");let jp=ru._root??Fh.createRoot(ru);ru._root=jp;jp.render(T.createElement(Hy));window.Vaadin??={};window.Vaadin.routesConfig=Vy;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const By=o=>class extends o{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(l,s,c){super.attributeChangedCallback(l,s,c),l==="theme"&&this._set_theme(c)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vp=[],ou=new Set,_u=new Set;function Hp(o){return o&&Object.prototype.hasOwnProperty.call(o,"__themes")}function Wy(o){return Hp(customElements.get(o))}function Qy(o=[]){return[o].flat(1/0).filter(r=>r instanceof xu?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Bp(o,r){return(o||"").split(" ").some(l=>new RegExp(`^${l.split("*").join(".*")}$`,"u").test(r))}function Wp(o){return o.map(r=>r.cssText).join(`
`)}const Kl="vaadin-themable-mixin-style";function Ky(o,r){const l=document.createElement("style");l.id=Kl,l.textContent=Wp(o),r.content.appendChild(l)}function Gy(o){if(!o.shadowRoot)return;const r=o.constructor;if(o instanceof Lr)[...o.shadowRoot.querySelectorAll("style")].forEach(l=>l.remove()),Sp(o.shadowRoot,r.elementStyles);else{const l=o.shadowRoot.getElementById(Kl),s=r.prototype._template;l.textContent=s.content.getElementById(Kl).textContent}}function Yy(o){ou.forEach(r=>{const l=r.deref();l instanceof o?Gy(l):l||ou.delete(r)})}function Qp(o){if(o.prototype instanceof Lr)o.elementStyles=o.finalizeStyles(o.styles);else{const r=o.prototype._template;r.content.getElementById(Kl).textContent=Wp(o.getStylesForThis())}_u.forEach(r=>{const l=customElements.get(r);l!==o&&l.prototype instanceof o&&Qp(l)})}function Xy(o,r){const l=o.__themes;return!l||!r?!1:l.some(s=>s.styles.some(c=>r.some(d=>d.cssText===c.cssText)))}function Zl(o,r,l={}){r=Qy(r),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(o,r,l):Vp.push({themeFor:o,styles:r,include:l.include,moduleId:l.moduleId}),o&&_u.forEach(s=>{if(Bp(o,s)&&Wy(s)){const c=customElements.get(s);Xy(c,r)?console.warn(`Registering styles that already exist for ${s}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${s}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Qp(c),Yy(c)}})}function iu(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Vp}function qy(o=""){let r=0;return o.startsWith("lumo-")||o.startsWith("material-")?r=1:o.startsWith("vaadin-")&&(r=2),r}function Kp(o){const r=[];return o.include&&[].concat(o.include).forEach(l=>{const s=iu().find(c=>c.moduleId===l);s?r.push(...Kp(s),...s.styles):console.warn(`Included moduleId ${l} not found in style registry`)},o.styles),r}function Jy(o){const r=`${o}-default-theme`,l=iu().filter(s=>s.moduleId!==r&&Bp(s.themeFor,o)).map(s=>({...s,styles:[...Kp(s),...s.styles],includePriority:qy(s.moduleId)})).sort((s,c)=>c.includePriority-s.includePriority);return l.length>0?l:iu().filter(s=>s.moduleId===r)}const I0=o=>class extends By(o){constructor(){super(),ou.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&_u.add(this.is),this.elementStyles)return;const l=this.prototype._template;!l||Hp(this)||Ky(this.getStylesForThis(),l)}static finalizeStyles(l){const s=this.getStylesForThis();return l?[...[l].flat(1/0),...s]:s}static getStylesForThis(){const l=o.__themes||[],s=Object.getPrototypeOf(this.prototype),c=(s?s.constructor.__themes:[])||[];this.__themes=[...l,...c,...Jy(this.is)];const d=this.__themes.flatMap(p=>p.styles);return d.filter((p,m)=>m===d.lastIndexOf(p))}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zy=(o,...r)=>{const l=document.createElement("style");l.id=o,l.textContent=r.map(s=>s.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",l)},ir=(o,...r)=>{Zy(`lumo-${o}`,r)};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||={};window.Vaadin.featureFlags||={};function e0(o){return o.replace(/-[a-z]/gu,r=>r[1].toUpperCase())}const _n={};function t0(o,r="24.7.1"){if(Object.defineProperty(o,"version",{get(){return r}}),o.experimental){const s=typeof o.experimental=="string"?o.experimental:`${e0(o.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[s]&&!_n[s]){_n[s]=new Set,_n[s].add(o),Object.defineProperty(window.Vaadin.featureFlags,s,{get(){return _n[s].size===0},set(c){c&&_n[s].size>0&&(_n[s].forEach(d=>{customElements.define(d.is,d)}),_n[s].clear())}});return}else if(_n[s]){_n[s].add(o);return}}const l=customElements.get(o.is);if(!l)customElements.define(o.is,o);else{const s=l.version;s&&o.version&&s===o.version?console.warn(`The component ${o.is} has been loaded twice`):console.error(`Tried to define ${o.is} version ${o.version} when version ${l.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class n0 extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}t0(n0);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const r0=rt`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Ru=rt`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Zl("",Ru,{moduleId:"lumo-typography"});ir("typography-props",r0);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const o0=rt`
  ${wp(Ru.cssText.replace(/,\s*:host/su,""))}
`;ir("typography",o0);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const i0=rt`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;ir("color-props",i0);const Pu=rt`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;Zl("",Pu,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ir("color",Pu);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const l0=rt`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;rt`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;ir("style-props",l0);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tu=rt`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] > vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] > vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] > vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Zl("",Tu,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ir("badge",Tu);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const a0=rt`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const s0=rt`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint {
    background-color: var(--lumo-tint);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }

  .bg-shade {
    background-color: var(--lumo-shade);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }

  .bg-contrast {
    background-color: var(--lumo-contrast);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const u0=rt`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }

  /* === Border color === */
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const c0=rt`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const d0=rt`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-1 {
    flex: 1 1 0%;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow {
    flex-grow: 1;
  }
  .flex-grow-0 {
    flex-grow: 0;
  }

  /* === Flex shrink === */
  .flex-shrink {
    flex-shrink: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:items-baseline {
      align-items: baseline;
    }
    .sm\\:items-center {
      align-items: center;
    }
    .sm\\:items-end {
      align-items: flex-end;
    }
    .sm\\:items-start {
      align-items: flex-start;
    }
    .sm\\:items-stretch {
      align-items: stretch;
    }
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:items-baseline {
      align-items: baseline;
    }
    .md\\:items-center {
      align-items: center;
    }
    .md\\:items-end {
      align-items: flex-end;
    }
    .md\\:items-start {
      align-items: flex-start;
    }
    .md\\:items-stretch {
      align-items: stretch;
    }
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:items-baseline {
      align-items: baseline;
    }
    .lg\\:items-center {
      align-items: center;
    }
    .lg\\:items-end {
      align-items: flex-end;
    }
    .lg\\:items-start {
      align-items: flex-start;
    }
    .lg\\:items-stretch {
      align-items: stretch;
    }
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:items-baseline {
      align-items: baseline;
    }
    .xl\\:items-center {
      align-items: center;
    }
    .xl\\:items-end {
      align-items: flex-end;
    }
    .xl\\:items-start {
      align-items: flex-start;
    }
    .xl\\:items-stretch {
      align-items: stretch;
    }
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:items-baseline {
      align-items: baseline;
    }
    .\\32xl\\:items-center {
      align-items: center;
    }
    .\\32xl\\:items-end {
      align-items: flex-end;
    }
    .\\32xl\\:items-start {
      align-items: flex-start;
    }
    .\\32xl\\:items-stretch {
      align-items: stretch;
    }
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const f0=rt`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .z-auto {
    z-index: auto;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\:grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\:grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\:grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const p0=rt`
  /* === Box shadow === */
  .shadow-none {
    box-shadow: none;
  }
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const m0=rt`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const h0=rt`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const v0=rt`
  .transition {
    transition-property: -webkit-backdrop-filter, backdrop-filter, background-color, border-color, box-shadow, color,
      fill, filter, opacity, rotate, scale, stroke, text-decoration-color, transform, translate;
    transition-timing-function: var(--lumo-utility-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
    transition-duration: var(--lumo-utility-transition-duration, 150ms);
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: var(--lumo-utility-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
    transition-duration: var(--lumo-utility-transition-duration, 150ms);
  }

  .transition-colors {
    transition-property: background-color, border-color, color, fill, stroke, text-decoration-color;
    transition-timing-function: var(--lumo-utility-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
    transition-duration: var(--lumo-utility-transition-duration, 150ms);
  }

  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--lumo-utility-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
    transition-duration: var(--lumo-utility-transition-duration, 150ms);
  }

  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--lumo-utility-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
    transition-duration: var(--lumo-utility-transition-duration, 150ms);
  }

  .transition-transform {
    transition-property: rotate, scale, transform, translate;
    transition-timing-function: var(--lumo-utility-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
    transition-duration: var(--lumo-utility-transition-duration, 150ms);
  }

  .transition-none {
    transition-property: none;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const g0=rt`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lu=rt`
${a0}
${s0}
${u0}
${c0}
${d0}
${f0}
${p0}
${m0}
${h0}
${v0}
${g0}
`;Zl("",Lu,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ir("utility",Lu);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var o="ShadyCSS"in window&&!ShadyCSS.nativeShadow,r=document.implementation.createHTMLDocument(""),l=new WeakMap,s=typeof DOMException=="object"?Error:DOMException,c=Object.defineProperty,d=Array.prototype.forEach,p=/@import.+?;?$/gm;function m(D){var V=D.replace(p,"");return V!==D&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),V.trim()}function h(D){return"isConnected"in D?D.isConnected:document.contains(D)}function g(D){return D.filter(function(V,Z){return D.indexOf(V)===Z})}function S(D,V){return D.filter(function(Z){return V.indexOf(Z)===-1})}function C(D){D.parentNode.removeChild(D)}function E(D){return D.shadowRoot||l.get(D)}var b=["addRule","deleteRule","insertRule","removeRule"],N=CSSStyleSheet,O=N.prototype;O.replace=function(){return Promise.reject(new s("Can't call replace on non-constructed CSSStyleSheets."))},O.replaceSync=function(){throw new s("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function M(D){return typeof D=="object"?Ke.isPrototypeOf(D)||O.isPrototypeOf(D):!1}function I(D){return typeof D=="object"?O.isPrototypeOf(D):!1}var Q=new WeakMap,A=new WeakMap,X=new WeakMap,ce=new WeakMap;function _(D,V){var Z=document.createElement("style");return X.get(D).set(V,Z),A.get(D).push(V),Z}function ae(D,V){return X.get(D).get(V)}function fe(D,V){X.get(D).delete(V),A.set(D,A.get(D).filter(function(Z){return Z!==V}))}function se(D,V){requestAnimationFrame(function(){V.textContent=Q.get(D).textContent,ce.get(D).forEach(function(Z){return V.sheet[Z.method].apply(V.sheet,Z.args)})})}function xe(D){if(!Q.has(D))throw new TypeError("Illegal invocation")}function Me(){var D=this,V=document.createElement("style");r.body.appendChild(V),Q.set(D,V),A.set(D,[]),X.set(D,new WeakMap),ce.set(D,[])}var Ke=Me.prototype;Ke.replace=function(V){try{return this.replaceSync(V),Promise.resolve(this)}catch(Z){return Promise.reject(Z)}},Ke.replaceSync=function(V){if(xe(this),typeof V=="string"){var Z=this;Q.get(Z).textContent=m(V),ce.set(Z,[]),A.get(Z).forEach(function(Oe){Oe.isConnected()&&se(Z,ae(Z,Oe))})}},c(Ke,"cssRules",{configurable:!0,enumerable:!0,get:function(){return xe(this),Q.get(this).sheet.cssRules}}),c(Ke,"media",{configurable:!0,enumerable:!0,get:function(){return xe(this),Q.get(this).sheet.media}}),b.forEach(function(D){Ke[D]=function(){var V=this;xe(V);var Z=arguments;ce.get(V).push({method:D,args:Z}),A.get(V).forEach(function(ot){if(ot.isConnected()){var Be=ae(V,ot).sheet;Be[D].apply(Be,Z)}});var Oe=Q.get(V).sheet;return Oe[D].apply(Oe,Z)}}),c(Me,Symbol.hasInstance,{configurable:!0,value:M});var Ze={childList:!0,subtree:!0},Xe=new WeakMap;function qe(D){var V=Xe.get(D);return V||(V=new ve(D),Xe.set(D,V)),V}function Ee(D){c(D.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return qe(this).sheets},set:function(V){qe(this).update(V)}})}function Pe(D,V){for(var Z=document.createNodeIterator(D,NodeFilter.SHOW_ELEMENT,function(ot){return E(ot)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),Oe=void 0;Oe=Z.nextNode();)V(E(Oe))}var K=new WeakMap,re=new WeakMap,Y=new WeakMap;function k(D,V){return V instanceof HTMLStyleElement&&re.get(D).some(function(Z){return ae(Z,D)})}function F(D){var V=K.get(D);return V instanceof Document?V.body:V}function de(D){var V=document.createDocumentFragment(),Z=re.get(D),Oe=Y.get(D),ot=F(D);Oe.disconnect(),Z.forEach(function(Be){V.appendChild(ae(Be,D)||_(Be,D))}),ot.insertBefore(V,null),Oe.observe(ot,Ze),Z.forEach(function(Be){se(Be,ae(Be,D))})}function ve(D){var V=this;V.sheets=[],K.set(V,D),re.set(V,[]),Y.set(V,new MutationObserver(function(Z,Oe){if(!document){Oe.disconnect();return}Z.forEach(function(ot){o||d.call(ot.addedNodes,function(Be){Be instanceof Element&&Pe(Be,function(ut){qe(ut).connect()})}),d.call(ot.removedNodes,function(Be){Be instanceof Element&&(k(V,Be)&&de(V),o||Pe(Be,function(ut){qe(ut).disconnect()}))})})}))}if(ve.prototype={isConnected:function(){var D=K.get(this);return D instanceof Document?D.readyState!=="loading":h(D.host)},connect:function(){var D=F(this);Y.get(this).observe(D,Ze),re.get(this).length>0&&de(this),Pe(D,function(V){qe(V).connect()})},disconnect:function(){Y.get(this).disconnect()},update:function(D){var V=this,Z=K.get(V)===document?"Document":"ShadowRoot";if(!Array.isArray(D))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+Z+": Iterator getter is not callable.");if(!D.every(M))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+Z+": Failed to convert value to 'CSSStyleSheet'");if(D.some(I))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+Z+": Can't adopt non-constructed stylesheets");V.sheets=D;var Oe=re.get(V),ot=g(D),Be=S(Oe,ot);Be.forEach(function(ut){C(ae(ut,V)),fe(ut,V)}),re.set(V,ot),V.isConnected()&&ot.length>0&&de(V)}},window.CSSStyleSheet=Me,Ee(Document),"ShadowRoot"in window){Ee(ShadowRoot);var we=Element.prototype,Se=we.attachShadow;we.attachShadow=function(V){var Z=Se.call(this,V);return V.mode==="closed"&&l.set(this,Z),Z}}var be=qe(document);be.isConnected()?be.connect():document.addEventListener("DOMContentLoaded",be.connect.bind(be))})();const{toString:y0}=Object.prototype;function x0(o){return y0.call(o)==="[object RegExp]"}function w0(o,{preserve:r=!0,whitespace:l=!0,all:s}={}){if(s)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let c=r,d;typeof r=="function"?(c=!1,d=r):x0(r)&&(c=!1,d=S=>r.test(S));let p=!1,m="",h="",g="";for(let S=0;S<o.length;S++){if(m=o[S],o[S-1]!=="\\"&&(m==='"'||m==="'")&&(p===m?p=!1:p||(p=m)),!p&&m==="/"&&o[S+1]==="*"){const C=o[S+2]==="!";let E=S+2;for(;E<o.length;E++){if(o[E]==="*"&&o[E+1]==="/"){c&&C||d&&d(h)?g+=`/*${h}*/`:l||(o[E+2]===`
`?E++:o[E+2]+o[E+3]===`\r
`&&(E+=2)),h="";break}h+=o[E]}S=E+1;continue}g+=m}return g}const S0=CSSStyleSheet.toString().includes("document.createElement"),k0=(o,r)=>{const l=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(o)!=null&&(o=w0(o));for(var s,c=o;(s=l.exec(o))!==null;){c=c.replace(s[0],"");const d=document.createElement("link");d.rel="stylesheet",d.href=s[2]||s[4];const p=s[1]||s[5];p&&(d.media=p),r===document?document.head.appendChild(d):r.appendChild(d)}return c},E0=(o,r,l)=>(l?r.adoptedStyleSheets=[o,...r.adoptedStyleSheets]:r.adoptedStyleSheets=[...r.adoptedStyleSheets,o],()=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(s=>s!==o)}),C0=(o,r,l)=>{const s=new CSSStyleSheet;return s.replaceSync(o),S0?E0(s,r,l):(l?r.adoptedStyleSheets.splice(0,0,s):r.adoptedStyleSheets.push(s),()=>{r.adoptedStyleSheets.splice(r.adoptedStyleSheets.indexOf(s),1)})},b0=(o,r)=>{const l=document.createElement("style");return l.type="text/css",l.textContent=o,document.head.insertBefore(l,void 0),()=>{l.remove()}},co=(o,r,l,s)=>{if(l===document){const d=_0(o);if(window.Vaadin.theme.injectedGlobalCss.indexOf(d)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(d)}const c=k0(o,l);return l===document?b0(c):C0(c,l,s)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function qf(o){let r,l,s=2166136261;for(r=0,l=o.length;r<l;r++)s^=o.charCodeAt(r),s+=(s<<1)+(s<<4)+(s<<7)+(s<<8)+(s<<24);return("0000000"+(s>>>0).toString(16)).substr(-8)}function _0(o){let r=qf(o);return r+qf(r+o)}document["_vaadintheme_vaadin-prod-bundle_componentCss"]||(document["_vaadintheme_vaadin-prod-bundle_componentCss"]=!0);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gp=rt`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;ir("spacing-props",Gp);const R0="",P0=o=>{const r=[];o!==document&&(r.push(co(Ru.cssText,"",o,!0)),r.push(co(Pu.cssText,"",o,!0)),r.push(co(Gp.cssText,"",o,!0)),r.push(co(Tu.cssText,"",o,!0)),r.push(co(Lu.cssText,"",o,!0)),r.push(co(R0.toString(),"",o)))},T0=P0;T0(document);export{ly as B,pt as E,L0 as O,I0 as T,eu as _,Zl as a,fy as b,Pu as c,t0 as d,cy as e,dy as f,$r as g,Vp as h,rt as i,wp as j,wu as k,By as l,ir as m,N0 as n,T as o,Fh as p,mo as q,Lr as r,Ru as t,Jg as x};
