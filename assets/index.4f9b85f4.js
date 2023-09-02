import{_ as Q}from"./nuxt-link.4a0538c1.js";import{c as W,m as J,V as H,a as N,b as ce,d as re,e as de,f as ue,g as me,h as pe,i as ge,j as ye,k as ve,R as fe,u as he,l as xe,n as _e,o as be,p as ke,q as Se,r as we,s as Ie,t as Ae,v as Ce,w as Ve,L as Pe,x as Be,y as C,z as v,A as Me}from"./VBtn.2f17a997.js";import{a as O,p as Te,b as t,e as K,I as L,m as Le,f as ze,h as w,w as De,r as Ee,i as V,o as s,c as b,j as a,k as x,l as c,t as o,u as h,q as r,F as _,s as k,v as z,x as Re,y as q}from"./entry.b3af115f.js";import{m as $,u as U,a as je}from"./tag.9481a9e5.js";import{V as Ne,a as f,b as We}from"./VRow.26c1c488.js";const Y=O()({name:"VCardActions",props:$(),setup(e,d){let{slots:i}=d;return Te({VBtn:{variant:"text"}}),U(()=>{var n;return t("div",{class:["v-card-actions",e.class],style:e.style},[(n=i.default)==null?void 0:n.call(i)])}),{}}}),Oe=W("v-card-subtitle"),P=W("v-card-title"),$e=K({appendAvatar:String,appendIcon:L,prependAvatar:String,prependIcon:L,subtitle:String,title:String,...$(),...J()},"VCardItem"),Ue=O()({name:"VCardItem",props:$e(),setup(e,d){let{slots:i}=d;return U(()=>{var m;const n=!!(e.prependAvatar||e.prependIcon),S=!!(n||i.prepend),u=!!(e.appendAvatar||e.appendIcon),y=!!(u||i.append),l=!!(e.title||i.title),p=!!(e.subtitle||i.subtitle);return t("div",{class:["v-card-item",e.class],style:e.style},[S&&t("div",{key:"prepend",class:"v-card-item__prepend"},[i.prepend?t(N,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},i.prepend):n&&t(H,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),t("div",{class:"v-card-item__content"},[l&&t(P,{key:"title"},{default:()=>{var g;return[((g=i.title)==null?void 0:g.call(i))??e.title]}}),p&&t(Oe,{key:"subtitle"},{default:()=>{var g;return[((g=i.subtitle)==null?void 0:g.call(i))??e.subtitle]}}),(m=i.default)==null?void 0:m.call(i)]),y&&t("div",{key:"append",class:"v-card-item__append"},[i.append?t(N,{key:"append-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},i.append):u&&t(H,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),A=W("v-card-text"),Fe=K({appendAvatar:String,appendIcon:L,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:L,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...ce(),...$(),...J(),...re(),...de(),...ue(),...me(),...pe(),...ge(),...ye(),...je(),...Le(),...ve({variant:"elevated"})},"VCard"),B=O()({name:"VCard",directives:{Ripple:fe},props:Fe(),setup(e,d){let{attrs:i,slots:n}=d;const{themeClasses:S}=ze(e),{borderClasses:u}=he(e),{colorClasses:y,colorStyles:l,variantClasses:p}=xe(e),{densityClasses:m}=_e(e),{dimensionStyles:g}=be(e),{elevationClasses:D}=ke(e),{loaderClasses:E}=Se(e),{locationStyles:R}=we(e),{positionClasses:I}=Ie(e),{roundedClasses:j}=Ae(e),M=Ce(e,i),X=w(()=>e.link!==!1&&M.isLink.value),T=w(()=>!e.disabled&&e.link!==!1&&(e.link||M.isClickable.value));return U(()=>{const Z=X.value?"a":e.tag,ee=!!(n.title||e.title),te=!!(n.subtitle||e.subtitle),ne=ee||te,ae=!!(n.append||e.appendAvatar||e.appendIcon),ie=!!(n.prepend||e.prependAvatar||e.prependIcon),se=!!(n.image||e.image),le=ne||ie||ae,oe=!!(n.text||e.text);return De(t(Z,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":T.value},S.value,u.value,y.value,m.value,D.value,E.value,I.value,j.value,p.value,e.class],style:[l.value,g.value,R.value,e.style],href:M.href.value,onClick:T.value&&M.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var F;return[se&&t("div",{key:"image",class:"v-card__image"},[n.image?t(N,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):t(Ve,{key:"image-img",cover:!0,src:e.image},null)]),t(Pe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),le&&t(Ue,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),oe&&t(A,{key:"text"},{default:()=>{var G;return[((G=n.text)==null?void 0:G.call(n))??e.text]}}),(F=n.default)==null?void 0:F.call(n),n.actions&&t(Y,null,{default:n.actions}),Be(T.value,"v-card")]}}),[[Ee("ripple"),T.value&&e.ripple]])}),{}}}),Ge={class:"text-subtitle-1 font-weight-bold"},He={class:"text-subtitle-1"},qe={key:0,class:"mt-4 font-weight-bold"},Qe=V({__name:"Experiences",setup(e){const{t:d,locale:i}=C({messages:{en:{experiences:"experiences"},"zh-TW":{experiences:"工作經驗"}}}),n=w(()=>{switch(i.value){case"zh-TW":return[{company:"衛武資訊股份有限公司",position:"研發工程師",time:"2019 - 現職",items:[{type:"subtitle",text:"機器學習"},{type:"item",text:"利用 Azure OpenAI 與 Cognitive Search 開發企業知識管理系統"},{type:"subtitle",text:"網頁後端"},{type:"item",text:"開發 SyncoBox EIP 的差勤、簽核、費用申請模組"},{type:"item",text:"開發 SyncoBox Automation 流程自動化微服務"},{type:"item",text:"客製化開發 Revit 模型提送申請流程自動化服務"},{type:"item",text:"進行後端基礎建設開發團隊共用套件"},{type:"item",text:"利用 Nvidia Omniverse 開發高品質的渲染微服務"},{type:"subtitle",text:"網頁前端"},{type:"item",text:"在 SyncoBox 數位協同設計自動化服務中負責模型瀏覽元件與 SDK 開發",link:"https://webim.com.tw/tech-ch/syncobox-autodesk-platform-services-2/"},{type:"item",text:"負責 Autodesk Platform Service Viewer 的整合與相關元件開發"},{type:"item",text:"負責 SyncoBox EIP 前端頁面"},{type:"item",text:"開發 SyncoBox Panorama 環景服務，支援 Progressive Web App 與離線存取"},{type:"item",text:"進行前端基礎建設開發團隊共用套件"},{type:"item",text:"以 Web 技術重構 WeBIMSync，做為微服務整合進 SyncoBox",link:"https://www.syncobox.com/solutions/webimsync"},{type:"item",text:"開發 SyncoBox 模型標記系統，減少建築設計中 50% 的紙本討論工作"},{type:"item",text:"基於 BIM 模型開發 SyncoBox 設備管理系統，提高 40% 的設備維護效率"},{type:"item",text:"基於電腦視覺與 BIM 模型開發 CCTV 電子柵欄和警報系統，保障工人安全"}]},{company:"花火樹有限公司",position:"前端工程師",time:"2018 - 2019",items:[{type:"item",text:"負責數個獨立前端網站項目"},{type:"item",text:"開發量化房地產分析服務 「MotherMong3000」"}]}];case"en":default:return[{company:"WeBIM Service Co., Ltd.",position:"Research and Development Engineer",time:"2019 -",items:[{type:"subtitle",text:"Machine Learning"},{type:"item",text:"Utilized Microsoft OpenAI and Cognitive Search to develop an enterprise knowledge management service."},{type:"subtitle",text:"Web Backend"},{type:"item",text:"Developed SyncoBox EIP."},{type:"item",text:"Developed SyncoBox Automation Service for Robotic Process Automation."},{type:"item",text:"Customized an automated workflow for Autodesk Revit model submission and approval processes."},{type:"item",text:"Developed several foundational backend development shared across the team."},{type:"item",text:"Developed high-quality rendering microservices utilizing Nvidia Omniverse."},{type:"subtitle",text:"Web Frontend"},{type:"item",text:"Played a key role in developing model browsing components and SDK for SyncoBox Design Automation Service.",link:"https://webim.com.tw/tech-ch/syncobox-autodesk-platform-services-2/"},{type:"item",text:"Contributed to the integration and development of related components for Autodesk Platform Service Viewer."},{type:"item",text:"Developed SyncoBox EIP."},{type:"item",text:"Developed SyncoBox Panorama Service, supporting Progressive Web App and offline access."},{type:"item",text:"Developed several foundational frontend components shared across the team."},{type:"item",text:"Refactored WeBIMSync into a web service, integrating it as a microservice within SyncoBox.",link:"https://www.syncobox.com/solutions/webimsync"},{type:"item",text:"Developed SyncoBox Markup Service, reducing paper-based discussions by 50% during architectural design."},{type:"item",text:"Developed SyncoBox Facility Management Service based on BIM models, increasing maintenance efficiency by 40%."},{type:"item",text:"Utilized computer vision and BIM models to develop CCTV electronic fences and alarm systems, enhancing worker safety."}]},{company:"Hanabiki Ltd",position:"Front-end Developer",time:"2018 - 2019",items:[{type:"item",text:"Developed several web projects."},{type:"item",text:"Developed a real estate analysis service called ”MotherMong3000”."}]}]}});return(S,u)=>{const y=Q;return s(),b(B,{color:"transparent",flat:""},{default:a(()=>[t(P,{class:"text-capitalize text-primary d-flex align-center"},{default:a(()=>[t(v,{class:"mr-2"},{default:a(()=>[x("mdi-briefcase")]),_:1}),c("span",null,o(h(d)("experiences")),1)]),_:1}),t(A,null,{default:a(()=>[(s(!0),r(_,null,k(n.value,(l,p)=>(s(),r("div",{key:p,class:"py-4"},[c("div",Ge,o(l.position),1),c("div",He,o(l.company)+" | "+o(l.time),1),(s(!0),r(_,null,k(l.items,(m,g)=>(s(),r("div",{key:g,class:"d-flex align-center justify-start text-secondary",style:{"padding-top":"10px","padding-bottom":"10px"}},[m.type=="subtitle"?(s(),r("span",qe,o(m.text),1)):(s(),r(_,{key:1},[t(v,{small:"",class:"pr-2"},{default:a(()=>[x("mdi-chevron-right")]),_:1}),t(y,{to:m.link,target:"_blank",class:"text-secondary"},{default:a(()=>[c("span",null,o(m.text),1),m.link?(s(),b(v,{key:0,class:"pl-2",size:"x-small"},{default:a(()=>[x("mdi-open-in-new")]),_:1})):z("",!0)]),_:2},1032,["to"])],64))]))),128))]))),128))]),_:1})]),_:1})}}});const Je=""+new URL("pytorch.39816fb3.svg",import.meta.url).href,Ke=""+new URL("openai.8166a567.svg",import.meta.url).href,Ye={class:"text-subtitle-1 font-weight-bold"},Xe={class:"text-secondary d-flex flex-wrap align-center"},Ze=["src"],et={class:"text-medium-emphasis"},tt={key:2,class:"mx-3"},nt=V({__name:"Skills",setup(e){const{t:d}=C({messages:{en:{skills:"skills","front-end":"front-end","back-end":"back-end",programming:"programming","maching-learning":"Maching Learning",devops:"DevOps"},"zh-TW":{skills:"技能","front-end":"網頁前端","back-end":"網頁後端",programming:"程式語言","maching-learning":"機器學習",devops:"DevOps"}}}),i=w(()=>[{title:d("front-end"),items:[{icon:"mdi-language-javascript",name:"Javascript"},{icon:"mdi-language-typescript",name:"Typescript"},{icon:"mdi-vuejs",name:"Vue.js"},{icon:"mdi-nuxt",name:"Nuxt.js"},{icon:"mdi-vuetify",name:"Vuetify.js"},{icon:"mdi-language-html5",name:"HTML5"},{icon:"mdi-language-css3",name:"CSS"},{icon:"mdi-sass",name:"SASS"}]},{title:d("back-end"),items:[{icon:"mdi-language-csharp",name:"C#"},{icon:"mdi-dot-net",name:"ASP.NET Core"},{icon:"mdi-database-search",name:"MySQL"}]},{title:d("maching-learning"),items:[{icon:"mdi-language-python",name:"Python"},{icon:Je,name:"Pytorch"},{icon:Ke,name:"Azure OpenAI"}]},{title:d("devops"),items:[{icon:"mdi-git",name:"Git"},{icon:"mdi-docker",name:"Docker"},{icon:"mdi-microsoft-azure-devops",name:"Azure DevOps"}]}]);return(n,S)=>(s(),b(B,{color:"transparent",flat:""},{default:a(()=>[t(P,{class:"text-capitalize text-primary d-flex align-center"},{default:a(()=>[t(v,{class:"mr-2"},{default:a(()=>[x("mdi-tools")]),_:1}),c("span",null,o(h(d)("skills")),1)]),_:1}),t(A,null,{default:a(()=>[(s(!0),r(_,null,k(i.value,(u,y)=>(s(),r("div",{key:y,class:"py-2"},[c("div",Ye,o(u.title),1),c("div",Xe,[(s(!0),r(_,null,k(u.items,(l,p)=>(s(),r("div",{key:p,class:"d-flex align-center py-3"},[l.icon&&l.icon.startsWith("mdi")?(s(),b(v,{key:0,small:"",class:"pt-1 pr-2 text-medium-emphasis",icon:l.icon},null,8,["icon"])):l.icon?(s(),r("img",{key:1,src:l.icon,height:"21",class:"pr-2 pt-1"},null,8,Ze)):z("",!0),c("span",et,o(l.name),1),p<u.items.length-1?(s(),r("span",tt,"|")):z("",!0)]))),128))])]))),128))]),_:1})]),_:1}))}}),at={class:"text-subtitle-1 font-weight-bold"},it=V({__name:"Certifications",setup(e){const{t:d}=C({messages:{en:{certifications:"certifications",languages:"Languages"},"zh-TW":{certifications:"認證",languages:"語言能力"}}}),i=w(()=>[{title:d("languages"),items:[{icon:null,name:"TOFEL iBT 91"},{icon:null,name:"JLPT N2"}]}]);return(n,S)=>(s(),b(B,{color:"transparent",flat:""},{default:a(()=>[t(P,{class:"text-capitalize text-primary d-flex align-center"},{default:a(()=>[t(v,{class:"mr-2"},{default:a(()=>[x("mdi-certificate")]),_:1}),c("span",null,o(h(d)("certifications")),1)]),_:1}),t(A,null,{default:a(()=>[(s(!0),r(_,null,k(h(i),(u,y)=>(s(),r("div",{key:y,class:"py-4"},[c("div",at,o(u.title),1),(s(!0),r(_,null,k(u.items,(l,p)=>(s(),r("div",{key:p,class:"d-flex align-center justify-start text-secondary",style:{"padding-top":"10px","padding-bottom":"10px"}},[t(v,{small:"",class:"pt-1 pr-2"},{default:a(()=>[x("mdi-chevron-right")]),_:1}),c("span",null,o(l.name),1)]))),128))]))),128))]),_:1})]),_:1}))}}),st={class:"text-subtitle-1 font-weight-bold"},lt={class:"text-subtitle-1"},ot={class:"font-italic text-body-2"},ct=V({__name:"Education",setup(e){const{t:d,locale:i}=C({messages:{en:{educations:"educations"},"zh-TW":{educations:"學術經歷"}}}),n=w(()=>{switch(i.value){case"zh-TW":return[{school:"國立臺灣大學",degree:"土木工程系 交通工程組 碩士",time:"2020 - 2022",items:[{title:"GPA：3.93/4.30"},{title:"Real‐Time Indoor Localization with Visual SLAM for Emergency Responders",subtitle:"Automation in Construction, 2022",link:"https://www.sciencedirect.com/science/article/abs/pii/S0926580522001923"},{title:"應用 Visual SLAM 於建築內緊急救護之即時室內定位",subtitle:"碩士論文, 2022",link:"https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22110NTU05015122%22.&searchmode=basic"},{title:"Emergency Indoor Positioning System with Visual SLAM to Improve the Efficiency of EMS",subtitle:"SCEM International Conference, 2022",link:null}]},{school:"國立臺灣大學",degree:"土木工程系 學士",time:"2016 - 2020",items:[{title:"GPA：3.92/4.30"},{title:"完成運輸工程學群。"}]}];case"en":default:return[{school:"National Taiwan University",degree:"M.S. in Civil Engineering",time:"2020 - 2022",items:[{title:"Overall GPA: 3.93/4.30."},{title:"Real‐Time Indoor Localization with Visual SLAM for Emergency Responders",subtitle:"Automation in Construction, 2022",link:"https://www.sciencedirect.com/science/article/abs/pii/S0926580522001923"},{title:"Real‐Time Indoor Localization with Visual SLAM for In‐building Emergency Response",subtitle:"Master Thesis, 2022",link:"https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22110NTU05015122%22.&searchmode=basic"},{title:"Emergency Indoor Positioning System with Visual SLAM to Improve the Efficiency of EMS",subtitle:"SCEM International Conference, 2022",link:null}]},{school:"National Taiwan University",degree:"B.S. in Civil Engineering",time:"2016 - 2020",items:[{title:"Overall GPA: 3.92/4.30."},{title:"Completed railway transportation curriculum."}]}]}});return(S,u)=>{const y=Q;return s(),b(B,{color:"transparent",flat:""},{default:a(()=>[t(P,{class:"text-capitalize text-primary d-flex align-center"},{default:a(()=>[t(v,{class:"mr-2"},{default:a(()=>[x("mdi-school")]),_:1}),c("span",null,o(h(d)("educations")),1)]),_:1}),t(A,null,{default:a(()=>[(s(!0),r(_,null,k(n.value,(l,p)=>(s(),r("div",{key:p,class:"py-4"},[c("div",st,o(l.degree),1),c("div",lt,o(l.school)+" | "+o(l.time),1),(s(!0),r(_,null,k(l.items,(m,g)=>(s(),r("div",{key:g,class:"d-flex align-center justify-start text-secondary",style:{"padding-top":"10px","padding-bottom":"10px"}},[t(v,{small:"",class:"pt-1 pr-2"},{default:a(()=>[x("mdi-chevron-right")]),_:1}),c("div",null,[t(y,{to:m.link,target:"_blank",class:"text-secondary"},{default:a(()=>[c("span",null,o(m.title),1),m.link?(s(),b(v,{key:0,class:"pl-2",size:"x-small"},{default:a(()=>[x("mdi-open-in-new")]),_:1})):z("",!0)]),_:2},1032,["to"]),c("div",ot,o(m.subtitle),1)])]))),128))]))),128))]),_:1})]),_:1})}}});const rt=""+new URL("profile_photo.c8225277.png",import.meta.url).href,dt=c("img",{class:"rounded-pill mx-auto","aspect-ratio":1,"max-height":"280","max-width":"280",src:rt},null,-1),ut={class:"text-capitalize"},ft=V({__name:"index",setup(e){const{smAndUp:d,mdAndUp:i,lgAndUp:n,xlAndUp:S}=Re(),{t:u,locale:y}=C({messages:{en:{prologue:"Po Yen Tseng",shortIntro:"Full-Stack Developer",longIntro:"With 4 years of front-end experience, I transitioned to a full-stack role a year ago, specializing in Vue.js, Nuxt.js (front-end), and .NET Core with MySQL (back-end). I focus on developing web services for architecture and civil engineering, such as transferring complex BIM models to the web for improved accessibility and collaboration. I also explore tools like Azure OpenAI and Cognitive Search to enhance document retrieval and analysis. My aim is to innovate and drive digital transformation in this field."},"zh-TW":{prologue:"曾柏硯",shortIntro:"全端工程師",longIntro:"從高中開始，我便持續自學網頁開發，至今已有４年前端工作經驗．１年前因現職工作需求，開始涉獵後端，作為全端工程師，同時負責前後端的開發。前端方面主要使用 Vue.js 和 Nuxt.js 進行開發。而後端方面則採用 .NET Core 搭配 MySQL。 在目前的職務上致力於研發各種網路服務，為建築和土木工程領域提供數位轉型的解決方案。例如將原本需要高度圖像處理設備的 BIM 模型轉移到網頁上，打破了設備的限制，讓各種不同的設備和環境都能立即查看和協作。此外，我也持續學習並嘗試新工具，例如運用 Azure OpenAI 和 Cognitive Search 技術，讓過去的建築和土木工程文件以及工程圖紙能夠輕鬆地被檢索和分析。我的使命是不斷探索創新的解決方案，推動建築與土木工程領域的數位化進程。"}}}),l=w(()=>[{icon:"mdi-github",text:"GitHub",href:"https://github.com/prestontseng",target:"_blank"},{icon:"mdi-linkedin",text:"LinkedIn",href:"https://www.linkedin.com/in/prestontseng",target:"_blank"},{icon:"mdi-email",text:"E-mail",href:"mailto:csps50404@gmail.com",target:"_blank"}]);return(p,m)=>{const g=Qe,D=nt,E=it,R=ct;return s(),b(Ne,{id:"about-containter",style:{"max-width":"1280px"}},{default:a(()=>[t(We,{align:"start",justify:"center"},{default:a(()=>[t(f,{cols:"12",style:{height:"50px"}}),t(f,{cols:"12",lg:"4",class:"text-center"},{default:a(()=>[dt]),_:1}),t(f,{cols:"12",lg:"7"},{default:a(()=>[t(B,{flat:"",color:"transparent"},{default:a(()=>[c("div",{class:q(["text-h6 font-weight-light px-4 py-2",{"text-center":!h(n)}])},o(h(u)("shortIntro")),3),c("div",{class:q(["text-h3 font-weight-medium text-primary px-2 pb-2",{"text-center":!h(n)}])},o(h(u)("prologue")),3),t(A,{class:"text-secondary text-medium-emphasis",style:{"white-space":"pre-line","line-height":"1.5rem","font-size":"0.95rem"}},{default:a(()=>[x(o(h(u)("longIntro")),1)]),_:1}),t(Y,null,{default:a(()=>[(s(!0),r(_,null,k(l.value,(I,j)=>(s(),b(Me,{key:j,size:"small",color:"secondary",variant:"outlined",ripple:!1,href:I.href,target:I.target,class:"rounded-pill",style:{opacity:"0.7"}},{default:a(()=>[t(v,{left:"",icon:I.icon,class:"px-1 pr-2"},null,8,["icon"]),c("span",ut,o(I.text),1)]),_:2},1032,["href","target"]))),128))]),_:1})]),_:1})]),_:1}),t(f,{cols:"12",style:{height:"50px"}}),t(f,{cols:"12",lg:"6"},{default:a(()=>[t(f,{cols:"12"},{default:a(()=>[t(g)]),_:1})]),_:1}),t(f,{cols:"12",lg:"6"},{default:a(()=>[t(f,{cols:"12"},{default:a(()=>[t(D)]),_:1}),t(f,{cols:"12"},{default:a(()=>[t(E)]),_:1}),t(f,{cols:"12"},{default:a(()=>[t(R)]),_:1})]),_:1})]),_:1})]),_:1})}}});export{ft as default};
