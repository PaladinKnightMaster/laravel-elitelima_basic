/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map;
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
/*
 * metismenu - v1.1.3
 * Easy menu jQuery plugin for Twitter Bootstrap 3
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */
!function(a,b,c){function d(b,c){this.element=a(b),this.settings=a.extend({},f,c),this._defaults=f,this._name=e,this.init()}var e="metisMenu",f={toggle:!0,doubleTapToGo:!1};d.prototype={init:function(){var b=this.element,d=this.settings.toggle,f=this;this.isIE()<=9?(b.find("li.active").has("ul").children("ul").collapse("show"),b.find("li").not(".active").has("ul").children("ul").collapse("hide")):(b.find("li.active").has("ul").children("ul").addClass("collapse in"),b.find("li").not(".active").has("ul").children("ul").addClass("collapse")),f.settings.doubleTapToGo&&b.find("li.active").has("ul").children("a").addClass("doubleTapToGo"),b.find("li").has("ul").children("a").on("click."+e,function(b){return b.preventDefault(),f.settings.doubleTapToGo&&f.doubleTapToGo(a(this))&&"#"!==a(this).attr("href")&&""!==a(this).attr("href")?(b.stopPropagation(),void(c.location=a(this).attr("href"))):(a(this).parent("li").toggleClass("active").children("ul").collapse("toggle"),void(d&&a(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")))})},isIE:function(){for(var a,b=3,d=c.createElement("div"),e=d.getElementsByTagName("i");d.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",e[0];)return b>4?b:a},doubleTapToGo:function(a){var b=this.element;return a.hasClass("doubleTapToGo")?(a.removeClass("doubleTapToGo"),!0):a.parent().children("ul").length?(b.find(".doubleTapToGo").removeClass("doubleTapToGo"),a.addClass("doubleTapToGo"),!1):void 0},remove:function(){this.element.off("."+e),this.element.removeData(e)}},a.fn[e]=function(b){return this.each(function(){var c=a(this);c.data(e)&&c.data(e).remove(),c.data(e,new d(this,b))}),this}}(jQuery,window,document);;
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.invokeAll('enable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    if (horizontalEmpty && verticalEmpty) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = elementOffset + contextModifier - adjustment
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }

  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;;
/*!
 * jquery.counterup.js 2.0.5
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Amended by Jeremy Paris, Ciro Mattia Gonano and others
 *
 * Date: Jun 21, 2016
 */
(function ($) {
    "use strict";

    $.fn.counterUp = function (options) {

        // Defaults
        var settings = $.extend({
                'time': 400,
                'delay': 10,
                'formatter': false,
                callback: function () {
                }
            }, options),
            s;

        return this.each(function () {

            // Store the object
            var $this = $(this),
                counter = {
                    time: $(this).data('counterup-time') || settings.time,
                    delay: $(this).data('counterup-delay') || settings.delay
                };

            var counterUpper = function () {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, '');
                var decimalPlaces = (num.split('.')[1] || []).length;

                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);

                // Convert time to total seconds
                if (isTime) {
                    var times = num.split(':'),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60;
                    }
                }

                // Generate list of incremental numbers to display
                for (var i = divisions; i >= 1; i--) {

                    var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);

                    // Add incremental seconds and convert back to time
                    if (isTime) {
                        newNum = parseInt(s / divisions * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                    }

                    // Preserve commas if input had commas
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                        }
                    }
                    if (settings.formatter) {
                        newNum = settings.formatter.call(this, newNum);
                    }
                    nums.unshift(newNum);
                }

                $this.data('counterup-nums', nums);
                $this.text('0');

                // Updates the number until we're done
                var f = function () {
                	if(!$this.data('counterup-nums'))
                	{
 						settings.callback.call(this);
 						return;
 					}
                    $this.html($this.data('counterup-nums').shift());
                    if ($this.data('counterup-nums').length) {
                        setTimeout($this.data('counterup-func'), counter.delay);
                    } else {
                        $this.data('counterup-nums', null);
                        $this.data('counterup-func', null);
                        settings.callback.call(this);
                    }
                };
                $this.data('counterup-func', f);

                // Start the count up
                setTimeout($this.data('counterup-func'), counter.delay);
            };

            // Perform counts when the element gets into view
            $this.waypoint(function (direction) {
                counterUpper();
                this.destroy(); //-- Waypoint 3.0 version of triggerOnce
            }, {offset: '100%'});
        });

    };

})(jQuery);;
!function(e){e.fn.extend({slimScroll:function(i){var o={width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},s=e.extend(o,i);return this.each(function(){function o(t){if(h){var t=t||window.event,i=0;t.wheelDelta&&(i=-t.wheelDelta/120),t.detail&&(i=t.detail/3);var o=t.target||t.srcTarget||t.srcElement;e(o).closest("."+s.wrapperClass).is(x.parent())&&r(i,!0),t.preventDefault&&!y&&t.preventDefault(),y||(t.returnValue=!1)}}function r(e,t,i){y=!1;var o=e,r=x.outerHeight()-R.outerHeight();if(t&&(o=parseInt(R.css("top"))+e*parseInt(s.wheelStep)/100*R.outerHeight(),o=Math.min(Math.max(o,0),r),o=e>0?Math.ceil(o):Math.floor(o),R.css({top:o+"px"})),v=parseInt(R.css("top"))/(x.outerHeight()-R.outerHeight()),o=v*(x[0].scrollHeight-x.outerHeight()),i){o=e;var a=o/x[0].scrollHeight*x.outerHeight();a=Math.min(Math.max(a,0),r),R.css({top:a+"px"})}x.scrollTop(o),x.trigger("slimscrolling",~~o),n(),c()}function a(e){window.addEventListener?(e.addEventListener("DOMMouseScroll",o,!1),e.addEventListener("mousewheel",o,!1)):document.attachEvent("onmousewheel",o)}function l(){f=Math.max(x.outerHeight()/x[0].scrollHeight*x.outerHeight(),m),R.css({height:f+"px"});var e=f==x.outerHeight()?"none":"block";R.css({display:e})}function n(){if(l(),clearTimeout(p),v==~~v){if(y=s.allowPageScroll,b!=v){var e=0==~~v?"top":"bottom";x.trigger("slimscroll",e)}}else y=!1;return b=v,f>=x.outerHeight()?void(y=!0):(R.stop(!0,!0).fadeIn("fast"),void(s.railVisible&&E.stop(!0,!0).fadeIn("fast")))}function c(){s.alwaysVisible||(p=setTimeout(function(){s.disableFadeOut&&h||u||d||(R.fadeOut("slow"),E.fadeOut("slow"))},1e3))}var h,u,d,p,g,f,v,b,w="<div></div>",m=30,y=!1,x=e(this);if(x.parent().hasClass(s.wrapperClass)){var C=x.scrollTop();if(R=x.closest("."+s.barClass),E=x.closest("."+s.railClass),l(),e.isPlainObject(i)){if("height"in i&&"auto"==i.height){x.parent().css("height","auto"),x.css("height","auto");var H=x.parent().parent().height();x.parent().css("height",H),x.css("height",H)}if("scrollTo"in i)C=parseInt(s.scrollTo);else if("scrollBy"in i)C+=parseInt(s.scrollBy);else if("destroy"in i)return R.remove(),E.remove(),void x.unwrap();r(C,!1,!0)}}else if(!(e.isPlainObject(i)&&"destroy"in i)){s.height="auto"==s.height?x.parent().height():s.height;var S=e(w).addClass(s.wrapperClass).css({position:"relative",overflow:"hidden",width:s.width,height:s.height});x.css({overflow:"hidden",width:s.width,height:s.height});var E=e(w).addClass(s.railClass).css({width:s.size,height:"100%",position:"absolute",top:0,display:s.alwaysVisible&&s.railVisible?"block":"none","border-radius":s.railBorderRadius,background:s.railColor,opacity:s.railOpacity,zIndex:90}),R=e(w).addClass(s.barClass).css({background:s.color,width:s.size,position:"absolute",top:0,opacity:s.opacity,display:s.alwaysVisible?"block":"none","border-radius":s.borderRadius,BorderRadius:s.borderRadius,MozBorderRadius:s.borderRadius,WebkitBorderRadius:s.borderRadius,zIndex:99}),D="right"==s.position?{right:s.distance}:{left:s.distance};E.css(D),R.css(D),x.wrap(S),x.parent().append(R),x.parent().append(E),s.railDraggable&&R.bind("mousedown",function(i){var o=e(document);return d=!0,t=parseFloat(R.css("top")),pageY=i.pageY,o.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,R.css("top",currTop),r(0,R.position().top,!1)}),o.bind("mouseup.slimscroll",function(e){d=!1,c(),o.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(e){return e.stopPropagation(),e.preventDefault(),!1}),E.hover(function(){n()},function(){c()}),R.hover(function(){u=!0},function(){u=!1}),x.hover(function(){h=!0,n(),c()},function(){h=!1,c()}),x.bind("touchstart",function(e,t){e.originalEvent.touches.length&&(g=e.originalEvent.touches[0].pageY)}),x.bind("touchmove",function(e){if(y||e.originalEvent.preventDefault(),e.originalEvent.touches.length){var t=(g-e.originalEvent.touches[0].pageY)/s.touchScrollStep;r(t,!0),g=e.originalEvent.touches[0].pageY}}),l(),"bottom"===s.start?(R.css({top:x.outerHeight()-R.outerHeight()}),r(0,!0)):"top"!==s.start&&(r(e(s.start).position().top,null,!0),s.alwaysVisible||R.hide()),a(this)}}),this}}),e.fn.extend({slimscroll:e.fn.slimScroll})}(jQuery);;
!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,"undefined"!=typeof t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(d.allowEvent(t)===!1)return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:750,show:function(t,e){if(2===t.button)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(1.4*e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;n=a[a.length-1];var o=n.getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=Date.now()-Number(n.getAttribute("data-hold")),l=350-u;0>l&&(l=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},l)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves-effect"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){e=e||{},"duration"in e&&(c.duration=e.duration),c.wrapInput(u(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);;
/**
 * jVectorMap version 2.0.2
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 */

(function( $ ){
  var apiParams = {
        set: {
          colors: 1,
          values: 1,
          backgroundColor: 1,
          scaleColors: 1,
          normalizeFunction: 1,
          focus: 1
        },
        get: {
          selectedRegions: 1,
          selectedMarkers: 1,
          mapObject: 1,
          regionName: 1
        }
      };

  $.fn.vectorMap = function(options) {
    var map,
        methodName,
        map = this.children('.jvectormap-container').data('mapObject');

    if (options === 'addMap') {
      jvm.Map.maps[arguments[1]] = arguments[2];
    } else if ((options === 'set' || options === 'get') && apiParams[options][arguments[1]]) {
      methodName = arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1);
      return map[options+methodName].apply(map, Array.prototype.slice.call(arguments, 2));
    } else {
      options = options || {};
      options.container = this;
      map = new jvm.Map(options);
    }

    return this;
  };
})( jQuery );
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function(elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {

  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function(child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function(target, source){
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function(values){
    var min = Number.MAX_VALUE,
        i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function(values){
    var max = Number.MIN_VALUE,
        i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function(object){
    var keys = [],
        key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function(object){
    var values = [],
        key,
        i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function(url){
    var deferred = new jvm.$.Deferred(),
        img = jvm.$('<img/>');

    img.error(function(){
      deferred.reject();
    }).load(function(){
      deferred.resolve(img);
    });
    img.attr('src', url);

    return deferred;
  },

  isImageUrl: function(s){
    return /\.\w{3,4}$/.test(s);
  }
};

jvm.$ = jQuery;

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  this.node.setAttribute(property, value);
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function(container, width, height){
  this.classPrefix = 'SVG';
  jvm.SVGCanvasElement.parentClass.call(this, 'svg');

  this.defsElement = new jvm.SVGElement('defs');
  this.node.appendChild( this.defsElement.node );

  jvm.AbstractCanvasElement.apply(this, arguments);
}

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function(width, height){
  this.width = width;
  this.height = height;
  this.node.setAttribute('width', width);
  this.node.setAttribute('height', height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.setAttribute('transform', 'scale('+scale+') translate('+transX+', '+transY+')');
};jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this;

  if (attr == 'image') {
    jvm.whenImageLoaded(value).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2);
      that.applyAttr('y', that.cy - that.height / 2);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\d+)e(-?\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\d)-/g, '$1,-')
            .replace(/^\s+/g, '')
            .replace(/\s+$/g, '')
            .replace(/\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+ticks[i].value+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numberic or color attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.min Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function(params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || 'fill';

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor = (params.attribute === 'fill' || params.attribute === 'stroke') ? jvm.ColorScale : jvm.NumericScale;
    this.scale = new scaleConstructor(params.scale, params.normalizeFunction, params.min, params.max);
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend($.extend({
      map: this.map,
      series: this
    }, this.params.legend))
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function(key, attr){
    var attrs = key,
        code;

    if (typeof key == 'string') {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(this.params.attribute, attrs[code]);
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function(values) {
    var max = -Number.MAX_VALUE,
        min = Number.MAX_VALUE,
        val,
        cc,
        attrs = {};

    if (!(this.scale instanceof jvm.OrdinalScale) && !(this.scale instanceof jvm.SimpleScale)) {
      // we have a color scale as an array
      if (typeof this.params.min === 'undefined' || typeof this.params.max === 'undefined') {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === 'undefined') {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === 'undefined') {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != 'indexOf') {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] = this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] = this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function(){
    var key,
        attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] = this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function(scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} normilizeFunction.
   */
  setNormalizeFunction: function(f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  }
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Boolean} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function(params) {
  var map = this,
      e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error('Attempt to use map which was not loaded: '+this.params.map);
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$('<div>').addClass('jvectormap-container');
  if (this.params.container) {
    this.params.container.append( this.container );
  }
  this.container.data('mapObject', this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function(){
    map.updateSize();
  }
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e]+'.jvectormap', this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(this.container[0], this.width, this.height);

  if ( ('ontouchstart' in window) || (window.DocumentTouch && document instanceof DocumentTouch) ) {
    if (this.params.bindTouchEvents) {
      this.bindContainerTouchEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === 'string') {
      this.params.focusOn = {region: this.params.focusOn};
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = {regions: this.params.focusOn};
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm.$('<div/>').addClass('jvectormap-legend-cnt jvectormap-legend-cnt-h');
  this.legendCntVertical = jvm.$('<div/>').addClass('jvectormap-legend-cnt jvectormap-legend-cnt-v');
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function(backgroundColor) {
    this.container.css('background-color', backgroundColor);
  },

  resize: function() {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function(){
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function() {
    var key,
        i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function() {
    var maxTransX,
        maxTransY,
        minTransX,
        minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger('viewportChange', [this.scale/this.baseScale, this.transX, this.transY]);
  },

  bindContainerEvents: function(){
    var mouseDown = false,
        oldPageX,
        oldPageY,
        map = this;

    if (this.params.panOnDrag) {
      this.container.mousemove(function(e){
        if (mouseDown) {
          map.transX -= (oldPageX - e.pageX) / map.scale;
          map.transY -= (oldPageY - e.pageY) / map.scale;

          map.applyTransform();

          oldPageX = e.pageX;
          oldPageY = e.pageY;
        }
        return false;
      }).mousedown(function(e){
        mouseDown = true;
        oldPageX = e.pageX;
        oldPageY = e.pageY;
        return false;
      });

      this.onContainerMouseUp = function(){
        mouseDown = false;
      };
      jvm.$('body').mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function(event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
            centerX = event.pageX - offset.left,
            centerY = event.pageY - offset.top,
            zoomStep = Math.pow(1 + map.params.zoomOnScrollSpeed / 1000, event.deltaFactor * event.deltaY);

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function(){
    var touchStartScale,
        touchStartDistance,
        map = this,
        touchX,
        touchY,
        centerTouchX,
        centerTouchY,
        lastTouchesLength,
        handleTouchEvent = function(e){
          var touches = e.originalEvent.touches,
              offset,
              scale,
              transXOld,
              transYOld;

          if (e.type == 'touchstart') {
            lastTouchesLength = 0;
          }

          if (touches.length == 1) {
            if (lastTouchesLength == 1) {
              transXOld = map.transX;
              transYOld = map.transY;
              map.transX -= (touchX - touches[0].pageX) / map.scale;
              map.transY -= (touchY - touches[0].pageY) / map.scale;
              map.applyTransform();
              map.tip.hide();
              if (transXOld != map.transX || transYOld != map.transY) {
                e.preventDefault();
              }
            }
            touchX = touches[0].pageX;
            touchY = touches[0].pageY;
          } else if (touches.length == 2) {
            if (lastTouchesLength == 2) {
              scale = Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2)
              ) / touchStartDistance;
              map.setScale(
                touchStartScale * scale,
                centerTouchX,
                centerTouchY
              )
              map.tip.hide();
              e.preventDefault();
            } else {
              offset = jvm.$(map.container).offset();
              if (touches[0].pageX > touches[1].pageX) {
                centerTouchX = touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
              } else {
                centerTouchX = touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
              }
              if (touches[0].pageY > touches[1].pageY) {
                centerTouchY = touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
              } else {
                centerTouchY = touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
              }
              centerTouchX -= offset.left;
              centerTouchY -= offset.top;
              touchStartScale = map.scale;
              touchStartDistance = Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2)
              );
            }
          }

          lastTouchesLength = touches.length;
        };

    jvm.$(this.container).bind('touchstart', handleTouchEvent);
    jvm.$(this.container).bind('touchmove', handleTouchEvent);
  },

  bindElementEvents: function(){
    var map = this,
        mouseMoved;

    this.container.mousemove(function(){
      mouseMoved = true;
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mouseover mouseout', function(e){
      var baseVal = jvm.$(this).attr('class').baseVal || jvm.$(this).attr('class'),
          type = baseVal.indexOf('jvectormap-region') === -1 ? 'marker' : 'region',
          code = type == 'region' ? jvm.$(this).attr('data-code') : jvm.$(this).attr('data-index'),
          element = type == 'region' ? map.regions[code].element : map.markers[code].element,
          tipText = type == 'region' ? map.mapData.paths[code].name : (map.markers[code].config.name || ''),
          tipShowEvent = jvm.$.Event(type+'TipShow.jvectormap'),
          overEvent = jvm.$.Event(type+'Over.jvectormap');

      if (e.type == 'mouseover') {
        map.container.trigger(overEvent, [code]);
        if (!overEvent.isDefaultPrevented()) {
          element.setHovered(true);
        }

        map.tip.text(tipText);
        map.container.trigger(tipShowEvent, [map.tip, code]);
        if (!tipShowEvent.isDefaultPrevented()) {
          map.tip.show();
          map.tipWidth = map.tip.width();
          map.tipHeight = map.tip.height();
        }
      } else {
        element.setHovered(false);
        map.tip.hide();
        map.container.trigger(type+'Out.jvectormap', [code]);
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mousedown', function(){
      mouseMoved = false;
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate("[class~='jvectormap-element']", 'mouseup', function(){
      var baseVal = jvm.$(this).attr('class').baseVal ? jvm.$(this).attr('class').baseVal : jvm.$(this).attr('class'),
          type = baseVal.indexOf('jvectormap-region') === -1 ? 'marker' : 'region',
          code = type == 'region' ? jvm.$(this).attr('data-code') : jvm.$(this).attr('data-index'),
          clickEvent = jvm.$.Event(type+'Click.jvectormap'),
          element = type == 'region' ? map.regions[code].element : map.markers[code].element;

      if (!mouseMoved) {
        map.container.trigger(clickEvent, [code]);
        if ((type === 'region' && map.params.regionsSelectable) || (type === 'marker' && map.params.markersSelectable)) {
          if (!clickEvent.isDefaultPrevented()) {
            if (map.params[type+'sSelectableOne']) {
              map.clearSelected(type+'s');
            }
            element.setSelected(!element.isSelected);
          }
        }
      }
    });
  },

  bindZoomButtons: function() {
    var map = this;

    jvm.$('<div/>').addClass('jvectormap-zoomin').text('+').appendTo(this.container);
    jvm.$('<div/>').addClass('jvectormap-zoomout').html('&#x2212;').appendTo(this.container);

    this.container.find('.jvectormap-zoomin').click(function(){
      map.setScale(map.scale * map.params.zoomStep, map.width / 2, map.height / 2, false, map.params.zoomAnimate);
    });
    this.container.find('.jvectormap-zoomout').click(function(){
      map.setScale(map.scale / map.params.zoomStep, map.width / 2, map.height / 2, false, map.params.zoomAnimate);
    });
  },

  createTip: function(){
    var map = this;

    this.tip = jvm.$('<div/>').addClass('jvectormap-tip').appendTo(jvm.$('body'));

    this.container.mousemove(function(e){
      var left = e.pageX-15-map.tipWidth,
          top = e.pageY-15-map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top
      });
    });
  },

  setScale: function(scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event('zoom.jvectormap'),
        interval,
        that = this,
        i = 0,
        count = Math.abs(Math.round((scale - this.scale) * 60 / Math.max(scale, this.scale))),
        scaleStart,
        scaleDiff,
        transXStart,
        transXDiff,
        transYStart,
        transYDiff,
        transX,
        transY,
        deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != 'undefined' && typeof anchorY != 'undefined') {
      zoomStep = scale / this.scale;
      if (isCentered) {
        transX = anchorX + this.defaultWidth * (this.width / (this.defaultWidth * scale)) / 2;
        transY = anchorY + this.defaultHeight * (this.height / (this.defaultHeight * scale)) / 2;
      } else {
        transX = this.transX - (zoomStep - 1) / scale * anchorX;
        transY = this.transY - (zoomStep - 1) / scale * anchorY;
      }
    }

    if (animate && count > 0)  {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function(){
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale/that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale/this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function(config){
    var bbox,
        itemBbox,
        newBbox,
        codes,
        i,
        point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == 'undefined') {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width: Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) - Math.min(bbox.x, itemBbox.x),
                height: Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) - Math.min(bbox.y, itemBbox.y)
              }
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        - (bbox.x + bbox.width / 2),
        - (bbox.y + bbox.height / 2),
        true,
        config.animate
      );
    } else {
      if (config.lat && config.lng) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(config.scale * this.baseScale, config.x, config.y, true, config.animate);
    }
  },

  getSelected: function(type){
    var key,
        selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function(){
    return this.getSelected('regions');
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function(){
    return this.getSelected('markers');
  },

  setSelected: function(type, keys){
    var i;

    if (typeof keys != 'object') {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function(keys){
    this.setSelected('regions', keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function(keys){
    this.setSelected('markers', keys);
  },

  clearSelected: function(type){
    var select = {},
        selected = this.getSelected(type),
        i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    };

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function(){
    this.clearSelected('regions');
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function(){
    this.clearSelected('markers');
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function(){
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function(code){
    return this.mapData.paths[code].name;
  },

  createRegions: function(){
    var key,
        region,
        map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, this.params.regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label: this.canvas.mode != 'vml' ? (this.params.labels && this.params.labels.regions) : null
      });

      jvm.$(region.shape).bind('selected', function(e, isSelected){
        map.container.trigger('regionSelected.jvectormap', [jvm.$(this.node).attr('data-code'), isSelected, map.getSelectedRegions()]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key]
      };
    }
  },

  createMarkers: function(markers) {
    var i,
        marker,
        point,
        markerConfig,
        markersArray,
        map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig = markers[i] instanceof Array ? {latLng: markers[i]} : markers[i];
      point = this.getMarkerPosition( markerConfig );

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {initial: markerConfig.style || {}}),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label: this.canvas.mode != 'vml' ? (this.params.labels && this.params.labels.markers) : null
        });

        jvm.$(marker.shape).bind('selected', function(e, isSelected){
          map.container.trigger('markerSelected.jvectormap', [jvm.$(this.node).attr('data-index'), isSelected, map.getSelectedMarkers()]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = {element: marker, config: markerConfig};
      }
    }
  },

  repositionMarkers: function() {
    var i,
        point;

    for (i in this.markers) {
      point = this.getMarkerPosition( this.markers[i].config );
      if (point !== false) {
        this.markers[i].element.setStyle({cx: point.x, cy: point.y});
      }
    }
  },

  repositionLabels: function() {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function(markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0]*this.scale + this.transX*this.scale,
        y: markerConfig.coords[1]*this.scale + this.transY*this.scale
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function(key, marker, seriesData){
    var markers = {},
        data = [],
        values,
        i,
        seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== 'undefined') {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function(markers, seriesData){
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    };
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function(markers){
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[ markers[i] ].element.remove();
      delete this.markers[ markers[i] ];
    };
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function(){
    var i,
        markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers)
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function(lat, lng) {
    var point,
        proj = jvm.Map.maps[this.params.map].projection,
        centralMeridian = proj.centralMeridian,
        inset,
        bbox;

    if (lng < (-180 + centralMeridian)) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x = (point.x - bbox[0].x) / (bbox[1].x - bbox[0].x) * inset.width * this.scale;
      point.y = (point.y - bbox[0].y) / (bbox[1].y - bbox[0].y) * inset.height * this.scale;

      return {
        x: point.x + this.transX*this.scale + inset.left*this.scale,
        y: point.y + this.transY*this.scale + inset.top*this.scale
      };
     } else {
       return false;
     }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function(x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
        centralMeridian = proj.centralMeridian,
        insets = jvm.Map.maps[this.params.map].insets,
        i,
        inset,
        bbox,
        nx,
        ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX*this.scale + inset.left*this.scale);
      ny = y - (this.transY*this.scale + inset.top*this.scale);

      nx = (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny = (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) + bbox[0].y;

      if (nx > bbox[0].x && nx < bbox[1].x && ny > bbox[0].y && ny < bbox[1].y) {
        return jvm.Proj[proj.type + '_inv'](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function(x, y){
    var insets = jvm.Map.maps[this.params.map].insets,
        i,
        bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function(){
    var i,
        key;

    this.series = {
      markers: [],
      regions: []
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function(){
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind('resize', this.onResize);
    jvm.$('body').unbind('mouseup', this.onContainerMouseUp);
  }
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: 'world_mill_en',
  backgroundColor: '#505050',
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: 'white',
      "fill-opacity": 1,
      stroke: 'none',
      "stroke-width": 0,
      "stroke-opacity": 1
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: 'pointer'
    },
    selected: {
      fill: 'yellow'
    },
    selectedHover: {
    }
  },
  regionLabelStyle: {
    initial: {
      'font-family': 'Verdana',
      'font-size': '12',
      'font-weight': 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  },
  markerStyle: {
    initial: {
      fill: 'grey',
      stroke: '#505050',
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5
    },
    hover: {
      stroke: 'black',
      "stroke-width": 2,
      cursor: 'pointer'
    },
    selected: {
      fill: 'blue'
    },
    selectedHover: {
    }
  },
  markerLabelStyle: {
    initial: {
      'font-family': 'Verdana',
      'font-size': '12',
      'font-weight': 'bold',
      cursor: 'default',
      fill: 'black'
    },
    hover: {
      cursor: 'pointer'
    }
  }
};
jvm.Map.apiEvents = {
  onRegionTipShow: 'regionTipShow',
  onRegionOver: 'regionOver',
  onRegionOut: 'regionOut',
  onRegionClick: 'regionClick',
  onRegionSelected: 'regionSelected',
  onMarkerTipShow: 'markerTipShow',
  onMarkerOver: 'markerOver',
  onMarkerOut: 'markerOut',
  onMarkerClick: 'markerClick',
  onMarkerSelected: 'markerSelected',
  onViewportChange: 'viewportChange'
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function go generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function(params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [ this.addMap(this.params.main.map, this.params.main) ];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};

  this.params.container.css({position: 'relative'});
  this.backButton = jvm.$('<div/>').addClass('jvectormap-goback').text('Back').appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function(){
    that.goBack();
  });

  this.spinner = jvm.$('<div/>').addClass('jvectormap-spinner').appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function(name, config){
    var cnt = jvm.$('<div/>').css({
      width: '100%',
      height: '100%'
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, {container: cnt}));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on('regionClick.jvectormap', {scope: this}, function(e, code){
        var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

        if (!multimap.drillDownPromise || multimap.drillDownPromise.state() !== 'pending') {
          multimap.drillDown(mapName, code);
        }
      });
    }


    return this.maps[name];
  },

  downloadMap: function(code){
    var that = this,
        deferred = jvm.$.Deferred();

    if (!this.mapsLoaded[code]) {
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(function(){
        that.mapsLoaded[code] = true;
        deferred.resolve();
      }, function(){
        deferred.reject();
      });
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function(name, code){
    var currentMap = this.history[this.history.length - 1],
        that = this,
        focusPromise = currentMap.setFocus({region: code, animate: true}),
        downloadPromise = this.downloadMap(code);

    focusPromise.then(function(){
      if (downloadPromise.state() === 'pending') {
        that.spinner.show();
      }
    });
    downloadPromise.always(function(){
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function(){
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        that.addMap(name, {map: name, multiMapLevel: currentMap.params.multiMapLevel + 1});
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push( that.maps[name] );
      that.backButton.show();
    });
  },

  goBack: function(){
    var currentMap = this.history.pop(),
        prevMap = this.history[this.history.length - 1],
        that = this;

    currentMap.setFocus({scale: 1, x: 0.5, y: 0.5, animate: true}).then(function(){
      currentMap.params.container.hide();
      prevMap.params.container.show();
      prevMap.updateSize();
      if (that.history.length === 1) {
        that.backButton.hide();
      }
      prevMap.setFocus({scale: 1, x: 0.5, y: 0.5, animate: true});
    });
  }
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function(code, multiMap){
    return code.toLowerCase()+'_'+multiMap.defaultProjection+'_en';
  },
  mapUrlByCode: function(code, multiMap){
    return 'jquery-jvectormap-data-'+code.toLowerCase()+'-'+multiMap.defaultProjection+'-en.js';
  }
}
;
jQuery.fn.vectorMap('addMap', 'world_mill_en',{"insets": [{"width": 900, "top": 0, "height": 440.70631074413296, "bbox": [{"y": -12671671.123330014, "x": -20004297.151525836}, {"y": 6930392.02513512, "x": 20026572.39474939}], "left": 0}], "paths": {"BD": {"path": "M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z", "name": "Bangladesh"}, "BE": {"path": "M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z", "name": "Belgium"}, "BF": {"path": "M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z", "name": "Burkina Faso"}, "BG": {"path": "M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z", "name": "Bulgaria"}, "BA": {"path": "M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z", "name": "Bosnia and Herz."}, "BN": {"path": "M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z", "name": "Brunei"}, "BO": {"path": "M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z", "name": "Bolivia"}, "JP": {"path": "M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z", "name": "Japan"}, "BI": {"path": "M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z", "name": "Burundi"}, "BJ": {"path": "M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z", "name": "Benin"}, "BT": {"path": "M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z", "name": "Bhutan"}, "JM": {"path": "M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z", "name": "Jamaica"}, "BW": {"path": "M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z", "name": "Botswana"}, "BR": {"path": "M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z", "name": "Brazil"}, "BS": {"path": "M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z", "name": "Bahamas"}, "BY": {"path": "M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z", "name": "Belarus"}, "BZ": {"path": "M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z", "name": "Belize"}, "RU": {"path": "M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM874.85,67.94l-5.63,0.48l-0.26,-0.84l3.15,-1.89l1.94,0.01l3.19,1.16l-2.39,1.09ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z", "name": "Russia"}, "RW": {"path": "M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z", "name": "Rwanda"}, "RS": {"path": "M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z", "name": "Serbia"}, "LT": {"path": "M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z", "name": "Lithuania"}, "LU": {"path": "M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z", "name": "Luxembourg"}, "LR": {"path": "M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z", "name": "Liberia"}, "RO": {"path": "M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z", "name": "Romania"}, "GW": {"path": "M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z", "name": "Guinea-Bissau"}, "GT": {"path": "M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z", "name": "Guatemala"}, "GR": {"path": "M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z", "name": "Greece"}, "GQ": {"path": "M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z", "name": "Eq. Guinea"}, "GY": {"path": "M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z", "name": "Guyana"}, "GE": {"path": "M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z", "name": "Georgia"}, "GB": {"path": "M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z", "name": "United Kingdom"}, "GA": {"path": "M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z", "name": "Gabon"}, "GN": {"path": "M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z", "name": "Guinea"}, "GM": {"path": "M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z", "name": "Gambia"}, "GL": {"path": "M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z", "name": "Greenland"}, "KW": {"path": "M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z", "name": "Kuwait"}, "GH": {"path": "M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z", "name": "Ghana"}, "OM": {"path": "M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z", "name": "Oman"}, "_1": {"path": "M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z", "name": "Somaliland"}, "_0": {"path": "M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z", "name": "Kosovo"}, "JO": {"path": "M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z", "name": "Jordan"}, "HR": {"path": "M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z", "name": "Croatia"}, "HT": {"path": "M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z", "name": "Haiti"}, "HU": {"path": "M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z", "name": "Hungary"}, "HN": {"path": "M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z", "name": "Honduras"}, "PR": {"path": "M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z", "name": "Puerto Rico"}, "PS": {"path": "M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z", "name": "Palestine"}, "PT": {"path": "M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z", "name": "Portugal"}, "PY": {"path": "M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z", "name": "Paraguay"}, "PA": {"path": "M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z", "name": "Panama"}, "PG": {"path": "M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z", "name": "Papua New Guinea"}, "PE": {"path": "M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z", "name": "Peru"}, "PK": {"path": "M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z", "name": "Pakistan"}, "PH": {"path": "M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z", "name": "Philippines"}, "PL": {"path": "M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z", "name": "Poland"}, "-99": {"path": "M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z", "name": "N. Cyprus"}, "ZM": {"path": "M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z", "name": "Zambia"}, "EH": {"path": "M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z", "name": "W. Sahara"}, "EE": {"path": "M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z", "name": "Estonia"}, "EG": {"path": "M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z", "name": "Egypt"}, "ZA": {"path": "M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z", "name": "South Africa"}, "EC": {"path": "M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z", "name": "Ecuador"}, "AL": {"path": "M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z", "name": "Albania"}, "AO": {"path": "M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z", "name": "Angola"}, "KZ": {"path": "M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z", "name": "Kazakhstan"}, "ET": {"path": "M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z", "name": "Ethiopia"}, "ZW": {"path": "M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z", "name": "Zimbabwe"}, "ES": {"path": "M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z", "name": "Spain"}, "ER": {"path": "M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z", "name": "Eritrea"}, "ME": {"path": "M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z", "name": "Montenegro"}, "MD": {"path": "M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z", "name": "Moldova"}, "MG": {"path": "M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z", "name": "Madagascar"}, "MA": {"path": "M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z", "name": "Morocco"}, "UZ": {"path": "M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z", "name": "Uzbekistan"}, "MM": {"path": "M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z", "name": "Myanmar"}, "ML": {"path": "M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z", "name": "Mali"}, "MN": {"path": "M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z", "name": "Mongolia"}, "MK": {"path": "M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z", "name": "Macedonia"}, "MW": {"path": "M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z", "name": "Malawi"}, "MR": {"path": "M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z", "name": "Mauritania"}, "UG": {"path": "M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z", "name": "Uganda"}, "MY": {"path": "M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z", "name": "Malaysia"}, "MX": {"path": "M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z", "name": "Mexico"}, "VU": {"path": "M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z", "name": "Vanuatu"}, "FR": {"path": "M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z", "name": "France"}, "FI": {"path": "M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z", "name": "Finland"}, "FJ": {"path": "M871.53,326.34l-2.8,1.05l-0.08,-0.23l2.97,-1.21l-0.1,0.39ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z", "name": "Fiji"}, "FK": {"path": "M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z", "name": "Falkland Is."}, "NI": {"path": "M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z", "name": "Nicaragua"}, "NL": {"path": "M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z", "name": "Netherlands"}, "NO": {"path": "M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z", "name": "Norway"}, "NA": {"path": "M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z", "name": "Namibia"}, "NC": {"path": "M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z", "name": "New Caledonia"}, "NE": {"path": "M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z", "name": "Niger"}, "NG": {"path": "M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z", "name": "Nigeria"}, "NZ": {"path": "M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z", "name": "New Zealand"}, "NP": {"path": "M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z", "name": "Nepal"}, "CI": {"path": "M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z", "name": "C\u00f4te d'Ivoire"}, "CH": {"path": "M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z", "name": "Switzerland"}, "CO": {"path": "M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z", "name": "Colombia"}, "CN": {"path": "M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z", "name": "China"}, "CM": {"path": "M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z", "name": "Cameroon"}, "CL": {"path": "M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z", "name": "Chile"}, "CA": {"path": "M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z", "name": "Canada"}, "CG": {"path": "M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z", "name": "Congo"}, "CF": {"path": "M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z", "name": "Central African Rep."}, "CD": {"path": "M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z", "name": "Dem. Rep. Congo"}, "CZ": {"path": "M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z", "name": "Czech Rep."}, "CY": {"path": "M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z", "name": "Cyprus"}, "CR": {"path": "M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z", "name": "Costa Rica"}, "CU": {"path": "M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z", "name": "Cuba"}, "SZ": {"path": "M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z", "name": "Swaziland"}, "SY": {"path": "M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z", "name": "Syria"}, "KG": {"path": "M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z", "name": "Kyrgyzstan"}, "KE": {"path": "M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z", "name": "Kenya"}, "SS": {"path": "M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z", "name": "S. Sudan"}, "SR": {"path": "M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z", "name": "Suriname"}, "KH": {"path": "M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z", "name": "Cambodia"}, "SV": {"path": "M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z", "name": "El Salvador"}, "SK": {"path": "M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z", "name": "Slovakia"}, "KR": {"path": "M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z", "name": "Korea"}, "SI": {"path": "M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z", "name": "Slovenia"}, "KP": {"path": "M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z", "name": "Dem. Rep. Korea"}, "SO": {"path": "M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z", "name": "Somalia"}, "SN": {"path": "M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z", "name": "Senegal"}, "SL": {"path": "M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z", "name": "Sierra Leone"}, "SB": {"path": "M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z", "name": "Solomon Is."}, "SA": {"path": "M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z", "name": "Saudi Arabia"}, "SE": {"path": "M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z", "name": "Sweden"}, "SD": {"path": "M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z", "name": "Sudan"}, "DO": {"path": "M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z", "name": "Dominican Rep."}, "DJ": {"path": "M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z", "name": "Djibouti"}, "DK": {"path": "M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z", "name": "Denmark"}, "DE": {"path": "M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z", "name": "Germany"}, "YE": {"path": "M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z", "name": "Yemen"}, "AT": {"path": "M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z", "name": "Austria"}, "DZ": {"path": "M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z", "name": "Algeria"}, "US": {"path": "M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z", "name": "United States"}, "LV": {"path": "M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z", "name": "Latvia"}, "UY": {"path": "M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z", "name": "Uruguay"}, "LB": {"path": "M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z", "name": "Lebanon"}, "LA": {"path": "M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z", "name": "Lao PDR"}, "TW": {"path": "M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z", "name": "Taiwan"}, "TT": {"path": "M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z", "name": "Trinidad and Tobago"}, "TR": {"path": "M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z", "name": "Turkey"}, "LK": {"path": "M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z", "name": "Sri Lanka"}, "TN": {"path": "M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z", "name": "Tunisia"}, "TL": {"path": "M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z", "name": "Timor-Leste"}, "TM": {"path": "M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z", "name": "Turkmenistan"}, "TJ": {"path": "M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z", "name": "Tajikistan"}, "LS": {"path": "M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z", "name": "Lesotho"}, "TH": {"path": "M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z", "name": "Thailand"}, "TF": {"path": "M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z", "name": "Fr. S. Antarctic Lands"}, "TG": {"path": "M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z", "name": "Togo"}, "TD": {"path": "M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z", "name": "Chad"}, "LY": {"path": "M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z", "name": "Libya"}, "AE": {"path": "M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z", "name": "United Arab Emirates"}, "VE": {"path": "M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z", "name": "Venezuela"}, "AF": {"path": "M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z", "name": "Afghanistan"}, "IQ": {"path": "M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z", "name": "Iraq"}, "IS": {"path": "M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z", "name": "Iceland"}, "IR": {"path": "M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z", "name": "Iran"}, "AM": {"path": "M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z", "name": "Armenia"}, "IT": {"path": "M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z", "name": "Italy"}, "VN": {"path": "M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z", "name": "Vietnam"}, "AR": {"path": "M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z", "name": "Argentina"}, "AU": {"path": "M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z", "name": "Australia"}, "IL": {"path": "M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z", "name": "Israel"}, "IN": {"path": "M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z", "name": "India"}, "TZ": {"path": "M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z", "name": "Tanzania"}, "AZ": {"path": "M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z", "name": "Azerbaijan"}, "IE": {"path": "M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z", "name": "Ireland"}, "ID": {"path": "M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z", "name": "Indonesia"}, "UA": {"path": "M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z", "name": "Ukraine"}, "QA": {"path": "M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z", "name": "Qatar"}, "MZ": {"path": "M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z", "name": "Mozambique"}}, "height": 440.70631074413296, "projection": {"type": "mill", "centralMeridian": 11.5}, "width": 900.0});;
jQuery.fn.vectorMap('addMap', 'in_mill',{"insets": [{"width": 900, "top": 0, "height": 932.9661457393942, "bbox": [{"y": -4125883.782575976, "x": 7589536.343670783}, {"y": -752405.3962423205, "x": 10843813.641475728}], "left": 0}], "paths": {"IN-BR": {"path": "M484.32,277.67l0.73,-0.96l-0.3,-0.93l-0.88,-0.99l2.18,-0.33l2.83,0.22l2.64,-2.44l0.65,0.88l1.12,0.53l0.73,1.16l1.44,0.13l0.88,1.39l0.78,0.52l8.92,1.6l1.49,1.54l0.75,2.31l-0.09,2.43l-1.0,2.2l0.17,0.95l0.56,0.5l3.94,1.04l1.49,-0.43l1.1,0.93l2.15,0.84l0.79,1.78l1.96,0.85l0.04,0.75l0.36,0.35l0.96,0.04l2.23,-0.69l0.89,0.36l0.08,1.86l1.02,1.19l3.03,0.83l1.86,-0.39l1.41,-1.3l1.63,-0.0l2.51,-1.3l2.45,-0.81l2.64,1.62l0.21,0.97l-0.22,2.39l0.42,1.46l2.16,1.84l1.01,-0.0l0.22,0.89l0.54,0.28l1.3,-0.5l2.57,-2.01l1.7,-0.38l3.07,1.67l1.2,0.08l1.34,0.59l2.79,-0.96l0.36,0.09l0.11,0.57l0.46,0.36l1.14,-0.05l4.28,1.79l1.88,1.41l4.91,2.34l0.65,-0.32l0.42,-0.67l1.5,0.42l1.07,-0.27l0.84,-0.55l0.93,-1.39l2.89,-1.18l1.56,-1.41l0.73,3.4l1.29,2.14l1.24,0.5l2.44,-0.41l0.71,1.14l2.25,0.92l0.7,-0.4l0.94,-1.66l1.64,-0.68l1.77,0.1l2.15,1.18l1.43,0.3l2.71,-1.46l0.9,0.58l0.74,0.03l0.64,-0.42l0.39,-1.06l1.69,0.41l1.28,-0.84l0.78,0.58l1.04,1.56l1.36,0.93l1.28,-0.0l1.4,-1.3l0.98,-1.67l0.32,-2.54l1.11,0.19l1.81,-0.54l-0.25,1.26l2.57,2.21l-0.61,0.46l-0.14,0.71l1.31,0.93l0.18,0.65l-0.99,0.12l-1.4,1.13l-1.21,0.45l-3.14,3.08l-1.92,1.35l-1.46,0.45l-1.05,1.31l-3.05,2.6l-0.73,2.89l-0.66,0.33l-0.26,0.54l0.49,1.44l1.99,1.18l1.38,2.54l1.16,1.11l1.88,0.79l1.0,0.91l0.39,1.89l-0.42,2.19l0.68,1.39l-1.31,-0.23l-0.83,-0.82l-1.07,-0.2l-2.31,1.07l-0.91,0.98l-2.54,1.15l-0.86,1.17l-0.03,0.52l1.06,1.26l0.71,0.03l1.1,2.34l-1.16,1.61l-1.13,-0.8l-2.11,0.07l-2.4,-0.65l-0.85,-1.16l-1.55,-0.73l-2.09,1.48l-1.42,3.04l-1.75,-0.38l-1.94,0.54l-0.7,1.28l-0.53,2.54l-1.11,-0.28l-1.23,0.43l-1.15,1.08l-0.95,1.56l-0.02,4.14l-1.58,2.6l0.22,1.29l-0.25,2.5l-0.67,2.32l-3.65,-0.85l-1.11,1.73l-0.08,0.78l-1.8,-0.56l-1.86,-1.14l-0.7,0.13l-0.57,0.88l-0.58,0.3l-1.44,0.17l-1.24,-0.58l-1.1,0.08l-2.84,2.71l-0.35,2.31l-0.66,0.61l-0.34,1.45l-4.74,-2.95l0.93,-1.5l-0.46,-2.24l-2.49,-0.71l-1.39,0.5l-1.2,-0.75l-0.53,-2.93l-0.94,-1.11l-1.16,-0.27l0.25,-0.54l-0.25,-0.67l-1.15,0.06l-1.82,1.29l-1.16,0.12l-1.33,-1.63l-1.34,-0.72l-2.71,0.04l-1.03,0.64l-0.64,1.13l-0.35,1.75l-1.32,0.86l0.46,1.43l-0.08,1.26l-2.09,-0.13l-1.88,1.89l-1.05,-0.3l-2.8,-0.01l-3.56,0.74l-0.45,0.74l-3.09,1.2l-0.45,0.51l-0.04,0.72l-1.53,1.38l0.11,-1.07l-0.45,-0.39l-3.33,1.32l-1.97,-0.04l-0.37,-0.38l-0.39,-2.05l-0.44,-0.37l-0.85,0.15l-0.38,-1.56l-1.06,-0.48l-3.69,2.24l-0.86,1.72l-2.29,-0.51l-1.24,1.5l-0.27,0.79l-0.51,0.49l-0.76,0.1l-1.39,-1.35l-2.08,-1.34l-1.51,-1.71l0.38,-0.69l-0.02,-1.06l-0.71,-1.19l-0.78,-0.19l-0.66,0.49l-0.73,-0.27l-1.47,0.23l-0.36,0.39l-0.0,1.03l-0.3,-0.98l-0.78,-0.09l-0.53,1.26l-0.76,-0.87l-1.6,-3.93l-0.85,-0.67l-0.69,0.16l-0.72,1.49l-2.03,1.42l-2.05,0.28l-1.37,-0.23l-0.86,0.31l-0.55,0.68l-1.94,0.19l-4.92,-0.81l0.03,-2.88l-0.43,-1.19l0.61,-1.14l-0.28,-1.64l-0.55,-0.62l-2.0,-0.71l-2.6,-2.78l0.35,-1.72l-0.05,-2.24l-1.27,-2.58l0.34,-3.02l0.62,-1.14l1.7,-1.27l11.06,-6.27l0.86,-0.66l0.44,-0.81l2.19,-0.92l3.62,-3.02l1.7,-2.16l2.53,-1.98l0.88,-0.25l0.74,0.43l-0.04,1.29l0.37,0.92l0.82,0.61l1.2,0.16l1.16,-0.32l0.69,-0.62l0.03,-1.0l-0.41,-1.1l0.17,-0.52l1.25,-0.49l1.93,1.49l1.54,0.6l1.32,0.01l2.29,-1.37l0.73,-1.81l-0.34,-0.78l-2.28,-2.05l-2.42,-0.33l-1.18,-0.71l-0.5,-0.92l-0.82,-0.67l-3.49,0.28l-0.93,-0.9l-0.59,-1.69l-0.97,-0.39l-0.91,-1.45l-2.52,-1.19l-1.28,-2.57l-1.04,-0.81l0.41,-0.8l2.49,-0.34l0.91,-0.6l1.31,0.19l0.82,-0.39l0.25,-0.57l-0.78,-1.52l0.71,-1.33l0.02,-0.66l-0.45,-0.55l-2.83,-0.73l-2.18,-1.58l-1.33,0.6l-1.31,-0.25l0.0,-2.11l0.43,0.93l0.6,0.15l0.88,-1.02l1.95,-0.62l1.34,-2.77l8.58,0.29l0.57,-0.33l0.16,-0.55l-0.47,-0.95l-2.41,-2.3l-0.79,-0.41l-1.03,-0.04l0.16,-2.85l-0.51,-1.31l-1.39,-0.46l-1.37,0.64l-2.26,-1.46l-1.22,-2.32l-0.19,-2.14l-0.79,-0.77l-0.57,-1.24l-1.11,-1.03l0.06,-2.11l-0.66,-1.12l-1.11,-0.96l0.19,-1.5l-0.52,-0.38l-0.62,0.03Z", "name": "Bihar"}, "IN-PY": {"path": "M432.94,621.28l0.12,-0.11l0.06,0.17l-0.03,-0.0l-0.16,-0.05ZM434.43,621.71l0.34,-0.0l0.03,0.12l-0.21,-0.03l-0.16,-0.08ZM355.48,770.41l0.24,-0.33l0.83,0.78l1.19,-0.08l-0.49,1.07l1.07,0.9l0.61,-0.12l1.09,-0.94l-0.97,2.81l-1.98,-0.18l-0.66,-0.53l0.23,-1.51l-1.16,-1.87ZM356.86,803.07l0.79,-0.26l-0.03,-0.93l0.92,0.32l0.8,-0.45l0.68,0.07l0.07,4.51l-0.78,-0.6l0.25,-0.69l-0.28,-0.5l-2.69,-0.99l0.29,-0.48ZM218.44,768.85l0.02,-2.05l1.16,0.12l1.63,-1.29l0.73,0.2l-0.37,0.3l-0.72,-0.09l-0.44,0.41l-0.27,1.66l-1.25,1.09l-0.5,-0.37Z", "name": "Puducherry"}, "IN-DD": {"path": "M144.48,504.35l0.06,-0.81l0.49,-1.24l0.48,0.6l0.06,1.15l-1.09,0.3Z", "name": "Daman and Diu"}, "IN-DN": {"path": "M146.62,508.98l1.49,0.02l0.64,-1.32l0.96,0.1l1.81,-1.3l0.0,1.2l1.42,0.47l-2.51,1.64l-0.2,0.71l0.26,1.36l0.63,0.79l1.15,0.12l0.71,-0.32l0.3,-1.06l1.1,0.26l-0.01,2.67l-0.38,1.21l-1.24,-0.9l-1.12,0.47l-0.96,-0.54l-0.98,0.61l-1.35,-2.56l-0.26,-1.86l-1.39,-1.3l-0.07,-0.48Z", "name": "Dadra and Nagar Haveli"}, "IN-DL": {"path": "M269.18,237.92l-1.09,-1.45l1.02,-1.35l1.39,-0.53l0.24,-1.0l0.78,-0.87l-0.35,-3.41l0.21,-0.9l1.59,-0.79l1.2,-0.05l0.91,-0.88l2.3,0.67l1.4,-0.39l0.27,0.61l-0.2,0.97l0.58,1.16l2.51,2.23l0.25,0.66l0.62,2.22l-0.95,1.04l-0.26,0.81l0.7,1.44l-2.32,0.75l-0.66,0.79l0.48,1.01l-0.98,0.25l-2.63,-1.33l-0.89,-1.75l-2.19,-1.1l-0.66,0.01l-0.48,0.79l-2.76,0.39Z", "name": "Delhi"}, "IN-NL": {"path": "M779.92,344.86l0.24,-2.48l-0.5,-1.53l-1.51,-1.38l-1.72,-2.41l5.61,-4.5l1.79,-2.48l3.84,-3.32l0.18,-0.6l-0.86,-1.43l1.99,-1.01l0.92,0.2l0.22,1.55l-1.05,1.7l0.18,0.61l0.39,0.2l3.95,-0.86l1.52,-1.07l1.37,-2.13l-0.58,-1.75l0.0,-0.99l1.01,-1.64l0.11,-3.4l2.88,-3.87l2.12,-1.95l0.79,-3.49l2.04,-2.58l0.89,2.11l0.8,0.16l0.76,-0.33l1.67,-1.57l0.74,-1.09l0.25,-1.63l1.49,-1.74l1.12,-0.19l0.86,-0.7l1.24,0.02l2.52,-1.07l3.03,-1.88l1.13,-0.97l1.92,-2.9l1.52,-1.46l1.31,0.78l1.78,-0.04l4.5,-2.81l1.45,1.13l0.13,1.9l-0.88,1.28l-0.18,0.95l0.32,0.93l0.81,0.73l-0.26,2.06l0.63,1.74l-1.12,0.02l-0.96,1.1l-1.61,0.79l-0.48,2.09l-2.17,2.74l0.78,2.22l-0.69,2.6l0.11,2.79l0.48,1.15l0.9,0.47l-0.42,0.83l0.3,2.22l0.56,0.6l1.14,0.39l0.23,0.64l-2.48,2.95l-2.14,1.25l-0.24,1.45l0.63,3.47l-0.08,1.03l-1.42,0.62l-3.3,4.31l-0.08,0.67l-0.92,0.26l-1.66,2.11l-2.18,0.49l-1.29,0.92l-0.79,-0.14l-2.19,-1.69l1.06,-3.49l0.1,-2.14l-0.72,-0.37l-2.49,2.12l-1.72,0.98l-1.48,1.73l-1.75,0.89l-3.83,0.5l-1.34,-0.81l-1.99,0.08l-1.96,-1.16l-6.95,0.35l-1.1,0.4l-0.54,1.41l0.25,0.38l1.19,0.4l0.13,0.77l-3.93,3.81l-0.97,2.24l-1.16,1.64l-1.08,-1.27l-1.34,-0.42l-1.8,-1.16Z", "name": "Nagaland"}, "IN-WB": {"path": "M545.45,405.85l-0.5,-0.98l0.56,-0.42l5.08,-0.89l0.31,-0.72l-0.47,-1.55l0.74,-0.53l1.67,0.87l0.84,0.07l-0.32,2.17l0.35,0.57l1.81,0.66l1.35,0.95l1.69,-0.33l1.95,-1.65l0.58,-2.23l1.76,-1.44l7.16,-2.58l3.6,-0.58l1.37,-0.52l0.56,-0.8l0.21,-1.04l-0.38,-1.28l0.13,-0.59l1.64,-2.23l2.89,1.56l1.05,0.13l2.02,1.46l1.68,0.42l1.24,-0.23l0.42,-0.94l-0.98,-1.3l1.48,0.29l0.47,0.6l0.77,0.13l0.6,-0.83l0.08,-1.2l0.67,-0.26l0.38,-0.66l-0.04,-1.15l-1.61,-2.24l1.91,-0.48l0.42,1.44l0.56,0.34l1.97,-0.7l1.91,0.1l1.22,-1.17l-0.03,-2.65l0.4,-0.06l1.12,0.83l0.64,-0.01l0.71,-0.96l0.29,-1.21l1.52,0.03l0.69,-0.57l0.01,-0.7l-0.45,-0.74l-0.74,-0.19l-0.01,-0.67l2.93,-1.81l1.74,-3.39l0.04,-1.52l0.75,-1.33l-0.41,-1.07l0.04,-1.25l-0.42,-0.42l1.37,0.59l1.07,-0.12l0.94,-0.6l0.46,-0.93l-0.2,-0.47l-0.58,-0.24l0.58,-0.51l0.08,-0.51l-0.69,-2.04l-0.63,-1.08l-1.12,-0.31l-0.14,-0.29l0.68,0.28l0.62,-0.34l0.26,-2.07l0.61,-1.34l-0.14,-1.71l-1.05,-3.44l-2.07,-1.79l-0.21,-1.92l0.46,-1.62l0.97,-1.02l0.74,-1.55l-0.87,-2.23l-0.57,-0.72l-0.74,-0.08l-0.57,-0.84l0.56,-0.79l2.33,-1.03l0.96,-1.0l2.16,-0.97l1.4,1.03l1.9,0.33l0.47,-0.45l-0.11,-1.05l-0.63,-0.84l0.41,-2.35l-0.5,-2.1l-1.25,-1.16l-1.89,-0.81l-1.11,-1.14l-1.2,-2.32l-1.92,-1.09l-0.39,-1.0l0.85,-0.61l0.64,-2.73l2.92,-2.46l1.08,-1.34l1.42,-0.41l1.96,-1.39l2.66,-2.74l1.56,-0.7l1.28,-1.06l1.18,-0.21l0.32,-0.73l-0.46,-1.15l-1.07,-0.55l0.79,-0.66l-0.12,-0.71l-1.34,-1.38l-1.14,-0.68l0.23,-1.51l-0.57,-0.35l-2.11,0.6l-0.78,-0.16l2.21,-5.06l0.16,-2.07l-0.51,-3.36l-1.72,-3.31l-1.28,-1.98l-1.44,-0.95l-1.12,-1.75l0.87,-4.21l1.51,1.11l0.39,1.54l0.74,0.73l4.09,0.21l3.92,1.74l2.29,-0.56l2.85,-2.48l2.71,0.28l1.59,-0.16l0.79,0.57l1.28,0.26l2.69,1.54l0.46,1.37l0.19,3.46l0.29,0.34l1.63,-1.15l0.76,1.97l0.84,0.27l1.26,-0.33l0.64,0.28l1.07,0.92l0.7,1.54l0.63,0.6l3.73,0.29l1.04,-0.28l0.94,-0.75l1.87,-0.3l3.01,1.82l2.09,-0.18l2.3,0.6l0.6,0.46l-0.29,1.59l0.63,0.37l2.22,-0.41l1.68,0.7l2.49,0.24l0.75,-0.98l0.75,2.6l0.28,3.28l-0.9,2.05l-0.46,2.89l-0.88,0.81l0.31,0.9l-1.25,0.59l-0.72,1.5l-0.86,0.56l0.04,1.22l-1.55,0.49l-0.18,-0.8l-0.86,-0.37l-1.27,0.64l-0.02,1.22l-0.94,0.39l-0.42,1.08l0.57,0.68l-0.48,0.58l0.23,0.75l1.09,0.15l-1.54,1.52l-0.38,1.81l-1.38,-1.31l-2.29,0.18l-0.73,-0.75l-1.31,0.6l-0.84,-0.27l-1.33,-1.22l-1.01,-0.45l-0.8,-1.36l-2.47,-1.14l-0.46,-0.78l-0.28,-2.06l-1.01,-1.97l-0.01,-0.39l0.84,-0.04l0.09,-1.08l-1.36,-0.64l-0.24,-0.96l-1.33,-0.55l-1.96,-1.58l-0.57,-0.06l-0.99,0.67l-0.74,1.31l-0.01,0.73l0.75,0.92l1.61,0.68l0.49,1.17l0.62,0.23l0.34,0.57l0.65,0.14l-0.29,0.34l-1.18,0.29l-0.68,-0.22l-1.29,-1.25l-1.04,-0.25l-0.91,0.46l-0.72,1.18l-0.91,-1.51l-1.33,-0.61l-1.97,0.6l0.81,-0.62l0.24,-1.27l-1.29,-0.96l-0.66,-1.82l-1.2,-0.43l-0.74,-1.07l-1.95,-0.46l-2.01,-1.77l-1.53,-0.53l-0.33,-2.09l-0.46,-0.49l-0.9,0.45l-0.68,1.2l-1.21,3.24l0.06,0.87l0.87,0.76l0.58,-0.35l0.14,-0.78l2.98,0.87l0.96,2.56l-1.84,-0.15l-3.0,2.73l-0.3,2.13l-3.15,1.09l-1.89,1.47l-0.78,1.93l0.51,1.07l-0.12,0.57l-0.79,0.64l-1.63,3.72l0.4,2.48l1.35,2.12l1.02,0.06l2.3,-0.88l0.79,0.4l1.81,2.04l2.96,2.25l0.25,2.15l1.56,0.98l1.71,2.04l2.13,0.28l2.25,1.05l0.73,-0.2l0.76,-0.76l1.66,-0.37l1.12,1.2l-0.48,1.96l1.4,2.3l1.33,0.44l0.8,0.66l2.14,0.08l-0.15,0.49l-1.45,1.22l-0.04,1.1l-0.32,0.07l-0.24,0.62l-2.61,-0.88l-0.47,0.18l-0.58,0.98l-1.64,-0.16l-2.86,-0.85l-1.23,-0.01l-1.12,0.71l-2.46,-0.78l-1.5,0.37l-0.35,0.76l-0.17,3.89l-0.99,1.68l-0.5,1.66l-1.59,2.27l-1.78,-0.3l-0.37,-1.1l-1.21,-1.04l-1.33,0.16l-1.59,0.83l-0.21,0.5l0.78,2.11l-0.83,1.08l-0.67,0.34l-0.28,1.04l-0.9,0.53l-0.14,1.33l-0.83,2.23l0.28,0.45l0.9,0.3l0.73,1.05l0.07,1.91l1.05,1.48l0.84,0.18l8.01,4.07l2.42,1.81l5.01,0.7l1.0,-1.38l1.17,0.59l0.6,0.78l0.3,2.04l-0.42,0.68l-1.42,0.76l-0.3,0.7l-0.09,2.48l0.81,1.21l0.65,0.38l-0.58,0.9l0.35,2.32l-1.67,1.6l-1.68,0.07l-0.85,0.66l-0.02,1.23l-0.76,1.49l0.25,1.1l-0.6,3.39l0.72,0.51l-0.1,0.68l0.41,0.56l1.25,0.21l1.1,1.66l1.75,1.33l0.39,0.76l0.88,0.04l0.61,-0.71l-1.51,4.2l-1.03,1.81l-0.01,0.88l0.44,0.92l2.58,1.08l1.56,-0.51l3.8,1.0l-2.85,2.89l-0.46,0.98l-0.39,3.23l1.78,3.39l1.51,0.97l-0.23,1.76l-0.92,1.57l1.48,4.98l-0.13,0.51l-0.56,0.36l0.08,0.71l1.11,0.51l0.92,3.0l-0.39,1.34l0.91,2.85l-0.27,0.58l1.66,2.45l0.42,1.62l-1.03,0.69l-0.22,1.48l0.63,1.91l0.14,2.67l-1.18,0.15l-0.44,0.52l-1.34,-0.77l-0.36,-1.32l-0.38,-0.28l-0.81,0.22l-0.3,0.82l0.64,1.51l2.25,1.42l0.54,0.87l0.86,3.85l1.27,1.9l-0.01,1.43l-0.48,0.14l-0.33,-0.52l-0.69,-0.07l-0.64,0.78l-1.89,-1.22l-1.24,-0.27l-0.7,-3.49l-0.61,-0.28l-0.4,0.34l-0.62,2.07l0.63,2.03l-0.94,0.29l0.5,-1.05l-0.26,-0.97l-0.39,-0.27l-1.42,1.86l0.48,2.23l-0.61,0.28l-1.15,-0.41l0.33,-1.07l-1.1,-2.67l0.57,-3.6l-0.26,-0.99l0.59,-1.77l0.2,-2.12l1.06,-1.02l0.23,-0.74l-0.27,-0.9l-1.35,-1.0l1.61,-2.01l-1.14,-0.17l-1.44,1.2l-0.31,1.39l1.07,0.87l-0.15,0.5l-0.98,2.08l-1.2,-0.05l0.8,-2.06l-0.43,-2.86l1.34,-2.58l-0.1,-0.63l-0.99,-0.36l-1.64,3.33l0.18,2.1l-0.71,1.31l-0.13,2.49l-0.97,2.58l-0.07,2.69l0.46,0.46l1.46,-0.37l0.16,0.55l-0.31,1.14l-0.55,-0.13l-0.4,0.44l0.23,2.14l-0.66,0.46l-0.07,1.76l-0.47,-0.41l-0.69,0.01l-0.11,1.32l-0.51,-0.09l0.07,-1.06l0.6,-0.74l0.46,-2.03l-0.73,-2.54l0.85,-1.8l-0.11,-1.1l-0.98,-1.56l0.53,-1.9l-0.75,-0.79l-0.46,-0.03l-0.08,0.85l-0.75,1.52l0.64,2.32l-0.63,0.42l-0.66,1.98l0.48,3.04l-0.28,0.49l-1.35,0.68l-0.22,-1.85l0.28,-0.81l-0.46,-0.52l-1.07,0.39l-0.38,-0.84l-0.84,0.2l-0.44,-2.18l-0.57,-0.66l-0.63,-0.16l-0.42,0.44l0.08,0.75l1.01,3.85l-0.42,1.45l0.66,1.05l-0.95,0.35l-0.35,-1.27l-0.51,-0.52l-0.6,0.03l-0.58,-1.49l0.87,-2.47l-0.23,-0.94l0.2,-0.63l-1.67,-3.15l-0.24,-2.24l0.24,-0.83l2.02,-2.79l-0.71,-3.23l-3.61,-1.75l-0.09,-0.54l-0.61,-0.27l-0.84,0.43l-0.77,-0.39l-1.03,-1.26l-0.97,-4.14l-0.49,-0.54l-0.92,-0.13l-0.41,0.6l0.54,0.86l0.74,3.83l0.6,1.16l1.56,1.46l3.72,0.8l0.73,0.61l0.32,1.05l-0.22,0.69l-1.51,1.64l-2.08,0.56l0.04,1.33l-2.0,4.07l-2.48,1.79l-1.01,1.44l-4.96,3.02l-2.47,0.14l-4.13,1.11l-1.25,-2.09l0.04,-2.21l-0.26,-0.62l-0.76,-0.57l-4.7,-1.12l-0.64,-1.11l-0.35,-2.0l-0.83,-1.17l-2.44,-0.78l-2.21,2.36l-0.3,-0.07l-0.94,-1.35l0.28,-2.14l-0.68,-1.6l-1.45,-1.03l-1.64,-0.67l-1.74,-0.15l-2.08,-1.48l-1.77,-0.61l-0.33,-0.57l0.32,-0.22l0.61,-0.36l1.19,0.03l0.28,-1.32l2.26,-0.3l0.3,-0.79l-1.52,-1.54l-0.47,-2.23l-2.14,-1.64l-0.14,-0.58l0.98,0.03l0.45,-0.53l-0.69,-1.9l-1.33,-1.0l-2.63,-0.5l-0.79,-2.5l-1.98,-1.62l-0.94,-0.49l-1.31,-0.05l-1.46,-1.14l0.13,-2.51l0.41,-1.21l-0.13,-0.83l0.77,-0.68l1.92,-0.56l0.18,-0.83l-1.95,-0.64l-4.23,-0.15l-1.7,-0.37l-1.31,-0.0l-1.19,0.45l-5.28,-5.12l-1.99,-0.54l-1.51,0.49l-0.33,-1.19l-1.25,-1.57l0.38,-1.25l1.12,-1.59l0.49,-2.12l-0.57,-0.72l-1.16,-0.03ZM621.37,462.65l0.62,0.85l-0.48,1.24l-0.1,-0.46l-0.03,-1.63ZM639.28,467.29l-1.47,0.01l-0.03,-1.73l1.33,0.75l0.17,0.97ZM630.2,458.45l-0.18,-0.62l0.39,-0.95l1.22,-1.6l0.22,0.26l-0.7,3.21l-0.96,-0.3ZM615.62,464.13l-1.95,-0.31l-0.34,-0.61l1.43,-4.38l1.08,-1.59l0.53,2.85l-0.1,1.69l-0.79,0.55l-0.14,0.48l0.28,1.31ZM614.23,456.85l0.15,-1.15l0.64,-1.08l0.26,0.49l-0.18,0.81l-0.87,0.92Z", "name": "West Bengal"}, "IN-HR": {"path": "M197.67,196.54l-1.92,0.66l-0.68,-0.19l-0.12,-0.33l0.58,-1.74l1.54,-0.71l0.56,-0.71l0.04,-0.87l-1.03,-1.19l0.03,-0.46l3.74,1.02l2.05,-1.87l3.05,-0.56l0.68,0.68l2.25,0.52l0.65,1.26l1.95,1.36l2.44,-0.58l0.57,-1.17l-0.41,1.39l0.24,1.61l1.61,1.38l0.49,-0.02l0.38,-1.05l0.49,-0.25l0.24,0.89l0.89,1.26l-0.77,0.21l-0.05,1.32l-0.89,0.47l-0.18,0.49l2.26,4.51l0.68,0.02l1.72,-0.75l-0.08,-1.9l0.4,-0.66l1.05,-0.42l0.07,-0.72l1.15,-1.12l1.84,-2.76l4.54,1.48l1.87,-0.35l1.18,0.2l0.81,-0.43l0.25,-1.03l1.84,-0.6l1.45,0.72l0.68,1.43l0.66,0.57l2.19,0.36l1.5,-0.6l1.29,-0.08l1.38,-1.54l2.31,-0.92l2.19,-1.64l-0.08,-0.61l-0.99,-0.75l-0.42,-1.25l0.77,-2.4l0.6,-0.91l-0.16,-0.9l0.93,-0.28l0.17,-0.47l-1.41,-0.86l0.04,-0.31l1.21,0.8l1.17,0.28l1.1,-0.22l0.28,-0.67l0.98,0.56l0.49,-0.29l0.43,-0.88l0.03,-1.16l0.63,1.85l0.67,0.93l1.52,0.62l1.31,-0.04l3.08,-2.2l0.45,-2.11l-1.11,-0.83l-0.74,-1.06l1.96,-0.97l2.75,-2.1l0.15,-0.69l-0.67,-0.42l0.18,-0.95l0.62,-0.28l0.94,0.26l1.29,-0.13l1.11,2.15l0.94,0.05l0.48,-0.5l0.29,-1.07l-0.34,-3.0l0.44,-1.02l-0.52,-1.05l0.23,-1.9l-0.5,-1.28l-0.77,-0.38l-0.31,-1.22l-0.78,-0.13l0.06,-1.77l-0.44,-1.16l0.68,-1.4l0.01,-0.71l-0.29,-0.49l-0.85,-0.37l-0.78,-1.44l0.75,-0.5l0.96,1.15l1.8,0.0l0.72,0.82l0.49,1.43l1.37,0.91l0.34,0.94l3.46,1.85l0.71,0.88l0.16,2.59l-0.5,1.22l0.09,0.78l2.08,1.94l0.25,0.78l0.44,0.23l0.93,-0.4l1.76,0.9l1.62,0.31l0.93,0.77l1.26,-0.33l0.59,0.71l2.07,-0.23l2.03,1.34l-0.49,3.0l-4.77,4.22l-0.4,1.32l-2.42,1.67l-0.2,0.66l-0.96,0.19l-0.26,0.72l-1.47,1.42l-0.66,1.71l-0.89,4.15l-0.47,0.9l-0.85,0.28l0.03,1.48l-0.81,0.56l-0.03,0.91l-0.63,0.62l-0.17,1.53l0.38,1.01l-0.82,0.38l-0.38,0.67l0.4,1.11l-0.1,1.06l0.71,0.51l0.71,-0.06l-1.49,1.77l0.33,0.56l2.21,0.16l-0.49,1.16l0.06,1.19l0.44,0.83l-0.56,1.13l0.32,4.99l-0.22,0.57l1.83,3.91l-0.49,0.52l-0.07,0.59l1.38,1.81l-0.48,0.8l-1.19,0.43l-2.62,-0.68l-1.12,0.96l-1.76,0.23l-1.23,0.79l-0.42,1.42l0.38,3.16l-0.71,0.77l-0.21,0.93l-1.26,0.39l-1.28,1.97l1.21,2.02l0.49,0.29l3.29,-0.53l0.51,-0.79l1.96,0.95l0.92,1.77l2.96,1.49l1.17,-0.15l0.67,-0.44l0.11,-0.6l-0.47,-0.68l0.36,-0.34l2.21,-0.63l1.36,1.03l-0.01,0.77l0.51,0.3l0.72,-0.35l0.65,1.19l0.96,-0.1l-0.04,0.82l0.65,0.59l-0.7,2.07l0.67,0.83l0.27,1.32l1.0,0.34l-0.17,0.55l-0.64,0.25l-0.17,0.47l0.74,0.72l-0.77,0.85l0.01,1.32l-0.24,-0.15l-0.61,0.36l0.19,1.33l-0.23,0.73l0.1,0.41l1.03,0.81l0.7,1.8l-0.54,0.3l-1.08,1.73l-1.24,-0.14l-1.14,1.02l-2.4,0.84l-0.96,0.82l-1.05,0.03l-0.37,0.47l-0.86,-0.73l-0.59,0.56l-0.3,-0.44l-0.52,-0.11l-0.85,0.76l-1.92,-0.54l-0.95,0.12l-0.53,1.25l0.42,0.62l0.78,0.36l-1.77,0.36l-1.03,1.64l-1.71,0.27l-0.23,-0.17l0.72,-0.3l0.15,-0.38l-0.57,-0.95l0.43,-2.47l0.88,-1.72l-0.19,-3.96l-0.52,-2.28l0.64,-2.88l-0.31,-0.93l-2.2,-2.22l-0.95,-0.48l-1.46,0.62l-1.38,1.94l-3.45,2.5l-0.25,0.95l0.49,1.35l-1.85,0.43l-0.89,0.93l-0.83,-2.12l-1.96,-0.59l0.71,-0.57l-0.55,-0.72l0.54,-0.08l0.22,-0.4l-0.98,-1.7l-0.96,-0.35l-1.98,0.38l-0.71,-1.02l-1.24,-0.44l-0.56,0.44l-0.0,0.81l1.23,1.18l-0.83,0.3l-0.23,0.52l0.19,0.51l1.05,0.65l-0.19,0.59l-0.5,0.06l-1.74,-1.05l-0.94,0.38l-1.54,-0.12l-0.66,0.79l-0.18,1.38l0.66,2.16l0.02,1.52l0.69,0.96l0.29,1.5l-0.62,0.44l-1.77,-1.38l-3.88,0.2l-0.48,-1.45l-1.14,-0.82l-0.09,-0.38l1.1,-0.25l0.59,-0.56l0.14,-0.71l-0.49,-0.68l0.63,-1.33l1.08,-1.16l0.14,-0.82l-0.76,-0.63l-0.7,0.22l-0.51,0.59l-0.74,-0.62l1.69,-0.98l0.71,-0.94l0.81,0.77l0.71,0.05l0.34,-1.01l-1.72,-2.96l-2.17,-2.79l-2.33,-2.11l-2.17,-0.91l-1.14,0.06l-0.05,-1.25l-2.28,-1.69l-3.18,-4.01l-3.25,-9.33l1.03,-1.13l-0.06,-1.08l-0.44,-0.58l-1.68,-0.7l-1.73,-2.58l0.02,-0.98l-0.52,-1.06l0.81,-0.33l0.22,-0.76l-0.73,-2.06l-0.71,-0.18l-1.11,0.73l0.1,-1.56l-0.26,-0.42l-0.65,-0.14l-1.3,0.6l-0.77,0.84l-0.86,0.08l-1.19,-0.66l-1.07,0.71l-1.9,0.54l-1.12,-1.64l-0.56,-0.19l-1.59,0.27l-1.1,-2.41l-0.82,-0.74l-2.52,-0.92l-0.97,0.26l-1.36,1.06l-1.48,-0.23l-1.78,0.2l-0.51,0.37l-0.23,0.76l-0.28,-0.03l-2.1,-3.33l0.28,-0.41l1.47,-0.13l0.47,-0.84l0.07,-1.62l-1.13,-1.94l0.92,-5.58l-0.73,-0.83l-1.02,0.44ZM259.41,180.33l-0.42,0.53l-0.13,0.09l0.07,-0.25l0.48,-0.37Z", "name": "Haryana"}, "IN-HP": {"path": "M229.45,117.96l1.78,-1.92l0.71,-1.52l-0.42,-0.79l-1.07,0.13l-0.02,-1.36l3.39,-1.15l1.65,-1.71l4.23,-3.05l-0.07,-0.68l-1.73,-2.9l0.38,-1.22l1.73,-1.98l0.07,-1.31l-0.71,-1.74l0.32,-2.08l-1.4,-2.4l-1.75,-1.91l-0.13,-0.95l1.18,-0.43l1.48,0.51l0.94,0.92l0.79,-0.09l4.49,-3.83l4.22,-1.75l0.9,-0.95l0.55,-1.64l2.1,-1.4l1.27,-0.58l3.51,-0.66l0.95,-0.52l2.35,1.47l3.95,-0.18l5.58,5.42l4.66,2.96l1.53,0.84l6.68,2.06l0.97,-0.1l0.54,-0.69l2.55,-0.39l2.39,-0.78l1.97,-1.57l2.83,-1.51l4.08,4.65l1.07,2.36l1.06,1.32l0.31,2.34l2.3,3.1l1.48,0.01l1.99,-1.8l2.17,-0.84l2.03,-0.16l0.85,-0.83l1.36,-0.66l0.22,-1.01l0.92,0.01l0.38,1.9l-0.26,1.58l-2.3,2.04l-0.82,2.5l0.0,1.13l0.76,0.84l0.89,0.12l1.87,-1.75l1.92,3.19l-0.51,1.13l0.86,3.58l-0.14,1.8l1.83,1.02l4.14,5.78l2.59,1.76l0.19,0.99l-0.67,1.45l-0.59,2.7l-0.94,1.85l0.75,1.03l-0.01,1.01l0.96,1.57l1.22,0.41l1.58,1.69l-3.62,3.17l0.06,1.16l1.86,1.29l-0.72,3.51l0.1,0.8l0.49,0.69l1.22,0.56l2.79,-0.26l1.58,1.74l1.69,2.52l0.03,0.64l-1.52,0.33l-1.82,-0.11l-0.93,-0.71l-1.48,-2.18l-4.35,-0.29l-1.49,-0.5l-3.2,0.35l-2.0,-1.63l-0.97,-0.01l-1.04,-0.74l-1.82,-0.16l-1.0,0.16l-1.58,1.0l-1.51,0.46l-4.45,2.55l-3.03,-0.02l-4.59,4.61l0.1,1.68l-1.55,0.35l-0.07,0.87l1.2,1.32l0.08,0.92l-0.09,0.37l-0.57,-0.32l-0.55,0.2l-1.49,3.28l0.05,1.22l0.89,0.92l0.27,1.62l0.79,1.6l-0.76,0.85l-0.03,0.51l0.97,1.5l1.17,0.3l-0.02,0.5l-4.31,2.33l-2.78,0.6l-0.54,1.0l-1.24,-0.9l-1.78,0.25l0.35,-0.76l-0.47,-0.5l-2.06,0.86l-0.62,-0.66l-1.76,-0.37l-1.86,-0.95l-0.96,0.35l-0.19,-0.67l-1.61,-1.27l-0.4,-0.67l0.53,-1.47l0.06,-1.86l-0.36,-1.18l-0.9,-1.08l-3.39,-1.8l-0.27,-0.87l-1.32,-0.83l-0.45,-1.35l-0.95,-1.09l-1.97,-0.09l-1.17,-1.21l-1.44,0.74l-4.03,-3.4l-0.52,-1.32l0.49,-1.87l-0.67,-0.63l0.08,-1.55l0.76,-1.11l-0.03,-0.41l-0.37,-0.37l-0.92,-0.05l-0.01,-0.8l-0.54,-0.83l-0.54,-0.15l-0.51,0.57l-0.55,-0.83l-1.05,0.02l-0.81,-0.71l-0.55,0.31l-2.49,-4.37l-1.8,0.74l-0.04,1.86l-0.67,0.19l-0.54,1.21l-0.85,-0.29l-1.23,0.33l-0.44,-0.26l-0.89,-1.09l-2.37,-7.15l-4.5,-8.19l0.07,-0.38l1.15,-0.14l0.15,-0.7l-2.74,-4.52l-5.6,-2.94l-3.59,-0.7Z", "name": "Himachal Pradesh"}, "IN-AS": {"path": "M663.07,316.48l0.01,-0.33l2.23,-0.81l0.27,-0.58l-0.2,-0.73l0.78,-0.56l0.58,-1.33l1.61,-0.9l-0.43,-0.98l0.82,-0.66l0.51,-3.03l0.94,-2.19l-0.3,-3.5l-0.71,-2.22l1.37,0.07l6.69,-1.16l1.04,-0.91l0.73,-1.87l0.84,-0.52l2.26,-0.19l1.89,-1.28l0.86,0.13l2.83,1.94l3.6,1.77l4.05,0.43l8.94,-0.5l1.75,-0.74l0.81,-0.01l3.25,0.08l2.45,0.93l1.24,-0.17l1.11,-0.58l1.4,-2.16l0.7,-0.32l1.42,0.14l0.88,1.73l0.8,0.57l2.17,-0.43l1.87,0.42l1.57,-0.18l3.68,-1.8l0.91,1.59l0.76,0.22l0.63,-0.55l-0.09,-1.07l0.42,-0.45l-0.02,-0.62l1.9,1.21l2.1,-0.24l1.36,-1.2l0.28,-0.99l3.65,0.29l3.76,-0.78l8.62,-2.47l2.73,-1.83l3.43,0.48l3.48,1.5l0.3,0.71l0.71,0.55l1.88,0.49l10.99,-1.18l1.14,0.32l1.27,0.98l0.87,0.01l1.48,-0.64l3.25,-0.5l1.99,-0.77l4.25,-3.13l0.32,-0.77l-0.24,-1.72l0.51,-0.89l4.15,-4.24l8.09,-6.65l0.47,-1.11l-1.32,-1.97l0.7,-0.82l1.01,1.03l2.02,0.77l3.03,-0.68l1.08,0.66l1.54,-0.32l4.22,-2.16l4.21,-1.1l4.59,-2.26l9.18,-3.21l1.71,-0.97l1.72,0.75l1.48,0.08l4.22,-1.06l4.0,-2.54l1.27,-0.38l7.37,-0.1l-2.08,3.62l-3.49,4.12l-0.39,1.22l0.72,3.03l2.67,2.25l0.25,1.82l-0.48,1.35l0.33,0.7l-0.05,1.3l0.79,0.26l1.3,-1.47l0.92,-0.12l0.74,0.97l-0.03,1.23l-1.02,0.66l-0.4,0.89l-1.02,0.43l-0.42,0.76l-0.96,-0.32l-2.26,0.04l-4.83,1.83l-2.47,-1.34l-1.74,0.34l-0.89,0.84l-0.76,2.13l-1.08,1.05l-2.06,0.87l-2.93,2.18l-2.33,0.23l-1.17,1.42l-3.92,2.33l-1.33,0.03l-1.25,-0.77l-0.62,0.03l-1.42,1.26l-2.28,3.32l-0.98,0.83l-2.89,1.8l-2.43,1.03l-1.31,-0.0l-0.86,0.71l-1.1,0.15l-1.9,2.12l-0.28,1.68l-0.66,0.97l-1.47,1.38l-0.68,0.17l-0.59,-1.92l-0.66,-0.39l-0.54,0.12l-2.29,2.96l-0.75,3.42l-2.08,1.89l-2.98,4.02l-0.17,3.6l-1.03,1.73l0.01,1.2l0.57,1.47l-1.16,1.72l-1.19,0.85l-3.43,0.81l1.09,-1.91l-0.08,-1.11l-0.43,-0.8l-1.57,-0.43l-2.36,1.15l-0.41,1.0l0.9,1.2l-3.78,3.26l-1.75,2.44l-5.74,4.65l0.02,1.06l1.74,2.27l1.43,1.25l0.42,1.24l-0.09,1.81l-1.83,2.72l-2.5,5.47l-0.88,0.27l-0.67,0.79l-0.14,1.08l0.51,1.11l-1.1,0.82l0.37,1.06l-1.35,2.11l-0.19,0.93l-1.4,-0.34l-0.76,0.41l-0.42,0.68l-0.98,3.15l0.15,0.92l0.37,0.32l-0.7,1.62l0.54,1.23l-1.03,0.63l-0.78,4.46l-0.49,0.04l-0.71,1.05l-1.92,-0.33l-2.5,0.78l-1.72,-3.21l-0.61,-0.53l-0.52,-0.02l-0.53,0.59l-1.18,3.26l-2.61,2.91l0.05,1.31l-0.98,0.5l-3.21,2.95l-0.74,-0.22l-0.53,-0.84l-0.23,-0.86l0.42,-1.1l-0.34,-0.48l-4.04,-0.06l-1.99,-0.48l0.99,-2.26l0.18,-1.77l-0.74,-1.72l-0.3,-1.98l-2.13,-1.46l0.78,-3.19l1.58,-4.31l0.04,-1.65l-0.52,-1.57l0.67,-0.52l0.99,0.32l2.9,1.82l3.14,-0.9l0.81,-1.3l-0.35,-1.35l-0.87,-0.64l-0.1,-0.43l-1.9,-1.24l3.56,-3.27l1.3,-0.42l0.35,-0.75l2.67,-0.27l0.89,-0.99l3.76,-1.27l0.46,-0.64l-0.78,-1.58l0.37,-1.38l-0.38,-1.05l-2.72,-2.53l-2.06,-0.78l-0.47,-0.7l-0.81,-0.43l1.34,-1.1l1.33,-1.73l0.23,-0.63l-0.27,-0.67l-1.06,-0.16l-1.61,0.87l-3.56,-3.68l-2.01,-1.75l-1.09,-0.46l-2.26,1.22l-2.7,0.45l-1.34,0.75l0.18,-1.73l-0.23,-1.9l1.48,-3.54l-0.29,-0.86l-0.88,-0.3l-0.05,-0.67l2.62,-2.44l0.29,-0.89l-0.27,-0.45l-3.49,-0.3l-3.33,1.02l-1.08,-0.05l-2.93,0.66l-0.79,-0.14l-2.03,-1.5l-0.88,0.03l-1.87,1.45l-1.06,2.67l-1.17,1.02l-0.79,-0.11l0.48,-1.79l-0.31,-1.05l-0.62,-0.43l-1.23,-0.02l-3.89,4.8l0.26,0.86l-1.79,0.13l-1.8,0.55l-1.04,0.78l-1.85,2.29l-1.11,0.57l-0.36,-0.65l-0.11,-3.58l-0.9,-0.34l-2.65,0.99l-0.98,-0.4l-0.72,0.37l0.17,-1.18l-0.25,-0.83l-1.14,-0.53l-0.7,-0.86l-3.36,-0.26l-1.72,0.28l-0.87,0.55l-0.12,-0.83l-0.79,-0.34l-3.3,0.94l-0.24,-0.8l-0.65,-0.4l-0.61,0.19l-1.3,1.31l0.29,-0.71l-0.11,-0.76l-1.17,-0.96l-1.09,-0.45l-2.78,-0.18l-0.9,0.14l-1.44,0.94l-5.77,0.82l-3.11,2.52l-1.92,2.43l-0.44,1.79l-0.72,1.25l0.16,2.24l1.61,1.92l-0.05,0.49l-0.77,0.48l-2.0,0.28l-0.42,0.72l-0.22,2.1l-1.52,0.65l0.59,-5.87l-1.02,-2.98l-0.55,-2.85l0.1,-0.67l1.34,-2.33l0.13,-0.78l-0.68,-0.66l0.5,-0.89l-0.56,-0.92l-0.84,0.15l-0.91,-1.29l-0.12,-1.51l-1.12,-2.31l-0.58,-0.37l-1.15,-0.04Z", "name": "Assam"}, "IN-UT": {"path": "M290.95,175.24l-0.31,-0.45l0.16,-0.23l3.37,-0.85l3.64,-1.92l0.42,-0.6l-0.06,-1.2l-1.32,-0.46l-0.68,-1.08l0.48,-0.37l0.27,-0.91l-0.22,-0.97l-0.63,-0.85l-0.26,-1.61l-0.89,-0.91l-0.01,-0.76l1.22,-2.78l0.89,0.28l0.59,-1.05l-0.14,-1.41l-1.18,-1.28l0.81,0.08l0.67,-0.49l0.3,-0.73l-0.32,-1.05l3.9,-4.07l0.54,-0.28l2.79,0.1l4.5,-2.57l3.73,-1.55l1.69,0.15l0.85,0.68l1.03,0.03l1.2,1.2l0.94,0.46l2.61,-0.37l2.11,0.53l4.18,0.25l1.13,1.91l1.22,0.95l3.16,0.05l1.25,-0.6l0.0,-1.27l-1.82,-2.75l-1.58,-1.74l0.87,-1.39l0.96,0.85l1.0,-0.03l1.1,-3.41l1.16,-0.22l2.08,1.39l0.62,1.44l1.05,0.36l-0.03,1.25l0.74,0.86l0.04,1.22l1.46,0.85l0.54,2.52l0.53,0.57l2.26,0.97l1.08,2.47l2.17,0.27l1.63,2.04l1.6,0.58l1.91,-0.81l3.23,-0.54l3.15,0.76l1.58,2.12l3.25,1.54l1.81,2.14l1.15,0.36l1.78,-0.62l0.99,1.35l0.94,0.56l-0.58,1.06l-0.99,0.19l-0.34,0.48l0.09,0.66l0.95,1.13l0.08,0.47l-0.68,1.46l0.45,0.55l2.1,-0.18l2.17,0.6l5.67,2.86l2.65,0.07l3.78,2.21l1.84,2.43l5.1,1.78l0.86,0.44l0.68,1.13l-2.12,0.8l-0.8,-0.96l-0.55,-0.09l-0.49,0.35l-1.01,1.05l0.22,1.15l-0.44,0.64l-2.27,1.77l-1.2,1.7l-2.2,1.62l-2.18,0.57l-0.85,1.97l-2.18,2.84l-0.56,0.44l-1.9,0.52l-0.92,0.77l-0.45,0.93l-0.04,1.03l0.96,3.25l-1.75,1.83l-0.16,1.01l-1.64,1.45l-0.25,0.68l-1.2,0.53l-0.28,0.84l1.3,3.62l0.76,0.26l-0.56,2.85l-0.47,-0.21l-0.86,0.34l-0.15,0.75l0.5,1.37l-0.14,0.51l-1.7,0.08l-1.15,0.63l-0.63,1.38l-0.35,2.99l-1.44,0.97l-0.65,1.28l0.08,2.75l1.04,0.9l-1.16,1.58l-1.43,0.55l-0.87,-0.37l-0.04,-1.04l-0.44,-0.24l-0.79,0.2l0.08,-0.94l-0.38,-0.4l-1.62,0.37l0.3,-1.52l-1.13,-0.87l-2.18,-0.29l-0.6,0.22l-0.26,0.74l-0.54,0.19l-1.94,-0.41l-1.16,0.47l-0.67,-0.89l-1.55,-0.1l-2.32,0.86l-0.71,-2.13l-1.46,-1.68l-2.4,-0.13l-3.8,-2.61l-0.66,-0.74l-0.55,-1.37l-2.39,-1.3l-0.84,-0.11l-3.42,1.35l-0.4,-1.87l-1.03,-1.41l-4.38,-2.28l0.11,-0.62l0.69,-0.26l1.19,0.27l0.76,-1.03l0.69,0.21l0.69,-0.27l1.77,-1.76l0.03,-1.29l-3.55,-1.07l-4.97,-2.81l-1.61,-1.38l-2.29,-3.67l-1.11,-1.1l-3.59,-1.79l-2.29,-3.9l-2.23,-2.17l-1.68,0.04l-0.85,1.12l0.16,1.82l1.13,4.27l-0.23,1.21l-0.92,0.93l-1.27,0.59l-0.53,-0.16l-3.81,-2.16l-3.95,2.04l-1.26,-2.37l-1.0,-3.95l-0.15,-3.69l1.35,-2.08l1.34,-3.04l3.16,-2.75l0.2,-1.02l-0.65,-0.63l-5.42,-2.71l-2.87,-2.4l-1.41,-0.26l-0.93,0.49Z", "name": "Uttaranchal"}, "IN-JH": {"path": "M485.62,401.35l-2.2,-0.83l-1.66,0.13l-0.64,-0.47l-0.92,-2.18l0.46,-1.96l-0.75,-2.15l-5.31,-5.13l-0.45,-1.24l-0.28,-2.67l-2.23,-1.57l-3.11,-0.55l0.74,-1.85l1.39,-1.87l0.17,-1.31l1.15,-1.83l-0.17,-0.87l-1.63,-2.76l0.11,-0.69l0.93,-0.61l2.97,-0.32l4.77,0.81l1.87,-0.08l1.71,-1.09l1.28,0.23l2.91,-0.51l1.72,-1.44l0.63,-1.37l1.28,2.2l0.99,2.58l0.91,0.66l0.71,-0.13l0.37,-0.54l0.48,0.46l0.71,-0.09l0.31,-0.39l0.0,-0.99l1.13,-0.14l0.85,0.26l0.77,-0.44l0.4,0.65l0.01,0.81l-0.37,0.6l0.15,0.73l1.64,1.83l3.74,2.84l1.49,-0.24l1.96,-2.6l1.54,0.48l0.78,-0.11l0.96,-1.83l3.19,-2.01l0.37,0.18l0.47,1.68l1.14,0.05l0.36,1.93l0.73,0.76l1.93,0.23l3.38,-1.36l-0.14,0.95l0.71,0.62l2.29,-1.85l0.34,-1.09l2.75,-1.0l0.7,-0.85l3.22,-0.65l2.72,-0.0l1.15,0.31l2.07,-1.87l1.74,0.23l0.61,-0.3l0.36,-0.71l0.0,-1.21l-0.39,-1.16l1.12,-0.67l0.91,-2.77l0.59,-0.38l2.49,-0.03l0.87,0.51l1.73,1.86l1.65,-0.22l1.97,-1.34l-0.19,1.0l1.95,0.69l0.56,2.96l0.66,1.0l1.38,0.68l1.57,-0.48l1.85,0.5l0.24,1.48l-0.96,1.25l0.15,0.88l5.46,3.3l0.78,-0.54l0.24,-1.39l0.74,-0.75l0.22,-2.08l2.61,-2.45l1.79,0.61l1.64,-0.17l0.97,-0.45l0.63,-0.86l1.69,1.09l2.36,0.74l0.49,-0.24l0.04,-1.06l0.79,-1.32l2.54,0.86l1.25,-0.22l0.91,-2.73l0.27,-2.7l-0.24,-0.98l1.59,-2.79l-0.02,-3.96l1.79,-2.25l0.83,-0.3l1.16,0.31l0.51,-0.24l1.12,-3.76l1.51,-0.38l1.41,0.51l0.77,-0.28l1.6,-3.24l1.37,-1.12l1.1,0.52l1.08,1.31l2.68,0.7l1.93,-0.1l0.67,0.49l0.1,0.59l-0.46,1.42l0.24,2.13l2.17,2.01l1.05,3.9l-0.72,3.72l-1.0,-0.18l-0.39,1.06l0.51,0.67l1.0,0.23l0.43,0.82l0.61,1.83l-0.66,0.58l-0.05,0.67l0.77,0.42l-1.14,0.75l-2.41,-0.72l-0.85,0.38l0.07,0.8l1.03,0.5l-0.1,1.01l0.4,0.96l-0.7,1.06l-0.04,1.52l-1.26,2.69l-3.44,2.56l0.02,1.36l0.28,0.36l0.67,-0.02l0.2,0.56l-1.83,0.11l-0.91,2.13l-1.27,-0.85l-1.16,0.28l-0.22,0.53l0.12,2.26l-0.83,0.87l-1.67,-0.16l-1.77,0.66l-0.38,-1.37l-0.75,-0.37l-2.33,0.63l-0.38,0.95l1.58,2.04l0.13,0.85l-0.99,0.74l-0.22,1.61l-0.67,-0.67l-1.24,-0.31l-1.18,0.26l-0.11,0.83l0.9,1.18l-0.74,0.16l-1.48,-0.36l-1.99,-1.45l-1.11,-0.15l-2.74,-1.55l-0.75,0.01l-2.05,2.64l-0.2,0.99l0.37,1.17l-0.54,1.3l-4.61,0.89l-7.31,2.64l-2.04,1.68l-0.42,2.01l-1.8,1.61l-1.1,0.29l-1.25,-0.91l-1.7,-0.6l0.37,-1.76l-0.17,-0.83l-3.17,-1.24l-0.91,0.23l-0.6,0.76l0.27,2.08l-4.66,0.65l-1.05,0.72l-0.09,0.97l0.72,1.07l1.45,0.25l-0.37,1.69l-1.12,1.59l-0.47,1.62l0.4,0.99l0.91,0.9l0.58,1.59l0.42,0.13l1.6,-0.54l1.56,0.43l4.28,4.41l1.21,0.8l2.64,-0.43l6.48,0.73l-1.12,0.37l-1.06,1.04l-0.38,5.19l1.78,1.49l1.55,0.14l2.47,1.85l0.25,1.52l0.66,1.08l0.97,0.46l1.88,0.17l1.02,0.78l0.5,1.15l-1.24,0.06l-0.21,0.5l0.21,1.04l2.24,1.83l0.38,2.09l1.43,1.35l-2.14,0.24l-0.34,0.37l-0.06,1.01l-0.83,-0.19l-1.36,0.84l-5.58,-3.66l-3.08,0.44l-0.93,-0.27l-2.33,-2.54l-5.72,-2.93l-1.38,-1.66l-0.96,-0.22l-0.63,0.3l-0.7,0.93l-1.56,0.42l-0.49,0.53l0.14,1.26l1.25,1.79l0.31,2.33l-0.08,0.94l-0.78,1.36l0.01,0.75l0.7,1.68l-0.43,2.63l-1.68,2.46l-1.06,0.74l-1.12,0.27l-1.32,-0.84l-0.04,-1.41l0.7,-1.51l-0.5,-0.78l-3.63,1.66l-3.84,-0.98l-3.16,-1.78l-1.39,-0.0l-2.85,1.24l-2.91,3.01l-0.82,-0.88l-2.85,-1.79l-1.6,-0.26l-1.46,0.46l1.5,-2.94l1.65,-2.4l0.39,-1.42l-0.54,-3.97l-0.68,-1.83l-0.62,-0.17l-2.32,1.61l-1.27,0.2l-0.95,0.73l-3.4,-0.9l-1.07,0.16l-1.02,0.58l-6.68,0.19l-0.58,0.37l-0.42,1.49l-2.34,1.14l-2.91,0.15l-2.41,-1.06l-1.51,-0.19l-0.86,-0.65l-2.56,-3.71l-2.65,-1.24l0.21,-0.7l2.1,-1.9l1.68,-0.16l2.55,-1.92l1.17,-2.68l0.95,-0.49l2.7,-2.47l0.21,-1.44l-0.78,-2.37l-1.27,-0.8l-2.38,0.04l-2.05,-0.95l-0.44,0.2l-0.1,0.88l-0.34,-0.13l-0.73,-2.68l-1.84,-1.99l-0.24,-1.17l0.56,-3.95l-0.52,-2.22l-1.03,-0.81l-1.27,0.92l-0.09,-0.36l0.24,-2.83l1.54,-1.82l0.43,-1.07l-0.96,-2.79l-0.87,-0.33l-1.62,0.72l-0.34,0.71l0.12,1.14Z", "name": "Jharkhand"}, "IN-JK": {"path": "M176.08,35.04l2.37,-2.36l-0.15,-2.71l0.72,-0.56l5.27,-0.96l3.12,-1.98l1.87,-0.7l1.84,-0.15l1.87,0.3l7.81,2.66l10.87,2.04l5.97,-0.52l1.57,1.55l2.54,1.46l8.19,2.07l5.87,-0.33l2.57,-2.29l3.11,-1.82l1.42,-1.8l0.86,-0.17l1.84,0.74l1.27,-0.01l3.39,-0.84l5.27,-2.66l0.99,0.15l1.97,1.12l3.39,-0.56l3.4,-2.92l0.32,-0.85l0.08,-2.41l0.59,-0.43l1.96,-0.39l1.61,0.69l0.77,0.01l2.91,-2.36l0.56,-0.77l0.2,-1.26l-0.34,-1.59l0.44,-0.53l22.94,-13.34l0.94,1.29l1.66,0.81l1.15,-0.36l2.19,-1.83l1.4,0.07l0.25,0.97l-1.39,3.65l-0.24,2.94l1.11,2.66l2.85,4.79l0.56,3.9l0.5,1.32l1.45,1.99l1.9,6.57l0.74,1.28l1.29,1.15l1.47,0.62l7.06,1.14l1.68,0.66l2.57,1.86l1.66,2.01l3.68,1.47l0.79,0.71l0.72,1.3l0.34,1.43l-0.32,1.36l-2.12,1.93l-2.99,1.23l-2.52,1.81l-0.26,3.11l1.51,4.2l0.72,4.34l-0.37,6.71l0.6,2.02l0.76,1.24l2.91,2.63l1.83,2.73l2.61,1.09l0.44,1.63l0.42,0.49l2.17,-0.32l3.4,1.53l2.5,0.11l0.76,0.38l0.07,0.93l-1.15,2.16l-0.31,3.79l0.76,1.2l1.74,1.47l1.04,2.98l1.58,1.74l-0.13,2.04l-1.78,2.45l-2.99,2.26l-1.28,1.37l-2.29,-0.49l-2.63,0.8l-0.83,0.67l-1.0,3.25l-1.34,-0.22l-2.55,1.01l-0.76,-0.22l-4.17,-3.55l-0.99,-2.71l0.36,-2.45l-0.62,-0.72l-0.73,-0.26l-0.88,0.28l-1.95,1.75l-6.89,0.7l-0.72,0.37l-0.3,0.78l-1.91,1.79l-0.48,-0.21l-0.24,-0.53l0.84,-2.71l2.04,-1.64l0.41,-0.81l0.1,-2.61l-0.35,-1.18l-0.52,-0.44l-1.59,0.09l-0.31,0.35l-0.01,0.78l-1.28,0.59l-0.52,0.64l-1.76,0.13l-2.36,0.83l-1.87,1.76l-1.16,0.19l-1.94,-2.71l-0.28,-2.27l-1.13,-1.48l-1.11,-2.41l-4.43,-4.94l-0.7,-0.03l-1.02,0.5l-3.7,2.62l-4.93,1.16l-0.67,0.74l-0.48,-0.0l-6.46,-2.01l-1.4,-0.78l-4.53,-2.86l-5.76,-5.55l-4.11,0.12l-1.88,-1.36l-0.71,-0.13l-1.11,0.56l-3.58,0.69l-3.2,1.74l-0.74,0.87l-0.39,1.36l-0.68,0.71l-4.17,1.72l-4.44,3.8l-1.01,-0.85l-1.7,-0.58l-1.74,0.49l-0.44,0.98l0.29,1.07l3.0,3.83l-0.27,2.22l0.73,1.87l-0.04,0.89l-1.7,1.9l-0.05,0.61l-0.99,1.43l-2.76,1.28l-0.43,1.18l-0.85,0.7l-2.45,0.3l-1.37,0.77l-2.13,2.4l-1.29,-0.76l0.03,-0.69l-0.42,-0.49l-1.71,0.82l-2.67,0.07l-3.04,-2.13l-2.21,-0.52l-3.16,-1.86l-3.66,0.69l-2.22,-1.01l-3.41,0.48l-0.92,-0.3l-0.7,-0.79l-0.95,-2.82l0.8,-1.82l-0.19,-2.8l1.2,-2.89l-0.26,-1.2l-0.74,-0.4l-0.76,0.21l-0.63,0.65l-0.62,1.67l-1.02,0.49l-2.05,0.22l-2.05,-1.37l-2.17,0.76l-0.5,-0.09l-0.91,-1.05l0.73,-1.21l0.13,-0.85l-0.81,-4.48l-1.14,-0.74l-2.8,-0.45l-1.0,-0.55l-1.7,-2.2l-2.9,-2.45l-0.36,-0.9l0.31,-1.78l2.08,-1.05l0.87,-1.05l1.26,-3.13l0.67,-2.87l-0.65,-2.12l-5.01,-3.36l-0.4,-1.27l0.28,-1.74l1.77,-2.59l3.3,-0.55l2.28,-1.26l1.59,-1.84l0.35,-1.48l-0.54,-1.32l-1.2,-0.71l-3.32,0.36l-2.29,-0.58l-2.14,0.5l-0.78,-0.15l-1.4,-1.35l-0.24,-0.86l0.22,-0.85l3.05,-2.05l0.2,-1.12l-1.36,-3.16l-0.58,-0.7l-2.81,-0.24l-1.92,-1.19l-0.07,-1.35l1.86,-1.69l0.23,-1.76Z", "name": "Jammu and Kashmir"}, "IN-UP": {"path": "M275.34,205.39l0.08,-0.87l-0.4,-0.81l0.98,-0.64l0.26,-0.62l-0.39,-1.02l0.09,-1.08l0.63,-0.63l-0.03,-0.78l0.85,-0.74l-0.12,-1.31l0.85,-0.26l0.57,-1.11l1.48,-5.73l1.43,-1.37l0.17,-0.58l0.94,-0.1l0.3,-0.86l2.37,-1.61l0.44,-1.41l4.79,-4.24l0.56,-1.76l0.08,-1.88l0.69,-0.43l1.01,0.2l2.73,2.32l5.75,3.03l-3.25,2.91l-1.42,3.18l-1.4,2.22l0.14,4.1l1.02,4.01l1.5,2.84l0.53,0.17l3.93,-2.12l4.27,2.33l1.87,-0.79l1.16,-1.27l0.27,-1.53l-1.31,-5.86l0.44,-0.6l0.93,-0.03l1.97,1.95l2.37,3.99l3.63,1.83l1.01,1.0l2.3,3.68l1.72,1.49l5.15,2.91l3.22,0.87l-0.29,0.67l-1.36,1.2l-1.25,-0.03l-0.74,1.01l-0.97,-0.35l-0.89,0.33l-0.75,1.13l0.36,0.82l4.44,2.28l0.82,1.11l0.45,2.3l0.61,0.28l1.07,-0.68l2.94,-0.83l2.2,1.17l0.37,1.16l0.83,0.95l3.93,2.71l1.56,0.36l0.81,-0.24l1.2,1.39l0.83,2.42l0.51,0.21l2.48,-0.94l0.99,-0.02l0.51,0.84l0.69,0.17l1.07,-0.46l2.12,0.39l0.81,-0.28l0.49,-0.86l1.92,0.26l0.58,0.43l-0.37,1.25l0.26,0.54l0.61,0.21l1.18,-0.4l0.11,1.23l0.97,0.05l0.34,0.98l1.38,0.56l1.93,-0.72l0.97,-1.03l0.5,-1.07l2.2,2.05l1.78,0.44l1.1,1.2l1.02,0.42l1.36,2.19l0.82,0.27l1.64,-0.21l2.4,2.1l0.56,-0.22l0.15,-0.44l-0.17,-2.69l0.63,-0.53l0.74,0.02l0.4,1.04l2.24,0.66l1.17,1.65l1.64,0.62l1.64,1.48l0.65,0.35l2.05,0.21l0.35,1.28l0.73,0.61l1.33,0.34l1.04,-0.11l0.72,1.29l5.03,1.12l0.53,0.65l1.04,2.88l2.01,2.4l-0.35,0.91l0.75,0.97l1.19,0.06l0.59,-0.34l0.52,-0.97l0.76,0.17l1.08,0.92l0.65,1.65l0.59,0.53l2.77,1.38l1.6,1.47l2.32,0.63l1.89,1.78l3.25,1.95l1.27,0.05l1.97,-1.88l0.73,-0.31l1.44,0.14l0.64,0.2l1.19,1.09l1.86,0.8l3.63,2.88l2.4,1.17l1.78,1.68l1.35,0.37l2.68,-0.3l3.76,-0.93l0.61,0.23l0.78,1.86l0.64,3.77l1.05,1.07l3.78,0.24l2.16,1.0l1.95,0.46l3.79,-0.02l1.0,0.38l1.46,1.18l1.22,1.83l0.87,0.34l1.01,-0.06l1.26,-0.95l0.95,-1.56l-0.43,-1.73l0.64,-0.32l6.11,0.45l7.74,3.44l-0.08,0.57l0.44,0.31l0.89,-0.1l-0.14,1.46l1.68,1.8l-0.02,2.27l2.55,3.19l0.12,2.0l1.36,2.56l2.76,1.74l1.3,-0.6l0.85,0.05l0.44,0.97l-0.19,2.57l0.25,0.77l1.93,0.52l2.54,2.63l-8.75,-0.21l-0.69,0.64l-0.89,2.26l-1.87,0.57l-0.58,0.71l-0.53,-0.86l-1.04,0.3l-0.27,2.29l0.45,0.95l1.56,0.43l1.39,-0.63l2.0,1.49l2.85,0.74l-0.75,1.75l0.72,1.59l-1.71,-0.01l-0.98,0.62l-2.56,0.37l-0.78,0.73l-0.02,1.17l1.57,1.59l0.8,1.89l2.75,1.4l0.66,1.24l1.01,0.41l0.56,1.63l1.2,1.16l0.84,0.22l2.77,-0.43l1.0,1.36l1.44,0.91l2.29,0.25l2.18,1.96l0.09,0.43l-0.43,1.02l-1.48,1.05l-1.13,0.16l-1.72,-0.61l-1.57,-1.34l-1.31,-0.02l-1.48,0.93l0.37,2.52l-1.19,0.43l-1.3,-0.47l-0.42,-2.32l-1.02,-0.59l-1.43,0.28l-2.76,2.12l-1.74,2.2l-3.5,2.93l-2.15,0.89l-1.31,1.48l-12.02,6.86l-1.28,1.31l-0.44,1.05l-0.35,3.14l0.15,0.85l1.12,1.85l-0.29,4.03l2.54,2.96l2.69,1.36l0.21,1.11l-0.62,1.25l0.43,1.32l-0.04,2.89l-2.45,0.3l-1.39,1.1l-0.01,1.49l1.65,3.07l-0.95,1.29l-0.26,1.5l-1.39,1.86l-1.72,4.05l-1.53,1.2l-0.32,1.67l-0.84,1.34l-3.39,1.26l-4.96,-0.24l-1.19,-0.65l-1.66,-1.53l-1.22,-0.35l-0.94,-1.34l-0.99,-0.75l0.07,-1.48l-1.86,-1.99l0.85,-0.12l0.85,-0.74l0.33,-2.2l0.73,-1.76l-0.05,-2.43l-0.94,-0.86l0.33,-2.55l-0.28,-1.36l0.21,-0.26l0.93,0.28l0.92,-0.26l0.51,-1.09l-1.52,-2.87l-1.63,-0.31l-0.22,-1.37l-0.98,-0.12l-2.9,1.04l-1.34,-0.13l-2.9,-0.97l-1.02,0.1l-0.38,0.54l0.07,1.74l-0.34,0.46l-2.48,0.03l0.46,-0.94l-0.09,-0.81l-0.63,-0.61l-1.13,-0.04l0.05,-2.17l-0.46,-0.58l-0.5,0.11l-0.69,1.01l-0.23,-0.11l0.34,-1.13l-0.43,-1.53l-0.75,-0.06l-2.07,1.15l-2.62,-1.65l-2.34,-0.36l-2.44,-1.83l0.1,-1.46l-1.19,-1.84l-1.25,-0.33l-1.65,0.49l-0.55,-0.18l-0.66,-1.21l-3.93,-0.58l0.12,-0.94l-1.36,-2.79l-0.44,-0.15l-3.52,1.18l-0.04,0.71l1.17,0.85l-1.17,0.38l-1.22,-0.17l0.17,-0.95l-0.6,-0.6l-1.6,-0.5l-2.36,0.14l-0.44,0.65l0.07,2.14l-1.89,2.61l0.26,1.6l-1.41,0.32l-0.94,1.06l-2.61,-1.77l-1.96,0.4l-1.39,-1.0l-2.12,0.47l-1.76,-0.18l0.84,-1.31l0.15,-0.88l0.88,-0.9l0.2,-1.29l0.88,-2.03l-0.08,-0.99l-0.92,-0.55l-1.39,0.37l-0.83,1.53l-3.3,0.4l-0.04,0.77l1.71,1.4l-2.08,0.3l-0.9,-0.82l-0.8,-1.5l-0.89,-0.3l-0.66,0.44l0.01,1.06l-2.31,-0.37l-0.6,0.3l0.4,1.75l1.24,0.71l-0.82,0.53l-0.4,0.04l-1.56,-1.55l-0.56,0.43l0.22,1.27l-1.38,-0.38l-1.63,0.37l-0.51,-0.7l-0.17,-0.93l1.06,-0.2l1.53,-1.78l2.0,-1.08l0.21,-0.73l-0.78,-2.05l-0.88,-0.18l-0.5,-0.7l-0.94,-0.49l-0.28,-2.59l-0.93,-1.59l-0.79,-0.28l-1.27,0.27l-0.88,-0.25l-2.49,2.19l-1.13,-0.36l-2.27,1.05l-3.01,2.29l-2.37,0.66l-0.35,0.48l0.02,0.73l1.03,1.63l-1.68,0.65l-0.98,-0.78l-3.65,0.23l-3.08,-0.97l-0.92,0.48l-1.43,1.94l-0.32,-0.02l-0.21,-0.76l-0.47,-0.4l-1.47,0.02l-0.45,0.65l0.08,1.56l-0.7,0.07l-0.49,-0.55l0.21,-1.36l0.89,-0.87l1.71,-2.67l0.6,-1.48l-0.19,-0.47l-0.47,-0.14l-1.16,0.86l-0.87,-0.19l-0.77,0.28l-0.81,0.96l-0.37,-0.96l1.04,-2.22l-0.64,-0.78l-0.75,0.11l-1.26,2.01l-0.04,1.23l0.78,3.19l-3.22,-0.57l-1.29,1.21l-0.23,-1.37l-0.3,-0.28l-0.87,-0.01l-1.75,0.66l-0.09,-0.73l1.1,-1.71l-0.97,-0.87l-0.86,-0.22l-0.71,0.35l-0.16,1.32l-1.22,0.43l-1.02,1.15l-0.59,0.21l-0.12,-0.99l0.32,-0.89l1.91,-1.82l-0.03,-1.44l0.63,-1.25l0.16,-1.42l-0.55,-0.91l-1.06,0.13l0.35,-1.08l-0.08,-1.1l-0.23,-0.57l-0.88,-0.52l-0.72,0.25l-0.62,0.73l-0.32,0.9l0.03,1.77l-0.3,0.25l-0.55,-0.02l-0.1,-2.28l-0.54,-0.97l-0.57,-0.09l-1.75,1.02l-0.19,1.54l0.75,0.94l-0.52,0.98l0.19,1.26l-2.07,-2.02l-1.41,-0.23l-1.13,0.35l-0.36,0.65l0.12,0.74l-1.48,1.74l-0.57,1.6l0.32,0.71l1.59,1.5l1.08,2.41l1.2,6.41l2.31,3.04l0.36,3.85l-0.65,1.88l0.4,1.02l1.03,0.66l2.06,-0.54l1.03,0.19l1.85,3.2l-0.17,1.52l0.39,0.4l1.51,0.37l-0.16,1.09l-0.47,0.87l-1.67,1.57l-1.07,2.4l-1.57,1.53l-0.99,-0.36l-0.45,-1.43l-2.96,-0.6l-3.64,-3.03l-1.66,-0.82l-1.14,0.44l-0.61,1.98l-0.56,0.69l-0.97,0.47l-0.88,-0.44l-0.41,-0.83l0.63,-1.22l-0.08,-0.85l-2.21,-1.45l-0.19,-0.65l-0.85,-0.52l-0.49,-0.89l1.35,-2.51l0.03,-0.97l-0.38,-0.52l0.07,-1.6l-0.96,-1.46l-0.21,-2.0l-0.83,-1.48l-0.83,-0.73l0.24,-0.53l2.34,-1.55l2.17,-2.14l0.53,-1.55l-0.31,-1.12l1.1,-3.45l-0.18,-1.0l-1.96,-3.91l-1.39,-2.03l2.35,-2.06l0.58,-0.87l0.55,-1.89l3.26,-0.78l2.42,0.06l1.81,-1.06l2.97,-0.59l1.28,-0.74l0.27,-0.98l-0.81,-2.2l0.14,-1.22l0.38,-0.7l1.92,-1.49l0.81,-2.07l1.37,-1.68l1.06,-2.84l1.2,-1.91l-0.03,-0.77l-0.96,-0.97l0.0,-0.62l1.1,-0.89l-0.56,-1.88l0.59,-0.57l1.79,-0.57l1.29,-1.72l0.13,-0.63l-0.6,-0.73l0.33,-1.15l-0.1,-1.04l-0.67,-1.92l-2.1,-3.28l-0.72,-3.17l-0.59,-0.68l-1.97,0.16l-2.0,-1.93l-0.9,-0.14l-0.36,-0.7l-0.99,0.05l-0.56,-0.52l-1.79,0.76l-1.18,-0.01l-0.74,0.63l-0.64,-0.02l-1.43,-0.82l-1.72,-0.3l-1.05,-1.0l-1.16,-0.1l-0.54,-0.83l-0.76,-0.27l-2.23,0.18l-0.93,1.15l-1.2,-0.18l-0.62,-0.89l0.78,-0.3l1.09,-1.02l0.27,-0.71l-0.74,-0.73l-1.94,-0.48l-2.22,0.1l-1.26,1.15l-1.17,0.12l-0.39,0.59l-0.88,-0.48l-2.81,-0.37l-1.09,0.33l-0.92,-0.47l-3.28,-0.47l-2.51,1.71l-3.97,1.63l-1.26,-0.07l-0.91,1.46l-0.86,0.49l0.13,-2.17l0.57,-0.69l6.23,-2.89l2.25,-0.54l0.72,-0.58l0.09,-0.67l-0.84,-0.74l-0.84,0.58l-0.62,-1.04l-0.47,-0.22l-0.8,0.55l-1.65,-0.21l-0.65,-1.0l-0.85,-0.27l0.11,-0.38l2.42,-0.72l0.53,-1.05l1.15,-0.65l0.56,-1.2l-1.43,-2.52l-0.3,-1.75l-1.54,-0.43l-3.64,-2.12l-0.61,-1.8l-2.26,-2.94l0.03,-1.53l-0.68,-0.68l0.5,-0.81l-0.04,-0.86l-0.47,-1.19l-0.72,-0.53l-0.37,-2.72l0.75,-0.66l2.6,-0.95l0.83,-0.85l0.99,0.2l0.51,-0.21l1.14,-1.79l0.79,-0.67l-0.81,-2.35l-1.02,-0.86l0.1,-1.29l0.34,0.21l0.6,-0.43l-0.26,-1.77l1.08,-0.7l0.18,-0.62l-0.76,-0.58l0.74,-1.51l-1.42,-0.68l-0.05,-0.97l-0.62,-0.65l0.87,-2.29l-0.41,-0.56l-0.44,0.04l-0.11,-1.16l-0.36,-0.26l-0.88,0.17l-0.49,-1.15l-0.94,0.01l-0.29,-0.67l-1.11,-0.66l-1.05,-1.92l1.12,-1.48l-0.06,-1.04l-0.85,-2.6l-2.48,-2.18l-0.53,-1.11l0.23,-0.83l-0.41,-0.93l0.54,-1.42l-1.35,-1.66l0.54,-1.2l-1.8,-3.7l-0.14,-5.52l0.56,-1.3l-0.47,-0.92l-0.03,-0.89l0.47,-1.5l-0.93,-0.73l-1.3,0.03l1.29,-1.31l-0.05,-0.56l-0.46,-0.39l-0.95,-0.01Z", "name": "Uttar Pradesh"}, "IN-SK": {"path": "M624.09,256.17l1.74,-1.11l1.5,0.04l2.71,-2.5l1.43,1.15l2.65,0.52l2.31,1.81l-0.23,2.08l1.28,1.8l0.06,0.92l-1.46,6.18l-1.76,3.15l-0.24,1.13l0.49,0.78l-0.09,1.51l0.63,1.96l3.56,3.09l-0.14,0.55l-0.53,0.4l-1.78,0.44l-1.01,0.67l-1.42,2.94l-1.56,-0.85l-4.67,-0.11l-3.06,2.58l-1.78,0.44l-3.84,-1.72l-3.55,-0.05l-0.65,-0.3l-0.58,-1.87l-1.79,-1.32l0.79,-2.13l-0.61,-1.91l0.81,-1.92l-0.56,-1.88l2.65,-4.71l1.54,-4.54l-0.12,-1.42l0.29,-1.16l-0.51,-0.51l-1.07,-0.3l-0.48,-1.12l0.06,-0.62l0.47,-0.48l1.19,0.1l6.6,-1.18l0.74,-0.55Z", "name": "Sikkim"}, "IN-MZ": {"path": "M743.96,392.77l0.71,0.19l0.37,-0.45l-0.14,-2.85l0.55,-1.85l-0.42,-1.43l0.33,-2.14l-0.11,-2.89l-0.65,-1.18l2.99,-0.03l-0.38,1.02l0.75,1.88l1.11,0.72l1.07,-0.2l3.08,-2.92l1.24,-0.79l-0.05,-1.35l2.53,-2.77l1.3,-3.49l2.32,3.71l1.02,0.04l1.89,-0.78l1.44,0.32l0.94,-0.24l0.11,0.82l0.68,0.79l-0.94,1.59l0.08,1.22l-0.6,3.47l-0.55,0.59l0.12,0.67l2.91,1.14l1.2,0.91l1.31,-0.55l0.72,0.69l0.62,0.01l1.32,-0.83l0.11,1.34l0.61,0.24l0.97,-0.45l0.25,1.53l1.46,2.27l0.56,5.39l1.62,1.71l0.15,1.2l-0.99,6.3l0.22,3.39l-0.91,1.69l-0.09,5.36l-1.22,2.4l-1.63,1.33l-0.58,0.03l-1.4,-1.49l-0.78,-0.25l-0.99,0.29l-0.58,0.74l0.04,2.05l0.88,1.94l0.12,0.97l-1.74,2.48l-1.23,1.16l-0.27,2.69l1.21,3.12l-0.33,2.8l0.6,1.65l1.1,1.18l0.34,1.19l0.24,3.97l-1.47,0.77l-0.09,0.62l0.38,0.78l-2.29,-0.79l-1.1,0.42l-0.08,2.78l-1.0,0.47l-0.71,1.34l0.31,2.1l-0.63,-0.79l-0.82,-0.32l-0.71,0.4l-0.47,1.47l-0.37,-1.67l-0.66,-0.91l-2.03,-1.9l-1.96,-1.42l-0.88,-0.27l-0.8,0.54l0.01,1.48l-0.37,0.18l-0.18,0.63l-0.08,1.63l-0.92,0.25l-0.78,0.79l-1.04,-4.15l0.88,-0.24l0.27,-1.25l-1.83,-11.1l-0.51,-1.55l-0.17,-4.45l-0.52,-1.11l-1.15,-1.14l-0.55,-3.59l-0.61,-0.67l-0.91,-0.36l-0.68,-1.66l0.02,-2.29l-0.78,-4.56l0.13,-1.61l0.79,-1.88l-0.27,-2.46l-0.7,-0.81l-0.08,-0.97l-0.71,-0.88l-1.55,-6.66l0.55,-2.59l-0.21,-1.75l0.23,-1.48l0.46,-0.67Z", "name": "Mizoram"}, "IN-CT": {"path": "M376.2,561.12l-0.76,-1.04l-0.54,-2.04l-1.09,-0.57l-0.15,-0.57l0.27,-0.65l2.07,-1.28l0.36,-0.85l-0.24,-0.79l-1.82,-2.18l-0.32,-1.59l0.51,-1.14l2.36,-3.16l1.16,-4.17l1.21,-0.64l1.08,-1.84l1.03,-0.48l0.89,-1.14l0.61,-0.26l1.07,2.14l2.07,0.07l0.93,1.63l0.73,0.22l1.24,-1.17l2.22,-1.2l0.11,-0.81l-0.84,-1.42l2.23,-0.73l0.65,-1.58l-0.64,-1.49l-1.37,-1.28l-4.18,-1.73l-0.94,-2.81l-2.92,-1.34l-1.24,-2.7l-0.75,-0.22l-0.84,0.27l-0.46,0.55l-0.09,0.78l-1.61,-0.42l1.75,-0.9l0.59,-1.0l-0.24,-0.9l-1.6,-0.51l0.5,-0.9l1.91,0.56l0.81,-0.33l0.83,-4.19l-1.06,-3.19l-3.34,-0.41l0.3,-2.29l0.6,-0.47l2.53,-0.4l2.93,-1.99l0.18,-0.75l-0.42,-1.42l0.05,-2.41l0.61,-1.47l-0.41,-1.1l-0.13,-2.2l-1.6,-0.59l-2.16,0.82l0.34,-0.93l1.82,-1.1l0.25,-1.05l-0.49,-2.64l-0.19,-4.61l-0.89,-0.79l-1.73,0.09l-0.93,-1.74l0.73,-4.2l0.63,-0.84l4.35,-2.42l1.73,-2.04l0.06,-1.69l1.3,-3.97l-0.11,-3.65l0.64,-4.84l1.91,-0.95l0.61,-1.04l0.55,-1.62l-0.09,-3.28l2.01,-4.15l0.85,-0.2l1.2,1.46l0.55,-0.07l0.46,-0.5l0.09,-0.85l-0.42,-0.87l0.8,-0.52l0.42,-2.56l1.99,-1.5l0.72,-1.23l0.16,-3.55l1.21,-1.92l0.5,-0.43l0.46,0.94l1.05,0.27l3.57,-1.69l1.2,1.52l0.79,0.43l1.06,-0.45l2.76,-2.24l3.2,-1.03l0.92,-1.95l2.97,-1.77l-0.02,-1.86l0.73,-1.05l-0.19,-2.83l0.19,-0.37l2.32,-0.91l2.35,-2.12l0.23,-0.95l-0.31,-1.56l0.29,-0.66l3.67,-1.75l1.99,-0.03l0.88,-1.76l1.03,-4.6l-0.16,-1.02l-2.37,-2.04l-2.34,0.08l-0.36,-0.7l-0.98,-0.37l-2.06,-3.14l-0.79,-0.36l-1.44,-0.08l-3.16,-1.17l-0.65,0.1l-2.65,1.78l-0.44,0.01l-0.97,-2.0l0.65,-0.89l0.15,-1.17l1.07,-0.61l1.02,-1.6l-0.17,-1.22l-1.75,-3.33l0.06,-1.2l1.2,-0.2l1.84,1.89l1.03,0.75l1.08,0.3l1.09,-0.04l3.01,-1.44l1.96,0.13l2.28,1.14l3.87,0.03l1.87,0.48l8.34,0.33l1.27,-0.98l2.41,-1.15l0.77,-1.85l3.07,-1.14l0.59,-0.82l0.3,-1.29l0.83,0.21l1.66,1.52l1.43,0.77l5.35,0.26l3.78,-1.46l1.03,-1.62l0.25,-1.54l1.45,-1.09l0.74,-1.65l3.19,0.58l1.86,1.28l0.24,2.82l0.99,1.75l4.75,4.36l0.66,1.82l-0.44,2.11l1.35,2.8l1.06,0.48l1.68,-0.12l2.34,0.83l0.55,-0.55l-0.05,-1.51l1.36,-0.48l0.76,2.35l-1.89,2.51l-0.29,3.17l0.54,1.11l0.6,0.01l0.99,-0.91l0.48,0.7l0.3,1.5l-0.56,4.03l0.33,1.47l1.84,1.98l0.9,2.89l1.12,0.31l0.52,-0.4l0.04,-0.52l1.65,0.8l2.21,-0.09l0.9,0.49l0.71,2.65l-0.72,0.97l-2.99,2.18l-1.13,2.64l-2.36,1.79l-1.78,0.21l-2.14,1.78l-0.72,2.26l0.72,1.48l0.15,1.18l-1.13,1.76l-3.47,0.93l-3.65,3.0l-3.05,1.37l-2.17,2.82l-0.35,1.32l0.73,1.02l-1.48,0.97l-0.33,1.95l0.41,0.86l1.39,0.93l-0.35,1.31l0.13,0.75l-0.12,0.3l-0.98,0.13l-0.29,0.89l-1.06,-0.2l-0.46,0.37l-0.32,1.8l-3.28,5.47l-0.78,2.64l0.11,1.7l1.58,1.75l0.07,1.4l-2.14,-0.68l-0.99,0.11l-0.68,0.98l-0.1,1.33l-0.9,1.29l-0.91,2.51l-1.44,1.46l-2.01,0.14l-3.31,-2.01l-4.53,0.66l-0.98,0.41l-1.12,-0.49l-3.11,0.28l-0.56,0.45l-0.04,1.31l-2.46,4.73l-1.43,0.95l-1.59,2.2l-1.09,0.56l0.01,-0.76l-0.55,-0.52l-1.36,-0.25l-0.68,0.54l-0.09,4.18l0.72,2.52l-0.83,4.18l0.61,1.45l0.67,0.17l0.4,1.27l0.79,0.22l-0.29,3.71l0.48,1.12l0.27,3.76l-0.69,2.58l0.08,0.98l2.58,1.62l2.3,0.07l1.42,1.1l1.33,-0.5l1.05,0.06l-0.41,3.09l0.82,1.35l-3.43,2.25l0.01,-2.29l-1.81,-0.32l-1.56,-0.7l-3.66,-0.37l-0.86,0.54l-0.78,1.34l-2.46,-4.66l-0.59,-0.31l-1.08,0.07l-0.43,-0.79l-2.26,-1.77l-0.81,0.21l-0.92,1.26l-0.28,-0.91l-2.18,-2.08l-0.5,0.09l-1.32,1.38l-0.97,0.56l-1.53,2.64l-0.2,1.29l0.69,1.16l3.02,1.8l0.98,1.71l2.17,0.75l-0.29,2.12l0.41,1.88l-0.25,4.24l0.5,0.47l0.99,0.22l0.95,1.7l1.38,0.51l0.36,0.45l-0.98,1.25l0.11,0.61l0.97,0.86l-0.71,1.75l-0.07,1.21l0.69,1.82l-0.2,1.59l1.06,0.93l0.17,1.09l0.72,1.28l0.08,2.46l-1.85,1.77l-0.79,3.73l-0.61,-0.56l-0.52,-0.03l-0.99,1.69l-2.34,0.54l-1.59,1.62l-1.01,0.36l-0.27,0.97l1.23,1.04l0.02,0.59l-1.55,1.0l-3.02,2.84l-1.83,2.83l-1.7,0.58l-0.96,1.18l-3.23,1.04l-0.99,2.18l0.33,1.34l-0.54,2.23l-0.74,1.15l-0.25,2.85l-0.67,1.16l-0.18,1.23l-0.74,-0.38l-0.78,0.41l-0.23,2.18l-4.04,0.11l-2.81,-1.08l-3.48,1.96l-0.54,-0.18l-0.8,-1.55l-0.22,-3.95l-1.15,-2.66l-0.11,-1.07l0.7,-1.59l-0.22,-0.76l-1.09,-0.27l-1.63,0.55l-0.57,-2.01l-0.9,-0.47l-0.7,0.29l-0.43,1.22l-1.37,0.06l-0.16,-0.75l1.24,-0.83l0.07,-0.8l-2.14,-4.79l-2.4,-3.04l-2.13,-2.27l-1.92,-1.33l-1.32,-0.24l-1.74,0.54l-1.0,-0.81l-0.58,0.42Z", "name": "Chhattisgarh"}, "IN-CH": {"path": "M266.15,165.51l-2.24,-2.23l-0.12,-0.55l1.16,-0.55l1.66,0.15l0.44,1.34l-0.16,1.56l-0.74,0.28Z", "name": "Chandigarh"}, "IN-GA": {"path": "M171.13,653.34l0.82,-0.49l2.2,-0.25l0.84,-1.12l0.38,0.84l1.86,0.75l0.72,2.4l1.25,1.01l1.01,0.17l2.17,-0.81l2.03,0.13l1.31,-0.56l1.58,0.8l0.64,3.06l-0.59,1.24l0.03,0.83l0.59,0.86l0.06,1.41l1.19,1.5l0.15,1.34l-0.25,0.39l-1.24,0.3l-0.42,0.49l0.16,0.93l1.4,1.13l-1.01,2.75l0.15,2.34l-1.02,2.28l-0.76,0.39l-1.33,0.04l-1.82,1.18l-1.4,-0.88l0.06,-1.67l-0.32,-0.72l-0.99,-0.43l-1.0,-1.7l-1.34,-0.43l0.32,-0.82l0.93,-0.77l0.11,-0.61l-0.54,-0.55l-1.62,-5.41l-0.52,-0.65l-1.65,-0.3l-0.6,-0.51l2.08,0.23l0.62,-0.25l0.78,0.3l0.93,0.96l0.63,-0.35l-0.02,-0.58l-1.35,-1.45l-3.77,-1.12l0.45,-0.68l1.85,-0.72l-0.19,-0.91l-0.59,-0.35l-2.36,1.34l-0.55,-0.34l0.05,-0.87l-0.54,-1.54l0.59,-0.89l2.24,-0.65l0.3,-0.6l-0.39,-0.4l-1.74,0.07l-1.67,1.11l-0.87,-2.2Z", "name": "Goa"}, "IN-GJ": {"path": "M0.5,399.96l0.7,-0.07l0.65,-0.85l1.21,0.35l1.42,-0.85l0.14,-0.66l-0.59,-0.43l-0.93,0.34l-0.77,-0.57l-0.51,-2.68l-0.67,0.36l0.47,-2.07l0.64,-0.96l1.64,-0.62l-0.08,-1.16l0.42,0.58l0.75,0.19l1.26,-1.22l0.45,0.24l0.9,-0.64l10.29,-0.14l0.4,-0.4l0.04,-10.49l0.51,-1.05l1.13,0.05l0.45,2.22l0.74,0.73l0.91,-0.37l1.29,-2.29l1.82,2.06l0.74,0.04l2.52,-1.05l3.13,1.14l3.52,-0.99l8.54,0.22l0.76,0.33l2.36,2.42l1.6,0.78l7.98,0.11l1.43,-0.3l1.28,-1.0l1.64,-3.28l4.06,-0.84l1.74,-1.07l2.27,-0.31l1.43,-0.97l4.1,-0.7l0.18,0.38l-0.74,0.64l-0.12,0.58l0.81,3.24l1.9,1.14l4.26,0.3l3.16,-1.22l0.2,-0.72l-0.41,-0.77l2.11,-1.57l2.5,0.12l0.86,-0.95l1.84,-0.89l-0.41,-1.47l-2.81,-0.83l0.18,-2.07l-0.72,-0.83l-0.07,-0.71l0.57,-1.53l2.65,-1.55l1.66,0.93l2.93,0.8l0.95,0.0l2.15,-0.83l2.27,0.43l1.81,-1.1l2.8,-0.18l1.22,0.17l1.61,0.83l3.68,-0.64l0.6,1.02l1.38,0.34l0.62,-0.37l0.1,-0.96l0.5,-0.3l0.41,0.01l0.74,0.75l1.17,0.13l1.71,-1.24l1.73,-0.39l1.37,1.61l2.36,0.79l1.19,0.15l3.43,-0.47l-2.31,0.59l-0.18,0.93l1.37,1.15l1.47,0.26l0.66,0.97l1.68,0.05l0.11,1.14l1.25,1.86l1.07,-0.16l0.95,-2.34l0.8,-0.05l1.64,0.97l1.95,0.54l0.81,1.65l0.86,0.74l5.67,1.0l1.08,-0.16l1.04,-0.81l0.65,-2.67l0.5,-0.68l2.52,-0.5l-0.24,2.59l0.32,0.65l2.29,0.98l1.23,-0.39l0.06,0.28l-0.47,0.73l-1.64,-0.01l-1.21,1.67l-0.94,2.61l0.78,2.06l0.54,0.75l2.28,1.54l0.5,1.22l1.44,1.4l0.56,-0.04l1.5,-1.02l1.08,-1.87l1.13,1.79l0.1,1.35l0.71,1.7l-1.66,1.34l-0.33,3.86l0.52,0.44l1.25,0.07l1.17,1.92l1.59,0.55l0.03,3.2l1.07,0.14l1.29,-1.03l1.02,0.87l0.0,2.34l0.46,1.2l-0.33,1.36l0.26,0.43l1.46,0.1l1.41,0.86l2.79,-0.78l2.48,3.21l1.08,0.17l1.17,-0.81l2.08,1.91l1.71,0.9l0.52,0.58l0.09,1.77l0.56,0.94l1.07,0.46l1.24,-0.62l0.32,0.13l0.75,0.47l1.19,2.04l1.06,0.7l1.04,2.54l0.7,3.74l0.67,0.28l0.99,-0.26l1.0,1.07l0.15,0.89l-2.47,4.86l-0.69,0.73l-2.4,0.5l-3.97,3.3l-2.47,-0.52l-1.06,0.61l-0.17,1.4l2.3,2.09l0.7,0.27l2.5,-0.14l1.17,0.57l-0.52,0.85l-1.21,0.63l-1.38,0.14l-0.87,-0.73l-0.66,-0.14l-0.64,0.34l-0.43,0.83l0.19,3.95l0.98,1.17l0.6,2.21l0.72,1.01l-0.37,1.38l-0.01,2.02l-1.86,0.34l-2.66,1.26l-0.98,0.85l-1.36,0.17l-2.94,1.25l-0.44,1.12l0.24,2.28l1.08,1.72l-0.69,1.24l-1.5,0.35l-0.49,0.63l0.39,1.13l1.62,2.41l0.55,0.29l5.43,-1.52l3.48,0.09l1.05,-0.57l1.48,0.8l2.63,-0.9l0.24,0.98l-1.57,1.06l-3.99,1.1l-1.51,-0.44l-0.73,0.2l-2.61,2.26l-1.23,3.23l-2.07,0.72l-0.67,-0.54l-0.58,-0.03l-0.41,0.34l-0.93,2.34l-2.01,1.14l-0.89,-0.22l-0.84,0.23l-2.12,-1.04l-0.82,0.35l0.24,1.02l1.22,1.18l1.38,0.77l2.01,-0.03l1.03,1.36l1.56,0.58l2.32,2.59l0.99,2.76l0.19,3.31l-0.49,0.92l-2.42,2.07l-0.13,1.4l-0.42,0.84l-2.66,1.32l-1.84,0.02l-1.33,-1.63l-3.25,-1.89l-1.11,-1.53l-0.78,0.14l-0.93,1.49l-1.29,0.62l-0.04,0.76l1.28,0.48l0.25,1.12l0.99,0.4l0.28,1.19l-2.99,5.31l0.78,1.33l0.23,1.97l-0.49,1.57l0.17,0.94l-3.44,-0.35l-0.69,0.66l-0.27,1.36l-1.1,0.52l-0.38,-0.06l-0.01,-1.51l-0.72,-0.56l-1.37,-0.12l-0.43,0.32l-0.21,0.95l-0.95,0.04l-0.36,-1.68l2.24,-1.3l0.45,-0.95l-0.35,-0.68l-1.23,-0.09l0.08,-1.11l-0.81,-0.47l-2.07,1.39l-1.14,-0.0l-0.65,1.29l-1.14,-0.15l-0.55,0.41l-0.11,0.95l1.46,1.36l0.23,1.61l-1.88,0.66l-1.35,-0.06l-0.65,0.32l-1.02,-0.24l-1.45,0.83l0.73,-2.93l0.57,-1.06l-0.41,-0.59l0.18,-1.49l0.99,-2.09l0.98,-0.77l1.51,-0.17l0.65,-0.65l-0.08,-1.64l-0.77,-1.03l0.99,-1.77l-0.03,-2.84l0.62,-1.11l-0.07,-2.45l1.33,-1.05l-0.21,-0.59l-0.63,-0.42l-0.03,-1.1l-0.67,-0.08l-0.38,0.46l-0.11,-0.45l0.53,-1.02l-0.21,-0.61l-1.26,0.33l0.35,-1.15l-0.63,-0.76l1.16,-0.71l0.28,-0.98l-0.44,-0.43l-1.52,0.3l-0.45,-0.77l-1.18,-0.59l1.25,0.19l0.67,-0.14l0.43,-0.53l-1.08,-2.77l-0.57,-0.44l-1.51,0.57l-0.74,-0.19l0.11,-0.83l-0.45,-0.52l-0.52,-0.03l1.22,-0.68l-0.09,-0.44l-1.49,-0.75l-1.09,-0.93l-0.03,-0.45l-0.63,-0.3l-0.58,0.41l-0.15,-0.32l-0.44,-1.87l1.42,-0.28l0.28,-0.74l-0.56,-0.42l-1.68,0.12l1.8,-0.54l2.67,-1.74l0.35,0.25l0.59,-0.15l0.08,-1.13l-0.83,-0.39l-2.31,0.85l-1.68,1.13l0.77,-1.49l2.09,-1.65l2.56,-1.29l1.44,-1.98l1.44,0.24l2.03,-0.72l0.96,-0.67l4.65,-1.88l0.51,-0.51l0.13,-0.73l-0.86,-0.4l-3.05,1.6l-2.75,0.95l-2.09,-0.31l-1.84,0.69l-1.99,-0.44l-1.81,0.3l-1.83,-0.23l-2.19,0.51l-0.03,-0.91l0.75,-1.97l0.26,-2.24l0.6,-0.39l1.0,-2.09l0.74,-0.36l1.38,-0.01l0.52,-0.51l0.26,-0.88l0.74,-0.47l-0.31,-0.63l-1.03,0.01l-0.6,0.71l-2.18,0.28l-2.07,1.63l-0.98,-1.7l1.19,-5.61l0.93,-1.11l0.97,-0.45l1.83,0.91l0.97,-0.07l1.05,0.62l0.56,-0.08l1.83,-2.13l0.87,-0.16l1.4,0.83l0.95,-0.34l0.39,-1.48l-0.64,-1.05l-0.97,0.51l-1.22,-0.43l-0.84,0.08l-1.89,0.94l-2.79,-0.93l-1.08,0.05l-1.68,-0.54l-0.77,0.2l-1.65,1.38l-0.67,0.2l0.15,-0.47l-0.39,-0.52l-1.99,0.41l-0.25,-1.46l0.75,-0.74l0.1,-0.66l-0.41,-0.73l-0.48,-0.12l-1.3,0.92l-0.97,2.53l-1.14,-0.05l-0.41,-1.1l-0.83,-0.23l-1.09,0.05l-0.53,0.76l-1.33,-0.02l-0.2,0.66l0.68,0.67l1.07,0.28l0.85,-0.5l0.31,0.91l0.9,0.39l1.02,-0.03l0.24,1.05l-0.28,3.28l-1.38,1.94l-1.79,0.18l-0.67,0.89l-0.99,-0.87l-1.35,-0.09l-0.31,0.32l0.18,0.41l0.66,0.43l-0.97,-0.27l-0.45,0.17l0.18,0.63l-1.59,0.61l0.15,0.67l1.89,0.64l1.44,-0.1l0.69,0.88l-0.18,0.92l-1.97,-1.61l-0.75,-0.2l-0.45,0.23l-0.2,1.02l1.11,0.46l0.3,0.48l-2.34,-0.84l-0.76,0.39l0.16,2.39l0.61,0.07l0.52,0.59l1.44,-0.43l1.41,0.38l1.26,-0.46l0.97,1.2l0.7,1.57l0.66,0.39l0.82,0.02l0.65,0.95l0.03,0.91l-0.66,0.75l-1.0,3.65l-2.24,2.74l-0.51,1.07l-1.35,1.36l-0.58,2.43l0.41,1.27l-3.25,1.99l-2.05,0.24l-4.99,3.12l-1.45,0.04l-2.41,1.15l-1.67,1.19l0.07,-0.5l-1.13,0.05l-1.81,1.46l-0.9,1.36l-4.4,1.16l-5.39,2.64l-1.52,0.13l-0.92,0.73l-2.44,0.05l-0.65,0.93l-3.65,0.22l-0.99,-0.18l-0.85,-0.59l-1.16,0.23l-1.21,-0.86l-4.8,-1.96l-2.71,-1.5l-1.64,-1.54l-1.94,-0.78l-8.52,-7.09l-3.03,-3.95l-3.49,-3.74l-0.87,-1.33l-0.17,-0.96l-1.73,-1.02l-3.88,-4.04l-1.94,-1.14l-2.67,-3.2l-1.63,-1.0l-0.84,-1.01l-0.18,-1.89l-0.66,-0.19l-0.63,0.59l-0.54,-0.17l-4.18,-3.73l-1.45,-1.96l-1.46,-1.14l-1.7,-2.63l-1.65,-1.48l-1.47,-2.81l0.88,-3.29l0.5,-0.76l1.32,-0.83l-0.26,0.75l1.01,1.24l0.67,0.08l1.02,-0.44l0.83,0.17l0.94,-0.69l0.25,0.21l-1.03,2.68l0.24,0.84l1.52,1.23l2.4,-0.38l1.52,-0.7l0.65,-0.71l2.26,-0.04l1.51,-0.42l1.45,-1.37l0.19,-0.7l-0.34,-1.28l0.36,-0.06l0.3,2.26l1.88,0.7l0.59,-0.29l0.11,-0.39l0.69,-0.13l0.66,-0.9l0.59,0.21l0.46,-0.2l0.83,-2.0l1.53,1.64l0.7,-0.0l0.95,-1.43l1.58,-0.33l2.54,-2.09l2.6,-0.59l2.59,0.34l1.25,-0.49l4.5,-7.15l0.16,-1.52l1.55,-2.48l2.22,-1.93l1.09,0.04l0.73,-0.69l0.69,-1.43l0.07,-0.9l-0.87,-2.13l-1.25,-0.94l-2.24,1.56l-0.43,0.78l0.33,1.53l-0.31,2.26l-1.2,0.23l-0.53,-0.37l-0.68,0.08l-0.97,-0.5l-1.1,-1.31l-0.65,0.29l-0.22,1.03l-1.45,0.21l-0.85,-0.55l-0.06,-0.82l-0.53,0.16l-0.65,1.13l0.61,0.91l-1.78,0.22l-2.05,0.8l-5.13,1.18l-2.35,1.7l-1.17,1.86l-1.81,-0.42l-2.04,-0.02l-0.85,-0.55l-1.78,-0.11l-5.03,-1.67l-4.08,-0.59l-4.99,-3.19l-5.31,-2.24l-6.42,-4.41l-0.28,-0.83l-0.74,-0.31l-0.42,-0.6l0.49,-0.71l0.1,-0.83l-0.57,-0.36l-1.75,0.26l-0.15,-0.25l0.45,-0.89l1.3,-0.27l0.19,-0.55l-1.43,-1.28l-1.29,-0.24l-0.08,-0.55l0.78,-0.72l-0.27,-0.47l-1.15,-0.11l-0.95,0.55l-0.06,-1.22l-1.08,0.26l1.83,-2.32l-0.14,-0.36l-0.86,-0.1l-0.56,-0.78l-0.49,-0.1l-0.21,0.45l0.29,1.18l-0.41,0.11l-0.0,-3.49l2.18,0.23l0.39,-0.38l0.04,-0.61l-0.48,-0.5l1.61,-0.59l1.53,-1.82l1.55,-0.78l1.08,-1.78l1.61,-0.09l3.07,-2.0l-0.09,-0.69l-0.8,-0.19l-1.32,0.28l-1.37,1.12l-2.52,0.25l-0.62,0.52l-0.65,1.24l-5.16,2.14l-2.79,3.05l0.2,0.67l-0.49,0.4l-4.27,-0.24l-0.75,-0.44ZM141.04,481.24l-0.02,0.35l-0.14,0.07l0.03,-0.2l0.13,-0.22ZM139.1,480.22l0.01,0.97l-0.7,0.34l-0.26,-0.5l0.95,-0.81ZM28.19,437.73l0.34,-0.24l-0.1,0.14l-0.23,0.1Z", "name": "Gujarat"}, "IN-RJ": {"path": "M113.16,366.39l-0.79,-0.19l-0.82,-1.14l-3.88,0.61l-1.37,-0.78l-1.49,-0.21l-3.05,0.21l-1.75,1.08l-2.15,-0.45l-2.94,0.83l-2.75,-0.76l-1.27,-0.83l-0.91,-0.2l-1.55,-3.64l-2.68,-4.47l-2.06,-7.11l-3.54,-3.49l-0.79,-2.29l-1.64,-1.88l-0.21,-1.01l0.33,-6.6l-0.19,-1.6l-0.91,-1.04l-1.23,-0.24l-3.67,1.06l-3.52,0.09l-2.79,-0.74l-0.75,-0.92l-0.69,-1.91l-3.03,-3.12l-0.94,-1.52l-0.54,-1.56l0.29,-3.26l1.77,-3.12l0.63,-2.52l-0.28,-1.98l0.55,-1.87l-0.16,-5.57l-1.0,-1.17l-2.36,-0.91l-7.44,0.28l-1.19,-0.44l-3.46,-2.72l-4.77,-1.9l-0.82,-0.89l-0.21,-1.18l1.29,-7.93l0.8,-2.43l1.22,-2.0l8.35,-7.32l1.89,-2.92l2.65,-2.47l0.77,-1.08l2.56,-6.91l7.24,-6.53l3.37,-0.9l2.19,0.73l2.89,2.68l0.22,2.51l0.96,2.12l1.23,1.73l1.86,1.21l2.15,0.28l2.76,-0.58l7.27,-3.47l2.28,-0.75l5.18,-0.75l5.05,-0.01l9.45,-2.8l0.73,-1.01l0.37,-4.13l0.46,-1.13l2.41,-3.02l5.04,-4.28l1.5,-3.1l1.81,-6.71l0.69,-1.31l2.22,-2.6l16.76,-8.5l1.03,-0.96l1.04,-2.37l2.71,-3.73l5.61,-10.36l4.24,-13.14l5.55,-2.7l5.67,-1.24l1.25,-0.68l5.27,-4.38l0.01,1.53l-2.58,4.47l0.0,0.93l0.33,0.34l15.39,0.72l3.64,0.48l0.02,0.94l0.94,0.93l0.04,0.52l-2.13,1.4l-0.59,2.13l0.48,0.91l1.08,0.31l2.26,-0.71l0.48,-0.41l0.19,0.23l-0.67,2.55l-0.26,2.85l0.37,1.18l0.79,0.98l-0.07,1.22l-0.19,0.37l-1.73,0.3l-0.34,0.95l2.48,3.97l1.17,-0.0l0.51,-1.04l3.42,-0.01l1.87,-1.25l2.62,1.15l1.36,2.74l1.0,0.28l1.28,-0.27l0.65,1.25l0.71,0.48l2.28,-0.55l0.86,-0.67l1.03,0.64l1.26,-0.12l1.93,-1.4l-0.21,1.19l0.37,0.73l0.69,0.23l1.08,-0.74l0.54,1.48l-0.83,0.46l-0.2,0.49l0.54,1.33l0.0,1.06l1.94,2.91l1.92,0.98l-0.02,0.67l-0.77,0.56l-0.22,0.85l3.34,9.56l3.35,4.22l2.17,1.57l-0.14,0.74l0.33,0.67l1.41,0.08l2.09,0.88l2.08,1.93l2.08,2.67l1.58,2.67l-0.7,-0.71l-0.52,-0.07l-1.05,1.15l-1.53,0.73l-0.43,0.67l0.27,0.88l0.98,0.7l0.61,-0.02l0.86,-0.7l-1.13,1.37l-0.82,1.64l0.59,0.99l-0.48,0.39l-0.91,-0.04l-0.45,0.81l0.15,0.87l1.22,0.93l0.58,1.57l0.74,0.31l3.48,-0.31l1.76,1.41l1.39,-0.66l0.29,-1.0l-0.42,-1.48l-0.6,-0.68l-0.03,-1.56l-0.65,-2.07l0.15,-1.09l0.22,-0.27l1.06,0.2l1.09,-0.39l1.6,1.04l1.18,-0.25l0.39,-0.55l0.02,-0.94l-1.13,-0.83l0.85,-0.33l0.02,-0.98l0.68,0.29l2.29,-0.31l0.49,0.72l-0.59,-0.08l-0.38,0.31l0.06,0.73l0.66,0.56l-0.57,0.47l0.03,0.51l1.42,0.83l0.92,0.06l0.52,1.73l0.97,0.65l1.15,-1.04l2.04,-0.52l0.28,-0.58l-0.44,-1.85l3.39,-2.44l1.36,-1.92l1.01,-0.38l2.42,2.36l0.15,0.52l-0.65,2.79l0.52,2.35l0.19,3.84l-0.86,1.6l-0.46,2.44l0.4,1.04l-0.58,0.37l-0.03,0.84l0.72,0.56l2.1,-0.25l1.27,-1.76l2.05,-0.4l0.26,-0.81l-1.3,-0.89l0.24,-0.53l1.97,0.6l0.71,-0.1l0.6,-0.56l0.81,0.49l0.58,-0.41l0.82,0.59l0.81,-0.67l0.38,0.07l0.36,2.7l0.84,0.78l0.33,0.85l0.04,0.6l-0.52,1.02l0.73,0.91l0.01,1.61l2.3,3.01l0.95,2.22l1.87,0.74l1.89,1.31l1.14,0.19l0.15,1.49l0.75,1.73l0.61,0.61l-0.36,0.58l-1.2,0.7l-0.31,0.83l-2.57,0.82l-0.37,0.89l0.3,0.66l0.88,0.32l0.64,1.0l2.23,0.36l0.7,-0.5l0.87,1.25l-1.42,0.37l-6.42,3.0l-0.85,1.15l-0.02,2.84l0.73,0.32l0.77,-0.2l1.26,-1.79l1.15,0.07l4.09,-1.67l2.33,-1.65l2.98,0.47l0.85,0.51l1.05,-0.35l2.89,0.35l1.09,1.2l0.67,-0.29l0.09,-1.11l1.09,-0.08l1.28,-1.16l1.69,-0.04l2.02,0.57l-0.98,0.92l-1.12,0.42l-0.05,0.72l0.66,0.88l-0.85,0.24l-0.1,0.82l-1.0,-0.26l-0.95,0.2l-0.54,3.52l-0.93,0.02l-0.98,-0.46l-1.99,0.86l-1.51,0.22l-0.57,0.55l-0.21,0.79l-1.71,0.58l-0.26,0.53l0.27,0.69l-2.38,1.08l-0.92,1.0l-2.98,0.75l-3.21,2.22l-2.11,0.06l-0.56,0.59l-0.11,0.9l-2.76,0.32l-1.52,2.06l-2.32,1.81l-2.65,0.18l-0.91,0.72l-0.32,0.96l-1.97,0.47l-0.92,1.2l-1.56,1.0l-1.05,0.28l-0.68,1.19l-2.24,1.52l-0.52,1.68l-0.79,0.35l-0.93,1.01l-2.88,0.01l-0.79,1.22l-0.84,0.14l-1.36,1.03l-1.09,1.85l-0.12,1.68l-1.03,0.59l1.24,6.15l1.02,3.16l1.64,0.79l1.23,1.75l2.04,0.43l1.85,1.25l0.57,0.11l1.26,-0.41l1.39,0.2l1.84,1.04l0.77,-0.39l1.71,0.0l2.77,-1.21l2.19,0.5l1.34,-0.62l0.88,-1.95l0.69,-0.54l1.52,-0.36l0.69,0.22l0.38,0.55l-0.47,1.46l0.69,1.45l-0.15,1.82l1.16,1.77l-0.39,1.97l-1.43,1.01l-1.76,-0.7l-1.13,0.24l-1.06,-0.21l-3.5,1.17l-2.7,0.19l-4.12,1.59l-0.88,1.16l-0.03,0.67l0.99,2.1l0.11,1.21l-0.8,0.67l-1.8,0.4l-0.46,0.59l0.01,0.63l2.21,2.47l1.07,0.57l2.33,0.03l1.64,1.33l0.87,1.46l0.43,2.21l-0.59,0.95l-3.32,1.33l-0.31,-0.01l-0.09,-0.98l-0.76,-1.19l-1.72,-0.45l-0.99,0.55l0.19,7.02l0.56,1.52l1.87,2.64l-0.75,1.42l-2.66,0.44l-2.87,-1.98l-0.29,-0.38l0.59,-1.58l-0.65,-0.89l-1.49,0.26l-1.32,0.66l-0.62,0.81l-0.38,1.25l-0.93,0.27l-0.8,-1.35l-0.81,-0.46l-2.36,0.15l-2.37,-0.75l-2.62,0.03l-0.56,-0.65l-0.06,-1.39l-0.91,-0.21l-1.44,0.8l-0.41,0.77l-0.22,5.75l-0.91,1.03l-3.07,2.04l-0.18,0.86l0.58,0.69l-0.36,0.8l-2.54,1.42l-3.18,1.16l-1.39,-1.09l-0.78,0.05l-0.42,0.67l0.21,1.39l-0.75,1.99l-1.04,-0.67l-1.53,-0.23l-0.54,-1.73l-2.26,-1.43l-0.39,-0.57l-0.11,-1.38l0.73,-1.34l0.34,-0.08l2.56,1.5l0.99,-0.14l1.03,-0.78l1.53,0.76l2.78,-3.75l-0.19,-0.69l-1.38,-0.85l-0.38,-0.73l0.33,-1.04l1.14,-1.39l0.31,-1.44l-0.35,-1.02l-1.31,-0.83l-0.49,-2.5l0.29,-1.27l0.46,-0.6l2.12,0.79l0.87,-0.42l0.54,-0.87l-0.12,-3.35l-1.72,-2.18l-0.08,-1.9l-1.45,-1.82l-0.93,-0.39l-1.02,0.2l-2.12,1.19l-6.1,1.13l-1.71,-0.05l-2.46,-0.66l-2.71,0.12l-0.69,-0.28l-0.43,-0.95l1.0,-1.04l0.14,-0.7l-0.82,-1.9l1.39,1.33l1.73,0.45l2.43,-0.55l1.29,-1.43l-0.03,-0.57l-0.61,-0.38l-3.06,0.55l-1.27,-0.53l0.04,-0.32l1.57,0.36l0.71,-0.62l-0.09,-0.83l-0.78,-1.15l0.96,-1.84l-0.38,-0.68l-2.77,0.61l-2.39,-0.18l-0.87,0.22l-1.43,2.29l0.29,1.74l-0.19,0.81l-1.27,-0.2l-1.56,1.09l-2.66,-1.04l-1.24,-1.01l-1.28,-0.2l-0.46,0.24l-0.21,0.62l0.68,2.0l-0.19,1.6l0.21,0.59l3.12,0.55l1.1,-0.15l0.1,0.39l-0.55,2.44l-0.6,0.36l-1.68,0.1l-1.61,-1.83l-0.62,-1.83l-0.6,-0.15l-0.56,0.47l-0.19,2.47l0.42,1.11l-2.09,4.22l-0.12,0.98l0.53,0.75l3.35,1.05l0.25,0.61l-2.43,2.42l-0.39,1.79l-0.73,1.25l0.16,0.52l0.56,0.3l2.45,-0.12l1.2,0.69l0.89,3.8l2.05,2.4l-0.64,1.04l-1.18,3.43l-0.18,1.43l0.11,2.2l0.8,1.33l0.19,1.94l-2.53,4.99l-0.87,0.81l-5.89,2.59l-2.01,1.8l-1.52,2.59l0.02,1.08l0.6,0.72l2.45,0.79l1.39,0.05l1.5,1.36l-2.98,1.57l-1.93,0.47l-2.21,1.15l-2.7,-0.33l-1.68,0.98l-0.59,-0.97l-0.83,-0.47l-1.34,-2.19l-1.43,-0.75l-1.43,0.61l-0.48,-0.26l-0.72,-2.86l-2.18,-1.34l-2.15,-1.97l-0.91,-0.2l-0.73,0.85l-0.66,-0.04l-2.15,-2.97l-0.57,-0.34l-2.93,0.76l-1.14,-0.82l-1.17,0.04l0.32,-1.25l-0.46,-1.22l0.13,-1.76l-0.24,-0.9l-1.4,-1.24l-0.65,0.06l-1.41,1.07l0.32,-2.39l-0.31,-0.73l-1.75,-0.71l-1.19,-1.94l-1.47,-0.23l0.28,-3.15l1.47,-1.08l0.28,-0.53l-0.77,-1.97l-0.12,-1.42l-1.32,-2.1l-0.38,-0.24l-0.65,0.19l-1.13,1.93l-1.34,0.87l-0.98,-1.08l-0.62,-1.36l-2.63,-2.03l-0.7,-1.62l0.87,-2.35l0.88,-1.21l1.13,0.05l0.78,-0.31l0.62,-1.27l-0.18,-0.76l-0.43,-0.3l-1.27,0.38l-1.91,-0.74l0.23,-2.35l-0.43,-1.01l-1.21,-0.11l-2.26,0.63l-0.78,1.08l-0.46,2.35l-0.86,0.68l-0.6,0.06l-1.89,-0.53l-3.52,-0.4l-1.51,-2.29l-2.14,-0.65l-1.84,-1.02l-1.46,0.26l-0.78,2.15l-0.36,0.2l-0.92,-1.62l-0.24,-1.27l-1.85,-0.15l-0.62,-0.94l-1.53,-0.29l-0.97,-0.75l2.33,-0.44l0.22,-0.89l-0.68,-0.67l-4.54,0.35l-2.17,-0.71l-1.13,-1.44l-0.59,-0.29l-2.11,0.47l-1.51,1.18l-0.76,-0.09l-0.9,-0.81l-0.82,0.05l-0.91,0.64l-0.15,0.93ZM294.16,288.97l0.26,-0.35l0.11,-0.1l-0.05,0.3l-0.31,0.15ZM252.61,250.52l-0.88,-0.6l-0.15,-0.41l0.59,0.24l0.44,0.77Z", "name": "Rajasthan"}, "IN-MP": {"path": "M191.91,423.84l-0.52,-3.36l-0.53,-1.39l0.74,-0.61l0.77,-0.34l2.88,0.29l2.23,-1.16l1.99,-0.5l3.36,-1.88l-0.0,-0.75l-1.53,-1.53l-4.03,-0.93l-0.42,-0.88l1.39,-2.39l1.85,-1.66l5.83,-2.55l1.04,-0.94l1.49,-3.12l1.15,-1.64l0.11,-1.95l-0.24,-1.12l-0.77,-1.25l-0.08,-1.88l0.16,-1.29l1.86,-4.79l-2.14,-2.67l-0.45,-2.8l-0.59,-1.21l-1.63,-0.91l-2.47,0.1l0.66,-1.0l0.32,-1.64l1.74,-1.48l0.81,-1.32l-0.17,-0.87l-0.45,-0.45l-3.45,-1.11l-0.08,-0.37l2.2,-4.61l-0.4,-1.42l0.1,-1.99l0.36,1.48l0.95,0.81l0.7,1.18l0.53,0.26l1.56,-0.03l1.01,-0.34l0.72,-0.72l0.5,-2.94l-0.75,-0.84l-1.19,0.14l-2.6,-0.34l0.17,-1.7l-0.66,-1.97l0.84,0.14l1.09,0.93l2.15,1.06l1.16,0.09l1.62,-1.1l1.02,0.31l0.63,-0.38l0.36,-1.3l-0.29,-1.62l1.1,-1.75l2.84,0.09l2.19,-0.57l-0.84,1.67l0.9,1.76l-1.84,-0.24l-0.48,0.64l0.06,0.81l0.84,0.71l1.12,0.24l2.91,-0.55l-1.3,1.1l-1.61,0.23l-1.34,-0.35l-1.47,-1.38l-0.77,0.01l-0.33,0.88l0.81,1.84l-0.85,0.94l-0.32,0.92l0.8,1.39l1.08,0.43l2.69,-0.13l2.41,0.65l1.95,0.06l6.25,-1.16l2.89,-1.35l0.81,0.55l0.9,1.26l0.02,1.76l1.69,2.09l0.14,2.99l-0.72,0.67l-1.35,-0.77l-1.15,0.13l-0.74,0.98l-0.34,1.56l0.56,2.82l1.31,0.91l0.28,0.62l-0.23,1.1l-1.45,2.03l-0.07,0.88l0.25,0.76l1.62,1.36l-2.15,2.93l-1.36,-0.75l-1.75,0.95l-3.0,-1.53l-0.78,0.44l-0.86,1.74l0.13,1.58l0.39,0.76l2.43,1.6l0.49,1.72l0.33,0.26l1.63,0.23l0.86,0.6l0.71,0.05l0.53,-0.62l0.69,-1.91l-0.18,-1.56l1.04,0.97l0.88,0.15l3.38,-1.22l2.74,-1.55l0.62,-1.43l-0.58,-1.02l2.89,-1.87l1.22,-1.46l0.23,-5.8l1.25,-0.97l0.03,1.13l0.96,1.07l0.65,0.22l2.18,-0.18l2.45,0.76l2.27,-0.16l0.37,0.22l0.5,1.22l0.8,0.37l1.54,-0.47l0.94,-2.01l2.1,-0.79l-0.46,2.16l2.85,2.18l0.96,0.53l3.22,-0.59l1.09,-2.16l-2.28,-3.57l-0.43,-4.0l0.27,-1.37l-0.24,-1.82l1.59,0.28l0.46,1.83l1.11,0.44l3.72,-1.46l0.82,-0.85l0.14,-0.79l-0.48,-2.47l-1.05,-1.74l-1.9,-1.51l-2.48,-0.08l-0.78,-0.44l-1.9,-2.1l0.23,-0.33l1.92,-0.41l0.89,-0.95l-0.08,-1.74l-0.97,-2.28l0.51,-0.72l3.91,-1.51l2.67,-0.19l3.37,-1.16l1.06,0.21l0.95,-0.26l1.95,0.71l1.88,-1.18l0.37,-0.58l0.33,-2.13l-1.25,-2.17l0.23,-1.44l-0.69,-1.42l0.48,-1.43l-0.97,-1.29l-1.87,-0.11l-1.6,0.8l-0.94,1.95l-0.61,0.55l-2.56,-0.43l-2.91,1.24l-1.6,-0.03l-0.73,0.39l-1.59,-1.02l-1.63,-0.22l-1.33,0.41l-1.98,-1.3l-1.68,-0.23l-1.39,-1.83l-1.51,-0.67l-0.88,-2.84l-1.3,-5.49l1.02,-0.67l0.31,-2.18l0.62,-1.04l1.1,-0.9l1.23,-0.38l0.55,-1.06l2.42,0.18l0.59,-0.28l0.95,-1.02l0.89,-0.44l0.58,-1.75l2.19,-1.47l0.56,-1.08l0.9,-0.2l1.61,-1.02l0.91,-1.21l2.0,-0.48l0.62,-1.26l0.58,-0.41l2.55,-0.13l2.61,-2.01l1.39,-1.95l2.46,-0.14l0.69,-0.61l0.16,-0.98l2.14,-0.08l3.22,-2.23l3.09,-0.81l0.88,-0.97l2.69,-1.32l-0.1,-1.03l1.58,-0.6l0.61,-1.23l1.4,-0.18l1.79,-0.82l1.11,0.48l1.32,-0.23l0.74,-2.26l-0.13,-1.3l1.54,0.32l0.58,-0.57l0.06,-0.52l1.15,-0.19l1.1,0.21l1.15,-1.25l2.21,0.06l0.6,0.87l1.21,0.11l1.07,1.0l1.77,0.32l1.5,0.84l1.12,-0.0l0.65,-0.6l1.15,0.01l1.42,-0.73l0.31,0.53l0.62,0.09l0.33,-0.27l0.47,0.74l0.85,0.09l2.08,1.98l1.97,-0.15l0.92,3.46l2.47,4.19l0.31,1.69l-0.36,1.13l0.63,0.93l-1.09,1.53l-1.67,0.49l-0.96,0.95l-0.03,1.06l0.54,0.96l-0.96,0.59l-0.16,1.24l1.03,1.32l-1.17,1.84l-1.04,2.8l-1.41,1.74l-0.79,2.01l-2.15,1.79l-0.42,1.83l0.82,2.19l-0.08,0.67l-0.87,0.47l-3.09,0.63l-2.0,1.1l-2.01,-0.16l-3.47,0.83l-0.72,0.75l-0.3,1.66l-0.43,0.6l-2.48,2.28l0.14,1.03l1.3,1.67l2.05,4.43l-1.1,3.43l0.3,1.25l-0.41,1.16l-1.97,1.91l-2.39,1.59l-0.5,1.2l1.73,2.46l0.18,1.91l0.95,1.42l-0.09,1.58l0.4,0.6l-0.05,0.55l-1.41,2.68l0.63,1.3l0.81,0.48l0.33,0.83l2.13,1.35l-0.66,2.0l1.03,1.4l1.2,0.28l1.31,-0.64l0.68,-0.76l0.44,-1.78l0.54,-0.38l1.29,0.66l3.7,3.07l1.13,0.44l1.71,0.11l0.29,1.21l0.51,0.5l1.39,0.24l2.0,-1.84l1.09,-2.43l1.6,-1.48l0.61,-1.1l0.21,-1.63l-0.77,-0.66l-1.18,-0.2l0.18,-1.5l-0.89,-1.24l-0.76,-1.86l-1.56,-0.8l-2.6,0.54l-0.4,-0.6l-0.1,-0.69l0.64,-1.42l-0.4,-4.14l-2.32,-3.07l-0.93,-5.45l-1.38,-3.44l-1.82,-1.91l0.46,-1.11l1.51,-1.78l-0.04,-0.98l0.34,-0.29l1.63,0.2l1.78,1.89l1.0,-0.11l0.24,-0.64l-0.22,-1.03l0.54,-1.16l-0.8,-1.21l0.38,-1.0l1.02,-0.28l0.21,2.56l0.28,0.42l0.67,0.24l1.06,-0.34l0.39,-0.55l0.01,-2.04l0.8,-1.02l0.43,0.73l-0.35,2.05l0.5,0.45l1.11,-0.0l-0.13,1.21l-0.65,1.35l0.06,1.31l-1.51,1.2l-0.74,1.59l0.05,1.24l0.86,0.77l1.08,-0.45l0.92,-1.08l1.46,-0.63l0.23,-1.37l0.95,0.5l-1.07,1.61l0.14,0.88l0.53,0.5l2.51,-0.66l0.27,1.38l0.64,0.34l0.66,-0.28l0.8,-0.96l3.2,0.58l0.73,-0.83l-0.57,-2.42l0.54,0.56l0.59,0.1l1.28,-1.19l1.03,0.15l0.67,-0.35l-1.84,2.96l-0.99,1.04l-0.22,2.1l0.69,0.76l1.57,0.06l0.34,-0.27l0.21,-2.05l0.73,0.13l0.64,1.13l0.95,-0.04l2.13,-2.35l2.82,0.98l3.59,-0.24l0.55,0.59l0.71,0.2l2.3,-1.07l-0.01,-0.76l-0.98,-1.46l0.31,-0.53l1.98,-0.41l3.08,-2.33l2.01,-0.92l1.31,0.28l1.46,-1.05l0.73,-1.06l0.9,0.24l1.34,-0.26l0.81,1.27l0.36,2.78l1.13,0.71l0.62,0.83l0.69,-0.02l0.56,1.65l-1.97,1.05l-1.44,1.71l-0.96,-0.01l-0.34,0.31l0.1,1.75l0.99,1.21l1.85,-0.32l1.64,0.37l0.55,-0.44l0.02,-0.69l0.89,0.96l1.03,-0.11l1.14,-0.73l0.14,-0.7l-1.44,-0.98l-0.23,-0.67l1.41,0.35l0.98,-0.14l0.49,-0.56l-0.02,-0.89l0.91,1.49l1.19,1.06l2.66,-0.26l0.57,-0.45l-0.02,-0.8l-1.53,-1.17l2.9,-0.26l0.82,-1.55l0.76,-0.22l0.37,0.5l-0.88,2.05l-0.17,1.21l-0.87,0.88l-0.27,1.12l-0.71,0.9l-0.01,0.88l0.65,0.49l1.01,0.13l2.85,-0.5l1.42,1.01l1.82,-0.42l2.77,1.85l0.48,-0.11l0.95,-1.14l1.13,-0.17l0.55,-0.44l-0.19,-1.79l1.86,-2.5l0.21,-1.01l-0.21,-1.35l1.88,-0.09l1.44,0.45l0.14,1.38l1.85,0.38l1.28,-0.26l0.5,-0.44l-0.0,-0.94l-0.92,-0.68l2.58,-0.76l1.08,2.35l-0.2,0.73l0.3,0.56l2.82,0.72l1.28,-0.01l0.48,1.09l0.94,0.37l1.83,-0.48l0.75,0.19l0.86,1.37l-0.24,1.06l0.26,0.65l2.72,2.08l2.45,0.41l2.82,1.69l0.96,-0.18l1.48,-1.0l-0.13,2.39l0.86,0.49l0.92,-0.62l0.09,1.92l0.52,0.37l0.8,-0.12l0.35,0.24l-0.59,1.47l0.13,0.65l3.0,0.17l0.76,-0.21l0.66,-0.93l-0.07,-1.74l4.89,1.07l3.33,-1.1l0.09,1.22l0.4,0.33l1.39,0.15l0.54,1.49l0.68,0.8l-0.36,0.47l-1.52,-0.19l-0.64,0.68l0.2,2.3l-0.31,2.05l0.32,0.63l0.66,0.4l0.01,2.03l-0.73,1.7l-0.24,1.96l-0.48,0.42l-0.99,0.18l-0.36,0.6l0.51,1.13l1.45,1.26l-0.08,1.5l1.94,2.08l-0.51,1.73l-3.3,1.36l-0.49,0.55l-0.31,1.33l-2.3,1.07l-1.01,0.87l-0.88,0.08l-7.25,-0.43l-1.86,-0.49l-3.75,-0.02l-2.21,-1.13l-2.21,-0.16l-3.22,1.48l-0.71,0.02l-1.74,-0.88l-1.97,-1.98l-1.49,-0.09l-0.93,0.68l0.04,1.82l1.74,3.3l0.13,0.87l-0.82,1.16l-1.16,0.74l-0.2,1.29l-0.68,0.92l1.15,2.78l0.98,0.35l3.34,-1.97l2.94,1.13l2.03,0.35l1.91,3.02l1.05,0.45l0.42,0.74l2.45,-0.02l2.02,1.71l-0.93,5.0l-0.6,1.3l-1.71,-0.05l-4.13,2.09l-0.4,0.98l0.22,2.14l-2.16,1.95l-2.51,1.09l-0.4,1.44l0.25,2.13l-0.72,1.02l0.15,1.54l-2.9,1.71l-0.81,1.84l-3.11,0.97l-3.42,2.57l-1.2,-1.63l-0.76,-0.29l-2.59,0.93l-1.23,0.78l-0.33,-0.11l-0.37,-0.87l-0.55,-0.26l-1.18,0.75l-1.36,2.21l-0.12,3.42l-0.63,1.08l-2.01,1.52l-0.47,2.63l-0.86,0.45l-0.09,0.55l0.46,1.25l-1.05,-1.17l-0.71,-0.26l-0.67,0.17l-1.14,1.39l-1.27,2.61l-0.33,1.02l0.08,3.35l-0.46,1.29l-0.84,1.13l-1.17,0.26l-0.81,1.51l-0.42,4.31l0.2,2.79l-0.79,3.1l-0.5,1.32l-1.2,0.7l-4.35,-2.38l-2.47,0.26l0.66,-1.14l-0.53,-1.51l-2.06,-1.52l-0.86,-1.78l-1.97,-0.57l-1.82,-1.32l-2.9,1.1l-0.95,1.06l-2.08,0.67l-1.29,-0.44l-1.59,0.81l-1.72,0.26l-1.05,-1.58l-1.84,-0.51l-3.21,0.31l-2.72,1.46l-0.66,-2.26l-1.15,-0.86l-0.48,-0.84l-1.97,-0.81l-2.96,-0.11l-2.32,-0.77l-0.87,0.22l-0.62,1.76l-4.01,1.3l-2.67,0.31l-2.03,0.7l-0.54,0.74l0.27,1.26l-0.51,0.33l-6.33,1.11l-4.0,-0.66l-1.57,-1.01l-0.97,-0.01l-1.3,0.64l-0.55,-3.04l-0.83,-0.67l-1.23,-0.09l-0.76,0.24l-0.93,1.06l-3.57,1.12l-1.56,1.75l-1.72,1.11l-5.31,1.96l-1.03,0.07l-2.53,-0.84l-2.73,1.48l-0.66,-0.51l-1.65,-0.17l-1.51,0.48l-1.41,-1.01l-0.7,0.0l-0.39,0.34l-1.68,-3.06l0.14,-0.72l3.36,0.16l0.93,-0.48l-0.89,-5.48l-1.4,-0.87l-0.32,-0.69l-0.8,-0.52l-4.42,-0.24l-0.78,0.24l-0.86,0.87l-1.11,0.34l-0.85,0.92l-1.1,-0.81l-2.12,0.08l-2.74,1.01l-3.44,2.43l-2.09,0.11l-1.09,0.46l-0.85,1.04l-0.3,2.63l-1.62,2.5l-2.88,2.12l-0.14,0.51l0.61,1.53l0.02,1.19l-0.72,1.14l-3.85,0.87l-1.98,2.37l-1.61,0.61l-2.78,0.38l-2.94,-0.34l-1.16,-0.59l-1.08,-1.5l0.86,-0.25l0.29,-0.6l-0.36,-2.94l-1.17,-2.7l-0.64,-0.52l-1.32,0.08l-2.71,-0.81l-2.23,-0.27l-2.14,0.52l-3.25,0.17l-2.54,-0.23l-3.15,0.44l-6.44,-0.32l-3.07,-0.67l-2.27,-1.01l-1.93,-3.14l-1.84,-1.33l-1.81,-0.18l-1.57,-0.99l-1.27,-0.25l-4.77,0.17l-1.46,-1.1l-2.02,-0.68l-2.12,-1.56l-0.9,-2.61l0.18,-3.47l-0.27,-1.11l-2.52,-2.68l-1.03,0.05l-1.18,1.1l-1.83,0.63l-0.3,0.75l-0.91,0.4l-1.79,0.03l-1.41,-0.68l0.36,-3.59l-0.75,-1.1l-0.65,-2.31l-0.92,-1.03l-0.2,-3.47l0.42,-0.63l1.49,0.91l2.06,-0.4l1.35,-0.99l0.42,-1.19l-0.17,-0.49l-0.87,-0.58l-3.69,-0.2l-2.05,-1.99l0.61,-0.64l1.89,0.55l1.15,-0.22l3.77,-3.23l1.72,-0.16l1.38,-0.98l2.78,-5.33l0.07,-0.76l-1.19,-1.96l-0.93,-0.37l-0.9,0.29ZM342.94,345.9l-0.07,-0.47l0.06,-0.58l0.99,-1.54l-0.98,2.59Z", "name": "Madhya Pradesh"}, "IN-OR": {"path": "M408.6,584.62l0.87,0.38l0.7,-0.57l0.17,-1.23l0.78,-1.54l0.14,-2.48l0.72,-1.11l0.53,-2.11l-0.29,-1.58l0.84,-1.84l0.76,0.02l2.17,-0.82l1.07,-1.24l1.83,-0.69l1.82,-2.82l4.8,-4.17l-0.13,-1.22l-1.17,-0.95l0.98,-0.36l1.48,-1.56l2.18,-0.42l1.07,-1.66l0.73,0.55l0.81,-0.24l0.83,-3.98l0.54,-0.67l1.08,-0.58l0.29,-0.71l-0.1,-2.84l-0.74,-1.34l-0.25,-1.24l-0.98,-0.82l0.26,-1.36l-0.7,-1.85l0.8,-2.84l-0.22,-0.61l-0.86,-0.66l0.89,-0.73l0.05,-0.95l-0.72,-0.89l-1.26,-0.42l-0.99,-1.74l-1.27,-0.51l0.35,-3.73l-0.41,-1.94l0.27,-2.32l-0.75,-0.79l-1.7,-0.38l-0.94,-1.68l-2.97,-1.76l-0.47,-0.78l0.14,-0.74l1.38,-2.44l0.97,-0.56l1.15,-1.25l1.66,1.78l0.44,1.11l1.07,-0.03l0.97,-1.34l1.85,1.55l0.52,0.87l1.61,0.18l2.16,4.28l0.64,0.59l0.76,-0.22l1.26,-1.7l3.32,0.37l1.51,0.69l1.33,0.07l-0.14,2.05l0.48,0.54l0.74,-0.1l3.64,-2.46l0.2,-0.83l-0.84,-1.09l0.5,-2.36l-0.44,-1.37l-1.49,-0.16l-1.2,0.53l-1.26,-1.05l-2.25,-0.06l-2.22,-1.3l0.69,-3.13l-0.27,-3.86l-0.48,-1.12l0.27,-3.95l-0.1,-0.42l-0.55,-0.27l-0.35,0.21l-0.3,-1.32l-0.82,-0.26l-0.35,-0.87l0.85,-4.04l-0.72,-2.56l-0.04,-3.65l0.23,-0.22l0.93,0.25l0.06,0.91l0.5,0.38l1.85,-0.78l1.59,-2.19l1.54,-1.08l2.51,-4.8l0.2,-1.41l2.78,-0.21l1.21,0.48l1.08,-0.43l4.28,-0.65l3.13,1.97l2.46,-0.12l1.12,-0.71l0.83,-1.15l0.91,-2.52l0.94,-1.38l-0.0,-1.07l0.48,-0.85l2.25,0.71l0.98,-0.23l0.33,-0.74l-0.12,-1.25l-1.59,-1.85l-0.16,-1.47l0.71,-2.42l3.3,-5.53l0.24,-1.66l1.26,0.23l0.4,-1.1l0.9,-0.08l0.47,-0.83l0.2,-2.45l-1.77,-1.6l0.22,-1.51l1.57,-1.15l-0.05,-0.68l-0.65,-1.0l2.18,-3.06l2.99,-1.33l3.65,-3.0l2.69,-0.52l0.96,-0.56l1.06,-1.28l0.29,-0.96l-0.2,-1.52l-0.66,-1.22l2.36,1.1l2.44,3.59l1.03,0.81l1.71,0.29l2.63,1.1l3.55,-0.27l2.45,-1.4l0.45,-1.5l6.57,-0.18l2.05,-0.74l3.38,0.91l1.21,-0.78l1.34,-0.23l2.05,-1.36l0.86,2.95l0.13,1.93l-0.32,1.19l-1.6,2.32l-1.72,3.41l0.2,0.71l0.42,0.13l1.79,-0.54l1.28,0.22l4.01,2.74l3.34,-3.21l2.5,-1.08l0.99,-0.02l3.14,1.77l3.92,1.01l2.38,-0.82l1.13,-0.8l-0.69,1.35l0.07,1.78l0.31,0.54l1.81,0.87l1.44,-0.37l1.24,-0.87l1.91,-2.83l0.46,-2.86l-0.71,-2.31l0.76,-1.24l0.11,-1.23l-0.34,-2.49l-1.3,-1.91l-0.08,-0.67l1.7,-0.51l0.76,-0.96l0.5,-0.16l1.56,1.77l5.7,2.91l2.44,2.6l1.27,0.35l2.8,-0.49l5.68,3.71l0.66,0.99l1.88,0.67l2.06,1.47l1.92,0.22l2.3,1.14l0.67,0.67l0.2,0.8l-0.24,2.33l1.32,1.8l1.16,0.01l1.78,-2.16l0.87,0.07l1.39,0.85l0.72,2.92l0.74,1.0l5.27,1.5l0.12,2.57l1.25,2.13l-3.71,1.5l-4.33,0.33l-2.84,1.48l-1.58,1.12l-4.5,4.76l-1.65,2.44l-0.94,2.78l0.21,2.98l3.72,8.83l-0.15,0.33l-2.19,0.13l-0.26,0.6l0.52,0.68l0.66,0.26l2.2,0.07l0.33,0.76l-0.94,-0.18l-0.86,0.63l0.29,0.63l1.57,0.73l-2.3,1.0l-5.38,4.36l-0.87,1.94l-0.14,2.13l0.59,0.38l1.32,-0.93l0.32,0.19l-0.66,0.93l-2.07,1.29l-0.17,0.9l-1.96,1.18l-3.56,1.2l-0.62,0.5l-0.99,3.01l-2.18,2.22l0.07,0.88l-3.15,-2.37l-2.09,-0.05l-0.98,-0.98l-0.43,-1.27l-0.55,-0.22l-0.38,0.27l-0.24,0.91l0.53,1.5l1.8,1.31l2.24,0.53l0.58,1.03l1.33,0.59l-2.46,1.35l-5.48,2.09l-1.05,-0.38l-0.74,0.47l-5.64,1.45l-1.8,0.97l-1.66,0.07l-2.84,1.15l-0.84,-0.01l-2.11,1.23l-2.56,0.82l-0.12,-0.91l1.47,-0.48l0.08,0.59l0.46,0.02l1.85,-1.08l0.04,-4.51l-0.63,-0.57l-2.59,-0.65l-1.42,0.22l-3.64,3.22l-1.69,0.52l-2.08,2.43l0.02,0.78l-1.97,2.76l0.13,1.11l-0.98,0.61l-0.34,0.66l0.22,0.87l0.6,0.2l-0.13,0.36l0.47,0.55l0.96,-0.7l0.74,-0.13l-3.75,3.53l-6.09,4.87l-2.33,2.95l-0.87,-1.1l-2.14,-0.04l-0.56,0.34l0.14,1.16l-0.34,0.71l-0.9,-0.27l-2.35,1.12l-1.26,1.04l-1.69,0.08l-0.26,0.34l0.17,0.89l-0.33,0.72l0.05,0.87l-1.0,1.23l-1.18,0.2l-0.74,1.7l-1.32,1.09l-4.68,0.75l-2.81,-1.03l-5.13,0.38l-1.2,-1.49l-1.61,-4.45l-1.01,-0.54l-1.01,0.18l-0.5,0.86l0.2,1.32l-0.8,-2.26l-2.99,-3.94l-0.88,0.3l-0.51,1.45l-1.24,0.87l-0.57,1.24l-0.56,-1.57l-1.12,-0.44l-0.41,0.64l0.3,1.21l-0.52,0.7l0.12,0.82l-3.07,-1.25l-1.04,0.21l-0.61,0.54l-0.01,0.6l0.92,1.68l0.72,0.88l0.72,0.22l0.53,0.86l-1.83,0.9l-2.19,1.79l-1.56,0.69l-1.43,-0.77l-1.03,0.31l-3.19,3.91l-0.17,2.09l0.81,1.42l1.02,0.22l-1.53,2.04l0.32,1.52l-0.23,0.78l-0.89,0.07l-1.43,0.66l-1.31,0.07l-0.23,-0.16l0.01,-1.09l-0.37,-0.38l-2.06,-0.8l-0.93,0.12l-0.62,0.52l0.12,1.64l-0.33,0.6l-3.15,1.78l-0.71,1.76l-1.31,-0.43l0.47,-2.32l-0.48,-0.89l-2.17,-2.19l-0.29,-2.87l-2.46,-0.5l-2.38,3.46l-0.09,1.68l-0.5,1.42l0.29,1.04l-1.51,2.72l0.14,0.92l1.34,1.18l-0.86,0.75l0.1,2.0l-1.65,0.16l-0.93,1.4l-1.59,-0.19l-1.48,-1.2l-1.32,-0.39l-1.7,0.2l-1.56,1.08l-2.27,0.35l-3.0,1.96l-2.65,1.29l-1.11,1.17l-1.46,0.31l-2.23,1.63l-1.94,-0.89l-0.68,0.23l-0.52,1.0l-2.17,-0.55l0.13,-1.87ZM525.81,532.38l-0.05,-0.65l0.8,-0.25l0.04,-0.71l-0.49,-0.28l1.13,-1.12l-0.4,-0.64l0.3,-0.48l1.49,0.43l1.55,-1.12l1.08,-0.07l0.05,0.45l-1.37,1.35l-0.86,-0.66l-0.66,0.66l-0.63,0.11l0.75,1.39l-2.7,1.6Z", "name": "Orissa"}, "IN-TN": {"path": "M249.84,785.28l-0.33,-0.95l0.1,-1.86l1.6,0.49l1.48,-0.2l1.11,-1.27l1.32,-0.6l0.3,-1.05l1.07,-0.88l1.68,0.16l0.34,0.48l0.05,1.28l0.84,0.64l5.71,-0.26l2.06,0.51l0.81,-0.69l0.4,-2.03l2.08,-2.99l2.57,-0.44l2.02,1.94l0.79,0.31l0.61,-0.27l0.51,-1.19l2.74,-0.17l1.14,-0.44l2.26,1.02l2.41,-0.26l1.0,-0.81l1.68,-3.48l0.65,-0.34l3.83,-0.43l1.03,-0.61l3.07,-4.27l0.07,-0.85l-1.01,-1.75l-1.33,-0.89l-1.06,-0.22l-5.49,-0.07l-0.44,-1.25l2.84,-2.25l1.44,-2.2l0.47,-2.63l-0.45,-0.65l-0.84,0.03l0.12,-0.69l-0.38,-1.02l1.14,-3.22l2.33,-0.11l2.46,-1.36l-0.16,-1.26l1.0,-1.73l0.33,-1.31l1.11,-0.38l1.66,-0.0l1.7,1.66l1.0,0.45l0.79,-0.3l0.66,-1.11l0.44,0.08l2.35,1.72l2.91,0.96l1.35,1.89l2.47,1.79l2.53,0.3l0.89,-0.42l1.33,-1.4l0.29,-1.48l0.98,0.03l1.45,-1.18l1.06,-2.6l1.03,-4.37l0.4,-0.53l1.29,-0.38l0.6,-0.96l3.87,-0.67l0.65,1.17l0.79,0.15l0.91,-0.67l0.3,-1.05l0.55,-0.02l0.97,0.23l0.51,0.92l2.1,0.65l2.72,-0.3l0.76,-0.54l2.09,-2.71l1.31,0.59l0.57,-0.08l2.15,-2.17l1.18,-0.62l0.42,-0.71l-0.07,-0.91l0.47,-1.75l0.53,-0.28l1.75,0.15l1.06,1.37l0.63,0.35l2.87,-0.38l0.18,1.3l1.04,0.76l2.31,-0.02l0.42,-0.96l-1.05,-0.98l-0.01,-0.36l1.61,0.07l4.38,-2.25l0.44,-0.72l0.05,-1.3l2.65,-1.83l-0.01,-0.75l-0.67,-0.64l1.64,0.69l-0.38,1.1l0.47,0.56l3.19,0.35l1.48,-0.39l1.4,1.36l0.73,-0.21l0.37,2.77l-0.32,2.03l-0.47,0.24l-0.18,1.0l0.58,0.53l-0.78,1.59l0.16,1.33l-0.83,1.23l-1.04,9.49l-2.92,8.93l-1.83,3.47l-1.09,0.85l-1.06,1.81l-2.53,1.85l0.16,0.59l0.84,0.04l-3.55,5.53l-0.05,1.49l-0.3,0.47l-1.72,1.18l-0.44,-0.37l0.52,-1.02l-0.5,-0.57l-1.34,0.11l-1.1,-0.87l-0.45,0.2l-0.56,0.93l0.7,1.08l0.11,0.84l0.4,0.31l-0.32,1.19l0.17,0.58l1.13,0.75l2.01,0.21l-0.67,1.5l-1.05,6.13l1.05,4.71l0.4,0.35l0.61,-0.29l0.1,0.95l-2.0,0.22l-2.44,2.58l0.36,0.58l0.4,-0.05l2.7,-2.02l1.33,0.48l0.06,2.28l0.62,3.2l-0.18,5.1l-0.92,-0.09l-0.81,0.43l-1.49,-0.42l-0.49,0.56l0.19,0.5l-0.54,-0.02l-0.42,0.61l0.15,1.36l1.28,0.83l1.44,0.41l0.03,0.97l1.52,1.03l0.49,13.03l-0.26,2.66l-1.42,0.34l-0.31,-0.79l-0.71,-0.39l-3.95,-0.65l-0.57,0.16l-0.15,-0.37l-0.92,-0.24l-1.62,0.14l-0.37,0.6l-1.79,0.33l-2.01,-0.48l-3.57,2.3l-0.57,0.81l-0.07,0.98l-0.83,0.53l-0.21,0.7l0.26,2.63l0.76,1.39l-2.05,1.82l-1.8,2.46l-1.51,2.81l-1.66,1.67l-1.79,2.49l-0.15,0.98l-1.21,1.73l-0.77,3.4l0.09,0.95l0.61,1.22l3.32,3.21l1.25,0.55l2.2,0.29l-1.72,0.32l-1.86,-0.59l-2.21,-0.03l-1.0,0.68l-2.02,0.14l-2.57,0.91l-1.52,0.99l-1.66,0.14l-1.25,1.21l-5.65,0.86l-2.39,1.3l-4.3,3.53l-1.8,2.81l-0.65,3.87l0.32,0.48l-1.12,2.25l-0.31,0.0l-0.34,0.62l0.79,1.81l-0.42,3.13l-1.41,1.59l-0.66,2.01l-1.71,0.61l-5.96,3.6l-1.22,1.49l-5.3,1.31l-1.05,0.76l-0.09,0.97l-1.21,0.15l-1.8,-0.34l-4.2,-1.29l-0.71,-0.71l-1.86,-0.93l-2.94,-2.68l1.1,-0.45l0.27,-1.46l1.29,-1.9l-0.16,-1.64l1.05,-0.34l1.18,-1.84l-0.4,-1.16l-2.42,-2.44l-0.23,-1.72l1.65,-2.45l0.62,-2.26l-0.4,-0.73l-1.24,-0.88l-1.07,-2.96l1.19,-0.85l0.75,-1.07l2.53,-7.34l0.84,-1.38l0.92,-2.56l1.1,-1.19l-0.19,-1.38l-1.73,-2.54l-1.26,-0.19l-1.8,0.71l-1.71,-0.93l1.56,-5.5l-0.33,-2.9l1.03,-2.56l-1.11,-3.46l1.54,-3.34l0.06,-1.34l-0.72,-0.72l-0.37,-1.59l-0.96,-1.63l-0.72,-0.66l-1.08,0.13l-2.94,1.32l-3.15,2.41l-1.14,-0.38l-2.36,-2.12l-0.06,-1.8l-0.9,-1.93l0.55,-3.53l-0.17,-2.56l1.09,-0.6l0.57,-0.74l0.43,-3.33l-0.23,-0.65l-0.94,-0.6l-0.87,-1.77l-3.86,-1.64l-0.66,-0.88l-0.13,-0.87l0.37,-1.13l1.9,0.19l0.65,-0.91l-0.74,-0.92l-0.83,-2.15l-0.87,-0.98l0.45,-1.93l-0.71,-0.36l-1.63,0.94l-2.99,0.25l-1.41,-0.46l-1.27,0.3l0.6,-1.1l2.2,-1.72l0.28,-0.77l-0.18,-0.49l-0.71,-0.39l-1.01,-1.28l-1.19,-0.47l-1.21,-0.95l-4.71,-1.32l-0.24,-0.32ZM341.41,854.52l0.89,-0.01l1.99,-1.02l0.32,0.12l-0.32,0.93l0.54,1.1l-1.22,-0.66l-2.2,-0.45ZM352.97,822.23l0.25,0.38l-0.78,-0.16l0.52,-0.21ZM353.99,822.77l0.71,0.09l0.49,0.17l-1.19,-0.25Z", "name": "Tamil Nadu"}, "IN-AN": {"path": "M786.03,923.93l0.01,-2.47l0.71,-1.66l1.1,-0.13l0.59,-0.57l1.24,-0.26l1.04,-0.8l0.96,0.7l0.57,1.41l0.32,2.29l1.27,2.41l0.03,1.46l-1.11,2.56l-0.1,1.29l0.41,0.66l-1.31,0.13l-0.67,1.5l0.01,-1.41l-0.81,-0.89l0.05,-0.68l-0.44,-0.46l-0.29,-1.55l-0.7,-0.41l-0.89,-2.01l-1.06,-0.91l-0.92,-0.2ZM785.02,916.8l-0.54,-1.41l0.47,-1.37l1.32,-0.39l0.58,-0.69l0.93,0.88l-0.04,0.59l-2.72,2.39ZM782.63,894.17l0.29,0.95l-0.0,0.53l-1.15,-1.01l0.86,-0.47ZM780.5,891.72l-0.4,-0.52l-0.31,-1.96l1.06,-1.6l0.69,-0.13l0.06,0.48l-0.79,1.64l0.65,1.74l-0.29,-0.16l-0.66,0.5ZM781.79,892.53l-0.6,0.48l-0.41,0.67l-0.01,-0.52l1.02,-0.63ZM777.4,894.02l0.09,1.05l1.22,0.8l0.7,1.14l-0.03,0.45l-0.93,-0.4l-1.7,0.32l-0.12,-1.23l-1.17,-0.29l0.37,-1.49l1.57,-0.36ZM770.19,887.29l-1.18,-0.38l-0.98,-1.26l-0.11,-1.42l0.4,-0.73l0.16,2.27l0.42,0.72l1.29,0.81ZM768.4,766.2l-0.53,-0.93l0.37,-1.58l0.2,0.17l-0.27,1.01l0.23,1.33ZM751.49,774.12l0.88,-1.81l1.07,1.76l0.79,-0.06l0.11,-0.27l0.28,-2.36l-0.24,-1.3l0.63,-1.54l-0.05,-3.07l0.91,-2.0l0.45,0.12l0.42,-0.38l-0.13,0.98l0.73,0.48l1.83,-0.55l0.47,-0.81l-0.31,-1.49l-0.55,-0.41l0.77,-0.26l0.05,-0.92l-0.62,-0.6l-1.27,-0.21l-0.37,-1.1l0.12,-7.3l0.85,-1.29l0.61,-0.06l0.41,-0.65l-0.14,-0.45l-0.94,-0.64l-0.3,-3.47l0.61,-0.75l0.78,-0.04l0.52,-0.68l0.41,-1.58l0.01,-1.58l0.64,-1.33l-0.17,-0.58l-0.62,-0.37l0.62,-2.2l0.77,-1.37l-0.52,-0.97l0.18,-1.42l0.66,-0.54l-0.55,-3.24l1.34,-1.74l0.16,-1.78l1.42,-1.61l0.17,-1.04l1.5,0.01l0.36,-0.57l0.61,-0.13l0.39,0.69l-0.32,1.01l0.14,3.07l0.36,0.22l-0.97,1.23l-0.37,0.19l-0.32,-0.4l-0.65,-0.09l-0.59,0.8l0.51,1.08l1.25,0.22l1.33,1.3l-0.64,1.07l-0.13,2.9l-0.46,2.09l-0.32,0.53l-0.73,-0.2l-0.43,0.42l0.01,-1.38l-0.39,-0.32l-1.19,0.78l-0.29,1.52l0.64,1.07l-0.98,-0.16l-0.37,0.28l-0.91,2.21l0.36,0.65l0.53,0.22l0.74,-0.35l1.04,1.19l0.14,1.72l-0.24,0.98l0.95,1.63l-0.54,2.9l0.5,1.29l0.04,2.05l-1.01,1.21l0.24,0.65l-0.74,0.57l-0.86,-0.65l-0.46,0.06l-0.03,0.59l-1.15,-0.04l-0.43,0.4l0.65,1.8l1.06,0.71l0.12,0.47l-0.83,0.84l0.68,1.2l-0.59,0.69l0.3,1.14l-1.88,2.04l0.04,0.7l-0.77,0.79l-1.34,0.41l-0.13,0.54l0.54,0.76l-1.11,1.91l-0.1,3.33l0.4,0.4l0.63,-0.35l0.24,-1.5l0.24,-0.04l0.31,0.28l0.02,1.58l-1.11,4.78l-1.06,0.35l-1.07,1.13l-0.28,0.88l0.14,1.02l1.12,0.1l0.35,-0.4l0.06,-0.84l0.63,-0.36l0.09,-0.39l0.16,1.37l-0.54,0.66l-0.51,2.56l-1.5,-1.08l-0.07,-0.68l-0.92,-0.79l-0.1,-0.4l0.72,-0.38l0.02,-0.66l-0.9,-0.46l-0.4,-1.88l-0.33,-0.31l-0.95,-0.05l0.1,-3.11l-1.16,-0.79ZM766.4,766.0l0.11,0.62l0.39,0.73l-0.4,-0.42l-0.1,-0.93ZM766.14,717.57l0.26,-0.08l0.11,0.23l-0.14,-0.04l-0.24,-0.1ZM764.5,769.92l0.71,-0.98l0.67,-0.02l1.15,3.22l-0.42,-0.93l-2.11,-1.29ZM758.46,855.43l1.65,1.52l-0.05,1.49l-0.73,0.79l-1.73,-0.53l-0.46,-1.12l-0.04,-0.78l0.91,-0.49l0.44,-0.89ZM756.86,735.74l-0.0,-0.0l0.0,0.0l-0.0,0.0ZM756.0,743.21l0.29,-3.46l0.53,-0.59l0.3,0.45l-0.2,2.01l-0.92,1.58ZM754.65,789.3l-1.08,-0.41l0.1,-0.42l0.79,-0.21l0.37,-0.63l-0.25,-1.63l0.26,-0.56l1.0,1.26l-0.55,1.24l0.54,0.89l-1.17,0.46ZM746.83,808.06l1.1,-0.64l0.47,-1.64l1.46,-0.96l1.09,-0.24l0.89,1.13l0.95,5.03l-1.65,1.72l-0.03,1.18l0.75,0.47l-1.33,1.68l-0.74,-0.18l-1.27,-0.94l-0.69,-0.03l-0.86,0.53l0.62,-0.89l0.47,-1.76l-0.28,-0.78l-0.88,-0.81l-0.09,-2.85ZM751.89,783.09l0.03,-0.27l0.15,0.08l-0.18,0.2ZM742.26,782.71l0.82,0.26l-0.03,0.97l-0.62,-0.14l-0.17,-1.09Z", "name": "Andaman and Nicobar"}, "IN-AP": {"path": "M264.69,675.87l0.59,-0.76l0.07,-1.39l0.36,-0.6l2.8,1.59l2.62,0.61l1.43,-0.37l0.97,0.82l0.73,-0.01l1.54,-1.37l1.31,-2.8l0.15,-1.56l-0.84,-4.18l-0.77,-0.9l-1.69,-0.61l-0.35,-2.03l-1.24,-2.4l0.68,0.17l0.39,-0.54l-0.25,-3.31l0.26,-0.71l0.58,-0.39l1.35,0.21l0.43,-0.69l-1.06,-2.44l-0.71,-0.66l0.22,-3.36l1.07,-1.31l2.59,-1.37l1.85,-0.28l2.42,0.6l4.32,0.13l1.56,-1.78l-0.11,-5.3l0.29,-2.68l1.74,-1.65l0.23,-0.94l-0.19,-0.53l-0.65,-0.77l-1.33,-0.57l-3.05,-0.09l-2.95,-0.77l-0.81,-0.99l3.28,-2.1l0.59,-1.33l1.2,-0.69l0.63,-1.85l-0.17,-0.57l-0.53,-0.26l0.62,-0.61l0.01,-0.5l-1.05,-1.21l0.15,-1.25l0.6,-1.07l0.04,-4.5l0.99,-2.39l-1.06,-2.3l-0.29,-1.52l-1.7,-0.89l0.14,-1.28l3.71,-4.76l0.84,-1.7l1.36,-0.46l0.8,-1.28l1.71,-0.45l1.19,-2.36l-0.1,-0.48l-0.75,-0.34l-2.14,0.93l-0.19,-0.69l-0.45,-0.3l-2.59,0.04l-2.16,-1.31l1.48,-2.39l1.78,-0.93l0.36,-0.49l-0.05,-1.04l-0.88,-1.04l0.17,-0.39l3.37,-2.8l0.33,-0.72l-0.5,-2.65l-1.6,-2.0l1.29,-0.9l-0.29,-2.04l-0.67,-1.77l0.45,-1.86l-0.92,-0.71l0.14,-0.69l-0.41,-0.76l-1.22,-0.85l1.13,-1.1l0.45,-2.51l1.0,-1.27l2.52,-0.58l0.7,-0.58l0.49,-1.38l0.0,-1.97l0.53,-0.34l1.61,-0.16l1.72,-3.28l2.15,-0.78l0.23,-0.36l-0.34,-1.09l-1.84,-1.47l-0.22,-1.32l-0.91,-0.24l-0.46,-1.07l-0.79,-0.01l-0.36,-1.59l2.55,-2.32l-0.08,-1.17l0.67,-2.12l1.1,-1.47l-0.09,-0.62l-0.52,-0.3l1.17,-0.67l1.93,0.21l0.99,1.37l0.94,0.51l3.82,0.06l0.7,-0.84l-0.2,-2.94l1.1,-2.01l0.66,-0.49l1.6,-0.35l0.53,-0.52l0.29,-3.48l0.9,-2.06l1.51,-1.08l0.48,-1.2l-0.25,-0.8l-1.04,-0.7l-1.01,-2.43l-0.11,-1.01l1.12,0.56l0.9,1.36l2.14,0.86l1.88,-0.79l1.03,0.35l1.4,-0.06l2.99,1.32l2.05,-0.07l1.73,1.25l1.07,2.89l1.36,0.62l0.25,0.68l1.79,1.04l1.99,-0.29l0.95,-1.2l1.14,-0.51l2.17,-0.33l0.97,0.36l0.92,1.25l3.18,0.53l1.67,1.34l4.21,0.15l0.63,0.59l0.8,0.23l0.8,-0.43l0.38,-1.24l0.6,-0.33l2.94,-1.04l1.61,0.26l2.07,2.63l1.96,0.76l0.99,1.71l-0.24,3.47l-0.86,1.68l0.37,2.75l-1.36,0.99l-1.06,2.07l0.34,1.38l2.14,0.09l0.69,3.21l-0.02,1.49l-0.09,0.45l-1.23,1.17l-0.02,0.58l2.7,1.38l1.76,1.5l0.97,1.3l2.69,0.3l2.3,-0.25l1.3,-0.53l0.65,2.12l1.01,1.62l0.57,0.07l0.54,-0.54l0.85,0.72l2.42,-0.54l2.78,1.95l3.43,4.07l2.24,4.82l0.1,0.39l-1.3,0.98l0.21,1.46l0.85,0.41l1.52,-0.16l0.8,-1.46l0.32,0.3l0.19,1.39l0.64,0.71l2.5,-0.43l-0.56,1.11l-0.13,1.27l1.26,3.31l0.2,3.88l0.99,1.96l0.73,0.43l0.68,-0.01l3.28,-1.92l2.72,1.08l4.53,-0.1l2.71,0.61l0.54,-0.36l0.41,-0.86l2.25,0.87l2.32,-1.68l1.53,-0.34l1.16,-1.21l2.62,-1.27l2.95,-1.92l2.16,-0.31l1.52,-1.07l1.35,-0.19l1.09,0.31l1.49,1.22l2.48,0.09l0.83,-1.36l1.55,-0.1l0.49,-0.61l-0.17,-1.85l0.74,-0.51l0.17,-0.52l-1.52,-1.91l1.52,-2.75l-0.28,-1.1l0.48,-1.33l0.06,-1.57l1.95,-3.0l1.51,0.29l0.18,2.62l2.61,2.97l-0.52,1.6l0.12,0.91l0.46,0.47l1.33,0.37l0.44,0.03l0.56,-0.48l0.51,-1.52l3.2,-1.82l0.51,-1.01l0.02,-1.54l0.74,0.0l1.56,0.66l0.07,1.24l0.76,0.46l1.63,-0.08l1.47,-0.67l0.98,-0.1l0.56,-0.58l0.14,-0.85l-0.35,-1.36l1.58,-2.2l-0.21,-0.73l-1.06,-0.17l-0.66,-1.2l0.16,-1.29l2.94,-3.66l0.7,-0.12l0.81,0.62l0.73,0.08l1.77,-0.8l2.21,-1.8l1.98,-1.03l0.06,-1.12l-0.63,-0.87l-0.79,-0.25l-1.37,-2.23l0.86,-0.26l3.12,1.32l0.82,-0.81l-0.07,-0.7l0.43,-0.9l-0.25,-0.94l0.63,1.68l0.95,0.15l0.99,-1.63l1.13,-0.74l0.49,-1.38l2.55,3.51l0.75,2.17l0.48,0.59l0.48,0.05l0.47,-0.47l-0.04,-1.94l0.98,0.08l1.57,4.35l1.49,1.81l3.28,0.09l2.2,-0.35l2.93,1.04l5.54,-1.07l1.09,-1.13l0.62,-1.56l0.98,-0.06l1.31,-1.51l0.42,-1.9l-0.15,-0.67l1.43,-0.02l1.38,-1.1l2.15,-1.02l0.56,0.31l0.53,-0.11l0.65,-0.92l-0.09,-1.22l0.85,-0.03l-0.54,1.48l0.68,1.11l0.49,0.03l-0.47,1.04l-2.23,3.0l-1.15,0.57l-2.77,4.48l-2.82,2.96l-0.73,1.38l-1.6,1.1l-1.15,1.5l-1.5,0.86l-1.27,0.17l-0.2,0.99l0.68,0.39l-3.6,3.35l-1.01,2.48l-0.96,0.74l-9.31,4.2l-5.02,3.04l-1.05,0.92l-0.79,1.44l-2.3,1.96l-0.27,-0.36l-0.72,0.17l0.02,1.59l-0.64,0.52l-0.41,1.5l-2.25,2.68l-1.09,0.75l-0.71,-0.8l-1.21,0.21l0.09,1.05l1.36,0.64l-1.18,0.69l-0.95,-0.02l-0.33,0.64l0.63,0.87l-4.38,1.88l-5.68,3.7l-0.6,-0.27l-1.36,0.9l-3.72,1.43l-7.5,4.53l-1.63,2.1l-1.66,1.0l-2.23,2.57l-1.51,3.41l0.08,1.5l0.46,0.72l1.58,0.79l1.39,-0.02l-0.85,4.85l-0.72,1.56l-0.34,-0.21l-0.64,0.36l0.4,1.35l-1.04,0.36l-1.68,1.64l-3.44,1.81l-1.69,0.26l-1.26,1.15l-1.04,0.04l-0.51,0.6l-2.47,0.43l-3.09,1.68l-1.37,0.3l-1.56,-0.75l-2.35,-0.2l-0.15,-0.58l-0.72,-0.39l-0.52,-0.02l-0.33,0.68l-1.09,-0.27l-1.67,0.39l-0.14,-0.58l-0.74,-0.5l-1.17,0.41l-1.79,0.07l-1.92,1.15l-0.53,0.79l0.21,1.29l-0.76,0.97l-2.28,6.46l-0.11,1.95l-3.74,2.84l-0.92,1.13l-0.06,0.8l0.57,1.13l-2.57,-2.06l0.0,-4.01l-0.39,-1.55l-0.36,-0.29l-0.5,0.52l-0.41,-0.01l-0.14,0.47l0.47,1.18l-0.03,2.41l-1.75,4.39l-0.16,-2.66l-0.88,-1.48l-0.76,-0.46l-2.81,-0.47l-0.67,0.59l-1.07,0.05l-1.2,0.52l-0.67,-0.32l-3.79,2.32l-1.37,0.39l-3.56,3.09l-2.52,5.95l0.09,0.92l-2.32,3.04l-1.15,2.69l-0.28,3.27l-0.91,3.59l0.05,2.53l1.66,9.47l0.36,0.68l1.24,1.01l0.53,1.67l-0.88,0.68l-0.09,0.67l0.52,0.29l0.92,-0.16l-0.53,2.8l-0.02,3.74l-1.28,2.53l-1.34,0.32l-1.03,0.97l-0.28,0.8l0.6,0.58l0.7,-0.18l1.35,-1.13l-0.31,1.02l0.08,1.41l0.74,3.85l3.06,7.11l-0.1,1.25l-0.75,1.85l0.88,2.52l-2.65,-3.71l-0.68,0.29l-0.0,1.53l-1.2,-0.83l-0.32,1.26l-1.21,1.55l0.16,0.9l1.44,1.97l-1.28,-0.67l-0.81,0.14l-0.23,0.82l0.76,0.9l-1.54,0.67l-0.98,0.96l-0.37,0.8l-0.0,1.1l-4.14,2.13l-1.51,-0.11l-0.43,0.24l-0.2,1.13l0.99,1.03l-1.6,-0.04l-0.56,-0.31l-0.13,-1.26l-0.58,-0.5l-2.98,0.35l-1.45,-1.63l-2.26,-0.23l-1.14,0.77l-0.55,3.0l-1.21,0.66l-1.92,2.04l-0.89,-0.53l-1.16,0.1l-2.64,3.15l-2.32,0.28l-1.86,-0.57l-0.43,-0.86l-1.41,-0.39l-1.2,0.29l-0.34,1.11l-0.43,0.35l-0.49,-0.96l-0.74,-0.38l-4.19,0.72l-0.84,1.11l-1.18,0.3l-0.67,0.81l-1.1,4.55l-0.94,2.36l-1.21,0.96l-0.58,-0.31l-0.63,0.22l-0.3,1.75l-1.22,1.28l-1.26,0.29l-1.25,-0.27l-2.28,-1.65l-1.18,-1.67l0.49,-1.04l-0.22,-1.64l1.12,0.41l1.29,-0.57l0.58,-0.55l0.25,-1.16l2.34,1.53l1.22,-0.06l0.18,-0.61l-0.23,-0.64l-0.55,-0.73l-0.93,-0.53l1.23,-1.78l0.45,-1.4l1.33,-1.04l0.36,-1.9l1.04,-1.54l0.39,-2.6l-0.23,-1.04l-0.44,-0.45l-1.33,0.66l-1.64,-1.13l-1.52,-0.39l-0.68,0.28l-0.85,-1.4l0.29,-1.11l0.25,-5.76l-2.41,-0.54l-1.07,0.43l-1.06,-0.1l-1.4,-0.36l-1.79,-1.79l-1.64,0.09l-0.25,-0.55l1.04,0.02l0.45,-0.71l-0.69,-1.44l0.46,-1.37l-0.59,-2.04l-2.02,-1.06l-0.89,0.52l-1.23,-0.07l-0.99,0.93l-0.07,-0.92l0.96,-1.22l-0.02,-1.23l-0.48,-0.53l-1.02,0.4l-0.82,1.05l-0.97,-0.53l-1.68,-0.25l-0.5,0.21l-0.53,0.99l0.57,1.25l-1.57,1.32l-1.31,0.57l-0.59,1.23l-0.75,-0.55l-1.23,0.19l-0.52,0.4l-0.14,0.76l-1.03,0.09l-1.67,1.05l-1.15,0.02l-0.52,-2.73l-1.41,-1.75l-2.98,-0.12l-1.04,-0.57l-1.02,-0.01l-0.97,-0.78l-0.94,0.37l-0.52,-0.92l-0.7,0.21l-0.38,1.14l-0.84,0.61l0.15,0.54l0.66,0.48l0.16,1.57l-1.79,-0.15l-0.65,0.76l-1.27,-1.08l-0.39,0.07l-0.3,0.59l-0.17,-1.78l1.47,-2.02l0.17,-0.7l-2.33,-3.22l0.13,-1.79l-2.1,-2.47l1.13,-0.73l1.21,0.58l0.81,3.14l2.72,1.07l0.99,0.93l2.32,-0.02l1.96,-0.48l1.11,0.29l1.12,2.0l0.1,1.09l2.11,0.75l0.59,-0.3l0.14,-0.59l-0.49,-1.0l0.03,-1.08l-0.98,-0.86l-0.78,-1.6l0.98,-1.6l-0.1,-0.47l-0.56,-0.36l0.9,-0.86l2.24,-0.25l0.65,-0.42l0.16,-0.69l-0.4,-1.48l0.3,-1.18l-0.34,-0.55l-1.16,-0.23l-0.64,-0.92l-1.06,-0.27l-0.62,0.36l-0.25,0.64l0.8,2.01l-1.15,-1.29l-1.73,-0.59l-0.11,-0.7l-0.49,-0.42l-2.21,0.23l-1.61,-0.55l-0.95,0.55l-0.84,1.16l-0.27,1.81l-4.51,-0.75l0.44,-1.18l-1.73,-1.24l-0.23,-1.08l0.27,-0.48l1.22,-0.27l0.76,-1.39l-0.09,-0.76l-0.92,-0.84l-1.56,-0.07l-0.81,0.33l-1.0,-1.83l-1.09,-0.58l-0.47,-1.96l0.82,-2.71l-0.07,-1.53l0.79,-0.32l0.34,-0.53l0.68,-4.44l-0.77,-0.97l-2.24,-0.88ZM433.84,620.88l0.17,-0.38l-0.47,-0.55l-1.43,0.9l-0.23,0.47l0.64,0.66l2.25,0.65l0.99,-0.27l0.73,-1.0l-0.06,-0.69l-0.49,-0.46l-0.91,0.66l-1.19,0.01ZM368.9,723.15l3.01,0.37l0.36,0.27l-3.63,-0.13l0.26,-0.51ZM392.61,649.39l1.24,0.72l1.36,1.23l-0.92,0.46l-0.54,-0.32l-1.33,-1.56l0.2,-0.53Z", "name": "Andhra Pradesh"}, "IN-TR": {"path": "M717.67,412.64l-0.65,-0.93l-0.85,-0.54l-0.68,0.03l-0.65,0.63l-0.23,2.44l0.57,2.74l-0.06,0.54l-0.45,-0.12l-0.61,-0.81l-0.37,-1.24l-1.03,-5.9l0.59,-1.13l-0.93,-0.66l-0.88,-2.95l-1.06,-0.99l-1.73,-4.15l0.05,-0.4l0.82,-0.19l0.29,-0.86l-0.43,-0.72l-0.77,-0.33l-0.07,-0.39l0.16,-0.36l1.69,-0.62l0.97,-2.38l-0.28,-2.65l1.62,-2.42l1.36,0.06l0.65,-0.3l0.79,-3.37l4.46,0.5l2.13,-0.37l1.01,-1.0l0.52,-2.43l0.74,1.43l1.5,0.46l1.08,-0.84l-0.14,-2.07l1.8,0.37l0.24,1.14l1.12,1.01l0.62,0.15l0.7,-0.29l1.07,-3.6l-0.23,-2.31l1.73,0.78l0.54,-0.4l-0.61,-1.47l3.03,0.1l1.08,-0.51l0.67,-0.99l0.07,-3.38l0.92,-0.64l2.0,1.31l0.19,1.75l0.72,1.63l-0.16,1.4l-1.03,2.69l0.62,0.74l1.84,0.3l0.73,1.3l0.1,2.73l-0.33,2.19l0.42,1.35l-0.55,1.87l0.21,2.41l-0.73,0.03l-0.79,1.0l-0.32,1.9l0.2,1.67l-0.69,-0.15l-0.51,0.3l-0.6,1.69l-0.45,-1.43l-0.61,-0.91l-0.46,-0.16l-1.47,0.55l-1.5,1.91l-0.91,0.48l-2.28,-2.56l-1.1,0.12l-0.24,2.55l0.81,3.79l-0.04,1.12l-0.97,1.4l-2.69,1.48l-1.81,2.75l-0.6,1.79l1.57,5.86l-1.05,0.63l-0.6,1.26l-0.91,0.89l-1.59,0.51l-1.08,-0.01l-0.53,0.84l-0.37,-0.53l-1.18,-0.4l-0.36,-0.51l-0.1,-1.09l-0.43,-0.32l-1.19,-4.38l-0.54,-0.55l-0.07,-0.63l-0.43,-0.22Z", "name": "Tripura"}, "IN-AR": {"path": "M727.36,274.74l-0.62,-1.27l-2.25,-0.75l-1.77,-2.04l-0.63,-2.3l0.17,-1.09l1.38,-1.87l0.22,-1.28l3.95,-0.13l2.71,1.1l3.56,0.14l1.39,-0.61l1.72,-1.71l1.01,-0.5l3.83,-0.02l0.37,-0.53l-0.09,-1.07l1.06,2.04l0.62,0.37l0.5,-0.13l0.54,-0.87l0.59,0.49l0.55,-0.04l0.85,-1.64l0.39,0.72l0.65,0.34l3.1,-1.35l1.28,-1.18l1.97,-0.69l1.9,-1.8l0.51,-2.58l-0.5,-0.64l-1.47,-0.43l1.15,-1.82l2.62,-1.84l1.03,0.45l1.55,-0.52l1.69,-1.95l1.76,-0.71l1.24,-1.28l2.81,-1.91l1.46,-2.07l0.6,-2.32l1.84,-1.44l6.87,-4.3l3.12,-0.23l2.29,0.22l1.58,-0.99l0.71,0.3l0.81,-0.14l2.24,-1.87l3.52,-1.53l0.33,-1.17l1.78,-0.1l1.59,-0.97l3.25,-1.09l1.23,-1.08l2.5,-0.23l2.96,-3.02l0.01,-0.58l-2.19,-2.29l0.36,-1.16l1.48,-0.19l1.11,-1.53l0.6,-0.3l2.38,-0.12l1.39,-0.42l2.54,-3.14l0.72,-0.07l2.06,1.06l1.8,2.16l-0.17,1.17l0.66,0.67l2.54,-0.06l4.07,1.52l0.43,-0.15l-0.23,-0.8l1.58,0.39l2.15,1.1l2.51,0.45l0.72,1.13l1.93,0.3l0.45,-0.44l-0.2,-1.79l0.72,-0.57l1.81,-0.09l1.12,0.28l0.48,-0.28l0.36,-1.24l0.67,1.6l2.25,-0.39l0.22,-1.1l-0.31,-1.27l1.15,-0.39l0.21,-0.82l0.66,-0.09l1.65,0.69l2.17,0.34l0.42,-0.22l0.93,-1.86l-0.03,-2.09l1.15,-0.32l2.24,0.9l2.73,-1.16l5.47,-0.31l0.94,2.55l1.97,1.67l1.4,-0.02l2.08,-1.11l0.36,0.57l-1.13,2.01l-3.49,1.07l-0.63,0.41l-0.65,1.26l0.64,2.74l0.61,0.25l2.59,-1.66l1.71,-0.53l0.58,1.89l2.46,1.23l0.08,0.91l1.18,0.7l0.56,2.05l2.02,2.58l0.6,2.92l-2.74,2.04l-2.04,1.1l-0.15,0.56l0.83,1.34l-1.06,1.29l0.04,0.55l1.03,0.95l0.99,2.16l0.53,0.2l0.76,-0.58l0.45,-3.4l0.84,-1.52l1.46,-0.72l2.38,0.61l2.09,2.27l2.2,1.38l1.28,1.55l0.59,2.63l2.37,0.85l3.42,-1.46l0.92,0.23l2.0,1.66l0.8,0.21l0.66,1.15l2.77,1.85l0.1,0.6l-0.87,1.91l-0.18,1.48l0.49,0.95l1.42,1.47l0.17,0.72l-0.79,1.9l0.03,1.18l-0.7,0.34l-0.46,-0.84l-0.74,-0.19l-1.48,0.51l-2.77,2.73l-2.06,1.44l-0.27,0.83l-2.08,0.81l-1.02,1.26l-2.24,1.7l-0.77,1.39l-0.0,0.98l0.8,2.32l-0.35,1.45l0.18,0.76l6.72,8.57l0.2,1.05l0.81,0.73l-0.34,0.96l-1.06,-0.38l-1.09,0.3l-0.98,-0.87l-4.19,-1.87l-0.52,-0.42l0.5,-1.38l-0.22,-0.64l-1.04,-0.87l-1.45,-1.95l-2.32,-1.06l-1.15,0.12l-0.8,0.69l-2.05,-0.49l-1.22,1.56l-0.94,0.38l-3.16,-0.19l-8.17,1.35l-2.27,0.98l-1.97,1.39l-2.32,3.7l-1.42,1.63l-3.49,1.13l-2.36,3.2l-2.21,0.47l-1.16,1.96l-1.65,0.03l-1.5,0.46l-2.38,3.54l-4.38,1.68l-0.65,-2.41l0.28,-2.02l-1.15,-1.62l0.08,-0.57l0.86,-1.12l0.18,-1.79l-0.4,-1.17l-1.3,-0.89l0.03,-0.74l2.24,-0.17l3.03,-2.24l2.08,-0.89l1.32,-1.31l0.89,-2.35l1.07,-0.6l3.2,1.39l4.93,-1.84l2.11,-0.03l1.11,0.35l0.89,-1.03l1.04,-0.45l0.4,-0.9l1.19,-0.94l0.02,-1.73l-1.11,-1.43l-1.54,0.04l-1.04,1.08l-0.29,-1.15l0.49,-1.32l-0.31,-2.08l-0.56,-0.76l-2.03,-1.4l-0.74,-3.0l4.9,-6.49l1.13,-2.28l-0.47,-0.76l-7.92,0.07l-1.46,0.45l-3.93,2.51l-4.03,1.0l-1.16,-0.06l-2.12,-0.75l-1.82,1.0l-9.17,3.2l-4.61,2.27l-4.21,1.1l-4.11,2.12l-1.45,0.25l-0.95,-0.65l-2.82,0.73l-1.84,-0.68l-0.97,-1.0l-0.65,-0.12l-0.98,0.82l-0.31,0.87l1.19,1.68l-0.16,0.82l-7.98,6.54l-4.22,4.3l-0.72,1.32l0.11,2.07l-3.97,2.93l-1.86,0.72l-3.28,0.5l-1.4,0.62l-0.37,0.04l-1.8,-1.22l-0.99,-0.14l-10.87,1.18l-1.55,-0.38l-0.87,-1.17l-3.78,-1.66l-3.69,-0.53l-0.9,0.25l-2.12,1.63l-8.52,2.44l-1.58,0.13l-1.99,0.63l-3.48,-0.28l-1.08,-3.29l-1.55,-1.52l-0.32,-0.92l0.42,-2.0l0.73,-0.89l0.31,-1.23l1.41,-1.35l0.22,-0.83l-2.85,-5.27l-1.16,-0.97l-1.6,0.88l-1.97,0.08l-3.01,0.86Z", "name": "Arunachal Pradesh"}, "IN-KA": {"path": "M183.76,654.66l1.17,-1.76l1.58,-1.17l0.11,0.99l0.66,0.4l1.93,-0.14l1.67,-1.1l1.39,-2.47l-0.57,-1.14l2.3,-3.92l0.01,-1.78l-1.37,-0.64l0.65,-0.48l1.42,-0.09l0.56,-0.68l0.21,-3.0l-0.24,-1.26l-0.69,-0.68l-2.69,-1.26l-1.19,0.3l-0.47,-2.4l1.24,-0.28l0.35,-0.84l-1.1,-0.79l-0.36,-1.12l-1.04,-0.15l-0.39,-1.08l-0.95,0.09l0.31,-0.89l0.87,0.52l0.75,-0.34l0.34,-0.8l0.72,0.63l0.63,-0.14l1.85,-1.63l0.52,-1.51l2.28,0.61l0.64,1.97l0.55,0.41l0.87,-0.23l1.48,-1.21l1.3,-0.31l0.44,-0.89l-0.63,-0.9l0.68,-0.64l0.32,-1.0l0.9,-0.17l0.61,-0.68l1.67,-0.79l2.05,0.17l0.41,-0.88l-0.66,-2.45l2.16,-0.78l0.95,-0.97l0.35,-1.04l0.96,0.29l1.32,-0.24l0.43,0.85l1.57,1.28l1.74,0.56l2.56,-1.13l0.32,-1.76l2.11,-0.15l1.37,-0.65l1.59,-0.01l0.78,0.64l0.73,0.05l1.58,-0.66l0.84,-0.95l1.47,1.12l1.13,-0.06l0.56,-1.31l-0.58,-1.4l0.66,-0.66l0.08,-0.53l-1.28,-2.2l0.49,-2.65l-0.42,-1.11l-0.82,-0.58l-0.88,-2.78l0.83,-0.73l1.1,-1.81l0.67,0.2l0.76,1.43l1.88,0.29l1.02,1.25l0.74,0.0l1.18,-1.12l0.68,0.28l0.52,-0.31l0.52,1.7l1.37,1.03l2.4,-0.79l1.12,0.08l2.15,-1.02l1.3,0.35l1.64,-0.57l1.62,0.97l2.17,0.25l0.88,-0.29l0.98,-1.09l-0.17,-0.54l-0.94,-0.76l-0.84,-1.71l0.71,-1.31l-0.11,-1.65l-0.73,-1.08l2.27,-0.76l0.96,-1.31l1.3,-0.71l0.19,-1.02l0.84,-0.4l0.57,-0.91l0.9,0.33l1.1,-0.13l2.11,1.92l0.94,-0.21l0.83,-2.54l1.63,-1.28l-0.43,-2.03l2.59,0.52l1.11,-0.85l0.65,-1.76l0.44,-6.2l1.3,-0.6l1.67,0.06l2.75,-0.68l0.94,-1.82l3.43,-2.24l0.12,-2.6l0.97,-1.48l0.81,-0.16l0.82,0.6l0.26,2.57l2.49,1.24l0.14,0.8l0.46,0.46l1.07,-0.06l1.25,-0.96l1.87,0.57l-0.46,1.64l0.98,3.56l-0.97,0.35l-0.34,0.81l0.3,0.72l1.16,1.08l0.66,2.67l-1.93,2.03l-1.65,1.2l-0.31,0.97l0.86,1.02l0.13,0.63l-2.0,1.18l-1.66,3.11l0.54,0.74l2.14,1.1l2.63,0.05l0.62,0.92l2.4,-0.87l-0.85,1.7l-1.86,0.54l-0.68,1.22l-1.41,0.5l-0.93,1.81l-3.8,4.92l-0.3,1.05l0.18,0.89l1.75,0.99l0.21,1.34l1.01,2.06l-0.98,2.22l-0.04,4.51l-0.57,0.94l-0.19,1.47l0.2,0.87l0.84,0.59l-0.7,0.62l-0.29,0.74l0.33,0.43l0.72,-0.12l-0.46,1.4l-1.11,0.6l-0.57,1.31l-3.6,2.5l0.04,0.43l1.33,1.5l3.15,0.82l2.99,0.08l1.46,0.98l-0.05,0.65l-1.49,1.1l-0.35,0.85l-0.3,2.77l0.14,5.08l-0.92,1.2l-4.11,-0.1l-2.41,-0.6l-2.16,0.31l-2.83,1.49l-1.33,1.59l-0.27,3.92l0.26,0.61l0.54,0.3l0.92,1.92l-1.1,-0.21l-1.05,0.68l-0.44,1.23l0.31,2.89l-0.61,-0.36l-0.47,0.14l-0.26,0.54l1.49,3.11l0.45,2.23l2.35,1.26l0.79,5.01l-1.29,2.89l-1.27,1.08l-0.98,-0.83l-1.9,0.28l-2.26,-0.55l-2.7,-1.55l-0.83,0.05l-0.64,1.13l-0.05,1.31l-0.76,1.17l0.34,0.49l2.58,1.0l0.24,0.53l-0.67,3.87l-0.92,0.48l-0.24,0.51l0.09,1.46l-0.65,1.58l-0.11,1.87l0.53,1.82l1.15,0.65l1.13,1.95l2.75,-0.11l0.28,0.38l-0.58,1.33l-0.75,-0.03l-0.6,0.43l-0.33,1.18l0.67,1.5l1.34,0.7l-0.5,1.06l0.38,0.63l5.22,0.79l0.57,-0.66l0.04,-1.35l1.22,-1.48l1.49,0.54l2.05,-0.25l0.35,0.98l1.75,0.6l0.81,1.07l0.71,0.37l0.61,-0.09l0.42,-0.71l-0.87,-2.14l0.63,0.06l0.57,0.9l1.2,0.25l-0.29,1.29l0.4,1.46l-2.57,0.43l-1.69,1.64l0.17,0.52l0.77,0.22l-0.9,1.3l-0.01,0.61l0.89,1.82l0.88,0.68l-0.09,0.84l0.46,1.04l-1.36,-0.46l-0.12,-1.15l-1.33,-2.11l-1.58,-0.4l-2.02,0.49l-1.93,0.06l-0.86,-0.87l-2.53,-0.91l-0.68,-2.95l-0.45,-0.49l-1.65,-0.55l-1.55,0.95l-0.26,0.99l2.22,2.42l-0.16,1.73l2.27,3.02l-1.7,2.74l0.13,1.43l0.5,1.1l0.7,0.06l0.45,-0.65l1.18,0.94l0.5,-0.15l0.37,-0.63l1.31,0.24l0.78,-0.26l0.35,-1.0l-0.25,-1.5l-0.54,-0.55l0.64,-0.79l0.65,0.55l0.97,-0.55l0.77,0.74l1.09,0.02l1.04,0.57l2.88,0.1l1.0,1.31l0.76,3.18l1.76,0.02l1.87,-1.1l1.4,-0.17l0.29,-1.09l0.84,-0.13l0.54,0.58l0.75,-0.06l0.7,-1.41l1.23,-0.5l1.78,-1.55l0.13,-0.72l-0.57,-0.89l0.16,-0.39l1.51,0.14l1.31,0.55l0.69,-0.36l0.76,-1.03l-0.06,0.91l-0.96,1.22l0.45,1.84l0.61,0.04l1.08,-1.14l1.08,0.1l0.98,-0.51l1.13,0.68l0.47,1.62l-0.46,1.45l0.68,1.33l-0.98,-0.09l-0.43,0.33l-0.05,0.66l0.46,0.93l0.44,0.26l1.43,-0.19l1.73,1.76l1.63,0.44l1.35,0.11l0.84,-0.42l0.8,0.37l1.06,-0.13l-0.34,1.19l-0.06,3.99l-0.34,1.2l1.1,1.98l0.69,0.23l0.59,-0.29l1.3,0.36l1.75,1.15l1.21,-0.5l-0.05,2.1l-0.32,1.1l-0.91,1.18l-0.34,1.83l-1.24,0.9l-0.54,1.55l-1.32,2.03l0.1,0.59l1.12,0.65l0.48,0.78l-2.19,-1.45l-1.12,-0.16l-0.49,0.39l-0.35,1.35l-1.07,0.42l-1.03,-0.36l-0.62,0.37l0.11,2.05l-0.34,0.59l-2.6,-0.85l-2.48,-1.78l-0.99,-0.1l-1.2,1.37l-2.15,-1.97l-2.37,-0.1l-1.63,0.75l-0.34,1.39l-1.03,1.8l0.24,1.06l-2.02,1.05l-1.7,-0.11l-1.04,0.49l-1.29,3.66l0.38,1.14l-0.1,1.1l1.28,0.34l-0.45,2.16l-2.18,2.84l-1.81,1.11l-0.33,1.06l0.88,1.69l6.59,0.29l1.01,0.65l0.87,1.65l-3.17,4.34l-4.19,0.64l-1.02,0.5l-1.01,1.52l-0.85,2.18l-0.54,0.46l-2.0,0.25l-2.48,-1.04l-1.24,0.45l-2.9,0.22l-0.46,0.31l-0.39,1.08l-1.99,-1.91l-1.21,-0.41l-2.06,0.44l-0.92,0.51l-1.97,3.01l-0.52,2.22l-2.05,-0.47l-5.1,0.34l-0.7,-0.25l-0.01,-1.16l-0.76,-0.99l-1.01,-0.34l-1.28,0.14l-1.47,1.17l-0.23,-1.51l-0.53,-0.66l-2.29,-0.05l-1.56,-1.76l-1.37,-0.01l-1.51,-1.78l-0.98,-0.16l-1.05,0.26l-0.38,-0.58l0.08,-2.01l-0.53,-0.63l-0.84,-0.04l-2.77,1.07l-2.93,-0.54l-1.33,-0.58l-1.09,-1.2l-0.6,-1.99l-1.88,-0.3l-1.33,-0.81l-0.81,0.09l-0.76,-1.06l-2.07,-1.0l-3.42,-3.85l-1.12,-0.12l-0.54,-1.89l-0.87,-1.28l0.04,-0.64l0.75,-0.81l0.05,-0.7l-0.69,-0.48l-1.29,0.25l-1.68,-1.95l0.67,-1.64l-0.28,-0.5l-1.53,-0.38l-1.26,0.46l-0.83,-1.04l-1.18,0.1l-0.21,-1.49l-1.02,-0.68l-0.95,-0.16l-0.98,0.44l-0.22,-0.85l-1.23,-0.36l-0.55,-1.43l-0.97,-0.23l-1.59,0.31l-0.32,-0.91l0.99,-0.81l1.53,-0.55l0.39,-0.51l-0.4,-0.61l-3.41,0.56l-1.36,-5.58l0.26,-1.33l-0.35,-0.37l-0.6,-2.16l-1.04,-5.01l-0.74,-1.48l0.06,-0.6l0.43,-0.2l-0.18,-1.85l-0.72,-1.98l-0.17,-2.91l1.43,-0.43l0.51,-0.72l-0.79,-0.24l-0.74,-1.69l-0.59,-0.04l-0.59,0.82l-1.04,-4.59l-0.98,-2.21l-2.65,-3.83l0.0,-1.22l-0.63,-1.13l-0.24,-2.4l-1.15,-1.8l2.13,0.13l0.18,-0.69l-2.5,-1.07l-0.26,-0.37l-0.08,-1.26l-1.06,-3.28l0.48,0.02l0.27,-0.5l0.73,-0.16l-0.05,-0.45l-1.48,-1.63l-0.14,-0.62l-0.98,-0.84l-0.71,0.54l-0.06,1.03l-0.4,0.04l-0.22,-1.61l1.0,-0.33l0.35,-0.61l-0.72,-0.56l-1.25,0.35l-0.23,-0.18l0.24,-0.61l-0.84,-2.65l-1.14,-0.68l-0.83,0.38l-0.42,-0.63l-0.7,-0.13l-1.41,-0.99l0.54,-0.99l1.17,0.17l0.75,-0.99l1.08,0.02l0.47,-0.37l-0.08,-0.75l-1.37,-0.74l-2.36,1.62l-0.46,-0.72l1.61,-1.08l1.69,-0.19l1.18,-0.91l0.82,-2.53l-0.14,-2.48l0.94,-2.43l-0.25,-0.71l-1.34,-1.11l1.61,-0.57l0.34,-0.87l-0.21,-1.62l-1.2,-1.53l-0.04,-1.34l-0.58,-0.86l0.59,-1.77l-0.66,-3.34l-0.5,-0.59l-1.53,-0.72l-1.74,0.51l-0.43,-0.07l-0.12,-0.46Z", "name": "Karnataka"}, "IN-PB": {"path": "M176.07,176.63l0.49,-0.66l0.91,-0.18l0.37,-0.76l0.93,-0.37l1.98,-2.76l1.11,-0.3l0.6,-0.54l0.35,-2.73l1.22,-1.08l1.65,-0.66l0.97,-1.89l2.26,-2.34l-0.1,-1.02l1.19,-0.74l0.5,-1.77l2.56,-0.03l1.17,-1.73l2.45,-0.6l1.36,-1.41l0.49,-1.31l2.35,-1.33l0.12,-0.61l-1.4,-1.16l-2.43,0.02l-0.78,-1.72l0.77,-4.21l2.63,-5.48l-0.15,-0.82l-0.89,-1.3l-0.91,-3.26l-1.88,-3.18l1.28,-1.9l0.42,-1.8l3.6,-2.55l0.85,-1.45l1.71,0.33l1.05,-0.31l1.2,-2.56l1.09,0.37l0.83,-0.6l2.02,-0.13l1.02,-1.1l1.11,-0.02l0.36,-0.49l-0.14,-0.56l1.94,0.66l1.17,-0.5l1.03,0.2l0.93,-1.49l3.2,-0.92l0.63,-2.0l1.01,-1.12l0.35,-0.94l-0.27,-0.94l-1.12,-1.22l1.94,0.13l1.25,-0.69l0.47,1.04l1.62,0.83l0.46,-0.14l2.1,-2.45l1.07,-0.64l2.7,-0.39l1.07,-0.89l0.4,-1.14l1.66,-0.59l1.42,-1.04l1.5,2.65l-3.97,2.7l-1.59,1.66l-3.57,1.31l-0.33,1.08l0.28,1.2l0.7,0.45l0.63,-0.16l-0.52,1.03l-1.81,1.94l-0.05,0.85l0.87,0.49l3.03,0.5l5.38,2.71l2.54,4.11l-1.07,0.21l-0.18,1.25l4.53,8.24l2.34,7.11l1.09,1.36l0.75,0.46l1.42,-0.32l1.34,0.16l0.65,-1.28l0.84,-0.38l-0.02,-1.78l0.92,-0.36l2.27,4.24l0.98,-0.15l0.78,0.72l0.73,-0.2l0.39,0.92l0.53,0.22l0.69,-0.62l0.06,1.28l0.34,0.31l0.96,-0.04l-0.73,1.33l-0.03,1.58l0.68,0.74l-0.51,1.25l0.31,1.59l1.02,1.2l3.79,3.11l1.0,1.7l0.95,0.53l-0.41,1.04l-2.24,-0.16l-1.46,0.74l-0.24,0.82l0.32,0.8l2.49,2.48l2.18,-0.11l0.28,1.06l0.84,0.47l0.29,0.86l-0.26,1.77l0.52,0.95l-0.43,1.01l0.34,3.05l-0.33,0.84l-1.25,-2.16l-2.78,-0.23l-1.08,0.49l-0.44,1.63l0.52,0.73l-2.37,1.72l-3.57,1.91l-0.22,0.62l0.44,0.79l0.82,-0.04l0.76,-0.82l0.42,0.84l0.87,0.45l-0.38,1.5l-2.73,1.89l-1.97,-0.49l-1.02,-2.47l-0.61,-0.47l-0.6,0.06l-0.49,0.47l0.18,1.05l-0.33,0.74l-0.93,-0.81l-0.57,0.13l-0.15,0.98l-0.26,0.08l-1.13,-0.23l-1.27,-0.87l-0.79,0.13l-0.49,1.0l0.9,0.83l-0.46,0.56l0.17,0.85l-0.56,0.83l-0.83,2.76l0.55,1.64l0.95,0.71l-2.16,1.34l-1.95,0.72l-1.28,1.49l-1.16,0.03l-1.39,0.58l-1.91,-0.35l-1.01,-1.8l-1.91,-0.93l-2.34,0.7l-0.72,1.35l-1.13,-0.2l-1.76,0.35l-4.86,-1.45l-3.42,4.21l-0.13,0.69l-0.95,0.4l-0.7,1.35l0.37,1.21l-1.34,0.48l-0.53,-1.63l-0.78,-0.89l0.03,-0.68l-0.47,-0.53l0.89,-0.62l-0.01,-1.11l0.84,-0.15l0.16,-0.58l-1.61,-2.94l-1.18,0.18l-0.57,0.76l-0.91,-0.57l-0.12,-1.21l0.35,-1.46l-0.53,-0.88l-0.81,0.2l-0.42,1.1l-1.94,0.49l-1.47,-1.09l-0.81,-1.4l-2.41,-0.6l-0.88,-0.73l-3.48,0.62l-1.31,0.92l-0.55,0.88l-3.88,-1.1l-4.07,-0.54l-15.05,-0.66l0.36,-1.18l2.21,-3.51l0.25,-1.48l-0.23,-0.77l-0.66,-0.4l-1.19,-3.33l-0.77,-1.0l-1.17,-0.6Z", "name": "Punjab"}, "IN-ML": {"path": "M692.14,323.41l0.36,0.99l0.49,0.26l3.48,-1.0l0.19,0.86l0.64,0.35l1.2,-0.63l1.49,-0.23l3.08,0.24l0.52,0.77l0.96,0.42l-0.17,1.66l0.43,0.66l1.1,-0.39l0.55,0.36l0.64,-0.07l2.66,-0.96l0.05,3.31l0.27,0.81l0.85,0.45l1.66,-0.78l2.72,-2.95l3.5,-0.63l1.66,-0.86l0.37,-0.68l-0.38,-0.52l-1.21,0.62l3.21,-4.23l0.7,0.03l0.35,0.35l-0.47,2.0l0.21,0.69l1.52,0.36l1.37,-0.91l0.76,-1.27l0.44,-1.6l1.65,-1.4l0.96,0.24l1.41,1.21l1.05,0.19l3.13,-0.68l1.07,0.06l3.34,-1.03l2.77,0.13l-2.86,2.99l0.12,1.26l1.06,0.72l-1.5,3.63l0.24,1.32l-0.13,2.9l0.69,0.35l1.64,-0.98l2.82,-0.49l1.83,-1.14l2.64,2.02l3.7,3.79l0.62,0.07l1.88,-0.9l-1.34,1.9l-1.55,1.24l-0.1,0.59l1.68,1.57l2.05,0.77l2.62,2.44l0.18,0.48l-0.36,1.54l0.66,1.41l-3.66,1.24l-1.0,1.03l-2.75,0.23l-0.26,0.76l-1.33,0.48l-3.41,3.12l-1.72,-0.99l-0.78,-0.86l-2.26,-0.4l-1.74,-1.46l-1.79,-0.29l-0.79,-0.85l-1.94,-0.58l-2.44,0.38l-1.73,-0.24l-5.25,0.33l-0.64,0.7l-0.94,-0.21l-0.65,0.86l-0.55,0.08l-1.11,-0.13l-1.08,-1.05l-0.72,-0.01l-2.03,0.82l-1.34,-0.09l-4.49,-1.33l-1.65,-0.78l-12.73,1.95l-2.04,-0.82l-0.72,-0.02l-0.73,0.49l-2.6,-0.6l-1.28,0.3l-2.57,-0.21l-4.05,0.61l-2.4,-0.98l-4.8,-1.03l-6.8,-2.79l-2.64,0.4l-0.59,-2.56l0.35,-1.85l2.3,-0.94l0.38,-0.8l0.21,-2.01l1.81,-0.2l1.28,-1.0l0.04,-0.93l-1.52,-1.7l-0.34,-1.72l0.88,-1.75l0.26,-1.36l2.26,-2.72l2.31,-1.91l5.74,-0.81l1.82,-1.05l3.24,0.21l1.4,0.87l-0.56,1.9l0.39,0.49l1.72,-0.91l0.85,-1.0Z", "name": "Meghalaya"}, "IN-MN": {"path": "M765.49,384.0l0.47,-0.68l0.61,-3.47l-0.09,-1.17l0.96,-1.67l-0.13,-0.68l-0.62,-0.57l-0.09,-1.32l0.56,-0.31l0.28,-0.98l0.55,-3.63l1.0,-0.49l0.14,-0.43l-0.57,-1.42l0.73,-1.43l-0.56,-1.21l0.91,-2.88l0.63,-0.62l0.88,0.47l0.98,-0.44l0.27,-1.08l1.36,-2.09l-0.23,-1.11l1.0,-0.91l-0.44,-2.02l1.51,-0.98l3.35,-6.82l0.5,-0.52l1.87,1.18l1.29,0.39l1.16,1.32l0.79,-0.03l1.42,-1.94l0.99,-2.22l3.94,-3.86l-0.04,-1.41l-1.34,-0.76l0.16,-0.53l4.57,-0.6l2.93,0.03l1.7,1.1l2.18,-0.03l1.33,0.81l4.11,-0.51l2.05,-1.03l1.5,-1.74l1.68,-0.96l1.91,-1.65l-0.05,1.34l-1.04,3.76l0.67,0.94l2.42,1.37l-0.87,1.31l-1.78,4.9l0.08,1.52l0.99,1.35l3.31,1.08l0.64,2.0l-0.15,1.25l-1.08,1.72l-0.56,2.75l-1.73,2.55l-0.49,2.59l-0.58,0.52l-1.44,0.34l-1.22,3.42l-1.79,1.31l-0.65,2.06l-1.03,1.02l-0.12,1.37l-1.01,1.13l0.08,0.9l-1.09,1.03l-0.39,2.16l-1.51,3.48l-1.33,5.32l-1.69,2.49l-0.11,2.01l-0.25,0.27l-1.49,-1.41l-1.93,-1.02l-3.52,-0.92l-2.47,0.28l-1.62,-1.76l-1.26,-0.49l-3.11,-0.12l-0.94,0.51l-0.51,0.86l-0.79,-0.43l-1.46,0.7l-0.87,-0.01l-0.47,-1.06l-2.13,-2.65l-0.75,-0.47l-1.33,0.4l-0.63,1.3l-0.8,0.38l-0.15,-0.87l-0.68,-0.58l-1.63,0.9l-1.15,-0.71l-1.16,0.57l-1.01,-0.83l-2.54,-0.88Z", "name": "Manipur"}, "IN-MH": {"path": "M140.02,524.29l0.06,-1.24l-0.89,-1.35l0.45,-1.03l-0.02,-2.02l0.58,-0.43l0.77,-1.67l0.01,-1.67l1.8,-0.88l1.02,0.27l0.61,-0.35l2.1,-0.11l1.26,-0.53l1.63,2.69l1.38,-0.59l0.87,0.56l1.01,-0.49l0.85,0.82l0.58,0.11l0.82,-0.93l0.21,-1.81l0.82,-0.04l1.23,-0.66l0.57,-1.77l3.01,0.37l0.95,-0.4l-0.07,-1.27l0.49,-1.74l-0.34,-2.56l-0.66,-0.58l2.42,-3.82l0.56,-1.66l-0.48,-1.67l-0.94,-0.32l-0.37,-1.27l-0.99,-0.24l0.99,-0.38l0.9,-1.46l0.9,1.35l3.28,1.92l1.77,1.83l2.49,-0.21l2.88,-1.69l0.39,-0.98l-0.0,-1.07l2.33,-1.97l0.71,-1.34l-0.19,-3.58l-0.9,-2.69l-2.67,-3.15l-1.52,-0.55l-1.15,-1.45l-0.83,-0.24l-1.49,0.14l-2.13,-1.69l1.87,0.97l2.29,-0.02l2.26,-1.34l1.02,-2.45l1.02,0.6l2.51,-0.87l1.4,-3.41l2.42,-2.08l1.87,0.38l4.14,-1.13l1.72,-0.97l0.43,-1.02l-0.34,-1.17l-0.46,-0.42l-2.95,0.88l-1.44,-0.8l-1.14,0.58l-3.52,-0.08l-5.22,1.49l-1.82,-2.89l1.68,-0.47l0.65,-0.69l0.32,-1.01l-0.15,-0.9l-0.83,-0.77l-0.29,-2.57l0.27,-0.56l2.56,-0.97l1.38,-0.19l1.13,-0.92l2.52,-1.2l1.96,-0.35l2.37,0.85l2.05,-0.37l0.72,-0.45l0.19,-0.59l1.73,-0.61l1.41,-1.13l2.18,2.28l0.21,0.76l-0.17,3.62l0.77,2.62l3.13,2.41l1.63,0.45l1.6,1.13l4.83,-0.16l1.07,0.2l1.64,1.01l1.69,0.14l1.58,1.14l2.36,3.5l2.18,0.87l3.21,0.71l6.95,0.32l2.77,-0.44l2.5,0.23l3.35,-0.17l1.94,-0.51l2.2,0.26l2.69,0.81l1.26,-0.08l1.24,2.54l0.36,2.7l-1.11,0.57l0.15,0.97l1.09,1.49l0.87,0.53l3.81,0.66l4.02,-0.74l0.95,-0.46l1.82,-2.26l4.01,-0.99l0.96,-1.64l-0.02,-1.37l-0.56,-1.56l2.52,-1.7l1.81,-2.57l0.52,-3.12l0.5,-0.59l0.75,-0.35l2.31,-0.17l3.51,-2.47l2.54,-0.93l1.74,-0.08l0.77,0.73l0.74,0.08l1.15,-1.07l0.99,-0.26l1.28,-1.01l4.16,0.21l0.84,1.07l1.22,0.67l0.36,3.83l0.44,0.85l-3.7,-0.1l-0.72,0.76l0.04,1.29l1.97,3.68l0.53,0.02l0.58,-0.76l1.39,0.99l0.88,0.02l1.05,-0.43l1.38,0.13l0.82,0.55l2.93,-1.48l2.94,0.87l4.44,-1.33l3.05,-1.56l2.07,-2.14l3.51,-1.08l1.4,-1.22l1.25,0.34l0.42,2.93l0.32,0.47l0.78,0.04l1.24,-0.64l0.62,0.01l1.47,0.98l2.09,0.55l2.14,0.15l6.99,-1.28l0.7,-0.93l-0.15,-1.32l1.82,-0.62l2.66,-0.31l4.17,-1.36l0.59,-0.54l0.29,-1.34l1.77,0.62l3.23,0.14l1.66,0.54l0.8,1.02l0.92,0.57l0.58,2.17l0.81,0.57l1.25,-0.33l1.75,-1.17l2.95,-0.27l1.39,0.37l0.77,1.38l0.58,0.33l1.6,-0.12l2.05,-0.95l0.35,0.4l0.86,0.06l2.42,-0.77l0.92,-1.07l2.29,-0.91l1.67,1.15l1.92,0.55l0.2,1.01l0.5,0.63l2.02,1.48l0.35,0.91l-0.73,1.25l0.43,0.65l0.81,0.15l1.85,-0.32l4.3,2.41l1.39,-0.57l-0.01,0.89l-1.13,1.42l-2.68,1.41l-2.67,1.98l-0.97,4.16l0.16,1.64l0.77,1.33l1.09,0.52l1.28,-0.23l0.35,0.63l0.06,4.02l0.45,3.05l-1.84,1.2l-0.47,0.89l-0.02,0.79l0.38,0.48l0.66,0.16l1.78,-0.88l1.02,0.27l0.01,1.81l0.39,0.89l-0.58,1.41l-0.1,2.11l0.45,2.13l-1.09,0.47l-1.52,1.28l-2.81,0.5l-0.75,0.81l-0.36,2.4l0.18,0.72l3.49,0.54l0.73,2.48l-0.7,3.76l-2.02,-0.7l-1.12,1.16l-0.04,1.18l1.69,0.75l-0.51,0.69l-1.68,0.86l-0.09,0.89l0.85,0.59l1.62,0.25l0.63,-0.44l0.13,-0.95l0.77,-0.12l1.15,2.63l2.81,1.23l0.47,2.03l0.58,0.9l4.26,1.79l1.18,1.1l0.48,0.98l-0.64,1.2l-1.62,0.32l-0.53,0.42l-0.01,0.81l0.78,1.35l-1.97,0.98l-0.97,0.87l-1.04,-1.54l-2.0,-0.01l-0.88,-1.94l-0.71,-0.42l-0.85,0.24l-1.13,1.33l-1.18,0.61l-1.0,1.75l-1.36,0.8l-1.22,4.29l-2.27,3.01l-0.64,1.37l-0.01,1.37l2.24,3.09l-0.09,0.72l-2.24,1.45l-0.28,0.71l0.24,1.15l-0.3,0.22l-2.34,0.29l-2.31,-0.22l-0.58,-0.96l-2.01,-1.76l-2.23,-1.06l0.99,-0.99l0.21,-0.84l0.02,-1.59l-0.72,-3.35l-0.74,-0.8l-1.66,0.26l-0.06,-0.71l0.87,-1.58l1.42,-0.93l0.21,-0.5l-0.44,-2.8l0.57,-0.64l0.28,-0.94l0.23,-3.74l-1.23,-2.15l-1.96,-0.77l-2.06,-2.64l-2.29,-0.45l-3.08,1.08l-0.91,0.51l-0.3,1.12l-0.39,0.32l-1.26,-0.82l-4.24,-0.18l-1.47,-1.27l-3.01,-0.45l-0.87,-1.21l-1.35,-0.51l-2.56,0.37l-1.33,0.62l-0.81,1.12l-1.3,0.27l-1.56,-0.84l-0.34,-0.77l-1.28,-0.55l-0.99,-2.79l-2.09,-1.54l-2.16,0.04l-2.92,-1.29l-1.56,0.02l-1.1,-0.35l-1.07,0.25l-0.61,0.57l-1.9,-0.74l-1.36,-1.66l-1.24,-0.52l-0.54,0.27l-0.23,0.9l0.26,1.04l1.09,2.59l1.15,1.04l-0.25,0.64l-1.24,0.79l-0.61,0.83l-0.91,2.35l-0.06,2.8l-2.01,0.66l-0.77,0.68l-1.2,2.21l0.22,2.5l-0.2,0.74l-3.33,-0.06l-0.9,-0.6l-0.87,-1.24l-2.11,-0.28l-1.27,0.34l-0.99,0.93l0.11,0.69l0.53,0.26l-1.01,1.36l-0.7,2.23l0.12,1.03l-2.39,2.03l-0.22,0.63l0.57,2.11l1.03,0.18l0.28,0.94l0.86,0.22l0.16,1.21l2.03,1.81l-2.16,0.84l-1.71,3.25l-1.27,-0.02l-0.95,0.63l-0.33,0.77l0.19,1.51l-0.52,1.27l-2.57,0.53l-1.5,1.72l-0.5,2.61l-1.3,1.55l1.51,1.29l0.1,0.66l-1.31,-0.1l-1.69,1.02l-0.3,-1.06l-2.38,-1.06l-0.11,-2.21l-0.63,-0.91l-1.3,-0.5l-1.15,0.41l-1.16,1.82l-0.03,2.41l-1.43,0.66l-1.86,1.41l-0.68,0.82l-0.31,1.03l-1.26,0.02l-1.02,0.42l-1.68,-0.05l-1.83,0.93l-0.27,0.64l0.14,1.57l-0.48,2.32l0.04,2.02l-0.55,1.47l-0.5,0.44l-3.0,-0.44l-0.32,0.42l0.47,2.13l-1.5,1.02l-0.86,2.44l-2.06,-1.89l-2.52,-0.23l-0.88,1.08l-0.94,0.5l-0.2,1.02l-1.14,0.56l-0.95,1.3l-2.46,0.92l-0.17,0.5l0.77,1.23l0.09,1.48l-0.71,1.34l1.01,2.17l0.92,0.74l-0.6,0.51l-2.45,-0.08l-1.78,-0.99l-1.68,0.57l-1.38,-0.34l-2.26,1.05l-0.94,-0.14l-2.15,0.79l-0.87,-0.67l-0.28,-1.22l-0.68,-0.84l-0.88,0.28l-0.74,-0.28l-1.46,1.22l-0.85,-1.16l-1.9,-0.32l-0.65,-1.35l-0.88,-0.45l-0.63,0.12l-2.43,3.16l0.98,3.28l0.92,0.73l0.24,0.71l-0.5,2.6l1.28,2.16l-0.74,1.05l0.55,1.29l-0.2,0.88l-2.2,-1.25l-1.22,1.13l-1.28,0.53l-1.19,-0.68l-1.83,-0.01l-1.52,0.68l-2.02,0.12l-0.77,0.53l-0.02,1.43l-2.01,0.92l-1.23,-0.4l-1.49,-1.22l-0.67,-1.03l-1.68,0.2l-1.2,-0.27l-1.49,2.14l-2.45,1.04l0.56,3.05l-1.89,-0.24l-1.82,0.86l-0.57,0.65l-1.08,0.31l-0.5,1.26l-0.78,0.59l-0.04,0.6l0.64,0.85l-1.22,0.28l-1.77,1.34l-0.89,-2.23l-2.91,-0.76l-0.53,0.3l-0.53,1.56l-1.66,1.42l-0.93,-0.68l-0.61,0.31l-0.37,0.87l-0.8,-0.53l-0.65,0.1l-0.76,2.26l0.62,0.38l0.81,-0.38l0.26,0.87l1.12,0.26l0.23,0.93l0.78,0.55l-0.95,0.16l-0.48,0.69l0.62,2.98l0.63,0.32l0.91,-0.41l2.9,1.47l0.22,0.97l-0.19,2.82l-1.77,0.32l-0.86,0.93l0.13,0.7l1.32,0.54l0.03,0.51l-0.3,1.18l-2.16,3.44l0.6,1.18l-1.19,2.09l-1.32,0.88l-1.54,0.11l-0.16,-1.09l-1.05,-0.25l-2.28,1.88l-0.4,0.99l-0.63,0.47l0.15,0.72l-0.91,0.04l-2.08,0.78l-1.43,-0.79l-1.0,-2.75l-1.76,-0.62l-0.53,-1.11l-0.79,0.21l-0.89,1.14l-1.83,0.13l-0.71,0.34l-1.25,-0.26l0.03,-1.62l-1.31,-2.88l-3.48,-3.53l0.79,-0.83l-0.41,-0.4l-0.8,-0.07l-0.82,-0.82l0.33,-0.64l0.06,-2.16l0.71,-0.87l-0.01,-0.47l-0.44,-0.14l-0.95,0.42l-0.17,-1.06l-0.71,-0.29l-1.12,-4.25l-0.51,-0.32l0.58,-0.47l-0.03,-0.73l-1.12,-0.76l-0.68,-2.42l-0.45,-0.54l1.06,0.74l0.82,0.06l0.41,-0.32l-0.74,-0.71l0.5,-0.8l-1.26,-0.43l-0.4,-0.57l0.51,-0.22l0.18,0.36l0.66,0.09l0.32,-0.64l-0.15,-0.76l-0.57,-0.46l-0.98,0.18l0.18,-1.71l-0.97,-1.49l0.42,-2.29l-0.5,-0.3l-0.41,-0.93l-0.12,-0.62l0.28,-0.53l-0.31,-1.31l0.56,-1.5l-0.17,-0.55l-0.76,-0.39l0.59,-1.37l-0.03,-0.91l-0.58,-1.34l0.09,-1.05l-1.37,-3.59l0.76,-0.16l0.19,-0.63l-1.62,-2.66l-0.76,-0.65l-0.09,-0.38l0.56,-0.85l-0.28,-0.75l0.12,-0.77l-1.59,-2.24l2.03,-0.65l-0.02,-0.73l-1.83,-0.43l-0.38,-0.57l0.05,-1.09l-0.52,-0.83l0.53,-1.46l-0.55,-1.76l-0.81,-1.2l-0.45,-1.72l-1.42,-2.31l0.42,-0.88l-0.28,-0.67l-0.53,-0.26l0.98,-0.85l0.18,-0.85l-0.51,-0.41l-0.94,0.54l-0.34,-0.37l-0.61,-4.09l-0.38,-0.69l-0.67,-0.29l0.19,-0.69l0.62,0.73l1.75,0.17l0.54,0.38l-0.31,0.81l0.58,0.48l0.45,-0.14l0.51,-0.78l-0.02,-2.09l-0.62,-0.75l-1.94,-0.11l-0.55,-0.53l0.14,-0.36l-0.36,-0.54l-1.6,-0.94l-0.01,-1.02l-0.62,-1.29l0.45,-2.33l0.71,-0.18l1.81,2.51l0.68,-0.15l0.19,-0.62l-0.86,-1.02l-0.88,-2.03l-0.71,-0.34l-0.82,0.14l-1.64,-3.67l-0.09,-2.7l0.29,-0.7l1.18,0.09l0.55,-0.62l0.88,0.95l0.04,1.25l0.91,0.59l0.53,-0.48l-0.1,-1.31l0.64,-0.91l-0.12,-0.67l-0.88,-0.45l-0.18,-1.43l-0.6,-0.05l-0.65,0.44l-1.04,-0.76l0.14,-0.26l0.68,-0.01l0.31,-1.08l1.2,-0.1l0.34,-0.51l-0.2,-0.37l2.02,-0.66l0.31,-0.64l-0.31,-0.57l-0.52,-0.07l-1.35,0.42l0.13,-1.87l-0.65,-0.58l0.22,-2.19l-0.4,-0.44l-0.59,0.23l-1.02,1.69l-0.22,1.38l0.37,0.69l-0.13,0.31l-0.7,0.72l-0.08,-0.33l-0.66,-0.2l-0.49,0.46l-1.25,2.43l-0.6,-0.82l0.51,-1.73l0.36,-0.09l0.25,-0.76l-0.32,-0.73l0.29,-1.17l-0.39,-1.12l0.4,-0.71l-0.24,-0.49l-0.7,-0.1l1.07,-1.85l-0.27,-0.66l-0.46,-0.04l-0.91,0.92l0.19,-2.07l2.08,-0.09l0.63,0.65l1.46,0.32l1.18,-0.24l1.53,2.69l0.5,0.1l0.71,-0.39l-0.01,-0.7l-0.42,-0.22l-0.17,-1.08l-1.36,-1.37l-2.73,-0.21l-1.89,-1.29l-1.07,0.49l-1.01,-1.35l-0.33,-2.78l3.69,-1.53l0.25,-0.37l-0.25,-0.37l-0.94,-0.31l-1.71,0.45l-0.95,-1.4l-1.01,-0.32l-0.28,0.39l0.16,-0.89l-0.58,-2.49l0.85,-0.61l-0.33,-1.12l0.55,-0.55l-0.18,-1.26l-0.69,-0.14l-0.89,1.09Z", "name": "Maharashtra"}, "IN-KL": {"path": "M207.32,745.98l1.92,-0.19l0.39,1.27l1.23,0.49l0.41,0.89l0.63,0.19l0.89,-0.52l0.47,0.08l0.64,0.37l-0.1,0.79l0.5,0.89l0.57,0.23l0.78,-0.21l0.85,1.04l0.65,0.11l0.96,-0.48l0.95,0.25l-0.62,1.55l0.94,1.35l1.25,1.27l1.53,-0.21l-0.72,0.78l-0.15,1.13l0.93,1.53l0.64,2.08l1.3,0.28l3.32,3.77l2.15,1.07l0.78,1.07l1.13,0.04l1.41,0.84l1.39,0.08l0.46,1.8l1.32,1.45l1.59,0.7l3.14,0.56l3.3,-1.08l0.01,2.3l0.65,0.82l2.2,-0.0l1.26,1.62l1.5,0.11l1.64,1.8l1.14,0.25l1.17,-0.18l0.27,1.6l0.54,0.81l-1.2,0.5l-1.02,1.21l-0.98,0.1l-1.84,-0.51l-0.38,0.17l-0.33,0.69l-0.03,2.0l0.9,1.74l4.83,1.38l1.12,0.9l1.17,0.45l1.49,1.54l-2.87,2.82l-0.17,0.89l0.34,0.48l0.86,0.17l0.99,-0.3l1.57,0.46l3.34,-0.37l0.94,-0.61l-0.36,1.61l0.94,1.09l0.8,2.1l0.59,0.57l-1.64,-0.24l-0.64,0.35l-0.59,1.61l0.2,1.28l0.98,1.23l3.74,1.55l0.74,1.63l1.03,0.92l-0.41,2.95l-1.35,0.7l-0.35,0.83l0.17,2.6l-0.55,3.61l0.93,2.08l0.11,1.93l2.58,2.4l1.39,0.59l1.1,-0.31l2.7,-2.22l3.3,-1.4l1.27,1.82l0.4,1.65l0.73,0.77l-1.69,4.21l1.1,3.48l-1.02,2.47l0.32,2.94l-1.56,5.71l0.29,0.53l1.83,1.05l2.88,-0.69l1.58,2.31l0.11,0.81l-1.01,1.01l-0.96,2.65l-0.84,1.39l-2.5,7.28l-1.99,1.95l1.13,3.67l1.53,1.25l-0.52,1.84l-1.71,2.58l0.21,2.15l0.35,0.76l1.72,1.46l0.73,1.15l-0.92,1.3l-0.26,0.16l-0.49,-0.36l-0.56,0.34l0.28,1.93l-1.34,2.06l-0.32,1.41l-1.22,0.16l-3.21,-2.34l-3.51,-4.66l-1.64,-1.53l-0.43,-1.0l-3.63,-4.29l-1.58,-2.45l-2.39,-2.02l1.57,-0.71l0.15,-0.44l-0.37,-0.28l-1.08,0.1l0.47,-0.7l1.68,0.13l0.44,-0.23l-0.2,-0.71l0.54,-0.49l-0.28,-0.62l-0.95,-0.03l-0.85,0.6l-1.25,-0.25l-1.31,0.82l-1.58,-3.84l0.32,-0.33l0.19,-1.64l-0.19,-0.41l-0.65,0.2l-0.86,-2.3l-0.74,-0.28l-0.21,0.22l-1.05,-2.39l-1.56,-5.16l-1.24,-10.4l0.63,-0.17l0.66,4.3l0.62,0.34l0.41,-0.52l0.65,0.91l-0.63,1.46l-0.6,2.77l0.13,0.65l0.86,0.47l2.79,0.53l0.73,-0.32l0.81,-0.97l-0.14,-0.62l-1.15,-0.68l-1.47,-0.14l0.28,-0.66l-0.17,-2.85l-0.66,-1.06l-0.37,-2.02l0.45,-1.0l-0.04,-0.85l-1.08,-2.32l-1.52,-1.72l-0.77,0.08l-0.45,-1.39l0.12,-0.52l-0.61,-0.7l-0.27,-1.52l-1.31,-1.45l-0.38,0.26l-0.25,0.92l0.66,1.82l-0.66,-1.68l-0.14,-1.7l1.71,-1.2l0.21,-1.28l-0.71,-0.22l-0.54,-0.77l-0.8,-0.12l0.31,1.86l-0.42,0.47l-0.54,-0.68l-1.44,-5.09l-1.12,-1.55l-0.55,-2.53l-1.35,-1.65l-0.27,-1.2l-2.36,-4.94l0.51,-0.56l-0.14,-0.64l-0.79,-0.34l-0.43,-1.07l-1.9,-7.73l-3.14,-7.29l0.34,-0.6l-0.24,-0.72l-0.61,-0.15l-1.63,-2.78l-1.62,-0.56l-2.42,-6.52l-0.81,-1.13l-3.92,-4.33l-0.84,-0.02l-1.08,-1.51l2.17,0.47l0.48,-0.39l-0.52,-0.81l0.19,-1.18l-0.45,-0.08l-1.02,0.74l-0.61,0.02l-1.17,-1.08l1.13,-0.11l0.25,-0.56l-0.73,-0.93l0.1,-1.21l0.73,-0.02l1.61,-0.9l0.41,-0.84l-0.76,-0.53l-0.97,0.34l-0.9,-0.22l-1.68,1.27l-0.82,-0.2l-0.83,0.31l-0.37,2.56l-1.86,-5.57l0.26,-1.27l-0.48,-0.39l-0.64,0.24l-0.68,-1.84l-3.92,-7.22l-2.86,-6.72ZM250.45,836.37l-0.0,-0.01l0.01,-0.0l-0.0,0.02ZM249.88,834.43l-0.08,-0.57l-0.05,-0.2l0.67,0.8l-0.54,-0.03Z", "name": "Kerala"}}, "height": 932.9661457393942, "projection": {"type": "mill", "centralMeridian": 0.0}, "width": 900.0});;
$.fn.vectorMap('addMap', 'us_aea_en',{"insets": [{"width": 220, "top": 440, "height": 146.9158157558812, "bbox": [{"y": -8441281.712315228, "x": -5263934.893342895}, {"y": -6227992.545028123, "x": -1949631.2950683108}], "left": 0}, {"width": 80, "top": 460, "height": 129.05725678001465, "bbox": [{"y": -4207380.690946597, "x": -5958501.652314129}, {"y": -3658201.4570359783, "x": -5618076.48127754}], "left": 245}, {"width": 900.0, "top": 0, "height": 550.2150229714246, "bbox": [{"y": -5490839.2352678, "x": -2029243.6460439637}, {"y": -2690044.485299302, "x": 2552083.9617675776}], "left": 0}], "paths": {"US-VA": {"path": "M682.42,290.04l1.61,-0.93l1.65,-0.48l1.12,-0.95l3.57,-1.69l0.74,-2.33l0.82,-0.19l2.32,-1.54l0.05,-1.81l2.04,-1.86l-0.13,-1.58l0.26,-0.42l5.0,-4.09l4.76,-6.0l0.09,0.63l0.96,0.54l0.33,1.37l1.32,0.74l0.71,0.81l1.46,0.09l0.79,0.65l1.3,0.48l1.41,-0.09l0.79,-0.41l0.76,-1.22l1.17,-0.57l0.53,-1.38l2.72,1.49l1.42,-1.1l2.25,-0.99l0.76,0.06l1.08,-0.97l0.33,-0.82l-0.48,-0.96l0.23,-0.42l1.9,0.58l3.26,-2.62l0.3,-0.1l0.51,0.73l0.66,-0.07l2.38,-2.34l0.17,-0.85l-0.49,-0.51l0.99,-1.12l0.1,-0.6l-0.28,-0.51l-1.0,-0.46l0.71,-3.03l2.6,-4.8l0.55,-2.15l-0.01,-1.91l1.61,-2.55l-0.22,-0.94l0.24,-0.84l0.5,-0.48l0.39,-1.7l-0.0,-3.18l1.23,0.19l1.18,1.73l3.8,0.43l0.59,-0.28l1.05,-2.52l0.2,-2.36l0.71,-1.05l-0.04,-1.61l0.76,-2.31l1.78,0.75l0.65,-0.17l1.3,-3.3l0.57,0.05l0.59,-0.39l0.52,-1.2l0.81,-0.68l0.44,-1.8l1.38,-2.43l-0.35,-2.57l0.54,-1.76l-0.3,-2.01l9.18,4.58l0.59,-0.29l0.63,-4.0l2.6,-0.07l0.63,0.57l1.05,0.23l-0.5,1.74l0.6,0.88l1.61,0.85l2.52,-0.04l1.03,1.18l1.64,0.12l1.94,1.52l0.57,2.53l-0.94,0.78l-0.45,0.02l-0.3,0.43l0.13,0.71l-0.61,-0.05l-0.49,0.59l-0.37,2.5l0.07,2.29l-0.43,0.25l0.01,0.6l1.05,0.77l-0.36,0.14l-0.17,0.6l0.44,0.3l1.64,-0.08l1.38,-0.61l1.77,-1.61l0.39,0.58l-0.58,0.35l0.02,0.58l1.9,1.07l0.64,1.08l1.69,0.35l1.37,-0.11l0.95,0.49l0.82,-0.65l1.05,-0.08l0.33,0.56l1.26,0.63l-0.1,0.55l0.36,0.55l0.94,-0.23l0.41,0.56l3.96,0.88l0.25,1.12l-0.85,-0.41l-0.57,0.44l0.89,1.74l-0.35,0.57l0.62,0.78l-0.44,0.89l0.24,0.59l-1.36,-0.36l-0.59,-0.72l-0.67,0.18l-0.1,0.43l-2.44,-2.3l-0.56,0.05l-0.38,-0.56l-0.52,0.32l-1.36,-1.51l-1.23,-0.43l-2.86,-2.72l-1.34,-0.12l-1.11,-0.81l-1.17,0.05l-0.39,0.52l0.47,0.71l1.1,-0.01l0.63,0.68l1.33,0.07l0.6,0.43l0.62,1.4l1.46,1.11l1.13,0.34l1.53,1.8l2.55,0.94l1.4,1.89l2.14,-0.02l0.56,0.41l0.72,0.06l-0.61,0.7l0.3,0.49l2.03,0.34l0.26,0.72l0.55,0.1l0.13,1.67l-1.0,-0.75l-0.39,0.21l-1.13,-1.0l-0.58,0.29l0.1,0.82l-0.31,0.68l0.7,0.7l-0.18,0.6l1.12,0.32l-0.86,0.44l-2.12,-0.73l-1.39,-1.38l-0.83,-0.32l-2.23,-1.87l-0.58,0.11l-0.22,0.53l0.26,0.81l0.64,0.21l3.81,3.15l2.69,1.12l1.28,-0.33l0.45,1.07l1.27,0.26l-0.44,0.67l0.3,0.56l0.93,-0.19l0.0,1.24l-0.92,0.41l-0.57,0.73l-0.71,-0.93l-3.2,-1.58l-0.29,-1.16l-0.59,-0.59l-0.87,-0.11l-1.2,0.67l-1.71,-0.44l-0.36,-1.15l-0.71,-0.05l-0.05,1.32l-0.33,0.41l-1.43,-1.32l-0.51,0.09l-0.48,0.57l-0.65,-0.4l-0.99,0.45l-2.23,-0.1l-0.37,0.94l0.34,0.46l1.9,0.22l1.4,-0.31l0.85,0.24l0.56,-0.69l0.63,0.88l1.34,0.43l1.95,-0.31l1.5,0.71l0.67,-0.63l0.94,2.47l3.16,1.23l0.37,0.91l-0.57,1.03l0.56,0.44l1.72,-1.32l0.88,-0.02l0.83,0.65l0.8,-0.26l-0.61,-0.9l-0.2,-1.17l3.78,0.08l1.13,-0.44l1.89,3.23l-0.46,0.71l0.65,3.09l-1.19,-0.58l-0.02,0.88l-30.95,7.83l-37.19,8.41l-19.52,3.35l-7.08,0.85l-0.46,-0.26l-4.24,0.64l-0.82,0.62l-28.2,5.01ZM781.15,223.32l0.14,0.09l-0.06,0.07l-0.01,-0.03l-0.07,-0.12ZM808.05,244.59l0.53,-1.14l-0.26,-0.54l-0.36,-0.08l0.58,-0.98l-0.39,-0.71l-0.03,-0.49l0.44,-0.35l-0.17,-0.73l0.62,-0.3l0.23,-0.6l0.14,-2.33l1.01,-0.39l-0.12,-0.9l0.48,-0.14l-0.26,-1.53l-0.79,-0.4l0.87,-0.57l0.1,-1.03l2.69,-1.11l0.36,2.48l-1.08,4.2l-0.22,2.38l0.33,1.09l-0.34,0.97l-0.6,-0.79l-0.81,0.15l-0.39,0.95l0.27,0.37l-0.65,0.46l-0.3,0.85l0.17,1.05l-0.31,1.46l0.38,2.47l-0.6,0.6l0.07,1.33l-1.37,-1.9l0.23,-0.94l-0.33,-1.57l0.28,-0.97l-0.38,-0.3Z", "name": "Virginia"}, "US-PA": {"path": "M716.46,159.99l0.63,-0.19l4.3,-3.73l1.13,5.2l0.48,0.31l34.84,-7.93l34.28,-8.64l1.42,0.58l0.71,1.39l0.64,0.13l0.77,-0.33l1.24,0.59l0.14,0.85l0.81,0.41l-0.16,0.58l0.89,2.69l1.9,2.07l2.12,0.75l2.21,-0.2l0.72,0.79l-0.89,0.87l-0.73,1.49l-0.17,2.25l-1.41,3.35l-1.37,1.58l0.04,0.79l1.79,1.72l-0.31,1.65l-0.84,0.43l-0.22,0.66l0.14,1.48l1.04,2.87l0.52,0.25l1.2,-0.18l1.18,2.39l0.95,0.58l0.66,-0.26l0.6,0.9l4.23,2.75l0.12,0.41l-1.29,0.93l-3.71,4.22l-0.23,0.76l0.17,0.9l-1.36,1.13l-0.84,0.15l-1.33,1.08l-0.33,0.66l-1.72,-0.12l-2.03,0.84l-1.15,1.37l-0.41,1.39l-37.23,9.21l-39.1,8.66l-10.03,-48.21l1.92,-1.22l3.08,-3.04Z", "name": "Pennsylvania"}, "US-TN": {"path": "M571.72,341.09l0.86,-0.84l0.29,-1.37l1.0,0.04l0.65,-0.79l-0.99,-4.89l1.41,-1.93l0.06,-1.32l1.18,-0.46l0.36,-0.48l-0.63,-1.31l0.53,-0.65l0.05,-0.56l-0.89,-1.33l2.55,-1.57l1.09,-1.13l-0.14,-0.84l-0.85,-0.53l0.14,-0.19l0.34,-0.16l0.85,0.37l0.46,-0.33l-0.27,-1.31l-0.85,-0.9l0.06,-0.71l0.51,-1.43l1.0,-1.11l-1.35,-2.06l1.37,-0.21l0.61,-0.55l-0.13,-0.64l-1.17,-0.82l0.82,-0.15l0.58,-0.54l0.13,-0.69l-0.59,-1.38l0.02,-0.36l0.37,0.53l0.47,0.08l0.58,-0.29l0.6,-0.86l23.67,-2.81l0.35,-0.41l-0.1,-1.35l-0.84,-2.39l2.98,-0.08l0.82,0.58l22.79,-3.55l7.64,-0.46l7.5,-0.86l8.82,-1.42l24.01,-3.1l1.11,-0.6l29.3,-5.2l0.73,-0.6l3.56,-0.54l-0.4,1.44l0.43,0.85l-0.4,2.0l0.36,0.82l-1.15,-0.03l-1.71,1.79l-1.21,3.89l-0.55,0.7l-0.56,0.08l-0.63,-0.74l-1.44,-0.02l-2.66,1.73l-1.42,2.73l-0.96,0.89l-0.34,-0.34l-0.13,-1.05l-0.73,-0.54l-0.53,0.15l-2.3,1.81l-0.29,1.32l-0.93,-0.24l-0.9,0.48l-0.16,0.77l0.32,0.73l-0.85,2.18l-1.29,0.06l-1.75,1.14l-1.28,1.24l-0.61,1.06l-0.78,0.27l-2.28,2.46l-4.04,0.78l-2.58,1.7l-0.49,1.09l-0.88,0.55l-0.55,0.81l-0.18,2.88l-0.35,0.6l-1.65,0.52l-0.89,-0.16l-1.06,1.14l0.21,5.24l-20.21,3.32l-21.62,3.04l-25.56,2.95l-0.34,0.31l-7.39,0.9l-28.73,3.17Z", "name": "Tennessee"}, "US-ID": {"path": "M132.38,121.39l-0.34,-0.44l0.08,-1.99l0.53,-1.74l1.42,-1.22l2.11,-3.59l1.68,-0.92l1.39,-1.53l1.08,-2.15l0.05,-1.22l2.21,-2.41l1.43,-2.7l0.37,-1.37l2.04,-2.26l1.89,-2.81l0.03,-1.01l-0.79,-2.95l-2.13,-1.94l-0.87,-0.36l-0.85,-1.61l-0.41,-3.02l-0.59,-1.19l0.94,-1.19l-0.12,-2.35l-1.04,-2.69l0.46,-0.98l9.67,-54.45l13.39,2.35l-3.54,20.72l1.29,2.89l1.0,1.27l0.27,1.55l1.17,1.76l-0.12,0.83l0.39,1.14l-0.99,0.95l0.83,1.76l-0.83,0.11l-0.28,0.71l1.93,1.68l1.03,2.04l2.24,1.22l0.54,1.58l1.09,1.33l1.49,2.79l0.08,0.68l1.64,1.81l0.01,1.88l1.79,1.71l-0.07,1.35l0.74,0.19l0.9,-0.58l0.36,0.46l-0.36,0.55l0.07,0.54l1.11,0.96l1.61,0.15l1.81,-0.36l-0.63,2.61l-0.99,0.54l0.25,1.14l-1.83,3.73l0.06,1.72l-0.81,0.07l-0.37,0.54l0.6,1.33l-0.62,0.9l-0.03,1.16l0.97,0.93l-0.37,0.81l0.28,1.01l-1.57,0.43l-1.21,1.41l0.1,1.11l0.46,0.77l-0.13,0.74l-0.83,0.77l-0.2,1.52l1.48,0.63l1.38,1.79l0.78,0.27l1.08,-0.35l0.56,-0.8l1.85,-0.41l1.21,-1.28l0.81,-0.29l0.15,-0.76l0.78,0.81l0.23,0.71l1.06,0.64l-0.42,1.23l0.73,0.95l-0.34,1.38l0.57,1.34l-0.21,1.61l1.54,2.64l0.31,1.73l0.82,0.37l0.67,2.08l-0.18,0.98l-0.76,0.64l0.51,1.9l1.24,1.16l0.3,0.79l0.81,0.08l0.86,-0.37l1.04,0.93l1.06,2.79l-0.5,0.81l0.89,1.83l-0.28,0.6l0.11,0.98l2.29,2.41l0.97,-0.14l-0.01,-1.14l1.07,-0.89l0.93,-0.22l4.53,1.62l0.69,-0.32l0.67,-1.35l1.19,-0.39l2.25,0.93l3.3,-0.1l0.96,0.88l2.29,-0.58l3.23,0.78l0.45,-0.49l-0.67,-0.76l0.26,-1.06l0.74,-0.48l-0.07,-0.96l1.23,-0.51l0.48,0.37l1.07,2.11l0.12,1.11l1.36,1.95l0.73,0.45l-6.27,53.86l-47.48,-6.32l-46.97,-7.73l6.88,-39.17l1.12,-1.18l1.07,-2.67l-0.21,-1.75l0.74,-0.15l0.77,-1.62l-0.9,-1.27l-0.18,-1.2l-1.24,-0.08l-0.64,-0.81l-0.88,0.29Z", "name": "Idaho"}, "US-NV": {"path": "M139.36,329.2l-12.7,-16.93l-36.59,-51.1l-25.35,-34.52l13.7,-64.19l46.89,9.24l46.99,7.74l-18.72,125.83l-0.9,1.16l-0.99,2.19l-0.44,0.17l-1.34,-0.22l-0.98,-2.24l-0.7,-0.63l-1.41,0.22l-1.95,-1.02l-1.6,0.23l-1.78,0.96l-0.76,2.48l0.88,2.59l-0.6,0.97l-0.24,1.31l0.38,3.12l-0.76,2.54l0.77,3.71l-0.13,3.07l-0.3,1.07l-1.04,0.31l-0.12,0.51l0.32,0.8l-0.52,0.62Z", "name": "Nevada"}, "US-TX": {"path": "M276.16,412.59l33.07,1.99l32.79,1.35l0.41,-0.39l3.6,-98.71l25.86,0.61l26.29,0.22l0.05,42.09l0.44,0.4l1.02,-0.13l0.78,0.28l3.74,3.82l1.66,0.21l0.88,-0.58l2.49,0.64l0.6,-0.68l0.11,-1.05l0.6,0.76l0.92,0.22l0.38,0.93l0.77,0.78l-0.01,1.64l0.52,0.83l2.85,0.42l1.25,-0.2l1.38,0.89l2.78,0.69l1.82,-0.56l0.63,0.1l1.89,1.8l1.4,-0.11l1.25,-1.43l2.43,0.26l1.67,-0.46l0.1,2.28l0.91,0.67l1.62,0.4l-0.04,2.09l1.56,0.79l1.82,-0.66l1.57,-1.68l1.02,-0.65l0.41,0.19l0.45,1.64l2.01,0.2l0.24,1.05l0.72,0.48l1.47,-0.21l0.88,-0.93l0.39,0.33l0.59,-0.08l0.61,-0.99l0.26,0.41l-0.45,1.23l0.14,0.76l0.67,1.14l0.78,0.42l0.57,-0.04l0.6,-0.5l0.68,-2.36l0.91,-0.65l0.35,-1.54l0.57,-0.14l0.4,0.14l0.29,0.99l0.57,0.64l1.21,0.02l0.83,0.5l1.26,-0.2l0.68,-1.34l0.48,0.15l-0.13,0.7l0.49,0.69l1.21,0.45l0.49,0.72l1.52,-0.05l1.49,1.74l0.52,0.02l0.63,-0.62l0.08,-0.71l1.49,-0.1l0.93,-1.43l1.88,-0.41l1.66,-1.13l1.52,0.83l1.51,-0.22l0.29,-0.83l2.29,-0.73l0.53,-0.55l0.5,0.32l0.38,0.88l1.82,0.42l1.69,-0.06l1.86,-1.14l0.41,-1.05l1.06,0.31l2.24,1.56l1.16,0.17l1.79,2.08l2.14,0.41l1.04,0.92l0.76,-0.11l2.48,0.85l1.04,0.04l0.37,0.79l1.38,0.97l1.45,-0.12l0.39,-0.72l0.8,0.36l0.88,-0.4l0.92,0.35l0.76,-0.15l0.64,0.36l2.23,34.03l1.51,1.67l1.3,0.82l1.25,1.87l0.57,1.63l-0.1,2.64l1.0,1.21l0.85,0.4l-0.12,0.85l0.75,0.54l0.28,0.87l0.65,0.7l-0.19,1.17l1.0,1.02l0.59,1.63l0.5,0.34l0.55,-0.1l-0.16,1.71l0.81,1.22l-0.64,0.25l-0.35,0.68l0.77,1.27l-0.55,0.89l0.19,1.39l-0.75,2.69l-0.74,0.85l-0.36,1.54l-0.79,1.13l0.64,2.0l-0.83,2.28l0.17,1.07l0.83,1.2l-0.19,1.01l0.49,1.6l-0.24,1.41l-1.13,1.67l-1.02,0.2l-1.76,3.37l-0.04,1.06l1.79,2.37l-3.43,0.08l-7.37,3.78l-0.02,-0.43l-2.19,-0.46l-3.24,1.07l1.09,-3.51l-0.3,-1.21l-0.8,-0.76l-0.62,-0.07l-1.52,0.85l-0.99,2.0l-1.56,-0.96l-1.64,0.12l-0.07,0.63l0.89,0.62l0.0,1.06l0.56,0.39l-0.47,0.69l0.07,1.02l1.63,0.64l-0.62,0.71l0.49,0.97l0.91,0.23l0.28,0.37l-0.4,1.25l-0.45,-0.12l-0.97,0.81l-1.72,2.25l-1.18,-0.4l-0.49,0.12l0.32,1.0l0.08,2.55l-1.85,1.49l-1.91,2.11l-0.96,0.37l-4.1,2.9l-3.3,0.45l-2.54,1.06l-0.2,1.12l-0.75,-0.34l-2.04,0.89l-0.33,-0.34l-1.11,0.18l0.43,-0.87l-0.52,-0.6l-1.43,0.22l-1.22,1.08l-0.6,-0.62l-0.11,-1.2l-1.38,-0.81l-0.5,0.44l0.65,1.44l0.01,1.12l-0.71,0.09l-0.54,-0.44l-0.75,-0.0l-0.55,-1.34l-1.46,-0.37l-0.58,0.39l0.04,0.54l0.94,1.7l0.03,1.24l0.58,0.37l0.36,-0.16l1.13,0.78l-0.75,0.37l-0.27,0.54l0.15,0.36l0.7,0.23l1.08,-0.54l0.96,0.6l-4.27,2.42l-0.57,-0.13l-0.37,-1.44l-0.5,-0.18l-1.13,-1.46l-0.49,-0.03l-0.48,0.51l0.1,0.63l-0.62,0.34l-0.05,0.51l1.18,1.61l-0.31,1.04l0.33,0.85l-1.66,1.79l-0.37,0.2l0.37,-0.64l-0.18,-0.72l0.25,-0.73l-0.46,-0.67l-0.52,0.17l-0.71,1.1l0.26,0.72l-0.39,0.95l-0.07,-1.13l-0.52,-0.55l-1.95,1.29l-0.78,-0.33l-0.7,0.52l0.07,0.75l-0.81,0.99l0.02,0.49l1.25,0.64l0.03,0.56l0.78,0.28l0.7,-1.41l0.86,-0.41l0.01,0.62l-2.82,4.36l-1.23,-1.0l-1.36,0.38l-0.32,-0.34l-2.4,0.39l-0.46,-0.31l-0.65,0.16l-0.18,0.58l0.41,0.61l0.55,0.38l1.53,0.03l-0.01,0.91l0.55,0.64l2.07,1.03l-2.7,7.63l-0.2,0.1l-0.38,-0.54l-0.34,0.1l0.18,-0.76l-0.57,-0.43l-2.35,1.95l-1.72,-2.36l-1.19,-0.91l-0.61,0.4l0.09,0.52l1.44,2.0l-0.11,0.82l-0.93,-0.09l-0.33,0.63l0.51,0.56l1.88,0.07l2.14,0.72l2.08,-0.72l-0.43,1.75l0.24,0.77l-0.98,0.7l0.37,1.59l-1.12,0.14l-0.43,0.41l0.4,2.11l-0.33,1.6l0.45,0.64l0.84,0.24l0.87,2.86l0.71,2.81l-0.91,0.82l0.62,0.49l-0.08,1.28l0.72,0.3l0.18,0.61l0.58,0.29l0.4,1.79l0.68,0.31l0.45,3.22l1.46,0.62l-0.52,1.1l0.31,1.07l-0.63,0.77l-0.84,-0.05l-0.53,0.44l0.08,1.31l-0.49,-0.33l-0.49,0.25l-0.39,-0.67l-1.49,-0.45l-2.92,-2.53l-2.2,-0.18l-0.81,-0.51l-4.2,0.09l-0.9,0.42l-0.78,-0.63l-1.06,0.25l-1.25,-0.2l-1.45,-0.7l-0.72,-0.97l-0.6,-0.14l-0.21,-0.72l-1.17,-0.49l-0.99,-0.02l-1.98,-0.87l-1.45,0.39l-0.83,-1.09l-0.6,-0.21l-1.43,-1.38l-1.96,0.01l-1.47,-0.64l-0.86,0.12l-1.62,-0.41l0.28,-1.26l-0.54,-1.01l-0.96,-0.35l-1.65,-6.03l-2.77,-3.02l-0.29,-1.12l-1.08,-0.75l0.35,-0.77l-0.24,-0.76l0.34,-2.18l-0.45,-0.96l-1.04,-1.01l0.65,-1.99l0.05,-1.19l-0.18,-0.7l-0.54,-0.33l-0.15,-1.81l-1.85,-1.44l-0.85,0.21l-0.29,-0.41l-0.81,-0.11l-0.74,-1.31l-2.22,-1.71l0.01,-0.69l-0.51,-0.58l0.12,-0.86l-0.97,-0.92l-0.08,-0.75l-1.12,-0.61l-1.3,-2.88l-2.66,-1.48l-0.38,-0.91l-1.13,-0.59l-0.06,-1.16l-0.82,-1.19l-0.59,-1.95l0.41,-0.22l-0.04,-0.73l-1.03,-0.49l-0.26,-1.29l-0.81,-0.57l-0.94,-1.74l-0.61,-2.38l-1.85,-2.36l-0.87,-4.24l-1.81,-1.34l0.05,-0.7l-0.75,-1.21l-3.96,-2.67l-0.71,-1.86l-1.82,-0.62l-1.44,-0.99l-0.01,-1.63l-0.6,-0.39l-0.88,0.24l-0.12,-0.77l-0.98,-0.33l-0.8,-2.08l-0.57,-0.47l-0.46,0.12l-0.46,-0.44l-0.86,0.27l-0.14,-0.6l-0.44,-0.31l-0.47,0.15l-0.25,0.61l-1.05,0.16l-2.89,-0.47l-0.39,-0.38l-1.48,-0.03l-0.79,0.29l-0.77,-0.44l-2.67,0.27l-3.92,-2.08l-1.35,0.86l-0.64,1.61l-1.98,-0.17l-0.52,0.44l-0.49,-0.17l-1.05,0.49l-1.33,0.14l-3.22,6.4l-0.18,1.77l-0.76,0.67l-0.38,1.8l0.35,0.59l-1.99,1.01l-0.72,1.3l-1.11,0.65l-1.12,2.0l-2.67,-0.46l-1.04,-0.87l-0.55,0.3l-1.69,-1.21l-1.31,-1.63l-2.9,-0.85l-1.15,-0.95l-0.02,-0.67l-0.42,-0.41l-2.75,-0.51l-2.28,-1.03l-1.89,-1.75l-0.91,-1.53l-0.96,-0.91l-1.53,-0.29l-1.77,-1.26l-0.22,-0.56l-1.31,-1.18l-0.65,-2.68l-0.86,-1.01l-0.24,-1.1l-0.76,-1.28l-0.26,-2.34l0.52,-3.05l-3.01,-5.07l-0.06,-1.94l-1.26,-2.51l-0.99,-0.44l-0.43,-1.24l-1.43,-0.81l-2.15,-2.18l-1.02,-0.1l-2.01,-1.25l-3.18,-3.35l-0.59,-1.55l-3.13,-2.55l-1.59,-2.45l-1.19,-0.95l-0.61,-1.05l-4.42,-2.6l-1.19,-2.19l-1.21,-3.23l-1.37,-1.08l-1.12,-0.08l-1.75,-1.67l-0.79,-3.05ZM502.09,468.18l-0.33,0.17l0.18,-0.16l0.15,-0.02ZM498.69,470.85l-0.09,0.12l-0.04,0.02l0.13,-0.14ZM497.79,472.33l0.15,0.05l-0.2,0.18l0.04,-0.11l0.01,-0.12ZM497.02,473.23l-0.13,0.12l0.03,-0.09l0.09,-0.03ZM467.54,489.19l0.03,0.02l-0.02,0.01l-0.0,-0.03ZM453.94,547.19l0.75,-0.5l0.25,-0.68l0.11,1.08l-1.1,0.1ZM460.89,499.8l-0.14,-0.59l1.22,-0.36l-0.28,0.33l-0.79,0.63ZM463.51,497.84l0.1,-0.23l1.27,-0.88l-0.92,0.85l-0.45,0.26ZM465.8,496.12l0.28,-0.24l0.47,-0.04l-0.25,0.13l-0.5,0.15ZM457.96,502.92l0.71,-1.64l0.64,-0.71l-0.02,0.75l-1.33,1.6ZM451.06,515.13l0.06,-0.22l0.07,-0.15l-0.13,0.37ZM451.5,513.91l0.16,-0.35l0.02,-0.02l-0.18,0.37ZM452.44,511.95l-0.01,-0.04l0.05,-0.04l-0.04,0.08Z", "name": "Texas"}, "US-NH": {"path": "M829.94,105.42l0.2,-1.33l-1.43,-5.38l0.53,-1.45l-0.28,-2.22l1.0,-1.86l-0.13,-2.3l0.64,-2.28l-0.44,-0.62l0.29,-2.31l-0.93,-3.8l0.08,-0.7l0.3,-0.45l1.83,-0.8l0.7,-1.39l1.43,-1.62l0.74,-1.8l-0.25,-1.13l0.52,-0.62l-2.34,-3.49l0.87,-3.26l-0.11,-0.78l-0.81,-1.29l0.27,-0.59l-0.23,-0.7l0.48,-3.2l-0.36,-0.82l0.91,-1.49l2.44,0.33l0.65,-0.88l13.0,34.89l0.84,3.65l2.6,2.21l0.88,0.34l0.36,1.6l1.72,1.31l0.0,0.35l0.77,0.23l-0.06,0.58l-0.46,3.09l-1.57,0.24l-1.32,1.19l-0.51,0.94l-0.96,0.37l-0.5,1.68l-1.1,1.44l-17.61,4.74l-1.7,-1.43l-0.41,-0.89l-0.1,-2.0l0.54,-0.59l0.03,-0.52l-1.02,-5.18Z", "name": "New Hampshire"}, "US-NY": {"path": "M821.38,166.44l0.69,-2.05l0.62,-0.02l0.55,-0.75l0.76,0.15l0.54,-0.41l-0.04,-0.31l0.57,-0.03l0.28,-0.66l0.66,-0.02l0.2,-0.55l-0.42,-0.83l0.22,-0.53l0.61,-0.37l1.34,0.22l0.54,-0.59l1.45,-0.18l0.21,-0.8l1.85,0.02l1.08,-0.91l0.11,-0.78l0.62,0.24l0.43,-0.61l4.83,-1.29l2.26,-1.3l1.99,-2.91l-0.2,1.16l-0.98,0.86l-1.22,2.31l0.55,0.46l1.6,-0.35l0.28,0.63l-0.43,0.49l-1.37,0.87l-0.51,-0.07l-2.26,0.92l-0.08,0.93l-0.87,-0.0l-2.73,1.72l-1.01,0.15l-0.17,0.8l-1.24,0.09l-2.24,1.91l-4.44,2.17l-0.2,0.71l-0.29,0.08l-0.45,-0.83l-1.41,-0.06l-0.73,0.42l-0.42,0.8l0.23,0.32l-0.92,0.69l-0.76,-0.84l0.32,-1.05ZM828.05,159.06l-0.02,-0.01l0.02,-0.06l-0.01,0.08ZM845.16,149.05l0.06,-0.06l0.18,-0.06l-0.11,0.19l-0.13,-0.07ZM844.3,154.94l0.1,-0.89l0.74,-1.16l1.65,-1.52l1.01,0.31l0.05,-0.82l0.79,0.67l-3.36,3.21l-0.67,0.45l-0.31,-0.25ZM850.39,150.14l0.02,-0.03l0.07,-0.07l-0.09,0.1ZM722.09,155.56l3.76,-3.85l1.27,-2.19l1.76,-1.86l1.16,-0.78l1.28,-3.35l1.56,-1.3l0.53,-0.83l-0.21,-1.83l-1.61,-2.42l0.43,-1.13l-0.17,-0.78l-0.83,-0.53l-2.11,-0.0l0.04,-0.99l-0.57,-2.22l4.99,-2.94l4.49,-1.8l2.38,-0.19l1.84,-0.74l5.64,-0.24l3.13,1.25l3.16,-1.68l5.49,-1.06l0.58,0.45l0.68,-0.2l0.12,-0.98l1.45,-0.72l1.03,-0.93l0.75,-0.2l0.69,-2.05l1.87,-1.76l0.79,-1.26l1.12,0.03l1.13,-0.52l1.07,-1.63l-0.46,-0.7l0.36,-1.2l-0.25,-0.51l-0.64,0.02l-0.17,-1.17l-0.94,-1.59l-1.01,-0.62l0.12,-0.18l0.59,0.39l0.53,-0.27l0.75,-1.44l-0.01,-0.91l0.81,-0.65l-0.01,-0.97l-0.93,-0.19l-0.6,0.7l-0.28,0.12l0.56,-1.3l-0.81,-0.62l-1.26,0.05l-0.87,0.77l-0.92,-0.41l-0.06,-0.29l2.05,-2.5l1.78,-1.47l1.67,-2.64l0.7,-0.56l0.11,-0.59l0.78,-0.95l0.07,-0.56l-0.5,-0.95l0.78,-1.89l4.82,-7.61l4.77,-4.5l2.84,-0.51l19.67,-5.66l0.41,0.88l-0.08,2.01l1.02,1.22l0.43,3.8l2.29,3.25l-0.09,1.89l0.85,2.42l-0.59,1.07l-0.0,3.41l0.71,0.9l1.32,2.76l0.19,1.09l0.62,0.84l0.12,3.92l0.55,0.85l0.54,0.07l0.53,-0.61l0.06,-0.87l0.33,-0.07l1.05,1.12l3.97,15.58l0.74,1.2l0.22,15.32l0.6,0.62l3.57,16.23l1.26,1.34l-2.82,3.18l0.03,0.54l1.52,1.31l0.19,0.6l-0.78,0.88l-0.64,1.8l-0.41,0.39l0.15,0.69l-1.25,0.64l0.04,-4.02l-0.57,-2.28l-0.74,-1.62l-1.46,-1.1l-0.17,-1.13l-0.7,-0.1l-0.42,1.33l0.68,1.27l1.05,0.83l0.97,2.85l-13.75,-4.06l-1.28,-1.47l-2.39,0.24l-0.63,-0.43l-1.06,-0.15l-1.74,-1.91l-0.75,-2.33l0.12,-0.72l-0.36,-0.63l-0.56,-0.21l0.09,-0.46l-0.35,-0.42l-1.64,-0.68l-1.08,0.32l-0.53,-1.22l-1.92,-0.93l-34.6,8.73l-34.44,7.84l-1.11,-5.15ZM818.84,168.69l1.08,-0.48l0.14,0.63l-1.17,1.53l-0.05,-1.68ZM730.07,136.63l0.03,-0.69l0.78,-0.07l-0.38,1.09l-0.43,-0.33Z", "name": "New York"}, "US-HI": {"path": "M295.5,583.17l0.06,-1.75l4.12,-4.97l1.03,-3.4l-0.33,-0.64l0.94,-2.43l-0.05,-3.52l0.39,-0.78l2.47,-0.7l1.55,0.23l4.45,-1.4l0.51,-0.7l-0.17,-2.69l0.4,-1.66l1.78,-1.16l1.74,2.15l-0.15,0.94l1.88,3.6l0.94,0.35l5.13,7.65l0.86,3.93l-1.52,3.14l0.22,0.58l1.47,0.95l-0.68,2.07l0.35,1.51l1.6,3.0l-1.39,0.86l-2.28,-0.2l-3.27,0.51l-4.56,-1.32l-2.15,-1.34l-6.66,-0.15l-1.59,0.26l-1.56,1.19l-1.63,0.58l-1.14,0.02l-0.7,-2.54l-2.09,-2.18ZM306.33,530.7l1.6,0.08l0.51,2.07l-0.3,2.25l0.37,0.59l2.33,0.88l1.38,0.1l1.55,1.39l0.27,1.55l0.93,0.97l-0.13,1.05l1.83,2.52l-0.13,0.66l-0.61,0.48l-1.82,0.38l-1.84,-0.18l-1.47,-1.19l-2.21,-0.24l-2.69,-1.48l0.01,-1.23l1.15,-1.86l0.41,-2.07l-1.76,-1.28l-1.08,-1.75l-0.1,-2.61l1.79,-1.08ZM297.2,518.01l0.71,0.31l0.38,1.05l2.64,2.0l0.9,1.11l0.92,0.08l0.8,1.67l1.56,1.05l0.72,0.06l1.07,1.11l-1.31,0.41l-2.75,-0.66l-3.23,-3.93l-3.16,-2.01l-1.39,-0.44l-0.05,-0.7l1.58,-0.43l0.62,-0.67ZM301.59,541.55l-2.09,-0.98l-0.28,-0.51l2.92,0.34l-0.56,1.15ZM298.23,532.36l-0.92,-0.29l-0.72,-0.89l0.92,-2.06l-0.49,-1.73l2.6,1.38l0.61,2.08l0.14,1.06l-2.15,0.45ZM281.13,503.64l0.57,-1.85l-0.38,-0.9l-0.16,-2.84l0.75,-0.92l-0.12,-1.22l2.74,1.9l2.9,-0.62l1.56,0.15l0.38,1.01l-0.33,2.17l0.29,1.5l-0.69,0.6l-0.19,1.55l0.38,1.54l0.86,0.51l0.29,1.07l-0.52,1.14l0.53,1.28l-1.18,-0.0l-0.2,-0.48l-2.04,-0.86l-0.77,-2.83l-1.27,-0.38l0.8,-0.11l0.32,-0.46l-0.08,-0.66l-0.63,-0.68l-1.75,-0.32l0.23,1.82l-2.28,-1.1ZM259.66,469.47l-0.24,-2.03l-0.91,-0.69l-0.68,-1.23l0.08,-1.2l0.08,-0.34l2.39,-0.81l4.6,0.53l0.67,1.04l2.51,1.09l0.69,1.25l-0.15,1.9l-2.3,1.32l-0.74,1.3l-0.79,0.34l-2.78,0.09l-0.92,-1.53l-1.52,-1.0ZM245.78,462.61l-0.23,-0.74l1.03,-0.75l4.32,-0.72l0.43,0.3l-0.92,0.4l-0.68,0.94l-1.66,-0.5l-1.36,0.34l-0.94,0.72Z", "name": "Hawaii"}, "US-VT": {"path": "M805.56,72.69l26.03,-7.97l0.89,1.85l-0.74,2.37l-0.03,1.54l2.22,2.75l-0.51,0.58l0.26,1.13l-0.67,1.6l-1.35,1.49l-0.64,1.32l-1.72,0.7l-0.62,0.92l-0.1,0.98l0.93,3.74l-0.29,2.44l0.4,0.54l-0.6,2.11l0.15,2.19l-1.0,1.87l0.27,2.36l-0.53,1.54l1.43,5.44l-0.22,1.22l1.05,5.3l-0.58,0.85l0.11,2.31l0.6,1.26l1.51,1.1l-11.44,2.89l-0.57,-0.85l-4.02,-15.75l-1.72,-1.59l-0.91,0.25l-0.3,1.19l-0.12,-0.26l-0.11,-3.91l-0.68,-1.0l-0.14,-0.98l-1.37,-2.85l-0.63,-0.68l0.01,-3.15l0.6,-1.15l-0.86,-2.57l0.08,-1.93l-0.39,-0.91l-1.55,-1.63l-0.38,-0.81l-0.41,-3.71l-1.03,-1.27l0.11,-1.87l-0.43,-1.01Z", "name": "Vermont"}, "US-NM": {"path": "M230.86,422.88l11.82,-123.66l25.67,2.24l26.1,1.86l26.12,1.45l25.74,1.02l-0.31,10.24l-0.74,0.39l-3.59,98.69l-32.38,-1.34l-33.53,-2.02l-0.44,0.76l0.54,2.31l0.44,1.26l0.99,0.76l-30.55,-2.46l-0.43,0.36l-0.82,9.46l-14.63,-1.33Z", "name": "New Mexico"}, "US-NC": {"path": "M826.87,289.49l0.07,-0.05l-0.02,0.03l-0.04,0.02ZM819.58,272.4l0.2,0.23l-0.05,0.01l-0.16,-0.24ZM821.84,276.68l0.19,0.15l-0.02,0.18l-0.05,-0.08l-0.12,-0.25ZM676.72,321.77l0.92,0.17l1.52,-0.39l0.42,-0.39l0.52,-0.97l0.13,-2.7l1.34,-1.19l0.47,-1.05l2.24,-1.47l2.12,-0.52l0.76,0.18l1.32,-0.52l2.36,-2.52l0.78,-0.25l1.84,-2.29l1.48,-1.0l1.55,-0.19l1.15,-2.65l-0.28,-1.22l1.66,0.06l0.51,-1.65l0.93,-0.77l1.08,-0.77l0.51,1.52l1.07,0.33l1.34,-1.17l1.35,-2.64l2.49,-1.59l0.79,0.08l0.82,0.8l1.06,-0.21l0.84,-1.07l1.47,-4.18l1.08,-1.1l1.47,0.09l0.44,-0.31l-0.69,-1.26l0.4,-2.0l-0.42,-0.9l0.38,-1.25l7.42,-0.86l19.54,-3.36l37.22,-8.42l31.12,-7.87l0.4,1.21l3.54,3.24l1.0,1.53l-1.21,-1.0l-0.16,-0.63l-0.92,-0.4l-0.52,0.05l-0.24,0.65l0.66,0.54l0.59,1.56l-0.53,0.01l-0.91,-0.75l-2.31,-0.8l-0.4,-0.48l-0.55,0.13l-0.31,0.69l0.14,0.64l1.37,0.44l1.69,1.38l-1.11,0.66l-2.48,-1.2l-0.36,0.51l0.14,0.42l1.6,1.18l-1.84,-0.33l-2.23,-0.87l-0.46,0.14l0.01,0.48l0.6,0.7l1.71,0.83l-0.97,0.58l0.0,0.6l-0.43,0.53l-1.48,0.74l-0.89,-0.77l-0.61,0.22l-0.1,0.35l-0.2,-0.13l-1.32,-2.32l0.21,-2.63l-0.42,-0.48l-0.89,-0.22l-0.37,0.64l0.62,0.71l-0.43,0.99l-0.02,1.04l0.49,1.73l1.6,2.2l-0.31,1.28l0.48,0.29l2.97,-0.59l2.1,-1.49l0.27,0.01l0.37,0.79l0.76,-0.34l1.56,0.05l0.16,-0.71l-0.57,-0.32l1.29,-0.76l2.04,-0.46l-0.1,1.19l0.64,0.29l-0.6,0.88l0.89,1.19l-0.84,0.1l-0.19,0.66l1.38,0.46l0.26,0.94l-1.21,0.05l-0.19,0.66l0.66,0.59l1.25,-0.16l0.52,0.26l0.4,-0.38l0.18,-1.95l-0.75,-3.33l0.41,-0.48l0.56,0.43l0.94,0.06l0.28,-0.57l-0.29,-0.44l0.48,-0.57l1.71,1.84l-0.0,1.41l0.62,0.9l-0.53,0.18l-0.25,0.47l0.9,1.14l-0.08,0.37l-0.42,0.55l-0.78,0.09l-0.91,-0.86l-0.32,0.33l0.13,1.26l-1.08,1.61l0.2,0.57l-0.32,0.22l-0.15,0.98l-0.74,0.55l0.1,0.91l-0.9,0.96l-1.06,0.21l-0.59,-0.37l-0.52,0.52l-0.93,-0.81l-0.86,0.1l-0.4,-0.82l-0.59,-0.21l-0.52,0.38l0.08,0.94l-0.52,0.22l-1.42,-1.25l1.31,-0.4l0.23,-0.88l-0.57,-0.42l-2.02,0.31l-1.14,1.01l0.29,0.67l0.44,0.16l0.09,0.82l0.35,0.25l-0.03,0.12l-0.57,-0.34l-1.69,0.83l-1.12,-0.43l-1.45,0.06l-3.32,-0.7l0.42,1.08l0.97,0.45l0.36,0.64l0.63,0.11l0.87,-0.32l1.68,0.63l2.35,0.39l3.51,0.11l0.47,0.42l-0.06,0.52l-0.99,0.05l-0.38,0.5l0.13,0.23l-1.62,1.44l0.32,0.58l1.85,0.01l-2.55,3.5l-1.67,0.04l-1.59,-0.98l-0.9,-0.19l-1.21,-1.02l-1.12,0.07l0.07,0.47l1.04,1.14l2.32,2.09l2.68,0.26l1.31,0.49l1.71,-2.16l0.51,0.47l1.17,0.33l0.4,-0.57l-0.55,-0.9l0.87,0.16l0.19,0.57l0.66,0.24l1.63,-1.2l-0.18,0.61l0.29,0.57l-0.29,0.38l-0.43,-0.2l-0.41,0.37l0.03,0.9l-0.97,1.72l0.01,0.78l-0.71,-0.07l-0.06,-0.74l-1.12,-0.61l-0.42,0.47l0.27,1.45l-0.52,-1.1l-0.65,-0.16l-1.22,1.08l-0.21,0.52l0.25,0.27l-2.03,0.32l-2.75,1.84l-0.67,-1.04l-0.75,-0.29l-0.37,0.49l0.43,1.26l-0.57,-0.01l-0.09,0.82l-0.94,1.73l-0.91,0.85l-0.59,-0.26l0.49,-0.69l-0.02,-0.77l-1.06,-0.93l-0.08,-0.52l-1.69,-0.41l-0.16,0.47l0.43,1.16l0.2,0.33l0.58,0.07l0.3,0.61l-0.88,0.37l-0.08,0.71l0.65,0.64l0.77,0.18l-0.01,0.37l-2.12,1.67l-1.92,2.65l-2.0,4.31l-0.34,2.13l0.12,1.34l-0.15,-1.03l-1.01,-1.59l-0.55,-0.17l-0.3,0.48l1.17,3.95l-0.63,2.27l-3.9,0.19l-1.43,0.65l-0.35,-0.52l-0.58,-0.18l-0.54,1.07l-1.9,1.14l-0.61,-0.02l-23.25,-15.36l-1.05,-0.02l-18.68,3.49l-0.65,-2.77l-3.25,-2.84l-0.47,0.08l-1.23,1.31l-0.01,-1.29l-0.82,-0.54l-22.82,3.35l-0.64,-0.27l-0.62,0.46l-0.25,0.65l-3.98,1.93l-0.89,1.23l-1.01,0.08l-4.78,2.66l-20.95,3.93l-0.34,-4.55l0.7,-0.95ZM817.0,271.48l0.19,0.35l0.24,0.39l-0.45,-0.41l0.02,-0.32ZM807.53,290.29l0.2,0.32l-0.16,-0.09l-0.03,-0.23ZM815.31,299.15l0.16,-0.36l0.16,0.07l-0.13,0.29l-0.19,0.01ZM812.76,299.11l-0.06,-0.28l-0.03,-0.11l0.3,0.26l-0.21,0.13ZM812.97,264.02l0.37,-0.24l0.15,0.42l-0.42,0.07l-0.1,-0.25ZM791.92,329.4l0.04,-0.08l0.22,0.03l-0.0,0.09l-0.26,-0.05Z", "name": "North Carolina"}, "US-ND": {"path": "M438.54,42.78l2.06,6.9l-0.73,2.53l0.57,2.36l-0.27,1.17l0.47,1.99l0.01,3.26l1.42,3.95l0.45,0.54l-0.08,0.97l0.39,1.52l0.62,0.74l1.48,3.74l-0.06,3.9l0.42,0.7l0.5,8.35l0.51,1.54l0.51,0.25l-0.47,2.64l0.36,1.63l-0.14,1.75l0.69,1.1l0.2,2.16l0.49,1.13l1.8,2.56l0.15,2.2l0.51,1.08l0.17,1.39l-0.24,1.36l0.28,1.74l-27.89,0.73l-28.38,0.19l-28.38,-0.37l-28.49,-0.93l2.75,-65.47l23.08,0.78l25.57,0.42l25.57,-0.06l24.11,-0.49Z", "name": "North Dakota"}, "US-NE": {"path": "M422.58,174.02l3.92,2.71l3.93,1.9l1.34,-0.22l0.51,-0.47l0.36,-1.08l0.48,-0.2l2.49,0.34l1.32,-0.47l1.58,0.25l3.45,-0.65l2.37,1.98l1.4,0.14l1.55,0.77l1.45,0.08l0.88,1.1l1.49,0.17l-0.06,0.98l1.68,2.08l3.32,0.6l0.19,0.68l-0.22,1.87l1.13,1.94l0.01,2.29l1.15,1.08l0.34,1.72l1.73,1.46l0.07,1.88l1.5,2.11l-0.49,2.33l0.44,3.09l0.52,0.54l0.94,-0.2l-0.04,1.25l1.21,0.5l-0.41,2.36l0.21,0.44l1.12,0.4l-0.6,0.77l-0.09,1.01l0.13,0.59l0.82,0.5l0.16,1.45l-0.26,0.92l0.26,1.27l0.55,0.61l0.3,1.93l-0.22,1.33l0.23,0.72l-0.57,0.92l0.02,0.79l0.45,0.88l1.23,0.63l0.25,2.5l1.1,0.51l0.03,0.79l1.18,2.75l-0.23,0.96l1.16,0.21l0.8,0.99l1.1,0.24l-0.15,0.96l1.31,1.68l-0.21,1.12l0.51,0.91l-26.15,1.05l-27.83,0.63l-27.84,0.14l-27.89,-0.35l0.46,-21.66l-0.39,-0.41l-32.36,-1.04l1.85,-43.24l43.36,1.22l44.67,-0.04Z", "name": "Nebraska"}, "US-LA": {"path": "M508.97,412.97l-1.33,-21.76l51.44,-4.07l0.34,0.83l1.48,0.66l-0.92,1.35l-0.25,2.13l0.49,0.72l1.18,0.31l-1.21,0.47l-0.45,0.78l0.45,1.36l1.05,0.84l0.08,2.15l0.46,0.54l1.51,0.74l0.45,1.05l1.42,0.44l-0.87,1.22l-0.85,2.34l-0.75,0.04l-0.52,0.51l-0.02,0.73l0.63,0.72l-0.22,1.16l-1.35,0.96l-1.08,1.89l-1.37,0.67l-0.68,0.83l-0.79,2.42l-0.25,3.52l-1.55,1.74l0.13,1.21l0.62,0.96l-0.35,2.38l-1.61,0.29l-0.6,0.57l0.28,0.97l0.64,0.59l-0.26,1.41l0.98,1.51l-1.18,1.18l-0.08,0.45l0.4,0.23l6.18,-0.55l29.23,-2.92l-0.68,3.47l-0.52,1.02l-0.2,2.24l0.69,0.98l-0.09,0.66l0.6,1.0l1.31,0.7l1.22,1.42l0.14,0.88l0.89,1.39l0.14,1.05l1.11,1.84l-1.85,0.39l-0.38,-0.08l-0.01,-0.56l-0.53,-0.57l-1.28,0.28l-1.18,-0.59l-1.51,0.17l-0.61,-0.98l-1.24,-0.86l-2.84,-0.47l-1.24,0.63l-1.39,2.3l-1.3,1.42l-0.42,0.91l0.07,1.2l0.55,0.89l0.82,0.57l4.25,0.82l3.35,-1.0l1.32,-1.19l0.68,-1.19l0.34,0.59l1.08,0.43l0.59,-0.4l0.81,0.03l0.51,-0.46l-0.76,1.21l-1.12,-0.12l-0.57,0.32l-0.38,0.62l0.0,0.83l0.77,1.22l1.48,-0.02l0.65,0.89l1.1,0.48l0.94,-0.21l0.51,-0.45l0.46,-1.11l-0.02,-1.37l0.93,-0.58l0.42,-0.99l0.23,0.05l0.1,1.16l-0.24,0.25l0.18,0.57l0.43,0.15l-0.07,0.75l1.34,1.08l0.34,-0.16l-0.48,0.59l0.18,0.63l-0.35,0.13l-0.52,-0.57l-0.92,-0.19l-1.0,1.89l-0.85,0.14l-0.46,0.53l0.16,1.19l-1.6,-0.61l-0.43,0.19l0.04,0.46l1.14,1.06l-1.17,-0.14l-0.92,0.61l0.68,0.43l1.26,2.04l2.74,0.97l-0.08,1.2l0.34,0.41l2.07,-0.32l0.77,0.17l0.17,0.53l0.73,0.32l1.35,-0.34l0.53,0.78l1.08,-0.46l1.13,0.74l0.14,0.3l-0.4,0.62l1.54,0.86l-0.39,0.65l0.39,0.58l-0.18,0.62l-0.95,1.49l-1.3,-1.56l-0.68,0.34l0.1,0.66l-0.38,0.12l0.41,-1.88l-1.33,-0.76l-0.5,0.5l0.2,1.18l-0.54,0.45l-0.27,-1.02l-0.57,-0.25l-0.89,-1.27l0.03,-0.77l-0.96,-0.14l-0.47,0.5l-1.41,-0.17l-0.41,-0.61l0.14,-0.63l-0.39,-0.46l-0.45,-0.02l-0.81,0.73l-1.18,0.02l0.12,-1.23l-0.46,-0.88l-0.91,0.04l0.09,-0.96l-0.37,-0.36l-0.91,-0.03l-0.22,0.58l-0.85,-0.38l-0.48,0.27l-2.61,-1.26l-1.24,-0.03l-0.67,-0.64l-0.61,0.19l-0.3,0.56l-0.05,1.25l1.72,0.94l1.67,0.35l-0.16,0.92l0.28,0.39l-0.34,0.35l0.23,0.68l-0.76,0.95l-0.02,0.66l0.81,0.97l-0.95,1.43l-1.33,0.94l-0.76,-1.15l0.22,-1.5l-0.35,-0.92l-0.49,-0.18l-0.4,0.36l-1.15,-1.08l-0.59,0.42l-0.76,-1.05l-0.62,-0.2l-0.64,1.33l-0.85,0.26l-0.88,-0.53l-0.86,0.53l-0.1,0.62l0.48,0.41l-0.68,0.56l-0.13,1.44l-0.46,0.13l-0.39,0.83l-0.92,0.08l-0.11,-0.68l-1.6,-0.4l-0.77,0.97l-1.92,-0.93l-0.3,-0.54l-0.99,0.01l-0.35,0.6l-1.16,-0.51l0.42,-0.4l0.01,-1.46l-0.38,-0.57l-1.9,-1.19l-0.08,-0.54l-0.83,-0.72l-0.09,-0.91l0.73,-1.15l-0.34,-1.14l-0.87,-0.19l-0.34,0.57l0.16,0.43l-0.59,0.81l0.04,0.91l-1.8,-0.4l0.07,-0.39l-0.47,-0.54l-1.97,0.76l-0.7,-2.22l-1.32,0.23l-0.18,-2.12l-1.31,-0.35l-1.89,0.3l-1.09,0.65l-0.21,-0.71l0.84,-0.26l-0.05,-0.8l-0.6,-0.58l-1.03,-0.1l-0.85,0.42l-0.95,-0.15l-0.4,0.8l-2.0,1.11l-0.63,-0.31l-1.29,0.71l0.54,1.37l0.8,0.31l0.97,1.51l-1.39,0.19l-1.83,1.03l-3.69,-0.4l-1.24,0.21l-3.09,-0.45l-1.99,-0.68l-1.81,-1.07l-3.7,-1.1l-3.19,-0.48l-2.53,0.58l-5.62,0.45l-1.0,0.26l-1.82,1.25l-0.59,-0.63l-0.26,-1.08l1.59,-0.47l0.7,-1.76l-0.02,-1.55l-0.39,-0.56l1.11,-1.54l0.23,-1.59l-0.5,-1.83l0.07,-1.46l-0.66,-0.7l-0.21,-1.04l0.83,-2.22l-0.64,-1.95l0.76,-0.84l0.3,-1.49l0.78,-0.94l0.79,-2.83l-0.18,-1.42l0.58,-0.97l-0.75,-1.33l0.84,-0.39l0.2,-0.44l-0.89,-1.36l0.03,-2.13l-1.07,-0.23l-0.57,-1.57l-0.92,-0.84l0.28,-1.27l-0.81,-0.76l-0.33,-0.95l-0.64,-0.34l0.22,-0.98l-1.16,-0.58l-0.81,-0.93l0.16,-2.46l-0.68,-1.93l-1.33,-1.98l-2.63,-2.21ZM607.49,467.45l-0.03,-0.03l-0.07,-0.04l0.13,-0.01l-0.03,0.08ZM607.51,465.85l-0.02,-0.01l0.03,-0.01l-0.02,0.02ZM567.04,468.98l-2.0,-0.42l-0.66,-0.5l0.73,-0.43l0.35,-0.76l0.39,0.49l0.83,0.21l-0.15,0.61l0.5,0.81ZM550.39,463.0l1.73,-1.05l3.34,1.07l-0.69,0.56l-0.17,0.81l-0.68,0.17l-3.53,-1.57Z", "name": "Louisiana"}, "US-SD": {"path": "M336.37,128.84l0.3,-0.53l0.75,-19.93l28.5,0.93l28.4,0.37l28.4,-0.19l27.78,-0.73l-0.18,1.71l-0.73,1.71l-2.9,2.46l-0.42,1.27l1.59,2.13l1.06,2.06l0.55,0.36l1.74,0.24l1.01,0.84l0.57,1.02l1.45,38.83l-1.84,0.09l-0.42,0.56l0.24,1.44l0.88,1.14l0.01,1.45l-0.65,0.36l0.17,1.48l0.48,0.43l1.09,0.04l0.34,1.68l-0.16,0.91l-0.62,0.83l0.02,1.73l-0.68,2.45l-0.49,0.44l-0.67,1.88l0.5,1.1l1.33,1.08l-0.16,0.62l0.64,0.66l0.35,1.15l-1.65,-0.28l-0.34,-0.94l-0.85,-0.73l0.19,-0.61l-0.28,-0.59l-1.58,-0.23l-1.03,-1.18l-1.57,-0.11l-1.51,-0.75l-1.34,-0.12l-2.38,-1.99l-3.78,0.6l-1.65,-0.25l-1.19,0.46l-2.62,-0.33l-0.98,0.48l-0.76,1.45l-0.72,0.05l-3.67,-1.82l-4.13,-2.8l-44.83,0.05l-43.33,-1.22l1.79,-43.2Z", "name": "South Dakota"}, "US-DC": {"path": "M781.25,216.97l0.45,-0.77l2.04,1.26l-0.66,1.14l-0.55,-1.05l-1.28,-0.58Z", "name": "District of Columbia"}, "US-DE": {"path": "M798.52,195.11l0.42,-1.51l0.92,-1.11l1.72,-0.71l1.12,0.06l-0.33,0.56l-0.08,1.38l-1.13,1.92l0.1,1.09l1.11,1.1l-0.07,1.52l2.29,2.48l1.25,0.6l0.93,1.52l0.99,3.35l1.72,1.57l0.57,1.32l3.06,1.99l1.44,-0.09l0.45,1.25l-1.06,0.56l0.16,1.32l0.36,0.19l-0.83,0.57l-0.08,1.21l0.66,0.21l0.85,-0.73l0.71,0.34l0.3,-0.21l0.75,1.55l-10.19,2.82l-8.12,-26.12Z", "name": "Delaware"}, "US-FL": {"path": "M630.28,423.69l47.19,-6.86l1.53,1.91l0.87,2.72l1.47,1.0l48.79,-5.11l1.03,1.38l0.03,1.09l0.55,1.05l1.04,0.48l1.64,-0.28l0.85,-0.75l-0.14,-4.57l-0.98,-1.49l-0.22,-1.77l0.28,-0.74l0.62,-0.3l0.12,-0.7l5.6,0.96l4.03,-0.16l0.14,1.24l-0.75,-0.12l-0.33,0.43l0.25,1.54l2.11,1.81l0.22,1.01l0.42,0.38l0.29,1.92l1.87,3.29l1.7,4.87l0.73,0.84l0.51,1.5l1.64,2.46l0.64,1.57l2.79,3.71l1.93,3.18l2.29,2.77l0.16,0.6l0.63,0.36l6.82,7.53l-0.48,-0.03l-0.27,0.61l-1.35,-0.02l-0.34,-0.65l0.38,-1.38l-0.16,-0.56l-2.3,-0.92l-0.46,0.53l1.0,2.8l0.78,0.97l2.14,4.77l9.92,13.71l1.37,3.11l3.66,5.34l-1.38,-0.35l-0.43,0.74l0.8,0.65l0.85,0.24l0.56,-0.22l1.46,0.94l2.05,3.05l-0.5,0.34l-0.12,0.53l1.16,0.53l0.89,1.83l-0.08,1.06l0.59,0.95l0.61,2.64l-0.27,0.75l0.93,8.98l-0.31,1.07l0.46,0.67l0.5,3.1l-0.81,1.46l0.07,2.23l-0.84,0.74l-0.22,1.8l-0.48,0.85l0.21,1.47l-0.3,1.75l0.54,1.74l0.45,0.23l-1.15,1.8l-0.39,1.28l-0.94,0.24l-0.53,-0.22l-1.37,0.45l-0.35,1.06l-0.89,0.3l-0.18,0.58l-0.85,0.67l-1.44,0.14l-0.27,-0.32l-1.23,-0.1l-0.9,1.05l-3.17,1.13l-1.06,-0.59l-0.7,-1.04l0.06,-1.79l1.0,0.84l1.64,0.47l0.26,0.63l0.52,0.07l1.35,-0.72l0.2,-0.69l-0.26,-0.64l-1.58,-1.11l-2.4,-0.26l-0.91,-0.46l-0.85,-1.67l-0.89,-0.72l0.22,-0.98l-0.48,-0.28l-0.53,0.15l-1.38,-2.51l-0.44,-0.3l-0.64,0.07l-0.44,-0.61l0.22,-0.89l-0.7,-0.65l-1.21,-0.6l-1.06,-0.08l-0.75,-0.54l-0.57,0.18l-2.8,-0.59l-0.5,0.64l0.25,-0.91l-0.46,-0.42l-0.87,0.12l-0.26,-0.72l-0.88,-0.65l-0.61,-1.41l-0.55,-0.11l-0.72,-2.94l-0.77,-1.0l-0.16,-1.52l-0.44,-0.83l-0.71,-0.89l-0.49,-0.15l-0.12,0.93l-1.29,-0.26l1.06,-1.3l0.3,-0.75l-0.12,-0.63l0.86,-1.46l0.65,-0.34l0.28,-0.83l-0.61,-0.38l-1.42,0.93l-0.89,1.29l-0.42,2.17l-1.37,0.35l-0.21,-1.33l-0.79,-1.33l-0.27,-4.04l-0.86,-0.6l1.63,-1.33l0.22,-0.97l-0.58,-0.42l-3.06,1.92l-0.75,-0.66l-0.4,0.26l-1.27,-0.89l-0.37,0.74l1.13,1.09l0.52,0.1l1.26,2.0l-1.04,0.23l-1.42,-0.38l-0.84,-1.6l-1.13,-0.6l-1.94,-2.55l-1.04,-2.28l-1.28,-0.87l0.1,-0.87l-0.97,-1.8l-1.77,-0.98l0.09,-0.67l0.99,-0.41l-0.35,-0.49l0.44,-0.73l-0.39,-0.35l0.4,-1.21l2.47,-4.47l-1.05,-2.41l-0.68,-0.46l-0.92,0.42l-0.28,0.93l0.29,1.2l-0.24,0.03l-0.73,-2.44l-0.99,-0.28l-1.19,-0.87l-1.52,-0.31l0.29,1.95l-0.48,0.61l0.27,0.59l2.21,0.56l0.25,0.97l-0.37,2.46l-0.31,-0.58l-0.8,-0.22l-2.13,-1.53l-0.41,0.2l-0.29,-0.63l0.59,-2.11l0.07,-2.97l-0.66,-1.97l0.42,-0.51l0.48,-1.91l-0.24,-0.54l0.66,-3.04l-0.35,-5.26l-0.71,-1.7l0.35,-0.47l-0.47,-2.18l-2.1,-1.33l-0.05,-0.52l-0.55,-0.43l-0.1,-1.01l-0.92,-0.73l-0.55,-1.51l-0.64,-0.25l-1.44,0.32l-1.03,-0.2l-1.57,0.54l-1.14,-1.74l-1.51,-0.48l-0.19,-0.6l-1.35,-1.51l-0.87,-0.59l-0.62,0.07l-1.52,-1.16l-0.8,-0.21l-0.51,-2.75l-3.06,-1.13l-0.65,-0.59l-0.52,-1.23l-2.15,-1.93l-2.19,-1.09l-1.45,-0.12l-3.44,-1.68l-2.85,0.98l-1.0,-0.4l-1.05,0.42l-0.35,0.68l-1.33,0.68l-0.5,0.7l0.03,0.64l-0.73,-0.22l-0.59,0.6l0.67,0.94l1.51,0.08l0.41,0.21l-3.03,0.23l-1.58,1.51l-0.91,0.45l-1.3,1.56l-1.56,1.03l-0.32,0.13l0.2,-0.48l-0.26,-0.54l-0.66,-0.04l-0.96,0.75l-1.12,1.5l-2.2,0.23l-2.11,1.06l-0.78,0.03l-0.27,-2.03l-1.71,-2.23l-2.21,-1.0l-0.18,-0.41l-2.51,-1.5l2.79,1.33l1.21,-0.74l0.0,-0.74l-1.32,-0.34l-0.36,0.55l-0.21,-1.01l-0.34,-0.1l0.13,-0.52l-0.49,-0.33l-1.39,0.61l-2.3,-0.76l0.65,-1.08l0.83,-0.1l1.03,-1.45l-0.91,-0.95l-0.46,0.12l-0.49,1.02l-0.44,-0.04l-0.81,0.56l-0.72,-0.9l-0.7,0.09l-0.17,0.38l-1.34,0.73l-0.14,0.68l0.29,0.46l-3.95,-1.35l-5.05,-0.71l0.12,-0.24l1.27,0.29l0.61,-0.53l2.1,0.39l0.23,-0.78l-0.94,-1.02l0.09,-0.7l-0.63,-0.28l-0.5,0.32l-0.28,-0.47l-1.9,0.19l-2.25,1.1l0.3,-0.63l-0.41,-0.58l-0.96,0.35l-0.58,-0.25l-0.23,0.44l0.2,0.71l-1.45,0.8l-0.4,0.63l-5.18,0.97l0.32,-0.52l-0.4,-0.52l-1.35,-0.28l-0.72,-0.53l0.69,-0.53l0.01,-0.78l-0.68,-0.13l-0.81,-0.66l-0.46,0.11l0.14,0.76l-0.42,1.77l-1.05,-1.39l-0.69,-0.45l-0.55,0.07l-0.3,0.71l0.82,1.77l-0.25,0.79l-1.39,0.99l-0.05,1.04l-0.6,0.22l-0.17,0.57l-1.48,0.56l0.28,-0.65l-0.21,-0.46l1.14,-1.03l0.07,-0.74l-0.4,-0.58l-1.19,-0.24l-0.41,-0.84l0.3,-1.7l-0.18,-1.61l-2.17,-1.12l-2.39,-2.46l0.32,-1.44l-0.15,-1.04ZM767.29,490.44l0.48,1.07l0.9,0.39l0.78,-0.15l1.41,1.67l0.91,0.58l1.86,0.69l1.61,0.07l0.55,-0.44l-0.08,-0.87l0.55,-0.65l-0.16,-1.21l0.76,-1.36l0.09,-1.81l-0.64,-1.62l-1.46,-2.01l-1.74,-1.32l-1.19,-0.13l-1.12,0.83l-1.83,3.16l-2.12,1.94l-0.13,0.77l0.57,0.41ZM644.36,434.13l-0.94,0.26l0.41,-0.44l0.53,0.18ZM665.13,435.7l0.98,-0.28l0.35,0.32l0.09,0.72l-1.42,-0.75ZM770.56,455.01l0.42,0.56l-0.43,0.75l0.0,-1.31ZM788.88,525.23l0.01,-0.07l0.01,0.03l-0.03,0.04ZM789.47,522.87l-0.22,-0.23l0.49,-0.32l-0.27,0.55ZM768.83,453.61l0.21,0.76l-0.31,2.33l0.28,1.79l-1.38,-3.23l1.19,-1.65ZM679.81,445.61l0.22,-0.2l0.36,0.02l-0.11,0.42l-0.47,-0.25Z", "name": "Florida"}, "US-WA": {"path": "M38.52,55.26l0.46,-1.32l0.18,0.45l0.65,0.3l1.04,-0.74l0.43,0.59l0.7,-0.03l0.17,-0.77l-0.92,-1.56l0.79,-0.74l-0.09,-1.36l0.49,-0.39l-0.1,-1.03l0.81,-0.27l0.05,0.5l0.48,0.41l0.95,-0.31l-0.09,-0.68l-1.35,-1.65l-0.9,0.15l-1.88,-0.56l0.17,-1.98l0.66,0.53l0.52,-0.07l0.29,-0.56l-0.16,-0.67l3.3,-0.52l0.26,-0.69l-1.7,-0.96l-0.86,-0.14l-0.37,-1.51l-0.7,-0.42l-0.81,-0.02l0.32,-4.73l-0.49,-1.28l0.1,-0.69l-0.4,-0.34l0.76,-5.74l-0.13,-2.46l-0.45,-0.62l-0.16,-1.36l-0.65,-1.33l-0.73,-0.57l-0.32,-2.45l0.35,-2.27l-0.15,-1.11l1.74,-3.3l-0.52,-1.23l4.59,3.9l1.19,0.38l0.92,0.75l0.81,1.3l1.86,1.08l3.24,0.91l0.84,0.77l1.42,0.11l1.73,1.02l2.33,0.73l1.46,-0.47l0.52,0.29l0.55,0.69l-0.03,1.09l0.55,0.74l0.31,0.11l0.49,-0.35l0.07,-0.75l0.45,0.03l0.63,1.39l-0.4,0.58l0.34,0.49l0.56,-0.04l0.72,-0.84l-0.38,-1.7l1.03,-0.24l-0.44,0.23l-0.21,0.69l1.27,4.41l-0.46,0.1l-1.67,1.73l0.22,-1.29l-0.22,-0.41l-1.31,0.31l-0.38,0.81l0.09,0.95l-1.37,1.7l-1.98,1.38l-1.06,1.41l-0.96,0.69l-1.1,1.67l-0.06,0.71l0.62,0.6l0.96,0.12l2.77,-0.48l1.22,-0.58l-0.03,-0.7l-0.64,-0.23l-2.94,0.79l-0.35,-0.3l3.23,-3.42l3.06,-0.88l0.89,-1.51l1.73,-1.54l0.53,0.57l0.54,-0.19l0.22,-1.81l-0.06,2.25l0.26,0.91l-0.99,-0.21l-0.64,0.77l-0.41,-0.73l-0.52,-0.19l-0.39,0.64l0.3,0.71l0.02,1.63l-0.21,-1.07l-0.67,-0.21l-0.47,0.69l-0.07,0.75l0.46,0.66l-0.63,0.58l-0.0,0.45l0.42,0.17l1.68,-0.57l0.25,1.09l-1.08,1.79l-0.08,1.05l-0.83,0.7l0.13,1.0l-0.85,-0.68l1.12,-1.44l-0.23,-0.96l-1.96,1.08l-0.38,0.64l-0.05,-2.11l-0.52,0.02l-1.03,1.59l-1.26,0.53l-1.14,1.87l-1.51,0.3l-0.46,0.43l-0.21,1.18l1.11,-0.03l-0.25,0.36l0.27,0.37l0.93,0.02l0.06,0.68l0.53,0.47l0.52,-0.27l0.35,-1.76l0.14,0.42l0.83,-0.15l1.11,1.48l1.31,-0.61l1.65,-1.48l0.98,-1.56l0.63,0.78l0.73,0.14l0.44,-0.23l-0.06,-0.86l1.56,-0.55l0.35,-0.94l-0.33,-1.27l0.22,-1.19l-0.18,-1.36l0.83,0.2l0.3,-0.92l-0.19,-0.75l-0.72,-0.63l0.89,-1.13l0.07,-1.75l1.24,-1.24l0.61,-1.37l1.61,-0.49l0.78,-1.16l-0.45,-0.66l-0.51,-0.02l-0.86,-1.3l0.16,-2.09l-0.26,-0.87l0.49,-0.79l0.06,-0.84l-1.15,-1.73l-0.63,-0.4l-0.17,-0.64l0.18,-0.5l0.59,0.23l0.53,-0.33l0.24,-1.8l0.79,-0.24l0.3,-1.0l-0.61,-2.32l0.44,-0.53l-0.03,-0.86l-0.96,-0.88l-0.95,0.3l-1.09,-2.66l0.93,-1.83l41.31,9.4l38.96,7.65l-9.66,54.39l-0.47,1.02l1.04,3.0l0.13,2.0l-1.0,1.3l0.73,1.88l-31.18,-5.92l-1.67,0.79l-7.24,-1.02l-1.68,0.92l-4.19,-0.12l-3.18,0.45l-1.64,0.75l-0.88,-0.26l-1.2,0.3l-1.51,-0.23l-2.43,-0.94l-0.91,0.46l-3.45,0.51l-2.11,-0.71l-1.65,0.3l-0.31,-1.36l-1.09,-0.88l-4.34,-1.46l-2.32,-0.11l-1.15,-0.51l-1.27,0.21l-1.89,0.86l-4.5,0.58l-1.11,-0.71l-1.15,-0.3l-1.61,-1.15l-1.84,-0.51l-0.63,-0.81l0.64,-6.82l-0.47,-0.95l-0.22,-1.9l-0.98,-1.35l-1.96,-1.67l-2.82,-0.11l-1.03,-1.31l-0.15,-1.05l-0.56,-0.63l-2.36,-0.31l-0.56,-0.3l-0.24,-0.79l-0.5,-0.18l-0.97,0.35l-0.84,-0.26l-1.1,0.4l-0.97,-1.47l-0.89,-0.22ZM61.85,39.78l0.16,0.74l-0.42,0.49l0.0,-0.91l0.26,-0.31ZM71.27,20.38l-0.61,0.87l-0.15,0.52l0.11,-1.01l0.65,-0.38ZM71.14,15.62l-0.09,-0.05l0.05,-0.04l0.04,0.1ZM70.37,15.48l-0.77,0.39l0.37,-0.68l-0.07,-0.6l0.22,-0.07l0.25,0.97ZM57.56,42.45l0.05,-0.02l-0.01,0.01l-0.04,0.02ZM67.75,19.23l1.73,-2.1l0.47,-0.02l0.53,1.71l-0.35,-0.55l-0.51,-0.12l-0.55,0.44l-0.35,-0.09l-0.35,0.73l-0.63,-0.01ZM67.87,20.4l0.44,0.0l0.61,0.5l0.08,0.35l-0.79,-0.2l-0.33,-0.65ZM68.84,23.16l-0.1,0.51l-0.0,0.0l-0.02,-0.24l0.12,-0.28ZM69.15,25.42l0.08,0.04l0.12,-0.04l-0.16,0.11l-0.05,-0.1ZM69.52,25.33l0.48,-0.93l1.02,1.21l0.11,1.12l-0.34,0.36l-0.34,-0.09l-0.27,-1.55l-0.67,-0.12ZM66.34,9.97l0.48,-0.34l0.18,1.51l-0.22,-0.05l-0.44,-1.12ZM68.04,9.66l0.83,0.8l-0.65,0.31l-0.18,-1.11ZM66.69,38.03l0.34,-1.07l0.21,-0.25l-0.03,1.07l-0.52,0.26ZM66.99,33.31l0.1,-1.04l0.35,-0.34l-0.23,1.56l-0.22,-0.18ZM66.51,14.27l-0.41,-0.4l0.6,-0.75l-0.18,0.61l-0.01,0.55ZM66.68,14.62l0.4,0.2l-0.08,0.12l-0.29,-0.12l-0.03,-0.2ZM66.74,12.96l-0.01,-0.1l0.05,-0.12l-0.04,0.23ZM64.36,13.12l-1.06,-0.82l0.19,-1.81l1.33,1.92l-0.35,0.18l-0.11,0.54ZM62.18,42.55l0.23,-0.25l0.02,0.01l-0.13,0.31l-0.12,-0.07ZM60.04,40.3l-0.09,-0.19l0.04,-0.07l0.0,0.13l0.05,0.14Z", "name": "Washington"}, "US-KS": {"path": "M477.9,239.67l0.44,0.63l0.76,0.18l1.04,0.8l2.19,-1.08l-0.0,0.75l1.08,0.79l0.23,1.44l-0.95,-0.15l-0.6,0.31l-0.17,0.97l-1.14,1.37l-0.06,1.14l-0.79,0.5l0.04,0.64l1.56,2.1l2.0,1.49l0.2,1.13l0.42,0.86l0.74,0.56l0.32,1.11l1.89,0.91l1.54,0.26l2.67,46.82l-31.55,1.48l-31.97,0.88l-31.98,0.26l-32.05,-0.37l1.21,-65.47l27.9,0.35l27.86,-0.14l27.85,-0.64l27.68,-1.12l1.65,1.23Z", "name": "Kansas"}, "US-WI": {"path": "M598.7,107.43l0.83,-0.15l-0.13,0.81l-0.56,0.01l-0.14,-0.68ZM594.22,116.05l0.47,-0.41l0.26,-2.36l0.95,-0.25l0.64,-0.69l0.22,-1.4l0.41,-0.63l0.63,-0.03l0.06,0.38l-0.76,0.06l-0.18,0.51l0.17,1.27l-0.38,0.17l-0.11,0.58l0.56,0.57l-0.24,0.65l-0.5,0.33l-0.69,1.91l0.07,1.23l-1.05,2.28l-0.41,0.15l-0.86,-0.97l-0.19,-0.72l0.31,-1.57l0.62,-1.05ZM510.06,124.08l0.41,-0.27l0.28,-0.9l-0.45,-1.48l0.04,-1.91l0.7,-1.16l0.53,-2.25l-1.61,-2.91l-0.83,-0.36l-1.28,-0.01l-0.21,-2.31l1.67,-2.26l-0.05,-0.77l0.77,-1.55l1.95,-1.09l0.48,-0.75l0.97,-0.25l0.45,-0.75l1.16,-0.14l1.04,-1.56l-0.97,-12.11l1.03,-0.35l0.22,-1.1l0.73,-0.97l0.78,0.69l1.68,0.64l2.61,-0.56l3.28,-1.57l2.65,-0.82l2.21,-2.12l0.31,0.29l1.39,-0.11l1.25,-1.48l0.79,-0.58l1.04,-0.1l0.4,-0.52l1.07,0.99l-0.48,1.68l-0.67,1.01l0.23,1.61l-1.21,2.21l0.64,0.66l2.5,-1.09l0.72,-0.86l2.16,1.22l2.34,0.47l0.44,0.54l0.86,-0.13l1.6,0.7l2.23,3.54l15.48,2.52l4.65,1.96l1.68,-0.17l1.63,0.42l1.33,-0.59l3.17,0.71l2.18,0.09l0.85,0.41l0.56,0.89l-0.42,1.09l0.41,0.77l3.4,0.63l1.41,1.13l-0.16,0.71l0.59,1.11l-0.36,0.81l0.43,1.25l-0.78,1.25l-0.03,1.76l0.91,0.63l1.38,-0.26l1.02,-0.72l0.2,0.26l-0.79,2.44l0.04,1.31l1.32,1.46l0.84,0.35l-0.24,2.02l-2.42,1.2l-0.51,0.79l0.04,1.26l-1.61,3.49l-0.4,3.5l1.11,0.82l0.92,-0.04l0.5,-0.36l0.49,-1.37l1.82,-1.47l0.66,-2.53l1.06,-1.7l0.14,0.25l0.45,-0.07l0.57,-0.7l0.88,-0.4l1.12,1.12l0.59,0.19l-0.29,2.21l-1.18,2.82l-0.56,5.58l0.23,1.11l0.8,0.93l0.07,0.52l-0.51,0.98l-1.3,1.34l-0.86,3.89l0.15,2.57l0.72,1.2l0.06,1.24l-1.07,3.22l0.12,2.12l-0.73,2.11l-0.28,2.47l0.59,2.02l-0.04,1.32l0.49,0.54l-0.21,1.7l0.92,0.78l0.54,2.43l1.2,1.54l0.08,1.69l-0.33,1.45l0.47,2.95l-44.2,4.6l-0.19,-0.79l-1.56,-2.19l-4.94,-0.84l-1.06,-1.35l-0.36,-1.69l-0.9,-1.21l-0.86,-4.9l1.04,-2.62l-0.09,-0.99l-0.71,-0.79l-1.44,-0.48l-0.71,-1.76l-0.47,-6.02l-0.7,-1.4l-0.52,-2.56l-1.15,-0.6l-1.1,-1.56l-0.93,-0.11l-1.17,-0.75l-1.71,0.09l-2.67,-1.79l-2.3,-3.5l-2.64,-2.1l-2.94,-0.53l-0.73,-1.24l-1.12,-1.0l-3.12,-0.45l-3.53,-2.74l0.45,-1.24l-0.12,-1.61l0.25,-0.81l-0.88,-3.11ZM541.58,78.25l0.05,-0.28l0.03,0.16l-0.08,0.12ZM537.91,83.72l0.28,-0.21l0.05,0.08l-0.33,0.12Z", "name": "Wisconsin"}, "US-OR": {"path": "M10.69,140.12l0.01,-1.77l0.5,-0.84l0.32,-1.95l1.12,-1.91l0.24,-1.9l-0.72,-2.57l-0.33,-0.15l-0.12,-1.81l3.04,-3.82l2.5,-5.98l0.01,0.77l0.52,0.52l0.49,-0.28l0.6,-1.6l0.47,-0.48l0.31,0.98l1.12,0.41l0.33,-0.54l-0.45,-1.76l0.27,-0.87l-0.45,-0.14l-0.79,0.32l1.74,-3.16l1.13,-0.96l0.89,0.3l0.49,-0.29l-0.47,-1.08l-0.81,-0.4l1.77,-4.63l0.47,-0.57l0.02,-0.99l1.08,-2.67l0.62,-2.6l1.04,-1.92l0.33,0.28l0.66,-0.33l-0.04,-0.6l-0.76,-0.62l1.06,-2.6l0.32,0.22l0.59,-0.19l0.13,-0.35l-0.04,-0.51l-0.57,-0.32l0.85,-3.84l1.23,-1.8l0.83,-3.04l1.14,-1.76l0.83,-2.45l0.26,-1.21l-0.18,-0.5l1.19,-1.08l-0.32,-1.64l0.96,0.57l0.78,-0.63l-0.39,-0.75l0.2,-0.65l-0.77,-0.77l0.51,-1.07l1.3,-0.86l0.06,-0.46l-0.93,-0.34l-0.33,-1.25l0.97,-2.14l-0.04,-1.48l0.86,-0.53l0.58,-1.33l0.18,-1.96l-0.21,-1.45l0.83,1.17l0.6,0.18l-0.11,0.89l0.55,0.53l0.83,-0.96l-0.27,-0.99l0.21,-0.07l0.24,0.56l0.69,0.32l1.51,0.04l0.37,-0.36l1.37,-0.19l0.99,2.08l2.43,0.92l1.25,-0.64l0.78,0.04l1.72,1.51l0.77,1.04l0.21,1.9l0.43,0.78l-0.03,2.05l-0.39,1.24l0.19,0.93l-0.43,1.74l0.26,1.45l0.79,0.85l1.94,0.56l1.44,1.05l1.36,0.41l1.04,0.69l4.98,-0.53l2.9,-1.06l1.14,0.51l2.23,0.09l4.24,1.43l0.69,0.54l0.19,1.15l0.57,0.58l1.86,-0.27l2.11,0.71l3.79,-0.55l0.69,-0.42l2.19,0.93l1.64,0.24l1.2,-0.3l0.88,0.26l1.89,-0.78l3.07,-0.43l4.16,0.13l1.61,-0.91l7.17,1.02l0.96,-0.19l0.79,-0.58l31.27,5.93l0.23,1.81l0.93,1.82l1.16,0.63l1.96,1.86l0.57,2.45l-0.16,1.0l-3.69,4.55l-0.4,1.41l-1.39,2.63l-2.21,2.42l-0.65,2.68l-1.49,1.84l-2.23,1.5l-1.92,3.35l-1.49,1.27l-0.62,2.02l-0.12,1.87l0.28,0.92l0.56,0.61l0.54,0.04l0.39,-0.35l0.63,0.76l0.89,-0.05l0.07,0.88l0.81,0.95l-0.46,1.0l-0.65,0.06l-0.33,0.4l0.21,1.8l-1.03,2.56l-1.22,1.41l-6.86,39.16l-26.21,-4.99l-28.9,-6.05l-28.8,-6.61l-28.95,-7.24l-1.48,-2.59l0.2,-2.36l-0.23,-0.89Z", "name": "Oregon"}, "US-KY": {"path": "M583.02,306.59l0.35,-2.18l1.13,0.96l0.72,0.2l0.75,-0.36l0.46,-0.88l0.87,-3.55l-0.54,-1.75l0.38,-0.86l-0.1,-1.88l-1.27,-2.04l1.79,-3.21l1.24,-0.51l0.73,0.06l7.03,2.56l0.81,-0.2l0.65,-0.72l0.24,-1.93l-1.49,-2.14l-0.24,-1.44l0.2,-0.87l0.4,-0.52l1.1,-0.18l1.24,-0.83l3.0,-0.95l0.64,-0.51l0.15,-1.13l-1.53,-2.05l-0.08,-0.68l1.33,-1.97l0.14,-1.16l1.25,0.42l1.12,-1.33l-0.68,-2.0l1.92,0.9l1.72,-0.84l0.03,1.18l1.0,0.46l0.99,-0.94l0.02,-1.36l0.51,0.16l1.9,-0.96l4.41,1.52l0.64,0.94l0.86,0.18l0.59,-0.59l0.73,-2.53l1.38,-0.55l1.39,-1.34l0.86,1.29l0.77,0.42l1.16,-0.13l0.11,0.75l0.95,0.19l0.67,-0.62l0.03,-1.01l0.84,-0.38l0.26,-0.48l-0.25,-2.09l0.84,-0.4l0.34,-0.56l-0.06,-0.69l1.25,-0.56l0.34,-0.72l0.38,1.47l0.61,0.6l1.46,0.64l1.25,-0.0l1.11,0.81l0.53,-0.11l0.26,-0.55l1.1,-0.46l0.53,-0.69l0.04,-3.48l0.85,-2.18l1.02,0.18l1.55,-1.19l0.75,-3.46l1.04,-0.37l1.65,-2.23l0.0,-0.81l-1.18,-2.88l2.78,-0.59l1.54,0.81l3.85,-2.82l2.23,-0.46l-0.18,-1.07l0.36,-1.47l-0.32,-0.36l-1.22,-0.04l0.58,-1.39l-1.09,-1.54l1.65,-1.83l1.81,1.18l0.92,-0.11l1.93,-1.01l0.78,0.88l1.76,0.54l0.57,1.28l0.94,0.92l0.79,1.84l2.6,0.67l1.87,-0.57l1.63,0.27l2.18,1.85l0.96,0.43l1.28,-0.18l0.61,-1.31l0.99,-0.54l1.35,0.5l1.34,0.04l1.33,1.09l1.26,-0.69l1.41,-0.15l1.81,-2.55l1.72,-1.03l0.92,2.35l0.7,0.83l2.45,0.81l1.35,0.97l0.75,1.05l0.93,3.35l-0.37,0.45l0.09,0.72l-0.44,0.61l0.02,0.53l2.24,2.62l1.35,0.92l-0.08,0.89l1.34,0.97l0.58,1.36l1.55,1.2l0.98,1.62l2.14,0.84l1.09,1.12l2.14,0.25l-4.86,6.13l-5.06,4.16l-0.42,0.86l0.22,1.25l-2.07,1.93l0.04,1.64l-3.06,1.63l-0.8,2.38l-1.71,0.6l-2.7,1.83l-1.66,0.48l-3.39,2.42l-23.95,3.09l-8.8,1.42l-7.47,0.86l-7.68,0.46l-22.71,3.52l-0.64,-0.56l-3.63,0.09l-0.41,0.6l1.03,3.57l-23.0,2.73ZM580.9,306.78l-0.59,0.08l-0.06,-0.55l0.47,-0.01l0.18,0.49Z", "name": "Kentucky"}, "US-CO": {"path": "M364.18,239.57l-1.22,65.87l-29.29,-0.9l-29.38,-1.43l-29.35,-1.95l-32.17,-2.75l8.33,-87.15l27.79,2.4l28.23,1.92l29.58,1.46l27.95,0.87l-0.46,21.66Z", "name": "Colorado"}, "US-OH": {"path": "M664.99,178.81l1.67,0.47l1.04,-0.3l1.74,1.07l2.07,0.26l1.47,1.18l1.71,0.23l-2.19,1.18l-0.12,0.47l0.42,0.24l2.46,0.19l1.39,-1.1l1.77,-0.25l3.39,0.96l0.92,-0.08l1.48,-1.29l1.74,-0.6l1.15,-0.96l1.91,-0.97l2.62,-0.03l1.09,-0.62l1.24,-0.06l1.07,-0.8l4.24,-5.46l4.53,-3.47l6.92,-4.36l5.83,28.05l-0.51,0.54l-1.28,0.43l-0.41,0.95l1.65,2.24l0.02,2.11l0.41,0.26l0.31,0.94l-0.04,0.76l-0.54,0.83l-0.5,4.08l0.18,3.21l-0.58,0.41l0.34,1.11l-0.35,1.74l-0.39,0.54l0.76,1.23l-0.25,1.87l-2.41,2.65l-0.82,1.86l-1.37,1.5l-1.24,0.67l-0.6,0.7l-0.87,-0.92l-1.18,0.14l-1.32,1.74l-0.09,1.32l-1.78,0.85l-0.78,2.25l0.28,1.58l-0.94,0.85l0.3,0.67l0.63,0.41l0.27,1.3l-0.8,0.17l-0.5,1.6l0.06,-0.93l-0.91,-1.26l-1.53,-0.55l-1.07,0.71l-0.82,1.98l-0.34,2.69l-0.53,0.82l1.22,3.58l-1.27,0.39l-0.28,0.42l-0.25,3.12l-2.66,1.2l-1.0,0.05l-0.76,-1.06l-1.51,-1.1l-2.34,-0.73l-1.17,-1.92l-0.31,-1.14l-0.42,-0.33l-0.73,0.13l-1.84,1.17l-1.1,1.29l-0.4,1.05l-1.43,0.15l-0.87,0.61l-1.11,-1.0l-3.14,-0.59l-1.37,0.72l-0.53,1.25l-0.71,0.05l-3.04,-2.26l-1.93,-0.29l-1.77,0.56l-2.14,-0.52l-0.55,-1.54l-0.96,-0.97l-0.63,-1.38l-2.03,-0.76l-1.14,-1.01l-0.97,0.26l-1.31,0.89l-0.46,0.03l-1.79,-1.23l-0.61,0.2l-0.6,0.71l-8.53,-55.69l20.43,-4.26ZM675.61,181.34l0.53,-0.79l0.67,0.41l-0.48,0.35l-0.72,0.03ZM677.31,180.77l0.01,-0.0l0.01,-0.0l-0.02,0.0Z", "name": "Ohio"}, "US-OK": {"path": "M399.06,359.31l-0.05,-42.03l-0.39,-0.4l-26.69,-0.22l-25.13,-0.6l0.31,-10.23l36.7,0.74l36.0,-0.07l35.99,-0.86l35.56,-1.62l0.6,10.68l4.55,24.34l1.41,37.88l-1.2,-0.22l-0.29,-0.36l-2.13,-0.21l-0.82,-0.79l-2.11,-0.39l-1.77,-2.05l-1.23,-0.22l-2.25,-1.57l-1.5,-0.4l-0.8,0.46l-0.23,0.88l-0.82,0.24l-0.46,0.62l-2.47,-0.14l-0.47,-0.19l-0.27,-0.68l-1.05,-0.61l-2.3,1.29l-1.17,0.2l-0.19,0.56l-0.63,0.28l-2.12,-0.77l-1.7,1.18l-1.17,0.08l-0.89,0.42l-0.83,1.37l-1.48,0.06l-0.57,1.25l-1.26,-1.55l-1.7,-0.1l-0.32,-0.58l-1.21,-0.46l-0.02,-0.96l-0.44,-0.5l-1.24,-0.18l-0.73,1.38l-0.66,0.11l-0.84,-0.5l-0.97,0.07l-0.71,-1.51l-1.09,-0.35l-1.17,0.57l-0.45,1.7l-0.7,-0.08l-0.49,0.43l0.29,0.73l-0.51,1.68l-0.43,0.19l-0.55,-0.55l-0.3,-0.91l0.39,-1.65l-0.75,-0.86l-0.8,0.18l-0.49,0.76l-0.84,-0.18l-0.92,0.98l-1.07,0.13l-0.53,-1.36l-1.99,-0.19l-0.3,-1.48l-1.19,-0.53l-0.82,0.33l-2.12,2.15l-1.21,0.51l-0.97,-0.38l0.19,-1.25l-0.28,-1.13l-2.33,-0.68l-0.07,-2.18l-0.43,-0.55l-2.11,0.39l-2.52,-0.25l-0.64,0.26l-0.81,1.21l-0.95,0.06l-1.77,-1.77l-0.97,-0.12l-1.5,0.56l-2.68,-0.63l-1.86,-1.0l-1.05,0.25l-2.46,-0.3l-0.17,-2.12l-0.85,-0.87l-0.44,-1.02l-1.16,-0.41l-0.7,-0.83l-0.83,0.08l-0.44,1.64l-2.22,-0.68l-1.07,0.6l-0.96,-0.09l-3.79,-3.78l-1.12,-0.43l-0.8,0.08Z", "name": "Oklahoma"}, "US-WV": {"path": "M693.03,248.42l3.95,-1.54l0.35,-0.71l0.12,-2.77l1.15,-0.22l0.4,-0.61l-0.57,-2.49l-0.61,-1.24l0.49,-0.64l0.36,-2.77l0.68,-1.66l0.45,-0.39l1.24,0.55l0.41,0.71l-0.14,1.13l0.71,0.46l0.78,-0.44l0.48,-1.42l0.49,0.21l0.57,-0.2l0.2,-0.44l-0.63,-2.09l-0.75,-0.55l0.81,-0.79l-0.26,-1.71l0.74,-2.0l1.65,-0.51l0.17,-1.6l1.02,-1.42l0.43,-0.08l0.65,0.79l0.67,0.19l2.28,-1.59l1.5,-1.64l0.79,-1.83l2.45,-2.67l0.37,-2.41l-0.73,-1.0l0.71,-2.33l-0.25,-0.76l0.59,-0.58l-0.27,-3.43l0.47,-3.93l0.53,-0.8l0.08,-1.11l-0.38,-1.21l-0.39,-0.33l-0.04,-2.01l-1.57,-1.91l0.44,-0.54l0.85,-0.1l0.3,-0.33l4.03,19.34l0.47,0.31l16.6,-3.55l2.17,10.68l0.5,0.37l2.06,-2.5l0.97,-0.56l0.34,-1.03l1.63,-1.99l0.25,-1.05l0.52,-0.4l1.19,0.45l0.74,-0.32l1.32,-2.6l0.6,-0.46l-0.04,-0.85l0.42,0.59l1.81,0.52l3.2,-0.57l0.78,-0.86l0.07,-1.46l2.0,-0.74l1.02,-1.69l0.67,-0.1l3.16,1.5l1.81,-0.71l-0.45,1.02l0.56,0.92l1.27,0.42l0.09,0.96l1.13,0.43l0.09,1.2l0.33,0.42l-0.58,3.64l-9.0,-4.48l-0.64,0.24l-0.31,1.14l0.38,1.61l-0.52,1.62l0.41,2.28l-1.36,2.4l-0.42,1.76l-0.72,0.53l-0.42,1.11l-0.27,0.21l-0.61,-0.23l-0.37,0.33l-1.25,3.28l-1.84,-0.78l-0.64,0.25l-0.94,2.77l0.08,1.47l-0.73,1.14l-0.19,2.33l-0.89,2.2l-3.25,-0.36l-1.44,-1.76l-1.71,-0.24l-0.5,0.41l-0.26,2.17l0.19,1.3l-0.32,1.45l-0.49,0.45l-0.31,1.04l0.23,0.92l-1.58,2.44l-0.04,2.1l-0.52,2.0l-2.58,4.73l-0.75,3.16l0.14,0.76l1.14,0.55l-1.08,1.38l0.06,0.6l0.45,0.4l-2.16,2.13l-0.55,-0.7l-0.84,0.15l-3.12,2.53l-1.03,-0.56l-1.32,0.26l-0.44,0.91l0.45,1.17l-0.91,0.91l-0.73,-0.05l-2.27,1.0l-1.21,0.96l-2.18,-1.36l-0.73,-0.01l-0.82,1.58l-1.1,0.49l-1.22,1.46l-1.08,0.08l-1.98,-1.09l-1.31,-0.01l-0.61,-0.74l-1.19,-0.6l-0.31,-1.33l-0.89,-0.55l0.36,-0.67l-0.3,-0.81l-0.85,-0.37l-0.84,0.25l-1.33,-0.17l-1.26,-1.19l-2.06,-0.79l-0.76,-1.43l-1.58,-1.24l-0.7,-1.49l-1.0,-0.6l-0.12,-1.09l-1.38,-0.95l-2.0,-2.27l0.71,-2.03l-0.25,-1.62l-0.66,-1.46Z", "name": "West Virginia"}, "US-WY": {"path": "M218.53,207.02l10.1,-86.6l25.46,2.74l26.8,2.4l26.83,1.91l27.85,1.46l-3.67,87.11l-27.32,-1.41l-28.21,-1.97l-29.69,-2.63l-28.14,-3.02Z", "name": "Wyoming"}, "US-UT": {"path": "M178.67,180.38l41.53,5.44l-2.51,21.5l0.35,0.45l32.24,3.43l-8.33,87.15l-42.54,-4.67l-42.41,-5.77l16.08,-108.34l5.58,0.82ZM187.74,191.46l-0.3,0.04l-0.25,0.62l0.74,3.68l-0.81,0.19l-0.5,1.31l1.15,0.59l0.35,-0.84l0.37,-0.18l0.92,1.14l0.83,1.68l-0.25,1.0l0.16,1.45l-0.4,0.77l0.4,0.52l-0.05,0.56l1.58,1.84l0.02,0.59l1.13,1.92l0.71,-0.1l0.83,-1.74l0.08,2.28l0.53,0.94l0.06,1.8l0.99,0.47l1.65,-0.67l2.48,-1.77l0.37,-1.25l3.32,-1.44l0.17,-0.54l-0.52,-1.02l-0.68,-0.84l-1.36,-0.7l-1.87,-4.59l-0.87,-0.46l0.87,-0.92l1.3,0.6l1.33,-0.15l0.92,-0.83l-0.06,-1.12l-1.55,-0.5l-0.81,0.42l-1.17,-0.12l0.27,-0.76l-0.58,-0.79l-1.86,-0.22l-0.56,1.13l0.28,0.78l-0.35,0.69l0.55,2.44l-0.91,0.32l-0.34,-0.42l0.22,-1.8l-0.42,-0.69l-0.06,-1.74l-0.68,-0.6l-1.32,-0.11l-1.07,-1.55l-0.19,-0.69l0.64,-0.55l0.36,-1.29l-0.83,-1.38l-1.23,-0.28l-0.99,0.81l-2.73,0.2l-0.35,0.63l0.62,0.83l-0.28,0.43ZM199.13,204.0l0.03,0.02l0.04,0.11l-0.07,-0.13ZM199.17,204.81l0.31,0.91l-0.18,0.9l-0.39,-0.93l0.25,-0.88Z", "name": "Utah"}, "US-IN": {"path": "M600.86,189.63l1.43,0.87l2.1,0.14l1.52,-0.38l2.63,-1.39l2.73,-2.1l32.3,-4.83l8.81,57.45l-0.66,1.15l0.3,0.92l0.81,0.79l-0.66,1.14l0.49,0.8l1.12,0.04l-0.36,1.14l0.18,0.51l-1.81,0.29l-3.18,2.55l-0.43,0.17l-1.4,-0.81l-3.46,0.91l-0.09,0.78l1.19,3.1l-1.4,1.88l-1.18,0.49l-0.45,0.89l-0.31,2.6l-1.11,0.88l-1.06,-0.24l-0.47,0.47l-0.85,1.95l0.05,3.14l-0.39,1.0l-1.38,0.85l-0.93,-0.68l-1.24,0.01l-1.48,-0.69l-0.62,-1.84l-1.89,-0.73l-0.44,0.3l-0.04,0.5l0.83,0.68l-0.62,0.31l-0.89,-0.35l-0.36,0.29l-0.04,0.48l0.54,0.93l-1.08,0.68l0.14,2.37l-1.06,0.65l-0.0,0.83l-0.16,0.37l0.08,-0.5l-0.33,-0.51l-1.6,0.18l-1.4,-1.69l-0.5,-0.08l-1.67,1.5l-1.57,0.69l-1.07,2.89l-0.81,-1.07l-2.79,-0.77l-1.11,-0.61l-1.08,-0.18l-1.76,0.92l-0.64,-1.02l-0.58,-0.18l-0.53,0.56l0.64,1.86l-0.34,0.84l-0.28,0.09l-0.02,-1.18l-0.42,-0.4l-0.58,0.01l-1.46,0.79l-1.41,-0.84l-0.85,0.0l-0.48,0.95l0.71,1.55l-0.49,0.74l-1.15,-0.39l-0.07,-0.54l-0.53,-0.44l0.55,-0.63l-0.35,-3.09l0.96,-0.78l-0.07,-0.58l-0.44,-0.23l0.69,-0.46l0.25,-0.61l-1.17,-1.47l0.46,-1.16l0.32,0.19l1.39,-0.55l0.33,-1.8l0.55,-0.4l0.44,-0.92l-0.06,-0.83l1.52,-1.07l0.06,-0.69l-0.41,-0.93l0.57,-0.86l0.14,-1.29l0.87,-0.51l0.4,-1.91l-1.08,-2.54l0.22,-0.8l-0.16,-1.11l-0.93,-0.91l-0.61,-1.5l-1.05,-0.78l-0.04,-0.59l0.92,-1.39l-0.63,-2.25l1.27,-1.31l-6.5,-50.68Z", "name": "Indiana"}, "US-IL": {"path": "M540.07,225.55l0.86,-0.35l0.37,-0.67l-0.23,-2.33l-0.73,-0.93l0.15,-0.41l0.72,-0.69l2.42,-0.98l0.71,-0.65l0.63,-1.68l0.17,-2.11l1.65,-2.47l0.27,-0.94l-0.03,-1.22l-0.59,-1.95l-2.23,-1.88l-0.11,-1.77l0.67,-2.38l0.45,-0.37l4.6,-0.85l0.81,-0.41l0.82,-1.12l2.55,-1.0l1.43,-1.56l-0.01,-1.57l0.4,-1.71l1.42,-1.46l0.29,-0.74l0.33,-4.37l-0.76,-2.14l-4.02,-2.47l-0.28,-1.5l-0.48,-0.82l-3.64,-2.48l44.58,-4.64l-0.01,2.66l0.57,2.59l1.37,2.49l1.31,0.95l0.76,2.6l1.26,2.71l1.42,1.84l6.6,51.49l-1.22,1.13l-0.1,0.69l0.67,1.76l-0.84,1.09l-0.03,1.11l1.19,1.09l0.56,1.41l0.89,0.82l-0.1,1.8l1.06,2.31l-0.28,1.49l-0.87,0.56l-0.21,1.47l-0.59,0.93l0.34,1.2l-1.48,1.13l-0.23,0.41l0.28,0.7l-0.93,1.17l-0.31,1.19l-1.64,0.67l-0.63,1.67l0.15,0.8l0.97,0.83l-1.27,1.15l0.42,0.76l-0.49,0.23l-0.13,0.54l0.43,2.94l-1.15,0.19l0.08,0.45l0.92,0.78l-0.48,0.17l-0.03,0.64l0.83,0.29l0.04,0.42l-1.31,1.97l-0.25,1.19l0.59,1.22l0.7,0.64l0.37,1.08l-3.31,1.22l-1.19,0.82l-1.24,0.24l-0.77,1.01l-0.18,2.04l0.3,0.88l1.4,1.93l0.07,0.54l-0.53,1.19l-0.96,0.03l-6.3,-2.43l-1.08,-0.08l-1.57,0.64l-0.68,0.72l-1.44,2.95l0.06,0.66l-1.18,-1.2l-0.79,0.14l-0.35,0.47l0.59,1.13l-1.24,-0.79l-0.01,-0.68l-1.6,-2.21l-0.4,-1.12l-0.76,-0.37l-0.05,-0.49l0.94,-1.35l0.2,-1.03l-0.32,-1.01l-1.44,-2.02l-0.47,-3.18l-2.26,-0.99l-1.55,-2.14l-1.95,-0.82l-1.72,-1.34l-1.56,-0.14l-1.82,-0.96l-2.32,-1.78l-2.34,-2.44l-0.36,-1.95l2.37,-6.85l-0.25,-2.32l0.98,-2.06l-0.38,-0.84l-2.66,-1.45l-2.59,-0.67l-1.29,0.45l-0.86,1.45l-0.46,0.28l-0.44,-0.13l-1.3,-1.9l-0.43,-1.52l0.16,-0.87l-0.54,-0.91l-0.29,-1.65l-0.83,-1.36l-0.94,-0.9l-4.11,-2.52l-1.01,-1.64l-4.53,-3.53l-0.73,-1.9l-1.04,-1.21l-0.04,-1.6l-0.96,-1.48l-0.75,-3.54l0.1,-2.94l0.6,-1.28ZM585.52,295.52l0.05,0.05l0.04,0.04l-0.05,-0.0l-0.04,-0.09Z", "name": "Illinois"}, "US-AK": {"path": "M89.36,517.03l0.84,0.08l0.09,0.36l-0.3,0.32l-0.64,0.3l-0.15,-0.15l0.25,-0.4l-0.12,-0.31l0.04,-0.2ZM91.79,517.2l0.42,-0.02l0.19,-0.11l0.26,-0.56l1.74,-0.37l2.26,0.07l1.57,0.63l0.84,0.69l0.02,1.85l0.32,0.18l0.0,0.34l0.25,0.27l-0.35,0.09l-0.25,-0.16l-0.23,0.08l-0.41,-0.33l-0.29,-0.04l-0.69,0.23l-0.91,-0.21l-0.07,-0.26l-0.24,-0.17l0.27,-0.21l0.74,0.72l0.46,-0.02l0.2,-0.48l-0.28,-0.44l-0.03,-0.3l-0.31,-0.67l-0.96,-0.52l-1.05,0.27l-0.57,0.69l-1.04,0.3l-0.44,-0.3l-0.48,0.12l-0.06,0.12l-0.63,-0.14l-0.26,0.06l-0.22,0.24l0.2,-0.3l-0.1,-0.55l0.12,-0.79ZM99.83,520.19l0.3,-0.07l0.29,-0.28l-0.03,-0.55l0.31,0.2l-0.06,0.45l0.83,0.92l-0.93,-0.51l-0.44,0.41l-0.13,-0.54l-0.13,-0.04ZM100.07,520.81l0.0,0.04l-0.03,0.0l0.02,-0.04ZM102.01,520.78l0.05,-0.34l0.33,-0.2l0.01,-0.12l-0.58,-1.24l0.1,-0.2l0.59,-0.24l0.29,-0.3l0.65,-0.34l0.62,-0.01l0.41,-0.13l0.81,0.1l1.42,-0.06l0.64,0.15l0.49,0.27l0.88,0.11l0.27,0.15l0.23,-0.22l0.27,-0.05l0.39,0.09l0.2,0.21l0.26,-0.05l0.2,0.38l0.44,0.31l0.1,0.23l0.7,-0.06l0.3,-0.77l0.44,-0.61l0.47,-0.21l1.78,-0.45l0.5,0.04l0.37,0.23l1.13,-0.38l0.66,0.04l-0.11,0.41l0.43,0.51l0.42,0.26l0.62,0.06l0.42,-0.43l0.14,-0.42l-0.34,-0.29l-0.31,-0.03l0.15,-0.44l-0.15,-0.38l1.04,-1.0l0.83,-0.99l0.12,-0.08l0.34,0.17l0.38,-0.02l0.32,0.3l0.19,0.37l0.66,-0.29l-0.1,-0.57l-0.43,-0.58l-0.46,-0.24l0.15,-0.44l0.77,-0.47l0.36,0.04l0.68,-0.2l0.8,-0.08l0.58,0.18l0.45,-0.16l-0.12,-0.52l0.66,-0.6l0.4,0.06l0.26,-0.11l0.43,-0.52l0.34,-0.12l0.23,-0.46l-0.42,-0.3l-0.38,0.03l-0.33,0.15l-0.36,0.39l-0.51,-0.09l-0.5,0.27l-2.19,-0.52l-1.69,-0.24l-0.71,-0.26l-0.12,-0.2l0.17,-0.32l0.04,-0.44l-0.28,-0.56l0.45,-0.35l0.43,-0.13l0.36,0.38l0.04,0.25l-0.15,0.44l0.07,0.39l0.56,0.12l0.32,-0.15l-0.03,-0.3l0.16,-0.35l-0.05,-0.75l-0.84,-1.05l0.01,-0.7l-0.67,-0.19l-0.19,0.24l-0.06,0.48l-0.41,0.22l-0.09,0.03l-0.26,-0.56l-0.34,-0.09l-0.51,0.41l-0.02,0.26l-0.15,0.15l-0.38,-0.02l-0.48,0.27l-0.24,0.54l-0.22,1.13l-0.13,0.32l-0.19,0.05l-0.31,-0.31l0.1,-2.67l-0.23,-0.99l0.19,-0.33l0.02,-0.27l-0.16,-0.29l-0.53,-0.27l-0.46,0.26l-0.1,-0.07l-0.35,0.13l-0.01,-0.54l-0.54,-0.61l0.19,-0.22l0.08,-0.65l-0.16,-0.37l-0.55,-0.26l-1.89,-0.01l-0.58,-0.34l-1.01,-0.12l-0.16,-0.12l-0.07,-0.22l-0.23,-0.07l-1.06,0.53l-0.75,-0.16l-0.12,-0.44l0.3,0.09l0.48,-0.08l0.31,-0.44l-0.21,-0.49l0.37,-0.49l0.83,0.04l0.43,-0.16l0.12,-0.35l-0.14,-0.42l-1.11,-0.64l0.09,-0.27l0.34,-0.17l0.38,-0.44l1.12,-0.0l0.23,-0.09l0.19,-0.32l0.03,-0.95l0.22,-0.54l0.07,-1.42l0.25,-0.45l-0.08,-0.58l0.07,-0.2l0.88,-0.74l0.02,-0.1l-0.09,-0.02l0.19,-0.16l-0.31,-0.35l-0.27,0.05l-0.04,-0.25l-0.09,-0.04l0.57,-0.22l0.33,-0.25l0.51,-0.1l0.24,-0.25l0.42,-0.0l0.19,0.18l0.41,0.08l0.29,-0.08l0.44,-0.55l-0.3,-0.34l-0.39,-0.07l-0.05,-0.33l-0.27,-0.31l-0.6,0.4l-0.43,-0.07l-1.12,0.62l-1.04,0.06l-0.34,0.18l-0.48,-0.03l-0.12,0.5l0.4,0.64l-0.26,0.19l-0.29,0.45l-0.19,-0.09l-0.17,-0.27l-0.76,-0.04l-1.16,-0.25l-0.81,-0.4l-1.05,-0.59l-0.78,-0.61l-0.52,-0.69l0.01,-0.21l0.6,-0.1l-0.06,-0.4l0.1,-0.24l-0.51,-1.06l0.1,-0.78l-0.18,-0.52l0.33,-0.54l-0.4,-0.34l-0.23,0.0l-0.44,-0.69l-0.01,-0.2l0.59,-0.14l0.3,-0.37l-0.05,-0.44l-0.36,-0.26l0.72,0.04l0.29,-0.13l0.18,-0.25l0.63,0.01l0.08,0.51l0.56,0.51l0.32,0.49l-0.03,0.09l-0.79,0.11l-0.53,0.51l0.31,0.45l0.94,-0.08l0.4,0.24l0.26,-0.01l0.39,-0.22l0.29,0.03l0.08,0.07l-0.51,0.6l-0.05,0.38l0.22,0.43l0.46,0.24l1.42,0.07l0.28,-0.17l0.16,-0.35l0.19,-0.08l-0.2,-0.74l0.35,-0.35l-0.02,-0.33l-0.18,-0.25l0.15,-0.43l-0.08,-0.13l-0.52,-0.26l-0.77,-0.01l-0.34,0.1l-1.51,-1.2l-0.01,-0.53l-0.35,-0.39l-0.26,-0.12l-0.15,-0.38l0.55,0.15l0.53,-0.4l-0.17,-0.41l-0.7,-0.51l0.4,-0.45l-0.14,-0.5l0.31,-0.15l0.27,0.08l0.44,-0.1l0.45,0.27l0.75,-0.04l0.67,-0.44l-0.08,-0.48l-0.18,-0.19l-0.48,-0.03l-0.51,0.16l-0.43,-0.19l-1.02,-0.02l-0.26,0.14l-0.44,0.04l-0.36,0.29l-0.62,0.09l-0.15,0.12l-0.15,0.42l-0.13,-0.19l0.27,-0.52l0.36,-0.24l-0.1,-0.44l-0.48,-0.6l0.03,-0.1l0.37,0.1l0.4,-0.18l0.16,-0.22l0.07,-0.36l-0.22,-0.6l0.55,0.23l0.42,-0.5l-0.44,-0.59l0.38,0.32l0.94,0.37l0.2,-0.44l0.14,0.01l-0.04,-0.54l0.12,-0.36l0.48,-0.28l0.49,0.01l1.96,-0.47l0.8,-0.03l0.3,0.25l-0.01,0.44l0.19,0.27l-0.27,0.16l0.13,0.47l0.35,0.15l0.74,0.01l0.29,-0.39l-0.13,-0.45l0.08,-0.34l1.21,-0.11l0.29,-0.63l-0.31,-0.24l-0.93,-0.04l0.03,-0.08l0.41,-0.03l0.15,-0.63l0.72,-0.27l0.86,0.88l0.32,0.11l0.38,-0.28l0.08,-0.27l-0.04,-0.41l-0.18,-0.26l0.34,0.0l0.69,0.32l0.35,0.31l0.54,0.81l-0.06,0.29l-0.38,-0.09l-0.52,0.21l-0.13,0.47l0.43,0.24l1.07,0.06l0.05,0.52l0.31,0.3l0.91,0.49l1.02,0.09l0.53,-0.18l0.41,0.17l0.49,-0.0l1.61,-0.32l0.1,0.49l1.67,0.97l0.28,0.31l0.53,0.32l1.06,0.37l1.81,-0.2l0.56,-0.21l0.47,-0.49l0.2,-0.57l0.15,-0.95l0.61,-1.1l0.01,-0.29l-0.24,-0.88l0.14,-0.05l-0.03,-0.19l0.58,0.25l0.2,-0.1l0.86,0.0l0.36,-0.17l0.41,-0.47l0.07,-0.93l-0.19,-0.43l0.22,-0.03l0.11,-0.44l-0.23,-0.32l-0.73,-0.39l-0.29,0.12l-0.43,-0.04l-0.52,0.2l-0.21,-0.12l-0.29,-0.6l-0.31,-0.29l-0.51,0.0l-0.02,0.1l-0.52,-0.04l-0.43,-0.31l-0.56,-0.02l-0.32,0.1l-1.04,-0.24l-0.48,0.03l-0.33,0.16l0.04,-0.42l-0.29,-0.71l-0.21,-0.97l-0.49,-0.23l-0.55,-0.08l-0.29,0.09l-0.47,-0.64l-0.48,-0.4l-0.5,-0.25l-1.14,-1.02l-0.95,-0.24l-0.2,-0.27l-0.49,-0.27l-0.11,-0.23l-0.63,-0.01l-0.04,0.13l-0.9,-1.22l-1.86,-2.14l-0.25,-0.55l-0.0,-0.32l0.07,-0.19l0.27,0.06l0.27,-0.13l0.35,-0.76l-0.41,-1.02l0.05,-0.11l0.4,0.19l0.51,-0.05l0.41,-0.17l0.51,0.66l0.43,0.23l0.48,-0.4l-0.02,-0.33l-0.32,-0.66l-0.48,-0.41l-0.46,-0.78l-0.84,-0.88l-0.12,-0.02l-0.98,-1.16l-0.33,-0.52l-0.04,-0.3l-0.46,-0.96l0.41,0.03l0.54,0.45l0.34,0.15l0.44,-0.1l0.12,-0.17l0.2,0.03l0.06,-0.15l0.18,0.03l0.17,0.41l0.2,0.18l1.09,0.35l1.08,-0.18l1.53,0.45l0.14,0.13l-0.06,0.06l0.19,0.45l0.88,0.89l1.03,0.47l0.56,-0.36l-0.06,-0.35l-0.37,-0.64l1.48,0.48l0.36,0.26l0.11,0.4l0.61,0.16l1.2,0.07l0.48,0.24l1.49,0.99l0.18,0.45l-0.34,0.04l-0.1,0.06l-0.4,0.34l-0.16,0.3l-0.6,-0.28l-0.52,-0.06l-0.12,0.69l0.62,0.52l0.02,0.52l0.16,0.37l0.28,0.32l0.91,0.59l0.18,0.29l0.46,0.4l0.69,0.3l0.39,0.29l-0.14,0.25l0.02,0.32l0.38,0.24l0.2,-0.05l0.26,0.12l0.44,0.49l0.56,0.16l0.39,0.46l-0.08,0.39l0.24,0.31l0.41,0.19l0.41,-0.15l0.03,-0.15l1.39,-0.46l0.24,0.52l0.24,0.25l-0.25,0.06l0.01,0.5l0.38,0.29l0.43,0.02l0.5,-0.24l0.36,-0.41l-0.05,-0.98l-0.45,-0.65l0.19,0.01l0.65,1.54l0.23,0.25l1.6,0.95l0.53,-0.01l0.29,-0.27l0.34,-0.59l-0.02,-0.44l0.3,-0.38l-0.16,-0.23l-0.72,-0.38l-0.44,-0.04l-0.49,-0.92l-0.89,-0.53l-0.42,-0.12l-0.61,0.21l-0.32,-0.28l-0.0,-0.43l-0.16,-0.19l-0.23,-0.71l0.64,-0.39l0.29,-0.02l0.35,0.29l0.32,0.05l0.37,-0.41l-0.0,-0.15l-0.75,-1.21l-1.13,-0.68l-0.06,-0.29l0.18,-0.28l-0.15,-0.48l-0.43,-0.23l-0.43,0.29l-0.42,0.07l-0.25,-0.44l-0.53,-0.4l-0.31,-0.1l-0.25,-0.41l-1.35,-1.4l0.59,-1.11l0.15,-1.07l-0.1,-1.05l-0.51,-1.13l-0.29,-1.11l-0.36,-0.48l-0.85,-2.25l-1.06,-1.45l-0.08,-0.73l-0.38,-0.89l0.17,-0.17l0.91,-0.32l1.04,-1.04l1.08,1.08l1.75,1.29l0.84,0.44l1.33,0.95l1.37,0.54l1.36,0.24l1.49,-0.09l0.3,0.11l0.42,-0.05l0.4,-0.16l0.23,-0.26l0.3,-0.14l0.42,-0.5l0.56,-0.03l0.17,-0.31l1.66,0.14l0.96,-0.29l0.5,0.12l0.03,0.15l0.87,0.52l0.35,0.13l0.52,-0.01l0.77,0.56l0.91,0.33l0.1,0.2l0.28,-0.04l0.42,0.16l1.99,0.27l-0.05,0.31l0.11,0.18l-0.18,0.06l-0.15,0.66l0.44,0.21l0.04,0.83l0.28,0.36l0.44,-0.14l0.1,-0.13l0.05,-0.46l0.22,-0.51l1.1,0.62l0.73,0.1l0.29,-0.35l-0.22,-0.39l-0.74,-0.5l-0.43,-0.14l-0.07,-0.18l0.03,-0.25l0.76,-0.07l0.26,0.1l0.01,0.3l0.27,0.62l0.54,0.33l0.14,-0.17l0.45,0.24l0.16,-0.08l0.63,0.55l1.13,0.63l0.13,-0.03l0.81,0.55l0.59,0.22l1.21,0.25l1.27,0.12l1.06,-0.17l1.19,0.0l0.01,0.22l0.26,0.49l0.68,0.48l0.08,0.62l0.56,0.17l0.57,0.45l-0.61,-0.02l-0.77,-0.42l-0.42,0.03l-0.44,0.21l0.1,0.48l0.23,0.26l-0.19,0.32l0.18,0.59l0.33,0.11l0.33,-0.12l0.64,0.36l0.3,0.06l0.31,-0.08l0.23,-0.23l0.33,-0.02l0.39,0.36l0.26,0.01l0.25,0.18l0.33,0.02l0.27,-0.16l0.13,0.09l0.16,0.38l-0.54,-0.04l-0.29,0.34l0.21,0.4l0.2,0.11l0.07,0.35l0.89,0.58l-0.04,0.13l0.18,0.3l0.49,0.21l0.94,-0.04l0.96,0.68l0.58,0.26l0.32,0.03l0.37,0.42l0.23,0.1l0.1,0.31l0.34,0.26l0.21,0.38l0.34,0.08l0.26,-0.12l0.25,0.23l-0.55,0.05l-0.29,0.34l-0.41,0.04l-0.18,0.63l0.35,0.33l1.4,0.72l-0.08,0.69l1.48,0.96l0.49,0.67l0.27,0.15l0.49,-0.16l1.05,0.48l0.24,-0.05l0.38,0.32l0.16,0.58l1.1,0.42l0.72,0.06l0.21,0.19l0.85,0.38l0.32,0.34l0.31,0.09l0.59,0.53l0.2,0.37l0.73,0.47l0.25,0.29l0.1,0.53l0.48,0.29l0.55,0.03l0.31,0.44l0.56,0.33l-0.11,0.34l0.39,0.41l1.66,1.19l0.76,0.36l0.16,-0.03l1.78,1.0l0.42,0.4l0.69,0.34l0.47,0.65l0.08,-0.08l-0.02,0.25l0.22,0.06l0.5,0.55l0.02,0.21l0.5,0.23l0.54,0.42l1.19,0.58l0.8,0.03l0.63,0.31l0.03,0.31l0.43,0.12l0.33,-0.2l0.19,-0.0l0.43,0.12l1.02,0.51l0.05,0.25l0.41,0.27l0.22,-0.19l0.58,0.53l0.31,0.09l0.53,0.55l-0.01,0.24l0.49,0.42l0.02,0.24l0.27,0.43l0.55,0.34l0.18,0.4l0.42,0.15l0.58,0.51l0.56,0.96l0.35,0.26l0.53,0.01l0.15,0.11l-23.69,51.51l0.09,0.46l1.53,1.4l0.52,0.02l0.19,-0.15l1.17,1.29l0.41,0.12l1.37,-0.4l1.79,0.68l-0.86,0.96l-0.08,0.38l0.35,1.01l0.91,0.92l-0.08,0.65l0.1,0.44l2.43,4.76l-0.2,1.48l-0.29,0.38l0.19,0.62l0.58,0.12l0.83,-0.25l0.54,-0.07l0.07,0.08l0.03,0.1l-0.66,0.3l-0.33,0.34l0.29,0.54l0.35,-0.0l0.37,-0.18l0.25,0.12l0.02,0.21l0.44,0.11l0.09,0.11l0.26,1.19l-0.17,0.03l-0.1,0.51l0.24,0.32l0.94,0.22l0.04,0.16l-0.27,0.18l0.01,0.12l0.21,0.32l0.21,0.09l-0.05,0.37l-0.24,-0.02l-0.1,-0.46l-0.35,-0.31l-0.11,0.06l-0.28,-0.47l-0.47,-0.03l-0.26,0.35l-0.45,0.01l-0.08,0.13l-0.26,-0.63l-0.14,0.01l-0.35,-0.41l-0.47,-0.12l-0.89,-1.43l0.11,-0.01l0.32,-0.49l-0.08,-0.26l-0.34,-0.28l-0.51,0.01l-0.47,-0.93l-0.05,-0.15l0.12,-0.53l-0.08,-0.41l-0.52,-1.06l-0.46,-0.7l-0.19,-0.07l0.1,-0.61l-0.29,-0.28l-0.72,-0.14l-1.24,-1.44l-0.27,-0.47l-0.01,-0.21l-0.32,-0.23l-0.24,-0.34l-0.28,-0.11l-0.49,-0.63l0.39,-0.11l0.12,-0.23l0.05,0.05l0.59,-0.3l-0.02,0.13l-0.16,0.06l-0.16,0.55l0.3,0.41l0.38,0.07l0.43,-0.3l0.25,-1.03l0.15,-0.22l0.42,0.2l0.36,0.46l0.36,0.04l0.35,-0.35l-0.47,-0.83l-0.69,-0.39l-0.27,-0.91l-0.35,-0.63l-0.4,-0.17l-0.67,0.44l-0.39,0.06l-0.79,0.37l-1.9,-0.05l-1.0,-0.5l-0.45,-0.34l-1.46,-1.5l0.23,-0.14l0.21,-0.32l0.16,-0.74l-0.43,-0.94l-0.52,-0.09l-0.33,0.19l-0.12,0.52l-0.6,-0.04l-0.85,-0.89l-2.81,-1.97l-1.68,-0.48l-1.62,-0.65l-1.13,-0.19l-0.1,-0.53l-0.27,-0.5l0.13,-0.25l-0.02,-0.26l-0.22,-0.25l-0.8,-0.28l-0.36,-0.35l-0.17,-0.01l-0.13,-0.55l-0.2,-0.34l-0.2,-0.12l0.7,-0.5l0.09,-0.27l-0.09,-0.08l0.21,-0.27l0.23,-0.09l0.38,0.08l0.38,-0.17l0.18,-0.32l-0.03,-0.34l-0.35,-0.22l-0.55,-0.07l-0.81,0.27l-0.24,0.2l-0.57,0.02l-0.56,0.35l-0.61,0.15l-0.2,-0.13l-0.19,-0.59l-0.58,-0.63l0.77,-0.37l0.19,-0.38l-0.32,-0.45l-0.53,-0.01l-0.15,-0.48l-0.19,-0.17l0.09,-0.49l-0.16,-0.25l0.04,-0.22l-0.31,-0.55l-0.43,-0.22l-0.53,0.17l-0.07,-0.2l-0.27,-0.03l-0.09,-0.14l0.22,-0.56l0.26,0.03l0.08,-0.09l0.65,0.37l0.38,0.07l0.42,-0.49l-0.14,-0.42l-0.27,-0.26l-1.05,-0.52l-1.54,0.27l-0.1,-0.21l-0.41,-0.3l-0.42,-0.01l-0.08,-0.23l-0.47,0.02l-0.21,-0.16l0.21,-0.26l-0.05,-0.39l0.14,-0.4l-0.28,-0.27l-0.25,-0.05l0.21,-0.77l-0.33,-0.28l-0.29,0.02l-1.36,0.57l0.02,-0.11l-0.34,-0.35l-1.19,-0.19l-0.14,0.25l-0.55,0.26l0.08,0.49l0.21,0.14l-0.01,0.1l-0.83,-0.27l-0.63,-0.03l-0.23,0.49l-0.51,0.38l0.12,0.52l0.31,0.16l0.46,-0.02l-0.05,0.11l-0.98,0.16l-0.3,0.14l-0.16,0.16l-0.05,0.46l0.37,0.28l0.83,-0.12l0.12,0.14l-0.04,0.25l0.31,0.21l-0.27,0.12l-0.15,0.24l-0.51,-0.02l-0.23,0.34l-0.3,0.12l0.05,0.54l-0.3,0.32l-0.12,-0.14l-0.66,0.24l-0.32,-0.27l-0.44,-0.13l-0.32,-0.39l0.11,-0.5l-0.38,-0.29l-0.64,0.04l0.13,-0.4l-0.05,-0.34l-0.23,-0.26l-0.26,-0.07l-0.4,0.16l-0.47,0.73l-0.25,-0.01l-0.23,-0.49l-0.46,-0.07l-0.37,0.4l-0.4,-0.06l-0.16,0.33l-0.29,-0.31l-0.42,-0.03l-0.26,0.25l-0.01,0.21l-0.31,-0.08l-0.11,-0.32l-0.12,-0.03l-0.37,0.06l-0.72,0.4l-0.01,-0.27l-0.13,-0.08l-0.8,-0.04l-0.38,0.2l-0.0,0.45l-0.09,0.05l-1.16,0.08l-0.3,0.13l-0.87,-0.77l-0.22,-0.05l-0.29,0.29l-0.4,-0.28l-1.02,-0.03l0.03,-0.13l-0.35,-0.39l-0.01,-0.13l0.45,0.02l0.16,-0.37l0.53,0.01l0.43,0.3l0.3,0.45l0.49,-0.04l0.2,-0.43l0.23,0.09l0.44,-0.04l0.48,-0.17l0.06,-0.15l0.45,-0.23l0.46,-0.08l0.32,-0.52l-0.21,-0.37l-0.49,-0.19l-1.84,0.04l-0.57,-0.71l-0.07,-0.28l1.28,-0.98l1.62,-0.44l0.37,-0.26l0.33,-0.45l0.46,-0.1l0.65,-0.89l0.14,-1.04l0.36,-0.03l0.74,0.3l1.54,-0.17l1.4,0.03l0.01,0.5l0.23,0.42l0.56,0.48l1.06,0.16l0.14,0.1l0.28,0.41l0.4,0.26l1.19,1.07l0.2,0.34l0.25,0.13l0.5,-0.37l0.0,-0.44l-0.13,-0.39l-0.42,-0.46l-0.43,-0.13l-0.32,-0.52l-0.43,-0.35l-0.69,-1.19l0.45,-0.11l0.44,-0.3l0.35,0.02l0.33,-0.17l1.56,0.33l0.37,-0.06l0.15,-0.62l-0.09,-0.11l-0.67,-0.46l-0.84,-0.3l-0.61,-0.04l-0.74,0.14l-0.37,0.19l-0.29,0.35l-0.76,-0.52l-0.11,-0.24l-0.42,-0.02l-0.16,-0.12l0.14,-0.2l-0.17,-0.67l-0.09,-0.02l-1.07,0.27l-0.85,-0.19l-0.49,0.0l-0.85,0.41l-0.65,-0.15l-0.6,-0.29l-1.18,0.04l-0.71,0.35l-0.19,0.5l-0.35,-0.15l-0.65,0.04l-0.5,0.24l-0.62,0.03l-0.54,0.15l-0.41,0.33l-0.12,0.36l-0.49,0.22l-0.59,-0.02l-0.4,-0.27l-0.26,-0.68l-0.43,-0.32l-0.3,-0.11l-0.42,0.02l-0.3,0.28l0.16,0.51l0.31,0.08l0.01,0.37l0.37,0.61l0.21,0.72l-0.38,0.08l-0.35,0.26l-0.33,-0.06l-0.56,-0.39l-0.98,-0.37l-0.58,0.21l0.02,0.44l-0.07,-0.38l-0.32,-0.34l-0.42,0.19l-0.23,0.4l-0.2,-0.38l-0.81,0.14l-0.08,0.05l-0.02,0.41l-0.37,-0.32l-0.33,-0.04l-0.36,0.28l0.13,0.39l-1.49,-0.27l-0.16,0.49l-0.25,0.14l-0.28,0.36l-0.51,0.04l-0.02,0.17l-0.2,0.09l0.03,0.42l-0.16,0.27l-0.01,0.39l0.33,0.34l0.59,-0.05l0.39,0.38l0.56,0.31l0.08,0.49l0.23,0.34l0.3,0.19l0.03,0.3l-0.64,0.54l-0.5,-0.05l-0.44,0.18l-0.88,-0.46l-0.37,0.02l-0.48,0.41l-0.2,-0.12l-0.45,-0.01l-0.34,0.59l-0.75,-0.12l-0.4,0.05l-0.27,0.3l-0.1,-0.02l0.07,0.06l-0.11,0.01l0.0,0.1l-0.42,-0.28l-0.36,0.33l-0.19,-0.1l-0.32,0.19l-0.3,-0.11l-0.37,0.07l-0.53,-0.44l-0.45,-0.15l-0.9,0.53l-0.18,-0.15l-0.71,-0.02l-0.45,0.28l-0.15,-0.37l-0.41,-0.28l-0.42,0.1l-0.43,0.49l-0.37,-0.15l-0.28,0.31l-0.47,-0.08l-0.4,-0.43l-0.4,0.07l-0.3,0.24l-0.14,-0.11l-0.43,-0.05l-0.14,0.08l-1.45,-0.04l-0.31,0.12l-0.22,0.28l0.24,0.95l-0.31,-0.03l-0.15,0.18l-0.69,-0.24l-0.41,-0.28l-0.26,0.05l-0.26,0.26l-0.2,-0.24l-0.49,0.22l-0.65,0.09l-0.32,-0.22l-0.27,0.2l-0.19,-0.65l-0.39,-0.22l-0.43,0.08l-0.28,0.31l-0.44,0.09l-0.26,-0.07l-0.14,0.34l-0.06,-0.31l-0.26,-0.25l-0.54,-0.14l-1.29,-0.05l-0.62,0.31l-0.42,-0.34l-0.51,-0.04l-0.84,0.27l-0.73,0.11l-0.16,0.12l-0.11,0.56l-0.26,-0.07l-0.44,0.3l-0.03,0.21l-0.23,0.15l-0.26,-0.25l-0.37,-0.03l-0.36,0.17l-0.6,-0.33l-0.87,-0.22l-0.41,-0.18l-0.09,-0.37l-0.55,-0.15l-0.25,0.15l-0.71,-0.67l-0.41,0.02l-0.78,-0.24l-0.4,0.21ZM111.25,502.71l-0.44,0.21l-0.03,-0.02l0.24,-0.26l0.23,0.07ZM128.45,468.26l-0.1,0.14l-0.06,0.02l0.02,-0.15l0.14,-0.02ZM191.55,470.09l-0.0,0.04l-0.02,-0.04l0.03,-0.01ZM191.85,541.2l-0.08,-0.21l0.06,-0.51l0.25,-0.06l0.08,0.39l-0.31,0.39ZM165.84,518.29l-0.19,0.37l-0.34,0.04l-0.07,0.31l-0.27,-0.07l-0.45,0.06l-0.04,-0.09l0.46,-0.29l0.06,-0.15l0.84,-0.19ZM162.12,521.34l0.09,0.0l-0.06,0.02l-0.02,-0.03ZM162.26,521.34l0.08,-0.02l0.01,0.04l-0.04,0.04l-0.05,-0.05ZM141.64,514.73l0.19,0.06l0.26,0.22l-0.46,0.03l-0.07,-0.12l0.08,-0.19ZM132.07,521.13l-0.0,0.0l0.0,-0.0l0.0,0.0ZM132.06,520.84l-0.02,-0.07l0.06,-0.01l-0.03,0.08ZM109.91,522.38l0.07,-0.02l0.05,0.12l-0.03,0.01l-0.09,-0.11ZM107.83,523.67l0.01,0.02l-0.02,0.0l0.0,-0.02l0.01,-0.01ZM136.02,515.64l-0.01,-0.04l0.07,0.01l-0.06,0.03ZM199.71,549.76l0.43,-0.06l0.87,0.3l0.36,-0.05l0.76,-0.54l0.39,-0.87l0.67,-0.03l0.47,-0.34l0.17,-0.49l0.96,0.19l1.89,-0.14l0.49,0.7l0.06,0.43l0.38,0.59l-0.1,0.26l-0.29,0.17l-0.1,0.55l0.11,0.16l-0.11,0.33l0.13,0.53l0.17,0.24l0.69,0.46l0.02,0.37l0.3,0.56l0.35,0.24l0.08,0.34l-0.15,0.26l0.26,1.28l1.33,1.5l0.24,0.78l-0.64,-0.19l-0.38,0.04l-0.33,0.37l-0.51,0.26l-0.01,0.29l-0.38,0.15l-0.21,0.29l-0.52,-0.98l-0.84,-0.64l0.11,-0.44l-0.27,-1.06l0.14,-0.11l0.26,-1.09l-0.26,-0.26l0.04,-0.09l-0.12,-0.01l0.04,-0.06l-0.09,0.05l-0.1,-0.1l-0.04,0.1l-0.12,-0.01l-0.03,-0.07l0.24,-0.92l0.1,-1.07l-0.15,-1.05l0.51,-0.94l0.02,-0.37l-0.66,-0.25l-0.5,0.69l-0.24,-0.13l-0.45,0.11l0.01,0.55l-0.32,0.35l0.3,1.04l-0.34,0.85l0.13,1.32l-0.11,0.36l0.04,0.39l-0.27,0.34l0.03,1.86l-0.28,0.29l-0.27,-0.31l0.02,-1.36l-0.28,-0.43l-0.53,0.1l-0.08,0.1l-0.88,-0.14l0.22,-0.05l0.2,-0.25l0.2,-0.91l-0.12,-0.1l-0.13,-1.06l0.88,0.13l0.45,-0.45l-0.11,-0.33l-0.74,-0.45l-0.23,0.1l0.0,-0.84l-0.33,-0.34l-0.31,-0.01l-0.29,0.56l-0.24,0.06l-0.27,0.41l0.12,0.13l-0.5,-0.23l0.24,-0.5l-0.28,-0.54l-0.29,-0.02l-0.18,-0.5l-0.47,-0.15l-0.19,0.31l-0.22,-0.47ZM201.64,551.89l0.21,0.2l-0.19,0.19l-0.03,-0.38ZM210.83,558.1l0.42,0.83l-0.23,0.38l0.09,0.66l0.47,1.27l0.06,1.07l0.15,0.48l-0.33,-0.38l-1.31,-0.73l-0.26,-0.05l0.19,-0.2l-0.17,-0.39l0.14,-0.1l0.31,-0.63l-0.47,-0.31l-0.27,0.01l-0.75,0.68l-0.11,-0.36l0.09,-0.18l-0.03,-0.41l0.26,-0.33l0.36,-0.19l0.16,-0.56l0.43,-0.42l0.36,0.09l0.44,-0.23ZM211.88,563.05l1.25,5.46l-0.54,0.45l0.03,0.64l0.81,0.55l-0.47,0.67l0.05,0.52l0.58,0.54l-0.08,0.3l0.06,0.48l-0.14,0.55l0.15,0.3l0.2,0.13l0.9,0.26l1.46,1.84l1.18,0.8l0.34,0.76l0.55,0.42l-0.01,0.53l0.1,0.24l0.78,0.58l0.49,0.11l0.03,0.16l-0.16,0.69l-0.68,0.46l-0.31,0.4l-0.04,0.78l-0.31,0.67l0.11,0.99l-0.15,0.54l0.03,0.33l-0.4,0.17l-1.34,1.4l-0.41,0.31l-0.48,0.16l-0.2,-0.13l-0.28,0.01l0.12,-0.5l-0.16,-0.42l-0.64,0.07l-0.08,0.17l-0.1,-0.51l0.24,-0.03l0.12,0.14l0.5,0.14l1.27,-0.81l0.75,-0.65l-0.23,-0.63l-0.48,0.07l0.01,-0.13l-0.37,-0.36l-0.54,0.12l0.59,-1.72l0.0,-0.38l0.15,-0.3l-0.06,-0.43l0.09,-0.51l-0.36,-0.24l-0.06,-0.35l-0.27,-0.49l0.49,-0.15l0.35,-0.35l0.18,-0.48l-0.43,-0.27l-0.43,0.08l-0.61,0.31l-0.45,0.04l-0.55,-0.29l-1.43,0.28l-0.59,-0.05l0.17,-0.09l0.2,-0.36l0.21,-0.85l0.32,0.02l0.81,0.41l0.31,0.03l0.71,-0.34l-0.07,-0.49l-0.33,-0.19l-0.4,0.02l-0.88,-0.43l0.03,-0.84l-0.23,-0.29l-0.46,-0.26l0.02,-0.43l-0.43,-0.61l0.27,-0.3l-0.16,-0.68l-0.35,-0.03l0.1,-0.07l0.01,-0.21l0.42,-0.17l0.22,-0.62l-0.38,-0.26l-0.67,0.18l-0.27,-0.29l-0.2,-0.32l-0.06,-0.35l0.33,-0.21l0.18,-1.04l-0.39,-0.3l-0.47,0.16l-0.17,-0.08l-0.29,-0.36l0.13,-0.2l-0.14,-0.35l-0.45,-0.27l1.08,-0.08l0.35,-0.42l-0.28,-0.52l-0.49,0.08l-0.44,-0.14l0.18,-0.32l-0.03,-0.32l-0.51,-0.26l0.04,-0.13l0.64,0.01l0.41,0.72l0.28,0.23l0.31,0.02l0.28,-0.15l0.04,-0.52l-0.24,-0.23l-0.1,-0.4l-0.37,-0.63l-0.78,-0.91l0.12,-0.39l1.23,0.83l0.52,-0.45ZM214.19,585.45l-0.17,0.68l-0.05,-0.01l0.09,-0.42l0.13,-0.25ZM215.44,583.76l-0.46,0.24l-0.25,-0.22l-0.63,0.14l0.05,-0.14l0.52,-0.28l0.76,0.25ZM211.63,577.78l-0.08,0.43l0.26,0.27l-0.46,0.4l-0.51,-0.23l-0.26,0.45l0.06,0.32l-0.15,-0.2l0.08,-0.67l0.25,-0.15l0.49,-0.04l0.32,-0.57ZM209.08,567.17l-0.25,-0.24l0.08,-0.14l0.49,0.2l-0.32,0.18ZM138.39,458.34l-0.47,-0.44l0.06,-0.45l0.41,0.27l0.0,0.62ZM108.63,500.59l-0.13,0.01l0.09,-0.03l0.04,0.02ZM211.75,580.86l0.58,-0.24l-0.2,0.44l0.02,0.52l-0.22,-0.23l-0.18,-0.5ZM212.61,580.43l0.18,-0.49l-0.1,-0.18l0.52,-0.05l0.31,-0.26l0.18,-0.36l0.14,-0.03l0.14,-0.52l0.57,-0.03l0.29,1.05l0.12,1.09l-0.15,0.19l0.03,0.12l-0.16,0.04l-0.27,0.73l-0.28,0.21l-0.2,-0.36l0.13,-1.47l-0.39,-0.42l-0.41,0.19l-0.18,0.46l-0.46,0.07ZM211.52,574.36l0.23,0.31l0.37,0.12l0.01,0.48l-0.14,0.07l-0.12,-0.08l-0.4,-0.44l-0.11,-0.22l0.15,-0.24ZM209.53,575.0l0.17,-0.21l0.28,-0.04l-0.06,0.38l0.09,0.09l0.27,0.14l0.34,0.0l0.41,0.28l0.04,0.12l-0.35,0.14l0.09,0.38l-0.06,0.17l-0.28,0.08l0.14,-0.47l-0.34,-0.41l-0.06,-0.25l-0.69,-0.39ZM210.36,574.41l0.1,-0.07l0.07,0.06l-0.0,0.01l-0.16,-0.0ZM209.54,571.91l0.03,-0.1l0.32,-0.15l0.14,-0.29l-0.04,-0.37l0.05,-0.1l0.34,1.01l-0.09,-0.09l-0.52,-0.06l-0.15,0.21l-0.08,-0.04ZM206.97,580.16l0.1,-0.52l-0.42,-0.36l0.1,-0.03l-0.05,-0.5l-0.28,-0.2l0.14,-0.17l0.28,-0.1l0.36,0.03l0.21,-0.67l-0.39,-0.23l-1.18,-0.03l-0.2,-0.17l0.19,-0.17l0.46,-0.05l0.67,-0.52l0.19,-0.54l-0.08,-0.32l-0.26,-0.01l0.23,-0.63l0.14,0.22l0.53,0.22l0.24,0.31l0.4,0.27l0.42,1.0l0.12,0.56l-0.14,0.62l-0.17,-0.03l-0.11,0.19l-0.32,0.19l0.02,0.34l-0.75,0.25l-0.08,0.43l0.07,0.45l0.56,-0.01l-0.02,0.13l0.38,0.45l0.22,-0.01l0.23,0.23l0.25,-0.06l0.21,0.38l-0.39,-0.07l-0.32,0.43l-0.06,0.32l0.22,0.37l0.41,0.04l0.21,0.09l-0.2,-0.03l-0.41,0.47l-0.47,0.15l0.11,0.7l0.38,0.27l-0.13,0.2l0.18,0.53l-0.2,0.06l-0.06,0.23l-0.22,-0.08l0.18,-0.35l-0.4,-1.09l0.11,-0.08l0.05,-0.73l-0.28,-0.13l-0.15,-0.32l0.01,-0.81l-0.21,-0.78l-0.46,-0.01l-0.11,0.08l-0.05,-0.39ZM207.26,574.01l-0.02,-0.27l-0.21,-0.27l0.29,-0.14l0.03,0.3l0.15,0.15l-0.04,0.21l-0.2,0.0ZM206.9,573.41l-0.43,-0.14l-0.38,-0.35l0.21,-0.11l0.28,0.14l0.04,0.28l0.27,0.18ZM208.72,573.09l0.26,-0.17l0.43,0.23l0.25,-0.0l-0.15,0.15l-0.09,0.37l-0.14,0.04l-0.23,-0.02l-0.33,-0.6ZM206.49,567.38l1.0,0.59l0.81,0.7l0.06,0.4l-0.46,0.04l-0.19,0.76l0.03,0.31l0.19,0.26l-0.17,0.31l0.43,0.76l-0.15,0.1l-0.85,-0.57l-0.44,0.12l-0.01,0.16l-0.22,-0.06l0.24,-0.51l-0.06,-0.27l0.08,0.03l0.08,-0.27l-0.06,-0.29l0.42,-0.7l0.08,-0.44l-0.28,-0.43l0.06,-0.22l-0.32,-0.31l-0.25,-0.5ZM208.6,569.24l0.34,0.07l0.2,-0.33l0.2,0.07l0.2,0.44l-0.0,0.19l-0.3,0.2l-0.13,0.86l-0.14,-0.44l-0.01,-0.6l-0.07,-0.17l-0.2,-0.03l-0.09,-0.25ZM209.57,569.66l0.0,-0.0l0.03,-0.02l-0.04,0.02ZM204.29,565.52l0.44,-0.15l-0.03,-0.36l0.29,-0.2l0.29,0.26l0.51,-0.3l-0.08,0.47l-0.15,0.23l-0.33,-0.04l-0.36,0.3l-0.27,-0.06l-0.16,0.09l0.02,0.12l-0.36,0.07l0.19,-0.44ZM206.36,564.27l-0.49,0.31l-0.02,-0.59l-0.46,-0.14l-0.02,-0.1l0.53,-0.05l0.24,-0.65l-0.35,-0.23l-0.51,-0.03l-0.1,-0.28l0.09,-0.84l0.2,-0.34l0.16,-0.72l0.07,-1.03l0.34,-0.33l0.69,0.17l0.26,0.31l-0.04,0.27l-0.16,0.12l0.03,0.24l-0.13,0.05l-0.05,0.65l-0.22,0.57l0.02,0.09l0.33,0.11l0.23,1.01l-0.15,0.27l0.43,0.45l-0.08,0.23l-0.57,-0.12l-0.09,0.19l-0.15,0.04l-0.01,0.39ZM206.15,574.28l-0.13,-0.03l0.0,-0.02l0.15,-0.04l-0.02,0.09ZM205.18,574.32l-0.02,0.0l0.01,-0.01l0.01,0.0ZM204.96,570.25l-0.05,-0.24l0.09,0.22l-0.04,0.01ZM205.25,569.02l-0.25,0.19l-0.3,-0.19l-0.18,-0.37l-0.42,-0.07l0.04,-0.08l0.41,0.09l0.15,-0.2l0.31,0.17l0.28,-0.13l0.03,0.52l-0.07,0.07ZM198.99,558.2l0.09,-0.07l0.23,0.49l-0.21,-0.07l-0.11,-0.35ZM199.36,558.71l0.38,0.44l0.56,-0.45l-0.44,-1.09l0.59,0.02l0.03,-0.77l0.24,0.32l0.51,0.01l0.2,-0.29l0.29,-0.06l0.19,0.34l0.24,0.12l0.18,0.27l-0.28,0.14l-0.69,-0.17l-0.13,0.26l-0.17,-0.1l-0.57,0.26l0.08,0.42l0.27,0.54l0.56,0.48l0.25,0.5l0.39,0.36l-0.12,0.15l0.09,0.44l-0.94,-1.32l-0.28,-0.2l-0.61,0.35l0.06,0.34l-0.2,0.14l0.2,0.7l0.21,0.07l-0.14,0.51l0.2,0.13l0.05,0.18l-0.28,0.06l-0.12,-0.56l-0.37,-0.57l0.25,-0.15l-0.16,-0.49l-0.21,-0.17l-0.02,-0.33l-0.28,-0.49l-0.01,-0.31ZM202.27,558.92l0.38,-0.28l0.43,-0.1l0.76,0.39l0.05,0.17l0.43,0.38l-0.11,0.18l-0.41,-0.45l-0.58,-0.11l-0.2,0.41l0.19,0.59l-0.97,-1.19ZM202.11,560.96l0.33,0.1l0.14,0.21l0.26,0.09l0.85,-0.01l-0.23,1.25l-0.31,-0.14l-1.03,-1.5ZM201.29,562.69l0.18,0.07l0.33,-0.09l0.0,0.25l0.48,0.21l0.22,0.28l-0.11,0.08l0.12,0.52l-0.05,0.29l0.23,0.34l-0.06,0.8l0.13,0.32l-0.1,0.03l-0.14,0.56l-0.14,0.99l0.02,0.73l-0.25,0.74l-0.22,-0.02l-0.19,0.34l-0.01,0.5l-0.44,1.06l-0.2,-0.86l-0.08,-0.92l0.3,-0.02l0.63,-0.49l-0.06,-0.73l-0.22,-0.05l0.02,-0.45l-0.19,-0.26l-0.25,-0.01l-0.16,-0.59l-0.47,-0.03l0.24,-0.17l0.01,-0.27l0.65,-0.05l0.22,-0.32l-0.13,-0.51l-0.53,-0.24l0.57,-0.27l-0.34,-1.16l-0.33,-0.12l0.28,-0.19l0.04,-0.3ZM199.27,560.14l0.0,0.0l-0.01,0.0l0.0,-0.0ZM199.1,564.31l0.25,-0.07l0.1,-0.06l-0.12,0.15l-0.23,-0.02ZM199.63,563.32l0.06,-0.2l-0.05,-0.13l0.09,0.13l-0.1,0.2ZM162.15,525.49l0.25,-0.21l0.11,-0.0l-0.2,0.31l-0.16,-0.1ZM136.7,524.68l0.22,0.25l0.59,-0.1l0.04,-0.44l0.61,0.38l0.29,-0.23l0.18,-0.67l0.1,-0.05l0.25,0.13l0.16,-0.06l-0.14,0.5l0.39,0.72l-0.5,0.38l-0.19,-0.72l-0.36,-0.02l-0.69,0.57l-0.12,-0.24l-0.46,0.06l-0.15,0.16l-0.22,-0.52l-0.13,-0.04l0.04,-0.14l0.07,0.07ZM139.88,525.13l-0.03,-0.01l0.02,-0.02l0.01,0.03ZM127.78,528.13l0.49,-0.13l0.09,0.05l-0.34,0.29l-0.18,0.01l-0.06,-0.22ZM128.01,526.82l0.09,-0.93l-0.34,-0.41l0.27,-0.06l0.19,-0.29l0.22,-0.02l0.24,-0.25l0.44,0.22l0.16,-0.11l0.5,0.1l0.1,-0.23l0.15,-0.03l0.38,0.09l0.25,0.25l-0.43,0.12l0.02,0.5l0.44,0.31l-0.25,0.64l0.13,1.11l0.36,0.59l0.43,0.15l-0.37,0.07l-0.19,0.39l-0.11,-0.05l0.03,-0.41l-0.23,-0.36l-0.69,-0.05l-0.43,-0.59l-0.47,-0.4l-0.65,-0.34l-0.26,-0.01ZM131.4,528.57l0.28,-0.39l-0.19,-0.6l0.07,-0.55l0.15,-0.28l0.3,0.13l0.31,-0.27l0.44,0.14l0.52,-0.02l0.3,-0.22l0.26,0.17l0.23,-0.03l0.19,0.33l0.66,-0.29l0.18,-0.29l0.28,0.22l-0.13,0.25l-0.0,0.39l0.26,0.35l0.46,-0.02l0.28,-0.39l0.28,0.18l0.44,-0.16l0.31,0.17l0.08,-0.05l-0.05,0.23l-0.73,0.21l-0.21,0.41l0.22,0.27l-0.07,0.65l0.3,0.23l0.29,0.05l-0.5,0.18l-0.19,-0.24l-0.3,-0.08l-0.09,-0.22l-0.26,-0.17l-0.13,-0.32l-0.96,-0.67l-0.23,0.18l-0.65,0.18l-0.19,0.27l0.12,0.28l-0.38,-0.39l-0.44,0.12l-0.19,0.46l-0.91,-0.26l-0.07,0.08l-0.35,-0.23ZM134.19,529.01l0.07,-0.02l0.09,0.03l-0.15,-0.01l-0.01,0.0ZM134.4,529.04l0.27,0.1l0.23,0.58l-0.25,-0.11l0.04,-0.1l-0.29,-0.47ZM135.83,526.14l0.09,-0.06l0.01,0.01l-0.11,0.04ZM132.89,525.47l-0.57,-0.58l0.11,-0.17l0.27,-0.08l0.34,0.07l0.08,0.37l-0.22,0.39ZM98.14,450.76l0.34,-0.44l0.56,-0.16l0.06,0.49l-0.13,0.02l0.1,0.29l0.7,0.54l0.29,0.6l0.36,0.4l-0.66,-0.36l-1.21,-0.26l-0.45,-0.8l0.04,-0.32ZM100.81,452.78l1.01,0.2l0.26,0.2l0.38,0.11l0.3,0.33l0.23,0.8l-0.26,0.19l-0.26,0.4l0.43,0.51l0.28,0.71l0.39,0.33l-0.09,0.31l0.05,0.32l0.21,0.31l0.5,0.32l0.0,0.35l-0.82,-0.26l-0.09,0.09l-0.51,-0.1l-0.33,0.07l-0.08,-0.93l-0.57,-1.1l0.12,-0.48l-0.3,-0.98l-0.39,-0.84l-0.28,-0.35l-0.01,-0.23l-0.17,-0.28ZM104.84,458.76l0.28,0.01l0.41,0.53l-0.25,0.05l-0.44,-0.59ZM96.98,478.79l0.06,-0.22l1.37,1.26l0.38,-0.0l0.32,-0.21l0.21,0.06l0.2,0.25l0.72,-0.01l-0.01,0.32l0.69,0.19l0.2,0.27l-0.05,0.32l0.09,0.16l0.27,0.29l0.49,0.19l0.07,0.2l-0.23,0.33l-0.32,0.22l-0.42,1.13l-0.7,-0.22l-0.36,-0.42l-0.19,0.11l-0.26,-0.08l-0.29,-0.35l-0.42,-0.13l-0.26,-0.41l-0.51,-0.41l-0.61,-1.56l0.07,-0.19l-0.47,-0.5l0.04,-0.31l-0.09,-0.3ZM97.68,522.17l0.05,-0.07l0.04,-0.11l0.07,0.18l-0.15,-0.01ZM98.03,522.39l0.04,0.02l-0.0,0.03l-0.03,-0.05ZM80.23,514.88l0.08,-0.15l0.69,0.24l0.38,-0.02l1.55,-0.69l0.18,0.0l0.16,0.37l0.44,0.39l0.27,0.08l0.4,-0.16l0.54,0.24l0.6,-0.01l0.53,0.26l0.44,0.41l0.03,0.72l-0.26,0.4l-0.13,0.44l-0.31,0.06l-0.22,0.21l-0.27,0.01l-0.3,-0.08l-0.46,-0.58l-1.38,-0.93l-0.45,-0.11l-0.76,0.03l-0.42,0.3l-0.21,0.03l-0.91,-0.42l-0.33,-0.34l0.14,-0.67ZM74.26,514.0l0.03,-0.25l0.32,0.05l0.02,0.35l-0.37,-0.15ZM64.81,513.23l0.09,-0.01l0.13,0.09l-0.17,0.0l-0.05,-0.08ZM70.29,514.35l-0.12,-0.05l-0.16,0.39l-0.25,-0.27l-0.36,0.08l0.24,-0.12l0.32,0.02l0.41,-0.61l-0.31,-0.35l-0.31,-0.63l-0.3,-0.24l0.05,-0.29l0.13,-0.06l0.67,0.13l0.43,0.28l0.16,0.24l-0.29,0.4l0.11,0.51l-0.06,0.17l-0.33,0.11l-0.04,0.31ZM68.8,514.2l-0.28,0.32l-0.09,-0.1l0.24,-0.29l-0.1,-0.27l0.19,-0.02l0.04,0.36ZM59.97,511.71l0.2,-0.13l0.18,-0.38l0.48,-0.06l0.27,0.03l0.13,0.21l0.36,0.14l0.1,0.15l-0.09,0.12l-0.23,-0.03l-0.61,0.18l-0.41,-0.22l-0.36,0.0ZM62.67,511.56l0.07,-0.35l0.28,-0.32l0.75,-0.02l0.67,0.35l0.17,0.49l-0.28,0.29l-1.25,-0.24l-0.41,-0.2ZM37.79,498.38l0.07,-0.23l-0.1,-0.23l0.32,0.03l0.09,0.49l-0.29,0.05l-0.1,-0.11ZM36.41,498.87l-0.02,0.01l0.01,-0.02l0.01,0.01ZM36.85,498.71l-0.0,-0.07l-0.0,-0.01l0.02,0.01l-0.01,0.07ZM30.2,493.17l-0.02,-0.03l0.04,-0.04l0.0,0.08l-0.02,-0.0ZM26.76,492.74l0.41,-0.33l0.12,0.35l-0.02,0.08l-0.25,0.01l-0.26,-0.12ZM25.01,490.83l0.02,0.0l-0.01,0.01l-0.02,-0.01ZM23.18,488.38l-0.09,0.01l0.05,-0.17l0.04,0.08l0.01,0.08ZM23.19,487.9l-0.06,0.1l-0.14,-0.54l0.19,0.18l0.0,0.26ZM15.95,478.85l0.25,0.07l-0.02,0.19l-0.14,-0.01l-0.09,-0.25ZM1.23,449.67l0.23,0.17l0.21,0.66l0.47,0.45l-0.25,0.16l0.12,0.39l-0.24,-0.38l-0.54,-0.19l-0.11,-0.3l0.19,-0.08l0.2,-0.42l-0.28,-0.47Z", "name": "Alaska"}, "US-NJ": {"path": "M801.67,165.24l1.31,-1.55l0.48,-1.57l0.5,-0.62l0.54,-1.45l0.11,-2.05l0.68,-1.35l0.92,-0.71l14.12,4.17l-0.3,5.66l-0.51,0.83l-0.13,-0.3l-0.65,-0.07l-0.34,0.44l-0.56,1.46l-0.46,2.72l0.26,1.55l0.63,0.61l1.06,0.15l1.23,-0.43l2.46,0.29l0.66,1.87l-0.2,4.55l0.29,0.47l-0.54,0.44l0.27,0.81l-0.72,0.74l0.03,0.35l0.43,0.22l-0.21,0.6l0.48,0.6l-0.17,3.8l0.59,0.52l-0.36,1.36l-1.14,1.82l-0.11,0.94l-1.36,0.07l0.09,1.21l0.64,0.83l-0.82,0.56l-0.18,1.15l1.05,0.77l-0.31,0.29l-0.17,-0.44l-0.53,-0.18l-0.5,0.22l-0.44,1.51l-1.28,0.61l-0.2,0.45l0.46,0.55l0.8,0.06l-0.66,1.26l-0.26,1.5l-0.68,0.65l0.19,0.48l0.4,0.04l-0.89,1.57l0.07,0.95l-1.56,1.66l-0.17,-1.65l0.33,-2.07l-0.11,-0.87l-0.58,-0.82l-0.89,-0.28l-1.11,0.34l-0.81,-0.35l-1.51,0.88l-0.31,-0.71l-1.62,-0.96l-1.0,0.04l-0.65,-0.71l-0.7,0.07l-3.24,-2.03l-0.06,-1.72l-1.02,-0.94l0.48,-0.68l0.0,-0.88l0.43,-0.83l-0.12,-0.73l0.51,-1.19l1.2,-1.16l2.6,-1.49l0.54,-0.86l-0.38,-0.85l0.5,-0.37l0.47,-1.44l1.24,-1.7l2.52,-2.22l0.18,-0.67l-0.47,-0.82l-4.26,-2.78l-0.75,-1.05l-0.9,0.24l-0.48,-0.33l-1.24,-2.46l-1.62,-0.02l-1.0,-3.45l1.02,-1.03l0.36,-2.23l-1.87,-1.91Z", "name": "New Jersey"}, "US-ME": {"path": "M837.04,56.27l0.86,-1.15l1.42,1.7l0.84,0.04l0.39,-2.12l-0.46,-2.19l1.7,0.36l0.73,-0.42l0.21,-0.52l-0.32,-0.7l-1.18,-0.47l-0.44,-0.62l0.19,-1.43l0.86,-2.02l2.08,-2.25l0.01,-0.98l-0.52,-0.93l1.02,-1.64l0.39,-1.51l-0.22,-0.91l-1.02,-0.35l-0.07,-1.42l-0.4,-0.43l0.55,-0.96l-0.04,-0.63l-1.0,-1.26l0.13,-1.73l0.37,-0.63l-0.15,-0.97l1.22,-1.93l-0.96,-6.17l5.58,-18.88l2.25,-0.23l1.15,3.18l0.55,0.43l2.54,0.56l1.83,-1.73l1.68,-0.83l1.24,-1.72l1.25,-0.12l0.64,-0.47l0.25,-1.43l0.42,-0.3l1.36,0.04l3.68,1.41l1.14,0.96l2.36,1.05l8.38,22.7l0.64,0.65l-0.25,0.95l0.72,1.02l-0.1,1.41l0.54,1.3l0.67,0.47l1.05,-0.12l1.12,0.58l0.97,0.1l2.47,-0.53l0.4,0.95l-0.59,1.42l1.69,1.86l0.28,2.69l2.72,1.68l0.98,-0.1l0.47,-0.74l-0.06,-0.5l1.21,0.25l2.95,2.8l0.04,0.47l-0.52,-0.14l-0.38,0.41l0.18,0.77l-0.76,-0.15l-0.35,0.4l0.15,0.63l1.84,1.62l0.16,-0.88l0.39,-0.17l0.8,0.32l0.27,-0.83l0.33,0.41l-0.31,0.85l-0.53,0.19l-1.21,3.24l-0.62,-0.04l-0.31,0.44l-0.55,-1.05l-0.72,0.03l-0.3,0.5l-0.56,0.06l-0.02,0.49l0.58,0.85l-0.91,-0.45l-0.32,0.63l0.26,0.52l-1.2,-0.28l-0.37,0.3l-0.37,0.78l0.08,0.45l0.44,0.08l0.07,1.21l-0.37,-0.57l-0.54,-0.06l-0.39,0.45l-0.2,1.09l-0.48,-1.53l-1.14,0.01l-0.68,0.75l-0.36,1.48l0.59,0.63l-0.83,0.63l-0.7,-0.46l-0.73,1.04l0.1,0.64l0.99,0.63l-0.35,0.21l-0.1,0.82l-0.45,-0.2l-0.85,-1.82l-1.03,-0.46l-0.39,0.22l-0.45,-0.41l-0.57,0.63l-1.25,-0.19l-0.26,0.86l0.78,0.4l0.01,0.37l-0.51,-0.06l-0.56,0.4l-0.09,0.69l-0.49,-1.02l-1.17,-0.02l-0.16,0.64l0.52,0.87l-1.44,0.96l0.84,1.11l0.08,1.06l0.53,0.65l-0.96,-0.41l-0.96,0.22l-1.2,-0.42l-0.17,-0.91l0.74,-0.28l-0.08,-0.55l-0.43,-0.5l-0.67,-0.12l-0.3,0.33l-0.23,-2.37l-0.37,-0.22l-1.1,0.26l0.04,1.96l-1.85,1.92l0.02,0.49l1.25,1.47l-0.64,0.96l-0.19,3.87l0.77,1.41l-0.57,0.53l0.0,0.63l-0.51,0.55l-0.8,-0.19l-0.45,0.93l-0.62,-0.06l-0.41,-1.15l-0.73,-0.21l-0.52,1.03l0.11,0.69l-0.45,0.59l0.12,2.41l-0.95,-1.01l0.14,-1.28l-0.24,-0.59l-0.81,0.29l-0.08,2.01l-0.44,-0.25l0.15,-1.55l-0.48,-0.4l-0.68,0.49l-0.76,3.04l-0.75,-1.84l0.07,-1.51l-0.77,0.05l-1.06,2.76l0.51,0.55l0.73,-0.25l0.91,2.04l-0.28,-0.59l-0.52,-0.23l-0.66,0.3l-0.07,0.64l-1.38,-0.1l-2.16,3.18l-0.53,1.86l0.29,0.6l-0.68,0.65l0.51,0.43l0.91,-0.21l0.37,0.92l-0.77,0.3l-0.2,0.39l-0.4,-0.04l-0.51,0.57l-0.14,1.03l0.67,1.37l-0.08,0.68l-0.79,1.29l-0.94,0.61l-0.41,1.07l-0.1,1.28l0.44,0.9l-0.4,2.81l-0.8,-0.33l-0.41,0.6l-1.02,-0.76l-0.57,-1.86l-0.93,-0.37l-2.36,-1.99l-0.76,-3.45l-13.25,-35.55ZM863.92,80.85l0.09,0.26l-0.08,0.23l0.03,-0.29l-0.04,-0.2ZM865.33,81.07l0.47,0.7l-0.04,0.47l-0.32,-0.25l-0.1,-0.93ZM867.67,77.93l0.43,0.83l-0.16,0.14l-0.42,-0.19l0.16,-0.77ZM877.04,64.5l-0.14,0.2l-0.03,-0.24l0.17,0.04ZM873.08,74.84l0.01,0.02l-0.03,0.03l0.01,-0.06ZM882.73,63.41l0.04,-1.17l0.41,-0.66l-0.18,-0.44l0.4,-0.5l0.62,-0.11l1.54,1.36l-0.49,0.65l-1.08,0.04l-0.27,0.43l0.57,1.3l-0.99,-0.18l-0.14,-0.57l-0.44,-0.16ZM879.31,65.98l0.61,0.41l-0.35,0.29l0.15,0.96l-0.39,-0.63l0.19,-0.53l-0.21,-0.5ZM878.07,70.51l0.09,-0.01l0.48,-0.08l-0.25,0.46l-0.32,-0.37Z", "name": "Maine"}, "US-MD": {"path": "M740.69,219.66l-2.04,-10.06l19.85,-4.49l-0.66,1.29l-0.94,0.08l-1.55,0.81l0.16,0.7l-0.42,0.49l0.23,0.78l-1.04,0.09l-0.72,0.41l-1.48,0.03l-1.14,-0.39l0.21,-0.36l-0.3,-0.49l-1.11,-0.31l-0.47,1.8l-1.63,2.85l-1.37,-0.39l-1.03,0.62l-0.41,1.26l-1.6,1.93l-0.36,1.04l-0.88,0.45l-1.3,1.87ZM760.76,204.58l37.02,-9.15l8.22,26.4l0.48,0.26l8.48,-2.22l0.24,0.71l0.6,0.03l0.38,0.95l0.52,-0.05l-0.38,1.96l-0.12,-0.26l-0.47,0.06l-0.73,0.86l-0.17,2.7l-0.6,0.19l-0.36,0.71l-0.02,1.47l-3.64,1.51l-0.37,0.76l-2.25,0.43l-0.56,0.65l-0.3,-1.09l0.5,-0.31l0.87,-1.85l-0.4,-0.51l-0.45,0.12l0.08,-0.5l-0.44,-0.42l-2.29,0.63l0.3,-0.6l1.15,-0.83l-0.17,-0.69l-1.36,-0.18l0.38,-2.24l-0.18,-1.02l-0.91,0.16l-0.53,1.76l-0.34,-0.69l-0.62,-0.07l-0.44,0.47l-0.5,1.39l0.53,1.02l-2.87,-2.14l-0.43,-0.19l-0.61,0.36l-0.73,-0.76l0.37,-0.84l-0.04,-0.84l0.76,-0.6l-0.08,-1.35l2.08,0.1l0.89,-0.45l0.36,-0.9l-0.32,-1.42l-0.43,-0.05l-0.54,1.31l-0.39,0.09l-1.05,-0.72l0.06,-0.4l-0.52,-0.28l-0.55,0.23l-0.22,-0.68l-0.73,0.1l-0.12,0.28l0.07,-0.74l0.65,-0.01l0.49,-0.37l0.22,-1.04l-0.54,-0.55l-0.57,0.71l-0.2,-0.53l0.88,-0.87l-0.25,-0.65l-0.54,-0.08l-0.09,-0.48l-0.42,-0.27l-0.35,0.15l-0.66,-0.53l0.89,-0.8l-0.24,-1.03l0.94,-2.38l-0.17,-0.43l-0.46,0.02l-0.66,0.66l-0.56,-0.16l-0.61,0.95l-0.74,-0.6l0.49,-3.59l0.6,-0.52l0.06,-0.61l4.22,-1.21l0.12,-0.7l-0.51,-0.3l-2.38,0.43l0.76,-1.27l1.42,-0.05l0.35,-0.5l-0.99,-0.67l0.44,-1.9l-0.63,-0.32l-1.2,1.82l0.05,-1.5l-0.59,-0.34l-0.68,1.1l-1.62,0.67l-0.31,1.65l0.39,0.54l0.65,0.12l-1.45,1.92l-0.2,-1.64l-0.64,-0.42l-0.61,0.73l0.07,1.45l-0.85,-0.29l-1.16,0.64l0.02,0.71l1.01,0.27l-0.37,0.54l-0.83,0.22l-0.05,0.34l-0.44,-0.04l-0.35,0.64l1.15,1.2l-1.88,-0.67l-1.21,0.59l0.16,0.69l1.56,0.58l0.91,0.93l0.72,-0.12l0.56,0.75l-0.98,-0.07l-1.15,1.36l0.32,0.77l1.57,0.92l-0.67,0.12l-0.21,0.41l0.8,1.08l-0.32,0.56l0.32,0.97l0.58,0.45l-0.52,1.09l0.99,1.25l0.96,3.54l0.61,0.84l2.07,1.63l0.42,0.81l-0.58,0.17l-0.64,-0.75l-1.45,-0.31l-1.64,-1.26l-1.33,-3.16l-0.73,-0.68l-0.3,0.37l0.11,0.7l1.28,3.54l1.14,1.31l2.05,0.74l1.03,1.11l0.64,0.14l0.91,-0.36l-0.03,1.11l1.66,1.54l0.1,1.1l-0.89,-0.35l-0.51,-1.29l-0.63,-0.45l-0.45,0.04l-0.13,0.44l0.27,0.79l-0.67,0.09l-0.65,-0.82l-1.41,-0.67l-2.39,0.63l-0.7,-0.67l-0.71,-1.49l-1.26,-0.71l-0.46,0.14l0.01,0.48l1.13,1.84l-0.22,-0.08l-1.62,-1.2l-1.66,-2.28l-0.45,-0.02l-0.37,1.44l-0.32,-0.79l-0.74,0.2l-0.21,0.27l0.33,0.72l-0.11,0.56l-0.76,0.53l-0.94,-1.5l0.07,-1.68l0.76,-0.6l-0.19,-0.74l0.78,-0.47l0.21,-1.61l1.07,-1.03l-0.0,-1.03l-0.46,-0.86l1.27,-2.19l-0.14,-0.54l-2.72,-1.68l-0.56,0.14l-0.63,1.08l-1.87,-0.26l-0.52,-0.83l-1.11,-0.51l-2.41,0.07l-1.25,-0.91l0.61,-1.35l-0.4,-0.97l-1.19,-0.3l-0.89,-0.66l-2.69,0.07l-0.36,-0.23l-0.11,-1.26l-1.04,-0.6l0.09,-1.2l-0.51,-0.29l-0.49,0.19l-0.23,-0.64l-0.52,-0.13l0.26,-0.83l-0.45,-0.58l-0.69,-0.12l-1.81,0.67l-2.24,-1.27ZM790.04,212.1l1.14,0.18l0.3,0.17l-0.52,0.29l-0.93,-0.63ZM803.05,225.67l-0.02,0.33l-0.21,-0.15l0.23,-0.19ZM807.02,229.13l-0.16,0.3l-0.13,0.07l0.02,-0.24l0.26,-0.12ZM797.57,220.61l-0.06,0.01l-0.09,0.03l0.12,-0.07l0.03,0.02ZM797.24,220.74l-0.26,0.56l-0.18,0.12l0.15,-0.61l0.29,-0.07ZM795.94,216.76l-0.29,0.29l-0.72,-0.27l0.02,-0.33l0.26,-0.36l0.72,0.67ZM794.58,212.85l-0.34,0.78l-0.59,0.23l0.02,-1.48l0.92,0.47ZM802.18,228.89l0.1,-0.11l0.12,0.08l-0.22,0.03Z", "name": "Maryland"}, "US-AR": {"path": "M498.73,376.99l-1.42,-38.01l-4.48,-23.98l37.68,-2.58l39.02,-3.58l0.8,1.6l1.01,0.7l0.11,1.77l-0.77,0.57l-0.22,0.94l-1.42,0.93l-0.29,1.04l-0.83,0.54l-1.19,2.59l0.02,0.7l0.53,0.26l10.94,-1.46l0.86,0.93l-1.18,0.37l-0.52,0.96l0.25,0.49l0.84,0.41l-3.6,2.7l0.02,0.84l0.83,1.04l-0.6,1.15l0.62,0.97l-1.42,0.74l-0.11,1.44l-1.45,2.09l0.12,1.64l0.91,3.1l-0.15,0.27l-1.08,-0.01l-0.33,0.26l-0.51,1.73l-1.52,0.95l-0.04,0.51l0.79,0.91l0.05,0.65l-1.11,1.21l-2.02,1.13l-0.21,0.62l0.43,1.0l-0.19,0.27l-1.23,0.03l-0.42,0.67l-0.32,1.89l0.47,1.57l0.02,3.08l-1.27,1.09l-1.54,0.13l0.23,1.49l-0.21,0.48l-0.93,0.25l-0.59,1.77l-1.49,1.19l-0.02,0.93l1.39,0.76l-0.03,0.7l-1.23,0.3l-2.24,1.23l0.03,0.67l0.99,0.82l-0.45,1.14l0.53,1.38l-1.09,0.62l-1.9,2.57l0.52,0.7l1.0,0.49l0.01,0.58l-0.98,0.29l-0.42,0.64l0.51,0.84l1.63,1.01l0.06,1.77l-0.59,0.98l-0.09,0.84l0.29,0.4l1.05,0.39l0.5,2.17l-1.09,1.01l0.06,2.11l-51.46,4.07l-0.83,-11.53l-1.18,-0.85l-0.9,0.16l-0.83,-0.35l-0.93,0.39l-1.22,-0.33l-0.57,0.72l-0.47,0.01l-0.49,-0.48l-0.82,-0.15l-0.63,-1.0Z", "name": "Arkansas"}, "US-MA": {"path": "M877.65,135.84l1.07,-0.19l0.85,-1.13l0.45,0.58l-1.06,0.64l-1.31,0.1ZM831.87,132.65l-0.46,-0.28l-10.4,2.53l-0.25,-0.18l-0.27,-14.8l29.99,-7.86l1.53,-1.8l0.34,-1.48l0.95,-0.35l0.61,-1.04l1.3,-1.08l1.23,-0.08l-0.44,1.05l1.36,0.55l-0.16,0.61l0.44,0.83l1.0,0.36l-0.06,0.32l0.39,0.28l1.31,0.19l-0.16,0.56l-2.52,1.87l-0.05,1.07l0.45,0.16l-1.11,1.41l0.23,1.08l-1.01,0.96l0.58,1.41l1.4,0.45l0.5,0.63l1.36,-0.57l0.33,-0.59l1.2,0.09l0.79,0.47l0.23,0.68l1.78,1.37l-0.07,1.25l-0.36,0.29l0.11,0.61l1.58,0.82l1.19,-0.14l0.68,1.2l0.22,1.14l0.89,0.68l1.33,0.41l1.48,-0.12l0.43,0.38l1.05,-0.23l3.35,-2.76l0.39,-0.69l0.54,0.02l0.56,1.86l-3.32,1.52l-0.94,0.82l-2.75,0.98l-0.49,1.65l-1.94,1.27l-0.81,-2.53l0.11,-1.35l-0.55,-0.31l-0.5,0.39l-0.93,-0.11l-0.3,0.51l0.25,0.92l-0.26,0.79l-0.4,0.06l-0.63,1.1l-0.6,-0.2l-0.5,0.48l0.22,1.86l-0.9,0.87l-0.63,-0.8l-0.47,0.01l-0.11,0.55l-0.26,0.03l-0.7,-2.02l-1.02,-0.35l0.44,-2.5l-0.21,-0.4l-0.77,0.4l-0.29,1.47l-0.69,0.2l-1.4,-0.64l-0.78,-2.12l-0.8,-0.22l-0.78,-2.15l-0.49,-0.24l-6.13,2.0l-0.3,-0.15l-14.84,4.19l-0.28,0.5ZM860.89,110.08l-0.02,-0.37l-0.14,-0.48l0.51,0.23l-0.35,0.62ZM876.37,122.8l-0.42,-0.66l0.06,-0.05l0.44,0.67l-0.09,0.05ZM875.46,121.25l-0.86,-0.11l-0.94,-1.42l1.44,1.0l0.36,0.54ZM871.54,119.46l-0.06,0.25l-0.35,-0.2l0.13,0.02l0.29,-0.07ZM871.87,135.18l0.01,-0.02l0.01,0.04l-0.02,-0.02ZM867.18,137.63l0.78,-0.56l0.28,-1.17l0.84,-1.19l0.17,0.26l0.46,-0.11l0.34,0.52l0.71,-0.01l0.19,0.38l-2.11,0.73l-1.34,1.31l-0.33,-0.17Z", "name": "Massachusetts"}, "US-AL": {"path": "M608.66,337.47l25.17,-2.91l19.4,-2.75l14.04,43.3l0.79,1.4l0.22,1.05l1.17,1.59l0.59,1.87l2.24,2.5l0.92,1.8l-0.11,2.13l1.8,1.13l-0.17,0.74l-0.63,0.1l-0.16,0.7l-0.98,0.84l-0.22,2.29l0.25,1.48l-0.77,2.3l-0.14,1.84l1.1,2.94l1.21,1.52l0.53,1.6l-0.08,5.02l-0.25,0.81l0.48,2.03l1.35,1.16l1.14,2.07l-47.65,6.92l-0.42,0.61l-0.08,2.99l2.64,2.75l2.0,0.97l-0.34,2.7l0.56,1.6l0.43,0.39l-0.94,1.69l-1.24,1.0l-1.13,-0.75l-0.34,0.49l0.66,1.46l-2.82,1.05l0.29,-0.64l-0.45,-0.86l-0.99,-0.77l-0.1,-1.11l-0.57,-0.22l-0.53,0.61l-0.32,-0.1l-0.89,-1.53l0.41,-1.67l-0.97,-2.21l-0.46,-0.45l-0.86,-0.2l-0.3,-0.89l-0.56,-0.17l-0.37,0.61l0.14,0.35l-0.77,3.1l-0.01,5.08l-0.59,0.0l-0.24,-0.71l-2.22,-0.44l-1.65,0.31l-5.46,-31.99l-0.99,-66.49l-0.02,-0.37l-1.07,-0.63l-0.69,-1.02Z", "name": "Alabama"}, "US-MO": {"path": "M468.68,225.54l24.71,-0.73l18.94,-1.43l22.11,-2.58l0.42,0.35l0.39,0.91l2.43,1.65l0.29,0.74l1.21,0.87l-0.51,1.37l-0.1,3.21l0.78,3.65l0.95,1.44l0.03,1.59l1.11,1.37l0.46,1.55l4.96,4.1l1.06,1.69l4.93,3.31l0.7,1.15l0.27,1.62l0.5,0.82l-0.18,0.69l0.47,1.8l0.97,1.63l0.77,0.73l1.04,0.16l0.83,-0.56l0.84,-1.4l0.57,-0.19l2.41,0.61l1.68,0.76l0.84,0.77l-0.97,1.95l0.26,2.28l-2.37,6.86l0.01,1.02l0.7,1.92l4.67,4.05l1.99,1.05l1.46,0.09l1.66,1.31l1.91,0.8l1.51,2.11l2.04,0.83l0.42,2.96l1.72,2.9l-1.1,1.94l0.18,1.38l0.75,0.33l2.31,4.25l1.94,0.92l0.55,-0.32l0.0,-0.65l0.87,1.1l1.07,-0.08l0.14,1.85l-0.37,1.07l0.53,1.6l-1.07,3.86l-0.51,0.07l-1.37,-1.13l-0.65,0.13l-0.78,3.34l-0.52,0.74l0.13,-1.06l-0.56,-1.09l-0.97,-0.2l-0.74,0.63l0.02,1.05l0.53,0.66l-0.04,0.7l0.58,1.34l-0.2,0.4l-1.2,0.39l-0.17,0.41l0.15,0.55l0.86,0.84l-1.71,0.37l-0.14,0.62l1.53,1.97l-0.89,0.75l-0.63,2.13l-10.61,1.42l1.06,-2.28l0.87,-0.61l0.18,-0.87l1.44,-0.96l0.25,-0.96l0.63,-0.37l0.29,-0.59l-0.22,-2.28l-1.05,-0.75l-0.2,-0.77l-1.09,-1.18l-39.24,3.61l-37.72,2.58l-3.21,-58.2l-1.03,-0.63l-1.2,-0.02l-1.52,-0.73l-0.19,-0.93l-0.76,-0.59l-0.34,-0.71l-0.36,-1.55l-0.55,-0.09l-0.3,-0.56l-1.13,-0.66l-1.4,-1.84l0.73,-0.51l0.09,-1.24l1.12,-1.27l0.09,-0.79l1.01,0.16l0.56,-0.43l-0.2,-2.24l-1.02,-0.74l-0.32,-1.1l-1.17,-0.01l-1.31,0.96l-0.81,-0.7l-0.73,-0.17l-2.67,-2.35l-1.05,-0.28l0.13,-1.6l-1.32,-1.72l0.1,-1.02l-0.37,-0.36l-1.01,-0.18l-0.59,-0.85l-0.84,-0.26l0.07,-0.53l-1.24,-2.88l-0.0,-0.74l-0.4,-0.49l-0.85,-0.29l-0.05,-0.54ZM583.77,294.59l-0.1,-0.1l-0.08,-0.15l0.11,-0.01l0.07,0.26Z", "name": "Missouri"}, "US-MN": {"path": "M439.34,42.76l26.81,-1.05l0.34,1.46l1.28,0.84l1.79,-0.5l1.05,-1.43l0.78,-0.31l2.13,2.19l1.71,0.28l0.31,1.2l1.83,1.4l1.79,0.48l2.64,-0.41l0.39,0.85l0.67,0.4l5.12,0.01l0.37,0.23l0.54,1.59l0.71,0.61l4.27,-0.78l0.77,-0.65l0.07,-0.69l2.43,-0.79l3.97,-0.02l1.42,0.7l3.39,0.66l-1.01,0.79l0.0,0.82l1.18,0.54l2.23,-0.16l0.52,2.08l1.58,2.29l0.71,0.05l1.03,-0.78l-0.04,-1.73l2.67,-0.46l1.43,2.17l2.01,0.79l1.54,0.18l0.54,0.57l-0.03,0.83l0.58,0.35l1.32,0.06l0.38,0.83l1.43,-0.19l1.12,0.22l2.22,-0.85l2.78,-2.55l2.49,-1.54l1.24,2.52l0.96,0.51l2.23,-0.66l0.87,0.36l5.98,-1.3l0.56,0.18l1.32,1.64l1.24,0.59l0.62,-0.01l1.61,-0.83l1.35,0.08l-0.93,1.03l-4.69,3.07l-6.35,2.82l-3.68,2.48l-2.15,2.49l-0.95,0.58l-6.63,8.66l-0.95,0.61l-1.08,1.56l-1.96,1.96l-4.17,3.55l-0.86,1.79l-0.55,0.44l-0.14,0.96l-0.78,-0.01l-0.46,0.51l0.98,12.22l-0.79,1.2l-1.05,0.08l-0.52,0.82l-0.83,0.15l-0.61,0.83l-2.06,1.19l-0.94,1.86l0.06,0.72l-1.69,2.39l-0.01,2.06l0.38,0.91l2.15,0.39l1.42,2.49l-0.52,1.92l-0.71,1.25l-0.05,2.12l0.45,1.32l-0.71,1.23l0.91,3.14l-0.51,4.08l3.95,3.03l3.02,0.4l1.89,2.25l2.87,0.5l2.45,1.93l2.39,3.59l2.64,1.8l2.09,0.09l1.07,0.71l0.88,0.1l0.82,1.36l1.03,0.45l0.23,0.39l0.28,2.03l0.68,1.3l0.39,4.82l-40.63,3.2l-40.63,2.09l-1.46,-38.98l-0.7,-1.27l-0.83,-0.78l-2.57,-0.79l-0.94,-1.91l-1.46,-1.79l0.21,-0.68l2.83,-2.34l0.97,-2.12l0.4,-2.44l-0.35,-1.58l0.23,-1.58l-0.18,-1.79l-0.5,-1.03l-0.18,-2.33l-1.81,-2.59l-0.47,-1.13l-0.21,-2.16l-0.66,-0.98l0.15,-1.66l-0.35,-1.52l0.53,-2.69l-1.08,-1.85l-0.49,-8.33l-0.42,-0.79l0.06,-3.92l-1.58,-3.96l-0.53,-0.65l-0.4,-1.37l0.05,-1.19l-0.48,-0.53l-1.36,-3.77l0.0,-3.22l-0.47,-1.97l0.27,-1.12l-0.57,-2.32l0.73,-2.56l-2.06,-6.9ZM468.97,33.61l1.22,0.46l0.99,-0.2l0.33,0.45l-0.05,1.72l-1.78,1.12l-0.15,-0.47l-0.4,-0.14l-0.16,-2.95Z", "name": "Minnesota"}, "US-CA": {"path": "M2.95,175.4l0.78,-1.24l0.46,0.46l0.59,-0.08l0.52,-1.18l0.8,-0.86l1.3,-0.26l0.56,-0.53l-0.15,-0.71l-0.93,-0.32l1.53,-2.79l-0.3,-1.58l0.14,-0.87l2.04,-3.3l1.31,-3.03l0.36,-2.12l-0.28,-1.0l0.16,-3.11l-1.36,-2.16l1.18,-1.38l0.67,-2.53l32.73,8.13l32.58,7.34l-13.67,64.68l25.45,34.66l36.6,51.1l13.3,17.72l-0.19,2.73l0.73,0.94l0.21,1.71l0.85,0.63l0.81,2.56l-0.07,0.91l0.63,1.46l-0.16,1.36l3.8,3.82l0.01,0.5l-1.95,1.53l-3.11,1.26l-1.2,1.99l-1.72,1.14l-0.33,0.81l0.38,1.03l-0.51,0.51l-0.1,0.9l0.08,2.29l-0.6,0.72l-0.64,2.44l-2.02,2.47l-1.6,0.14l-0.42,0.51l0.33,0.89l-0.59,1.34l0.54,1.12l-0.01,1.19l-0.78,2.68l0.57,1.02l2.74,1.13l0.34,0.83l-0.19,2.4l-1.18,0.78l-0.42,1.37l-2.27,-0.62l-1.25,0.6l-43.38,-3.34l0.17,-1.15l0.67,-0.51l-0.17,-1.06l-1.17,-1.38l-1.04,-0.15l0.23,-1.2l-0.28,-1.07l0.78,-1.33l-0.3,-4.25l-0.6,-2.3l-1.92,-4.07l-3.56,-4.07l-1.29,-1.98l-2.42,-2.11l-2.04,-3.01l-2.22,-0.89l-0.94,0.3l-0.39,0.96l-0.62,-0.73l-0.88,-0.22l-0.15,-0.31l0.61,-0.76l0.17,-1.57l-0.44,-2.06l-1.01,-1.95l-1.0,-0.74l-4.44,-0.19l-3.33,-1.81l-1.36,-1.26l-0.7,-0.12l-1.02,-1.19l-0.44,-2.6l-0.97,-0.47l-1.68,-2.31l-2.19,-1.73l-1.24,-0.41l-1.66,0.37l-1.15,-1.01l-1.25,0.03l-2.48,-1.83l-1.06,0.01l-1.49,-0.69l-4.91,-0.52l-1.12,-2.35l-1.43,-0.76l1.34,-2.45l-0.25,-1.36l0.74,-1.99l-0.63,-1.35l1.27,-2.45l0.33,-2.44l-0.99,-1.24l-1.26,-0.23l-1.4,-1.28l0.41,-1.62l0.79,-0.09l0.25,-0.45l-0.47,-2.2l-0.65,-0.77l-1.47,-0.84l-1.78,-3.97l-1.82,-1.25l-0.36,-2.75l-1.61,-2.58l0.07,-1.39l-0.33,-1.26l-1.16,-0.94l-0.74,-2.95l-2.41,-2.69l-0.55,-1.25l-0.02,-4.63l0.59,-0.57l-0.59,-1.14l0.51,-0.59l0.53,0.61l0.78,-0.02l0.84,-0.81l0.56,-1.33l0.8,0.04l0.21,-0.88l-0.43,-0.27l0.47,-1.19l-1.22,-3.68l-0.62,-0.48l-1.05,0.08l-1.93,-0.51l-1.04,-1.06l-1.89,-3.21l-0.8,-2.28l0.86,-2.39l0.09,-1.11l-0.27,-2.38l-0.32,-0.64l-0.54,-0.24l0.25,-1.19l0.69,-1.07l0.24,-2.71l0.47,-0.64l0.88,0.13l0.18,0.94l-0.7,2.13l0.05,1.15l1.18,1.32l0.55,0.1l0.58,1.28l1.16,0.78l0.4,1.01l0.89,0.41l0.83,-0.21l-0.21,-1.45l-0.65,-0.43l-0.18,-0.58l-0.24,-3.57l-0.56,-0.71l0.26,-0.69l-1.48,-1.06l0.5,-1.07l0.09,-1.06l-1.2,-1.58l0.78,-0.74l0.79,0.06l1.24,-0.73l1.25,1.02l1.87,-0.32l5.55,2.41l0.61,-0.09l0.64,-1.38l0.69,-0.04l1.92,2.53l0.25,0.18l0.63,-0.24l0.02,-0.38l-0.39,-0.93l-1.57,-1.89l-1.66,-0.32l0.27,-0.62l-0.28,-0.54l-0.48,0.09l-1.05,1.01l-1.84,-0.22l-0.43,0.28l-0.15,-0.51l-1.05,-0.4l0.24,-1.05l-0.85,-0.47l-1.0,0.28l-0.6,0.84l-1.09,0.4l-1.35,-0.9l-0.39,-0.88l-1.51,-1.44l-0.58,0.03l-0.64,0.61l-0.92,-0.12l-0.48,0.36l-0.33,1.88l0.21,0.78l-0.76,1.36l0.36,0.65l-0.47,0.59l-0.04,0.69l-2.16,-2.89l-0.44,-0.15l-0.25,0.32l-0.73,-1.0l-0.21,-1.03l-1.2,-1.17l-0.4,-1.05l-0.61,-0.18l0.65,-1.48l0.11,0.95l0.76,1.49l0.44,0.25l0.33,-0.38l-1.45,-5.21l-1.08,-1.42l-0.31,-2.68l-2.5,-2.87l-1.8,-4.48l-3.05,-5.54l1.09,-1.7l0.25,-1.97l-0.46,-2.11l-0.14,-3.61l1.34,-2.92l0.7,-0.74l-0.07,-1.54l0.42,-1.53l-0.41,-1.63l0.11,-1.96l-1.41,-4.06l-0.97,-1.15l0.06,-0.8l-0.42,-1.19l-2.91,-4.03l0.51,-1.35l-0.21,-2.69l2.23,-3.44ZM31.5,240.45l-0.06,0.1l-0.34,0.04l0.21,-0.05l0.19,-0.09ZM64.32,351.64l0.27,0.13l0.19,0.18l-0.31,-0.18l-0.15,-0.13ZM65.92,352.88l1.32,0.84l0.76,1.73l-0.89,-0.66l-1.14,0.03l-0.05,-1.94ZM62.72,363.08l1.36,2.08l0.57,0.53l-0.46,0.06l-0.83,-0.79l-0.65,-1.88ZM43.54,333.81l0.88,0.73l1.37,0.36l1.36,1.0l-2.82,-0.18l-0.71,-0.58l0.24,-0.66l-0.32,-0.67ZM47.89,335.89l0.94,-0.5l0.32,0.36l-0.37,0.14l-0.88,-0.0ZM46.05,352.4l0.29,-0.06l0.95,0.92l-0.61,-0.17l-0.64,-0.69ZM37.57,334.04l2.57,0.16l0.2,0.74l0.6,0.45l-1.21,0.64l-1.17,-0.1l-0.49,-0.44l-0.5,-1.44ZM34.94,332.37l0.06,-0.02l0.05,0.06l-0.01,-0.0l-0.1,-0.04Z", "name": "California"}, "US-IA": {"path": "M452.9,162.25l42.83,-2.19l40.56,-3.19l0.96,2.52l2.0,1.0l0.08,0.59l-0.9,1.8l-0.16,1.04l0.9,5.09l0.92,1.26l0.39,1.75l1.46,1.72l4.95,0.85l1.27,2.03l-0.3,1.03l0.29,0.66l3.61,2.37l0.85,2.41l3.84,2.31l0.62,1.68l-0.31,4.21l-1.64,1.98l-0.5,1.94l0.13,1.28l-1.26,1.36l-2.51,0.97l-0.89,1.18l-0.55,0.25l-4.56,0.83l-0.89,0.73l-0.61,1.71l-0.15,2.56l0.4,1.08l2.01,1.47l0.54,2.65l-1.87,3.25l-0.22,2.24l-0.53,1.42l-2.88,1.39l-1.02,1.02l-0.2,0.99l0.72,0.87l0.2,2.15l-0.58,0.23l-1.34,-0.82l-0.31,-0.76l-1.29,-0.82l-0.29,-0.51l-0.88,-0.36l-0.3,-0.82l-0.95,-0.68l-22.3,2.61l-15.13,1.17l-7.59,0.51l-20.78,0.47l-0.22,-1.06l-1.3,-0.73l-0.33,-0.67l0.58,-1.16l-0.21,-0.95l0.22,-1.39l-0.36,-2.19l-0.6,-0.73l0.07,-3.65l-1.05,-0.5l0.05,-0.91l0.71,-1.02l-0.05,-0.44l-1.31,-0.56l0.33,-2.54l-0.41,-0.45l-0.89,-0.16l0.23,-0.8l-0.3,-0.58l-0.51,-0.25l-0.74,0.23l-0.42,-2.81l0.5,-2.36l-0.2,-0.67l-1.36,-1.71l-0.08,-1.92l-1.78,-1.54l-0.36,-1.74l-1.09,-0.94l0.03,-2.18l-1.1,-1.87l0.21,-1.7l-0.27,-1.08l-1.38,-0.67l-0.42,-1.58l-0.45,-0.59l0.05,-0.63l-1.81,-1.82l0.56,-1.61l0.54,-0.47l0.73,-2.68l0.0,-1.68l0.55,-0.69l0.21,-1.19l-0.51,-2.24l-1.33,-0.29l-0.05,-0.73l0.45,-0.56l-0.0,-1.71l-0.95,-1.42l-0.05,-0.87Z", "name": "Iowa"}, "US-MI": {"path": "M612.24,185.84l1.83,-2.17l0.7,-1.59l1.18,-4.4l1.43,-3.04l1.01,-5.05l0.09,-5.37l-0.86,-5.54l-2.4,-5.18l0.61,-0.51l0.3,-0.79l-0.57,-0.42l-1.08,0.55l-3.82,-7.04l-0.21,-1.11l1.13,-2.69l-0.01,-0.97l-0.74,-3.13l-1.28,-1.65l-0.05,-0.62l1.73,-2.73l1.22,-4.14l-0.21,-5.34l-0.77,-1.6l1.09,-1.15l0.81,-0.02l0.56,-0.47l-0.27,-3.49l1.08,-0.11l0.67,-1.43l1.19,0.48l0.65,-0.33l0.76,-2.59l0.82,-1.2l0.56,-1.68l0.55,-0.18l-0.58,0.87l0.6,1.65l-0.71,1.8l0.71,0.42l-0.48,2.61l0.88,1.42l0.73,-0.06l0.52,0.56l0.65,-0.24l0.89,-2.26l0.66,-3.52l-0.08,-2.07l-0.76,-3.42l0.58,-1.02l2.13,-1.64l2.74,-0.54l0.98,-0.63l0.28,-0.64l-0.25,-0.54l-1.76,-0.1l-0.96,-0.86l-0.52,-1.99l1.85,-2.98l-0.11,-0.73l1.72,-0.23l0.74,-0.94l4.16,2.0l0.83,0.13l1.98,-0.4l1.37,0.39l1.19,1.04l0.53,1.14l0.77,0.49l2.41,-0.29l1.7,1.02l1.92,0.09l0.8,0.64l3.27,0.45l1.1,0.78l-0.01,1.12l1.04,1.31l0.64,0.21l0.38,0.92l-0.16,0.54l-0.66,-0.25l-0.94,0.57l-0.23,1.83l0.81,1.29l1.6,0.99l0.69,1.37l0.65,2.26l-0.12,1.73l0.77,5.57l-0.14,0.6l-0.57,0.2l-0.48,0.96l-0.75,0.08l-0.79,0.81l-0.17,4.47l-1.12,0.49l-0.18,0.82l-1.86,0.43l-0.73,0.6l-0.58,2.61l0.26,0.45l-0.21,0.52l0.25,2.58l1.38,1.31l2.9,0.84l0.91,-0.07l1.08,-1.23l0.6,-1.44l0.62,0.19l0.38,-0.24l1.01,-3.59l0.6,-1.06l-0.08,-0.52l0.97,-1.45l1.39,-0.39l1.07,-0.69l0.83,-1.1l0.87,-0.44l2.06,0.59l1.13,0.7l1.0,1.09l1.21,2.16l2.0,5.91l0.82,1.6l1.03,3.71l1.49,3.63l1.27,1.73l-0.33,3.93l0.45,2.49l-0.48,2.79l-0.34,0.44l-0.24,-0.33l-0.31,-1.71l-1.46,-0.52l-0.47,0.08l-1.48,1.36l-0.06,0.83l0.55,0.67l-0.83,0.57l-0.29,0.79l0.28,2.94l-0.49,0.75l-1.62,0.92l-1.06,1.85l-0.43,3.73l0.27,1.55l-0.33,0.93l-0.42,0.19l0.02,0.91l-0.64,0.3l-0.37,1.08l-0.52,0.52l-0.5,1.28l-0.02,1.05l-0.52,0.78l-20.37,4.25l-0.14,-0.86l-0.46,-0.33l-31.6,4.74ZM621.47,115.87l0.0,-0.07l0.12,-0.12l-0.01,0.03l-0.11,0.16ZM621.73,114.95l-0.07,-0.16l0.07,-0.14l-0.0,0.3ZM543.48,88.04l4.87,-2.38l3.55,-3.62l5.77,-1.36l1.39,-0.84l2.36,-2.71l0.97,0.04l1.52,-0.73l1.0,-2.25l2.82,-2.84l0.23,1.72l1.85,0.59l0.05,1.45l0.66,0.14l0.51,0.6l-0.17,3.14l0.44,0.95l-0.34,0.47l0.2,0.47l0.74,-0.02l1.08,-2.21l1.08,-0.9l-0.42,1.15l0.59,0.45l0.82,-0.67l0.52,-1.22l1.0,-0.43l3.09,-0.25l1.51,0.21l1.18,0.93l1.54,0.44l0.47,1.05l2.31,2.58l1.17,0.55l0.53,1.55l0.73,0.34l1.87,0.07l0.73,-0.4l1.07,-0.06l0.52,-0.65l0.88,-0.43l1.0,1.11l1.1,0.64l1.02,-0.25l0.68,-0.82l1.87,1.06l0.64,-0.34l1.65,-2.59l2.81,-1.89l1.7,-1.65l0.91,0.11l3.27,-1.21l5.17,-0.25l4.49,-2.72l2.56,-0.37l-0.01,3.24l0.29,0.71l-0.36,1.1l0.67,0.85l0.66,0.11l0.71,-0.39l2.2,0.7l1.14,-0.43l1.03,-0.87l0.66,0.48l0.21,0.71l0.85,0.22l1.27,-0.8l0.95,-1.55l0.66,-0.02l0.84,0.75l1.98,3.78l-0.86,1.04l0.48,0.89l0.47,0.36l1.37,-0.42l0.58,0.46l0.64,0.04l0.18,1.2l0.98,0.87l1.53,0.52l-1.17,0.68l-4.96,-0.14l-0.53,0.29l-1.35,-0.17l-0.88,0.41l-0.66,-0.76l-1.63,-0.07l-0.59,0.47l-0.07,1.22l-0.49,0.75l0.38,2.05l-0.92,-0.22l-0.89,-0.92l-0.77,-0.13l-1.96,-1.65l-2.41,-0.6l-1.6,0.04l-1.04,-0.5l-2.89,0.47l-0.61,0.45l-1.18,2.52l-3.48,0.73l-0.58,0.77l-2.06,-0.34l-2.82,0.93l-0.68,0.83l-0.56,2.51l-0.78,0.28l-0.81,0.87l-0.65,0.28l0.16,-1.96l-0.75,-0.91l-1.02,0.34l-0.76,0.92l-0.97,-0.39l-0.68,0.17l-0.37,0.4l0.1,0.83l-0.73,2.01l-1.2,0.59l-0.11,-1.38l-0.46,-1.06l0.34,-1.69l-0.17,-0.37l-0.66,-0.17l-0.45,0.58l-0.6,2.12l-0.22,2.57l-1.12,0.91l-1.26,3.02l-0.62,2.66l-2.56,5.33l-0.69,0.74l0.12,0.91l-1.4,-1.28l0.18,-1.75l0.63,-1.69l-0.41,-0.81l-0.62,-0.31l-1.36,0.85l-1.16,0.09l0.04,-1.29l0.81,-1.45l-0.41,-1.34l0.3,-1.09l-0.58,-0.98l0.15,-0.83l-1.9,-1.55l-1.1,-0.06l-0.59,-0.44l-0.86,0.2l-0.62,-0.2l0.3,-1.36l-0.94,-1.45l-1.13,-0.51l-2.23,-0.1l-3.2,-0.71l-1.55,0.59l-1.43,-0.42l-1.62,0.17l-4.56,-1.94l-15.37,-2.5l-2.0,-3.4l-1.88,-0.96l-0.76,0.26l-0.1,-0.3ZM603.38,98.65l-0.01,0.52l-0.46,0.32l-0.7,1.39l0.08,0.57l-0.65,-0.58l0.91,-2.16l0.83,-0.06ZM643.87,87.47l1.99,-1.52l0.17,-0.57l-0.27,-0.64l1.05,0.16l0.8,1.24l0.81,0.19l-0.27,1.08l-0.36,0.19l-1.5,-0.34l-0.77,0.45l-1.63,-0.24ZM635.6,77.64l0.56,-0.83l0.52,0.05l-0.37,1.32l0.11,0.71l-0.35,-0.9l-0.46,-0.35ZM636.53,79.17l0.09,0.14l0.01,0.01l-0.02,-0.01l-0.08,-0.14ZM637.39,81.25l0.4,0.45l0.22,0.61l-0.63,-0.71l0.01,-0.34ZM633.73,93.13l1.41,0.25l0.36,-0.18l0.4,0.21l-0.17,0.52l-0.75,0.11l-1.24,-0.9ZM618.85,96.77l0.62,2.25l-0.8,0.78l-0.39,-0.27l0.56,-2.76ZM613.26,110.83l0.47,0.3l-0.09,0.57l-0.45,-0.69l0.06,-0.17ZM612.23,113.57l0.0,-0.03l0.02,-0.04l-0.03,0.07ZM599.41,82.64l-0.23,-0.37l0.03,-0.4l0.37,0.32l-0.17,0.45ZM570.51,72.75l-0.51,-0.27l-1.16,0.06l-0.04,-1.56l1.0,-1.03l1.17,-2.09l1.84,-1.49l0.63,-0.0l0.53,-0.58l2.08,-0.89l3.34,-0.42l1.1,0.66l-0.54,0.38l-1.31,-0.12l-2.27,0.78l-0.15,0.29l0.3,0.59l0.71,0.13l-1.19,0.98l-1.4,1.89l-0.7,0.29l-0.36,1.45l-1.15,1.37l-0.66,2.04l-0.67,-0.87l0.75,-0.97l0.14,-1.95l-0.63,-0.37l-0.21,0.15l-0.6,0.92l-0.05,0.67ZM558.28,58.21l0.75,-0.98l-0.39,-0.33l0.56,-0.53l4.62,-2.98l1.97,-1.72l0.62,-0.18l-0.45,0.65l0.1,0.79l-0.43,0.49l-4.25,2.56l-0.86,0.99l0.24,0.36l-1.87,1.17l-0.61,-0.28Z", "name": "Michigan"}, "US-GA": {"path": "M654.05,331.71l22.02,-3.57l20.65,-3.86l-1.48,1.42l-0.51,1.68l-0.66,0.82l-0.41,1.73l0.11,1.23l0.82,0.78l1.84,0.8l1.03,0.12l2.7,2.03l0.84,0.24l1.9,-0.37l0.6,0.25l0.8,1.64l1.51,1.6l1.04,2.5l1.33,0.82l0.84,1.16l0.56,0.26l1.0,1.77l1.07,0.3l1.17,0.99l3.81,1.85l2.41,3.16l2.25,0.58l2.53,1.67l0.5,2.34l1.25,1.02l0.47,-0.16l0.31,0.49l-0.1,0.62l0.79,0.73l0.79,0.09l0.56,1.21l4.99,1.89l0.4,1.78l1.54,1.73l1.02,2.01l-0.07,0.81l0.49,0.69l0.11,1.24l1.04,0.79l1.17,0.17l1.25,0.62l0.28,0.53l0.57,0.23l1.12,2.56l0.76,0.57l0.08,2.68l0.77,1.48l1.38,0.9l1.52,-0.27l1.44,0.76l1.45,0.11l-0.59,0.78l-0.56,-0.35l-0.47,0.28l-0.4,0.99l0.62,0.91l-0.38,0.48l-1.38,-0.16l-0.77,-0.55l-0.65,0.44l0.26,0.71l-0.49,0.52l0.36,0.61l0.94,-0.04l0.5,0.29l-0.58,1.35l-1.43,0.27l-1.33,-0.44l-0.44,0.39l0.34,0.85l1.23,0.35l-0.5,0.87l0.23,0.35l-0.2,0.64l0.83,0.64l-0.33,0.44l-0.72,-0.13l-0.96,0.51l-0.1,0.62l1.09,0.45l0.05,0.95l0.48,-0.07l1.2,-1.17l-0.92,2.31l-0.31,-0.58l-0.59,-0.08l-0.44,0.72l0.29,0.7l0.98,0.83l-2.32,0.04l-0.92,-0.28l-0.63,0.3l0.06,0.63l0.55,0.34l2.76,0.24l1.07,0.66l-0.02,0.34l-0.56,0.22l-0.88,1.95l-0.5,-1.41l-0.45,-0.13l-0.6,0.33l-0.15,0.84l0.34,0.96l-0.6,0.11l-0.03,0.84l-0.3,0.16l0.07,0.46l1.33,1.15l-1.09,1.03l0.32,0.47l0.77,0.07l-0.39,0.92l0.06,0.88l-0.46,0.51l1.1,1.66l0.03,0.76l-0.79,0.33l-2.64,-0.17l-4.06,-0.96l-1.31,0.35l-0.18,0.74l-0.68,0.26l-0.35,1.25l0.28,2.08l0.95,1.36l0.13,4.25l-1.97,0.4l-0.54,-0.92l-0.12,-1.3l-1.33,-1.82l-49.22,5.14l-0.72,-0.56l-0.86,-2.7l-0.94,-1.51l-0.56,-0.38l0.16,-0.68l-0.73,-1.51l-1.82,-1.81l-0.43,-1.75l0.25,-0.8l0.06,-5.18l-0.6,-1.81l-1.19,-1.47l-1.03,-2.65l0.12,-1.65l0.78,-2.36l-0.25,-1.53l0.19,-2.11l1.62,-1.33l0.46,-1.47l-0.55,-0.61l-1.42,-0.69l0.09,-2.15l-0.97,-1.87l-2.18,-2.42l-1.03,-2.81l-0.75,-0.68l-0.17,-0.96l-0.77,-1.37l-13.99,-43.12ZM745.21,389.83l0.7,-0.26l-0.07,0.82l-0.29,-0.33l-0.34,-0.24ZM743.75,406.73l0.05,0.87l-0.01,0.46l-0.34,-0.56l0.3,-0.76Z", "name": "Georgia"}, "US-AZ": {"path": "M128.39,384.21l0.44,-1.81l1.29,-1.29l0.54,-1.11l0.48,-0.25l1.66,0.62l0.96,-0.03l0.52,-0.46l0.28,-1.17l1.31,-1.0l0.24,-2.73l-0.46,-1.24l-0.84,-0.66l-2.07,-0.67l-0.3,-0.61l0.8,-2.4l0.0,-1.39l-0.52,-1.2l0.57,-0.86l-0.2,-0.87l1.57,-0.27l2.29,-2.81l0.65,-2.43l0.65,-0.81l0.02,-3.17l0.55,-0.62l-0.29,-1.43l1.71,-1.14l1.03,-1.85l3.16,-1.29l2.03,-1.58l0.26,-0.53l-0.13,-1.04l-3.25,-3.49l-0.51,-0.22l0.22,-1.26l-0.66,-1.46l0.07,-0.91l-0.88,-2.76l-0.84,-0.56l-0.19,-1.65l-0.69,-0.8l0.19,-3.54l0.58,-0.87l-0.3,-0.86l1.04,-0.4l0.4,-1.42l0.14,-3.2l-0.76,-3.66l0.47,-0.88l0.29,-1.67l-0.4,-3.0l0.85,-2.56l-0.8,-1.87l-0.03,-0.92l0.43,-0.52l0.34,-1.35l2.54,-0.63l1.75,0.99l1.43,-0.19l0.96,2.24l0.79,0.71l1.54,0.14l1.01,-0.5l1.02,-2.27l0.94,-1.19l2.57,-16.95l42.43,5.78l42.56,4.67l-11.82,123.66l-36.89,-4.05l-36.34,-18.98l-28.44,-15.56Z", "name": "Arizona"}, "US-MT": {"path": "M166.3,57.31l0.69,-0.1l0.33,-0.38l-0.9,-1.99l0.83,-0.96l-0.39,-1.3l0.09,-0.96l-1.24,-1.93l-0.24,-1.49l-1.03,-1.33l-1.19,-2.44l3.53,-20.65l43.66,6.71l43.06,5.23l42.75,3.84l43.15,2.53l-3.53,86.06l-28.11,-1.47l-26.82,-1.91l-26.78,-2.4l-25.84,-2.79l-0.44,0.35l-1.22,10.41l-1.51,-2.01l-0.03,-0.91l-1.19,-2.35l-1.25,-0.74l-1.8,0.92l0.03,1.05l-0.72,0.42l-0.34,1.56l-2.42,-0.41l-1.91,0.57l-0.92,-0.85l-3.36,0.09l-2.38,-0.96l-1.68,0.58l-0.84,1.49l-4.66,-1.6l-1.3,0.37l-1.12,0.9l-0.31,0.67l-1.65,-1.4l0.22,-1.43l-0.9,-1.71l0.4,-0.36l0.07,-0.62l-1.17,-3.08l-1.45,-1.25l-1.44,0.36l-0.21,-0.64l-1.08,-0.9l-0.41,-1.37l0.68,-0.61l0.2,-1.41l-0.77,-2.38l-0.77,-0.35l-0.31,-1.58l-1.51,-2.54l0.23,-1.51l-0.56,-1.26l0.34,-1.4l-0.73,-0.86l0.48,-0.98l-0.21,-0.74l-1.14,-0.75l-0.13,-0.59l-0.85,-0.91l-0.8,-0.4l-0.51,0.37l-0.07,0.74l-0.7,0.27l-1.13,1.22l-1.75,0.37l-1.21,1.07l-1.08,-0.85l-0.64,-1.01l-1.06,-0.44l0.02,-0.86l0.74,-0.63l0.24,-1.06l-0.61,-1.6l0.9,-1.09l1.07,-0.08l0.83,-0.8l-0.26,-1.14l0.38,-1.07l-0.95,-0.81l-0.04,-0.81l0.66,-1.28l-0.59,-1.07l0.74,-0.07l0.38,-0.42l-0.04,-1.77l1.83,-3.73l-0.14,-1.05l0.89,-0.62l0.6,-3.17l-0.78,-0.5l-1.8,0.37l-1.33,-0.11l-0.64,-0.55l0.37,-0.83l-0.62,-0.97l-0.66,-0.23l-0.72,0.35l-0.07,-0.95l-1.74,-1.63l0.04,-1.84l-1.68,-1.82l-0.08,-0.69l-1.55,-2.88l-1.07,-1.29l-0.57,-1.63l-2.35,-1.34l-0.95,-1.95l-1.44,-1.19Z", "name": "Montana"}, "US-MS": {"path": "M555.49,431.1l0.67,-0.97l-1.05,-1.76l0.18,-1.63l-0.81,-0.87l1.69,-0.25l0.47,-0.54l0.4,-2.74l-0.77,-1.82l1.56,-1.79l0.25,-3.58l0.74,-2.26l1.89,-1.25l1.15,-1.97l1.4,-1.04l0.34,-0.78l-0.04,-0.99l-0.63,-0.96l1.14,-0.28l0.96,-2.59l0.91,-1.31l-0.16,-0.86l-1.54,-0.43l-0.35,-0.96l-1.83,-1.04l-0.07,-2.14l-0.93,-0.74l-0.45,-0.84l-0.02,-0.37l1.14,-0.29l0.47,-0.69l-0.26,-0.89l-1.41,-0.49l0.23,-1.77l0.98,-1.54l-0.77,-1.06l-1.08,-0.31l-0.15,-2.82l0.9,-0.54l0.23,-0.8l-0.62,-2.52l-1.25,-0.66l0.7,-1.33l-0.07,-2.22l-2.02,-1.52l1.14,-0.47l0.12,-1.41l-1.34,-0.89l1.58,-2.04l0.93,-0.31l0.36,-0.69l-0.52,-1.56l0.42,-1.35l-0.9,-0.89l1.6,-0.83l1.24,-0.27l0.59,-0.77l-0.09,-1.07l-1.41,-0.95l1.39,-1.08l0.62,-1.77l0.5,0.11l0.45,-0.28l0.34,-0.98l-0.2,-0.77l1.48,-0.43l1.22,-1.21l0.07,-3.53l-0.46,-1.53l0.36,-1.78l0.73,0.09l0.68,-0.33l0.42,-0.87l-0.41,-1.06l2.72,-1.71l0.58,-1.06l-0.29,-1.28l36.45,-4.1l0.86,1.26l0.85,0.45l0.99,66.5l5.52,32.95l-0.73,0.69l-1.53,-0.3l-0.91,-0.94l-1.32,1.06l-1.23,0.17l-2.17,-1.26l-1.85,-0.19l-0.83,0.36l-0.34,0.44l0.32,0.41l-0.56,0.36l-3.96,1.66l-0.05,-0.5l-0.96,-0.52l-1.0,0.04l-0.59,1.0l0.76,0.61l-1.59,1.21l-0.32,1.28l-0.69,0.3l-1.34,-0.06l-1.16,-1.86l-0.08,-0.89l-0.92,-1.47l-0.21,-1.01l-1.4,-1.63l-1.16,-0.54l-0.47,-0.78l0.1,-0.62l-0.69,-0.92l0.21,-1.99l0.5,-0.93l0.66,-2.98l-0.06,-1.23l-0.43,-0.29l-34.66,3.41Z", "name": "Mississippi"}, "US-SC": {"path": "M697.56,324.11l4.86,-2.69l1.02,-0.05l1.11,-1.38l3.93,-1.9l0.45,-0.88l0.63,0.22l22.71,-3.36l0.07,1.22l0.42,0.57l0.71,0.01l1.21,-1.3l2.82,2.54l0.46,2.48l0.55,0.52l19.74,-3.49l22.74,15.07l0.02,0.55l-2.48,2.18l-2.44,3.67l-2.41,5.72l-0.09,2.74l-1.08,-0.21l0.85,-2.73l-0.64,-0.23l-0.76,0.87l-0.56,1.38l-0.11,1.55l0.84,0.95l1.05,0.23l0.44,0.91l-0.75,0.08l-0.41,0.56l-0.87,0.02l-0.24,0.68l0.94,0.45l-1.1,1.13l-0.07,1.02l-1.34,0.63l-0.5,-0.61l-0.5,-0.08l-1.07,0.87l-0.56,1.76l0.43,0.87l-1.2,1.23l-0.61,1.44l-1.2,1.01l-0.9,-0.4l0.27,-0.6l-0.53,-0.74l-1.38,0.31l-0.11,0.43l0.36,0.77l-0.52,0.03l0.05,0.76l0.72,0.58l1.3,0.43l-0.12,0.39l-0.88,0.94l-1.22,0.23l-0.25,0.51l0.33,0.45l-2.3,1.34l-1.42,-0.85l-0.56,0.11l-0.11,0.67l1.19,0.78l-1.54,1.57l-0.72,-0.75l-0.5,0.52l-0.0,0.74l-0.69,-0.37l-0.85,-0.0l-1.34,-0.84l-0.45,0.5l0.16,0.53l-1.73,0.17l-0.44,0.37l-0.06,0.77l0.65,0.23l1.43,-0.17l-0.26,0.55l0.42,0.25l1.91,-0.15l0.11,0.22l-0.97,0.86l-0.32,0.78l0.57,0.49l0.94,-0.53l0.03,0.21l-1.12,1.09l-0.99,0.43l-0.21,-2.04l-0.69,-0.27l-0.22,-1.55l-0.88,-0.15l-0.31,0.58l0.86,2.7l-1.12,-0.66l-0.63,-1.0l-0.4,-1.76l-0.65,-0.2l-0.52,-0.63l-0.69,0.0l-0.27,0.6l0.84,1.02l0.01,0.68l1.11,1.83l-0.02,0.86l1.22,1.17l-0.62,0.35l0.03,0.98l-1.2,3.56l-1.52,-0.78l-1.52,0.26l-0.97,-0.68l-0.54,-1.03l-0.17,-2.93l-0.86,-0.75l-1.06,-2.47l-1.04,-0.95l-3.23,-1.33l-0.49,-2.65l-1.12,-2.17l-1.43,-1.58l-0.06,-1.07l-0.76,-1.21l-4.82,-1.69l-0.58,-1.27l-1.21,-0.37l0.02,-0.7l-0.53,-0.87l-0.87,0.0l-0.73,-0.61l0.03,-1.21l-0.66,-1.26l-2.7,-1.78l-2.16,-0.52l-2.36,-3.12l-3.93,-1.93l-1.22,-1.03l-0.83,-0.12l-1.05,-1.81l-0.51,-0.22l-0.91,-1.21l-1.18,-0.68l-0.99,-2.42l-1.54,-1.65l-1.02,-1.87l-1.06,-0.37l-1.93,0.37l-0.46,-0.16l-2.75,-2.19l-1.06,0.02l-1.7,-0.74l-0.52,-0.53l0.36,-2.22l0.64,-0.78l0.34,-1.39l1.36,-1.23l0.4,-0.98ZM750.38,375.27l0.73,-0.08l0.51,0.45l-1.23,1.9l0.28,-1.22l-0.3,-1.06Z", "name": "South Carolina"}, "US-RI": {"path": "M859.15,133.1l0.33,0.01l1.02,2.65l-0.31,0.56l-1.04,-3.22ZM858.41,136.77l-0.28,-0.34l0.24,-1.5l0.41,1.53l-0.37,0.31ZM851.13,141.49l0.22,-0.46l-0.53,-2.22l-3.14,-10.0l5.61,-1.84l0.76,2.06l0.8,0.25l0.19,0.73l0.08,0.41l-0.77,0.25l0.03,0.29l0.51,1.45l0.59,0.5l-0.6,0.15l-0.46,0.73l0.87,0.97l-0.14,1.22l0.94,2.18l-0.32,2.08l-1.33,0.23l-3.15,2.19l-0.16,-1.21ZM855.93,131.57l0.26,0.1l0.01,0.09l-0.17,-0.08l-0.1,-0.11ZM857.32,132.24l0.23,0.48l-0.2,0.31l-0.04,-0.39l0.01,-0.4ZM855.92,145.03l0.11,0.11l-0.18,0.1l-0.03,-0.14l0.11,-0.07Z", "name": "Rhode Island"}, "US-CT": {"path": "M823.44,156.54l2.83,-3.23l-0.07,-0.54l-1.31,-1.25l-3.5,-15.89l9.81,-2.41l0.6,0.46l0.65,-0.26l0.23,-0.58l14.16,-4.0l3.2,10.18l0.47,1.96l-0.04,1.69l-1.65,0.32l-0.91,0.81l-0.69,-0.36l-0.5,0.11l-0.18,0.91l-1.15,0.07l-1.27,1.27l-0.62,-0.14l-0.56,-1.02l-0.89,-0.09l-0.21,0.67l0.75,0.64l0.08,0.54l-0.89,-0.02l-1.02,0.87l-1.65,0.07l-1.15,0.94l-0.86,-0.09l-2.05,0.82l-0.4,-0.68l-0.61,0.11l-0.89,2.12l-0.59,0.29l-0.83,1.29l-0.79,-0.05l-0.94,0.74l-0.2,0.63l-0.53,0.05l-0.88,0.75l-2.77,3.07l-0.96,0.27l-1.24,-1.04Z", "name": "Connecticut"}}, "height": 589.0572567800147, "projection": {"type": "aea", "centralMeridian": -100.0}, "width": 900.0});;
/* Chartist.js 0.9.7
 * Copyright © 2016 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */

!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.Chartist=b()}):"object"==typeof exports?module.exports=b():a.Chartist=b()}(this,function(){var a={version:"0.9.7"};return function(a,b,c){"use strict";c.namespaces={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},c.noop=function(a){return a},c.alphaNumerate=function(a){return String.fromCharCode(97+a%26)},c.extend=function(a){a=a||{};var b=Array.prototype.slice.call(arguments,1);return b.forEach(function(b){for(var d in b)"object"!=typeof b[d]||null===b[d]||b[d]instanceof Array?a[d]=b[d]:a[d]=c.extend({},a[d],b[d])}),a},c.replaceAll=function(a,b,c){return a.replace(new RegExp(b,"g"),c)},c.ensureUnit=function(a,b){return"number"==typeof a&&(a+=b),a},c.quantity=function(a){if("string"==typeof a){var b=/^(\d+)\s*(.*)$/g.exec(a);return{value:+b[1],unit:b[2]||void 0}}return{value:a}},c.querySelector=function(a){return a instanceof Node?a:b.querySelector(a)},c.times=function(a){return Array.apply(null,new Array(a))},c.sum=function(a,b){return a+(b?b:0)},c.mapMultiply=function(a){return function(b){return b*a}},c.mapAdd=function(a){return function(b){return b+a}},c.serialMap=function(a,b){var d=[],e=Math.max.apply(null,a.map(function(a){return a.length}));return c.times(e).forEach(function(c,e){var f=a.map(function(a){return a[e]});d[e]=b.apply(null,f)}),d},c.roundWithPrecision=function(a,b){var d=Math.pow(10,b||c.precision);return Math.round(a*d)/d},c.precision=8,c.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},c.serialize=function(a){return null===a||void 0===a?a:("number"==typeof a?a=""+a:"object"==typeof a&&(a=JSON.stringify({data:a})),Object.keys(c.escapingMap).reduce(function(a,b){return c.replaceAll(a,b,c.escapingMap[b])},a))},c.deserialize=function(a){if("string"!=typeof a)return a;a=Object.keys(c.escapingMap).reduce(function(a,b){return c.replaceAll(a,c.escapingMap[b],b)},a);try{a=JSON.parse(a),a=void 0!==a.data?a.data:a}catch(b){}return a},c.createSvg=function(a,b,d,e){var f;return b=b||"100%",d=d||"100%",Array.prototype.slice.call(a.querySelectorAll("svg")).filter(function(a){return a.getAttributeNS(c.namespaces.xmlns,"ct")}).forEach(function(b){a.removeChild(b)}),f=new c.Svg("svg").attr({width:b,height:d}).addClass(e).attr({style:"width: "+b+"; height: "+d+";"}),a.appendChild(f._node),f},c.normalizeData=function(a){if(a=a||{series:[],labels:[]},a.series=a.series||[],a.labels=a.labels||[],a.series.length>0&&0===a.labels.length){var b,d=c.getDataArray(a);b=d.every(function(a){return a instanceof Array})?Math.max.apply(null,d.map(function(a){return a.length})):d.length,a.labels=c.times(b).map(function(){return""})}return a},c.reverseData=function(a){a.labels.reverse(),a.series.reverse();for(var b=0;b<a.series.length;b++)"object"==typeof a.series[b]&&void 0!==a.series[b].data?a.series[b].data.reverse():a.series[b]instanceof Array&&a.series[b].reverse()},c.getDataArray=function(a,b,d){function e(a){if(!c.isFalseyButZero(a)){if((a.data||a)instanceof Array)return(a.data||a).map(e);if(a.hasOwnProperty("value"))return e(a.value);if(d){var b={};return"string"==typeof d?b[d]=c.getNumberOrUndefined(a):b.y=c.getNumberOrUndefined(a),b.x=a.hasOwnProperty("x")?c.getNumberOrUndefined(a.x):b.x,b.y=a.hasOwnProperty("y")?c.getNumberOrUndefined(a.y):b.y,b}return c.getNumberOrUndefined(a)}}return(b&&!a.reversed||!b&&a.reversed)&&(c.reverseData(a),a.reversed=!a.reversed),a.series.map(e)},c.normalizePadding=function(a,b){return b=b||0,"number"==typeof a?{top:a,right:a,bottom:a,left:a}:{top:"number"==typeof a.top?a.top:b,right:"number"==typeof a.right?a.right:b,bottom:"number"==typeof a.bottom?a.bottom:b,left:"number"==typeof a.left?a.left:b}},c.getMetaData=function(a,b){var d=a.data?a.data[b]:a[b];return d?c.serialize(d.meta):void 0},c.orderOfMagnitude=function(a){return Math.floor(Math.log(Math.abs(a))/Math.LN10)},c.projectLength=function(a,b,c){return b/c.range*a},c.getAvailableHeight=function(a,b){return Math.max((c.quantity(b.height).value||a.height())-(b.chartPadding.top+b.chartPadding.bottom)-b.axisX.offset,0)},c.getHighLow=function(a,b,d){function e(a){if(void 0!==a)if(a instanceof Array)for(var b=0;b<a.length;b++)e(a[b]);else{var c=d?+a[d]:+a;g&&c>f.high&&(f.high=c),h&&c<f.low&&(f.low=c)}}b=c.extend({},b,d?b["axis"+d.toUpperCase()]:{});var f={high:void 0===b.high?-Number.MAX_VALUE:+b.high,low:void 0===b.low?Number.MAX_VALUE:+b.low},g=void 0===b.high,h=void 0===b.low;return(g||h)&&e(a),(b.referenceValue||0===b.referenceValue)&&(f.high=Math.max(b.referenceValue,f.high),f.low=Math.min(b.referenceValue,f.low)),f.high<=f.low&&(0===f.low?f.high=1:f.low<0?f.high=0:f.high>0?f.low=0:(f.high=1,f.low=0)),f},c.isNum=function(a){return!isNaN(a)&&isFinite(a)},c.isFalseyButZero=function(a){return!a&&0!==a},c.getNumberOrUndefined=function(a){return isNaN(+a)?void 0:+a},c.getMultiValue=function(a,b){return c.isNum(a)?+a:a?a[b||"y"]||0:0},c.rho=function(a){function b(a,c){return a%c===0?c:b(c,a%c)}function c(a){return a*a+1}if(1===a)return a;var d,e=2,f=2;if(a%2===0)return 2;do e=c(e)%a,f=c(c(f))%a,d=b(Math.abs(e-f),a);while(1===d);return d},c.getBounds=function(a,b,d,e){var f,g,h,i=0,j={high:b.high,low:b.low};j.valueRange=j.high-j.low,j.oom=c.orderOfMagnitude(j.valueRange),j.step=Math.pow(10,j.oom),j.min=Math.floor(j.low/j.step)*j.step,j.max=Math.ceil(j.high/j.step)*j.step,j.range=j.max-j.min,j.numberOfSteps=Math.round(j.range/j.step);var k=c.projectLength(a,j.step,j),l=d>k,m=e?c.rho(j.range):0;if(e&&c.projectLength(a,1,j)>=d)j.step=1;else if(e&&m<j.step&&c.projectLength(a,m,j)>=d)j.step=m;else for(;;){if(l&&c.projectLength(a,j.step,j)<=d)j.step*=2;else{if(l||!(c.projectLength(a,j.step/2,j)>=d))break;if(j.step/=2,e&&j.step%1!==0){j.step*=2;break}}if(i++>1e3)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}for(g=j.min,h=j.max;g+j.step<=j.low;)g+=j.step;for(;h-j.step>=j.high;)h-=j.step;for(j.min=g,j.max=h,j.range=j.max-j.min,j.values=[],f=j.min;f<=j.max;f+=j.step)j.values.push(c.roundWithPrecision(f));return j},c.polarToCartesian=function(a,b,c,d){var e=(d-90)*Math.PI/180;return{x:a+c*Math.cos(e),y:b+c*Math.sin(e)}},c.createChartRect=function(a,b,d){var e=!(!b.axisX&&!b.axisY),f=e?b.axisY.offset:0,g=e?b.axisX.offset:0,h=a.width()||c.quantity(b.width).value||0,i=a.height()||c.quantity(b.height).value||0,j=c.normalizePadding(b.chartPadding,d);h=Math.max(h,f+j.left+j.right),i=Math.max(i,g+j.top+j.bottom);var k={padding:j,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}};return e?("start"===b.axisX.position?(k.y2=j.top+g,k.y1=Math.max(i-j.bottom,k.y2+1)):(k.y2=j.top,k.y1=Math.max(i-j.bottom-g,k.y2+1)),"start"===b.axisY.position?(k.x1=j.left+f,k.x2=Math.max(h-j.right,k.x1+1)):(k.x1=j.left,k.x2=Math.max(h-j.right-f,k.x1+1))):(k.x1=j.left,k.x2=Math.max(h-j.right,k.x1+1),k.y2=j.top,k.y1=Math.max(i-j.bottom,k.y2+1)),k},c.createGrid=function(a,b,d,e,f,g,h,i){var j={};j[d.units.pos+"1"]=a,j[d.units.pos+"2"]=a,j[d.counterUnits.pos+"1"]=e,j[d.counterUnits.pos+"2"]=e+f;var k=g.elem("line",j,h.join(" "));i.emit("draw",c.extend({type:"grid",axis:d,index:b,group:g,element:k},j))},c.createLabel=function(a,b,d,e,f,g,h,i,j,k,l){var m,n={};if(n[f.units.pos]=a+h[f.units.pos],n[f.counterUnits.pos]=h[f.counterUnits.pos],n[f.units.len]=b,n[f.counterUnits.len]=g-10,k){var o='<span class="'+j.join(" ")+'" style="'+f.units.len+": "+Math.round(n[f.units.len])+"px; "+f.counterUnits.len+": "+Math.round(n[f.counterUnits.len])+'px">'+e[d]+"</span>";m=i.foreignObject(o,c.extend({style:"overflow: visible;"},n))}else m=i.elem("text",n,j.join(" ")).text(e[d]);l.emit("draw",c.extend({type:"label",axis:f,index:d,group:i,element:m,text:e[d]},n))},c.getSeriesOption=function(a,b,c){if(a.name&&b.series&&b.series[a.name]){var d=b.series[a.name];return d.hasOwnProperty(c)?d[c]:b[c]}return b[c]},c.optionsProvider=function(b,d,e){function f(b){var f=h;if(h=c.extend({},j),d)for(i=0;i<d.length;i++){var g=a.matchMedia(d[i][0]);g.matches&&(h=c.extend(h,d[i][1]))}e&&!b&&e.emit("optionsChanged",{previousOptions:f,currentOptions:h})}function g(){k.forEach(function(a){a.removeListener(f)})}var h,i,j=c.extend({},b),k=[];if(!a.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(d)for(i=0;i<d.length;i++){var l=a.matchMedia(d[i][0]);l.addListener(f),k.push(l)}return f(!0),{removeMediaQueryListeners:g,getCurrentOptions:function(){return c.extend({},h)}}}}(window,document,a),function(a,b,c){"use strict";c.Interpolation={},c.Interpolation.none=function(a){var b={fillHoles:!1};return a=c.extend({},b,a),function(b,d){for(var e=new c.Svg.Path,f=!0,g=0;g<b.length;g+=2){var h=b[g],i=b[g+1],j=d[g/2];void 0!==j.value?(f?e.move(h,i,!1,j):e.line(h,i,!1,j),f=!1):a.fillHoles||(f=!0)}return e}},c.Interpolation.simple=function(a){var b={divisor:2,fillHoles:!1};a=c.extend({},b,a);var d=1/Math.max(1,a.divisor);return function(b,e){for(var f,g,h,i=new c.Svg.Path,j=0;j<b.length;j+=2){var k=b[j],l=b[j+1],m=(k-f)*d,n=e[j/2];void 0!==n.value?(void 0===h?i.move(k,l,!1,n):i.curve(f+m,g,k-m,l,k,l,!1,n),f=k,g=l,h=n):a.fillHoles||(f=k=h=void 0)}return i}},c.Interpolation.cardinal=function(a){function b(b,c){for(var d=[],e=!0,f=0;f<b.length;f+=2)void 0===c[f/2].value?a.fillHoles||(e=!0):(e&&(d.push({pathCoordinates:[],valueData:[]}),e=!1),d[d.length-1].pathCoordinates.push(b[f],b[f+1]),d[d.length-1].valueData.push(c[f/2]));return d}var d={tension:1,fillHoles:!1};a=c.extend({},d,a);var e=Math.min(1,Math.max(0,a.tension)),f=1-e;return function g(a,d){var h=b(a,d);if(h.length){if(h.length>1){var i=[];return h.forEach(function(a){i.push(g(a.pathCoordinates,a.valueData))}),c.Svg.Path.join(i)}if(a=h[0].pathCoordinates,d=h[0].valueData,a.length<=4)return c.Interpolation.none()(a,d);for(var j,k=(new c.Svg.Path).move(a[0],a[1],!1,d[0]),l=0,m=a.length;m-2*!j>l;l+=2){var n=[{x:+a[l-2],y:+a[l-1]},{x:+a[l],y:+a[l+1]},{x:+a[l+2],y:+a[l+3]},{x:+a[l+4],y:+a[l+5]}];j?l?m-4===l?n[3]={x:+a[0],y:+a[1]}:m-2===l&&(n[2]={x:+a[0],y:+a[1]},n[3]={x:+a[2],y:+a[3]}):n[0]={x:+a[m-2],y:+a[m-1]}:m-4===l?n[3]=n[2]:l||(n[0]={x:+a[l],y:+a[l+1]}),k.curve(e*(-n[0].x+6*n[1].x+n[2].x)/6+f*n[2].x,e*(-n[0].y+6*n[1].y+n[2].y)/6+f*n[2].y,e*(n[1].x+6*n[2].x-n[3].x)/6+f*n[2].x,e*(n[1].y+6*n[2].y-n[3].y)/6+f*n[2].y,n[2].x,n[2].y,!1,d[(l+2)/2])}return k}return c.Interpolation.none()([])}},c.Interpolation.step=function(a){var b={postpone:!0,fillHoles:!1};return a=c.extend({},b,a),function(b,d){for(var e,f,g,h=new c.Svg.Path,i=0;i<b.length;i+=2){var j=b[i],k=b[i+1],l=d[i/2];void 0!==l.value?(void 0===g?h.move(j,k,!1,l):(a.postpone?h.line(j,f,!1,g):h.line(e,k,!1,l),h.line(j,k,!1,l)),e=j,f=k,g=l):a.fillHoles||(e=f=g=void 0)}return h}}}(window,document,a),function(a,b,c){"use strict";c.EventEmitter=function(){function a(a,b){d[a]=d[a]||[],d[a].push(b)}function b(a,b){d[a]&&(b?(d[a].splice(d[a].indexOf(b),1),0===d[a].length&&delete d[a]):delete d[a])}function c(a,b){d[a]&&d[a].forEach(function(a){a(b)}),d["*"]&&d["*"].forEach(function(c){c(a,b)})}var d=[];return{addEventHandler:a,removeEventHandler:b,emit:c}}}(window,document,a),function(a,b,c){"use strict";function d(a){var b=[];if(a.length)for(var c=0;c<a.length;c++)b.push(a[c]);return b}function e(a,b){var d=b||this.prototype||c.Class,e=Object.create(d);c.Class.cloneDefinitions(e,a);var f=function(){var a,b=e.constructor||function(){};return a=this===c?Object.create(e):this,b.apply(a,Array.prototype.slice.call(arguments,0)),a};return f.prototype=e,f["super"]=d,f.extend=this.extend,f}function f(){var a=d(arguments),b=a[0];return a.splice(1,a.length-1).forEach(function(a){Object.getOwnPropertyNames(a).forEach(function(c){delete b[c],Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))})}),b}c.Class={extend:e,cloneDefinitions:f}}(window,document,a),function(a,b,c){"use strict";function d(a,b,d){return a&&(this.data=a,this.eventEmitter.emit("data",{type:"update",data:this.data})),b&&(this.options=c.extend({},d?this.options:this.defaultOptions,b),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=c.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.getCurrentOptions()),this}function e(){return this.initializeTimeoutId?a.clearTimeout(this.initializeTimeoutId):(a.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners()),this}function f(a,b){return this.eventEmitter.addEventHandler(a,b),this}function g(a,b){return this.eventEmitter.removeEventHandler(a,b),this}function h(){a.addEventListener("resize",this.resizeListener),this.optionsProvider=c.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(a){a instanceof Array?a[0](this,a[1]):a(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=void 0}function i(a,b,d,e,f){this.container=c.querySelector(a),this.data=b,this.defaultOptions=d,this.options=e,this.responsiveOptions=f,this.eventEmitter=c.EventEmitter(),this.supportsForeignObject=c.Svg.isSupported("Extensibility"),this.supportsAnimations=c.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&this.container.__chartist__.detach(),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(h.bind(this),0)}c.Base=c.Class.extend({constructor:i,optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:d,detach:e,on:f,off:g,version:c.version,supportsForeignObject:!1})}(window,document,a),function(a,b,c){"use strict";function d(a,d,e,f,g){a instanceof Element?this._node=a:(this._node=b.createElementNS(c.namespaces.svg,a),"svg"===a&&this.attr({"xmlns:ct":c.namespaces.ct})),d&&this.attr(d),e&&this.addClass(e),f&&(g&&f._node.firstChild?f._node.insertBefore(this._node,f._node.firstChild):f._node.appendChild(this._node))}function e(a,b){return"string"==typeof a?b?this._node.getAttributeNS(b,a):this._node.getAttribute(a):(Object.keys(a).forEach(function(b){if(void 0!==a[b])if(-1!==b.indexOf(":")){var d=b.split(":");this._node.setAttributeNS(c.namespaces[d[0]],b,a[b])}else this._node.setAttribute(b,a[b])}.bind(this)),this)}function f(a,b,d,e){return new c.Svg(a,b,d,this,e)}function g(){return this._node.parentNode instanceof SVGElement?new c.Svg(this._node.parentNode):null}function h(){for(var a=this._node;"svg"!==a.nodeName;)a=a.parentNode;return new c.Svg(a)}function i(a){var b=this._node.querySelector(a);return b?new c.Svg(b):null}function j(a){var b=this._node.querySelectorAll(a);return b.length?new c.Svg.List(b):null}function k(a,d,e,f){if("string"==typeof a){var g=b.createElement("div");g.innerHTML=a,a=g.firstChild}a.setAttribute("xmlns",c.namespaces.xmlns);var h=this.elem("foreignObject",d,e,f);return h._node.appendChild(a),h}function l(a){return this._node.appendChild(b.createTextNode(a)),this}function m(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}function n(){return this._node.parentNode.removeChild(this._node),this.parent()}function o(a){return this._node.parentNode.replaceChild(a._node,this._node),a}function p(a,b){return b&&this._node.firstChild?this._node.insertBefore(a._node,this._node.firstChild):this._node.appendChild(a._node),this}function q(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]}function r(a){return this._node.setAttribute("class",this.classes(this._node).concat(a.trim().split(/\s+/)).filter(function(a,b,c){return c.indexOf(a)===b}).join(" ")),this}function s(a){var b=a.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(a){return-1===b.indexOf(a)}).join(" ")),this}function t(){return this._node.setAttribute("class",""),this}function u(){return this._node.getBoundingClientRect().height}function v(){return this._node.getBoundingClientRect().width}function w(a,b,d){return void 0===b&&(b=!0),Object.keys(a).forEach(function(e){function f(a,b){var f,g,h,i={};a.easing&&(h=a.easing instanceof Array?a.easing:c.Svg.Easing[a.easing],delete a.easing),a.begin=c.ensureUnit(a.begin,"ms"),a.dur=c.ensureUnit(a.dur,"ms"),h&&(a.calcMode="spline",a.keySplines=h.join(" "),a.keyTimes="0;1"),b&&(a.fill="freeze",i[e]=a.from,this.attr(i),g=c.quantity(a.begin||0).value,a.begin="indefinite"),f=this.elem("animate",c.extend({attributeName:e},a)),b&&setTimeout(function(){try{f._node.beginElement()}catch(b){i[e]=a.to,this.attr(i),f.remove()}}.bind(this),g),d&&f._node.addEventListener("beginEvent",function(){d.emit("animationBegin",{element:this,animate:f._node,params:a})}.bind(this)),f._node.addEventListener("endEvent",function(){d&&d.emit("animationEnd",{element:this,animate:f._node,params:a}),b&&(i[e]=a.to,this.attr(i),f.remove())}.bind(this))}a[e]instanceof Array?a[e].forEach(function(a){f.bind(this)(a,!1)}.bind(this)):f.bind(this)(a[e],b)}.bind(this)),this}function x(a){var b=this;this.svgElements=[];for(var d=0;d<a.length;d++)this.svgElements.push(new c.Svg(a[d]));Object.keys(c.Svg.prototype).filter(function(a){return-1===["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(a)}).forEach(function(a){b[a]=function(){var d=Array.prototype.slice.call(arguments,0);return b.svgElements.forEach(function(b){c.Svg.prototype[a].apply(b,d)}),b}})}c.Svg=c.Class.extend({constructor:d,attr:e,elem:f,parent:g,root:h,querySelector:i,querySelectorAll:j,foreignObject:k,text:l,empty:m,remove:n,replace:o,append:p,classes:q,addClass:r,removeClass:s,removeAllClasses:t,height:u,width:v,animate:w}),c.Svg.isSupported=function(a){return b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#"+a,"1.1")};var y={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};c.Svg.Easing=y,c.Svg.List=c.Class.extend({constructor:x})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e,f,g){var h=c.extend({command:f?a.toLowerCase():a.toUpperCase()},b,g?{data:g}:{});d.splice(e,0,h)}function e(a,b){a.forEach(function(c,d){u[c.command.toLowerCase()].forEach(function(e,f){b(c,e,d,f,a)})})}function f(a,b){this.pathElements=[],this.pos=0,this.close=a,this.options=c.extend({},v,b)}function g(a){return void 0!==a?(this.pos=Math.max(0,Math.min(this.pathElements.length,a)),this):this.pos}function h(a){return this.pathElements.splice(this.pos,a),this}function i(a,b,c,e){return d("M",{x:+a,y:+b},this.pathElements,this.pos++,c,e),this}function j(a,b,c,e){return d("L",{x:+a,y:+b},this.pathElements,this.pos++,c,e),this}function k(a,b,c,e,f,g,h,i){return d("C",{x1:+a,y1:+b,x2:+c,y2:+e,x:+f,y:+g},this.pathElements,this.pos++,h,i),this}function l(a,b,c,e,f,g,h,i,j){return d("A",{rx:+a,ry:+b,xAr:+c,lAf:+e,sf:+f,x:+g,y:+h},this.pathElements,this.pos++,i,j),this}function m(a){var b=a.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(a,b){return b.match(/[A-Za-z]/)&&a.push([]),a[a.length-1].push(b),a},[]);"Z"===b[b.length-1][0].toUpperCase()&&b.pop();var d=b.map(function(a){var b=a.shift(),d=u[b.toLowerCase()];return c.extend({command:b},d.reduce(function(b,c,d){return b[c]=+a[d],b},{}))}),e=[this.pos,0];return Array.prototype.push.apply(e,d),Array.prototype.splice.apply(this.pathElements,e),this.pos+=d.length,this}function n(){var a=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(b,c){var d=u[c.command.toLowerCase()].map(function(b){return this.options.accuracy?Math.round(c[b]*a)/a:c[b]}.bind(this));return b+c.command+d.join(",")}.bind(this),"")+(this.close?"Z":"")}function o(a,b){return e(this.pathElements,function(c,d){c[d]*="x"===d[0]?a:b}),this}function p(a,b){return e(this.pathElements,function(c,d){c[d]+="x"===d[0]?a:b}),this}function q(a){return e(this.pathElements,function(b,c,d,e,f){var g=a(b,c,d,e,f);(g||0===g)&&(b[c]=g)}),this}function r(a){var b=new c.Svg.Path(a||this.close);return b.pos=this.pos,b.pathElements=this.pathElements.slice().map(function(a){return c.extend({},a)}),b.options=c.extend({},this.options),b}function s(a){var b=[new c.Svg.Path];return this.pathElements.forEach(function(d){d.command===a.toUpperCase()&&0!==b[b.length-1].pathElements.length&&b.push(new c.Svg.Path),b[b.length-1].pathElements.push(d)}),b}function t(a,b,d){for(var e=new c.Svg.Path(b,d),f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.pathElements.length;h++)e.pathElements.push(g.pathElements[h]);return e}var u={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},v={accuracy:3};c.Svg.Path=c.Class.extend({constructor:f,position:g,remove:h,move:i,line:j,curve:k,arc:l,scale:o,translate:p,transform:q,parse:m,stringify:n,clone:r,splitByCommand:s}),c.Svg.Path.elementDescriptions=u,c.Svg.Path.join=t}(window,document,a),function(a,b,c){"use strict";function d(a,b,c,d){this.units=a,this.counterUnits=a===f.x?f.y:f.x,this.chartRect=b,this.axisLength=b[a.rectEnd]-b[a.rectStart],this.gridOffset=b[a.rectOffset],this.ticks=c,this.options=d}function e(a,b,d,e,f){var g=e["axis"+this.units.pos.toUpperCase()],h=this.ticks.map(this.projectValue.bind(this)),i=this.ticks.map(g.labelInterpolationFnc);h.forEach(function(j,k){var l,m={x:0,y:0};l=h[k+1]?h[k+1]-j:Math.max(this.axisLength-j,30),c.isFalseyButZero(i[k])&&""!==i[k]||("x"===this.units.pos?(j=this.chartRect.x1+j,m.x=e.axisX.labelOffset.x,"start"===e.axisX.position?m.y=this.chartRect.padding.top+e.axisX.labelOffset.y+(d?5:20):m.y=this.chartRect.y1+e.axisX.labelOffset.y+(d?5:20)):(j=this.chartRect.y1-j,m.y=e.axisY.labelOffset.y-(d?l:0),"start"===e.axisY.position?m.x=d?this.chartRect.padding.left+e.axisY.labelOffset.x:this.chartRect.x1-10:m.x=this.chartRect.x2+e.axisY.labelOffset.x+10),g.showGrid&&c.createGrid(j,k,this,this.gridOffset,this.chartRect[this.counterUnits.len](),a,[e.classNames.grid,e.classNames[this.units.dir]],f),g.showLabel&&c.createLabel(j,l,k,i,this,g.offset,m,b,[e.classNames.label,e.classNames[this.units.dir],e.classNames[g.position]],d,f))}.bind(this))}var f={x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}};c.Axis=c.Class.extend({constructor:d,createGridAndLabels:e,projectValue:function(a,b,c){throw new Error("Base axis can't be instantiated!")}}),c.Axis.units=f}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){var f=e.highLow||c.getHighLow(b.normalized,e,a.pos);this.bounds=c.getBounds(d[a.rectEnd]-d[a.rectStart],f,e.scaleMinSpace||20,e.onlyInteger),this.range={min:this.bounds.min,max:this.bounds.max},c.AutoScaleAxis["super"].constructor.call(this,a,d,this.bounds.values,e)}function e(a){return this.axisLength*(+c.getMultiValue(a,this.units.pos)-this.bounds.min)/this.bounds.range}c.AutoScaleAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){var f=e.highLow||c.getHighLow(b.normalized,e,a.pos);this.divisor=e.divisor||1,this.ticks=e.ticks||c.times(this.divisor).map(function(a,b){return f.low+(f.high-f.low)/this.divisor*b}.bind(this)),this.ticks.sort(function(a,b){return a-b}),this.range={min:f.low,max:f.high},c.FixedScaleAxis["super"].constructor.call(this,a,d,this.ticks,e),this.stepLength=this.axisLength/this.divisor}function e(a){return this.axisLength*(+c.getMultiValue(a,this.units.pos)-this.range.min)/(this.range.max-this.range.min)}c.FixedScaleAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){c.StepAxis["super"].constructor.call(this,a,d,e.ticks,e),this.stepLength=this.axisLength/(e.ticks.length-(e.stretch?1:0))}function e(a,b){return this.stepLength*b}c.StepAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a){this.data=c.normalizeData(this.data);var b={raw:this.data,normalized:c.getDataArray(this.data,a.reverseData,!0)};this.svg=c.createSvg(this.container,a.width,a.height,a.classNames.chart);var d,e,g=this.svg.elem("g").addClass(a.classNames.gridGroup),h=this.svg.elem("g"),i=this.svg.elem("g").addClass(a.classNames.labelGroup),j=c.createChartRect(this.svg,a,f.padding);d=void 0===a.axisX.type?new c.StepAxis(c.Axis.units.x,b,j,c.extend({},a.axisX,{ticks:b.raw.labels,stretch:a.fullWidth})):a.axisX.type.call(c,c.Axis.units.x,b,j,a.axisX),e=void 0===a.axisY.type?new c.AutoScaleAxis(c.Axis.units.y,b,j,c.extend({},a.axisY,{high:c.isNum(a.high)?a.high:a.axisY.high,low:c.isNum(a.low)?a.low:a.axisY.low})):a.axisY.type.call(c,c.Axis.units.y,b,j,a.axisY),d.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),e.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),b.raw.series.forEach(function(f,g){var i=h.elem("g");i.attr({"ct:series-name":f.name,"ct:meta":c.serialize(f.meta)}),i.addClass([a.classNames.series,f.className||a.classNames.series+"-"+c.alphaNumerate(g)].join(" "));var k=[],l=[];b.normalized[g].forEach(function(a,h){var i={x:j.x1+d.projectValue(a,h,b.normalized[g]),y:j.y1-e.projectValue(a,h,b.normalized[g])};k.push(i.x,i.y),l.push({value:a,valueIndex:h,meta:c.getMetaData(f,h)})}.bind(this));var m={lineSmooth:c.getSeriesOption(f,a,"lineSmooth"),showPoint:c.getSeriesOption(f,a,"showPoint"),showLine:c.getSeriesOption(f,a,"showLine"),showArea:c.getSeriesOption(f,a,"showArea"),areaBase:c.getSeriesOption(f,a,"areaBase")},n="function"==typeof m.lineSmooth?m.lineSmooth:m.lineSmooth?c.Interpolation.cardinal():c.Interpolation.none(),o=n(k,l);if(m.showPoint&&o.pathElements.forEach(function(b){var h=i.elem("line",{x1:b.x,y1:b.y,x2:b.x+.01,y2:b.y},a.classNames.point).attr({"ct:value":[b.data.value.x,b.data.value.y].filter(c.isNum).join(","),"ct:meta":b.data.meta});this.eventEmitter.emit("draw",{type:"point",value:b.data.value,index:b.data.valueIndex,meta:b.data.meta,series:f,seriesIndex:g,axisX:d,axisY:e,group:i,element:h,x:b.x,y:b.y})}.bind(this)),m.showLine){var p=i.elem("path",{d:o.stringify()},a.classNames.line,!0);this.eventEmitter.emit("draw",{type:"line",values:b.normalized[g],path:o.clone(),chartRect:j,index:g,series:f,seriesIndex:g,axisX:d,axisY:e,group:i,element:p})}if(m.showArea&&e.range){var q=Math.max(Math.min(m.areaBase,e.range.max),e.range.min),r=j.y1-e.projectValue(q);o.splitByCommand("M").filter(function(a){return a.pathElements.length>1}).map(function(a){var b=a.pathElements[0],c=a.pathElements[a.pathElements.length-1];return a.clone(!0).position(0).remove(1).move(b.x,r).line(b.x,b.y).position(a.pathElements.length+1).line(c.x,r)}).forEach(function(c){var h=i.elem("path",{d:c.stringify()},a.classNames.area,!0);this.eventEmitter.emit("draw",{type:"area",values:b.normalized[g],path:c.clone(),series:f,seriesIndex:g,axisX:d,axisY:e,chartRect:j,index:g,group:i,element:h})}.bind(this))}}.bind(this)),this.eventEmitter.emit("created",{bounds:e.bounds,chartRect:j,axisX:d,axisY:e,svg:this.svg,options:a})}function e(a,b,d,e){c.Line["super"].constructor.call(this,a,b,f,c.extend({},f,d),e)}var f={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};c.Line=c.Base.extend({constructor:e,createChart:d})}(window,document,a),function(a,b,c){"use strict";function d(a){this.data=c.normalizeData(this.data);var b,d={raw:this.data,normalized:a.distributeSeries?c.getDataArray(this.data,a.reverseData,a.horizontalBars?"x":"y").map(function(a){return[a]}):c.getDataArray(this.data,a.reverseData,a.horizontalBars?"x":"y")};this.svg=c.createSvg(this.container,a.width,a.height,a.classNames.chart+(a.horizontalBars?" "+a.classNames.horizontalBars:""));var e=this.svg.elem("g").addClass(a.classNames.gridGroup),g=this.svg.elem("g"),h=this.svg.elem("g").addClass(a.classNames.labelGroup);if(a.stackBars&&0!==d.normalized.length){var i=c.serialMap(d.normalized,function(){return Array.prototype.slice.call(arguments).map(function(a){return a}).reduce(function(a,b){return{x:a.x+(b&&b.x)||0,y:a.y+(b&&b.y)||0}},{x:0,y:0})});b=c.getHighLow([i],c.extend({},a,{referenceValue:0}),a.horizontalBars?"x":"y")}else b=c.getHighLow(d.normalized,c.extend({},a,{referenceValue:0}),a.horizontalBars?"x":"y");b.high=+a.high||(0===a.high?0:b.high),b.low=+a.low||(0===a.low?0:b.low);var j,k,l,m,n,o=c.createChartRect(this.svg,a,f.padding);k=a.distributeSeries&&a.stackBars?d.raw.labels.slice(0,1):d.raw.labels,a.horizontalBars?(j=m=void 0===a.axisX.type?new c.AutoScaleAxis(c.Axis.units.x,d,o,c.extend({},a.axisX,{highLow:b,referenceValue:0})):a.axisX.type.call(c,c.Axis.units.x,d,o,c.extend({},a.axisX,{highLow:b,referenceValue:0})),l=n=void 0===a.axisY.type?new c.StepAxis(c.Axis.units.y,d,o,{ticks:k}):a.axisY.type.call(c,c.Axis.units.y,d,o,a.axisY)):(l=m=void 0===a.axisX.type?new c.StepAxis(c.Axis.units.x,d,o,{ticks:k}):a.axisX.type.call(c,c.Axis.units.x,d,o,a.axisX),j=n=void 0===a.axisY.type?new c.AutoScaleAxis(c.Axis.units.y,d,o,c.extend({},a.axisY,{highLow:b,referenceValue:0})):a.axisY.type.call(c,c.Axis.units.y,d,o,c.extend({},a.axisY,{highLow:b,referenceValue:0})));var p=a.horizontalBars?o.x1+j.projectValue(0):o.y1-j.projectValue(0),q=[];l.createGridAndLabels(e,h,this.supportsForeignObject,a,this.eventEmitter),j.createGridAndLabels(e,h,this.supportsForeignObject,a,this.eventEmitter),d.raw.series.forEach(function(b,e){var f,h,i=e-(d.raw.series.length-1)/2;f=a.distributeSeries&&!a.stackBars?l.axisLength/d.normalized.length/2:a.distributeSeries&&a.stackBars?l.axisLength/2:l.axisLength/d.normalized[e].length/2,h=g.elem("g"),h.attr({"ct:series-name":b.name,"ct:meta":c.serialize(b.meta)}),h.addClass([a.classNames.series,b.className||a.classNames.series+"-"+c.alphaNumerate(e)].join(" ")),d.normalized[e].forEach(function(g,k){var r,s,t,u;if(u=a.distributeSeries&&!a.stackBars?e:a.distributeSeries&&a.stackBars?0:k,r=a.horizontalBars?{x:o.x1+j.projectValue(g&&g.x?g.x:0,k,d.normalized[e]),y:o.y1-l.projectValue(g&&g.y?g.y:0,u,d.normalized[e])}:{x:o.x1+l.projectValue(g&&g.x?g.x:0,u,d.normalized[e]),y:o.y1-j.projectValue(g&&g.y?g.y:0,k,d.normalized[e])},l instanceof c.StepAxis&&(l.options.stretch||(r[l.units.pos]+=f*(a.horizontalBars?-1:1)),r[l.units.pos]+=a.stackBars||a.distributeSeries?0:i*a.seriesBarDistance*(a.horizontalBars?-1:1)),t=q[k]||p,q[k]=t-(p-r[l.counterUnits.pos]),
void 0!==g){var v={};v[l.units.pos+"1"]=r[l.units.pos],v[l.units.pos+"2"]=r[l.units.pos],!a.stackBars||"accumulate"!==a.stackMode&&a.stackMode?(v[l.counterUnits.pos+"1"]=p,v[l.counterUnits.pos+"2"]=r[l.counterUnits.pos]):(v[l.counterUnits.pos+"1"]=t,v[l.counterUnits.pos+"2"]=q[k]),v.x1=Math.min(Math.max(v.x1,o.x1),o.x2),v.x2=Math.min(Math.max(v.x2,o.x1),o.x2),v.y1=Math.min(Math.max(v.y1,o.y2),o.y1),v.y2=Math.min(Math.max(v.y2,o.y2),o.y1),s=h.elem("line",v,a.classNames.bar).attr({"ct:value":[g.x,g.y].filter(c.isNum).join(","),"ct:meta":c.getMetaData(b,k)}),this.eventEmitter.emit("draw",c.extend({type:"bar",value:g,index:k,meta:c.getMetaData(b,k),series:b,seriesIndex:e,axisX:m,axisY:n,chartRect:o,group:h,element:s},v))}}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:j.bounds,chartRect:o,axisX:m,axisY:n,svg:this.svg,options:a})}function e(a,b,d,e){c.Bar["super"].constructor.call(this,a,b,f,c.extend({},f,d),e)}var f={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,scaleMinSpace:30,onlyInteger:!1},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,high:void 0,low:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},seriesBarDistance:15,stackBars:!1,stackMode:"accumulate",horizontalBars:!1,distributeSeries:!1,reverseData:!1,classNames:{chart:"ct-chart-bar",horizontalBars:"ct-horizontal-bars",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};c.Bar=c.Base.extend({constructor:e,createChart:d})}(window,document,a),function(a,b,c){"use strict";function d(a,b,c){var d=b.x>a.x;return d&&"explode"===c||!d&&"implode"===c?"start":d&&"implode"===c||!d&&"explode"===c?"end":"middle"}function e(a){this.data=c.normalizeData(this.data);var b,e,f,h,i,j=[],k=a.startAngle,l=c.getDataArray(this.data,a.reverseData);this.svg=c.createSvg(this.container,a.width,a.height,a.donut?a.classNames.chartDonut:a.classNames.chartPie),e=c.createChartRect(this.svg,a,g.padding),f=Math.min(e.width()/2,e.height()/2),i=a.total||l.reduce(function(a,b){return a+b},0);var m=c.quantity(a.donutWidth);"%"===m.unit&&(m.value*=f/100),f-=a.donut?m.value/2:0,h="outside"===a.labelPosition||a.donut?f:"center"===a.labelPosition?0:f/2,h+=a.labelOffset;var n={x:e.x1+e.width()/2,y:e.y2+e.height()/2},o=1===this.data.series.filter(function(a){return a.hasOwnProperty("value")?0!==a.value:0!==a}).length;a.showLabel&&(b=this.svg.elem("g",null,null,!0));for(var p=0;p<this.data.series.length;p++)if(0!==l[p]||!a.ignoreEmptyValues){var q=this.data.series[p];j[p]=this.svg.elem("g",null,null,!0),j[p].attr({"ct:series-name":q.name}),j[p].addClass([a.classNames.series,q.className||a.classNames.series+"-"+c.alphaNumerate(p)].join(" "));var r=k+l[p]/i*360,s=Math.max(0,k-(0===p||o?0:.2));r-s>=359.99&&(r=s+359.99);var t=c.polarToCartesian(n.x,n.y,f,s),u=c.polarToCartesian(n.x,n.y,f,r),v=new c.Svg.Path(!a.donut).move(u.x,u.y).arc(f,f,0,r-k>180,0,t.x,t.y);a.donut||v.line(n.x,n.y);var w=j[p].elem("path",{d:v.stringify()},a.donut?a.classNames.sliceDonut:a.classNames.slicePie);if(w.attr({"ct:value":l[p],"ct:meta":c.serialize(q.meta)}),a.donut&&w.attr({style:"stroke-width: "+m.value+"px"}),this.eventEmitter.emit("draw",{type:"slice",value:l[p],totalDataSum:i,index:p,meta:q.meta,series:q,group:j[p],element:w,path:v.clone(),center:n,radius:f,startAngle:k,endAngle:r}),a.showLabel){var x=c.polarToCartesian(n.x,n.y,h,k+(r-k)/2),y=a.labelInterpolationFnc(this.data.labels&&!c.isFalseyButZero(this.data.labels[p])?this.data.labels[p]:l[p],p);if(y||0===y){var z=b.elem("text",{dx:x.x,dy:x.y,"text-anchor":d(n,x,a.labelDirection)},a.classNames.label).text(""+y);this.eventEmitter.emit("draw",{type:"label",index:p,group:b,element:z,text:""+y,x:x.x,y:x.y})}}k=r}this.eventEmitter.emit("created",{chartRect:e,svg:this.svg,options:a})}function f(a,b,d,e){c.Pie["super"].constructor.call(this,a,b,g,c.extend({},g,d),e)}var g={width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:c.noop,labelDirection:"neutral",reverseData:!1,ignoreEmptyValues:!1};c.Pie=c.Base.extend({constructor:f,createChart:e,determineAnchorPosition:d})}(window,document,a),a});
//# sourceMappingURL=chartist.min.js.map;
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(["chartist"], function (Chartist) {
      return (root.returnExportsGlobal = factory(Chartist));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(require("chartist"));
  } else {
    root['Chartist.plugins.tooltips'] = factory(Chartist);
  }
}(this, function (Chartist) {

  /**
   * Chartist.js plugin to display a data label on top of the points in a line chart.
   *
   */
  /* global Chartist */
  (function (window, document, Chartist) {
    'use strict';

    var defaultOptions = {
      currency: undefined,
      currencyFormatCallback: undefined,
      tooltipOffset: {
        x: 0,
        y: -20
      },
      anchorToPoint: false,
      appendToBody: false,
      class: undefined,
      pointClass: 'ct-point'
    };

    Chartist.plugins = Chartist.plugins || {};
    Chartist.plugins.tooltip = function (options) {
      options = Chartist.extend({}, defaultOptions, options);

      return function tooltip(chart) {
        var tooltipSelector = options.pointClass;
        if (chart instanceof Chartist.Bar) {
          tooltipSelector = 'ct-bar';
        } else if (chart instanceof Chartist.Pie) {
          // Added support for donut graph
          if (chart.options.donut) {
            tooltipSelector = 'ct-slice-donut';
          } else {
            tooltipSelector = 'ct-slice-pie';
          }
        }

        var $chart = chart.container;
        var $toolTip = $chart.querySelector('.chartist-tooltip');
        if (!$toolTip) {
          $toolTip = document.createElement('div');
          $toolTip.className = (!options.class) ? 'chartist-tooltip' : 'chartist-tooltip ' + options.class;
          if (!options.appendToBody) {
            $chart.appendChild($toolTip);
          } else {
            document.body.appendChild($toolTip);
          }
        }
        var height = $toolTip.offsetHeight;
        var width = $toolTip.offsetWidth;

        hide($toolTip);

        function on(event, selector, callback) {
          $chart.addEventListener(event, function (e) {
            if (!selector || hasClass(e.target, selector))
              callback(e);
          });
        }

        on('mouseover', tooltipSelector, function (event) {
          var $point = event.target;
          var tooltipText = '';

          var isPieChart = (chart instanceof Chartist.Pie) ? $point : $point.parentNode;
          var seriesName = (isPieChart) ? $point.parentNode.getAttribute('ct:meta') || $point.parentNode.getAttribute('ct:series-name') : '';
          var meta = $point.getAttribute('ct:meta') || seriesName || '';
          var hasMeta = !!meta;
          var value = $point.getAttribute('ct:value');

          if (options.transformTooltipTextFnc && typeof options.transformTooltipTextFnc === 'function') {
            value = options.transformTooltipTextFnc(value);
          }

          if (options.tooltipFnc && typeof options.tooltipFnc === 'function') {
            tooltipText = options.tooltipFnc(meta, value);
          } else {
            if (options.metaIsHTML) {
              var txt = document.createElement('textarea');
              txt.innerHTML = meta;
              meta = txt.value;
            }

            meta = '<span class="chartist-tooltip-meta">' + meta + '</span>';

            if (hasMeta) {
              tooltipText += meta + '<br>';
            } else {
              // For Pie Charts also take the labels into account
              // Could add support for more charts here as well!
              if (chart instanceof Chartist.Pie) {
                var label = next($point, 'ct-label');
                if (label) {
                  tooltipText += text(label) + '<br>';
                }
              }
            }

            if (value) {
              if (options.currency) {
                if (options.currencyFormatCallback != undefined) {
                  value = options.currencyFormatCallback(value, options);
                } else {
                  value = options.currency + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                }
              }
              value = '<span class="chartist-tooltip-value">' + value + '</span>';
              tooltipText += value;
            }
          }

          if(tooltipText) {
            $toolTip.innerHTML = tooltipText;
            setPosition(event);
            show($toolTip);

            // Remember height and width to avoid wrong position in IE
            height = $toolTip.offsetHeight;
            width = $toolTip.offsetWidth;
          }
        });

        on('mouseout', tooltipSelector, function () {
          hide($toolTip);
        });

        on('mousemove', null, function (event) {
          if (false === options.anchorToPoint)
            setPosition(event);
        });
        
        function setPosition(event) {
          height = height || $toolTip.offsetHeight;
          width = width || $toolTip.offsetWidth;
          var offsetX = - width / 2 + options.tooltipOffset.x
          var offsetY = - height + options.tooltipOffset.y;
          var anchorX, anchorY;

          if (!options.appendToBody) {
            var box = $chart.getBoundingClientRect();
            var left = event.pageX - box.left - window.pageXOffset ;
            var top = event.pageY - box.top - window.pageYOffset ;

            if (true === options.anchorToPoint && event.target.x2 && event.target.y2) {
              anchorX = parseInt(event.target.x2.baseVal.value);
              anchorY = parseInt(event.target.y2.baseVal.value);
            }

            $toolTip.style.top = (anchorY || top) + offsetY + 'px';
            $toolTip.style.left = (anchorX || left) + offsetX + 'px';
          } else {
            $toolTip.style.top = event.pageY + offsetY + 'px';
            $toolTip.style.left = event.pageX + offsetX + 'px';
          }
        }
      }
    };

    function show(element) {
      if(!hasClass(element, 'tooltip-show')) {
        element.className = element.className + ' tooltip-show';
      }
    }

    function hide(element) {
      var regex = new RegExp('tooltip-show' + '\\s*', 'gi');
      element.className = element.className.replace(regex, '').trim();
    }

    function hasClass(element, className) {
      return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function next(element, className) {
      do {
        element = element.nextSibling;
      } while (element && !hasClass(element, className));
      return element;
    }

    function text(element) {
      return element.innerText || element.textContent;
    }

  } (window, document, Chartist));

  return Chartist.plugins.tooltips;

}));
;
/* jquery.sparkline 2.1.2 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(a,b,c){(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)})(function(d){"use strict";var e={},f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L=0;f=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new h("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:c,tooltipFormat:new h("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:"#4a2",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new h("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}},E='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',g=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=h=g({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e=this,f=a,g,h,i,j,k;return this.format.replace(this.fre,function(){var a;return h=arguments[1],i=arguments[3],g=e.precre.exec(h),g?(k=g[2],h=g[1]):k=!1,j=f[h],j===c?"":i&&b&&b[i]?(a=b[i],a.get?b[i].get(j)||j:b[i][j]||j):(n(j)&&(d.get("numberFormatter")?j=d.get("numberFormatter")(j):j=s(j,k,d.get("numberDigitGroupCount"),d.get("numberDigitGroupSep"),d.get("numberDecimalMark"))),j)})}}),d.spformat=function(a,b){return new h(a,b)},i=function(a,b,c){return a<b?b:a>c?c:a},j=function(a,c){var d;return c===2?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},k=function(a){var b;switch(a){case"undefined":a=c;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},l=function(a){var b,c=[];for(b=a.length;b--;)c[b]=k(a[b]);return c},m=function(a,b){var c,d,e=[];for(c=0,d=a.length;c<d;c++)a[c]!==b&&e.push(a[c]);return e},n=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},s=function(a,b,c,e,f){var g,h;a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(""),g=(g=d.inArray(".",a))<0?a.length:g,g<a.length&&(a[g]=f);for(h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join("")},o=function(a,b,c){var d;for(d=b.length;d--;){if(c&&b[d]===null)continue;if(b[d]!==a)return!1}return!0},p=function(a){var b=0,c;for(c=a.length;c--;)b+=typeof a[c]=="number"?a[c]:0;return b},r=function(a){return d.isArray(a)?a:[a]},q=function(b){var c;a.createStyleSheet?a.createStyleSheet().cssText=b:(c=a.createElement("style"),c.type="text/css",a.getElementsByTagName("head")[0].appendChild(c),c[typeof a.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=b)},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data("_jqs_vcanvas")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement("canvas");if(!j.getContext||!j.getContext("2d")){if(!a.namespaces||!!a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML"),d.fn.sparkline.canvas=function(a,b,c,d){return new J(a,b,c)}}else d.fn.sparkline.canvas=function(a,b,c,d){return new I(a,b,c,d)}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data("_jqs_mhandler"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},d.RangeMapClass=t=g({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&typeof b=="string"&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=c[0].length===0?-Infinity:parseFloat(c[0]),c[1]=c[1].length===0?Infinity:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b=this.rangelist,d,e,f;if((f=this.map[a])!==c)return f;if(b)for(d=b.length;d--;){e=b[d];if(e[0]<=a&&e[1]>=a)return e[2]}return c}}),d.range_map=function(a){return new t(a)},u=g({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get("disableTooltips"),this.highlightEnabled=!b.get("disableHighlight")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event("sparklineClick");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind("mousemove.jqs"),d(a.body).bind("mousemove.jqs",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new v(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind("mousemove.jqs");var b=this.splist,c=b.length,e=!1,f,g;this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null);for(g=0;g<c;g++)f=b[g],f.clearRegionHighlight()&&(e=!0);e&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a=this.splist,b=a.length,c=!1,e=this.$canvas.offset(),f=this.currentPageX-e.left,g=this.currentPageY-e.top,h,i,j,k,l;if(!this.over)return;for(j=0;j<b;j++)i=a[j],k=i.setRegionHighlight(this.currentEl,f,g),k&&(c=!0);if(c){l=d.Event("sparklineRegionChange"),l.sparklines=this.splist,this.$el.trigger(l);if(this.tooltip){h="";for(j=0;j<b;j++)i=a[j],h+=i.getCurrentRegionTooltip();this.tooltip.setContent(h)}this.disableHighlight||this.canvas.render()}k===null&&this.mouseleave()}}),v=g({sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",init:function(b){var c=b.get("tooltipClassname","jqstooltip"),e=this.sizeStyle,f;this.container=b.get("tooltipContainer")||a.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),d("#jqssizetip").remove(),d("#jqstooltip").remove(),this.sizetip=d("<div/>",{id:"jqssizetip",style:e,"class":c}),this.tooltip=d("<div/>",{id:"jqstooltip","class":c}).appendTo(this.container),f=this.tooltip.offset(),this.offsetLeft=f.left,this.offsetTop=f.top,this.hidden=!0,d(window).unbind("resize.jqs scroll.jqs"),d(window).bind("resize.jqs scroll.jqs",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){if(!a){this.tooltip.css("visibility","hidden"),this.hidden=!0;return}this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:"visible"}),this.hidden&&(this.hidden=!1,this.updatePosition())},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;if(!this.height||!this.width||this.hidden)return;b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b})},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind("resize.jqs scroll.jqs")}}),F=function(){q(E)},d(F),K=[],d.fn.sparkline=function(b,e){return this.each(function(){var f=new d.fn.sparkline.options(this,e),g=d(this),h,i;h=function(){var e,h,i,j,k,l,m;if(b==="html"||b===c){m=this.getAttribute(f.get("tagValuesAttribute"));if(m===c||m===null)m=g.html();e=m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else e=b;h=f.get("width")==="auto"?e.length*f.get("defaultPixelsPerValue"):f.get("width");if(f.get("height")==="auto"){if(!f.get("composite")||!d.data(this,"_jqs_vcanvas"))j=a.createElement("span"),j.innerHTML="a",g.html(j),i=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null}else i=f.get("height");f.get("disableInteraction")?k=!1:(k=d.data(this,"_jqs_mhandler"),k?f.get("composite")||k.reset():(k=new u(this,f),d.data(this,"_jqs_mhandler",k)));if(f.get("composite")&&!d.data(this,"_jqs_vcanvas")){d.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),d.data(this,"_jqs_errnotify",!0));return}l=new(d.fn.sparkline[f.get("type")])(this,e,f,h,i),l.render(),k&&k.registerSparkline(l)};if(d(this).html()&&!f.get("disableHiddenCheck")&&d(this).is(":hidden")||!d(this).parents("body").length){if(!f.get("composite")&&d.data(this,"_jqs_pending"))for(i=K.length;i;i--)K[i-1][0]==this&&K.splice(i-1,1);K.push([this,h]),d.data(this,"_jqs_pending",!0)}else h.call(this)})},d.fn.sparkline.defaults=f(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=K.length;b<c;b++)a=K[b][0],d(a).is(":visible")&&!d(a).parents().is(":hidden")?(K[b][1].call(a),d.data(K[b][0],"_jqs_pending",!1),e.push(b)):!d(a).closest("html").length&&!d.data(a,"_jqs_pending")&&(d.data(K[b][0],"_jqs_pending",!1),e.push(b));for(b=e.length;b;b--)K.splice(e[b-1],1)},d.fn.sparkline.options=g({init:function(a,b){var c,f,g,h;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},f=d.fn.sparkline.defaults,g=f.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||g.tagOptionsPrefix),h=this.getTagSetting("type"),h===e?c=f[b.type||g.type]:c=f[h],this.mergedOptions=d.extend({},g,c,b)},getTagSetting:function(a){var b=this.tagOptionsPrefix,d,f,g,h;if(b===!1||b===c)return e;if(this.tagValCache.hasOwnProperty(a))d=this.tagValCache.key;else{d=this.tag.getAttribute(b+a);if(d===c||d===null)d=e;else if(d.substr(0,1)==="["){d=d.substr(1,d.length-2).split(",");for(f=d.length;f--;)d[f]=k(d[f].replace(/(^\s*)|(\s*$)/g,""))}else if(d.substr(0,1)==="{"){g=d.substr(1,d.length-2).split(","),d={};for(f=g.length;f--;)h=g[f].split(":",2),d[h[0].replace(/(^\s*)|(\s*$)/g,"")]=k(h[1].replace(/(^\s*)|(\s*$)/g,""))}else d=k(d);this.tagValCache.key=d}return d},get:function(a,b){var d=this.getTagSetting(a),f;return d!==e?d:(f=this.mergedOptions[a])===c?b:f}}),d.fn.sparkline._base=g({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",!1):!0},getRegion:function(a,b){},setRegionHighlight:function(a,b,d){var e=this.currentRegion,f=!this.options.get("disableHighlight"),g;return b>this.canvasWidth||d>this.canvasHeight||b<0||d<0?null:(g=this.getRegion(a,b,d),e!==g?(e!==c&&f&&this.removeHighlight(),this.currentRegion=g,g!==c&&f&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(a){},getCurrentRegionTooltip:function(){var a=this.options,b="",e=[],f,g,i,j,k,l,m,n,o,p,q,r,s,t;if(this.currentRegion===c)return"";f=this.getCurrentRegionFields(),q=a.get("tooltipFormatter");if(q)return q(this,a,f);a.get("tooltipChartTitle")&&(b+='<div class="jqs jqstitle">'+a.get("tooltipChartTitle")+"</div>\n"),g=this.options.get("tooltipFormat");if(!g)return"";d.isArray(g)||(g=[g]),d.isArray(f)||(f=[f]),m=this.options.get("tooltipFormatFieldlist"),n=this.options.get("tooltipFormatFieldlistKey");if(m&&n){o=[];for(l=f.length;l--;)p=f[l][n],(t=d.inArray(p,m))!=-1&&(o[t]=f[l]);f=o}i=g.length,s=f.length;for(l=0;l<i;l++){r=g[l],typeof r=="string"&&(r=new h(r)),j=r.fclass||"jqsfield";for(t=0;t<s;t++)if(!f[t].isNull||!a.get("tooltipSkipNull"))d.extend(f[t],{prefix:a.get("tooltipPrefix"),suffix:a.get("tooltipSuffix")}),k=r.render(f[t],a.get("tooltipValueLookups"),a),e.push('<div class="'+j+'">'+k+"</div>")}return e.length?b+e.join("\n"):""},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d=c.get("highlightColor"),e=c.get("highlightLighten"),f,g,h,j;if(d)return d;if(e){f=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);if(f){h=[],g=a.length===4?16:1;for(j=0;j<3;j++)h[j]=i(b.round(parseInt(f[j+1],16)*g*e),0,255);return"rgb("+h.join(",")+")"}}return a}}),w={changeHighlight:function(a){var b=this.currentRegion,c=this.target,e=this.regionShapes[b],f;e&&(f=this.renderRegion(b,a),d.isArray(f)||d.isArray(e)?(c.replaceWithShapes(e,f),this.regionShapes[b]=d.map(f,function(a){return a.id})):(c.replaceWithShape(e,f),this.regionShapes[b]=f.id))},render:function(){var a=this.values,b=this.target,c=this.regionShapes,e,f,g,h;if(!this.cls._super.render.call(this))return;for(g=a.length;g--;){e=this.renderRegion(g);if(e)if(d.isArray(e)){f=[];for(h=e.length;h--;)e[h].append(),f.push(e[h].id);c[g]=f}else e.append(),c[g]=e.id;else c[g]=null}b.render()}},d.fn.sparkline.line=x=g(d.fn.sparkline._base,{type:"line",init:function(a,b,c,d,e){x._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b,d){var e,f=this.regionMap;for(e=f.length;e--;)if(f[e]!==null&&b>=f[e][0]&&b<=f[e][1])return f[e][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.yvalues[a]===null,x:this.xvalues[a],y:this.yvalues[a],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:a}},renderHighlight:function(){var a=this.currentRegion,b=this.target,d=this.vertices[a],e=this.options,f=e.get("spotRadius"),g=e.get("highlightSpotColor"),h=e.get("highlightLineColor"),i,j;if(!d)return;f&&g&&(i=b.drawCircle(d[0],d[1],f,c,g),this.highlightSpotId=i.id,b.insertAfterShape(this.lastShapeId,i)),h&&(j=b.drawLine(d[0],this.canvasTop,d[0],this.canvasTop+this.canvasHeight,h),this.highlightLineId=j.id,b.insertAfterShape(this.lastShapeId,j))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a=this.values,c=a.length,d=this.xvalues,e=this.yvalues,f=this.yminmax,g,h,i,j,k;for(g=0;g<c;g++)h=a[g],i=typeof a[g]=="string",j=typeof a[g]=="object"&&a[g]instanceof Array,k=i&&a[g].split(":"),i&&k.length===2?(d.push(Number(k[0])),e.push(Number(k[1])),f.push(Number(k[1]))):j?(d.push(h[0]),e.push(h[1]),f.push(h[1])):(d.push(g),a[g]===null||a[g]==="null"?e.push(null):(e.push(Number(h)),f.push(Number(h))));this.options.get("xvalues")&&(d=this.options.get("xvalues")),this.maxy=this.maxyorg=b.max.apply(b,f),this.miny=this.minyorg=b.min.apply(b,f),this.maxx=b.max.apply(b,d),this.minx=b.min.apply(b,d),this.xvalues=d,this.yvalues=e,this.yminmax=f},processRangeOptions:function(){var a=this.options,b=a.get("normalRangeMin"),d=a.get("normalRangeMax");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get("chartRangeMin")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==c&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==c&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get("normalRangeMin"),i=this.options.get("normalRangeMax"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get("normalRangeColor")).append()},render:function(){var a=this.options,e=this.target,f=this.canvasWidth,g=this.canvasHeight,h=this.vertices,i=a.get("spotRadius"),j=this.regionMap,k,l,m,n,o,p,q,r,s,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K;if(!x._super.render.call(this))return;this.scanValues(),this.processRangeOptions(),I=this.xvalues,J=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2)return;n=o=0,k=this.maxx-this.minx===0?1:this.maxx-this.minx,l=this.maxy-this.miny===0?1:this.maxy-this.miny,m=this.yvalues.length-1,i&&(f<i*4||g<i*4)&&(i=0);if(i){G=a.get("highlightSpotColor")&&!a.get("disableInteraction");if(G||a.get("minSpotColor")||a.get("spotColor")&&J[m]===this.miny)g-=b.ceil(i);if(G||a.get("maxSpotColor")||a.get("spotColor")&&J[m]===this.maxy)g-=b.ceil(i),n+=b.ceil(i);if(G||(a.get("minSpotColor")||a.get("maxSpotColor"))&&(J[0]===this.miny||J[0]===this.maxy))o+=b.ceil(i),f-=b.ceil(i);if(G||a.get("spotColor")||a.get("minSpotColor")||a.get("maxSpotColor")&&(J[m]===this.miny||J[m]===this.maxy))f-=b.ceil(i)}g--,a.get("normalRangeMin")!==c&&!a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),q=[],r=[q],z=A=null,B=J.length;for(K=0;K<B;K++)s=I[K],v=I[K+1],u=J[K],w=o+b.round((s-this.minx)*(f/k)),y=K<B-1?o+b.round((v-this.minx)*(f/k)):f,A=w+(y-w)/2,j[K]=[z||0,A,K],z=A,u===null?K&&(J[K-1]!==null&&(q=[],r.push(q)),h.push(null)):(u<this.miny&&(u=this.miny),u>this.maxy&&(u=this.maxy),q.length||q.push([w,n+g]),p=[w,n+b.round(g-g*((u-this.miny)/l))],q.push(p),h.push(p));C=[],D=[],E=r.length;for(K=0;K<E;K++)q=r[K],q.length&&(a.get("fillColor")&&(q.push([q[q.length-1][0],n+g]),D.push(q.slice(0)),q.pop()),q.length>2&&(q[0]=[q[0][0],q[1][1]]),C.push(q));E=D.length;for(K=0;K<E;K++)e.drawShape(D[K],a.get("fillColor"),a.get("fillColor")).append();a.get("normalRangeMin")!==c&&a.get("drawNormalOnTop")&&this.drawNormalRange(o,n,g,f,l),E=C.length;for(K=0;K<E;K++)e.drawShape(C[K],a.get("lineColor"),c,a.get("lineWidth")).append();if(i&&a.get("valueSpots")){F=a.get("valueSpots"),F.get===c&&(F=new t(F));for(K=0;K<B;K++)H=F.get(J[K]),H&&e.drawCircle(o+b.round((I[K]-this.minx)*(f/k)),n+b.round(g-g*((J[K]-this.miny)/l)),i,c,H).append()}i&&a.get("spotColor")&&J[m]!==null&&e.drawCircle(o+b.round((I[I.length-1]-this.minx)*(f/k)),n+b.round(g-g*((J[m]-this.miny)/l)),i,c,a.get("spotColor")).append(),this.maxy!==this.minyorg&&(i&&a.get("minSpotColor")&&(s=I[d.inArray(this.minyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.minyorg-this.miny)/l)),i,c,a.get("minSpotColor")).append()),i&&a.get("maxSpotColor")&&(s=I[d.inArray(this.maxyorg,J)],e.drawCircle(o+b.round((s-this.minx)*(f/k)),n+b.round(g-g*((this.maxyorg-this.miny)/l)),i,c,a.get("maxSpotColor")).append())),this.lastShapeId=e.getLastShapeId(),this.canvasTop=n,e.render()}}),d.fn.sparkline.bar=y=g(d.fn.sparkline._base,w,{type:"bar",init:function(a,e,f,g,h){var j=parseInt(f.get("barWidth"),10),n=parseInt(f.get("barSpacing"),10),o=f.get("chartRangeMin"),p=f.get("chartRangeMax"),q=f.get("chartRangeClip"),r=Infinity,s=-Infinity,u,v,w,x,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;y._super.init.call(this,a,e,f,g,h);for(A=0,B=e.length;A<B;A++){O=e[A],u=typeof O=="string"&&O.indexOf(":")>-1;if(u||d.isArray(O))J=!0,u&&(O=e[A]=l(O.split(":"))),O=m(O,null),v=b.min.apply(b,O),w=b.max.apply(b,O),v<r&&(r=v),w>s&&(s=w)}this.stacked=J,this.regionShapes={},this.barWidth=j,this.barSpacing=n,this.totalBarWidth=j+n,this.width=g=e.length*j+(e.length-1)*n,this.initTarget(),q&&(H=o===c?-Infinity:o,I=p===c?Infinity:p),z=[],x=J?[]:z;var S=[],T=[];for(A=0,B=e.length;A<B;A++)if(J){K=e[A],e[A]=N=[],S[A]=0,x[A]=T[A]=0;for(L=0,M=K.length;L<M;L++)O=N[L]=q?i(K[L],H,I):K[L],O!==null&&(O>0&&(S[A]+=O),r<0&&s>0?O<0?T[A]+=b.abs(O):x[A]+=O:x[A]+=b.abs(O-(O<0?s:r)),z.push(O))}else O=q?i(e[A],H,I):e[A],O=e[A]=k(O),O!==null&&z.push(O);this.max=G=b.max.apply(b,z),this.min=F=b.min.apply(b,z),this.stackMax=s=J?b.max.apply(b,S):G,this.stackMin=r=J?b.min.apply(b,z):F,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<F)&&(F=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>G)&&(G=f.get("chartRangeMax")),this.zeroAxis=D=f.get("zeroAxis",!0),F<=0&&G>=0&&D?E=0:D==0?E=F:F>0?E=F:E=G,this.xaxisOffset=E,C=J?b.max.apply(b,x)+b.max.apply(b,T):G-F,this.canvasHeightEf=D&&F<0?this.canvasHeight-2:this.canvasHeight-1,F<E?(Q=J&&G>=0?s:G,P=(Q-E)/C*this.canvasHeight,P!==b.ceil(P)&&(this.canvasHeightEf-=2,P=b.ceil(P))):P=this.canvasHeight,this.yoffset=P,d.isArray(f.get("colorMap"))?(this.colorMapByIndex=f.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.range=C},getRegion:function(a,d,e){var f=b.floor(d/this.totalBarWidth);return f<0||f>=this.values.length?c:f},getCurrentRegionFields:function(){var a=this.currentRegion,b=r(this.values[a]),c=[],d,e;for(e=b.length;e--;)d=b[e],c.push({isNull:d===null,value:d,color:this.calcColor(e,d,a),offset:a});return c},calcColor:function(a,b,e){var f=this.colorMapByIndex,g=this.colorMapByValue,h=this.options,i,j;return this.stacked?i=h.get("stackedBarColor"):i=b<0?h.get("negBarColor"):h.get("barColor"),b===0&&h.get("zeroColor")!==c&&(i=h.get("zeroColor")),g&&(j=g.get(b))?i=j:f&&f.length>e&&(i=f[e]),d.isArray(i)?i[a%i.length]:i},renderRegion:function(a,e){var f=this.values[a],g=this.options,h=this.xaxisOffset,i=[],j=this.range,k=this.stacked,l=this.target,m=a*this.totalBarWidth,n=this.canvasHeightEf,p=this.yoffset,q,r,s,t,u,v,w,x,y,z;f=d.isArray(f)?f:[f],w=f.length,x=f[0],t=o(null,f),z=o(h,f,!0);if(t)return g.get("nullColor")?(s=e?g.get("nullColor"):this.calcHighlightColor(g.get("nullColor"),g),q=p>0?p-1:p,l.drawRect(m,q,this.barWidth-1,0,s,s)):c;u=p;for(v=0;v<w;v++){x=f[v];if(k&&x===h){if(!z||y)continue;y=!0}j>0?r=b.floor(n*(b.abs(x-h)/j))+1:r=1,x<h||x===h&&p===0?(q=u,u+=r):(q=p-r,p-=r),s=this.calcColor(v,x,a),e&&(s=this.calcHighlightColor(s,g)),i.push(l.drawRect(m,q,this.barWidth-1,r-1,s,s))}return i.length===1?i[0]:i}}),d.fn.sparkline.tristate=z=g(d.fn.sparkline._base,w,{type:"tristate",init:function(a,b,e,f,g){var h=parseInt(e.get("barWidth"),10),i=parseInt(e.get("barSpacing"),10);z._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get("colorMap"))?(this.colorMapByIndex=e.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new t(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c,d){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c=this.values,d=this.options,e=this.colorMapByIndex,f=this.colorMapByValue,g,h;return f&&(h=f.get(a))?g=h:e&&e.length>b?g=e[b]:c[b]<0?g=d.get("negBarColor"):c[b]>0?g=d.get("posBarColor"):g=d.get("zeroBarColor"),g},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.target,g,h,i,j,k,l;g=f.pixelHeight,i=b.round(g/2),j=a*this.totalBarWidth,d[a]<0?(k=i,h=i-1):d[a]>0?(k=0,h=i-1):(k=i-1,h=2),l=this.calcColor(d[a],a);if(l===null)return;return c&&(l=this.calcHighlightColor(l,e)),f.drawRect(j,k,this.barWidth-1,h-1,l,l)}}),d.fn.sparkline.discrete=A=g(d.fn.sparkline._base,w,{type:"discrete",init:function(a,e,f,g,h){A._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=f.get("width")==="auto"?e.length*2:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get("chartRangeMin")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMin")<this.min)&&(this.min=f.get("chartRangeMin")),f.get("chartRangeMax")!==c&&(f.get("chartRangeClip")||f.get("chartRangeMax")>this.max)&&(this.max=f.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight=f.get("lineHeight")==="auto"?b.round(this.canvasHeight*.3):f.get("lineHeight"))},getRegion:function(a,c,d){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d=this.values,e=this.options,f=this.min,g=this.max,h=this.range,j=this.interval,k=this.target,l=this.canvasHeight,m=this.lineHeight,n=l-m,o,p,q,r;return p=i(d[a],f,g),r=a*j,o=b.round(n-n*((p-f)/h)),q=e.get("thresholdColor")&&p<e.get("thresholdValue")?e.get("thresholdColor"):e.get("lineColor"),c&&(q=this.calcHighlightColor(q,e)),k.drawLine(r,o,r,o+m,q)}}),d.fn.sparkline.bullet=B=g(d.fn.sparkline._base,{type:"bullet",init:function(a,d,e,f,g){var h,i,j;B._super.init.call(this,a,d,e,f,g),this.values=d=l(d),j=d.slice(),j[0]=j[0]===null?j[2]:j[0],j[1]=d[1]===null?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),e.get("base")===c?h=h<0?h:0:h=e.get("base"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=e.get("width")==="auto"?"4.0em":f,this.target=this.$el.simpledraw(f,g,e.get("composite")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.valueShapes[b],d;delete this.shapes[c];switch(b.substr(0,1)){case"r":d=this.renderRange(b.substr(1),a);break;case"p":d=this.renderPerformance(a);break;case"t":d=this.renderTarget(a)}this.valueShapes[b]=d.id,this.shapes[d.id]=b,this.target.replaceWithShape(c,d)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get("rangeColors")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("performanceColor");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(this.canvasHeight*.3),d-1,b.round(this.canvasHeight*.4)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get("targetWidth")/2),e=b.round(this.canvasHeight*.1),f=this.canvasHeight-e*2,g=this.options.get("targetColor");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get("targetWidth")-1,f-1,g,g)},render:function(){var a=this.values.length,b=this.target,c,d;if(!B._super.render.call(this))return;for(c=2;c<a;c++)d=this.renderRange(c).append(),this.shapes[d.id]="r"+c,this.valueShapes["r"+c]=d.id;this.values[1]!==null&&(d=this.renderPerformance().append(),this.shapes[d.id]="p1",this.valueShapes.p1=d.id),this.values[0]!==null&&(d=this.renderTarget().append(),this.shapes[d.id]="t0",this.valueShapes.t0=d.id),b.render()}}),d.fn.sparkline.pie=C=g(d.fn.sparkline._base,{type:"pie",init:function(a,c,e,f,g){var h=0,i;C._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),e.get("width")==="auto"&&(this.width=this.height);if(c.length>0)for(i=c.length;i--;)h+=c[i];this.total=h,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e=this.target,f=this.options,g=this.radius,h=f.get("borderWidth"),i=f.get("offset"),j=2*b.PI,k=this.values,l=this.total,m=i?2*b.PI*(i/360):0,n,o,p,q,r;q=k.length;for(p=0;p<q;p++){n=m,o=m,l>0&&(o=m+j*(k[p]/l));if(a===p)return r=f.get("sliceColors")[p%f.get("sliceColors").length],d&&(r=this.calcHighlightColor(r,f)),e.drawPieSlice(g,g,g-h,n,o,c,r);m=o}},render:function(){var a=this.target,d=this.values,e=this.options,f=this.radius,g=e.get("borderWidth"),h,i;if(!C._super.render.call(this))return;g&&a.drawCircle(f,f,b.floor(f-g/2),e.get("borderColor"),c,g).append();for(i=d.length;i--;)d[i]&&(h=this.renderSlice(i).append(),this.valueShapes[i]=h.id,this.shapes[h.id]=i);a.render()}}),d.fn.sparkline.box=D=g(d.fn.sparkline._base,{type:"box",init:function(a,b,c,e,f){D._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=c.get("width")==="auto"?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles
[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:"lo",value:this.loutlier}),this.routlier!==c&&a.push({field:"ro",value:this.routlier}),this.lwhisker!==c&&a.push({field:"lw",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:"rw",value:this.rwhisker}),a},render:function(){var a=this.target,d=this.values,e=d.length,f=this.options,g=this.canvasWidth,h=this.canvasHeight,i=f.get("chartRangeMin")===c?b.min.apply(b,d):f.get("chartRangeMin"),k=f.get("chartRangeMax")===c?b.max.apply(b,d):f.get("chartRangeMax"),l=0,m,n,o,p,q,r,s,t,u,v,w;if(!D._super.render.call(this))return;if(f.get("raw"))f.get("showOutliers")&&d.length>5?(n=d[0],m=d[1],p=d[2],q=d[3],r=d[4],s=d[5],t=d[6]):(m=d[0],p=d[1],q=d[2],r=d[3],s=d[4]);else{d.sort(function(a,b){return a-b}),p=j(d,1),q=j(d,2),r=j(d,3),o=r-p;if(f.get("showOutliers")){m=s=c;for(u=0;u<e;u++)m===c&&d[u]>p-o*f.get("outlierIQR")&&(m=d[u]),d[u]<r+o*f.get("outlierIQR")&&(s=d[u]);n=d[0],t=d[e-1]}else m=d[0],s=d[e-1]}this.quartiles=[p,q,r],this.lwhisker=m,this.rwhisker=s,this.loutlier=n,this.routlier=t,w=g/(k-i+1),f.get("showOutliers")&&(l=b.ceil(f.get("spotRadius")),g-=2*b.ceil(f.get("spotRadius")),w=g/(k-i+1),n<m&&a.drawCircle((n-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append(),t>s&&a.drawCircle((t-i)*w+l,h/2,f.get("spotRadius"),f.get("outlierLineColor"),f.get("outlierFillColor")).append()),a.drawRect(b.round((p-i)*w+l),b.round(h*.1),b.round((r-p)*w),b.round(h*.8),f.get("boxLineColor"),f.get("boxFillColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/2),b.round((p-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((m-i)*w+l),b.round(h/4),b.round((m-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/2),b.round((r-i)*w+l),b.round(h/2),f.get("lineColor")).append(),a.drawLine(b.round((s-i)*w+l),b.round(h/4),b.round((s-i)*w+l),b.round(h-h/4),f.get("whiskerColor")).append(),a.drawLine(b.round((q-i)*w+l),b.round(h*.1),b.round((q-i)*w+l),b.round(h*.9),f.get("medianColor")).append(),f.get("target")&&(v=b.ceil(f.get("spotRadius")),a.drawLine(b.round((f.get("target")-i)*w+l),b.round(h/2-v),b.round((f.get("target")-i)*w+l),b.round(h/2+v),f.get("targetColor")).append(),a.drawLine(b.round((f.get("target")-i)*w+l-v),b.round(h/2),b.round((f.get("target")-i)*w+l+v),b.round(h/2),f.get("targetColor")).append()),a.render()}}),G=g({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),H=g({_pxregex:/(\d+)(px)?\s*$/i,init:function(a,b,c){if(!a)return;this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,"_jqs_vcanvas",this)},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),e?this.pixelHeight=e[1]:this.pixelHeight=d(c).height(),e=this._pxregex.exec(a),e?this.pixelWidth=e[1]:this.pixelWidth=d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new G(this,c,a,b)},appendShape:function(a){alert("appendShape not implemented")},replaceWithShape:function(a,b){alert("replaceWithShape not implemented")},insertAfterShape:function(a,b){alert("insertAfterShape not implemented")},removeShapeId:function(a){alert("removeShapeId not implemented")},getShapeAt:function(a,b,c){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}}),I=g(H,{init:function(b,e,f,g){I._super.init.call(this,b,e,f),this.canvas=a.createElement("canvas"),f[0]&&(f=f[0]),d.data(f,"_jqs_vcanvas",this),d(this.canvas).css({display:"inline-block",width:b,height:e,verticalAlign:"top"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext("2d");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g=this._getContext(d,e,f),h,i;g.beginPath(),g.moveTo(b[0][0]+.5,b[0][1]+.5);for(h=1,i=b.length;h<i;h++)g.lineTo(b[h][0]+.5,b[h][1]+.5);d!==c&&g.stroke(),e!==c&&g.fill(),this.targetX!==c&&this.targetY!==c&&g.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=this.shapeseq,d;this.shapes[b.id]=b;for(d=c.length;d--;)c[d]==a&&(c[d]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c=this.shapeseq,d={},e,f,g;for(f=a.length;f--;)d[a[f]]=!0;for(f=c.length;f--;)e=c[f],d[e]&&(c.splice(f,1),delete this.shapes[e],g=f);for(f=b.length;f--;)c.splice(g,0,b[f].id),this.shapes[b[f].id]=b[f]},insertAfterShape:function(a,b){var c=this.shapeseq,d;for(d=c.length;d--;)if(c[d]===a){c.splice(d+1,0,b.id),this.shapes[b.id]=b;return}},removeShapeId:function(a){var b=this.shapeseq,c;for(c=b.length;c--;)if(b[c]===a){b.splice(c,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a=this.shapeseq,b=this.shapes,c=a.length,d=this._getContext(),e,f,g;d.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(g=0;g<c;g++)e=a[g],f=b[e],this["_draw"+f.type].apply(this,f.args);this.interact||(this.shapes={},this.shapeseq=[])}}),J=g(H,{init:function(b,c,e){var f;J._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,"_jqs_vcanvas",this),this.canvas=a.createElement("span"),d(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:b,height:c,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=""},_drawShape:function(a,b,d,e,f){var g=[],h,i,j,k,l,m,n;for(n=0,m=b.length;n<m;n++)g[n]=""+b[n][0]+","+b[n][1];return h=g.splice(0,1),f=f===c?1:f,i=d===c?' stroked="false" ':' strokeWeight="'+f+'px" strokeColor="'+d+'" ',j=e===c?' filled="false"':' fillColor="'+e+'" filled="true" ',k=g[0]===g[g.length-1]?"x ":"",l='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+i+j+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+h+" l "+g.join(", ")+" "+k+'e">'+" </v:shape>",l},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked="false" ':' strokeWeight="'+h+'px" strokeColor="'+f+'" ',j=g===c?' filled="false"':' fillColor="'+g+'" filled="true" ',k='<v:oval  id="jqsshape'+a+'" '+i+j+' style="position:absolute;top:'+d+"px; left:"+b+"px; width:"+e*2+"px; height:"+e*2+'px"></v:oval>',k},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return"";h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f);if(l===n&&m===o){if(h-g<b.PI)return"";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?"":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked="false" ':' strokeWeight="1px" strokeColor="'+i+'" ',q=j===c?' filled="false"':' fillColor="'+j+'" filled="true" ',r='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+p+q+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+d+","+e+" wa "+k.join(", ")+' x e">'+" </v:shape>",r)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=""},appendShape:function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c=d("#jqsshape"+a[0]),e="",f=b.length,g;for(g=0;g<f;g++)e+=this["_draw"+b[g].type].apply(this,b[g].args);c[0].outerHTML=e;for(g=1;g<a.length;g++)d("#jqsshape"+a[g]).remove()},insertAfterShape:function(a,b){var c=d("#jqsshape"+a),e=this["_draw"+b.type].apply(this,b.args);c[0].insertAdjacentHTML("afterEnd",e)},removeShapeId:function(a){var b=d("#jqsshape"+a);this.group.removeChild(b[0])},getShapeAt:function(a,b,c){var d=a.id.substr(8);return d},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})})(document,Math);;
  
$(document).ready(function() {
   var sparklineLogin = function() { 
        $("#sparkline1").sparkline([5,6,2,8,9,4,7,10,11,12,10], {
        type: 'bar',
        height: '45',
        barWidth: 7,
        barSpacing: 4,
        barColor: '#99d683'
        
    });

        $('#sparkline2').sparkline([20, 40, 30], {
            type: 'pie',
            width: '50',
            height: '45',
            resize: true,
            sliceColors: ['#13dafe', '#6164c1', '#f1f2f7']
        });

    
        $('#sparkline3').sparkline([5, 6, 2, 9, 4, 7, 10, 12], {
            type: 'bar',
            height: '164',
            barWidth: '7',
            resize: true,
            barSpacing: '5',
            barColor: '#f96262'
        });

		
        $("#sparkline4").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
            type: 'line',
            width: '120',
            height: '45',
            lineColor: '#fb6d9d',
            fillColor: 'transparent',
            spotColor: '#fb6d9d',
            minSpotColor: undefined,
            maxSpotColor: undefined,
            highlightSpotColor: undefined,
            highlightLineColor: undefined
        });  
		
        $('#sparkline5').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
            type: 'line',
            width: '100%',
            height: '160',
            chartRangeMax: 50,
            resize: true,
            lineColor: '#13dafe',
            fillColor: 'rgba(19, 218, 254, 0.3)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });
    
        $('#sparkline5').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
            type: 'line',
            width: '100%',
            height: '160',
            chartRangeMax: 40,
            lineColor: '#6164c1',
            fillColor: 'rgba(97, 100, 193, 0.3)',
            composite: true,
            resize: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });
		$('#sparkline6').sparkline([5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10], {
            type: 'bar',
            height: '45',
            barWidth: '7',
            barSpacing: '4',
            barColor: '#13dafe'
        });
        $("#sparkline7").sparkline([0,2,8,6,8,5,6,4,8,6,4,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#ffca4a',
            fillColor: '#ffca4a',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#4f4f4f'
        });
        $("#sparkline8").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#ff7676',
            fillColor: '#ff7676',
            maxSpotColor: '#ff7676',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#ff7676'
        });
        $("#sparkline9").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#2cabe3',
            fillColor: '#2cabe3',
            minSpotColor:'#2cabe3',
            maxSpotColor: '#2cabe3',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#2cabe3'
        });
        $("#sparkline10").sparkline([2,4,4,6,8,5,6,4,8,6,6,2], {
            type: 'line',
            width: '100%',
            height: '50',
            lineColor: '#6164c1',
            fillColor: '#6164c1',
            maxSpotColor: '#6164c1',
            highlightLineColor: 'rgba(0, 0, 0, 0.2)',
            highlightSpotColor: '#6164c1'
        });
        $('#sparkline11').sparkline([20, 40, 30], {
            type: 'pie',
            height: '200',
            resize: true,
            sliceColors: ['#13dafe', '#6164c1', '#f1f2f7']
        });
        
        $("#sparkline12").sparkline([5,6,2,8,9,4,7,10,11,12,10,4,7,10], {
        type: 'bar',
        height: '200',
        barWidth: 10,
        barSpacing: 7,
        barColor: '#99d683'
        });

         $('#sparkline13').sparkline([5, 6, 2, 9, 4, 7, 10, 12,4,7,10], {
            type: 'bar',
            height: '200',
            barWidth: '10',
            resize: true,
            barSpacing: '7',
            barColor: '#f96262'
        });
         $('#sparkline13').sparkline([5, 6, 2, 9, 4, 7, 10, 12,4,7,10], {
            type: 'line',
            height: '200',
            lineColor: '#f96262',
            fillColor: 'transparent',
            composite: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)'
        });
         $("#sparkline14").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
            type: 'line',
            width: '100%',
            height: '200',
            lineColor: '#fff',
            fillColor: 'transparent',
            spotColor: '#fff',
            minSpotColor: undefined,
            maxSpotColor: undefined,
            highlightSpotColor: undefined,
            highlightLineColor: undefined
        }); 
         $('#sparkline15').sparkline([5, 6, 2, 8, 9, 4, 7, 10, 11, 12, 10, 9, 4, 7], {
            type: 'bar',
            height: '200',
            barWidth: '10',
            barSpacing: '10',
            barColor: '#13dafe'
        });
		$('#sparkline16').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
            type: 'line',
            width: '100%',
            height: '200',
            chartRangeMax: 50,
            resize: true,
            lineColor: '#13dafe',
            fillColor: 'rgba(19, 218, 254, 0.3)',
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });
    
        $('#sparkline16').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
            type: 'line',
            width: '100%',
            height: '200',
            chartRangeMax: 40,
            lineColor: '#6164c1',
            fillColor: 'rgba(97, 100, 193, 0.3)',
            composite: true,
            resize: true,
            highlightLineColor: 'rgba(0,0,0,.1)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
        });
       
        $('#sparklinedash').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#00c292'
        });
         $('#sparklinedash2').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#ab8ce4'
        });
          $('#sparklinedash3').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#03a9f3'
        });
           $('#sparklinedash4').sparkline([ 0, 5, 6, 10, 9, 12, 4, 9], {
            type: 'bar',
            height: '30',
            barWidth: '4',
            resize: true,
            barSpacing: '5',
            barColor: '#fb9678'
        });
        
   
   }
    var sparkResize;
 
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(sparklineLogin, 500);
        });
        sparklineLogin();

});;
$(document).ready(function(){"use strict";var e=$("body");$(function(){$(".preloader").fadeOut(),$("#side-menu").metisMenu()}),$(".open-close").on("click",function(){e.toggleClass("show-sidebar").toggleClass("hide-sidebar"),$(".sidebar-head .open-close i").toggleClass("ti-menu")}),$(".right-side-toggle").on("click",function(){$(".right-sidebar").slideDown(50).toggleClass("shw-rside"),$(".fxhdr").on("click",function(){e.toggleClass("fix-header")}),$(".fxsdr").on("click",function(){e.toggleClass("fix-sidebar")});var i=$(".fxhdr");e.hasClass("fix-header")?i.attr("checked",!0):i.attr("checked",!1)}),$(function(){var i=function(){var i=60,l=window.innerWidth>0?window.innerWidth:this.screen.width,s=(window.innerHeight>0?window.innerHeight:this.screen.height)-1;768>l?($("div.navbar-collapse").addClass("collapse"),i=100):$("div.navbar-collapse").removeClass("collapse"),1170>l?(e.addClass("content-wrapper"),$(".sidebar-nav, .slimScrollDiv").css("overflow-x","visible").parent().css("overflow","visible")):e.removeClass("content-wrapper"),s-=i,1>s&&(s=1),s>i&&$("#page-wrapper").css("min-height",s+"px")},l=window.location,s=$("ul.nav a").filter(function(){return this.href===l||0===l.href.indexOf(this.href)}).addClass("active").parent().parent().addClass("in").parent();s.is("li")&&s.addClass("active"),$(window).ready(i),$(window).bind("resize",i)}),function(e,i,l){var s='[data-perform="panel-collapse"]',n='[data-perform="panel-dismiss"]';e(s).each(function(){var i={toggle:!1},l=e(this).closest(".panel"),s=l.find(".panel-wrapper"),n=e(this).children("i");s.length||(s=l.children(".panel-heading").nextAll().wrapAll("<div/>").parent().addClass("panel-wrapper"),i={}),s.collapse(i).on("hide.bs.collapse",function(){n.removeClass("ti-minus").addClass("ti-plus")}).on("show.bs.collapse",function(){n.removeClass("ti-plus").addClass("ti-minus")})}),e(l).on("click",s,function(i){i.preventDefault();var l=e(this).closest(".panel"),s=l.find(".panel-wrapper");s.collapse("toggle")}),e(l).on("click",n,function(i){function s(){var i=l.parent();l.remove(),i.filter(function(){return e(this).is('[class*="col-"]')&&0===e(this).children("*").length}).remove()}i.preventDefault();var l=e(this).closest(".panel");s()})}(jQuery,window,document),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(function(){$('[data-toggle="popover"]').popover()}),$(".list-task li label").on("click",function(){$(this).toggleClass("task-done")}),$(".settings_box a").on("click",function(){$("ul.theme_color").toggleClass("theme_block")}),$(".collapseble").on("click",function(){$(".collapseblebox").fadeToggle(350)}),$(".slimscrollright").slimScroll({height:"100%",position:"right",size:"5px",color:"#dcdcdc"}),$(".slimscrollsidebar").slimScroll({height:"100%",position:"left",size:"6px",color:"rgba(0,0,0,0.5)"}),$(".chat-list").slimScroll({height:"100%",position:"right",size:"0px",color:"#dcdcdc"}),e.trigger("resize"),$(".visited li a").on("click",function(e){$(".visited li").removeClass("active");var i=$(this).parent();i.hasClass("active")||i.addClass("active"),e.preventDefault()}),$("#to-recover").on("click",function(){$("#loginform").slideUp(),$("#recoverform").fadeIn()}),$(".navbar-toggle").on("click",function(){$(".navbar-toggle i").toggleClass("ti-menu").addClass("ti-close")})});;
$(document).ready(function () {
    "use strict";
    $(".counter").counterUp({
        delay: 100,
        time: 1200
    });

    $('.vcarousel').carousel({
        interval: 3000
    })
    $('#usa').vectorMap({
        map: 'us_aea_en',
        markers: [
            {
                latLng: [36.77, -119.41],
                name: 'California visit : 250'

      },
            {
                latLng: [34.15, -105],
                name: 'New Maxico visit : 250'

      },
            {
                latLng: [41.49, -99.90],
                name: 'Nebraska visit   : 1250'

      },
            {
                latLng: [25.20, 55.27],
                name: 'UAE : 250'

      }],

        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: '#2cabe3'
            }
        }
    });

    //ct-weather
    new Chartist.Line('#ct-city-wth', {
        labels: ['12AM', '2AM', '6AM', '9AM', '12AM', '3PM', '6PM', '9PM'],
        series: [
    [5, 2, 7, 4, 5, 3, 5, 4]
  ]
    }, {
        chartPadding: {
            left: -20,
            top: 10,
        },
        low: 1,
        showPoint: true,
        fullWidth: true,
        plugins: [
    Chartist.plugins.tooltip()
  ],
        axisX: {
            showLabel: true,
            showGrid: false
        },
        axisY: {
            showLabel: false,
            showGrid: false
        },
        showArea: true
    });
});
;
// Theme color settings
$(document).ready(function () {
    function store(name, val) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(name, val);
        } else {
            window.alert('Please use a modern browser to properly view this template!');
        }
    }
    $("*[data-theme]").click(function (e) {
        e.preventDefault();
        var currentStyle = $(this).attr('data-theme');
        store('theme', currentStyle);
        $('#theme').attr({
            href: 'css/colors/' + currentStyle + '.css'
        })
    });

    var currentTheme = get('theme');
    if (currentTheme) {
        $('#theme').attr({
            href: 'css/colors/' + currentTheme + '.css'
        });
    }
    // color selector
    $('#themecolors').on('click', 'a', function () {
        $('#themecolors li a').removeClass('working');
        $(this).addClass('working')
    });

});

function get(name) {

}

$(document).ready(function () {
    $("*[data-theme]").click(function (e) {
        e.preventDefault();
        var currentStyle = $(this).attr('data-theme');
        store('theme', currentStyle);
        $('#theme').attr({
            href: 'css/colors/' + currentStyle + '.css'
        })
    });

    var currentTheme = get('theme');
    if (currentTheme) {
        $('#theme').attr({
            href: 'css/colors/' + currentTheme + '.css'
        });
    }
    // color selector
    $('#themecolors').on('click', 'a', function () {
        $('#themecolors li a').removeClass('working');
        $(this).addClass('working')
    });
});
