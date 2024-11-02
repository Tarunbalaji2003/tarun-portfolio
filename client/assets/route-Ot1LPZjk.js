import{r as s,j as e}from"./jsx-runtime-BfF-YriY.js";import{s as W}from"./license-plate-output-DAPrN-Lt.js";import{S as F,F as ce}from"./section-Dn-djC0I.js";import{b as le}from"./meta-DxDjxI8D.js";import{_ as Y,L as K}from"./components-7U91X0lH.js";import{D as X}from"./decoder-text-ChhECSdP.js";import{b as D,H as q,a as P,t as J,B as Z,e as k,T as E,L as G}from"./heading-uOGKedE8.js";import{a as ee,I as de}from"./image-C718SQX4.js";import{V as T}from"./visually-hidden-DNbPzCjn.js";import{u as ue}from"./useScrollToHash-CE90UMHK.js";import{c as S}from"./config-C6BTT1dW.js";import{D as te}from"./divider-BpMiQ5sl.js";import{u as pe}from"./useWindowSize-CCgmKmhO.js";import{j as $}from"./jenkinsstage-CJ9X_G6q.js";function me(t,r,m){const d=s.useRef();s.useEffect(()=>{d.current=t}),s.useEffect(()=>{function a(){d.current()}if(r!==null){let i=setInterval(a,r);return()=>clearInterval(i)}},[r,m])}function he(t){const r=s.useRef();return s.useEffect(()=>{r.current=t},[t]),r.current}const xe="/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";function _e(){return()=>{}}function se(){return s.useSyncExternalStore(_e,()=>!0,()=>!1)}const fe="_intro_198u2_1",je="_text_198u2_9",ge="_name_198u2_36",ve="_title_198u2_74",be="_row_198u2_78",ye="_word_198u2_107",we="_introTextReveal_198u2_1",Se="_line_198u2_183",Ie="_introLine_198u2_1",Ne="_scrollIndicator_198u2_232",ke="_introScrollIndicator_198u2_1",De="_mobileScrollIndicator_198u2_299",Te="_introMobileScrollIndicator_198u2_1",u={intro:fe,text:je,name:ge,title:ve,row:be,word:ye,introTextReveal:we,line:Se,introLine:Ie,scrollIndicator:Ne,introScrollIndicator:ke,mobileScrollIndicator:De,introMobileScrollIndicator:Te},$e=s.lazy(()=>Y(()=>import("./displacement-sphere-BKzLI1sl.js"),__vite__mapDeps([0,1,2,3])).then(t=>({default:t.DisplacementSphere})));function Le({id:t,sectionRef:r,scrollIndicatorHidden:m,...d}){const{theme:a}=ee(),{disciplines:i}=S,[o,h]=s.useState(0),f=he(a),j=[i.slice(0,-1).join(", "),i.slice(-1)[0]].join(", and "),y=i.find((c,_)=>_===o),g=`${t}-title`,x=ue(),v=se();me(()=>{const c=(o+1)%i.length;h(c)},5e3,a),s.useEffect(()=>{f&&f!==a&&h(0)},[a,f]);const b=c=>{c.preventDefault(),x(c.currentTarget.href)};return e.jsx(F,{className:u.intro,as:"section",ref:r,id:t,"aria-labelledby":g,tabIndex:-1,...d,children:e.jsx(D,{in:!0,timeout:3e3,children:({visible:c,status:_})=>e.jsxs(e.Fragment,{children:[v&&e.jsx(s.Suspense,{children:e.jsx($e,{})}),e.jsxs("header",{className:u.text,children:[e.jsx("h1",{className:u.name,"data-visible":c,id:g,children:e.jsx(X,{text:S.name,delay:500})}),e.jsxs(q,{level:0,as:"h2",className:u.title,children:[e.jsx(T,{className:u.label,children:`${S.role} + ${j}`}),e.jsxs("span",{"aria-hidden":!0,className:u.row,children:[e.jsx("span",{className:u.word,"data-status":_,style:P({delay:J.base.durationXS}),children:S.role}),e.jsx("span",{className:u.line,"data-status":_})]}),e.jsx("div",{className:u.row,children:i.map(w=>e.jsx(D,{unmount:!0,in:w===y,timeout:{enter:3e3,exit:2e3},children:({status:I,nodeRef:N})=>e.jsx("span",{"aria-hidden":!0,ref:N,className:u.word,"data-plus":!0,"data-status":I,style:P({delay:J.base.durationL}),children:w})},w))})]})]}),e.jsx(K,{to:"/#project-1",className:u.scrollIndicator,"data-status":_,"data-hidden":m,onClick:b,children:e.jsx(T,{children:"Scroll to projects"})}),e.jsxs(K,{to:"/#project-1",className:u.mobileScrollIndicator,"data-status":_,"data-hidden":m,onClick:b,children:[e.jsx(T,{children:"Scroll to projects"}),e.jsx("svg",{"aria-hidden":!0,stroke:"currentColor",width:"43",height:"15",viewBox:"0 0 43 15",children:e.jsx("path",{d:"M1 1l20.5 12L42 1",strokeWidth:"2",fill:"none"})})]})]})},a)})}const L="/assets/tarun-BRcqi0IW.jpg",ne="/assets/katakana-DpGorte5.svg",Re="_profile_s38cy_1",He="_content_s38cy_37",Me="_column_s38cy_50",ze="_title_s38cy_59",Pe="_description_s38cy_70",Ee="_tag_s38cy_80",Fe="_tagText_s38cy_93",qe="_image_s38cy_114",Ae="_svg_s38cy_119",Oe="_button_s38cy_135",p={profile:Re,content:He,column:Me,title:ze,description:Pe,tag:Ee,tagText:Fe,image:qe,svg:Ae,button:Oe},Be=({visible:t,titleId:r})=>e.jsxs(s.Fragment,{children:[e.jsx(q,{className:p.title,"data-visible":t,level:3,id:r,children:e.jsx(X,{text:"Hi there",start:t,delay:500})}),e.jsx(E,{className:p.description,"data-visible":t,size:"l",as:"p",children:"I’m Tarun, currently living in Tiruppur, pursuing my B.Tech (Hons) in Artificial Intelligence & Data Science. My work spans across cloud computing, AI, and DevOps, with projects in areas like Kubernetes, CI/CD pipelines, and number plate recognition systems. I’m passionate about building scalable solutions and leveraging AI, generative AI, Docker, AWS, and Kubernetes to solve real-world problems."}),e.jsx(E,{className:p.description,"data-visible":t,size:"l",as:"p",children:"In my free time, I enjoy working on personal projects, practicing my coding skills, and exploring cutting-edge AI technologies. I’m always keen to hear about exciting projects, so feel free to reach out!"})]}),Ce=({id:t,visible:r,sectionRef:m})=>{const[d,a]=s.useState(!1),i=`${t}-title`;return e.jsx(F,{className:p.profile,onFocus:()=>a(!0),onBlur:()=>a(!1),as:"section",id:t,ref:m,"aria-labelledby":i,tabIndex:-1,children:e.jsx(D,{in:r||d,timeout:0,children:({visible:o,nodeRef:h})=>e.jsxs("div",{className:p.content,ref:h,children:[e.jsxs("div",{className:p.column,children:[e.jsx(Be,{visible:o,titleId:i}),e.jsx(Z,{secondary:!0,className:p.button,"data-visible":o,href:"/contact",icon:"send",children:"Send me a message"})]}),e.jsxs("div",{className:p.column,children:[e.jsxs("div",{className:p.tag,"aria-hidden":!0,children:[e.jsx(te,{notchWidth:"64px",notchHeight:"8px",collapsed:!o,collapseDelay:1e3}),e.jsx("div",{className:p.tagText,"data-visible":o,children:"About me"})]}),e.jsxs("div",{className:p.image,children:[e.jsx(de,{reveal:!0,delay:100,placeholder:L,srcSet:`${L} 480w, ${L}} 960w`,width:960,height:1280,sizes:`(max-width: ${k.mobile}px) 100vw, 480px`,alt:"Me in the seashore..."}),e.jsx("svg",{className:p.svg,"data-visible":o,viewBox:"0 0 136 766",children:e.jsx("use",{href:`${ne}#katakana-profile`})})]})]})]})})})},Ve="/assets/iphone-11-DGIHa_Ph.glb",We="/assets/macbook-pro-DZn-FKKF.glb",Q={SpringUp:"spring-up",LaptopOpen:"laptop-open"},R={phone:{url:Ve,width:374,height:512,position:{x:0,y:0,z:0},animation:Q.SpringUp},laptop:{url:We,width:1280,height:800,position:{x:0,y:0,z:0},animation:Q.LaptopOpen}},Ke="_summary_1cfqm_1",Je="_content_1cfqm_35",Ge="_details_1cfqm_65",Qe="_preview_1cfqm_78",Ue="_model_1cfqm_88",Ye="_loader_1cfqm_142",Xe="_svg_1cfqm_151",Ze="_index_1cfqm_192",et="_indexNumber_1cfqm_201",tt="_title_1cfqm_222",st="_description_1cfqm_241",nt="_button_1cfqm_260",l={summary:Ke,content:Je,details:Ge,preview:Qe,model:Ue,loader:Ye,svg:Xe,index:Ze,indexNumber:et,title:tt,description:st,button:nt},U=s.lazy(()=>Y(()=>import("./index-CVB-fM8p.js"),__vite__mapDeps([4,1,5,6,7,8,9,2,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then(t=>({default:t.Model})));function H({id:t,visible:r,sectionRef:m,index:d,title:a,description:i,model:o,buttonText:h,buttonLink:f,alternate:j,...y}){const[g,x]=s.useState(!1),[v,b]=s.useState(!1),{theme:c}=ee(),{width:_}=pe(),w=se(),I=`${t}-title`,N=_<=k.tablet,oe=c==="light"?.7:1,re=d<10?`0${d}`:d,A=`(max-width: ${k.tablet}px) 30vw, 20vw`,ae=`(max-width: ${k.tablet}px) 80vw, 40vw`;function O(){b(!0)}function B(n,ie){return e.jsx("svg",{type:"project","data-visible":ie&&v,"data-light":c==="light",style:P({opacity:oe}),className:l.svg,"data-device":n,viewBox:"0 0 751 136",children:e.jsx("use",{href:`${ne}#katakana-project`})})}function C(n){return e.jsxs("div",{className:l.details,children:[e.jsxs("div",{"aria-hidden":!0,className:l.index,children:[e.jsx(te,{notchWidth:"64px",notchHeight:"8px",collapsed:!n,collapseDelay:1e3}),e.jsx("span",{className:l.indexNumber,"data-visible":n,children:re})]}),e.jsx(q,{level:3,as:"h2",className:l.title,"data-visible":n,id:I,children:a}),e.jsx(E,{className:l.description,"data-visible":n,as:"p",children:i}),e.jsx("div",{className:l.button,"data-visible":n,children:e.jsx(Z,{iconHoverShift:!0,href:f,iconEnd:"arrow-right",children:h})})]})}function V(n){return e.jsxs("div",{className:l.preview,children:[o.type==="laptop"&&e.jsxs(e.Fragment,{children:[B("laptop",n),e.jsxs("div",{className:l.model,"data-device":"laptop",children:[!v&&e.jsx(G,{center:!0,className:l.loader,"data-visible":n}),w&&n&&e.jsx(s.Suspense,{children:e.jsx(U,{alt:o.alt,cameraPosition:{x:0,y:0,z:8},showDelay:700,onLoad:O,show:n,models:[{...R.laptop,texture:{...o.textures[0],sizes:ae}}]})})]})]}),o.type==="phone"&&e.jsxs(e.Fragment,{children:[B("phone",n),e.jsxs("div",{className:l.model,"data-device":"phone",children:[!v&&e.jsx(G,{center:!0,className:l.loader,"data-visible":n}),w&&n&&e.jsx(s.Suspense,{children:e.jsx(U,{alt:o.alt,cameraPosition:{x:0,y:0,z:11.5},showDelay:300,onLoad:O,show:n,models:[{...R.phone,position:{x:-.6,y:1.1,z:0},texture:{...o.textures[0],sizes:A}},{...R.phone,position:{x:.6,y:-.5,z:.3},texture:{...o.textures[1],sizes:A}}]})})]})]})]})}return e.jsx(F,{className:l.summary,"data-alternate":j,"data-first":d===1,onFocus:()=>x(!0),onBlur:()=>x(!1),as:"section","aria-labelledby":I,ref:m,id:t,tabIndex:-1,...y,children:e.jsx("div",{className:l.content,children:e.jsx(D,{in:r||g,children:({visible:n})=>e.jsxs(e.Fragment,{children:[!j&&!N&&e.jsxs(e.Fragment,{children:[C(n),V(n)]}),(j||N)&&e.jsxs(e.Fragment,{children:[V(n),C(n)]})]})})})})}const ot="_home_duvso_5",rt="_outer_duvso_10",at="_projectSummary_duvso_21",it={home:ot,outer:rt,projectSummary:at},M="/assets/alertmail-1Q223vcY.jpg",z="/assets/alertmanager-BpkHHhcJ.jpg",yt=()=>[{rel:"prefetch",href:"/draco/draco_wasm_wrapper.js",as:"script",type:"text/javascript",importance:"low"},{rel:"prefetch",href:"/draco/draco_decoder.wasm",as:"fetch",type:"application/wasm",importance:"low"}],wt=()=>le({title:" Developer",description:`Design portfolio of ${S.name} — a DevSecOps engineer.`}),St=()=>{const[t,r]=s.useState([]),[m,d]=s.useState(!1),a=s.useRef(),i=s.useRef(),o=s.useRef(),h=s.useRef(),f=s.useRef();return s.useEffect(()=>{const j=[a,i,o,h,f],y=new IntersectionObserver((x,v)=>{x.forEach(b=>{if(b.isIntersecting){const c=b.target;if(v.unobserve(c),t.includes(c))return;r(_=>[..._,c])}})},{rootMargin:"0px 0px -10% 0px",threshold:.1}),g=new IntersectionObserver(([x])=>{d(!x.isIntersecting)},{rootMargin:"-100% 0px 0px 0px"});return j.forEach(x=>{y.observe(x.current)}),g.observe(a.current),()=>{y.disconnect(),g.disconnect()}},[t]),e.jsxs("div",{className:it.home,children:[e.jsx(Le,{id:"intro",sectionRef:a,scrollIndicatorHidden:m}),e.jsx(H,{id:"project-1",sectionRef:i,visible:t.includes(i.current),index:1,title:"Real-Time License Plate Detection Redefined",description:"Delivers real-time, high-accuracy license plate detection with scalable deployment and instant alerts",buttonText:"View project",buttonLink:"/projects/numberplate",model:{type:"laptop",alt:"Demo",textures:[{srcSet:`${W} 1280w, ${W} 2560w`,placeholder:xe}]}}),e.jsx(H,{id:"project-2",alternate:!0,sectionRef:o,visible:t.includes(o.current),index:2,title:"Prometheus Alert Manager",description:"Configuration and development of a system using Prometheus to monitor metrics and send alerts via email.",buttonText:"Click for Github link",buttonLink:"",model:{type:"phone",alt:"App login screen",textures:[{srcSet:`${z} 375w, ${z} 750w`,placeholder:z},{srcSet:`${M} 375w, ${M} 750w`,placeholder:M}]}}),e.jsx(H,{id:"project-3",sectionRef:h,visible:t.includes(h.current),index:3,title:"Automated Deployment with Jenkins",description:"Streamlining CI/CD processes with Jenkins, SonarQube, Docker, and Nexus for efficient code deployment and artifact management.",buttonText:"View project",buttonLink:"/projects/jenkins",model:{type:"laptop",alt:"Jenkins pipeline stages for automated deployment",textures:[{srcSet:`${$} 800w, ${$} 1920w`,placeholder:$}]}}),e.jsx(Ce,{sectionRef:f,visible:t.includes(f.current),id:"details"}),e.jsx(ce,{})]})};export{St as H,Q as M,yt as l,wt as m};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/displacement-sphere-BKzLI1sl.js","assets/jsx-runtime-BfF-YriY.js","assets/three-CXr6pZg9.js","assets/displacement-sphere-D2dKsJud.css","assets/index-CVB-fM8p.js","assets/image-C718SQX4.js","assets/heading-uOGKedE8.js","assets/components-7U91X0lH.js","assets/heading-DxmoR0-i.css","assets/image-CQFqa4Pm.css","assets/throttle-BgiUmwhn.js","assets/use-spring-BHB8byz_.js","assets/license-plate-output-DAPrN-Lt.js","assets/section-Dn-djC0I.js","assets/config-C6BTT1dW.js","assets/section-CUrllC_C.css","assets/meta-DxDjxI8D.js","assets/decoder-text-ChhECSdP.js","assets/visually-hidden-DNbPzCjn.js","assets/visually-hidden-DZKbrLgw.css","assets/decoder-text-DSqD8fOZ.css","assets/useScrollToHash-CE90UMHK.js","assets/divider-BpMiQ5sl.js","assets/divider-CJ0zz9kw.css","assets/useWindowSize-CCgmKmhO.js","assets/jenkinsstage-CJ9X_G6q.js","assets/index-BUsloKFI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}