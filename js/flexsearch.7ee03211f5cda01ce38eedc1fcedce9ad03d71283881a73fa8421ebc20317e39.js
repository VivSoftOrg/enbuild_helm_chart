(()=>{var nt=Object.create;var $=Object.defineProperty;var it=Object.getOwnPropertyDescriptor;var st=Object.getOwnPropertyNames;var rt=Object.getPrototypeOf,ot=Object.prototype.hasOwnProperty;var ht=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var lt=(e,n,i,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of st(n))!ot.call(e,r)&&r!==i&&$(e,r,{get:()=>n[r],enumerable:!(s=it(n,r))||s.enumerable});return e};var ct=(e,n,i)=>(i=e!=null?nt(rt(e)):{},lt(n||!e||!e.__esModule?$(i,"default",{value:e,enumerable:!0}):i,e));var tt=ht((exports,module)=>{(function _f(self){"use strict";try{module&&(self=module)}catch(e){}self._factory=_f;var t;function u(e){return typeof e!="undefined"?e:!0}function aa(e){let n=Array(e);for(let i=0;i<e;i++)n[i]=v();return n}function v(){return Object.create(null)}function ba(e,n){return n.length-e.length}function x(e){return typeof e=="string"}function C(e){return typeof e=="object"}function D(e){return typeof e=="function"}function ca(e,n){var i=da;if(e&&(n&&(e=E(e,n)),this.H&&(e=E(e,this.H)),this.J&&1<e.length&&(e=E(e,this.J)),i||i==="")){if(e=e.split(i),this.filter){n=this.filter,i=e.length;let s=[];for(let r=0,o=0;r<i;r++){let h=e[r];h&&!n[h]&&(s[o++]=h)}e=s}return e}return e}let da=/[\p{Z}\p{S}\p{P}\p{C}]+/u,ea=/[\u0300-\u036f]/g;function fa(e,n){let i=Object.keys(e),s=i.length,r=[],o="",h=0;for(let l=0,f,m;l<s;l++)f=i[l],(m=e[f])?(r[h++]=F(n?"(?!\\b)"+f+"(\\b|_)":f),r[h++]=m):o+=(o?"|":"")+f;return o&&(r[h++]=F(n?"(?!\\b)("+o+")(\\b|_)":"("+o+")"),r[h]=""),r}function E(e,n){for(let i=0,s=n.length;i<s&&(e=e.replace(n[i],n[i+1]),e);i+=2);return e}function F(e){return new RegExp(e,"g")}function ha(e){let n="",i="";for(let s=0,r=e.length,o;s<r;s++)(o=e[s])!==i&&(n+=i=o);return n}var ja={encode:ia,F:!1,G:""};function ia(e){return ca.call(this,(""+e).toLowerCase(),!1)}let ka={},G={};function la(e){I(e,"add"),I(e,"append"),I(e,"search"),I(e,"update"),I(e,"remove")}function I(e,n){e[n+"Async"]=function(){let i=this,s=arguments;var r=s[s.length-1];let o;return D(r)&&(o=r,delete s[s.length-1]),r=new Promise(function(h){setTimeout(function(){i.async=!0;let l=i[n].apply(i,s);i.async=!1,h(l)})}),o?(r.then(o),this):r}}function ma(e,n,i,s){let r=e.length,o=[],h,l,f=0;s&&(s=[]);for(let m=r-1;0<=m;m--){let p=e[m],q=p.length,y=v(),k=!h;for(let g=0;g<q;g++){let w=p[g],j=w.length;if(j)for(let z=0,B,A;z<j;z++)if(A=w[z],h){if(h[A]){if(!m){if(i)i--;else if(o[f++]=A,f===n)return o}(m||s)&&(y[A]=1),k=!0}if(s&&(B=(l[A]||0)+1,l[A]=B,B<r)){let H=s[B-2]||(s[B-2]=[]);H[H.length]=A}}else y[A]=1}if(s)h||(l=y);else if(!k)return[];h=y}if(s)for(let m=s.length-1,p,q;0<=m;m--){p=s[m],q=p.length;for(let y=0,k;y<q;y++)if(k=p[y],!h[k]){if(i)i--;else if(o[f++]=k,f===n)return o;h[k]=1}}return o}function na(e,n){let i=v(),s=v(),r=[];for(let o=0;o<e.length;o++)i[e[o]]=1;for(let o=0,h;o<n.length;o++){h=n[o];for(let l=0,f;l<h.length;l++)f=h[l],i[f]&&!s[f]&&(s[f]=1,r[r.length]=f)}return r}function J(e){this.l=e!==!0&&e,this.cache=v(),this.h=[]}function oa(e,n,i){C(e)&&(e=e.query);let s=this.cache.get(e);return s||(s=this.search(e,n,i),this.cache.set(e,s)),s}J.prototype.set=function(e,n){if(!this.cache[e]){var i=this.h.length;for(i===this.l?delete this.cache[this.h[i-1]]:i++,--i;0<i;i--)this.h[i]=this.h[i-1];this.h[0]=e}this.cache[e]=n},J.prototype.get=function(e){let n=this.cache[e];if(this.l&&n&&(e=this.h.indexOf(e))){let i=this.h[e-1];this.h[e-1]=this.h[e],this.h[e]=i}return n};let qa={memory:{charset:"latin:extra",D:3,B:4,m:!1},performance:{D:3,B:3,s:!1,context:{depth:2,D:1}},match:{charset:"latin:extra",G:"reverse"},score:{charset:"latin:advanced",D:20,B:3,context:{depth:3,D:9}},default:{}};function ra(e,n,i,s,r,o,h){setTimeout(function(){let l=e(i?i+"."+s:s,JSON.stringify(h));l&&l.then?l.then(function(){n.export(e,n,i,r,o+1)}):n.export(e,n,i,r,o+1)})}function K(e,n){if(!(this instanceof K))return new K(e);var i;if(e){x(e)?e=qa[e]:(i=e.preset)&&(e=Object.assign({},i[i],e)),i=e.charset;var s=e.lang;x(i)&&(i.indexOf(":")===-1&&(i+=":default"),i=G[i]),x(s)&&(s=ka[s])}else e={};let r,o,h=e.context||{};if(this.encode=e.encode||i&&i.encode||ia,this.register=n||v(),this.D=r=e.resolution||9,this.G=n=i&&i.G||e.tokenize||"strict",this.depth=n==="strict"&&h.depth,this.l=u(h.bidirectional),this.s=o=u(e.optimize),this.m=u(e.fastupdate),this.B=e.minlength||1,this.C=e.boost,this.map=o?aa(r):v(),this.A=r=h.resolution||1,this.h=o?aa(r):v(),this.F=i&&i.F||e.rtl,this.H=(n=e.matcher||s&&s.H)&&fa(n,!1),this.J=(n=e.stemmer||s&&s.J)&&fa(n,!0),i=n=e.filter||s&&s.filter){i=n,s=v();for(let l=0,f=i.length;l<f;l++)s[i[l]]=1;i=s}this.filter=i,this.cache=(n=e.cache)&&new J(n)}t=K.prototype,t.append=function(e,n){return this.add(e,n,!0)},t.add=function(e,n,i,s){if(n&&(e||e===0)){if(!s&&!i&&this.register[e])return this.update(e,n);if(n=this.encode(n),s=n.length){let m=v(),p=v(),q=this.depth,y=this.D;for(let k=0;k<s;k++){let g=n[this.F?s-1-k:k];var r=g.length;if(g&&r>=this.B&&(q||!p[g])){var o=L(y,s,k),h="";switch(this.G){case"full":if(2<r){for(o=0;o<r;o++)for(var l=r;l>o;l--)if(l-o>=this.B){var f=L(y,s,k,r,o);h=g.substring(o,l),M(this,p,h,f,e,i)}break}case"reverse":if(1<r){for(l=r-1;0<l;l--)h=g[l]+h,h.length>=this.B&&M(this,p,h,L(y,s,k,r,l),e,i);h=""}case"forward":if(1<r){for(l=0;l<r;l++)h+=g[l],h.length>=this.B&&M(this,p,h,o,e,i);break}default:if(this.C&&(o=Math.min(o/this.C(n,g,k)|0,y-1)),M(this,p,g,o,e,i),q&&1<s&&k<s-1){for(r=v(),h=this.A,o=g,l=Math.min(q+1,s-k),r[o]=1,f=1;f<l;f++)if((g=n[this.F?s-1-k-f:k+f])&&g.length>=this.B&&!r[g]){r[g]=1;let w=this.l&&g>o;M(this,m,w?o:g,L(h+(s/2>h?0:1),s,k,l-1,f-1),e,i,w?g:o)}}}}}this.m||(this.register[e]=1)}}return this};function L(e,n,i,s,r){return i&&1<e?n+(s||0)<=e?i+(r||0):(e-1)/(n+(s||0))*(i+(r||0))+1|0:0}function M(e,n,i,s,r,o,h){let l=h?e.h:e.map;(!n[i]||h&&!n[i][h])&&(e.s&&(l=l[s]),h?(n=n[i]||(n[i]=v()),n[h]=1,l=l[h]||(l[h]=v())):n[i]=1,l=l[i]||(l[i]=[]),e.s||(l=l[s]||(l[s]=[])),o&&l.includes(r)||(l[l.length]=r,e.m&&(e=e.register[r]||(e.register[r]=[]),e[e.length]=l)))}t.search=function(e,n,i){i||(!n&&C(e)?(i=e,e=i.query):C(n)&&(i=n));let s=[],r,o,h=0;if(i){e=i.query||e,n=i.limit,h=i.offset||0;var l=i.context;o=i.suggest}if(e&&(e=this.encode(""+e),r=e.length,1<r)){i=v();var f=[];for(let p=0,q=0,y;p<r;p++)if((y=e[p])&&y.length>=this.B&&!i[y])if(this.s||o||this.map[y])f[q++]=y,i[y]=1;else return s;e=f,r=e.length}if(!r)return s;n||(n=100),l=this.depth&&1<r&&l!==!1,i=0;let m;l?(m=e[0],i=1):1<r&&e.sort(ba);for(let p,q;i<r;i++){if(q=e[i],l?(p=sa(this,s,o,n,h,r===2,q,m),o&&p===!1&&s.length||(m=q)):p=sa(this,s,o,n,h,r===1,q),p)return p;if(o&&i===r-1){if(f=s.length,!f){if(l){l=0,i=-1;continue}return s}if(f===1)return ta(s[0],n,h)}}return ma(s,n,h,o)};function sa(e,n,i,s,r,o,h,l){let f=[],m=l?e.h:e.map;if(e.s||(m=ua(m,h,l,e.l)),m){let p=0,q=Math.min(m.length,l?e.A:e.D);for(let y=0,k=0,g,w;y<q&&!((g=m[y])&&(e.s&&(g=ua(g,h,l,e.l)),r&&g&&o&&(w=g.length,w<=r?(r-=w,g=null):(g=g.slice(r),r=0)),g&&(f[p++]=g,o&&(k+=g.length,k>=s))));y++);if(p){if(o)return ta(f,s,0);n[n.length]=f;return}}return!i&&f}function ta(e,n,i){return e=e.length===1?e[0]:[].concat.apply([],e),i||e.length>n?e.slice(i,i+n):e}function ua(e,n,i,s){return i?(s=s&&n>i,e=(e=e[s?n:i])&&e[s?i:n]):e=e[n],e}t.contain=function(e){return!!this.register[e]},t.update=function(e,n){return this.remove(e).add(e,n)},t.remove=function(e,n){let i=this.register[e];if(i){if(this.m)for(let s=0,r;s<i.length;s++)r=i[s],r.splice(r.indexOf(e),1);else N(this.map,e,this.D,this.s),this.depth&&N(this.h,e,this.A,this.s);if(n||delete this.register[e],this.cache){n=this.cache;for(let s=0,r,o;s<n.h.length;s++)o=n.h[s],r=n.cache[o],r.includes(e)&&(n.h.splice(s--,1),delete n.cache[o])}}return this};function N(e,n,i,s,r){let o=0;if(e.constructor===Array)if(r)n=e.indexOf(n),n!==-1?1<e.length&&(e.splice(n,1),o++):o++;else{r=Math.min(e.length,i);for(let h=0,l;h<r;h++)(l=e[h])&&(o=N(l,n,i,s,r),s||o||delete e[h])}else for(let h in e)(o=N(e[h],n,i,s,r))||delete e[h];return o}t.searchCache=oa,t.export=function(e,n,i,s,r){let o,h;switch(r||(r=0)){case 0:if(o="reg",this.m){h=v();for(let l in this.register)h[l]=1}else h=this.register;break;case 1:o="cfg",h={doc:0,opt:this.s?1:0};break;case 2:o="map",h=this.map;break;case 3:o="ctx",h=this.h;break;default:return}return ra(e,n||this,i,o,s,r,h),!0},t.import=function(e,n){if(n)switch(x(n)&&(n=JSON.parse(n)),e){case"cfg":this.s=!!n.opt;break;case"reg":this.m=!1,this.register=n;break;case"map":this.map=n;break;case"ctx":this.h=n}},la(K.prototype);function va(e){e=e.data;var n=self._index;let i=e.args;var s=e.task;switch(s){case"init":s=e.options||{},e=e.factory,n=s.encode,s.cache=!1,n&&n.indexOf("function")===0&&(s.encode=Function("return "+n)()),e?(Function("return "+e)()(self),self._index=new self.FlexSearch.Index(s),delete self.FlexSearch):self._index=new K(s);break;default:e=e.id,n=n[s].apply(n,i),postMessage(s==="search"?{id:e,msg:n}:{id:e})}}let wa=0;function O(e){if(!(this instanceof O))return new O(e);var n;e?D(n=e.encode)&&(e.encode=n.toString()):e={},(n=(self||window)._factory)&&(n=n.toString());let i=typeof window=="undefined"&&self.exports,s=this;this.o=xa(n,i,e.worker),this.h=v(),this.o&&(i?this.o.on("message",function(r){s.h[r.id](r.msg),delete s.h[r.id]}):this.o.onmessage=function(r){r=r.data,s.h[r.id](r.msg),delete s.h[r.id]},this.o.postMessage({task:"init",factory:n,options:e}))}P("add"),P("append"),P("search"),P("update"),P("remove");function P(e){O.prototype[e]=O.prototype[e+"Async"]=function(){let n=this,i=[].slice.call(arguments);var s=i[i.length-1];let r;return D(s)&&(r=s,i.splice(i.length-1,1)),s=new Promise(function(o){setTimeout(function(){n.h[++wa]=o,n.o.postMessage({task:e,id:wa,args:i})})}),r?(s.then(r),this):s}}function xa(a,b,c){let d;try{d=b?eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")'):a?new Worker(URL.createObjectURL(new Blob(["onmessage="+va.toString()],{type:"text/javascript"}))):new Worker(x(c)?c:"worker/worker.js",{type:"module"})}catch(e){}return d}function Q(e){if(!(this instanceof Q))return new Q(e);var n=e.document||e.doc||e,i;this.K=[],this.h=[],this.A=[],this.register=v(),this.key=(i=n.key||n.id)&&S(i,this.A)||"id",this.m=u(e.fastupdate),this.C=(i=n.store)&&i!==!0&&[],this.store=i&&v(),this.I=(i=n.tag)&&S(i,this.A),this.l=i&&v(),this.cache=(i=e.cache)&&new J(i),e.cache=!1,this.o=e.worker,this.async=!1,i=v();let s=n.index||n.field||n;x(s)&&(s=[s]);for(let r=0,o,h;r<s.length;r++)o=s[r],x(o)||(h=o,o=o.field),h=C(h)?Object.assign({},e,h):e,this.o&&(i[o]=new O(h),i[o].o||(this.o=!1)),this.o||(i[o]=new K(h,this.register)),this.K[r]=S(o,this.A),this.h[r]=o;if(this.C)for(e=n.store,x(e)&&(e=[e]),n=0;n<e.length;n++)this.C[n]=S(e[n],this.A);this.index=i}function S(e,n){let i=e.split(":"),s=0;for(let r=0;r<i.length;r++)e=i[r],0<=e.indexOf("[]")&&(e=e.substring(0,e.length-2))&&(n[s]=!0),e&&(i[s++]=e);return s<i.length&&(i.length=s),1<s?i:i[0]}function T(e,n){if(x(n))e=e[n];else for(let i=0;e&&i<n.length;i++)e=e[n[i]];return e}function U(e,n,i,s,r){if(e=e[r],s===i.length-1)n[r]=e;else if(e)if(e.constructor===Array)for(n=n[r]=Array(e.length),r=0;r<e.length;r++)U(e,n,i,s,r);else n=n[r]||(n[r]=v()),r=i[++s],U(e,n,i,s,r)}function V(e,n,i,s,r,o,h,l){if(e=e[h])if(s===n.length-1){if(e.constructor===Array){if(i[s]){for(n=0;n<e.length;n++)r.add(o,e[n],!0,!0);return}e=e.join(" ")}r.add(o,e,l,!0)}else if(e.constructor===Array)for(h=0;h<e.length;h++)V(e,n,i,s,r,o,h,l);else h=n[++s],V(e,n,i,s,r,o,h,l)}t=Q.prototype,t.add=function(e,n,i){if(C(e)&&(n=e,e=T(n,this.key)),n&&(e||e===0)){if(!i&&this.register[e])return this.update(e,n);for(let s=0,r,o;s<this.h.length;s++)o=this.h[s],r=this.K[s],x(r)&&(r=[r]),V(n,r,this.A,0,this.index[o],e,r[0],i);if(this.I){let s=T(n,this.I),r=v();x(s)&&(s=[s]);for(let o=0,h,l;o<s.length;o++)if(h=s[o],!r[h]&&(r[h]=1,l=this.l[h]||(this.l[h]=[]),!i||!l.includes(e))&&(l[l.length]=e,this.m)){let f=this.register[e]||(this.register[e]=[]);f[f.length]=l}}if(this.store&&(!i||!this.store[e])){let s;if(this.C){s=v();for(let r=0,o;r<this.C.length;r++)o=this.C[r],x(o)?s[o]=n[o]:U(n,s,o,0,o[0])}this.store[e]=s||n}}return this},t.append=function(e,n){return this.add(e,n,!0)},t.update=function(e,n){return this.remove(e).add(e,n)},t.remove=function(e){if(C(e)&&(e=T(e,this.key)),this.register[e]){for(var n=0;n<this.h.length&&(this.index[this.h[n]].remove(e,!this.o),!this.m);n++);if(this.I&&!this.m)for(let i in this.l){n=this.l[i];let s=n.indexOf(e);s!==-1&&(1<n.length?n.splice(s,1):delete this.l[i])}this.store&&delete this.store[e],delete this.register[e]}return this},t.search=function(e,n,i,s){i||(!n&&C(e)?(i=e,e=""):C(n)&&(i=n,n=0));let r=[],o=[],h,l,f,m,p,q,y=0;if(i)if(i.constructor===Array)f=i,i=null;else{if(e=i.query||e,f=(h=i.pluck)||i.index||i.field,m=i.tag,l=this.store&&i.enrich,p=i.bool==="and",n=i.limit||n||100,q=i.offset||0,m&&(x(m)&&(m=[m]),!e)){for(let g=0,w;g<m.length;g++)(w=ya.call(this,m[g],n,q,l))&&(r[r.length]=w,y++);return y?r:[]}x(f)&&(f=[f])}f||(f=this.h),p=p&&(1<f.length||m&&1<m.length);let k=!s&&(this.o||this.async)&&[];for(let g=0,w,j,z;g<f.length;g++){let B;if(j=f[g],x(j)||(B=j,j=B.field,e=B.query||e,n=B.limit||n),k)k[g]=this.index[j].searchAsync(e,n,B||i);else{if(s?w=s[g]:w=this.index[j].search(e,n,B||i),z=w&&w.length,m&&z){let A=[],H=0;p&&(A[0]=[w]);for(let R=0,X,_;R<m.length;R++)X=m[R],(z=(_=this.l[X])&&_.length)&&(H++,A[A.length]=p?[_]:_);H&&(w=p?ma(A,n||100,q||0):na(w,A),z=w.length)}if(z)o[y]=j,r[y++]=w;else if(p)return[]}}if(k){let g=this;return new Promise(function(w){Promise.all(k).then(function(j){w(g.search(e,n,i,j))})})}if(!y)return[];if(h&&(!l||!this.store))return r[0];for(let g=0,w;g<o.length;g++){if(w=r[g],w.length&&l&&(w=za.call(this,w)),h)return w;r[g]={field:o[g],result:w}}return r};function ya(e,n,i,s){let r=this.l[e],o=r&&r.length-i;if(o&&0<o)return(o>n||i)&&(r=r.slice(i,i+n)),s&&(r=za.call(this,r)),{tag:e,result:r}}function za(e){let n=Array(e.length);for(let i=0,s;i<e.length;i++)s=e[i],n[i]={id:s,doc:this.store[s]};return n}t.contain=function(e){return!!this.register[e]},t.get=function(e){return this.store[e]},t.set=function(e,n){return this.store[e]=n,this},t.searchCache=oa,t.export=function(e,n,i,s,r){if(r||(r=0),s||(s=0),s<this.h.length){let o=this.h[s],h=this.index[o];n=this,setTimeout(function(){h.export(e,n,r?o:"",s,r++)||(s++,r=1,n.export(e,n,o,s,r))})}else{let o,h;switch(r){case 1:o="tag",h=this.l;break;case 2:o="store",h=this.store;break;default:return}ra(e,this,i,o,s,r,h)}},t.import=function(e,n){if(n)switch(x(n)&&(n=JSON.parse(n)),e){case"tag":this.l=n;break;case"reg":this.m=!1,this.register=n;for(let s=0,r;s<this.h.length;s++)r=this.index[this.h[s]],r.register=n,r.m=!1;break;case"store":this.store=n;break;default:e=e.split(".");let i=e[0];e=e[1],i&&e&&this.index[i].import(e,n)}},la(Q.prototype);var Ba={encode:Aa,F:!1,G:""};let Ca=[F("[\xE0\xE1\xE2\xE3\xE4\xE5]"),"a",F("[\xE8\xE9\xEA\xEB]"),"e",F("[\xEC\xED\xEE\xEF]"),"i",F("[\xF2\xF3\xF4\xF5\xF6\u0151]"),"o",F("[\xF9\xFA\xFB\xFC\u0171]"),"u",F("[\xFD\u0177\xFF]"),"y",F("\xF1"),"n",F("[\xE7c]"),"k",F("\xDF"),"s",F(" & ")," and "];function Aa(e){var n=e=""+e;return n.normalize&&(n=n.normalize("NFD").replace(ea,"")),ca.call(this,n.toLowerCase(),!e.normalize&&Ca)}var Ea={encode:Da,F:!1,G:"strict"};let Fa=/[^a-z0-9]+/,Ga={b:"p",v:"f",w:"f",z:"s",x:"s",\u00DF:"s",d:"t",n:"m",c:"k",g:"k",j:"k",q:"k",i:"e",y:"e",u:"o"};function Da(e){e=Aa.call(this,e).join(" ");let n=[];if(e){let i=e.split(Fa),s=i.length;for(let r=0,o,h=0;r<s;r++)if((e=i[r])&&(!this.filter||!this.filter[e])){o=e[0];let l=Ga[o]||o,f=l;for(let m=1;m<e.length;m++){o=e[m];let p=Ga[o]||o;p&&p!==f&&(l+=p,f=p)}n[h++]=l}}return n}var Ia={encode:Ha,F:!1,G:""};let Ja=[F("ae"),"a",F("oe"),"o",F("sh"),"s",F("th"),"t",F("ph"),"f",F("pf"),"f",F("(?![aeo])h(?![aeo])"),"",F("(?!^[aeo])h(?!^[aeo])"),""];function Ha(e,n){return e&&(e=Da.call(this,e).join(" "),2<e.length&&(e=E(e,Ja)),n||(1<e.length&&(e=ha(e)),e&&(e=e.split(" ")))),e||[]}var La={encode:Ka,F:!1,G:""};let Ma=F("(?!\\b)[aeo]");function Ka(e){return e&&(e=Ha.call(this,e,!0),1<e.length&&(e=e.replace(Ma,"")),1<e.length&&(e=ha(e)),e&&(e=e.split(" "))),e||[]}G["latin:default"]=ja,G["latin:simple"]=Ba,G["latin:balance"]=Ea,G["latin:advanced"]=Ia,G["latin:extra"]=La;let W=self,Y,Z={Index:K,Document:Q,Worker:O,registerCharset:function(e,n){G[e]=n},registerLanguage:function(e,n){ka[e]=n}};(Y=W.define)&&Y.amd?Y([],function(){return Z}):W.exports?W.exports=Z:W.FlexSearch=Z})(exports)});var et=ct(tt());(function(){"use strict";let e=new et.Document({tokenize:"forward",document:{id:"id",index:[{field:"title"},{field:"tags"},{field:"content"},{field:"date",tokenize:"strict",encode:!1}],store:["title","summary","date","permalink"]}});function n(o){let h=document.querySelector("template").content,l=document.createDocumentFragment(),f=document.querySelector(".search-results");f.textContent="";let m=Object.keys(o).length;if(m===0&&query.value==="")document.querySelector(".search-no-results").classList.add("d-none"),document.querySelector(".search-no-recent").classList.remove("d-none");else if(m===0&&query.value!==""){document.querySelector(".search-no-recent").classList.add("d-none");let p=document.querySelector(".query-no-results");p.innerText=query.value,document.querySelector(".search-no-results").classList.remove("d-none")}else document.querySelector(".search-no-recent").classList.add("d-none"),document.querySelector(".search-no-results").classList.add("d-none");for(let p in o){let q=o[p],y=h.cloneNode(!0),k=y.querySelector("a"),g=y.querySelector("time"),w=y.querySelector(".content");k.innerHTML=q.title,k.href=q.permalink,g.innerText=q.date,w.innerHTML=q.summary,l.appendChild(y)}f.appendChild(l)}function i(){let o=document.querySelector(".search-text").value.trim(),h=99,l=e.search({query:o,enrich:!0,limit:h}),f={};l.forEach(function(m){m.result.forEach(function(p){f[p.id]=p.doc})}),n(f)}function s(){let o=document.querySelector(".search-form");o.addEventListener("submit",function(h){h.preventDefault(),i()}),o.addEventListener("input",function(){i()}),document.querySelector(".search-loading").classList.add("d-none"),document.querySelector(".search-input").classList.remove("d-none"),document.querySelector(".search-text").focus()}function r(){document.querySelector(".search-loading").classList.remove("d-none"),fetch("https://enbuild-docs.vivplatform.io///search-index.json").then(function(o){return o.json()}).then(function(o){o.forEach(function(h){e.add(h)})})}r(),s()})();})();
/*!
 * FlexSearch for Bootstrap based Hyas sites
 * Copyright 2021-2023 Hyas
 * Licensed under the MIT License
 * Based on https://github.com/frjo/hugo-theme-zen/blob/main/assets/js/search.js
 */
