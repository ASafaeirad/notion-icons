import{u as c,_ as l,a as d,b as f,c as n,d as b,q as i,S as v}from"./q-CN17xajZ.js";import{_}from"./q-DqZFHoEI.js";import{u as S}from"./q-DJiBfamD.js";const p=async(e,t)=>{const[s]=c(),a=new FormData(t),o=new URLSearchParams;a.forEach((r,m)=>{typeof r=="string"&&o.append(m,r)}),await s("?"+o.toString(),{type:"form",forceReload:!0})},g=(e,t)=>{t.getAttribute("data-spa-reset")==="true"&&t.reset(),t.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))},P=e=>{const t=l(e,["action","spaReset","reloadDocument","onSubmit$"]),s=S();return d("form",{action:"get",get"preventdefault:submit"(){return!e.reloadDocument},get"data-spa-reset"(){return e.spaReset?"true":void 0},...t,children:b(v,null,3,"BC_0"),onSubmit$:[...Array.isArray(e.onSubmit$)?e.onSubmit$:[e.onSubmit$],i(()=>_(()=>Promise.resolve().then(()=>u),void 0),"s_p9MSze0ojs4",[s]),i(()=>_(()=>Promise.resolve().then(()=>u),void 0),"s_KK5BfmKH4ZI")]},{action:f,"preventdefault:submit":n(a=>!a.reloadDocument,[e]),"data-spa-reset":n(a=>a.spaReset?"true":void 0,[e])},0,"BC_1")},u=Object.freeze(Object.defineProperty({__proto__:null,s_KK5BfmKH4ZI:g,s_Nk9PlpjQm9Y:P,s_p9MSze0ojs4:p},Symbol.toStringTag,{value:"Module"}));export{g as s_KK5BfmKH4ZI,P as s_Nk9PlpjQm9Y,p as s_p9MSze0ojs4};
