import{V as k,_ as j,a as B}from"./VPagination.583cef1c.js";import q from"./ContentList.601c4bd0.js";import{_ as A,a as F,b as L,c as N}from"./Tags.01e79ee8.js";import{q as d}from"./query.4670b04e.js";import{u as E}from"./vue-i18n.runtime.esm-bundler.24faeac2.js";import{V as I,a as v,b as M}from"./VRow.cc4e9f03.js";import{b as P,c as R}from"./VCard.c03fe822.js";import{f as U,s as n,v as z,g as D,x as G,h as m,w as e,o as s,b as t,i as H,c as J,r as K,F as O,j as Q}from"./entry.072025a9.js";import"./nuxt-link.b030b460.js";import"./index.50269c79.js";import"./tag.aa4c7647.js";import"./VBtn.ee26e133.js";import"./ContentQuery.f3145c08.js";import"./asyncData.945f2b00.js";import"./profile_photo_sm.fed0fd9d.js";import"./VList.96fbc729.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./preview.921efe6f.js";const pt=U({__name:"index",async setup(S){let o,_;const{locale:l}=E(),r=n(10),i=n(1),V=([o,_]=z(()=>d(l.value,"notes").count()),o=await o,_(),o),c=D(()=>Math.ceil(V/r.value)),h=n(4),u=n([]);return G(()=>i.value,async p=>{u.value=await d(l.value,"notes").sort({date:-1}).skip((p-1)*r.value).limit(r.value).find()},{immediate:!0}),(p,f)=>{const g=B,x=j,y=q,C=A,b=F,w=L,$=N;return s(),m(I,{id:"about-containter",style:{"max-width":"1280px"}},{default:e(()=>[t(M,{align:"start",justify:"center"},{default:e(()=>[t(v,{cols:"9"},{default:e(()=>[t(P,{flat:"",color:"transparent"},{default:e(()=>[t(y,{path:`/${H(l)}/notes`},{"not-found":e(()=>[t(x)]),default:e(()=>[(s(!0),J(O,null,K(u.value,a=>(s(),m(g,{key:a._path,article:a},null,8,["article"]))),128))]),_:1},8,["path"]),c.value>1?(s(),m(R,{key:0,class:"d-flex justify-center"},{default:e(()=>[t(k,{modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=a=>i.value=a),length:c.value,"total-visible":h.value},null,8,["modelValue","length","total-visible"])]),_:1})):Q("",!0)]),_:1})]),_:1}),t(v,{cols:"3"},{default:e(()=>[t(C),t(b),t(w),t($)]),_:1})]),_:1})]),_:1})}}});export{pt as default};