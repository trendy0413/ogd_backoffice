/*
Trix 0.10.1
Copyright © 2017 Basecamp, LLC
http://trix-editor.org/
 */
(function(){}).call(this),function(){var t;null==window.Set&&(window.Set=t=function(){function t(){this.clear()}return t.prototype.clear=function(){return this.values=[]},t.prototype.has=function(t){return-1!==this.values.indexOf(t)},t.prototype.add=function(t){return this.has(t)||this.values.push(t),this},t.prototype["delete"]=function(t){var e;return-1===(e=this.values.indexOf(t))?!1:(this.values.splice(e,1),!0)},t.prototype.forEach=function(){var t;return(t=this.values).forEach.apply(t,arguments)},t}())}.call(this),function(t){function e(){}function n(t,e){return function(){t.apply(e,arguments)}}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this)}function i(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void h(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?r:s)(e.promise,t._value);var o;try{o=n(t._value)}catch(i){return void s(e.promise,i)}r(e.promise,o)}))}function r(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var i=e.then;if(e instanceof o)return t._state=3,t._value=e,void a(t);if("function"==typeof i)return void c(n(i,e),t)}t._state=1,t._value=e,a(t)}catch(r){s(t,r)}}function s(t,e){t._state=2,t._value=e,a(t)}function a(t){2===t._state&&0===t._deferreds.length&&setTimeout(function(){t._handled||p(t._value)},1);for(var e=0,n=t._deferreds.length;n>e;e++)i(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,r(e,t))},function(t){n||(n=!0,s(e,t))})}catch(o){if(n)return;n=!0,s(e,o)}}var l=setTimeout,h="function"==typeof setImmediate&&setImmediate||function(t){l(t,1)},p=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};o.prototype["catch"]=function(t){return this.then(null,t)},o.prototype.then=function(t,n){var r=new o(e);return i(this,new u(t,n,r)),r},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function o(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){o(r,t)},n)}e[r]=s,0===--i&&t(e)}catch(u){n(u)}}if(0===e.length)return t([]);for(var i=e.length,r=0;r<e.length;r++)o(r,e[r])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){for(var o=0,i=t.length;i>o;o++)t[o].then(e,n)})},o._setImmediateFn=function(t){h=t},o._setUnhandledRejectionFn=function(t){p=t},"undefined"!=typeof module&&module.exports?module.exports=o:t.Promise||(t.Promise=o)}(this),/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
"undefined"==typeof WeakMap&&!function(){var t=Object.defineProperty,e=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(e++ +"__")};n.prototype={set:function(e,n){var o=e[this.name];return o&&o[0]===e?o[1]=n:t(e,this.name,{value:[e,n],writable:!0}),this},get:function(t){var e;return(e=t[this.name])&&e[0]===t?e[1]:void 0},"delete":function(t){var e=t[this.name];return e&&e[0]===t?(e[0]=e[1]=void 0,!0):!1},has:function(t){var e=t[this.name];return e?e[0]===t:!1}},window.WeakMap=n}(),function(t){function e(t){A.push(t),b||(b=!0,g(o))}function n(t){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(t)||t}function o(){b=!1;var t=A;A=[],t.sort(function(t,e){return t.uid_-e.uid_});var e=!1;t.forEach(function(t){var n=t.takeRecords();i(t),n.length&&(t.callback_(n,t),e=!0)}),e&&o()}function i(t){t.nodes_.forEach(function(e){var n=m.get(e);n&&n.forEach(function(e){e.observer===t&&e.removeTransientObservers()})})}function r(t,e){for(var n=t;n;n=n.parentNode){var o=m.get(n);if(o)for(var i=0;i<o.length;i++){var r=o[i],s=r.options;if(n===t||s.subtree){var a=e(s);a&&r.enqueue(a)}}}}function s(t){this.callback_=t,this.nodes_=[],this.records_=[],this.uid_=++C}function a(t,e){this.type=t,this.target=e,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function u(t){var e=new a(t.type,t.target);return e.addedNodes=t.addedNodes.slice(),e.removedNodes=t.removedNodes.slice(),e.previousSibling=t.previousSibling,e.nextSibling=t.nextSibling,e.attributeName=t.attributeName,e.attributeNamespace=t.attributeNamespace,e.oldValue=t.oldValue,e}function c(t,e){return w=new a(t,e)}function l(t){return x?x:(x=u(w),x.oldValue=t,x)}function h(){w=x=void 0}function p(t){return t===x||t===w}function d(t,e){return t===e?t:x&&p(t)?x:null}function f(t,e,n){this.observer=t,this.target=e,this.options=n,this.transientObservedNodes=[]}if(!t.JsMutationObserver){var g,m=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))g=setTimeout;else if(window.setImmediate)g=window.setImmediate;else{var y=[],v=String(Math.random());window.addEventListener("message",function(t){if(t.data===v){var e=y;y=[],e.forEach(function(t){t()})}}),g=function(t){y.push(t),window.postMessage(v,"*")}}var b=!1,A=[],C=0;s.prototype={observe:function(t,e){if(t=n(t),!e.childList&&!e.attributes&&!e.characterData||e.attributeOldValue&&!e.attributes||e.attributeFilter&&e.attributeFilter.length&&!e.attributes||e.characterDataOldValue&&!e.characterData)throw new SyntaxError;var o=m.get(t);o||m.set(t,o=[]);for(var i,r=0;r<o.length;r++)if(o[r].observer===this){i=o[r],i.removeListeners(),i.options=e;break}i||(i=new f(this,t,e),o.push(i),this.nodes_.push(t)),i.addListeners()},disconnect:function(){this.nodes_.forEach(function(t){for(var e=m.get(t),n=0;n<e.length;n++){var o=e[n];if(o.observer===this){o.removeListeners(),e.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var t=this.records_;return this.records_=[],t}};var w,x;f.prototype={enqueue:function(t){var n=this.observer.records_,o=n.length;if(n.length>0){var i=n[o-1],r=d(i,t);if(r)return void(n[o-1]=r)}else e(this.observer);n[o]=t},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(t){var e=this.options;e.attributes&&t.addEventListener("DOMAttrModified",this,!0),e.characterData&&t.addEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.addEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(t){var e=this.options;e.attributes&&t.removeEventListener("DOMAttrModified",this,!0),e.characterData&&t.removeEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.removeEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(t){if(t!==this.target){this.addListeners_(t),this.transientObservedNodes.push(t);var e=m.get(t);e||m.set(t,e=[]),e.push(this)}},removeTransientObservers:function(){var t=this.transientObservedNodes;this.transientObservedNodes=[],t.forEach(function(t){this.removeListeners_(t);for(var e=m.get(t),n=0;n<e.length;n++)if(e[n]===this){e.splice(n,1);break}},this)},handleEvent:function(t){switch(t.stopImmediatePropagation(),t.type){case"DOMAttrModified":var e=t.attrName,n=t.relatedNode.namespaceURI,o=t.target,i=new c("attributes",o);i.attributeName=e,i.attributeNamespace=n;var s=t.attrChange===MutationEvent.ADDITION?null:t.prevValue;r(o,function(t){return!t.attributes||t.attributeFilter&&t.attributeFilter.length&&-1===t.attributeFilter.indexOf(e)&&-1===t.attributeFilter.indexOf(n)?void 0:t.attributeOldValue?l(s):i});break;case"DOMCharacterDataModified":var o=t.target,i=c("characterData",o),s=t.prevValue;r(o,function(t){return t.characterData?t.characterDataOldValue?l(s):i:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(t.target);case"DOMNodeInserted":var a,u,p=t.target;"DOMNodeInserted"===t.type?(a=[p],u=[]):(a=[],u=[p]);var d=p.previousSibling,f=p.nextSibling,i=c("childList",t.target.parentNode);i.addedNodes=a,i.removedNodes=u,i.previousSibling=d,i.nextSibling=f,r(t.relatedNode,function(t){return t.childList?i:void 0})}h()}},t.JsMutationObserver=s,t.MutationObserver||(t.MutationObserver=s,s._isPolyfilled=!0)}}(self),function(){"use strict";if(!window.performance){var t=Date.now();window.performance={now:function(){return Date.now()-t}}}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?function(e){return t(function(){e(performance.now())})}:function(t){return window.setTimeout(t,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}}());var e=function(){var t=document.createEvent("Event");return t.initEvent("foo",!0,!0),t.preventDefault(),t.defaultPrevented}();if(!e){var n=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(n.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var o=/Trident/.test(navigator.userAgent);if((!window.CustomEvent||o&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(t,e){e=e||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,Boolean(e.bubbles),Boolean(e.cancelable),e.detail),n},window.CustomEvent.prototype=window.Event.prototype),!window.Event||o&&"function"!=typeof window.Event){var i=window.Event;window.Event=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n},window.Event.prototype=i.prototype}}(window.WebComponents),window.CustomElements=window.CustomElements||{flags:{}},function(t){var e=t.flags,n=[],o=function(t){n.push(t)},i=function(){n.forEach(function(e){e(t)})};t.addModule=o,t.initializeModules=i,t.hasNative=Boolean(document.registerElement),t.isIE=/Trident/.test(navigator.userAgent),t.useNative=!e.register&&t.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative)}(window.CustomElements),window.CustomElements.addModule(function(t){function e(t,e){n(t,function(t){return e(t)?!0:void o(t,e)}),o(t,e)}function n(t,e,o){var i=t.firstElementChild;if(!i)for(i=t.firstChild;i&&i.nodeType!==Node.ELEMENT_NODE;)i=i.nextSibling;for(;i;)e(i,o)!==!0&&n(i,e,o),i=i.nextElementSibling;return null}function o(t,n){for(var o=t.shadowRoot;o;)e(o,n),o=o.olderShadowRoot}function i(t,e){r(t,e,[])}function r(t,e,n){if(t=window.wrap(t),!(n.indexOf(t)>=0)){n.push(t);for(var o,i=t.querySelectorAll("link[rel="+s+"]"),a=0,u=i.length;u>a&&(o=i[a]);a++)o.import&&r(o.import,e,n);e(t)}}var s=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";t.forDocumentTree=i,t.forSubtree=e}),window.CustomElements.addModule(function(t){function e(t,e){return n(t,e)||o(t,e)}function n(e,n){return t.upgrade(e,n)?!0:void(n&&s(e))}function o(t,e){b(t,function(t){return n(t,e)?!0:void 0})}function i(t){x.push(t),w||(w=!0,setTimeout(r))}function r(){w=!1;for(var t,e=x,n=0,o=e.length;o>n&&(t=e[n]);n++)t();x=[]}function s(t){C?i(function(){a(t)}):a(t)}function a(t){t.__upgraded__&&!t.__attached&&(t.__attached=!0,t.attachedCallback&&t.attachedCallback())}function u(t){c(t),b(t,function(t){c(t)})}function c(t){C?i(function(){l(t)}):l(t)}function l(t){t.__upgraded__&&t.__attached&&(t.__attached=!1,t.detachedCallback&&t.detachedCallback())}function h(t){for(var e=t,n=window.wrap(document);e;){if(e==n)return!0;e=e.parentNode||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host}}function p(t){if(t.shadowRoot&&!t.shadowRoot.__watched){v.dom&&console.log("watching shadow-root for: ",t.localName);for(var e=t.shadowRoot;e;)g(e),e=e.olderShadowRoot}}function d(t,n){if(v.dom){var o=n[0];if(o&&"childList"===o.type&&o.addedNodes&&o.addedNodes){for(var i=o.addedNodes[0];i&&i!==document&&!i.host;)i=i.parentNode;var r=i&&(i.URL||i._URL||i.host&&i.host.localName)||"";r=r.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",n.length,r||"")}var s=h(t);n.forEach(function(t){"childList"===t.type&&(E(t.addedNodes,function(t){t.localName&&e(t,s)}),E(t.removedNodes,function(t){t.localName&&u(t)}))}),v.dom&&console.groupEnd()}function f(t){for(t=window.wrap(t),t||(t=window.wrap(document));t.parentNode;)t=t.parentNode;var e=t.__observer;e&&(d(t,e.takeRecords()),r())}function g(t){if(!t.__observer){var e=new MutationObserver(d.bind(this,t));e.observe(t,{childList:!0,subtree:!0}),t.__observer=e}}function m(t){t=window.wrap(t),v.dom&&console.group("upgradeDocument: ",t.baseURI.split("/").pop());var n=t===window.wrap(document);e(t,n),g(t),v.dom&&console.groupEnd()}function y(t){A(t,m)}var v=t.flags,b=t.forSubtree,A=t.forDocumentTree,C=window.MutationObserver._isPolyfilled&&v["throttle-attached"];t.hasPolyfillMutations=C,t.hasThrottledAttached=C;var w=!1,x=[],E=Array.prototype.forEach.call.bind(Array.prototype.forEach),S=Element.prototype.createShadowRoot;S&&(Element.prototype.createShadowRoot=function(){var t=S.call(this);return window.CustomElements.watchShadow(this),t}),t.watchShadow=p,t.upgradeDocumentTree=y,t.upgradeDocument=m,t.upgradeSubtree=o,t.upgradeAll=e,t.attached=s,t.takeRecords=f}),window.CustomElements.addModule(function(t){function e(e,o){if("template"===e.localName&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),!e.__upgraded__&&e.nodeType===Node.ELEMENT_NODE){var i=e.getAttribute("is"),r=t.getRegisteredDefinition(e.localName)||t.getRegisteredDefinition(i);if(r&&(i&&r.tag==e.localName||!i&&!r.extends))return n(e,r,o)}}function n(e,n,i){return s.upgrade&&console.group("upgrade:",e.localName),n.is&&e.setAttribute("is",n.is),o(e,n),e.__upgraded__=!0,r(e),i&&t.attached(e),t.upgradeSubtree(e,i),s.upgrade&&console.groupEnd(),e}function o(t,e){Object.__proto__?t.__proto__=e.prototype:(i(t,e.prototype,e.native),t.__proto__=e.prototype)}function i(t,e,n){for(var o={},i=e;i!==n&&i!==HTMLElement.prototype;){for(var r,s=Object.getOwnPropertyNames(i),a=0;r=s[a];a++)o[r]||(Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r)),o[r]=1);i=Object.getPrototypeOf(i)}}function r(t){t.createdCallback&&t.createdCallback()}var s=t.flags;t.upgrade=e,t.upgradeWithDefinition=n,t.implementPrototype=o}),window.CustomElements.addModule(function(t){function e(e,o){var u=o||{};if(!e)throw new Error("document.registerElement: first argument `name` must not be empty");if(e.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(e)+"'.");if(i(e))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(e)+"'. The type name is invalid.");if(c(e))throw new Error("DuplicateDefinitionError: a type with name '"+String(e)+"' is already registered");return u.prototype||(u.prototype=Object.create(HTMLElement.prototype)),u.__name=e.toLowerCase(),u.extends&&(u.extends=u.extends.toLowerCase()),u.lifecycle=u.lifecycle||{},u.ancestry=r(u.extends),s(u),a(u),n(u.prototype),l(u.__name,u),u.ctor=h(u),u.ctor.prototype=u.prototype,u.prototype.constructor=u.ctor,t.ready&&m(document),u.ctor}function n(t){if(!t.setAttribute._polyfilled){var e=t.setAttribute;t.setAttribute=function(t,n){o.call(this,t,n,e)};var n=t.removeAttribute;t.removeAttribute=function(t){o.call(this,t,null,n)},t.setAttribute._polyfilled=!0}}function o(t,e,n){t=t.toLowerCase();var o=this.getAttribute(t);n.apply(this,arguments);var i=this.getAttribute(t);this.attributeChangedCallback&&i!==o&&this.attributeChangedCallback(t,o,i)}function i(t){for(var e=0;e<C.length;e++)if(t===C[e])return!0}function r(t){var e=c(t);return e?r(e.extends).concat([e]):[]}function s(t){for(var e,n=t.extends,o=0;e=t.ancestry[o];o++)n=e.is&&e.tag;t.tag=n||t.__name,n&&(t.is=t.__name)}function a(t){if(!Object.__proto__){var e=HTMLElement.prototype;if(t.is){var n=document.createElement(t.tag);e=Object.getPrototypeOf(n)}for(var o,i=t.prototype,r=!1;i;)i==e&&(r=!0),o=Object.getPrototypeOf(i),o&&(i.__proto__=o),i=o;r||console.warn(t.tag+" prototype not found in prototype chain for "+t.is),t.native=e}}function u(t){return v(E(t.tag),t)}function c(t){return t?w[t.toLowerCase()]:void 0}function l(t,e){w[t]=e}function h(t){return function(){return u(t)}}function p(t,e,n){return t===x?d(e,n):S(t,e)}function d(t,e){t&&(t=t.toLowerCase()),e&&(e=e.toLowerCase());var n=c(e||t);if(n){if(t==n.tag&&e==n.is)return new n.ctor;if(!e&&!n.is)return new n.ctor}var o;return e?(o=d(t),o.setAttribute("is",e),o):(o=E(t),t.indexOf("-")>=0&&b(o,HTMLElement),o)}function f(t,e){var n=t[e];t[e]=function(){var t=n.apply(this,arguments);return y(t),t}}var g,m=(t.isIE,t.upgradeDocumentTree),y=t.upgradeAll,v=t.upgradeWithDefinition,b=t.implementPrototype,A=t.useNative,C=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],w={},x="http://www.w3.org/1999/xhtml",E=document.createElement.bind(document),S=document.createElementNS.bind(document);g=Object.__proto__||A?function(t,e){return t instanceof e}:function(t,e){if(t instanceof e)return!0;for(var n=t;n;){if(n===e.prototype)return!0;n=n.__proto__}return!1},f(Node.prototype,"cloneNode"),f(document,"importNode"),document.registerElement=e,document.createElement=d,document.createElementNS=p,t.registry=w,t.instanceof=g,t.reservedTagList=C,t.getRegisteredDefinition=c,document.register=document.registerElement}),function(t){function e(){r(window.wrap(document)),window.CustomElements.ready=!0;var t=window.requestAnimationFrame||function(t){setTimeout(t,16)};t(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})})}{var n=t.useNative,o=t.initializeModules;t.isIE}if(n){var i=function(){};t.watchShadow=i,t.upgrade=i,t.upgradeAll=i,t.upgradeDocumentTree=i,t.upgradeSubtree=i,t.takeRecords=i,t.instanceof=function(t,e){return t instanceof e}}else o();var r=t.upgradeDocumentTree,s=t.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(t){return t}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(t){t.import&&s(wrap(t.import))}),"complete"===document.readyState||t.flags.eager)e();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var a=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(a,e)}else e()}(window.CustomElements),function(){}.call(this),function(){var t=this;(function(){(function(){this.Trix={VERSION:"0.10.1",ZERO_WIDTH_SPACE:"\ufeff",NON_BREAKING_SPACE:"\xa0",OBJECT_REPLACEMENT_CHARACTER:"\ufffc",config:{}}}).call(this)}).call(t);var e=t.Trix;(function(){(function(){e.BasicObject=function(){function t(){}var e,n,o;return t.proxyMethod=function(t){var o,i,r,s,a;return r=n(t),o=r.name,s=r.toMethod,a=r.toProperty,i=r.optional,this.prototype[o]=function(){var t,n;return t=null!=s?i?"function"==typeof this[s]?this[s]():void 0:this[s]():null!=a?this[a]:void 0,i?(n=null!=t?t[o]:void 0,null!=n?e.call(n,t,arguments):void 0):(n=t[o],e.call(n,t,arguments))}},n=function(t){var e,n;if(!(n=t.match(o)))throw new Error("can't parse @proxyMethod expression: "+t);return e={name:n[4]},null!=n[2]?e.toMethod=n[1]:e.toProperty=n[1],null!=n[3]&&(e.optional=!0),e},e=Function.prototype.apply,o=/^(.+?)(\(\))?(\?)?\.(.+?)$/,t}()}).call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Object=function(n){function o(){this.id=++i}var i;return t(o,n),i=0,o.fromJSONString=function(t){return this.fromJSON(JSON.parse(t))},o.prototype.hasSameConstructorAs=function(t){return this.constructor===(null!=t?t.constructor:void 0)},o.prototype.isEqualTo=function(t){return this===t},o.prototype.inspect=function(){var t,e,n;return t=function(){var t,o,i;o=null!=(t=this.contentsForInspection())?t:{},i=[];for(e in o)n=o[e],i.push(e+"="+n);return i}.call(this),"#<"+this.constructor.name+":"+this.id+(t.length?" "+t.join(", "):"")+">"},o.prototype.contentsForInspection=function(){},o.prototype.toJSONString=function(){return JSON.stringify(this)},o.prototype.toUTF16String=function(){return e.UTF16String.box(this)},o.prototype.getCacheKey=function(){return this.id.toString()},o}(e.BasicObject)}.call(this),function(){e.extend=function(t){var e,n;for(e in t)n=t[e],this[e]=n;return this}}.call(this),function(){e.extend({defer:function(t){return setTimeout(t,1)}})}.call(this),function(){var t,n;e.extend({normalizeSpaces:function(t){return t.replace(RegExp(""+e.ZERO_WIDTH_SPACE,"g"),"").replace(RegExp(""+e.NON_BREAKING_SPACE,"g")," ")},summarizeStringChange:function(t,o){var i,r,s,a;return t=e.UTF16String.box(t),o=e.UTF16String.box(o),o.length<t.length?(r=n(t,o),a=r[0],i=r[1]):(s=n(o,t),i=s[0],a=s[1]),{added:i,removed:a}}}),n=function(n,o){var i,r,s,a,u;return n.isEqualTo(o)?["",""]:(r=t(n,o),a=r.utf16String.length,s=a?(u=r.offset,r,i=n.codepoints.slice(0,u).concat(n.codepoints.slice(u+a)),t(o,e.UTF16String.fromCodepoints(i))):t(o,n),[r.utf16String.toString(),s.utf16String.toString()])},t=function(t,e){var n,o,i;for(n=0,o=t.length,i=e.length;o>n&&t.charAt(n).isEqualTo(e.charAt(n));)n++;for(;o>n+1&&t.charAt(o-1).isEqualTo(e.charAt(i-1));)o--,i--;return{utf16String:t.slice(n,o),offset:n}}}.call(this),function(){e.extend({copyObject:function(t){var e,n,o;null==t&&(t={}),n={};for(e in t)o=t[e],n[e]=o;return n},objectsAreEqual:function(t,e){var n,o;if(null==t&&(t={}),null==e&&(e={}),Object.keys(t).length!==Object.keys(e).length)return!1;for(n in t)if(o=t[n],o!==e[n])return!1;return!0}})}.call(this),function(){var t=[].slice;e.extend({arraysAreEqual:function(t,e){var n,o,i,r;if(null==t&&(t=[]),null==e&&(e=[]),t.length!==e.length)return!1;for(o=n=0,i=t.length;i>n;o=++n)if(r=t[o],r!==e[o])return!1;return!0},arrayStartsWith:function(t,n){return null==t&&(t=[]),null==n&&(n=[]),e.arraysAreEqual(t.slice(0,n.length),n)},spliceArray:function(){var e,n,o;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],o=n.slice(0),o.splice.apply(o,e),o},summarizeArrayChange:function(t,e){var n,o,i,r,s,a,u,c,l,h,p;for(null==t&&(t=[]),null==e&&(e=[]),n=[],h=[],i=new Set,r=0,u=t.length;u>r;r++)p=t[r],i.add(p);for(o=new Set,s=0,c=e.length;c>s;s++)p=e[s],o.add(p),i.has(p)||n.push(p);for(a=0,l=t.length;l>a;a++)p=t[a],o.has(p)||h.push(p);return{added:n,removed:h}}})}.call(this),function(){var t,n,o,i;t=null,n=null,i=null,o=null,e.extend({getAllAttributeNames:function(){return null!=t?t:t=e.getTextAttributeNames().concat(e.getBlockAttributeNames())},getBlockConfig:function(t){return e.config.blockAttributes[t]},getBlockAttributeNames:function(){return null!=n?n:n=Object.keys(e.config.blockAttributes)},getTextConfig:function(t){return e.config.textAttributes[t]},getTextAttributeNames:function(){return null!=i?i:i=Object.keys(e.config.textAttributes)},getListAttributeNames:function(){var t,n;return null!=o?o:o=function(){var o,i;o=e.config.blockAttributes,i=[];for(t in o)n=o[t].listAttribute,null!=n&&i.push(n);return i}()}})}.call(this),function(){var t,n,o,i,r,s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=document.documentElement,n=null!=(o=null!=(i=null!=(r=t.matchesSelector)?r:t.webkitMatchesSelector)?i:t.msMatchesSelector)?o:t.mozMatchesSelector,e.extend({handleEvent:function(n,o){var i,r,s,a,u,c,l,h,p,d,f,g;return h=null!=o?o:{},c=h.onElement,u=h.matchingSelector,g=h.withCallback,a=h.inPhase,l=h.preventDefault,d=h.times,r=null!=c?c:t,p=u,i=g,f="capturing"===a,s=function(t){var n;return null!=d&&0===--d&&s.destroy(),n=e.findClosestElementFromNode(t.target,{matchingSelector:p}),null!=n&&(null!=g&&g.call(n,t,n),l)?t.preventDefault():void 0},s.destroy=function(){return r.removeEventListener(n,s,f)},r.addEventListener(n,s,f),s},handleEventOnce:function(t,n){return null==n&&(n={}),n.times=1,e.handleEvent(t,n)},triggerEvent:function(n,o){var i,r,s,a,u,c,l;return l=null!=o?o:{},c=l.onElement,r=l.bubbles,s=l.cancelable,i=l.attributes,a=null!=c?c:t,r=r!==!1,s=s!==!1,u=document.createEvent("Events"),u.initEvent(n,r,s),null!=i&&e.extend.call(u,i),a.dispatchEvent(u)},elementMatchesSelector:function(t,e){return 1===(null!=t?t.nodeType:void 0)?n.call(t,e):void 0},findClosestElementFromNode:function(t,n){var o,i,r;for(i=null!=n?n:{},o=i.matchingSelector,r=i.untilNode;null!=t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;if(null!=t){if(null==o)return t;if(t.closest&&null==r)return t.closest(o);for(;t&&t!==r;){if(e.elementMatchesSelector(t,o))return t;t=t.parentNode}}},findInnerElement:function(t){for(;null!=t?t.firstElementChild:void 0;)t=t.firstElementChild;return t},innerElementIsActive:function(t){return document.activeElement!==t&&e.elementContainsNode(t,document.activeElement)},elementContainsNode:function(t,e){if(t&&e)for(;e;){if(e===t)return!0;e=e.parentNode}},findNodeFromContainerAndOffset:function(t,e){var n;if(t)return t.nodeType===Node.TEXT_NODE?t:0===e?null!=(n=t.firstChild)?n:t:t.childNodes.item(e-1)},findElementFromContainerAndOffset:function(t,n){var o;return o=e.findNodeFromContainerAndOffset(t,n),e.findClosestElementFromNode(o)},findChildIndexOfNode:function(t){var e;if(null!=t?t.parentNode:void 0){for(e=0;t=t.previousSibling;)e++;return e}},walkTree:function(t,e){var n,o,i,r,s;return i=null!=e?e:{},o=i.onlyNodesOfType,r=i.usingFilter,n=i.expandEntityReferences,s=function(){switch(o){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}}(),document.createTreeWalker(t,s,null!=r?r:null,n===!0)},tagName:function(t){var e;return null!=t&&null!=(e=t.tagName)?e.toLowerCase():void 0},makeElement:function(t,e){var n,o,i,r,s,a,u,c,l,h;if(null==e&&(e={}),"object"==typeof t?(e=t,t=e.tagName):e={attributes:e},o=document.createElement(t),null!=e.editable&&(null==e.attributes&&(e.attributes={}),e.attributes.contenteditable=e.editable),e.attributes){a=e.attributes;for(r in a)h=a[r],o.setAttribute(r,h)}if(e.style){u=e.style;for(r in u)h=u[r],o.style[r]=h}if(e.data){c=e.data;for(r in c)h=c[r],o.dataset[r]=h}if(e.className)for(l=e.className.split(" "),i=0,s=l.length;s>i;i++)n=l[i],o.classList.add(n);return e.textContent&&(o.textContent=e.textContent),o},cloneFragment:function(t){var e,n,o,i,r;for(e=document.createDocumentFragment(),r=t.childNodes,n=0,o=r.length;o>n;n++)i=r[n],e.appendChild(i.cloneNode(!0));return e},makeFragment:function(t){var e,n,o;for(null==t&&(t=""),e=document.createElement("div"),e.innerHTML=t,n=document.createDocumentFragment();o=e.firstChild;)n.appendChild(o);return n},getBlockTagNames:function(){var t,n;return null!=e.blockTagNames?e.blockTagNames:e.blockTagNames=function(){var o,i;o=e.config.blockAttributes,i=[];for(t in o)n=o[t],i.push(n.tagName);return i}()},nodeIsBlockContainer:function(t){return e.nodeIsBlockStartComment(null!=t?t.firstChild:void 0)},nodeProbablyIsBlockContainer:function(t){var n,o;return n=e.tagName(t),s.call(e.getBlockTagNames(),n)>=0&&(o=e.tagName(t.firstChild),s.call(e.getBlockTagNames(),o)<0)},nodeIsBlockStart:function(t,n){var o;return o=(null!=n?n:{strict:!0}).strict,o?e.nodeIsBlockStartComment(t):e.nodeIsBlockStartComment(t)||!e.nodeIsBlockStartComment(t.firstChild)&&e.nodeProbablyIsBlockContainer(t)},nodeIsBlockStartComment:function(t){return e.nodeIsCommentNode(t)&&"block"===(null!=t?t.data:void 0)},nodeIsCommentNode:function(t){return(null!=t?t.nodeType:void 0)===Node.COMMENT_NODE},nodeIsCursorTarget:function(t){return t?e.nodeIsTextNode(t)?t.data===e.ZERO_WIDTH_SPACE:e.nodeIsCursorTarget(t.firstChild):void 0},nodeIsAttachmentElement:function(t){return e.elementMatchesSelector(t,e.AttachmentView.attachmentSelector)},nodeIsEmptyTextNode:function(t){return e.nodeIsTextNode(t)&&""===(null!=t?t.data:void 0)},nodeIsTextNode:function(t){return(null!=t?t.nodeType:void 0)===Node.TEXT_NODE}})}.call(this),function(){var t,n,o,i,r;t=e.copyObject,i=e.objectsAreEqual,e.extend({normalizeRange:o=function(t){var e;if(null!=t)return Array.isArray(t)||(t=[t,t]),[n(t[0]),n(null!=(e=t[1])?e:t[0])]},rangeIsCollapsed:function(t){var e,n,i;if(null!=t)return n=o(t),i=n[0],e=n[1],r(i,e)},rangesAreEqual:function(t,e){var n,i,s,a,u,c;if(null!=t&&null!=e)return s=o(t),i=s[0],n=s[1],a=o(e),c=a[0],u=a[1],r(i,c)&&r(n,u)}}),n=function(e){return"number"==typeof e?e:t(e)},r=function(t,e){return"number"==typeof t?t===e:i(t,e)}}.call(this),function(){var t,n,o,i;t={extendsTagName:"div",css:"%t { display: block; }"},e.registerElement=function(e,n){var r,s,a,u,c,l,h;return null==n&&(n={}),e=e.toLowerCase(),c=i(n),u=null!=(h=c.extendsTagName)?h:t.extendsTagName,delete c.extendsTagName,s=c.defaultCSS,delete c.defaultCSS,null!=s&&u===t.extendsTagName?s+="\n"+t.css:s=t.css,o(s,e),a=Object.getPrototypeOf(document.createElement(u)),a.__super__=a,l=Object.create(a,c),r=document.registerElement(e,{prototype:l}),Object.defineProperty(l,"constructor",{value:r}),r},o=function(t,e){var o;return o=n(e),o.textContent=t.replace(/%t/g,e)},n=function(t){var e;return e=document.createElement("style"),e.setAttribute("type","text/css"),e.setAttribute("data-tag-name",t.toLowerCase()),document.head.insertBefore(e,document.head.firstChild),e},i=function(t){var e,n,o;n={};for(e in t)o=t[e],n[e]="function"==typeof o?{value:o}:o;return n}}.call(this),function(){var t,n;e.extend({getDOMSelection:function(){var t;return t=window.getSelection(),t.rangeCount>0?t:void 0},getDOMRange:function(){var n,o;return(n=null!=(o=e.getDOMSelection())?o.getRangeAt(0):void 0)&&!t(n)?n:void 0},setDOMRange:function(t){var n;return n=window.getSelection(),n.removeAllRanges(),n.addRange(t),e.selectionChangeObserver.update()}}),t=function(t){return n(t.startContainer)||n(t.endContainer)},n=function(t){return!Object.getPrototypeOf(t)}}.call(this),function(){}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.arraysAreEqual,e.Hash=function(o){function i(t){null==t&&(t={}),this.values=s(t),i.__super__.constructor.apply(this,arguments)}var r,s,a,u,c;return n(i,o),i.fromCommonAttributesOfObjects=function(t){var e,n,o,i,s,a;if(null==t&&(t=[]),!t.length)return new this;for(e=r(t[0]),o=e.getKeys(),a=t.slice(1),n=0,i=a.length;i>n;n++)s=a[n],o=e.getKeysCommonToHash(r(s)),e=e.slice(o);return e},i.box=function(t){return r(t)},i.prototype.add=function(t,e){return this.merge(u(t,e))},i.prototype.remove=function(t){return new e.Hash(s(this.values,t))},i.prototype.get=function(t){return this.values[t]},i.prototype.has=function(t){return t in this.values},i.prototype.merge=function(t){return new e.Hash(a(this.values,c(t)))},i.prototype.slice=function(t){var n,o,i,r;for(r={},n=0,i=t.length;i>n;n++)o=t[n],this.has(o)&&(r[o]=this.values[o]);return new e.Hash(r)},i.prototype.getKeys=function(){return Object.keys(this.values)},i.prototype.getKeysCommonToHash=function(t){var e,n,o,i,s;for(t=r(t),i=this.getKeys(),s=[],e=0,o=i.length;o>e;e++)n=i[e],this.values[n]===t.values[n]&&s.push(n);return s},i.prototype.isEqualTo=function(e){return t(this.toArray(),r(e).toArray())},i.prototype.isEmpty=function(){return 0===this.getKeys().length},i.prototype.toArray=function(){var t,e,n;return(null!=this.array?this.array:this.array=function(){var o;e=[],o=this.values;for(t in o)n=o[t],e.push(t,n);return e}.call(this)).slice(0)},i.prototype.toObject=function(){return s(this.values)},i.prototype.toJSON=function(){return this.toObject()},i.prototype.contentsForInspection=function(){return{values:JSON.stringify(this.values)}},u=function(t,e){var n;return n={},n[t]=e,n},a=function(t,e){var n,o,i;o=s(t);for(n in e)i=e[n],o[n]=i;return o},s=function(t,e){var n,o,i,r,s;for(r={},s=Object.keys(t).sort(),n=0,i=s.length;i>n;n++)o=s[n],o!==e&&(r[o]=t[o]);return r},r=function(t){return t instanceof e.Hash?t:new e.Hash(t)},c=function(t){return t instanceof e.Hash?t.values:t},i}(e.Object)}.call(this),function(){e.ObjectGroup=function(){function t(t,e){var n,o;this.objects=null!=t?t:[],o=e.depth,n=e.asTree,n&&(this.depth=o,this.objects=this.constructor.groupObjects(this.objects,{asTree:n,depth:this.depth+1}))}return t.groupObjects=function(t,e){var n,o,i,r,s,a,u,c,l;for(null==t&&(t=[]),l=null!=e?e:{},i=l.depth,n=l.asTree,n&&null==i&&(i=0),c=[],s=0,a=t.length;a>s;s++){if(u=t[s],r){if(("function"==typeof u.canBeGrouped?u.canBeGrouped(i):void 0)&&("function"==typeof(o=r[r.length-1]).canBeGroupedWith?o.canBeGroupedWith(u,i):void 0)){r.push(u);continue}c.push(new this(r,{depth:i,asTree:n})),r=null}("function"==typeof u.canBeGrouped?u.canBeGrouped(i):void 0)?r=[u]:c.push(u)}return r&&c.push(new this(r,{depth:i,asTree:n})),c},t.prototype.getObjects=function(){return this.objects},t.prototype.getDepth=function(){return this.depth},t.prototype.getCacheKey=function(){var t,e,n,o,i;for(e=["objectGroup"],i=this.getObjects(),t=0,n=i.length;n>t;t++)o=i[t],e.push(o.getCacheKey());return e.join("/")},t}()}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectMap=function(e){function n(t){var e,n,o,i,r;for(null==t&&(t=[]),this.objects={},o=0,i=t.length;i>o;o++)r=t[o],n=JSON.stringify(r),null==(e=this.objects)[n]&&(e[n]=r)}return t(n,e),n.prototype.find=function(t){var e;return e=JSON.stringify(t),this.objects[e]},n}(e.BasicObject)}.call(this),function(){e.ElementStore=function(){function t(t){this.reset(t)}var e;return t.prototype.add=function(t){var n;return n=e(t),this.elements[n]=t},t.prototype.remove=function(t){var n,o;return n=e(t),(o=this.elements[n])?(delete this.elements[n],o):void 0},t.prototype.reset=function(t){var e,n,o;for(null==t&&(t=[]),this.elements={},n=0,o=t.length;o>n;n++)e=t[n],this.add(e);return t},e=function(t){return t.dataset.trixStoreKey},t}()}.call(this),function(){}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Operation=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.isPerforming=function(){return this.performing===!0},n.prototype.hasPerformed=function(){return this.performed===!0},n.prototype.hasSucceeded=function(){return this.performed&&this.succeeded},n.prototype.hasFailed=function(){return this.performed&&!this.succeeded},n.prototype.getPromise=function(){return null!=this.promise?this.promise:this.promise=new Promise(function(t){return function(e,n){return t.performing=!0,t.perform(function(o,i){return t.succeeded=o,t.performing=!1,t.performed=!0,t.succeeded?e(i):n(i)})}}(this))},n.prototype.perform=function(t){return t(!1)},n.prototype.release=function(){var t;return null!=(t=this.promise)&&"function"==typeof t.cancel&&t.cancel(),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null
},n.proxyMethod("getPromise().then"),n.proxyMethod("getPromise().catch"),n}(e.BasicObject)}.call(this),function(){var t,n,o,i,r,s=function(t,e){function n(){this.constructor=t}for(var o in e)a.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty;e.UTF16String=function(t){function e(t,e){this.ucs2String=t,this.codepoints=e,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length}return s(e,t),e.box=function(t){return null==t&&(t=""),t instanceof this?t:this.fromUCS2String(null!=t?t.toString():void 0)},e.fromUCS2String=function(t){return new this(t,i(t))},e.fromCodepoints=function(t){return new this(r(t),t)},e.prototype.offsetToUCS2Offset=function(t){return r(this.codepoints.slice(0,Math.max(0,t))).length},e.prototype.offsetFromUCS2Offset=function(t){return i(this.ucs2String.slice(0,Math.max(0,t))).length},e.prototype.slice=function(){var t;return this.constructor.fromCodepoints((t=this.codepoints).slice.apply(t,arguments))},e.prototype.charAt=function(t){return this.slice(t,t+1)},e.prototype.isEqualTo=function(t){return this.constructor.box(t).ucs2String===this.ucs2String},e.prototype.toJSON=function(){return this.ucs2String},e.prototype.getCacheKey=function(){return this.ucs2String},e.prototype.toString=function(){return this.ucs2String},e}(e.BasicObject),t=1===("function"==typeof Array.from?Array.from("\ud83d\udc7c").length:void 0),n=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),o=" \ud83d\udc7c"===("function"==typeof String.fromCodePoint?String.fromCodePoint(32,128124):void 0),i=t&&n?function(t){return Array.from(t).map(function(t){return t.codePointAt(0)})}:function(t){var e,n,o,i,r;for(i=[],e=0,o=t.length;o>e;)r=t.charCodeAt(e++),r>=55296&&56319>=r&&o>e&&(n=t.charCodeAt(e++),56320===(64512&n)?r=((1023&r)<<10)+(1023&n)+65536:e--),i.push(r);return i},r=o?function(t){return String.fromCodePoint.apply(String,t)}:function(t){var e,n,o;return e=function(){var e,i,r;for(r=[],e=0,i=t.length;i>e;e++)o=t[e],n="",o>65535&&(o-=65536,n+=String.fromCharCode(o>>>10&1023|55296),o=56320|1023&o),r.push(n+String.fromCharCode(o));return r}(),e.join("")}}.call(this),function(){}.call(this),function(){}.call(this),function(){e.config.lang={bold:"Bold",bullets:"Bullets","byte":"Byte",bytes:"Bytes",captionPlaceholder:"Type a caption here\u2026",captionPrompt:"Add a caption\u2026",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",urlPlaceholder:"Enter a URL\u2026",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"}}.call(this),function(){e.config.css={classNames:{attachment:{container:"attachment",typePrefix:"attachment-",caption:"caption",captionEdited:"caption-edited",captionEditor:"caption-editor",editingCaption:"caption-editing",progressBar:"progress",removeButton:"remove icon",size:"size"}}}}.call(this),function(){var t;e.config.blockAttributes=t={"default":{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}}}}.call(this),function(){var t,n;t=e.config.lang,n=[t.bytes,t.KB,t.MB,t.GB,t.TB,t.PB],e.config.fileSize={prefix:"IEC",precision:2,formatter:function(e){var o,i,r,s,a;switch(e){case 0:return"0 "+t.bytes;case 1:return"1 "+t.byte;default:return o=function(){switch(this.prefix){case"SI":return 1e3;case"IEC":return 1024}}.call(this),i=Math.floor(Math.log(e)/Math.log(o)),r=e/Math.pow(o,i),s=r.toFixed(this.precision),a=s.replace(/0*$/,"").replace(/\.$/,""),a+" "+n[i]}}}}.call(this),function(){e.config.textAttributes={bold:{tagName:"strong",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"bold"===e.fontWeight||e.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"italic"===e.fontStyle}},href:{groupTagName:"a",parser:function(t){var n,o,i;return n=e.AttachmentView.attachmentSelector,i="a:not("+n+")",(o=e.findClosestElementFromNode(t,{matchingSelector:i}))?o.getAttribute("href"):void 0}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}}}.call(this),function(){var t,n,o,i,r;r="[data-trix-serialize=false]",i=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable"],n="data-trix-serialized-attributes",o="["+n+"]",t=new RegExp("<!--block-->","g"),e.extend({serializers:{"application/json":function(t){var n;if(t instanceof e.Document)n=t;else{if(!(t instanceof HTMLElement))throw new Error("unserializable object");n=e.Document.fromHTML(t.innerHTML)}return n.toSerializableDocument().toJSONString()},"text/html":function(s){var a,u,c,l,h,p,d,f,g,m,y,v,b,A,C,w,x;if(s instanceof e.Document)l=e.DocumentView.render(s);else{if(!(s instanceof HTMLElement))throw new Error("unserializable object");l=s.cloneNode(!0)}for(A=l.querySelectorAll(r),h=0,g=A.length;g>h;h++)c=A[h],c.parentNode.removeChild(c);for(p=0,m=i.length;m>p;p++)for(a=i[p],C=l.querySelectorAll("["+a+"]"),d=0,y=C.length;y>d;d++)c=C[d],c.removeAttribute(a);for(w=l.querySelectorAll(o),f=0,v=w.length;v>f;f++){c=w[f];try{u=JSON.parse(c.getAttribute(n)),c.removeAttribute(n);for(b in u)x=u[b],c.setAttribute(b,x)}catch(E){}}return l.innerHTML.replace(t,"")}},deserializers:{"application/json":function(t){return e.Document.fromJSONString(t)},"text/html":function(t){return e.Document.fromHTML(t)}},serializeToContentType:function(t,n){var o;if(o=e.serializers[n])return o(t);throw new Error("unknown content type: "+n)},deserializeFromContentType:function(t,n){var o;if(o=e.deserializers[n])return o(t);throw new Error("unknown content type: "+n)}})}.call(this),function(){var t,n;n=e.makeFragment,t=e.config.lang,e.config.toolbar={content:n('<div class="button_row">\n  <span class="button_group text_tools">\n    <button type="button" class="icon bold" data-trix-attribute="bold" data-trix-key="b" title="'+t.bold+'">'+t.bold+'</button>\n    <button type="button" class="icon italic" data-trix-attribute="italic" data-trix-key="i" title="'+t.italic+'">'+t.italic+'</button>\n    <button type="button" class="icon strike" data-trix-attribute="strike" title="'+t.strike+'">'+t.strike+'</button>\n    <button type="button" class="icon link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="'+t.link+'">'+t.link+'</button>\n  </span>\n\n  <span class="button_group block_tools">\n    <button type="button" class="icon heading-1" data-trix-attribute="heading1" title="'+t.heading1+'">'+t.heading1+'</button>\n    <button type="button" class="icon quote" data-trix-attribute="quote" title="'+t.quote+'">'+t.quote+'</button>\n    <button type="button" class="icon code" data-trix-attribute="code" title="'+t.code+'">'+t.code+'</button>\n    <button type="button" class="icon list bullets" data-trix-attribute="bullet" title="'+t.bullets+'">'+t.bullets+'</button>\n    <button type="button" class="icon list numbers" data-trix-attribute="number" title="'+t.numbers+'">'+t.numbers+'</button>\n    <button type="button" class="icon nesting-level decrease" data-trix-action="decreaseNestingLevel" title="'+t.outdent+'">'+t.outdent+'</button>\n    <button type="button" class="icon nesting-level increase" data-trix-action="increaseNestingLevel" title="'+t.indent+'">'+t.indent+'</button>\n  </span>\n\n  <span class="button_group history_tools">\n    <button type="button" class="icon undo" data-trix-action="undo" data-trix-key="z" title="'+t.undo+'">'+t.undo+'</button>\n    <button type="button" class="icon redo" data-trix-action="redo" data-trix-key="shift+z" title="'+t.redo+'">'+t.redo+'</button>\n  </span>\n</div>\n\n<div class="dialogs">\n  <div class="dialog link_dialog" data-trix-attribute="href" data-trix-dialog="href">\n    <div class="link_url_fields">\n      <input type="url" required name="href" placeholder="'+t.urlPlaceholder+'">\n      <div class="button_group">\n        <input type="button" value="'+t.link+'" data-trix-method="setAttribute">\n        <input type="button" value="'+t.unlink+'" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>')}}.call(this),function(){e.config.undoInterval=5e3}.call(this),function(){var t,n;t=e.makeElement,n={cursorTarget:t({tagName:"span",textContent:e.ZERO_WIDTH_SPACE,data:{trixSelection:!0,trixCursorTarget:!0,trixSerialize:!1}})},e.extend({selectionElements:{selector:"[data-trix-selection]",cssText:"font-size: 0 !important;\npadding: 0 !important;\nmargin: 0 !important;\nborder: none !important;\nline-height: 0 !important;",create:function(t){return n[t].cloneNode(!0)}}})}.call(this),function(){}.call(this),function(){var t;t=e.cloneFragment,e.registerElement("trix-toolbar",{defaultCSS:"%t {\n  white-space: collapse;\n}\n\n%t .dialog {\n  display: none;\n}\n\n%t .dialog.active {\n  display: block;\n}\n\n%t .dialog input.validate:invalid {\n  background-color: #ffdddd;\n}\n\n%t[native] {\n  display: none;\n}",createdCallback:function(){return""===this.innerHTML?this.appendChild(t(e.config.toolbar.content)):void 0}})}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty,o=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e.ObjectView=function(n){function i(t,e){this.object=t,this.options=null!=e?e:{},this.childViews=[],this.rootView=this}return t(i,n),i.prototype.getNodes=function(){var t,e,n,o,i;for(null==this.nodes&&(this.nodes=this.createNodes()),o=this.nodes,i=[],t=0,e=o.length;e>t;t++)n=o[t],i.push(n.cloneNode(!0));return i},i.prototype.invalidate=function(){var t;return this.nodes=null,null!=(t=this.parentView)?t.invalidate():void 0},i.prototype.invalidateViewForObject=function(t){var e;return null!=(e=this.findViewForObject(t))?e.invalidate():void 0},i.prototype.findOrCreateCachedChildView=function(t,e){var n;return(n=this.getCachedViewForObject(e))?this.recordChildView(n):(n=this.createChildView.apply(this,arguments),this.cacheViewForObject(n,e)),n},i.prototype.createChildView=function(t,n,o){var i;return null==o&&(o={}),n instanceof e.ObjectGroup&&(o.viewClass=t,t=e.ObjectGroupView),i=new t(n,o),this.recordChildView(i)},i.prototype.recordChildView=function(t){return t.parentView=this,t.rootView=this.rootView,o.call(this.childViews,t)<0&&this.childViews.push(t),t},i.prototype.getAllChildViews=function(){var t,e,n,o,i;for(i=[],o=this.childViews,e=0,n=o.length;n>e;e++)t=o[e],i.push(t),i=i.concat(t.getAllChildViews());return i},i.prototype.findElement=function(){return this.findElementForObject(this.object)},i.prototype.findElementForObject=function(t){var e;return(e=null!=t?t.id:void 0)?this.rootView.element.querySelector("[data-trix-id='"+e+"']"):void 0},i.prototype.findViewForObject=function(t){var e,n,o,i;for(o=this.getAllChildViews(),e=0,n=o.length;n>e;e++)if(i=o[e],i.object===t)return i},i.prototype.getViewCache=function(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?null!=this.viewCache?this.viewCache:this.viewCache={}:void 0},i.prototype.isViewCachingEnabled=function(){return this.shouldCacheViews!==!1},i.prototype.enableViewCaching=function(){return this.shouldCacheViews=!0},i.prototype.disableViewCaching=function(){return this.shouldCacheViews=!1},i.prototype.getCachedViewForObject=function(t){var e;return null!=(e=this.getViewCache())?e[t.getCacheKey()]:void 0},i.prototype.cacheViewForObject=function(t,e){var n;return null!=(n=this.getViewCache())?n[e.getCacheKey()]=t:void 0},i.prototype.garbageCollectCachedViews=function(){var t,e,n,i,r,s;if(t=this.getViewCache()){s=this.getAllChildViews().concat(this),n=function(){var t,e,n;for(n=[],t=0,e=s.length;e>t;t++)r=s[t],n.push(r.object.getCacheKey());return n}(),i=[];for(e in t)o.call(n,e)<0&&i.push(delete t[e]);return i}},i}(e.BasicObject)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectGroupView=function(e){function n(){n.__super__.constructor.apply(this,arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass}return t(n,e),n.prototype.getChildViews=function(){var t,e,n,o;if(!this.childViews.length)for(o=this.objectGroup.getObjects(),t=0,e=o.length;e>t;t++)n=o[t],this.findOrCreateCachedChildView(this.viewClass,n,this.options);return this.childViews},n.prototype.createNodes=function(){var t,e,n,o,i,r,s,a,u;for(t=this.createContainerElement(),s=this.getChildViews(),e=0,o=s.length;o>e;e++)for(u=s[e],a=u.getNodes(),n=0,i=a.length;i>n;n++)r=a[n],t.appendChild(r);return[t]},n.prototype.createContainerElement=function(t){return null==t&&(t=this.objectGroup.getDepth()),this.getChildViews()[0].createContainerElement(t)},n}(e.ObjectView)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Controller=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n}(e.BasicObject)}.call(this),function(){var t,n,o,i,r,s,a=function(t,e){return function(){return t.apply(e,arguments)}},u=function(t,e){function n(){this.constructor=t}for(var o in e)c.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},c={}.hasOwnProperty,l=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.findClosestElementFromNode,o=e.nodeIsEmptyTextNode,n=e.nodeIsBlockStartComment,i=e.normalizeSpaces,r=e.summarizeStringChange,s=e.tagName,e.MutationObserver=function(e){function c(t){this.element=t,this.didMutate=a(this.didMutate,this),this.observer=new window.MutationObserver(this.didMutate),this.start()}var h,p,d,f;return u(c,e),p="data-trix-mutable",d="["+p+"]",f={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},c.prototype.start=function(){return this.reset(),this.observer.observe(this.element,f)},c.prototype.stop=function(){return this.observer.disconnect()},c.prototype.didMutate=function(t){var e,n;return(e=this.mutations).push.apply(e,this.findSignificantMutations(t)),this.mutations.length?(null!=(n=this.delegate)&&"function"==typeof n.elementDidMutate&&n.elementDidMutate(this.getMutationSummary()),this.reset()):void 0},c.prototype.reset=function(){return this.mutations=[]},c.prototype.findSignificantMutations=function(t){var e,n,o,i;for(i=[],e=0,n=t.length;n>e;e++)o=t[e],this.mutationIsSignificant(o)&&i.push(o);return i},c.prototype.mutationIsSignificant=function(t){var e,n,o,i;for(i=this.nodesModifiedByMutation(t),e=0,n=i.length;n>e;e++)if(o=i[e],this.nodeIsSignificant(o))return!0;return!1},c.prototype.nodeIsSignificant=function(t){return t!==this.element&&!this.nodeIsMutable(t)&&!o(t)},c.prototype.nodeIsMutable=function(e){return t(e,{matchingSelector:d})},c.prototype.nodesModifiedByMutation=function(t){var e;switch(e=[],t.type){case"attributes":t.attributeName!==p&&e.push(t.target);break;case"characterData":e.push(t.target.parentNode),e.push(t.target);break;case"childList":e.push.apply(e,t.addedNodes),e.push.apply(e,t.removedNodes)}return e},c.prototype.getMutationSummary=function(){return this.getTextMutationSummary()},c.prototype.getTextMutationSummary=function(){var t,e,n,o,i,r,s,a,u,c,h;for(a=this.getTextChangesFromCharacterData(),n=a.additions,i=a.deletions,h=this.getTextChangesFromChildList(),u=h.additions,r=0,s=u.length;s>r;r++)e=u[r],l.call(n,e)<0&&n.push(e);return i.push.apply(i,h.deletions),c={},(t=n.join(""))&&(c.textAdded=t),(o=i.join(""))&&(c.textDeleted=o),c},c.prototype.getMutationsByType=function(t){var e,n,o,i,r;for(i=this.mutations,r=[],e=0,n=i.length;n>e;e++)o=i[e],o.type===t&&r.push(o);return r},c.prototype.getTextChangesFromChildList=function(){var t,e,o,r,s,a,u,c,l,p,d;for(t=[],u=[],a=this.getMutationsByType("childList"),e=0,r=a.length;r>e;e++)s=a[e],t.push.apply(t,s.addedNodes),u.push.apply(u,s.removedNodes);return c=0===t.length&&1===u.length&&n(u[0]),c?(p=[],d=["\n"]):(p=h(t),d=h(u)),{additions:function(){var t,e,n;for(n=[],o=t=0,e=p.length;e>t;o=++t)l=p[o],l!==d[o]&&n.push(i(l));return n}(),deletions:function(){var t,e,n;for(n=[],o=t=0,e=d.length;e>t;o=++t)l=d[o],l!==p[o]&&n.push(i(l));return n}()}},c.prototype.getTextChangesFromCharacterData=function(){var t,e,n,o,s,a,u,c;return e=this.getMutationsByType("characterData"),e.length&&(c=e[0],n=e[e.length-1],s=i(c.oldValue),o=i(n.target.data),a=r(s,o),t=a.added,u=a.removed),{additions:t?[t]:[],deletions:u?[u]:[]}},h=function(t){var e,n,o,i;for(null==t&&(t=[]),i=[],e=0,n=t.length;n>e;e++)switch(o=t[e],o.nodeType){case Node.TEXT_NODE:i.push(o.data);break;case Node.ELEMENT_NODE:"br"===s(o)?i.push("\n"):i.push.apply(i,h(o.childNodes))}return i},c}(e.BasicObject)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.FileVerificationOperation=function(e){function n(t){this.file=t}return t(n,e),n.prototype.perform=function(t){var e;return e=new FileReader,e.onerror=function(){return t(!1)},e.onload=function(n){return function(){e.onerror=null;try{e.abort()}catch(o){}return t(!0,n.file)}}(this),e.readAsArrayBuffer(this.file)},n}(e.Operation)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.CompositionInput=function(e){function n(t){var e;this.inputController=t,e=this.inputController,this.responder=e.responder,this.delegate=e.delegate,this.inputSummary=e.inputSummary,this.data={}}return t(n,e),n.prototype.start=function(t){var e,n;return this.data.start=t,"keypress"===this.inputSummary.eventName&&this.inputSummary.textAdded&&null!=(e=this.responder)&&e.deleteInDirection("left"),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=null!=(n=this.responder)?n.getSelectedRange():void 0},n.prototype.update=function(t){var e;return this.data.update=t,(e=this.selectPlaceholder())?(this.forgetPlaceholder(),this.range=e):void 0},n.prototype.end=function(t){var e,n,o,i;return this.data.end=t,this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0}),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.setSelectedRange(this.range),null!=(o=this.responder)&&o.insertString(this.data.end),null!=(i=this.responder)?i.setSelectedRange(this.range[0]+this.data.end.length):void 0):null!=this.data.start||null!=this.data.update?(this.requestReparse(),this.inputController.reset()):void 0},n.prototype.getEndData=function(){return this.data.end},n.prototype.isEnded=function(){return null!=this.getEndData()},n.prototype.canApplyToDocument=function(){var t,e;return 0===(null!=(t=this.data.start)?t.length:void 0)&&(null!=(e=this.data.end)?e.length:void 0)>0&&null!=this.range},n.proxyMethod("inputController.setInputSummary"),n.proxyMethod("inputController.requestRender"),n.proxyMethod("inputController.requestReparse"),n.proxyMethod("responder?.selectionIsExpanded"),n.proxyMethod("responder?.insertPlaceholder"),n.proxyMethod("responder?.selectPlaceholder"),n.proxyMethod("responder?.forgetPlaceholder"),n}(e.BasicObject)}.call(this),function(){var t,n,o,i,r,s,a,u,c,l,h,p,d,f=function(t,e){function n(){this.constructor=t}for(var o in e)g.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},g={}.hasOwnProperty,m=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};i=e.handleEvent,c=e.makeElement,r=e.innerElementIsActive,l=e.objectsAreEqual,p=e.tagName,e.InputController=function(p){function d(t){var n;this.element=t,this.resetInputSummary(),this.mutationObserver=new e.MutationObserver(this.element),this.mutationObserver.delegate=this;for(n in this.events)i(n,{onElement:this.element,withCallback:this.handlerFor(n),inPhase:"capturing"})}var g;return f(d,p),g=0,d.keyNames={8:"backspace",9:"tab",13:"return",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"},d.prototype.handlerFor=function(t){return function(e){return function(n){return e.handleInput(function(){return r(this.element)?void 0:(this.eventName=t,this.events[t].call(this,n))})}}(this)},d.prototype.setInputSummary=function(t){var e,n;null==t&&(t={}),this.inputSummary.eventName=this.eventName;for(e in t)n=t[e],this.inputSummary[e]=n;return this.inputSummary},d.prototype.resetInputSummary=function(){return this.inputSummary={}},d.prototype.reset=function(){return this.resetInputSummary(),e.selectionChangeObserver.reset()},d.prototype.editorWillSyncDocumentView=function(){return this.mutationObserver.stop()},d.prototype.editorDidSyncDocumentView=function(){return this.mutationObserver.start()},d.prototype.requestRender=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestRender?t.inputControllerDidRequestRender():void 0},d.prototype.requestReparse=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestReparse&&t.inputControllerDidRequestReparse(),this.requestRender()},d.prototype.elementDidMutate=function(t){var e;return this.isComposing()?null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidAllowUnhandledInput?e.inputControllerDidAllowUnhandledInput():void 0:this.handleInput(function(){return this.mutationIsSignificant(t)&&(this.mutationIsExpected(t)?this.requestRender():this.requestReparse()),this.reset()})},d.prototype.mutationIsExpected=function(t){var e,n,o,i,r,s,a,u,c,l;return a=t.textAdded,u=t.textDeleted,this.inputSummary.preferDocument?!0:(e=null!=a?a===this.inputSummary.textAdded:!this.inputSummary.textAdded,n=null!=u?this.inputSummary.didDelete:!this.inputSummary.didDelete,c="\n"===a&&!e,l="\n"===u&&!n,s=c&&!l||l&&!c,s&&(i=this.getSelectedRange())&&(o=c?-1:1,null!=(r=this.responder)?r.positionIsBlockBreak(i[1]+o):void 0)?!0:e&&n)},d.prototype.mutationIsSignificant=function(t){var e,n,o;return o=Object.keys(t).length>0,e=""===(null!=(n=this.compositionInput)?n.getEndData():void 0),o||!e},d.prototype.attachFiles=function(t){var n,o;return o=function(){var o,i,r;for(r=[],o=0,i=t.length;i>o;o++)n=t[o],r.push(new e.FileVerificationOperation(n));return r}(),Promise.all(o).then(function(t){return function(e){return t.handleInput(function(){var t,n;return null!=(t=this.delegate)&&t.inputControllerWillAttachFiles(),null!=(n=this.responder)&&n.insertFiles(e),this.requestRender()})}}(this))},d.prototype.events={keydown:function(t){var n,o,i,r,a,u,c,l,h;if(this.isComposing()||this.resetInputSummary(),r=this.constructor.keyNames[t.keyCode]){for(o=this.keys,l=["ctrl","alt","shift","meta"],i=0,u=l.length;u>i;i++)c=l[i],t[c+"Key"]&&("ctrl"===c&&(c="control"),o=null!=o?o[c]:void 0);null!=(null!=o?o[r]:void 0)&&(this.setInputSummary({keyName:r}),e.selectionChangeObserver.reset(),o[r].call(this,t))}return s(t)&&(n=String.fromCharCode(t.keyCode).toLowerCase())&&(a=function(){var e,n,o,i;for(o=["alt","shift"],i=[],e=0,n=o.length;n>e;e++)c=o[e],t[c+"Key"]&&i.push(c);return i}(),a.push(n),null!=(h=this.delegate)?h.inputControllerDidReceiveKeyboardCommand(a):void 0)?t.preventDefault():void 0},keypress:function(t){var e,n,o;if(null==this.inputSummary.eventName&&(!t.metaKey&&!t.ctrlKey||t.altKey)&&!u(t)&&!a(t))return null===t.which?e=String.fromCharCode(t.keyCode):0!==t.which&&0!==t.charCode&&(e=String.fromCharCode(t.charCode)),null!=e?(null!=(n=this.delegate)&&n.inputControllerWillPerformTyping(),null!=(o=this.responder)&&o.insertString(e),this.setInputSummary({textAdded:e,didDelete:this.selectionIsExpanded()})):void 0},textInput:function(t){var e,n,o,i;return e=t.data,i=this.inputSummary.textAdded,i&&i!==e&&i.toUpperCase()===e?(n=this.getSelectedRange(),this.setSelectedRange([n[0],n[1]+i.length]),null!=(o=this.responder)&&o.insertString(e),this.setInputSummary({textAdded:e}),this.setSelectedRange(n)):void 0},dragenter:function(t){return t.preventDefault()},dragstart:function(t){var e,n;return n=t.target,this.serializeSelectionToDataTransfer(t.dataTransfer),this.draggedRange=this.getSelectedRange(),null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidStartDrag?e.inputControllerDidStartDrag():void 0},dragover:function(t){var e,n;return!this.draggedRange&&!this.canAcceptDataTransfer(t.dataTransfer)||(t.preventDefault(),e={x:t.clientX,y:t.clientY},l(e,this.draggingPoint))?void 0:(this.draggingPoint=e,null!=(n=this.delegate)&&"function"==typeof n.inputControllerDidReceiveDragOverPoint?n.inputControllerDidReceiveDragOverPoint(this.draggingPoint):void 0)},dragend:function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidCancelDrag&&t.inputControllerDidCancelDrag(),this.draggedRange=null,this.draggingPoint=null},drop:function(t){var n,o,i,r,s,a,u,c,l;return t.preventDefault(),i=null!=(s=t.dataTransfer)?s.files:void 0,r={x:t.clientX,y:t.clientY},null!=(a=this.responder)&&a.setLocationRangeFromPointRange(r),(null!=i?i.length:void 0)?this.attachFiles(i):this.draggedRange?(null!=(u=this.delegate)&&u.inputControllerWillMoveText(),null!=(c=this.responder)&&c.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()):(o=t.dataTransfer.getData("application/x-trix-document"))&&(n=e.Document.fromJSONString(o),null!=(l=this.responder)&&l.insertDocument(n),this.requestRender()),this.draggedRange=null,this.draggingPoint=null},cut:function(t){var e;return this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillCutText(),this.deleteInDirection("backward"),t.defaultPrevented?this.requestRender():void 0},copy:function(t){return this.serializeSelectionToDataTransfer(t.clipboardData)?t.preventDefault():void 0},paste:function(n){var i,r,s,a,u,c,l,p,d,f,y,v,b,A,C,w,x,E,S,k,R,L;return u=null!=(l=n.clipboardData)?l:n.testClipboardData,c={paste:u},null==u||h(n)?void this.getPastedHTMLUsingHiddenElement(function(t){return function(e){var n,o,i;return c.html=e,null!=(n=t.delegate)&&n.inputControllerWillPasteText(c),null!=(o=t.responder)&&o.insertHTML(e),t.requestRender(),null!=(i=t.delegate)?i.inputControllerDidPaste(c):void 0}}(this)):((s=u.getData("URL"))?(L=u.getData("public.url-name")||s,c.string=L,this.setInputSummary({textAdded:L,didDelete:this.selectionIsExpanded()}),null!=(p=this.delegate)&&p.inputControllerWillPasteText(c),null!=(A=this.responder)&&A.insertText(e.Text.textForStringWithAttributes(L,{href:s})),this.requestRender(),null!=(C=this.delegate)&&C.inputControllerDidPaste(c)):t(u)?(L=u.getData("text/plain"),c.string=L,this.setInputSummary({textAdded:L,didDelete:this.selectionIsExpanded()}),null!=(w=this.delegate)&&w.inputControllerWillPasteText(c),null!=(x=this.responder)&&x.insertString(L),this.requestRender(),null!=(E=this.delegate)&&E.inputControllerDidPaste(c)):(a=u.getData("text/html"))?(c.html=a,null!=(S=this.delegate)&&S.inputControllerWillPasteText(c),null!=(k=this.responder)&&k.insertHTML(a),this.requestRender(),null!=(R=this.delegate)&&R.inputControllerDidPaste(c)):m.call(u.types,"Files")>=0&&(r=null!=(d=u.items)&&null!=(f=d[0])&&"function"==typeof f.getAsFile?f.getAsFile():void 0)&&(!r.name&&(i=o(r))&&(r.name="pasted-file-"+ ++g+"."+i),c.file=r,null!=(y=this.delegate)&&y.inputControllerWillAttachFiles(),null!=(v=this.responder)&&v.insertFile(r),this.requestRender(),null!=(b=this.delegate)&&b.inputControllerDidPaste(c)),n.preventDefault())},compositionstart:function(t){return this.getCompositionInput().start(t.data)},compositionupdate:function(t){return this.getCompositionInput().update(t.data)},compositionend:function(t){return this.getCompositionInput().end(t.data)},input:function(t){return t.stopPropagation()}},d.prototype.keys={backspace:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},"delete":function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},"return":function(){var t,e;return this.setInputSummary({preferDocument:!0}),null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),null!=(e=this.responder)?e.insertLineBreak():void 0},tab:function(t){var e,n;return(null!=(e=this.responder)?e.canIncreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.increaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},right:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0},control:{d:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},h:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},o:function(t){var e,n;return t.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n",{updatePosition:!1}),this.requestRender()}},shift:{"return":function(t){var e,n;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n"),this.requestRender(),t.preventDefault()},tab:function(t){var e,n;return(null!=(e=this.responder)?e.canDecreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.decreaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("backward")):void 0},right:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("forward")):void 0}},alt:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}},meta:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}}},d.prototype.handleInput=function(t){var e,n;try{return null!=(e=this.delegate)&&e.inputControllerWillHandleInput(),t.call(this)}finally{null!=(n=this.delegate)&&n.inputControllerDidHandleInput()}},d.prototype.getCompositionInput=function(){return this.isComposing()?this.compositionInput:this.compositionInput=new e.CompositionInput(this)},d.prototype.isComposing=function(){return null!=this.compositionInput&&!this.compositionInput.isEnded()},d.prototype.deleteInDirection=function(t,e){var n;return(null!=(n=this.responder)?n.deleteInDirection(t):void 0)!==!1?this.setInputSummary({didDelete:!0}):e?(e.preventDefault(),this.requestRender()):void 0},d.prototype.serializeSelectionToDataTransfer=function(t){var o,i;if(n(t))return o=null!=(i=this.responder)?i.getSelectedDocument().toSerializableDocument():void 0,t.setData("application/x-trix-document",JSON.stringify(o)),t.setData("text/html",e.DocumentView.render(o).innerHTML),t.setData("text/plain",o.toString().replace(/\n$/,"")),!0},d.prototype.canAcceptDataTransfer=function(t){var e,n,o,i,r,s;for(s={},i=null!=(o=null!=t?t.types:void 0)?o:[],e=0,n=i.length;n>e;e++)r=i[e],s[r]=!0;return s.Files||s["application/x-trix-document"]||s["text/html"]||s["text/plain"]},d.prototype.getPastedHTMLUsingHiddenElement=function(t){var e,n,o;return n=this.getSelectedRange(),o={position:"absolute",left:window.pageXOffset+"px",top:window.pageYOffset+"px",opacity:0},e=c({style:o,tagName:"div",editable:!0}),document.body.appendChild(e),e.focus(),requestAnimationFrame(function(o){return function(){var i;return i=e.innerHTML,document.body.removeChild(e),o.setSelectedRange(n),t(i)}}(this))},d.proxyMethod("responder?.getSelectedRange"),d.proxyMethod("responder?.setSelectedRange"),d.proxyMethod("responder?.expandSelectionInDirection"),d.proxyMethod("responder?.selectionIsInCursorTarget"),d.proxyMethod("responder?.selectionIsExpanded"),d
}(e.BasicObject),o=function(t){var e,n;return null!=(e=t.type)&&null!=(n=e.match(/\/(\w+)$/))?n[1]:void 0},u=function(t){return t.metaKey&&t.altKey&&!t.shiftKey&&94===t.keyCode},a=function(t){return t.metaKey&&t.altKey&&t.shiftKey&&9674===t.keyCode},s=function(t){return/Mac|^iP/.test(navigator.platform)?t.metaKey:t.ctrlKey},h=function(t){var e,n;return(n=null!=(e=t.clipboardData)?e.types:void 0)?m.call(n,"text/html")<0&&(m.call(n,"com.apple.webarchive")>=0||m.call(n,"com.apple.flat-rtfd")>=0):void 0},t=function(t){var e,n,o;return o=t.getData("text/plain"),n=t.getData("text/html"),o&&n?(e=c("div"),e.innerHTML=n,e.textContent===o?!e.querySelector(":not(meta)"):void 0):null!=o?o.length:void 0},d={"application/x-trix-feature-detection":"test"},n=function(t){var e,n;if(null!=(null!=t?t.setData:void 0)){for(e in d)if(n=d[e],t.setData(e,n),t.getData(e)!==n)return;return!0}}}.call(this),function(){var t,n,o,i,r,s,a=function(t,e){return function(){return t.apply(e,arguments)}},u=function(t,e){function n(){this.constructor=t}for(var o in e)c.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},c={}.hasOwnProperty;n=e.handleEvent,r=e.makeElement,s=e.tagName,o=e.InputController.keyNames,i=e.config.lang,t=e.config.css.classNames,e.AttachmentEditorController=function(e){function c(t,e,n){this.attachmentPiece=t,this.element=e,this.container=n,this.uninstall=a(this.uninstall,this),this.didKeyDownCaption=a(this.didKeyDownCaption,this),this.didChangeCaption=a(this.didChangeCaption,this),this.didClickCaption=a(this.didClickCaption,this),this.didClickRemoveButton=a(this.didClickRemoveButton,this),this.attachment=this.attachmentPiece.attachment,"a"===s(this.element)&&(this.element=this.element.firstChild),this.install()}var l;return u(c,e),l=function(t){return function(){var e;return e=t.apply(this,arguments),e["do"](),null==this.undos&&(this.undos=[]),this.undos.push(e.undo)}},c.prototype.install=function(){return this.makeElementMutable(),this.attachment.isPreviewable()&&this.makeCaptionEditable(),this.addRemoveButton()},c.prototype.makeElementMutable=l(function(){return{"do":function(t){return function(){return t.element.dataset.trixMutable=!0}}(this),undo:function(t){return function(){return delete t.element.dataset.trixMutable}}(this)}}),c.prototype.makeCaptionEditable=l(function(){var t,e;return t=this.element.querySelector("figcaption"),e=null,{"do":function(o){return function(){return e=n("click",{onElement:t,withCallback:o.didClickCaption,inPhase:"capturing"})}}(this),undo:function(){return function(){return e.destroy()}}(this)}}),c.prototype.addRemoveButton=l(function(){var e;return e=r({tagName:"button",textContent:i.remove,className:t.attachment.removeButton,attributes:{type:"button",title:i.remove},data:{trixMutable:!0}}),n("click",{onElement:e,withCallback:this.didClickRemoveButton}),{"do":function(t){return function(){return t.element.appendChild(e)}}(this),undo:function(t){return function(){return t.element.removeChild(e)}}(this)}}),c.prototype.editCaption=l(function(){var e,o,s,a,u;return a=r({tagName:"textarea",className:t.attachment.captionEditor,attributes:{placeholder:i.captionPlaceholder}}),a.value=this.attachmentPiece.getCaption(),u=a.cloneNode(),u.classList.add("trix-autoresize-clone"),e=function(){return u.value=a.value,a.style.height=u.scrollHeight+"px"},n("input",{onElement:a,withCallback:e}),n("keydown",{onElement:a,withCallback:this.didKeyDownCaption}),n("change",{onElement:a,withCallback:this.didChangeCaption}),n("blur",{onElement:a,withCallback:this.uninstall}),s=this.element.querySelector("figcaption"),o=s.cloneNode(),{"do":function(){return s.style.display="none",o.appendChild(a),o.appendChild(u),o.classList.add(t.attachment.editingCaption),s.parentElement.insertBefore(o,s),e(),a.focus()},undo:function(){return o.parentNode.removeChild(o),s.style.display=null}}}),c.prototype.didClickRemoveButton=function(t){var e;return t.preventDefault(),t.stopPropagation(),null!=(e=this.delegate)?e.attachmentEditorDidRequestRemovalOfAttachment(this.attachment):void 0},c.prototype.didClickCaption=function(t){return t.preventDefault(),this.editCaption()},c.prototype.didChangeCaption=function(t){var e,n,o;return e=t.target.value.replace(/\s/g," ").trim(),e?null!=(n=this.delegate)&&"function"==typeof n.attachmentEditorDidRequestUpdatingAttributesForAttachment?n.attachmentEditorDidRequestUpdatingAttributesForAttachment({caption:e},this.attachment):void 0:null!=(o=this.delegate)&&"function"==typeof o.attachmentEditorDidRequestRemovingAttributeForAttachment?o.attachmentEditorDidRequestRemovingAttributeForAttachment("caption",this.attachment):void 0},c.prototype.didKeyDownCaption=function(t){var e;return"return"===o[t.keyCode]?(t.preventDefault(),this.didChangeCaption(t),null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestDeselectingAttachment?e.attachmentEditorDidRequestDeselectingAttachment(this.attachment):void 0):void 0},c.prototype.uninstall=function(){for(var t,e;e=this.undos.pop();)e();return null!=(t=this.delegate)?t.didUninstallAttachmentEditor(this):void 0},c}(e.BasicObject)}.call(this),function(){var t,n,o,i,r=function(t,e){function n(){this.constructor=t}for(var o in e)s.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;o=e.makeElement,i=e.selectionElements,t=e.config.css.classNames,e.AttachmentView=function(e){function s(){s.__super__.constructor.apply(this,arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece}return r(s,e),s.attachmentSelector="[data-trix-attachment]",s.prototype.createContentNodes=function(){return[]},s.prototype.createNodes=function(){var e,n,r,s,a,u,c,l,h,p,d;if(s=o({tagName:"figure",className:this.getClassName()}),this.attachment.hasContent())s.innerHTML=this.attachment.getContent();else for(p=this.createContentNodes(),u=0,l=p.length;l>u;u++)h=p[u],s.appendChild(h);s.appendChild(this.createCaptionElement()),n={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},e=this.attachmentPiece.getAttributesForAttachment(),e.isEmpty()||(n.trixAttributes=JSON.stringify(e)),this.attachment.isPending()&&(this.progressElement=o({tagName:"progress",attributes:{"class":t.attachment.progressBar,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),s.appendChild(this.progressElement),n.trixSerialize=!1),(a=this.getHref())?(r=o("a",{href:a}),r.appendChild(s)):r=s;for(c in n)d=n[c],r.dataset[c]=d;return r.setAttribute("contenteditable",!1),[i.create("cursorTarget"),r,i.create("cursorTarget")]},s.prototype.createCaptionElement=function(){var e,n,i,r,s;return n=o({tagName:"figcaption",className:t.attachment.caption}),(e=this.attachmentPiece.getCaption())?(n.classList.add(t.attachment.captionEdited),n.textContent=e):(i=this.attachment.getFilename())&&(n.textContent=i,(r=this.attachment.getFormattedFilesize())&&(n.appendChild(document.createTextNode(" ")),s=o({tagName:"span",className:t.attachment.size,textContent:r}),n.appendChild(s))),n},s.prototype.getClassName=function(){var e,n;return n=[t.attachment.container,""+t.attachment.typePrefix+this.attachment.getType()],(e=this.attachment.getExtension())&&n.push(e),n.join(" ")},s.prototype.getHref=function(){return n(this.attachment.getContent(),"a")?void 0:this.attachment.getHref()},s.prototype.findProgressElement=function(){var t;return null!=(t=this.findElement())?t.querySelector("progress"):void 0},s.prototype.attachmentDidChangeUploadProgress=function(){var t,e;return e=this.attachment.getUploadProgress(),null!=(t=this.findProgressElement())?t.value=e:void 0},s}(e.ObjectView),n=function(t,e){var n;return n=o("div"),n.innerHTML=null!=t?t:"",n.querySelector(e)}}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.makeElement,e.PreviewableAttachmentView=function(e){function o(){o.__super__.constructor.apply(this,arguments),this.attachment.previewDelegate=this}return n(o,e),o.prototype.createContentNodes=function(){return this.image=t({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]},o.prototype.refresh=function(t){var e;return null==t&&(t=null!=(e=this.findElement())?e.querySelector("img"):void 0),t?this.updateAttributesForImage(t):void 0},o.prototype.updateAttributesForImage=function(t){var e,n,o,i,r,s;return r=this.attachment.getURL(),n=this.attachment.getPreviewURL(),t.src=n||r,n===r?t.removeAttribute("data-trix-serialized-attributes"):(o=JSON.stringify({src:r}),t.setAttribute("data-trix-serialized-attributes",o)),s=this.attachment.getWidth(),e=this.attachment.getHeight(),null!=s&&(t.width=s),null!=e&&(t.height=e),i=["imageElement",this.attachment.id,t.src,t.width,t.height].join("/"),t.dataset.trixStoreKey=i},o.prototype.attachmentDidChangePreviewURL=function(){return this.refresh(this.image),this.refresh()},o}(e.AttachmentView)}.call(this),function(){var t,n,o,i=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;o=e.makeElement,t=e.findInnerElement,n=e.getTextConfig,e.PieceView=function(r){function s(){var t;s.__super__.constructor.apply(this,arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),t=this.options,this.textConfig=t.textConfig,this.context=t.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString()}var a;return i(s,r),s.prototype.createNodes=function(){var e,n,o,i,r,s;if(s=this.attachment?this.createAttachmentNodes():this.createStringNodes(),e=this.createElement()){for(o=t(e),n=0,i=s.length;i>n;n++)r=s[n],o.appendChild(r);s=[e]}return s},s.prototype.createAttachmentNodes=function(){var t,n;return t=this.attachment.isPreviewable()?e.PreviewableAttachmentView:e.AttachmentView,n=this.createChildView(t,this.piece.attachment,{piece:this.piece}),n.getNodes()},s.prototype.createStringNodes=function(){var t,e,n,i,r,s,a,u,c,l;if(null!=(u=this.textConfig)?u.plaintext:void 0)return[document.createTextNode(this.string)];for(a=[],c=this.string.split("\n"),n=e=0,i=c.length;i>e;n=++e)l=c[n],n>0&&(t=o("br"),a.push(t)),(r=l.length)&&(s=document.createTextNode(this.preserveSpaces(l)),a.push(s));return a},s.prototype.createElement=function(){var t,e,i,r,s,a,u,c;for(r in this.attributes)if((t=n(r))&&(t.tagName&&(s=o(t.tagName),i?(i.appendChild(s),i=s):e=i=s),t.style))if(u){a=t.style;for(r in a)c=a[r],u[r]=c}else u=t.style;if(u){null==e&&(e=o("span"));for(r in u)c=u[r],e.style[r]=c}return e},s.prototype.createContainerElement=function(){var t,e,i,r,s;r=this.attributes;for(i in r)if(s=r[i],(e=n(i))&&e.groupTagName)return t={},t[i]=s,o(e.groupTagName,t)},a=e.NON_BREAKING_SPACE,s.prototype.preserveSpaces=function(t){return this.context.isLast&&(t=t.replace(/\ $/,a)),t=t.replace(/(\S)\ {3}(\S)/g,"$1 "+a+" $2").replace(/\ {2}/g,a+" ").replace(/\ {2}/g," "+a),(this.context.isFirst||this.context.followsWhitespace)&&(t=t.replace(/^\ /,a)),t},s}(e.ObjectView)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.TextView=function(n){function o(){o.__super__.constructor.apply(this,arguments),this.text=this.object,this.textConfig=this.options.textConfig}var i;return t(o,n),o.prototype.createNodes=function(){var t,n,o,r,s,a,u,c,l,h;for(a=[],c=e.ObjectGroup.groupObjects(this.getPieces()),r=c.length-1,o=n=0,s=c.length;s>n;o=++n)u=c[o],t={},0===o&&(t.isFirst=!0),o===r&&(t.isLast=!0),i(l)&&(t.followsWhitespace=!0),h=this.findOrCreateCachedChildView(e.PieceView,u,{textConfig:this.textConfig,context:t}),a.push.apply(a,h.getNodes()),l=u;return a},o.prototype.getPieces=function(){var t,e,n,o,i;for(o=this.text.getPieces(),i=[],t=0,e=o.length;e>t;t++)n=o[t],n.hasAttribute("blockBreak")||i.push(n);return i},i=function(t){return/\s$/.test(null!=t?t.toString():void 0)},o}(e.ObjectView)}.call(this),function(){var t,n,o=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;n=e.makeElement,t=e.getBlockConfig,e.BlockView=function(i){function r(){r.__super__.constructor.apply(this,arguments),this.block=this.object,this.attributes=this.block.getAttributes()}return o(r,i),r.prototype.createNodes=function(){var o,i,r,s,a,u,c,l,h;if(o=document.createComment("block"),u=[o],this.block.isEmpty()?u.push(n("br")):(l=null!=(c=t(this.block.getLastAttribute()))?c.text:void 0,h=this.findOrCreateCachedChildView(e.TextView,this.block.text,{textConfig:l}),u.push.apply(u,h.getNodes()),this.shouldAddExtraNewlineElement()&&u.push(n("br"))),this.attributes.length)return u;for(i=n(e.config.blockAttributes["default"].tagName),r=0,s=u.length;s>r;r++)a=u[r],i.appendChild(a);return[i]},r.prototype.createContainerElement=function(e){var o,i;return o=this.attributes[e],i=t(o),n(i.tagName)},r.prototype.shouldAddExtraNewlineElement=function(){return/\n\n$/.test(this.block.toString())},r}(e.ObjectView)}.call(this),function(){var t,n,o=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.defer,n=e.makeElement,e.DocumentView=function(i){function r(){r.__super__.constructor.apply(this,arguments),this.element=this.options.element,this.elementStore=new e.ElementStore,this.setDocument(this.object)}var s,a,u;return o(r,i),r.render=function(t){var e,o;return e=n("div"),o=new this(t,{element:e}),o.render(),o.sync(),e},r.prototype.setDocument=function(t){return t.isEqualTo(this.document)?void 0:this.document=this.object=t},r.prototype.render=function(){var t,o,i,r,s,a,u;if(this.childViews=[],this.shadowElement=n("div"),!this.document.isEmpty()){for(s=e.ObjectGroup.groupObjects(this.document.getBlocks(),{asTree:!0}),a=[],t=0,o=s.length;o>t;t++)r=s[t],u=this.findOrCreateCachedChildView(e.BlockView,r),a.push(function(){var t,e,n,o;for(n=u.getNodes(),o=[],t=0,e=n.length;e>t;t++)i=n[t],o.push(this.shadowElement.appendChild(i));return o}.call(this));return a}},r.prototype.isSynced=function(){return s(this.shadowElement,this.element)},r.prototype.sync=function(){var t;for(t=this.createDocumentFragmentForSync();this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(t),this.didSync()},r.prototype.didSync=function(){return this.elementStore.reset(a(this.element)),t(function(t){return function(){return t.garbageCollectCachedViews()}}(this))},r.prototype.createDocumentFragmentForSync=function(){var t,e,n,o,i,r,s,u,c,l;for(e=document.createDocumentFragment(),u=this.shadowElement.childNodes,n=0,i=u.length;i>n;n++)s=u[n],e.appendChild(s.cloneNode(!0));for(c=a(e),o=0,r=c.length;r>o;o++)t=c[o],(l=this.elementStore.remove(t))&&t.parentNode.replaceChild(l,t);return e},a=function(t){return t.querySelectorAll("[data-trix-store-key]")},s=function(t,e){return u(t.innerHTML)===u(e.innerHTML)},u=function(t){return t.replace(/&nbsp;/g," ")},r}(e.ObjectView)}.call(this),function(){var t,n,o,i,r=function(t,e){return function(){return t.apply(e,arguments)}},s=function(t,e){function n(){this.constructor=t}for(var o in e)a.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty;o=e.handleEvent,i=e.innerElementIsActive,n=e.defer,t=e.AttachmentView.attachmentSelector,e.CompositionController=function(a){function u(n,i){this.element=n,this.composition=i,this.didClickAttachment=r(this.didClickAttachment,this),this.didBlur=r(this.didBlur,this),this.didFocus=r(this.didFocus,this),this.documentView=new e.DocumentView(this.composition.document,{element:this.element}),o("focus",{onElement:this.element,withCallback:this.didFocus}),o("blur",{onElement:this.element,withCallback:this.didBlur}),o("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),o("mousedown",{onElement:this.element,matchingSelector:t,withCallback:this.didClickAttachment}),o("click",{onElement:this.element,matchingSelector:"a"+t,preventDefault:!0})}return s(u,a),u.prototype.didFocus=function(){var t,e,n;return t=function(t){return function(){var e;return t.focused?void 0:(t.focused=!0,null!=(e=t.delegate)&&"function"==typeof e.compositionControllerDidFocus?e.compositionControllerDidFocus():void 0)}}(this),null!=(e=null!=(n=this.blurPromise)?n.then(t):void 0)?e:t()},u.prototype.didBlur=function(){return this.blurPromise=new Promise(function(t){return function(e){return n(function(){var n;return i(t.element)||(t.focused=null,null!=(n=t.delegate)&&"function"==typeof n.compositionControllerDidBlur&&n.compositionControllerDidBlur()),t.blurPromise=null,e()})}}(this))},u.prototype.didClickAttachment=function(t,e){var n,o;return n=this.findAttachmentForElement(e),null!=(o=this.delegate)&&"function"==typeof o.compositionControllerDidSelectAttachment?o.compositionControllerDidSelectAttachment(n):void 0},u.prototype.render=function(){var t,e,n;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.documentView.isSynced()||(null!=(t=this.delegate)&&"function"==typeof t.compositionControllerWillSyncDocumentView&&t.compositionControllerWillSyncDocumentView(),this.documentView.sync(),this.reinstallAttachmentEditor(),null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidSyncDocumentView&&e.compositionControllerDidSyncDocumentView()),null!=(n=this.delegate)&&"function"==typeof n.compositionControllerDidRender?n.compositionControllerDidRender():void 0},u.prototype.rerenderViewForObject=function(t){return this.invalidateViewForObject(t),this.render()},u.prototype.invalidateViewForObject=function(t){return this.documentView.invalidateViewForObject(t)},u.prototype.isViewCachingEnabled=function(){return this.documentView.isViewCachingEnabled()},u.prototype.enableViewCaching=function(){return this.documentView.enableViewCaching()},u.prototype.disableViewCaching=function(){return this.documentView.disableViewCaching()},u.prototype.refreshViewCache=function(){return this.documentView.garbageCollectCachedViews()},u.prototype.installAttachmentEditorForAttachment=function(t){var n,o,i;if((null!=(i=this.attachmentEditor)?i.attachment:void 0)!==t&&(o=this.documentView.findElementForObject(t)))return this.uninstallAttachmentEditor(),n=this.composition.document.getAttachmentPieceForAttachment(t),this.attachmentEditor=new e.AttachmentEditorController(n,o,this.element),this.attachmentEditor.delegate=this},u.prototype.uninstallAttachmentEditor=function(){var t;return null!=(t=this.attachmentEditor)?t.uninstall():void 0},u.prototype.reinstallAttachmentEditor=function(){var t;return this.attachmentEditor?(t=this.attachmentEditor.attachment,this.uninstallAttachmentEditor(),this.installAttachmentEditorForAttachment(t)):void 0},u.prototype.editAttachmentCaption=function(){var t;return null!=(t=this.attachmentEditor)?t.editCaption():void 0},u.prototype.didUninstallAttachmentEditor=function(){return this.attachmentEditor=null,this.render()},u.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.updateAttributesForAttachment(t,e)},u.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.removeAttributeForAttachment(t,e)},u.prototype.attachmentEditorDidRequestRemovalOfAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestRemovalOfAttachment?e.compositionControllerDidRequestRemovalOfAttachment(t):void 0},u.prototype.attachmentEditorDidRequestDeselectingAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestDeselectingAttachment?e.compositionControllerDidRequestDeselectingAttachment(t):void 0},u.prototype.findAttachmentForElement=function(t){return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId,10))},u}(e.BasicObject)}.call(this),function(){var t,n,o,i=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t}for(var o in e)s.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;n=e.handleEvent,o=e.triggerEvent,t=e.findClosestElementFromNode,e.ToolbarController=function(e){function s(t){this.element=t,this.didKeyDownDialogInput=i(this.didKeyDownDialogInput,this),this.didClickDialogButton=i(this.didClickDialogButton,this),this.didClickAttributeButton=i(this.didClickAttributeButton,this),this.didClickActionButton=i(this.didClickActionButton,this),this.attributes={},this.actions={},this.resetDialogInputs(),n("mousedown",{onElement:this.element,matchingSelector:a,withCallback:this.didClickActionButton}),n("mousedown",{onElement:this.element,matchingSelector:c,withCallback:this.didClickAttributeButton}),n("click",{onElement:this.element,matchingSelector:y,preventDefault:!0}),n("click",{onElement:this.element,matchingSelector:l,withCallback:this.didClickDialogButton}),n("keydown",{onElement:this.element,matchingSelector:h,withCallback:this.didKeyDownDialogInput})}var a,u,c,l,h,p,d,f,g,m,y;return r(s,e),a="button[data-trix-action]",c="button[data-trix-attribute]",y=[a,c].join(", "),p=".dialog[data-trix-dialog]",u=p+".active",l=p+" input[data-trix-method]",h=p+" input[type=text], "+p+" input[type=url]",s.prototype.didClickActionButton=function(t,e){var n,o,i;return null!=(o=this.delegate)&&o.toolbarDidClickButton(),t.preventDefault(),n=d(e),this.getDialog(n)?this.toggleDialog(n):null!=(i=this.delegate)?i.toolbarDidInvokeAction(n):void 0},s.prototype.didClickAttributeButton=function(t,e){var n,o,i;return null!=(o=this.delegate)&&o.toolbarDidClickButton(),t.preventDefault(),n=f(e),this.getDialog(n)?this.toggleDialog(n):null!=(i=this.delegate)&&i.toolbarDidToggleAttribute(n),this.refreshAttributeButtons()},s.prototype.didClickDialogButton=function(e,n){var o,i;return o=t(n,{matchingSelector:p}),i=n.getAttribute("data-trix-method"),this[i].call(this,o)},s.prototype.didKeyDownDialogInput=function(t,e){var n,o;return 13===t.keyCode&&(t.preventDefault(),n=e.getAttribute("name"),o=this.getDialog(n),this.setAttribute(o)),27===t.keyCode?(t.preventDefault(),this.hideDialog()):void 0},s.prototype.updateActions=function(t){return this.actions=t,this.refreshActionButtons()},s.prototype.refreshActionButtons=function(){return this.eachActionButton(function(t){return function(e,n){return e.disabled=t.actions[n]===!1}}(this))},s.prototype.eachActionButton=function(t){var e,n,o,i,r;for(i=this.element.querySelectorAll(a),r=[],n=0,o=i.length;o>n;n++)e=i[n],r.push(t(e,d(e)));return r},s.prototype.updateAttributes=function(t){return this.attributes=t,this.refreshAttributeButtons()},s.prototype.refreshAttributeButtons=function(){return this.eachAttributeButton(function(t){return function(e,n){return e.disabled=t.attributes[n]===!1,t.attributes[n]||t.dialogIsVisible(n)?e.classList.add("active"):e.classList.remove("active")}}(this))},s.prototype.eachAttributeButton=function(t){var e,n,o,i,r;for(i=this.element.querySelectorAll(c),r=[],n=0,o=i.length;o>n;n++)e=i[n],r.push(t(e,f(e)));return r},s.prototype.applyKeyboardCommand=function(t){var e,n,i,r,s,a,u;for(s=JSON.stringify(t.sort()),u=this.element.querySelectorAll("[data-trix-key]"),r=0,a=u.length;a>r;r++)if(e=u[r],i=e.getAttribute("data-trix-key").split("+"),n=JSON.stringify(i.sort()),n===s)return o("mousedown",{onElement:e}),!0;return!1},s.prototype.dialogIsVisible=function(t){var e;return(e=this.getDialog(t))?e.classList.contains("active"):void 0},s.prototype.toggleDialog=function(t){return this.dialogIsVisible(t)?this.hideDialog():this.showDialog(t)},s.prototype.showDialog=function(t){var e,n,o,i,r,s,a,u,c,l;for(this.hideDialog(),null!=(a=this.delegate)&&a.toolbarWillShowDialog(),o=this.getDialog(t),o.classList.add("active"),u=o.querySelectorAll("input[disabled]"),i=0,s=u.length;s>i;i++)n=u[i],n.removeAttribute("disabled");return(e=f(o))&&(r=m(o,t))&&(r.value=null!=(c=this.attributes[e])?c:"",r.select()),null!=(l=this.delegate)?l.toolbarDidShowDialog(t):void 0},s.prototype.setAttribute=function(t){var e,n,o;return e=f(t),n=m(t,e),n.willValidate&&!n.checkValidity()?(n.classList.add("validate"),n.focus()):(null!=(o=this.delegate)&&o.toolbarDidUpdateAttribute(e,n.value),this.hideDialog())},s.prototype.removeAttribute=function(t){var e,n;return e=f(t),null!=(n=this.delegate)&&n.toolbarDidRemoveAttribute(e),this.hideDialog()},s.prototype.hideDialog=function(){var t,e;return(t=this.element.querySelector(u))?(t.classList.remove("active"),this.resetDialogInputs(),null!=(e=this.delegate)?e.toolbarDidHideDialog(g(t)):void 0):void 0},s.prototype.resetDialogInputs=function(){var t,e,n,o,i;for(o=this.element.querySelectorAll(h),i=[],t=0,n=o.length;n>t;t++)e=o[t],e.setAttribute("disabled","disabled"),i.push(e.classList.remove("validate"));return i},s.prototype.getDialog=function(t){return this.element.querySelector(".dialog[data-trix-dialog="+t+"]")},m=function(t,e){return null==e&&(e=f(t)),t.querySelector("input[name='"+e+"']")},d=function(t){return t.getAttribute("data-trix-action")},f=function(t){return t.getAttribute("data-trix-attribute")},g=function(t){return t.getAttribute("data-trix-dialog")},s}(e.BasicObject)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ImagePreloadOperation=function(e){function n(t){this.url=t}return t(n,e),n.prototype.perform=function(t){var e;return e=new Image,e.onload=function(n){return function(){return e.width=n.width=e.naturalWidth,e.height=n.height=e.naturalHeight,t(!0,e)}}(this),e.onerror=function(){return t(!1)},e.src=this.url},n}(e.Operation)}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},n=function(t,e){function n(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;e.Attachment=function(o){function i(n){null==n&&(n={}),this.releaseFile=t(this.releaseFile,this),i.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n),this.didChangeAttributes()}return n(i,o),i.previewablePattern=/^image(\/(gif|png|jpe?g)|$)/,i.attachmentForFile=function(t){var e,n;return n=this.attributesForFile(t),e=new this(n),e.setFile(t),e},i.attributesForFile=function(t){return new e.Hash({filename:t.name,filesize:t.size,contentType:t.type})},i.fromJSON=function(t){return new this(t)},i.prototype.getAttribute=function(t){return this.attributes.get(t)},i.prototype.hasAttribute=function(t){return this.attributes.has(t)},i.prototype.getAttributes=function(){return this.attributes.toObject()},i.prototype.setAttributes=function(t){var e,n;return null==t&&(t={}),e=this.attributes.merge(t),this.attributes.isEqualTo(e)?void 0:(this.attributes=e,this.didChangeAttributes(),null!=(n=this.delegate)&&"function"==typeof n.attachmentDidChangeAttributes?n.attachmentDidChangeAttributes(this):void 0)},i.prototype.didChangeAttributes=function(){return this.isPreviewable()?this.preloadURL():void 0},i.prototype.isPending=function(){return null!=this.file&&!(this.getURL()||this.getHref())},i.prototype.isPreviewable=function(){return this.attributes.has("previewable")?this.attributes.get("previewable"):this.constructor.previewablePattern.test(this.getContentType())},i.prototype.getType=function(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"},i.prototype.getURL=function(){return this.attributes.get("url")},i.prototype.getHref=function(){return this.attributes.get("href")},i.prototype.getFilename=function(){var t;return null!=(t=this.attributes.get("filename"))?t:""},i.prototype.getFilesize=function(){return this.attributes.get("filesize")},i.prototype.getFormattedFilesize=function(){var t;return t=this.attributes.get("filesize"),"number"==typeof t?e.config.fileSize.formatter(t):""},i.prototype.getExtension=function(){var t;return null!=(t=this.getFilename().match(/\.(\w+)$/))?t[1].toLowerCase():void 0},i.prototype.getContentType=function(){return this.attributes.get("contentType")},i.prototype.hasContent=function(){return this.attributes.has("content")},i.prototype.getContent=function(){return this.attributes.get("content")},i.prototype.getWidth=function(){return this.attributes.get("width")},i.prototype.getHeight=function(){return this.attributes.get("height")},i.prototype.getFile=function(){return this.file},i.prototype.setFile=function(t){return this.file=t,this.isPreviewable()?this.preloadFile():void 0},i.prototype.releaseFile=function(){return this.releasePreloadedFile(),this.file=null},i.prototype.getUploadProgress=function(){var t;return null!=(t=this.uploadProgress)?t:0},i.prototype.setUploadProgress=function(t){var e;return this.uploadProgress!==t?(this.uploadProgress=t,null!=(e=this.uploadProgressDelegate)&&"function"==typeof e.attachmentDidChangeUploadProgress?e.attachmentDidChangeUploadProgress(this):void 0):void 0},i.prototype.toJSON=function(){return this.getAttributes()},i.prototype.getCacheKey=function(){return[i.__super__.getCacheKey.apply(this,arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")},i.prototype.getPreviewURL=function(){return this.previewURL||this.preloadingURL},i.prototype.setPreviewURL=function(t){var e,n;return t!==this.getPreviewURL()?(this.previewURL=t,null!=(e=this.previewDelegate)&&"function"==typeof e.attachmentDidChangePreviewURL&&e.attachmentDidChangePreviewURL(this),null!=(n=this.delegate)&&"function"==typeof n.attachmentDidChangePreviewURL?n.attachmentDidChangePreviewURL(this):void 0):void 0},i.prototype.preloadURL=function(){return this.preload(this.getURL(),this.releaseFile)},i.prototype.preloadFile=function(){return this.file?(this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)):void 0},i.prototype.releasePreloadedFile=function(){return this.fileObjectURL?(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null):void 0},i.prototype.preload=function(t,n){var o;return t&&t!==this.getPreviewURL()?(this.preloadingURL=t,o=new e.ImagePreloadOperation(t),o.then(function(e){return function(o){var i,r;return r=o.width,i=o.height,e.setAttributes({width:r,height:i}),e.preloadingURL=null,e.setPreviewURL(t),"function"==typeof n?n():void 0}}(this))):void 0},i}(e.Object)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece=function(n){function o(t,n){null==n&&(n={}),o.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n)}return t(o,n),o.types={},o.registerType=function(t,e){return e.type=t,this.types[t]=e},o.fromJSON=function(t){var e;return(e=this.types[t.type])?e.fromJSON(t):void 0},o.prototype.copyWithAttributes=function(t){return new this.constructor(this.getValue(),t)},o.prototype.copyWithAdditionalAttributes=function(t){return this.copyWithAttributes(this.attributes.merge(t))},o.prototype.copyWithoutAttribute=function(t){return this.copyWithAttributes(this.attributes.remove(t))},o.prototype.copy=function(){return this.copyWithAttributes(this.attributes)},o.prototype.getAttribute=function(t){return this.attributes.get(t)},o.prototype.getAttributesHash=function(){return this.attributes},o.prototype.getAttributes=function(){return this.attributes.toObject()},o.prototype.getCommonAttributes=function(){var t,e,n;return(n=pieceList.getPieceAtIndex(0))?(t=n.attributes,e=t.getKeys(),pieceList.eachPiece(function(n){return e=t.getKeysCommonToHash(n.attributes),t=t.slice(e)}),t.toObject()):{}},o.prototype.hasAttribute=function(t){return this.attributes.has(t)},o.prototype.hasSameStringValueAsPiece=function(t){return null!=t&&this.toString()===t.toString()
},o.prototype.hasSameAttributesAsPiece=function(t){return null!=t&&(this.attributes===t.attributes||this.attributes.isEqualTo(t.attributes))},o.prototype.isBlockBreak=function(){return!1},o.prototype.isEqualTo=function(t){return o.__super__.isEqualTo.apply(this,arguments)||this.hasSameConstructorAs(t)&&this.hasSameStringValueAsPiece(t)&&this.hasSameAttributesAsPiece(t)},o.prototype.isEmpty=function(){return 0===this.length},o.prototype.isSerializable=function(){return!0},o.prototype.toJSON=function(){return{type:this.constructor.type,attributes:this.getAttributes()}},o.prototype.contentsForInspection=function(){return{type:this.constructor.type,attributes:this.attributes.inspect()}},o.prototype.canBeGrouped=function(){return this.hasAttribute("href")},o.prototype.canBeGroupedWith=function(t){return this.getAttribute("href")===t.getAttribute("href")},o.prototype.getLength=function(){return this.length},o.prototype.canBeConsolidatedWith=function(){return!1},o}(e.Object)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece.registerType("attachment",e.AttachmentPiece=function(n){function o(t){this.attachment=t,o.__super__.constructor.apply(this,arguments),this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href")}return t(o,n),o.fromJSON=function(t){return new this(e.Attachment.fromJSON(t.attachment),t.attributes)},o.prototype.ensureAttachmentExclusivelyHasAttribute=function(t){return this.hasAttribute(t)&&this.attachment.hasAttribute(t)?this.attributes=this.attributes.remove(t):void 0},o.prototype.getValue=function(){return this.attachment},o.prototype.isSerializable=function(){return!this.attachment.isPending()},o.prototype.getCaption=function(){var t;return null!=(t=this.attributes.get("caption"))?t:""},o.prototype.getAttributesForAttachment=function(){return this.attributes.slice(["caption"])},o.prototype.canBeGrouped=function(){return o.__super__.canBeGrouped.apply(this,arguments)&&!this.attachment.hasAttribute("href")},o.prototype.isEqualTo=function(t){var e;return o.__super__.isEqualTo.apply(this,arguments)&&this.attachment.id===(null!=t&&null!=(e=t.attachment)?e.id:void 0)},o.prototype.toString=function(){return e.OBJECT_REPLACEMENT_CHARACTER},o.prototype.toJSON=function(){var t;return t=o.__super__.toJSON.apply(this,arguments),t.attachment=this.attachment,t},o.prototype.getCacheKey=function(){return[o.__super__.getCacheKey.apply(this,arguments),this.attachment.getCacheKey()].join("/")},o.prototype.toConsole=function(){return JSON.stringify(this.toString())},o}(e.Piece))}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece.registerType("string",e.StringPiece=function(e){function n(t){n.__super__.constructor.apply(this,arguments),this.string=t,this.length=this.string.length}return t(n,e),n.fromJSON=function(t){return new this(t.string,t.attributes)},n.prototype.getValue=function(){return this.string},n.prototype.toString=function(){return this.string.toString()},n.prototype.isBlockBreak=function(){return"\n"===this.toString()&&this.getAttribute("blockBreak")===!0},n.prototype.toJSON=function(){var t;return t=n.__super__.toJSON.apply(this,arguments),t.string=this.string,t},n.prototype.canBeConsolidatedWith=function(t){return null!=t&&this.hasSameConstructorAs(t)&&this.hasSameAttributesAsPiece(t)},n.prototype.consolidateWith=function(t){return new this.constructor(this.toString()+t.toString(),this.attributes)},n.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.length?(e=this,n=null):(e=new this.constructor(this.string.slice(0,t),this.attributes),n=new this.constructor(this.string.slice(t),this.attributes)),[e,n]},n.prototype.toConsole=function(){var t;return t=this.string,t.length>15&&(t=t.slice(0,14)+"\u2026"),JSON.stringify(t.toString())},n}(e.Piece))}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty,i=[].slice;t=e.spliceArray,e.SplittableList=function(e){function o(t){null==t&&(t=[]),o.__super__.constructor.apply(this,arguments),this.objects=t.slice(0),this.length=this.objects.length}var r,s,a;return n(o,e),o.box=function(t){return t instanceof this?t:new this(t)},o.prototype.indexOf=function(t){return this.objects.indexOf(t)},o.prototype.splice=function(){var e;return e=1<=arguments.length?i.call(arguments,0):[],new this.constructor(t.apply(null,[this.objects].concat(i.call(e))))},o.prototype.eachObject=function(t){var e,n,o,i,r,s;for(r=this.objects,s=[],n=e=0,o=r.length;o>e;n=++e)i=r[n],s.push(t(i,n));return s},o.prototype.insertObjectAtIndex=function(t,e){return this.splice(e,0,t)},o.prototype.insertSplittableListAtIndex=function(t,e){return this.splice.apply(this,[e,0].concat(i.call(t.objects)))},o.prototype.insertSplittableListAtPosition=function(t,e){var n,o,i;return i=this.splitObjectAtPosition(e),o=i[0],n=i[1],new this.constructor(o).insertSplittableListAtIndex(t,n)},o.prototype.editObjectAtIndex=function(t,e){return this.replaceObjectAtIndex(e(this.objects[t]),t)},o.prototype.replaceObjectAtIndex=function(t,e){return this.splice(e,1,t)},o.prototype.removeObjectAtIndex=function(t){return this.splice(t,1)},o.prototype.getObjectAtIndex=function(t){return this.objects[t]},o.prototype.getSplittableListInRange=function(t){var e,n,o,i;return o=this.splitObjectsAtRange(t),n=o[0],e=o[1],i=o[2],new this.constructor(n.slice(e,i+1))},o.prototype.selectSplittableList=function(t){var e,n;return n=function(){var n,o,i,r;for(i=this.objects,r=[],n=0,o=i.length;o>n;n++)e=i[n],t(e)&&r.push(e);return r}.call(this),new this.constructor(n)},o.prototype.removeObjectsInRange=function(t){var e,n,o,i;return o=this.splitObjectsAtRange(t),n=o[0],e=o[1],i=o[2],new this.constructor(n).splice(e,i-e+1)},o.prototype.transformObjectsInRange=function(t,e){var n,o,i,r,s,a,u;return s=this.splitObjectsAtRange(t),r=s[0],o=s[1],a=s[2],u=function(){var t,s,u;for(u=[],n=t=0,s=r.length;s>t;n=++t)i=r[n],u.push(n>=o&&a>=n?e(i):i);return u}(),new this.constructor(u)},o.prototype.splitObjectsAtRange=function(t){var e,n,o,i,s,u;return i=this.splitObjectAtPosition(a(t)),n=i[0],e=i[1],o=i[2],s=new this.constructor(n).splitObjectAtPosition(r(t)+o),n=s[0],u=s[1],[n,e,u-1]},o.prototype.getObjectAtPosition=function(t){var e,n,o;return o=this.findIndexAndOffsetAtPosition(t),e=o.index,n=o.offset,this.objects[e]},o.prototype.splitObjectAtPosition=function(t){var e,n,o,i,r,s,a,u,c,l;return s=this.findIndexAndOffsetAtPosition(t),e=s.index,r=s.offset,i=this.objects.slice(0),null!=e?0===r?(c=e,l=0):(o=this.getObjectAtIndex(e),a=o.splitAtOffset(r),n=a[0],u=a[1],i.splice(e,1,n,u),c=e+1,l=n.getLength()-r):(c=i.length,l=0),[i,c,l]},o.prototype.consolidate=function(){var t,e,n,o,i,r;for(o=[],i=this.objects[0],r=this.objects.slice(1),t=0,e=r.length;e>t;t++)n=r[t],("function"==typeof i.canBeConsolidatedWith?i.canBeConsolidatedWith(n):void 0)?i=i.consolidateWith(n):(o.push(i),i=n);return null!=i&&o.push(i),new this.constructor(o)},o.prototype.consolidateFromIndexToIndex=function(t,e){var n,o,r;return o=this.objects.slice(0),r=o.slice(t,e+1),n=new this.constructor(r).consolidate().toArray(),this.splice.apply(this,[t,r.length].concat(i.call(n)))},o.prototype.findIndexAndOffsetAtPosition=function(t){var e,n,o,i,r,s,a;for(e=0,a=this.objects,o=n=0,i=a.length;i>n;o=++n){if(s=a[o],r=e+s.getLength(),t>=e&&r>t)return{index:o,offset:t-e};e=r}return{index:null,offset:null}},o.prototype.findPositionAtIndexAndOffset=function(t,e){var n,o,i,r,s,a;for(s=0,a=this.objects,n=o=0,i=a.length;i>o;n=++o)if(r=a[n],t>n)s+=r.getLength();else if(n===t){s+=e;break}return s},o.prototype.getEndPosition=function(){var t,e;return null!=this.endPosition?this.endPosition:this.endPosition=function(){var n,o,i;for(e=0,i=this.objects,n=0,o=i.length;o>n;n++)t=i[n],e+=t.getLength();return e}.call(this)},o.prototype.toString=function(){return this.objects.join("")},o.prototype.toArray=function(){return this.objects.slice(0)},o.prototype.toJSON=function(){return this.toArray()},o.prototype.isEqualTo=function(t){return o.__super__.isEqualTo.apply(this,arguments)||s(this.objects,null!=t?t.objects:void 0)},s=function(t,e){var n,o,i,r,s;if(null==e&&(e=[]),t.length!==e.length)return!1;for(s=!0,o=n=0,i=t.length;i>n;o=++n)r=t[o],s&&!r.isEqualTo(e[o])&&(s=!1);return s},o.prototype.contentsForInspection=function(){var t;return{objects:"["+function(){var e,n,o,i;for(o=this.objects,i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(t.inspect());return i}.call(this).join(", ")+"]"}},a=function(t){return t[0]},r=function(t){return t[1]},o}(e.Object)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Text=function(n){function o(t){var n;null==t&&(t=[]),o.__super__.constructor.apply(this,arguments),this.pieceList=new e.SplittableList(function(){var e,o,i;for(i=[],e=0,o=t.length;o>e;e++)n=t[e],n.isEmpty()||i.push(n);return i}())}return t(o,n),o.textForAttachmentWithAttributes=function(t,n){var o;return o=new e.AttachmentPiece(t,n),new this([o])},o.textForStringWithAttributes=function(t,n){var o;return o=new e.StringPiece(t,n),new this([o])},o.fromJSON=function(t){var n,o;return o=function(){var o,i,r;for(r=[],o=0,i=t.length;i>o;o++)n=t[o],r.push(e.Piece.fromJSON(n));return r}(),new this(o)},o.prototype.copy=function(){return this.copyWithPieceList(this.pieceList)},o.prototype.copyWithPieceList=function(t){return new this.constructor(t.consolidate().toArray())},o.prototype.copyUsingObjectMap=function(t){var e,n;return n=function(){var n,o,i,r,s;for(i=this.getPieces(),s=[],n=0,o=i.length;o>n;n++)e=i[n],s.push(null!=(r=t.find(e))?r:e);return s}.call(this),new this.constructor(n)},o.prototype.appendText=function(t){return this.insertTextAtPosition(t,this.getLength())},o.prototype.insertTextAtPosition=function(t,e){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList,e))},o.prototype.removeTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t))},o.prototype.replaceTextAtRange=function(t,e){return this.removeTextAtRange(e).insertTextAtPosition(t,e[0])},o.prototype.moveTextFromRangeToPosition=function(t,e){var n,o;if(!(t[0]<=e&&e<=t[1]))return o=this.getTextAtRange(t),n=o.getLength(),t[0]<e&&(e-=n),this.removeTextAtRange(t).insertTextAtPosition(o,e)},o.prototype.addAttributeAtRange=function(t,e,n){var o;return o={},o[t]=e,this.addAttributesAtRange(o,n)},o.prototype.addAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAdditionalAttributes(t)}))},o.prototype.removeAttributeAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithoutAttribute(t)}))},o.prototype.setAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAttributes(t)}))},o.prototype.getAttributesAtPosition=function(t){var e,n;return null!=(e=null!=(n=this.pieceList.getObjectAtPosition(t))?n.getAttributes():void 0)?e:{}},o.prototype.getCommonAttributes=function(){var t,n;return t=function(){var t,e,o,i;for(o=this.pieceList.toArray(),i=[],t=0,e=o.length;e>t;t++)n=o[t],i.push(n.getAttributes());return i}.call(this),e.Hash.fromCommonAttributesOfObjects(t).toObject()},o.prototype.getCommonAttributesAtRange=function(t){var e;return null!=(e=this.getTextAtRange(t).getCommonAttributes())?e:{}},o.prototype.getExpandedRangeForAttributeAtOffset=function(t,e){var n,o,i;for(n=i=e,o=this.getLength();n>0&&this.getCommonAttributesAtRange([n-1,i])[t];)n--;for(;o>i&&this.getCommonAttributesAtRange([e,i+1])[t];)i++;return[n,i]},o.prototype.getTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t))},o.prototype.getStringAtRange=function(t){return this.pieceList.getSplittableListInRange(t).toString()},o.prototype.getStringAtPosition=function(t){return this.getStringAtRange([t,t+1])},o.prototype.startsWithString=function(t){return this.getStringAtRange([0,t.length])===t},o.prototype.endsWithString=function(t){var e;return e=this.getLength(),this.getStringAtRange([e-t.length,e])===t},o.prototype.getAttachmentPieces=function(){var t,e,n,o,i;for(o=this.pieceList.toArray(),i=[],t=0,e=o.length;e>t;t++)n=o[t],null!=n.attachment&&i.push(n);return i},o.prototype.getAttachments=function(){var t,e,n,o,i;for(o=this.getAttachmentPieces(),i=[],t=0,e=o.length;e>t;t++)n=o[t],i.push(n.attachment);return i},o.prototype.getAttachmentAndPositionById=function(t){var e,n,o,i,r,s;for(i=0,r=this.pieceList.toArray(),e=0,n=r.length;n>e;e++){if(o=r[e],(null!=(s=o.attachment)?s.id:void 0)===t)return{attachment:o.attachment,position:i};i+=o.length}return{attachment:null,position:null}},o.prototype.getAttachmentById=function(t){var e,n,o;return o=this.getAttachmentAndPositionById(t),e=o.attachment,n=o.position,e},o.prototype.getRangeOfAttachment=function(t){var e,n;return n=this.getAttachmentAndPositionById(t.id),t=n.attachment,e=n.position,null!=t?[e,e+1]:void 0},o.prototype.updateAttributesForAttachment=function(t,e){var n;return(n=this.getRangeOfAttachment(e))?this.addAttributesAtRange(t,n):this},o.prototype.getLength=function(){return this.pieceList.getEndPosition()},o.prototype.isEmpty=function(){return 0===this.getLength()},o.prototype.isEqualTo=function(t){var e;return o.__super__.isEqualTo.apply(this,arguments)||(null!=t&&null!=(e=t.pieceList)?e.isEqualTo(this.pieceList):void 0)},o.prototype.isBlockBreak=function(){return 1===this.getLength()&&this.pieceList.getObjectAtIndex(0).isBlockBreak()},o.prototype.eachPiece=function(t){return this.pieceList.eachObject(t)},o.prototype.getPieces=function(){return this.pieceList.toArray()},o.prototype.getPieceAtPosition=function(t){return this.pieceList.getObjectAtPosition(t)},o.prototype.contentsForInspection=function(){return{pieceList:this.pieceList.inspect()}},o.prototype.toSerializableText=function(){var t;return t=this.pieceList.selectSplittableList(function(t){return t.isSerializable()}),this.copyWithPieceList(t)},o.prototype.toString=function(){return this.pieceList.toString()},o.prototype.toJSON=function(){return this.pieceList.toJSON()},o.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,o,i;for(o=this.pieceList.toArray(),i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(JSON.parse(t.toConsole()));return i}.call(this))},o}(e.Object)}.call(this),function(){var t,n,o,i,r,s=function(t,e){function n(){this.constructor=t}for(var o in e)a.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty,u=[].slice,c=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.arraysAreEqual,r=e.spliceArray,o=e.getBlockConfig,n=e.getBlockAttributeNames,i=e.getListAttributeNames,e.Block=function(n){function a(t,n){null==t&&(t=new e.Text),null==n&&(n=[]),a.__super__.constructor.apply(this,arguments),this.text=h(t),this.attributes=n}var l,h,p,d,f,g,m,y,v;return s(a,n),a.fromJSON=function(t){var n;return n=e.Text.fromJSON(t.text),new this(n,t.attributes)},a.prototype.isEmpty=function(){return this.text.isBlockBreak()},a.prototype.isEqualTo=function(e){return a.__super__.isEqualTo.apply(this,arguments)||this.text.isEqualTo(null!=e?e.text:void 0)&&t(this.attributes,null!=e?e.attributes:void 0)},a.prototype.copyWithText=function(t){return new this.constructor(t,this.attributes)},a.prototype.copyWithoutText=function(){return this.copyWithText(null)},a.prototype.copyWithAttributes=function(t){return new this.constructor(this.text,t)},a.prototype.copyUsingObjectMap=function(t){var e;return this.copyWithText((e=t.find(this.text))?e:this.text.copyUsingObjectMap(t))},a.prototype.addAttribute=function(t){var e;return e=this.attributes.concat(d(t)),this.copyWithAttributes(e)},a.prototype.removeAttribute=function(t){var e,n;return n=o(t).listAttribute,e=g(g(this.attributes,t),n),this.copyWithAttributes(e)},a.prototype.removeLastAttribute=function(){return this.removeAttribute(this.getLastAttribute())},a.prototype.getLastAttribute=function(){return f(this.attributes)},a.prototype.getAttributes=function(){return this.attributes.slice(0)},a.prototype.getAttributeLevel=function(){return this.attributes.length},a.prototype.getAttributeAtLevel=function(t){return this.attributes[t-1]},a.prototype.hasAttributes=function(){return this.getAttributeLevel()>0},a.prototype.getLastNestableAttribute=function(){return f(this.getNestableAttributes())},a.prototype.getNestableAttributes=function(){var t,e,n,i,r;for(i=this.attributes,r=[],e=0,n=i.length;n>e;e++)t=i[e],o(t).nestable&&r.push(t);return r},a.prototype.getNestingLevel=function(){return this.getNestableAttributes().length},a.prototype.decreaseNestingLevel=function(){var t;return(t=this.getLastNestableAttribute())?this.removeAttribute(t):this},a.prototype.increaseNestingLevel=function(){var t,e,n;return(t=this.getLastNestableAttribute())?(n=this.attributes.lastIndexOf(t),e=r.apply(null,[this.attributes,n+1,0].concat(u.call(d(t)))),this.copyWithAttributes(e)):this},a.prototype.getListItemAttributes=function(){var t,e,n,i,r;for(i=this.attributes,r=[],e=0,n=i.length;n>e;e++)t=i[e],o(t).listAttribute&&r.push(t);return r},a.prototype.isListItem=function(){var t;return null!=(t=o(this.getLastAttribute()))?t.listAttribute:void 0},a.prototype.isTerminalBlock=function(){var t;return null!=(t=o(this.getLastAttribute()))?t.terminal:void 0},a.prototype.breaksOnReturn=function(){var t;return null!=(t=o(this.getLastAttribute()))?t.breakOnReturn:void 0},a.prototype.findLineBreakInDirectionFromPosition=function(t,e){var n,o;return o=this.toString(),n=function(){switch(t){case"forward":return o.indexOf("\n",e);case"backward":return o.slice(0,e).lastIndexOf("\n")}}(),-1!==n?n:void 0},a.prototype.contentsForInspection=function(){return{text:this.text.inspect(),attributes:this.attributes}},a.prototype.toString=function(){return this.text.toString()},a.prototype.toJSON=function(){return{text:this.text,attributes:this.attributes}},a.prototype.getLength=function(){return this.text.getLength()},a.prototype.canBeConsolidatedWith=function(t){return!this.hasAttributes()&&!t.hasAttributes()},a.prototype.consolidateWith=function(t){var n,o;return n=e.Text.textForStringWithAttributes("\n"),o=this.getTextWithoutBlockBreak().appendText(n),this.copyWithText(o.appendText(t.text))},a.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.getLength()?(e=this,n=null):(e=this.copyWithText(this.text.getTextAtRange([0,t])),n=this.copyWithText(this.text.getTextAtRange([t,this.getLength()]))),[e,n]},a.prototype.getBlockBreakPosition=function(){return this.text.getLength()-1},a.prototype.getTextWithoutBlockBreak=function(){return m(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()},a.prototype.canBeGrouped=function(t){return this.attributes[t]},a.prototype.canBeGroupedWith=function(t,e){var n,r,s,a;return s=t.getAttributes(),r=s[e],n=this.attributes[e],n===r&&!(o(n).group===!1&&(a=s[e+1],c.call(i(),a)<0))},h=function(t){return t=v(t),t=l(t)},v=function(t){var n,o,i,r,s,a;return r=!1,a=t.getPieces(),o=2<=a.length?u.call(a,0,n=a.length-1):(n=0,[]),i=a[n++],null==i?t:(o=function(){var t,e,n;for(n=[],t=0,e=o.length;e>t;t++)s=o[t],s.isBlockBreak()?(r=!0,n.push(y(s))):n.push(s);return n}(),r?new e.Text(u.call(o).concat([i])):t)},p=e.Text.textForStringWithAttributes("\n",{blockBreak:!0}),l=function(t){return m(t)?t:t.appendText(p)},m=function(t){var e,n;return n=t.getLength(),0===n?!1:(e=t.getTextAtRange([n-1,n]),e.isBlockBreak())},y=function(t){return t.copyWithoutAttribute("blockBreak")},d=function(t){var e;return e=o(t).listAttribute,null!=e?[e,t]:[t]},f=function(t){return t.slice(-1)[0]},g=function(t,e){var n;return n=t.lastIndexOf(e),-1===n?t:r(t,n,1)},a}(e.Object)}.call(this),function(){var t,n,o,i,r,s,a,u,c,l=function(t,e){function n(){this.constructor=t}for(var o in e)h.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},h={}.hasOwnProperty,p=[].slice,d=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.arraysAreEqual,a=e.normalizeSpaces,r=e.makeElement,u=e.tagName,i=e.getBlockTagNames,c=e.walkTree,o=e.findClosestElementFromNode,n=e.elementContainsNode,s=e.nodeIsAttachmentElement,e.HTMLParser=function(h){function f(t,e){this.html=t,this.referenceElement=(null!=e?e:{}).referenceElement,this.blocks=[],this.blockElements=[],this.processedElements=[]}var g,m,y,v,b,A,C,w,x,E,S,k,R,L,D,O;return l(f,h),g="style href src width height class".split(" "),f.parse=function(t,e){var n;return n=new this(t,e),n.parse(),n},f.prototype.getDocument=function(){return e.Document.fromJSON(this.blocks)},f.prototype.parse=function(){var t,e;try{for(this.createHiddenContainer(),t=R(this.html),this.containerElement.innerHTML=t,e=c(this.containerElement,{usingFilter:E});e.nextNode();)this.processNode(e.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer()}},f.prototype.createHiddenContainer=function(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=r({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))},f.prototype.removeHiddenContainer=function(){return this.containerElement.parentNode.removeChild(this.containerElement)},R=function(t){var e,n,o,i,r,s,a,u,l,h,f,m,y,v,A,C;for(t=t.replace(/<\/html[^>]*>[^]*$/i,"</html>"),n=document.implementation.createHTMLDocument(""),n.documentElement.innerHTML=t,e=n.body,o=n.head,y=o.querySelectorAll("style"),i=0,a=y.length;a>i;i++)A=y[i],e.appendChild(A);for(m=[],C=c(e);C.nextNode();)switch(f=C.currentNode,f.nodeType){case Node.ELEMENT_NODE:if(b(f))m.push(f);else for(v=p.call(f.attributes),r=0,u=v.length;u>r;r++)h=v[r].name,d.call(g,h)>=0||0===h.indexOf("data-trix")||f.removeAttribute(h);break;case Node.COMMENT_NODE:m.push(f)}for(s=0,l=m.length;l>s;s++)f=m[s],f.parentNode.removeChild(f);return e.innerHTML},b=function(t){return(null!=t?t.nodeType:void 0)!==Node.ELEMENT_NODE||s(t)?void 0:"script"===u(t)||"false"===t.getAttribute("data-trix-serialize")},E=function(t){return"style"===u(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},f.prototype.processNode=function(t){switch(t.nodeType){case Node.TEXT_NODE:return this.processTextNode(t);case Node.ELEMENT_NODE:return this.appendBlockForElement(t),this.processElement(t)}},f.prototype.appendBlockForElement=function(e){var o,i,r,s;if(r=this.isBlockElement(e),i=n(this.currentBlockElement,e),r&&!this.isBlockElement(e.firstChild)){if(!(this.isInsignificantTextNode(e.firstChild)&&this.isBlockElement(e.firstElementChild)||(o=this.getBlockAttributes(e),i&&t(o,this.currentBlock.attributes))))return this.currentBlock=this.appendBlockForAttributesWithElement(o,e),this.currentBlockElement=e}else if(this.currentBlockElement&&!i&&!r)return(s=this.findParentBlockElement(e))?this.appendBlockForElement(s):(this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null)},f.prototype.findParentBlockElement=function(t){var e;for(e=t.parentElement;e&&e!==this.containerElement;){if(this.isBlockElement(e)&&d.call(this.blockElements,e)>=0)return e;e=e.parentElement}return null},f.prototype.processTextNode=function(t){var e,n;return this.isInsignificantTextNode(t)?void 0:(n=t.data,v(t.parentNode)||(n=L(n),D(null!=(e=t.previousSibling)?e.textContent:void 0)&&(n=x(n))),this.appendStringWithAttributes(n,this.getTextAttributes(t.parentNode)))},f.prototype.processElement=function(t){var e,n,o,i,r;if(s(t))return e=A(t),Object.keys(e).length&&(i=this.getTextAttributes(t),this.appendAttachmentWithAttributes(e,i),t.innerHTML=""),this.processedElements.push(t);switch(u(t)){case"br":return this.isExtraBR(t)||this.isBlockElement(t.nextSibling)||this.appendStringWithAttributes("\n",this.getTextAttributes(t)),this.processedElements.push(t);case"img":e={url:t.getAttribute("src"),contentType:"image"},o=w(t);for(n in o)r=o[n],e[n]=r;return this.appendAttachmentWithAttributes(e,this.getTextAttributes(t)),this.processedElements.push(t);case"tr":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes("\n");break;case"td":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes(" | ")}},f.prototype.appendBlockForAttributesWithElement=function(t,e){var n;return this.blockElements.push(e),n=m(t),this.blocks.push(n),n},f.prototype.appendEmptyBlock=function(){return this.appendBlockForAttributesWithElement([],null)},f.prototype.appendStringWithAttributes=function(t,e){return this.appendPiece(k(t,e))},f.prototype.appendAttachmentWithAttributes=function(t,e){return this.appendPiece(S(t,e))},f.prototype.appendPiece=function(t){return 0===this.blocks.length&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(t)},f.prototype.appendStringToTextAtIndex=function(t,e){var n,o;return o=this.blocks[e].text,n=o[o.length-1],"string"===(null!=n?n.type:void 0)?n.string+=t:o.push(k(t))},f.prototype.prependStringToTextAtIndex=function(t,e){var n,o;return o=this.blocks[e].text,n=o[0],"string"===(null!=n?n.type:void 0)?n.string=t+n.string:o.unshift(k(t))},k=function(t,e){var n;return null==e&&(e={}),n="string",t=a(t),{string:t,attributes:e,type:n}},S=function(t,e){var n;return null==e&&(e={}),n="attachment",{attachment:t,attributes:e,type:n}},m=function(t){var e;return null==t&&(t={}),e=[],{text:e,attributes:t}},f.prototype.getTextAttributes=function(t){var n,i,r,a,u,c,l,h,p,d,f,g,m;r={},d=e.config.textAttributes;for(n in d)if(u=d[n],u.tagName&&o(t,{matchingSelector:u.tagName,untilNode:this.containerElement}))r[n]=!0;else if(u.parser&&(m=u.parser(t))){for(i=!1,f=this.findBlockElementAncestors(t),c=0,p=f.length;p>c;c++)if(a=f[c],u.parser(a)===m){i=!0;break}i||(r[n]=m)}if(s(t)&&(l=t.getAttribute("data-trix-attributes"))){g=JSON.parse(l);for(h in g)m=g[h],r[h]=m}return r},f.prototype.getBlockAttributes=function(t){var n,o,i,r;for(o=[];t&&t!==this.containerElement;){r=e.config.blockAttributes;for(n in r)i=r[n],i.parse!==!1&&u(t)===i.tagName&&(("function"==typeof i.test?i.test(t):void 0)||!i.test)&&(o.push(n),i.listAttribute&&o.push(i.listAttribute));t=t.parentNode}return o.reverse()},f.prototype.findBlockElementAncestors=function(t){var e,n;for(e=[];t&&t!==this.containerElement;)n=u(t),d.call(i(),n)>=0&&e.push(t),t=t.parentNode;return e},A=function(t){return JSON.parse(t.getAttribute("data-trix-attachment"))},w=function(t){var e,n,o;return o=t.getAttribute("width"),n=t.getAttribute("height"),e={},o&&(e.width=parseInt(o,10)),n&&(e.height=parseInt(n,10)),e},f.prototype.isBlockElement=function(t){var e;if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE&&!o(t,{matchingSelector:"td",untilNode:this.containerElement}))return e=u(t),d.call(i(),e)>=0||"block"===window.getComputedStyle(t).display},f.prototype.isInsignificantTextNode=function(t){return(null!=t?t.nodeType:void 0)===Node.TEXT_NODE&&O(t.data)&&!v(t.parentNode)?!t.previousSibling||this.isBlockElement(t.previousSibling)||!t.nextSibling||this.isBlockElement(t.nextSibling):void 0},f.prototype.isExtraBR=function(t){return"br"===u(t)&&this.isBlockElement(t.parentNode)&&t.parentNode.lastChild===t},v=function(t){var e;return e=window.getComputedStyle(t).whiteSpace,"pre"===e||"pre-wrap"===e||"pre-line"===e},f.prototype.translateBlockElementMarginsToNewlines=function(){var t,e,n,o,i,r,s,a;for(e=this.getMarginOfDefaultBlockElement(),s=this.blocks,a=[],o=n=0,i=s.length;i>n;o=++n)t=s[o],(r=this.getMarginOfBlockElementAtIndex(o))&&(r.top>2*e.top&&this.prependStringToTextAtIndex("\n",o),a.push(r.bottom>2*e.bottom?this.appendStringToTextAtIndex("\n",o):void 0));return a},f.prototype.getMarginOfBlockElementAtIndex=function(t){var e,n;return!(e=this.blockElements[t])||(n=u(e),d.call(i(),n)>=0||d.call(this.processedElements,e)>=0)?void 0:C(e)},f.prototype.getMarginOfDefaultBlockElement=function(){var t;return t=r(e.config.blockAttributes["default"].tagName),this.containerElement.appendChild(t),C(t)},C=function(t){var e;return e=window.getComputedStyle(t),"block"===e.display?{top:parseInt(e.marginTop),bottom:parseInt(e.marginBottom)}:void 0},y=RegExp("[^\\S"+e.NON_BREAKING_SPACE+"]"),L=function(t){return t.replace(RegExp(""+y.source,"g")," ").replace(/\ {2,}/g," ")},x=function(t){return t.replace(RegExp("^"+y.source+"+"),"")},O=function(t){return RegExp("^"+y.source+"*$").test(t)},D=function(t){return/\s$/.test(t)},f}(e.BasicObject)}.call(this),function(){var t,n,o,i,r=function(t,e){function n(){this.constructor=t}for(var o in e)s.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.arraysAreEqual,o=e.normalizeRange,i=e.rangeIsCollapsed,n=e.getBlockConfig,e.Document=function(s){function c(t){null==t&&(t=[]),c.__super__.constructor.apply(this,arguments),0===t.length&&(t=[new e.Block]),this.blockList=e.SplittableList.box(t)}var l;return r(c,s),c.fromJSON=function(t){var n,o;return o=function(){var o,i,r;for(r=[],o=0,i=t.length;i>o;o++)n=t[o],r.push(e.Block.fromJSON(n));return r}(),new this(o)},c.fromHTML=function(t,n){return e.HTMLParser.parse(t,n).getDocument()},c.fromString=function(t,n){var o;return o=e.Text.textForStringWithAttributes(t,n),new this([new e.Block(o)])},c.prototype.isEmpty=function(){var t;return 1===this.blockList.length&&(t=this.getBlockAtIndex(0),t.isEmpty()&&!t.hasAttributes())},c.prototype.copy=function(t){var e;return null==t&&(t={}),e=t.consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray(),new this.constructor(e)},c.prototype.copyUsingObjectsFromDocument=function(t){var n;return n=new e.ObjectMap(t.getObjects()),this.copyUsingObjectMap(n)},c.prototype.copyUsingObjectMap=function(t){var e,n,o;return n=function(){var n,i,r,s;for(r=this.getBlocks(),s=[],n=0,i=r.length;i>n;n++)e=r[n],s.push((o=t.find(e))?o:e.copyUsingObjectMap(t));return s}.call(this),new this.constructor(n)},c.prototype.copyWithBaseBlockAttributes=function(t){var e,n,o;return null==t&&(t=[]),o=function(){var o,i,r,s;for(r=this.getBlocks(),s=[],o=0,i=r.length;i>o;o++)n=r[o],e=t.concat(n.getAttributes()),s.push(n.copyWithAttributes(e));return s}.call(this),new this.constructor(o)},c.prototype.replaceBlock=function(t,e){var n;return n=this.blockList.indexOf(t),-1===n?this:new this.constructor(this.blockList.replaceObjectAtIndex(e,n))},c.prototype.insertDocumentAtRange=function(t,e){var n,r,s,a,u,c,l;return r=t.blockList,u=(e=o(e))[0],c=this.locationFromPosition(u),s=c.index,a=c.offset,l=this,n=this.getBlockAtPosition(u),i(e)&&n.isEmpty()&&!n.hasAttributes()?l=new this.constructor(l.blockList.removeObjectAtIndex(s)):n.getBlockBreakPosition()===a&&u++,l=l.removeTextAtRange(e),new this.constructor(l.blockList.insertSplittableListAtPosition(r,u))},c.prototype.mergeDocumentAtRange=function(e,n){var i,r,s,a,u,c,l,h,p,d,f,g;return f=(n=o(n))[0],d=this.locationFromPosition(f),r=this.getBlockAtIndex(d.index).getAttributes(),i=e.getBaseBlockAttributes(),g=r.slice(-i.length),t(i,g)?(l=r.slice(0,-i.length),c=e.copyWithBaseBlockAttributes(l)):c=e.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(r),s=c.getBlockCount(),a=c.getBlockAtIndex(0),t(r,a.getAttributes())?(u=a.getTextWithoutBlockBreak(),p=this.insertTextAtRange(u,n),s>1&&(c=new this.constructor(c.getBlocks().slice(1)),h=f+u.getLength(),p=p.insertDocumentAtRange(c,h))):p=this.insertDocumentAtRange(c,n),p},c.prototype.insertTextAtRange=function(t,e){var n,i,r,s,a;return a=(e=o(e))[0],s=this.locationFromPosition(a),i=s.index,r=s.offset,n=this.removeTextAtRange(e),new this.constructor(n.blockList.editObjectAtIndex(i,function(e){return e.copyWithText(e.text.insertTextAtPosition(t,r))}))},c.prototype.removeTextAtRange=function(t){var e,n,r,s,a,u,c,l,h,p,d,f,g,m,y,v,b,A,C,w,x;return p=t=o(t),l=p[0],A=p[1],i(t)?this:(d=this.locationRangeFromRange(t),u=d[0],v=d[1],a=u.index,c=u.offset,s=this.getBlockAtIndex(a),y=v.index,b=v.offset,m=this.getBlockAtIndex(y),f=A-l===1&&s.getBlockBreakPosition()===c&&m.getBlockBreakPosition()!==b&&"\n"===m.text.getStringAtPosition(b),f?r=this.blockList.editObjectAtIndex(y,function(t){return t.copyWithText(t.text.removeTextAtRange([b,b+1]))
}):(h=s.text.getTextAtRange([0,c]),C=m.text.getTextAtRange([b,m.getLength()]),w=h.appendText(C),g=a!==y&&0===c,x=g&&s.getAttributeLevel()>=m.getAttributeLevel(),n=x?m.copyWithText(w):s.copyWithText(w),e=y+1-a,r=this.blockList.splice(a,e,n)),new this.constructor(r))},c.prototype.moveTextFromRangeToPosition=function(t,e){var n,i,r,s,u,c,l,h,p,d;if(c=t=o(t),p=c[0],r=c[1],e>=p&&r>=e)return this;if(i=this.getDocumentAtRange(t),h=this.removeTextAtRange(t),u=e>p,u&&(e-=i.getLength()),!h.firstBlockInRangeIsEntirelySelected(t)){if(l=i.getBlocks(),s=l[0],n=2<=l.length?a.call(l,1):[],0===n.length?(d=s.getTextWithoutBlockBreak(),u&&(e+=1)):d=s.text,h=h.insertTextAtRange(d,e),0===n.length)return h;i=new this.constructor(n),e+=d.getLength()}return h.insertDocumentAtRange(i,e)},c.prototype.addAttributeAtRange=function(t,e,o){var i;return i=this.blockList,this.eachBlockAtRange(o,function(o,r,s){return i=i.editObjectAtIndex(s,function(){return n(t)?o.addAttribute(t,e):r[0]===r[1]?o:o.copyWithText(o.text.addAttributeAtRange(t,e,r))})}),new this.constructor(i)},c.prototype.addAttribute=function(t,e){var n;return n=this.blockList,this.eachBlock(function(o,i){return n=n.editObjectAtIndex(i,function(){return o.addAttribute(t,e)})}),new this.constructor(n)},c.prototype.removeAttributeAtRange=function(t,e){var o;return o=this.blockList,this.eachBlockAtRange(e,function(e,i,r){return n(t)?o=o.editObjectAtIndex(r,function(){return e.removeAttribute(t)}):i[0]!==i[1]?o=o.editObjectAtIndex(r,function(){return e.copyWithText(e.text.removeAttributeAtRange(t,i))}):void 0}),new this.constructor(o)},c.prototype.updateAttributesForAttachment=function(t,e){var n,o,i,r;return i=(o=this.getRangeOfAttachment(e))[0],n=this.locationFromPosition(i).index,r=this.getTextAtIndex(n),new this.constructor(this.blockList.editObjectAtIndex(n,function(n){return n.copyWithText(r.updateAttributesForAttachment(t,e))}))},c.prototype.removeAttributeForAttachment=function(t,e){var n;return n=this.getRangeOfAttachment(e),this.removeAttributeAtRange(t,n)},c.prototype.insertBlockBreakAtRange=function(t){var n,i,r,s;return s=(t=o(t))[0],r=this.locationFromPosition(s).offset,i=this.removeTextAtRange(t),0===r&&(n=[new e.Block]),new this.constructor(i.blockList.insertSplittableListAtPosition(new e.SplittableList(n),s))},c.prototype.applyBlockAttributeAtRange=function(t,e,o){var i,r,s,a;return s=this.expandRangeToLineBreaksAndSplitBlocks(o),r=s.document,o=s.range,i=n(t),i.listAttribute?(r=r.removeLastListAttributeAtRange(o,{exceptAttributeName:t}),a=r.convertLineBreaksToBlockBreaksInRange(o),r=a.document,o=a.range):r=i.terminal?r.removeLastTerminalAttributeAtRange(o):r.consolidateBlocksAtRange(o),r.addAttributeAtRange(t,e,o)},c.prototype.removeLastListAttributeAtRange=function(t,e){var o;return null==e&&(e={}),o=this.blockList,this.eachBlockAtRange(t,function(t,i,r){var s;if((s=t.getLastAttribute())&&n(s).listAttribute&&s!==e.exceptAttributeName)return o=o.editObjectAtIndex(r,function(){return t.removeAttribute(s)})}),new this.constructor(o)},c.prototype.removeLastTerminalAttributeAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,o,i){var r;if((r=t.getLastAttribute())&&n(r).terminal)return e=e.editObjectAtIndex(i,function(){return t.removeAttribute(r)})}),new this.constructor(e)},c.prototype.firstBlockInRangeIsEntirelySelected=function(t){var e,n,i,r,s,a;return r=t=o(t),a=r[0],e=r[1],n=this.locationFromPosition(a),s=this.locationFromPosition(e),0===n.offset&&n.index<s.index?!0:n.index===s.index?(i=this.getBlockAtIndex(n.index).getLength(),0===n.offset&&s.offset===i):!1},c.prototype.expandRangeToLineBreaksAndSplitBlocks=function(t){var e,n,i,r,s,a,u,c,l;return a=t=o(t),l=a[0],r=a[1],c=this.locationFromPosition(l),i=this.locationFromPosition(r),e=this,u=e.getBlockAtIndex(c.index),null!=(c.offset=u.findLineBreakInDirectionFromPosition("backward",c.offset))&&(s=e.positionFromLocation(c),e=e.insertBlockBreakAtRange([s,s+1]),i.index+=1,i.offset-=e.getBlockAtIndex(c.index).getLength(),c.index+=1),c.offset=0,0===i.offset&&i.index>c.index?(i.index-=1,i.offset=e.getBlockAtIndex(i.index).getBlockBreakPosition()):(n=e.getBlockAtIndex(i.index),"\n"===n.text.getStringAtRange([i.offset-1,i.offset])?i.offset-=1:i.offset=n.findLineBreakInDirectionFromPosition("forward",i.offset),i.offset!==n.getBlockBreakPosition()&&(s=e.positionFromLocation(i),e=e.insertBlockBreakAtRange([s,s+1]))),l=e.positionFromLocation(c),r=e.positionFromLocation(i),t=o([l,r]),{document:e,range:t}},c.prototype.convertLineBreaksToBlockBreaksInRange=function(t){var e,n,i;return n=(t=o(t))[0],i=this.getStringAtRange(t).slice(0,-1),e=this,i.replace(/.*?\n/g,function(t){return n+=t.length,e=e.insertBlockBreakAtRange([n-1,n])}),{document:e,range:t}},c.prototype.consolidateBlocksAtRange=function(t){var e,n,i,r,s;return i=t=o(t),s=i[0],n=i[1],r=this.locationFromPosition(s).index,e=this.locationFromPosition(n).index,new this.constructor(this.blockList.consolidateFromIndexToIndex(r,e))},c.prototype.getDocumentAtRange=function(t){var e;return t=o(t),e=this.blockList.getSplittableListInRange(t).toArray(),new this.constructor(e)},c.prototype.getStringAtRange=function(t){return this.getDocumentAtRange(t).toString()},c.prototype.getBlockAtIndex=function(t){return this.blockList.getObjectAtIndex(t)},c.prototype.getBlockAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getBlockAtIndex(e)},c.prototype.getTextAtIndex=function(t){var e;return null!=(e=this.getBlockAtIndex(t))?e.text:void 0},c.prototype.getTextAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getTextAtIndex(e)},c.prototype.getPieceAtPosition=function(t){var e,n,o;return o=this.locationFromPosition(t),e=o.index,n=o.offset,this.getTextAtIndex(e).getPieceAtPosition(n)},c.prototype.getCharacterAtPosition=function(t){var e,n,o;return o=this.locationFromPosition(t),e=o.index,n=o.offset,this.getTextAtIndex(e).getStringAtRange([n,n+1])},c.prototype.getLength=function(){return this.blockList.getEndPosition()},c.prototype.getBlocks=function(){return this.blockList.toArray()},c.prototype.getBlockCount=function(){return this.blockList.length},c.prototype.getEditCount=function(){return this.editCount},c.prototype.eachBlock=function(t){return this.blockList.eachObject(t)},c.prototype.eachBlockAtRange=function(t,e){var n,i,r,s,a,u,c,l,h,p,d,f;if(u=t=o(t),d=u[0],r=u[1],p=this.locationFromPosition(d),i=this.locationFromPosition(r),p.index===i.index)return n=this.getBlockAtIndex(p.index),f=[p.offset,i.offset],e(n,f,p.index);for(h=[],a=s=c=p.index,l=i.index;l>=c?l>=s:s>=l;a=l>=c?++s:--s)(n=this.getBlockAtIndex(a))?(f=function(){switch(a){case p.index:return[p.offset,n.text.getLength()];case i.index:return[0,i.offset];default:return[0,n.text.getLength()]}}(),h.push(e(n,f,a))):h.push(void 0);return h},c.prototype.getCommonAttributesAtRange=function(t){var n,r,s;return r=(t=o(t))[0],i(t)?this.getCommonAttributesAtPosition(r):(s=[],n=[],this.eachBlockAtRange(t,function(t,e){return e[0]!==e[1]?(s.push(t.text.getCommonAttributesAtRange(e)),n.push(l(t))):void 0}),e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject())},c.prototype.getCommonAttributesAtPosition=function(t){var n,o,i,r,s,a,c,h,p,d;if(p=this.locationFromPosition(t),s=p.index,h=p.offset,i=this.getBlockAtIndex(s),!i)return{};r=l(i),n=i.text.getAttributesAtPosition(h),o=i.text.getAttributesAtPosition(h-1),a=function(){var t,n;t=e.config.textAttributes,n=[];for(c in t)d=t[c],d.inheritable&&n.push(c);return n}();for(c in o)d=o[c],(d===n[c]||u.call(a,c)>=0)&&(r[c]=d);return r},c.prototype.getRangeOfCommonAttributeAtPosition=function(t,e){var n,i,r,s,a,u,c,l,h;return a=this.locationFromPosition(e),r=a.index,s=a.offset,h=this.getTextAtIndex(r),u=h.getExpandedRangeForAttributeAtOffset(t,s),l=u[0],i=u[1],c=this.positionFromLocation({index:r,offset:l}),n=this.positionFromLocation({index:r,offset:i}),o([c,n])},c.prototype.getBaseBlockAttributes=function(){var t,e,n,o,i,r,s;for(t=this.getBlockAtIndex(0).getAttributes(),n=o=1,s=this.getBlockCount();s>=1?s>o:o>s;n=s>=1?++o:--o)e=this.getBlockAtIndex(n).getAttributes(),r=Math.min(t.length,e.length),t=function(){var n,o,s;for(s=[],i=n=0,o=r;(o>=0?o>n:n>o)&&e[i]===t[i];i=o>=0?++n:--n)s.push(e[i]);return s}();return t},l=function(t){var e,n;return n={},(e=t.getLastAttribute())&&(n[e]=!0),n},c.prototype.getAttachmentById=function(t){var e,n,o,i;for(i=this.getAttachments(),n=0,o=i.length;o>n;n++)if(e=i[n],e.id===t)return e},c.prototype.getAttachmentPieces=function(){var t;return t=[],this.blockList.eachObject(function(e){var n;return n=e.text,t=t.concat(n.getAttachmentPieces())}),t},c.prototype.getAttachments=function(){var t,e,n,o,i;for(o=this.getAttachmentPieces(),i=[],t=0,e=o.length;e>t;t++)n=o[t],i.push(n.attachment);return i},c.prototype.getRangeOfAttachment=function(t){var e,n,i,r,s,a,u;for(r=0,s=this.blockList.toArray(),n=e=0,i=s.length;i>e;n=++e){if(a=s[n].text,u=a.getRangeOfAttachment(t))return o([r+u[0],r+u[1]]);r+=a.getLength()}},c.prototype.getLocationRangeOfAttachment=function(t){var e;return e=this.getRangeOfAttachment(t),this.locationRangeFromRange(e)},c.prototype.getAttachmentPieceForAttachment=function(t){var e,n,o,i;for(i=this.getAttachmentPieces(),e=0,n=i.length;n>e;e++)if(o=i[e],o.attachment===t)return o},c.prototype.locationFromPosition=function(t){var e,n;return n=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,t)),null!=n.index?n:(e=this.getBlocks(),{index:e.length-1,offset:e[e.length-1].getLength()})},c.prototype.positionFromLocation=function(t){return this.blockList.findPositionAtIndexAndOffset(t.index,t.offset)},c.prototype.locationRangeFromPosition=function(t){return o(this.locationFromPosition(t))},c.prototype.locationRangeFromRange=function(t){var e,n,i,r;if(t=o(t))return r=t[0],n=t[1],i=this.locationFromPosition(r),e=this.locationFromPosition(n),o([i,e])},c.prototype.rangeFromLocationRange=function(t){var e,n;return t=o(t),e=this.positionFromLocation(t[0]),i(t)||(n=this.positionFromLocation(t[1])),o([e,n])},c.prototype.isEqualTo=function(t){return this.blockList.isEqualTo(null!=t?t.blockList:void 0)},c.prototype.getTexts=function(){var t,e,n,o,i;for(o=this.getBlocks(),i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(t.text);return i},c.prototype.getPieces=function(){var t,e,n,o,i;for(n=[],o=this.getTexts(),t=0,e=o.length;e>t;t++)i=o[t],n.push.apply(n,i.getPieces());return n},c.prototype.getObjects=function(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())},c.prototype.toSerializableDocument=function(){var t;return t=[],this.blockList.eachObject(function(e){return t.push(e.copyWithText(e.text.toSerializableText()))}),new this.constructor(t)},c.prototype.toString=function(){return this.blockList.toString()},c.prototype.toJSON=function(){return this.blockList.toJSON()},c.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,o,i;for(o=this.blockList.toArray(),i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(JSON.parse(t.text.toConsole()));return i}.call(this))},c}(e.Object)}.call(this),function(){e.LineBreakInsertion=function(){function t(t){var e;this.composition=t,this.document=this.composition.document,e=this.composition.getSelectedRange(),this.startPosition=e[0],this.endPosition=e[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset)}return t.prototype.shouldInsertBlockBreak=function(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?0!==this.startLocation.offset:this.breaksOnReturn&&"\n"!==this.nextCharacter},t.prototype.shouldBreakFormattedBlock=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&"\n"===this.nextCharacter||"\n"===this.previousCharacter)},t.prototype.shouldDecreaseListLevel=function(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()},t.prototype.shouldPrependListItem=function(){return this.block.isListItem()&&0===this.startLocation.offset&&!this.block.isEmpty()},t.prototype.shouldRemoveLastBlockAttribute=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()},t}()}.call(this),function(){var t,n,o,i,r,s,a,u,c,l,h=function(t,e){function n(){this.constructor=t}for(var o in e)p.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;s=e.normalizeRange,c=e.rangesAreEqual,u=e.rangeIsCollapsed,a=e.objectsAreEqual,t=e.arrayStartsWith,l=e.summarizeArrayChange,o=e.getAllAttributeNames,i=e.getBlockConfig,r=e.getTextConfig,n=e.extend,e.Composition=function(p){function d(){this.document=new e.Document,this.attachments=[],this.currentAttributes={},this.revision=0}var f;return h(d,p),d.prototype.setDocument=function(t){var e;return t.isEqualTo(this.document)?void 0:(this.document=t,this.refreshAttachments(),this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeDocument?e.compositionDidChangeDocument(t):void 0)},d.prototype.getSnapshot=function(){return{document:this.document,selectedRange:this.getSelectedRange()}},d.prototype.loadSnapshot=function(t){var n,o,i,r;return n=t.document,r=t.selectedRange,null!=(o=this.delegate)&&"function"==typeof o.compositionWillLoadSnapshot&&o.compositionWillLoadSnapshot(),this.setDocument(null!=n?n:new e.Document),this.setSelection(null!=r?r:[0,0]),null!=(i=this.delegate)&&"function"==typeof i.compositionDidLoadSnapshot?i.compositionDidLoadSnapshot():void 0},d.prototype.insertText=function(t,e){var n,o,i,r;return r=(null!=e?e:{updatePosition:!0}).updatePosition,o=this.getSelectedRange(),this.setDocument(this.document.insertTextAtRange(t,o)),i=o[0],n=i+t.getLength(),r&&this.setSelection(n),this.notifyDelegateOfInsertionAtRange([i,n])},d.prototype.insertBlock=function(t){var n;return null==t&&(t=new e.Block),n=new e.Document([t]),this.insertDocument(n)},d.prototype.insertDocument=function(t){var n,o,i;return null==t&&(t=new e.Document),o=this.getSelectedRange(),this.setDocument(this.document.insertDocumentAtRange(t,o)),i=o[0],n=i+t.getLength(),this.setSelection(n),this.notifyDelegateOfInsertionAtRange([i,n])},d.prototype.insertString=function(t,n){var o,i;return o=this.getCurrentTextAttributes(),i=e.Text.textForStringWithAttributes(t,o),this.insertText(i,n)},d.prototype.insertBlockBreak=function(){var t,e,n;return e=this.getSelectedRange(),this.setDocument(this.document.insertBlockBreakAtRange(e)),n=e[0],t=n+1,this.setSelection(t),this.notifyDelegateOfInsertionAtRange([n,t])},d.prototype.insertLineBreak=function(){var t,n;return n=new e.LineBreakInsertion(this),n.shouldDecreaseListLevel()?(this.decreaseListLevel(),this.setSelection(n.startPosition)):n.shouldPrependListItem()?(t=new e.Document([n.block.copyWithoutText()]),this.insertDocument(t)):n.shouldInsertBlockBreak()?this.insertBlockBreak():n.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():n.shouldBreakFormattedBlock()?this.breakFormattedBlock(n):this.insertString("\n")},d.prototype.insertHTML=function(t){var n,o,i,r,s;return s=this.getPosition(),r=this.document.getLength(),n=e.Document.fromHTML(t),this.setDocument(this.document.mergeDocumentAtRange(n,this.getSelectedRange())),o=this.document.getLength(),i=s+(o-r),this.setSelection(i),this.notifyDelegateOfInsertionAtRange([i,i])},d.prototype.replaceHTML=function(t){var n,o,i;return n=e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document),o=this.getLocationRange({strict:!1}),i=this.document.rangeFromLocationRange(o),this.setDocument(n),this.setSelection(i)},d.prototype.insertFile=function(t){var n,o;return(null!=(o=this.delegate)?o.compositionShouldAcceptFile(t):void 0)?(n=e.Attachment.attachmentForFile(t),this.insertAttachment(n)):void 0},d.prototype.insertFiles=function(t){var n,o,i,r,s,a,u;for(u=new e.Text,r=0,s=t.length;s>r;r++)i=t[r],(null!=(a=this.delegate)?a.compositionShouldAcceptFile(i):void 0)&&(n=e.Attachment.attachmentForFile(i),o=e.Text.textForAttachmentWithAttributes(n,this.currentAttributes),u=u.appendText(o));return this.insertText(u)},d.prototype.insertAttachment=function(t){var n;return n=e.Text.textForAttachmentWithAttributes(t,this.currentAttributes),this.insertText(n)},d.prototype.deleteInDirection=function(t){var e,n,o,i,r,s,a;return i=this.getLocationRange(),r=this.getSelectedRange(),s=u(r),s?o="backward"===t&&0===i[0].offset:a=i[0].index!==i[1].index,o&&this.canDecreaseBlockAttributeLevel()&&(n=this.getBlock(),n.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(r[0]),n.isEmpty())?!1:(s&&(r=this.getExpandedRangeInDirection(t),"backward"===t&&(e=this.getAttachmentAtRange(r))),e?(this.editAttachment(e),!1):(this.setDocument(this.document.removeTextAtRange(r)),this.setSelection(r[0]),o||a?!1:void 0))},d.prototype.moveTextFromRange=function(t){var e;return e=this.getSelectedRange()[0],this.setDocument(this.document.moveTextFromRangeToPosition(t,e)),this.setSelection(e)},d.prototype.removeAttachment=function(t){var e;return(e=this.document.getRangeOfAttachment(t))?(this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(e)),this.setSelection(e[0])):void 0},d.prototype.removeLastBlockAttribute=function(){var t,e,n,o;return n=this.getSelectedRange(),o=n[0],e=n[1],t=this.document.getBlockAtPosition(e),this.removeCurrentAttribute(t.getLastAttribute()),this.setSelection(o)},f=" ",d.prototype.insertPlaceholder=function(){return this.placeholderPosition=this.getPosition(),this.insertString(f)},d.prototype.selectPlaceholder=function(){return null!=this.placeholderPosition?(this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+f.length]),this.getSelectedRange()):void 0},d.prototype.forgetPlaceholder=function(){return this.placeholderPosition=null},d.prototype.hasCurrentAttribute=function(t){var e;return e=this.currentAttributes[t],null!=e&&e!==!1},d.prototype.toggleCurrentAttribute=function(t){var e;return(e=!this.currentAttributes[t])?this.setCurrentAttribute(t,e):this.removeCurrentAttribute(t)},d.prototype.canSetCurrentAttribute=function(t){return i(t)?this.canSetCurrentBlockAttribute(t):this.canSetCurrentTextAttribute(t)},d.prototype.canSetCurrentTextAttribute=function(t){switch(t){case"href":return!this.selectionContainsAttachmentWithAttribute(t);default:return!0}},d.prototype.canSetCurrentBlockAttribute=function(){var t;if(t=this.getBlock())return!t.isTerminalBlock()},d.prototype.setCurrentAttribute=function(t,e){return i(t)?this.setBlockAttribute(t,e):(this.setTextAttribute(t,e),this.currentAttributes[t]=e,this.notifyDelegateOfCurrentAttributesChange())},d.prototype.setTextAttribute=function(t,n){var o,i,r,s;if(i=this.getSelectedRange())return r=i[0],o=i[1],r!==o?this.setDocument(this.document.addAttributeAtRange(t,n,i)):"href"===t?(s=e.Text.textForStringWithAttributes(n,{href:n}),this.insertText(s)):void 0},d.prototype.setBlockAttribute=function(t,e){var n,o;if(o=this.getSelectedRange())return this.canSetCurrentAttribute(t)?(n=this.getBlock(),this.setDocument(this.document.applyBlockAttributeAtRange(t,e,o)),this.setSelection(o)):void 0},d.prototype.removeCurrentAttribute=function(t){return i(t)?(this.removeBlockAttribute(t),this.updateCurrentAttributes()):(this.removeTextAttribute(t),delete this.currentAttributes[t],this.notifyDelegateOfCurrentAttributesChange())},d.prototype.removeTextAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.removeBlockAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.canDecreaseNestingLevel=function(){var t;return(null!=(t=this.getBlock())?t.getNestingLevel():void 0)>0},d.prototype.canIncreaseNestingLevel=function(){var e,n,o;if(e=this.getBlock())return(null!=(o=i(e.getLastNestableAttribute()))?o.listAttribute:0)?(n=this.getPreviousBlock())?t(n.getListItemAttributes(),e.getListItemAttributes()):void 0:e.getNestingLevel()>0},d.prototype.decreaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.decreaseNestingLevel()))},d.prototype.increaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.increaseNestingLevel()))},d.prototype.canDecreaseBlockAttributeLevel=function(){var t;return(null!=(t=this.getBlock())?t.getAttributeLevel():void 0)>0},d.prototype.decreaseBlockAttributeLevel=function(){var t,e;return(t=null!=(e=this.getBlock())?e.getLastAttribute():void 0)?this.removeCurrentAttribute(t):void 0},d.prototype.decreaseListLevel=function(){var t,e,n,o,i,r;for(r=this.getSelectedRange()[0],i=this.document.locationFromPosition(r).index,n=i,t=this.getBlock().getAttributeLevel();(e=this.document.getBlockAtIndex(n+1))&&e.isListItem()&&e.getAttributeLevel()>t;)n++;return r=this.document.positionFromLocation({index:i,offset:0}),o=this.document.positionFromLocation({index:n,offset:0}),this.setDocument(this.document.removeLastListAttributeAtRange([r,o]))},d.prototype.updateCurrentAttributes=function(){var t,e,n,i,r,s;if(s=this.getSelectedRange({ignoreLock:!0})){for(e=this.document.getCommonAttributesAtRange(s),r=o(),n=0,i=r.length;i>n;n++)t=r[n],e[t]||this.canSetCurrentAttribute(t)||(e[t]=!1);if(!a(e,this.currentAttributes))return this.currentAttributes=e,this.notifyDelegateOfCurrentAttributesChange()}},d.prototype.getCurrentAttributes=function(){return n.call({},this.currentAttributes)},d.prototype.getCurrentTextAttributes=function(){var t,e,n,o;t={},n=this.currentAttributes;for(e in n)o=n[e],r(e)&&(t[e]=o);return t},d.prototype.freezeSelection=function(){return this.setCurrentAttribute("frozen",!0)},d.prototype.thawSelection=function(){return this.removeCurrentAttribute("frozen")},d.prototype.hasFrozenSelection=function(){return this.hasCurrentAttribute("frozen")},d.proxyMethod("getSelectionManager().getPointRange"),d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),d.proxyMethod("getSelectionManager().locationIsCursorTarget"),d.proxyMethod("getSelectionManager().selectionIsExpanded"),d.proxyMethod("delegate?.getSelectionManager"),d.prototype.setSelection=function(t){var e,n;return e=this.document.locationRangeFromRange(t),null!=(n=this.delegate)?n.compositionDidRequestChangingSelectionToLocationRange(e):void 0},d.prototype.getSelectedRange=function(){var t;return(t=this.getLocationRange())?this.document.rangeFromLocationRange(t):void 0},d.prototype.setSelectedRange=function(t){var e;return e=this.document.locationRangeFromRange(t),this.getSelectionManager().setLocationRange(e)},d.prototype.getPosition=function(){var t;return(t=this.getLocationRange())?this.document.positionFromLocation(t[0]):void 0},d.prototype.getLocationRange=function(t){var e;return null!=(e=this.getSelectionManager().getLocationRange(t))?e:s({index:0,offset:0})},d.prototype.getExpandedRangeInDirection=function(t){var e,n,o;return n=this.getSelectedRange(),o=n[0],e=n[1],"backward"===t?o=this.translateUTF16PositionFromOffset(o,-1):e=this.translateUTF16PositionFromOffset(e,1),s([o,e])},d.prototype.moveCursorInDirection=function(t){var e,n,o,i;return this.editingAttachment?o=this.document.getRangeOfAttachment(this.editingAttachment):(i=this.getSelectedRange(),o=this.getExpandedRangeInDirection(t),n=!c(i,o)),this.setSelectedRange("backward"===t?o[0]:o[1]),n&&(e=this.getAttachmentAtRange(o))?this.editAttachment(e):void 0},d.prototype.expandSelectionInDirection=function(t){var e;return e=this.getExpandedRangeInDirection(t),this.setSelectedRange(e)},d.prototype.expandSelectionForEditing=function(){return this.hasCurrentAttribute("href")?this.expandSelectionAroundCommonAttribute("href"):void 0},d.prototype.expandSelectionAroundCommonAttribute=function(t){var e,n;return e=this.getPosition(),n=this.document.getRangeOfCommonAttributeAtPosition(t,e),this.setSelectedRange(n)},d.prototype.selectionContainsAttachmentWithAttribute=function(t){var e,n,o,i,r;if(r=this.getSelectedRange()){for(i=this.document.getDocumentAtRange(r).getAttachments(),n=0,o=i.length;o>n;n++)if(e=i[n],e.hasAttribute(t))return!0;return!1}},d.prototype.selectionIsInCursorTarget=function(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())},d.prototype.positionIsCursorTarget=function(t){var e;return(e=this.document.locationFromPosition(t))?this.locationIsCursorTarget(e):void 0},d.prototype.positionIsBlockBreak=function(t){var e;return null!=(e=this.document.getPieceAtPosition(t))?e.isBlockBreak():void 0},d.prototype.getSelectedDocument=function(){var t;return(t=this.getSelectedRange())?this.document.getDocumentAtRange(t):void 0},d.prototype.getAttachments=function(){return this.attachments.slice(0)},d.prototype.refreshAttachments=function(){var t,e,n,o,i,r,s,a,u,c,h,p;for(n=this.document.getAttachments(),a=l(this.attachments,n),t=a.added,h=a.removed,this.attachments=n,o=0,r=h.length;r>o;o++)e=h[o],e.delegate=null,null!=(u=this.delegate)&&"function"==typeof u.compositionDidRemoveAttachment&&u.compositionDidRemoveAttachment(e);for(p=[],i=0,s=t.length;s>i;i++)e=t[i],e.delegate=this,p.push(null!=(c=this.delegate)&&"function"==typeof c.compositionDidAddAttachment?c.compositionDidAddAttachment(e):void 0);return p},d.prototype.attachmentDidChangeAttributes=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidEditAttachment?e.compositionDidEditAttachment(t):void 0},d.prototype.attachmentDidChangePreviewURL=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeAttachmentPreviewURL?e.compositionDidChangeAttachmentPreviewURL(t):void 0},d.prototype.editAttachment=function(t){var e;if(t!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=t,null!=(e=this.delegate)&&"function"==typeof e.compositionDidStartEditingAttachment?e.compositionDidStartEditingAttachment(this.editingAttachment):void 0},d.prototype.stopEditingAttachment=function(){var t;if(this.editingAttachment)return null!=(t=this.delegate)&&"function"==typeof t.compositionDidStopEditingAttachment&&t.compositionDidStopEditingAttachment(this.editingAttachment),this.editingAttachment=null},d.prototype.canEditAttachmentCaption=function(){var t;return null!=(t=this.editingAttachment)?t.isPreviewable():void 0},d.prototype.updateAttributesForAttachment=function(t,e){return this.setDocument(this.document.updateAttributesForAttachment(t,e))},d.prototype.removeAttributeForAttachment=function(t,e){return this.setDocument(this.document.removeAttributeForAttachment(t,e))},d.prototype.breakFormattedBlock=function(t){var n,o,i,r,s;return o=t.document,n=t.block,r=t.startPosition,s=[r-1,r],n.getBlockBreakPosition()===t.startLocation.offset?(n.breaksOnReturn()&&"\n"===t.nextCharacter?r+=1:o=o.removeTextAtRange(s),s=[r,r]):"\n"===t.nextCharacter?"\n"===t.previousCharacter?s=[r-1,r+1]:(s=[r,r+1],r+=1):t.startLocation.offset-1!==0&&(r+=1),i=new e.Document([n.removeLastAttribute().copyWithoutText()]),this.setDocument(o.insertDocumentAtRange(i,s)),this.setSelection(r)},d.prototype.getPreviousBlock=function(){var t,e;return(e=this.getLocationRange())&&(t=e[0].index,t>0)?this.document.getBlockAtIndex(t-1):void 0},d.prototype.getBlock=function(){var t;return(t=this.getLocationRange())?this.document.getBlockAtIndex(t[0].index):void 0},d.prototype.getAttachmentAtRange=function(t){var n;return n=this.document.getDocumentAtRange(t),n.toString()===e.OBJECT_REPLACEMENT_CHARACTER+"\n"?n.getAttachments()[0]:void 0},d.prototype.notifyDelegateOfCurrentAttributesChange=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.compositionDidChangeCurrentAttributes?t.compositionDidChangeCurrentAttributes(this.currentAttributes):void 0},d.prototype.notifyDelegateOfInsertionAtRange=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionDidPerformInsertionAtRange?e.compositionDidPerformInsertionAtRange(t):void 0},d.prototype.translateUTF16PositionFromOffset=function(t,e){var n,o;return o=this.document.toUTF16String(),n=o.offsetFromUCS2Offset(t),o.offsetToUCS2Offset(n+e)},d}(e.BasicObject)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.UndoManager=function(e){function n(t){this.composition=t,this.undoEntries=[],this.redoEntries=[]}var o;return t(n,e),n.prototype.recordUndoEntry=function(t,e){var n,i,r,s,a;return s=null!=e?e:{},i=s.context,n=s.consolidatable,r=this.undoEntries.slice(-1)[0],n&&o(r,t,i)?void 0:(a=this.createEntry({description:t,context:i}),this.undoEntries.push(a),this.redoEntries=[])},n.prototype.undo=function(){var t,e;return(e=this.undoEntries.pop())?(t=this.createEntry(e),this.redoEntries.push(t),this.composition.loadSnapshot(e.snapshot)):void 0},n.prototype.redo=function(){var t,e;return(t=this.redoEntries.pop())?(e=this.createEntry(t),this.undoEntries.push(e),this.composition.loadSnapshot(t.snapshot)):void 0},n.prototype.canUndo=function(){return this.undoEntries.length>0},n.prototype.canRedo=function(){return this.redoEntries.length>0},n.prototype.createEntry=function(t){var e,n,o;return o=null!=t?t:{},n=o.description,e=o.context,{description:null!=n?n.toString():void 0,context:JSON.stringify(e),snapshot:this.composition.getSnapshot()}},o=function(t,e,n){return(null!=t?t.description:void 0)===(null!=e?e.toString():void 0)&&(null!=t?t.context:void 0)===JSON.stringify(n)},n}(e.BasicObject)}.call(this),function(){e.Editor=function(){function t(t,n,o){this.composition=t,this.selectionManager=n,this.element=o,this.undoManager=new e.UndoManager(this.composition)}return t.prototype.loadDocument=function(t){return this.loadSnapshot({document:t,selectedRange:[0,0]})},t.prototype.loadHTML=function(t){return null==t&&(t=""),this.loadDocument(e.Document.fromHTML(t,{referenceElement:this.element}))},t.prototype.loadJSON=function(t){var n,o;return n=t.document,o=t.selectedRange,n=e.Document.fromJSON(n),this.loadSnapshot({document:n,selectedRange:o})},t.prototype.loadSnapshot=function(t){return this.undoManager=new e.UndoManager(this.composition),this.composition.loadSnapshot(t)},t.prototype.getDocument=function(){return this.composition.document},t.prototype.getSelectedDocument=function(){return this.composition.getSelectedDocument()},t.prototype.getSnapshot=function(){return this.composition.getSnapshot()},t.prototype.toJSON=function(){return this.getSnapshot()},t.prototype.deleteInDirection=function(t){return this.composition.deleteInDirection(t)},t.prototype.insertAttachment=function(t){return this.composition.insertAttachment(t)},t.prototype.insertDocument=function(t){return this.composition.insertDocument(t)},t.prototype.insertFile=function(t){return this.composition.insertFile(t)},t.prototype.insertHTML=function(t){return this.composition.insertHTML(t)},t.prototype.insertString=function(t){return this.composition.insertString(t)},t.prototype.insertText=function(t){return this.composition.insertText(t)},t.prototype.insertLineBreak=function(){return this.composition.insertLineBreak()},t.prototype.getSelectedRange=function(){return this.composition.getSelectedRange()},t.prototype.getPosition=function(){return this.composition.getPosition()},t.prototype.getClientRectAtPosition=function(t){var e;return e=this.getDocument().locationRangeFromRange([t,t+1]),this.selectionManager.getClientRectAtLocationRange(e)},t.prototype.expandSelectionInDirection=function(t){return this.composition.expandSelectionInDirection(t)},t.prototype.moveCursorInDirection=function(t){return this.composition.moveCursorInDirection(t)},t.prototype.setSelectedRange=function(t){return this.composition.setSelectedRange(t)},t.prototype.activateAttribute=function(t,e){return null==e&&(e=!0),this.composition.setCurrentAttribute(t,e)},t.prototype.attributeIsActive=function(t){return this.composition.hasCurrentAttribute(t)},t.prototype.canActivateAttribute=function(t){return this.composition.canSetCurrentAttribute(t)},t.prototype.deactivateAttribute=function(t){return this.composition.removeCurrentAttribute(t)},t.prototype.canDecreaseNestingLevel=function(){return this.composition.canDecreaseNestingLevel()},t.prototype.canIncreaseNestingLevel=function(){return this.composition.canIncreaseNestingLevel()
},t.prototype.decreaseNestingLevel=function(){return this.canDecreaseNestingLevel()?this.composition.decreaseNestingLevel():void 0},t.prototype.increaseNestingLevel=function(){return this.canIncreaseNestingLevel()?this.composition.increaseNestingLevel():void 0},t.prototype.canDecreaseIndentationLevel=function(){return this.canDecreaseNestingLevel()},t.prototype.canIncreaseIndentationLevel=function(){return this.canIncreaseNestingLevel()},t.prototype.decreaseIndentationLevel=function(){return this.decreaseNestingLevel()},t.prototype.increaseIndentationLevel=function(){return this.increaseNestingLevel()},t.prototype.canRedo=function(){return this.undoManager.canRedo()},t.prototype.canUndo=function(){return this.undoManager.canUndo()},t.prototype.recordUndoEntry=function(t,e){var n,o,i;return i=null!=e?e:{},o=i.context,n=i.consolidatable,this.undoManager.recordUndoEntry(t,{context:o,consolidatable:n})},t.prototype.redo=function(){return this.canRedo()?this.undoManager.redo():void 0},t.prototype.undo=function(){return this.canUndo()?this.undoManager.undo():void 0},t}()}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ManagedAttachment=function(e){function n(t,e){var n;this.attachmentManager=t,this.attachment=e,n=this.attachment,this.id=n.id,this.file=n.file}return t(n,e),n.prototype.remove=function(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)},n.proxyMethod("attachment.getAttribute"),n.proxyMethod("attachment.hasAttribute"),n.proxyMethod("attachment.setAttribute"),n.proxyMethod("attachment.getAttributes"),n.proxyMethod("attachment.setAttributes"),n.proxyMethod("attachment.isPending"),n.proxyMethod("attachment.isPreviewable"),n.proxyMethod("attachment.getURL"),n.proxyMethod("attachment.getHref"),n.proxyMethod("attachment.getFilename"),n.proxyMethod("attachment.getFilesize"),n.proxyMethod("attachment.getFormattedFilesize"),n.proxyMethod("attachment.getExtension"),n.proxyMethod("attachment.getContentType"),n.proxyMethod("attachment.getFile"),n.proxyMethod("attachment.setFile"),n.proxyMethod("attachment.releaseFile"),n.proxyMethod("attachment.getUploadProgress"),n.proxyMethod("attachment.setUploadProgress"),n}(e.BasicObject)}.call(this),function(){var t=function(t,e){function o(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.AttachmentManager=function(n){function o(t){var e,n,o;for(null==t&&(t=[]),this.managedAttachments={},n=0,o=t.length;o>n;n++)e=t[n],this.manageAttachment(e)}return t(o,n),o.prototype.getAttachments=function(){var t,e,n,o;n=this.managedAttachments,o=[];for(e in n)t=n[e],o.push(t);return o},o.prototype.manageAttachment=function(t){var n,o;return null!=(n=this.managedAttachments)[o=t.id]?n[o]:n[o]=new e.ManagedAttachment(this,t)},o.prototype.attachmentIsManaged=function(t){return t.id in this.managedAttachments},o.prototype.requestRemovalOfAttachment=function(t){var e;return this.attachmentIsManaged(t)&&null!=(e=this.delegate)&&"function"==typeof e.attachmentManagerDidRequestRemovalOfAttachment?e.attachmentManagerDidRequestRemovalOfAttachment(t):void 0},o.prototype.unmanageAttachment=function(t){var e;return e=this.managedAttachments[t.id],delete this.managedAttachments[t.id],e},o}(e.BasicObject)}.call(this),function(){var t,n,o,i,r,s,a,u,c,l,h;t=e.elementContainsNode,n=e.findChildIndexOfNode,r=e.nodeIsBlockStart,s=e.nodeIsBlockStartComment,i=e.nodeIsBlockContainer,a=e.nodeIsCursorTarget,u=e.nodeIsEmptyTextNode,c=e.nodeIsTextNode,o=e.nodeIsAttachmentElement,l=e.tagName,h=e.walkTree,e.LocationMapper=function(){function e(t){this.element=t}var p,d,f,g;return e.prototype.findLocationFromContainerAndOffset=function(e,o,i){var s,u,l,p,g,m,y;for(m=(null!=i?i:{strict:!0}).strict,u=0,l=!1,p={index:0,offset:0},(s=this.findAttachmentElementParentForNode(e))&&(e=s.parentNode,o=n(s)),y=h(this.element,{usingFilter:f});y.nextNode();){if(g=y.currentNode,g===e&&c(e)){a(g)||(p.offset+=o);break}if(g.parentNode===e){if(u++===o)break}else if(!t(e,g)&&u>0)break;r(g,{strict:m})?(l&&p.index++,p.offset=0,l=!0):p.offset+=d(g)}return p},e.prototype.findContainerAndOffsetFromLocation=function(t){var e,o,s,a,u,l;if(0===t.index&&0===t.offset){for(e=this.element,a=0;e.firstChild;)if(e=e.firstChild,i(e)){a=1;break}return[e,a]}if(u=this.findNodeAndOffsetFromLocation(t),o=u[0],s=u[1],o){if(c(o))e=o,l=o.textContent,a=t.offset-s;else{if(e=o.parentNode,!r(o.previousSibling)&&!i(e))for(;o===e.lastChild&&(o=e,e=e.parentNode,!i(e)););a=n(o),0!==t.offset&&a++}return[e,a]}},e.prototype.findNodeAndOffsetFromLocation=function(t){var e,n,o,i,r,s,u,l;for(u=0,l=this.getSignificantNodesForIndex(t.index),n=0,o=l.length;o>n;n++){if(e=l[n],i=d(e),t.offset<=u+i)if(c(e)){if(r=e,s=u,t.offset===s&&a(r))break}else r||(r=e,s=u);if(u+=i,u>t.offset)break}return[r,s]},e.prototype.findAttachmentElementParentForNode=function(t){for(;t&&t!==this.element;){if(o(t))return t;t=t.parentNode}},e.prototype.getSignificantNodesForIndex=function(t){var e,n,o,i,r;for(o=[],r=h(this.element,{usingFilter:p}),i=!1;r.nextNode();)if(n=r.currentNode,s(n)){if("undefined"!=typeof e&&null!==e?e++:e=0,e===t)i=!0;else if(i)break}else i&&o.push(n);return o},d=function(t){var e;return t.nodeType===Node.TEXT_NODE?a(t)?0:(e=t.textContent,e.length):"br"===l(t)||o(t)?1:0},p=function(t){return g(t)===NodeFilter.FILTER_ACCEPT?f(t):NodeFilter.FILTER_REJECT},g=function(t){return u(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},f=function(t){return o(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},e}()}.call(this),function(){var t,n,o=[].slice;t=e.getDOMRange,n=e.setDOMRange,e.PointMapper=function(){function e(){}return e.prototype.createDOMRangeFromPoint=function(e){var o,i,r,s,a,u,c,l;if(c=e.x,l=e.y,document.caretPositionFromPoint)return a=document.caretPositionFromPoint(c,l),r=a.offsetNode,i=a.offset,o=document.createRange(),o.setStart(r,i),o;if(document.caretRangeFromPoint)return document.caretRangeFromPoint(c,l);if(document.body.createTextRange){s=t();try{u=document.body.createTextRange(),u.moveToPoint(c,l),u.select()}catch(h){}return o=t(),n(s),o}},e.prototype.getClientRectsForDOMRange=function(t){var e,n,i;return n=o.call(t.getClientRects()),i=n[0],e=n[n.length-1],[i,e]},e}()}.call(this),function(){var t,n=function(t,e){return function(){return t.apply(e,arguments)}},o=function(t,e){function n(){this.constructor=t}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty,r=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};t=e.getDOMRange,e.SelectionChangeObserver=function(e){function i(){this.run=n(this.run,this),this.update=n(this.update,this),this.selectionManagers=[]}var s;return o(i,e),i.prototype.start=function(){return this.started?void 0:(this.started=!0,"onselectionchange"in document?document.addEventListener("selectionchange",this.update,!0):this.run())},i.prototype.stop=function(){return this.started?(this.started=!1,document.removeEventListener("selectionchange",this.update,!0)):void 0},i.prototype.registerSelectionManager=function(t){return r.call(this.selectionManagers,t)<0?(this.selectionManagers.push(t),this.start()):void 0},i.prototype.unregisterSelectionManager=function(t){var e;return this.selectionManagers=function(){var n,o,i,r;for(i=this.selectionManagers,r=[],n=0,o=i.length;o>n;n++)e=i[n],e!==t&&r.push(e);return r}.call(this),0===this.selectionManagers.length?this.stop():void 0},i.prototype.notifySelectionManagersOfSelectionChange=function(){var t,e,n,o,i;for(n=this.selectionManagers,o=[],t=0,e=n.length;e>t;t++)i=n[t],o.push(i.selectionDidChange());return o},i.prototype.update=function(){var e;return e=t(),s(e,this.domRange)?void 0:(this.domRange=e,this.notifySelectionManagersOfSelectionChange())},i.prototype.reset=function(){return this.domRange=null,this.update()},i.prototype.run=function(){return this.started?(this.update(),requestAnimationFrame(this.run)):void 0},s=function(t,e){return(null!=t?t.startContainer:void 0)===(null!=e?e.startContainer:void 0)&&(null!=t?t.startOffset:void 0)===(null!=e?e.startOffset:void 0)&&(null!=t?t.endContainer:void 0)===(null!=e?e.endContainer:void 0)&&(null!=t?t.endOffset:void 0)===(null!=e?e.endOffset:void 0)},i}(e.BasicObject),null==e.selectionChangeObserver&&(e.selectionChangeObserver=new e.SelectionChangeObserver)}.call(this),function(){var t,n,o,i,r,s,a,u,c,l,h=function(t,e){return function(){return t.apply(e,arguments)}},p=function(t,e){function n(){this.constructor=t}for(var o in e)d.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty;o=e.getDOMSelection,n=e.getDOMRange,l=e.setDOMRange,t=e.elementContainsNode,s=e.nodeIsCursorTarget,r=e.innerElementIsActive,i=e.handleEvent,a=e.normalizeRange,u=e.rangeIsCollapsed,c=e.rangesAreEqual,e.SelectionManager=function(d){function f(t){this.element=t,this.selectionDidChange=h(this.selectionDidChange,this),this.didMouseDown=h(this.didMouseDown,this),this.locationMapper=new e.LocationMapper(this.element),this.pointMapper=new e.PointMapper,this.lockCount=0,i("mousedown",{onElement:this.element,withCallback:this.didMouseDown})}return p(f,d),f.prototype.getLocationRange=function(t){var e,o;return null==t&&(t={}),e=t.strict===!1?this.createLocationRangeFromDOMRange(n(),{strict:!1}):t.ignoreLock?this.currentLocationRange:null!=(o=this.lockedLocationRange)?o:this.currentLocationRange},f.prototype.setLocationRange=function(t){var e;if(!this.lockedLocationRange)return t=a(t),(e=this.createDOMRangeFromLocationRange(t))?(l(e),this.updateCurrentLocationRange(t)):void 0},f.prototype.setLocationRangeFromPointRange=function(t){var e,n;return t=a(t),n=this.getLocationAtPoint(t[0]),e=this.getLocationAtPoint(t[1]),this.setLocationRange([n,e])},f.prototype.getClientRectAtLocationRange=function(t){var e;return(e=this.createDOMRangeFromLocationRange(t))?this.getClientRectsForDOMRange(e)[1]:void 0},f.prototype.locationIsCursorTarget=function(t){var e,n,o;return o=this.findNodeAndOffsetFromLocation(t),e=o[0],n=o[1],s(e)},f.prototype.lock=function(){return 0===this.lockCount++?(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange()):void 0},f.prototype.unlock=function(){var t;return 0===--this.lockCount&&(t=this.lockedLocationRange,this.lockedLocationRange=null,null!=t)?this.setLocationRange(t):void 0},f.prototype.clearSelection=function(){var t;return null!=(t=o())?t.removeAllRanges():void 0},f.prototype.selectionIsCollapsed=function(){var t;return(null!=(t=n())?t.collapsed:void 0)===!0},f.prototype.selectionIsExpanded=function(){return!this.selectionIsCollapsed()},f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),f.proxyMethod("pointMapper.createDOMRangeFromPoint"),f.proxyMethod("pointMapper.getClientRectsForDOMRange"),f.prototype.didMouseDown=function(){return this.pauseTemporarily()},f.prototype.pauseTemporarily=function(){var e,n,o,r;return this.paused=!0,n=function(e){return function(){var n,i,s;for(e.paused=!1,clearTimeout(r),i=0,s=o.length;s>i;i++)n=o[i],n.destroy();return t(document,e.element)?e.selectionDidChange():void 0}}(this),r=setTimeout(n,200),o=function(){var t,o,r,s;for(r=["mousemove","keydown"],s=[],t=0,o=r.length;o>t;t++)e=r[t],s.push(i(e,{onElement:document,withCallback:n}));return s}()},f.prototype.selectionDidChange=function(){return this.paused||r(this.element)?void 0:this.updateCurrentLocationRange()},f.prototype.updateCurrentLocationRange=function(t){var e;return(null!=t?t:t=this.createLocationRangeFromDOMRange(n()))&&!c(t,this.currentLocationRange)?(this.currentLocationRange=t,null!=(e=this.delegate)&&"function"==typeof e.locationRangeDidChange?e.locationRangeDidChange(this.currentLocationRange.slice(0)):void 0):void 0},f.prototype.createDOMRangeFromLocationRange=function(t){var e,n,o,i;return o=this.findContainerAndOffsetFromLocation(t[0]),n=u(t)?o:null!=(i=this.findContainerAndOffsetFromLocation(t[1]))?i:o,null!=o&&null!=n?(e=document.createRange(),e.setStart.apply(e,o),e.setEnd.apply(e,n),e):void 0},f.prototype.createLocationRangeFromDOMRange=function(t,e){var n,o;if(null!=t&&this.domRangeWithinElement(t)&&(o=this.findLocationFromContainerAndOffset(t.startContainer,t.startOffset,e)))return t.collapsed||(n=this.findLocationFromContainerAndOffset(t.endContainer,t.endOffset,e)),a([o,n])},f.prototype.getLocationAtPoint=function(t){var e,n;return(e=this.createDOMRangeFromPoint(t))&&null!=(n=this.createLocationRangeFromDOMRange(e))?n[0]:void 0},f.prototype.domRangeWithinElement=function(e){return e.collapsed?t(this.element,e.startContainer):t(this.element,e.startContainer)&&t(this.element,e.endContainer)},f}(e.BasicObject)}.call(this),function(){var t,n,o,i=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty,s=[].slice;n=e.rangeIsCollapsed,o=e.rangesAreEqual,t=e.objectsAreEqual,e.EditorController=function(r){function a(t){var n,o;this.editorElement=t.editorElement,n=t.document,o=t.html,this.selectionManager=new e.SelectionManager(this.editorElement),this.selectionManager.delegate=this,this.composition=new e.Composition,this.composition.delegate=this,this.attachmentManager=new e.AttachmentManager(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=new e.InputController(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new e.CompositionController(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new e.ToolbarController(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new e.Editor(this.composition,this.selectionManager,this.editorElement),null!=n?this.editor.loadDocument(n):this.editor.loadHTML(o)}return i(a,r),a.prototype.registerSelectionManager=function(){return e.selectionChangeObserver.registerSelectionManager(this.selectionManager)},a.prototype.unregisterSelectionManager=function(){return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager)},a.prototype.compositionDidChangeDocument=function(){return this.editorElement.notify("document-change"),this.handlingInput?void 0:this.render()},a.prototype.compositionDidChangeCurrentAttributes=function(t){return this.currentAttributes=t,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.editorElement.notify("attributes-change",{attributes:this.currentAttributes})},a.prototype.compositionDidPerformInsertionAtRange=function(t){return this.pasting?this.pastedRange=t:void 0},a.prototype.compositionShouldAcceptFile=function(t){return this.editorElement.notify("file-accept",{file:t})},a.prototype.compositionDidAddAttachment=function(t){var e;return e=this.attachmentManager.manageAttachment(t),this.editorElement.notify("attachment-add",{attachment:e})},a.prototype.compositionDidEditAttachment=function(t){var e;return this.compositionController.rerenderViewForObject(t),e=this.attachmentManager.manageAttachment(t),this.editorElement.notify("attachment-edit",{attachment:e}),this.editorElement.notify("change")},a.prototype.compositionDidChangeAttachmentPreviewURL=function(t){return this.compositionController.invalidateViewForObject(t),this.editorElement.notify("change")},a.prototype.compositionDidRemoveAttachment=function(t){var e;return e=this.attachmentManager.unmanageAttachment(t),this.editorElement.notify("attachment-remove",{attachment:e})},a.prototype.compositionDidStartEditingAttachment=function(t){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(t),this.compositionController.installAttachmentEditorForAttachment(t),this.selectionManager.setLocationRange(this.attachmentLocationRange)},a.prototype.compositionDidStopEditingAttachment=function(){return this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null},a.prototype.compositionDidRequestChangingSelectionToLocationRange=function(t){return!this.loadingSnapshot||this.isFocused()?(this.requestedLocationRange=t,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()):void 0},a.prototype.compositionWillLoadSnapshot=function(){return this.loadingSnapshot=!0},a.prototype.compositionDidLoadSnapshot=function(){return this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1},a.prototype.getSelectionManager=function(){return this.selectionManager},a.proxyMethod("getSelectionManager().setLocationRange"),a.proxyMethod("getSelectionManager().getLocationRange"),a.prototype.attachmentManagerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},a.prototype.compositionControllerWillSyncDocumentView=function(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()},a.prototype.compositionControllerDidSyncDocumentView=function(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.editorElement.notify("sync")},a.prototype.compositionControllerDidRender=function(){return null!=this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.composition.updateCurrentAttributes(),this.editorElement.notify("render")),this.renderedCompositionRevision=this.composition.revision},a.prototype.compositionControllerDidFocus=function(){return this.toolbarController.hideDialog(),this.editorElement.notify("focus")},a.prototype.compositionControllerDidBlur=function(){return this.editorElement.notify("blur")},a.prototype.compositionControllerDidSelectAttachment=function(t){return this.composition.editAttachment(t)},a.prototype.compositionControllerDidRequestDeselectingAttachment=function(t){var e,n;return e=null!=(n=this.attachmentLocationRange)?n:this.composition.document.getLocationRangeOfAttachment(t),this.selectionManager.setLocationRange(e[1])},a.prototype.compositionControllerWillUpdateAttachment=function(t){return this.editor.recordUndoEntry("Edit Attachment",{context:t.id,consolidatable:!0})},a.prototype.compositionControllerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},a.prototype.inputControllerWillHandleInput=function(){return this.handlingInput=!0,this.requestedRender=!1},a.prototype.inputControllerDidRequestRender=function(){return this.requestedRender=!0},a.prototype.inputControllerDidHandleInput=function(){return this.handlingInput=!1,this.requestedRender?(this.requestedRender=!1,this.render()):void 0},a.prototype.inputControllerDidAllowUnhandledInput=function(){return this.editorElement.notify("change")},a.prototype.inputControllerDidRequestReparse=function(){return this.reparse()},a.prototype.inputControllerWillPerformTyping=function(){return this.recordTypingUndoEntry()},a.prototype.inputControllerWillCutText=function(){return this.editor.recordUndoEntry("Cut")},a.prototype.inputControllerWillPasteText=function(){return this.editor.recordUndoEntry("Paste"),this.pasting=!0},a.prototype.inputControllerDidPaste=function(t){var e;return e=this.pastedRange,this.pastedRange=null,this.pasting=null,this.editorElement.notify("paste",{pasteData:t,range:e})},a.prototype.inputControllerWillMoveText=function(){return this.editor.recordUndoEntry("Move")},a.prototype.inputControllerWillAttachFiles=function(){return this.editor.recordUndoEntry("Drop Files")},a.prototype.inputControllerDidReceiveKeyboardCommand=function(t){return this.toolbarController.applyKeyboardCommand(t)},a.prototype.inputControllerDidStartDrag=function(){return this.locationRangeBeforeDrag=this.selectionManager.getLocationRange()},a.prototype.inputControllerDidReceiveDragOverPoint=function(t){return this.selectionManager.setLocationRangeFromPointRange(t)},a.prototype.inputControllerDidCancelDrag=function(){return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null},a.prototype.locationRangeDidChange=function(t){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!o(this.attachmentLocationRange,t)&&this.composition.stopEditingAttachment(),this.editorElement.notify("selection-change")},a.prototype.toolbarDidClickButton=function(){return this.getLocationRange()?void 0:this.setLocationRange({index:0,offset:0})},a.prototype.toolbarDidInvokeAction=function(t){return this.invokeAction(t)},a.prototype.toolbarDidToggleAttribute=function(t){return this.recordFormattingUndoEntry(),this.composition.toggleCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},a.prototype.toolbarDidUpdateAttribute=function(t,e){return this.recordFormattingUndoEntry(),this.composition.setCurrentAttribute(t,e),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},a.prototype.toolbarDidRemoveAttribute=function(t){return this.recordFormattingUndoEntry(),this.composition.removeCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},a.prototype.toolbarWillShowDialog=function(){return this.composition.expandSelectionForEditing(),this.freezeSelection()},a.prototype.toolbarDidShowDialog=function(t){return this.editorElement.notify("toolbar-dialog-show",{dialogName:t})},a.prototype.toolbarDidHideDialog=function(t){return this.thawSelection(),this.editorElement.focus(),this.editorElement.notify("toolbar-dialog-hide",{dialogName:t})},a.prototype.freezeSelection=function(){return this.selectionFrozen?void 0:(this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render())},a.prototype.thawSelection=function(){return this.selectionFrozen?(this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()):void 0},a.prototype.actions={undo:{test:function(){return this.editor.canUndo()},perform:function(){return this.editor.undo()}},redo:{test:function(){return this.editor.canRedo()},perform:function(){return this.editor.redo()}},link:{test:function(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test:function(){return this.editor.canIncreaseNestingLevel()},perform:function(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test:function(){return this.editor.canDecreaseNestingLevel()},perform:function(){return this.editor.decreaseNestingLevel()&&this.render()}},increaseBlockLevel:{test:function(){return this.editor.canIncreaseNestingLevel()},perform:function(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseBlockLevel:{test:function(){return this.editor.canDecreaseNestingLevel()},perform:function(){return this.editor.decreaseNestingLevel()&&this.render()}}},a.prototype.canInvokeAction=function(t){var e,n;return this.actionIsExternal(t)?!0:!!(null!=(e=this.actions[t])&&null!=(n=e.test)?n.call(this):void 0)},a.prototype.invokeAction=function(t){var e,n;return this.actionIsExternal(t)?this.editorElement.notify("action-invoke",{actionName:t}):null!=(e=this.actions[t])&&null!=(n=e.perform)?n.call(this):void 0},a.prototype.actionIsExternal=function(t){return/^x-./.test(t)},a.prototype.getCurrentActions=function(){var t,e;e={};for(t in this.actions)e[t]=this.canInvokeAction(t);return e},a.prototype.updateCurrentActions=function(){var e;return e=this.getCurrentActions(),t(e,this.currentActions)?void 0:(this.currentActions=e,this.toolbarController.updateActions(this.currentActions),this.editorElement.notify("actions-change",{actions:this.currentActions}))},a.prototype.reparse=function(){return this.composition.replaceHTML(this.editorElement.innerHTML)},a.prototype.render=function(){return this.compositionController.render()},a.prototype.removeAttachment=function(t){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(t),this.render()},a.prototype.recordFormattingUndoEntry=function(){var t;return t=this.selectionManager.getLocationRange(),n(t)?void 0:this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0})},a.prototype.recordTypingUndoEntry=function(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})},a.prototype.getUndoContext=function(){var t;return t=1<=arguments.length?s.call(arguments,0):[],[this.getLocationContext(),this.getTimeContext()].concat(s.call(t))},a.prototype.getLocationContext=function(){var t;return t=this.selectionManager.getLocationRange(),n(t)?t[0].index:t},a.prototype.getTimeContext=function(){return e.config.undoInterval>0?Math.floor((new Date).getTime()/e.config.undoInterval):0},a.prototype.isFocused=function(){var t;return this.editorElement===(null!=(t=this.editorElement.ownerDocument)?t.activeElement:void 0)},a}(e.Controller)}.call(this),function(){var t,n,o,i,r,s;i=e.makeElement,r=e.selectionElements,s=e.triggerEvent,n=e.handleEvent,o=e.handleEventOnce,t=e.AttachmentView.attachmentSelector,e.registerElement("trix-editor",function(){var a,u,c,l,h,p;return l=0,a=function(t){return!document.querySelector(":focus")&&t.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===t?t.focus():void 0},h=function(t){return t.hasAttribute("contenteditable")?void 0:(t.setAttribute("contenteditable",""),o("focus",{onElement:t,withCallback:function(){return u(t)}}))},u=function(t){return c(t),p(t)},c=function(t){return("function"==typeof document.queryCommandSupported?document.queryCommandSupported("enableObjectResizing"):void 0)?(document.execCommand("enableObjectResizing",!1,!1),n("mscontrolselect",{onElement:t,preventDefault:!0})):void 0},p=function(){var t;return("function"==typeof document.queryCommandSupported?document.queryCommandSupported("DefaultParagraphSeparator"):void 0)&&(t=e.config.blockAttributes["default"].tagName,"div"===t||"p"===t)?document.execCommand("DefaultParagraphSeparator",!1,t):void 0},{defaultCSS:"%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t "+t+" figcaption textarea {\n  resize: none;\n}\n\n%t "+t+" figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t "+t+'[data-trix-mutable] figcaption:empty::before {\n  content: "'+e.config.lang.captionPrompt+'";\n  color: graytext;\n}\n\n%t '+r.selector+" { "+r.cssText+" }",trixId:{get:function(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++l),this.trixId)}},toolbarElement:{get:function(){var t,e,n;return this.hasAttribute("toolbar")?null!=(e=this.ownerDocument)?e.getElementById(this.getAttribute("toolbar")):void 0:this.parentElement?(n="trix-toolbar-"+this.trixId,this.setAttribute("toolbar",n),t=i("trix-toolbar",{id:n}),this.parentElement.insertBefore(t,this),t):void 0}},inputElement:{get:function(){var t,e,n;return this.hasAttribute("input")?null!=(n=this.ownerDocument)?n.getElementById(this.getAttribute("input")):void 0:this.parentElement?(e="trix-input-"+this.trixId,this.setAttribute("input",e),t=i("input",{type:"hidden",id:e}),this.parentElement.insertBefore(t,this.nextElementSibling),t):void 0}},editor:{get:function(){var t;return null!=(t=this.editorController)?t.editor:void 0}},name:{get:function(){var t;return null!=(t=this.inputElement)?t.name:void 0}},value:{get:function(){var t;return null!=(t=this.inputElement)?t.value:void 0},set:function(t){var e;return this.defaultValue=t,null!=(e=this.editor)?e.loadHTML(this.defaultValue):void 0}},notify:function(t,n){var o;switch(t){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notify("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":null!=(o=this.inputElement)&&(o.value=e.serializeToContentType(this,"text/html"))}return this.editorController?s("trix-"+t,{onElement:this,attributes:n}):void 0},createdCallback:function(){return h(this)},attachedCallback:function(){return this.hasAttribute("data-trix-internal")?void 0:(null==this.editorController&&(this.editorController=new e.EditorController({editorElement:this,html:this.defaultValue=this.value})),this.editorController.registerSelectionManager(),this.registerResetListener(),a(this),requestAnimationFrame(function(t){return function(){return t.notify("initialize")}}(this)))},detachedCallback:function(){var t;return null!=(t=this.editorController)&&t.unregisterSelectionManager(),this.unregisterResetListener()},registerResetListener:function(){return this.resetListener=this.resetBubbled.bind(this),window.addEventListener("reset",this.resetListener,!1)},unregisterResetListener:function(){return window.removeEventListener("reset",this.resetListener,!1)},resetBubbled:function(t){var e;return t.target!==(null!=(e=this.inputElement)?e.form:void 0)||t.defaultPrevented?void 0:this.reset()},reset:function(){return this.value=this.defaultValue}}}())}.call(this),function(){}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}.call(this);
;/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;/*!
 * 
 * Super simple wysiwyg editor v0.8.16
 * https://summernote.org
 * 
 * 
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 * 
 * Date: 2020-02-19T09:12Z
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("jquery"));
    else if (typeof define === 'function' && define.amd)
        define(["jquery"], factory);
    else {
        var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
        for (var i in a)(typeof exports === 'object' ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
    return /******/ (function(modules) { // webpackBootstrap
            /******/ // The module cache
            /******/
            var installedModules = {};
            /******/
            /******/ // The require function
            /******/
            function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/
                if (installedModules[moduleId]) {
                    /******/
                    return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/
                var module = installedModules[moduleId] = {
                    /******/
                    i: moduleId,
                    /******/
                    l: false,
                    /******/
                    exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/
                module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/
                return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/
            __webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/
            __webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/
            __webpack_require__.d = function(exports, name, getter) {
                /******/
                if (!__webpack_require__.o(exports, name)) {
                    /******/
                    Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/
            __webpack_require__.r = function(exports) {
                /******/
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/
                    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/
                Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/
            __webpack_require__.t = function(value, mode) {
                /******/
                if (mode & 1) value = __webpack_require__(value);
                /******/
                if (mode & 8) return value;
                /******/
                if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                /******/
                var ns = Object.create(null);
                /******/
                __webpack_require__.r(ns);
                /******/
                Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/
                if (mode & 2 && typeof value != 'string')
                    for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
                /******/
                return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/
            __webpack_require__.n = function(module) {
                /******/
                var getter = module && module.__esModule ?
                    /******/
                    function getDefault() { return module['default']; } :
                    /******/
                    function getModuleExports() { return module; };
                /******/
                __webpack_require__.d(getter, 'a', getter);
                /******/
                return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/
            __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
            /******/
            /******/ // __webpack_public_path__
            /******/
            __webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/
            return __webpack_require__(__webpack_require__.s = 51);
            /******/
        })
        /************************************************************************/
        /******/
        ({

            /***/
            0:
            /***/
                (function(module, exports) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

                /***/
            }),

            /***/
            1:
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                /* harmony import */
                var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
                /* harmony import */
                var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

                function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



                var Renderer =
                    /*#__PURE__*/
                    function() {
                        function Renderer(markup, children, options, callback) {
                            _classCallCheck(this, Renderer);

                            this.markup = markup;
                            this.children = children;
                            this.options = options;
                            this.callback = callback;
                        }

                        _createClass(Renderer, [{
                            key: "render",
                            value: function render($parent) {
                                var $node = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.markup);

                                if (this.options && this.options.contents) {
                                    $node.html(this.options.contents);
                                }

                                if (this.options && this.options.className) {
                                    $node.addClass(this.options.className);
                                }

                                if (this.options && this.options.data) {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.options.data, function(k, v) {
                                        $node.attr('data-' + k, v);
                                    });
                                }

                                if (this.options && this.options.click) {
                                    $node.on('click', this.options.click);
                                }

                                if (this.children) {
                                    var $container = $node.find('.note-children-container');
                                    this.children.forEach(function(child) {
                                        child.render($container.length ? $container : $node);
                                    });
                                }

                                if (this.callback) {
                                    this.callback($node, this.options);
                                }

                                if (this.options && this.options.callback) {
                                    this.options.callback($node);
                                }

                                if ($parent) {
                                    $parent.append($node);
                                }

                                return $node;
                            }
                        }]);

                        return Renderer;
                    }();

                /* harmony default export */
                __webpack_exports__["a"] = ({
                    create: function create(markup, callback) {
                        return function() {
                            var options = _typeof(arguments[1]) === 'object' ? arguments[1] : arguments[0];
                            var children = Array.isArray(arguments[0]) ? arguments[0] : [];

                            if (options && options.children) {
                                children = options.children;
                            }

                            return new Renderer(markup, children, options, callback);
                        };
                    }
                });

                /***/
            }),

            /***/
            2:
            /***/
                (function(module, exports) {

                /* WEBPACK VAR INJECTION */
                (function(__webpack_amd_options__) { /* globals __webpack_amd_options__ */
                    module.exports = __webpack_amd_options__;

                    /* WEBPACK VAR INJECTION */
                }.call(this, {}))

                /***/
            }),

            /***/
            3:
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";

                // EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}
                var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(0);
                var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/ __webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

                // CONCATENATED MODULE: ./src/js/base/summernote-en-US.js

                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote || {
                    lang: {}
                };
                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang, {
                    'en-US': {
                        font: {
                            bold: 'Bold',
                            italic: 'Italic',
                            underline: 'Underline',
                            clear: 'Remove Font Style',
                            height: 'Line Height',
                            name: 'Font Family',
                            strikethrough: 'Strikethrough',
                            subscript: 'Subscript',
                            superscript: 'Superscript',
                            size: 'Font Size',
                            sizeunit: 'Font Size Unit'
                        },
                        image: {
                            image: 'Picture',
                            insert: 'Insert Image',
                            resizeFull: 'Resize full',
                            resizeHalf: 'Resize half',
                            resizeQuarter: 'Resize quarter',
                            resizeNone: 'Original size',
                            floatLeft: 'Float Left',
                            floatRight: 'Float Right',
                            floatNone: 'Remove float',
                            shapeRounded: 'Shape: Rounded',
                            shapeCircle: 'Shape: Circle',
                            shapeThumbnail: 'Shape: Thumbnail',
                            shapeNone: 'Shape: None',
                            dragImageHere: 'Drag image or text here',
                            dropImage: 'Drop image or Text',
                            selectFromFiles: 'Select from files',
                            maximumFileSize: 'Maximum file size',
                            maximumFileSizeError: 'Maximum file size exceeded.',
                            url: 'Image URL',
                            remove: 'Remove Image',
                            original: 'Original'
                        },
                        video: {
                            video: 'Video',
                            videoLink: 'Video Link',
                            insert: 'Insert Video',
                            url: 'Video URL',
                            providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
                        },
                        link: {
                            link: 'Link',
                            insert: 'Insert Link',
                            unlink: 'Unlink',
                            edit: 'Edit',
                            textToDisplay: 'Text to display',
                            url: 'To what URL should this link go?',
                            openInNewWindow: 'Open in new window',
                            useProtocol: 'Use default protocol'
                        },
                        table: {
                            table: 'Table',
                            addRowAbove: 'Add row above',
                            addRowBelow: 'Add row below',
                            addColLeft: 'Add column left',
                            addColRight: 'Add column right',
                            delRow: 'Delete row',
                            delCol: 'Delete column',
                            delTable: 'Delete table'
                        },
                        hr: {
                            insert: 'Insert Horizontal Rule'
                        },
                        style: {
                            style: 'Style',
                            p: 'Normal',
                            blockquote: 'Quote',
                            pre: 'Code',
                            h1: 'Header 1',
                            h2: 'Header 2',
                            h3: 'Header 3',
                            h4: 'Header 4',
                            h5: 'Header 5',
                            h6: 'Header 6'
                        },
                        lists: {
                            unordered: 'Unordered list',
                            ordered: 'Ordered list'
                        },
                        options: {
                            help: 'Help',
                            fullscreen: 'Full Screen',
                            codeview: 'Code View'
                        },
                        paragraph: {
                            paragraph: 'Paragraph',
                            outdent: 'Outdent',
                            indent: 'Indent',
                            left: 'Align left',
                            center: 'Align center',
                            right: 'Align right',
                            justify: 'Justify full'
                        },
                        color: {
                            recent: 'Recent Color',
                            more: 'More Color',
                            background: 'Background Color',
                            foreground: 'Text Color',
                            transparent: 'Transparent',
                            setTransparent: 'Set transparent',
                            reset: 'Reset',
                            resetToDefault: 'Reset to default',
                            cpSelect: 'Select'
                        },
                        shortcut: {
                            shortcuts: 'Keyboard shortcuts',
                            close: 'Close',
                            textFormatting: 'Text formatting',
                            action: 'Action',
                            paragraphFormatting: 'Paragraph formatting',
                            documentStyle: 'Document Style',
                            extraKeys: 'Extra keys'
                        },
                        help: {
                            'insertParagraph': 'Insert Paragraph',
                            'undo': 'Undoes the last command',
                            'redo': 'Redoes the last command',
                            'tab': 'Tab',
                            'untab': 'Untab',
                            'bold': 'Set a bold style',
                            'italic': 'Set a italic style',
                            'underline': 'Set a underline style',
                            'strikethrough': 'Set a strikethrough style',
                            'removeFormat': 'Clean a style',
                            'justifyLeft': 'Set left align',
                            'justifyCenter': 'Set center align',
                            'justifyRight': 'Set right align',
                            'justifyFull': 'Set full align',
                            'insertUnorderedList': 'Toggle unordered list',
                            'insertOrderedList': 'Toggle ordered list',
                            'outdent': 'Outdent on current paragraph',
                            'indent': 'Indent on current paragraph',
                            'formatPara': 'Change current block\'s format as a paragraph(P tag)',
                            'formatH1': 'Change current block\'s format as H1',
                            'formatH2': 'Change current block\'s format as H2',
                            'formatH3': 'Change current block\'s format as H3',
                            'formatH4': 'Change current block\'s format as H4',
                            'formatH5': 'Change current block\'s format as H5',
                            'formatH6': 'Change current block\'s format as H6',
                            'insertHorizontalRule': 'Insert horizontal rule',
                            'linkDialog.show': 'Show Link Dialog'
                        },
                        history: {
                            undo: 'Undo',
                            redo: 'Redo'
                        },
                        specialChar: {
                            specialChar: 'SPECIAL CHARACTERS',
                            select: 'Select Special characters'
                        },
                        output: {
                            noSelection: 'No Selection Made!'
                        }
                    }
                });
                // CONCATENATED MODULE: ./src/js/base/core/env.js

                var isSupportAmd = typeof define === 'function' && __webpack_require__(2); // eslint-disable-line

                /**
                 * returns whether font is installed or not.
                 *
                 * @param {String} fontName
                 * @return {Boolean}
                 */

                var genericFontFamilies = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];

                function validFontName(fontName) {
                    return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.inArray(fontName.toLowerCase(), genericFontFamilies) === -1 ? "'".concat(fontName, "'") : fontName;
                }

                function env_isFontInstalled(fontName) {
                    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
                    var testText = 'mmmmmmmmmmwwwww';
                    var testSize = '200px';
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    context.font = testSize + " '" + testFontName + "'";
                    var originalWidth = context.measureText(testText).width;
                    context.font = testSize + ' ' + validFontName(fontName) + ', "' + testFontName + '"';
                    var width = context.measureText(testText).width;
                    return originalWidth !== width;
                }

                var userAgent = navigator.userAgent;
                var isMSIE = /MSIE|Trident/i.test(userAgent);
                var browserVersion;

                if (isMSIE) {
                    var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);

                    if (matches) {
                        browserVersion = parseFloat(matches[1]);
                    }

                    matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);

                    if (matches) {
                        browserVersion = parseFloat(matches[1]);
                    }
                }

                var isEdge = /Edge\/\d+/.test(userAgent);
                var hasCodeMirror = !!window.CodeMirror;
                var isSupportTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0; // [workaround] IE doesn't have input events for contentEditable
                // - see: https://goo.gl/4bfIvA

                var inputEventName = isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
                /**
                 * @class core.env
                 *
                 * Object which check platform and agent
                 *
                 * @singleton
                 * @alternateClassName env
                 */

                /* harmony default export */
                var env = ({
                    isMac: navigator.appVersion.indexOf('Mac') > -1,
                    isMSIE: isMSIE,
                    isEdge: isEdge,
                    isFF: !isEdge && /firefox/i.test(userAgent),
                    isPhantom: /PhantomJS/i.test(userAgent),
                    isWebkit: !isEdge && /webkit/i.test(userAgent),
                    isChrome: !isEdge && /chrome/i.test(userAgent),
                    isSafari: !isEdge && /safari/i.test(userAgent) && !/chrome/i.test(userAgent),
                    browserVersion: browserVersion,
                    jqueryVersion: parseFloat(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.fn.jquery),
                    isSupportAmd: isSupportAmd,
                    isSupportTouch: isSupportTouch,
                    hasCodeMirror: hasCodeMirror,
                    isFontInstalled: env_isFontInstalled,
                    isW3CRangeSupport: !!document.createRange,
                    inputEventName: inputEventName,
                    genericFontFamilies: genericFontFamilies,
                    validFontName: validFontName
                });
                // CONCATENATED MODULE: ./src/js/base/core/func.js

                /**
                 * @class core.func
                 *
                 * func utils (for high-order func's arg)
                 *
                 * @singleton
                 * @alternateClassName func
                 */

                function eq(itemA) {
                    return function(itemB) {
                        return itemA === itemB;
                    };
                }

                function eq2(itemA, itemB) {
                    return itemA === itemB;
                }

                function peq2(propName) {
                    return function(itemA, itemB) {
                        return itemA[propName] === itemB[propName];
                    };
                }

                function ok() {
                    return true;
                }

                function fail() {
                    return false;
                }

                function not(f) {
                    return function() {
                        return !f.apply(f, arguments);
                    };
                }

                function and(fA, fB) {
                    return function(item) {
                        return fA(item) && fB(item);
                    };
                }

                function func_self(a) {
                    return a;
                }

                function func_invoke(obj, method) {
                    return function() {
                        return obj[method].apply(obj, arguments);
                    };
                }

                var idCounter = 0;
                /**
                 * reset globally-unique id
                 *
                 */

                function resetUniqueId() {
                    idCounter = 0;
                }
                /**
                 * generate a globally-unique id
                 *
                 * @param {String} [prefix]
                 */


                function uniqueId(prefix) {
                    var id = ++idCounter + '';
                    return prefix ? prefix + id : id;
                }
                /**
                 * returns bnd (bounds) from rect
                 *
                 * - IE Compatibility Issue: http://goo.gl/sRLOAo
                 * - Scroll Issue: http://goo.gl/sNjUc
                 *
                 * @param {Rect} rect
                 * @return {Object} bounds
                 * @return {Number} bounds.top
                 * @return {Number} bounds.left
                 * @return {Number} bounds.width
                 * @return {Number} bounds.height
                 */


                function rect2bnd(rect) {
                    var $document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
                    return {
                        top: rect.top + $document.scrollTop(),
                        left: rect.left + $document.scrollLeft(),
                        width: rect.right - rect.left,
                        height: rect.bottom - rect.top
                    };
                }
                /**
                 * returns a copy of the object where the keys have become the values and the values the keys.
                 * @param {Object} obj
                 * @return {Object}
                 */


                function invertObject(obj) {
                    var inverted = {};

                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            inverted[obj[key]] = key;
                        }
                    }

                    return inverted;
                }
                /**
                 * @param {String} namespace
                 * @param {String} [prefix]
                 * @return {String}
                 */


                function namespaceToCamel(namespace, prefix) {
                    prefix = prefix || '';
                    return prefix + namespace.split('.').map(function(name) {
                        return name.substring(0, 1).toUpperCase() + name.substring(1);
                    }).join('');
                }
                /**
                 * Returns a function, that, as long as it continues to be invoked, will not
                 * be triggered. The function will be called after it stops being called for
                 * N milliseconds. If `immediate` is passed, trigger the function on the
                 * leading edge, instead of the trailing.
                 * @param {Function} func
                 * @param {Number} wait
                 * @param {Boolean} immediate
                 * @return {Function}
                 */


                function debounce(func, wait, immediate) {
                    var timeout;
                    return function() {
                        var context = this;
                        var args = arguments;

                        var later = function later() {
                            timeout = null;

                            if (!immediate) {
                                func.apply(context, args);
                            }
                        };

                        var callNow = immediate && !timeout;
                        clearTimeout(timeout);
                        timeout = setTimeout(later, wait);

                        if (callNow) {
                            func.apply(context, args);
                        }
                    };
                }
                /**
                 *
                 * @param {String} url
                 * @return {Boolean}
                 */


                function isValidUrl(url) {
                    var expression = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
                    return expression.test(url);
                }

                /* harmony default export */
                var func = ({
                    eq: eq,
                    eq2: eq2,
                    peq2: peq2,
                    ok: ok,
                    fail: fail,
                    self: func_self,
                    not: not,
                    and: and,
                    invoke: func_invoke,
                    resetUniqueId: resetUniqueId,
                    uniqueId: uniqueId,
                    rect2bnd: rect2bnd,
                    invertObject: invertObject,
                    namespaceToCamel: namespaceToCamel,
                    debounce: debounce,
                    isValidUrl: isValidUrl
                });
                // CONCATENATED MODULE: ./src/js/base/core/lists.js

                /**
                 * returns the first item of an array.
                 *
                 * @param {Array} array
                 */

                function lists_head(array) {
                    return array[0];
                }
                /**
                 * returns the last item of an array.
                 *
                 * @param {Array} array
                 */


                function lists_last(array) {
                    return array[array.length - 1];
                }
                /**
                 * returns everything but the last entry of the array.
                 *
                 * @param {Array} array
                 */


                function initial(array) {
                    return array.slice(0, array.length - 1);
                }
                /**
                 * returns the rest of the items in an array.
                 *
                 * @param {Array} array
                 */


                function tail(array) {
                    return array.slice(1);
                }
                /**
                 * returns item of array
                 */


                function find(array, pred) {
                    for (var idx = 0, len = array.length; idx < len; idx++) {
                        var item = array[idx];

                        if (pred(item)) {
                            return item;
                        }
                    }
                }
                /**
                 * returns true if all of the values in the array pass the predicate truth test.
                 */


                function lists_all(array, pred) {
                    for (var idx = 0, len = array.length; idx < len; idx++) {
                        if (!pred(array[idx])) {
                            return false;
                        }
                    }

                    return true;
                }
                /**
                 * returns true if the value is present in the list.
                 */


                function contains(array, item) {
                    if (array && array.length && item) {
                        if (array.indexOf) {
                            return array.indexOf(item) !== -1;
                        } else if (array.contains) {
                            // `DOMTokenList` doesn't implement `.indexOf`, but it implements `.contains`
                            return array.contains(item);
                        }
                    }

                    return false;
                }
                /**
                 * get sum from a list
                 *
                 * @param {Array} array - array
                 * @param {Function} fn - iterator
                 */


                function sum(array, fn) {
                    fn = fn || func.self;
                    return array.reduce(function(memo, v) {
                        return memo + fn(v);
                    }, 0);
                }
                /**
                 * returns a copy of the collection with array type.
                 * @param {Collection} collection - collection eg) node.childNodes, ...
                 */


                function from(collection) {
                    var result = [];
                    var length = collection.length;
                    var idx = -1;

                    while (++idx < length) {
                        result[idx] = collection[idx];
                    }

                    return result;
                }
                /**
                 * returns whether list is empty or not
                 */


                function lists_isEmpty(array) {
                    return !array || !array.length;
                }
                /**
                 * cluster elements by predicate function.
                 *
                 * @param {Array} array - array
                 * @param {Function} fn - predicate function for cluster rule
                 * @param {Array[]}
                 */


                function clusterBy(array, fn) {
                    if (!array.length) {
                        return [];
                    }

                    var aTail = tail(array);
                    return aTail.reduce(function(memo, v) {
                        var aLast = lists_last(memo);

                        if (fn(lists_last(aLast), v)) {
                            aLast[aLast.length] = v;
                        } else {
                            memo[memo.length] = [v];
                        }

                        return memo;
                    }, [
                        [lists_head(array)]
                    ]);
                }
                /**
                 * returns a copy of the array with all false values removed
                 *
                 * @param {Array} array - array
                 * @param {Function} fn - predicate function for cluster rule
                 */


                function compact(array) {
                    var aResult = [];

                    for (var idx = 0, len = array.length; idx < len; idx++) {
                        if (array[idx]) {
                            aResult.push(array[idx]);
                        }
                    }

                    return aResult;
                }
                /**
                 * produces a duplicate-free version of the array
                 *
                 * @param {Array} array
                 */


                function unique(array) {
                    var results = [];

                    for (var idx = 0, len = array.length; idx < len; idx++) {
                        if (!contains(results, array[idx])) {
                            results.push(array[idx]);
                        }
                    }

                    return results;
                }
                /**
                 * returns next item.
                 * @param {Array} array
                 */


                function lists_next(array, item) {
                    if (array && array.length && item) {
                        var idx = array.indexOf(item);
                        return idx === -1 ? null : array[idx + 1];
                    }

                    return null;
                }
                /**
                 * returns prev item.
                 * @param {Array} array
                 */


                function prev(array, item) {
                    if (array && array.length && item) {
                        var idx = array.indexOf(item);
                        return idx === -1 ? null : array[idx - 1];
                    }

                    return null;
                }
                /**
                 * @class core.list
                 *
                 * list utils
                 *
                 * @singleton
                 * @alternateClassName list
                 */


                /* harmony default export */
                var lists = ({
                    head: lists_head,
                    last: lists_last,
                    initial: initial,
                    tail: tail,
                    prev: prev,
                    next: lists_next,
                    find: find,
                    contains: contains,
                    all: lists_all,
                    sum: sum,
                    from: from,
                    isEmpty: lists_isEmpty,
                    clusterBy: clusterBy,
                    compact: compact,
                    unique: unique
                });
                // CONCATENATED MODULE: ./src/js/base/core/dom.js




                var NBSP_CHAR = String.fromCharCode(160);
                var ZERO_WIDTH_NBSP_CHAR = "\uFEFF";
                /**
                 * @method isEditable
                 *
                 * returns whether node is `note-editable` or not.
                 *
                 * @param {Node} node
                 * @return {Boolean}
                 */

                function isEditable(node) {
                    return node && external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).hasClass('note-editable');
                }
                /**
                 * @method isControlSizing
                 *
                 * returns whether node is `note-control-sizing` or not.
                 *
                 * @param {Node} node
                 * @return {Boolean}
                 */


                function isControlSizing(node) {
                    return node && external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).hasClass('note-control-sizing');
                }
                /**
                 * @method makePredByNodeName
                 *
                 * returns predicate which judge whether nodeName is same
                 *
                 * @param {String} nodeName
                 * @return {Function}
                 */


                function makePredByNodeName(nodeName) {
                    nodeName = nodeName.toUpperCase();
                    return function(node) {
                        return node && node.nodeName.toUpperCase() === nodeName;
                    };
                }
                /**
                 * @method isText
                 *
                 *
                 *
                 * @param {Node} node
                 * @return {Boolean} true if node's type is text(3)
                 */


                function isText(node) {
                    return node && node.nodeType === 3;
                }
                /**
                 * @method isElement
                 *
                 *
                 *
                 * @param {Node} node
                 * @return {Boolean} true if node's type is element(1)
                 */


                function isElement(node) {
                    return node && node.nodeType === 1;
                }
                /**
                 * ex) br, col, embed, hr, img, input, ...
                 * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
                 */


                function isVoid(node) {
                    return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(node.nodeName.toUpperCase());
                }

                function isPara(node) {
                    if (isEditable(node)) {
                        return false;
                    } // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph


                    return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
                }

                function isHeading(node) {
                    return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
                }

                var isPre = makePredByNodeName('PRE');
                var isLi = makePredByNodeName('LI');

                function isPurePara(node) {
                    return isPara(node) && !isLi(node);
                }

                var isTable = makePredByNodeName('TABLE');
                var isData = makePredByNodeName('DATA');

                function dom_isInline(node) {
                    return !isBodyContainer(node) && !isList(node) && !isHr(node) && !isPara(node) && !isTable(node) && !isBlockquote(node) && !isData(node);
                }

                function isList(node) {
                    return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
                }

                var isHr = makePredByNodeName('HR');

                function dom_isCell(node) {
                    return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
                }

                var isBlockquote = makePredByNodeName('BLOCKQUOTE');

                function isBodyContainer(node) {
                    return dom_isCell(node) || isBlockquote(node) || isEditable(node);
                }

                var isAnchor = makePredByNodeName('A');

                function isParaInline(node) {
                    return dom_isInline(node) && !!dom_ancestor(node, isPara);
                }

                function isBodyInline(node) {
                    return dom_isInline(node) && !dom_ancestor(node, isPara);
                }

                var isBody = makePredByNodeName('BODY');
                /**
                 * returns whether nodeB is closest sibling of nodeA
                 *
                 * @param {Node} nodeA
                 * @param {Node} nodeB
                 * @return {Boolean}
                 */

                function isClosestSibling(nodeA, nodeB) {
                    return nodeA.nextSibling === nodeB || nodeA.previousSibling === nodeB;
                }
                /**
                 * returns array of closest siblings with node
                 *
                 * @param {Node} node
                 * @param {function} [pred] - predicate function
                 * @return {Node[]}
                 */


                function withClosestSiblings(node, pred) {
                    pred = pred || func.ok;
                    var siblings = [];

                    if (node.previousSibling && pred(node.previousSibling)) {
                        siblings.push(node.previousSibling);
                    }

                    siblings.push(node);

                    if (node.nextSibling && pred(node.nextSibling)) {
                        siblings.push(node.nextSibling);
                    }

                    return siblings;
                }
                /**
                 * blank HTML for cursor position
                 * - [workaround] old IE only works with &nbsp;
                 * - [workaround] IE11 and other browser works with bogus br
                 */


                var blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';
                /**
                 * @method nodeLength
                 *
                 * returns #text's text size or element's childNodes size
                 *
                 * @param {Node} node
                 */

                function nodeLength(node) {
                    if (isText(node)) {
                        return node.nodeValue.length;
                    }

                    if (node) {
                        return node.childNodes.length;
                    }

                    return 0;
                }
                /**
                 * returns whether deepest child node is empty or not.
                 *
                 * @param {Node} node
                 * @return {Boolean}
                 */


                function deepestChildIsEmpty(node) {
                    do {
                        if (node.firstElementChild === null || node.firstElementChild.innerHTML === '') break;
                    } while (node = node.firstElementChild);

                    return dom_isEmpty(node);
                }
                /**
                 * returns whether node is empty or not.
                 *
                 * @param {Node} node
                 * @return {Boolean}
                 */


                function dom_isEmpty(node) {
                    var len = nodeLength(node);

                    if (len === 0) {
                        return true;
                    } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
                        // ex) <p><br></p>, <span><br></span>
                        return true;
                    } else if (lists.all(node.childNodes, isText) && node.innerHTML === '') {
                        // ex) <p></p>, <span></span>
                        return true;
                    }

                    return false;
                }
                /**
                 * padding blankHTML if node is empty (for cursor position)
                 */


                function paddingBlankHTML(node) {
                    if (!isVoid(node) && !nodeLength(node)) {
                        node.innerHTML = blankHTML;
                    }
                }
                /**
                 * find nearest ancestor predicate hit
                 *
                 * @param {Node} node
                 * @param {Function} pred - predicate function
                 */


                function dom_ancestor(node, pred) {
                    while (node) {
                        if (pred(node)) {
                            return node;
                        }

                        if (isEditable(node)) {
                            break;
                        }

                        node = node.parentNode;
                    }

                    return null;
                }
                /**
                 * find nearest ancestor only single child blood line and predicate hit
                 *
                 * @param {Node} node
                 * @param {Function} pred - predicate function
                 */


                function singleChildAncestor(node, pred) {
                    node = node.parentNode;

                    while (node) {
                        if (nodeLength(node) !== 1) {
                            break;
                        }

                        if (pred(node)) {
                            return node;
                        }

                        if (isEditable(node)) {
                            break;
                        }

                        node = node.parentNode;
                    }

                    return null;
                }
                /**
                 * returns new array of ancestor nodes (until predicate hit).
                 *
                 * @param {Node} node
                 * @param {Function} [optional] pred - predicate function
                 */


                function listAncestor(node, pred) {
                    pred = pred || func.fail;
                    var ancestors = [];
                    dom_ancestor(node, function(el) {
                        if (!isEditable(el)) {
                            ancestors.push(el);
                        }

                        return pred(el);
                    });
                    return ancestors;
                }
                /**
                 * find farthest ancestor predicate hit
                 */


                function lastAncestor(node, pred) {
                    var ancestors = listAncestor(node);
                    return lists.last(ancestors.filter(pred));
                }
                /**
                 * returns common ancestor node between two nodes.
                 *
                 * @param {Node} nodeA
                 * @param {Node} nodeB
                 */


                function dom_commonAncestor(nodeA, nodeB) {
                    var ancestors = listAncestor(nodeA);

                    for (var n = nodeB; n; n = n.parentNode) {
                        if (ancestors.indexOf(n) > -1) return n;
                    }

                    return null; // difference document area
                }
                /**
                 * listing all previous siblings (until predicate hit).
                 *
                 * @param {Node} node
                 * @param {Function} [optional] pred - predicate function
                 */


                function listPrev(node, pred) {
                    pred = pred || func.fail;
                    var nodes = [];

                    while (node) {
                        if (pred(node)) {
                            break;
                        }

                        nodes.push(node);
                        node = node.previousSibling;
                    }

                    return nodes;
                }
                /**
                 * listing next siblings (until predicate hit).
                 *
                 * @param {Node} node
                 * @param {Function} [pred] - predicate function
                 */


                function listNext(node, pred) {
                    pred = pred || func.fail;
                    var nodes = [];

                    while (node) {
                        if (pred(node)) {
                            break;
                        }

                        nodes.push(node);
                        node = node.nextSibling;
                    }

                    return nodes;
                }
                /**
                 * listing descendant nodes
                 *
                 * @param {Node} node
                 * @param {Function} [pred] - predicate function
                 */


                function listDescendant(node, pred) {
                    var descendants = [];
                    pred = pred || func.ok; // start DFS(depth first search) with node

                    (function fnWalk(current) {
                        if (node !== current && pred(current)) {
                            descendants.push(current);
                        }

                        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
                            fnWalk(current.childNodes[idx]);
                        }
                    })(node);

                    return descendants;
                }
                /**
                 * wrap node with new tag.
                 *
                 * @param {Node} node
                 * @param {Node} tagName of wrapper
                 * @return {Node} - wrapper
                 */


                function wrap(node, wrapperName) {
                    var parent = node.parentNode;
                    var wrapper = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<' + wrapperName + '>')[0];
                    parent.insertBefore(wrapper, node);
                    wrapper.appendChild(node);
                    return wrapper;
                }
                /**
                 * insert node after preceding
                 *
                 * @param {Node} node
                 * @param {Node} preceding - predicate function
                 */


                function insertAfter(node, preceding) {
                    var next = preceding.nextSibling;
                    var parent = preceding.parentNode;

                    if (next) {
                        parent.insertBefore(node, next);
                    } else {
                        parent.appendChild(node);
                    }

                    return node;
                }
                /**
                 * append elements.
                 *
                 * @param {Node} node
                 * @param {Collection} aChild
                 */


                function appendChildNodes(node, aChild) {
                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(aChild, function(idx, child) {
                        node.appendChild(child);
                    });
                    return node;
                }
                /**
                 * returns whether boundaryPoint is left edge or not.
                 *
                 * @param {BoundaryPoint} point
                 * @return {Boolean}
                 */


                function isLeftEdgePoint(point) {
                    return point.offset === 0;
                }
                /**
                 * returns whether boundaryPoint is right edge or not.
                 *
                 * @param {BoundaryPoint} point
                 * @return {Boolean}
                 */


                function isRightEdgePoint(point) {
                    return point.offset === nodeLength(point.node);
                }
                /**
                 * returns whether boundaryPoint is edge or not.
                 *
                 * @param {BoundaryPoint} point
                 * @return {Boolean}
                 */


                function isEdgePoint(point) {
                    return isLeftEdgePoint(point) || isRightEdgePoint(point);
                }
                /**
                 * returns whether node is left edge of ancestor or not.
                 *
                 * @param {Node} node
                 * @param {Node} ancestor
                 * @return {Boolean}
                 */


                function dom_isLeftEdgeOf(node, ancestor) {
                    while (node && node !== ancestor) {
                        if (dom_position(node) !== 0) {
                            return false;
                        }

                        node = node.parentNode;
                    }

                    return true;
                }
                /**
                 * returns whether node is right edge of ancestor or not.
                 *
                 * @param {Node} node
                 * @param {Node} ancestor
                 * @return {Boolean}
                 */


                function isRightEdgeOf(node, ancestor) {
                    if (!ancestor) {
                        return false;
                    }

                    while (node && node !== ancestor) {
                        if (dom_position(node) !== nodeLength(node.parentNode) - 1) {
                            return false;
                        }

                        node = node.parentNode;
                    }

                    return true;
                }
                /**
                 * returns whether point is left edge of ancestor or not.
                 * @param {BoundaryPoint} point
                 * @param {Node} ancestor
                 * @return {Boolean}
                 */


                function isLeftEdgePointOf(point, ancestor) {
                    return isLeftEdgePoint(point) && dom_isLeftEdgeOf(point.node, ancestor);
                }
                /**
                 * returns whether point is right edge of ancestor or not.
                 * @param {BoundaryPoint} point
                 * @param {Node} ancestor
                 * @return {Boolean}
                 */


                function isRightEdgePointOf(point, ancestor) {
                    return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
                }
                /**
                 * returns offset from parent.
                 *
                 * @param {Node} node
                 */


                function dom_position(node) {
                    var offset = 0;

                    while (node = node.previousSibling) {
                        offset += 1;
                    }

                    return offset;
                }

                function hasChildren(node) {
                    return !!(node && node.childNodes && node.childNodes.length);
                }
                /**
                 * returns previous boundaryPoint
                 *
                 * @param {BoundaryPoint} point
                 * @param {Boolean} isSkipInnerOffset
                 * @return {BoundaryPoint}
                 */


                function dom_prevPoint(point, isSkipInnerOffset) {
                    var node;
                    var offset;

                    if (point.offset === 0) {
                        if (isEditable(point.node)) {
                            return null;
                        }

                        node = point.node.parentNode;
                        offset = dom_position(point.node);
                    } else if (hasChildren(point.node)) {
                        node = point.node.childNodes[point.offset - 1];
                        offset = nodeLength(node);
                    } else {
                        node = point.node;
                        offset = isSkipInnerOffset ? 0 : point.offset - 1;
                    }

                    return {
                        node: node,
                        offset: offset
                    };
                }
                /**
                 * returns next boundaryPoint
                 *
                 * @param {BoundaryPoint} point
                 * @param {Boolean} isSkipInnerOffset
                 * @return {BoundaryPoint}
                 */


                function dom_nextPoint(point, isSkipInnerOffset) {
                    var node, offset;

                    if (dom_isEmpty(point.node)) {
                        return null;
                    }

                    if (nodeLength(point.node) === point.offset) {
                        if (isEditable(point.node)) {
                            return null;
                        }

                        node = point.node.parentNode;
                        offset = dom_position(point.node) + 1;
                    } else if (hasChildren(point.node)) {
                        node = point.node.childNodes[point.offset];
                        offset = 0;

                        if (dom_isEmpty(node)) {
                            return null;
                        }
                    } else {
                        node = point.node;
                        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;

                        if (dom_isEmpty(node)) {
                            return null;
                        }
                    }

                    return {
                        node: node,
                        offset: offset
                    };
                }
                /**
                 * returns whether pointA and pointB is same or not.
                 *
                 * @param {BoundaryPoint} pointA
                 * @param {BoundaryPoint} pointB
                 * @return {Boolean}
                 */


                function isSamePoint(pointA, pointB) {
                    return pointA.node === pointB.node && pointA.offset === pointB.offset;
                }
                /**
                 * returns whether point is visible (can set cursor) or not.
                 *
                 * @param {BoundaryPoint} point
                 * @return {Boolean}
                 */


                function isVisiblePoint(point) {
                    if (isText(point.node) || !hasChildren(point.node) || dom_isEmpty(point.node)) {
                        return true;
                    }

                    var leftNode = point.node.childNodes[point.offset - 1];
                    var rightNode = point.node.childNodes[point.offset];

                    if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
                        return true;
                    }

                    return false;
                }
                /**
                 * @method prevPointUtil
                 *
                 * @param {BoundaryPoint} point
                 * @param {Function} pred
                 * @return {BoundaryPoint}
                 */


                function prevPointUntil(point, pred) {
                    while (point) {
                        if (pred(point)) {
                            return point;
                        }

                        point = dom_prevPoint(point);
                    }

                    return null;
                }
                /**
                 * @method nextPointUntil
                 *
                 * @param {BoundaryPoint} point
                 * @param {Function} pred
                 * @return {BoundaryPoint}
                 */


                function nextPointUntil(point, pred) {
                    while (point) {
                        if (pred(point)) {
                            return point;
                        }

                        point = dom_nextPoint(point);
                    }

                    return null;
                }
                /**
                 * returns whether point has character or not.
                 *
                 * @param {Point} point
                 * @return {Boolean}
                 */


                function isCharPoint(point) {
                    if (!isText(point.node)) {
                        return false;
                    }

                    var ch = point.node.nodeValue.charAt(point.offset - 1);
                    return ch && ch !== ' ' && ch !== NBSP_CHAR;
                }
                /**
                 * returns whether point has space or not.
                 *
                 * @param {Point} point
                 * @return {Boolean}
                 */


                function isSpacePoint(point) {
                    if (!isText(point.node)) {
                        return false;
                    }

                    var ch = point.node.nodeValue.charAt(point.offset - 1);
                    return ch === ' ' || ch === NBSP_CHAR;
                }
                /**
                 * @method walkPoint
                 *
                 * @param {BoundaryPoint} startPoint
                 * @param {BoundaryPoint} endPoint
                 * @param {Function} handler
                 * @param {Boolean} isSkipInnerOffset
                 */


                function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
                    var point = startPoint;

                    while (point) {
                        handler(point);

                        if (isSamePoint(point, endPoint)) {
                            break;
                        }

                        var isSkipOffset = isSkipInnerOffset && startPoint.node !== point.node && endPoint.node !== point.node;
                        point = nextPointWithEmptyNode(point, isSkipOffset);
                    }
                }
                /**
                 * @method makeOffsetPath
                 *
                 * return offsetPath(array of offset) from ancestor
                 *
                 * @param {Node} ancestor - ancestor node
                 * @param {Node} node
                 */


                function makeOffsetPath(ancestor, node) {
                    var ancestors = listAncestor(node, func.eq(ancestor));
                    return ancestors.map(dom_position).reverse();
                }
                /**
                 * @method fromOffsetPath
                 *
                 * return element from offsetPath(array of offset)
                 *
                 * @param {Node} ancestor - ancestor node
                 * @param {array} offsets - offsetPath
                 */


                function fromOffsetPath(ancestor, offsets) {
                    var current = ancestor;

                    for (var i = 0, len = offsets.length; i < len; i++) {
                        if (current.childNodes.length <= offsets[i]) {
                            current = current.childNodes[current.childNodes.length - 1];
                        } else {
                            current = current.childNodes[offsets[i]];
                        }
                    }

                    return current;
                }
                /**
                 * @method splitNode
                 *
                 * split element or #text
                 *
                 * @param {BoundaryPoint} point
                 * @param {Object} [options]
                 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
                 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
                 * @param {Boolean} [options.isDiscardEmptySplits] - default: false
                 * @return {Node} right node of boundaryPoint
                 */


                function splitNode(point, options) {
                    var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
                    var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
                    var isDiscardEmptySplits = options && options.isDiscardEmptySplits;

                    if (isDiscardEmptySplits) {
                        isSkipPaddingBlankHTML = true;
                    } // edge case


                    if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
                        if (isLeftEdgePoint(point)) {
                            return point.node;
                        } else if (isRightEdgePoint(point)) {
                            return point.node.nextSibling;
                        }
                    } // split #text


                    if (isText(point.node)) {
                        return point.node.splitText(point.offset);
                    } else {
                        var childNode = point.node.childNodes[point.offset];
                        var clone = insertAfter(point.node.cloneNode(false), point.node);
                        appendChildNodes(clone, listNext(childNode));

                        if (!isSkipPaddingBlankHTML) {
                            paddingBlankHTML(point.node);
                            paddingBlankHTML(clone);
                        }

                        if (isDiscardEmptySplits) {
                            if (dom_isEmpty(point.node)) {
                                remove(point.node);
                            }

                            if (dom_isEmpty(clone)) {
                                remove(clone);
                                return point.node.nextSibling;
                            }
                        }

                        return clone;
                    }
                }
                /**
                 * @method splitTree
                 *
                 * split tree by point
                 *
                 * @param {Node} root - split root
                 * @param {BoundaryPoint} point
                 * @param {Object} [options]
                 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
                 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
                 * @return {Node} right node of boundaryPoint
                 */


                function splitTree(root, point, options) {
                    // ex) [#text, <span>, <p>]
                    var ancestors = listAncestor(point.node, func.eq(root));

                    if (!ancestors.length) {
                        return null;
                    } else if (ancestors.length === 1) {
                        return splitNode(point, options);
                    }

                    return ancestors.reduce(function(node, parent) {
                        if (node === point.node) {
                            node = splitNode(point, options);
                        }

                        return splitNode({
                            node: parent,
                            offset: node ? dom_position(node) : nodeLength(parent)
                        }, options);
                    });
                }
                /**
                 * split point
                 *
                 * @param {Point} point
                 * @param {Boolean} isInline
                 * @return {Object}
                 */


                function splitPoint(point, isInline) {
                    // find splitRoot, container
                    //  - inline: splitRoot is a child of paragraph
                    //  - block: splitRoot is a child of bodyContainer
                    var pred = isInline ? isPara : isBodyContainer;
                    var ancestors = listAncestor(point.node, pred);
                    var topAncestor = lists.last(ancestors) || point.node;
                    var splitRoot, container;

                    if (pred(topAncestor)) {
                        splitRoot = ancestors[ancestors.length - 2];
                        container = topAncestor;
                    } else {
                        splitRoot = topAncestor;
                        container = splitRoot.parentNode;
                    } // if splitRoot is exists, split with splitTree


                    var pivot = splitRoot && splitTree(splitRoot, point, {
                        isSkipPaddingBlankHTML: isInline,
                        isNotSplitEdgePoint: isInline
                    }); // if container is point.node, find pivot with point.offset

                    if (!pivot && container === point.node) {
                        pivot = point.node.childNodes[point.offset];
                    }

                    return {
                        rightNode: pivot,
                        container: container
                    };
                }

                function dom_create(nodeName) {
                    return document.createElement(nodeName);
                }

                function createText(text) {
                    return document.createTextNode(text);
                }
                /**
                 * @method remove
                 *
                 * remove node, (isRemoveChild: remove child or not)
                 *
                 * @param {Node} node
                 * @param {Boolean} isRemoveChild
                 */


                function remove(node, isRemoveChild) {
                    if (!node || !node.parentNode) {
                        return;
                    }

                    if (node.removeNode) {
                        return node.removeNode(isRemoveChild);
                    }

                    var parent = node.parentNode;

                    if (!isRemoveChild) {
                        var nodes = [];

                        for (var i = 0, len = node.childNodes.length; i < len; i++) {
                            nodes.push(node.childNodes[i]);
                        }

                        for (var _i = 0, _len = nodes.length; _i < _len; _i++) {
                            parent.insertBefore(nodes[_i], node);
                        }
                    }

                    parent.removeChild(node);
                }
                /**
                 * @method removeWhile
                 *
                 * @param {Node} node
                 * @param {Function} pred
                 */


                function removeWhile(node, pred) {
                    while (node) {
                        if (isEditable(node) || !pred(node)) {
                            break;
                        }

                        var parent = node.parentNode;
                        remove(node);
                        node = parent;
                    }
                }
                /**
                 * @method replace
                 *
                 * replace node with provided nodeName
                 *
                 * @param {Node} node
                 * @param {String} nodeName
                 * @return {Node} - new node
                 */


                function dom_replace(node, nodeName) {
                    if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
                        return node;
                    }

                    var newNode = dom_create(nodeName);

                    if (node.style.cssText) {
                        newNode.style.cssText = node.style.cssText;
                    }

                    appendChildNodes(newNode, lists.from(node.childNodes));
                    insertAfter(newNode, node);
                    remove(node);
                    return newNode;
                }

                var isTextarea = makePredByNodeName('TEXTAREA');
                /**
                 * @param {jQuery} $node
                 * @param {Boolean} [stripLinebreaks] - default: false
                 */

                function dom_value($node, stripLinebreaks) {
                    var val = isTextarea($node[0]) ? $node.val() : $node.html();

                    if (stripLinebreaks) {
                        return val.replace(/[\n\r]/g, '');
                    }

                    return val;
                }
                /**
                 * @method html
                 *
                 * get the HTML contents of node
                 *
                 * @param {jQuery} $node
                 * @param {Boolean} [isNewlineOnBlock]
                 */


                function dom_html($node, isNewlineOnBlock) {
                    var markup = dom_value($node);

                    if (isNewlineOnBlock) {
                        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                        markup = markup.replace(regexTag, function(match, endSlash, name) {
                            name = name.toUpperCase();
                            var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) && !!endSlash;
                            var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
                            return match + (isEndOfInlineContainer || isBlockNode ? '\n' : '');
                        });
                        markup = markup.trim();
                    }

                    return markup;
                }

                function posFromPlaceholder(placeholder) {
                    var $placeholder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(placeholder);
                    var pos = $placeholder.offset();
                    var height = $placeholder.outerHeight(true); // include margin

                    return {
                        left: pos.left,
                        top: pos.top + height
                    };
                }

                function attachEvents($node, events) {
                    Object.keys(events).forEach(function(key) {
                        $node.on(key, events[key]);
                    });
                }

                function detachEvents($node, events) {
                    Object.keys(events).forEach(function(key) {
                        $node.off(key, events[key]);
                    });
                }
                /**
                 * @method isCustomStyleTag
                 *
                 * assert if a node contains a "note-styletag" class,
                 * which implies that's a custom-made style tag node
                 *
                 * @param {Node} an HTML DOM node
                 */


                function isCustomStyleTag(node) {
                    return node && !isText(node) && lists.contains(node.classList, 'note-styletag');
                }

                /* harmony default export */
                var dom = ({
                    /** @property {String} NBSP_CHAR */
                    NBSP_CHAR: NBSP_CHAR,

                    /** @property {String} ZERO_WIDTH_NBSP_CHAR */
                    ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,

                    /** @property {String} blank */
                    blank: blankHTML,

                    /** @property {String} emptyPara */
                    emptyPara: "<p>".concat(blankHTML, "</p>"),
                    makePredByNodeName: makePredByNodeName,
                    isEditable: isEditable,
                    isControlSizing: isControlSizing,
                    isText: isText,
                    isElement: isElement,
                    isVoid: isVoid,
                    isPara: isPara,
                    isPurePara: isPurePara,
                    isHeading: isHeading,
                    isInline: dom_isInline,
                    isBlock: func.not(dom_isInline),
                    isBodyInline: isBodyInline,
                    isBody: isBody,
                    isParaInline: isParaInline,
                    isPre: isPre,
                    isList: isList,
                    isTable: isTable,
                    isData: isData,
                    isCell: dom_isCell,
                    isBlockquote: isBlockquote,
                    isBodyContainer: isBodyContainer,
                    isAnchor: isAnchor,
                    isDiv: makePredByNodeName('DIV'),
                    isLi: isLi,
                    isBR: makePredByNodeName('BR'),
                    isSpan: makePredByNodeName('SPAN'),
                    isB: makePredByNodeName('B'),
                    isU: makePredByNodeName('U'),
                    isS: makePredByNodeName('S'),
                    isI: makePredByNodeName('I'),
                    isImg: makePredByNodeName('IMG'),
                    isTextarea: isTextarea,
                    deepestChildIsEmpty: deepestChildIsEmpty,
                    isEmpty: dom_isEmpty,
                    isEmptyAnchor: func.and(isAnchor, dom_isEmpty),
                    isClosestSibling: isClosestSibling,
                    withClosestSiblings: withClosestSiblings,
                    nodeLength: nodeLength,
                    isLeftEdgePoint: isLeftEdgePoint,
                    isRightEdgePoint: isRightEdgePoint,
                    isEdgePoint: isEdgePoint,
                    isLeftEdgeOf: dom_isLeftEdgeOf,
                    isRightEdgeOf: isRightEdgeOf,
                    isLeftEdgePointOf: isLeftEdgePointOf,
                    isRightEdgePointOf: isRightEdgePointOf,
                    prevPoint: dom_prevPoint,
                    nextPoint: dom_nextPoint,
                    nextPointWithEmptyNode: nextPointWithEmptyNode,
                    isSamePoint: isSamePoint,
                    isVisiblePoint: isVisiblePoint,
                    prevPointUntil: prevPointUntil,
                    nextPointUntil: nextPointUntil,
                    isCharPoint: isCharPoint,
                    isSpacePoint: isSpacePoint,
                    walkPoint: walkPoint,
                    ancestor: dom_ancestor,
                    singleChildAncestor: singleChildAncestor,
                    listAncestor: listAncestor,
                    lastAncestor: lastAncestor,
                    listNext: listNext,
                    listPrev: listPrev,
                    listDescendant: listDescendant,
                    commonAncestor: dom_commonAncestor,
                    wrap: wrap,
                    insertAfter: insertAfter,
                    appendChildNodes: appendChildNodes,
                    position: dom_position,
                    hasChildren: hasChildren,
                    makeOffsetPath: makeOffsetPath,
                    fromOffsetPath: fromOffsetPath,
                    splitTree: splitTree,
                    splitPoint: splitPoint,
                    create: dom_create,
                    createText: createText,
                    remove: remove,
                    removeWhile: removeWhile,
                    replace: dom_replace,
                    html: dom_html,
                    value: dom_value,
                    posFromPlaceholder: posFromPlaceholder,
                    attachEvents: attachEvents,
                    detachEvents: detachEvents,
                    isCustomStyleTag: isCustomStyleTag
                });
                // CONCATENATED MODULE: ./src/js/base/Context.js
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






                var Context_Context =
                    /*#__PURE__*/
                    function() {
                        /**
                         * @param {jQuery} $note
                         * @param {Object} options
                         */
                        function Context($note, options) {
                            _classCallCheck(this, Context);

                            this.$note = $note;
                            this.memos = {};
                            this.modules = {};
                            this.layoutInfo = {};
                            this.options = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, options); // init ui with options

                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui_template(this.options);
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.initialize();
                        }
                        /**
                         * create layout and initialize modules and other resources
                         */


                        _createClass(Context, [{
                            key: "initialize",
                            value: function initialize() {
                                    this.layoutInfo = this.ui.createLayout(this.$note);

                                    this._initialize();

                                    this.$note.hide();
                                    return this;
                                }
                                /**
                                 * destroy modules and other resources and remove layout
                                 */

                        }, {
                            key: "destroy",
                            value: function destroy() {
                                    this._destroy();

                                    this.$note.removeData('summernote');
                                    this.ui.removeLayout(this.$note, this.layoutInfo);
                                }
                                /**
                                 * destory modules and other resources and initialize it again
                                 */

                        }, {
                            key: "reset",
                            value: function reset() {
                                var disabled = this.isDisabled();
                                this.code(dom.emptyPara);

                                this._destroy();

                                this._initialize();

                                if (disabled) {
                                    this.disable();
                                }
                            }
                        }, {
                            key: "_initialize",
                            value: function _initialize() {
                                var _this = this;

                                // set own id
                                this.options.id = func.uniqueId(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.now()); // set default container for tooltips, popovers, and dialogs

                                this.options.container = this.options.container || this.layoutInfo.editor; // add optional buttons

                                var buttons = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, this.options.buttons);
                                Object.keys(buttons).forEach(function(key) {
                                    _this.memo('button.' + key, buttons[key]);
                                });
                                var modules = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, this.options.modules, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.plugins || {}); // add and initialize modules

                                Object.keys(modules).forEach(function(key) {
                                    _this.module(key, modules[key], true);
                                });
                                Object.keys(this.modules).forEach(function(key) {
                                    _this.initializeModule(key);
                                });
                            }
                        }, {
                            key: "_destroy",
                            value: function _destroy() {
                                var _this2 = this;

                                // destroy modules with reversed order
                                Object.keys(this.modules).reverse().forEach(function(key) {
                                    _this2.removeModule(key);
                                });
                                Object.keys(this.memos).forEach(function(key) {
                                    _this2.removeMemo(key);
                                }); // trigger custom onDestroy callback

                                this.triggerEvent('destroy', this);
                            }
                        }, {
                            key: "code",
                            value: function code(html) {
                                var isActivated = this.invoke('codeview.isActivated');

                                if (html === undefined) {
                                    this.invoke('codeview.sync');
                                    return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
                                } else {
                                    if (isActivated) {
                                        this.layoutInfo.codable.val(html);
                                    } else {
                                        this.layoutInfo.editable.html(html);
                                    }

                                    this.$note.val(html);
                                    this.triggerEvent('change', html, this.layoutInfo.editable);
                                }
                            }
                        }, {
                            key: "isDisabled",
                            value: function isDisabled() {
                                return this.layoutInfo.editable.attr('contenteditable') === 'false';
                            }
                        }, {
                            key: "enable",
                            value: function enable() {
                                this.layoutInfo.editable.attr('contenteditable', true);
                                this.invoke('toolbar.activate', true);
                                this.triggerEvent('disable', false);
                                this.options.editing = true;
                            }
                        }, {
                            key: "disable",
                            value: function disable() {
                                // close codeview if codeview is opend
                                if (this.invoke('codeview.isActivated')) {
                                    this.invoke('codeview.deactivate');
                                }

                                this.layoutInfo.editable.attr('contenteditable', false);
                                this.options.editing = false;
                                this.invoke('toolbar.deactivate', true);
                                this.triggerEvent('disable', true);
                            }
                        }, {
                            key: "triggerEvent",
                            value: function triggerEvent() {
                                var namespace = lists.head(arguments);
                                var args = lists.tail(lists.from(arguments));
                                var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];

                                if (callback) {
                                    callback.apply(this.$note[0], args);
                                }

                                this.$note.trigger('summernote.' + namespace, args);
                            }
                        }, {
                            key: "initializeModule",
                            value: function initializeModule(key) {
                                var module = this.modules[key];
                                module.shouldInitialize = module.shouldInitialize || func.ok;

                                if (!module.shouldInitialize()) {
                                    return;
                                } // initialize module


                                if (module.initialize) {
                                    module.initialize();
                                } // attach events


                                if (module.events) {
                                    dom.attachEvents(this.$note, module.events);
                                }
                            }
                        }, {
                            key: "module",
                            value: function module(key, ModuleClass, withoutIntialize) {
                                if (arguments.length === 1) {
                                    return this.modules[key];
                                }

                                this.modules[key] = new ModuleClass(this);

                                if (!withoutIntialize) {
                                    this.initializeModule(key);
                                }
                            }
                        }, {
                            key: "removeModule",
                            value: function removeModule(key) {
                                var module = this.modules[key];

                                if (module.shouldInitialize()) {
                                    if (module.events) {
                                        dom.detachEvents(this.$note, module.events);
                                    }

                                    if (module.destroy) {
                                        module.destroy();
                                    }
                                }

                                delete this.modules[key];
                            }
                        }, {
                            key: "memo",
                            value: function memo(key, obj) {
                                if (arguments.length === 1) {
                                    return this.memos[key];
                                }

                                this.memos[key] = obj;
                            }
                        }, {
                            key: "removeMemo",
                            value: function removeMemo(key) {
                                    if (this.memos[key] && this.memos[key].destroy) {
                                        this.memos[key].destroy();
                                    }

                                    delete this.memos[key];
                                }
                                /**
                                 * Some buttons need to change their visual style immediately once they get pressed
                                 */

                        }, {
                            key: "createInvokeHandlerAndUpdateState",
                            value: function createInvokeHandlerAndUpdateState(namespace, value) {
                                var _this3 = this;

                                return function(event) {
                                    _this3.createInvokeHandler(namespace, value)(event);

                                    _this3.invoke('buttons.updateCurrentStyle');
                                };
                            }
                        }, {
                            key: "createInvokeHandler",
                            value: function createInvokeHandler(namespace, value) {
                                var _this4 = this;

                                return function(event) {
                                    event.preventDefault();
                                    var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target);

                                    _this4.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
                                };
                            }
                        }, {
                            key: "invoke",
                            value: function invoke() {
                                var namespace = lists.head(arguments);
                                var args = lists.tail(lists.from(arguments));
                                var splits = namespace.split('.');
                                var hasSeparator = splits.length > 1;
                                var moduleName = hasSeparator && lists.head(splits);
                                var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
                                var module = this.modules[moduleName || 'editor'];

                                if (!moduleName && this[methodName]) {
                                    return this[methodName].apply(this, args);
                                } else if (module && module[methodName] && module.shouldInitialize()) {
                                    return module[methodName].apply(module, args);
                                }
                            }
                        }]);

                        return Context;
                    }();


                // CONCATENATED MODULE: ./src/js/summernote.js




                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.fn.extend({
                    /**
                     * Summernote API
                     *
                     * @param {Object|String}
                     * @return {this}
                     */
                    summernote: function summernote() {
                        var type = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.type(lists.head(arguments));
                        var isExternalAPICalled = type === 'string';
                        var hasInitOptions = type === 'object';
                        var options = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.options, hasInitOptions ? lists.head(arguments) : {}); // Update options

                        options.langInfo = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang['en-US'], external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang[options.lang]);
                        options.icons = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.options.icons, options.icons);
                        options.tooltip = options.tooltip === 'auto' ? !env.isSupportTouch : options.tooltip;
                        this.each(function(idx, note) {
                            var $note = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(note);

                            if (!$note.data('summernote')) {
                                var context = new Context_Context($note, options);
                                $note.data('summernote', context);
                                $note.data('summernote').triggerEvent('init', context.layoutInfo);
                            }
                        });
                        var $note = this.first();

                        if ($note.length) {
                            var context = $note.data('summernote');

                            if (isExternalAPICalled) {
                                return context.invoke.apply(context, lists.from(arguments));
                            } else if (options.focus) {
                                context.invoke('editor.focus');
                            }
                        }

                        return this;
                    }
                });
                // CONCATENATED MODULE: ./src/js/base/core/range.js
                function range_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function range_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function range_createClass(Constructor, protoProps, staticProps) { if (protoProps) range_defineProperties(Constructor.prototype, protoProps); if (staticProps) range_defineProperties(Constructor, staticProps); return Constructor; }






                /**
                 * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
                 *
                 * @param {TextRange} textRange
                 * @param {Boolean} isStart
                 * @return {BoundaryPoint}
                 *
                 * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
                 */

                function textRangeToPoint(textRange, isStart) {
                    var container = textRange.parentElement();
                    var offset;
                    var tester = document.body.createTextRange();
                    var prevContainer;
                    var childNodes = lists.from(container.childNodes);

                    for (offset = 0; offset < childNodes.length; offset++) {
                        if (dom.isText(childNodes[offset])) {
                            continue;
                        }

                        tester.moveToElementText(childNodes[offset]);

                        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
                            break;
                        }

                        prevContainer = childNodes[offset];
                    }

                    if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
                        var textRangeStart = document.body.createTextRange();
                        var curTextNode = null;
                        textRangeStart.moveToElementText(prevContainer || container);
                        textRangeStart.collapse(!prevContainer);
                        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
                        var pointTester = textRange.duplicate();
                        pointTester.setEndPoint('StartToStart', textRangeStart);
                        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;

                        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
                            textCount -= curTextNode.nodeValue.length;
                            curTextNode = curTextNode.nextSibling;
                        } // [workaround] enforce IE to re-reference curTextNode, hack


                        var dummy = curTextNode.nodeValue; // eslint-disable-line

                        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) && textCount === curTextNode.nodeValue.length) {
                            textCount -= curTextNode.nodeValue.length;
                            curTextNode = curTextNode.nextSibling;
                        }

                        container = curTextNode;
                        offset = textCount;
                    }

                    return {
                        cont: container,
                        offset: offset
                    };
                }

                /**
                 * returns next boundaryPoint with empty node 
                 *
                 * @param {BoundaryPoint} point
                 * @param {Boolean} isSkipInnerOffset
                 * @return {BoundaryPoint}
                 */
                function nextPointWithEmptyNode(point, isSkipInnerOffset) {
                    let node, offset;

                    // if node is empty string node, return current node's sibling.
                    if (dom_isEmpty(point.node)) {
                        node = point.node.nextSibling;
                        offset = 0;

                        return {
                            node: node,
                            offset: offset,
                        };
                    }

                    if (nodeLength(point.node) === point.offset) {
                        if (isEditable(point.node)) {
                            return null;
                        }

                        node = point.node.parentNode;
                        offset = dom_position(point.node) + 1;

                        // if next node is editable ,  return current node's sibling node.
                        if (isEditable(node)) {
                            node = point.node.nextSibling;
                            offset = 0;
                        }

                    } else if (hasChildren(point.node)) {
                        node = point.node.childNodes[point.offset];
                        offset = 0;
                        if (dom_isEmpty(node)) {
                            return null;
                        }
                    } else {
                        node = point.node;
                        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;

                        if (dom_isEmpty(node)) {
                            return null;
                        }
                    }

                    return {
                        node: node,
                        offset: offset,
                    };
                }


                /**
                 * return TextRange from boundary point (inspired by google closure-library)
                 * @param {BoundaryPoint} point
                 * @return {TextRange}
                 */


                function pointToTextRange(point) {
                    var textRangeInfo = function textRangeInfo(container, offset) {
                        var node, isCollapseToStart;

                        if (dom.isText(container)) {
                            var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
                            var prevContainer = lists.last(prevTextNodes).previousSibling;
                            node = prevContainer || container.parentNode;
                            offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
                            isCollapseToStart = !prevContainer;
                        } else {
                            node = container.childNodes[offset] || container;

                            if (dom.isText(node)) {
                                return textRangeInfo(node, 0);
                            }

                            offset = 0;
                            isCollapseToStart = false;
                        }

                        return {
                            node: node,
                            collapseToStart: isCollapseToStart,
                            offset: offset
                        };
                    };

                    var textRange = document.body.createTextRange();
                    var info = textRangeInfo(point.node, point.offset);
                    textRange.moveToElementText(info.node);
                    textRange.collapse(info.collapseToStart);
                    textRange.moveStart('character', info.offset);
                    return textRange;
                }
                /**
                 * Wrapped Range
                 *
                 * @constructor
                 * @param {Node} sc - start container
                 * @param {Number} so - start offset
                 * @param {Node} ec - end container
                 * @param {Number} eo - end offset
                 */


                var range_WrappedRange =
                    /*#__PURE__*/
                    function() {
                        function WrappedRange(sc, so, ec, eo) {
                            range_classCallCheck(this, WrappedRange);

                            this.sc = sc;
                            this.so = so;
                            this.ec = ec;
                            this.eo = eo; // isOnEditable: judge whether range is on editable or not

                            this.isOnEditable = this.makeIsOn(dom.isEditable); // isOnList: judge whether range is on list node or not

                            this.isOnList = this.makeIsOn(dom.isList); // isOnAnchor: judge whether range is on anchor node or not

                            this.isOnAnchor = this.makeIsOn(dom.isAnchor); // isOnCell: judge whether range is on cell node or not

                            this.isOnCell = this.makeIsOn(dom.isCell); // isOnData: judge whether range is on data node or not

                            this.isOnData = this.makeIsOn(dom.isData);
                        } // nativeRange: get nativeRange from sc, so, ec, eo


                        range_createClass(WrappedRange, [{
                            key: "nativeRange",
                            value: function nativeRange() {
                                if (env.isW3CRangeSupport) {
                                    var w3cRange = document.createRange();
                                    w3cRange.setStart(this.sc, this.sc.data && this.so > this.sc.data.length ? 0 : this.so);
                                    w3cRange.setEnd(this.ec, this.sc.data ? Math.min(this.eo, this.sc.data.length) : this.eo);
                                    return w3cRange;
                                } else {
                                    var textRange = pointToTextRange({
                                        node: this.sc,
                                        offset: this.so
                                    });
                                    textRange.setEndPoint('EndToEnd', pointToTextRange({
                                        node: this.ec,
                                        offset: this.eo
                                    }));
                                    return textRange;
                                }
                            }
                        }, {
                            key: "getPoints",
                            value: function getPoints() {
                                return {
                                    sc: this.sc,
                                    so: this.so,
                                    ec: this.ec,
                                    eo: this.eo
                                };
                            }
                        }, {
                            key: "getStartPoint",
                            value: function getStartPoint() {
                                return {
                                    node: this.sc,
                                    offset: this.so
                                };
                            }
                        }, {
                            key: "getEndPoint",
                            value: function getEndPoint() {
                                    return {
                                        node: this.ec,
                                        offset: this.eo
                                    };
                                }
                                /**
                                 * select update visible range
                                 */

                        }, {
                            key: "select",
                            value: function select() {
                                    var nativeRng = this.nativeRange();

                                    if (env.isW3CRangeSupport) {
                                        var selection = document.getSelection();

                                        if (selection.rangeCount > 0) {
                                            selection.removeAllRanges();
                                        }

                                        selection.addRange(nativeRng);
                                    } else {
                                        nativeRng.select();
                                    }

                                    return this;
                                }
                                /**
                                 * Moves the scrollbar to start container(sc) of current range
                                 *
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "scrollIntoView",
                            value: function scrollIntoView(container) {
                                    var height = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(container).height();

                                    if (container.scrollTop + height < this.sc.offsetTop) {
                                        container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
                                    }

                                    return this;
                                }
                                /**
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "normalize",
                            value: function normalize() {
                                    /**
                                     * @param {BoundaryPoint} point
                                     * @param {Boolean} isLeftToRight - true: prefer to choose right node
                                     *                                - false: prefer to choose left node
                                     * @return {BoundaryPoint}
                                     */
                                    var getVisiblePoint = function getVisiblePoint(point, isLeftToRight) {
                                        if (!point) {
                                            return point;
                                        } // Just use the given point [XXX:Adhoc]
                                        //  - case 01. if the point is on the middle of the node
                                        //  - case 02. if the point is on the right edge and prefer to choose left node
                                        //  - case 03. if the point is on the left edge and prefer to choose right node
                                        //  - case 04. if the point is on the right edge and prefer to choose right node but the node is void
                                        //  - case 05. if the point is on the left edge and prefer to choose left node but the node is void
                                        //  - case 06. if the point is on the block node and there is no children


                                        if (dom.isVisiblePoint(point)) {
                                            if (!dom.isEdgePoint(point) || dom.isRightEdgePoint(point) && !isLeftToRight || dom.isLeftEdgePoint(point) && isLeftToRight || dom.isRightEdgePoint(point) && isLeftToRight && dom.isVoid(point.node.nextSibling) || dom.isLeftEdgePoint(point) && !isLeftToRight && dom.isVoid(point.node.previousSibling) || dom.isBlock(point.node) && dom.isEmpty(point.node)) {
                                                return point;
                                            }
                                        } // point on block's edge


                                        var block = dom.ancestor(point.node, dom.isBlock);
                                        var hasRightNode = false;

                                        if (!hasRightNode) {
                                            var prevPoint = dom.prevPoint(point) || {
                                                node: null
                                            };
                                            hasRightNode = (dom.isLeftEdgePointOf(point, block) || dom.isVoid(prevPoint.node)) && !isLeftToRight;
                                        }

                                        var hasLeftNode = false;

                                        if (!hasLeftNode) {
                                            var _nextPoint = dom.nextPoint(point) || {
                                                node: null
                                            };

                                            hasLeftNode = (dom.isRightEdgePointOf(point, block) || dom.isVoid(_nextPoint.node)) && isLeftToRight;
                                        }

                                        if (hasRightNode || hasLeftNode) {
                                            // returns point already on visible point
                                            if (dom.isVisiblePoint(point)) {
                                                return point;
                                            } // reverse direction


                                            isLeftToRight = !isLeftToRight;
                                        }

                                        var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
                                        return nextPoint || point;
                                    };

                                    var endPoint = getVisiblePoint(this.getEndPoint(), false);
                                    var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
                                    return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
                                }
                                /**
                                 * returns matched nodes on range
                                 *
                                 * @param {Function} [pred] - predicate function
                                 * @param {Object} [options]
                                 * @param {Boolean} [options.includeAncestor]
                                 * @param {Boolean} [options.fullyContains]
                                 * @return {Node[]}
                                 */

                        }, {
                            key: "nodes",
                            value: function nodes(pred, options) {
                                    pred = pred || func.ok;
                                    var includeAncestor = options && options.includeAncestor;
                                    var fullyContains = options && options.fullyContains; // TODO compare points and sort

                                    var startPoint = this.getStartPoint();
                                    var endPoint = this.getEndPoint();
                                    var nodes = [];
                                    var leftEdgeNodes = [];
                                    dom.walkPoint(startPoint, endPoint, function(point) {
                                        if (dom.isEditable(point.node)) {
                                            return;
                                        }

                                        var node;

                                        if (fullyContains) {
                                            if (dom.isLeftEdgePoint(point)) {
                                                leftEdgeNodes.push(point.node);
                                            }

                                            if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
                                                node = point.node;
                                            }
                                        } else if (includeAncestor) {
                                            node = dom.ancestor(point.node, pred);
                                        } else {
                                            node = point.node;
                                        }

                                        if (node && pred(node)) {
                                            nodes.push(node);
                                        }
                                    }, true);
                                    return lists.unique(nodes);
                                }
                                /**
                                 * returns commonAncestor of range
                                 * @return {Element} - commonAncestor
                                 */

                        }, {
                            key: "commonAncestor",
                            value: function commonAncestor() {
                                    return dom.commonAncestor(this.sc, this.ec);
                                }
                                /**
                                 * returns expanded range by pred
                                 *
                                 * @param {Function} pred - predicate function
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "expand",
                            value: function expand(pred) {
                                    var startAncestor = dom.ancestor(this.sc, pred);
                                    var endAncestor = dom.ancestor(this.ec, pred);

                                    if (!startAncestor && !endAncestor) {
                                        return new WrappedRange(this.sc, this.so, this.ec, this.eo);
                                    }

                                    var boundaryPoints = this.getPoints();

                                    if (startAncestor) {
                                        boundaryPoints.sc = startAncestor;
                                        boundaryPoints.so = 0;
                                    }

                                    if (endAncestor) {
                                        boundaryPoints.ec = endAncestor;
                                        boundaryPoints.eo = dom.nodeLength(endAncestor);
                                    }

                                    return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
                                }
                                /**
                                 * @param {Boolean} isCollapseToStart
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "collapse",
                            value: function collapse(isCollapseToStart) {
                                    if (isCollapseToStart) {
                                        return new WrappedRange(this.sc, this.so, this.sc, this.so);
                                    } else {
                                        return new WrappedRange(this.ec, this.eo, this.ec, this.eo);
                                    }
                                }
                                /**
                                 * splitText on range
                                 */

                        }, {
                            key: "splitText",
                            value: function splitText() {
                                    var isSameContainer = this.sc === this.ec;
                                    var boundaryPoints = this.getPoints();

                                    if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
                                        this.ec.splitText(this.eo);
                                    }

                                    if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
                                        boundaryPoints.sc = this.sc.splitText(this.so);
                                        boundaryPoints.so = 0;

                                        if (isSameContainer) {
                                            boundaryPoints.ec = boundaryPoints.sc;
                                            boundaryPoints.eo = this.eo - this.so;
                                        }
                                    }

                                    return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
                                }
                                /**
                                 * delete contents on range
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "deleteContents",
                            value: function deleteContents() {
                                    if (this.isCollapsed()) {
                                        return this;
                                    }

                                    var rng = this.splitText();
                                    var nodes = rng.nodes(null, {
                                        fullyContains: true
                                    }); // find new cursor point

                                    var point = dom.prevPointUntil(rng.getStartPoint(), function(point) {
                                        return !lists.contains(nodes, point.node);
                                    });
                                    var emptyParents = [];
                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(nodes, function(idx, node) {
                                        // find empty parents
                                        var parent = node.parentNode;

                                        if (point.node !== parent && dom.nodeLength(parent) === 1) {
                                            emptyParents.push(parent);
                                        }

                                        dom.remove(node, false);
                                    }); // remove empty parents

                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(emptyParents, function(idx, node) {
                                        dom.remove(node, false);
                                    });
                                    return new WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
                                }
                                /**
                                 * makeIsOn: return isOn(pred) function
                                 */

                        }, {
                            key: "makeIsOn",
                            value: function makeIsOn(pred) {
                                    return function() {
                                        var ancestor = dom.ancestor(this.sc, pred);
                                        return !!ancestor && ancestor === dom.ancestor(this.ec, pred);
                                    };
                                }
                                /**
                                 * @param {Function} pred
                                 * @return {Boolean}
                                 */

                        }, {
                            key: "isLeftEdgeOf",
                            value: function isLeftEdgeOf(pred) {
                                    if (!dom.isLeftEdgePoint(this.getStartPoint())) {
                                        return false;
                                    }

                                    var node = dom.ancestor(this.sc, pred);
                                    return node && dom.isLeftEdgeOf(this.sc, node);
                                }
                                /**
                                 * returns whether range was collapsed or not
                                 */

                        }, {
                            key: "isCollapsed",
                            value: function isCollapsed() {
                                    return this.sc === this.ec && this.so === this.eo;
                                }
                                /**
                                 * wrap inline nodes which children of body with paragraph
                                 *
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "wrapBodyInlineWithPara",
                            value: function wrapBodyInlineWithPara() {
                                    if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
                                        this.sc.innerHTML = dom.emptyPara;
                                        return new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
                                    }
                                    /**
                                     * [workaround] firefox often create range on not visible point. so normalize here.
                                     *  - firefox: |<p>text</p>|
                                     *  - chrome: <p>|text|</p>
                                     */


                                    var rng = this.normalize();

                                    if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
                                        return rng;
                                    } // find inline top ancestor


                                    var topAncestor;

                                    if (dom.isInline(rng.sc)) {
                                        var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
                                        topAncestor = lists.last(ancestors);

                                        if (!dom.isInline(topAncestor)) {
                                            topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
                                        }
                                    } else {
                                        topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
                                    }

                                    if (topAncestor) {
                                        // siblings not in paragraph
                                        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
                                        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline)); // wrap with paragraph

                                        if (inlineSiblings.length) {
                                            var para = dom.wrap(lists.head(inlineSiblings), 'p');
                                            dom.appendChildNodes(para, lists.tail(inlineSiblings));
                                        }
                                    }

                                    return this.normalize();
                                }
                                /**
                                 * insert node at current cursor
                                 *
                                 * @param {Node} node
                                 * @return {Node}
                                 */

                        }, {
                            key: "insertNode",
                            value: function insertNode(node) {
                                    var rng = this;

                                    if (dom.isText(node) || dom.isInline(node)) {
                                        rng = this.wrapBodyInlineWithPara().deleteContents();
                                    }

                                    var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

                                    if (info.rightNode) {
                                        info.rightNode.parentNode.insertBefore(node, info.rightNode);
                                    } else {
                                        info.container.appendChild(node);
                                    }

                                    return node;
                                }
                                /**
                                 * insert html at current cursor
                                 */

                        }, {
                            key: "pasteHTML",
                            value: function pasteHTML(markup) {
                                    markup = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.trim(markup);
                                    var contentsContainer = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div></div>').html(markup)[0];
                                    var childNodes = lists.from(contentsContainer.childNodes); // const rng = this.wrapBodyInlineWithPara().deleteContents();

                                    var rng = this;

                                    if (rng.so >= 0) {
                                        childNodes = childNodes.reverse();
                                    }

                                    childNodes = childNodes.map(function(childNode) {
                                        return rng.insertNode(childNode);
                                    });

                                    if (rng.so > 0) {
                                        childNodes = childNodes.reverse();
                                    }

                                    return childNodes;
                                }
                                /**
                                 * returns text in range
                                 *
                                 * @return {String}
                                 */

                        }, {
                            key: "toString",
                            value: function toString() {
                                    var nativeRng = this.nativeRange();
                                    return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
                                }
                                /**
                                 * returns range for word before cursor
                                 *
                                 * @param {Boolean} [findAfter] - find after cursor, default: false
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "getWordRange",
                            value: function getWordRange(findAfter) {
                                    var endPoint = this.getEndPoint();

                                    if (!dom.isCharPoint(endPoint)) {
                                        return this;
                                    }

                                    var startPoint = dom.prevPointUntil(endPoint, function(point) {
                                        return !dom.isCharPoint(point);
                                    });

                                    if (findAfter) {
                                        endPoint = dom.nextPointUntil(endPoint, function(point) {
                                            return !dom.isCharPoint(point);
                                        });
                                    }

                                    return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
                                }
                                /**
                                 * returns range for words before cursor
                                 *
                                 * @param {Boolean} [findAfter] - find after cursor, default: false
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "getWordsRange",
                            value: function getWordsRange(findAfter) {
                                    var endPoint = this.getEndPoint();

                                    var isNotTextPoint = function isNotTextPoint(point) {
                                        return !dom.isCharPoint(point) && !dom.isSpacePoint(point);
                                    };

                                    if (isNotTextPoint(endPoint)) {
                                        return this;
                                    }

                                    var startPoint = dom.prevPointUntil(endPoint, isNotTextPoint);

                                    if (findAfter) {
                                        endPoint = dom.nextPointUntil(endPoint, isNotTextPoint);
                                    }

                                    return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
                                }
                                /**
                                 * returns range for words before cursor that match with a Regex
                                 *
                                 * example:
                                 *  range: 'hi @Peter Pan'
                                 *  regex: '/@[a-z ]+/i'
                                 *  return range: '@Peter Pan'
                                 *
                                 * @param {RegExp} [regex]
                                 * @return {WrappedRange|null}
                                 */

                        }, {
                            key: "getWordsMatchRange",
                            value: function getWordsMatchRange(regex) {
                                    var endPoint = this.getEndPoint();
                                    var startPoint = dom.prevPointUntil(endPoint, function(point) {
                                        if (!dom.isCharPoint(point) && !dom.isSpacePoint(point)) {
                                            return true;
                                        }

                                        var rng = new WrappedRange(point.node, point.offset, endPoint.node, endPoint.offset);
                                        var result = regex.exec(rng.toString());
                                        return result && result.index === 0;
                                    });
                                    var rng = new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
                                    var text = rng.toString();
                                    var result = regex.exec(text);

                                    if (result && result[0].length === text.length) {
                                        return rng;
                                    } else {
                                        return null;
                                    }
                                }
                                /**
                                 * create offsetPath bookmark
                                 *
                                 * @param {Node} editable
                                 */

                        }, {
                            key: "bookmark",
                            value: function bookmark(editable) {
                                    return {
                                        s: {
                                            path: dom.makeOffsetPath(editable, this.sc),
                                            offset: this.so
                                        },
                                        e: {
                                            path: dom.makeOffsetPath(editable, this.ec),
                                            offset: this.eo
                                        }
                                    };
                                }
                                /**
                                 * create offsetPath bookmark base on paragraph
                                 *
                                 * @param {Node[]} paras
                                 */

                        }, {
                            key: "paraBookmark",
                            value: function paraBookmark(paras) {
                                    return {
                                        s: {
                                            path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
                                            offset: this.so
                                        },
                                        e: {
                                            path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
                                            offset: this.eo
                                        }
                                    };
                                }
                                /**
                                 * getClientRects
                                 * @return {Rect[]}
                                 */

                        }, {
                            key: "getClientRects",
                            value: function getClientRects() {
                                var nativeRng = this.nativeRange();
                                return nativeRng.getClientRects();
                            }
                        }]);

                        return WrappedRange;
                    }();
                /**
                 * Data structure
                 *  * BoundaryPoint: a point of dom tree
                 *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
                 *
                 * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
                 */


                /* harmony default export */
                var range = ({
                    /**
                     * create Range Object From arguments or Browser Selection
                     *
                     * @param {Node} sc - start container
                     * @param {Number} so - start offset
                     * @param {Node} ec - end container
                     * @param {Number} eo - end offset
                     * @return {WrappedRange}
                     */
                    create: function create(sc, so, ec, eo) {
                        if (arguments.length === 4) {
                            return new range_WrappedRange(sc, so, ec, eo);
                        } else if (arguments.length === 2) {
                            // collapsed
                            ec = sc;
                            eo = so;
                            return new range_WrappedRange(sc, so, ec, eo);
                        } else {
                            var wrappedRange = this.createFromSelection();

                            if (!wrappedRange && arguments.length === 1) {
                                var bodyElement = arguments[0];

                                if (dom.isEditable(bodyElement)) {
                                    bodyElement = bodyElement.lastChild;
                                }

                                return this.createFromBodyElement(bodyElement, dom.emptyPara === arguments[0].innerHTML);
                            }

                            return wrappedRange;
                        }
                    },
                    createFromBodyElement: function createFromBodyElement(bodyElement) {
                        var isCollapseToStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var wrappedRange = this.createFromNode(bodyElement);
                        return wrappedRange.collapse(isCollapseToStart);
                    },
                    createFromSelection: function createFromSelection() {
                        var sc, so, ec, eo;

                        if (env.isW3CRangeSupport) {
                            var selection = document.getSelection();

                            if (!selection || selection.rangeCount === 0) {
                                return null;
                            } else if (dom.isBody(selection.anchorNode)) {
                                // Firefox: returns entire body as range on initialization.
                                // We won't never need it.
                                return null;
                            }

                            var nativeRng = selection.getRangeAt(0);
                            sc = nativeRng.startContainer;
                            so = nativeRng.startOffset;
                            ec = nativeRng.endContainer;
                            eo = nativeRng.endOffset;
                        } else {
                            // IE8: TextRange
                            var textRange = document.selection.createRange();
                            var textRangeEnd = textRange.duplicate();
                            textRangeEnd.collapse(false);
                            var textRangeStart = textRange;
                            textRangeStart.collapse(true);
                            var startPoint = textRangeToPoint(textRangeStart, true);
                            var endPoint = textRangeToPoint(textRangeEnd, false); // same visible point case: range was collapsed.

                            if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) && dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) && endPoint.node.nextSibling === startPoint.node) {
                                startPoint = endPoint;
                            }

                            sc = startPoint.cont;
                            so = startPoint.offset;
                            ec = endPoint.cont;
                            eo = endPoint.offset;
                        }

                        return new range_WrappedRange(sc, so, ec, eo);
                    },

                    /**
                     * @method
                     *
                     * create WrappedRange from node
                     *
                     * @param {Node} node
                     * @return {WrappedRange}
                     */
                    createFromNode: function createFromNode(node) {
                        var sc = node;
                        var so = 0;
                        var ec = node;
                        var eo = dom.nodeLength(ec); // browsers can't target a picture or void node

                        if (dom.isVoid(sc)) {
                            so = dom.listPrev(sc).length - 1;
                            sc = sc.parentNode;
                        }

                        if (dom.isBR(ec)) {
                            eo = dom.listPrev(ec).length - 1;
                            ec = ec.parentNode;
                        } else if (dom.isVoid(ec)) {
                            eo = dom.listPrev(ec).length;
                            ec = ec.parentNode;
                        }

                        return this.create(sc, so, ec, eo);
                    },

                    /**
                     * create WrappedRange from node after position
                     *
                     * @param {Node} node
                     * @return {WrappedRange}
                     */
                    createFromNodeBefore: function createFromNodeBefore(node) {
                        return this.createFromNode(node).collapse(true);
                    },

                    /**
                     * create WrappedRange from node after position
                     *
                     * @param {Node} node
                     * @return {WrappedRange}
                     */
                    createFromNodeAfter: function createFromNodeAfter(node) {
                        return this.createFromNode(node).collapse();
                    },

                    /**
                     * @method
                     *
                     * create WrappedRange from bookmark
                     *
                     * @param {Node} editable
                     * @param {Object} bookmark
                     * @return {WrappedRange}
                     */
                    createFromBookmark: function createFromBookmark(editable, bookmark) {
                        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
                        var so = bookmark.s.offset;
                        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
                        var eo = bookmark.e.offset;
                        return new range_WrappedRange(sc, so, ec, eo);
                    },

                    /**
                     * @method
                     *
                     * create WrappedRange from paraBookmark
                     *
                     * @param {Object} bookmark
                     * @param {Node[]} paras
                     * @return {WrappedRange}
                     */
                    createFromParaBookmark: function createFromParaBookmark(bookmark, paras) {
                        var so = bookmark.s.offset;
                        var eo = bookmark.e.offset;
                        var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
                        var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
                        return new range_WrappedRange(sc, so, ec, eo);
                    }
                });
                // CONCATENATED MODULE: ./src/js/base/core/key.js


                var KEY_MAP = {
                    'BACKSPACE': 8,
                    'TAB': 9,
                    'ENTER': 13,
                    'SPACE': 32,
                    'DELETE': 46,
                    // Arrow
                    'LEFT': 37,
                    'UP': 38,
                    'RIGHT': 39,
                    'DOWN': 40,
                    // Number: 0-9
                    'NUM0': 48,
                    'NUM1': 49,
                    'NUM2': 50,
                    'NUM3': 51,
                    'NUM4': 52,
                    'NUM5': 53,
                    'NUM6': 54,
                    'NUM7': 55,
                    'NUM8': 56,
                    // Alphabet: a-z
                    'B': 66,
                    'E': 69,
                    'I': 73,
                    'J': 74,
                    'K': 75,
                    'L': 76,
                    'R': 82,
                    'S': 83,
                    'U': 85,
                    'V': 86,
                    'Y': 89,
                    'Z': 90,
                    'SLASH': 191,
                    'LEFTBRACKET': 219,
                    'BACKSLASH': 220,
                    'RIGHTBRACKET': 221,
                    // Navigation
                    'HOME': 36,
                    'END': 35,
                    'PAGEUP': 33,
                    'PAGEDOWN': 34
                };
                /**
                 * @class core.key
                 *
                 * Object for keycodes.
                 *
                 * @singleton
                 * @alternateClassName key
                 */

                /* harmony default export */
                var core_key = ({
                    /**
                     * @method isEdit
                     *
                     * @param {Number} keyCode
                     * @return {Boolean}
                     */
                    isEdit: function isEdit(keyCode) {
                        return lists.contains([KEY_MAP.BACKSPACE, KEY_MAP.TAB, KEY_MAP.ENTER, KEY_MAP.SPACE, KEY_MAP.DELETE], keyCode);
                    },

                    /**
                     * @method isMove
                     *
                     * @param {Number} keyCode
                     * @return {Boolean}
                     */
                    isMove: function isMove(keyCode) {
                        return lists.contains([KEY_MAP.LEFT, KEY_MAP.UP, KEY_MAP.RIGHT, KEY_MAP.DOWN], keyCode);
                    },

                    /**
                     * @method isNavigation
                     *
                     * @param {Number} keyCode
                     * @return {Boolean}
                     */
                    isNavigation: function isNavigation(keyCode) {
                        return lists.contains([KEY_MAP.HOME, KEY_MAP.END, KEY_MAP.PAGEUP, KEY_MAP.PAGEDOWN], keyCode);
                    },

                    /**
                     * @property {Object} nameFromCode
                     * @property {String} nameFromCode.8 "BACKSPACE"
                     */
                    nameFromCode: func.invertObject(KEY_MAP),
                    code: KEY_MAP
                });
                // CONCATENATED MODULE: ./src/js/base/core/async.js

                /**
                 * @method readFileAsDataURL
                 *
                 * read contents of file as representing URL
                 *
                 * @param {File} file
                 * @return {Promise} - then: dataUrl
                 */

                function readFileAsDataURL(file) {
                    return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function(deferred) {
                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(new FileReader(), {
                            onload: function onload(e) {
                                var dataURL = e.target.result;
                                deferred.resolve(dataURL);
                            },
                            onerror: function onerror(err) {
                                deferred.reject(err);
                            }
                        }).readAsDataURL(file);
                    }).promise();
                }
                /**
                 * @method createImage
                 *
                 * create `<image>` from url string
                 *
                 * @param {String} url
                 * @return {Promise} - then: $image
                 */

                function createImage(url) {
                    return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function(deferred) {
                        var $img = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<img>');
                        $img.one('load', function() {
                            $img.off('error abort');
                            deferred.resolve($img);
                        }).one('error abort', function() {
                            $img.off('load').detach();
                            deferred.reject($img);
                        }).css({
                            'max-width': '100%',
                            'height': 'auto',
                            'display': 'none'
                        }).appendTo(document.body).attr('src', url);
                    }).promise();
                }
                // CONCATENATED MODULE: ./src/js/base/editing/History.js
                function History_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function History_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function History_createClass(Constructor, protoProps, staticProps) { if (protoProps) History_defineProperties(Constructor.prototype, protoProps); if (staticProps) History_defineProperties(Constructor, staticProps); return Constructor; }



                var History_History =
                    /*#__PURE__*/
                    function() {
                        function History(context) {
                            History_classCallCheck(this, History);

                            this.stack = [];
                            this.stackOffset = -1;
                            this.context = context;
                            this.$editable = context.layoutInfo.editable;
                            this.editable = this.$editable[0];
                        }

                        History_createClass(History, [{
                            key: "makeSnapshot",
                            value: function makeSnapshot() {
                                var rng = range.create(this.editable);
                                var emptyBookmark = {
                                    s: {
                                        path: [],
                                        offset: 0
                                    },
                                    e: {
                                        path: [],
                                        offset: 0
                                    }
                                };
                                return {
                                    contents: this.$editable.html(),
                                    bookmark: rng && rng.isOnEditable() ? rng.bookmark(this.editable) : emptyBookmark
                                };
                            }
                        }, {
                            key: "applySnapshot",
                            value: function applySnapshot(snapshot) {
                                    if (snapshot.contents !== null) {
                                        this.$editable.html(snapshot.contents);
                                    }

                                    if (snapshot.bookmark !== null) {
                                        range.createFromBookmark(this.editable, snapshot.bookmark).select();
                                    }
                                }
                                /**
                                 * @method rewind
                                 * Rewinds the history stack back to the first snapshot taken.
                                 * Leaves the stack intact, so that "Redo" can still be used.
                                 */

                        }, {
                            key: "rewind",
                            value: function rewind() {
                                    // Create snap shot if not yet recorded
                                    if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
                                        this.recordUndo();
                                    } // Return to the first available snapshot.


                                    this.stackOffset = 0; // Apply that snapshot.

                                    this.applySnapshot(this.stack[this.stackOffset]);
                                }
                                /**
                                 *  @method commit
                                 *  Resets history stack, but keeps current editor's content.
                                 */

                        }, {
                            key: "commit",
                            value: function commit() {
                                    // Clear the stack.
                                    this.stack = []; // Restore stackOffset to its original value.

                                    this.stackOffset = -1; // Record our first snapshot (of nothing).

                                    this.recordUndo();
                                }
                                /**
                                 * @method reset
                                 * Resets the history stack completely; reverting to an empty editor.
                                 */

                        }, {
                            key: "reset",
                            value: function reset() {
                                    // Clear the stack.
                                    this.stack = []; // Restore stackOffset to its original value.

                                    this.stackOffset = -1; // Clear the editable area.

                                    this.$editable.html(''); // Record our first snapshot (of nothing).

                                    this.recordUndo();
                                }
                                /**
                                 * undo
                                 */

                        }, {
                            key: "undo",
                            value: function undo() {
                                    // Create snap shot if not yet recorded
                                    if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
                                        this.recordUndo();
                                    }

                                    if (this.stackOffset > 0) {
                                        this.stackOffset--;
                                        this.applySnapshot(this.stack[this.stackOffset]);
                                    }
                                }
                                /**
                                 * redo
                                 */

                        }, {
                            key: "redo",
                            value: function redo() {
                                    if (this.stack.length - 1 > this.stackOffset) {
                                        this.stackOffset++;
                                        this.applySnapshot(this.stack[this.stackOffset]);
                                    }
                                }
                                /**
                                 * recorded undo
                                 */

                        }, {
                            key: "recordUndo",
                            value: function recordUndo() {
                                this.stackOffset++; // Wash out stack after stackOffset

                                if (this.stack.length > this.stackOffset) {
                                    this.stack = this.stack.slice(0, this.stackOffset);
                                } // Create new snapshot and push it to the end


                                this.stack.push(this.makeSnapshot()); // If the stack size reachs to the limit, then slice it

                                if (this.stack.length > this.context.options.historyLimit) {
                                    this.stack.shift();
                                    this.stackOffset -= 1;
                                }
                            }
                        }]);

                        return History;
                    }();


                // CONCATENATED MODULE: ./src/js/base/editing/Style.js
                function Style_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Style_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Style_createClass(Constructor, protoProps, staticProps) { if (protoProps) Style_defineProperties(Constructor.prototype, protoProps); if (staticProps) Style_defineProperties(Constructor, staticProps); return Constructor; }







                var Style_Style =
                    /*#__PURE__*/
                    function() {
                        function Style() {
                            Style_classCallCheck(this, Style);
                        }

                        Style_createClass(Style, [{
                            key: "jQueryCSS",

                            /**
                             * @method jQueryCSS
                             *
                             * [workaround] for old jQuery
                             * passing an array of style properties to .css()
                             * will result in an object of property-value pairs.
                             * (compability with version < 1.9)
                             *
                             * @private
                             * @param  {jQuery} $obj
                             * @param  {Array} propertyNames - An array of one or more CSS properties.
                             * @return {Object}
                             */
                            value: function jQueryCSS($obj, propertyNames) {
                                    if (env.jqueryVersion < 1.9) {
                                        var result = {};
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(propertyNames, function(idx, propertyName) {
                                            result[propertyName] = $obj.css(propertyName);
                                        });
                                        return result;
                                    }

                                    return $obj.css(propertyNames);
                                }
                                /**
                                 * returns style object from node
                                 *
                                 * @param {jQuery} $node
                                 * @return {Object}
                                 */

                        }, {
                            key: "fromNode",
                            value: function fromNode($node) {
                                    var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
                                    var styleInfo = this.jQueryCSS($node, properties) || {};
                                    var fontSize = $node[0].style.fontSize || styleInfo['font-size'];
                                    styleInfo['font-size'] = parseInt(fontSize, 10);
                                    styleInfo['font-size-unit'] = fontSize.match(/[a-z%]+$/);
                                    return styleInfo;
                                }
                                /**
                                 * paragraph level style
                                 *
                                 * @param {WrappedRange} rng
                                 * @param {Object} styleInfo
                                 */

                        }, {
                            key: "stylePara",
                            value: function stylePara(rng, styleInfo) {
                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(rng.nodes(dom.isPara, {
                                        includeAncestor: true
                                    }), function(idx, para) {
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css(styleInfo);
                                    });
                                }
                                /**
                                 * insert and returns styleNodes on range.
                                 *
                                 * @param {WrappedRange} rng
                                 * @param {Object} [options] - options for styleNodes
                                 * @param {String} [options.nodeName] - default: `SPAN`
                                 * @param {Boolean} [options.expandClosestSibling] - default: `false`
                                 * @param {Boolean} [options.onlyPartialContains] - default: `false`
                                 * @return {Node[]}
                                 */

                        }, {
                            key: "styleNodes",
                            value: function styleNodes(rng, options) {
                                    rng = rng.splitText();
                                    var nodeName = options && options.nodeName || 'SPAN';
                                    var expandClosestSibling = !!(options && options.expandClosestSibling);
                                    var onlyPartialContains = !!(options && options.onlyPartialContains);

                                    if (rng.isCollapsed()) {
                                        return [rng.insertNode(dom.create(nodeName))];
                                    }

                                    var pred = dom.makePredByNodeName(nodeName);
                                    var nodes = rng.nodes(dom.isText, {
                                        fullyContains: true
                                    }).map(function(text) {
                                        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
                                    });

                                    if (expandClosestSibling) {
                                        if (onlyPartialContains) {
                                            var nodesInRange = rng.nodes(); // compose with partial contains predication

                                            pred = func.and(pred, function(node) {
                                                return lists.contains(nodesInRange, node);
                                            });
                                        }

                                        return nodes.map(function(node) {
                                            var siblings = dom.withClosestSiblings(node, pred);
                                            var head = lists.head(siblings);
                                            var tails = lists.tail(siblings);
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(tails, function(idx, elem) {
                                                dom.appendChildNodes(head, elem.childNodes);
                                                dom.remove(elem);
                                            });
                                            return lists.head(siblings);
                                        });
                                    } else {
                                        return nodes;
                                    }
                                }
                                /**
                                 * get current style on cursor
                                 *
                                 * @param {WrappedRange} rng
                                 * @return {Object} - object contains style properties.
                                 */

                        }, {
                            key: "current",
                            value: function current(rng) {
                                var $cont = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
                                var styleInfo = this.fromNode($cont); // document.queryCommandState for toggle state
                                // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"

                                try {
                                    styleInfo = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(styleInfo, {
                                        'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
                                        'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
                                        'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
                                        'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
                                        'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
                                        'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
                                        'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
                                    });
                                } catch (e) {} // eslint-disable-next-line
                                // list-style-type to list-style(unordered, ordered)


                                if (!rng.isOnList()) {
                                    styleInfo['list-style'] = 'none';
                                } else {
                                    var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
                                    var isUnordered = orderedTypes.indexOf(styleInfo['list-style-type']) > -1;
                                    styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
                                }

                                var para = dom.ancestor(rng.sc, dom.isPara);

                                if (para && para.style['line-height']) {
                                    styleInfo['line-height'] = para.style.lineHeight;
                                } else {
                                    var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
                                    styleInfo['line-height'] = lineHeight.toFixed(1);
                                }

                                styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
                                styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
                                styleInfo.range = rng;
                                return styleInfo;
                            }
                        }]);

                        return Style;
                    }();


                // CONCATENATED MODULE: ./src/js/base/editing/Bullet.js
                function Bullet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Bullet_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Bullet_createClass(Constructor, protoProps, staticProps) { if (protoProps) Bullet_defineProperties(Constructor.prototype, protoProps); if (staticProps) Bullet_defineProperties(Constructor, staticProps); return Constructor; }







                var Bullet_Bullet =
                    /*#__PURE__*/
                    function() {
                        function Bullet() {
                            Bullet_classCallCheck(this, Bullet);
                        }

                        Bullet_createClass(Bullet, [{
                            key: "insertOrderedList",

                            /**
                             * toggle ordered list
                             */
                            value: function insertOrderedList(editable) {
                                    this.toggleList('OL', editable);
                                }
                                /**
                                 * toggle unordered list
                                 */

                        }, {
                            key: "insertUnorderedList",
                            value: function insertUnorderedList(editable) {
                                    this.toggleList('UL', editable);
                                }
                                /**
                                 * indent
                                 */

                        }, {
                            key: "indent",
                            value: function indent(editable) {
                                    var _this = this;

                                    var rng = range.create(editable).wrapBodyInlineWithPara();
                                    var paras = rng.nodes(dom.isPara, {
                                        includeAncestor: true
                                    });
                                    var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function(idx, paras) {
                                        var head = lists.head(paras);

                                        if (dom.isLi(head)) {
                                            var previousList = _this.findList(head.previousSibling);

                                            if (previousList) {
                                                paras.map(function(para) {
                                                    return previousList.appendChild(para);
                                                });
                                            } else {
                                                _this.wrapList(paras, head.parentNode.nodeName);

                                                paras.map(function(para) {
                                                    return para.parentNode;
                                                }).map(function(para) {
                                                    return _this.appendToPrevious(para);
                                                });
                                            }
                                        } else {
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(paras, function(idx, para) {
                                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css('marginLeft', function(idx, val) {
                                                    return (parseInt(val, 10) || 0) + 25;
                                                });
                                            });
                                        }
                                    });
                                    rng.select();
                                }
                                /**
                                 * outdent
                                 */

                        }, {
                            key: "outdent",
                            value: function outdent(editable) {
                                    var _this2 = this;

                                    var rng = range.create(editable).wrapBodyInlineWithPara();
                                    var paras = rng.nodes(dom.isPara, {
                                        includeAncestor: true
                                    });
                                    var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function(idx, paras) {
                                        var head = lists.head(paras);

                                        if (dom.isLi(head)) {
                                            _this2.releaseList([paras]);
                                        } else {
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(paras, function(idx, para) {
                                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css('marginLeft', function(idx, val) {
                                                    val = parseInt(val, 10) || 0;
                                                    return val > 25 ? val - 25 : '';
                                                });
                                            });
                                        }
                                    });
                                    rng.select();
                                }
                                /**
                                 * toggle list
                                 *
                                 * @param {String} listName - OL or UL
                                 */

                        }, {
                            key: "toggleList",
                            value: function toggleList(listName, editable) {
                                    var _this3 = this;

                                    var rng = range.create(editable).wrapBodyInlineWithPara();
                                    var paras = rng.nodes(dom.isPara, {
                                        includeAncestor: true
                                    });
                                    var bookmark = rng.paraBookmark(paras);
                                    var clustereds = lists.clusterBy(paras, func.peq2('parentNode')); // paragraph to list

                                    if (lists.find(paras, dom.isPurePara)) {
                                        var wrappedParas = [];
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function(idx, paras) {
                                            wrappedParas = wrappedParas.concat(_this3.wrapList(paras, listName));
                                        });
                                        paras = wrappedParas; // list to paragraph or change list style
                                    } else {
                                        var diffLists = rng.nodes(dom.isList, {
                                            includeAncestor: true
                                        }).filter(function(listNode) {
                                            return !external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.nodeName(listNode, listName);
                                        });

                                        if (diffLists.length) {
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(diffLists, function(idx, listNode) {
                                                dom.replace(listNode, listName);
                                            });
                                        } else {
                                            paras = this.releaseList(clustereds, true);
                                        }
                                    }

                                    range.createFromParaBookmark(bookmark, paras).select();
                                }
                                /**
                                 * @param {Node[]} paras
                                 * @param {String} listName
                                 * @return {Node[]}
                                 */

                        }, {
                            key: "wrapList",
                            value: function wrapList(paras, listName) {
                                    var head = lists.head(paras);
                                    var last = lists.last(paras);
                                    var prevList = dom.isList(head.previousSibling) && head.previousSibling;
                                    var nextList = dom.isList(last.nextSibling) && last.nextSibling;
                                    var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last); // P to LI

                                    paras = paras.map(function(para) {
                                        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
                                    }); // append to list(<ul>, <ol>)

                                    dom.appendChildNodes(listNode, paras);

                                    if (nextList) {
                                        dom.appendChildNodes(listNode, lists.from(nextList.childNodes));
                                        dom.remove(nextList);
                                    }

                                    return paras;
                                }
                                /**
                                 * @method releaseList
                                 *
                                 * @param {Array[]} clustereds
                                 * @param {Boolean} isEscapseToBody
                                 * @return {Node[]}
                                 */

                        }, {
                            key: "releaseList",
                            value: function releaseList(clustereds, isEscapseToBody) {
                                    var _this4 = this;

                                    var releasedParas = [];
                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function(idx, paras) {
                                        var head = lists.head(paras);
                                        var last = lists.last(paras);
                                        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) : head.parentNode;
                                        var parentItem = headList.parentNode;

                                        if (headList.parentNode.nodeName === 'LI') {
                                            paras.map(function(para) {
                                                var newList = _this4.findNextSiblings(para);

                                                if (parentItem.nextSibling) {
                                                    parentItem.parentNode.insertBefore(para, parentItem.nextSibling);
                                                } else {
                                                    parentItem.parentNode.appendChild(para);
                                                }

                                                if (newList.length) {
                                                    _this4.wrapList(newList, headList.nodeName);

                                                    para.appendChild(newList[0].parentNode);
                                                }
                                            });

                                            if (headList.children.length === 0) {
                                                parentItem.removeChild(headList);
                                            }

                                            if (parentItem.childNodes.length === 0) {
                                                parentItem.parentNode.removeChild(parentItem);
                                            }
                                        } else {
                                            var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
                                                node: last.parentNode,
                                                offset: dom.position(last) + 1
                                            }, {
                                                isSkipPaddingBlankHTML: true
                                            }) : null;
                                            var middleList = dom.splitTree(headList, {
                                                node: head.parentNode,
                                                offset: dom.position(head)
                                            }, {
                                                isSkipPaddingBlankHTML: true
                                            });
                                            paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) : lists.from(middleList.childNodes).filter(dom.isLi); // LI to P

                                            if (isEscapseToBody || !dom.isList(headList.parentNode)) {
                                                paras = paras.map(function(para) {
                                                    return dom.replace(para, 'P');
                                                });
                                            }

                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(lists.from(paras).reverse(), function(idx, para) {
                                                dom.insertAfter(para, headList);
                                            }); // remove empty lists

                                            var rootLists = lists.compact([headList, middleList, lastList]);
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(rootLists, function(idx, rootList) {
                                                var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
                                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(listNodes.reverse(), function(idx, listNode) {
                                                    if (!dom.nodeLength(listNode)) {
                                                        dom.remove(listNode, true);
                                                    }
                                                });
                                            });
                                        }

                                        releasedParas = releasedParas.concat(paras);
                                    });
                                    return releasedParas;
                                }
                                /**
                                 * @method appendToPrevious
                                 *
                                 * Appends list to previous list item, if
                                 * none exist it wraps the list in a new list item.
                                 *
                                 * @param {HTMLNode} ListItem
                                 * @return {HTMLNode}
                                 */

                        }, {
                            key: "appendToPrevious",
                            value: function appendToPrevious(node) {
                                    return node.previousSibling ? dom.appendChildNodes(node.previousSibling, [node]) : this.wrapList([node], 'LI');
                                }
                                /**
                                 * @method findList
                                 *
                                 * Finds an existing list in list item
                                 *
                                 * @param {HTMLNode} ListItem
                                 * @return {Array[]}
                                 */

                        }, {
                            key: "findList",
                            value: function findList(node) {
                                    return node ? lists.find(node.children, function(child) {
                                        return ['OL', 'UL'].indexOf(child.nodeName) > -1;
                                    }) : null;
                                }
                                /**
                                 * @method findNextSiblings
                                 *
                                 * Finds all list item siblings that follow it
                                 *
                                 * @param {HTMLNode} ListItem
                                 * @return {HTMLNode}
                                 */

                        }, {
                            key: "findNextSiblings",
                            value: function findNextSiblings(node) {
                                var siblings = [];

                                while (node.nextSibling) {
                                    siblings.push(node.nextSibling);
                                    node = node.nextSibling;
                                }

                                return siblings;
                            }
                        }]);

                        return Bullet;
                    }();


                // CONCATENATED MODULE: ./src/js/base/editing/Typing.js
                function Typing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Typing_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Typing_createClass(Constructor, protoProps, staticProps) { if (protoProps) Typing_defineProperties(Constructor.prototype, protoProps); if (staticProps) Typing_defineProperties(Constructor, staticProps); return Constructor; }





                /**
                 * @class editing.Typing
                 *
                 * Typing
                 *
                 */

                var Typing_Typing =
                    /*#__PURE__*/
                    function() {
                        function Typing(context) {
                            Typing_classCallCheck(this, Typing);

                            // a Bullet instance to toggle lists off
                            this.bullet = new Bullet_Bullet();
                            this.options = context.options;
                        }
                        /**
                         * insert tab
                         *
                         * @param {WrappedRange} rng
                         * @param {Number} tabsize
                         */


                        Typing_createClass(Typing, [{
                            key: "insertTab",
                            value: function insertTab(rng, tabsize) {
                                    var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
                                    rng = rng.deleteContents();
                                    rng.insertNode(tab, true);
                                    rng = range.create(tab, tabsize);
                                    rng.select();
                                }
                                /**
                                 * insert paragraph
                                 *
                                 * @param {jQuery} $editable
                                 * @param {WrappedRange} rng Can be used in unit tests to "mock" the range
                                 *
                                 * blockquoteBreakingLevel
                                 *   0 - No break, the new paragraph remains inside the quote
                                 *   1 - Break the first blockquote in the ancestors list
                                 *   2 - Break all blockquotes, so that the new paragraph is not quoted (this is the default)
                                 */

                        }, {
                            key: "insertParagraph",
                            value: function insertParagraph(editable, rng) {
                                rng = rng || range.create(editable); // deleteContents on range.

                                rng = rng.deleteContents(); // Wrap range if it needs to be wrapped by paragraph

                                rng = rng.wrapBodyInlineWithPara(); // finding paragraph

                                var splitRoot = dom.ancestor(rng.sc, dom.isPara);
                                var nextPara; // on paragraph: split paragraph

                                if (splitRoot) {
                                    // if it is an empty line with li
                                    if (dom.isLi(splitRoot) && (dom.isEmpty(splitRoot) || dom.deepestChildIsEmpty(splitRoot))) {
                                        // toogle UL/OL and escape
                                        this.bullet.toggleList(splitRoot.parentNode.nodeName);
                                        return;
                                    } else {
                                        var blockquote = null;

                                        if (this.options.blockquoteBreakingLevel === 1) {
                                            blockquote = dom.ancestor(splitRoot, dom.isBlockquote);
                                        } else if (this.options.blockquoteBreakingLevel === 2) {
                                            blockquote = dom.lastAncestor(splitRoot, dom.isBlockquote);
                                        }

                                        if (blockquote) {
                                            // We're inside a blockquote and options ask us to break it
                                            nextPara = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(dom.emptyPara)[0]; // If the split is right before a <br>, remove it so that there's no "empty line"
                                            // after the split in the new blockquote created

                                            if (dom.isRightEdgePoint(rng.getStartPoint()) && dom.isBR(rng.sc.nextSibling)) {
                                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(rng.sc.nextSibling).remove();
                                            }

                                            var split = dom.splitTree(blockquote, rng.getStartPoint(), {
                                                isDiscardEmptySplits: true
                                            });

                                            if (split) {
                                                split.parentNode.insertBefore(nextPara, split);
                                            } else {
                                                dom.insertAfter(nextPara, blockquote); // There's no split if we were at the end of the blockquote
                                            }
                                        } else {
                                            nextPara = dom.splitTree(splitRoot, rng.getStartPoint()); // not a blockquote, just insert the paragraph

                                            var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
                                            emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(emptyAnchors, function(idx, anchor) {
                                                dom.remove(anchor);
                                            }); // replace empty heading, pre or custom-made styleTag with P tag

                                            if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
                                                nextPara = dom.replace(nextPara, 'p');
                                            }
                                        }
                                    } // no paragraph: insert empty paragraph

                                } else {
                                    var next = rng.sc.childNodes[rng.so];
                                    nextPara = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(dom.emptyPara)[0];

                                    if (next) {
                                        rng.sc.insertBefore(nextPara, next);
                                    } else {
                                        rng.sc.appendChild(nextPara);
                                    }
                                }

                                range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
                            }
                        }]);

                        return Typing;
                    }();


                // CONCATENATED MODULE: ./src/js/base/editing/Table.js
                function Table_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Table_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Table_createClass(Constructor, protoProps, staticProps) { if (protoProps) Table_defineProperties(Constructor.prototype, protoProps); if (staticProps) Table_defineProperties(Constructor, staticProps); return Constructor; }





                /**
                 * @class Create a virtual table to create what actions to do in change.
                 * @param {object} startPoint Cell selected to apply change.
                 * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
                 * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
                 * @param {object} domTable Dom element of table to make changes.
                 */

                var TableResultAction = function TableResultAction(startPoint, where, action, domTable) {
                    var _startPoint = {
                        'colPos': 0,
                        'rowPos': 0
                    };
                    var _virtualTable = [];
                    var _actionCellList = []; /// ///////////////////////////////////////////
                    // Private functions
                    /// ///////////////////////////////////////////

                    /**
                     * Set the startPoint of action.
                     */

                    function setStartPoint() {
                        if (!startPoint || !startPoint.tagName || startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th') {
                            // Impossible to identify start Cell point
                            return;
                        }

                        _startPoint.colPos = startPoint.cellIndex;

                        if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
                            // Impossible to identify start Row point
                            return;
                        }

                        _startPoint.rowPos = startPoint.parentElement.rowIndex;
                    }
                    /**
                     * Define virtual table position info object.
                     *
                     * @param {int} rowIndex Index position in line of virtual table.
                     * @param {int} cellIndex Index position in column of virtual table.
                     * @param {object} baseRow Row affected by this position.
                     * @param {object} baseCell Cell affected by this position.
                     * @param {bool} isSpan Inform if it is an span cell/row.
                     */


                    function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
                        var objPosition = {
                            'baseRow': baseRow,
                            'baseCell': baseCell,
                            'isRowSpan': isRowSpan,
                            'isColSpan': isColSpan,
                            'isVirtual': isVirtualCell
                        };

                        if (!_virtualTable[rowIndex]) {
                            _virtualTable[rowIndex] = [];
                        }

                        _virtualTable[rowIndex][cellIndex] = objPosition;
                    }
                    /**
                     * Create action cell object.
                     *
                     * @param {object} virtualTableCellObj Object of specific position on virtual table.
                     * @param {enum} resultAction Action to be applied in that item.
                     */


                    function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
                        return {
                            'baseCell': virtualTableCellObj.baseCell,
                            'action': resultAction,
                            'virtualTable': {
                                'rowIndex': virtualRowPosition,
                                'cellIndex': virtualColPosition
                            }
                        };
                    }
                    /**
                     * Recover free index of row to append Cell.
                     *
                     * @param {int} rowIndex Index of row to find free space.
                     * @param {int} cellIndex Index of cell to find free space in table.
                     */


                    function recoverCellIndex(rowIndex, cellIndex) {
                        if (!_virtualTable[rowIndex]) {
                            return cellIndex;
                        }

                        if (!_virtualTable[rowIndex][cellIndex]) {
                            return cellIndex;
                        }

                        var newCellIndex = cellIndex;

                        while (_virtualTable[rowIndex][newCellIndex]) {
                            newCellIndex++;

                            if (!_virtualTable[rowIndex][newCellIndex]) {
                                return newCellIndex;
                            }
                        }
                    }
                    /**
                     * Recover info about row and cell and add information to virtual table.
                     *
                     * @param {object} row Row to recover information.
                     * @param {object} cell Cell to recover information.
                     */


                    function addCellInfoToVirtual(row, cell) {
                        var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
                        var cellHasColspan = cell.colSpan > 1;
                        var cellHasRowspan = cell.rowSpan > 1;
                        var isThisSelectedCell = row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos;
                        setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false); // Add span rows to virtual Table.

                        var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;

                        if (rowspanNumber > 1) {
                            for (var rp = 1; rp < rowspanNumber; rp++) {
                                var rowspanIndex = row.rowIndex + rp;
                                adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
                                setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
                            }
                        } // Add span cols to virtual table.


                        var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;

                        if (colspanNumber > 1) {
                            for (var cp = 1; cp < colspanNumber; cp++) {
                                var cellspanIndex = recoverCellIndex(row.rowIndex, cellIndex + cp);
                                adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
                                setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
                            }
                        }
                    }
                    /**
                     * Process validation and adjust of start point if needed
                     *
                     * @param {int} rowIndex
                     * @param {int} cellIndex
                     * @param {object} cell
                     * @param {bool} isSelectedCell
                     */


                    function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
                        if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
                            _startPoint.colPos++;
                        }
                    }
                    /**
                     * Create virtual table of cells with all cells, including span cells.
                     */


                    function createVirtualTable() {
                        var rows = domTable.rows;

                        for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                            var cells = rows[rowIndex].cells;

                            for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
                                addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
                            }
                        }
                    }
                    /**
                     * Get action to be applied on the cell.
                     *
                     * @param {object} cell virtual table cell to apply action
                     */


                    function getDeleteResultActionToCell(cell) {
                        switch (where) {
                            case TableResultAction.where.Column:
                                if (cell.isColSpan) {
                                    return TableResultAction.resultAction.SubtractSpanCount;
                                }

                                break;

                            case TableResultAction.where.Row:
                                if (!cell.isVirtual && cell.isRowSpan) {
                                    return TableResultAction.resultAction.AddCell;
                                } else if (cell.isRowSpan) {
                                    return TableResultAction.resultAction.SubtractSpanCount;
                                }

                                break;
                        }

                        return TableResultAction.resultAction.RemoveCell;
                    }
                    /**
                     * Get action to be applied on the cell.
                     *
                     * @param {object} cell virtual table cell to apply action
                     */


                    function getAddResultActionToCell(cell) {
                        switch (where) {
                            case TableResultAction.where.Column:
                                if (cell.isColSpan) {
                                    return TableResultAction.resultAction.SumSpanCount;
                                } else if (cell.isRowSpan && cell.isVirtual) {
                                    return TableResultAction.resultAction.Ignore;
                                }

                                break;

                            case TableResultAction.where.Row:
                                if (cell.isRowSpan) {
                                    return TableResultAction.resultAction.SumSpanCount;
                                } else if (cell.isColSpan && cell.isVirtual) {
                                    return TableResultAction.resultAction.Ignore;
                                }

                                break;
                        }

                        return TableResultAction.resultAction.AddCell;
                    }

                    function init() {
                        setStartPoint();
                        createVirtualTable();
                    } /// ///////////////////////////////////////////
                    // Public functions
                    /// ///////////////////////////////////////////

                    /**
                     * Recover array os what to do in table.
                     */


                    this.getActionList = function() {
                        var fixedRow = where === TableResultAction.where.Row ? _startPoint.rowPos : -1;
                        var fixedCol = where === TableResultAction.where.Column ? _startPoint.colPos : -1;
                        var actualPosition = 0;
                        var canContinue = true;

                        while (canContinue) {
                            var rowPosition = fixedRow >= 0 ? fixedRow : actualPosition;
                            var colPosition = fixedCol >= 0 ? fixedCol : actualPosition;
                            var row = _virtualTable[rowPosition];

                            if (!row) {
                                canContinue = false;
                                return _actionCellList;
                            }

                            var cell = row[colPosition];

                            if (!cell) {
                                canContinue = false;
                                return _actionCellList;
                            } // Define action to be applied in this cell


                            var resultAction = TableResultAction.resultAction.Ignore;

                            switch (action) {
                                case TableResultAction.requestAction.Add:
                                    resultAction = getAddResultActionToCell(cell);
                                    break;

                                case TableResultAction.requestAction.Delete:
                                    resultAction = getDeleteResultActionToCell(cell);
                                    break;
                            }

                            _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));

                            actualPosition++;
                        }

                        return _actionCellList;
                    };

                    init();
                };
                /**
                 *
                 * Where action occours enum.
                 */


                TableResultAction.where = {
                    'Row': 0,
                    'Column': 1
                };
                /**
                 *
                 * Requested action to apply enum.
                 */

                TableResultAction.requestAction = {
                    'Add': 0,
                    'Delete': 1
                };
                /**
                 *
                 * Result action to be executed enum.
                 */

                TableResultAction.resultAction = {
                    'Ignore': 0,
                    'SubtractSpanCount': 1,
                    'RemoveCell': 2,
                    'AddCell': 3,
                    'SumSpanCount': 4
                };
                /**
                 *
                 * @class editing.Table
                 *
                 * Table
                 *
                 */

                var Table_Table =
                    /*#__PURE__*/
                    function() {
                        function Table() {
                            Table_classCallCheck(this, Table);
                        }

                        Table_createClass(Table, [{
                            key: "tab",

                            /**
                             * handle tab key
                             *
                             * @param {WrappedRange} rng
                             * @param {Boolean} isShift
                             */
                            value: function tab(rng, isShift) {
                                    var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
                                    var table = dom.ancestor(cell, dom.isTable);
                                    var cells = dom.listDescendant(table, dom.isCell);
                                    var nextCell = lists[isShift ? 'prev' : 'next'](cells, cell);

                                    if (nextCell) {
                                        range.create(nextCell, 0).select();
                                    }
                                }
                                /**
                                 * Add a new row
                                 *
                                 * @param {WrappedRange} rng
                                 * @param {String} position (top/bottom)
                                 * @return {Node}
                                 */

                        }, {
                            key: "addRow",
                            value: function addRow(rng, position) {
                                    var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
                                    var currentTr = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
                                    var trAttributes = this.recoverAttributes(currentTr);
                                    var html = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<tr' + trAttributes + '></tr>');
                                    var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Add, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentTr).closest('table')[0]);
                                    var actions = vTable.getActionList();

                                    for (var idCell = 0; idCell < actions.length; idCell++) {
                                        var currentCell = actions[idCell];
                                        var tdAttributes = this.recoverAttributes(currentCell.baseCell);

                                        switch (currentCell.action) {
                                            case TableResultAction.resultAction.AddCell:
                                                html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
                                                break;

                                            case TableResultAction.resultAction.SumSpanCount:
                                                {
                                                    if (position === 'top') {
                                                        var baseCellTr = currentCell.baseCell.parent;
                                                        var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;

                                                        if (isTopFromRowSpan) {
                                                            var newTd = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div></div>').append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                                                            html.append(newTd);
                                                            break;
                                                        }
                                                    }

                                                    var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
                                                    rowspanNumber++;
                                                    currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
                                                }
                                                break;
                                        }
                                    }

                                    if (position === 'top') {
                                        currentTr.before(html);
                                    } else {
                                        var cellHasRowspan = cell.rowSpan > 1;

                                        if (cellHasRowspan) {
                                            var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentTr).parent().find('tr')[lastTrIndex]).after(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(html));
                                            return;
                                        }

                                        currentTr.after(html);
                                    }
                                }
                                /**
                                 * Add a new col
                                 *
                                 * @param {WrappedRange} rng
                                 * @param {String} position (left/right)
                                 * @return {Node}
                                 */

                        }, {
                            key: "addCol",
                            value: function addCol(rng, position) {
                                    var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
                                    var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
                                    var rowsGroup = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).siblings();
                                    rowsGroup.push(row);
                                    var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Add, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
                                    var actions = vTable.getActionList();

                                    for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
                                        var currentCell = actions[actionIndex];
                                        var tdAttributes = this.recoverAttributes(currentCell.baseCell);

                                        switch (currentCell.action) {
                                            case TableResultAction.resultAction.AddCell:
                                                if (position === 'right') {
                                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
                                                } else {
                                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                                                }

                                                break;

                                            case TableResultAction.resultAction.SumSpanCount:
                                                if (position === 'right') {
                                                    var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
                                                    colspanNumber++;
                                                    currentCell.baseCell.setAttribute('colSpan', colspanNumber);
                                                } else {
                                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                                                }

                                                break;
                                        }
                                    }
                                }
                                /*
                                 * Copy attributes from element.
                                 *
                                 * @param {object} Element to recover attributes.
                                 * @return {string} Copied string elements.
                                 */

                        }, {
                            key: "recoverAttributes",
                            value: function recoverAttributes(el) {
                                    var resultStr = '';

                                    if (!el) {
                                        return resultStr;
                                    }

                                    var attrList = el.attributes || [];

                                    for (var i = 0; i < attrList.length; i++) {
                                        if (attrList[i].name.toLowerCase() === 'id') {
                                            continue;
                                        }

                                        if (attrList[i].specified) {
                                            resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
                                        }
                                    }

                                    return resultStr;
                                }
                                /**
                                 * Delete current row
                                 *
                                 * @param {WrappedRange} rng
                                 * @return {Node}
                                 */

                        }, {
                            key: "deleteRow",
                            value: function deleteRow(rng) {
                                    var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
                                    var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
                                    var cellPos = row.children('td, th').index(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell));
                                    var rowPos = row[0].rowIndex;
                                    var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Delete, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
                                    var actions = vTable.getActionList();

                                    for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
                                        if (!actions[actionIndex]) {
                                            continue;
                                        }

                                        var baseCell = actions[actionIndex].baseCell;
                                        var virtualPosition = actions[actionIndex].virtualTable;
                                        var hasRowspan = baseCell.rowSpan && baseCell.rowSpan > 1;
                                        var rowspanNumber = hasRowspan ? parseInt(baseCell.rowSpan, 10) : 0;

                                        switch (actions[actionIndex].action) {
                                            case TableResultAction.resultAction.Ignore:
                                                continue;

                                            case TableResultAction.resultAction.AddCell:
                                                {
                                                    var nextRow = row.next('tr')[0];

                                                    if (!nextRow) {
                                                        continue;
                                                    }

                                                    var cloneRow = row[0].cells[cellPos];

                                                    if (hasRowspan) {
                                                        if (rowspanNumber > 2) {
                                                            rowspanNumber--;
                                                            nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                                                            nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                                                            nextRow.cells[cellPos].innerHTML = '';
                                                        } else if (rowspanNumber === 2) {
                                                            nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                                                            nextRow.cells[cellPos].removeAttribute('rowSpan');
                                                            nextRow.cells[cellPos].innerHTML = '';
                                                        }
                                                    }
                                                }
                                                continue;

                                            case TableResultAction.resultAction.SubtractSpanCount:
                                                if (hasRowspan) {
                                                    if (rowspanNumber > 2) {
                                                        rowspanNumber--;
                                                        baseCell.setAttribute('rowSpan', rowspanNumber);

                                                        if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                                            baseCell.innerHTML = '';
                                                        }
                                                    } else if (rowspanNumber === 2) {
                                                        baseCell.removeAttribute('rowSpan');

                                                        if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                                                            baseCell.innerHTML = '';
                                                        }
                                                    }
                                                }

                                                continue;

                                            case TableResultAction.resultAction.RemoveCell:
                                                // Do not need remove cell because row will be deleted.
                                                continue;
                                        }
                                    }

                                    row.remove();
                                }
                                /**
                                 * Delete current col
                                 *
                                 * @param {WrappedRange} rng
                                 * @return {Node}
                                 */

                        }, {
                            key: "deleteCol",
                            value: function deleteCol(rng) {
                                    var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
                                    var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
                                    var cellPos = row.children('td, th').index(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell));
                                    var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Delete, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
                                    var actions = vTable.getActionList();

                                    for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
                                        if (!actions[actionIndex]) {
                                            continue;
                                        }

                                        switch (actions[actionIndex].action) {
                                            case TableResultAction.resultAction.Ignore:
                                                continue;

                                            case TableResultAction.resultAction.SubtractSpanCount:
                                                {
                                                    var baseCell = actions[actionIndex].baseCell;
                                                    var hasColspan = baseCell.colSpan && baseCell.colSpan > 1;

                                                    if (hasColspan) {
                                                        var colspanNumber = baseCell.colSpan ? parseInt(baseCell.colSpan, 10) : 0;

                                                        if (colspanNumber > 2) {
                                                            colspanNumber--;
                                                            baseCell.setAttribute('colSpan', colspanNumber);

                                                            if (baseCell.cellIndex === cellPos) {
                                                                baseCell.innerHTML = '';
                                                            }
                                                        } else if (colspanNumber === 2) {
                                                            baseCell.removeAttribute('colSpan');

                                                            if (baseCell.cellIndex === cellPos) {
                                                                baseCell.innerHTML = '';
                                                            }
                                                        }
                                                    }
                                                }
                                                continue;

                                            case TableResultAction.resultAction.RemoveCell:
                                                dom.remove(actions[actionIndex].baseCell, true);
                                                continue;
                                        }
                                    }
                                }
                                /**
                                 * create empty table element
                                 *
                                 * @param {Number} rowCount
                                 * @param {Number} colCount
                                 * @return {Node}
                                 */

                        }, {
                            key: "createTable",
                            value: function createTable(colCount, rowCount, options) {
                                    var tds = [];
                                    var tdHTML;

                                    for (var idxCol = 0; idxCol < colCount; idxCol++) {
                                        tds.push('<td>' + dom.blank + '</td>');
                                    }

                                    tdHTML = tds.join('');
                                    var trs = [];
                                    var trHTML;

                                    for (var idxRow = 0; idxRow < rowCount; idxRow++) {
                                        trs.push('<tr>' + tdHTML + '</tr>');
                                    }

                                    trHTML = trs.join('');
                                    var $table = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<table>' + trHTML + '</table>');

                                    if (options && options.tableClassName) {
                                        $table.addClass(options.tableClassName);
                                    }

                                    return $table[0];
                                }
                                /**
                                 * Delete current table
                                 *
                                 * @param {WrappedRange} rng
                                 * @return {Node}
                                 */

                        }, {
                            key: "deleteTable",
                            value: function deleteTable(rng) {
                                var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('table').remove();
                            }
                        }]);

                        return Table;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Editor.js
                function Editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Editor_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) Editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) Editor_defineProperties(Constructor, staticProps); return Constructor; }














                var KEY_BOGUS = 'bogus';
                /**
                 * @class Editor
                 */

                var Editor_Editor =
                    /*#__PURE__*/
                    function() {
                        function Editor(context) {
                            var _this = this;

                            Editor_classCallCheck(this, Editor);

                            this.context = context;
                            this.$note = context.layoutInfo.note;
                            this.$editor = context.layoutInfo.editor;
                            this.$editable = context.layoutInfo.editable;
                            this.options = context.options;
                            this.lang = this.options.langInfo;
                            this.editable = this.$editable[0];
                            this.lastRange = null;
                            this.snapshot = null;
                            this.style = new Style_Style();
                            this.table = new Table_Table();
                            this.typing = new Typing_Typing(context);
                            this.bullet = new Bullet_Bullet();
                            this.history = new History_History(context);
                            this.context.memo('help.undo', this.lang.help.undo);
                            this.context.memo('help.redo', this.lang.help.redo);
                            this.context.memo('help.tab', this.lang.help.tab);
                            this.context.memo('help.untab', this.lang.help.untab);
                            this.context.memo('help.insertParagraph', this.lang.help.insertParagraph);
                            this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList);
                            this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList);
                            this.context.memo('help.indent', this.lang.help.indent);
                            this.context.memo('help.outdent', this.lang.help.outdent);
                            this.context.memo('help.formatPara', this.lang.help.formatPara);
                            this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule);
                            this.context.memo('help.fontName', this.lang.help.fontName); // native commands(with execCommand), generate function for execCommand

                            var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'formatBlock', 'removeFormat', 'backColor'];

                            for (var idx = 0, len = commands.length; idx < len; idx++) {
                                this[commands[idx]] = function(sCmd) {
                                    return function(value) {
                                        _this.beforeCommand();

                                        document.execCommand(sCmd, false, value);

                                        _this.afterCommand(true);
                                    };
                                }(commands[idx]);

                                this.context.memo('help.' + commands[idx], this.lang.help[commands[idx]]);
                            }

                            this.fontName = this.wrapCommand(function(value) {
                                return _this.fontStyling('font-family', env.validFontName(value));
                            });
                            this.fontSize = this.wrapCommand(function(value) {
                                var unit = _this.currentStyle()['font-size-unit'];

                                return _this.fontStyling('font-size', value + unit);
                            });
                            this.fontSizeUnit = this.wrapCommand(function(value) {
                                var size = _this.currentStyle()['font-size'];

                                return _this.fontStyling('font-size', size + value);
                            });

                            for (var _idx = 1; _idx <= 6; _idx++) {
                                this['formatH' + _idx] = function(idx) {
                                    return function() {
                                        _this.formatBlock('H' + idx);
                                    };
                                }(_idx);

                                this.context.memo('help.formatH' + _idx, this.lang.help['formatH' + _idx]);
                            }

                            this.insertParagraph = this.wrapCommand(function() {
                                _this.typing.insertParagraph(_this.editable);
                            });
                            this.insertOrderedList = this.wrapCommand(function() {
                                _this.bullet.insertOrderedList(_this.editable);
                            });
                            this.insertUnorderedList = this.wrapCommand(function() {
                                _this.bullet.insertUnorderedList(_this.editable);
                            });
                            this.indent = this.wrapCommand(function() {
                                _this.bullet.indent(_this.editable);
                            });
                            this.outdent = this.wrapCommand(function() {
                                _this.bullet.outdent(_this.editable);
                            });
                            /**
                             * insertNode
                             * insert node
                             * @param {Node} node
                             */

                            this.insertNode = this.wrapCommand(function(node) {
                                if (_this.isLimited(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).text().length)) {
                                    return;
                                }

                                var rng = _this.getLastRange();

                                rng.insertNode(node);

                                _this.setLastRange(range.createFromNodeAfter(node).select());
                            });
                            /**
                             * insert text
                             * @param {String} text
                             */

                            this.insertText = this.wrapCommand(function(text) {
                                if (_this.isLimited(text.length)) {
                                    return;
                                }

                                var rng = _this.getLastRange();

                                var textNode = rng.insertNode(dom.createText(text));

                                _this.setLastRange(range.create(textNode, dom.nodeLength(textNode)).select());
                            });
                            /**
                             * paste HTML
                             * @param {String} markup
                             */

                            this.pasteHTML = this.wrapCommand(function(markup) {
                                if (_this.isLimited(markup.length)) {
                                    return;
                                }

                                markup = _this.context.invoke('codeview.purify', markup);

                                var contents = _this.getLastRange().pasteHTML(markup);

                                _this.setLastRange(range.createFromNodeAfter(lists.last(contents)).select());
                            });
                            /**
                             * formatBlock
                             *
                             * @param {String} tagName
                             */

                            this.formatBlock = this.wrapCommand(function(tagName, $target) {
                                var onApplyCustomStyle = _this.options.callbacks.onApplyCustomStyle;

                                if (onApplyCustomStyle) {
                                    onApplyCustomStyle.call(_this, $target, _this.context, _this.onFormatBlock);
                                } else {
                                    _this.onFormatBlock(tagName, $target);
                                }
                            });
                            /**
                             * insert horizontal rule
                             */

                            this.insertHorizontalRule = this.wrapCommand(function() {
                                var hrNode = _this.getLastRange().insertNode(dom.create('HR'));

                                if (hrNode.nextSibling) {
                                    _this.setLastRange(range.create(hrNode.nextSibling, 0).normalize().select());
                                }
                            });
                            /**
                             * lineHeight
                             * @param {String} value
                             */

                            this.lineHeight = this.wrapCommand(function(value) {
                                _this.style.stylePara(_this.getLastRange(), {
                                    lineHeight: value
                                });
                            });
                            /**
                             * create link (command)
                             *
                             * @param {Object} linkInfo
                             */

                            this.createLink = this.wrapCommand(function(linkInfo) {
                                var linkUrl = linkInfo.url;
                                var linkText = linkInfo.text;
                                var isNewWindow = linkInfo.isNewWindow;
                                var checkProtocol = linkInfo.checkProtocol;

                                var rng = linkInfo.range || _this.getLastRange();

                                var additionalTextLength = linkText.length - rng.toString().length;

                                if (additionalTextLength > 0 && _this.isLimited(additionalTextLength)) {
                                    return;
                                }

                                var isTextChanged = rng.toString() !== linkText; // handle spaced urls from input

                                if (typeof linkUrl === 'string') {
                                    linkUrl = linkUrl.trim();
                                }

                                if (_this.options.onCreateLink) {
                                    linkUrl = _this.options.onCreateLink(linkUrl);
                                } else if (checkProtocol) {
                                    // if url doesn't have any protocol and not even a relative or a label, use http:// as default
                                    linkUrl = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(linkUrl) ? linkUrl : _this.options.defaultProtocol + linkUrl;
                                }

                                var anchors = [];

                                if (isTextChanged) {
                                    rng = rng.deleteContents();
                                    var anchor = rng.insertNode(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<A>' + linkText + '</A>')[0]);
                                    anchors.push(anchor);
                                } else {
                                    anchors = _this.style.styleNodes(rng, {
                                        nodeName: 'A',
                                        expandClosestSibling: true,
                                        onlyPartialContains: true
                                    });
                                }

                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(anchors, function(idx, anchor) {
                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('href', linkUrl);

                                    if (isNewWindow) {
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('target', '_blank');
                                    } else {
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).removeAttr('target');
                                    }
                                });
                                var startRange = range.createFromNodeBefore(lists.head(anchors));
                                var startPoint = startRange.getStartPoint();
                                var endRange = range.createFromNodeAfter(lists.last(anchors));
                                var endPoint = endRange.getEndPoint();

                                _this.setLastRange(range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset).select());
                            });
                            /**
                             * setting color
                             *
                             * @param {Object} sObjColor  color code
                             * @param {String} sObjColor.foreColor foreground color
                             * @param {String} sObjColor.backColor background color
                             */

                            this.color = this.wrapCommand(function(colorInfo) {
                                var foreColor = colorInfo.foreColor;
                                var backColor = colorInfo.backColor;

                                if (foreColor) {
                                    document.execCommand('foreColor', false, foreColor);
                                }

                                if (backColor) {
                                    document.execCommand('backColor', false, backColor);
                                }
                            });
                            /**
                             * Set foreground color
                             *
                             * @param {String} colorCode foreground color code
                             */

                            this.foreColor = this.wrapCommand(function(colorInfo) {
                                document.execCommand('foreColor', false, colorInfo);
                            });
                            /**
                             * insert Table
                             *
                             * @param {String} dimension of table (ex : "5x5")
                             */

                            this.insertTable = this.wrapCommand(function(dim) {
                                var dimension = dim.split('x');

                                var rng = _this.getLastRange().deleteContents();

                                rng.insertNode(_this.table.createTable(dimension[0], dimension[1], _this.options));
                            });
                            /**
                             * remove media object and Figure Elements if media object is img with Figure.
                             */

                            this.removeMedia = this.wrapCommand(function() {
                                var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this.restoreTarget()).parent();

                                if ($target.closest('figure').length) {
                                    $target.closest('figure').remove();
                                } else {
                                    $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this.restoreTarget()).detach();
                                }

                                _this.context.triggerEvent('media.delete', $target, _this.$editable);
                            });
                            /**
                             * float me
                             *
                             * @param {String} value
                             */

                            this.floatMe = this.wrapCommand(function(value) {
                                var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this.restoreTarget());
                                $target.toggleClass('note-float-left', value === 'left');
                                $target.toggleClass('note-float-right', value === 'right');
                                $target.css('float', value === 'none' ? '' : value);
                            });
                            /**
                             * resize overlay element
                             * @param {String} value
                             */

                            this.resize = this.wrapCommand(function(value) {
                                var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this.restoreTarget());
                                value = parseFloat(value);

                                if (value === 0) {
                                    $target.css('width', '');
                                } else {
                                    $target.css({
                                        width: value * 100 + '%',
                                        height: ''
                                    });
                                }
                            });
                        }

                        Editor_createClass(Editor, [{
                            key: "initialize",
                            value: function initialize() {
                                var _this2 = this;

                                // bind custom events
                                this.$editable.on('keydown', function(event) {
                                    if (event.keyCode === core_key.code.ENTER) {
                                        _this2.context.triggerEvent('enter', event);
                                    }

                                    _this2.context.triggerEvent('keydown', event); // keep a snapshot to limit text on input event


                                    _this2.snapshot = _this2.history.makeSnapshot();
                                    _this2.hasKeyShortCut = false;

                                    if (!event.isDefaultPrevented()) {
                                        if (_this2.options.shortcuts) {
                                            _this2.hasKeyShortCut = _this2.handleKeyMap(event);
                                        } else {
                                            _this2.preventDefaultEditableShortCuts(event);
                                        }
                                    }

                                    if (_this2.isLimited(1, event)) {
                                        var lastRange = _this2.getLastRange();

                                        if (lastRange.eo - lastRange.so === 0) {
                                            return false;
                                        }
                                    }

                                    _this2.setLastRange(); // record undo in the key event except keyMap.


                                    if (_this2.options.recordEveryKeystroke) {
                                        if (_this2.hasKeyShortCut === false) {
                                            _this2.history.recordUndo();
                                        }
                                    }
                                }).on('keyup', function(event) {
                                    _this2.setLastRange();

                                    _this2.context.triggerEvent('keyup', event);
                                }).on('focus', function(event) {
                                    _this2.setLastRange();

                                    _this2.context.triggerEvent('focus', event);
                                }).on('blur', function(event) {
                                    _this2.context.triggerEvent('blur', event);
                                }).on('mousedown', function(event) {
                                    _this2.context.triggerEvent('mousedown', event);
                                }).on('mouseup', function(event) {
                                    _this2.setLastRange();

                                    _this2.history.recordUndo();

                                    _this2.context.triggerEvent('mouseup', event);
                                }).on('scroll', function(event) {
                                    _this2.context.triggerEvent('scroll', event);
                                }).on('paste', function(event) {
                                    _this2.setLastRange();

                                    _this2.context.triggerEvent('paste', event);
                                }).on('input', function() {
                                    // To limit composition characters (e.g. Korean)
                                    if (_this2.isLimited(0) && _this2.snapshot) {
                                        _this2.history.applySnapshot(_this2.snapshot);
                                    }
                                });
                                this.$editable.attr('spellcheck', this.options.spellCheck);
                                this.$editable.attr('autocorrect', this.options.spellCheck);

                                if (this.options.disableGrammar) {
                                    this.$editable.attr('data-gramm', false);
                                } // init content before set event


                                this.$editable.html(dom.html(this.$note) || dom.emptyPara);
                                this.$editable.on(env.inputEventName, func.debounce(function() {
                                    _this2.context.triggerEvent('change', _this2.$editable.html(), _this2.$editable);
                                }, 10));
                                this.$editable.on('focusin', function(event) {
                                    _this2.context.triggerEvent('focusin', event);
                                }).on('focusout', function(event) {
                                    _this2.context.triggerEvent('focusout', event);
                                });

                                if (this.options.airMode) {
                                    if (this.options.overrideContextMenu) {
                                        this.$editor.on('contextmenu', function(event) {
                                            _this2.context.triggerEvent('contextmenu', event);

                                            return false;
                                        });
                                    }
                                } else {
                                    if (this.options.width) {
                                        this.$editor.outerWidth(this.options.width);
                                    }

                                    if (this.options.height) {
                                        this.$editable.outerHeight(this.options.height);
                                    }

                                    if (this.options.maxHeight) {
                                        this.$editable.css('max-height', this.options.maxHeight);
                                    }

                                    if (this.options.minHeight) {
                                        this.$editable.css('min-height', this.options.minHeight);
                                    }
                                }

                                this.history.recordUndo();
                                this.setLastRange();
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$editable.off();
                            }
                        }, {
                            key: "handleKeyMap",
                            value: function handleKeyMap(event) {
                                var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
                                var keys = [];

                                if (event.metaKey) {
                                    keys.push('CMD');
                                }

                                if (event.ctrlKey && !event.altKey) {
                                    keys.push('CTRL');
                                }

                                if (event.shiftKey) {
                                    keys.push('SHIFT');
                                }

                                var keyName = core_key.nameFromCode[event.keyCode];

                                if (keyName) {
                                    keys.push(keyName);
                                }

                                var eventName = keyMap[keys.join('+')];

                                if (keyName === 'TAB' && !this.options.tabDisable) {
                                    this.afterCommand();
                                } else if (eventName) {
                                    if (this.context.invoke(eventName) !== false) {
                                        event.preventDefault(); // if keyMap action was invoked

                                        return true;
                                    }
                                } else if (core_key.isEdit(event.keyCode)) {
                                    this.afterCommand();
                                }

                                return false;
                            }
                        }, {
                            key: "preventDefaultEditableShortCuts",
                            value: function preventDefaultEditableShortCuts(event) {
                                // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
                                if ((event.ctrlKey || event.metaKey) && lists.contains([66, 73, 85], event.keyCode)) {
                                    event.preventDefault();
                                }
                            }
                        }, {
                            key: "isLimited",
                            value: function isLimited(pad, event) {
                                    pad = pad || 0;

                                    if (typeof event !== 'undefined') {
                                        if (core_key.isMove(event.keyCode) || core_key.isNavigation(event.keyCode) || event.ctrlKey || event.metaKey || lists.contains([core_key.code.BACKSPACE, core_key.code.DELETE], event.keyCode)) {
                                            return false;
                                        }
                                    }

                                    if (this.options.maxTextLength > 0) {
                                        if (this.$editable.text().length + pad > this.options.maxTextLength) {
                                            return true;
                                        }
                                    }

                                    return false;
                                }
                                /**
                                 * create range
                                 * @return {WrappedRange}
                                 */

                        }, {
                            key: "createRange",
                            value: function createRange() {
                                this.focus();
                                this.setLastRange();
                                return this.getLastRange();
                            }
                        }, {
                            key: "setLastRange",
                            value: function setLastRange(rng) {
                                if (rng) {
                                    this.lastRange = rng;
                                } else {
                                    this.lastRange = range.create(this.editable);

                                    if (external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.lastRange.sc).closest('.note-editable').length === 0) {
                                        this.lastRange = range.createFromBodyElement(this.editable);
                                    }
                                }
                            }
                        }, {
                            key: "getLastRange",
                            value: function getLastRange() {
                                    if (!this.lastRange) {
                                        this.setLastRange();
                                    }

                                    return this.lastRange;
                                }
                                /**
                                 * saveRange
                                 *
                                 * save current range
                                 *
                                 * @param {Boolean} [thenCollapse=false]
                                 */

                        }, {
                            key: "saveRange",
                            value: function saveRange(thenCollapse) {
                                    if (thenCollapse) {
                                        this.getLastRange().collapse().select();
                                    }
                                }
                                /**
                                 * restoreRange
                                 *
                                 * restore lately range
                                 */

                        }, {
                            key: "restoreRange",
                            value: function restoreRange() {
                                if (this.lastRange) {
                                    this.lastRange.select();
                                    this.focus();
                                }
                            }
                        }, {
                            key: "saveTarget",
                            value: function saveTarget(node) {
                                this.$editable.data('target', node);
                            }
                        }, {
                            key: "clearTarget",
                            value: function clearTarget() {
                                this.$editable.removeData('target');
                            }
                        }, {
                            key: "restoreTarget",
                            value: function restoreTarget() {
                                    return this.$editable.data('target');
                                }
                                /**
                                 * currentStyle
                                 *
                                 * current style
                                 * @return {Object|Boolean} unfocus
                                 */

                        }, {
                            key: "currentStyle",
                            value: function currentStyle() {
                                    var rng = range.create();

                                    if (rng) {
                                        rng = rng.normalize();
                                    }

                                    return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
                                }
                                /**
                                 * style from node
                                 *
                                 * @param {jQuery} $node
                                 * @return {Object}
                                 */

                        }, {
                            key: "styleFromNode",
                            value: function styleFromNode($node) {
                                    return this.style.fromNode($node);
                                }
                                /**
                                 * undo
                                 */

                        }, {
                            key: "undo",
                            value: function undo() {
                                    this.context.triggerEvent('before.command', this.$editable.html());
                                    this.history.undo();
                                    this.context.triggerEvent('change', this.$editable.html(), this.$editable);
                                }
                                /*
                                 * commit
                                 */

                        }, {
                            key: "commit",
                            value: function commit() {
                                    this.context.triggerEvent('before.command', this.$editable.html());
                                    this.history.commit();
                                    this.context.triggerEvent('change', this.$editable.html(), this.$editable);
                                }
                                /**
                                 * redo
                                 */

                        }, {
                            key: "redo",
                            value: function redo() {
                                    this.context.triggerEvent('before.command', this.$editable.html());
                                    this.history.redo();
                                    this.context.triggerEvent('change', this.$editable.html(), this.$editable);
                                }
                                /**
                                 * before command
                                 */

                        }, {
                            key: "beforeCommand",
                            value: function beforeCommand() {
                                    this.context.triggerEvent('before.command', this.$editable.html()); // Set styleWithCSS before run a command

                                    document.execCommand('styleWithCSS', false, this.options.styleWithCSS); // keep focus on editable before command execution

                                    this.focus();
                                }
                                /**
                                 * after command
                                 * @param {Boolean} isPreventTrigger
                                 */

                        }, {
                            key: "afterCommand",
                            value: function afterCommand(isPreventTrigger) {
                                    this.normalizeContent();
                                    this.history.recordUndo();

                                    if (!isPreventTrigger) {
                                        this.context.triggerEvent('change', this.$editable.html(), this.$editable);
                                    }
                                }
                                /**
                                 * handle tab key
                                 */

                        }, {
                            key: "tab",
                            value: function tab() {
                                    var rng = this.getLastRange();

                                    if (rng.isCollapsed() && rng.isOnCell()) {
                                        this.table.tab(rng);
                                    } else {
                                        if (this.options.tabSize === 0) {
                                            return false;
                                        }

                                        if (!this.isLimited(this.options.tabSize)) {
                                            this.beforeCommand();
                                            this.typing.insertTab(rng, this.options.tabSize);
                                            this.afterCommand();
                                        }
                                    }
                                }
                                /**
                                 * handle shift+tab key
                                 */

                        }, {
                            key: "untab",
                            value: function untab() {
                                    var rng = this.getLastRange();

                                    if (rng.isCollapsed() && rng.isOnCell()) {
                                        this.table.tab(rng, true);
                                    } else {
                                        if (this.options.tabSize === 0) {
                                            return false;
                                        }
                                    }
                                }
                                /**
                                 * run given function between beforeCommand and afterCommand
                                 */

                        }, {
                            key: "wrapCommand",
                            value: function wrapCommand(fn) {
                                    return function() {
                                        this.beforeCommand();
                                        fn.apply(this, arguments);
                                        this.afterCommand();
                                    };
                                }
                                /**
                                 * insert image
                                 *
                                 * @param {String} src
                                 * @param {String|Function} param
                                 * @return {Promise}
                                 */

                        }, {
                            key: "insertImage",
                            value: function insertImage(src, param) {
                                    var _this3 = this;

                                    return createImage(src, param).then(function($image) {
                                        _this3.beforeCommand();

                                        if (typeof param === 'function') {
                                            param($image);
                                        } else {
                                            if (typeof param === 'string') {
                                                $image.attr('data-filename', param);
                                            }

                                            $image.css('width', Math.min(_this3.$editable.width(), $image.width()));
                                        }

                                        $image.show();

                                        _this3.getLastRange().insertNode($image[0]);

                                        _this3.setLastRange(range.createFromNodeAfter($image[0]).select());

                                        _this3.afterCommand();
                                    }).fail(function(e) {
                                        _this3.context.triggerEvent('image.upload.error', e);
                                    });
                                }
                                /**
                                 * insertImages
                                 * @param {File[]} files
                                 */

                        }, {
                            key: "insertImagesAsDataURL",
                            value: function insertImagesAsDataURL(files) {
                                    var _this4 = this;

                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(files, function(idx, file) {
                                        var filename = file.name;

                                        if (_this4.options.maximumImageFileSize && _this4.options.maximumImageFileSize < file.size) {
                                            _this4.context.triggerEvent('image.upload.error', _this4.lang.image.maximumFileSizeError);
                                        } else {
                                            readFileAsDataURL(file).then(function(dataURL) {
                                                return _this4.insertImage(dataURL, filename);
                                            }).fail(function() {
                                                _this4.context.triggerEvent('image.upload.error');
                                            });
                                        }
                                    });
                                }
                                /**
                                 * insertImagesOrCallback
                                 * @param {File[]} files
                                 */

                        }, {
                            key: "insertImagesOrCallback",
                            value: function insertImagesOrCallback(files) {
                                    var callbacks = this.options.callbacks; // If onImageUpload set,

                                    if (callbacks.onImageUpload) {
                                        this.context.triggerEvent('image.upload', files); // else insert Image as dataURL
                                    } else {
                                        this.insertImagesAsDataURL(files);
                                    }
                                }
                                /**
                                 * return selected plain text
                                 * @return {String} text
                                 */

                        }, {
                            key: "getSelectedText",
                            value: function getSelectedText() {
                                var rng = this.getLastRange(); // if range on anchor, expand range with anchor

                                if (rng.isOnAnchor()) {
                                    rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
                                }

                                return rng.toString();
                            }
                        }, {
                            key: "onFormatBlock",
                            value: function onFormatBlock(tagName, $target) {
                                // [workaround] for MSIE, IE need `<`
                                document.execCommand('FormatBlock', false, env.isMSIE ? '<' + tagName + '>' : tagName); // support custom class

                                if ($target && $target.length) {
                                    // find the exact element has given tagName
                                    if ($target[0].tagName.toUpperCase() !== tagName.toUpperCase()) {
                                        $target = $target.find(tagName);
                                    }

                                    if ($target && $target.length) {
                                        var className = $target[0].className || '';

                                        if (className) {
                                            var currentRange = this.createRange();
                                            var $parent = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()([currentRange.sc, currentRange.ec]).closest(tagName);
                                            $parent.addClass(className);
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "formatPara",
                            value: function formatPara() {
                                this.formatBlock('P');
                            }
                        }, {
                            key: "fontStyling",
                            value: function fontStyling(target, value) {
                                    var rng = this.getLastRange();

                                    if (rng !== '') {
                                        var spans = this.style.styleNodes(rng);
                                        this.$editor.find('.note-status-output').html('');
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(spans).css(target, value); // [workaround] added styled bogus span for style
                                        //  - also bogus character needed for cursor position

                                        if (rng.isCollapsed()) {
                                            var firstSpan = lists.head(spans);

                                            if (firstSpan && !dom.nodeLength(firstSpan)) {
                                                firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
                                                range.createFromNodeAfter(firstSpan.firstChild).select();
                                                this.setLastRange();
                                                this.$editable.data(KEY_BOGUS, firstSpan);
                                            }
                                        }
                                    } else {
                                        var noteStatusOutput = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.now();
                                        this.$editor.find('.note-status-output').html('<div id="note-status-output-' + noteStatusOutput + '" class="alert alert-info">' + this.lang.output.noSelection + '</div>');
                                        setTimeout(function() {
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('#note-status-output-' + noteStatusOutput).remove();
                                        }, 5000);
                                    }
                                }
                                /**
                                 * unlink
                                 *
                                 * @type command
                                 */

                        }, {
                            key: "unlink",
                            value: function unlink() {
                                    var rng = this.getLastRange();

                                    if (rng.isOnAnchor()) {
                                        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
                                        rng = range.createFromNode(anchor);
                                        rng.select();
                                        this.setLastRange();
                                        this.beforeCommand();
                                        document.execCommand('unlink');
                                        this.afterCommand();
                                    }
                                }
                                /**
                                 * returns link info
                                 *
                                 * @return {Object}
                                 * @return {WrappedRange} return.range
                                 * @return {String} return.text
                                 * @return {Boolean} [return.isNewWindow=true]
                                 * @return {String} [return.url=""]
                                 */

                        }, {
                            key: "getLinkInfo",
                            value: function getLinkInfo() {
                                var rng = this.getLastRange().expand(dom.isAnchor); // Get the first anchor on range(for edit).

                                var $anchor = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(lists.head(rng.nodes(dom.isAnchor)));
                                var linkInfo = {
                                    range: rng,
                                    text: rng.toString(),
                                    url: $anchor.length ? $anchor.attr('href') : ''
                                }; // When anchor exists,

                                if ($anchor.length) {
                                    // Set isNewWindow by checking its target.
                                    linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
                                }

                                return linkInfo;
                            }
                        }, {
                            key: "addRow",
                            value: function addRow(position) {
                                var rng = this.getLastRange(this.$editable);

                                if (rng.isCollapsed() && rng.isOnCell()) {
                                    this.beforeCommand();
                                    this.table.addRow(rng, position);
                                    this.afterCommand();
                                }
                            }
                        }, {
                            key: "addCol",
                            value: function addCol(position) {
                                var rng = this.getLastRange(this.$editable);

                                if (rng.isCollapsed() && rng.isOnCell()) {
                                    this.beforeCommand();
                                    this.table.addCol(rng, position);
                                    this.afterCommand();
                                }
                            }
                        }, {
                            key: "deleteRow",
                            value: function deleteRow() {
                                var rng = this.getLastRange(this.$editable);

                                if (rng.isCollapsed() && rng.isOnCell()) {
                                    this.beforeCommand();
                                    this.table.deleteRow(rng);
                                    this.afterCommand();
                                }
                            }
                        }, {
                            key: "deleteCol",
                            value: function deleteCol() {
                                var rng = this.getLastRange(this.$editable);

                                if (rng.isCollapsed() && rng.isOnCell()) {
                                    this.beforeCommand();
                                    this.table.deleteCol(rng);
                                    this.afterCommand();
                                }
                            }
                        }, {
                            key: "deleteTable",
                            value: function deleteTable() {
                                    var rng = this.getLastRange(this.$editable);

                                    if (rng.isCollapsed() && rng.isOnCell()) {
                                        this.beforeCommand();
                                        this.table.deleteTable(rng);
                                        this.afterCommand();
                                    }
                                }
                                /**
                                 * @param {Position} pos
                                 * @param {jQuery} $target - target element
                                 * @param {Boolean} [bKeepRatio] - keep ratio
                                 */

                        }, {
                            key: "resizeTo",
                            value: function resizeTo(pos, $target, bKeepRatio) {
                                    var imageSize;

                                    if (bKeepRatio) {
                                        var newRatio = pos.y / pos.x;
                                        var ratio = $target.data('ratio');
                                        imageSize = {
                                            width: ratio > newRatio ? pos.x : pos.y / ratio,
                                            height: ratio > newRatio ? pos.x * ratio : pos.y
                                        };
                                    } else {
                                        imageSize = {
                                            width: pos.x,
                                            height: pos.y
                                        };
                                    }

                                    $target.css(imageSize);
                                }
                                /**
                                 * returns whether editable area has focus or not.
                                 */

                        }, {
                            key: "hasFocus",
                            value: function hasFocus() {
                                    return this.$editable.is(':focus');
                                }
                                /**
                                 * set focus
                                 */

                        }, {
                            key: "focus",
                            value: function focus() {
                                    // [workaround] Screen will move when page is scolled in IE.
                                    //  - do focus when not focused
                                    if (!this.hasFocus()) {
                                        this.$editable.focus();
                                    }
                                }
                                /**
                                 * returns whether contents is empty or not.
                                 * @return {Boolean}
                                 */

                        }, {
                            key: "isEmpty",
                            value: function isEmpty() {
                                    return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
                                }
                                /**
                                 * Removes all contents and restores the editable instance to an _emptyPara_.
                                 */

                        }, {
                            key: "empty",
                            value: function empty() {
                                    this.context.invoke('code', dom.emptyPara);
                                }
                                /**
                                 * normalize content
                                 */

                        }, {
                            key: "normalizeContent",
                            value: function normalizeContent() {
                                this.$editable[0].normalize();
                            }
                        }]);

                        return Editor;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Clipboard.js
                function Clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Clipboard_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clipboard_defineProperties(Constructor, staticProps); return Constructor; }



                var Clipboard_Clipboard =
                    /*#__PURE__*/
                    function() {
                        function Clipboard(context) {
                            Clipboard_classCallCheck(this, Clipboard);

                            this.context = context;
                            this.$editable = context.layoutInfo.editable;
                        }

                        Clipboard_createClass(Clipboard, [{
                            key: "initialize",
                            value: function initialize() {
                                    this.$editable.on('paste', this.pasteByEvent.bind(this));
                                }
                                /**
                                 * paste by clipboard event
                                 *
                                 * @param {Event} event
                                 */

                        }, {
                            key: "pasteByEvent",
                            value: function pasteByEvent(event) {
                                var _this = this;

                                var clipboardData = event.originalEvent.clipboardData;

                                if (clipboardData && clipboardData.items && clipboardData.items.length) {
                                    var item = clipboardData.items.length > 1 ? clipboardData.items[1] : lists.head(clipboardData.items);

                                    if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                                        // paste img file
                                        this.context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
                                        event.preventDefault();
                                    } else if (item.kind === 'string') {
                                        // paste text with maxTextLength check
                                        if (this.context.invoke('editor.isLimited', clipboardData.getData('Text').length)) {
                                            event.preventDefault();
                                        }
                                    }
                                } else if (window.clipboardData) {
                                    // for IE
                                    var text = window.clipboardData.getData('text');

                                    if (this.context.invoke('editor.isLimited', text.length)) {
                                        event.preventDefault();
                                    }
                                } // Call editor.afterCommand after proceeding default event handler


                                setTimeout(function() {
                                    _this.context.invoke('editor.afterCommand');
                                }, 10);
                            }
                        }]);

                        return Clipboard;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Dropzone.js
                function Dropzone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Dropzone_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Dropzone_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dropzone_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dropzone_defineProperties(Constructor, staticProps); return Constructor; }



                var Dropzone_Dropzone =
                    /*#__PURE__*/
                    function() {
                        function Dropzone(context) {
                            Dropzone_classCallCheck(this, Dropzone);

                            this.context = context;
                            this.$eventListener = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
                            this.$editor = context.layoutInfo.editor;
                            this.$editable = context.layoutInfo.editable;
                            this.options = context.options;
                            this.lang = this.options.langInfo;
                            this.documentEventHandlers = {};
                            this.$dropzone = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(['<div class="note-dropzone">', '<div class="note-dropzone-message"/>', '</div>'].join('')).prependTo(this.$editor);
                        }
                        /**
                         * attach Drag and Drop Events
                         */


                        Dropzone_createClass(Dropzone, [{
                            key: "initialize",
                            value: function initialize() {
                                    if (this.options.disableDragAndDrop) {
                                        // prevent default drop event
                                        this.documentEventHandlers.onDrop = function(e) {
                                            e.preventDefault();
                                        }; // do not consider outside of dropzone


                                        this.$eventListener = this.$dropzone;
                                        this.$eventListener.on('drop', this.documentEventHandlers.onDrop);
                                    } else {
                                        this.attachDragAndDropEvent();
                                    }
                                }
                                /**
                                 * attach Drag and Drop Events
                                 */

                        }, {
                            key: "attachDragAndDropEvent",
                            value: function attachDragAndDropEvent() {
                                var _this = this;

                                var collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();
                                var $dropzoneMessage = this.$dropzone.find('.note-dropzone-message');

                                this.documentEventHandlers.onDragenter = function(e) {
                                    var isCodeview = _this.context.invoke('codeview.isActivated');

                                    var hasEditorSize = _this.$editor.width() > 0 && _this.$editor.height() > 0;

                                    if (!isCodeview && !collection.length && hasEditorSize) {
                                        _this.$editor.addClass('dragover');

                                        _this.$dropzone.width(_this.$editor.width());

                                        _this.$dropzone.height(_this.$editor.height());

                                        $dropzoneMessage.text(_this.lang.image.dragImageHere);
                                    }

                                    collection = collection.add(e.target);
                                };

                                this.documentEventHandlers.onDragleave = function(e) {
                                    collection = collection.not(e.target); // If nodeName is BODY, then just make it over (fix for IE)

                                    if (!collection.length || e.target.nodeName === 'BODY') {
                                        collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();

                                        _this.$editor.removeClass('dragover');
                                    }
                                };

                                this.documentEventHandlers.onDrop = function() {
                                    collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();

                                    _this.$editor.removeClass('dragover');
                                }; // show dropzone on dragenter when dragging a object to document
                                // -but only if the editor is visible, i.e. has a positive width and height


                                this.$eventListener.on('dragenter', this.documentEventHandlers.onDragenter).on('dragleave', this.documentEventHandlers.onDragleave).on('drop', this.documentEventHandlers.onDrop); // change dropzone's message on hover.

                                this.$dropzone.on('dragenter', function() {
                                    _this.$dropzone.addClass('hover');

                                    $dropzoneMessage.text(_this.lang.image.dropImage);
                                }).on('dragleave', function() {
                                    _this.$dropzone.removeClass('hover');

                                    $dropzoneMessage.text(_this.lang.image.dragImageHere);
                                }); // attach dropImage

                                this.$dropzone.on('drop', function(event) {
                                    var dataTransfer = event.originalEvent.dataTransfer; // stop the browser from opening the dropped content

                                    event.preventDefault();

                                    if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                                        _this.$editable.focus();

                                        _this.context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
                                    } else {
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(dataTransfer.types, function(idx, type) {
                                            // skip moz-specific types
                                            if (type.toLowerCase().indexOf('_moz_') > -1) {
                                                return;
                                            }

                                            var content = dataTransfer.getData(type);

                                            if (type.toLowerCase().indexOf('text') > -1) {
                                                _this.context.invoke('editor.pasteHTML', content);
                                            } else {
                                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(content).each(function(idx, item) {
                                                    _this.context.invoke('editor.insertNode', item);
                                                });
                                            }
                                        });
                                    }
                                }).on('dragover', false); // prevent default dragover event
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                var _this2 = this;

                                Object.keys(this.documentEventHandlers).forEach(function(key) {
                                    _this2.$eventListener.off(key.substr(2).toLowerCase(), _this2.documentEventHandlers[key]);
                                });
                                this.documentEventHandlers = {};
                            }
                        }]);

                        return Dropzone;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Codeview.js
                function Codeview_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Codeview_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Codeview_createClass(Constructor, protoProps, staticProps) { if (protoProps) Codeview_defineProperties(Constructor.prototype, protoProps); if (staticProps) Codeview_defineProperties(Constructor, staticProps); return Constructor; }



                var CodeMirror;

                if (env.hasCodeMirror) {
                    CodeMirror = window.CodeMirror;
                }
                /**
                 * @class Codeview
                 */


                var Codeview_CodeView =
                    /*#__PURE__*/
                    function() {
                        function CodeView(context) {
                            Codeview_classCallCheck(this, CodeView);

                            this.context = context;
                            this.$editor = context.layoutInfo.editor;
                            this.$editable = context.layoutInfo.editable;
                            this.$codable = context.layoutInfo.codable;
                            this.options = context.options;
                        }

                        Codeview_createClass(CodeView, [{
                            key: "sync",
                            value: function sync() {
                                    var isCodeview = this.isActivated();

                                    if (isCodeview && env.hasCodeMirror) {
                                        this.$codable.data('cmEditor').save();
                                    }
                                }
                                /**
                                 * @return {Boolean}
                                 */

                        }, {
                            key: "isActivated",
                            value: function isActivated() {
                                    return this.$editor.hasClass('codeview');
                                }
                                /**
                                 * toggle codeview
                                 */

                        }, {
                            key: "toggle",
                            value: function toggle() {
                                    if (this.isActivated()) {
                                        this.deactivate();
                                    } else {
                                        this.activate();
                                    }

                                    this.context.triggerEvent('codeview.toggled');
                                }
                                /**
                                 * purify input value
                                 * @param value
                                 * @returns {*}
                                 */

                        }, {
                            key: "purify",
                            value: function purify(value) {
                                    if (this.options.codeviewFilter) {
                                        // filter code view regex
                                        value = value.replace(this.options.codeviewFilterRegex, ''); // allow specific iframe tag

                                        if (this.options.codeviewIframeFilter) {
                                            var whitelist = this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);
                                            value = value.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, function(tag) {
                                                // remove if src attribute is duplicated
                                                if (/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(tag)) {
                                                    return '';
                                                }

                                                var _iteratorNormalCompletion = true;
                                                var _didIteratorError = false;
                                                var _iteratorError = undefined;

                                                try {
                                                    for (var _iterator = whitelist[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                                        var src = _step.value;

                                                        // pass if src is trusted
                                                        if (new RegExp('src="(https?:)?\/\/' + src.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\/(.+)"').test(tag)) {
                                                            return tag;
                                                        }
                                                    }
                                                } catch (err) {
                                                    _didIteratorError = true;
                                                    _iteratorError = err;
                                                } finally {
                                                    try {
                                                        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                                                            _iterator["return"]();
                                                        }
                                                    } finally {
                                                        if (_didIteratorError) {
                                                            throw _iteratorError;
                                                        }
                                                    }
                                                }

                                                return '';
                                            });
                                        }
                                    }

                                    return value;
                                }
                                /**
                                 * activate code view
                                 */

                        }, {
                            key: "activate",
                            value: function activate() {
                                    var _this = this;

                                    this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
                                    this.$codable.height(this.$editable.height());
                                    this.context.invoke('toolbar.updateCodeview', true);
                                    this.$editor.addClass('codeview');
                                    this.$codable.focus(); // activate CodeMirror as codable

                                    if (env.hasCodeMirror) {
                                        var cmEditor = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror); // CodeMirror TernServer

                                        if (this.options.codemirror.tern) {
                                            var server = new CodeMirror.TernServer(this.options.codemirror.tern);
                                            cmEditor.ternServer = server;
                                            cmEditor.on('cursorActivity', function(cm) {
                                                server.updateArgHints(cm);
                                            });
                                        }

                                        cmEditor.on('blur', function(event) {
                                            _this.context.triggerEvent('blur.codeview', cmEditor.getValue(), event);
                                        });
                                        cmEditor.on('change', function() {
                                            _this.context.triggerEvent('change.codeview', cmEditor.getValue(), cmEditor);
                                        }); // CodeMirror hasn't Padding.

                                        cmEditor.setSize(null, this.$editable.outerHeight());
                                        this.$codable.data('cmEditor', cmEditor);
                                    } else {
                                        this.$codable.on('blur', function(event) {
                                            _this.context.triggerEvent('blur.codeview', _this.$codable.val(), event);
                                        });
                                        this.$codable.on('input', function() {
                                            _this.context.triggerEvent('change.codeview', _this.$codable.val(), _this.$codable);
                                        });
                                    }
                                }
                                /**
                                 * deactivate code view
                                 */

                        }, {
                            key: "deactivate",
                            value: function deactivate() {
                                // deactivate CodeMirror as codable
                                if (env.hasCodeMirror) {
                                    var cmEditor = this.$codable.data('cmEditor');
                                    this.$codable.val(cmEditor.getValue());
                                    cmEditor.toTextArea();
                                }

                                var value = this.purify(dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara);
                                var isChange = this.$editable.html() !== value;
                                this.$editable.html(value);
                                this.$editable.height(this.options.height ? this.$codable.height() : 'auto');
                                this.$editor.removeClass('codeview');

                                if (isChange) {
                                    this.context.triggerEvent('change', this.$editable.html(), this.$editable);
                                }

                                this.$editable.focus();
                                this.context.invoke('toolbar.updateCodeview', false);
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                if (this.isActivated()) {
                                    this.deactivate();
                                }
                            }
                        }]);

                        return CodeView;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Statusbar.js
                function Statusbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Statusbar_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Statusbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Statusbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Statusbar_defineProperties(Constructor, staticProps); return Constructor; }


                var EDITABLE_PADDING = 24;

                var Statusbar_Statusbar =
                    /*#__PURE__*/
                    function() {
                        function Statusbar(context) {
                            Statusbar_classCallCheck(this, Statusbar);

                            this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
                            this.$statusbar = context.layoutInfo.statusbar;
                            this.$editable = context.layoutInfo.editable;
                            this.options = context.options;
                        }

                        Statusbar_createClass(Statusbar, [{
                            key: "initialize",
                            value: function initialize() {
                                var _this = this;

                                if (this.options.airMode || this.options.disableResizeEditor) {
                                    this.destroy();
                                    return;
                                }

                                this.$statusbar.on('mousedown', function(event) {
                                    event.preventDefault();
                                    event.stopPropagation();

                                    var editableTop = _this.$editable.offset().top - _this.$document.scrollTop();

                                    var onMouseMove = function onMouseMove(event) {
                                        var height = event.clientY - (editableTop + EDITABLE_PADDING);
                                        height = _this.options.minheight > 0 ? Math.max(height, _this.options.minheight) : height;
                                        height = _this.options.maxHeight > 0 ? Math.min(height, _this.options.maxHeight) : height;

                                        _this.$editable.height(height);
                                    };

                                    _this.$document.on('mousemove', onMouseMove).one('mouseup', function() {
                                        _this.$document.off('mousemove', onMouseMove);
                                    });
                                });
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$statusbar.off();
                                this.$statusbar.addClass('locked');
                            }
                        }]);

                        return Statusbar;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Fullscreen.js
                function Fullscreen_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Fullscreen_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Fullscreen_createClass(Constructor, protoProps, staticProps) { if (protoProps) Fullscreen_defineProperties(Constructor.prototype, protoProps); if (staticProps) Fullscreen_defineProperties(Constructor, staticProps); return Constructor; }



                var Fullscreen_Fullscreen =
                    /*#__PURE__*/
                    function() {
                        function Fullscreen(context) {
                            var _this = this;

                            Fullscreen_classCallCheck(this, Fullscreen);

                            this.context = context;
                            this.$editor = context.layoutInfo.editor;
                            this.$toolbar = context.layoutInfo.toolbar;
                            this.$editable = context.layoutInfo.editable;
                            this.$codable = context.layoutInfo.codable;
                            this.$window = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(window);
                            this.$scrollbar = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('html, body');

                            this.onResize = function() {
                                _this.resizeTo({
                                    h: _this.$window.height() - _this.$toolbar.outerHeight()
                                });
                            };
                        }

                        Fullscreen_createClass(Fullscreen, [{
                            key: "resizeTo",
                            value: function resizeTo(size) {
                                    this.$editable.css('height', size.h);
                                    this.$codable.css('height', size.h);

                                    if (this.$codable.data('cmeditor')) {
                                        this.$codable.data('cmeditor').setsize(null, size.h);
                                    }
                                }
                                /**
                                 * toggle fullscreen
                                 */

                        }, {
                            key: "toggle",
                            value: function toggle() {
                                this.$editor.toggleClass('fullscreen');

                                if (this.isFullscreen()) {
                                    this.$editable.data('orgHeight', this.$editable.css('height'));
                                    this.$editable.data('orgMaxHeight', this.$editable.css('maxHeight'));
                                    this.$editable.css('maxHeight', '');
                                    this.$window.on('resize', this.onResize).trigger('resize');
                                    this.$scrollbar.css('overflow', 'hidden');
                                } else {
                                    this.$window.off('resize', this.onResize);
                                    this.resizeTo({
                                        h: this.$editable.data('orgHeight')
                                    });
                                    this.$editable.css('maxHeight', this.$editable.css('orgMaxHeight'));
                                    this.$scrollbar.css('overflow', 'visible');
                                }

                                this.context.invoke('toolbar.updateFullscreen', this.isFullscreen());
                            }
                        }, {
                            key: "isFullscreen",
                            value: function isFullscreen() {
                                return this.$editor.hasClass('fullscreen');
                            }
                        }]);

                        return Fullscreen;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Handle.js
                function Handle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Handle_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Handle_createClass(Constructor, protoProps, staticProps) { if (protoProps) Handle_defineProperties(Constructor.prototype, protoProps); if (staticProps) Handle_defineProperties(Constructor, staticProps); return Constructor; }




                var Handle_Handle =
                    /*#__PURE__*/
                    function() {
                        function Handle(context) {
                            var _this = this;

                            Handle_classCallCheck(this, Handle);

                            this.context = context;
                            this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
                            this.$editingArea = context.layoutInfo.editingArea;
                            this.options = context.options;
                            this.lang = this.options.langInfo;
                            this.events = {
                                'summernote.mousedown': function summernoteMousedown(we, e) {
                                    if (_this.update(e.target, e)) {
                                        e.preventDefault();
                                    }
                                },
                                'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function summernoteKeyupSummernoteScrollSummernoteChangeSummernoteDialogShown() {
                                    _this.update();
                                },
                                'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
                                    _this.hide();
                                },
                                'summernote.codeview.toggled': function summernoteCodeviewToggled() {
                                    _this.update();
                                }
                            };
                        }

                        Handle_createClass(Handle, [{
                            key: "initialize",
                            value: function initialize() {
                                var _this2 = this;

                                this.$handle = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing', ' note-control-se"></div>', this.options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>', '</div>', '</div>'].join('')).prependTo(this.$editingArea);
                                this.$handle.on('mousedown', function(event) {
                                    if (dom.isControlSizing(event.target)) {
                                        event.preventDefault();
                                        event.stopPropagation();

                                        var $target = _this2.$handle.find('.note-control-selection').data('target');

                                        var posStart = $target.offset();

                                        var scrollTop = _this2.$document.scrollTop();

                                        var onMouseMove = function onMouseMove(event) {
                                            _this2.context.invoke('editor.resizeTo', {
                                                x: event.clientX - posStart.left,
                                                y: event.clientY - (posStart.top - scrollTop)
                                            }, $target, !event.shiftKey);

                                            _this2.update($target[0], event);
                                        };

                                        _this2.$document.on('mousemove', onMouseMove).one('mouseup', function(e) {
                                            e.preventDefault();

                                            _this2.$document.off('mousemove', onMouseMove);

                                            _this2.context.invoke('editor.afterCommand');
                                        });

                                        if (!$target.data('ratio')) {
                                            // original ratio.
                                            $target.data('ratio', $target.height() / $target.width());
                                        }
                                    }
                                }); // Listen for scrolling on the handle overlay.

                                this.$handle.on('wheel', function(e) {
                                    e.preventDefault();

                                    _this2.update();
                                });
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$handle.remove();
                            }
                        }, {
                            key: "update",
                            value: function update(target, event) {
                                    if (this.context.isDisabled()) {
                                        return false;
                                    }

                                    var isImage = dom.isImg(target);
                                    var $selection = this.$handle.find('.note-control-selection');
                                    this.context.invoke('imagePopover.update', target, event);

                                    if (isImage) {
                                        var $image = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(target);
                                        var position = $image.position();
                                        var pos = {
                                            left: position.left + parseInt($image.css('marginLeft'), 10),
                                            top: position.top + parseInt($image.css('marginTop'), 10)
                                        }; // exclude margin

                                        var imageSize = {
                                            w: $image.outerWidth(false),
                                            h: $image.outerHeight(false)
                                        };
                                        $selection.css({
                                            display: 'block',
                                            left: pos.left,
                                            top: pos.top,
                                            width: imageSize.w,
                                            height: imageSize.h
                                        }).data('target', $image); // save current image element.

                                        var origImageObj = new Image();
                                        origImageObj.src = $image.attr('src');
                                        var sizingText = imageSize.w + 'x' + imageSize.h + ' (' + this.lang.image.original + ': ' + origImageObj.width + 'x' + origImageObj.height + ')';
                                        $selection.find('.note-control-selection-info').text(sizingText);
                                        this.context.invoke('editor.saveTarget', target);
                                    } else {
                                        this.hide();
                                    }

                                    return isImage;
                                }
                                /**
                                 * hide
                                 *
                                 * @param {jQuery} $handle
                                 */

                        }, {
                            key: "hide",
                            value: function hide() {
                                this.context.invoke('editor.clearTarget');
                                this.$handle.children().hide();
                            }
                        }]);

                        return Handle;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/AutoLink.js
                function AutoLink_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function AutoLink_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function AutoLink_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoLink_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoLink_defineProperties(Constructor, staticProps); return Constructor; }




                var defaultScheme = 'http://';
                var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;

                var AutoLink_AutoLink =
                    /*#__PURE__*/
                    function() {
                        function AutoLink(context) {
                            var _this = this;

                            AutoLink_classCallCheck(this, AutoLink);

                            this.context = context;
                            this.events = {
                                'summernote.keyup': function summernoteKeyup(we, e) {
                                    if (!e.isDefaultPrevented()) {
                                        _this.handleKeyup(e);
                                    }
                                },
                                'summernote.keydown': function summernoteKeydown(we, e) {
                                    _this.handleKeydown(e);
                                }
                            };
                        }

                        AutoLink_createClass(AutoLink, [{
                            key: "initialize",
                            value: function initialize() {
                                this.lastWordRange = null;
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.lastWordRange = null;
                            }
                        }, {
                            key: "replace",
                            value: function replace() {
                                if (!this.lastWordRange) {
                                    return;
                                }

                                var keyword = this.lastWordRange.toString();
                                var match = keyword.match(linkPattern);

                                if (match && (match[1] || match[2])) {
                                    var link = match[1] ? keyword : defaultScheme + keyword;
                                    var urlText = keyword.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:www\.)?/i, '').split('/')[0];
                                    var node = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<a />').html(urlText).attr('href', link)[0];

                                    if (this.context.options.linkTargetBlank) {
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).attr('target', '_blank');
                                    }

                                    this.lastWordRange.insertNode(node);
                                    this.lastWordRange = null;
                                    this.context.invoke('editor.focus');
                                }
                            }
                        }, {
                            key: "handleKeydown",
                            value: function handleKeydown(e) {
                                if (lists.contains([core_key.code.ENTER, core_key.code.SPACE], e.keyCode)) {
                                    var wordRange = this.context.invoke('editor.createRange').getWordRange();
                                    this.lastWordRange = wordRange;
                                }
                            }
                        }, {
                            key: "handleKeyup",
                            value: function handleKeyup(e) {
                                if (lists.contains([core_key.code.ENTER, core_key.code.SPACE], e.keyCode)) {
                                    this.replace();
                                }
                            }
                        }]);

                        return AutoLink;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/AutoSync.js
                function AutoSync_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function AutoSync_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function AutoSync_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoSync_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoSync_defineProperties(Constructor, staticProps); return Constructor; }


                /**
                 * textarea auto sync.
                 */

                var AutoSync_AutoSync =
                    /*#__PURE__*/
                    function() {
                        function AutoSync(context) {
                            var _this = this;

                            AutoSync_classCallCheck(this, AutoSync);

                            this.$note = context.layoutInfo.note;
                            this.events = {
                                'summernote.change': function summernoteChange() {
                                    _this.$note.val(context.invoke('code'));
                                }
                            };
                        }

                        AutoSync_createClass(AutoSync, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return dom.isTextarea(this.$note[0]);
                            }
                        }]);

                        return AutoSync;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/AutoReplace.js
                function AutoReplace_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function AutoReplace_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function AutoReplace_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoReplace_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoReplace_defineProperties(Constructor, staticProps); return Constructor; }





                var AutoReplace_AutoReplace =
                    /*#__PURE__*/
                    function() {
                        function AutoReplace(context) {
                            var _this = this;

                            AutoReplace_classCallCheck(this, AutoReplace);

                            this.context = context;
                            this.options = context.options.replace || {};
                            this.keys = [core_key.code.ENTER, core_key.code.SPACE, core_key.code.PERIOD, core_key.code.COMMA, core_key.code.SEMICOLON, core_key.code.SLASH];
                            this.previousKeydownCode = null;
                            this.events = {
                                'summernote.keyup': function summernoteKeyup(we, e) {
                                    if (!e.isDefaultPrevented()) {
                                        _this.handleKeyup(e);
                                    }
                                },
                                'summernote.keydown': function summernoteKeydown(we, e) {
                                    _this.handleKeydown(e);
                                }
                            };
                        }

                        AutoReplace_createClass(AutoReplace, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return !!this.options.match;
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                this.lastWord = null;
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.lastWord = null;
                            }
                        }, {
                            key: "replace",
                            value: function replace() {
                                if (!this.lastWord) {
                                    return;
                                }

                                var self = this;
                                var keyword = this.lastWord.toString();
                                this.options.match(keyword, function(match) {
                                    if (match) {
                                        var node = '';

                                        if (typeof match === 'string') {
                                            node = dom.createText(match);
                                        } else if (match instanceof jQuery) {
                                            node = match[0];
                                        } else if (match instanceof Node) {
                                            node = match;
                                        }

                                        if (!node) return;
                                        self.lastWord.insertNode(node);
                                        self.lastWord = null;
                                        self.context.invoke('editor.focus');
                                    }
                                });
                            }
                        }, {
                            key: "handleKeydown",
                            value: function handleKeydown(e) {
                                // this forces it to remember the last whole word, even if multiple termination keys are pressed
                                // before the previous key is let go.
                                if (this.previousKeydownCode && lists.contains(this.keys, this.previousKeydownCode)) {
                                    this.previousKeydownCode = e.keyCode;
                                    return;
                                }

                                if (lists.contains(this.keys, e.keyCode)) {
                                    var wordRange = this.context.invoke('editor.createRange').getWordRange();
                                    this.lastWord = wordRange;
                                }

                                this.previousKeydownCode = e.keyCode;
                            }
                        }, {
                            key: "handleKeyup",
                            value: function handleKeyup(e) {
                                if (lists.contains(this.keys, e.keyCode)) {
                                    this.replace();
                                }
                            }
                        }]);

                        return AutoReplace;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Placeholder.js
                function Placeholder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Placeholder_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Placeholder_createClass(Constructor, protoProps, staticProps) { if (protoProps) Placeholder_defineProperties(Constructor.prototype, protoProps); if (staticProps) Placeholder_defineProperties(Constructor, staticProps); return Constructor; }



                var Placeholder_Placeholder =
                    /*#__PURE__*/
                    function() {
                        function Placeholder(context) {
                            var _this = this;

                            Placeholder_classCallCheck(this, Placeholder);

                            this.context = context;
                            this.$editingArea = context.layoutInfo.editingArea;
                            this.options = context.options;

                            if (this.options.inheritPlaceholder === true) {
                                // get placeholder value from the original element
                                this.options.placeholder = this.context.$note.attr('placeholder') || this.options.placeholder;
                            }

                            this.events = {
                                'summernote.init summernote.change': function summernoteInitSummernoteChange() {
                                    _this.update();
                                },
                                'summernote.codeview.toggled': function summernoteCodeviewToggled() {
                                    _this.update();
                                }
                            };
                        }

                        Placeholder_createClass(Placeholder, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return !!this.options.placeholder;
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                var _this2 = this;

                                this.$placeholder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-placeholder">');
                                this.$placeholder.on('click', function() {
                                    _this2.context.invoke('focus');
                                }).html(this.options.placeholder).prependTo(this.$editingArea);
                                this.update();
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$placeholder.remove();
                            }
                        }, {
                            key: "update",
                            value: function update() {
                                var isShow = !this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
                                this.$placeholder.toggle(isShow);
                            }
                        }]);

                        return Placeholder;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Buttons.js
                function Buttons_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Buttons_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Buttons_createClass(Constructor, protoProps, staticProps) { if (protoProps) Buttons_defineProperties(Constructor.prototype, protoProps); if (staticProps) Buttons_defineProperties(Constructor, staticProps); return Constructor; }






                var Buttons_Buttons =
                    /*#__PURE__*/
                    function() {
                        function Buttons(context) {
                            Buttons_classCallCheck(this, Buttons);

                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.context = context;
                            this.$toolbar = context.layoutInfo.toolbar;
                            this.options = context.options;
                            this.lang = this.options.langInfo;
                            this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? 'mac' : 'pc']);
                        }

                        Buttons_createClass(Buttons, [{
                            key: "representShortcut",
                            value: function representShortcut(editorMethod) {
                                var shortcut = this.invertedKeyMap[editorMethod];

                                if (!this.options.shortcuts || !shortcut) {
                                    return '';
                                }

                                if (env.isMac) {
                                    shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
                                }

                                shortcut = shortcut.replace('BACKSLASH', '\\').replace('SLASH', '/').replace('LEFTBRACKET', '[').replace('RIGHTBRACKET', ']');
                                return ' (' + shortcut + ')';
                            }
                        }, {
                            key: "button",
                            value: function button(o) {
                                if (!this.options.tooltip && o.tooltip) {
                                    delete o.tooltip;
                                }

                                o.container = this.options.container;
                                return this.ui.button(o);
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                this.addToolbarButtons();
                                this.addImagePopoverButtons();
                                this.addLinkPopoverButtons();
                                this.addTablePopoverButtons();
                                this.fontInstalledMap = {};
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                delete this.fontInstalledMap;
                            }
                        }, {
                            key: "isFontInstalled",
                            value: function isFontInstalled(name) {
                                if (!Object.prototype.hasOwnProperty.call(this.fontInstalledMap, name)) {
                                    this.fontInstalledMap[name] = env.isFontInstalled(name) || lists.contains(this.options.fontNamesIgnoreCheck, name);
                                }

                                return this.fontInstalledMap[name];
                            }
                        }, {
                            key: "isFontDeservedToAdd",
                            value: function isFontDeservedToAdd(name) {
                                name = name.toLowerCase();
                                return name !== '' && this.isFontInstalled(name) && env.genericFontFamilies.indexOf(name) === -1;
                            }
                        }, {
                            key: "colorPalette",
                            value: function colorPalette(className, tooltip, backColor, foreColor) {
                                var _this = this;

                                return this.ui.buttonGroup({
                                    className: 'note-color ' + className,
                                    children: [this.button({
                                        className: 'note-current-color-button',
                                        contents: this.ui.icon(this.options.icons.font + ' note-recent-color'),
                                        tooltip: tooltip,
                                        click: function click(e) {
                                            var $button = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget);

                                            if (backColor && foreColor) {
                                                _this.context.invoke('editor.color', {
                                                    backColor: $button.attr('data-backColor'),
                                                    foreColor: $button.attr('data-foreColor')
                                                });
                                            } else if (backColor) {
                                                _this.context.invoke('editor.color', {
                                                    backColor: $button.attr('data-backColor')
                                                });
                                            } else if (foreColor) {
                                                _this.context.invoke('editor.color', {
                                                    foreColor: $button.attr('data-foreColor')
                                                });
                                            }
                                        },
                                        callback: function callback($button) {
                                            var $recentColor = $button.find('.note-recent-color');

                                            if (backColor) {
                                                $recentColor.css('background-color', _this.options.colorButton.backColor);
                                                $button.attr('data-backColor', _this.options.colorButton.backColor);
                                            }

                                            if (foreColor) {
                                                $recentColor.css('color', _this.options.colorButton.foreColor);
                                                $button.attr('data-foreColor', _this.options.colorButton.foreColor);
                                            } else {
                                                $recentColor.css('color', 'transparent');
                                            }
                                        }
                                    }), this.button({
                                        className: 'dropdown-toggle',
                                        contents: this.ui.dropdownButtonContents('', this.options),
                                        tooltip: this.lang.color.more,
                                        data: {
                                            toggle: 'dropdown'
                                        }
                                    }), this.ui.dropdown({
                                        items: (backColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.background + '</div>', '<div>', '<button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">', this.lang.color.transparent, '</button>', '</div>', '<div class="note-holder" data-event="backColor"/>', '<div>', '<button type="button" class="note-color-select btn btn-light" data-event="openPalette" data-value="backColorPicker">', this.lang.color.cpSelect, '</button>', '<input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.backColor + '" data-event="backColorPalette">', '</div>', '<div class="note-holder-custom" id="backColorPalette" data-event="backColor"/>', '</div>'].join('') : '') + (foreColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.foreground + '</div>', '<div>', '<button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, '</button>', '</div>', '<div class="note-holder" data-event="foreColor"/>', '<div>', '<button type="button" class="note-color-select btn btn-light" data-event="openPalette" data-value="foreColorPicker">', this.lang.color.cpSelect, '</button>', '<input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.foreColor + '" data-event="foreColorPalette">', '</div>', // Fix missing Div, Commented to find easily if it's wrong
                                            '<div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"/>', '</div>'
                                        ].join('') : ''),
                                        callback: function callback($dropdown) {
                                            $dropdown.find('.note-holder').each(function(idx, item) {
                                                var $holder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
                                                $holder.append(_this.ui.palette({
                                                    colors: _this.options.colors,
                                                    colorsName: _this.options.colorsName,
                                                    eventName: $holder.data('event'),
                                                    container: _this.options.container,
                                                    tooltip: _this.options.tooltip
                                                }).render());
                                            });
                                            /* TODO: do we have to record recent custom colors within cookies? */

                                            var customColors = [
                                                ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']
                                            ];
                                            $dropdown.find('.note-holder-custom').each(function(idx, item) {
                                                var $holder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
                                                $holder.append(_this.ui.palette({
                                                    colors: customColors,
                                                    colorsName: customColors,
                                                    eventName: $holder.data('event'),
                                                    container: _this.options.container,
                                                    tooltip: _this.options.tooltip
                                                }).render());
                                            });
                                            $dropdown.find('input[type=color]').each(function(idx, item) {
                                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item).change(function() {
                                                    var $chip = $dropdown.find('#' + external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this).data('event')).find('.note-color-btn').first();
                                                    var color = this.value.toUpperCase();
                                                    $chip.css('background-color', color).attr('aria-label', color).attr('data-value', color).attr('data-original-title', color);
                                                    $chip.click();
                                                });
                                            });
                                        },
                                        click: function click(event) {
                                            event.stopPropagation();
                                            var $parent = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('.' + className).find('.note-dropdown-menu');
                                            var $button = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target);
                                            var eventName = $button.data('event');
                                            var value = $button.attr('data-value');

                                            if (eventName === 'openPalette') {
                                                var $picker = $parent.find('#' + value);
                                                var $palette = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()($parent.find('#' + $picker.data('event')).find('.note-color-row')[0]); // Shift palette chips

                                                var $chip = $palette.find('.note-color-btn').last().detach(); // Set chip attributes

                                                var color = $picker.val();
                                                $chip.css('background-color', color).attr('aria-label', color).attr('data-value', color).attr('data-original-title', color);
                                                $palette.prepend($chip);
                                                $picker.click();
                                            } else {
                                                if (lists.contains(['backColor', 'foreColor'], eventName)) {
                                                    var key = eventName === 'backColor' ? 'background-color' : 'color';
                                                    var $color = $button.closest('.note-color').find('.note-recent-color');
                                                    var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                                                    $color.css(key, value);
                                                    $currentButton.attr('data-' + eventName, value);
                                                }

                                                _this.context.invoke('editor.' + eventName, value);
                                            }
                                        }
                                    })]
                                }).render();
                            }
                        }, {
                            key: "addToolbarButtons",
                            value: function addToolbarButtons() {
                                    var _this2 = this;

                                    this.context.memo('button.style', function() {
                                        return _this2.ui.buttonGroup([_this2.button({
                                            className: 'dropdown-toggle',
                                            contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.magic), _this2.options),
                                            tooltip: _this2.lang.style.style,
                                            data: {
                                                toggle: 'dropdown'
                                            }
                                        }), _this2.ui.dropdown({
                                            className: 'dropdown-style',
                                            items: _this2.options.styleTags,
                                            title: _this2.lang.style.style,
                                            template: function template(item) {
                                                // TBD: need to be simplified
                                                if (typeof item === 'string') {
                                                    item = {
                                                        tag: item,
                                                        title: Object.prototype.hasOwnProperty.call(_this2.lang.style, item) ? _this2.lang.style[item] : item
                                                    };
                                                }

                                                var tag = item.tag;
                                                var title = item.title;
                                                var style = item.style ? ' style="' + item.style + '" ' : '';
                                                var className = item.className ? ' class="' + item.className + '"' : '';
                                                return '<' + tag + style + className + '>' + title + '</' + tag + '>';
                                            },
                                            click: _this2.context.createInvokeHandler('editor.formatBlock')
                                        })]).render();
                                    });

                                    var _loop = function _loop(styleIdx, styleLen) {
                                        var item = _this2.options.styleTags[styleIdx];

                                        _this2.context.memo('button.style.' + item, function() {
                                            return _this2.button({
                                                className: 'note-btn-style-' + item,
                                                contents: '<div data-value="' + item + '">' + item.toUpperCase() + '</div>',
                                                tooltip: _this2.lang.style[item],
                                                click: _this2.context.createInvokeHandler('editor.formatBlock')
                                            }).render();
                                        });
                                    };

                                    for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
                                        _loop(styleIdx, styleLen);
                                    }

                                    this.context.memo('button.bold', function() {
                                        return _this2.button({
                                            className: 'note-btn-bold',
                                            contents: _this2.ui.icon(_this2.options.icons.bold),
                                            tooltip: _this2.lang.font.bold + _this2.representShortcut('bold'),
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.bold')
                                        }).render();
                                    });
                                    this.context.memo('button.italic', function() {
                                        return _this2.button({
                                            className: 'note-btn-italic',
                                            contents: _this2.ui.icon(_this2.options.icons.italic),
                                            tooltip: _this2.lang.font.italic + _this2.representShortcut('italic'),
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.italic')
                                        }).render();
                                    });
                                    this.context.memo('button.underline', function() {
                                        return _this2.button({
                                            className: 'note-btn-underline',
                                            contents: _this2.ui.icon(_this2.options.icons.underline),
                                            tooltip: _this2.lang.font.underline + _this2.representShortcut('underline'),
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.underline')
                                        }).render();
                                    });
                                    this.context.memo('button.clear', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.eraser),
                                            tooltip: _this2.lang.font.clear + _this2.representShortcut('removeFormat'),
                                            click: _this2.context.createInvokeHandler('editor.removeFormat')
                                        }).render();
                                    });
                                    this.context.memo('button.strikethrough', function() {
                                        return _this2.button({
                                            className: 'note-btn-strikethrough',
                                            contents: _this2.ui.icon(_this2.options.icons.strikethrough),
                                            tooltip: _this2.lang.font.strikethrough + _this2.representShortcut('strikethrough'),
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
                                        }).render();
                                    });
                                    this.context.memo('button.superscript', function() {
                                        return _this2.button({
                                            className: 'note-btn-superscript',
                                            contents: _this2.ui.icon(_this2.options.icons.superscript),
                                            tooltip: _this2.lang.font.superscript,
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.superscript')
                                        }).render();
                                    });
                                    this.context.memo('button.subscript', function() {
                                        return _this2.button({
                                            className: 'note-btn-subscript',
                                            contents: _this2.ui.icon(_this2.options.icons.subscript),
                                            tooltip: _this2.lang.font.subscript,
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.subscript')
                                        }).render();
                                    });
                                    this.context.memo('button.fontname', function() {
                                        var styleInfo = _this2.context.invoke('editor.currentStyle');

                                        if (_this2.options.addDefaultFonts) {
                                            // Add 'default' fonts into the fontnames array if not exist
                                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(styleInfo['font-family'].split(','), function(idx, fontname) {
                                                fontname = fontname.trim().replace(/['"]+/g, '');

                                                if (_this2.isFontDeservedToAdd(fontname)) {
                                                    if (_this2.options.fontNames.indexOf(fontname) === -1) {
                                                        _this2.options.fontNames.push(fontname);
                                                    }
                                                }
                                            });
                                        }

                                        return _this2.ui.buttonGroup([_this2.button({
                                            className: 'dropdown-toggle',
                                            contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontname"/>', _this2.options),
                                            tooltip: _this2.lang.font.name,
                                            data: {
                                                toggle: 'dropdown'
                                            }
                                        }), _this2.ui.dropdownCheck({
                                            className: 'dropdown-fontname',
                                            checkClassName: _this2.options.icons.menuCheck,
                                            items: _this2.options.fontNames.filter(_this2.isFontInstalled.bind(_this2)),
                                            title: _this2.lang.font.name,
                                            template: function template(item) {
                                                return '<span style="font-family: ' + env.validFontName(item) + '">' + item + '</span>';
                                            },
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontName')
                                        })]).render();
                                    });
                                    this.context.memo('button.fontsize', function() {
                                        return _this2.ui.buttonGroup([_this2.button({
                                            className: 'dropdown-toggle',
                                            contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', _this2.options),
                                            tooltip: _this2.lang.font.size,
                                            data: {
                                                toggle: 'dropdown'
                                            }
                                        }), _this2.ui.dropdownCheck({
                                            className: 'dropdown-fontsize',
                                            checkClassName: _this2.options.icons.menuCheck,
                                            items: _this2.options.fontSizes,
                                            title: _this2.lang.font.size,
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontSize')
                                        })]).render();
                                    });
                                    this.context.memo('button.fontsizeunit', function() {
                                        return _this2.ui.buttonGroup([_this2.button({
                                            className: 'dropdown-toggle',
                                            contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"/>', _this2.options),
                                            tooltip: _this2.lang.font.sizeunit,
                                            data: {
                                                toggle: 'dropdown'
                                            }
                                        }), _this2.ui.dropdownCheck({
                                            className: 'dropdown-fontsizeunit',
                                            checkClassName: _this2.options.icons.menuCheck,
                                            items: _this2.options.fontSizeUnits,
                                            title: _this2.lang.font.sizeunit,
                                            click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontSizeUnit')
                                        })]).render();
                                    });
                                    this.context.memo('button.color', function() {
                                        return _this2.colorPalette('note-color-all', _this2.lang.color.recent, true, true);
                                    });
                                    this.context.memo('button.forecolor', function() {
                                        return _this2.colorPalette('note-color-fore', _this2.lang.color.foreground, false, true);
                                    });
                                    this.context.memo('button.backcolor', function() {
                                        return _this2.colorPalette('note-color-back', _this2.lang.color.background, true, false);
                                    });
                                    this.context.memo('button.ul', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.unorderedlist),
                                            tooltip: _this2.lang.lists.unordered + _this2.representShortcut('insertUnorderedList'),
                                            click: _this2.context.createInvokeHandler('editor.insertUnorderedList')
                                        }).render();
                                    });
                                    this.context.memo('button.ol', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.orderedlist),
                                            tooltip: _this2.lang.lists.ordered + _this2.representShortcut('insertOrderedList'),
                                            click: _this2.context.createInvokeHandler('editor.insertOrderedList')
                                        }).render();
                                    });
                                    var justifyLeft = this.button({
                                        contents: this.ui.icon(this.options.icons.alignLeft),
                                        tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
                                        click: this.context.createInvokeHandler('editor.justifyLeft')
                                    });
                                    var justifyCenter = this.button({
                                        contents: this.ui.icon(this.options.icons.alignCenter),
                                        tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
                                        click: this.context.createInvokeHandler('editor.justifyCenter')
                                    });
                                    var justifyRight = this.button({
                                        contents: this.ui.icon(this.options.icons.alignRight),
                                        tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
                                        click: this.context.createInvokeHandler('editor.justifyRight')
                                    });
                                    var justifyFull = this.button({
                                        contents: this.ui.icon(this.options.icons.alignJustify),
                                        tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
                                        click: this.context.createInvokeHandler('editor.justifyFull')
                                    });
                                    var outdent = this.button({
                                        contents: this.ui.icon(this.options.icons.outdent),
                                        tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
                                        click: this.context.createInvokeHandler('editor.outdent')
                                    });
                                    var indent = this.button({
                                        contents: this.ui.icon(this.options.icons.indent),
                                        tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
                                        click: this.context.createInvokeHandler('editor.indent')
                                    });
                                    this.context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
                                    this.context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
                                    this.context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
                                    this.context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
                                    this.context.memo('button.outdent', func.invoke(outdent, 'render'));
                                    this.context.memo('button.indent', func.invoke(indent, 'render'));
                                    this.context.memo('button.paragraph', function() {
                                        return _this2.ui.buttonGroup([_this2.button({
                                            className: 'dropdown-toggle',
                                            contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.alignLeft), _this2.options),
                                            tooltip: _this2.lang.paragraph.paragraph,
                                            data: {
                                                toggle: 'dropdown'
                                            }
                                        }), _this2.ui.dropdown([_this2.ui.buttonGroup({
                                            className: 'note-align',
                                            children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
                                        }), _this2.ui.buttonGroup({
                                            className: 'note-list',
                                            children: [outdent, indent]
                                        })])]).render();
                                    });
                                    this.context.memo('button.height', function() {
                                        return _this2.ui.buttonGroup([_this2.button({
                                            className: 'dropdown-toggle',
                                            contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.textHeight), _this2.options),
                                            tooltip: _this2.lang.font.height,
                                            data: {
                                                toggle: 'dropdown'
                                            }
                                        }), _this2.ui.dropdownCheck({
                                            items: _this2.options.lineHeights,
                                            checkClassName: _this2.options.icons.menuCheck,
                                            className: 'dropdown-line-height',
                                            title: _this2.lang.font.height,
                                            click: _this2.context.createInvokeHandler('editor.lineHeight')
                                        })]).render();
                                    });
                                    this.context.memo('button.table', function() {
                                        return _this2.ui.buttonGroup([_this2.button({
                                            className: 'dropdown-toggle',
                                            contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.table), _this2.options),
                                            tooltip: _this2.lang.table.table,
                                            data: {
                                                toggle: 'dropdown'
                                            }
                                        }), _this2.ui.dropdown({
                                            title: _this2.lang.table.table,
                                            className: 'note-table',
                                            items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '<div class="note-dimension-picker-highlighted"/>', '<div class="note-dimension-picker-unhighlighted"/>', '</div>', '<div class="note-dimension-display">1 x 1</div>'].join('')
                                        })], {
                                            callback: function callback($node) {
                                                var $catcher = $node.find('.note-dimension-picker-mousecatcher');
                                                $catcher.css({
                                                    width: _this2.options.insertTableMaxSize.col + 'em',
                                                    height: _this2.options.insertTableMaxSize.row + 'em'
                                                }).mousedown(_this2.context.createInvokeHandler('editor.insertTable')).on('mousemove', _this2.tableMoveHandler.bind(_this2));
                                            }
                                        }).render();
                                    });
                                    this.context.memo('button.link', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.link),
                                            tooltip: _this2.lang.link.link + _this2.representShortcut('linkDialog.show'),
                                            click: _this2.context.createInvokeHandler('linkDialog.show')
                                        }).render();
                                    });
                                    this.context.memo('button.picture', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.picture),
                                            tooltip: _this2.lang.image.image,
                                            click: _this2.context.createInvokeHandler('imageDialog.show')
                                        }).render();
                                    });
                                    this.context.memo('button.video', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.video),
                                            tooltip: _this2.lang.video.video,
                                            click: _this2.context.createInvokeHandler('videoDialog.show')
                                        }).render();
                                    });
                                    this.context.memo('button.hr', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.minus),
                                            tooltip: _this2.lang.hr.insert + _this2.representShortcut('insertHorizontalRule'),
                                            click: _this2.context.createInvokeHandler('editor.insertHorizontalRule')
                                        }).render();
                                    });
                                    this.context.memo('button.fullscreen', function() {
                                        return _this2.button({
                                            className: 'btn-fullscreen',
                                            contents: _this2.ui.icon(_this2.options.icons.arrowsAlt),
                                            tooltip: _this2.lang.options.fullscreen,
                                            click: _this2.context.createInvokeHandler('fullscreen.toggle')
                                        }).render();
                                    });
                                    this.context.memo('button.codeview', function() {
                                        return _this2.button({
                                            className: 'btn-codeview',
                                            contents: _this2.ui.icon(_this2.options.icons.code),
                                            tooltip: _this2.lang.options.codeview,
                                            click: _this2.context.createInvokeHandler('codeview.toggle')
                                        }).render();
                                    });
                                    this.context.memo('button.redo', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.redo),
                                            tooltip: _this2.lang.history.redo + _this2.representShortcut('redo'),
                                            click: _this2.context.createInvokeHandler('editor.redo')
                                        }).render();
                                    });
                                    this.context.memo('button.undo', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.undo),
                                            tooltip: _this2.lang.history.undo + _this2.representShortcut('undo'),
                                            click: _this2.context.createInvokeHandler('editor.undo')
                                        }).render();
                                    });
                                    this.context.memo('button.help', function() {
                                        return _this2.button({
                                            contents: _this2.ui.icon(_this2.options.icons.question),
                                            tooltip: _this2.lang.options.help,
                                            click: _this2.context.createInvokeHandler('helpDialog.show')
                                        }).render();
                                    });
                                }
                                /**
                                 * image: [
                                 *   ['imageResize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
                                 *   ['float', ['floatLeft', 'floatRight', 'floatNone']],
                                 *   ['remove', ['removeMedia']],
                                 * ],
                                 */

                        }, {
                            key: "addImagePopoverButtons",
                            value: function addImagePopoverButtons() {
                                var _this3 = this;

                                // Image Size Buttons
                                this.context.memo('button.resizeFull', function() {
                                    return _this3.button({
                                        contents: '<span class="note-fontsize-10">100%</span>',
                                        tooltip: _this3.lang.image.resizeFull,
                                        click: _this3.context.createInvokeHandler('editor.resize', '1')
                                    }).render();
                                });
                                this.context.memo('button.resizeHalf', function() {
                                    return _this3.button({
                                        contents: '<span class="note-fontsize-10">50%</span>',
                                        tooltip: _this3.lang.image.resizeHalf,
                                        click: _this3.context.createInvokeHandler('editor.resize', '0.5')
                                    }).render();
                                });
                                this.context.memo('button.resizeQuarter', function() {
                                    return _this3.button({
                                        contents: '<span class="note-fontsize-10">25%</span>',
                                        tooltip: _this3.lang.image.resizeQuarter,
                                        click: _this3.context.createInvokeHandler('editor.resize', '0.25')
                                    }).render();
                                });
                                this.context.memo('button.resizeNone', function() {
                                    return _this3.button({
                                        contents: _this3.ui.icon(_this3.options.icons.rollback),
                                        tooltip: _this3.lang.image.resizeNone,
                                        click: _this3.context.createInvokeHandler('editor.resize', '0')
                                    }).render();
                                }); // Float Buttons

                                this.context.memo('button.floatLeft', function() {
                                    return _this3.button({
                                        contents: _this3.ui.icon(_this3.options.icons.floatLeft),
                                        tooltip: _this3.lang.image.floatLeft,
                                        click: _this3.context.createInvokeHandler('editor.floatMe', 'left')
                                    }).render();
                                });
                                this.context.memo('button.floatRight', function() {
                                    return _this3.button({
                                        contents: _this3.ui.icon(_this3.options.icons.floatRight),
                                        tooltip: _this3.lang.image.floatRight,
                                        click: _this3.context.createInvokeHandler('editor.floatMe', 'right')
                                    }).render();
                                });
                                this.context.memo('button.floatNone', function() {
                                    return _this3.button({
                                        contents: _this3.ui.icon(_this3.options.icons.rollback),
                                        tooltip: _this3.lang.image.floatNone,
                                        click: _this3.context.createInvokeHandler('editor.floatMe', 'none')
                                    }).render();
                                }); // Remove Buttons

                                this.context.memo('button.removeMedia', function() {
                                    return _this3.button({
                                        contents: _this3.ui.icon(_this3.options.icons.trash),
                                        tooltip: _this3.lang.image.remove,
                                        click: _this3.context.createInvokeHandler('editor.removeMedia')
                                    }).render();
                                });
                            }
                        }, {
                            key: "addLinkPopoverButtons",
                            value: function addLinkPopoverButtons() {
                                    var _this4 = this;

                                    this.context.memo('button.linkDialogShow', function() {
                                        return _this4.button({
                                            contents: _this4.ui.icon(_this4.options.icons.link),
                                            tooltip: _this4.lang.link.edit,
                                            click: _this4.context.createInvokeHandler('linkDialog.show')
                                        }).render();
                                    });
                                    this.context.memo('button.unlink', function() {
                                        return _this4.button({
                                            contents: _this4.ui.icon(_this4.options.icons.unlink),
                                            tooltip: _this4.lang.link.unlink,
                                            click: _this4.context.createInvokeHandler('editor.unlink')
                                        }).render();
                                    });
                                }
                                /**
                                 * table : [
                                 *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                                 *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
                                 * ],
                                 */

                        }, {
                            key: "addTablePopoverButtons",
                            value: function addTablePopoverButtons() {
                                var _this5 = this;

                                this.context.memo('button.addRowUp', function() {
                                    return _this5.button({
                                        className: 'btn-md',
                                        contents: _this5.ui.icon(_this5.options.icons.rowAbove),
                                        tooltip: _this5.lang.table.addRowAbove,
                                        click: _this5.context.createInvokeHandler('editor.addRow', 'top')
                                    }).render();
                                });
                                this.context.memo('button.addRowDown', function() {
                                    return _this5.button({
                                        className: 'btn-md',
                                        contents: _this5.ui.icon(_this5.options.icons.rowBelow),
                                        tooltip: _this5.lang.table.addRowBelow,
                                        click: _this5.context.createInvokeHandler('editor.addRow', 'bottom')
                                    }).render();
                                });
                                this.context.memo('button.addColLeft', function() {
                                    return _this5.button({
                                        className: 'btn-md',
                                        contents: _this5.ui.icon(_this5.options.icons.colBefore),
                                        tooltip: _this5.lang.table.addColLeft,
                                        click: _this5.context.createInvokeHandler('editor.addCol', 'left')
                                    }).render();
                                });
                                this.context.memo('button.addColRight', function() {
                                    return _this5.button({
                                        className: 'btn-md',
                                        contents: _this5.ui.icon(_this5.options.icons.colAfter),
                                        tooltip: _this5.lang.table.addColRight,
                                        click: _this5.context.createInvokeHandler('editor.addCol', 'right')
                                    }).render();
                                });
                                this.context.memo('button.deleteRow', function() {
                                    return _this5.button({
                                        className: 'btn-md',
                                        contents: _this5.ui.icon(_this5.options.icons.rowRemove),
                                        tooltip: _this5.lang.table.delRow,
                                        click: _this5.context.createInvokeHandler('editor.deleteRow')
                                    }).render();
                                });
                                this.context.memo('button.deleteCol', function() {
                                    return _this5.button({
                                        className: 'btn-md',
                                        contents: _this5.ui.icon(_this5.options.icons.colRemove),
                                        tooltip: _this5.lang.table.delCol,
                                        click: _this5.context.createInvokeHandler('editor.deleteCol')
                                    }).render();
                                });
                                this.context.memo('button.deleteTable', function() {
                                    return _this5.button({
                                        className: 'btn-md',
                                        contents: _this5.ui.icon(_this5.options.icons.trash),
                                        tooltip: _this5.lang.table.delTable,
                                        click: _this5.context.createInvokeHandler('editor.deleteTable')
                                    }).render();
                                });
                            }
                        }, {
                            key: "build",
                            value: function build($container, groups) {
                                    for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
                                        var group = groups[groupIdx];
                                        var groupName = Array.isArray(group) ? group[0] : group;
                                        var buttons = Array.isArray(group) ? group.length === 1 ? [group[0]] : group[1] : [group];
                                        var $group = this.ui.buttonGroup({
                                            className: 'note-' + groupName
                                        }).render();

                                        for (var idx = 0, len = buttons.length; idx < len; idx++) {
                                            var btn = this.context.memo('button.' + buttons[idx]);

                                            if (btn) {
                                                $group.append(typeof btn === 'function' ? btn(this.context) : btn);
                                            }
                                        }

                                        $group.appendTo($container);
                                    }
                                }
                                /**
                                 * @param {jQuery} [$container]
                                 */

                        }, {
                            key: "updateCurrentStyle",
                            value: function updateCurrentStyle($container) {
                                var _this6 = this;

                                var $cont = $container || this.$toolbar;
                                var styleInfo = this.context.invoke('editor.currentStyle');
                                this.updateBtnStates($cont, {
                                    '.note-btn-bold': function noteBtnBold() {
                                        return styleInfo['font-bold'] === 'bold';
                                    },
                                    '.note-btn-italic': function noteBtnItalic() {
                                        return styleInfo['font-italic'] === 'italic';
                                    },
                                    '.note-btn-underline': function noteBtnUnderline() {
                                        return styleInfo['font-underline'] === 'underline';
                                    },
                                    '.note-btn-subscript': function noteBtnSubscript() {
                                        return styleInfo['font-subscript'] === 'subscript';
                                    },
                                    '.note-btn-superscript': function noteBtnSuperscript() {
                                        return styleInfo['font-superscript'] === 'superscript';
                                    },
                                    '.note-btn-strikethrough': function noteBtnStrikethrough() {
                                        return styleInfo['font-strikethrough'] === 'strikethrough';
                                    }
                                });

                                if (styleInfo['font-family']) {
                                    var fontNames = styleInfo['font-family'].split(',').map(function(name) {
                                        return name.replace(/[\'\"]/g, '').replace(/\s+$/, '').replace(/^\s+/, '');
                                    });
                                    var fontName = lists.find(fontNames, this.isFontInstalled.bind(this));
                                    $cont.find('.dropdown-fontname a').each(function(idx, item) {
                                        var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item); // always compare string to avoid creating another func.

                                        var isChecked = $item.data('value') + '' === fontName + '';
                                        $item.toggleClass('checked', isChecked);
                                    });
                                    $cont.find('.note-current-fontname').text(fontName).css('font-family', fontName);
                                }

                                if (styleInfo['font-size']) {
                                    var fontSize = styleInfo['font-size'];
                                    $cont.find('.dropdown-fontsize a').each(function(idx, item) {
                                        var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item); // always compare with string to avoid creating another func.

                                        var isChecked = $item.data('value') + '' === fontSize + '';
                                        $item.toggleClass('checked', isChecked);
                                    });
                                    $cont.find('.note-current-fontsize').text(fontSize);
                                    var fontSizeUnit = styleInfo['font-size-unit'];
                                    $cont.find('.dropdown-fontsizeunit a').each(function(idx, item) {
                                        var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
                                        var isChecked = $item.data('value') + '' === fontSizeUnit + '';
                                        $item.toggleClass('checked', isChecked);
                                    });
                                    $cont.find('.note-current-fontsizeunit').text(fontSizeUnit);
                                }

                                if (styleInfo['line-height']) {
                                    var lineHeight = styleInfo['line-height'];
                                    $cont.find('.dropdown-line-height li a').each(function(idx, item) {
                                        // always compare with string to avoid creating another func.
                                        var isChecked = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item).data('value') + '' === lineHeight + '';
                                        _this6.className = isChecked ? 'checked' : '';
                                    });
                                }
                            }
                        }, {
                            key: "updateBtnStates",
                            value: function updateBtnStates($container, infos) {
                                var _this7 = this;

                                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(infos, function(selector, pred) {
                                    _this7.ui.toggleBtnActive($container.find(selector), pred());
                                });
                            }
                        }, {
                            key: "tableMoveHandler",
                            value: function tableMoveHandler(event) {
                                var PX_PER_EM = 18;
                                var $picker = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target.parentNode); // target is mousecatcher

                                var $dimensionDisplay = $picker.next();
                                var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
                                var $highlighted = $picker.find('.note-dimension-picker-highlighted');
                                var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
                                var posOffset; // HTML5 with jQuery - e.offsetX is undefined in Firefox

                                if (event.offsetX === undefined) {
                                    var posCatcher = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target).offset();
                                    posOffset = {
                                        x: event.pageX - posCatcher.left,
                                        y: event.pageY - posCatcher.top
                                    };
                                } else {
                                    posOffset = {
                                        x: event.offsetX,
                                        y: event.offsetY
                                    };
                                }

                                var dim = {
                                    c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
                                    r: Math.ceil(posOffset.y / PX_PER_EM) || 1
                                };
                                $highlighted.css({
                                    width: dim.c + 'em',
                                    height: dim.r + 'em'
                                });
                                $catcher.data('value', dim.c + 'x' + dim.r);

                                if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
                                    $unhighlighted.css({
                                        width: dim.c + 1 + 'em'
                                    });
                                }

                                if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
                                    $unhighlighted.css({
                                        height: dim.r + 1 + 'em'
                                    });
                                }

                                $dimensionDisplay.html(dim.c + ' x ' + dim.r);
                            }
                        }]);

                        return Buttons;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/Toolbar.js
                function Toolbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function Toolbar_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function Toolbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Toolbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Toolbar_defineProperties(Constructor, staticProps); return Constructor; }



                var Toolbar_Toolbar =
                    /*#__PURE__*/
                    function() {
                        function Toolbar(context) {
                            Toolbar_classCallCheck(this, Toolbar);

                            this.context = context;
                            this.$window = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(window);
                            this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.$note = context.layoutInfo.note;
                            this.$editor = context.layoutInfo.editor;
                            this.$toolbar = context.layoutInfo.toolbar;
                            this.$editable = context.layoutInfo.editable;
                            this.$statusbar = context.layoutInfo.statusbar;
                            this.options = context.options;
                            this.isFollowing = false;
                            this.followScroll = this.followScroll.bind(this);
                        }

                        Toolbar_createClass(Toolbar, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return !this.options.airMode;
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                var _this = this;

                                this.options.toolbar = this.options.toolbar || [];

                                if (!this.options.toolbar.length) {
                                    this.$toolbar.hide();
                                } else {
                                    this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar);
                                }

                                if (this.options.toolbarContainer) {
                                    this.$toolbar.appendTo(this.options.toolbarContainer);
                                }

                                this.changeContainer(false);
                                this.$note.on('summernote.keyup summernote.mouseup summernote.change', function() {
                                    _this.context.invoke('buttons.updateCurrentStyle');
                                });
                                this.context.invoke('buttons.updateCurrentStyle');

                                if (this.options.followingToolbar) {
                                    this.$window.on('scroll resize', this.followScroll);
                                }
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$toolbar.children().remove();

                                if (this.options.followingToolbar) {
                                    this.$window.off('scroll resize', this.followScroll);
                                }
                            }
                        }, {
                            key: "followScroll",
                            value: function followScroll() {
                                if (this.$editor.hasClass('fullscreen')) {
                                    return false;
                                }

                                var editorHeight = this.$editor.outerHeight();
                                var editorWidth = this.$editor.width();
                                var toolbarHeight = this.$toolbar.height();
                                var statusbarHeight = this.$statusbar.height(); // check if the web app is currently using another static bar

                                var otherBarHeight = 0;

                                if (this.options.otherStaticBar) {
                                    otherBarHeight = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.otherStaticBar).outerHeight();
                                }

                                var currentOffset = this.$document.scrollTop();
                                var editorOffsetTop = this.$editor.offset().top;
                                var editorOffsetBottom = editorOffsetTop + editorHeight;
                                var activateOffset = editorOffsetTop - otherBarHeight;
                                var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight - statusbarHeight;

                                if (!this.isFollowing && currentOffset > activateOffset && currentOffset < deactivateOffsetBottom - toolbarHeight) {
                                    this.isFollowing = true;
                                    this.$editable.css({
                                        marginTop: this.$toolbar.outerHeight()
                                    });
                                    this.$toolbar.css({
                                        position: 'fixed',
                                        top: otherBarHeight,
                                        width: editorWidth,
                                        zIndex: 1000
                                    });
                                } else if (this.isFollowing && (currentOffset < activateOffset || currentOffset > deactivateOffsetBottom)) {
                                    this.isFollowing = false;
                                    this.$toolbar.css({
                                        position: 'relative',
                                        top: 0,
                                        width: '100%',
                                        zIndex: 'auto'
                                    });
                                    this.$editable.css({
                                        marginTop: ''
                                    });
                                }
                            }
                        }, {
                            key: "changeContainer",
                            value: function changeContainer(isFullscreen) {
                                if (isFullscreen) {
                                    this.$toolbar.prependTo(this.$editor);
                                } else {
                                    if (this.options.toolbarContainer) {
                                        this.$toolbar.appendTo(this.options.toolbarContainer);
                                    }
                                }

                                if (this.options.followingToolbar) {
                                    this.followScroll();
                                }
                            }
                        }, {
                            key: "updateFullscreen",
                            value: function updateFullscreen(isFullscreen) {
                                this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), isFullscreen);
                                this.changeContainer(isFullscreen);
                            }
                        }, {
                            key: "updateCodeview",
                            value: function updateCodeview(isCodeview) {
                                this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), isCodeview);

                                if (isCodeview) {
                                    this.deactivate();
                                } else {
                                    this.activate();
                                }
                            }
                        }, {
                            key: "activate",
                            value: function activate(isIncludeCodeview) {
                                var $btn = this.$toolbar.find('button');

                                if (!isIncludeCodeview) {
                                    $btn = $btn.not('.btn-codeview').not('.btn-fullscreen');
                                }

                                this.ui.toggleBtn($btn, true);
                            }
                        }, {
                            key: "deactivate",
                            value: function deactivate(isIncludeCodeview) {
                                var $btn = this.$toolbar.find('button');

                                if (!isIncludeCodeview) {
                                    $btn = $btn.not('.btn-codeview').not('.btn-fullscreen');
                                }

                                this.ui.toggleBtn($btn, false);
                            }
                        }]);

                        return Toolbar;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/LinkDialog.js
                function LinkDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function LinkDialog_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function LinkDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) LinkDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) LinkDialog_defineProperties(Constructor, staticProps); return Constructor; }






                var LinkDialog_LinkDialog =
                    /*#__PURE__*/
                    function() {
                        function LinkDialog(context) {
                            LinkDialog_classCallCheck(this, LinkDialog);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
                            this.$editor = context.layoutInfo.editor;
                            this.options = context.options;
                            this.lang = this.options.langInfo;
                            context.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
                        }

                        LinkDialog_createClass(LinkDialog, [{
                            key: "initialize",
                            value: function initialize() {
                                var $container = this.options.dialogsInBody ? this.$body : this.options.container;
                                var body = ['<div class="form-group note-form-group">', "<label for=\"note-dialog-link-txt-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.link.textToDisplay, "</label>"), "<input id=\"note-dialog-link-txt-".concat(this.options.id, "\" class=\"note-link-text form-control note-form-control note-input\" type=\"text\"/>"), '</div>', '<div class="form-group note-form-group">', "<label for=\"note-dialog-link-url-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.link.url, "</label>"), "<input id=\"note-dialog-link-url-".concat(this.options.id, "\" class=\"note-link-url form-control note-form-control note-input\" type=\"text\" value=\"http://\"/>"), '</div>', !this.options.disableLinkTarget ? external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div/>').append(this.ui.checkbox({
                                    className: 'sn-checkbox-open-in-new-window',
                                    text: this.lang.link.openInNewWindow,
                                    checked: true
                                }).render()).html() : '', external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div/>').append(this.ui.checkbox({
                                    className: 'sn-checkbox-use-protocol',
                                    text: this.lang.link.useProtocol,
                                    checked: true
                                }).render()).html()].join('');
                                var buttonClass = 'btn btn-primary note-btn note-btn-primary note-link-btn';
                                var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.link.insert, "\" disabled>");
                                this.$dialog = this.ui.dialog({
                                    className: 'link-dialog',
                                    title: this.lang.link.insert,
                                    fade: this.options.dialogsFade,
                                    body: body,
                                    footer: footer
                                }).render().appendTo($container);
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.ui.hideDialog(this.$dialog);
                                this.$dialog.remove();
                            }
                        }, {
                            key: "bindEnterKey",
                            value: function bindEnterKey($input, $btn) {
                                    $input.on('keypress', function(event) {
                                        if (event.keyCode === core_key.code.ENTER) {
                                            event.preventDefault();
                                            $btn.trigger('click');
                                        }
                                    });
                                }
                                /**
                                 * toggle update button
                                 */

                        }, {
                            key: "toggleLinkBtn",
                            value: function toggleLinkBtn($linkBtn, $linkText, $linkUrl) {
                                    this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
                                }
                                /**
                                 * Show link dialog and set event handlers on dialog controls.
                                 *
                                 * @param {Object} linkInfo
                                 * @return {Promise}
                                 */

                        }, {
                            key: "showLinkDialog",
                            value: function showLinkDialog(linkInfo) {
                                    var _this = this;

                                    return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function(deferred) {
                                        var $linkText = _this.$dialog.find('.note-link-text');

                                        var $linkUrl = _this.$dialog.find('.note-link-url');

                                        var $linkBtn = _this.$dialog.find('.note-link-btn');

                                        var $openInNewWindow = _this.$dialog.find('.sn-checkbox-open-in-new-window input[type=checkbox]');

                                        var $useProtocol = _this.$dialog.find('.sn-checkbox-use-protocol input[type=checkbox]');

                                        _this.ui.onDialogShown(_this.$dialog, function() {
                                            _this.context.triggerEvent('dialog.shown'); // If no url was given and given text is valid URL then copy that into URL Field


                                            if (!linkInfo.url && func.isValidUrl(linkInfo.text)) {
                                                linkInfo.url = linkInfo.text;
                                            }

                                            $linkText.on('input paste propertychange', function() {
                                                // If linktext was modified by input events,
                                                // cloning text from linkUrl will be stopped.
                                                linkInfo.text = $linkText.val();

                                                _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                                            }).val(linkInfo.text);
                                            $linkUrl.on('input paste propertychange', function() {
                                                // Display same text on `Text to display` as default
                                                // when linktext has no text
                                                if (!linkInfo.text) {
                                                    $linkText.val($linkUrl.val());
                                                }

                                                _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                                            }).val(linkInfo.url);

                                            if (!env.isSupportTouch) {
                                                $linkUrl.trigger('focus');
                                            }

                                            _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);

                                            _this.bindEnterKey($linkUrl, $linkBtn);

                                            _this.bindEnterKey($linkText, $linkBtn);

                                            var isNewWindowChecked = linkInfo.isNewWindow !== undefined ? linkInfo.isNewWindow : _this.context.options.linkTargetBlank;
                                            $openInNewWindow.prop('checked', isNewWindowChecked);
                                            var useProtocolChecked = linkInfo.url ? false : _this.context.options.useProtocol;
                                            $useProtocol.prop('checked', useProtocolChecked);
                                            $linkBtn.one('click', function(event) {
                                                event.preventDefault();
                                                deferred.resolve({
                                                    range: linkInfo.range,
                                                    url: $linkUrl.val(),
                                                    text: $linkText.val(),
                                                    isNewWindow: $openInNewWindow.is(':checked'),
                                                    checkProtocol: $useProtocol.is(':checked')
                                                });

                                                _this.ui.hideDialog(_this.$dialog);
                                            });
                                        });

                                        _this.ui.onDialogHidden(_this.$dialog, function() {
                                            // detach events
                                            $linkText.off();
                                            $linkUrl.off();
                                            $linkBtn.off();

                                            if (deferred.state() === 'pending') {
                                                deferred.reject();
                                            }
                                        });

                                        _this.ui.showDialog(_this.$dialog);
                                    }).promise();
                                }
                                /**
                                 * @param {Object} layoutInfo
                                 */

                        }, {
                            key: "show",
                            value: function show() {
                                var _this2 = this;

                                var linkInfo = this.context.invoke('editor.getLinkInfo');
                                this.context.invoke('editor.saveRange');
                                this.showLinkDialog(linkInfo).then(function(linkInfo) {
                                    _this2.context.invoke('editor.restoreRange');

                                    _this2.context.invoke('editor.createLink', linkInfo);
                                }).fail(function() {
                                    _this2.context.invoke('editor.restoreRange');
                                });
                            }
                        }]);

                        return LinkDialog;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/LinkPopover.js
                function LinkPopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function LinkPopover_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function LinkPopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) LinkPopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) LinkPopover_defineProperties(Constructor, staticProps); return Constructor; }





                var LinkPopover_LinkPopover =
                    /*#__PURE__*/
                    function() {
                        function LinkPopover(context) {
                            var _this = this;

                            LinkPopover_classCallCheck(this, LinkPopover);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.options = context.options;
                            this.events = {
                                'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function summernoteKeyupSummernoteMouseupSummernoteChangeSummernoteScroll() {
                                    _this.update();
                                },
                                'summernote.disable summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteDialogShownSummernoteBlur() {
                                    _this.hide();
                                }
                            };
                        }

                        LinkPopover_createClass(LinkPopover, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return !lists.isEmpty(this.options.popover.link);
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                this.$popover = this.ui.popover({
                                    className: 'note-link-popover',
                                    callback: function callback($node) {
                                        var $content = $node.find('.popover-content,.note-popover-content');
                                        $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
                                    }
                                }).render().appendTo(this.options.container);
                                var $content = this.$popover.find('.popover-content,.note-popover-content');
                                this.context.invoke('buttons.build', $content, this.options.popover.link);
                                this.$popover.on('mousedown', function(e) {
                                    e.preventDefault();
                                });
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$popover.remove();
                            }
                        }, {
                            key: "update",
                            value: function update() {
                                // Prevent focusing on editable when invoke('code') is executed
                                if (!this.context.invoke('editor.hasFocus')) {
                                    this.hide();
                                    return;
                                }

                                var rng = this.context.invoke('editor.getLastRange');

                                if (rng.isCollapsed() && rng.isOnAnchor()) {
                                    var anchor = dom.ancestor(rng.sc, dom.isAnchor);
                                    var href = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('href');
                                    this.$popover.find('a').attr('href', href).text(href);
                                    var pos = dom.posFromPlaceholder(anchor);
                                    var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
                                    pos.top -= containerOffset.top;
                                    pos.left -= containerOffset.left;
                                    this.$popover.css({
                                        display: 'block',
                                        left: pos.left,
                                        top: pos.top
                                    });
                                } else {
                                    this.hide();
                                }
                            }
                        }, {
                            key: "hide",
                            value: function hide() {
                                this.$popover.hide();
                            }
                        }]);

                        return LinkPopover;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/ImageDialog.js
                function ImageDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function ImageDialog_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function ImageDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) ImageDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) ImageDialog_defineProperties(Constructor, staticProps); return Constructor; }





                var ImageDialog_ImageDialog =
                    /*#__PURE__*/
                    function() {
                        function ImageDialog(context) {
                            ImageDialog_classCallCheck(this, ImageDialog);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
                            this.$editor = context.layoutInfo.editor;
                            this.options = context.options;
                            this.lang = this.options.langInfo;
                        }

                        ImageDialog_createClass(ImageDialog, [{
                            key: "initialize",
                            value: function initialize() {
                                var imageLimitation = '';

                                if (this.options.maximumImageFileSize) {
                                    var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
                                    var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 + ' ' + ' KMGTP' [unit] + 'B';
                                    imageLimitation = "<small>".concat(this.lang.image.maximumFileSize + ' : ' + readableSize, "</small>");
                                }

                                var $container = this.options.dialogsInBody ? this.$body : this.options.container;
                                var body = ['<div class="form-group note-form-group note-group-select-from-files">', '<label for="note-dialog-image-file-' + this.options.id + '" class="note-form-label">' + this.lang.image.selectFromFiles + '</label>', '<input id="note-dialog-image-file-' + this.options.id + '" class="note-image-input form-control-file note-form-control note-input" ', ' type="file" name="files" accept="image/*" multiple="multiple"/>', imageLimitation, '</div>', '<div class="form-group note-group-image-url">', '<label for="note-dialog-image-url-' + this.options.id + '" class="note-form-label">' + this.lang.image.url + '</label>', '<input id="note-dialog-image-url-' + this.options.id + '" class="note-image-url form-control note-form-control note-input" type="text"/>', '</div>'].join('');
                                var buttonClass = 'btn btn-primary note-btn note-btn-primary note-image-btn';
                                var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.image.insert, "\" disabled>");
                                this.$dialog = this.ui.dialog({
                                    title: this.lang.image.insert,
                                    fade: this.options.dialogsFade,
                                    body: body,
                                    footer: footer
                                }).render().appendTo($container);
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.ui.hideDialog(this.$dialog);
                                this.$dialog.remove();
                            }
                        }, {
                            key: "bindEnterKey",
                            value: function bindEnterKey($input, $btn) {
                                $input.on('keypress', function(event) {
                                    if (event.keyCode === core_key.code.ENTER) {
                                        event.preventDefault();
                                        $btn.trigger('click');
                                    }
                                });
                            }
                        }, {
                            key: "show",
                            value: function show() {
                                    var _this = this;

                                    this.context.invoke('editor.saveRange');
                                    this.showImageDialog().then(function(data) {
                                        // [workaround] hide dialog before restore range for IE range focus
                                        _this.ui.hideDialog(_this.$dialog);

                                        _this.context.invoke('editor.restoreRange');

                                        if (typeof data === 'string') {
                                            // image url
                                            // If onImageLinkInsert set,
                                            if (_this.options.callbacks.onImageLinkInsert) {
                                                _this.context.triggerEvent('image.link.insert', data);
                                            } else {
                                                _this.context.invoke('editor.insertImage', data);
                                            }
                                        } else {
                                            // array of files
                                            _this.context.invoke('editor.insertImagesOrCallback', data);
                                        }
                                    }).fail(function() {
                                        _this.context.invoke('editor.restoreRange');
                                    });
                                }
                                /**
                                 * show image dialog
                                 *
                                 * @param {jQuery} $dialog
                                 * @return {Promise}
                                 */

                        }, {
                            key: "showImageDialog",
                            value: function showImageDialog() {
                                var _this2 = this;

                                return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function(deferred) {
                                    var $imageInput = _this2.$dialog.find('.note-image-input');

                                    var $imageUrl = _this2.$dialog.find('.note-image-url');

                                    var $imageBtn = _this2.$dialog.find('.note-image-btn');

                                    _this2.ui.onDialogShown(_this2.$dialog, function() {
                                        _this2.context.triggerEvent('dialog.shown'); // Cloning imageInput to clear element.


                                        $imageInput.replaceWith($imageInput.clone().on('change', function(event) {
                                            deferred.resolve(event.target.files || event.target.value);
                                        }).val(''));
                                        $imageUrl.on('input paste propertychange', function() {
                                            _this2.ui.toggleBtn($imageBtn, $imageUrl.val());
                                        }).val('');

                                        if (!env.isSupportTouch) {
                                            $imageUrl.trigger('focus');
                                        }

                                        $imageBtn.click(function(event) {
                                            event.preventDefault();
                                            deferred.resolve($imageUrl.val());
                                        });

                                        _this2.bindEnterKey($imageUrl, $imageBtn);
                                    });

                                    _this2.ui.onDialogHidden(_this2.$dialog, function() {
                                        $imageInput.off();
                                        $imageUrl.off();
                                        $imageBtn.off();

                                        if (deferred.state() === 'pending') {
                                            deferred.reject();
                                        }
                                    });

                                    _this2.ui.showDialog(_this2.$dialog);
                                });
                            }
                        }]);

                        return ImageDialog;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/ImagePopover.js
                function ImagePopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function ImagePopover_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function ImagePopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) ImagePopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) ImagePopover_defineProperties(Constructor, staticProps); return Constructor; }




                /**
                 * Image popover module
                 *  mouse events that show/hide popover will be handled by Handle.js.
                 *  Handle.js will receive the events and invoke 'imagePopover.update'.
                 */

                var ImagePopover_ImagePopover =
                    /*#__PURE__*/
                    function() {
                        function ImagePopover(context) {
                            var _this = this;

                            ImagePopover_classCallCheck(this, ImagePopover);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.editable = context.layoutInfo.editable[0];
                            this.options = context.options;
                            this.events = {
                                'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
                                    _this.hide();
                                }
                            };
                        }

                        ImagePopover_createClass(ImagePopover, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return !lists.isEmpty(this.options.popover.image);
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                this.$popover = this.ui.popover({
                                    className: 'note-image-popover'
                                }).render().appendTo(this.options.container);
                                var $content = this.$popover.find('.popover-content,.note-popover-content');
                                this.context.invoke('buttons.build', $content, this.options.popover.image);
                                this.$popover.on('mousedown', function(e) {
                                    e.preventDefault();
                                });
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$popover.remove();
                            }
                        }, {
                            key: "update",
                            value: function update(target, event) {
                                if (dom.isImg(target)) {
                                    var position = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(target).offset();
                                    var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
                                    var pos = {};

                                    if (this.options.popatmouse) {
                                        pos.left = event.pageX - 20;
                                        pos.top = event.pageY;
                                    } else {
                                        pos = position;
                                    }

                                    pos.top -= containerOffset.top;
                                    pos.left -= containerOffset.left;
                                    this.$popover.css({
                                        display: 'block',
                                        left: pos.left,
                                        top: pos.top
                                    });
                                } else {
                                    this.hide();
                                }
                            }
                        }, {
                            key: "hide",
                            value: function hide() {
                                this.$popover.hide();
                            }
                        }]);

                        return ImagePopover;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/TablePopover.js
                function TablePopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function TablePopover_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function TablePopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) TablePopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) TablePopover_defineProperties(Constructor, staticProps); return Constructor; }






                var TablePopover_TablePopover =
                    /*#__PURE__*/
                    function() {
                        function TablePopover(context) {
                            var _this = this;

                            TablePopover_classCallCheck(this, TablePopover);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.options = context.options;
                            this.events = {
                                'summernote.mousedown': function summernoteMousedown(we, e) {
                                    _this.update(e.target);
                                },
                                'summernote.keyup summernote.scroll summernote.change': function summernoteKeyupSummernoteScrollSummernoteChange() {
                                    _this.update();
                                },
                                'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
                                    _this.hide();
                                }
                            };
                        }

                        TablePopover_createClass(TablePopover, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return !lists.isEmpty(this.options.popover.table);
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                this.$popover = this.ui.popover({
                                    className: 'note-table-popover'
                                }).render().appendTo(this.options.container);
                                var $content = this.$popover.find('.popover-content,.note-popover-content');
                                this.context.invoke('buttons.build', $content, this.options.popover.table); // [workaround] Disable Firefox's default table editor

                                if (env.isFF) {
                                    document.execCommand('enableInlineTableEditing', false, false);
                                }

                                this.$popover.on('mousedown', function(e) {
                                    e.preventDefault();
                                });
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$popover.remove();
                            }
                        }, {
                            key: "update",
                            value: function update(target) {
                                if (this.context.isDisabled()) {
                                    return false;
                                }

                                var isCell = dom.isCell(target);

                                if (isCell) {
                                    var pos = dom.posFromPlaceholder(target);
                                    var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
                                    pos.top -= containerOffset.top;
                                    pos.left -= containerOffset.left;
                                    this.$popover.css({
                                        display: 'block',
                                        left: pos.left,
                                        top: pos.top
                                    });
                                } else {
                                    this.hide();
                                }

                                return isCell;
                            }
                        }, {
                            key: "hide",
                            value: function hide() {
                                this.$popover.hide();
                            }
                        }]);

                        return TablePopover;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/VideoDialog.js
                function VideoDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function VideoDialog_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function VideoDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) VideoDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) VideoDialog_defineProperties(Constructor, staticProps); return Constructor; }





                var VideoDialog_VideoDialog =
                    /*#__PURE__*/
                    function() {
                        function VideoDialog(context) {
                            VideoDialog_classCallCheck(this, VideoDialog);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
                            this.$editor = context.layoutInfo.editor;
                            this.options = context.options;
                            this.lang = this.options.langInfo;
                        }

                        VideoDialog_createClass(VideoDialog, [{
                            key: "initialize",
                            value: function initialize() {
                                var $container = this.options.dialogsInBody ? this.$body : this.options.container;
                                var body = ['<div class="form-group note-form-group row-fluid">', "<label for=\"note-dialog-video-url-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.video.url, " <small class=\"text-muted\">").concat(this.lang.video.providers, "</small></label>"), "<input id=\"note-dialog-video-url-".concat(this.options.id, "\" class=\"note-video-url form-control note-form-control note-input\" type=\"text\"/>"), '</div>'].join('');
                                var buttonClass = 'btn btn-primary note-btn note-btn-primary note-video-btn';
                                var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.video.insert, "\" disabled>");
                                this.$dialog = this.ui.dialog({
                                    title: this.lang.video.insert,
                                    fade: this.options.dialogsFade,
                                    body: body,
                                    footer: footer
                                }).render().appendTo($container);
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.ui.hideDialog(this.$dialog);
                                this.$dialog.remove();
                            }
                        }, {
                            key: "bindEnterKey",
                            value: function bindEnterKey($input, $btn) {
                                $input.on('keypress', function(event) {
                                    if (event.keyCode === core_key.code.ENTER) {
                                        event.preventDefault();
                                        $btn.trigger('click');
                                    }
                                });
                            }
                        }, {
                            key: "createVideoNode",
                            value: function createVideoNode(url) {
                                // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
                                var ytRegExp = /\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/;
                                var ytRegExpForStart = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/;
                                var ytMatch = url.match(ytRegExp);
                                var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
                                var igMatch = url.match(igRegExp);
                                var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
                                var vMatch = url.match(vRegExp);
                                var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
                                var vimMatch = url.match(vimRegExp);
                                var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
                                var dmMatch = url.match(dmRegExp);
                                var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
                                var youkuMatch = url.match(youkuRegExp);
                                var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
                                var qqMatch = url.match(qqRegExp);
                                var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
                                var qqMatch2 = url.match(qqRegExp2);
                                var mp4RegExp = /^.+.(mp4|m4v)$/;
                                var mp4Match = url.match(mp4RegExp);
                                var oggRegExp = /^.+.(ogg|ogv)$/;
                                var oggMatch = url.match(oggRegExp);
                                var webmRegExp = /^.+.(webm)$/;
                                var webmMatch = url.match(webmRegExp);
                                var fbRegExp = /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/;
                                var fbMatch = url.match(fbRegExp);
                                var $video;

                                if (ytMatch && ytMatch[1].length === 11) {
                                    var youtubeId = ytMatch[1];
                                    var start = 0;

                                    if (typeof ytMatch[2] !== 'undefined') {
                                        var ytMatchForStart = ytMatch[2].match(ytRegExpForStart);

                                        if (ytMatchForStart) {
                                            for (var n = [3600, 60, 1], i = 0, r = n.length; i < r; i++) {
                                                start += typeof ytMatchForStart[i + 1] !== 'undefined' ? n[i] * parseInt(ytMatchForStart[i + 1], 10) : 0;
                                            }
                                        }
                                    }

                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', '//www.youtube.com/embed/' + youtubeId + (start > 0 ? '?start=' + start : '')).attr('width', '640').attr('height', '360');
                                } else if (igMatch && igMatch[0].length) {
                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/').attr('width', '612').attr('height', '710').attr('scrolling', 'no').attr('allowtransparency', 'true');
                                } else if (vMatch && vMatch[0].length) {
                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', vMatch[0] + '/embed/simple').attr('width', '600').attr('height', '600').attr('class', 'vine-embed');
                                } else if (vimMatch && vimMatch[3].length) {
                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('src', '//player.vimeo.com/video/' + vimMatch[3]).attr('width', '640').attr('height', '360');
                                } else if (dmMatch && dmMatch[2].length) {
                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2]).attr('width', '640').attr('height', '360');
                                } else if (youkuMatch && youkuMatch[1].length) {
                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('height', '498').attr('width', '510').attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
                                } else if (qqMatch && qqMatch[1].length || qqMatch2 && qqMatch2[2].length) {
                                    var vid = qqMatch && qqMatch[1].length ? qqMatch[1] : qqMatch2[2];
                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('height', '310').attr('width', '500').attr('src', 'https://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
                                } else if (mp4Match || oggMatch || webmMatch) {
                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<video controls>').attr('src', url).attr('width', '640').attr('height', '360');
                                } else if (fbMatch && fbMatch[0].length) {
                                    $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(fbMatch[0]) + '&show_text=0&width=560').attr('width', '560').attr('height', '301').attr('scrolling', 'no').attr('allowtransparency', 'true');
                                } else {
                                    // this is not a known video link. Now what, Cat? Now what?
                                    return false;
                                }

                                var $embed;
                                var $embed = $('<div>').addClass('embed-responsive').addClass('embed-responsive-16by9');

                                $video.addClass('embed-responsive-item');
                                $video.appendTo($embed);

                                return $embed[0];
                                /*$video.addClass('note-video-clip');
                                return $video[0];*/
                            }
                        }, {
                            key: "show",
                            value: function show() {
                                    var _this = this;

                                    var text = this.context.invoke('editor.getSelectedText');
                                    this.context.invoke('editor.saveRange');
                                    this.showVideoDialog(text).then(function(url) {
                                        // [workaround] hide dialog before restore range for IE range focus
                                        _this.ui.hideDialog(_this.$dialog);

                                        _this.context.invoke('editor.restoreRange'); // build node


                                        var $node = _this.createVideoNode(url);

                                        if ($node) {
                                            // insert video node
                                            _this.context.invoke('editor.insertNode', $node);
                                        }
                                    }).fail(function() {
                                        _this.context.invoke('editor.restoreRange');
                                    });
                                }
                                /**
                                 * show video dialog
                                 *
                                 * @param {jQuery} $dialog
                                 * @return {Promise}
                                 */

                        }, {
                            key: "showVideoDialog",
                            value: function showVideoDialog()
                                /* text */
                                {
                                    var _this2 = this;

                                    return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function(deferred) {
                                        var $videoUrl = _this2.$dialog.find('.note-video-url');

                                        var $videoBtn = _this2.$dialog.find('.note-video-btn');

                                        _this2.ui.onDialogShown(_this2.$dialog, function() {
                                            _this2.context.triggerEvent('dialog.shown');

                                            $videoUrl.on('input paste propertychange', function() {
                                                _this2.ui.toggleBtn($videoBtn, $videoUrl.val());
                                            });

                                            if (!env.isSupportTouch) {
                                                $videoUrl.trigger('focus');
                                            }

                                            $videoBtn.click(function(event) {
                                                event.preventDefault();
                                                deferred.resolve($videoUrl.val());
                                            });

                                            _this2.bindEnterKey($videoUrl, $videoBtn);
                                        });

                                        _this2.ui.onDialogHidden(_this2.$dialog, function() {
                                            $videoUrl.off();
                                            $videoBtn.off();

                                            if (deferred.state() === 'pending') {
                                                deferred.reject();
                                            }
                                        });

                                        _this2.ui.showDialog(_this2.$dialog);
                                    });
                                }
                        }]);

                        return VideoDialog;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/HelpDialog.js
                function HelpDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function HelpDialog_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function HelpDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) HelpDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) HelpDialog_defineProperties(Constructor, staticProps); return Constructor; }




                var HelpDialog_HelpDialog =
                    /*#__PURE__*/
                    function() {
                        function HelpDialog(context) {
                            HelpDialog_classCallCheck(this, HelpDialog);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
                            this.$editor = context.layoutInfo.editor;
                            this.options = context.options;
                            this.lang = this.options.langInfo;
                        }

                        HelpDialog_createClass(HelpDialog, [{
                            key: "initialize",
                            value: function initialize() {
                                var $container = this.options.dialogsInBody ? this.$body : this.options.container;
                                var body = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.16</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', '</p>'].join('');
                                this.$dialog = this.ui.dialog({
                                    title: this.lang.options.help,
                                    fade: this.options.dialogsFade,
                                    body: this.createShortcutList(),
                                    footer: body,
                                    callback: function callback($node) {
                                        $node.find('.modal-body,.note-modal-body').css({
                                            'max-height': 300,
                                            'overflow': 'scroll'
                                        });
                                    }
                                }).render().appendTo($container);
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.ui.hideDialog(this.$dialog);
                                this.$dialog.remove();
                            }
                        }, {
                            key: "createShortcutList",
                            value: function createShortcutList() {
                                    var _this = this;

                                    var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
                                    return Object.keys(keyMap).map(function(key) {
                                        var command = keyMap[key];
                                        var $row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div><div class="help-list-item"/></div>');
                                        $row.append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<label><kbd>' + key + '</kdb></label>').css({
                                            'width': 180,
                                            'margin-right': 10
                                        })).append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<span/>').html(_this.context.memo('help.' + command) || command));
                                        return $row.html();
                                    }).join('');
                                }
                                /**
                                 * show help dialog
                                 *
                                 * @return {Promise}
                                 */

                        }, {
                            key: "showHelpDialog",
                            value: function showHelpDialog() {
                                var _this2 = this;

                                return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function(deferred) {
                                    _this2.ui.onDialogShown(_this2.$dialog, function() {
                                        _this2.context.triggerEvent('dialog.shown');

                                        deferred.resolve();
                                    });

                                    _this2.ui.showDialog(_this2.$dialog);
                                }).promise();
                            }
                        }, {
                            key: "show",
                            value: function show() {
                                var _this3 = this;

                                this.context.invoke('editor.saveRange');
                                this.showHelpDialog().then(function() {
                                    _this3.context.invoke('editor.restoreRange');
                                });
                            }
                        }]);

                        return HelpDialog;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/AirPopover.js
                function AirPopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function AirPopover_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function AirPopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) AirPopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) AirPopover_defineProperties(Constructor, staticProps); return Constructor; }



                var AIRMODE_POPOVER_X_OFFSET = -5;
                var AIRMODE_POPOVER_Y_OFFSET = 5;

                var AirPopover_AirPopover =
                    /*#__PURE__*/
                    function() {
                        function AirPopover(context) {
                            var _this = this;

                            AirPopover_classCallCheck(this, AirPopover);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.options = context.options;
                            this.hidable = true;
                            this.onContextmenu = false;
                            this.pageX = null;
                            this.pageY = null;
                            this.events = {
                                'summernote.contextmenu': function summernoteContextmenu(e) {
                                    if (_this.options.editing) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        _this.onContextmenu = true;

                                        _this.update(true);
                                    }
                                },
                                'summernote.mousedown': function summernoteMousedown(we, e) {
                                    _this.pageX = e.pageX;
                                    _this.pageY = e.pageY;
                                },
                                'summernote.keyup summernote.mouseup summernote.scroll': function summernoteKeyupSummernoteMouseupSummernoteScroll(we, e) {
                                    if (_this.options.editing && !_this.onContextmenu) {
                                        _this.pageX = e.pageX;
                                        _this.pageY = e.pageY;

                                        _this.update();
                                    }

                                    _this.onContextmenu = false;
                                },
                                'summernote.disable summernote.change summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteChangeSummernoteDialogShownSummernoteBlur() {
                                    _this.hide();
                                },
                                'summernote.focusout': function summernoteFocusout() {
                                    if (!_this.$popover.is(':active,:focus')) {
                                        _this.hide();
                                    }
                                }
                            };
                        }

                        AirPopover_createClass(AirPopover, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return this.options.airMode && !lists.isEmpty(this.options.popover.air);
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                var _this2 = this;

                                this.$popover = this.ui.popover({
                                    className: 'note-air-popover'
                                }).render().appendTo(this.options.container);
                                var $content = this.$popover.find('.popover-content');
                                this.context.invoke('buttons.build', $content, this.options.popover.air); // disable hiding this popover preemptively by 'summernote.blur' event.

                                this.$popover.on('mousedown', function() {
                                    _this2.hidable = false;
                                }); // (re-)enable hiding after 'summernote.blur' has been handled (aka. ignored).

                                this.$popover.on('mouseup', function() {
                                    _this2.hidable = true;
                                });
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$popover.remove();
                            }
                        }, {
                            key: "update",
                            value: function update(forcelyOpen) {
                                var styleInfo = this.context.invoke('editor.currentStyle');

                                if (styleInfo.range && (!styleInfo.range.isCollapsed() || forcelyOpen)) {
                                    var rect = {
                                        left: this.pageX,
                                        top: this.pageY
                                    };
                                    var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
                                    rect.top -= containerOffset.top;
                                    rect.left -= containerOffset.left;
                                    this.$popover.css({
                                        display: 'block',
                                        left: Math.max(rect.left, 0) + AIRMODE_POPOVER_X_OFFSET,
                                        top: rect.top + AIRMODE_POPOVER_Y_OFFSET
                                    });
                                    this.context.invoke('buttons.updateCurrentStyle', this.$popover);
                                } else {
                                    this.hide();
                                }
                            }
                        }, {
                            key: "hide",
                            value: function hide() {
                                if (this.hidable) {
                                    this.$popover.hide();
                                }
                            }
                        }]);

                        return AirPopover;
                    }();


                // CONCATENATED MODULE: ./src/js/base/module/HintPopover.js
                function HintPopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function HintPopover_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function HintPopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) HintPopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) HintPopover_defineProperties(Constructor, staticProps); return Constructor; }







                var POPOVER_DIST = 5;

                var HintPopover_HintPopover =
                    /*#__PURE__*/
                    function() {
                        function HintPopover(context) {
                            var _this = this;

                            HintPopover_classCallCheck(this, HintPopover);

                            this.context = context;
                            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
                            this.$editable = context.layoutInfo.editable;
                            this.options = context.options;
                            this.hint = this.options.hint || [];
                            this.direction = this.options.hintDirection || 'bottom';
                            this.hints = Array.isArray(this.hint) ? this.hint : [this.hint];
                            this.events = {
                                'summernote.keyup': function summernoteKeyup(we, e) {
                                    if (!e.isDefaultPrevented()) {
                                        _this.handleKeyup(e);
                                    }
                                },
                                'summernote.keydown': function summernoteKeydown(we, e) {
                                    _this.handleKeydown(e);
                                },
                                'summernote.disable summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteDialogShownSummernoteBlur() {
                                    _this.hide();
                                }
                            };
                        }

                        HintPopover_createClass(HintPopover, [{
                            key: "shouldInitialize",
                            value: function shouldInitialize() {
                                return this.hints.length > 0;
                            }
                        }, {
                            key: "initialize",
                            value: function initialize() {
                                var _this2 = this;

                                this.lastWordRange = null;
                                this.matchingWord = null;
                                this.$popover = this.ui.popover({
                                    className: 'note-hint-popover',
                                    hideArrow: true,
                                    direction: ''
                                }).render().appendTo(this.options.container);
                                this.$popover.hide();
                                this.$content = this.$popover.find('.popover-content,.note-popover-content');
                                this.$content.on('click', '.note-hint-item', function(e) {
                                    _this2.$content.find('.active').removeClass('active');

                                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget).addClass('active');

                                    _this2.replace();
                                });
                                this.$popover.on('mousedown', function(e) {
                                    e.preventDefault();
                                });
                            }
                        }, {
                            key: "destroy",
                            value: function destroy() {
                                this.$popover.remove();
                            }
                        }, {
                            key: "selectItem",
                            value: function selectItem($item) {
                                this.$content.find('.active').removeClass('active');
                                $item.addClass('active');
                                this.$content[0].scrollTop = $item[0].offsetTop - this.$content.innerHeight() / 2;
                            }
                        }, {
                            key: "moveDown",
                            value: function moveDown() {
                                var $current = this.$content.find('.note-hint-item.active');
                                var $next = $current.next();

                                if ($next.length) {
                                    this.selectItem($next);
                                } else {
                                    var $nextGroup = $current.parent().next();

                                    if (!$nextGroup.length) {
                                        $nextGroup = this.$content.find('.note-hint-group').first();
                                    }

                                    this.selectItem($nextGroup.find('.note-hint-item').first());
                                }
                            }
                        }, {
                            key: "moveUp",
                            value: function moveUp() {
                                var $current = this.$content.find('.note-hint-item.active');
                                var $prev = $current.prev();

                                if ($prev.length) {
                                    this.selectItem($prev);
                                } else {
                                    var $prevGroup = $current.parent().prev();

                                    if (!$prevGroup.length) {
                                        $prevGroup = this.$content.find('.note-hint-group').last();
                                    }

                                    this.selectItem($prevGroup.find('.note-hint-item').last());
                                }
                            }
                        }, {
                            key: "replace",
                            value: function replace() {
                                var $item = this.$content.find('.note-hint-item.active');

                                if ($item.length) {
                                    var node = this.nodeFromItem($item); // If matchingWord length = 0 -> capture OK / open hint / but as mention capture "" (\w*)

                                    if (this.matchingWord !== null && this.matchingWord.length === 0) {
                                        this.lastWordRange.so = this.lastWordRange.eo; // Else si > 0 and normal case -> adjust range "before" for correct position of insertion
                                    } else if (this.matchingWord !== null && this.matchingWord.length > 0 && !this.lastWordRange.isCollapsed()) {
                                        var rangeCompute = this.lastWordRange.eo - this.lastWordRange.so - this.matchingWord.length;

                                        if (rangeCompute > 0) {
                                            this.lastWordRange.so += rangeCompute;
                                        }
                                    }

                                    this.lastWordRange.insertNode(node);

                                    if (this.options.hintSelect === 'next') {
                                        var blank = document.createTextNode('');
                                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).after(blank);
                                        range.createFromNodeBefore(blank).select();
                                    } else {
                                        range.createFromNodeAfter(node).select();
                                    }

                                    this.lastWordRange = null;
                                    this.hide();
                                    this.context.invoke('editor.focus');
                                }
                            }
                        }, {
                            key: "nodeFromItem",
                            value: function nodeFromItem($item) {
                                var hint = this.hints[$item.data('index')];
                                var item = $item.data('item');
                                var node = hint.content ? hint.content(item) : item;

                                if (typeof node === 'string') {
                                    node = dom.createText(node);
                                }

                                return node;
                            }
                        }, {
                            key: "createItemTemplates",
                            value: function createItemTemplates(hintIdx, items) {
                                var hint = this.hints[hintIdx];
                                return items.map(function(item
                                    /*, idx */
                                ) {
                                    var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-hint-item"/>');
                                    $item.append(hint.template ? hint.template(item) : item + '');
                                    $item.data({
                                        'index': hintIdx,
                                        'item': item
                                    });
                                    return $item;
                                });
                            }
                        }, {
                            key: "handleKeydown",
                            value: function handleKeydown(e) {
                                if (!this.$popover.is(':visible')) {
                                    return;
                                }

                                if (e.keyCode === core_key.code.ENTER) {
                                    e.preventDefault();
                                    this.replace();
                                } else if (e.keyCode === core_key.code.UP) {
                                    e.preventDefault();
                                    this.moveUp();
                                } else if (e.keyCode === core_key.code.DOWN) {
                                    e.preventDefault();
                                    this.moveDown();
                                }
                            }
                        }, {
                            key: "searchKeyword",
                            value: function searchKeyword(index, keyword, callback) {
                                var hint = this.hints[index];

                                if (hint && hint.match.test(keyword) && hint.search) {
                                    var matches = hint.match.exec(keyword);
                                    this.matchingWord = matches[0];
                                    hint.search(matches[1], callback);
                                } else {
                                    callback();
                                }
                            }
                        }, {
                            key: "createGroup",
                            value: function createGroup(idx, keyword) {
                                var _this3 = this;

                                var $group = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-hint-group note-hint-group-' + idx + '"/>');
                                this.searchKeyword(idx, keyword, function(items) {
                                    items = items || [];

                                    if (items.length) {
                                        $group.html(_this3.createItemTemplates(idx, items));

                                        _this3.show();
                                    }
                                });
                                return $group;
                            }
                        }, {
                            key: "handleKeyup",
                            value: function handleKeyup(e) {
                                var _this4 = this;

                                if (!lists.contains([core_key.code.ENTER, core_key.code.UP, core_key.code.DOWN], e.keyCode)) {
                                    var _range = this.context.invoke('editor.getLastRange');

                                    var wordRange, keyword;

                                    if (this.options.hintMode === 'words') {
                                        wordRange = _range.getWordsRange(_range);
                                        keyword = wordRange.toString();
                                        this.hints.forEach(function(hint) {
                                            if (hint.match.test(keyword)) {
                                                wordRange = _range.getWordsMatchRange(hint.match);
                                                return false;
                                            }
                                        });

                                        if (!wordRange) {
                                            this.hide();
                                            return;
                                        }

                                        keyword = wordRange.toString();
                                    } else {
                                        wordRange = _range.getWordRange();
                                        keyword = wordRange.toString();
                                    }

                                    if (this.hints.length && keyword) {
                                        this.$content.empty();
                                        var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
                                        var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();

                                        if (bnd) {
                                            bnd.top -= containerOffset.top;
                                            bnd.left -= containerOffset.left;
                                            this.$popover.hide();
                                            this.lastWordRange = wordRange;
                                            this.hints.forEach(function(hint, idx) {
                                                if (hint.match.test(keyword)) {
                                                    _this4.createGroup(idx, keyword).appendTo(_this4.$content);
                                                }
                                            }); // select first .note-hint-item

                                            this.$content.find('.note-hint-item:first').addClass('active'); // set position for popover after group is created

                                            if (this.direction === 'top') {
                                                this.$popover.css({
                                                    left: bnd.left,
                                                    top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
                                                });
                                            } else {
                                                this.$popover.css({
                                                    left: bnd.left,
                                                    top: bnd.top + bnd.height + POPOVER_DIST
                                                });
                                            }
                                        }
                                    } else {
                                        this.hide();
                                    }
                                }
                            }
                        }, {
                            key: "show",
                            value: function show() {
                                this.$popover.show();
                            }
                        }, {
                            key: "hide",
                            value: function hide() {
                                this.$popover.hide();
                            }
                        }]);

                        return HintPopover;
                    }();


                // CONCATENATED MODULE: ./src/js/base/settings.js




























                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote, {
                    version: '0.8.16',
                    plugins: {},
                    dom: dom,
                    range: range,
                    lists: lists,
                    options: {
                        langInfo: external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang['en-US'],
                        editing: true,
                        modules: {
                            'editor': Editor_Editor,
                            'clipboard': Clipboard_Clipboard,
                            'dropzone': Dropzone_Dropzone,
                            'codeview': Codeview_CodeView,
                            'statusbar': Statusbar_Statusbar,
                            'fullscreen': Fullscreen_Fullscreen,
                            'handle': Handle_Handle,
                            // FIXME: HintPopover must be front of autolink
                            //  - Script error about range when Enter key is pressed on hint popover
                            'hintPopover': HintPopover_HintPopover,
                            'autoLink': AutoLink_AutoLink,
                            'autoSync': AutoSync_AutoSync,
                            'autoReplace': AutoReplace_AutoReplace,
                            'placeholder': Placeholder_Placeholder,
                            'buttons': Buttons_Buttons,
                            'toolbar': Toolbar_Toolbar,
                            'linkDialog': LinkDialog_LinkDialog,
                            'linkPopover': LinkPopover_LinkPopover,
                            'imageDialog': ImageDialog_ImageDialog,
                            'imagePopover': ImagePopover_ImagePopover,
                            'tablePopover': TablePopover_TablePopover,
                            'videoDialog': VideoDialog_VideoDialog,
                            'helpDialog': HelpDialog_HelpDialog,
                            'airPopover': AirPopover_AirPopover
                        },
                        buttons: {},
                        lang: 'en-US',
                        followingToolbar: false,
                        toolbarPosition: 'top',
                        otherStaticBar: '',
                        // toolbar
                        toolbar: [
                            ['style', ['style']],
                            ['font', ['bold', 'underline', 'clear']],
                            ['fontname', ['fontname']],
                            ['color', ['color']],
                            ['para', ['ul', 'ol', 'paragraph']],
                            ['table', ['table']],
                            ['insert', ['link', 'picture', 'video']],
                            ['view', ['fullscreen', 'codeview', 'help']]
                        ],
                        // popover
                        popatmouse: true,
                        popover: {
                            image: [
                                ['resize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
                                ['float', ['floatLeft', 'floatRight', 'floatNone']],
                                ['remove', ['removeMedia']]
                            ],
                            link: [
                                ['link', ['linkDialogShow', 'unlink']]
                            ],
                            table: [
                                ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                                ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
                            ],
                            air: [
                                ['color', ['color']],
                                ['font', ['bold', 'underline', 'clear']],
                                ['para', ['ul', 'paragraph']],
                                ['table', ['table']],
                                ['insert', ['link', 'picture']],
                                ['view', ['fullscreen', 'codeview']]
                            ]
                        },
                        // air mode: inline editor
                        airMode: false,
                        overrideContextMenu: false,
                        // TBD
                        width: null,
                        height: null,
                        linkTargetBlank: true,
                        useProtocol: true,
                        defaultProtocol: 'http://',
                        focus: false,
                        tabDisabled: false,
                        tabSize: 4,
                        styleWithCSS: false,
                        shortcuts: true,
                        textareaAutoSync: true,
                        tooltip: 'auto',
                        container: null,
                        maxTextLength: 0,
                        blockquoteBreakingLevel: 2,
                        spellCheck: true,
                        disableGrammar: false,
                        placeholder: null,
                        inheritPlaceholder: false,
                        // TODO: need to be documented
                        recordEveryKeystroke: false,
                        historyLimit: 200,
                        // TODO: need to be documented
                        hintMode: 'word',
                        hintSelect: 'after',
                        hintDirection: 'bottom',
                        styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
                        fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande', 'Tahoma', 'Times New Roman', 'Verdana'],
                        fontNamesIgnoreCheck: [],
                        addDefaultFonts: true,
                        fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
                        fontSizeUnits: ['px', 'pt'],
                        // pallete colors(n x n)
                        colors: [
                            ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
                            ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
                            ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
                            ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
                            ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
                            ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
                            ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
                            ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
                        ],
                        // http://chir.ag/projects/name-that-color/
                        colorsName: [
                            ['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'],
                            ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
                            ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'],
                            ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'],
                            ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'],
                            ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'],
                            ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'],
                            ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou']
                        ],
                        colorButton: {
                            foreColor: '#000000',
                            backColor: '#FFFF00'
                        },
                        lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
                        tableClassName: 'table table-bordered',
                        insertTableMaxSize: {
                            col: 10,
                            row: 10
                        },
                        // By default, dialogs are attached in container.
                        dialogsInBody: false,
                        dialogsFade: false,
                        maximumImageFileSize: null,
                        callbacks: {
                            onBeforeCommand: null,
                            onBlur: null,
                            onBlurCodeview: null,
                            onChange: null,
                            onChangeCodeview: null,
                            onDialogShown: null,
                            onEnter: null,
                            onFocus: null,
                            onImageLinkInsert: null,
                            onImageUpload: null,
                            onImageUploadError: null,
                            onInit: null,
                            onKeydown: null,
                            onKeyup: null,
                            onMousedown: null,
                            onMouseup: null,
                            onPaste: null,
                            onScroll: null
                        },
                        codemirror: {
                            mode: 'text/html',
                            htmlMode: true,
                            lineNumbers: true
                        },
                        codeviewFilter: false,
                        codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
                        codeviewIframeFilter: true,
                        codeviewIframeWhitelistSrc: [],
                        codeviewIframeWhitelistSrcBase: ['www.youtube.com', 'www.youtube-nocookie.com', 'www.facebook.com', 'vine.co', 'instagram.com', 'player.vimeo.com', 'www.dailymotion.com', 'player.youku.com', 'v.qq.com'],
                        keyMap: {
                            pc: {
                                'ENTER': 'insertParagraph',
                                'CTRL+Z': 'undo',
                                'CTRL+Y': 'redo',
                                'TAB': 'tab',
                                'SHIFT+TAB': 'untab',
                                'CTRL+B': 'bold',
                                'CTRL+I': 'italic',
                                'CTRL+U': 'underline',
                                'CTRL+SHIFT+S': 'strikethrough',
                                'CTRL+BACKSLASH': 'removeFormat',
                                'CTRL+SHIFT+L': 'justifyLeft',
                                'CTRL+SHIFT+E': 'justifyCenter',
                                'CTRL+SHIFT+R': 'justifyRight',
                                'CTRL+SHIFT+J': 'justifyFull',
                                'CTRL+SHIFT+NUM7': 'insertUnorderedList',
                                'CTRL+SHIFT+NUM8': 'insertOrderedList',
                                'CTRL+LEFTBRACKET': 'outdent',
                                'CTRL+RIGHTBRACKET': 'indent',
                                'CTRL+NUM0': 'formatPara',
                                'CTRL+NUM1': 'formatH1',
                                'CTRL+NUM2': 'formatH2',
                                'CTRL+NUM3': 'formatH3',
                                'CTRL+NUM4': 'formatH4',
                                'CTRL+NUM5': 'formatH5',
                                'CTRL+NUM6': 'formatH6',
                                'CTRL+ENTER': 'insertHorizontalRule',
                                'CTRL+K': 'linkDialog.show'
                            },
                            mac: {
                                'ENTER': 'insertParagraph',
                                'CMD+Z': 'undo',
                                'CMD+SHIFT+Z': 'redo',
                                'TAB': 'tab',
                                'SHIFT+TAB': 'untab',
                                'CMD+B': 'bold',
                                'CMD+I': 'italic',
                                'CMD+U': 'underline',
                                'CMD+SHIFT+S': 'strikethrough',
                                'CMD+BACKSLASH': 'removeFormat',
                                'CMD+SHIFT+L': 'justifyLeft',
                                'CMD+SHIFT+E': 'justifyCenter',
                                'CMD+SHIFT+R': 'justifyRight',
                                'CMD+SHIFT+J': 'justifyFull',
                                'CMD+SHIFT+NUM7': 'insertUnorderedList',
                                'CMD+SHIFT+NUM8': 'insertOrderedList',
                                'CMD+LEFTBRACKET': 'outdent',
                                'CMD+RIGHTBRACKET': 'indent',
                                'CMD+NUM0': 'formatPara',
                                'CMD+NUM1': 'formatH1',
                                'CMD+NUM2': 'formatH2',
                                'CMD+NUM3': 'formatH3',
                                'CMD+NUM4': 'formatH4',
                                'CMD+NUM5': 'formatH5',
                                'CMD+NUM6': 'formatH6',
                                'CMD+ENTER': 'insertHorizontalRule',
                                'CMD+K': 'linkDialog.show'
                            }
                        },
                        icons: {
                            'align': 'note-icon-align',
                            'alignCenter': 'note-icon-align-center',
                            'alignJustify': 'note-icon-align-justify',
                            'alignLeft': 'note-icon-align-left',
                            'alignRight': 'note-icon-align-right',
                            'rowBelow': 'note-icon-row-below',
                            'colBefore': 'note-icon-col-before',
                            'colAfter': 'note-icon-col-after',
                            'rowAbove': 'note-icon-row-above',
                            'rowRemove': 'note-icon-row-remove',
                            'colRemove': 'note-icon-col-remove',
                            'indent': 'note-icon-align-indent',
                            'outdent': 'note-icon-align-outdent',
                            'arrowsAlt': 'note-icon-arrows-alt',
                            'bold': 'note-icon-bold',
                            'caret': 'note-icon-caret',
                            'circle': 'note-icon-circle',
                            'close': 'note-icon-close',
                            'code': 'note-icon-code',
                            'eraser': 'note-icon-eraser',
                            'floatLeft': 'note-icon-float-left',
                            'floatRight': 'note-icon-float-right',
                            'font': 'note-icon-font',
                            'frame': 'note-icon-frame',
                            'italic': 'note-icon-italic',
                            'link': 'note-icon-link',
                            'unlink': 'note-icon-chain-broken',
                            'magic': 'note-icon-magic',
                            'menuCheck': 'note-icon-menu-check',
                            'minus': 'note-icon-minus',
                            'orderedlist': 'note-icon-orderedlist',
                            'pencil': 'note-icon-pencil',
                            'picture': 'note-icon-picture',
                            'question': 'note-icon-question',
                            'redo': 'note-icon-redo',
                            'rollback': 'note-icon-rollback',
                            'square': 'note-icon-square',
                            'strikethrough': 'note-icon-strikethrough',
                            'subscript': 'note-icon-subscript',
                            'superscript': 'note-icon-superscript',
                            'table': 'note-icon-table',
                            'textHeight': 'note-icon-text-height',
                            'trash': 'note-icon-trash',
                            'underline': 'note-icon-underline',
                            'undo': 'note-icon-undo',
                            'unorderedlist': 'note-icon-unorderedlist',
                            'video': 'note-icon-video'
                        }
                    }
                });

                /***/
            }),

            /***/
            51:
            /***/
                (function(module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);

                // EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}
                var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(0);
                var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/ __webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

                // EXTERNAL MODULE: ./src/js/base/renderer.js
                var renderer = __webpack_require__(1);

                // CONCATENATED MODULE: ./src/js/lite/ui/TooltipUI.js
                function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



                var TooltipUI_TooltipUI =
                    /*#__PURE__*/
                    function() {
                        function TooltipUI($node, options) {
                            _classCallCheck(this, TooltipUI);

                            this.$node = $node;
                            this.options = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, {
                                title: '',
                                target: options.container,
                                trigger: 'hover focus',
                                placement: 'bottom'
                            }, options); // create tooltip node

                            this.$tooltip = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(['<div class="note-tooltip">' /*, '<div class="note-tooltip-arrow"/>'*/ , '<div class="note-tooltip-content"/>', '</div>'].join('')); // define event

                            if (this.options.trigger !== 'manual') {
                                var showCallback = this.show.bind(this);
                                var hideCallback = this.hide.bind(this);
                                var toggleCallback = this.toggle.bind(this);
                                this.options.trigger.split(' ').forEach(function(eventName) {
                                    if (eventName === 'hover') {
                                        $node.off('mouseenter mouseleave');
                                        $node.on('mouseenter', showCallback).on('mouseleave', hideCallback);
                                    } else if (eventName === 'click') {
                                        $node.on('click', toggleCallback);
                                    } else if (eventName === 'focus') {
                                        $node.on('focus', showCallback).on('blur', hideCallback);
                                    }
                                });
                            }
                        }

                        _createClass(TooltipUI, [{
                            key: "show",
                            value: function show() {
                                var $node = this.$node;
                                var offset = $node.offset();
                                var targetOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.target).offset();
                                offset.top -= targetOffset.top;
                                offset.left -= targetOffset.left;
                                var $tooltip = this.$tooltip;
                                var title = this.options.title || $node.attr('title') || $node.data('title');
                                var placement = this.options.placement || $node.data('placement');
                                $tooltip.addClass(placement);
                                $tooltip.find('.note-tooltip-content').text(title);
                                $tooltip.appendTo(this.options.target);
                                var nodeWidth = $node.outerWidth();
                                var nodeHeight = $node.outerHeight();
                                var tooltipWidth = $tooltip.outerWidth();
                                var tooltipHeight = $tooltip.outerHeight();

                                if (placement === 'bottom') {
                                    $tooltip.css({
                                        top: offset.top + nodeHeight,
                                        left: offset.left + (nodeWidth / 2 - tooltipWidth / 2)
                                    });
                                } else if (placement === 'top') {
                                    $tooltip.css({
                                        top: offset.top - tooltipHeight,
                                        left: offset.left + (nodeWidth / 2 - tooltipWidth / 2)
                                    });
                                } else if (placement === 'left') {
                                    $tooltip.css({
                                        top: offset.top + (nodeHeight / 2 - tooltipHeight / 2),
                                        left: offset.left - tooltipWidth
                                    });
                                } else if (placement === 'right') {
                                    $tooltip.css({
                                        top: offset.top + (nodeHeight / 2 - tooltipHeight / 2),
                                        left: offset.left + nodeWidth
                                    });
                                }

                                $tooltip.addClass('in');
                            }
                        }, {
                            key: "hide",
                            value: function hide() {
                                var _this = this;

                                this.$tooltip.removeClass('in');
                                setTimeout(function() {
                                    _this.$tooltip.remove();
                                }, 200);
                            }
                        }, {
                            key: "toggle",
                            value: function toggle() {
                                if (this.$tooltip.hasClass('in')) {
                                    this.hide();
                                } else {
                                    this.show();
                                }
                            }
                        }]);

                        return TooltipUI;
                    }();

                /* harmony default export */
                var ui_TooltipUI = (TooltipUI_TooltipUI);
                // CONCATENATED MODULE: ./src/js/lite/ui/DropdownUI.js
                function DropdownUI_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function DropdownUI_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function DropdownUI_createClass(Constructor, protoProps, staticProps) { if (protoProps) DropdownUI_defineProperties(Constructor.prototype, protoProps); if (staticProps) DropdownUI_defineProperties(Constructor, staticProps); return Constructor; }



                var DropdownUI_DropdownUI =
                    /*#__PURE__*/
                    function() {
                        function DropdownUI($node, options) {
                            DropdownUI_classCallCheck(this, DropdownUI);

                            this.$button = $node;
                            this.options = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, {
                                target: options.container
                            }, options);
                            this.setEvent();
                        }

                        DropdownUI_createClass(DropdownUI, [{
                            key: "setEvent",
                            value: function setEvent() {
                                var _this = this;

                                this.$button.on('click', function(e) {
                                    _this.toggle();

                                    e.stopImmediatePropagation();
                                });
                            }
                        }, {
                            key: "clear",
                            value: function clear() {
                                var $parent = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('.note-btn-group.open');
                                $parent.find('.note-btn.active').removeClass('active');
                                $parent.removeClass('open');
                            }
                        }, {
                            key: "show",
                            value: function show() {
                                this.$button.addClass('active');
                                this.$button.parent().addClass('open');
                                var $dropdown = this.$button.next();
                                var offset = $dropdown.offset();
                                var width = $dropdown.outerWidth();
                                var windowWidth = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(window).width();
                                var targetMarginRight = parseFloat(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.target).css('margin-right'));

                                if (offset.left + width > windowWidth - targetMarginRight) {
                                    $dropdown.css('margin-left', windowWidth - targetMarginRight - (offset.left + width));
                                } else {
                                    $dropdown.css('margin-left', '');
                                }
                            }
                        }, {
                            key: "hide",
                            value: function hide() {
                                this.$button.removeClass('active');
                                this.$button.parent().removeClass('open');
                            }
                        }, {
                            key: "toggle",
                            value: function toggle() {
                                var isOpened = this.$button.parent().hasClass('open');
                                this.clear();

                                if (isOpened) {
                                    this.hide();
                                } else {
                                    this.show();
                                }
                            }
                        }]);

                        return DropdownUI;
                    }();

                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document).on('click', function(e) {
                    if (!external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.target).closest('.note-btn-group').length) {
                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('.note-btn-group.open').removeClass('open');
                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('.note-btn-group .note-btn.active').removeClass('active');
                    }
                });
                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document).on('click.note-dropdown-menu', function(e) {
                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.target).closest('.note-dropdown-menu').parent().removeClass('open');
                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.target).closest('.note-dropdown-menu').parent().find('.note-btn.active').removeClass('active');
                });
                /* harmony default export */
                var ui_DropdownUI = (DropdownUI_DropdownUI);
                // CONCATENATED MODULE: ./src/js/lite/ui/ModalUI.js
                function ModalUI_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

                function ModalUI_defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                function ModalUI_createClass(Constructor, protoProps, staticProps) { if (protoProps) ModalUI_defineProperties(Constructor.prototype, protoProps); if (staticProps) ModalUI_defineProperties(Constructor, staticProps); return Constructor; }



                var ModalUI_ModalUI =
                    /*#__PURE__*/
                    function() {
                        function ModalUI($node
                            /*, options */
                        ) {
                            ModalUI_classCallCheck(this, ModalUI);

                            this.$modal = $node;
                            this.$backdrop = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-modal-backdrop"/>');
                        }

                        ModalUI_createClass(ModalUI, [{
                            key: "show",
                            value: function show() {
                                var _this = this;

                                this.$backdrop.appendTo(document.body).show();
                                this.$modal.addClass('open').show();
                                this.$modal.trigger('note.modal.show');
                                this.$modal.off('click', '.close').on('click', '.close', this.hide.bind(this));
                                this.$modal.on('keydown', function(event) {
                                    if (event.which === 27) {
                                        event.preventDefault();

                                        _this.hide();
                                    }
                                });
                            }
                        }, {
                            key: "hide",
                            value: function hide() {
                                this.$modal.removeClass('open').hide();
                                this.$backdrop.hide();
                                this.$modal.trigger('note.modal.hide');
                                this.$modal.off('keydown');
                            }
                        }]);

                        return ModalUI;
                    }();

                /* harmony default export */
                var ui_ModalUI = (ModalUI_ModalUI);
                // CONCATENATED MODULE: ./src/js/lite/ui.js





                var editor = renderer["a" /* default */ ].create('<div class="note-editor note-frame"/>');
                var toolbar = renderer["a" /* default */ ].create('<div class="note-toolbar" role="toolbar"/>');
                var editingArea = renderer["a" /* default */ ].create('<div class="note-editing-area"/>');
                var codable = renderer["a" /* default */ ].create('<textarea class="note-codable" aria-multiline="true"/>');
                var editable = renderer["a" /* default */ ].create('<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>');
                var statusbar = renderer["a" /* default */ ].create(['<output class="note-status-output" role="status" aria-live="polite"/>', '<div class="note-statusbar" role="status">', '<div class="note-resizebar" aria-label="resize">', '<div class="note-icon-bar"/>', '<div class="note-icon-bar"/>', '<div class="note-icon-bar"/>', '</div>', '</div>'].join(''));
                var airEditor = renderer["a" /* default */ ].create('<div class="note-editor note-airframe"/>');
                var airEditable = renderer["a" /* default */ ].create(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>', '<output class="note-status-output" role="status" aria-live="polite"/>'].join(''));
                var buttonGroup = renderer["a" /* default */ ].create('<div class="note-btn-group">');
                var ui_button = renderer["a" /* default */ ].create('<button type="button" class="note-btn" tabindex="-1">', function($node, options) {
                    // set button type
                    if (options && options.tooltip) {
                        $node.attr({
                            'aria-label': options.tooltip
                        });
                        $node.data('_lite_tooltip', new ui_TooltipUI($node, {
                            title: options.tooltip,
                            container: options.container
                        })).on('click', function(e) {
                            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget).data('_lite_tooltip').hide();
                        });
                    }

                    if (options.contents) {
                        $node.html(options.contents);
                    }

                    if (options && options.data && options.data.toggle === 'dropdown') {
                        $node.data('_lite_dropdown', new ui_DropdownUI($node, {
                            container: options.container
                        }));
                    }
                });
                var dropdown = renderer["a" /* default */ ].create('<div class="note-dropdown-menu" role="list">', function($node, options) {
                    var markup = Array.isArray(options.items) ? options.items.map(function(item) {
                        var value = typeof item === 'string' ? item : item.value || '';
                        var content = options.template ? options.template(item) : item;
                        var $temp = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<a class="note-dropdown-item" href="#" data-value="' + value + '" role="listitem" aria-label="' + value + '"></a>');
                        $temp.html(content).data('item', item);
                        return $temp;
                    }) : options.items;
                    $node.html(markup).attr({
                        'aria-label': options.title
                    });
                    $node.on('click', '> .note-dropdown-item', function(e) {
                        var $a = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this);
                        var item = $a.data('item');
                        var value = $a.data('value');

                        if (item.click) {
                            item.click($a);
                        } else if (options.itemClick) {
                            options.itemClick(e, item, value);
                        }
                    });
                });
                var dropdownCheck = renderer["a" /* default */ ].create('<div class="note-dropdown-menu note-check" role="list">', function($node, options) {
                    var markup = Array.isArray(options.items) ? options.items.map(function(item) {
                        var value = typeof item === 'string' ? item : item.value || '';
                        var content = options.template ? options.template(item) : item;
                        var $temp = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<a class="note-dropdown-item" href="#" data-value="' + value + '" role="listitem" aria-label="' + item + '"></a>');
                        $temp.html([icon(options.checkClassName), ' ', content]).data('item', item);
                        return $temp;
                    }) : options.items;
                    $node.html(markup).attr({
                        'aria-label': options.title
                    });
                    $node.on('click', '> .note-dropdown-item', function(e) {
                        var $a = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this);
                        var item = $a.data('item');
                        var value = $a.data('value');

                        if (item.click) {
                            item.click($a);
                        } else if (options.itemClick) {
                            options.itemClick(e, item, value);
                        }
                    });
                });

                var dropdownButtonContents = function dropdownButtonContents(contents, options) {
                    return contents + ' ' + icon(options.icons.caret, 'span');
                };

                var dropdownButton = function dropdownButton(opt, callback) {
                    return buttonGroup([ui_button({
                        className: 'dropdown-toggle',
                        contents: opt.title + ' ' + icon('note-icon-caret'),
                        tooltip: opt.tooltip,
                        data: {
                            toggle: 'dropdown'
                        }
                    }), dropdown({
                        className: opt.className,
                        items: opt.items,
                        template: opt.template,
                        itemClick: opt.itemClick
                    })], {
                        callback: callback
                    }).render();
                };

                var dropdownCheckButton = function dropdownCheckButton(opt, callback) {
                    return buttonGroup([ui_button({
                        className: 'dropdown-toggle',
                        contents: opt.title + ' ' + icon('note-icon-caret'),
                        tooltip: opt.tooltip,
                        data: {
                            toggle: 'dropdown'
                        }
                    }), dropdownCheck({
                        className: opt.className,
                        checkClassName: opt.checkClassName,
                        items: opt.items,
                        template: opt.template,
                        itemClick: opt.itemClick
                    })], {
                        callback: callback
                    }).render();
                };

                var paragraphDropdownButton = function paragraphDropdownButton(opt) {
                    return buttonGroup([ui_button({
                        className: 'dropdown-toggle',
                        contents: opt.title + ' ' + icon('note-icon-caret'),
                        tooltip: opt.tooltip,
                        data: {
                            toggle: 'dropdown'
                        }
                    }), dropdown([buttonGroup({
                        className: 'note-align',
                        children: opt.items[0]
                    }), buttonGroup({
                        className: 'note-list',
                        children: opt.items[1]
                    })])]).render();
                };

                var ui_tableMoveHandler = function tableMoveHandler(event, col, row) {
                    var PX_PER_EM = 18;
                    var $picker = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target.parentNode); // target is mousecatcher

                    var $dimensionDisplay = $picker.next();
                    var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
                    var $highlighted = $picker.find('.note-dimension-picker-highlighted');
                    var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
                    var posOffset; // HTML5 with jQuery - e.offsetX is undefined in Firefox

                    if (event.offsetX === undefined) {
                        var posCatcher = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target).offset();
                        posOffset = {
                            x: event.pageX - posCatcher.left,
                            y: event.pageY - posCatcher.top
                        };
                    } else {
                        posOffset = {
                            x: event.offsetX,
                            y: event.offsetY
                        };
                    }

                    var dim = {
                        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
                        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
                    };
                    $highlighted.css({
                        width: dim.c + 'em',
                        height: dim.r + 'em'
                    });
                    $catcher.data('value', dim.c + 'x' + dim.r);

                    if (dim.c > 3 && dim.c < col) {
                        $unhighlighted.css({
                            width: dim.c + 1 + 'em'
                        });
                    }

                    if (dim.r > 3 && dim.r < row) {
                        $unhighlighted.css({
                            height: dim.r + 1 + 'em'
                        });
                    }

                    $dimensionDisplay.html(dim.c + ' x ' + dim.r);
                };

                var tableDropdownButton = function tableDropdownButton(opt) {
                    return buttonGroup([ui_button({
                        className: 'dropdown-toggle',
                        contents: opt.title + ' ' + icon('note-icon-caret'),
                        tooltip: opt.tooltip,
                        data: {
                            toggle: 'dropdown'
                        }
                    }), dropdown({
                        className: 'note-table',
                        items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '<div class="note-dimension-picker-highlighted"/>', '<div class="note-dimension-picker-unhighlighted"/>', '</div>', '<div class="note-dimension-display">1 x 1</div>'].join('')
                    })], {
                        callback: function callback($node) {
                            var $catcher = $node.find('.note-dimension-picker-mousecatcher');
                            $catcher.css({
                                width: opt.col + 'em',
                                height: opt.row + 'em'
                            }).mousedown(opt.itemClick).mousemove(function(e) {
                                ui_tableMoveHandler(e, opt.col, opt.row);
                            });
                        }
                    }).render();
                };

                var palette = renderer["a" /* default */ ].create('<div class="note-color-palette"/>', function($node, options) {
                    var contents = [];

                    for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
                        var eventName = options.eventName;
                        var colors = options.colors[row];
                        var colorsName = options.colorsName[row];
                        var buttons = [];

                        for (var col = 0, colSize = colors.length; col < colSize; col++) {
                            var color = colors[col];
                            var colorName = colorsName[col];
                            buttons.push(['<button type="button" class="note-btn note-color-btn"', 'style="background-color:', color, '" ', 'data-event="', eventName, '" ', 'data-value="', color, '" ', 'data-title="', colorName, '" ', 'aria-label="', colorName, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(''));
                        }

                        contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
                    }

                    $node.html(contents.join(''));
                    $node.find('.note-color-btn').each(function() {
                        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this).data('_lite_tooltip', new ui_TooltipUI(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this), {
                            container: options.container
                        }));
                    });
                });

                var ui_colorDropdownButton = function colorDropdownButton(opt, type) {
                    return buttonGroup({
                        className: 'note-color',
                        children: [ui_button({
                            className: 'note-current-color-button',
                            contents: opt.title,
                            tooltip: opt.lang.color.recent,
                            click: opt.currentClick,
                            callback: function callback($button) {
                                var $recentColor = $button.find('.note-recent-color');

                                if (type !== 'foreColor') {
                                    $recentColor.css('background-color', '#FFFF00');
                                    $button.attr('data-backColor', '#FFFF00');
                                }
                            }
                        }), ui_button({
                            className: 'dropdown-toggle',
                            contents: icon('note-icon-caret'),
                            tooltip: opt.lang.color.more,
                            data: {
                                toggle: 'dropdown'
                            }
                        }), dropdown({
                            items: ['<div>', '<div class="note-btn-group btn-background-color">', '<div class="note-palette-title">' + opt.lang.color.background + '</div>', '<div>', '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="backColor" data-value="inherit">', opt.lang.color.transparent, '</button>', '</div>', '<div class="note-holder" data-event="backColor"/>', '<div class="btn-sm">', '<input type="color" id="html5bcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">', '<button type="button" class="note-color-reset btn" data-event="backColor" data-value="cpbackColor">', opt.lang.color.cpSelect, '</button>', '</div>', '</div>', '<div class="note-btn-group btn-foreground-color">', '<div class="note-palette-title">' + opt.lang.color.foreground + '</div>', '<div>', '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="removeFormat" data-value="foreColor">', opt.lang.color.resetToDefault, '</button>', '</div>', '<div class="note-holder" data-event="foreColor"/>', '<div class="btn-sm">', '<input type="color" id="html5fcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">', '<button type="button" class="note-color-reset btn" data-event="foreColor" data-value="cpforeColor">', opt.lang.color.cpSelect, '</button>', '</div>', '</div>', '</div>'].join(''),
                            callback: function callback($dropdown) {
                                $dropdown.find('.note-holder').each(function() {
                                    var $holder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this);
                                    $holder.append(palette({
                                        colors: opt.colors,
                                        eventName: $holder.data('event')
                                    }).render());
                                });

                                if (type === 'fore') {
                                    $dropdown.find('.btn-background-color').hide();
                                    $dropdown.css({
                                        'min-width': '210px'
                                    });
                                } else if (type === 'back') {
                                    $dropdown.find('.btn-foreground-color').hide();
                                    $dropdown.css({
                                        'min-width': '210px'
                                    });
                                }
                            },
                            click: function click(event) {
                                var $button = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target);
                                var eventName = $button.data('event');
                                var value = $button.data('value');
                                var foreinput = document.getElementById('html5fcp').value;
                                var backinput = document.getElementById('html5bcp').value;

                                if (value === 'cp') {
                                    event.stopPropagation();
                                } else if (value === 'cpbackColor') {
                                    value = backinput;
                                } else if (value === 'cpforeColor') {
                                    value = foreinput;
                                }

                                if (eventName && value) {
                                    var key = eventName === 'backColor' ? 'background-color' : 'color';
                                    var $color = $button.closest('.note-color').find('.note-recent-color');
                                    var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                                    $color.css(key, value);
                                    $currentButton.attr('data-' + eventName, value);

                                    if (type === 'fore') {
                                        opt.itemClick('foreColor', value);
                                    } else if (type === 'back') {
                                        opt.itemClick('backColor', value);
                                    } else {
                                        opt.itemClick(eventName, value);
                                    }
                                }
                            }
                        })]
                    }).render();
                };

                var dialog = renderer["a" /* default */ ].create('<div class="note-modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function($node, options) {
                    if (options.fade) {
                        $node.addClass('fade');
                    }

                    $node.attr({
                        'aria-label': options.title
                    });
                    $node.html(['<div class="note-modal-content">', options.title ? '<div class="note-modal-header"><button type="button" class="close" aria-label="Close" aria-hidden="true"><i class="note-icon-close"></i></button><h4 class="note-modal-title">' + options.title + '</h4></div>' : '', '<div class="note-modal-body">' + options.body + '</div>', options.footer ? '<div class="note-modal-footer">' + options.footer + '</div>' : '', '</div>'].join(''));
                    $node.data('modal', new ui_ModalUI($node, options));
                });

                var videoDialog = function videoDialog(opt) {
                    var body = '<div class="note-form-group">' + '<label for="note-dialog-video-url-' + opt.id + '" class="note-form-label">' + opt.lang.video.url + ' <small class="text-muted">' + opt.lang.video.providers + '</small></label>' + '<input id="note-dialog-video-url-' + opt.id + '" class="note-video-url note-input" type="text"/>' + '</div>';
                    var footer = ['<button type="button" href="#" class="note-btn note-btn-primary note-video-btn disabled" disabled>', opt.lang.video.insert, '</button>'].join('');
                    return dialog({
                        title: opt.lang.video.insert,
                        fade: opt.fade,
                        body: body,
                        footer: footer
                    }).render();
                };

                var imageDialog = function imageDialog(opt) {
                    var body = '<div class="note-form-group note-group-select-from-files">' + '<label for="note-dialog-image-file-' + opt.id + '" class="note-form-label">' + opt.lang.image.selectFromFiles + '</label>' + '<input id="note-dialog-image-file-' + opt.id + '" class="note-note-image-input note-input" type="file" name="files" accept="image/*" multiple="multiple"/>' + opt.imageLimitation + '</div>' + '<div class="note-form-group">' + '<label for="note-dialog-image-url-' + opt.id + '" class="note-form-label">' + opt.lang.image.url + '</label>' + '<input id="note-dialog-image-url-' + opt.id + '" class="note-image-url note-input" type="text"/>' + '</div>';
                    var footer = ['<button href="#" type="button" class="note-btn note-btn-primary note-btn-large note-image-btn disabled" disabled>', opt.lang.image.insert, '</button>'].join('');
                    return dialog({
                        title: opt.lang.image.insert,
                        fade: opt.fade,
                        body: body,
                        footer: footer
                    }).render();
                };

                var linkDialog = function linkDialog(opt) {
                    var body = '<div class="note-form-group">' + '<label for="note-dialog-link-txt-' + opt.id + '" class="note-form-label">' + opt.lang.link.textToDisplay + '</label>' + '<input id="note-dialog-link-txt-' + opt.id + '" class="note-link-text note-input" type="text"/>' + '</div>' + '<div class="note-form-group">' + '<label for="note-dialog-link-url-' + opt.id + '" class="note-form-label">' + opt.lang.link.url + '</label>' + '<input id="note-dialog-link-url-' + opt.id + '" class="note-link-url note-input" type="text" value="http://"/>' + '</div>' + (!opt.disableLinkTarget ? '<div class="checkbox"><label for="note-dialog-link-nw-' + opt.id + '"><input id="note-dialog-link-nw-' + opt.id + '" type="checkbox" checked> ' + opt.lang.link.openInNewWindow + '</label></div>' : '') + '<div class="checkbox"><label for="note-dialog-link-up-' + opt.id + '"><input id="note-dialog-link-up-' + opt.id + '" type="checkbox" checked> ' + opt.lang.link.useProtocol + '</label></div>';
                    var footer = ['<button href="#" type="button" class="note-btn note-btn-primary note-link-btn disabled" disabled>', opt.lang.link.insert, '</button>'].join('');
                    return dialog({
                        className: 'link-dialog',
                        title: opt.lang.link.insert,
                        fade: opt.fade,
                        body: body,
                        footer: footer
                    }).render();
                };

                var popover = renderer["a" /* default */ ].create(['<div class="note-popover bottom">' /*, '<div class="note-popover-arrow"/>'*/ , '<div class="popover-content note-children-container"/>', '</div>'].join(''), function($node, options) {
                    var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';
                    $node.addClass(direction).hide();

                    if (options.hideArrow) {
                        $node.find('.note-popover-arrow').hide();
                    }
                });
                var ui_checkbox = renderer["a" /* default */ ].create('<div class="checkbox"></div>', function($node, options) {
                    $node.html(['<label' + (options.id ? ' for="note-' + options.id + '"' : '') + '>', '<input role="checkbox" type="checkbox"' + (options.id ? ' id="note-' + options.id + '"' : ''), options.checked ? ' checked' : '', ' aria-checked="' + (options.checked ? 'true' : 'false') + '"/>', options.text ? options.text : '', '</label>'].join(''));
                });

                var icon = function icon(iconClassName, tagName) {
                    tagName = tagName || 'i';
                    return '<' + tagName + ' class="' + iconClassName + '"/>';
                };

                var ui = function ui(editorOptions) {
                    return {
                        editor: editor,
                        toolbar: toolbar,
                        editingArea: editingArea,
                        codable: codable,
                        editable: editable,
                        statusbar: statusbar,
                        airEditor: airEditor,
                        airEditable: airEditable,
                        buttonGroup: buttonGroup,
                        button: ui_button,
                        dropdown: dropdown,
                        dropdownCheck: dropdownCheck,
                        dropdownButton: dropdownButton,
                        dropdownButtonContents: dropdownButtonContents,
                        dropdownCheckButton: dropdownCheckButton,
                        paragraphDropdownButton: paragraphDropdownButton,
                        tableDropdownButton: tableDropdownButton,
                        colorDropdownButton: ui_colorDropdownButton,
                        palette: palette,
                        dialog: dialog,
                        videoDialog: videoDialog,
                        imageDialog: imageDialog,
                        linkDialog: linkDialog,
                        popover: popover,
                        checkbox: ui_checkbox,
                        icon: icon,
                        options: editorOptions,
                        toggleBtn: function toggleBtn($btn, isEnable) {
                            $btn.toggleClass('disabled', !isEnable);
                            $btn.attr('disabled', !isEnable);
                        },
                        toggleBtnActive: function toggleBtnActive($btn, isActive) {
                            $btn.toggleClass('active', isActive);
                        },
                        check: function check($dom, value) {
                            $dom.find('.checked').removeClass('checked');
                            $dom.find('[data-value="' + value + '"]').addClass('checked');
                        },
                        onDialogShown: function onDialogShown($dialog, handler) {
                            $dialog.one('note.modal.show', handler);
                        },
                        onDialogHidden: function onDialogHidden($dialog, handler) {
                            $dialog.one('note.modal.hide', handler);
                        },
                        showDialog: function showDialog($dialog) {
                            $dialog.data('modal').show();
                        },
                        hideDialog: function hideDialog($dialog) {
                            $dialog.data('modal').hide();
                        },

                        /**
                         * get popover content area
                         *
                         * @param $popover
                         * @returns {*}
                         */
                        getPopoverContent: function getPopoverContent($popover) {
                            return $popover.find('.note-popover-content');
                        },

                        /**
                         * get dialog's body area
                         *
                         * @param $dialog
                         * @returns {*}
                         */
                        getDialogBody: function getDialogBody($dialog) {
                            return $dialog.find('.note-modal-body');
                        },
                        createLayout: function createLayout($note) {
                            var $editor = (editorOptions.airMode ? airEditor([editingArea([codable(), airEditable()])]) : editorOptions.toolbarPosition === 'bottom' ? editor([editingArea([codable(), editable()]), toolbar(), statusbar()]) : editor([toolbar(), editingArea([codable(), editable()]), statusbar()])).render();
                            $editor.insertAfter($note);
                            return {
                                note: $note,
                                editor: $editor,
                                toolbar: $editor.find('.note-toolbar'),
                                editingArea: $editor.find('.note-editing-area'),
                                editable: $editor.find('.note-editable'),
                                codable: $editor.find('.note-codable'),
                                statusbar: $editor.find('.note-statusbar')
                            };
                        },
                        removeLayout: function removeLayout($note, layoutInfo) {
                            $note.html(layoutInfo.editable.html());
                            layoutInfo.editor.remove();
                            $note.off('summernote'); // remove summernote custom event

                            $note.show();
                        }
                    };
                };

                /* harmony default export */
                var lite_ui = (ui);
                // EXTERNAL MODULE: ./src/js/base/settings.js + 37 modules
                var settings = __webpack_require__(3);

                // EXTERNAL MODULE: ./src/styles/summernote-lite.scss
                var summernote_lite = __webpack_require__(6);

                // CONCATENATED MODULE: ./src/js/lite/settings.js




                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote, {
                    ui_template: lite_ui,
                    "interface": 'lite'
                });

                /***/
            }),

            /***/
            6:
            /***/
                (function(module, exports, __webpack_require__) {

                // extracted by mini-css-extract-plugin

                /***/
            })

            /******/
        });
});
//# sourceMappingURL=summernote-lite.js.map
;
//# sourceMappingURL=scripts.js.map