import{V as k,_ as j,a as B}from"./VPagination.77ecf9be.js";import q from"./ContentList.f8f80287.js";import{_ as A,a as F,b as L,c as N}from"./Tags.4a5aa93c.js";import{q as d}from"./query.a9196c70.js";import{u as E}from"./vue-i18n.runtime.esm-bundler.edf9aec5.js";import{V as I,a as v,b as M}from"./VRow.a386da3b.js";import{b as P,c as R}from"./VCard.73fdacaa.js";import{f as U,v as n,x as z,g as D,y as G,h as m,w as e,o as s,b as t,i as H,c as J,r as K,F as O,j as Q}from"./entry.fdea985a.js";import"./nuxt-link.c4021dc5.js";import"./index.d96707c7.js";import"./tag.9c5a47f2.js";import"./VBtn.47e6f3ac.js";import"./ContentQuery.4a76ef85.js";import"./asyncData.29ccf435.js";import"./profile_photo_sm.961e31b0.js";import"./VList.c20eba52.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./preview.b351ac3a.js";const pt=U({__name:"index",async setup(S){let o,_;const{locale:l}=E(),r=n(10),i=n(1),V=([o,_]=z(()=>d(l.value,"notes").count()),o=await o,_(),o),c=D(()=>Math.ceil(V/r.value)),h=n(4),u=n([]);return G(()=>i.value,async p=>{u.value=await d(l.value,"notes").sort({date:-1}).skip((p-1)*r.value).limit(r.value).find()},{immediate:!0}),(p,f)=>{const y=B,g=j,x=q,C=A,b=F,w=L,$=N;return s(),m(I,{id:"about-containter",style:{"max-width":"1280px"}},{default:e(()=>[t(M,{align:"start",justify:"center"},{default:e(()=>[t(v,{cols:"9"},{default:e(()=>[t(P,{flat:"",color:"transparent"},{default:e(()=>[t(x,{path:`/${H(l)}/notes`},{"not-found":e(()=>[t(g)]),default:e(()=>[(s(!0),J(O,null,K(u.value,a=>(s(),m(y,{key:a._path,article:a},null,8,["article"]))),128))]),_:1},8,["path"]),c.value>1?(s(),m(R,{key:0,class:"d-flex justify-center"},{default:e(()=>[t(k,{modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=a=>i.value=a),length:c.value,"total-visible":h.value},null,8,["modelValue","length","total-visible"])]),_:1})):Q("",!0)]),_:1})]),_:1}),t(v,{cols:"3"},{default:e(()=>[t(C),t(b),t(w),t($)]),_:1})]),_:1})]),_:1})}}});export{pt as default};