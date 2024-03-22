import{b as Fn,u as v,c as Ma,d as Pn,e as Gt,f as Ca,r as f,g as Ta,o as ka,j as o,R as ys,F as Yn,h as An,C as Nn,i as vs,k as Vt,B as Da,l as xs,n as ws,p as _s,M as Oa,m as bs,q as Ne,t as Ss,s as Ms,A as Cs,v as mr,w as ja,x as it,y as Ts,z as st,P as ks,D as Ds,a as Ea,E as Os,G as Rn,H as js}from"./index-82d5d71d.js";function Fa(e,t,r){const n=Fn(e,r),a=Fn(t,r);return+n==+a}const Es=v.div`
  width: 256px;
  @media (min-width: 768px) {
    width: 656px;
  }
  @media (min-width: 1440px) {
    width: 544px;
  }
  h2 {
    font-weight: 500;
    font-size: 26px;
    color: var(--black);
    line-height: 1.23;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: var(--black);
    margin-bottom: 16px;
  }
  button {
    width: 256px;
    @media (min-width: 768px) {
      width: 160px;
      align-self: flex-end;
    }
  }
  label {
    line-height: 1.25;
  }
  input {
    border: 1px solid var(--secondary-lightblue);
    border-radius: 6px;
    outline: transparent;
    color: var(--blue);
    padding: 12px 10px;

    &::placeholder {
      color: var(--blue);
    }
  }
`,Fs=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
  P {
    line-height: 1.25;
    color: var(--black);
    margin-bottom: 0;
  }
  span {
    line-height: 1.33;
    font-size: 18px;
    color: var(--blue);
  }
`,Ps=v.p`
  border: 1px solid var(--secondary-lightblue);
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  line-height: 1.33;
  color: #8f8f8f;
  margin-bottom: 24px;
  span {
    color: var(--blue);
  }
`,Ys=v.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;

  @media (min-width: 768px) {
    gap: 6px;
  }
  p {
    max-width: 190px;
    @media (min-width: 768px) {
      max-width: 328px;
    }
  }
  span {
    line-height: 1.33;
    color: var(--blue);
    font-weight: 700;
    font-size: 18px;
  }
`,As=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,$n=v.div`
  position: relative;
  &:last-child {
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ns=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
  }
`,Rs=v.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;v.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  input {
    width: auto;
  }
`;const $s=v.p`
  position: absolute;
  bottom: -33px;
  color: var(--secondary-red);
  font-size: 14px;
  line-height: 1.29;
  @media (min-width: 768px) {
    bottom: -17px;
  }
`,Wn=v.p`
  color: var(--secondary-red);
  font-size: 14px;
  line-height: 1.29;
  position: absolute;
  bottom: -17px;
`,Ws=Ma({weight:Pn().typeError("Weight must be a number").min(3,"Weight must be more than 3kg").max(300,"Weight must be less than 300kg"),sports:Pn().typeError("Time must be a number").positive("Time must be more than 0")}),Is=()=>{const{gender:e}=Gt(Ca),[t,r]=f.useState("0"),[n,a]=f.useState("0"),[i,s]=f.useState("1.8"),[u,d]=f.useState(()=>F()),{control:h,formState:{errors:k}}=Ta({mode:"onChange",resolver:ka(Ws),defaultValues:{weight:"",sports:""}});f.useEffect(()=>{if(u&&t>0){const b=t*.03+n*.4;s(b.toFixed(1))}if(!u&&t>0){const b=t*.04+n*.6;s(b.toFixed(1))}},[t,n,u,s]);function F(){return e==="female"||e===null}function y(){return e==="female"||e===null?"female":"male"}return o.jsxs(o.Fragment,{children:[o.jsxs("form",{children:[o.jsxs(ys,{defaultValue:y(),name:"radio-buttons-group",row:!0,sx:{marginBottom:"16px"},children:[o.jsx(Yn,{value:"female",control:o.jsx(An,{}),label:"For woman",onChange:()=>d(!0),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25,letterSpacing:"0"},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}}),o.jsx(Yn,{value:"male",control:o.jsx(An,{}),label:"For man",onChange:()=>d(!1),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}})]}),o.jsxs(As,{children:[o.jsxs($n,{children:[o.jsx("label",{htmlFor:"weight",children:"Your weight in kilograms:"}),o.jsx(Nn,{name:"weight",control:h,render:({field:{onChange:b,...V}})=>o.jsx("input",{id:"weight",...V,onChange:({target:{value:M}})=>{b(M),r(M)},placeholder:"0",onFocus:M=>M.target.placeholder="",onBlur:M=>M.target.placeholder="0",onInput:M=>{M.target.value=M.target.value.replace(/(\.\d{1})\d+/,"$1"),M.target.value=M.target.value.replace(",",".")},autoComplete:"off"})}),k.weight&&t!==""&&o.jsx(Wn,{children:k.weight.message})]}),o.jsxs($n,{children:[o.jsx("label",{htmlFor:"sports",children:"The time of active participation in sports or other activities with a high physical load in hours:"}),o.jsx(Nn,{name:"sports",control:h,render:({field:{onChange:b,...V}})=>o.jsx("input",{id:"sports",...V,onChange:({target:{value:M}})=>{b(M),a(M)},placeholder:"0",onFocus:M=>M.target.placeholder="",onBlur:M=>M.target.placeholder="0",onInput:M=>{M.target.value=M.target.value.replace(/(\.\d{1})\d+/,"$1"),M.target.value=M.target.value.replace(",",".")},autoComplete:"off"})}),k.sports&&n!==""&&o.jsx(Wn,{children:k.sports.message})]})]})]}),o.jsxs(Ys,{children:[o.jsx("p",{children:"The required amount of water in liters per day:"}),o.jsx("p",{children:o.jsxs("span",{children:[i," L"]})})]})]})},Ls=Ma({norma:vs().matches(/^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,"It must be a number in a range from 0.1 to 15 (one digit after the decimal point)").required()}),Us=({onClose:e})=>{const t=Vt(),{register:r,handleSubmit:n,formState:{errors:a}}=Ta({mode:"onChange",resolver:ka(Ls)});async function i(s){const d={waterRate:(s.norma*1e3).toString()};t(xs(d)).unwrap().then(()=>{e()}).catch(h=>{ws.Notify.failure(h.message,_s)})}return o.jsxs(Es,{children:[o.jsx("h2",{children:"My daily norma"}),o.jsxs(Fs,{children:[o.jsxs("p",{children:["For girl: ",o.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs("p",{children:["For man: ",o.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsxs(Ps,{children:[o.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),o.jsx("h3",{children:"Calculate your rate:"}),o.jsx(Is,{}),o.jsxs("form",{action:"",onSubmit:n(i),children:[o.jsxs(Ns,{children:[o.jsx("label",{htmlFor:"norma",children:"Write down how much water you will drink:"}),o.jsx("input",{type:"text",...r("norma",{max:15}),name:"norma",id:"norma",placeholder:"0",onFocus:s=>s.target.placeholder="",onBlur:s=>s.target.placeholder="0",onInput:s=>{s.target.value=s.target.value.replace(/(\.\d{1})\d+/,"$1"),s.target.value=s.target.value.replace(",",".")},autoComplete:"off"}),a.norma&&o.jsx($s,{children:a.norma.message})]}),o.jsx(Rs,{children:o.jsx(Da,{type:"submit",children:"Save"})})]})]})},Gs=v.div`
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
  background-color:${e=>e.theme.colors.mainBg};
  border: 1px solid var(--secondary-white);
  border-radius: 10px;
  padding: 8px 20px;
  width: 164px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: ${e=>e.theme.colors.textColor};
    min-width: 124px;
    margin-bottom: 12px;
  }

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color:${e=>e.theme.colors.primaryBlue};
    margin-bottom: 0;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  button {
    font-family: inherit;
    line-height: 1.25;
    color: #8baeff;
    outline: none;
    border: none;
    background: transparent;
  }
`,Vs=v.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Hs=()=>{const[e,t]=f.useState(!1),{waterRate:r}=Gt(Ca),n=r/1e3;return o.jsxs(o.Fragment,{children:[o.jsxs(Gs,{children:[o.jsx("h2",{children:"My daily norma"}),o.jsxs(Vs,{children:[o.jsxs("p",{children:[n," L"]}),o.jsx("button",{onClick:()=>t(!0),children:"Edit"})]})]}),e&&o.jsx(Oa,{open:e,onClose:()=>t(!1),children:o.jsx(Us,{onClose:()=>t(!1)})})]})},zs=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    width: 704px;
    height: 95px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 23px;
    width: 592px;
    height: 90px;
  }
`,Bs=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 356px;
    height: 95px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
    height: 95px;
  }
`,Zs=v.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,qs=v.input`
  &[type='range'] {
    height: 8px;
    border-radius: 8px;
    appearance: none;
    background: linear-gradient(
      to right,
      var(--secondary-blue) 0%,
      var(--secondary-blue) ${e=>e.value}%,
      var(--secondary-lightblue) ${e=>e.value}%,
      var(--secondary-lightblue) 100%
    );
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 4px;
  }
  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: ${e=>e.theme.colors.mainBg};
    border-radius: 50%;
    border: solid 1px ${e=>e.theme.colors.primaryBlue};
    appearance: none;
  }
  @media screen and (min-width: 768px) {
    width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
  }
`,Ks=v.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 12px;
    line-height: 1.3;
    

    &::before {
      height: 8px;
      content: '|';
      color: ${e=>e.theme.colors.secondaryLightblue};
      margin-top: 4px;
      margin-bottom: 4px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:first-child {
      font-size: ${e=>e.$rater===0?"16px":"12px"};
      font-weight: ${e=>e.$rater===0?"500":"400"};
      /* margin-left: 4px; */
    }

    &:nth-child(2) {
      font-size: ${e=>e.$rater>=50&e.$rater<100?"16px":"12px"};
      font-weight: ${e=>e.$rater>=50&e.$rater<100?"500":"400"};
    }
    &:last-child {
      font-size: ${e=>e.$rater>=100?"16px":"12px"};
      font-weight: ${e=>e.$raterrater>=100?"500":"400"};
      /* margin-left: 4px; */
    }
`,Js=v(Da)`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;

  svg {
    fill: none;
    stroke: ${e=>e.theme.colors.mainBg};
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-top: -8px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
  }
`;var Xs=function(t){return Qs(t)&&!eo(t)};function Qs(e){return!!e&&typeof e=="object"}function eo(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||no(e)}var to=typeof Symbol=="function"&&Symbol.for,ro=to?Symbol.for("react.element"):60103;function no(e){return e.$$typeof===ro}function ao(e){return Array.isArray(e)?[]:{}}function Rt(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ht(ao(e),e,t):e}function io(e,t,r){return e.concat(t).map(function(n){return Rt(n,r)})}function so(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(a){n[a]=Rt(e[a],r)}),Object.keys(t).forEach(function(a){!r.isMergeableObject(t[a])||!e[a]?n[a]=Rt(t[a],r):n[a]=ht(e[a],t[a],r)}),n}function ht(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||io,r.isMergeableObject=r.isMergeableObject||Xs;var n=Array.isArray(t),a=Array.isArray(e),i=n===a;return i?n?r.arrayMerge(e,t,r):so(e,t,r):Rt(t,r)}ht.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return ht(n,a,r)},{})};var Mr=ht,oo=typeof global=="object"&&global&&global.Object===Object&&global;const Pa=oo;var lo=typeof self=="object"&&self&&self.Object===Object&&self,uo=Pa||lo||Function("return this")();const de=uo;var co=de.Symbol;const Oe=co;var Ya=Object.prototype,fo=Ya.hasOwnProperty,ho=Ya.toString,ot=Oe?Oe.toStringTag:void 0;function mo(e){var t=fo.call(e,ot),r=e[ot];try{e[ot]=void 0;var n=!0}catch{}var a=ho.call(e);return n&&(t?e[ot]=r:delete e[ot]),a}var po=Object.prototype,go=po.toString;function yo(e){return go.call(e)}var vo="[object Null]",xo="[object Undefined]",In=Oe?Oe.toStringTag:void 0;function Ie(e){return e==null?e===void 0?xo:vo:In&&In in Object(e)?mo(e):yo(e)}function Aa(e,t){return function(r){return e(t(r))}}var wo=Aa(Object.getPrototypeOf,Object);const $r=wo;function Le(e){return e!=null&&typeof e=="object"}var _o="[object Object]",bo=Function.prototype,So=Object.prototype,Na=bo.toString,Mo=So.hasOwnProperty,Co=Na.call(Object);function Ln(e){if(!Le(e)||Ie(e)!=_o)return!1;var t=$r(e);if(t===null)return!0;var r=Mo.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Na.call(r)==Co}var Un=Array.isArray,Gn=Object.keys,To=Object.prototype.hasOwnProperty,ko=typeof Element<"u";function Cr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Un(e),n=Un(t),a,i,s;if(r&&n){if(i=e.length,i!=t.length)return!1;for(a=i;a--!==0;)if(!Cr(e[a],t[a]))return!1;return!0}if(r!=n)return!1;var u=e instanceof Date,d=t instanceof Date;if(u!=d)return!1;if(u&&d)return e.getTime()==t.getTime();var h=e instanceof RegExp,k=t instanceof RegExp;if(h!=k)return!1;if(h&&k)return e.toString()==t.toString();var F=Gn(e);if(i=F.length,i!==Gn(t).length)return!1;for(a=i;a--!==0;)if(!To.call(t,F[a]))return!1;if(ko&&e instanceof Element&&t instanceof Element)return e===t;for(a=i;a--!==0;)if(s=F[a],!(s==="_owner"&&e.$$typeof)&&!Cr(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var Do=function(t,r){try{return Cr(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const Pe=bs(Do);var Oo=!0;function jo(e,t){if(!Oo){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function Eo(){this.__data__=[],this.size=0}function Ra(e,t){return e===t||e!==e&&t!==t}function Ht(e,t){for(var r=e.length;r--;)if(Ra(e[r][0],t))return r;return-1}var Fo=Array.prototype,Po=Fo.splice;function Yo(e){var t=this.__data__,r=Ht(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Po.call(t,r,1),--this.size,!0}function Ao(e){var t=this.__data__,r=Ht(t,e);return r<0?void 0:t[r][1]}function No(e){return Ht(this.__data__,e)>-1}function Ro(e,t){var r=this.__data__,n=Ht(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function be(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}be.prototype.clear=Eo;be.prototype.delete=Yo;be.prototype.get=Ao;be.prototype.has=No;be.prototype.set=Ro;function $o(){this.__data__=new be,this.size=0}function Wo(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Io(e){return this.__data__.get(e)}function Lo(e){return this.__data__.has(e)}function wt(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Uo="[object AsyncFunction]",Go="[object Function]",Vo="[object GeneratorFunction]",Ho="[object Proxy]";function $a(e){if(!wt(e))return!1;var t=Ie(e);return t==Go||t==Vo||t==Uo||t==Ho}var zo=de["__core-js_shared__"];const pr=zo;var Vn=function(){var e=/[^.]+$/.exec(pr&&pr.keys&&pr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Bo(e){return!!Vn&&Vn in e}var Zo=Function.prototype,qo=Zo.toString;function Ue(e){if(e!=null){try{return qo.call(e)}catch{}try{return e+""}catch{}}return""}var Ko=/[\\^$.*+?()[\]{}|]/g,Jo=/^\[object .+?Constructor\]$/,Xo=Function.prototype,Qo=Object.prototype,el=Xo.toString,tl=Qo.hasOwnProperty,rl=RegExp("^"+el.call(tl).replace(Ko,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function nl(e){if(!wt(e)||Bo(e))return!1;var t=$a(e)?rl:Jo;return t.test(Ue(e))}function al(e,t){return e==null?void 0:e[t]}function Ge(e,t){var r=al(e,t);return nl(r)?r:void 0}var il=Ge(de,"Map");const mt=il;var sl=Ge(Object,"create");const pt=sl;function ol(){this.__data__=pt?pt(null):{},this.size=0}function ll(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ul="__lodash_hash_undefined__",cl=Object.prototype,dl=cl.hasOwnProperty;function fl(e){var t=this.__data__;if(pt){var r=t[e];return r===ul?void 0:r}return dl.call(t,e)?t[e]:void 0}var hl=Object.prototype,ml=hl.hasOwnProperty;function pl(e){var t=this.__data__;return pt?t[e]!==void 0:ml.call(t,e)}var gl="__lodash_hash_undefined__";function yl(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pt&&t===void 0?gl:t,this}function We(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}We.prototype.clear=ol;We.prototype.delete=ll;We.prototype.get=fl;We.prototype.has=pl;We.prototype.set=yl;function vl(){this.size=0,this.__data__={hash:new We,map:new(mt||be),string:new We}}function xl(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function zt(e,t){var r=e.__data__;return xl(t)?r[typeof t=="string"?"string":"hash"]:r.map}function wl(e){var t=zt(this,e).delete(e);return this.size-=t?1:0,t}function _l(e){return zt(this,e).get(e)}function bl(e){return zt(this,e).has(e)}function Sl(e,t){var r=zt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function je(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}je.prototype.clear=vl;je.prototype.delete=wl;je.prototype.get=_l;je.prototype.has=bl;je.prototype.set=Sl;var Ml=200;function Cl(e,t){var r=this.__data__;if(r instanceof be){var n=r.__data__;if(!mt||n.length<Ml-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new je(n)}return r.set(e,t),this.size=r.size,this}function et(e){var t=this.__data__=new be(e);this.size=t.size}et.prototype.clear=$o;et.prototype.delete=Wo;et.prototype.get=Io;et.prototype.has=Lo;et.prototype.set=Cl;function Tl(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var kl=function(){try{var e=Ge(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Hn=kl;function Wa(e,t,r){t=="__proto__"&&Hn?Hn(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Dl=Object.prototype,Ol=Dl.hasOwnProperty;function Ia(e,t,r){var n=e[t];(!(Ol.call(e,t)&&Ra(n,r))||r===void 0&&!(t in e))&&Wa(e,t,r)}function Bt(e,t,r,n){var a=!r;r||(r={});for(var i=-1,s=t.length;++i<s;){var u=t[i],d=n?n(r[u],e[u],u,r,e):void 0;d===void 0&&(d=e[u]),a?Wa(r,u,d):Ia(r,u,d)}return r}function jl(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var El="[object Arguments]";function zn(e){return Le(e)&&Ie(e)==El}var La=Object.prototype,Fl=La.hasOwnProperty,Pl=La.propertyIsEnumerable,Yl=zn(function(){return arguments}())?zn:function(e){return Le(e)&&Fl.call(e,"callee")&&!Pl.call(e,"callee")};const Al=Yl;var Nl=Array.isArray;const _t=Nl;function Rl(){return!1}var Ua=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Bn=Ua&&typeof module=="object"&&module&&!module.nodeType&&module,$l=Bn&&Bn.exports===Ua,Zn=$l?de.Buffer:void 0,Wl=Zn?Zn.isBuffer:void 0,Il=Wl||Rl;const Ga=Il;var Ll=9007199254740991,Ul=/^(?:0|[1-9]\d*)$/;function Gl(e,t){var r=typeof e;return t=t??Ll,!!t&&(r=="number"||r!="symbol"&&Ul.test(e))&&e>-1&&e%1==0&&e<t}var Vl=9007199254740991;function Va(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Vl}var Hl="[object Arguments]",zl="[object Array]",Bl="[object Boolean]",Zl="[object Date]",ql="[object Error]",Kl="[object Function]",Jl="[object Map]",Xl="[object Number]",Ql="[object Object]",eu="[object RegExp]",tu="[object Set]",ru="[object String]",nu="[object WeakMap]",au="[object ArrayBuffer]",iu="[object DataView]",su="[object Float32Array]",ou="[object Float64Array]",lu="[object Int8Array]",uu="[object Int16Array]",cu="[object Int32Array]",du="[object Uint8Array]",fu="[object Uint8ClampedArray]",hu="[object Uint16Array]",mu="[object Uint32Array]",R={};R[su]=R[ou]=R[lu]=R[uu]=R[cu]=R[du]=R[fu]=R[hu]=R[mu]=!0;R[Hl]=R[zl]=R[au]=R[Bl]=R[iu]=R[Zl]=R[ql]=R[Kl]=R[Jl]=R[Xl]=R[Ql]=R[eu]=R[tu]=R[ru]=R[nu]=!1;function pu(e){return Le(e)&&Va(e.length)&&!!R[Ie(e)]}function Wr(e){return function(t){return e(t)}}var Ha=typeof exports=="object"&&exports&&!exports.nodeType&&exports,dt=Ha&&typeof module=="object"&&module&&!module.nodeType&&module,gu=dt&&dt.exports===Ha,gr=gu&&Pa.process,yu=function(){try{var e=dt&&dt.require&&dt.require("util").types;return e||gr&&gr.binding&&gr.binding("util")}catch{}}();const Qe=yu;var qn=Qe&&Qe.isTypedArray,vu=qn?Wr(qn):pu;const xu=vu;var wu=Object.prototype,_u=wu.hasOwnProperty;function za(e,t){var r=_t(e),n=!r&&Al(e),a=!r&&!n&&Ga(e),i=!r&&!n&&!a&&xu(e),s=r||n||a||i,u=s?jl(e.length,String):[],d=u.length;for(var h in e)(t||_u.call(e,h))&&!(s&&(h=="length"||a&&(h=="offset"||h=="parent")||i&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||Gl(h,d)))&&u.push(h);return u}var bu=Object.prototype;function Ir(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||bu;return e===r}var Su=Aa(Object.keys,Object);const Mu=Su;var Cu=Object.prototype,Tu=Cu.hasOwnProperty;function ku(e){if(!Ir(e))return Mu(e);var t=[];for(var r in Object(e))Tu.call(e,r)&&r!="constructor"&&t.push(r);return t}function Ba(e){return e!=null&&Va(e.length)&&!$a(e)}function Lr(e){return Ba(e)?za(e):ku(e)}function Du(e,t){return e&&Bt(t,Lr(t),e)}function Ou(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var ju=Object.prototype,Eu=ju.hasOwnProperty;function Fu(e){if(!wt(e))return Ou(e);var t=Ir(e),r=[];for(var n in e)n=="constructor"&&(t||!Eu.call(e,n))||r.push(n);return r}function Ur(e){return Ba(e)?za(e,!0):Fu(e)}function Pu(e,t){return e&&Bt(t,Ur(t),e)}var Za=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Kn=Za&&typeof module=="object"&&module&&!module.nodeType&&module,Yu=Kn&&Kn.exports===Za,Jn=Yu?de.Buffer:void 0,Xn=Jn?Jn.allocUnsafe:void 0;function Au(e,t){if(t)return e.slice();var r=e.length,n=Xn?Xn(r):new e.constructor(r);return e.copy(n),n}function qa(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Nu(e,t){for(var r=-1,n=e==null?0:e.length,a=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[a++]=s)}return i}function Ka(){return[]}var Ru=Object.prototype,$u=Ru.propertyIsEnumerable,Qn=Object.getOwnPropertySymbols,Wu=Qn?function(e){return e==null?[]:(e=Object(e),Nu(Qn(e),function(t){return $u.call(e,t)}))}:Ka;const Gr=Wu;function Iu(e,t){return Bt(e,Gr(e),t)}function Ja(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var Lu=Object.getOwnPropertySymbols,Uu=Lu?function(e){for(var t=[];e;)Ja(t,Gr(e)),e=$r(e);return t}:Ka;const Xa=Uu;function Gu(e,t){return Bt(e,Xa(e),t)}function Qa(e,t,r){var n=t(e);return _t(e)?n:Ja(n,r(e))}function Vu(e){return Qa(e,Lr,Gr)}function Hu(e){return Qa(e,Ur,Xa)}var zu=Ge(de,"DataView");const Tr=zu;var Bu=Ge(de,"Promise");const kr=Bu;var Zu=Ge(de,"Set");const Dr=Zu;var qu=Ge(de,"WeakMap");const Or=qu;var ea="[object Map]",Ku="[object Object]",ta="[object Promise]",ra="[object Set]",na="[object WeakMap]",aa="[object DataView]",Ju=Ue(Tr),Xu=Ue(mt),Qu=Ue(kr),ec=Ue(Dr),tc=Ue(Or),Ye=Ie;(Tr&&Ye(new Tr(new ArrayBuffer(1)))!=aa||mt&&Ye(new mt)!=ea||kr&&Ye(kr.resolve())!=ta||Dr&&Ye(new Dr)!=ra||Or&&Ye(new Or)!=na)&&(Ye=function(e){var t=Ie(e),r=t==Ku?e.constructor:void 0,n=r?Ue(r):"";if(n)switch(n){case Ju:return aa;case Xu:return ea;case Qu:return ta;case ec:return ra;case tc:return na}return t});const Vr=Ye;var rc=Object.prototype,nc=rc.hasOwnProperty;function ac(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&nc.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var ic=de.Uint8Array;const ia=ic;function Hr(e){var t=new e.constructor(e.byteLength);return new ia(t).set(new ia(e)),t}function sc(e,t){var r=t?Hr(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var oc=/\w*$/;function lc(e){var t=new e.constructor(e.source,oc.exec(e));return t.lastIndex=e.lastIndex,t}var sa=Oe?Oe.prototype:void 0,oa=sa?sa.valueOf:void 0;function uc(e){return oa?Object(oa.call(e)):{}}function cc(e,t){var r=t?Hr(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var dc="[object Boolean]",fc="[object Date]",hc="[object Map]",mc="[object Number]",pc="[object RegExp]",gc="[object Set]",yc="[object String]",vc="[object Symbol]",xc="[object ArrayBuffer]",wc="[object DataView]",_c="[object Float32Array]",bc="[object Float64Array]",Sc="[object Int8Array]",Mc="[object Int16Array]",Cc="[object Int32Array]",Tc="[object Uint8Array]",kc="[object Uint8ClampedArray]",Dc="[object Uint16Array]",Oc="[object Uint32Array]";function jc(e,t,r){var n=e.constructor;switch(t){case xc:return Hr(e);case dc:case fc:return new n(+e);case wc:return sc(e,r);case _c:case bc:case Sc:case Mc:case Cc:case Tc:case kc:case Dc:case Oc:return cc(e,r);case hc:return new n;case mc:case yc:return new n(e);case pc:return lc(e);case gc:return new n;case vc:return uc(e)}}var la=Object.create,Ec=function(){function e(){}return function(t){if(!wt(t))return{};if(la)return la(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const Fc=Ec;function Pc(e){return typeof e.constructor=="function"&&!Ir(e)?Fc($r(e)):{}}var Yc="[object Map]";function Ac(e){return Le(e)&&Vr(e)==Yc}var ua=Qe&&Qe.isMap,Nc=ua?Wr(ua):Ac;const Rc=Nc;var $c="[object Set]";function Wc(e){return Le(e)&&Vr(e)==$c}var ca=Qe&&Qe.isSet,Ic=ca?Wr(ca):Wc;const Lc=Ic;var Uc=1,Gc=2,Vc=4,ei="[object Arguments]",Hc="[object Array]",zc="[object Boolean]",Bc="[object Date]",Zc="[object Error]",ti="[object Function]",qc="[object GeneratorFunction]",Kc="[object Map]",Jc="[object Number]",ri="[object Object]",Xc="[object RegExp]",Qc="[object Set]",ed="[object String]",td="[object Symbol]",rd="[object WeakMap]",nd="[object ArrayBuffer]",ad="[object DataView]",id="[object Float32Array]",sd="[object Float64Array]",od="[object Int8Array]",ld="[object Int16Array]",ud="[object Int32Array]",cd="[object Uint8Array]",dd="[object Uint8ClampedArray]",fd="[object Uint16Array]",hd="[object Uint32Array]",N={};N[ei]=N[Hc]=N[nd]=N[ad]=N[zc]=N[Bc]=N[id]=N[sd]=N[od]=N[ld]=N[ud]=N[Kc]=N[Jc]=N[ri]=N[Xc]=N[Qc]=N[ed]=N[td]=N[cd]=N[dd]=N[fd]=N[hd]=!0;N[Zc]=N[ti]=N[rd]=!1;function Pt(e,t,r,n,a,i){var s,u=t&Uc,d=t&Gc,h=t&Vc;if(r&&(s=a?r(e,n,a,i):r(e)),s!==void 0)return s;if(!wt(e))return e;var k=_t(e);if(k){if(s=ac(e),!u)return qa(e,s)}else{var F=Vr(e),y=F==ti||F==qc;if(Ga(e))return Au(e,u);if(F==ri||F==ei||y&&!a){if(s=d||y?{}:Pc(e),!u)return d?Gu(e,Pu(s,e)):Iu(e,Du(s,e))}else{if(!N[F])return a?e:{};s=jc(e,F,u)}}i||(i=new et);var b=i.get(e);if(b)return b;i.set(e,s),Lc(e)?e.forEach(function(Z){s.add(Pt(Z,t,r,Z,e,i))}):Rc(e)&&e.forEach(function(Z,U){s.set(U,Pt(Z,t,r,U,e,i))});var V=h?d?Hu:Vu:d?Ur:Lr,M=k?void 0:V(e);return Tl(M||e,function(Z,U){M&&(U=Z,Z=e[U]),Ia(s,U,Pt(Z,t,r,U,e,i))}),s}var md=4;function da(e){return Pt(e,md)}function ni(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var pd="[object Symbol]";function zr(e){return typeof e=="symbol"||Le(e)&&Ie(e)==pd}var gd="Expected a function";function Br(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(gd);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var s=e.apply(this,n);return r.cache=i.set(a,s)||i,s};return r.cache=new(Br.Cache||je),r}Br.Cache=je;var yd=500;function vd(e){var t=Br(e,function(n){return r.size===yd&&r.clear(),n}),r=t.cache;return t}var xd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wd=/\\(\\)?/g,_d=vd(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(xd,function(r,n,a,i){t.push(a?i.replace(wd,"$1"):n||r)}),t});const bd=_d;var Sd=1/0;function Md(e){if(typeof e=="string"||zr(e))return e;var t=e+"";return t=="0"&&1/e==-Sd?"-0":t}var Cd=1/0,fa=Oe?Oe.prototype:void 0,ha=fa?fa.toString:void 0;function ai(e){if(typeof e=="string")return e;if(_t(e))return ni(e,ai)+"";if(zr(e))return ha?ha.call(e):"";var t=e+"";return t=="0"&&1/e==-Cd?"-0":t}function Td(e){return e==null?"":ai(e)}function ii(e){return _t(e)?ni(e,Md):zr(e)?[e]:qa(bd(Td(e)))}function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}function si(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var Zt=f.createContext(void 0);Zt.displayName="FormikContext";Zt.Provider;Zt.Consumer;function kd(){var e=f.useContext(Zt);return e||jo(!1),e}var ae=function(t){return typeof t=="function"},qt=function(t){return t!==null&&typeof t=="object"},Dd=function(t){return String(Math.floor(Number(t)))===t},yr=function(t){return Object.prototype.toString.call(t)==="[object String]"},vr=function(t){return qt(t)&&ae(t.then)};function J(e,t,r,n){n===void 0&&(n=0);for(var a=ii(t);e&&n<a.length;)e=e[a[n++]];return n!==a.length&&!e||e===void 0?r:e}function Re(e,t,r){for(var n=da(e),a=n,i=0,s=ii(t);i<s.length-1;i++){var u=s[i],d=J(e,s.slice(0,i+1));if(d&&(qt(d)||Array.isArray(d)))a=a[u]=da(d);else{var h=s[i+1];a=a[u]=Dd(h)&&Number(h)>=0?[]:{}}}return(i===0?e:a)[s[i]]===r?e:(r===void 0?delete a[s[i]]:a[s[i]]=r,i===0&&r===void 0&&delete n[s[i]],n)}function oi(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var a=0,i=Object.keys(e);a<i.length;a++){var s=i[a],u=e[s];qt(u)?r.get(u)||(r.set(u,!0),n[s]=Array.isArray(u)?[]:{},oi(u,t,r,n[s])):n[s]=t}return n}function Od(e,t){switch(t.type){case"SET_VALUES":return z({},e,{values:t.payload});case"SET_TOUCHED":return z({},e,{touched:t.payload});case"SET_ERRORS":return Pe(e.errors,t.payload)?e:z({},e,{errors:t.payload});case"SET_STATUS":return z({},e,{status:t.payload});case"SET_ISSUBMITTING":return z({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return z({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return z({},e,{values:Re(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return z({},e,{touched:Re(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return z({},e,{errors:Re(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return z({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return z({},e,{touched:oi(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return z({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return z({},e,{isSubmitting:!1});default:return e}}var Ee={},Dt={};function jd(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,a=n===void 0?!0:n,i=e.validateOnMount,s=i===void 0?!1:i,u=e.isInitialValid,d=e.enableReinitialize,h=d===void 0?!1:d,k=e.onSubmit,F=si(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),y=z({validateOnChange:r,validateOnBlur:a,validateOnMount:s,onSubmit:k},F),b=f.useRef(y.initialValues),V=f.useRef(y.initialErrors||Ee),M=f.useRef(y.initialTouched||Dt),Z=f.useRef(y.initialStatus),U=f.useRef(!1),Ce=f.useRef({});f.useEffect(function(){return U.current=!0,function(){U.current=!1}},[]);var rs=f.useState(0),ns=rs[1],Tt=f.useRef({values:y.initialValues,errors:y.initialErrors||Ee,touched:y.initialTouched||Dt,status:y.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),A=Tt.current,P=f.useCallback(function(l){var g=Tt.current;Tt.current=Od(g,l),g!==Tt.current&&ns(function(x){return x+1})},[]),vn=f.useCallback(function(l,g){return new Promise(function(x,_){var C=y.validate(l,g);C==null?x(Ee):vr(C)?C.then(function(E){x(E||Ee)},function(E){_(E)}):x(C)})},[y.validate]),or=f.useCallback(function(l,g){var x=y.validationSchema,_=ae(x)?x(g):x,C=g&&_.validateAt?_.validateAt(g,l):Fd(l,_);return new Promise(function(E,H){C.then(function(){E(Ee)},function(me){me.name==="ValidationError"?E(Ed(me)):H(me)})})},[y.validationSchema]),xn=f.useCallback(function(l,g){return new Promise(function(x){return x(Ce.current[l].validate(g))})},[]),wn=f.useCallback(function(l){var g=Object.keys(Ce.current).filter(function(_){return ae(Ce.current[_].validate)}),x=g.length>0?g.map(function(_){return xn(_,J(l,_))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(x).then(function(_){return _.reduce(function(C,E,H){return E==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||E&&(C=Re(C,g[H],E)),C},{})})},[xn]),as=f.useCallback(function(l){return Promise.all([wn(l),y.validationSchema?or(l):{},y.validate?vn(l):{}]).then(function(g){var x=g[0],_=g[1],C=g[2],E=Mr.all([x,_,C],{arrayMerge:Pd});return E})},[y.validate,y.validationSchema,wn,vn,or]),ne=Q(function(l){return l===void 0&&(l=A.values),P({type:"SET_ISVALIDATING",payload:!0}),as(l).then(function(g){return U.current&&(P({type:"SET_ISVALIDATING",payload:!1}),P({type:"SET_ERRORS",payload:g})),g})});f.useEffect(function(){s&&U.current===!0&&Pe(b.current,y.initialValues)&&ne(b.current)},[s,ne]);var at=f.useCallback(function(l){var g=l&&l.values?l.values:b.current,x=l&&l.errors?l.errors:V.current?V.current:y.initialErrors||{},_=l&&l.touched?l.touched:M.current?M.current:y.initialTouched||{},C=l&&l.status?l.status:Z.current?Z.current:y.initialStatus;b.current=g,V.current=x,M.current=_,Z.current=C;var E=function(){P({type:"RESET_FORM",payload:{isSubmitting:!!l&&!!l.isSubmitting,errors:x,touched:_,status:C,values:g,isValidating:!!l&&!!l.isValidating,submitCount:l&&l.submitCount&&typeof l.submitCount=="number"?l.submitCount:0}})};if(y.onReset){var H=y.onReset(A.values,jn);vr(H)?H.then(E):E()}else E()},[y.initialErrors,y.initialStatus,y.initialTouched,y.onReset]);f.useEffect(function(){U.current===!0&&!Pe(b.current,y.initialValues)&&h&&(b.current=y.initialValues,at(),s&&ne(b.current))},[h,y.initialValues,at,s,ne]),f.useEffect(function(){h&&U.current===!0&&!Pe(V.current,y.initialErrors)&&(V.current=y.initialErrors||Ee,P({type:"SET_ERRORS",payload:y.initialErrors||Ee}))},[h,y.initialErrors]),f.useEffect(function(){h&&U.current===!0&&!Pe(M.current,y.initialTouched)&&(M.current=y.initialTouched||Dt,P({type:"SET_TOUCHED",payload:y.initialTouched||Dt}))},[h,y.initialTouched]),f.useEffect(function(){h&&U.current===!0&&!Pe(Z.current,y.initialStatus)&&(Z.current=y.initialStatus,P({type:"SET_STATUS",payload:y.initialStatus}))},[h,y.initialStatus,y.initialTouched]);var _n=Q(function(l){if(Ce.current[l]&&ae(Ce.current[l].validate)){var g=J(A.values,l),x=Ce.current[l].validate(g);return vr(x)?(P({type:"SET_ISVALIDATING",payload:!0}),x.then(function(_){return _}).then(function(_){P({type:"SET_FIELD_ERROR",payload:{field:l,value:_}}),P({type:"SET_ISVALIDATING",payload:!1})})):(P({type:"SET_FIELD_ERROR",payload:{field:l,value:x}}),Promise.resolve(x))}else if(y.validationSchema)return P({type:"SET_ISVALIDATING",payload:!0}),or(A.values,l).then(function(_){return _}).then(function(_){P({type:"SET_FIELD_ERROR",payload:{field:l,value:J(_,l)}}),P({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),is=f.useCallback(function(l,g){var x=g.validate;Ce.current[l]={validate:x}},[]),ss=f.useCallback(function(l){delete Ce.current[l]},[]),bn=Q(function(l,g){P({type:"SET_TOUCHED",payload:l});var x=g===void 0?a:g;return x?ne(A.values):Promise.resolve()}),Sn=f.useCallback(function(l){P({type:"SET_ERRORS",payload:l})},[]),Mn=Q(function(l,g){var x=ae(l)?l(A.values):l;P({type:"SET_VALUES",payload:x});var _=g===void 0?r:g;return _?ne(x):Promise.resolve()}),kt=f.useCallback(function(l,g){P({type:"SET_FIELD_ERROR",payload:{field:l,value:g}})},[]),He=Q(function(l,g,x){P({type:"SET_FIELD_VALUE",payload:{field:l,value:g}});var _=x===void 0?r:x;return _?ne(Re(A.values,l,g)):Promise.resolve()}),Cn=f.useCallback(function(l,g){var x=g,_=l,C;if(!yr(l)){l.persist&&l.persist();var E=l.target?l.target:l.currentTarget,H=E.type,me=E.name,fr=E.id,hr=E.value,ps=E.checked,bm=E.outerHTML,En=E.options,gs=E.multiple;x=g||me||fr,_=/number|range/.test(H)?(C=parseFloat(hr),isNaN(C)?"":C):/checkbox/.test(H)?Ad(J(A.values,x),ps,hr):En&&gs?Yd(En):hr}x&&He(x,_)},[He,A.values]),lr=Q(function(l){if(yr(l))return function(g){return Cn(g,l)};Cn(l)}),ze=Q(function(l,g,x){g===void 0&&(g=!0),P({type:"SET_FIELD_TOUCHED",payload:{field:l,value:g}});var _=x===void 0?a:x;return _?ne(A.values):Promise.resolve()}),Tn=f.useCallback(function(l,g){l.persist&&l.persist();var x=l.target,_=x.name,C=x.id,E=x.outerHTML,H=g||_||C;ze(H,!0)},[ze]),ur=Q(function(l){if(yr(l))return function(g){return Tn(g,l)};Tn(l)}),kn=f.useCallback(function(l){ae(l)?P({type:"SET_FORMIK_STATE",payload:l}):P({type:"SET_FORMIK_STATE",payload:function(){return l}})},[]),Dn=f.useCallback(function(l){P({type:"SET_STATUS",payload:l})},[]),On=f.useCallback(function(l){P({type:"SET_ISSUBMITTING",payload:l})},[]),cr=Q(function(){return P({type:"SUBMIT_ATTEMPT"}),ne().then(function(l){var g=l instanceof Error,x=!g&&Object.keys(l).length===0;if(x){var _;try{if(_=ls(),_===void 0)return}catch(C){throw C}return Promise.resolve(_).then(function(C){return U.current&&P({type:"SUBMIT_SUCCESS"}),C}).catch(function(C){if(U.current)throw P({type:"SUBMIT_FAILURE"}),C})}else if(U.current&&(P({type:"SUBMIT_FAILURE"}),g))throw l})}),os=Q(function(l){l&&l.preventDefault&&ae(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&ae(l.stopPropagation)&&l.stopPropagation(),cr().catch(function(g){console.warn("Warning: An unhandled error was caught from submitForm()",g)})}),jn={resetForm:at,validateForm:ne,validateField:_n,setErrors:Sn,setFieldError:kt,setFieldTouched:ze,setFieldValue:He,setStatus:Dn,setSubmitting:On,setTouched:bn,setValues:Mn,setFormikState:kn,submitForm:cr},ls=Q(function(){return k(A.values,jn)}),us=Q(function(l){l&&l.preventDefault&&ae(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&ae(l.stopPropagation)&&l.stopPropagation(),at()}),cs=f.useCallback(function(l){return{value:J(A.values,l),error:J(A.errors,l),touched:!!J(A.touched,l),initialValue:J(b.current,l),initialTouched:!!J(M.current,l),initialError:J(V.current,l)}},[A.errors,A.touched,A.values]),ds=f.useCallback(function(l){return{setValue:function(x,_){return He(l,x,_)},setTouched:function(x,_){return ze(l,x,_)},setError:function(x){return kt(l,x)}}},[He,ze,kt]),fs=f.useCallback(function(l){var g=qt(l),x=g?l.name:l,_=J(A.values,x),C={name:x,value:_,onChange:lr,onBlur:ur};if(g){var E=l.type,H=l.value,me=l.as,fr=l.multiple;E==="checkbox"?H===void 0?C.checked=!!_:(C.checked=!!(Array.isArray(_)&&~_.indexOf(H)),C.value=H):E==="radio"?(C.checked=_===H,C.value=H):me==="select"&&fr&&(C.value=C.value||[],C.multiple=!0)}return C},[ur,lr,A.values]),dr=f.useMemo(function(){return!Pe(b.current,A.values)},[b.current,A.values]),hs=f.useMemo(function(){return typeof u<"u"?dr?A.errors&&Object.keys(A.errors).length===0:u!==!1&&ae(u)?u(y):u:A.errors&&Object.keys(A.errors).length===0},[u,dr,A.errors,y]),ms=z({},A,{initialValues:b.current,initialErrors:V.current,initialTouched:M.current,initialStatus:Z.current,handleBlur:ur,handleChange:lr,handleReset:us,handleSubmit:os,resetForm:at,setErrors:Sn,setFormikState:kn,setFieldTouched:ze,setFieldValue:He,setFieldError:kt,setStatus:Dn,setSubmitting:On,setTouched:bn,setValues:Mn,submitForm:cr,validateForm:ne,validateField:_n,isValid:hs,dirty:dr,unregisterField:ss,registerField:is,getFieldProps:fs,getFieldMeta:cs,getFieldHelpers:ds,validateOnBlur:a,validateOnChange:r,validateOnMount:s});return ms}function Ed(e){var t={};if(e.inner){if(e.inner.length===0)return Re(t,e.path,e.message);for(var a=e.inner,r=Array.isArray(a),n=0,a=r?a:a[Symbol.iterator]();;){var i;if(r){if(n>=a.length)break;i=a[n++]}else{if(n=a.next(),n.done)break;i=n.value}var s=i;J(t,s.path)||(t=Re(t,s.path,s.message))}}return t}function Fd(e,t,r,n){r===void 0&&(r=!1);var a=jr(e);return t[r?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}function jr(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(a){return Array.isArray(a)===!0||Ln(a)?jr(a):a!==""?a:void 0}):Ln(e[n])?t[n]=jr(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Pd(e,t,r){var n=e.slice();return t.forEach(function(i,s){if(typeof n[s]>"u"){var u=r.clone!==!1,d=u&&r.isMergeableObject(i);n[s]=d?Mr(Array.isArray(i)?[]:{},i,r):i}else r.isMergeableObject(i)?n[s]=Mr(e[s],i,r):e.indexOf(i)===-1&&n.push(i)}),n}function Yd(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Ad(e,t,r){if(typeof e=="boolean")return!!t;var n=[],a=!1,i=-1;if(Array.isArray(e))n=e,i=e.indexOf(r),a=i>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!a?n.concat(r):a?n.slice(0,i).concat(n.slice(i+1)):n}var Nd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function Q(e){var t=f.useRef(e);return Nd(function(){t.current=e}),f.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current.apply(void 0,n)},[])}var Rd=f.forwardRef(function(e,t){var r=e.action,n=si(e,["action"]),a=r??"#",i=kd(),s=i.handleReset,u=i.handleSubmit;return f.createElement("form",z({onSubmit:u,ref:t,onReset:s,action:a},n))});Rd.displayName="Form";const $d=e=>f.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.createElement("g",{id:"minus-small/solid"},f.createElement("path",{id:"Vector",fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12Z",fill:"#407BFF"}))),li=e=>f.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.createElement("path",{d:"M8 4V12M12 8H4",stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round"})),ui=e=>f.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.createElement("path",{d:"M6.26099 3.13043L8.39972 32.7888V32.8696H26.8122L28.9509 3.22275V3.13043H6.26099ZM26.0557 32.0387H9.16193L7.55788 9.82376H8.43954L9.89002 29.4017C9.89851 29.5048 9.94461 29.601 10.0193 29.6714C10.094 29.7418 10.1919 29.7815 10.2939 29.7826H10.328C10.3811 29.7789 10.4329 29.7646 10.4806 29.7406C10.5282 29.7165 10.5707 29.6832 10.6056 29.6424C10.6404 29.6017 10.667 29.5544 10.6838 29.5031C10.7006 29.4519 10.7073 29.3979 10.7034 29.344L9.25294 9.82376H27.6597L26.0557 32.0387ZM27.7166 8.99286H9.19037L8.87184 4.66528C8.86183 4.5597 8.81293 4.46184 8.7349 4.39125C8.65687 4.32065 8.55546 4.28251 8.45092 4.28445C8.34378 4.29473 8.24477 4.34679 8.17474 4.42968C8.1047 4.51256 8.06913 4.61978 8.0755 4.72875L8.39404 8.99863H7.501L7.13696 3.95556H28.0807L27.7166 8.99286Z",fill:"#407BFF"}),f.createElement("path",{d:"M12.7797 13.9321C13.0452 13.9321 13.3047 13.8522 13.5255 13.7026C13.7462 13.553 13.9183 13.3403 14.0199 13.0914C14.1215 12.8426 14.1481 12.5688 14.0963 12.3047C14.0445 12.0405 13.9166 11.7979 13.7289 11.6074C13.5411 11.417 13.3019 11.2873 13.0415 11.2348C12.7811 11.1822 12.5112 11.2092 12.2659 11.3122C12.0206 11.4153 11.811 11.5898 11.6635 11.8138C11.516 12.0377 11.4373 12.301 11.4373 12.5703C11.4373 12.9315 11.5787 13.2779 11.8304 13.5332C12.0822 13.7886 12.4236 13.9321 12.7797 13.9321ZM12.7797 12.0337C12.8843 12.0337 12.9866 12.0652 13.0735 12.1241C13.1605 12.1831 13.2283 12.2669 13.2684 12.365C13.3084 12.463 13.3189 12.5709 13.2985 12.675C13.2781 12.7791 13.2277 12.8747 13.1537 12.9498C13.0797 13.0248 12.9855 13.0759 12.8829 13.0966C12.7802 13.1173 12.6739 13.1067 12.5772 13.0661C12.4806 13.0255 12.3979 12.9567 12.3398 12.8685C12.2817 12.7802 12.2507 12.6765 12.2507 12.5703C12.2507 12.428 12.3064 12.2915 12.4056 12.1909C12.5048 12.0902 12.6394 12.0337 12.7797 12.0337Z",fill:"#407BFF"}),f.createElement("path",{d:"M12.7738 18.3578C12.7772 18.6266 12.8589 18.8883 13.0087 19.1101C13.1585 19.3319 13.3696 19.5037 13.6155 19.604C13.8614 19.7042 14.1311 19.7284 14.3905 19.6734C14.6499 19.6185 14.8875 19.4869 15.0733 19.2952C15.2591 19.1035 15.3848 18.8603 15.4346 18.5962C15.4844 18.3322 15.456 18.0591 15.353 17.8114C15.2501 17.5637 15.0772 17.3524 14.856 17.2042C14.6349 17.0561 14.3755 16.9776 14.1105 16.9787C13.9332 16.9794 13.7579 17.0158 13.5946 17.0856C13.4312 17.1555 13.2832 17.2575 13.1589 17.3857C13.0346 17.5139 12.9366 17.6658 12.8705 17.8327C12.8044 17.9995 12.7715 18.178 12.7738 18.3578ZM14.6395 18.3578C14.6395 18.4639 14.6085 18.5676 14.5503 18.6559C14.4922 18.7441 14.4096 18.8129 14.3129 18.8535C14.2163 18.8941 14.1099 18.9048 14.0073 18.8841C13.9047 18.8634 13.8104 18.8122 13.7364 18.7372C13.6625 18.6622 13.6121 18.5665 13.5917 18.4624C13.5713 18.3583 13.5817 18.2505 13.6218 18.1524C13.6618 18.0543 13.7296 17.9705 13.8166 17.9116C13.9036 17.8526 14.0059 17.8211 14.1105 17.8211C14.2508 17.8211 14.3854 17.8777 14.4846 17.9783C14.5838 18.0789 14.6395 18.2154 14.6395 18.3578Z",fill:"#407BFF"}),f.createElement("path",{d:"M22.3129 18.3924C22.5784 18.3924 22.8379 18.3125 23.0587 18.1629C23.2794 18.0132 23.4515 17.8006 23.5531 17.5517C23.6547 17.3029 23.6813 17.0291 23.6295 16.765C23.5777 16.5008 23.4498 16.2582 23.2621 16.0677C23.0743 15.8773 22.8351 15.7476 22.5747 15.6951C22.3143 15.6425 22.0444 15.6695 21.7991 15.7725C21.5539 15.8756 21.3442 16.0501 21.1967 16.2741C21.0492 16.498 20.9705 16.7613 20.9705 17.0306C20.9705 17.3918 21.1119 17.7382 21.3636 17.9935C21.6154 18.2489 21.9568 18.3924 22.3129 18.3924ZM22.3129 16.4998C22.4177 16.4998 22.5202 16.5314 22.6073 16.5906C22.6944 16.6499 22.7622 16.734 22.8021 16.8324C22.842 16.9308 22.8521 17.039 22.8312 17.1432C22.8104 17.2475 22.7594 17.3431 22.6849 17.4179C22.6103 17.4927 22.5155 17.5434 22.4125 17.5634C22.3095 17.5835 22.203 17.572 22.1064 17.5305C22.0099 17.489 21.9277 17.4193 21.8702 17.3303C21.8128 17.2413 21.7827 17.137 21.7839 17.0306C21.7854 16.8893 21.8418 16.7543 21.9408 16.6549C22.0398 16.5555 22.1735 16.4998 22.3129 16.4998Z",fill:"#407BFF"}),f.createElement("path",{d:"M17.6373 15.8247C17.9028 15.8247 18.1624 15.7448 18.3831 15.5952C18.6039 15.4455 18.7759 15.2329 18.8775 14.984C18.9791 14.7352 19.0057 14.4614 18.9539 14.1972C18.9021 13.9331 18.7743 13.6905 18.5865 13.5C18.3988 13.3096 18.1596 13.1799 17.8992 13.1273C17.6388 13.0748 17.3689 13.1018 17.1236 13.2048C16.8783 13.3079 16.6687 13.4824 16.5212 13.7064C16.3737 13.9303 16.2949 14.1936 16.2949 14.4629C16.2949 14.8241 16.4364 15.1704 16.6881 15.4258C16.9399 15.6812 17.2813 15.8247 17.6373 15.8247ZM17.6373 13.9263C17.7419 13.9263 17.8442 13.9578 17.9312 14.0167C18.0182 14.0757 18.086 14.1595 18.126 14.2576C18.1661 14.3556 18.1766 14.4635 18.1562 14.5676C18.1357 14.6717 18.0854 14.7673 18.0114 14.8424C17.9374 14.9174 17.8431 14.9685 17.7405 14.9892C17.6379 15.0099 17.5315 14.9993 17.4349 14.9587C17.3382 14.9181 17.2556 14.8493 17.1975 14.761C17.1394 14.6728 17.1083 14.569 17.1083 14.4629C17.1045 14.3901 17.1153 14.3172 17.1401 14.2487C17.165 14.1802 17.2033 14.1176 17.2528 14.0647C17.3024 14.0117 17.362 13.9696 17.4281 13.9409C17.4942 13.9121 17.5654 13.8973 17.6373 13.8974V13.9263Z",fill:"#407BFF"}),f.createElement("path",{d:"M15.0776 23.5451C15.0832 23.7663 15.153 23.9809 15.2782 24.1621C15.4035 24.3433 15.5786 24.483 15.7817 24.5638C15.9848 24.6446 16.2069 24.6628 16.4201 24.6161C16.6334 24.5695 16.8283 24.4602 16.9806 24.3017C17.1329 24.1433 17.2358 23.9428 17.2763 23.7253C17.3169 23.5079 17.2933 23.2832 17.2086 23.0792C17.1239 22.8753 16.9817 22.7013 16.8 22.5789C16.6183 22.4564 16.405 22.3911 16.1868 22.3911C15.8901 22.3986 15.608 22.5235 15.4007 22.7391C15.1935 22.9547 15.0775 23.2439 15.0776 23.5451ZM16.1868 23.245C16.2453 23.245 16.3025 23.2626 16.3512 23.2956C16.3998 23.3286 16.4377 23.3754 16.4601 23.4302C16.4825 23.4851 16.4883 23.5454 16.4769 23.6036C16.4655 23.6618 16.4373 23.7153 16.396 23.7572C16.3546 23.7992 16.3019 23.8278 16.2445 23.8394C16.1872 23.8509 16.1277 23.845 16.0736 23.8223C16.0196 23.7996 15.9734 23.7611 15.9409 23.7118C15.9084 23.6624 15.891 23.6044 15.891 23.5451C15.891 23.4655 15.9222 23.3892 15.9777 23.3329C16.0331 23.2766 16.1084 23.245 16.1868 23.245Z",fill:"#407BFF"}),f.createElement("path",{d:"M20.4414 22.2929C20.6691 22.301 20.894 22.2394 21.0868 22.1163C21.2797 21.9932 21.4317 21.8142 21.523 21.6024C21.6144 21.3907 21.641 21.1559 21.5994 20.9287C21.5577 20.7014 21.4497 20.4921 21.2894 20.3278C21.1292 20.1635 20.9239 20.0519 20.7003 20.0073C20.4767 19.9627 20.2451 19.9872 20.0354 20.0777C19.8258 20.1682 19.6477 20.3205 19.5244 20.5149C19.401 20.7092 19.338 20.9367 19.3436 21.1678C19.3507 21.4619 19.4683 21.7423 19.6723 21.9514C19.8764 22.1606 20.1515 22.2827 20.4414 22.2929ZM20.4414 20.8677C20.5199 20.8677 20.5951 20.8993 20.6506 20.9556C20.706 21.0119 20.7372 21.0882 20.7372 21.1678C20.7372 21.2474 20.706 21.3237 20.6506 21.3799C20.5951 21.4362 20.5199 21.4678 20.4414 21.4678C20.3624 21.4678 20.2866 21.4364 20.2302 21.3803C20.1738 21.3242 20.1414 21.2479 20.1399 21.1678C20.1399 21.1279 20.1478 21.0884 20.163 21.0516C20.1782 21.0148 20.2005 20.9815 20.2286 20.9535C20.2566 20.9256 20.2899 20.9036 20.3265 20.8889C20.363 20.8742 20.4021 20.867 20.4414 20.8677Z",fill:"#407BFF"}),f.createElement("path",{d:"M22.7851 12.98C23.0101 12.98 23.23 12.9123 23.4171 12.7855C23.6042 12.6587 23.75 12.4785 23.8361 12.2676C23.9222 12.0567 23.9448 11.8247 23.9009 11.6008C23.857 11.377 23.7486 11.1714 23.5895 11.01C23.4304 10.8486 23.2277 10.7387 23.007 10.6941C22.7863 10.6496 22.5576 10.6725 22.3497 10.7598C22.1419 10.8472 21.9642 10.9951 21.8392 11.1848C21.7142 11.3746 21.6475 11.5977 21.6475 11.826C21.6475 12.1321 21.7673 12.4256 21.9807 12.642C22.194 12.8584 22.4834 12.98 22.7851 12.98ZM22.7851 11.5548C22.8291 11.542 22.8754 11.5398 22.9205 11.5483C22.9655 11.5568 23.0079 11.5758 23.0445 11.6038C23.081 11.6317 23.1107 11.6679 23.1311 11.7095C23.1515 11.7511 23.1621 11.7969 23.1621 11.8433C23.1621 11.8897 23.1515 11.9355 23.1311 11.9771C23.1107 12.0187 23.081 12.0549 23.0445 12.0828C23.0079 12.1108 22.9655 12.1298 22.9205 12.1383C22.8754 12.1468 22.8291 12.1446 22.7851 12.1318C22.7411 12.1446 22.6947 12.1468 22.6497 12.1383C22.6047 12.1298 22.5623 12.1108 22.5257 12.0828C22.4892 12.0549 22.4595 12.0187 22.4391 11.9771C22.4187 11.9355 22.4081 11.8897 22.4081 11.8433C22.4081 11.7969 22.4187 11.7511 22.4391 11.7095C22.4595 11.6679 22.4892 11.6317 22.5257 11.6038C22.5623 11.5758 22.6047 11.5568 22.6497 11.5483C22.6947 11.5398 22.7411 11.542 22.7851 11.5548Z",fill:"#407BFF"}),f.createElement("path",{d:"M11.6646 30.5904C11.6136 30.6142 11.568 30.6485 11.5306 30.691C11.4931 30.7335 11.4647 30.7834 11.4471 30.8375C11.4295 30.8916 11.4231 30.9488 11.4282 31.0056C11.4333 31.0623 11.4499 31.1174 11.4769 31.1674C11.5119 31.2348 11.5642 31.2913 11.6283 31.3309C11.6924 31.3705 11.7659 31.3918 11.841 31.3924C11.904 31.3942 11.9665 31.3803 12.023 31.352C13.7609 30.4488 15.6845 29.9744 17.6372 29.9672C19.7037 29.9977 21.7414 30.4634 23.6211 31.3347C23.6955 31.3741 23.78 31.3894 23.8632 31.3785C23.9464 31.3675 24.0243 31.331 24.0863 31.2737C24.1484 31.2164 24.1916 31.1412 24.2101 31.0582C24.2286 30.9752 24.2216 30.8884 24.1899 30.8096C24.1499 30.7073 24.0724 30.6246 23.9738 30.5788C21.9837 29.6554 19.8254 29.164 17.6372 29.1363C15.5614 29.1381 13.5152 29.6363 11.6646 30.5904Z",fill:"#407BFF"})),Wd=v.div`
  width: 100vw;
  max-width: calc(280px - 24px);
  @media only screen and (min-width: 768px) {
    max-width: calc(704px - 48px);
  }

  @media only screen and (min-width: 1440px) {
    max-width: calc(592px - 48px);
  }
`,Id=v.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`,Ld=v.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`;v.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;const Ud=v.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  gap: 7px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    padding: 10px;

    gap: 10px;

    border-radius: 30px;
    border: 1px solid ${e=>e.theme.colors.secondaryBlue};
    background: ${e=>e.theme.colors.mainBg};

    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

    cursor: pointer;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 92px;
    height: 36px;

    padding: 6px 10px;
    gap: 10px;

    border-radius: 40px;
    background: ${e=>e.theme.colors.secondaryLightblue};
    color: ${e=>e.theme.colors.primaryBlue};

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`,Gd=v(li)`
  stroke: ${e=>e.theme.colors.primaryBlue};
`,Vd=v($d)`
  stroke: ${e=>e.theme.colors.primaryBlue};
  fill: ${e=>e.theme.colors.primaryBlue};
`,Hd=v.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 10px;
    margin-bottom: 24px;

    outline: none;
    border-radius: 6px;
    border: 1px solid ${e=>e.theme.colors.secondaryBlue};

    appearance: none;

    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 16px;
    line-height: 1.25;
    text-align: left;
  }

  label:nth-child(2) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    input,
    select {
      width: 100%;
    }
  }
`,zd=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  p {
    color: --blue;
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    line-height: 1.33;
  }

  button {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 10px 30px;

    outline: none;
    border-radius: 10px;
    border: none;

    color: ${e=>e.theme.colors.mainBg};
    background: ${e=>e.theme.colors.primaryBlue};

    box-shadow: ${e=>e.theme.shadows.buttonShadow};

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;

    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`;v.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${e=>e.theme.colors.secondaryBg};
  margin-bottom: 24px;
`;v(ui)`
  width: 36px;
  height: 36px;
`;const Bd=v.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`;v.p`
  font-size: 12px;
  line-height: 2;
`;const ma=20,Zd=({onClose:e})=>{const t=Vt(),[r,n]=f.useState(250),{handleChange:a,handleSubmit:i,values:{date:s,waterAmount:u},errors:d,setFieldValue:h}=jd({initialValues:{waterAmount:"250",date:`${Ne(new Date,"HH")}:${Ne(new Date,"mm")}`},onSubmit:b=>{t(Ss(b)).unwrap().then(()=>{t(e())})}}),k=()=>{h("waterAmount",r?r.toString():"0")},F=()=>{const b=Number.parseInt(u)+ma;h("waterAmount",b.toString())},y=()=>{const b=Number.parseInt(u)-ma;h("waterAmount",b<=0?"0":b.toString())};return o.jsxs(Wd,{onSubmit:i,children:[o.jsx(Id,{children:"Add Water Title"}),o.jsx(Ld,{children:"Choose a value"}),o.jsx(Bd,{children:"Amount of water:"}),o.jsxs(Ud,{children:[o.jsxs("button",{onClick:y,name:"minus",type:"button",children:[o.jsx(Vd,{"aria-label":"minus_button"})," "]}),o.jsxs("span",{className:"water-amount-value",children:[u,"ml"]}),o.jsxs("button",{onClick:F,name:"plus",type:"button",children:[o.jsx(Gd,{"aria-label":"plus_button"})," "]})]}),o.jsxs(Hd,{children:[o.jsxs("label",{children:["Recording time:",o.jsx("input",{name:"date",type:"time",value:s,onBlur:a}),d.date?o.jsx("div",{children:d.date}):null]}),o.jsxs("label",{children:["Enter the value of the water used:",o.jsx("input",{name:"number",value:r,onBlur:k,onChange:({target:{value:b}})=>n(Number.parseInt(b))}),d.waterAmount?o.jsx("div",{children:d.waterAmount}):null]}),o.jsxs(zd,{children:[o.jsxs("p",{children:[u,"ml"]}),o.jsx("button",{disabled:Object.keys(d).length>0,type:"submit",children:"Save"})]})]})]})},qd=()=>{const[n,a]=f.useState(!1),[i,s]=f.useState(!1),u=h=>{a(!0),s(!1),h.stopPropagation()},d=()=>{a(!1)};return o.jsxs(zs,{children:[o.jsxs(Bs,{children:[o.jsx(Zs,{children:"Today"}),o.jsx(qs,{type:"range",min:"0",max:"100",value:85,disabled:!0}),o.jsxs(Ks,{$rater:85,children:[o.jsx("span",{children:"0%"}),o.jsx("span",{children:"50%"}),o.jsx("span",{children:"100%"})]})]}),o.jsxs(Js,{onClick:h=>u(h),children:[o.jsx("svg",{width:24,height:24,children:o.jsx("use",{href:`${Ms}#plus-circle`})}),"Add water"]}),n&&o.jsx(Oa,{$position:"center",open:n,onClose:d,children:o.jsx(Zd,{onClose:d,isEditing:i})})]})},Kd="/capybara-components-frontend/assets/bg-home-desktop-0559d8bf.svg",Jd="/capybara-components-frontend/assets/bg-home-tablet-01106aec.svg",Xd="/capybara-components-frontend/assets/bg-home-mob-0d03cb1d.svg",Qd=v(Cs)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;
  background-color: transparent;
  padding-top: 16px;

  @media only screen and (min-width: 768px) {
    padding-top: 32px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    padding-top: 8px;
    padding-bottom: 0;
  }
`,ef=v.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  height: 440px;

  @media only screen and (min-width: 768px) {
    height: 492px;
  }

  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
    padding-top: 32px;
    padding-bottom: 16px;
  }
`,tf=v.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
  }
`,rf=v.div`
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);
  background-image: url(${Xd});
  background-position: calc(50% + 3px) 44px;
  
  @media only screen and (min-width: 768px) {
    min-height: calc(100% - 80px);
    background-image: url(${Jd});
    background-position: calc(50% + 9px) 8px;
  }

  @media only screen and (min-width: 1440px) {
    min-height: calc(100% - 72px);
    background-image: url(${Kd});
    background-position: calc(50% - 10px) 46px;
  }
`;function lt(e,t){if(e.one!==void 0&&t===1)return e.one;const r=t%10,n=t%100;return r===1&&n!==11?e.singularNominative.replace("{{count}}",String(t)):r>=2&&r<=4&&(n<10||n>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function q(e){return(t,r)=>r&&r.addSuffix?r.comparison&&r.comparison>0?e.future?lt(e.future,t):"за "+lt(e.regular,t):e.past?lt(e.past,t):lt(e.regular,t)+" тому":lt(e.regular,t)}const nf=(e,t)=>t&&t.addSuffix?t.comparison&&t.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",af={lessThanXSeconds:q({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:q({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:nf,lessThanXMinutes:q({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:q({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:q({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:q({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:q({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:q({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:q({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:q({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:q({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:q({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:q({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:q({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:q({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},sf=(e,t,r)=>(r=r||{},af[e](t,r)),of={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},lf={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},uf={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},cf={date:mr({formats:of,defaultWidth:"full"}),time:mr({formats:lf,defaultWidth:"full"}),dateTime:mr({formats:uf,defaultWidth:"full"})},Zr=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function df(e){const t=Zr[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function ci(e){return"'у "+Zr[e]+" о' p"}function ff(e){const t=Zr[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}const hf=(e,t,r)=>{const n=ja(e),a=n.getDay();return Fa(n,t,r)?ci(a):df(a)},mf=(e,t,r)=>{const n=ja(e),a=n.getDay();return Fa(n,t,r)?ci(a):ff(a)},pf={lastWeek:hf,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:mf,other:"P"},gf=(e,t,r,n)=>{const a=pf[e];return typeof a=="function"?a(t,r,n):a},yf={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},vf={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},xf={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},wf={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},_f={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},bf={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},Sf={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},Mf=(e,t)=>{const r=String(t==null?void 0:t.unit),n=Number(e);let a;return r==="date"?n===3||n===23?a="-є":a="-е":r==="minute"||r==="second"||r==="hour"?a="-а":a="-й",n+a},Cf={ordinalNumber:Mf,era:it({values:yf,defaultWidth:"wide"}),quarter:it({values:vf,defaultWidth:"wide",argumentCallback:e=>e-1}),month:it({values:xf,defaultWidth:"wide",formattingValues:wf,defaultFormattingWidth:"wide"}),day:it({values:_f,defaultWidth:"wide"}),dayPeriod:it({values:bf,defaultWidth:"any",formattingValues:Sf,defaultFormattingWidth:"wide"})},Tf=/^(\d+)(-?(е|й|є|а|я))?/i,kf=/\d+/i,Df={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},Of={any:[/^д/i,/^н/i]},jf={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},Ef={any:[/1/i,/2/i,/3/i,/4/i]},Ff={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},Pf={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},Yf={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Af={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},Nf={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},Rf={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},$f={ordinalNumber:Ts({matchPattern:Tf,parsePattern:kf,valueCallback:e=>parseInt(e,10)}),era:st({matchPatterns:Df,defaultMatchWidth:"wide",parsePatterns:Of,defaultParseWidth:"any"}),quarter:st({matchPatterns:jf,defaultMatchWidth:"wide",parsePatterns:Ef,defaultParseWidth:"any",valueCallback:e=>e+1}),month:st({matchPatterns:Ff,defaultMatchWidth:"wide",parsePatterns:Pf,defaultParseWidth:"any"}),day:st({matchPatterns:Yf,defaultMatchWidth:"wide",parsePatterns:Af,defaultParseWidth:"any"}),dayPeriod:st({matchPatterns:Nf,defaultMatchWidth:"wide",parsePatterns:Rf,defaultParseWidth:"any"})},Wf={code:"uk",formatDistance:sf,formatLong:cf,formatRelative:gf,localize:Cf,match:$f,options:{weekStartsOn:1,firstWeekContainsDate:1}},pa=Wf,If=e=>e.water.waterVolumes,Lf=e=>e.water.stats,Uf=v.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 104px) / 5);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: calc((100% - 306px) / 10);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 198px) / 10);
  }
`,Gf=v.span`
  color: var(--blueSecondary);
  font-size: 10px;
  line-height: 1.6;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    font-size: 13px;
    line-height: 1.54;
  }

  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,Vf=v.button`
  display: flex;
  margin-left: auto;
  border: none;
  background: white;
`,Hf=v.button`
  min-width: 32px;
  min-height: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: var(--blackPrimari);
  background-color: #fff;
  border-radius: 50%;
  padding: 0px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    min-width: 34px;
    min-height: 34px;
    font-size: 16px;
    line-height: 1.25;
  }
`,zf=v.span`
  display: flex;
  flex-direction: column;
  padding: 13px 24px;
  gap: 16px;
  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    padding: 13px 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px 24px;
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    padding: 16px 24px;
  }
`,Ot=v.span`
  color: var(--Primery-Color-Black, #2f2f2f);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,jt=v.span`
  color: var(--Primery-Color-Blue, #407bff);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,Bf=({item:e,index:t,monthName:r})=>{const{waterVolumePercentage:n,dailyNorma:a,portions:i}=e;return o.jsxs(zf,{children:[o.jsx(Ot,{children:o.jsxs(jt,{children:[t+1,", ",r]})}),o.jsxs(Ot,{children:["Daily norma: ",o.jsx(jt,{children:a})]}),o.jsxs(Ot,{children:["Fulfillment of the daily norm:"," ",o.jsxs(jt,{children:[n,"%"]})]}),o.jsxs(Ot,{children:["How many servings of water: ",o.jsx(jt,{children:i})]})]})},Zf=e=>f.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},f.createElement("g",{id:"x-mark/outline"},f.createElement("path",{id:"Vector",d:"M4 12L12 4M4 4L12 12",stroke:"#407BFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))),qf=({item:e,index:t,monthName:r})=>{const[n,a]=f.useState(null),{waterVolumePercentage:i}=e,s=k=>{a(k.currentTarget)},u=()=>{a(null)},d=!!n,h=d?"simple-popover":void 0;return o.jsxs(Uf,{children:[o.jsx(Hf,{"aria-describedby":h,onClick:s,style:{border:i>=100?"none":"1px solid",borderColor:i>=100?"transparent":"#ff9d43"},children:t+1}),o.jsxs(Gf,{children:[i,"%"]}),o.jsx(ks,{id:h,open:d,anchorEl:n,onClose:u,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:o.jsxs(Ds,{sx:{p:2},style:{minWidth:"292px",minHeight:"188px",padding:"24px 16px",borderRadius:"10px",boxShadow:"0px 4px 4px 0px rgba(64, 123, 255, 0.3)"},children:[o.jsx(Vf,{onClick:u,children:o.jsx(Zf,{})}),o.jsx(Bf,{item:e,index:t,monthName:r})]})})]})},Kf=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Jf=v.div`
  display: flex;
  gap: 12px;

  span {
    color: var(--accentPrimari);
    font-size: 16px;
    line-height: 1.25;
  }
`,Xf=v.ul`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 26px;

  width: 264px;
  height: 460px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    row-gap: 20px;
    column-gap: 34px;

    width: 656px;
    height: 292px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 20px;
    column-gap: 22px;
    width: 544px;
    height: 284px;
  }
`,Qf=v.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--blackPrimari, #2f2f2f);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,ga=v.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: ${({disabled:e})=>e?"default":"pointer"};

  svg {
    width: 5px;
    height: 10px;
  }
`,e1=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],t1=(e,t)=>new Date(t,e+1,0).getDate(),ya=e=>{const t=e==null?void 0:e.split(", ");return parseInt((t==null?void 0:t[0])??0)},r1=(e,t)=>Array.from({length:e},(r,n)=>({date:`${n+1}, ${t}`,portions:0,waterVolumePercentage:0,dailyNorma:0})),n1=e=>f.createElement("svg",{width:5.260498,height:9.64682,viewBox:"0 0 5.2605 9.64682",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},f.createElement("desc",null,`
			Created with Pixso.
	`),f.createElement("defs",null),f.createElement("path",{id:"Vector",d:"M0.12793 5.13257C0.0458984 5.05054 0 4.93936 0 4.82343C0 4.70749 0.0458984 4.59628 0.12793 4.51425L4.50293 0.139252C4.54297 0.0962524 4.59131 0.0617981 4.64502 0.0378723C4.69873 0.0139771 4.75659 0.00109863 4.81543 6.10352e-05C4.87402 -0.000976562 4.93237 0.00982666 4.98682 0.0318298C5.04126 0.053833 5.09082 0.0866089 5.13232 0.128143C5.17383 0.169678 5.20679 0.219177 5.22876 0.273651C5.25073 0.328125 5.26147 0.386475 5.2605 0.445221C5.25952 0.503967 5.24658 0.56189 5.22266 0.61557C5.19873 0.66922 5.16431 0.717529 5.12134 0.757568L1.05542 4.82343L5.12134 8.88925C5.16431 8.92929 5.19873 8.9776 5.22266 9.03125C5.24658 9.08493 5.25952 9.14285 5.2605 9.2016C5.26147 9.26035 5.25073 9.3187 5.22876 9.37317C5.20679 9.42764 5.17383 9.47714 5.13232 9.51868C5.09082 9.56024 5.04126 9.59299 4.98682 9.61499C4.93237 9.63699 4.87402 9.6478 4.81543 9.64676C4.75659 9.64572 4.69873 9.63287 4.64502 9.60895C4.59131 9.58505 4.54297 9.55057 4.50293 9.50757L0.12793 5.13257Z",fill:"#407BFF",fillOpacity:1,fillRule:"evenodd"})),a1=e=>f.createElement("svg",{width:5.260498,height:9.64682,viewBox:"0 0 5.2605 9.64682",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},f.createElement("desc",null,`
			Created with Pixso.
	`),f.createElement("defs",null),f.createElement("path",{id:"Vector",d:"M5.13257 5.13257C5.2146 5.05054 5.2605 4.93936 5.2605 4.82343C5.2605 4.70749 5.2146 4.59628 5.13257 4.51425L0.757568 0.139252C0.717529 0.0962524 0.669189 0.0617981 0.615479 0.0378723C0.561768 0.0139771 0.503906 0.00109863 0.445068 6.10352e-05C0.386475 -0.000976562 0.328125 0.00982666 0.273682 0.0318298C0.219238 0.053833 0.169678 0.0866089 0.128174 0.128143C0.0866699 0.169678 0.0537109 0.219177 0.0317383 0.273651C0.00976562 0.328125 -0.000976562 0.386475 0 0.445221C0.000976562 0.503967 0.013916 0.56189 0.0378418 0.61557C0.0617676 0.66922 0.0961914 0.717529 0.13916 0.757568L4.20508 4.82343L0.13916 8.88925C0.0961914 8.92929 0.0617676 8.9776 0.0378418 9.03125C0.013916 9.08493 0.000976562 9.14285 0 9.2016C-0.000976562 9.26035 0.00976562 9.3187 0.0317383 9.37317C0.0537109 9.42764 0.0866699 9.47714 0.128174 9.51868C0.169678 9.56024 0.219238 9.59299 0.273682 9.61499C0.328125 9.63699 0.386475 9.6478 0.445068 9.64676C0.503906 9.64572 0.561768 9.63287 0.615479 9.60895C0.669189 9.58505 0.717529 9.55057 0.757568 9.50757L5.13257 5.13257Z",fill:"#407BFF",fillOpacity:1,fillRule:"evenodd"})),xr=new Date,i1=()=>{const e=Gt(Lf),[t,r]=f.useState(xr.getMonth()),[n,a]=f.useState(xr.getFullYear()),i=Vt(),{i18n:s}=Ea(),u=e1(t),d=t1(t,n),h=r1(d,u),k=h==null?void 0:h.map(b=>Object.values(e).find(M=>ya(M.date)===ya(b.date))||b);f.useEffect(()=>{i(Os({year:n,month:t+1}))},[i,n,t]);const F=()=>{t===0?(a(b=>b-1),r(11)):r(b=>b-1)},y=()=>{t===11?(a(b=>b+1),r(0)):r(b=>b+1)};return o.jsxs(o.Fragment,{children:[o.jsxs(Kf,{children:[o.jsx(Qf,{children:"Month"}),o.jsxs(Jf,{children:[o.jsx(ga,{onClick:F,children:o.jsx(n1,{})}),o.jsxs("span",{style:{textTransform:"capitalize"},children:[Ne(new Date(n,t,1),"LLLL",{locale:s.language==="uk"?pa:Rn}),", ",n]}),o.jsx(ga,{onClick:y,disabled:xr<new Date(n,t+1),children:o.jsx(a1,{})})]})]}),o.jsx(Xf,{children:k.map((b,V)=>{const M=Ne(new Date(n,t,V+1),"LLLL",{locale:s.language==="uk"?pa:Rn});return o.jsx(qf,{item:b,index:V,monthName:M},V)})})]})},s1=v.div`
  margin-bottom: 24px;
`,o1=v.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: var(--blackPrimari, #2f2f2f);

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,l1=v.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;

  color: var(--accentPrimari);
  line-height: 1.25;
  border: none;
  background-color: transparent;

  font-size: 16px;
  font-weight: 500;

  & svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`,u1=()=>o.jsxs(l1,{children:[o.jsx(li,{}),"Add Water"]});//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var di;function m(){return di.apply(null,arguments)}function c1(e){di=e}function se(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function $e(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function qr(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(O(e,t))return!1;return!0}function K(e){return e===void 0}function _e(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function bt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function fi(e,t){var r=[],n,a=e.length;for(n=0;n<a;++n)r.push(t(e[n],n));return r}function Te(e,t){for(var r in t)O(t,r)&&(e[r]=t[r]);return O(t,"toString")&&(e.toString=t.toString),O(t,"valueOf")&&(e.valueOf=t.valueOf),e}function fe(e,t,r,n){return Ai(e,t,r,n,!0).utc()}function d1(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function S(e){return e._pf==null&&(e._pf=d1()),e._pf}var Er;Array.prototype.some?Er=Array.prototype.some:Er=function(e){var t=Object(this),r=t.length>>>0,n;for(n=0;n<r;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1};function Kr(e){var t=null,r=!1,n=e._d&&!isNaN(e._d.getTime());if(n&&(t=S(e),r=Er.call(t.parsedDateParts,function(a){return a!=null}),n=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(n=n&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=n;else return n;return e._isValid}function Kt(e){var t=fe(NaN);return e!=null?Te(S(t),e):S(t).userInvalidated=!0,t}var va=m.momentProperties=[],wr=!1;function Jr(e,t){var r,n,a,i=va.length;if(K(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),K(t._i)||(e._i=t._i),K(t._f)||(e._f=t._f),K(t._l)||(e._l=t._l),K(t._strict)||(e._strict=t._strict),K(t._tzm)||(e._tzm=t._tzm),K(t._isUTC)||(e._isUTC=t._isUTC),K(t._offset)||(e._offset=t._offset),K(t._pf)||(e._pf=S(t)),K(t._locale)||(e._locale=t._locale),i>0)for(r=0;r<i;r++)n=va[r],a=t[n],K(a)||(e[n]=a);return e}function St(e){Jr(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wr===!1&&(wr=!0,m.updateOffset(this),wr=!1)}function oe(e){return e instanceof St||e!=null&&e._isAMomentObject!=null}function hi(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function te(e,t){var r=!0;return Te(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),r){var n=[],a,i,s,u=arguments.length;for(i=0;i<u;i++){if(a="",typeof arguments[i]=="object"){a+=`
[`+i+"] ";for(s in arguments[0])O(arguments[0],s)&&(a+=s+": "+arguments[0][s]+", ");a=a.slice(0,-2)}else a=arguments[i];n.push(a)}hi(e+`
Arguments: `+Array.prototype.slice.call(n).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var xa={};function mi(e,t){m.deprecationHandler!=null&&m.deprecationHandler(e,t),xa[e]||(hi(t),xa[e]=!0)}m.suppressDeprecationWarnings=!1;m.deprecationHandler=null;function he(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function f1(e){var t,r;for(r in e)O(e,r)&&(t=e[r],he(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Fr(e,t){var r=Te({},e),n;for(n in t)O(t,n)&&($e(e[n])&&$e(t[n])?(r[n]={},Te(r[n],e[n]),Te(r[n],t[n])):t[n]!=null?r[n]=t[n]:delete r[n]);for(n in e)O(e,n)&&!O(t,n)&&$e(e[n])&&(r[n]=Te({},r[n]));return r}function Xr(e){e!=null&&this.set(e)}var Pr;Object.keys?Pr=Object.keys:Pr=function(e){var t,r=[];for(t in e)O(e,t)&&r.push(t);return r};var h1={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function m1(e,t,r){var n=this._calendar[e]||this._calendar.sameElse;return he(n)?n.call(t,r):n}function ce(e,t,r){var n=""+Math.abs(e),a=t-n.length,i=e>=0;return(i?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+n}var Qr=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Et=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,_r={},Ke={};function w(e,t,r,n){var a=n;typeof n=="string"&&(a=function(){return this[n]()}),e&&(Ke[e]=a),t&&(Ke[t[0]]=function(){return ce(a.apply(this,arguments),t[1],t[2])}),r&&(Ke[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function p1(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function g1(e){var t=e.match(Qr),r,n;for(r=0,n=t.length;r<n;r++)Ke[t[r]]?t[r]=Ke[t[r]]:t[r]=p1(t[r]);return function(a){var i="",s;for(s=0;s<n;s++)i+=he(t[s])?t[s].call(a,e):t[s];return i}}function Yt(e,t){return e.isValid()?(t=pi(t,e.localeData()),_r[t]=_r[t]||g1(t),_r[t](e)):e.localeData().invalidDate()}function pi(e,t){var r=5;function n(a){return t.longDateFormat(a)||a}for(Et.lastIndex=0;r>=0&&Et.test(e);)e=e.replace(Et,n),Et.lastIndex=0,r-=1;return e}var y1={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function v1(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(Qr).map(function(n){return n==="MMMM"||n==="MM"||n==="DD"||n==="dddd"?n.slice(1):n}).join(""),this._longDateFormat[e])}var x1="Invalid date";function w1(){return this._invalidDate}var _1="%d",b1=/\d{1,2}/;function S1(e){return this._ordinal.replace("%d",e)}var M1={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function C1(e,t,r,n){var a=this._relativeTime[r];return he(a)?a(e,t,r,n):a.replace(/%d/i,e)}function T1(e,t){var r=this._relativeTime[e>0?"future":"past"];return he(r)?r(t):r.replace(/%s/i,t)}var wa={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function re(e){return typeof e=="string"?wa[e]||wa[e.toLowerCase()]:void 0}function en(e){var t={},r,n;for(n in e)O(e,n)&&(r=re(n),r&&(t[r]=e[n]));return t}var k1={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function D1(e){var t=[],r;for(r in e)O(e,r)&&t.push({unit:r,priority:k1[r]});return t.sort(function(n,a){return n.priority-a.priority}),t}var gi=/\d/,X=/\d\d/,yi=/\d{3}/,tn=/\d{4}/,Jt=/[+-]?\d{6}/,W=/\d\d?/,vi=/\d\d\d\d?/,xi=/\d\d\d\d\d\d?/,Xt=/\d{1,3}/,rn=/\d{1,4}/,Qt=/[+-]?\d{1,6}/,tt=/\d+/,er=/[+-]?\d+/,O1=/Z|[+-]\d\d:?\d\d/gi,tr=/Z|[+-]\d\d(?::?\d\d)?/gi,j1=/[+-]?\d+(\.\d{1,3})?/,Mt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,rt=/^[1-9]\d?/,nn=/^([1-9]\d|\d)/,$t;$t={};function p(e,t,r){$t[e]=he(t)?t:function(n,a){return n&&r?r:t}}function E1(e,t){return O($t,e)?$t[e](t._strict,t._locale):new RegExp(F1(e))}function F1(e){return xe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,n,a,i){return r||n||a||i}))}function xe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ee(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function T(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=ee(t)),r}var Yr={};function Y(e,t){var r,n=t,a;for(typeof e=="string"&&(e=[e]),_e(t)&&(n=function(i,s){s[t]=T(i)}),a=e.length,r=0;r<a;r++)Yr[e[r]]=n}function Ct(e,t){Y(e,function(r,n,a,i){a._w=a._w||{},t(r,a._w,a,i)})}function P1(e,t,r){t!=null&&O(Yr,e)&&Yr[e](t,r._a,r,e)}function rr(e){return e%4===0&&e%100!==0||e%400===0}var B=0,ye=1,ue=2,G=3,ie=4,ve=5,Ae=6,Y1=7,A1=8;w("Y",0,0,function(){var e=this.year();return e<=9999?ce(e,4):"+"+e});w(0,["YY",2],0,function(){return this.year()%100});w(0,["YYYY",4],0,"year");w(0,["YYYYY",5],0,"year");w(0,["YYYYYY",6,!0],0,"year");p("Y",er);p("YY",W,X);p("YYYY",rn,tn);p("YYYYY",Qt,Jt);p("YYYYYY",Qt,Jt);Y(["YYYYY","YYYYYY"],B);Y("YYYY",function(e,t){t[B]=e.length===2?m.parseTwoDigitYear(e):T(e)});Y("YY",function(e,t){t[B]=m.parseTwoDigitYear(e)});Y("Y",function(e,t){t[B]=parseInt(e,10)});function ft(e){return rr(e)?366:365}m.parseTwoDigitYear=function(e){return T(e)+(T(e)>68?1900:2e3)};var wi=nt("FullYear",!0);function N1(){return rr(this.year())}function nt(e,t){return function(r){return r!=null?(_i(this,e,r),m.updateOffset(this,t),this):gt(this,e)}}function gt(e,t){if(!e.isValid())return NaN;var r=e._d,n=e._isUTC;switch(t){case"Milliseconds":return n?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return n?r.getUTCSeconds():r.getSeconds();case"Minutes":return n?r.getUTCMinutes():r.getMinutes();case"Hours":return n?r.getUTCHours():r.getHours();case"Date":return n?r.getUTCDate():r.getDate();case"Day":return n?r.getUTCDay():r.getDay();case"Month":return n?r.getUTCMonth():r.getMonth();case"FullYear":return n?r.getUTCFullYear():r.getFullYear();default:return NaN}}function _i(e,t,r){var n,a,i,s,u;if(!(!e.isValid()||isNaN(r))){switch(n=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?n.setUTCMilliseconds(r):n.setMilliseconds(r));case"Seconds":return void(a?n.setUTCSeconds(r):n.setSeconds(r));case"Minutes":return void(a?n.setUTCMinutes(r):n.setMinutes(r));case"Hours":return void(a?n.setUTCHours(r):n.setHours(r));case"Date":return void(a?n.setUTCDate(r):n.setDate(r));case"FullYear":break;default:return}i=r,s=e.month(),u=e.date(),u=u===29&&s===1&&!rr(i)?28:u,a?n.setUTCFullYear(i,s,u):n.setFullYear(i,s,u)}}function R1(e){return e=re(e),he(this[e])?this[e]():this}function $1(e,t){if(typeof e=="object"){e=en(e);var r=D1(e),n,a=r.length;for(n=0;n<a;n++)this[r[n].unit](e[r[n].unit])}else if(e=re(e),he(this[e]))return this[e](t);return this}function W1(e,t){return(e%t+t)%t}var L;Array.prototype.indexOf?L=Array.prototype.indexOf:L=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function an(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=W1(t,12);return e+=(t-r)/12,r===1?rr(e)?29:28:31-r%7%2}w("M",["MM",2],"Mo",function(){return this.month()+1});w("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});w("MMMM",0,0,function(e){return this.localeData().months(this,e)});p("M",W,rt);p("MM",W,X);p("MMM",function(e,t){return t.monthsShortRegex(e)});p("MMMM",function(e,t){return t.monthsRegex(e)});Y(["M","MM"],function(e,t){t[ye]=T(e)-1});Y(["MMM","MMMM"],function(e,t,r,n){var a=r._locale.monthsParse(e,n,r._strict);a!=null?t[ye]=a:S(r).invalidMonth=e});var I1="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),bi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Si=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,L1=Mt,U1=Mt;function G1(e,t){return e?se(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Si).test(t)?"format":"standalone"][e.month()]:se(this._months)?this._months:this._months.standalone}function V1(e,t){return e?se(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Si.test(t)?"format":"standalone"][e.month()]:se(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function H1(e,t,r){var n,a,i,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)i=fe([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(i,"").toLocaleLowerCase();return r?t==="MMM"?(a=L.call(this._shortMonthsParse,s),a!==-1?a:null):(a=L.call(this._longMonthsParse,s),a!==-1?a:null):t==="MMM"?(a=L.call(this._shortMonthsParse,s),a!==-1?a:(a=L.call(this._longMonthsParse,s),a!==-1?a:null)):(a=L.call(this._longMonthsParse,s),a!==-1?a:(a=L.call(this._shortMonthsParse,s),a!==-1?a:null))}function z1(e,t,r){var n,a,i;if(this._monthsParseExact)return H1.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(a=fe([2e3,n]),r&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[n]&&(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[n].test(e))return n;if(r&&t==="MMM"&&this._shortMonthsParse[n].test(e))return n;if(!r&&this._monthsParse[n].test(e))return n}}function Mi(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=T(t);else if(t=e.localeData().monthsParse(t),!_e(t))return e}var r=t,n=e.date();return n=n<29?n:Math.min(n,an(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,n):e._d.setMonth(r,n),e}function Ci(e){return e!=null?(Mi(this,e),m.updateOffset(this,!0),this):gt(this,"Month")}function B1(){return an(this.year(),this.month())}function Z1(e){return this._monthsParseExact?(O(this,"_monthsRegex")||Ti.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(O(this,"_monthsShortRegex")||(this._monthsShortRegex=L1),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function q1(e){return this._monthsParseExact?(O(this,"_monthsRegex")||Ti.call(this),e?this._monthsStrictRegex:this._monthsRegex):(O(this,"_monthsRegex")||(this._monthsRegex=U1),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Ti(){function e(d,h){return h.length-d.length}var t=[],r=[],n=[],a,i,s,u;for(a=0;a<12;a++)i=fe([2e3,a]),s=xe(this.monthsShort(i,"")),u=xe(this.months(i,"")),t.push(s),r.push(u),n.push(u),n.push(s);t.sort(e),r.sort(e),n.sort(e),this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function K1(e,t,r,n,a,i,s){var u;return e<100&&e>=0?(u=new Date(e+400,t,r,n,a,i,s),isFinite(u.getFullYear())&&u.setFullYear(e)):u=new Date(e,t,r,n,a,i,s),u}function yt(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Wt(e,t,r){var n=7+t-r,a=(7+yt(e,0,n).getUTCDay()-t)%7;return-a+n-1}function ki(e,t,r,n,a){var i=(7+r-n)%7,s=Wt(e,n,a),u=1+7*(t-1)+i+s,d,h;return u<=0?(d=e-1,h=ft(d)+u):u>ft(e)?(d=e+1,h=u-ft(e)):(d=e,h=u),{year:d,dayOfYear:h}}function vt(e,t,r){var n=Wt(e.year(),t,r),a=Math.floor((e.dayOfYear()-n-1)/7)+1,i,s;return a<1?(s=e.year()-1,i=a+we(s,t,r)):a>we(e.year(),t,r)?(i=a-we(e.year(),t,r),s=e.year()+1):(s=e.year(),i=a),{week:i,year:s}}function we(e,t,r){var n=Wt(e,t,r),a=Wt(e+1,t,r);return(ft(e)-n+a)/7}w("w",["ww",2],"wo","week");w("W",["WW",2],"Wo","isoWeek");p("w",W,rt);p("ww",W,X);p("W",W,rt);p("WW",W,X);Ct(["w","ww","W","WW"],function(e,t,r,n){t[n.substr(0,1)]=T(e)});function J1(e){return vt(e,this._week.dow,this._week.doy).week}var X1={dow:0,doy:6};function Q1(){return this._week.dow}function eh(){return this._week.doy}function th(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function rh(e){var t=vt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}w("d",0,"do","day");w("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});w("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});w("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});w("e",0,0,"weekday");w("E",0,0,"isoWeekday");p("d",W);p("e",W);p("E",W);p("dd",function(e,t){return t.weekdaysMinRegex(e)});p("ddd",function(e,t){return t.weekdaysShortRegex(e)});p("dddd",function(e,t){return t.weekdaysRegex(e)});Ct(["dd","ddd","dddd"],function(e,t,r,n){var a=r._locale.weekdaysParse(e,n,r._strict);a!=null?t.d=a:S(r).invalidWeekday=e});Ct(["d","e","E"],function(e,t,r,n){t[n]=T(e)});function nh(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ah(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function sn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var ih="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Di="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),sh="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),oh=Mt,lh=Mt,uh=Mt;function ch(e,t){var r=se(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?sn(r,this._week.dow):e?r[e.day()]:r}function dh(e){return e===!0?sn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function fh(e){return e===!0?sn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function hh(e,t,r){var n,a,i,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)i=fe([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(i,"").toLocaleLowerCase();return r?t==="dddd"?(a=L.call(this._weekdaysParse,s),a!==-1?a:null):t==="ddd"?(a=L.call(this._shortWeekdaysParse,s),a!==-1?a:null):(a=L.call(this._minWeekdaysParse,s),a!==-1?a:null):t==="dddd"?(a=L.call(this._weekdaysParse,s),a!==-1||(a=L.call(this._shortWeekdaysParse,s),a!==-1)?a:(a=L.call(this._minWeekdaysParse,s),a!==-1?a:null)):t==="ddd"?(a=L.call(this._shortWeekdaysParse,s),a!==-1||(a=L.call(this._weekdaysParse,s),a!==-1)?a:(a=L.call(this._minWeekdaysParse,s),a!==-1?a:null)):(a=L.call(this._minWeekdaysParse,s),a!==-1||(a=L.call(this._weekdaysParse,s),a!==-1)?a:(a=L.call(this._shortWeekdaysParse,s),a!==-1?a:null))}function mh(e,t,r){var n,a,i;if(this._weekdaysParseExact)return hh.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(a=fe([2e3,1]).day(n),r&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(i="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[n]=new RegExp(i.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[n].test(e))return n;if(r&&t==="ddd"&&this._shortWeekdaysParse[n].test(e))return n;if(r&&t==="dd"&&this._minWeekdaysParse[n].test(e))return n;if(!r&&this._weekdaysParse[n].test(e))return n}}function ph(e){if(!this.isValid())return e!=null?this:NaN;var t=gt(this,"Day");return e!=null?(e=nh(e,this.localeData()),this.add(e-t,"d")):t}function gh(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function yh(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=ah(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function vh(e){return this._weekdaysParseExact?(O(this,"_weekdaysRegex")||on.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(O(this,"_weekdaysRegex")||(this._weekdaysRegex=oh),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function xh(e){return this._weekdaysParseExact?(O(this,"_weekdaysRegex")||on.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(O(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=lh),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function wh(e){return this._weekdaysParseExact?(O(this,"_weekdaysRegex")||on.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(O(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=uh),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function on(){function e(k,F){return F.length-k.length}var t=[],r=[],n=[],a=[],i,s,u,d,h;for(i=0;i<7;i++)s=fe([2e3,1]).day(i),u=xe(this.weekdaysMin(s,"")),d=xe(this.weekdaysShort(s,"")),h=xe(this.weekdays(s,"")),t.push(u),r.push(d),n.push(h),a.push(u),a.push(d),a.push(h);t.sort(e),r.sort(e),n.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ln(){return this.hours()%12||12}function _h(){return this.hours()||24}w("H",["HH",2],0,"hour");w("h",["hh",2],0,ln);w("k",["kk",2],0,_h);w("hmm",0,0,function(){return""+ln.apply(this)+ce(this.minutes(),2)});w("hmmss",0,0,function(){return""+ln.apply(this)+ce(this.minutes(),2)+ce(this.seconds(),2)});w("Hmm",0,0,function(){return""+this.hours()+ce(this.minutes(),2)});w("Hmmss",0,0,function(){return""+this.hours()+ce(this.minutes(),2)+ce(this.seconds(),2)});function Oi(e,t){w(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Oi("a",!0);Oi("A",!1);function ji(e,t){return t._meridiemParse}p("a",ji);p("A",ji);p("H",W,nn);p("h",W,rt);p("k",W,rt);p("HH",W,X);p("hh",W,X);p("kk",W,X);p("hmm",vi);p("hmmss",xi);p("Hmm",vi);p("Hmmss",xi);Y(["H","HH"],G);Y(["k","kk"],function(e,t,r){var n=T(e);t[G]=n===24?0:n});Y(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});Y(["h","hh"],function(e,t,r){t[G]=T(e),S(r).bigHour=!0});Y("hmm",function(e,t,r){var n=e.length-2;t[G]=T(e.substr(0,n)),t[ie]=T(e.substr(n)),S(r).bigHour=!0});Y("hmmss",function(e,t,r){var n=e.length-4,a=e.length-2;t[G]=T(e.substr(0,n)),t[ie]=T(e.substr(n,2)),t[ve]=T(e.substr(a)),S(r).bigHour=!0});Y("Hmm",function(e,t,r){var n=e.length-2;t[G]=T(e.substr(0,n)),t[ie]=T(e.substr(n))});Y("Hmmss",function(e,t,r){var n=e.length-4,a=e.length-2;t[G]=T(e.substr(0,n)),t[ie]=T(e.substr(n,2)),t[ve]=T(e.substr(a))});function bh(e){return(e+"").toLowerCase().charAt(0)==="p"}var Sh=/[ap]\.?m?\.?/i,Mh=nt("Hours",!0);function Ch(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var Ei={calendar:h1,longDateFormat:y1,invalidDate:x1,ordinal:_1,dayOfMonthOrdinalParse:b1,relativeTime:M1,months:I1,monthsShort:bi,week:X1,weekdays:ih,weekdaysMin:sh,weekdaysShort:Di,meridiemParse:Sh},I={},ut={},xt;function Th(e,t){var r,n=Math.min(e.length,t.length);for(r=0;r<n;r+=1)if(e[r]!==t[r])return r;return n}function _a(e){return e&&e.toLowerCase().replace("_","-")}function kh(e){for(var t=0,r,n,a,i;t<e.length;){for(i=_a(e[t]).split("-"),r=i.length,n=_a(e[t+1]),n=n?n.split("-"):null;r>0;){if(a=nr(i.slice(0,r).join("-")),a)return a;if(n&&n.length>=r&&Th(i,n)>=r-1)break;r--}t++}return xt}function Dh(e){return!!(e&&e.match("^[^/\\\\]*$"))}function nr(e){var t=null,r;if(I[e]===void 0&&typeof module<"u"&&module&&module.exports&&Dh(e))try{t=xt._abbr,r=require,r("./locale/"+e),De(t)}catch{I[e]=null}return I[e]}function De(e,t){var r;return e&&(K(t)?r=Se(e):r=un(e,t),r?xt=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),xt._abbr}function un(e,t){if(t!==null){var r,n=Ei;if(t.abbr=e,I[e]!=null)mi("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=I[e]._config;else if(t.parentLocale!=null)if(I[t.parentLocale]!=null)n=I[t.parentLocale]._config;else if(r=nr(t.parentLocale),r!=null)n=r._config;else return ut[t.parentLocale]||(ut[t.parentLocale]=[]),ut[t.parentLocale].push({name:e,config:t}),null;return I[e]=new Xr(Fr(n,t)),ut[e]&&ut[e].forEach(function(a){un(a.name,a.config)}),De(e),I[e]}else return delete I[e],null}function Oh(e,t){if(t!=null){var r,n,a=Ei;I[e]!=null&&I[e].parentLocale!=null?I[e].set(Fr(I[e]._config,t)):(n=nr(e),n!=null&&(a=n._config),t=Fr(a,t),n==null&&(t.abbr=e),r=new Xr(t),r.parentLocale=I[e],I[e]=r),De(e)}else I[e]!=null&&(I[e].parentLocale!=null?(I[e]=I[e].parentLocale,e===De()&&De(e)):I[e]!=null&&delete I[e]);return I[e]}function Se(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return xt;if(!se(e)){if(t=nr(e),t)return t;e=[e]}return kh(e)}function jh(){return Pr(I)}function cn(e){var t,r=e._a;return r&&S(e).overflow===-2&&(t=r[ye]<0||r[ye]>11?ye:r[ue]<1||r[ue]>an(r[B],r[ye])?ue:r[G]<0||r[G]>24||r[G]===24&&(r[ie]!==0||r[ve]!==0||r[Ae]!==0)?G:r[ie]<0||r[ie]>59?ie:r[ve]<0||r[ve]>59?ve:r[Ae]<0||r[Ae]>999?Ae:-1,S(e)._overflowDayOfYear&&(t<B||t>ue)&&(t=ue),S(e)._overflowWeeks&&t===-1&&(t=Y1),S(e)._overflowWeekday&&t===-1&&(t=A1),S(e).overflow=t),e}var Eh=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fh=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ph=/Z|[+-]\d\d(?::?\d\d)?/,Ft=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],br=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Yh=/^\/?Date\((-?\d+)/i,Ah=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Nh={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Fi(e){var t,r,n=e._i,a=Eh.exec(n)||Fh.exec(n),i,s,u,d,h=Ft.length,k=br.length;if(a){for(S(e).iso=!0,t=0,r=h;t<r;t++)if(Ft[t][1].exec(a[1])){s=Ft[t][0],i=Ft[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(a[3]){for(t=0,r=k;t<r;t++)if(br[t][1].exec(a[3])){u=(a[2]||" ")+br[t][0];break}if(u==null){e._isValid=!1;return}}if(!i&&u!=null){e._isValid=!1;return}if(a[4])if(Ph.exec(a[4]))d="Z";else{e._isValid=!1;return}e._f=s+(u||"")+(d||""),fn(e)}else e._isValid=!1}function Rh(e,t,r,n,a,i){var s=[$h(e),bi.indexOf(t),parseInt(r,10),parseInt(n,10),parseInt(a,10)];return i&&s.push(parseInt(i,10)),s}function $h(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Wh(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ih(e,t,r){if(e){var n=Di.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(n!==a)return S(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Lh(e,t,r){if(e)return Nh[e];if(t)return 0;var n=parseInt(r,10),a=n%100,i=(n-a)/100;return i*60+a}function Pi(e){var t=Ah.exec(Wh(e._i)),r;if(t){if(r=Rh(t[4],t[3],t[2],t[5],t[6],t[7]),!Ih(t[1],r,e))return;e._a=r,e._tzm=Lh(t[8],t[9],t[10]),e._d=yt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),S(e).rfc2822=!0}else e._isValid=!1}function Uh(e){var t=Yh.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Fi(e),e._isValid===!1)delete e._isValid;else return;if(Pi(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=te("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ze(e,t,r){return e??t??r}function Gh(e){var t=new Date(m.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function dn(e){var t,r,n=[],a,i,s;if(!e._d){for(a=Gh(e),e._w&&e._a[ue]==null&&e._a[ye]==null&&Vh(e),e._dayOfYear!=null&&(s=Ze(e._a[B],a[B]),(e._dayOfYear>ft(s)||e._dayOfYear===0)&&(S(e)._overflowDayOfYear=!0),r=yt(s,0,e._dayOfYear),e._a[ye]=r.getUTCMonth(),e._a[ue]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=n[t]=a[t];for(;t<7;t++)e._a[t]=n[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[G]===24&&e._a[ie]===0&&e._a[ve]===0&&e._a[Ae]===0&&(e._nextDay=!0,e._a[G]=0),e._d=(e._useUTC?yt:K1).apply(null,n),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[G]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(S(e).weekdayMismatch=!0)}}function Vh(e){var t,r,n,a,i,s,u,d,h;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(i=1,s=4,r=Ze(t.GG,e._a[B],vt($(),1,4).year),n=Ze(t.W,1),a=Ze(t.E,1),(a<1||a>7)&&(d=!0)):(i=e._locale._week.dow,s=e._locale._week.doy,h=vt($(),i,s),r=Ze(t.gg,e._a[B],h.year),n=Ze(t.w,h.week),t.d!=null?(a=t.d,(a<0||a>6)&&(d=!0)):t.e!=null?(a=t.e+i,(t.e<0||t.e>6)&&(d=!0)):a=i),n<1||n>we(r,i,s)?S(e)._overflowWeeks=!0:d!=null?S(e)._overflowWeekday=!0:(u=ki(r,n,a,i,s),e._a[B]=u.year,e._dayOfYear=u.dayOfYear)}m.ISO_8601=function(){};m.RFC_2822=function(){};function fn(e){if(e._f===m.ISO_8601){Fi(e);return}if(e._f===m.RFC_2822){Pi(e);return}e._a=[],S(e).empty=!0;var t=""+e._i,r,n,a,i,s,u=t.length,d=0,h,k;for(a=pi(e._f,e._locale).match(Qr)||[],k=a.length,r=0;r<k;r++)i=a[r],n=(t.match(E1(i,e))||[])[0],n&&(s=t.substr(0,t.indexOf(n)),s.length>0&&S(e).unusedInput.push(s),t=t.slice(t.indexOf(n)+n.length),d+=n.length),Ke[i]?(n?S(e).empty=!1:S(e).unusedTokens.push(i),P1(i,n,e)):e._strict&&!n&&S(e).unusedTokens.push(i);S(e).charsLeftOver=u-d,t.length>0&&S(e).unusedInput.push(t),e._a[G]<=12&&S(e).bigHour===!0&&e._a[G]>0&&(S(e).bigHour=void 0),S(e).parsedDateParts=e._a.slice(0),S(e).meridiem=e._meridiem,e._a[G]=Hh(e._locale,e._a[G],e._meridiem),h=S(e).era,h!==null&&(e._a[B]=e._locale.erasConvertYear(h,e._a[B])),dn(e),cn(e)}function Hh(e,t,r){var n;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(n=e.isPM(r),n&&t<12&&(t+=12),!n&&t===12&&(t=0)),t)}function zh(e){var t,r,n,a,i,s,u=!1,d=e._f.length;if(d===0){S(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<d;a++)i=0,s=!1,t=Jr({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],fn(t),Kr(t)&&(s=!0),i+=S(t).charsLeftOver,i+=S(t).unusedTokens.length*10,S(t).score=i,u?i<n&&(n=i,r=t):(n==null||i<n||s)&&(n=i,r=t,s&&(u=!0));Te(e,r||t)}function Bh(e){if(!e._d){var t=en(e._i),r=t.day===void 0?t.date:t.day;e._a=fi([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(n){return n&&parseInt(n,10)}),dn(e)}}function Zh(e){var t=new St(cn(Yi(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Yi(e){var t=e._i,r=e._f;return e._locale=e._locale||Se(e._l),t===null||r===void 0&&t===""?Kt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),oe(t)?new St(cn(t)):(bt(t)?e._d=t:se(r)?zh(e):r?fn(e):qh(e),Kr(e)||(e._d=null),e))}function qh(e){var t=e._i;K(t)?e._d=new Date(m.now()):bt(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Uh(e):se(t)?(e._a=fi(t.slice(0),function(r){return parseInt(r,10)}),dn(e)):$e(t)?Bh(e):_e(t)?e._d=new Date(t):m.createFromInputFallback(e)}function Ai(e,t,r,n,a){var i={};return(t===!0||t===!1)&&(n=t,t=void 0),(r===!0||r===!1)&&(n=r,r=void 0),($e(e)&&qr(e)||se(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=a,i._l=r,i._i=e,i._f=t,i._strict=n,Zh(i)}function $(e,t,r,n){return Ai(e,t,r,n,!1)}var Kh=te("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=$.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Kt()}),Jh=te("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=$.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Kt()});function Ni(e,t){var r,n;if(t.length===1&&se(t[0])&&(t=t[0]),!t.length)return $();for(r=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](r))&&(r=t[n]);return r}function Xh(){var e=[].slice.call(arguments,0);return Ni("isBefore",e)}function Qh(){var e=[].slice.call(arguments,0);return Ni("isAfter",e)}var e0=function(){return Date.now?Date.now():+new Date},ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function t0(e){var t,r=!1,n,a=ct.length;for(t in e)if(O(e,t)&&!(L.call(ct,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(n=0;n<a;++n)if(e[ct[n]]){if(r)return!1;parseFloat(e[ct[n]])!==T(e[ct[n]])&&(r=!0)}return!0}function r0(){return this._isValid}function n0(){return le(NaN)}function ar(e){var t=en(e),r=t.year||0,n=t.quarter||0,a=t.month||0,i=t.week||t.isoWeek||0,s=t.day||0,u=t.hour||0,d=t.minute||0,h=t.second||0,k=t.millisecond||0;this._isValid=t0(t),this._milliseconds=+k+h*1e3+d*6e4+u*1e3*60*60,this._days=+s+i*7,this._months=+a+n*3+r*12,this._data={},this._locale=Se(),this._bubble()}function At(e){return e instanceof ar}function Ar(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function a0(e,t,r){var n=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)(r&&e[s]!==t[s]||!r&&T(e[s])!==T(t[s]))&&i++;return i+a}function Ri(e,t){w(e,0,0,function(){var r=this.utcOffset(),n="+";return r<0&&(r=-r,n="-"),n+ce(~~(r/60),2)+t+ce(~~r%60,2)})}Ri("Z",":");Ri("ZZ","");p("Z",tr);p("ZZ",tr);Y(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=hn(tr,e)});var i0=/([\+\-]|\d\d)/gi;function hn(e,t){var r=(t||"").match(e),n,a,i;return r===null?null:(n=r[r.length-1]||[],a=(n+"").match(i0)||["-",0,0],i=+(a[1]*60)+T(a[2]),i===0?0:a[0]==="+"?i:-i)}function mn(e,t){var r,n;return t._isUTC?(r=t.clone(),n=(oe(e)||bt(e)?e.valueOf():$(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+n),m.updateOffset(r,!1),r):$(e).local()}function Nr(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function s0(e,t,r){var n=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=hn(tr,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(a=Nr(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),n!==e&&(!t||this._changeInProgress?Ii(this,le(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?n:Nr(this)}function o0(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function l0(e){return this.utcOffset(0,e)}function u0(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Nr(this),"m")),this}function c0(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=hn(O1,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function d0(e){return this.isValid()?(e=e?$(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function f0(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function h0(){if(!K(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Jr(e,this),e=Yi(e),e._a?(t=e._isUTC?fe(e._a):$(e._a),this._isDSTShifted=this.isValid()&&a0(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function m0(){return this.isValid()?!this._isUTC:!1}function p0(){return this.isValid()?this._isUTC:!1}function $i(){return this.isValid()?this._isUTC&&this._offset===0:!1}var g0=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,y0=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function le(e,t){var r=e,n=null,a,i,s;return At(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:_e(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(n=g0.exec(e))?(a=n[1]==="-"?-1:1,r={y:0,d:T(n[ue])*a,h:T(n[G])*a,m:T(n[ie])*a,s:T(n[ve])*a,ms:T(Ar(n[Ae]*1e3))*a}):(n=y0.exec(e))?(a=n[1]==="-"?-1:1,r={y:Fe(n[2],a),M:Fe(n[3],a),w:Fe(n[4],a),d:Fe(n[5],a),h:Fe(n[6],a),m:Fe(n[7],a),s:Fe(n[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(s=v0($(r.from),$(r.to)),r={},r.ms=s.milliseconds,r.M=s.months),i=new ar(r),At(e)&&O(e,"_locale")&&(i._locale=e._locale),At(e)&&O(e,"_isValid")&&(i._isValid=e._isValid),i}le.fn=ar.prototype;le.invalid=n0;function Fe(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function ba(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function v0(e,t){var r;return e.isValid()&&t.isValid()?(t=mn(t,e),e.isBefore(t)?r=ba(e,t):(r=ba(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Wi(e,t){return function(r,n){var a,i;return n!==null&&!isNaN(+n)&&(mi(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=r,r=n,n=i),a=le(r,n),Ii(this,a,e),this}}function Ii(e,t,r,n){var a=t._milliseconds,i=Ar(t._days),s=Ar(t._months);e.isValid()&&(n=n??!0,s&&Mi(e,gt(e,"Month")+s*r),i&&_i(e,"Date",gt(e,"Date")+i*r),a&&e._d.setTime(e._d.valueOf()+a*r),n&&m.updateOffset(e,i||s))}var x0=Wi(1,"add"),w0=Wi(-1,"subtract");function Li(e){return typeof e=="string"||e instanceof String}function _0(e){return oe(e)||bt(e)||Li(e)||_e(e)||S0(e)||b0(e)||e===null||e===void 0}function b0(e){var t=$e(e)&&!qr(e),r=!1,n=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,i,s=n.length;for(a=0;a<s;a+=1)i=n[a],r=r||O(e,i);return t&&r}function S0(e){var t=se(e),r=!1;return t&&(r=e.filter(function(n){return!_e(n)&&Li(e)}).length===0),t&&r}function M0(e){var t=$e(e)&&!qr(e),r=!1,n=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,i;for(a=0;a<n.length;a+=1)i=n[a],r=r||O(e,i);return t&&r}function C0(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function T0(e,t){arguments.length===1&&(arguments[0]?_0(arguments[0])?(e=arguments[0],t=void 0):M0(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||$(),n=mn(r,this).startOf("day"),a=m.calendarFormat(this,n)||"sameElse",i=t&&(he(t[a])?t[a].call(this,r):t[a]);return this.format(i||this.localeData().calendar(a,this,$(r)))}function k0(){return new St(this)}function D0(e,t){var r=oe(e)?e:$(e);return this.isValid()&&r.isValid()?(t=re(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function O0(e,t){var r=oe(e)?e:$(e);return this.isValid()&&r.isValid()?(t=re(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function j0(e,t,r,n){var a=oe(e)?e:$(e),i=oe(t)?t:$(t);return this.isValid()&&a.isValid()&&i.isValid()?(n=n||"()",(n[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(n[1]===")"?this.isBefore(i,r):!this.isAfter(i,r))):!1}function E0(e,t){var r=oe(e)?e:$(e),n;return this.isValid()&&r.isValid()?(t=re(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function F0(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function P0(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Y0(e,t,r){var n,a,i;if(!this.isValid())return NaN;if(n=mn(e,this),!n.isValid())return NaN;switch(a=(n.utcOffset()-this.utcOffset())*6e4,t=re(t),t){case"year":i=Nt(this,n)/12;break;case"month":i=Nt(this,n);break;case"quarter":i=Nt(this,n)/3;break;case"second":i=(this-n)/1e3;break;case"minute":i=(this-n)/6e4;break;case"hour":i=(this-n)/36e5;break;case"day":i=(this-n-a)/864e5;break;case"week":i=(this-n-a)/6048e5;break;default:i=this-n}return r?i:ee(i)}function Nt(e,t){if(e.date()<t.date())return-Nt(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),n=e.clone().add(r,"months"),a,i;return t-n<0?(a=e.clone().add(r-1,"months"),i=(t-n)/(n-a)):(a=e.clone().add(r+1,"months"),i=(t-n)/(a-n)),-(r+i)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function A0(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function N0(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?Yt(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):he(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Yt(r,"Z")):Yt(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function R0(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,n,a,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",i=t+'[")]',this.format(r+n+a+i)}function $0(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var t=Yt(this,e);return this.localeData().postformat(t)}function W0(e,t){return this.isValid()&&(oe(e)&&e.isValid()||$(e).isValid())?le({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function I0(e){return this.from($(),e)}function L0(e,t){return this.isValid()&&(oe(e)&&e.isValid()||$(e).isValid())?le({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function U0(e){return this.to($(),e)}function Ui(e){var t;return e===void 0?this._locale._abbr:(t=Se(e),t!=null&&(this._locale=t),this)}var Gi=te("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Vi(){return this._locale}var It=1e3,Je=60*It,Lt=60*Je,Hi=(365*400+97)*24*Lt;function Xe(e,t){return(e%t+t)%t}function zi(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Hi:new Date(e,t,r).valueOf()}function Bi(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Hi:Date.UTC(e,t,r)}function G0(e){var t,r;if(e=re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Bi:zi,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Xe(t+(this._isUTC?0:this.utcOffset()*Je),Lt);break;case"minute":t=this._d.valueOf(),t-=Xe(t,Je);break;case"second":t=this._d.valueOf(),t-=Xe(t,It);break}return this._d.setTime(t),m.updateOffset(this,!0),this}function V0(e){var t,r;if(e=re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?Bi:zi,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Lt-Xe(t+(this._isUTC?0:this.utcOffset()*Je),Lt)-1;break;case"minute":t=this._d.valueOf(),t+=Je-Xe(t,Je)-1;break;case"second":t=this._d.valueOf(),t+=It-Xe(t,It)-1;break}return this._d.setTime(t),m.updateOffset(this,!0),this}function H0(){return this._d.valueOf()-(this._offset||0)*6e4}function z0(){return Math.floor(this.valueOf()/1e3)}function B0(){return new Date(this.valueOf())}function Z0(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function q0(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function K0(){return this.isValid()?this.toISOString():null}function J0(){return Kr(this)}function X0(){return Te({},S(this))}function Q0(){return S(this).overflow}function e2(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}w("N",0,0,"eraAbbr");w("NN",0,0,"eraAbbr");w("NNN",0,0,"eraAbbr");w("NNNN",0,0,"eraName");w("NNNNN",0,0,"eraNarrow");w("y",["y",1],"yo","eraYear");w("y",["yy",2],0,"eraYear");w("y",["yyy",3],0,"eraYear");w("y",["yyyy",4],0,"eraYear");p("N",pn);p("NN",pn);p("NNN",pn);p("NNNN",d2);p("NNNNN",f2);Y(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,n){var a=r._locale.erasParse(e,n,r._strict);a?S(r).era=a:S(r).invalidEra=e});p("y",tt);p("yy",tt);p("yyy",tt);p("yyyy",tt);p("yo",h2);Y(["y","yy","yyy","yyyy"],B);Y(["yo"],function(e,t,r,n){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[B]=r._locale.eraYearOrdinalParse(e,a):t[B]=parseInt(e,10)});function t2(e,t){var r,n,a,i=this._eras||Se("en")._eras;for(r=0,n=i.length;r<n;++r){switch(typeof i[r].since){case"string":a=m(i[r].since).startOf("day"),i[r].since=a.valueOf();break}switch(typeof i[r].until){case"undefined":i[r].until=1/0;break;case"string":a=m(i[r].until).startOf("day").valueOf(),i[r].until=a.valueOf();break}}return i}function r2(e,t,r){var n,a,i=this.eras(),s,u,d;for(e=e.toUpperCase(),n=0,a=i.length;n<a;++n)if(s=i[n].name.toUpperCase(),u=i[n].abbr.toUpperCase(),d=i[n].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(u===e)return i[n];break;case"NNNN":if(s===e)return i[n];break;case"NNNNN":if(d===e)return i[n];break}else if([s,u,d].indexOf(e)>=0)return i[n]}function n2(e,t){var r=e.since<=e.until?1:-1;return t===void 0?m(e.since).year():m(e.since).year()+(t-e.offset)*r}function a2(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].name;return""}function i2(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].narrow;return""}function s2(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].abbr;return""}function o2(){var e,t,r,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=a[e].since<=a[e].until?1:-1,n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return(this.year()-m(a[e].since).year())*r+a[e].offset;return this.year()}function l2(e){return O(this,"_erasNameRegex")||gn.call(this),e?this._erasNameRegex:this._erasRegex}function u2(e){return O(this,"_erasAbbrRegex")||gn.call(this),e?this._erasAbbrRegex:this._erasRegex}function c2(e){return O(this,"_erasNarrowRegex")||gn.call(this),e?this._erasNarrowRegex:this._erasRegex}function pn(e,t){return t.erasAbbrRegex(e)}function d2(e,t){return t.erasNameRegex(e)}function f2(e,t){return t.erasNarrowRegex(e)}function h2(e,t){return t._eraYearOrdinalRegex||tt}function gn(){var e=[],t=[],r=[],n=[],a,i,s,u,d,h=this.eras();for(a=0,i=h.length;a<i;++a)s=xe(h[a].name),u=xe(h[a].abbr),d=xe(h[a].narrow),t.push(s),e.push(u),r.push(d),n.push(s),n.push(u),n.push(d);this._erasRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}w(0,["gg",2],0,function(){return this.weekYear()%100});w(0,["GG",2],0,function(){return this.isoWeekYear()%100});function ir(e,t){w(0,[e,e.length],0,t)}ir("gggg","weekYear");ir("ggggg","weekYear");ir("GGGG","isoWeekYear");ir("GGGGG","isoWeekYear");p("G",er);p("g",er);p("GG",W,X);p("gg",W,X);p("GGGG",rn,tn);p("gggg",rn,tn);p("GGGGG",Qt,Jt);p("ggggg",Qt,Jt);Ct(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,n){t[n.substr(0,2)]=T(e)});Ct(["gg","GG"],function(e,t,r,n){t[n]=m.parseTwoDigitYear(e)});function m2(e){return Zi.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function p2(e){return Zi.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function g2(){return we(this.year(),1,4)}function y2(){return we(this.isoWeekYear(),1,4)}function v2(){var e=this.localeData()._week;return we(this.year(),e.dow,e.doy)}function x2(){var e=this.localeData()._week;return we(this.weekYear(),e.dow,e.doy)}function Zi(e,t,r,n,a){var i;return e==null?vt(this,n,a).year:(i=we(e,n,a),t>i&&(t=i),w2.call(this,e,t,r,n,a))}function w2(e,t,r,n,a){var i=ki(e,t,r,n,a),s=yt(i.year,0,i.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}w("Q",0,"Qo","quarter");p("Q",gi);Y("Q",function(e,t){t[ye]=(T(e)-1)*3});function _2(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}w("D",["DD",2],"Do","date");p("D",W,rt);p("DD",W,X);p("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});Y(["D","DD"],ue);Y("Do",function(e,t){t[ue]=T(e.match(W)[0])});var qi=nt("Date",!0);w("DDD",["DDDD",3],"DDDo","dayOfYear");p("DDD",Xt);p("DDDD",yi);Y(["DDD","DDDD"],function(e,t,r){r._dayOfYear=T(e)});function b2(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}w("m",["mm",2],0,"minute");p("m",W,nn);p("mm",W,X);Y(["m","mm"],ie);var S2=nt("Minutes",!1);w("s",["ss",2],0,"second");p("s",W,nn);p("ss",W,X);Y(["s","ss"],ve);var M2=nt("Seconds",!1);w("S",0,0,function(){return~~(this.millisecond()/100)});w(0,["SS",2],0,function(){return~~(this.millisecond()/10)});w(0,["SSS",3],0,"millisecond");w(0,["SSSS",4],0,function(){return this.millisecond()*10});w(0,["SSSSS",5],0,function(){return this.millisecond()*100});w(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});w(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});w(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});w(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});p("S",Xt,gi);p("SS",Xt,X);p("SSS",Xt,yi);var ke,Ki;for(ke="SSSS";ke.length<=9;ke+="S")p(ke,tt);function C2(e,t){t[Ae]=T(("0."+e)*1e3)}for(ke="S";ke.length<=9;ke+="S")Y(ke,C2);Ki=nt("Milliseconds",!1);w("z",0,0,"zoneAbbr");w("zz",0,0,"zoneName");function T2(){return this._isUTC?"UTC":""}function k2(){return this._isUTC?"Coordinated Universal Time":""}var c=St.prototype;c.add=x0;c.calendar=T0;c.clone=k0;c.diff=Y0;c.endOf=V0;c.format=$0;c.from=W0;c.fromNow=I0;c.to=L0;c.toNow=U0;c.get=R1;c.invalidAt=Q0;c.isAfter=D0;c.isBefore=O0;c.isBetween=j0;c.isSame=E0;c.isSameOrAfter=F0;c.isSameOrBefore=P0;c.isValid=J0;c.lang=Gi;c.locale=Ui;c.localeData=Vi;c.max=Jh;c.min=Kh;c.parsingFlags=X0;c.set=$1;c.startOf=G0;c.subtract=w0;c.toArray=Z0;c.toObject=q0;c.toDate=B0;c.toISOString=N0;c.inspect=R0;typeof Symbol<"u"&&Symbol.for!=null&&(c[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});c.toJSON=K0;c.toString=A0;c.unix=z0;c.valueOf=H0;c.creationData=e2;c.eraName=a2;c.eraNarrow=i2;c.eraAbbr=s2;c.eraYear=o2;c.year=wi;c.isLeapYear=N1;c.weekYear=m2;c.isoWeekYear=p2;c.quarter=c.quarters=_2;c.month=Ci;c.daysInMonth=B1;c.week=c.weeks=th;c.isoWeek=c.isoWeeks=rh;c.weeksInYear=v2;c.weeksInWeekYear=x2;c.isoWeeksInYear=g2;c.isoWeeksInISOWeekYear=y2;c.date=qi;c.day=c.days=ph;c.weekday=gh;c.isoWeekday=yh;c.dayOfYear=b2;c.hour=c.hours=Mh;c.minute=c.minutes=S2;c.second=c.seconds=M2;c.millisecond=c.milliseconds=Ki;c.utcOffset=s0;c.utc=l0;c.local=u0;c.parseZone=c0;c.hasAlignedHourOffset=d0;c.isDST=f0;c.isLocal=m0;c.isUtcOffset=p0;c.isUtc=$i;c.isUTC=$i;c.zoneAbbr=T2;c.zoneName=k2;c.dates=te("dates accessor is deprecated. Use date instead.",qi);c.months=te("months accessor is deprecated. Use month instead",Ci);c.years=te("years accessor is deprecated. Use year instead",wi);c.zone=te("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",o0);c.isDSTShifted=te("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",h0);function D2(e){return $(e*1e3)}function O2(){return $.apply(null,arguments).parseZone()}function Ji(e){return e}var j=Xr.prototype;j.calendar=m1;j.longDateFormat=v1;j.invalidDate=w1;j.ordinal=S1;j.preparse=Ji;j.postformat=Ji;j.relativeTime=C1;j.pastFuture=T1;j.set=f1;j.eras=t2;j.erasParse=r2;j.erasConvertYear=n2;j.erasAbbrRegex=u2;j.erasNameRegex=l2;j.erasNarrowRegex=c2;j.months=G1;j.monthsShort=V1;j.monthsParse=z1;j.monthsRegex=q1;j.monthsShortRegex=Z1;j.week=J1;j.firstDayOfYear=eh;j.firstDayOfWeek=Q1;j.weekdays=ch;j.weekdaysMin=fh;j.weekdaysShort=dh;j.weekdaysParse=mh;j.weekdaysRegex=vh;j.weekdaysShortRegex=xh;j.weekdaysMinRegex=wh;j.isPM=bh;j.meridiem=Ch;function Ut(e,t,r,n){var a=Se(),i=fe().set(n,t);return a[r](i,e)}function Xi(e,t,r){if(_e(e)&&(t=e,e=void 0),e=e||"",t!=null)return Ut(e,t,r,"month");var n,a=[];for(n=0;n<12;n++)a[n]=Ut(e,n,r,"month");return a}function yn(e,t,r,n){typeof e=="boolean"?(_e(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,_e(t)&&(r=t,t=void 0),t=t||"");var a=Se(),i=e?a._week.dow:0,s,u=[];if(r!=null)return Ut(t,(r+i)%7,n,"day");for(s=0;s<7;s++)u[s]=Ut(t,(s+i)%7,n,"day");return u}function j2(e,t){return Xi(e,t,"months")}function E2(e,t){return Xi(e,t,"monthsShort")}function F2(e,t,r){return yn(e,t,r,"weekdays")}function P2(e,t,r){return yn(e,t,r,"weekdaysShort")}function Y2(e,t,r){return yn(e,t,r,"weekdaysMin")}De("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=T(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});m.lang=te("moment.lang is deprecated. Use moment.locale instead.",De);m.langData=te("moment.langData is deprecated. Use moment.localeData instead.",Se);var pe=Math.abs;function A2(){var e=this._data;return this._milliseconds=pe(this._milliseconds),this._days=pe(this._days),this._months=pe(this._months),e.milliseconds=pe(e.milliseconds),e.seconds=pe(e.seconds),e.minutes=pe(e.minutes),e.hours=pe(e.hours),e.months=pe(e.months),e.years=pe(e.years),this}function Qi(e,t,r,n){var a=le(t,r);return e._milliseconds+=n*a._milliseconds,e._days+=n*a._days,e._months+=n*a._months,e._bubble()}function N2(e,t){return Qi(this,e,t,1)}function R2(e,t){return Qi(this,e,t,-1)}function Sa(e){return e<0?Math.floor(e):Math.ceil(e)}function $2(){var e=this._milliseconds,t=this._days,r=this._months,n=this._data,a,i,s,u,d;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=Sa(Rr(r)+t)*864e5,t=0,r=0),n.milliseconds=e%1e3,a=ee(e/1e3),n.seconds=a%60,i=ee(a/60),n.minutes=i%60,s=ee(i/60),n.hours=s%24,t+=ee(s/24),d=ee(es(t)),r+=d,t-=Sa(Rr(d)),u=ee(r/12),r%=12,n.days=t,n.months=r,n.years=u,this}function es(e){return e*4800/146097}function Rr(e){return e*146097/4800}function W2(e){if(!this.isValid())return NaN;var t,r,n=this._milliseconds;if(e=re(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+n/864e5,r=this._months+es(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(Rr(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return t*24+n/36e5;case"minute":return t*1440+n/6e4;case"second":return t*86400+n/1e3;case"millisecond":return Math.floor(t*864e5)+n;default:throw new Error("Unknown unit "+e)}}function Me(e){return function(){return this.as(e)}}var ts=Me("ms"),I2=Me("s"),L2=Me("m"),U2=Me("h"),G2=Me("d"),V2=Me("w"),H2=Me("M"),z2=Me("Q"),B2=Me("y"),Z2=ts;function q2(){return le(this)}function K2(e){return e=re(e),this.isValid()?this[e+"s"]():NaN}function Ve(e){return function(){return this.isValid()?this._data[e]:NaN}}var J2=Ve("milliseconds"),X2=Ve("seconds"),Q2=Ve("minutes"),em=Ve("hours"),tm=Ve("days"),rm=Ve("months"),nm=Ve("years");function am(){return ee(this.days()/7)}var ge=Math.round,qe={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function im(e,t,r,n,a){return a.relativeTime(t||1,!!r,e,n)}function sm(e,t,r,n){var a=le(e).abs(),i=ge(a.as("s")),s=ge(a.as("m")),u=ge(a.as("h")),d=ge(a.as("d")),h=ge(a.as("M")),k=ge(a.as("w")),F=ge(a.as("y")),y=i<=r.ss&&["s",i]||i<r.s&&["ss",i]||s<=1&&["m"]||s<r.m&&["mm",s]||u<=1&&["h"]||u<r.h&&["hh",u]||d<=1&&["d"]||d<r.d&&["dd",d];return r.w!=null&&(y=y||k<=1&&["w"]||k<r.w&&["ww",k]),y=y||h<=1&&["M"]||h<r.M&&["MM",h]||F<=1&&["y"]||["yy",F],y[2]=t,y[3]=+e>0,y[4]=n,im.apply(null,y)}function om(e){return e===void 0?ge:typeof e=="function"?(ge=e,!0):!1}function lm(e,t){return qe[e]===void 0?!1:t===void 0?qe[e]:(qe[e]=t,e==="s"&&(qe.ss=t-1),!0)}function um(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,n=qe,a,i;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(n=Object.assign({},qe,t),t.s!=null&&t.ss==null&&(n.ss=t.s-1)),a=this.localeData(),i=sm(this,!r,n,a),r&&(i=a.pastFuture(+this,i)),a.postformat(i)}var Sr=Math.abs;function Be(e){return(e>0)-(e<0)||+e}function sr(){if(!this.isValid())return this.localeData().invalidDate();var e=Sr(this._milliseconds)/1e3,t=Sr(this._days),r=Sr(this._months),n,a,i,s,u=this.asSeconds(),d,h,k,F;return u?(n=ee(e/60),a=ee(n/60),e%=60,n%=60,i=ee(r/12),r%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",d=u<0?"-":"",h=Be(this._months)!==Be(u)?"-":"",k=Be(this._days)!==Be(u)?"-":"",F=Be(this._milliseconds)!==Be(u)?"-":"",d+"P"+(i?h+i+"Y":"")+(r?h+r+"M":"")+(t?k+t+"D":"")+(a||n||e?"T":"")+(a?F+a+"H":"")+(n?F+n+"M":"")+(e?F+s+"S":"")):"P0D"}var D=ar.prototype;D.isValid=r0;D.abs=A2;D.add=N2;D.subtract=R2;D.as=W2;D.asMilliseconds=ts;D.asSeconds=I2;D.asMinutes=L2;D.asHours=U2;D.asDays=G2;D.asWeeks=V2;D.asMonths=H2;D.asQuarters=z2;D.asYears=B2;D.valueOf=Z2;D._bubble=$2;D.clone=q2;D.get=K2;D.milliseconds=J2;D.seconds=X2;D.minutes=Q2;D.hours=em;D.days=tm;D.weeks=am;D.months=rm;D.years=nm;D.humanize=um;D.toISOString=sr;D.toString=sr;D.toJSON=sr;D.locale=Ui;D.localeData=Vi;D.toIsoString=te("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",sr);D.lang=Gi;w("X",0,0,"unix");w("x",0,0,"valueOf");p("x",er);p("X",j1);Y("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});Y("x",function(e,t,r){r._d=new Date(T(e))});//! moment.js
m.version="2.30.1";c1($);m.fn=c;m.min=Xh;m.max=Qh;m.now=e0;m.utc=fe;m.unix=D2;m.months=j2;m.isDate=bt;m.locale=De;m.invalid=Kt;m.duration=le;m.isMoment=oe;m.weekdays=F2;m.parseZone=O2;m.localeData=Se;m.isDuration=At;m.monthsShort=E2;m.weekdaysMin=Y2;m.defineLocale=un;m.updateLocale=Oh;m.locales=jh;m.weekdaysShort=P2;m.normalizeUnits=re;m.relativeTimeRounding=om;m.relativeTimeThreshold=lm;m.calendarFormat=C0;m.prototype=c;m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const cm=navigator.language,dm=(e,t="HH:mm")=>m.utc(e).locale(cm).format(t),fm=v.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 264px;
  height: 212px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }

  .motivation {
    text-align: center;
    font-size: 16px;
    color: var(--accentPrimari);
  }
`,hm=v.ul`
  li {
    padding-bottom: 12px;
  }

  li:not(:first-child) {
    padding-top: 12px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
`,mm=v.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--lightBlueSecondary);

  .icon-glass {
    width: 26px;
    height: 26px;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`,pm=v.span`
  color: var(--accentPrimari);
  font-size: 18px;
  line-height: 1.33;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`,gm=v.span`
  font-size: 12px;
  line-height: 2;
  color: var(--blackPrimari);
`,ym=v.div`
  margin-left: auto;
  margin-right: 4px;

  button:first-child {
    margin-right: 18px;
  }
`;v.button`
  padding: 0;
  border: none;
  background-color: transparent;

  & svg {
    width: 16px;
    height: 16px;
  }
`;const vm=()=>{const{t:e}=Ea(),t=Gt(If);return o.jsx(fm,{children:t.length===0?o.jsx("p",{className:"motivation",children:e("portionsText")}):o.jsxs(o.Fragment,{children:[o.jsx(hm,{children:t==null?void 0:t.map(r=>o.jsxs(mm,{children:[o.jsx(ui,{className:"glass"}),o.jsxs(pm,{children:[`${r.waterAmount} ml`," "]}),o.jsx(gm,{children:dm(r.date)}),o.jsx(ym,{})]},r._id))}),o.jsx(u1,{})]})})},xm=()=>o.jsxs(s1,{children:[o.jsx(o1,{children:"Today"}),o.jsx(vm,{})]}),wm=v.div`
  width: 280px;
  padding: 24px 8px;
  border-radius: 10px;
  background: var(--lightGreySecondary, #ecf2ff);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`,_m=()=>o.jsxs(wm,{children:[o.jsx(xm,{}),o.jsx(i1,{})]}),Mm=e=>{const t=Vt();return f.useEffect(()=>{const r=`${Ne(new Date,"yyyy")}-${Ne(new Date,"mm")}-${Ne(new Date,"dd")}`;return t(js(r)),()=>{t(e())}},[t]),o.jsx(rf,{id:"beckground",children:o.jsxs(Qd,{children:[o.jsxs(ef,{children:[o.jsx(Hs,{}),o.jsx(qd,{})]}),o.jsx(tf,{children:o.jsx(_m,{})})]})})};export{Mm as default};