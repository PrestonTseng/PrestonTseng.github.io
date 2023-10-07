import{m as y,u as f,a as j}from"./tag.949ee232.js";import{B as b,Q as q,b as n,z as h,I as u,A as N,O as Q,g as I,H as $,V as G}from"./entry.94e70c44.js";import{l as C,h as P,n as V,o as k,g as J,p as K,i as U,q as W,m as X,r as Y,a as Z,s as ee,k as ae,R as te,t as ne,v as de,w as ie,x as se,y as le,z as ce,e as re,A as ue,c as oe,B as ve,f as me,L as ge,C as ke}from"./index.718ea15c.js";const ye=b()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return q({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=C("v-card-subtitle"),be=C("v-card-title"),Ce=h({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...y(),...P()},"VCardItem"),pe=b()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return f(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),v=!!(s||t.append),m=!!(e.title||t.title),g=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(k,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),g&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),v&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(k,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ae=C("v-card-text"),Ie=h({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...J(),...y(),...P(),...K(),...U(),...W(),...X(),...Y(),...Z(),...ee(),...j(),...N(),...ae({variant:"elevated"})},"VCard"),Se=b()({name:"VCard",directives:{Ripple:te},props:Ie(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:o}=Q(e),{borderClasses:s}=ne(e),{colorClasses:v,colorStyles:m,variantClasses:g}=de(e),{densityClasses:l}=ie(e),{dimensionStyles:d}=se(e),{elevationClasses:S}=le(e),{loaderClasses:x}=ce(e),{locationStyles:B}=re(e),{positionClasses:L}=ue(e),{roundedClasses:T}=oe(e),c=ve(e,t),D=I(()=>e.link!==!1&&c.isLink.value),r=I(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const _=D.value?"a":e.tag,R=!!(a.title||e.title),O=!!(a.subtitle||e.subtitle),w=R||O,z=!!(a.append||e.appendAvatar||e.appendIcon),E=!!(a.prepend||e.prependAvatar||e.prependIcon),F=!!(a.image||e.image),H=w||E||z,M=!!(a.text||e.text);return $(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},o.value,s.value,v.value,l.value,S.value,x.value,L.value,T.value,g.value,e.class],style:[m.value,d.value,B.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[F&&n("div",{key:"image",class:"v-card__image"},[a.image?n(k,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(me,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),H&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),M&&n(Ae,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ye,null,{default:a.actions}),ke(r.value,"v-card")]}}),[[G("ripple"),r.value&&e.ripple]])}),{}}});export{be as V,Ae as a,Se as b,ye as c,fe as d};
