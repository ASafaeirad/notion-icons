/* Qwik Service Worker */
const appBundles=[["q-Aauhghp-.js",[15,24,27],["oDjx8saEFV0","Q7BPZptnBkU","ZRwWV8BlhpI"]],["q-aemHxinF.js",[14,15,27],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-arlqiYfo.js",[10,15,23,24,27],["lauzQ2m8DpU","NwGyN0ula80","nXbVxvAgQrs","nxYKQYixWpY","vz087uEcE4c"]],["q-B1NHAqlk.js",[14,15,27],["e0ssiDXoeAM"]],["q-B63THO_h.js",[15,27]],["q-B6V_bAri.js",[15,24,27],["BTQ5hanayWk","dEk0g6okJ5s","g9chCbx9taE"]],["q-B6YGYEPY.js",[14,15,27],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-BBaCitlZ.js",[15],["A5bZC7WO00A"]],["q-BGmpAaRo.js",[],["1RJPKHqF8AQ"]],["q-Bq36Wx9q.js",[]],["q-Bw1N2gzr.js",[15,27]],["q-C25kqWEx.js",[14,15,27],["J3jpcJ8Bvak"]],["q-CIDopH2T.js",[14,15,27],["9RX005qEwc0"]],["q-CjLzsr7P.js",[27]],["q-CkL96unL.js",[15,27]],["q-CN17xajZ.js",[]],["q-CS6LHbeR.js",[14,15,27],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-CuYPlp8j.js",[15,27]],["q-CwN3qDB9.js",[15,23,24,25,27],["cKXpSP6Swqs","e0V1ZEDQMMY","r01AEJzvFcw","vxzxCAwAFG8","XcmIcd8aSGI","ZMHGQAEu9aI","zoKs9DxdaTs"]],["q-CZyT1m5P.js",[15,24,27],["q5aRC0Bsbdo"]],["q-D-bTi8Zc.js",[15,24],["ZnYTBc5oKDA"]],["q-dBUdtEfp.js",[14,15,27],["SGytLJ8uq8I"]],["q-DJgsetcX.js",[14,15,27],["KK5BfmKH4ZI","Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-Dow28iN_.js",[15,27]],["q-DWGOuCXN.js",[]],["q-MoNVdd2Z.js",[15,27]],["q-sOIX3PSV.js",[15],["uPHV2oGn4wc"]],["q-uemlvruI.js",[]],["q-ZUV4uQ-K.js",[14,15,24,27],["WzgoStpI66w"]]];
const libraryBundleIds=[16];
const linkBundles=[[/^\/$/,[4,19,25,18]],[/^\/cover\/?$/,[4,19,10,2]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
