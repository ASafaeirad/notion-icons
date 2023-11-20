/* Qwik Service Worker */
const appBundles=[["q-0c8715a5.js",[]],["q-1d659b3b.js",[0,15],["eBQ0vFsFKsk"]],["q-2712730d.js",[0,15],["wOIPfiQ04l4"]],["q-33eb4434.js",[0]],["q-3e256c13.js",[0]],["q-45aab3b6.js",[]],["q-7136146a.js",[0,15],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-8c10151a.js",[0,14],["q5aRC0Bsbdo"]],["q-8d3864dc.js",[0,4,14],["12SXuLv7jVs","bnERKaYKpwU","e0V1ZEDQMMY","r01AEJzvFcw","vxzxCAwAFG8","XcmIcd8aSGI","ZMHGQAEu9aI"]],["q-98d45db5.js",[0,15],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-98e3ffbb.js",[0],["A5bZC7WO00A"]],["q-9e629e8c.js",[0,14],["lvFkfPZJWzg","oDjx8saEFV0","tpGRA03d8O8"]],["q-a1911521.js",[0,15],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-a967deca.js",[0,14],["BTQ5hanayWk","dEk0g6okJ5s","g9chCbx9taE"]],["q-aa2e362f.js",[]],["q-b74b6a89.js",[0]],["q-bd304885.js",[0,15],["e0ssiDXoeAM"]],["q-ca93792a.js",[0,15],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-d13413cb.js",[0,15],["J3jpcJ8Bvak"]],["q-e06beec0.js",[0]],["q-f11cc282.js",[0,15],["9RX005qEwc0"]],["q-fe1fda6d.js",[0,15]]];
const libraryBundleIds=[17];
const linkBundles=[[/^\/notion-icons\/$/,[21,7,4,8]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
