import{r as a,j as e}from"./jsx-runtime-BfF-YriY.js";import{a as D,t as F,T as Q,G as X,b as Z}from"./image-sm8zEGQ6.js";import{E as ee}from"./error-yoh6JAus.js";import{V as te}from"./visually-hidden-DQc8RACT.js";import{c as ne,B as P,I as T,e as se,b as re,m as E,a as ae,n as oe,t as q}from"./heading-B2sVkuwd.js";import{u as ie}from"./useScrollToHash-B_IqptpU.js";import{u as le}from"./useWindowSize-CCgmKmhO.js";import{c as w}from"./config-C6BTT1dW.js";import{k as ce,u as G,n as me,o as he,q as ue,L as S,s as J,c as de,t as fe,M as V,v as W,O as ge,S as Y,b as pe}from"./components-7U91X0lH.js";import"./decoder-text-B3P9jeDG.js";import"./use-spring-CcAbRleG.js";/**
 * @remix-run/react v2.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let R="positions";function U({getKey:t,...n}){let{isSpaMode:s}=ce(),i=G(),o=me();he({getKey:t,storageKey:R});let c=a.useMemo(()=>{if(!t)return null;let r=t(i,o);return r!==i.key?r:null},[]);if(s)return null;let m=((r,p)=>{if(!window.history.state||!window.history.state.key){let v=Math.random().toString(32).slice(2);window.history.replaceState({key:v},"")}try{let j=JSON.parse(sessionStorage.getItem(r)||"{}")[p||window.history.state.key];typeof j=="number"&&window.scrollTo(0,j)}catch(v){console.error(v),sessionStorage.removeItem(r)}}).toString();return a.createElement("script",ue({},n,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(R)}, ${JSON.stringify(c)})`}}))}const ve="_monogram_1c5ju_3",xe="_highlight_1c5ju_15",_e={monogram:ve,highlight:xe},be=a.forwardRef(({highlight:t,className:n,...s},i)=>(a.useId(),e.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",className:ne(_e.monogram,n),...s,width:"57.000000pt",height:"70.000000pt",viewBox:"5 10 290.000000 100.000000",preserveAspectRatio:"xMidYMid meet",children:e.jsxs("g",{transform:"translate(0.000000,207.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"#000000",children:[e.jsx("path",{d:`M2508 2945 c-8 -8 46 -38 98 -55 18 -6 35 -17 38 -25 3 -8 11 -15 18\r
-15 13 0 106 -92 125 -125 73 -121 98 -265 82 -455 -10 -101 -23 -164 -40\r
-185 -4 -6 -4 -17 1 -25 14 -23 48 46 71 148 39 168 10 385 -68 520 -35 59\r
-138 159 -195 188 -50 25 -118 40 -130 29z`}),e.jsx("path",{d:`M2490 2894 c0 -3 33 -41 73 -84 82 -88 149 -210 174 -318 8 -38 17\r
-142 20 -238 5 -164 12 -208 30 -190 10 10 10 322 0 405 -4 35 -17 83 -27 107\r
-11 24 -20 53 -21 66 0 22 -1 22 -9 3 -8 -20 -9 -19 -9 1 -1 29 -42 100 -86\r
148 -19 22 -35 43 -35 47 0 4 -10 11 -22 15 -13 4 -34 15 -47 25 -24 19 -41\r
24 -41 13z`}),e.jsx("path",{d:`M2372 2838 c3 -7 13 -15 22 -16 10 -2 26 -11 35 -20 10 -10 28 -24\r
40 -32 48 -32 124 -112 145 -152 13 -24 33 -72 46 -108 37 -105 39 -376 4\r
-520 -3 -14 -10 -44 -15 -68 -4 -23 -13 -52 -19 -63 -7 -11 -18 -44 -27 -72\r
-8 -29 -20 -56 -26 -62 -14 -11 -33 -49 -42 -82 -4 -13 -11 -23 -16 -23 -5 0\r
-9 -8 -9 -19 0 -10 -8 -29 -18 -42 -10 -13 -23 -35 -30 -49 -31 -60 -51 -94\r
-52 -86 0 10 -40 -38 -41 -51 0 -4 -16 -28 -35 -53 -18 -25 -38 -55 -44 -67\r
-5 -13 -14 -23 -20 -23 -6 0 -15 -10 -20 -22 -5 -13 -9 -16 -9 -8 -1 8 -16 -8\r
-35 -35 -28 -42 -123 -137 -270 -269 -16 -14 -35 -26 -43 -26 -7 0 -16 -7 -19\r
-15 -7 -18 -104 -88 -121 -88 -7 0 -13 -4 -13 -9 0 -4 -17 -16 -37 -25 l-38\r
-18 -3 -218 c-1 -139 1 -225 8 -237 7 -14 7 -20 0 -21 -5 0 -88 0 -182 -1\r
l-173 0 -2 115 c0 64 3 133 7 154 5 20 7 40 4 42 -2 3 -26 -3 -52 -12 -26 -9\r
-60 -17 -77 -18 -24 0 -26 -2 -10 -8 16 -7 14 -9 -14 -14 -56 -11 -191 -22\r
-276 -22 -92 0 -228 22 -219 36 3 5 -4 9 -15 9 -11 0 -22 4 -25 9 -3 5 -18 12\r
-33 16 -32 7 -92 45 -146 92 -20 18 -42 33 -49 33 -6 0 -8 3 -5 7 4 3 -4 20\r
-16 37 -35 47 -62 104 -86 181 -17 57 -21 95 -21 210 0 144 0 146 56 315 31\r
94 80 200 93 200 4 0 15 17 24 38 9 20 27 55 41 77 25 40 66 116 66 122 0 2\r
-9 -2 -20 -10 -56 -39 -187 -250 -231 -371 -17 -47 -39 -95 -50 -107 -10 -12\r
-20 -26 -20 -31 -3 -18 -5 -23 -11 -33 -3 -5 -14 -50 -24 -100 -25 -121 -25\r
-332 0 -428 9 -38 18 -77 19 -88 1 -10 4 -19 8 -19 3 0 12 -18 19 -40 7 -21\r
17 -37 21 -34 5 3 9 -1 9 -8 0 -7 14 -28 31 -46 16 -17 27 -32 24 -32 -4 0 12\r
-16 36 -36 53 -44 141 -89 194 -98 22 -4 49 -13 60 -20 34 -21 125 -35 278\r
-42 109 -5 147 -4 147 5 0 20 -46 30 -173 40 -140 12 -309 50 -384 88 -151 76\r
-240 220 -259 423 -7 71 5 74 26 5 18 -57 63 -145 106 -205 59 -82 206 -176\r
340 -217 90 -27 360 -25 465 5 41 12 80 22 86 22 8 0 12 -41 15 -121 3 -118 4\r
-121 31 -145 27 -23 33 -24 191 -24 227 0 210 -22 216 268 l5 227 66 45 c37\r
25 82 57 100 72 19 15 48 38 66 51 125 92 334 314 440 469 110 159 124 184\r
197 333 172 349 203 693 85 942 -31 67 -51 92 -108 144 -88 78 -202 137 -189\r
97z m-2105 -1800 c-2 -35 -3 -9 -3 57 0 66 1 94 3 63 2 -32 2 -86 0 -120z`}),e.jsx("path",{d:`M2340 2795 c0 -2 23 -30 51 -62 41 -47 79 -109 79 -129 0 -2 -16 4\r
-35 12 -29 12 -174 14 -954 14 l-919 0 -31 -31 -31 -31 0 -152 c0 -153 6 -182\r
44 -208 6 -4 165 -8 353 -8 188 0 348 -3 357 -6 14 -6 16 -68 17 -593 1 -322\r
4 -599 8 -616 3 -17 19 -38 37 -50 l30 -21 -95 -41 c-106 -46 -188 -68 -301\r
-79 -172 -17 -261 2 -338 71 -87 78 -121 181 -122 366 0 147 33 313 100 501\r
23 67 24 78 7 78 -13 0 -67 -109 -67 -138 0 -10 -6 -27 -14 -38 -8 -11 -17\r
-38 -21 -60 -4 -21 -14 -61 -22 -89 -20 -66 -29 -341 -14 -415 13 -62 13 -64\r
29 -103 7 -16 12 -31 12 -34 0 -3 18 -28 40 -55 22 -28 40 -55 40 -60 0 -5 4\r
-7 9 -4 4 3 22 -5 40 -18 18 -13 49 -27 69 -31 20 -4 42 -11 49 -17 14 -12\r
171 -6 273 11 100 16 254 65 286 90 15 12 32 21 39 21 15 0 111 49 170 86 22\r
14 48 28 58 31 15 4 16 8 5 14 -10 7 -9 9 4 9 19 0 91 46 136 87 17 16 36 29\r
43 31 7 2 38 28 68 58 31 31 77 72 104 92 26 20 47 40 47 45 0 4 38 46 84 92\r
47 45 83 85 80 88 -3 2 7 15 21 28 13 13 25 29 25 34 0 6 9 16 20 23 11 7 20\r
19 20 28 0 8 4 13 9 10 5 -3 14 8 20 24 5 17 15 30 20 30 6 0 11 4 11 9 0 5\r
18 37 40 70 22 33 40 65 40 71 0 11 29 61 41 70 7 5 41 79 43 92 1 3 4 10 9\r
14 4 4 7 14 7 23 1 9 9 34 20 56 11 22 19 50 20 61 0 12 8 41 17 65 20 54 25\r
321 6 360 -6 13 -16 38 -21 56 -13 38 -82 133 -98 133 -6 0 -17 6 -23 14 -11\r
13 -51 29 -51 21z m95 -386 l0 -170 -388 1 -388 1 1 -545 c1 -300 -1 -550 -5\r
-556 -3 -5 -12 -10 -19 -10 -7 0 -21 -9 -31 -20 -10 -11 -26 -20 -35 -20 -9 0\r
-25 -8 -36 -17 -32 -28 -101 -63 -126 -64 -13 0 -17 -3 -10 -6 13 -5 -52 -43\r
-74 -43 -8 0 -10 160 -7 613 2 336 5 623 6 637 l2 25 -390 2 -390 1 -3 163\r
c-1 90 -1 168 1 174 3 7 303 9 948 8 l944 -3 0 -171z m69 -4 c0 -56 -6 -109\r
-12 -120 -9 -16 -11 10 -11 120 0 114 2 136 12 120 7 -12 12 -58 11 -120z\r
m-45 -271 c-36 -121 -91 -230 -214 -428 -35 -55 -158 -209 -210 -262 -27 -27\r
-64 -66 -81 -85 -33 -36 -206 -188 -230 -202 -12 -7 -14 69 -14 506 0 386 3\r
516 12 525 9 9 103 12 363 12 338 0 353 1 370 20 32 36 33 11 4 -86z`}),e.jsx("path",{d:`M168 1338 c-30 -53 -49 -105 -85 -233 -24 -88 -27 -117 -27 -240 0\r
-119 4 -150 23 -205 55 -159 103 -232 204 -317 70 -58 113 -85 188 -117 115\r
-49 292 -60 425 -25 72 18 164 61 164 76 0 8 -91 -5 -104 -16 -20 -16 -149\r
-35 -236 -34 -130 1 -238 26 -310 73 -8 6 -24 14 -35 19 -41 19 -154 139 -185\r
197 -18 32 -36 64 -40 69 -10 13 -40 133 -41 166 -1 22 -2 21 -9 -6 -5 -18 -8\r
26 -8 110 0 84 3 130 8 115 7 -22 8 -20 9 15 1 23 8 67 16 98 8 32 15 68 15\r
80 0 12 7 35 15 50 8 16 20 56 27 90 7 34 17 65 23 69 6 5 6 8 -2 8 -6 0 -22\r
-19 -35 -42z`})]})}))),je="_toggle_h91zx_3",ke="_inner_h91zx_33",ye="_icon_h91zx_49",y={toggle:je,inner:ke,icon:ye},we=({menuOpen:t,...n})=>e.jsx(P,{iconOnly:!0,className:y.toggle,"aria-label":"Menu","aria-expanded":t,...n,children:e.jsxs("div",{className:y.inner,children:[e.jsx(T,{className:y.icon,"data-menu":!0,"data-open":t,icon:"menu"}),e.jsx(T,{className:y.icon,"data-close":!0,"data-open":t,icon:"close"})]})}),Ne="_toggle_y3n84_3",Me="_circle_y3n84_57",Se="_mask_y3n84_107",Te="_path_y3n84_143",x={toggle:Ne,circle:Me,mask:Se,path:Te},O=({isMobile:t,...n})=>{const s=a.useId(),{toggleTheme:i}=D(),o=`${s}theme-toggle-mask`;return e.jsx(P,{iconOnly:!0,className:x.toggle,"data-mobile":t,"aria-label":"Toggle theme",onClick:()=>i(),...n,children:e.jsxs("svg",{"aria-hidden":!0,className:x.svg,width:"38",height:"38",viewBox:"0 0 38 38",children:[e.jsx("defs",{children:e.jsxs("mask",{id:o,children:[e.jsx("circle",{className:x.circle,"data-mask":!0,cx:"19",cy:"19",r:"13"}),e.jsx("circle",{className:x.mask,cx:"25",cy:"14",r:"9"})]})}),e.jsx("path",{className:x.path,d:"M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"}),e.jsx("circle",{className:x.circle,mask:`url(#${o})`,cx:"19",cy:"19",r:"12"})]})})},A=[{label:"Projects",pathname:"/#project-1"},{label:"Details",pathname:"/#details"},{label:"Articles",pathname:"/articles"},{label:"Contact",pathname:"/contact"}],Le=[{label:"Twitter",url:`https://twitter.com/${w.twitter}`,icon:"twitter"},{label:"Linkedin",url:"https://www.linkedin.com/in/tarunbalaji/",icon:"linkedin"},{label:"Github",url:`https://github.com/${w.github}`,icon:"github"}],Ie="_navbar_1qbli_3",$e="_logo_1qbli_53",ze="_nav_1qbli_3",Ce="_navList_1qbli_101",Ee="_navLink_1qbli_117",qe="_navIcons_1qbli_203",Re="_navIconLink_1qbli_251",Oe="_navIcon_1qbli_203",Ae="_mobileNav_1qbli_293",He="_mobileNavLink_1qbli_353",f={navbar:Ie,logo:$e,nav:ze,navList:Ce,navLink:Ee,navIcons:qe,navIconLink:Re,navIcon:Oe,mobileNav:Ae,mobileNavLink:He},Be=()=>{const[t,n]=a.useState(),[s,i]=a.useState(!1),[o,c]=a.useState(),{theme:m}=D(),r=G(),p=le(),v=a.useRef(),j=p.width<=se.mobile||p.height<=696,L=ie();a.useEffect(()=>{n(`${r.pathname}${r.hash}`)},[r]),a.useEffect(()=>{!o||r.pathname!=="/"||(n(`${r.pathname}${o}`),L(o,()=>c(null)))},[r.pathname,L,o]),a.useEffect(()=>{const l=document.querySelectorAll("[data-navbar-item]"),h=m==="dark"?"light":"dark",{innerHeight:k}=window;let _=[],b=[];const K=(d,g,u)=>!(d.bottom-u<g.top||d.top-u>g.bottom),C=()=>{for(const d of b)d.element.dataset.theme=""},N=()=>{const d=document.querySelectorAll(`[data-theme='${h}'][data-invert]`);if(!d)return;_=Array.from(d).map(u=>({element:u,top:u.offsetTop,bottom:u.offsetTop+u.offsetHeight}));const{scrollY:g}=window;C();for(const u of _)if(!(u.top-g>k||u.bottom-g<0))for(const M of b)K(u,M,g)?M.element.dataset.theme=h:M.element.dataset.theme=""};return m==="light"&&(b=Array.from(l).map(d=>{const g=d.getBoundingClientRect();return{element:d,top:g.top,bottom:g.bottom}}),document.addEventListener("scroll",N),N()),()=>{document.removeEventListener("scroll",N),C()}},[m,p,r.key]);const I=(l="")=>{const h=t!=null&&t.endsWith("/")?t==null?void 0:t.slice(0,-1):t;return l===h?"page":""},$=l=>{const h=l.currentTarget.href.split("#")[1];c(null),h&&r.pathname==="/"&&(c(`#${h}`),l.preventDefault())},z=l=>{$(l),s&&i(!1)};return e.jsxs("header",{className:f.navbar,ref:v,children:[e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:r.pathname==="/"?"/#intro":"/","data-navbar-item":!0,className:f.logo,"aria-label":`${w.name}, ${w.role}`,onClick:z,children:e.jsx(be,{})}),e.jsx(we,{onClick:()=>i(!s),menuOpen:s}),e.jsxs("nav",{className:f.nav,children:[e.jsx("div",{className:f.navList,children:A.map(({label:l,pathname:h})=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:h,"data-navbar-item":!0,className:f.navLink,"aria-current":I(h),onClick:$,children:l},l))}),e.jsx(H,{desktop:!0})]}),e.jsx(re,{unmount:!0,in:s,timeout:E(q.base.durationL),children:({visible:l,nodeRef:h})=>e.jsxs("nav",{className:f.mobileNav,"data-visible":l,ref:h,children:[A.map(({label:k,pathname:_},b)=>e.jsx(S,{unstable_viewTransition:!0,prefetch:"intent",to:_,className:f.mobileNavLink,"data-visible":l,"aria-current":I(_),onClick:z,style:ae({transitionDelay:oe(Number(E(q.base.durationS))+b*50)}),children:k},k)),e.jsx(H,{}),e.jsx(O,{isMobile:!0})]})}),!j&&e.jsx(O,{"data-navbar-item":!0})]})},H=({desktop:t})=>e.jsx("div",{className:f.navIcons,children:Le.map(({label:n,url:s,icon:i})=>e.jsx("a",{"data-navbar-item":t||void 0,className:f.navIconLink,"aria-label":n,href:s,target:"_blank",rel:"noopener noreferrer",children:e.jsx(T,{className:f.navIcon,icon:i})},n))}),De="_progress_brpaj_3",Fe={progress:De};function Pe(){const[t,n]=a.useState(!1),[s,i]=a.useState(!1),{state:o}=J(),c=a.useRef(),m=a.useRef(0);return a.useEffect(()=>{clearTimeout(m.current),o!=="idle"?m.current=setTimeout(()=>{i(!0)},500):t&&(m.current=setTimeout(()=>{i(!1)},300))},[o,t]),a.useEffect(()=>{if(!c.current)return;const r=new AbortController;return o!=="idle"?n(!1):(Promise.all(c.current.getAnimations({subtree:!0}).map(p=>p.finished)).then(()=>{r.signal.aborted||n(!0)}),()=>{r.abort()})},[o]),e.jsx("div",{className:Fe.progress,"data-status":o,"data-visible":s,"data-complete":t,ref:c})}const Ge="_container_1g4r3_3",Je="_skip_1g4r3_23",B={container:Ge,skip:Je};const s1=()=>[{rel:"preload",href:X,as:"font",type:"font/woff2",crossOrigin:""},{rel:"preload",href:Z,as:"font",type:"font/woff2",crossOrigin:""},{rel:"manifest",href:"/manifest.json"},{rel:"icon",href:"/favicon.ico"},{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"},{rel:"shortcut_icon",href:"/shortcut.png",type:"image/png",sizes:"64x64"},{rel:"apple-touch-icon",href:"/icon-256.png",sizes:"256x256"},{rel:"author",href:"/humans.txt",type:"text/plain"}];function r1(){var c;let{canonicalUrl:t,theme:n}=de();const s=fe(),{state:i}=J();(c=s.formData)!=null&&c.has("theme")&&(n=s.formData.get("theme"));function o(m){s.submit({theme:m||(n==="dark"?"light":"dark")},{action:"/api/set-theme",method:"post"})}return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:n==="dark"?"#111":"#F2F2F2"}),e.jsx("meta",{name:"color-scheme",content:n==="light"?"light dark":"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx(V,{}),e.jsx(W,{}),e.jsx("link",{rel:"canonical",href:t})]}),e.jsxs("body",{"data-theme":n,children:[e.jsxs(Q,{theme:n,toggleTheme:o,children:[e.jsx(Pe,{}),e.jsx(te,{showOnFocus:!0,as:"a",className:B.skip,href:"#main-content",children:"Skip to main content"}),e.jsx(Be,{}),e.jsx("main",{id:"main-content",className:B.container,tabIndex:-1,"data-loading":i==="loading",children:e.jsx(ge,{})})]}),e.jsx(U,{}),e.jsx(Y,{})]})]})}function a1(){const t=pe();return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{name:"theme-color",content:"#111"}),e.jsx("meta",{name:"color-scheme",content:"dark light"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:F}}),e.jsx(V,{}),e.jsx(W,{})]}),e.jsxs("body",{"data-theme":"dark",children:[e.jsx(ee,{error:t}),e.jsx(U,{}),e.jsx(Y,{})]})]})}export{a1 as ErrorBoundary,r1 as default,s1 as links};
