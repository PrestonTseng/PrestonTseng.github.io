import{f as c,g as r,a9 as o,$ as u,Z as h,aa as d,o as f,c as g,i as p}from"./entry.f0743a6b.js";function m(e){let a,i=e[0],t=1;for(;t<e.length;){const n=e[t],s=e[t+1];if(t+=2,(n==="optionalAccess"||n==="optionalCall")&&i==null)return;n==="access"||n==="optionalAccess"?(a=i,i=s(i)):(n==="call"||n==="optionalCall")&&(i=s((...l)=>i.call(a,...l)),a=void 0)}return i}const S=["src","alt","width","height"],C=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const a=e,i=r(()=>{if(m([a,"access",t=>t.src,"optionalAccess",t=>t.startsWith,"call",t=>t("/")])&&!a.src.startsWith("//")){const t=o(u(h().app.baseURL));if(t!=="/"&&!a.src.startsWith(t))return d(t,a.src)}return a.src});return(t,n)=>(f(),g("img",{src:p(i),alt:e.alt,width:e.width,height:e.height},null,8,S))}});export{C as default};