import{V as k,_ as j,a as B}from"./VPagination.f082ef94.js";import q from"./ContentList.da96f374.js";import{_ as A,a as F,b as L,c as N}from"./Tags.89b15ab0.js";import{q as d}from"./query.98be985f.js";import{u as E}from"./vue-i18n.runtime.esm-bundler.896076fd.js";import{V as I,a as v,b as M}from"./VRow.af046123.js";import{b as P,c as R}from"./VCard.c2a38866.js";import{f as U,v as n,x as z,g as D,y as G,h as m,w as e,o as s,b as t,i as H,c as J,r as K,F as O,j as Q}from"./entry.f0743a6b.js";import"./nuxt-link.244c255a.js";import"./index.29936e0a.js";import"./tag.5c48c0d7.js";import"./VBtn.5f3f7bbb.js";import"./ContentQuery.6125a47c.js";import"./asyncData.dae04ba1.js";import"./profile_photo_sm.7b56f3f8.js";import"./VList.ee42940a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./preview.c48a69bb.js";const pt=U({__name:"index",async setup(S){let o,_;const{locale:l}=E(),r=n(10),i=n(1),V=([o,_]=z(()=>d(l.value,"notes").count()),o=await o,_(),o),c=D(()=>Math.ceil(V/r.value)),h=n(4),u=n([]);return G(()=>i.value,async p=>{u.value=await d(l.value,"notes").sort({date:-1}).skip((p-1)*r.value).limit(r.value).find()},{immediate:!0}),(p,f)=>{const y=B,g=j,x=q,C=A,b=F,w=L,$=N;return s(),m(I,{id:"about-containter",style:{"max-width":"1280px"}},{default:e(()=>[t(M,{align:"start",justify:"center"},{default:e(()=>[t(v,{cols:"9"},{default:e(()=>[t(P,{flat:"",color:"transparent"},{default:e(()=>[t(x,{path:`/${H(l)}/notes`},{"not-found":e(()=>[t(g)]),default:e(()=>[(s(!0),J(O,null,K(u.value,a=>(s(),m(y,{key:a._path,article:a},null,8,["article"]))),128))]),_:1},8,["path"]),c.value>1?(s(),m(R,{key:0,class:"d-flex justify-center"},{default:e(()=>[t(k,{modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=a=>i.value=a),length:c.value,"total-visible":h.value},null,8,["modelValue","length","total-visible"])]),_:1})):Q("",!0)]),_:1})]),_:1}),t(v,{cols:"3"},{default:e(()=>[t(C),t(b),t(w),t($)]),_:1})]),_:1})]),_:1})}}});export{pt as default};