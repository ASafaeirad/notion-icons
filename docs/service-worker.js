/* Qwik Service Worker */
const appBundles=[["q-6Dbt-1cl.js",[10,15,17],["9RX005qEwc0"]],["q-B0Qmj_xW.js",[10,17,18],["oDjx8saEFV0","Q7BPZptnBkU","ZRwWV8BlhpI"]],["q-BBaCitlZ.js",[10],["A5bZC7WO00A"]],["q-BGmpAaRo.js",[],["1RJPKHqF8AQ"]],["q-bPEgj48t.js",[17]],["q-Bq36Wx9q.js",[]],["q-BQs1ZMCg.js",[10,17]],["q-C8T24n4Z.js",[10,17]],["q-C9Gzy3Yc.js",[10,17]],["q-CiB2naMt.js",[10,15,17],["SGytLJ8uq8I"]],["q-CN17xajZ.js",[]],["q-CpnUcQWh.js",[6,10,17,18,23],["cKXpSP6Swqs","e0V1ZEDQMMY","r01AEJzvFcw","vxzxCAwAFG8","XcmIcd8aSGI","ZMHGQAEu9aI","zoKs9DxdaTs"]],["q-CZrbqijs.js",[10,17,18],["q5aRC0Bsbdo"]],["q-D-6b7bqb.js",[10,15,17],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-D-bTi8Zc.js",[10,18],["ZnYTBc5oKDA"]],["q-DJiBfamD.js",[10,17]],["q-Dq76MdHA.js",[8,10,17,18,23],["lauzQ2m8DpU","NwGyN0ula80","nXbVxvAgQrs","nxYKQYixWpY","vz087uEcE4c"]],["q-DqZFHoEI.js",[]],["q-DWGOuCXN.js",[]],["q-EcefU-ik.js",[10,15,17,18],["WzgoStpI66w"]],["q-EVsu0UWN.js",[10,17]],["q-Hh_CeL-p.js",[10,15,17],["KK5BfmKH4ZI","Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-iDk0ngqe.js",[10,15,17],["e0ssiDXoeAM"]],["q-Lpg7oKgO.js",[10,17]],["q-Mm01VLPm.js",[10,15,17],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-Sm7ay_Sm.js",[10,17,18],["BTQ5hanayWk","dEk0g6okJ5s","g9chCbx9taE"]],["q-sOIX3PSV.js",[10],["uPHV2oGn4wc"]],["q-u0_0k5nx.js",[10,15,17],["J3jpcJ8Bvak"]],["q-wVdXLFhm.js",[10,15,17],["BUbtvTyvVRE","WmYC5H00wtI"]]];
const libraryBundleIds=[13];
const linkBundles=[[/^\/notion-icons\/$/,[20,12,6,11]],[/^\/notion-icons\/cover\/?$/,[20,12,8,16]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
