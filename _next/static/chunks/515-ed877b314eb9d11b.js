(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[515],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var u=o.apply(null,n);u&&e.push(u)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},8693:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6512:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),l=n(5509),i=n(4514),f=n(4130),c=n(146),s=n(4318),d=n(6514),p=n(8681),v=n(6675),h=n(8693),y=n(6085),m=new Set;function g(e,t,n,r,o){if(o||i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){var a=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(a))return;m.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(function(e){})}}function b(e){return"string"==typeof e?e:f.formatUrl(e)}var _=u.default.forwardRef(function(e,t){var n,o,f=e.href,m=e.as,_=e.children,M=e.prefetch,C=e.passHref,k=e.replace,O=e.shallow,j=e.scroll,x=e.locale,S=e.onClick,w=e.onMouseEnter,E=e.onTouchStart,P=e.legacyBehavior,A=void 0!==P&&P,I=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,A&&("string"==typeof n||"number"==typeof n)&&(n=u.default.createElement("a",null,n));var U=!1!==M,L=u.default.useContext(d.RouterContext),R=u.default.useContext(p.AppRouterContext),T=null!=L?L:R,H=!L,Z=u.default.useMemo(function(){if(!L){var e=b(f);return{href:e,as:m?b(m):e}}var t=r(l.resolveHref(L,f,!0),2),n=t[0],o=t[1];return{href:n,as:m?l.resolveHref(L,m):o||n}},[L,f,m]),N=Z.href,B=Z.as,D=u.default.useRef(N),K=u.default.useRef(B);A&&(o=u.default.Children.only(n));var q=A?o&&"object"==typeof o&&o.ref:t,z=r(v.useIntersection({rootMargin:"200px"}),3),F=z[0],$=z[1],Q=z[2],W=u.default.useCallback(function(e){(K.current!==B||D.current!==N)&&(Q(),K.current=B,D.current=N),F(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[B,q,N,Q,F]);u.default.useEffect(function(){T&&$&&U&&g(T,N,B,{locale:x},H)},[B,N,$,x,U,null==L?void 0:L.locale,T,H]);var G={ref:W,onClick:function(e){A||"function"!=typeof S||S(e),A&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,r,o,a,l,f,c,s){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((d=e.currentTarget.getAttribute("target"))&&"_self"!==d||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!c&&!i.isLocalURL(n)))){e.preventDefault();var d,p=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:f,scroll:l}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};c?u.default.startTransition(p):p()}}(e,T,N,B,k,O,j,x,H,U)},onMouseEnter:function(e){A||"function"!=typeof w||w(e),A&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),T&&(U||!H)&&g(T,N,B,{locale:x,priority:!0,bypassPrefetchedCheck:!0},H)},onTouchStart:function(e){A||"function"!=typeof E||E(e),A&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),T&&(U||!H)&&g(T,N,B,{locale:x,priority:!0,bypassPrefetchedCheck:!0},H)}};if(c.isAbsoluteUrl(B))G.href=B;else if(!A||C||"a"===o.type&&!("href"in o.props)){var J=void 0!==x?x:null==L?void 0:L.locale,V=(null==L?void 0:L.isLocaleDomain)&&h.getDomainLocale(B,J,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);G.href=V||y.addBasePath(s.addLocale(B,J,null==L?void 0:L.defaultLocale))}return A?u.default.cloneElement(o,G):u.default.createElement("a",Object.assign({},I,G),n)});t.default=_,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6675:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!u,c=r(o.useState(!1),2),s=c[0],d=c[1],p=o.useRef(null),v=o.useCallback(function(e){p.current=e},[]);return o.useEffect(function(){if(u){if(!f&&!s){var e,r,o,c,v=p.current;if(v&&v.tagName)return r=(e=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=l.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),l.set(n,t),t}({root:null==t?void 0:t.current,rootMargin:n})).id,o=e.observer,(c=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(c.delete(v),o.unobserve(v),0===c.size){o.disconnect(),l.delete(r);var e=i.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&i.splice(e,1)}}}}else if(!s){var h=a.requestIdleCallback(function(){return d(!0)});return function(){return a.cancelIdleCallback(h)}}},[f,n,t,s,p.current]),[v,s,o.useCallback(function(){d(!1)},[])]};var o=n(7294),a=n(6682),u="function"==typeof IntersectionObserver,l=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=r},1342:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,r=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==r&&r}},1597:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=c,t.default=void 0;var r=n(6495).Z,o=n(2648).Z,a=(0,n(1598).Z)(n(7294)),u=o(n(7271)),l=n(5505),i=n(236),f=n(1342);function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(3766);var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){var n,o,u,l,i=t.inAmpMode;return e.reduce(s,[]).reverse().concat(c(i).reverse()).filter((n=new Set,o=new Set,u=new Set,l={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var a=e.key.slice(e.key.indexOf("$")+1);n.has(a)?t=!1:n.add(a)}switch(e.type){case"title":case"base":o.has(e.type)?t=!1:o.add(e.type);break;case"meta":for(var i=0,f=d.length;i<f;i++){var c=d[i];if(e.props.hasOwnProperty(c)){if("charSet"===c)u.has(c)?t=!1:u.add(c);else{var s=e.props[c],p=l[c]||new Set;("name"!==c||!r)&&p.has(s)?t=!1:(p.add(s),l[c]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!i&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var o=r({},e.props||{});return o["data-href"]=o.href,o.href=void 0,o["data-optimized-fonts"]=!0,a.default.cloneElement(e,o)}return a.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=a.useContext(l.AmpStateContext),r=a.useContext(i.HeadManagerContext);return a.default.createElement(u.default,{reduceComponentsToState:p,headManager:r,inAmpMode:f.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,l=e.reduceComponentsToState;function i(){if(n&&n.mountedInstances){var t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(l(t,e))}}return o&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),i()),a(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),a(function(){return n&&(n._pendingUpdate=i),function(){n&&(n._pendingUpdate=i)}}),u(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var r=(0,n(1598).Z)(n(7294)),o=!1,a=r.useLayoutEffect,u=o?function(){}:r.useEffect},3766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},9008:function(e,t,n){e.exports=n(1597)},1664:function(e,t,n){e.exports=n(6512)},1163:function(e,t,n){e.exports=n(1996)}}]);