import{r as _,j as n}from"./jsx-runtime-BfF-YriY.js";import{c as l,T as k}from"./heading-B2sVkuwd.js";import{L as j}from"./components-7U91X0lH.js";import{c as g}from"./config-C6BTT1dW.js";const y="_link_4ieiq_3",v={link:y},$=["txt","png","jpg"];function E(s){const o=$.includes(s==null?void 0:s.split(".").pop());return(s==null?void 0:s.includes("://"))||(s==null?void 0:s[0])==="#"||o}const L=_.forwardRef(({rel:s,target:o,children:e,secondary:a,className:i,href:t,...u},m)=>{const r=t==null?void 0:t.includes("://"),p=s||(r?"noreferrer noopener":void 0),x=o||(r?"_blank":void 0),d={className:l(v.link,i),"data-secondary":a,rel:p,href:t,target:x,ref:m,...u};return E(t)?n.jsx("a",{...d,href:t,children:e}):n.jsx(j,{unstable_viewTransition:!0,prefetch:"intent",...d,to:t,children:e})}),N="_footer_if18v_3",w="_link_if18v_31",T="_date_if18v_39",c={footer:N,link:w,date:T},D=({className:s})=>n.jsx("footer",{className:l(c.footer,s),children:n.jsxs(k,{size:"s",align:"center",children:[n.jsx("span",{className:c.date,children:`© ${new Date().getFullYear()} ${g.name}.`}),n.jsx(L,{secondary:!0,className:c.link,href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})}),V="_section_1278e_3",b={section:V},S=_.forwardRef(({as:s="div",children:o,className:e,...a},i)=>n.jsx(s,{className:l(b.section,e),ref:i,...a,children:o}));export{D as F,L,S};
