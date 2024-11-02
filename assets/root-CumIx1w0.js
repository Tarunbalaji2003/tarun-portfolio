import{r as o,j as e}from"./jsx-runtime-BfF-YriY.js";import{a as F,t as P,T as Q,G as X,b as Z}from"./image-C718SQX4.js";import{E as ee}from"./error-DgGhCas4.js";import{V as te}from"./visually-hidden-DNbPzCjn.js";import{c as ne,B as G,I as S,e as se,b as ae,m as E,a as oe,n as re,t as R}from"./heading-uOGKedE8.js";import{u as ie}from"./useScrollToHash-CE90UMHK.js";import{u as ce}from"./useWindowSize-CCgmKmhO.js";import{c as w}from"./config-C6BTT1dW.js";import{k as le,u as q,n as me,o as he,q as de,L as M,s as J,c as ue,t as fe,M as V,v as W,O as pe,S as Y,b as ge}from"./components-7U91X0lH.js";import"./decoder-text-ChhECSdP.js";import"./use-spring-BHB8byz_.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let O="positions";function U({getKey:t,...n}){let{isSpaMode:s}=le(),i=q(),r=me();he({getKey:t,storageKey:O});let l=o.useMemo(()=>{if(!t)return null;let a=t(i,r);return a!==i.key?a:null},[]);if(s)return null;let m=((a,g)=>{if(!window.history.state||!window.history.state.key){let v=Math.random().toString(32).slice(2);window.history.replaceState({key:v},"")}try{let b=JSON.parse(sessionStorage.getItem(a)||"{}")[g||window.history.state.key];typeof b=="number"&&window.scrollTo(0,b)}catch(v){console.error(v),sessionStorage.removeItem(a)}}).toString();return o.createElement("script",de({},n,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(O)}, ${JSON.stringify(l)})`}}))}const ve="_monogram_8c3nz_2",xe="_highlight_8c3nz_8",_e={monogram:ve,highlight:xe},je=o.forwardRef(({highlight:t,className:n,...s},i)=>(o.useId(),e.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",className:ne(_e.monogram,n),...s,width:"57.000000pt",height:"70.000000pt",viewBox:"5 10 290.000000 100.000000",preserveAspectRatio:"xMidYMid meet",children:e.jsxs("g",{transform:"translate(0.000000,207.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"#000000",children:[e.jsx("path",{d:`M2508 2945 c-8 -8 46 -38 98 -55 18 -6 35 -17 38 -25 3 -8 11 -15 18
-15 13 0 106 -92 125 -125 73 -121 98 -265 82 -455 -10 -101 -23 -164 -40
-185 -4 -6 -4 -17 1 -25 14 -23 48 46 71 148 39 168 10 385 -68 520 -35 59
-138 159 -195 188 -50 25 -118 40 -130 29z`}),e.jsx("path",{d:`M2490 2894 c0 -3 33 -41 73 -84 82 -88 149 -210 174 -318 8 -38 17
-142 20 -238 5 -164 12 -208 30 -190 10 10 10 322 0 405 -4 35 -17 83 -27 107
-11 24 -20 53 -21 66 0 22 -1 22 -9 3 -8 -20 -9 -19 -9 1 -1 29 -42 100 -86
148 -19 22 -35 43 -35 47 0 4 -10 11 -22 15 -13 4 -34 15 -47 25 -24 19 -41
24 -41 13z`}),e.jsx("path",{d:`M2372 2838 c3 -7 13 -15 22 -16 10 -2 26 -11 35 -20 10 -10 28 -24
40 -32 48 -32 124 -112 145 -152 13 -24 33 -72 46 -108 37 -105 39 -376 4
-520 -3 -14 -10 -44 -15 -68 -4 -23 -13 -52 -19 -63 -7 -11 -18 -44 -27 -72
-8 -29 -20 -56 -26 -62 -14 -11 -33 -49 -42 -82 -4 -13 -11 -23 -16 -23 -5 0
-9 -8 -9 -19 0 -10 -8 -29 -18 -42 -10 -13 -23 -35 -30 -49 -31 -60 -51 -94
-52 -86 0 10 -40 -38 -41 -51 0 -4 -16 -28 -35 -53 -18 -25 -38 -55 -44 -67
-5 -13 -14 -23 -20 -23 -6 0 -15 -10 -20 -22 -5 -13 -9 -16 -9 -8 -1 8 -16 -8
-35 -35 -28 -42 -123 -137 -270 -269 -16 -14 -35 -26 -43 -26 -7 0 -16 -7 -19
-15 -7 -18 -104 -88 -121 -88 -7 0 -13 -4 -13 -9 0 -4 -17 -16 -37 -25 l-38
-18 -3 -218 c-1 -139 1 -225 8 -237 7 -14 7 -20 0 -21 -5 0 -88 0 -182 -1
l-173 0 -2 115 c0 64 3 133 7 154 5 20 7 40 4 42 -2 3 -26 -3 -52 -12 -26 -9
-60 -17 -77 -18 -24 0 -26 -2 -10 -8 16 -7 14 -9 -14 -14 -56 -11 -191 -22
-276 -22 -92 0 -228 22 -219 36 3 5 -4 9 -15 9 -11 0 -22 4 -25 9 -3 5 -18 12
-33 16 -32 7 -92 45 -146 92 -20 18 -42 33 -49 33 -6 0 -8 3 -5 7 4 3 -4 20
-16 37 -35 47 -62 104 -86 181 -17 57 -21 95 -21 210 0 144 0 146 56 315 31
94 80 200 93 200 4 0 15 17 24 38 9 20 27 55 41 77 25 40 66 116 66 122 0 2
-9 -2 -20 -10 -56 -39 -187 -250 -231 -371 -17 -47 -39 -95 -50 -107 -10 -12
-20 -26 -20 -31 -3 -18 -5 -23 -11 -33 -3 -5 -14 -50 -24 -100 -25 -121 -25
-332 0 -428 9 -38 18 -77 19 -88 1 -10 4 -19 8 -19 3 0 12 -18 19 -40 7 -21
17 -37 21 -34 5 3 9 -1 9 -8 0 -7 14 -28 31 -46 16 -17 27 -32 24 -32 -4 0 12
-16 36 -36 53 -44 141 -89 194 -98 22 -4 49 -13 60 -20 34 -21 125 -35 278
-42 109 -5 147 -4 147 5 0 20 -46 30 -173 40 -140 12 -309 50 -384 88 -151 76
-240 220 -259 423 -7 71 5 74 26 5 18 -57 63 -145 106 -205 59 -82 206 -176
340 -217 90 -27 360 -25 465 5 41 12 80 22 86 22 8 0 12 -41 15 -121 3 -118 4
-121 31 -145 27 -23 33 -24 191 -24 227 0 210 -22 216 268 l5 227 66 45 c37
25 82 57 100 72 19 15 48 38 66 51 125 92 334 314 440 469 110 159 124 184
197 333 172 349 203 693 85 942 -31 67 -51 92 -108 144 -88 78 -202 137 -189
97z m-2105 -1800 c-2 -35 -3 -9 -3 57 0 66 1 94 3 63 2 -32 2 -86 0 -120z`}),e.jsx("path",{d:`M2340 2795 c0 -2 23 -30 51 -62 41 -47 79 -109 79 -129 0 -2 -16 4
-35 12 -29 12 -174 14 -954 14 l-919 0 -31 -31 -31 -31 0 -152 c0 -153 6 -182
44 -208 6 -4 165 -8 353 -8 188 0 348 -3 357 -6 14 -6 16 -68 17 -593 1 -322
4 -599 8 -616 3 -17 19 -38 37 -50 l30 -21 -95 -41 c-106 -46 -188 -68 -301
-79 -172 -17 -261 2 -338 71 -87 78 -121 181 -122 366 0 147 33 313 100 501
23 67 24 78 7 78 -13 0 -67 -109 -67 -138 0 -10 -6 -27 -14 -38 -8 -11 -17
-38 -21 -60 -4 -21 -14 -61 -22 -89 -20 -66 -29 -341 -14 -415 13 -62 13 -64
29 -103 7 -16 12 -31 12 -34 0 -3 18 -28 40 -55 22 -28 40 -55 40 -60 0 -5 4
-7 9 -4 4 3 22 -5 40 -18 18 -13 49 -27 69 -31 20 -4 42 -11 49 -17 14 -12
171 -6 273 11 100 16 254 65 286 90 15 12 32 21 39 21 15 0 111 49 170 86 22
14 48 28 58 31 15 4 16 8 5 14 -10 7 -9 9 4 9 19 0 91 46 136 87 17 16 36 29
43 31 7 2 38 28 68 58 31 31 77 72 104 92 26 20 47 40 47 45 0 4 38 46 84 92
47 45 83 85 80 88 -3 2 7 15 21 28 13 13 25 29 25 34 0 6 9 16 20 23 11 7 20
19 20 28 0 8 4 13 9 10 5 -3 14 8 20 24 5 17 15 30 20 30 6 0 11 4 11 9 0 5
18 37 40 70 22 33 40 65 40 71 0 11 29 61 41 70 7 5 41 79 43 92 1 3 4 10 9
14 4 4 7 14 7 23 1 9 9 34 20 56 11 22 19 50 20 61 0 12 8 41 17 65 20 54 25
321 6 360 -6 13 -16 38 -21 56 -13 38 -82 133 -98 133 -6 0 -17 6 -23 14 -11
13 -51 29 -51 21z m95 -386 l0 -170 -388 1 -388 1 1 -545 c1 -300 -1 -550 -5
-556 -3 -5 -12 -10 -19 -10 -7 0 -21 -9 -31 -20 -10 -11 -26 -20 -35 -20 -9 0
-25 -8 -36 -17 -32 -28 -101 -63 -126 -64 -13 0 -17 -3 -10 -6 13 -5 -52 -43
-74 -43 -8 0 -10 160 -7 613 2 336 5 623 6 637 l2 25 -390 2 -390 1 -3 163
c-1 90 -1 168 1 174 3 7 303 9 948 8 l944 -3 0 -171z m69 -4 c0 -56 -6 -109
-12 -120 -9 -16 -11 10 -11 120 0 114 2 136 12 120 7 -12 12 -58 11 -120z
m-45 -271 c-36 -121 -91 -230 -214 -428 -35 -55 -158 -209 -210 -262 -27 -27
-64 -66 -81 -85 -33 -36 -206 -188 -230 -202 -12 -7 -14 69 -14 506 0 386 3
516 12 525 9 9 103 12 363 12 338 0 353 1 370 20 32 36 33 11 4 -86z`}),e.jsx("path",{d:`M168 1338 c-30 -53 -49 -105 -85 -233 -24 -88 -27 -117 -27 -240 0
-119 4 -150 23 -205 55 -159 103 -232 204 -317 70 -58 113 -85 188 -117 115
-49 292 -60 425 -25 72 18 164 61 164 76 0 8 -91 -5 -104 -16 -20 -16 -149
-35 -236 -34 -130 1 -238 26 -310 73 -8 6 -24 14 -35 19 -41 19 -154 139 -185
197 -18 32 -36 64 -40 69 -10 13 -40 133 -41 166 -1 22 -2 21 -9 -6 -5 -18 -8
26 -8 110 0 84 3 130 8 115 7 -22 8 -20 9 15 1 23 8 67 16 98 8 32 15 68 15
80 0 12 7 35 15 50 8 16 20 56 27 90 7 34 17 65 23 69 6 5 6 8 -2 8 -6 0 -22
-19 -35 -42z`})]})}))),be="_toggle_1lvbt_2",ke="_inner_1lvbt_17",ye="_icon_1lvbt_25",y={toggle:be,inner:ke,icon:ye},we=({menuOpen:t,...n})=>e.jsx(G,{iconOnly:!0,className:y.toggle,"aria-label":"Menu","aria-expanded":t,...n,children:e.jsxs("div",{className:y.inner,children:[e.jsx(S,{className:y.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(S,{className:y.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),Ne="_toggle_1phd7_2",ze="_circle_1phd7_29",Me="_mask_1phd7_54",Se="_path_1phd7_72",x={toggle:Ne,circle:ze,mask:Me,path:Se},A=({isMobile:t,...n})=>{const s=o.useId(),{toggleTheme:i}=F(),r=`${s}theme-toggle-mask`;return e.jsx(G,{iconOnly:!0,className:x.toggle,"data-mobile":t,"aria-label":"Toggle theme",onClick:()=>i(),...n,children:e.jsxs("svg",{"aria-hidden":!0,className:x.svg,width:"38",height:"38",viewBox:"0 0 38 38",children:[e.jsx("defs",{children:e.jsxs("mask",{id:r,children:[e.jsx("circle",{className:x.circle,"data-mask":!0,cx:"19",cy:"19",r:"13"}),e.jsx("circle",{className:x.mask,cx:"25",cy:"14",r:"9"})]})}),e.jsx("path",{className:x.path,d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),e.jsx("circle",{className:x.circle,mask:`url(#${r})`,cx:"19",cy:"19",r:"12"})]})})},H=[{label:"Projects",pathname:"/#project-1"},{label:"Details",pathname:"/#details"},{label:"Articles",pathname:"/articles"},{label:"Contact",pathname:"/contact"}],Te=[{label:"Twitter",url:`https://twitter.com/${w.twitter}`,icon:"twitter"},{label:"Linkedin",url:"https://www.linkedin.com/in/tarunbalaji/",icon:"linkedin"},{label:"Github",url:`https://github.com/${w.github}`,icon:"github"}],Le="_navbar_zzi78_2",Ie="_logo_zzi78_27",$e="_nav_zzi78_2",Ce="_navList_zzi78_51",Ee="_navLink_zzi78_59",Re="_navIcons_zzi78_102",Oe="_navIconLink_zzi78_126",Ae="_navIcon_zzi78_102",He="_mobileNav_zzi78_147",Be="_mobileNavLink_zzi78_177",f={navbar:Le,logo:Ie,nav:$e,navList:Ce,navLink:Ee,navIcons:Re,navIconLink:Oe,navIcon:Ae,mobileNav:He,mobileNavLink:Be},De=()=>{const[t,n]=o.useState(),[s,i]=o.useState(!1),[r,l]=o.useState(),{theme:m}=F(),a=q(),g=ce(),v=o.useRef(),b=g.width<=se.mobile||g.height<=696,T=ie();o.useEffect(()=>{n(`${a.pathname}${a.hash}`)},[a]),o.useEffect(()=>{!r||a.pathname!=="/"||(n(`${a.pathname}${r}`),T(r,()=>l(null)))},[a.pathname,T,r]),o.useEffect(()=>{const c=document.querySelectorAll("[data-navbar-item]"),h=m==="dark"?"light":"dark",{innerHeight:k}=window;let _=[],j=[];const K=(u,p,d)=>!(u.bottom-d<p.top||u.top-d>p.bottom),C=()=>{for(const u of j)u.element.dataset.theme=""},N=()=>{const u=document.querySelectorAll(`[data-theme='${h}'][data-invert]`);if(!u)return;_=Array.from(u).map(d=>({element:d,top:d.offsetTop,bottom:d.offsetTop+d.offsetHeight}));const{scrollY:p}=window;C();for(const d of _)if(!(d.top-p>k||d.bottom-p<0))for(const z of j)K(d,z,p)?z.element.dataset.theme=h:z.element.dataset.theme=""};return m==="light"&&(j=Array.from(c).map(u=>{const p=u.getBoundingClientRect();return{element:u,top:p.top,bottom:p.bottom}}),document.addEventListener("scroll",N),N()),()=>{document.removeEventListener("scroll",N),C()}},[m,g,a.key]);const L=(c="")=>{const h=t!=null&&t.endsWith("/")?t==null?void 0:t.slice(0,-1):t;return c===h?"page":""},I=c=>{const h=c.currentTarget.href.split("#")[1];l(null),h&&a.pathname==="/"&&(l(`#${h}`),c.preventDefault())},$=c=>{I(c),s&&i(!1)};return e.jsxs("header",{className:f.navbar,ref:v,children:[e.jsx(M,{unstable_viewTransition:!0,prefetch:"intent",to:a.pathname==="/"?"/#intro":"/","data-navbar-item":!0,className:f.logo,"aria-label":`${w.name}, ${w.role}`,onClick:$,children:e.jsx(je,{})}),e.jsx(we,{onClick:()=>i(!s),menuOpen:s}),e.jsxs("nav",{className:f.nav,children:[e.jsx("div",{className:f.navList,children:H.map(({label:c,pathname:h})=>e.jsx(M,{unstable_viewTransition:!0,prefetch:"intent",to:h,"data-navbar-item":!0,className:f.navLink,"aria-current":L(h),onClick:I,children:c},c))}),e.jsx(B,{desktop:!0})]}),e.jsx(ae,{unmount:!0,in:s,timeout:E(R.base.durationL),children:({visible:c,nodeRef:h})=>e.jsxs("nav",{className:f.mobileNav,"data-visible":c,ref:h,children:[H.map(({label:k,pathname:_},j)=>e.jsx(M,{unstable_viewTransition:!0,prefetch:"intent",to:_,className:f.mobileNavLink,"data-visible":c,"aria-current":L(_),onClick:$,style:oe({transitionDelay:re(Number(E(R.base.durationS))+j*50)}),children:k},k)),e.jsx(B,{}),e.jsx(A,{isMobile:!0})]})}),!b&&e.jsx(A,{"data-navbar-item":!0})]})},B=({desktop:t})=>e.jsx("div",{className:f.navIcons,children:Te.map(({label:n,url:s,icon:i})=>e.jsx("a",{"data-navbar-item":t||void 0,className:f.navIconLink,"aria-label":n,href:s,target:"_blank",rel:"noopener noreferrer",children:e.jsx(S,{className:f.navIcon,icon:i})},n))}),Fe="_progress_3typo_2",Pe={progress:Fe};function Ge(){const[t,n]=o.useState(!1),[s,i]=o.useState(!1),{state:r}=J(),l=o.useRef(),m=o.useRef(0);return o.useEffect(()=>{clearTimeout(m.current),r!=="idle"?m.current=setTimeout(()=>{i(!0)},500):t&&(m.current=setTimeout(()=>{i(!1)},300))},[r,t]),o.useEffect(()=>{if(!l.current)return;const a=new AbortController;return r!=="idle"?n(!1):(Promise.all(l.current.getAnimations({subtree:!0}).map(g=>g.finished)).then(()=>{a.signal.aborted||n(!0)}),()=>{a.abort()})},[r]),e.jsx("div",{className:Pe.progress,"data-status":r,"data-visible":s,"data-complete":t,ref:l})}const qe="_container_j3vhn_2",Je="_skip_j3vhn_12",D={container:qe,skip:Je};const s1=()=>[{rel:"preload",href:X,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:Z,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function a1(){var l;let{canonicalUrl:t,theme:n}=ue();const s=fe(),{state:i}=J();(l=s.formData)!=null&&l.has("theme")&&(n=s.formData.get("theme"));function r(m){s.submit({theme:m||(n==="dark"?"light":"dark")},{action:"/api/set-theme",method:"post"})}return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:n==="dark"?"#111":"#F2F2F2"}),e.jsx("meta",{name:"color-scheme",content:n==="light"?"light dark":"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:P}}),e.jsx(V,{}),e.jsx(W,{}),e.jsx("link",{rel:"canonical",href:t})]}),e.jsxs("body",{"data-theme":n,children:[e.jsxs(Q,{theme:n,toggleTheme:r,children:[e.jsx(Ge,{}),e.jsx(te,{showOnFocus:!0,as:"a",className:D.skip,href:"#main-content",children:"Skip to main content"}),e.jsx(De,{}),e.jsx("main",{id:"main-content",className:D.container,tabIndex:-1,"data-loading":i==="loading",children:e.jsx(pe,{})})]}),e.jsx(U,{}),e.jsx(Y,{})]})]})}function o1(){const t=ge();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#111"}),e.jsx("meta",{name:"color-scheme",content:"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:P}}),e.jsx(V,{}),e.jsx(W,{})]}),e.jsxs("body",{"data-theme":"dark",children:[e.jsx(ee,{error:t}),e.jsx(U,{}),e.jsx(Y,{})]})]})}export{o1 as ErrorBoundary,a1 as default,s1 as links};
