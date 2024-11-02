import{r as b,j as de}from"./jsx-runtime-BfF-YriY.js";import{u as It,r as jt}from"./image-sm8zEGQ6.js";import{W as kt,S as Ze,P as zt,a as Nt,G as Me,b as Wt,D as Ce,x as De,y as Kt,z as Pe,B as pe,O as _t,I as Gt,J as Fe,r as Ht,c as $t,d as Xt,t as Re,m as Yt,K as Be,V as ne,N as Et}from"./three-CXr6pZg9.js";import{i as J,g as G,j as ie,o as Zt,p as qt,q as Jt,r as Qt,u as qe,c as er,a as tr,n as rr}from"./heading-B2sVkuwd.js";import{M as Ue}from"./route-CSV6nG7Q.js";import{t as nr}from"./throttle-BgiUmwhn.js";import{n as xe,p as g,d as z,s as se,a as he,b as Oe,i as Je,c as R,e as oe,m as ge,f as q,g as ee,h as sr,j as U,M as ar,k as ir,v as or,l as ur,o as H,q as ye,r as Qe,S as cr,t as lr,w as fr,x as dr,y as pr,z as hr,A as mr,B as gr,C as yr,D as vr,u as Le}from"./use-spring-CcAbRleG.js";import"./components-7U91X0lH.js";import"./license-plate-output-DAPrN-Lt.js";import"./section-DMpVui18.js";import"./config-C6BTT1dW.js";import"./meta-DxDjxI8D.js";import"./decoder-text-B3P9jeDG.js";import"./visually-hidden-DQc8RACT.js";import"./useScrollToHash-B_IqptpU.js";import"./divider-BHVqM2G5.js";import"./useWindowSize-CCgmKmhO.js";import"./jenkinsstage-CJ9X_G6q.js";const we=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Vr="framerAppearId",br="data-"+we(Vr);function xr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function et(t){return typeof t=="string"||Array.isArray(t)}function wr(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Sr=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Se=["initial",...Sr];function tt(t){return wr(t.animate)||Se.some(e=>et(t[e]))}function Tr(t){return!!(tt(t)||t.variants)}const Ie={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Te={};for(const t in Ie)Te[t]={isEnabled:e=>Ie[t].some(r=>!!e[r])};const Ar={},te=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],N=new Set(te);function Mr(t,{layout:e,layoutId:r}){return N.has(t)||t.startsWith("origin")||(e||r!==void 0)&&(!!Ar[t]||t==="opacity")}const Cr={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Dr=te.length;function Pr(t,{enableHardwareAcceleration:e=!0,allowTransformNone:r=!0},n,s){let a="";for(let i=0;i<Dr;i++){const c=te[i];if(t[c]!==void 0){const o=Cr[c]||c;a+=`${o}(${t[c]}) `}}return e&&!t.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(t,n?"":a):r&&n&&(a="none"),a}const Fr=(t,e)=>e&&typeof t=="number"?e.transform(t):t,je={...xe,transform:Math.round},rt={borderWidth:g,borderTopWidth:g,borderRightWidth:g,borderBottomWidth:g,borderLeftWidth:g,borderRadius:g,radius:g,borderTopLeftRadius:g,borderTopRightRadius:g,borderBottomRightRadius:g,borderBottomLeftRadius:g,width:g,maxWidth:g,height:g,maxHeight:g,size:g,top:g,right:g,bottom:g,left:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,rotate:z,rotateX:z,rotateY:z,rotateZ:z,scale:se,scaleX:se,scaleY:se,scaleZ:se,skew:z,skewX:z,skewY:z,distance:g,translateX:g,translateY:g,translateZ:g,x:g,y:g,z:g,perspective:g,transformPerspective:g,opacity:he,originX:Oe,originY:Oe,originZ:g,zIndex:je,fillOpacity:he,strokeOpacity:he,numOctaves:je};function nt(t,e,r,n){const{style:s,vars:a,transform:i,transformOrigin:c}=t;let o=!1,u=!1,l=!0;for(const d in e){const p=e[d];if(Je(d)){a[d]=p;continue}const f=rt[d],y=Fr(p,f);if(N.has(d)){if(o=!0,i[d]=y,!l)continue;p!==(f.default||0)&&(l=!1)}else d.startsWith("origin")?(u=!0,c[d]=y):s[d]=y}if(e.transform||(o||n?s.transform=Pr(t.transform,r,l,n):s.transform&&(s.transform="none")),u){const{originX:d="50%",originY:p="50%",originZ:f=0}=c;s.transformOrigin=`${d} ${p} ${f}`}}function ke(t,e,r){return typeof t=="string"?t:g.transform(e+r*t)}function Rr(t,e,r){const n=ke(e,t.x,t.width),s=ke(r,t.y,t.height);return`${n} ${s}`}const Br={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ur={offset:"strokeDashoffset",array:"strokeDasharray"};function Or(t,e,r=1,n=0,s=!0){t.pathLength=1;const a=s?Br:Ur;t[a.offset]=g.transform(-n);const i=g.transform(e),c=g.transform(r);t[a.array]=`${i} ${c}`}function Lr(t,{attrX:e,attrY:r,attrScale:n,originX:s,originY:a,pathLength:i,pathSpacing:c=1,pathOffset:o=0,...u},l,d,p){if(nt(t,u,l,p),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:y,dimensions:h}=t;f.transform&&(h&&(y.transform=f.transform),delete f.transform),h&&(s!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=Rr(h,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(f.x=e),r!==void 0&&(f.y=r),n!==void 0&&(f.scale=n),i!==void 0&&Or(f,i,c,o,!1)}const Ir=t=>typeof t=="string"&&t.toLowerCase()==="svg";function st(t,{style:e,vars:r},n,s){Object.assign(t.style,e,s&&s.getProjectionStyles(n));for(const a in r)t.style.setProperty(a,r[a])}const at=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function jr(t,e,r,n){st(t,e,void 0,n);for(const s in e.attrs)t.setAttribute(at.has(s)?s:we(s),e.attrs[s])}function it(t,e){const{style:r}=t,n={};for(const s in r)(R(r[s])||e.style&&R(e.style[s])||Mr(s,t))&&(n[s]=r[s]);return n}function kr(t,e){const r=it(t,e);for(const n in t)if(R(t[n])||R(e[n])){const s=te.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;r[s]=t[n]}return r}function ot(t,e,r,n={},s={}){return typeof e=="function"&&(e=e(r!==void 0?r:t.custom,n,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(r!==void 0?r:t.custom,n,s)),e}const ut=t=>Array.isArray(t),zr=t=>ut(t)?t[t.length-1]||0:t;function Nr(t){const e={};return t.values.forEach((r,n)=>e[n]=r.get()),e}function Wr(t){const e={};return t.values.forEach((r,n)=>e[n]=r.getVelocity()),e}function Kr(t,e,r){const n=t.getProps();return ot(n,e,r!==void 0?r:n.custom,Nr(t),Wr(t))}const _r={current:!1},ct=t=>Array.isArray(t)&&typeof t[0]=="number";function lt(t){return!!(!t||typeof t=="string"&&ft[t]||ct(t)||Array.isArray(t)&&t.every(lt))}const Z=([t,e,r,n])=>`cubic-bezier(${t}, ${e}, ${r}, ${n})`,ft={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Z([0,.65,.55,1]),circOut:Z([.55,0,1,.45]),backIn:Z([.31,.01,.66,-.59]),backOut:Z([.33,1.53,.69,.99])};function dt(t){if(t)return ct(t)?Z(t):Array.isArray(t)?t.map(dt):ft[t]}function Gr(t,e,r,{delay:n=0,duration:s,repeat:a=0,repeatType:i="loop",ease:c,times:o}={}){const u={[e]:r};o&&(u.offset=o);const l=dt(c);return Array.isArray(l)&&(u.easing=l),t.animate(u,{delay:n,duration:s,easing:Array.isArray(l)?"linear":l,fill:"both",iterations:a+1,direction:i==="reverse"?"alternate":"normal"})}function Hr(t,{repeat:e,repeatType:r="loop"}){const n=e&&r!=="loop"&&e%2===1?0:t.length-1;return t[n]}function pt(t){let e;return()=>(e===void 0&&(e=t()),e)}const $r=pt(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Xr=new Set(["opacity","clipPath","filter","transform"]),ae=10,Yr=2e4,Er=(t,e)=>e.type==="spring"||t==="backgroundColor"||!lt(e.ease);function Zr(t,e,{onUpdate:r,onComplete:n,...s}){if(!($r()&&Xr.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let i=!1,c,o,u=!1;const l=()=>{o=new Promise(v=>{c=v})};l();let{keyframes:d,duration:p=300,ease:f,times:y}=s;if(Er(e,s)){const v=oe({...s,repeat:0,delay:0});let x={done:!1,value:d[0]};const w=[];let M=0;for(;!x.done&&M<Yr;)x=v.sample(M),w.push(x.value),M+=ae;y=void 0,d=w,p=M-ae,f="linear"}const h=Gr(t.owner.current,e,d,{...s,duration:p,ease:f,times:y}),m=()=>{u=!1,h.cancel()},V=()=>{u=!0,J.update(m),c(),l()};return h.onfinish=()=>{u||(t.set(Hr(d,s)),n&&n(),V())},{then(v,x){return o.then(v,x)},attachTimeline(v){return h.timeline=v,h.onfinish=null,G},get time(){return ge(h.currentTime||0)},set time(v){h.currentTime=q(v)},get speed(){return h.playbackRate},set speed(v){h.playbackRate=v},get duration(){return ge(p)},play:()=>{i||(h.play(),ie(m))},pause:()=>h.pause(),stop:()=>{if(i=!0,h.playState==="idle")return;const{currentTime:v}=h;if(v){const x=oe({...s,autoplay:!1});t.setWithVelocity(x.sample(v-ae).value,x.sample(v).value,ae)}V()},complete:()=>{u||h.finish()},cancel:V}}function qr({keyframes:t,delay:e,onUpdate:r,onComplete:n}){const s=()=>(r&&r(t[t.length-1]),n&&n(),{time:0,speed:1,duration:0,play:G,pause:G,stop:G,then:a=>(a(),Promise.resolve()),cancel:G,complete:G});return e?oe({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const Jr={type:"spring",stiffness:500,damping:25,restSpeed:10},Qr=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),en={type:"keyframes",duration:.8},tn={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rn=(t,{keyframes:e})=>e.length>2?en:N.has(t)?t.startsWith("scale")?Qr(e[1]):Jr:tn,ve=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ee.test(e)||e==="0")&&!e.startsWith("url(")),nn=new Set(["brightness","contrast","saturate","opacity"]);function sn(t){const[e,r]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=r.match(sr)||[];if(!n)return t;const s=r.replace(n,"");let a=nn.has(e)?1:0;return n!==r&&(a*=100),e+"("+a+s+")"}const an=/([a-z-]*)\(.*?\)/g,Ve={...ee,getAnimatableNone:t=>{const e=t.match(an);return e?e.map(sn).join(" "):t}},on={...rt,color:U,backgroundColor:U,outlineColor:U,fill:U,stroke:U,borderColor:U,borderTopColor:U,borderRightColor:U,borderBottomColor:U,borderLeftColor:U,filter:Ve,WebkitFilter:Ve},Ae=t=>on[t];function ht(t,e){let r=Ae(t);return r!==Ve&&(r=ee),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const mt=t=>/^0[^.\s]+$/.test(t);function un(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||mt(t)}function cn(t,e,r,n){const s=ve(e,r);let a;Array.isArray(r)?a=[...r]:a=[null,r];const i=n.from!==void 0?n.from:t.get();let c;const o=[];for(let u=0;u<a.length;u++)a[u]===null&&(a[u]=u===0?i:a[u-1]),un(a[u])&&o.push(u),typeof a[u]=="string"&&a[u]!=="none"&&a[u]!=="0"&&(c=a[u]);if(s&&o.length&&c)for(let u=0;u<o.length;u++){const l=o[u];a[l]=ht(e,c)}return a}function ln({when:t,delay:e,delayChildren:r,staggerChildren:n,staggerDirection:s,repeat:a,repeatType:i,repeatDelay:c,from:o,elapsed:u,...l}){return!!Object.keys(l).length}function gt(t,e){return t[e]||t.default||t}const yt=(t,e,r,n={})=>s=>{const a=gt(n,t)||{},i=a.delay||n.delay||0;let{elapsed:c=0}=n;c=c-q(i);const o=cn(e,t,r,a),u=o[0],l=o[o.length-1],d=ve(t,u),p=ve(t,l);let f={keyframes:o,velocity:e.getVelocity(),ease:"easeOut",...a,delay:-c,onUpdate:y=>{e.set(y),a.onUpdate&&a.onUpdate(y)},onComplete:()=>{s(),a.onComplete&&a.onComplete()}};if(ln(a)||(f={...f,...rn(t,f)}),f.duration&&(f.duration=q(f.duration)),f.repeatDelay&&(f.repeatDelay=q(f.repeatDelay)),!d||!p||_r.current||a.type===!1||ar.skipAnimations)return qr(f);if(!n.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const y=Zr(e,t,f);if(y)return y}return oe(f)};function ue(t){return!!(R(t)&&t.add)}const vt=t=>/^\-?\d*\.?\d+$/.test(t),Vt=t=>e=>e.test(t),fn={test:t=>t==="auto",parse:t=>t},bt=[xe,g,ir,z,or,ur,fn],E=t=>bt.find(Vt(t)),dn=[...bt,U,ee],pn=t=>dn.find(Vt(t));function hn(t,e,r){t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,H(r))}function mn(t,e){const r=Kr(t,e);let{transitionEnd:n={},transition:s={},...a}=r?t.makeTargetAnimatable(r,!1):{};a={...a,...n};for(const i in a){const c=zr(a[i]);hn(t,i,c)}}function gn(t,e,r){var n,s;const a=Object.keys(e).filter(c=>!t.hasValue(c)),i=a.length;if(i)for(let c=0;c<i;c++){const o=a[c],u=e[o];let l=null;Array.isArray(u)&&(l=u[0]),l===null&&(l=(s=(n=r[o])!==null&&n!==void 0?n:t.readValue(o))!==null&&s!==void 0?s:e[o]),l!=null&&(typeof l=="string"&&(vt(l)||mt(l))?l=parseFloat(l):!pn(l)&&ee.test(u)&&(l=ht(o,u)),t.addValue(o,H(l,{owner:t})),r[o]===void 0&&(r[o]=l),l!==null&&t.setBaseTarget(o,l))}}function yn(t,e){return e?(e[t]||e.default||e).from:void 0}function vn(t,e,r){const n={};for(const s in t){const a=yn(s,e);if(a!==void 0)n[s]=a;else{const i=r.getValue(s);i&&(n[s]=i.get())}}return n}function Vn({protectedKeys:t,needsAnimating:e},r){const n=t.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,n}function bn(t,e){const r=t.get();if(Array.isArray(e)){for(let n=0;n<e.length;n++)if(e[n]!==r)return!0}else return r!==e}function xn(t,e,{delay:r=0,transitionOverride:n,type:s}={}){let{transition:a=t.getDefaultTransition(),transitionEnd:i,...c}=t.makeTargetAnimatable(e);const o=t.getValue("willChange");n&&(a=n);const u=[],l=s&&t.animationState&&t.animationState.getState()[s];for(const d in c){const p=t.getValue(d),f=c[d];if(!p||f===void 0||l&&Vn(l,d))continue;const y={delay:r,elapsed:0,...gt(a||{},d)};if(window.HandoffAppearAnimations){const V=t.getProps()[br];if(V){const C=window.HandoffAppearAnimations(V,d,p,J);C!==null&&(y.elapsed=C,y.isHandoff=!0)}}let h=!y.isHandoff&&!bn(p,f);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(h=!1),p.animation&&(h=!1),h)continue;p.start(yt(d,p,f,t.shouldReduceMotion&&N.has(d)?{type:!1}:y));const m=p.animation;ue(o)&&(o.add(d),m.then(()=>o.remove(d))),u.push(m)}return i&&Promise.all(u).then(()=>{i&&mn(t,i)}),u}const ze=()=>({min:0,max:0}),xt=()=>({x:ze(),y:ze()});function wn({top:t,left:e,right:r,bottom:n}){return{x:{min:e,max:r},y:{min:t,max:n}}}function Sn(t,e){if(!e)return t;const r=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}function Tn(t,e){return wn(Sn(t.getBoundingClientRect(),e))}function An(t){return t instanceof SVGElement&&t.tagName!=="svg"}function wt(t,e,r){const n=R(t)?t:H(t);return n.start(yt("",n,e,r)),n.animation}const Mn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Cn(t){const e=Mn.exec(t);if(!e)return[,];const[,r,n]=e;return[r,n]}function be(t,e,r=1){const[n,s]=Cn(t);if(!n)return;const a=window.getComputedStyle(e).getPropertyValue(n);if(a){const i=a.trim();return vt(i)?parseFloat(i):i}else return ye(s)?be(s,e,r+1):s}function Dn(t,{...e},r){const n=t.current;if(!(n instanceof Element))return{target:e,transitionEnd:r};r&&(r={...r}),t.values.forEach(s=>{const a=s.get();if(!ye(a))return;const i=be(a,n);i&&s.set(i)});for(const s in e){const a=e[s];if(!ye(a))continue;const i=be(a,n);i&&(e[s]=i,r||(r={}),r[s]===void 0&&(r[s]=a))}return{target:e,transitionEnd:r}}const Pn=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),St=t=>Pn.has(t),Fn=t=>Object.keys(t).some(St),Ne=t=>t===xe||t===g,We=(t,e)=>parseFloat(t.split(", ")[e]),Ke=(t,e)=>(r,{transform:n})=>{if(n==="none"||!n)return 0;const s=n.match(/^matrix3d\((.+)\)$/);if(s)return We(s[1],e);{const a=n.match(/^matrix\((.+)\)$/);return a?We(a[1],t):0}},Rn=new Set(["x","y","z"]),Bn=te.filter(t=>!Rn.has(t));function Un(t){const e=[];return Bn.forEach(r=>{const n=t.getValue(r);n!==void 0&&(e.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),e.length&&t.render(),e}const $={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Ke(4,13),y:Ke(5,14)};$.translateX=$.x;$.translateY=$.y;const On=(t,e,r)=>{const n=e.measureViewportBox(),s=e.current,a=getComputedStyle(s),{display:i}=a,c={};i==="none"&&e.setStaticValue("display",t.display||"block"),r.forEach(u=>{c[u]=$[u](n,a)}),e.render();const o=e.measureViewportBox();return r.forEach(u=>{const l=e.getValue(u);l&&l.jump(c[u]),t[u]=$[u](o,a)}),t},Ln=(t,e,r={},n={})=>{e={...e},n={...n};const s=Object.keys(e).filter(St);let a=[],i=!1;const c=[];if(s.forEach(o=>{const u=t.getValue(o);if(!t.hasValue(o))return;let l=r[o],d=E(l);const p=e[o];let f;if(ut(p)){const y=p.length,h=p[0]===null?1:0;l=p[h],d=E(l);for(let m=h;m<y&&p[m]!==null;m++)f?Qe(E(p[m])===f):f=E(p[m])}else f=E(p);if(d!==f)if(Ne(d)&&Ne(f)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof p=="string"?e[o]=parseFloat(p):Array.isArray(p)&&f===g&&(e[o]=p.map(parseFloat))}else d!=null&&d.transform&&(f!=null&&f.transform)&&(l===0||p===0)?l===0?u.set(f.transform(l)):e[o]=d.transform(p):(i||(a=Un(t),i=!0),c.push(o),n[o]=n[o]!==void 0?n[o]:e[o],u.jump(p))}),c.length){const o=c.indexOf("height")>=0?window.pageYOffset:null,u=On(e,t,c);return a.length&&a.forEach(([l,d])=>{t.getValue(l).set(d)}),t.render(),Zt&&o!==null&&window.scrollTo({top:o}),{target:u,transitionEnd:n}}else return{target:e,transitionEnd:n}};function In(t,e,r,n){return Fn(e)?Ln(t,e,r,n):{target:e,transitionEnd:n}}const jn=(t,e,r,n)=>{const s=Dn(t,e,n);return e=s.target,n=s.transitionEnd,In(t,e,r,n)};function kn(t,e,r){const{willChange:n}=e;for(const s in e){const a=e[s],i=r[s];if(R(a))t.addValue(s,a),ue(n)&&n.add(s);else if(R(i))t.addValue(s,H(a,{owner:t})),ue(n)&&n.remove(s);else if(i!==a)if(t.hasValue(s)){const c=t.getValue(s);!c.hasAnimated&&c.set(a)}else{const c=t.getStaticValue(s);t.addValue(s,H(c!==void 0?c:a,{owner:t}))}}for(const s in r)e[s]===void 0&&t.removeValue(s);return e}const Q=new WeakMap,Tt=Object.keys(Te),zn=Tt.length,_e=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Nn=Se.length;class Wn{constructor({parent:e,props:r,presenceContext:n,reducedMotionConfig:s,visualState:a},i={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>J.render(this.render,!1,!0);const{latestValues:c,renderState:o}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=r.initial?{...c}:{},this.renderState=o,this.parent=e,this.props=r,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=i,this.isControllingVariants=tt(r),this.isVariantNode=Tr(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...l}=this.scrapeMotionValuesFromProps(r,{});for(const d in l){const p=l[d];c[d]!==void 0&&R(p)&&(p.set(c[d],!1),ue(u)&&u.add(d))}}scrapeMotionValuesFromProps(e,r){return{}}mount(e){this.current=e,Q.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,n)=>this.bindToMotionValue(n,r)),qt.current||Jt(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qt.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Q.delete(this.current),this.projection&&this.projection.unmount(),ie(this.notifyUpdate),ie(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,r){const n=N.has(e),s=r.on("change",i=>{this.latestValues[e]=i,this.props.onUpdate&&J.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),a=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...r},n,s,a){let i,c;for(let o=0;o<zn;o++){const u=Tt[o],{isEnabled:l,Feature:d,ProjectionNode:p,MeasureLayout:f}=Te[u];p&&(i=p),l(r)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),f&&(c=f))}if((this.type==="html"||this.type==="svg")&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:o,layout:u,drag:l,dragConstraints:d,layoutScroll:p,layoutRoot:f}=r;this.projection.setOptions({layoutId:o,layout:u,alwaysMeasureLayout:!!l||d&&xr(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:a,layoutScroll:p,layoutRoot:f})}return c}updateFeatures(){for(const e in this.features){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):xt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}makeTargetAnimatable(e,r=!0){return this.makeTargetAnimatableFromInstance(e,r)}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let n=0;n<_e.length;n++){const s=_e[n];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a=e["on"+s];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=kn(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const r={};for(let n=0;n<Nn;n++){const s=Se[n],a=this.props[s];(et(a)||a===!1)&&(r[s]=a)}return r}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){r!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,r)),this.values.set(e,r),this.latestValues[e]=r.get()}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&r!==void 0&&(n=H(r,{owner:this}),this.addValue(e,n)),n}readValue(e){var r;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){var r;const{initial:n}=this.props,s=typeof n=="string"||typeof n=="object"?(r=ot(this.props,n))===null||r===void 0?void 0:r[e]:void 0;if(n&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!R(a)?a:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new cr),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}}class At extends Wn{sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:n}){delete r[e],delete n[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:r,...n},s){const a=vn(n,e||{},this);if(s){gn(this,n,a);const i=jn(this,n,a,r);r=i.transitionEnd,n=i.target}return{transition:e,transitionEnd:r,...n}}}function Kn(t){return window.getComputedStyle(t)}class _n extends At{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,r){if(N.has(r)){const n=Ae(r);return n&&n.default||0}else{const n=Kn(e),s=(Je(r)?n.getPropertyValue(r):n[r])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:r}){return Tn(e,r)}build(e,r,n,s){nt(e,r,n,s.transformTemplate)}scrapeMotionValuesFromProps(e,r){return it(e,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;R(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(e,r,n,s){st(e,r,n,s)}}class Gn extends At{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(N.has(r)){const n=Ae(r);return n&&n.default||0}return r=at.has(r)?r:we(r),e.getAttribute(r)}measureInstanceViewportBox(){return xt()}scrapeMotionValuesFromProps(e,r){return kr(e,r)}build(e,r,n,s){Lr(e,r,n,this.isSVGTag,s.transformTemplate)}renderInstance(e,r,n,s){jr(e,r,n,s)}mount(e){this.isSVGTag=Ir(e.tagName),super.mount(e)}}function Mt(t,e,r){var n;if(typeof t=="string"){let s=document;e&&(Qe(!!e.current),s=e.current),r?((n=r[t])!==null&&n!==void 0||(r[t]=s.querySelectorAll(t)),t=r[t]):t=s.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function Hn(t,e){let r;const n=()=>{const{currentTime:s}=e,i=(s===null?0:s.value)/100;r!==i&&t(i),r=i};return J.update(n,!0),()=>ie(n)}const $n=pt(()=>window.ScrollTimeline!==void 0);class Ct{constructor(e){this.animations=e.filter(Boolean)}then(e,r){return Promise.all(this.animations).then(e).catch(r)}getAll(e){return this.animations[0][e]}setAll(e,r){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=r}attachTimeline(e){const r=this.animations.map(n=>{if($n()&&n.attachTimeline)n.attachTimeline(e);else return n.pause(),Hn(s=>{n.time=n.duration*s},e)});return()=>{r.forEach((n,s)=>{n&&n(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let r=0;r<this.animations.length;r++)e=Math.max(e,this.animations[r].duration);return e}runAll(e){this.animations.forEach(r=>r[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Xn(t){return typeof t=="object"&&!Array.isArray(t)}function Yn(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},r=An(t)?new Gn(e,{enableHardwareAcceleration:!1}):new _n(e,{enableHardwareAcceleration:!0});r.mount(t),Q.set(t,r)}function En(t,e=100){const r=lr({keyframes:[0,e],...t}),n=Math.min(fr(r),dr);return{type:"keyframes",ease:s=>r.next(n*s).value/e,duration:ge(n)}}function Ge(t,e,r,n){var s;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?r:(s=n.get(e))!==null&&s!==void 0?s:t}const Zn=(t,e,r)=>{const n=e-t;return((r-t)%n+n)%n+t};function qn(t,e){return pr(t)?t[Zn(0,t.length,e)]:t}function Jn(t,e,r){for(let n=0;n<t.length;n++){const s=t[n];s.at>e&&s.at<r&&(mr(t,s),n--)}}function Qn(t,e,r,n,s,a){Jn(t,s,a);for(let i=0;i<e.length;i++)t.push({value:e[i],at:hr(s,a,n[i]),easing:qn(r,i)})}function es(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const ts="easeInOut";function rs(t,{defaultTransition:e={},...r}={},n){const s=e.duration||.3,a=new Map,i=new Map,c={},o=new Map;let u=0,l=0,d=0;for(let p=0;p<t.length;p++){const f=t[p];if(typeof f=="string"){o.set(f,l);continue}else if(!Array.isArray(f)){o.set(f.name,Ge(l,f.at,u,o));continue}let[y,h,m={}]=f;m.at!==void 0&&(l=Ge(l,m.at,u,o));let V=0;const C=(v,x,w,M=0,S=0)=>{const T=ns(v),{delay:B=0,times:A=yr(T),type:W="keyframes",...re}=x;let{ease:X=e.ease||"easeOut",duration:P}=x;const L=typeof B=="function"?B(M,S):B,K=T.length;if(K<=2&&W==="spring"){let O=100;if(K===2&&is(T)){const _=T[1]-T[0];O=Math.abs(_)}const j={...re};P!==void 0&&(j.duration=q(P));const k=En(j,O);X=k.ease,P=k.duration}P??(P=s);const I=l+L,D=I+P;A.length===1&&A[0]===0&&(A[1]=1);const F=A.length-T.length;F>0&&vr(A,F),T.length===1&&T.unshift(null),Qn(w,T,X,A,I,D),V=Math.max(L+P,V),d=Math.max(D,d)};if(R(y)){const v=He(y,i);C(h,m,$e("default",v))}else{const v=Mt(y,n,c),x=v.length;for(let w=0;w<x;w++){h=h,m=m;const M=v[w],S=He(M,i);for(const T in h)C(h[T],ss(m,T),$e(T,S),w,x)}}u=l,l+=V}return i.forEach((p,f)=>{for(const y in p){const h=p[y];h.sort(es);const m=[],V=[],C=[];for(let x=0;x<h.length;x++){const{at:w,value:M,easing:S}=h[x];m.push(M),V.push(gr(0,d,w)),C.push(S||"easeOut")}V[0]!==0&&(V.unshift(0),m.unshift(m[0]),C.unshift(ts)),V[V.length-1]!==1&&(V.push(1),m.push(null)),a.has(f)||a.set(f,{keyframes:{},transition:{}});const v=a.get(f);v.keyframes[y]=m,v.transition[y]={...e,duration:d,ease:C,times:V,...r}}}),a}function He(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function $e(t,e){return e[t]||(e[t]=[]),e[t]}function ns(t){return Array.isArray(t)?t:[t]}function ss(t,e){return t[e]?{...t,...t[e]}:{...t}}const as=t=>typeof t=="number",is=t=>t.every(as);function Dt(t,e,r,n){const s=Mt(t,n),a=s.length,i=[];for(let c=0;c<a;c++){const o=s[c];Q.has(o)||Yn(o);const u=Q.get(o),l={...r};typeof l.delay=="function"&&(l.delay=l.delay(c,a)),i.push(...xn(u,{...e,transition:l},{}))}return new Ct(i)}const os=t=>Array.isArray(t)&&Array.isArray(t[0]);function us(t,e,r){const n=[];return rs(t,e,r).forEach(({keyframes:a,transition:i},c)=>{let o;R(c)?o=wt(c,a.default,i.default):o=Dt(c,a,i),n.push(o)}),new Ct(n)}const cs=t=>{function e(r,n,s){let a;return os(r)?a=us(r,n,t):Xn(n)?a=Dt(r,n,s,t):a=wt(r,n,s),t&&t.animations.push(a),a}return e},me=cs(),ls={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},fs={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},ds="_model_9lrnh_3",ps="_canvas_9lrnh_21",Xe={model:ds,canvas:ps},Ye={Frame:"Frame",Logo:"Logo",Screen:"Screen"},Ee={stiffness:40,damping:20,mass:1.4,restSpeed:.001},Us=({models:t,show:e=!0,showDelay:r=0,cameraPosition:n={x:0,y:0,z:8},style:s,className:a,onLoad:i,alt:c,...o})=>{const[u,l]=b.useState(!1),d=b.useRef(),p=b.useRef(),f=b.useRef(),y=b.useRef(),h=b.useRef(),m=b.useRef(),V=b.useRef(),C=b.useRef(),v=b.useRef(),x=b.useRef(),w=b.useRef(),M=b.useRef(),S=b.useRef(),T=b.useRef(),B=b.useRef(),A=b.useRef(),W=b.useRef(),re=It(d,!1,{threshold:.2}),X=qe(),P=Le(0,Ee),L=Le(0,Ee);b.useEffect(()=>{const{clientWidth:D,clientHeight:F}=d.current;m.current=new kt({canvas:p.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),m.current.setPixelRatio(2),m.current.setSize(D,F),m.current.outputColorSpace=Ze,f.current=new zt(36,D/F,.1,100),f.current.position.set(n.x,n.y,n.z),h.current=new Nt,y.current=new Me,h.current.add(y.current);const O=new Wt(16777215,1.2),j=new Ce(16777215,1.1),k=new Ce(16777215,.8);k.position.set(-6,2,2),j.position.set(.5,0,.866),B.current=[O,j,k],B.current.forEach(Y=>h.current.add(Y)),V.current=new Me,h.current.add(V.current),V.current.position.set(0,0,-.8),V.current.rotateX(Math.PI/2);const _=512,ce=8,le=8,Pt=1.5,Ft=.8,Rt=3;C.current=new De(_,_),C.current.texture.generateMipmaps=!1,v.current=new De(_,_),v.current.texture.generateMipmaps=!1;const fe=new Kt(ce,le).rotateX(Math.PI/2),Bt=new Pe({map:C.current.texture,opacity:Ft,transparent:!0});T.current=new pe(fe,Bt),T.current.scale.y=-1,V.current.add(T.current),A.current=new pe(fe),A.current.visible=!1,V.current.add(A.current);const Ut=new Pe({color:16777215,opacity:0,transparent:!0});W.current=new pe(fe,Ut),W.current.rotateX(Math.PI),W.current.position.y-=1e-5,V.current.add(W.current),x.current=new _t(-ce/2,ce/2,le/2,-le/2,0,Pt),x.current.rotation.x=Math.PI/2,V.current.add(x.current),w.current=new Gt,w.current.userData.darkness={value:Rt},w.current.onBeforeCompile=Y=>{Y.uniforms.darkness=w.current.userData.darkness,Y.fragmentShader=`
        uniform float darkness;
        ${Y.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},w.current.depthTest=!1,w.current.depthWrite=!1,M.current=new Fe(ls),M.current.depthTest=!1,S.current=new Fe(fs),S.current.depthTest=!1;const Ot=P.on("change",I),Lt=L.on("change",I);return()=>{C.current.dispose(),v.current.dispose(),Ht(B.current),$t(h.current),Xt(m.current),Ot(),Lt()}},[]);const K=b.useCallback(D=>{A.current.visible=!0,A.current.material=M.current,A.current.material.uniforms.tDiffuse.value=C.current.texture,M.current.uniforms.h.value=D*(1/256),m.current.setRenderTarget(v.current),m.current.render(A.current,x.current),A.current.material=S.current,A.current.material.uniforms.tDiffuse.value=v.current.texture,S.current.uniforms.v.value=D*(1/256),m.current.setRenderTarget(C.current),m.current.render(A.current,x.current),A.current.visible=!1},[]),I=b.useCallback(()=>{const F=h.current.background;h.current.background=null,h.current.overrideMaterial=w.current,m.current.setRenderTarget(C.current),m.current.render(h.current,x.current),h.current.overrideMaterial=null,K(5),K(5*.4),m.current.setRenderTarget(null),h.current.background=F,y.current.rotation.x=P.get(),y.current.rotation.y=L.get(),m.current.render(h.current,f.current)},[K,P,L]);return b.useEffect(()=>{const D=nr(F=>{const{innerWidth:O,innerHeight:j}=window,k={x:(F.clientX-O/2)/O,y:(F.clientY-j/2)/j};L.set(k.x/2),P.set(k.y/2)},100);return re&&!X&&window.addEventListener("mousemove",D),()=>{window.removeEventListener("mousemove",D)}},[re,X,P,L]),b.useEffect(()=>{const D=()=>{if(!d.current)return;const{clientWidth:F,clientHeight:O}=d.current;m.current.setSize(F,O),f.current.aspect=F/O,f.current.updateProjectionMatrix(),I()};return window.addEventListener("resize",D),D(),()=>{window.removeEventListener("resize",D)}},[I]),de.jsxs("div",{className:er(Xe.model,a),"data-loaded":u,style:tr({delay:rr(r)},s),ref:d,role:"img","aria-label":c,...o,children:[de.jsx("canvas",{className:Xe.canvas,ref:p}),t.map((D,F)=>de.jsx(hs,{renderer:m,modelGroup:y,show:e,showDelay:r,renderFrame:I,index:F,setLoaded:l,onLoad:i,model:D},JSON.stringify(D.position)))]})},hs=({renderer:t,model:e,modelGroup:r,renderFrame:n,index:s,showDelay:a,setLoaded:i,onLoad:c,show:o})=>{const[u,l]=b.useState(),d=qe(),p=b.createRef();b.useEffect(()=>{const f=async(h,m)=>{h.colorSpace=Ze,h.flipY=!1,h.anisotropy=t.current.capabilities.getMaxAnisotropy(),h.generateMipmaps=!1,await t.current.initTexture(h),m.material.color=new Be(16777215),m.material.transparent=!0,m.material.map=h};l({start:async()=>{const{texture:h,position:m,url:V}=e;let C,v;const[x,w]=await Promise.all([await Re.loadAsync(h.placeholder),await Yt.loadAsync(V)]);r.current.add(w.scene),w.scene.traverse(async S=>{S.material&&(S.material.color=new Be(2039845)),S.name===Ye.Screen&&(p.current=S.clone(),p.current.material=S.material.clone(),S.parent.add(p.current),p.current.material.opacity=1,p.current.position.z+=.001,f(x,p.current),C=async()=>{const T=await jt(h),B=await Re.loadAsync(T);await f(B,S),me(1,0,{onUpdate:A=>{p.current.material.opacity=A,n()}})})});const M=new ne(m.x,m.y,m.z);return d&&w.scene.position.set(...M.toArray()),e.animation===Ue.SpringUp&&(v=()=>{const S=new ne(M.x,M.y-1,M.z);w.scene.position.set(...S.toArray()),me(S.y,M.y,{type:"spring",delay:(300*s+a)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:T=>{w.scene.position.y=T,n()}})}),e.animation===Ue.LaptopOpen&&(v=()=>{const S=w.scene.children.find(A=>A.name===Ye.Frame),T=new ne(Et.degToRad(90),0,0),B=new ne(0,0,0);return w.scene.position.set(...M.toArray()),S.rotation.set(...T.toArray()),me(T.x,B.x,{type:"spring",delay:(300*s+a+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:A=>{S.rotation.x=A,n()}})}),{loadFullResTexture:C,playAnimation:v}}})},[]),b.useEffect(()=>{if(!u||!o)return;let f;const y=async()=>{const{loadFullResTexture:h,playAnimation:m}=await u.start();i(!0),c==null||c(),d||(f=m()),await h(),d&&n()};return b.startTransition(()=>{y()}),()=>{f==null||f.stop()}},[u,o])};export{Us as Model};
