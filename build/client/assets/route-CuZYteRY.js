import{b as k}from"./meta-DxDjxI8D.js";import{j as e,r as _}from"./jsx-runtime-BfF-YriY.js";import{H as u,u as D,a as g,T as h,B as f,c as L}from"./heading-B2sVkuwd.js";import{D as y}from"./decoder-text-B3P9jeDG.js";import{D as Z}from"./divider-BHVqM2G5.js";import{S as I,F as M}from"./section-DMpVui18.js";import{I as H}from"./image-sm8zEGQ6.js";import{u as B}from"./useWindowSize-CCgmKmhO.js";import{f as T}from"./date-DvyCAN0s.js";import{c as S,L as F}from"./components-7U91X0lH.js";import"./config-C6BTT1dW.js";import"./visually-hidden-DQc8RACT.js";import"./use-spring-CcAbRleG.js";const w="_articles_11xm9_5",z="_grid_11xm9_29",A="_header_11xm9_105",C="_heading_11xm9_141",E="_list_11xm9_151",P="_divider_11xm9_159",W="_skeleton_11xm9_169",R="_skeletonBone_11xm9_187",$="_post_11xm9_195",O="_postLabel_11xm9_295",q="_postTag_11xm9_297",G="_labelIn_11xm9_1",J="_tagIn_11xm9_1",K="_postLink_11xm9_445",Q="_postDate_11xm9_559",U="_postImage_11xm9_579",X="_postDetails_11xm9_679",Y="_postFooter_11xm9_711",ee="_timecode_11xm9_739",se="_barcode_11xm9_765",s={articles:w,grid:z,header:A,heading:C,list:E,divider:P,skeleton:W,skeletonBone:R,post:$,postLabel:O,postTag:q,labelIn:G,tagIn:J,postLink:K,postDate:Q,postImage:U,postDetails:X,postFooter:Y,timecode:ee,barcode:se};function V({slug:t,frontmatter:d,timecode:m,index:v}){const[i,n]=_.useState(!1),[r,l]=_.useState(null),c=D(),{title:o,abstract:p,date:j,featured:a,banner:x}=d;_.useEffect(()=>{l(T(j))},[j,r]);const N=()=>{n(!0)},b=()=>{n(!1)};return e.jsxs("article",{className:s.post,"data-featured":!!a,style:v!==void 0?g({delay:v*100+200}):void 0,children:[a&&e.jsx(h,{className:s.postLabel,size:"s",children:"Featured"}),a&&!!x&&e.jsx("div",{className:s.postImage,children:e.jsx(H,{noPauseButton:!0,play:c?void 0:i,src:x,placeholder:`${x.split(".")[0]}-placeholder.jpg`,alt:"",role:"presentation"})}),e.jsx(F,{unstable_viewTransition:!0,prefetch:"intent",to:`/articles/${t}`,className:s.postLink,onMouseEnter:N,onMouseLeave:b,children:e.jsxs("div",{className:s.postDetails,children:[e.jsxs("div",{"aria-hidden":!0,className:s.postDate,children:[e.jsx(Z,{notchWidth:"64px",notchHeight:"8px"}),r]}),e.jsx(u,{as:"h2",level:a?2:4,children:o}),e.jsx(h,{size:a?"l":"s",as:"p",children:p}),e.jsxs("div",{className:s.postFooter,children:[e.jsx(f,{secondary:!0,iconHoverShift:!0,icon:"chevron-right",as:"div",children:"Read article"}),e.jsx(h,{className:s.timecode,size:"s",children:m})]})]})}),a&&e.jsx(h,{"aria-hidden":!0,className:s.postTag,size:"s",children:"477"})]})}function te({index:t}){return e.jsx("article",{"aria-hidden":"true",className:L(s.post,s.skeleton),"data-featured":"false",style:t!==void 0?g({delay:t*100+200}):void 0,children:e.jsx("div",{className:s.postLink,children:e.jsxs("div",{className:s.postDetails,children:[e.jsxs("div",{"aria-hidden":!0,className:s.postDate,children:[e.jsx(Z,{notchWidth:"64px",notchHeight:"8px"}),"Coming soon..."]}),e.jsx(u,{className:s.skeletonBone,as:"h2",level:4,style:{height:24,width:"70%"}}),e.jsx(h,{className:s.skeletonBone,size:"s",as:"p",style:{height:90,width:"100%"}}),e.jsxs("div",{className:s.postFooter,children:[e.jsx(f,{secondary:!0,iconHoverShift:!0,icon:"chevron-right",as:"div",children:"Read more"}),e.jsx(h,{className:s.timecode,size:"s",children:"00:00:00:00"})]})]})})})}function ue(){const{posts:t,featured:d}=S(),{width:m}=B(),i=m<=1190,n=e.jsxs("header",{className:s.header,children:[e.jsx(u,{className:s.heading,level:5,as:"h1",children:e.jsx(y,{text:"Latest articles"})}),e.jsx(oe,{className:s.barcode})]}),r=e.jsxs("div",{className:s.list,children:[!i&&n,t.map(({slug:c,...o},p)=>e.jsx(V,{slug:c,index:p,...o},c)),Array(2).fill().map((c,o)=>e.jsx(te,{index:o},o))]}),l=e.jsx(V,{...d});return e.jsxs("article",{className:s.articles,children:[e.jsxs(I,{className:s.content,children:[!i&&e.jsxs("div",{className:s.grid,children:[r,l]}),i&&e.jsxs("div",{className:s.grid,children:[n,l,r]})]}),e.jsx(M,{})]})}function oe({className:t}){return e.jsx("svg",{className:t,width:"153",height:"20",fill:"currentColor",viewBox:"0 0 153 20",children:e.jsx("path",{fillOpacity:".6",d:"M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"})})}function je(){return k({title:"Articles",description:"A collection of technical design and development articles. May contain incoherent ramblings."})}export{ue as default,je as meta};
