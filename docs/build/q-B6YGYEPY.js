import{p as P,l as y,u as S,a as k,g,s as D,b as m}from"./q-CkL96unL.js";import{u as A,e as f,f as O,a as $,d as q,q as _,S as x}from"./q-CN17xajZ.js";import{_ as u}from"./q-uemlvruI.js";const C=(o,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const s=new URL(e.href);P(s.pathname),e.hasAttribute("data-prefetch")&&y(s,e,{prefetchSymbols:!1,isPrefetch:!0})}},L=async(o,e)=>{const[t,s,n,i]=A();o.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:s,replaceState:n,scroll:i}),e.removeAttribute("aria-pressed")))},j=o=>{const e=S(),t=k(),{onClick$:s,prefetch:n,reload:i,replaceState:p,scroll:v,...r}=o,a=f(()=>g({...r,reload:i},t));r.href=a||o.href;const h=f(()=>!!a&&n!==!1&&n!=="js"&&D(a,t)||void 0),l=f(()=>h||!!a&&n!==!1&&m(a,t))?_(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_Osdg8FnYTw4"):void 0,b=a?O((c,E)=>{c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.preventDefault()}):void 0;return $("a",{"q:link":!!a,...r,"data-prefetch":h,children:q(x,null,3,"AD_0"),onClick$:[b,s,a?_(()=>u(()=>Promise.resolve().then(()=>d),void 0),"s_pIf0khHUxfY",[e,i,p,v]):void 0],onMouseOver$:[r.onMouseOver$,l],onFocus$:[r.onFocus$,l],onQVisible$:[r.onQVisible$,l]},null,0,"AD_1")},d=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:j,s_Osdg8FnYTw4:C,s_pIf0khHUxfY:L},Symbol.toStringTag,{value:"Module"}));export{j as s_8gdLBszqbaM,C as s_Osdg8FnYTw4,L as s_pIf0khHUxfY};
