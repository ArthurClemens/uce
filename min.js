var uce=function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?a(t):e}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=o(t);if(e){var c=o(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return u(this,n)}}var l=function(t){return{get:function(e){return t.get(e)},set:function(e,n){return t.set(e,n),n}}},s=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,f=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,p=/<[a-z][^>]+$/i,d=/>[^<>]*$/,v=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,h=/\s+$/,y=function(t,e,n){return f.test(e)?t:"<".concat(e).concat(n.replace(h,""),"></").concat(e,">")},g=function(t,e,n){for(var r=[],o=t.length,c=function(n){var o=t[n-1];r.push(s.test(o)&&function t(e,n){return 0<n--&&(p.test(e[n])||!d.test(e[n])&&t(e,n))}(t,n)?o.replace(s,(function(t,r,o){return"".concat(e).concat(n-1,"=").concat(o||'"').concat(r).concat(o?"":'"')})):"".concat(o,"\x3c!--").concat(e).concat(n-1,"--\x3e"))},a=1;a<o;a++)c(a);r.push(t[o-1]);var u=r.join("").trim();return n?u:u.replace(v,y)},b=Array.isArray,m=[],w=m.indexOf,C=m.slice,k=function(t,e){return 111===t.nodeType?1/e<0?e?function(t){var e=t.firstChild,n=t.lastChild,r=document.createRange();return r.setStartAfter(e),r.setEndAfter(n),r.deleteContents(),e}(t):t.lastChild:e?t.valueOf():t.firstChild:t},O=function(t){var e="fragment",n="template",r="content"in c(n)?function(t){var e=c(n);return e.innerHTML=t,e.content}:function(t){var r=c(e),a=c(n),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;a.innerHTML="<table>"+t+"</table>",u=a.querySelectorAll(i)}else a.innerHTML=t,u=a.childNodes;return o(r,u),r};return function(t,e){return("svg"===e?a:r)(t)};function o(t,e){for(var n=e.length;n--;)t.appendChild(e[0])}function c(n){return n===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",n)}function a(t){var n=c(e),r=c("div");return r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",o(n,r.firstChild.childNodes),n}}(document),x=function(t,e){return t.childNodes[e]},E=function(t){for(var e=[],n=t.parentNode;n;)e.push(w.call(n.childNodes,t)),n=(t=n).parentNode;return e},N=document,A=N.createTreeWalker,j=N.importNode,S=1!=j.length,T=S?function(t,e){return j.call(document,O(t,e),!0)}:O,L=S?function(t){return A.call(document,t,129,null,!1)}:function(t){return A.call(document,t,129)},M=function(t,e,n){return function(t,e,n,r,o){for(var c=n.length,a=e.length,u=c,i=0,l=0,s=null;i<a||l<u;)if(a===i)for(var f=u<c?l?r(n[l-1],-0).nextSibling:r(n[u-l],0):o;l<u;)t.insertBefore(r(n[l++],1),f);else if(u===l)for(;i<a;)s&&s.has(e[i])||t.removeChild(r(e[i],-1)),i++;else if(e[i]===n[l])i++,l++;else if(e[a-1]===n[u-1])a--,u--;else if(e[i]===n[u-1]&&n[l]===e[a-1]){var p=r(e[--a],-1).nextSibling;t.insertBefore(r(n[l++],1),r(e[i++],-1).nextSibling),t.insertBefore(r(n[--u],1),p),e[a]=n[u]}else{if(!s){s=new Map;for(var d=l;d<u;)s.set(n[d],d++)}if(s.has(e[i])){var v=s.get(e[i]);if(l<v&&v<u){for(var h=i,y=1;++h<a&&h<u&&s.get(e[h])===v+y;)y++;if(y>v-l)for(var g=r(e[i],0);l<v;)t.insertBefore(r(n[l++],1),g);else t.replaceChild(r(n[l++],1),r(e[i++],-1))}else i++}else t.removeChild(r(e[i++],-1))}return n}(t.parentNode,e,n,k,t)},_=function(t,e){return"ref"===e?function(t){return function(e){"function"==typeof e?e(t):e.current=t}}(t):"aria"===e?function(t){return function(e){for(var n in e){var r="role"===n?n:"aria-".concat(n),o=e[n];null==o?t.removeAttribute(r):t.setAttribute(r,o)}}}(t):".dataset"===e?function(t){var e=t.dataset;return function(t){for(var n in t){var r=t[n];null==r?delete e[n]:e[n]=r}}}(t):"."===e.slice(0,1)?function(t,e){return function(n){t[e]=n}}(t,e.slice(1)):"on"===e.slice(0,2)?function(t,e){var n,r=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(r=r.toLowerCase()),function(e){var o=b(e)?e:[e,!1];n!==o[0]&&(n&&t.removeEventListener(r,n,o[1]),(n=o[0])&&t.addEventListener(r,n,o[1]))}}(t,e):function(t,e){var n,r=!0,o=document.createAttributeNS(null,e);return function(e){n!==e&&(null==(n=e)?r||(t.removeAttributeNode(o),r=!0):(o.value=e,r&&(t.setAttributeNodeNS(o),r=!1)))}}(t,e)};function P(t){var e=t.type,n=t.path.reduceRight(x,this);return"node"===e?function(t){var e,n,r=[];return function o(c){switch(typeof c){case"string":case"number":case"boolean":e!==c&&(e=c,n?n.textContent=c:n=document.createTextNode(c),r=M(t,r,[n]));break;case"object":case"undefined":if(null==c){e!=c&&(e=c,r=M(t,r,[]));break}if(b(c)){e=c,0===c.length?r=M(t,r,[]):"object"==typeof c[0]?r=M(t,r,c):o(String(c));break}"ELEMENT_NODE"in c&&e!==c&&(e=c,r=M(t,r,11===c.nodeType?C.call(c.childNodes):[c]))}}}(n):"attr"===e?_(n,t.name):function(t){var e;return function(n){e!=n&&(e=n,t.textContent=null==n?"":n)}}(n)}var R="isµ",$=l(new WeakMap),D=function(t,e){var n=$.get(e)||$.set(e,function(t,e){for(var n=g(e,R,"svg"===t),r=T(n,t),o=L(r),c=[],a=e.length-1,u=0,i="".concat(R).concat(u);u<a;){var l=o.nextNode();if(!l)throw"bad template: ".concat(n);if(8===l.nodeType)l.textContent===i&&(c.push({type:"node",path:E(l)}),i="".concat(R).concat(++u));else{for(;l.hasAttribute(i);)c.push({type:"attr",path:E(l),name:l.getAttribute(i)}),l.removeAttribute(i),i="".concat(R).concat(++u);/^(?:style|textarea)$/i.test(l.tagName)&&l.textContent.trim()==="\x3c!--".concat(i,"--\x3e")&&(c.push({type:"text",path:E(l)}),i="".concat(R).concat(++u))}}return{content:r,nodes:c}}(t,e)),r=n.content,o=n.nodes,c=j.call(document,r,!0);return{content:c,updates:o.map(P,c)}},H=function(t,e){var n=e.type,r=e.template,o=e.values,c=o.length;W(t,o,c);var a=t.entry;a&&a.template===r&&a.type===n||(t.entry=a=function(t,e){var n=D(t,e);return{type:t,template:e,content:n.content,updates:n.updates,wire:null}}(n,r));for(var u=a,i=u.content,l=u.updates,s=u.wire,f=0;f<c;f++)l[f](o[f]);return s||(a.wire=function(t){var e=t.childNodes,n=e.length;if(n<2)return n?e[0]:t;var r=C.call(e,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(e.length!==n)for(var o=0;o<n;)t.appendChild(r[o++]);return t}}}(i))},W=function t(e,n,r){for(var o=e.stack,c=0;c<r;c++){var a=n[c];a instanceof B?n[c]=H(o[c]||(o[c]={stack:[],entry:null,wire:null}),a):b(a)?t(o[c]||(o[c]={stack:[],entry:null,wire:null}),a,a.length):o[c]=null}r<o.length&&o.splice(r)};function B(t,e,n){this.type=t,this.template=e,this.values=n}var z=Object.create,q=Object.defineProperties,F=function(t){var e=l(new WeakMap);return q((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new B(t,e,r)}),{for:{value:function(n,r){var o=e.get(n)||e.set(n,z(null));return o[r]||(o[r]=function(e){return function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return H(e,{type:t,template:n,values:o})}}({stack:[],entry:null,wire:null}))}},node:{value:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return H({stack:[],entry:null,wire:null},{type:t,template:e,values:r}).valueOf()}}})},G=l(new WeakMap),I=function(t,e){var n="function"==typeof e?e():e,r=G.get(t)||G.set(t,{stack:[],entry:null,wire:null}),o=n instanceof B?H(r,n):n;return o!==r.wire&&(r.wire=o,t.textContent="",t.appendChild(o.valueOf())),t},J=F("html"),K=F("svg");function Q(t){for(var e=t[0],n=1,r=arguments.length;n<r;n++)e+=arguments[n]+t[n];return e}var U=customElements,V=U.define,X=Object.create,Y=Object.defineProperties,Z=Object.getOwnPropertyDescriptor,tt=Object.keys,et="element",nt=l(new Map([[et,{c:HTMLElement,e:et}]])),rt=function(t){return document.createElement(t)},ot=function(t){return nt.get(t)||nt.set(t,{c:rt(t).constructor,e:t})},ct=function(t,n){for(var o=n.attachShadow,c=n.attributeChanged,u=n.constructor,l=n.connected,s=n.disconnected,f=n.handleEvent,p=n.init,d=n.observedAttributes,v=n.style,h=n.hasOwnProperty("constructor")?u:null,y=new WeakMap,g={},b={},m=[],w=X(null),C=function(t){p&&!y.has(t)&&(y.set(t,0),p.call(t))},k=tt(n),O=0,x=k.length;O<x;O++){var E=k[O];if(/^on/.test(E)&&!/Options$/.test(E)){var N=n[E+"Options"]||!1,A=E.toLowerCase(),j=A.slice(2);m.push({type:j,options:N}),w[j]=E,A!==E&&(j=A.slice(2,3)+E.slice(3),w[j]=E,m.push({type:j,options:N}))}switch(E){case"attachShadow":case"observedAttributes":case"style":break;default:b[E]=Z(n,E)}}var S=m.length;S&&!f&&(b.handleEvent={value:function(t){this[w[t.type]](t)}}),"props"in b||(b.props={get:function(){for(var t={},e=this.attributes,n=e.length,r=0;r<n;r++){var o=e[r],c=o.name,a=o.value;t[c]=a}return t}}),d&&(g.observedAttributes={value:d}),b.attributeChangedCallback={value:function(){C(this),c&&c.apply(this,arguments)}},b.connectedCallback={value:function(){C(this),l&&l.apply(this,arguments)}},s&&(b.disconnectedCallback={value:s});var T=ot(n.extends||et),L=T.c,M=T.e,_=function(t){r(c,t);var n=i(c);function c(){var t;e(this,c);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];t=n.call.apply(n,[this].concat(u)),Y(a(t),{html:{value:at.bind(o?t.attachShadow(o):a(t))}});for(var l=0;l<S;l++){var s=m[l],f=s.type,p=s.options;t.addEventListener(f,a(t),p)}return h&&h.call(a(t)),t}return c}(L);Y(_,g),Y(_.prototype,b);var P=[t,_];M!==et&&P.push({extends:M}),V.apply(U,P),nt.set(t,{c:_,e:M}),v&&(document.head.appendChild(rt("style")).textContent=v(M===et?t:M+'[is="'+t+'"]'))};function at(){return I(this,J.apply(null,arguments))}return U.get("uce-lib")||U.define("uce-lib",function(t){r(l,t);var o,c,a,u=i(l);function l(){return e(this,l),u.apply(this,arguments)}return o=l,a=[{key:"define",get:function(){return ct}},{key:"render",get:function(){return I}},{key:"html",get:function(){return J}},{key:"svg",get:function(){return K}},{key:"css",get:function(){return Q}}],(c=null)&&n(o.prototype,c),a&&n(o,a),l}(ot(et).c)),t.css=Q,t.define=ct,t.html=J,t.render=I,t.svg=K,t}({});