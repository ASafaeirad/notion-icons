/* Qwik Service Worker */
const appBundles=[["q-113cdce3.js",[3,11]],["q-19c550a6.js",[3,11],["J3jpcJ8Bvak"]],["q-1c309923.js",[3,11],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-1ca72397.js",[]],["q-27376052.js",[3,11],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-3578287f.js",[3]],["q-36ad8002.js",[3]],["q-3b780309.js",[3,6,15],["HRg8c9dUZLg","XcmIcd8aSGI"]],["q-45aab3b6.js",[]],["q-45b42ddb.js",[3,11],["wOIPfiQ04l4"]],["q-461d711c.js",[3]],["q-4e78acce.js",[3]],["q-63ab2ae1.js",[3,11],["eBQ0vFsFKsk"]],["q-883a1236.js",[3,15],["BTQ5hanayWk","dEk0g6okJ5s","g9chCbx9taE"]],["q-91727e05.js",[3,15],["q5aRC0Bsbdo"]],["q-aa2e362f.js",[]],["q-ab37af2e.js",[3,11],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-b5a6659d.js",[3,11],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-c0d98ce7.js",[3,11],["9RX005qEwc0"]],["q-c259d734.js",[3,11],["e0ssiDXoeAM"]],["q-de3a49a7.js",[3],["A5bZC7WO00A"]],["q-de931fc5.js",[3,15],["lvFkfPZJWzg","oDjx8saEFV0","tpGRA03d8O8"]]];
const libraryBundleIds=[2];
const linkBundles=[[/^\/notion-icons\/$/,[0,14,6,7]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
