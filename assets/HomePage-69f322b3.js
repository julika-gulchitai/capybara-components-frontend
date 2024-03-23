import{b as An,u as p,c as tt,d as Ea,r as h,a as ce,e as Fa,f as Nn,g as $a,o as Pa,j as o,R as Cs,F as Rn,h as In,C as Wn,i as Ht,k as Ts,B as Ya,l as ks,n as Os,p as Ds,M as It,m as js,q as Ne,t as Es,s as Fs,A as $s,v as gr,w as Aa,x as ot,y as Ps,z as lt,P as Ys,D as As,E as Ns,G as Ln,H as Rs}from"./index-42a5b636.js";function Na(e,t,r){const n=An(e,r),a=An(t,r);return+n==+a}const Is=p.div`
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
    color: ${e=>e.theme.colors.textColor};
    line-height: 1.23;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: ${e=>e.theme.colors.textColor};
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
    border: 1px solid ${e=>e.theme.colors.secondaryLightblue};
    border-radius: 6px;
    outline: transparent;
    color: ${e=>e.theme.colors.primaryBlue};
    padding: 12px 10px;

    &::placeholder {
      color: ${e=>e.theme.colors.primaryBlue};
    }
  }
`,Ws=p.div`
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
    color: ${e=>e.theme.colors.textColor};
    margin-bottom: 0;
  }
  span {
    line-height: 1.33;
    font-size: 18px;
    color: ${e=>e.theme.colors.primaryBlue};
  }
`,Ls=p.p`
  border: 1px solid ${e=>e.theme.colors.secondaryLightblue};
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  line-height: 1.33;
  color: ${e=>e.theme.colors.secondaryGray};
  margin-bottom: 24px;
  span {
    color: ${e=>e.theme.colors.primaryBlue};
  }
`,Vs=p.div`
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
    color: ${e=>e.theme.colors.primaryBlue};
    font-weight: 700;
    font-size: 18px;
  }
`,Us=p.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Vn=p.div`
  position: relative;
  &:last-child {
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
  input{
    background-color: ${e=>e.theme.colors.mainBg};
  }
`,Gs=p.div`
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
  input{
    background-color: ${e=>e.theme.colors.mainBg};
  }
`,Bs=p.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;p.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  input {
    width: auto;
  }
`;const Hs=p.p`
  position: absolute;
  bottom: -33px;
  color: ${e=>e.theme.colors.secondaryRed};
  font-size: 14px;
  line-height: 1.29;
  @media (min-width: 768px) {
    bottom: -17px;
  }
`,Un=p.p`
  color: ${e=>e.theme.colors.secondaryRed};
  font-size: 14px;
  line-height: 1.29;
  position: absolute;
  bottom: -17px;
`,zs=()=>{const{gender:e}=tt(Ea),[t,r]=h.useState("0"),[n,a]=h.useState("0"),[i,s]=h.useState("1.8"),[u,d]=h.useState(()=>T()),{t:c}=ce(),M=Fa({weight:Nn().typeError(c("normaModal.Weight must be a number")).min(3,c("normaModal.Weight must be more than 3kg")).max(300,c("normaModal.Weight must be less than 300kg")),sports:Nn().typeError(c("normaModal.Time must be a number")).positive(c("normaModal.Time must be more than 0"))}),{control:C,formState:{errors:m}}=$a({mode:"onChange",resolver:Pa(M),defaultValues:{weight:"",sports:""}});h.useEffect(()=>{if(u&&t>0){const P=t*.03+n*.4;s(P.toFixed(1))}if(!u&&t>0){const P=t*.04+n*.6;s(P.toFixed(1))}},[t,n,u,s]);function T(){return e==="female"||e===null}function O(){return e==="female"||e===null?"female":"male"}return o.jsxs(o.Fragment,{children:[o.jsxs("form",{children:[o.jsxs(Cs,{defaultValue:O(),name:"radio-buttons-group",row:!0,sx:{marginBottom:"16px"},children:[o.jsx(Rn,{value:"female",control:o.jsx(In,{}),label:c("normaModal.For woman"),onChange:()=>d(!0),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25,letterSpacing:"0"},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}}),o.jsx(Rn,{value:"male",control:o.jsx(In,{}),label:c("normaModal.For man"),onChange:()=>d(!1),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}})]}),o.jsxs(Us,{children:[o.jsxs(Vn,{children:[o.jsxs("label",{htmlFor:"weight",children:[c("normaModal.Your weight in kilograms"),":"]}),o.jsx(Wn,{name:"weight",control:C,render:({field:{onChange:P,...U}})=>o.jsx("input",{id:"weight",...U,onChange:({target:{value:b}})=>{P(b),r(b)},placeholder:"0",onFocus:b=>b.target.placeholder="",onBlur:b=>b.target.placeholder="0",onInput:b=>{b.target.value=b.target.value.replace(/(\.\d{1})\d+/,"$1"),b.target.value=b.target.value.replace(",",".")},autoComplete:"off"})}),m.weight&&t!==""&&o.jsx(Un,{children:m.weight.message})]}),o.jsxs(Vn,{children:[o.jsxs("label",{htmlFor:"sports",children:[c("normaModal.The time of active participation in sports or other activities with a high physical load in hours"),":"]}),o.jsx(Wn,{name:"sports",control:C,render:({field:{onChange:P,...U}})=>o.jsx("input",{id:"sports",...U,onChange:({target:{value:b}})=>{P(b),a(b)},placeholder:"0",onFocus:b=>b.target.placeholder="",onBlur:b=>b.target.placeholder="0",onInput:b=>{b.target.value=b.target.value.replace(/(\.\d{1})\d+/,"$1"),b.target.value=b.target.value.replace(",",".")},autoComplete:"off"})}),m.sports&&n!==""&&o.jsx(Un,{children:m.sports.message})]})]})]}),o.jsxs(Vs,{children:[o.jsxs("p",{children:[c("normaModal.The required amount of water in liters per day"),":"]}),o.jsx("p",{children:o.jsxs("span",{children:[i," ",c("normaModal.L")]})})]})]})},Zs=({onClose:e})=>{const t=Ht(),{t:r}=ce(),n=Fa({norma:Ts().matches(/^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,r("normaModal.normaError")).required()}),{register:a,handleSubmit:i,formState:{errors:s}}=$a({mode:"onChange",resolver:Pa(n)});async function u(d){const M={waterRate:(d.norma*1e3).toString()};t(ks(M)).unwrap().then(()=>{e()}).catch(C=>{Os.Notify.failure(C.message,Ds)})}return o.jsxs(Is,{children:[o.jsx("h2",{children:r("normaModal.My daily norma")}),o.jsxs(Ws,{children:[o.jsxs("p",{children:[r("normaModal.formulaGenderF"),": ",o.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),o.jsxs("p",{children:[r("normaModal.formulaGenderM"),": ",o.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),o.jsxs(Ls,{children:[o.jsx("span",{children:"*"})," ",r("normaModal.explanation")]}),o.jsxs("h3",{children:[r("normaModal.Calculate your rate"),":"]}),o.jsx(zs,{}),o.jsxs("form",{action:"",onSubmit:i(u),children:[o.jsxs(Gs,{children:[o.jsxs("label",{htmlFor:"norma",children:[r("normaModal. Write down how much water you will drink"),":"]}),o.jsx("input",{type:"text",...a("norma",{max:15}),name:"norma",id:"norma",placeholder:"0",onFocus:d=>d.target.placeholder="",onBlur:d=>d.target.placeholder="0",onInput:d=>{d.target.value=d.target.value.replace(/(\.\d{1})\d+/,"$1"),d.target.value=d.target.value.replace(",",".")},autoComplete:"off"}),s.norma&&o.jsx(Hs,{children:s.norma.message})]}),o.jsx(Bs,{children:o.jsx(Ya,{type:"submit",children:r("save")})})]})]})},qs=p.div`
  box-shadow: ${e=>e.theme.shadows.secondaryShadowContainer};
  background-color:${e=>e.theme.colors.mainBg};
  border: 1px solid ${e=>e.theme.colors.secondaryBg};
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
`,Ks=p.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Js=()=>{const[e,t]=h.useState(!1),{waterRate:r}=tt(Ea),{t:n}=ce(),a=r/1e3;return o.jsxs(o.Fragment,{children:[o.jsxs(qs,{children:[o.jsx("h2",{children:n("normaModal.My daily norma")}),o.jsxs(Ks,{children:[o.jsxs("p",{children:[a," ",n("normaModal.L")]}),o.jsx("button",{onClick:()=>t(!0),children:n("edit")})]})]}),e&&o.jsx(It,{open:e,onClose:()=>t(!1),children:o.jsx(Zs,{onClose:()=>t(!1)})})]})},Xs=p.div`
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
`,Qs=p.div`
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
`,eo=p.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`,to=p.input`
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
`,ro=p.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    /* width: 322px; */
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }
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
      margin-left: 3px;
      font-size: ${e=>e.$rater===0?"16px":"12px"};
      font-weight: ${e=>e.$rater===0?"500":"400"};
    }

    &:nth-child(2) {
      margin-left: 15px;
      font-size: ${e=>e.$rater>=50&e.$rater<100?"16px":"12px"};
      font-weight: ${e=>e.$rater>=50&e.$rater<100?"500":"400"};
    }
    &:last-child {
      margin-right: 3px;
      width: 40px;
      font-size: ${e=>e.$rater>=100?"16px":"12px"};
      font-weight: ${e=>e.$raterrater>=100?"500":"400"};
      margin-left: 4px;
    }
  }
`,no=p(Ya)`
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
`;var ao=function(t){return io(t)&&!so(t)};function io(e){return!!e&&typeof e=="object"}function so(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||uo(e)}var oo=typeof Symbol=="function"&&Symbol.for,lo=oo?Symbol.for("react.element"):60103;function uo(e){return e.$$typeof===lo}function co(e){return Array.isArray(e)?[]:{}}function Wt(e,t){return t.clone!==!1&&t.isMergeableObject(e)?pt(co(e),e,t):e}function ho(e,t,r){return e.concat(t).map(function(n){return Wt(n,r)})}function fo(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(a){n[a]=Wt(e[a],r)}),Object.keys(t).forEach(function(a){!r.isMergeableObject(t[a])||!e[a]?n[a]=Wt(t[a],r):n[a]=pt(e[a],t[a],r)}),n}function pt(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||ho,r.isMergeableObject=r.isMergeableObject||ao;var n=Array.isArray(t),a=Array.isArray(e),i=n===a;return i?n?r.arrayMerge(e,t,r):fo(e,t,r):Wt(t,r)}pt.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return pt(n,a,r)},{})};var Tr=pt,mo=typeof global=="object"&&global&&global.Object===Object&&global;const Ra=mo;var po=typeof self=="object"&&self&&self.Object===Object&&self,go=Ra||po||Function("return this")();const he=go;var yo=he.Symbol;const je=yo;var Ia=Object.prototype,xo=Ia.hasOwnProperty,vo=Ia.toString,ut=je?je.toStringTag:void 0;function wo(e){var t=xo.call(e,ut),r=e[ut];try{e[ut]=void 0;var n=!0}catch{}var a=vo.call(e);return n&&(t?e[ut]=r:delete e[ut]),a}var bo=Object.prototype,_o=bo.toString;function So(e){return _o.call(e)}var Mo="[object Null]",Co="[object Undefined]",Gn=je?je.toStringTag:void 0;function Le(e){return e==null?e===void 0?Co:Mo:Gn&&Gn in Object(e)?wo(e):So(e)}function Wa(e,t){return function(r){return e(t(r))}}var To=Wa(Object.getPrototypeOf,Object);const Wr=To;function Ve(e){return e!=null&&typeof e=="object"}var ko="[object Object]",Oo=Function.prototype,Do=Object.prototype,La=Oo.toString,jo=Do.hasOwnProperty,Eo=La.call(Object);function Bn(e){if(!Ve(e)||Le(e)!=ko)return!1;var t=Wr(e);if(t===null)return!0;var r=jo.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&La.call(r)==Eo}var Hn=Array.isArray,zn=Object.keys,Fo=Object.prototype.hasOwnProperty,$o=typeof Element<"u";function kr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Hn(e),n=Hn(t),a,i,s;if(r&&n){if(i=e.length,i!=t.length)return!1;for(a=i;a--!==0;)if(!kr(e[a],t[a]))return!1;return!0}if(r!=n)return!1;var u=e instanceof Date,d=t instanceof Date;if(u!=d)return!1;if(u&&d)return e.getTime()==t.getTime();var c=e instanceof RegExp,M=t instanceof RegExp;if(c!=M)return!1;if(c&&M)return e.toString()==t.toString();var C=zn(e);if(i=C.length,i!==zn(t).length)return!1;for(a=i;a--!==0;)if(!Fo.call(t,C[a]))return!1;if($o&&e instanceof Element&&t instanceof Element)return e===t;for(a=i;a--!==0;)if(s=C[a],!(s==="_owner"&&e.$$typeof)&&!kr(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var Po=function(t,r){try{return kr(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const Pe=js(Po);var Yo=!0;function Ao(e,t){if(!Yo){if(e)return;var r="Warning: "+t;typeof console<"u"&&console.warn(r);try{throw Error(r)}catch{}}}function No(){this.__data__=[],this.size=0}function Va(e,t){return e===t||e!==e&&t!==t}function zt(e,t){for(var r=e.length;r--;)if(Va(e[r][0],t))return r;return-1}var Ro=Array.prototype,Io=Ro.splice;function Wo(e){var t=this.__data__,r=zt(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Io.call(t,r,1),--this.size,!0}function Lo(e){var t=this.__data__,r=zt(t,e);return r<0?void 0:t[r][1]}function Vo(e){return zt(this.__data__,e)>-1}function Uo(e,t){var r=this.__data__,n=zt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function Se(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Se.prototype.clear=No;Se.prototype.delete=Wo;Se.prototype.get=Lo;Se.prototype.has=Vo;Se.prototype.set=Uo;function Go(){this.__data__=new Se,this.size=0}function Bo(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Ho(e){return this.__data__.get(e)}function zo(e){return this.__data__.has(e)}function _t(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Zo="[object AsyncFunction]",qo="[object Function]",Ko="[object GeneratorFunction]",Jo="[object Proxy]";function Ua(e){if(!_t(e))return!1;var t=Le(e);return t==qo||t==Ko||t==Zo||t==Jo}var Xo=he["__core-js_shared__"];const yr=Xo;var Zn=function(){var e=/[^.]+$/.exec(yr&&yr.keys&&yr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Qo(e){return!!Zn&&Zn in e}var el=Function.prototype,tl=el.toString;function Ue(e){if(e!=null){try{return tl.call(e)}catch{}try{return e+""}catch{}}return""}var rl=/[\\^$.*+?()[\]{}|]/g,nl=/^\[object .+?Constructor\]$/,al=Function.prototype,il=Object.prototype,sl=al.toString,ol=il.hasOwnProperty,ll=RegExp("^"+sl.call(ol).replace(rl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ul(e){if(!_t(e)||Qo(e))return!1;var t=Ua(e)?ll:nl;return t.test(Ue(e))}function dl(e,t){return e==null?void 0:e[t]}function Ge(e,t){var r=dl(e,t);return ul(r)?r:void 0}var cl=Ge(he,"Map");const gt=cl;var hl=Ge(Object,"create");const yt=hl;function fl(){this.__data__=yt?yt(null):{},this.size=0}function ml(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var pl="__lodash_hash_undefined__",gl=Object.prototype,yl=gl.hasOwnProperty;function xl(e){var t=this.__data__;if(yt){var r=t[e];return r===pl?void 0:r}return yl.call(t,e)?t[e]:void 0}var vl=Object.prototype,wl=vl.hasOwnProperty;function bl(e){var t=this.__data__;return yt?t[e]!==void 0:wl.call(t,e)}var _l="__lodash_hash_undefined__";function Sl(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=yt&&t===void 0?_l:t,this}function We(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}We.prototype.clear=fl;We.prototype.delete=ml;We.prototype.get=xl;We.prototype.has=bl;We.prototype.set=Sl;function Ml(){this.size=0,this.__data__={hash:new We,map:new(gt||Se),string:new We}}function Cl(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Zt(e,t){var r=e.__data__;return Cl(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Tl(e){var t=Zt(this,e).delete(e);return this.size-=t?1:0,t}function kl(e){return Zt(this,e).get(e)}function Ol(e){return Zt(this,e).has(e)}function Dl(e,t){var r=Zt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function Ee(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ee.prototype.clear=Ml;Ee.prototype.delete=Tl;Ee.prototype.get=kl;Ee.prototype.has=Ol;Ee.prototype.set=Dl;var jl=200;function El(e,t){var r=this.__data__;if(r instanceof Se){var n=r.__data__;if(!gt||n.length<jl-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ee(n)}return r.set(e,t),this.size=r.size,this}function rt(e){var t=this.__data__=new Se(e);this.size=t.size}rt.prototype.clear=Go;rt.prototype.delete=Bo;rt.prototype.get=Ho;rt.prototype.has=zo;rt.prototype.set=El;function Fl(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var $l=function(){try{var e=Ge(Object,"defineProperty");return e({},"",{}),e}catch{}}();const qn=$l;function Ga(e,t,r){t=="__proto__"&&qn?qn(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Pl=Object.prototype,Yl=Pl.hasOwnProperty;function Ba(e,t,r){var n=e[t];(!(Yl.call(e,t)&&Va(n,r))||r===void 0&&!(t in e))&&Ga(e,t,r)}function qt(e,t,r,n){var a=!r;r||(r={});for(var i=-1,s=t.length;++i<s;){var u=t[i],d=n?n(r[u],e[u],u,r,e):void 0;d===void 0&&(d=e[u]),a?Ga(r,u,d):Ba(r,u,d)}return r}function Al(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Nl="[object Arguments]";function Kn(e){return Ve(e)&&Le(e)==Nl}var Ha=Object.prototype,Rl=Ha.hasOwnProperty,Il=Ha.propertyIsEnumerable,Wl=Kn(function(){return arguments}())?Kn:function(e){return Ve(e)&&Rl.call(e,"callee")&&!Il.call(e,"callee")};const Ll=Wl;var Vl=Array.isArray;const St=Vl;function Ul(){return!1}var za=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Jn=za&&typeof module=="object"&&module&&!module.nodeType&&module,Gl=Jn&&Jn.exports===za,Xn=Gl?he.Buffer:void 0,Bl=Xn?Xn.isBuffer:void 0,Hl=Bl||Ul;const Za=Hl;var zl=9007199254740991,Zl=/^(?:0|[1-9]\d*)$/;function ql(e,t){var r=typeof e;return t=t??zl,!!t&&(r=="number"||r!="symbol"&&Zl.test(e))&&e>-1&&e%1==0&&e<t}var Kl=9007199254740991;function qa(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Kl}var Jl="[object Arguments]",Xl="[object Array]",Ql="[object Boolean]",eu="[object Date]",tu="[object Error]",ru="[object Function]",nu="[object Map]",au="[object Number]",iu="[object Object]",su="[object RegExp]",ou="[object Set]",lu="[object String]",uu="[object WeakMap]",du="[object ArrayBuffer]",cu="[object DataView]",hu="[object Float32Array]",fu="[object Float64Array]",mu="[object Int8Array]",pu="[object Int16Array]",gu="[object Int32Array]",yu="[object Uint8Array]",xu="[object Uint8ClampedArray]",vu="[object Uint16Array]",wu="[object Uint32Array]",I={};I[hu]=I[fu]=I[mu]=I[pu]=I[gu]=I[yu]=I[xu]=I[vu]=I[wu]=!0;I[Jl]=I[Xl]=I[du]=I[Ql]=I[cu]=I[eu]=I[tu]=I[ru]=I[nu]=I[au]=I[iu]=I[su]=I[ou]=I[lu]=I[uu]=!1;function bu(e){return Ve(e)&&qa(e.length)&&!!I[Le(e)]}function Lr(e){return function(t){return e(t)}}var Ka=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ft=Ka&&typeof module=="object"&&module&&!module.nodeType&&module,_u=ft&&ft.exports===Ka,xr=_u&&Ra.process,Su=function(){try{var e=ft&&ft.require&&ft.require("util").types;return e||xr&&xr.binding&&xr.binding("util")}catch{}}();const et=Su;var Qn=et&&et.isTypedArray,Mu=Qn?Lr(Qn):bu;const Cu=Mu;var Tu=Object.prototype,ku=Tu.hasOwnProperty;function Ja(e,t){var r=St(e),n=!r&&Ll(e),a=!r&&!n&&Za(e),i=!r&&!n&&!a&&Cu(e),s=r||n||a||i,u=s?Al(e.length,String):[],d=u.length;for(var c in e)(t||ku.call(e,c))&&!(s&&(c=="length"||a&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||ql(c,d)))&&u.push(c);return u}var Ou=Object.prototype;function Vr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ou;return e===r}var Du=Wa(Object.keys,Object);const ju=Du;var Eu=Object.prototype,Fu=Eu.hasOwnProperty;function $u(e){if(!Vr(e))return ju(e);var t=[];for(var r in Object(e))Fu.call(e,r)&&r!="constructor"&&t.push(r);return t}function Xa(e){return e!=null&&qa(e.length)&&!Ua(e)}function Ur(e){return Xa(e)?Ja(e):$u(e)}function Pu(e,t){return e&&qt(t,Ur(t),e)}function Yu(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var Au=Object.prototype,Nu=Au.hasOwnProperty;function Ru(e){if(!_t(e))return Yu(e);var t=Vr(e),r=[];for(var n in e)n=="constructor"&&(t||!Nu.call(e,n))||r.push(n);return r}function Gr(e){return Xa(e)?Ja(e,!0):Ru(e)}function Iu(e,t){return e&&qt(t,Gr(t),e)}var Qa=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ea=Qa&&typeof module=="object"&&module&&!module.nodeType&&module,Wu=ea&&ea.exports===Qa,ta=Wu?he.Buffer:void 0,ra=ta?ta.allocUnsafe:void 0;function Lu(e,t){if(t)return e.slice();var r=e.length,n=ra?ra(r):new e.constructor(r);return e.copy(n),n}function ei(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function Vu(e,t){for(var r=-1,n=e==null?0:e.length,a=0,i=[];++r<n;){var s=e[r];t(s,r,e)&&(i[a++]=s)}return i}function ti(){return[]}var Uu=Object.prototype,Gu=Uu.propertyIsEnumerable,na=Object.getOwnPropertySymbols,Bu=na?function(e){return e==null?[]:(e=Object(e),Vu(na(e),function(t){return Gu.call(e,t)}))}:ti;const Br=Bu;function Hu(e,t){return qt(e,Br(e),t)}function ri(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var zu=Object.getOwnPropertySymbols,Zu=zu?function(e){for(var t=[];e;)ri(t,Br(e)),e=Wr(e);return t}:ti;const ni=Zu;function qu(e,t){return qt(e,ni(e),t)}function ai(e,t,r){var n=t(e);return St(e)?n:ri(n,r(e))}function Ku(e){return ai(e,Ur,Br)}function Ju(e){return ai(e,Gr,ni)}var Xu=Ge(he,"DataView");const Or=Xu;var Qu=Ge(he,"Promise");const Dr=Qu;var ed=Ge(he,"Set");const jr=ed;var td=Ge(he,"WeakMap");const Er=td;var aa="[object Map]",rd="[object Object]",ia="[object Promise]",sa="[object Set]",oa="[object WeakMap]",la="[object DataView]",nd=Ue(Or),ad=Ue(gt),id=Ue(Dr),sd=Ue(jr),od=Ue(Er),Ye=Le;(Or&&Ye(new Or(new ArrayBuffer(1)))!=la||gt&&Ye(new gt)!=aa||Dr&&Ye(Dr.resolve())!=ia||jr&&Ye(new jr)!=sa||Er&&Ye(new Er)!=oa)&&(Ye=function(e){var t=Le(e),r=t==rd?e.constructor:void 0,n=r?Ue(r):"";if(n)switch(n){case nd:return la;case ad:return aa;case id:return ia;case sd:return sa;case od:return oa}return t});const Hr=Ye;var ld=Object.prototype,ud=ld.hasOwnProperty;function dd(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&ud.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var cd=he.Uint8Array;const ua=cd;function zr(e){var t=new e.constructor(e.byteLength);return new ua(t).set(new ua(e)),t}function hd(e,t){var r=t?zr(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var fd=/\w*$/;function md(e){var t=new e.constructor(e.source,fd.exec(e));return t.lastIndex=e.lastIndex,t}var da=je?je.prototype:void 0,ca=da?da.valueOf:void 0;function pd(e){return ca?Object(ca.call(e)):{}}function gd(e,t){var r=t?zr(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var yd="[object Boolean]",xd="[object Date]",vd="[object Map]",wd="[object Number]",bd="[object RegExp]",_d="[object Set]",Sd="[object String]",Md="[object Symbol]",Cd="[object ArrayBuffer]",Td="[object DataView]",kd="[object Float32Array]",Od="[object Float64Array]",Dd="[object Int8Array]",jd="[object Int16Array]",Ed="[object Int32Array]",Fd="[object Uint8Array]",$d="[object Uint8ClampedArray]",Pd="[object Uint16Array]",Yd="[object Uint32Array]";function Ad(e,t,r){var n=e.constructor;switch(t){case Cd:return zr(e);case yd:case xd:return new n(+e);case Td:return hd(e,r);case kd:case Od:case Dd:case jd:case Ed:case Fd:case $d:case Pd:case Yd:return gd(e,r);case vd:return new n;case wd:case Sd:return new n(e);case bd:return md(e);case _d:return new n;case Md:return pd(e)}}var ha=Object.create,Nd=function(){function e(){}return function(t){if(!_t(t))return{};if(ha)return ha(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();const Rd=Nd;function Id(e){return typeof e.constructor=="function"&&!Vr(e)?Rd(Wr(e)):{}}var Wd="[object Map]";function Ld(e){return Ve(e)&&Hr(e)==Wd}var fa=et&&et.isMap,Vd=fa?Lr(fa):Ld;const Ud=Vd;var Gd="[object Set]";function Bd(e){return Ve(e)&&Hr(e)==Gd}var ma=et&&et.isSet,Hd=ma?Lr(ma):Bd;const zd=Hd;var Zd=1,qd=2,Kd=4,ii="[object Arguments]",Jd="[object Array]",Xd="[object Boolean]",Qd="[object Date]",ec="[object Error]",si="[object Function]",tc="[object GeneratorFunction]",rc="[object Map]",nc="[object Number]",oi="[object Object]",ac="[object RegExp]",ic="[object Set]",sc="[object String]",oc="[object Symbol]",lc="[object WeakMap]",uc="[object ArrayBuffer]",dc="[object DataView]",cc="[object Float32Array]",hc="[object Float64Array]",fc="[object Int8Array]",mc="[object Int16Array]",pc="[object Int32Array]",gc="[object Uint8Array]",yc="[object Uint8ClampedArray]",xc="[object Uint16Array]",vc="[object Uint32Array]",R={};R[ii]=R[Jd]=R[uc]=R[dc]=R[Xd]=R[Qd]=R[cc]=R[hc]=R[fc]=R[mc]=R[pc]=R[rc]=R[nc]=R[oi]=R[ac]=R[ic]=R[sc]=R[oc]=R[gc]=R[yc]=R[xc]=R[vc]=!0;R[ec]=R[si]=R[lc]=!1;function Yt(e,t,r,n,a,i){var s,u=t&Zd,d=t&qd,c=t&Kd;if(r&&(s=a?r(e,n,a,i):r(e)),s!==void 0)return s;if(!_t(e))return e;var M=St(e);if(M){if(s=dd(e),!u)return ei(e,s)}else{var C=Hr(e),m=C==si||C==tc;if(Za(e))return Lu(e,u);if(C==oi||C==ii||m&&!a){if(s=d||m?{}:Id(e),!u)return d?qu(e,Iu(s,e)):Hu(e,Pu(s,e))}else{if(!R[C])return a?e:{};s=Ad(e,C,u)}}i||(i=new rt);var T=i.get(e);if(T)return T;i.set(e,s),zd(e)?e.forEach(function(U){s.add(Yt(U,t,r,U,e,i))}):Ud(e)&&e.forEach(function(U,b){s.set(b,Yt(U,t,r,b,e,i))});var O=c?d?Ju:Ku:d?Gr:Ur,P=M?void 0:O(e);return Fl(P||e,function(U,b){P&&(b=U,U=e[b]),Ba(s,b,Yt(U,t,r,b,e,i))}),s}var wc=4;function pa(e){return Yt(e,wc)}function li(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var bc="[object Symbol]";function Zr(e){return typeof e=="symbol"||Ve(e)&&Le(e)==bc}var _c="Expected a function";function qr(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(_c);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var s=e.apply(this,n);return r.cache=i.set(a,s)||i,s};return r.cache=new(qr.Cache||Ee),r}qr.Cache=Ee;var Sc=500;function Mc(e){var t=qr(e,function(n){return r.size===Sc&&r.clear(),n}),r=t.cache;return t}var Cc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tc=/\\(\\)?/g,kc=Mc(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Cc,function(r,n,a,i){t.push(a?i.replace(Tc,"$1"):n||r)}),t});const Oc=kc;var Dc=1/0;function jc(e){if(typeof e=="string"||Zr(e))return e;var t=e+"";return t=="0"&&1/e==-Dc?"-0":t}var Ec=1/0,ga=je?je.prototype:void 0,ya=ga?ga.toString:void 0;function ui(e){if(typeof e=="string")return e;if(St(e))return li(e,ui)+"";if(Zr(e))return ya?ya.call(e):"";var t=e+"";return t=="0"&&1/e==-Ec?"-0":t}function Fc(e){return e==null?"":ui(e)}function di(e){return St(e)?li(e,jc):Zr(e)?[e]:ei(Oc(Fc(e)))}function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}function ci(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}var Kt=h.createContext(void 0);Kt.displayName="FormikContext";Kt.Provider;Kt.Consumer;function $c(){var e=h.useContext(Kt);return e||Ao(!1),e}var ae=function(t){return typeof t=="function"},Jt=function(t){return t!==null&&typeof t=="object"},Pc=function(t){return String(Math.floor(Number(t)))===t},vr=function(t){return Object.prototype.toString.call(t)==="[object String]"},wr=function(t){return Jt(t)&&ae(t.then)};function J(e,t,r,n){n===void 0&&(n=0);for(var a=di(t);e&&n<a.length;)e=e[a[n++]];return n!==a.length&&!e||e===void 0?r:e}function Re(e,t,r){for(var n=pa(e),a=n,i=0,s=di(t);i<s.length-1;i++){var u=s[i],d=J(e,s.slice(0,i+1));if(d&&(Jt(d)||Array.isArray(d)))a=a[u]=pa(d);else{var c=s[i+1];a=a[u]=Pc(c)&&Number(c)>=0?[]:{}}}return(i===0?e:a)[s[i]]===r?e:(r===void 0?delete a[s[i]]:a[s[i]]=r,i===0&&r===void 0&&delete n[s[i]],n)}function hi(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var a=0,i=Object.keys(e);a<i.length;a++){var s=i[a],u=e[s];Jt(u)?r.get(u)||(r.set(u,!0),n[s]=Array.isArray(u)?[]:{},hi(u,t,r,n[s])):n[s]=t}return n}function Yc(e,t){switch(t.type){case"SET_VALUES":return z({},e,{values:t.payload});case"SET_TOUCHED":return z({},e,{touched:t.payload});case"SET_ERRORS":return Pe(e.errors,t.payload)?e:z({},e,{errors:t.payload});case"SET_STATUS":return z({},e,{status:t.payload});case"SET_ISSUBMITTING":return z({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return z({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return z({},e,{values:Re(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return z({},e,{touched:Re(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return z({},e,{errors:Re(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return z({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return z({},e,{touched:hi(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return z({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return z({},e,{isSubmitting:!1});default:return e}}var Fe={},jt={};function fi(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,a=n===void 0?!0:n,i=e.validateOnMount,s=i===void 0?!1:i,u=e.isInitialValid,d=e.enableReinitialize,c=d===void 0?!1:d,M=e.onSubmit,C=ci(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),m=z({validateOnChange:r,validateOnBlur:a,validateOnMount:s,onSubmit:M},C),T=h.useRef(m.initialValues),O=h.useRef(m.initialErrors||Fe),P=h.useRef(m.initialTouched||jt),U=h.useRef(m.initialStatus),b=h.useRef(!1),Te=h.useRef({});h.useEffect(function(){return b.current=!0,function(){b.current=!1}},[]);var ds=h.useState(0),cs=ds[1],Ot=h.useRef({values:m.initialValues,errors:m.initialErrors||Fe,touched:m.initialTouched||jt,status:m.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),N=Ot.current,Y=h.useCallback(function(l){var x=Ot.current;Ot.current=Yc(x,l),x!==Ot.current&&cs(function(v){return v+1})},[]),_n=h.useCallback(function(l,x){return new Promise(function(v,_){var k=m.validate(l,x);k==null?v(Fe):wr(k)?k.then(function($){v($||Fe)},function($){_($)}):v(k)})},[m.validate]),ur=h.useCallback(function(l,x){var v=m.validationSchema,_=ae(v)?v(x):v,k=x&&_.validateAt?_.validateAt(x,l):Nc(l,_);return new Promise(function($,H){k.then(function(){$(Fe)},function(pe){pe.name==="ValidationError"?$(Ac(pe)):H(pe)})})},[m.validationSchema]),Sn=h.useCallback(function(l,x){return new Promise(function(v){return v(Te.current[l].validate(x))})},[]),Mn=h.useCallback(function(l){var x=Object.keys(Te.current).filter(function(_){return ae(Te.current[_].validate)}),v=x.length>0?x.map(function(_){return Sn(_,J(l,_))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(v).then(function(_){return _.reduce(function(k,$,H){return $==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||$&&(k=Re(k,x[H],$)),k},{})})},[Sn]),hs=h.useCallback(function(l){return Promise.all([Mn(l),m.validationSchema?ur(l):{},m.validate?_n(l):{}]).then(function(x){var v=x[0],_=x[1],k=x[2],$=Tr.all([v,_,k],{arrayMerge:Rc});return $})},[m.validate,m.validationSchema,Mn,_n,ur]),ne=Q(function(l){return l===void 0&&(l=N.values),Y({type:"SET_ISVALIDATING",payload:!0}),hs(l).then(function(x){return b.current&&(Y({type:"SET_ISVALIDATING",payload:!1}),Y({type:"SET_ERRORS",payload:x})),x})});h.useEffect(function(){s&&b.current===!0&&Pe(T.current,m.initialValues)&&ne(T.current)},[s,ne]);var st=h.useCallback(function(l){var x=l&&l.values?l.values:T.current,v=l&&l.errors?l.errors:O.current?O.current:m.initialErrors||{},_=l&&l.touched?l.touched:P.current?P.current:m.initialTouched||{},k=l&&l.status?l.status:U.current?U.current:m.initialStatus;T.current=x,O.current=v,P.current=_,U.current=k;var $=function(){Y({type:"RESET_FORM",payload:{isSubmitting:!!l&&!!l.isSubmitting,errors:v,touched:_,status:k,values:x,isValidating:!!l&&!!l.isValidating,submitCount:l&&l.submitCount&&typeof l.submitCount=="number"?l.submitCount:0}})};if(m.onReset){var H=m.onReset(N.values,Pn);wr(H)?H.then($):$()}else $()},[m.initialErrors,m.initialStatus,m.initialTouched,m.onReset]);h.useEffect(function(){b.current===!0&&!Pe(T.current,m.initialValues)&&c&&(T.current=m.initialValues,st(),s&&ne(T.current))},[c,m.initialValues,st,s,ne]),h.useEffect(function(){c&&b.current===!0&&!Pe(O.current,m.initialErrors)&&(O.current=m.initialErrors||Fe,Y({type:"SET_ERRORS",payload:m.initialErrors||Fe}))},[c,m.initialErrors]),h.useEffect(function(){c&&b.current===!0&&!Pe(P.current,m.initialTouched)&&(P.current=m.initialTouched||jt,Y({type:"SET_TOUCHED",payload:m.initialTouched||jt}))},[c,m.initialTouched]),h.useEffect(function(){c&&b.current===!0&&!Pe(U.current,m.initialStatus)&&(U.current=m.initialStatus,Y({type:"SET_STATUS",payload:m.initialStatus}))},[c,m.initialStatus,m.initialTouched]);var Cn=Q(function(l){if(Te.current[l]&&ae(Te.current[l].validate)){var x=J(N.values,l),v=Te.current[l].validate(x);return wr(v)?(Y({type:"SET_ISVALIDATING",payload:!0}),v.then(function(_){return _}).then(function(_){Y({type:"SET_FIELD_ERROR",payload:{field:l,value:_}}),Y({type:"SET_ISVALIDATING",payload:!1})})):(Y({type:"SET_FIELD_ERROR",payload:{field:l,value:v}}),Promise.resolve(v))}else if(m.validationSchema)return Y({type:"SET_ISVALIDATING",payload:!0}),ur(N.values,l).then(function(_){return _}).then(function(_){Y({type:"SET_FIELD_ERROR",payload:{field:l,value:J(_,l)}}),Y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),fs=h.useCallback(function(l,x){var v=x.validate;Te.current[l]={validate:v}},[]),ms=h.useCallback(function(l){delete Te.current[l]},[]),Tn=Q(function(l,x){Y({type:"SET_TOUCHED",payload:l});var v=x===void 0?a:x;return v?ne(N.values):Promise.resolve()}),kn=h.useCallback(function(l){Y({type:"SET_ERRORS",payload:l})},[]),On=Q(function(l,x){var v=ae(l)?l(N.values):l;Y({type:"SET_VALUES",payload:v});var _=x===void 0?r:x;return _?ne(v):Promise.resolve()}),Dt=h.useCallback(function(l,x){Y({type:"SET_FIELD_ERROR",payload:{field:l,value:x}})},[]),He=Q(function(l,x,v){Y({type:"SET_FIELD_VALUE",payload:{field:l,value:x}});var _=v===void 0?r:v;return _?ne(Re(N.values,l,x)):Promise.resolve()}),Dn=h.useCallback(function(l,x){var v=x,_=l,k;if(!vr(l)){l.persist&&l.persist();var $=l.target?l.target:l.currentTarget,H=$.type,pe=$.name,mr=$.id,pr=$.value,Ss=$.checked,Nm=$.outerHTML,Yn=$.options,Ms=$.multiple;v=x||pe||mr,_=/number|range/.test(H)?(k=parseFloat(pr),isNaN(k)?"":k):/checkbox/.test(H)?Wc(J(N.values,v),Ss,pr):Yn&&Ms?Ic(Yn):pr}v&&He(v,_)},[He,N.values]),dr=Q(function(l){if(vr(l))return function(x){return Dn(x,l)};Dn(l)}),ze=Q(function(l,x,v){x===void 0&&(x=!0),Y({type:"SET_FIELD_TOUCHED",payload:{field:l,value:x}});var _=v===void 0?a:v;return _?ne(N.values):Promise.resolve()}),jn=h.useCallback(function(l,x){l.persist&&l.persist();var v=l.target,_=v.name,k=v.id,$=v.outerHTML,H=x||_||k;ze(H,!0)},[ze]),cr=Q(function(l){if(vr(l))return function(x){return jn(x,l)};jn(l)}),En=h.useCallback(function(l){ae(l)?Y({type:"SET_FORMIK_STATE",payload:l}):Y({type:"SET_FORMIK_STATE",payload:function(){return l}})},[]),Fn=h.useCallback(function(l){Y({type:"SET_STATUS",payload:l})},[]),$n=h.useCallback(function(l){Y({type:"SET_ISSUBMITTING",payload:l})},[]),hr=Q(function(){return Y({type:"SUBMIT_ATTEMPT"}),ne().then(function(l){var x=l instanceof Error,v=!x&&Object.keys(l).length===0;if(v){var _;try{if(_=gs(),_===void 0)return}catch(k){throw k}return Promise.resolve(_).then(function(k){return b.current&&Y({type:"SUBMIT_SUCCESS"}),k}).catch(function(k){if(b.current)throw Y({type:"SUBMIT_FAILURE"}),k})}else if(b.current&&(Y({type:"SUBMIT_FAILURE"}),x))throw l})}),ps=Q(function(l){l&&l.preventDefault&&ae(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&ae(l.stopPropagation)&&l.stopPropagation(),hr().catch(function(x){console.warn("Warning: An unhandled error was caught from submitForm()",x)})}),Pn={resetForm:st,validateForm:ne,validateField:Cn,setErrors:kn,setFieldError:Dt,setFieldTouched:ze,setFieldValue:He,setStatus:Fn,setSubmitting:$n,setTouched:Tn,setValues:On,setFormikState:En,submitForm:hr},gs=Q(function(){return M(N.values,Pn)}),ys=Q(function(l){l&&l.preventDefault&&ae(l.preventDefault)&&l.preventDefault(),l&&l.stopPropagation&&ae(l.stopPropagation)&&l.stopPropagation(),st()}),xs=h.useCallback(function(l){return{value:J(N.values,l),error:J(N.errors,l),touched:!!J(N.touched,l),initialValue:J(T.current,l),initialTouched:!!J(P.current,l),initialError:J(O.current,l)}},[N.errors,N.touched,N.values]),vs=h.useCallback(function(l){return{setValue:function(v,_){return He(l,v,_)},setTouched:function(v,_){return ze(l,v,_)},setError:function(v){return Dt(l,v)}}},[He,ze,Dt]),ws=h.useCallback(function(l){var x=Jt(l),v=x?l.name:l,_=J(N.values,v),k={name:v,value:_,onChange:dr,onBlur:cr};if(x){var $=l.type,H=l.value,pe=l.as,mr=l.multiple;$==="checkbox"?H===void 0?k.checked=!!_:(k.checked=!!(Array.isArray(_)&&~_.indexOf(H)),k.value=H):$==="radio"?(k.checked=_===H,k.value=H):pe==="select"&&mr&&(k.value=k.value||[],k.multiple=!0)}return k},[cr,dr,N.values]),fr=h.useMemo(function(){return!Pe(T.current,N.values)},[T.current,N.values]),bs=h.useMemo(function(){return typeof u<"u"?fr?N.errors&&Object.keys(N.errors).length===0:u!==!1&&ae(u)?u(m):u:N.errors&&Object.keys(N.errors).length===0},[u,fr,N.errors,m]),_s=z({},N,{initialValues:T.current,initialErrors:O.current,initialTouched:P.current,initialStatus:U.current,handleBlur:cr,handleChange:dr,handleReset:ys,handleSubmit:ps,resetForm:st,setErrors:kn,setFormikState:En,setFieldTouched:ze,setFieldValue:He,setFieldError:Dt,setStatus:Fn,setSubmitting:$n,setTouched:Tn,setValues:On,submitForm:hr,validateForm:ne,validateField:Cn,isValid:bs,dirty:fr,unregisterField:ms,registerField:fs,getFieldProps:ws,getFieldMeta:xs,getFieldHelpers:vs,validateOnBlur:a,validateOnChange:r,validateOnMount:s});return _s}function Ac(e){var t={};if(e.inner){if(e.inner.length===0)return Re(t,e.path,e.message);for(var a=e.inner,r=Array.isArray(a),n=0,a=r?a:a[Symbol.iterator]();;){var i;if(r){if(n>=a.length)break;i=a[n++]}else{if(n=a.next(),n.done)break;i=n.value}var s=i;J(t,s.path)||(t=Re(t,s.path,s.message))}}return t}function Nc(e,t,r,n){r===void 0&&(r=!1);var a=Fr(e);return t[r?"validateSync":"validate"](a,{abortEarly:!1,context:n||a})}function Fr(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(a){return Array.isArray(a)===!0||Bn(a)?Fr(a):a!==""?a:void 0}):Bn(e[n])?t[n]=Fr(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function Rc(e,t,r){var n=e.slice();return t.forEach(function(i,s){if(typeof n[s]>"u"){var u=r.clone!==!1,d=u&&r.isMergeableObject(i);n[s]=d?Tr(Array.isArray(i)?[]:{},i,r):i}else r.isMergeableObject(i)?n[s]=Tr(e[s],i,r):e.indexOf(i)===-1&&n.push(i)}),n}function Ic(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function Wc(e,t,r){if(typeof e=="boolean")return!!t;var n=[],a=!1,i=-1;if(Array.isArray(e))n=e,i=e.indexOf(r),a=i>=0;else if(!r||r=="true"||r=="false")return!!t;return t&&r&&!a?n.concat(r):a?n.slice(0,i).concat(n.slice(i+1)):n}var Lc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?h.useLayoutEffect:h.useEffect;function Q(e){var t=h.useRef(e);return Lc(function(){t.current=e}),h.useCallback(function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.current.apply(void 0,n)},[])}var Vc=h.forwardRef(function(e,t){var r=e.action,n=ci(e,["action"]),a=r??"#",i=$c(),s=i.handleReset,u=i.handleSubmit;return h.createElement("form",z({onSubmit:u,ref:t,onReset:s,action:a},n))});Vc.displayName="Form";const mi=e=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("g",{id:"minus-small/solid"},h.createElement("path",{id:"Vector",fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12Z",fill:"#407BFF"}))),Kr=e=>h.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M8 4V12M12 8H4",stroke:"#407BFF",strokeLinecap:"round",strokeLinejoin:"round"})),Jr=e=>h.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M6.26099 3.13043L8.39972 32.7888V32.8696H26.8122L28.9509 3.22275V3.13043H6.26099ZM26.0557 32.0387H9.16193L7.55788 9.82376H8.43954L9.89002 29.4017C9.89851 29.5048 9.94461 29.601 10.0193 29.6714C10.094 29.7418 10.1919 29.7815 10.2939 29.7826H10.328C10.3811 29.7789 10.4329 29.7646 10.4806 29.7406C10.5282 29.7165 10.5707 29.6832 10.6056 29.6424C10.6404 29.6017 10.667 29.5544 10.6838 29.5031C10.7006 29.4519 10.7073 29.3979 10.7034 29.344L9.25294 9.82376H27.6597L26.0557 32.0387ZM27.7166 8.99286H9.19037L8.87184 4.66528C8.86183 4.5597 8.81293 4.46184 8.7349 4.39125C8.65687 4.32065 8.55546 4.28251 8.45092 4.28445C8.34378 4.29473 8.24477 4.34679 8.17474 4.42968C8.1047 4.51256 8.06913 4.61978 8.0755 4.72875L8.39404 8.99863H7.501L7.13696 3.95556H28.0807L27.7166 8.99286Z",fill:"#407BFF"}),h.createElement("path",{d:"M12.7797 13.9321C13.0452 13.9321 13.3047 13.8522 13.5255 13.7026C13.7462 13.553 13.9183 13.3403 14.0199 13.0914C14.1215 12.8426 14.1481 12.5688 14.0963 12.3047C14.0445 12.0405 13.9166 11.7979 13.7289 11.6074C13.5411 11.417 13.3019 11.2873 13.0415 11.2348C12.7811 11.1822 12.5112 11.2092 12.2659 11.3122C12.0206 11.4153 11.811 11.5898 11.6635 11.8138C11.516 12.0377 11.4373 12.301 11.4373 12.5703C11.4373 12.9315 11.5787 13.2779 11.8304 13.5332C12.0822 13.7886 12.4236 13.9321 12.7797 13.9321ZM12.7797 12.0337C12.8843 12.0337 12.9866 12.0652 13.0735 12.1241C13.1605 12.1831 13.2283 12.2669 13.2684 12.365C13.3084 12.463 13.3189 12.5709 13.2985 12.675C13.2781 12.7791 13.2277 12.8747 13.1537 12.9498C13.0797 13.0248 12.9855 13.0759 12.8829 13.0966C12.7802 13.1173 12.6739 13.1067 12.5772 13.0661C12.4806 13.0255 12.3979 12.9567 12.3398 12.8685C12.2817 12.7802 12.2507 12.6765 12.2507 12.5703C12.2507 12.428 12.3064 12.2915 12.4056 12.1909C12.5048 12.0902 12.6394 12.0337 12.7797 12.0337Z",fill:"#407BFF"}),h.createElement("path",{d:"M12.7738 18.3578C12.7772 18.6266 12.8589 18.8883 13.0087 19.1101C13.1585 19.3319 13.3696 19.5037 13.6155 19.604C13.8614 19.7042 14.1311 19.7284 14.3905 19.6734C14.6499 19.6185 14.8875 19.4869 15.0733 19.2952C15.2591 19.1035 15.3848 18.8603 15.4346 18.5962C15.4844 18.3322 15.456 18.0591 15.353 17.8114C15.2501 17.5637 15.0772 17.3524 14.856 17.2042C14.6349 17.0561 14.3755 16.9776 14.1105 16.9787C13.9332 16.9794 13.7579 17.0158 13.5946 17.0856C13.4312 17.1555 13.2832 17.2575 13.1589 17.3857C13.0346 17.5139 12.9366 17.6658 12.8705 17.8327C12.8044 17.9995 12.7715 18.178 12.7738 18.3578ZM14.6395 18.3578C14.6395 18.4639 14.6085 18.5676 14.5503 18.6559C14.4922 18.7441 14.4096 18.8129 14.3129 18.8535C14.2163 18.8941 14.1099 18.9048 14.0073 18.8841C13.9047 18.8634 13.8104 18.8122 13.7364 18.7372C13.6625 18.6622 13.6121 18.5665 13.5917 18.4624C13.5713 18.3583 13.5817 18.2505 13.6218 18.1524C13.6618 18.0543 13.7296 17.9705 13.8166 17.9116C13.9036 17.8526 14.0059 17.8211 14.1105 17.8211C14.2508 17.8211 14.3854 17.8777 14.4846 17.9783C14.5838 18.0789 14.6395 18.2154 14.6395 18.3578Z",fill:"#407BFF"}),h.createElement("path",{d:"M22.3129 18.3924C22.5784 18.3924 22.8379 18.3125 23.0587 18.1629C23.2794 18.0132 23.4515 17.8006 23.5531 17.5517C23.6547 17.3029 23.6813 17.0291 23.6295 16.765C23.5777 16.5008 23.4498 16.2582 23.2621 16.0677C23.0743 15.8773 22.8351 15.7476 22.5747 15.6951C22.3143 15.6425 22.0444 15.6695 21.7991 15.7725C21.5539 15.8756 21.3442 16.0501 21.1967 16.2741C21.0492 16.498 20.9705 16.7613 20.9705 17.0306C20.9705 17.3918 21.1119 17.7382 21.3636 17.9935C21.6154 18.2489 21.9568 18.3924 22.3129 18.3924ZM22.3129 16.4998C22.4177 16.4998 22.5202 16.5314 22.6073 16.5906C22.6944 16.6499 22.7622 16.734 22.8021 16.8324C22.842 16.9308 22.8521 17.039 22.8312 17.1432C22.8104 17.2475 22.7594 17.3431 22.6849 17.4179C22.6103 17.4927 22.5155 17.5434 22.4125 17.5634C22.3095 17.5835 22.203 17.572 22.1064 17.5305C22.0099 17.489 21.9277 17.4193 21.8702 17.3303C21.8128 17.2413 21.7827 17.137 21.7839 17.0306C21.7854 16.8893 21.8418 16.7543 21.9408 16.6549C22.0398 16.5555 22.1735 16.4998 22.3129 16.4998Z",fill:"#407BFF"}),h.createElement("path",{d:"M17.6373 15.8247C17.9028 15.8247 18.1624 15.7448 18.3831 15.5952C18.6039 15.4455 18.7759 15.2329 18.8775 14.984C18.9791 14.7352 19.0057 14.4614 18.9539 14.1972C18.9021 13.9331 18.7743 13.6905 18.5865 13.5C18.3988 13.3096 18.1596 13.1799 17.8992 13.1273C17.6388 13.0748 17.3689 13.1018 17.1236 13.2048C16.8783 13.3079 16.6687 13.4824 16.5212 13.7064C16.3737 13.9303 16.2949 14.1936 16.2949 14.4629C16.2949 14.8241 16.4364 15.1704 16.6881 15.4258C16.9399 15.6812 17.2813 15.8247 17.6373 15.8247ZM17.6373 13.9263C17.7419 13.9263 17.8442 13.9578 17.9312 14.0167C18.0182 14.0757 18.086 14.1595 18.126 14.2576C18.1661 14.3556 18.1766 14.4635 18.1562 14.5676C18.1357 14.6717 18.0854 14.7673 18.0114 14.8424C17.9374 14.9174 17.8431 14.9685 17.7405 14.9892C17.6379 15.0099 17.5315 14.9993 17.4349 14.9587C17.3382 14.9181 17.2556 14.8493 17.1975 14.761C17.1394 14.6728 17.1083 14.569 17.1083 14.4629C17.1045 14.3901 17.1153 14.3172 17.1401 14.2487C17.165 14.1802 17.2033 14.1176 17.2528 14.0647C17.3024 14.0117 17.362 13.9696 17.4281 13.9409C17.4942 13.9121 17.5654 13.8973 17.6373 13.8974V13.9263Z",fill:"#407BFF"}),h.createElement("path",{d:"M15.0776 23.5451C15.0832 23.7663 15.153 23.9809 15.2782 24.1621C15.4035 24.3433 15.5786 24.483 15.7817 24.5638C15.9848 24.6446 16.2069 24.6628 16.4201 24.6161C16.6334 24.5695 16.8283 24.4602 16.9806 24.3017C17.1329 24.1433 17.2358 23.9428 17.2763 23.7253C17.3169 23.5079 17.2933 23.2832 17.2086 23.0792C17.1239 22.8753 16.9817 22.7013 16.8 22.5789C16.6183 22.4564 16.405 22.3911 16.1868 22.3911C15.8901 22.3986 15.608 22.5235 15.4007 22.7391C15.1935 22.9547 15.0775 23.2439 15.0776 23.5451ZM16.1868 23.245C16.2453 23.245 16.3025 23.2626 16.3512 23.2956C16.3998 23.3286 16.4377 23.3754 16.4601 23.4302C16.4825 23.4851 16.4883 23.5454 16.4769 23.6036C16.4655 23.6618 16.4373 23.7153 16.396 23.7572C16.3546 23.7992 16.3019 23.8278 16.2445 23.8394C16.1872 23.8509 16.1277 23.845 16.0736 23.8223C16.0196 23.7996 15.9734 23.7611 15.9409 23.7118C15.9084 23.6624 15.891 23.6044 15.891 23.5451C15.891 23.4655 15.9222 23.3892 15.9777 23.3329C16.0331 23.2766 16.1084 23.245 16.1868 23.245Z",fill:"#407BFF"}),h.createElement("path",{d:"M20.4414 22.2929C20.6691 22.301 20.894 22.2394 21.0868 22.1163C21.2797 21.9932 21.4317 21.8142 21.523 21.6024C21.6144 21.3907 21.641 21.1559 21.5994 20.9287C21.5577 20.7014 21.4497 20.4921 21.2894 20.3278C21.1292 20.1635 20.9239 20.0519 20.7003 20.0073C20.4767 19.9627 20.2451 19.9872 20.0354 20.0777C19.8258 20.1682 19.6477 20.3205 19.5244 20.5149C19.401 20.7092 19.338 20.9367 19.3436 21.1678C19.3507 21.4619 19.4683 21.7423 19.6723 21.9514C19.8764 22.1606 20.1515 22.2827 20.4414 22.2929ZM20.4414 20.8677C20.5199 20.8677 20.5951 20.8993 20.6506 20.9556C20.706 21.0119 20.7372 21.0882 20.7372 21.1678C20.7372 21.2474 20.706 21.3237 20.6506 21.3799C20.5951 21.4362 20.5199 21.4678 20.4414 21.4678C20.3624 21.4678 20.2866 21.4364 20.2302 21.3803C20.1738 21.3242 20.1414 21.2479 20.1399 21.1678C20.1399 21.1279 20.1478 21.0884 20.163 21.0516C20.1782 21.0148 20.2005 20.9815 20.2286 20.9535C20.2566 20.9256 20.2899 20.9036 20.3265 20.8889C20.363 20.8742 20.4021 20.867 20.4414 20.8677Z",fill:"#407BFF"}),h.createElement("path",{d:"M22.7851 12.98C23.0101 12.98 23.23 12.9123 23.4171 12.7855C23.6042 12.6587 23.75 12.4785 23.8361 12.2676C23.9222 12.0567 23.9448 11.8247 23.9009 11.6008C23.857 11.377 23.7486 11.1714 23.5895 11.01C23.4304 10.8486 23.2277 10.7387 23.007 10.6941C22.7863 10.6496 22.5576 10.6725 22.3497 10.7598C22.1419 10.8472 21.9642 10.9951 21.8392 11.1848C21.7142 11.3746 21.6475 11.5977 21.6475 11.826C21.6475 12.1321 21.7673 12.4256 21.9807 12.642C22.194 12.8584 22.4834 12.98 22.7851 12.98ZM22.7851 11.5548C22.8291 11.542 22.8754 11.5398 22.9205 11.5483C22.9655 11.5568 23.0079 11.5758 23.0445 11.6038C23.081 11.6317 23.1107 11.6679 23.1311 11.7095C23.1515 11.7511 23.1621 11.7969 23.1621 11.8433C23.1621 11.8897 23.1515 11.9355 23.1311 11.9771C23.1107 12.0187 23.081 12.0549 23.0445 12.0828C23.0079 12.1108 22.9655 12.1298 22.9205 12.1383C22.8754 12.1468 22.8291 12.1446 22.7851 12.1318C22.7411 12.1446 22.6947 12.1468 22.6497 12.1383C22.6047 12.1298 22.5623 12.1108 22.5257 12.0828C22.4892 12.0549 22.4595 12.0187 22.4391 11.9771C22.4187 11.9355 22.4081 11.8897 22.4081 11.8433C22.4081 11.7969 22.4187 11.7511 22.4391 11.7095C22.4595 11.6679 22.4892 11.6317 22.5257 11.6038C22.5623 11.5758 22.6047 11.5568 22.6497 11.5483C22.6947 11.5398 22.7411 11.542 22.7851 11.5548Z",fill:"#407BFF"}),h.createElement("path",{d:"M11.6646 30.5904C11.6136 30.6142 11.568 30.6485 11.5306 30.691C11.4931 30.7335 11.4647 30.7834 11.4471 30.8375C11.4295 30.8916 11.4231 30.9488 11.4282 31.0056C11.4333 31.0623 11.4499 31.1174 11.4769 31.1674C11.5119 31.2348 11.5642 31.2913 11.6283 31.3309C11.6924 31.3705 11.7659 31.3918 11.841 31.3924C11.904 31.3942 11.9665 31.3803 12.023 31.352C13.7609 30.4488 15.6845 29.9744 17.6372 29.9672C19.7037 29.9977 21.7414 30.4634 23.6211 31.3347C23.6955 31.3741 23.78 31.3894 23.8632 31.3785C23.9464 31.3675 24.0243 31.331 24.0863 31.2737C24.1484 31.2164 24.1916 31.1412 24.2101 31.0582C24.2286 30.9752 24.2216 30.8884 24.1899 30.8096C24.1499 30.7073 24.0724 30.6246 23.9738 30.5788C21.9837 29.6554 19.8254 29.164 17.6372 29.1363C15.5614 29.1381 13.5152 29.6363 11.6646 30.5904Z",fill:"#407BFF"})),Uc=p.div`
  width: 100vw;
  max-width: calc(280px - 24px);
  @media only screen and (min-width: 768px) {
    max-width: calc(704px - 48px);
  }

  @media only screen and (min-width: 1440px) {
    max-width: calc(592px - 48px);
  }
`,Gc=p.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  margin-bottom: 24px;
`,Bc=p.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`;p.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;const Hc=p.div`
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
    box-shadow: ${e=>e.theme.shadows.secondaryButtonShadow};

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
`,zc=p(Kr)`
  stroke: ${e=>e.theme.colors.primaryBlue};
`,Zc=p(mi)`
  stroke: ${e=>e.theme.colors.primaryBlue};
  fill: ${e=>e.theme.colors.primaryBlue};
`,qc=p.form`
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
    background-color: ${e=>e.theme.colors.mainBg};
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
`,Kc=p.div`
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
`;p.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${e=>e.theme.colors.secondaryBg};
  margin-bottom: 24px;
`;p(Jr)`
  width: 36px;
  height: 36px;
`;const Jc=p.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`;p.p`
  font-size: 12px;
  line-height: 2;
`;const xa=20,pi=({onClose:e})=>{const t=Ht(),{t:r}=ce(),[n,a]=h.useState(250),{handleChange:i,handleSubmit:s,values:{date:u,waterAmount:d},errors:c,setFieldValue:M}=fi({initialValues:{waterAmount:"250",date:`${Ne(new Date,"HH")}:${Ne(new Date,"mm")}`},onSubmit:O=>{t(Es(O)).unwrap().then(()=>{t(e())})}}),C=()=>{M("waterAmount",n?n.toString():"0")},m=()=>{const O=Number.parseInt(d)+xa;M("waterAmount",O.toString())},T=()=>{const O=Number.parseInt(d)-xa;M("waterAmount",O<=0?"0":O.toString())};return o.jsxs(Uc,{onSubmit:s,children:[o.jsx(Gc,{children:r("addWater")}),o.jsx(Bc,{children:r("addModal.Choose a value")}),o.jsxs(Jc,{children:[r("addModal.Amount of water"),":"]}),o.jsxs(Hc,{children:[o.jsxs("button",{onClick:T,name:"minus",type:"button",children:[o.jsx(Zc,{"aria-label":"minus_button"})," "]}),o.jsxs("span",{className:"water-amount-value",children:[d,r("ml")]}),o.jsxs("button",{onClick:m,name:"plus",type:"button",children:[o.jsx(zc,{"aria-label":"plus_button"})," "]})]}),o.jsxs(qc,{children:[o.jsxs("label",{children:[r("addModal.Recording time"),":",o.jsx("input",{name:"date",type:"time",value:u,onBlur:i}),c.date?o.jsx("div",{children:c.date}):null]}),o.jsxs("label",{children:[r("addModal.Enter the value of the water used"),":",o.jsx("input",{name:"number",value:n,onBlur:C,onChange:({target:{value:O}})=>a(Number.parseInt(O))}),c.waterAmount?o.jsx("div",{children:c.waterAmount}):null]}),o.jsxs(Kc,{children:[o.jsxs("p",{children:[d,r("ml")]}),o.jsx("button",{disabled:Object.keys(c).length>0,type:"submit",children:r("save")})]})]})]})},gi=e=>e.water.waterVolumes,Xc=e=>e.water.stats,Qc=e=>e.water.percentage,e1=()=>{const e=tt(Qc);console.log("!!!",e);const[t,r]=h.useState(!1),[n,a]=h.useState(!1),{t:i}=ce(),s=d=>{r(!0),a(!1),d.stopPropagation()},u=()=>{r(!1)};return o.jsxs(Xs,{children:[o.jsxs(Qs,{children:[o.jsx(eo,{children:i("today")}),o.jsx(to,{type:"range",min:"0",max:"100",value:e,disabled:!0}),o.jsxs(ro,{$rater:e,children:[o.jsx("span",{children:"0%"}),o.jsx("span",{children:"50%"}),o.jsx("span",{children:"100%"})]})]}),o.jsxs(no,{onClick:d=>s(d),children:[o.jsx("svg",{width:24,height:24,children:o.jsx("use",{href:`${Fs}#plus-circle`})}),i("addWater")]}),t&&o.jsx(It,{$position:"center",open:t,onClose:u,children:o.jsx(pi,{onClose:u,isEditing:n})})]})},t1="/capybara-components-frontend/assets/bg-home-desktop-0559d8bf.svg",r1="/capybara-components-frontend/assets/bg-home-tablet-01106aec.svg",n1="/capybara-components-frontend/assets/bg-home-mob-0d03cb1d.svg",a1=p($s)`
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
`,i1=p.div`
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
`,s1=p.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
  }
`,o1=p.div`
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);
  background-image: url(${n1});
  background-position: calc(50% + 3px) 44px;
  
  @media only screen and (min-width: 768px) {
    min-height: calc(100% - 80px);
    background-image: url(${r1});
    background-position: calc(50% + 9px) 8px;
  }

  @media only screen and (min-width: 1440px) {
    min-height: calc(100% - 72px);
    background-image: url(${t1});
    background-position: calc(50% - 10px) 46px;
  }
`;function dt(e,t){if(e.one!==void 0&&t===1)return e.one;const r=t%10,n=t%100;return r===1&&n!==11?e.singularNominative.replace("{{count}}",String(t)):r>=2&&r<=4&&(n<10||n>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function q(e){return(t,r)=>r&&r.addSuffix?r.comparison&&r.comparison>0?e.future?dt(e.future,t):"за "+dt(e.regular,t):e.past?dt(e.past,t):dt(e.regular,t)+" тому":dt(e.regular,t)}const l1=(e,t)=>t&&t.addSuffix?t.comparison&&t.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",u1={lessThanXSeconds:q({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:q({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:l1,lessThanXMinutes:q({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:q({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:q({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:q({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:q({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:q({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:q({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:q({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:q({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:q({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:q({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:q({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:q({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},d1=(e,t,r)=>(r=r||{},u1[e](t,r)),c1={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},h1={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},f1={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},m1={date:gr({formats:c1,defaultWidth:"full"}),time:gr({formats:h1,defaultWidth:"full"}),dateTime:gr({formats:f1,defaultWidth:"full"})},Xr=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function p1(e){const t=Xr[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function yi(e){return"'у "+Xr[e]+" о' p"}function g1(e){const t=Xr[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}const y1=(e,t,r)=>{const n=Aa(e),a=n.getDay();return Na(n,t,r)?yi(a):p1(a)},x1=(e,t,r)=>{const n=Aa(e),a=n.getDay();return Na(n,t,r)?yi(a):g1(a)},v1={lastWeek:y1,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:x1,other:"P"},w1=(e,t,r,n)=>{const a=v1[e];return typeof a=="function"?a(t,r,n):a},b1={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},_1={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},S1={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},M1={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},C1={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},T1={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},k1={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},O1=(e,t)=>{const r=String(t==null?void 0:t.unit),n=Number(e);let a;return r==="date"?n===3||n===23?a="-є":a="-е":r==="minute"||r==="second"||r==="hour"?a="-а":a="-й",n+a},D1={ordinalNumber:O1,era:ot({values:b1,defaultWidth:"wide"}),quarter:ot({values:_1,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ot({values:S1,defaultWidth:"wide",formattingValues:M1,defaultFormattingWidth:"wide"}),day:ot({values:C1,defaultWidth:"wide"}),dayPeriod:ot({values:T1,defaultWidth:"any",formattingValues:k1,defaultFormattingWidth:"wide"})},j1=/^(\d+)(-?(е|й|є|а|я))?/i,E1=/\d+/i,F1={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},$1={any:[/^д/i,/^н/i]},P1={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},Y1={any:[/1/i,/2/i,/3/i,/4/i]},A1={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},N1={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},R1={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},I1={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},W1={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},L1={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},V1={ordinalNumber:Ps({matchPattern:j1,parsePattern:E1,valueCallback:e=>parseInt(e,10)}),era:lt({matchPatterns:F1,defaultMatchWidth:"wide",parsePatterns:$1,defaultParseWidth:"any"}),quarter:lt({matchPatterns:P1,defaultMatchWidth:"wide",parsePatterns:Y1,defaultParseWidth:"any",valueCallback:e=>e+1}),month:lt({matchPatterns:A1,defaultMatchWidth:"wide",parsePatterns:N1,defaultParseWidth:"any"}),day:lt({matchPatterns:R1,defaultMatchWidth:"wide",parsePatterns:I1,defaultParseWidth:"any"}),dayPeriod:lt({matchPatterns:W1,defaultMatchWidth:"wide",parsePatterns:L1,defaultParseWidth:"any"})},U1={code:"uk",formatDistance:d1,formatLong:m1,formatRelative:w1,localize:D1,match:V1,options:{weekStartsOn:1,firstWeekContainsDate:1}},va=U1,G1=p.li`
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
`,B1=p.span`
  color: ${e=>e.theme.colors.secondaryBlue};
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
`,H1=p.button`
  display: flex;
  margin-left: auto;
  border: none;
  background: white;
`,z1=p.button`
  min-width: 32px;
  min-height: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  color: ${e=>e.theme.colors.textColor};
  background-color: ${e=>e.theme.colors.mainBg};
  border-radius: 50%;
  padding: 0px;
  box-shadow: ${e=>e.theme.shadows.buttonShadow};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.colors.mainBg};
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
`,Z1=p.span`
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
`,Et=p.span`
  color: ${e=>e.theme.colors.textColor};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`,Ft=p.span`
  color: ${e=>e.theme.colors.primaryBlue};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`,q1=({item:e,index:t,monthName:r})=>{const{waterVolumePercentage:n,dailyNorma:a,portions:i}=e,{t:s}=ce();return o.jsxs(Z1,{children:[o.jsx(Et,{children:o.jsxs(Ft,{children:[t+1,", ",r]})}),o.jsxs(Et,{children:[s("dayStatistics.Daily norma"),": ",o.jsx(Ft,{children:a})]}),o.jsxs(Et,{children:[s("dayStatistics.Fulfillment of the daily norm"),":"," ",o.jsxs(Ft,{children:[n,"%"]})]}),o.jsxs(Et,{children:[s("dayStatistics.How many servings of water"),":"," ",o.jsx(Ft,{children:i})]})]})},K1=e=>h.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("g",{id:"x-mark/outline"},h.createElement("path",{id:"Vector",d:"M4 12L12 4M4 4L12 12",stroke:"#407BFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))),J1=({item:e,index:t,monthName:r})=>{const[n,a]=h.useState(null),{waterVolumePercentage:i}=e,s=M=>{a(M.currentTarget)},u=()=>{a(null)},d=!!n,c=d?"simple-popover":void 0;return o.jsxs(G1,{children:[o.jsx(z1,{"aria-describedby":c,onClick:s,style:{border:i>=100?"none":"1px solid",borderColor:i>=100?"transparent":"#ff9d43"},children:t+1}),o.jsxs(B1,{children:[i,"%"]}),o.jsx(Ys,{id:c,open:d,anchorEl:n,onClose:u,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:o.jsxs(As,{sx:{p:2},style:{minWidth:"292px",minHeight:"188px",padding:"24px 16px",borderRadius:"10px",boxShadow:"0px 4px 4px 0px rgba(64, 123, 255, 0.3)"},children:[o.jsx(H1,{onClick:u,children:o.jsx(K1,{})}),o.jsx(q1,{item:e,index:t,monthName:r})]})})]})},X1=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Q1=p.div`
  display: flex;
  gap: 12px;

  span {
    color: ${e=>e.theme.colors.primaryBlue};
    font-size: 16px;
    line-height: 1.25;
  }
`,eh=p.ul`
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
`,th=p.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,wa=p.button`
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: ${({disabled:e})=>e?"default":"pointer"};

  svg {
    width: 5px;
    height: 10px;
  }
`,rh=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e],nh=(e,t)=>new Date(t,e+1,0).getDate(),ba=e=>{const t=e==null?void 0:e.split(", ");return parseInt((t==null?void 0:t[0])??0)},ah=(e,t)=>Array.from({length:e},(r,n)=>({date:`${n+1}, ${t}`,portions:0,waterVolumePercentage:0,dailyNorma:0})),ih=e=>h.createElement("svg",{width:5.260498,height:9.64682,viewBox:"0 0 5.2605 9.64682",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},h.createElement("desc",null,`
			Created with Pixso.
	`),h.createElement("defs",null),h.createElement("path",{id:"Vector",d:"M0.12793 5.13257C0.0458984 5.05054 0 4.93936 0 4.82343C0 4.70749 0.0458984 4.59628 0.12793 4.51425L4.50293 0.139252C4.54297 0.0962524 4.59131 0.0617981 4.64502 0.0378723C4.69873 0.0139771 4.75659 0.00109863 4.81543 6.10352e-05C4.87402 -0.000976562 4.93237 0.00982666 4.98682 0.0318298C5.04126 0.053833 5.09082 0.0866089 5.13232 0.128143C5.17383 0.169678 5.20679 0.219177 5.22876 0.273651C5.25073 0.328125 5.26147 0.386475 5.2605 0.445221C5.25952 0.503967 5.24658 0.56189 5.22266 0.61557C5.19873 0.66922 5.16431 0.717529 5.12134 0.757568L1.05542 4.82343L5.12134 8.88925C5.16431 8.92929 5.19873 8.9776 5.22266 9.03125C5.24658 9.08493 5.25952 9.14285 5.2605 9.2016C5.26147 9.26035 5.25073 9.3187 5.22876 9.37317C5.20679 9.42764 5.17383 9.47714 5.13232 9.51868C5.09082 9.56024 5.04126 9.59299 4.98682 9.61499C4.93237 9.63699 4.87402 9.6478 4.81543 9.64676C4.75659 9.64572 4.69873 9.63287 4.64502 9.60895C4.59131 9.58505 4.54297 9.55057 4.50293 9.50757L0.12793 5.13257Z",fill:"#407BFF",fillOpacity:1,fillRule:"evenodd"})),sh=e=>h.createElement("svg",{width:5.260498,height:9.64682,viewBox:"0 0 5.2605 9.64682",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...e},h.createElement("desc",null,`
			Created with Pixso.
	`),h.createElement("defs",null),h.createElement("path",{id:"Vector",d:"M5.13257 5.13257C5.2146 5.05054 5.2605 4.93936 5.2605 4.82343C5.2605 4.70749 5.2146 4.59628 5.13257 4.51425L0.757568 0.139252C0.717529 0.0962524 0.669189 0.0617981 0.615479 0.0378723C0.561768 0.0139771 0.503906 0.00109863 0.445068 6.10352e-05C0.386475 -0.000976562 0.328125 0.00982666 0.273682 0.0318298C0.219238 0.053833 0.169678 0.0866089 0.128174 0.128143C0.0866699 0.169678 0.0537109 0.219177 0.0317383 0.273651C0.00976562 0.328125 -0.000976562 0.386475 0 0.445221C0.000976562 0.503967 0.013916 0.56189 0.0378418 0.61557C0.0617676 0.66922 0.0961914 0.717529 0.13916 0.757568L4.20508 4.82343L0.13916 8.88925C0.0961914 8.92929 0.0617676 8.9776 0.0378418 9.03125C0.013916 9.08493 0.000976562 9.14285 0 9.2016C-0.000976562 9.26035 0.00976562 9.3187 0.0317383 9.37317C0.0537109 9.42764 0.0866699 9.47714 0.128174 9.51868C0.169678 9.56024 0.219238 9.59299 0.273682 9.61499C0.328125 9.63699 0.386475 9.6478 0.445068 9.64676C0.503906 9.64572 0.561768 9.63287 0.615479 9.60895C0.669189 9.58505 0.717529 9.55057 0.757568 9.50757L5.13257 5.13257Z",fill:"#407BFF",fillOpacity:1,fillRule:"evenodd"})),br=new Date,oh=()=>{const e=tt(Xc),[t,r]=h.useState(br.getMonth()),[n,a]=h.useState(br.getFullYear()),i=Ht(),{i18n:s}=ce(),u=rh(t),d=nh(t,n),c=ah(d,u),M=c==null?void 0:c.map(T=>Object.values(e).find(P=>ba(P.date)===ba(T.date))||T);h.useEffect(()=>{i(Ns({year:n,month:t+1}))},[i,n,t]);const C=()=>{t===0?(a(T=>T-1),r(11)):r(T=>T-1)},m=()=>{t===11?(a(T=>T+1),r(0)):r(T=>T+1)};return o.jsxs(o.Fragment,{children:[o.jsxs(X1,{children:[o.jsx(th,{children:s.t("month")}),o.jsxs(Q1,{children:[o.jsx(wa,{onClick:C,children:o.jsx(ih,{})}),o.jsxs("span",{style:{textTransform:"capitalize"},children:[Ne(new Date(n,t,1),"LLLL",{locale:s.language==="uk"?va:Ln}),", ",n]}),o.jsx(wa,{onClick:m,disabled:br<new Date(n,t+1),children:o.jsx(sh,{})})]})]}),o.jsx(eh,{children:M.map((T,O)=>{const P=Ne(new Date(n,t,O+1),"LLLL",{locale:s.language==="uk"?va:Ln});return o.jsx(J1,{item:T,index:O,monthName:P},O)})})]})},lh=p.div`
  margin-bottom: 24px;
`,uh=p.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  color: ${e=>e.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var xi;function g(){return xi.apply(null,arguments)}function dh(e){xi=e}function se(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ie(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Qr(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(E(e,t))return!1;return!0}function K(e){return e===void 0}function _e(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Mt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function vi(e,t){var r=[],n,a=e.length;for(n=0;n<a;++n)r.push(t(e[n],n));return r}function ke(e,t){for(var r in t)E(t,r)&&(e[r]=t[r]);return E(t,"toString")&&(e.toString=t.toString),E(t,"valueOf")&&(e.valueOf=t.valueOf),e}function fe(e,t,r,n){return Vi(e,t,r,n,!0).utc()}function ch(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function S(e){return e._pf==null&&(e._pf=ch()),e._pf}var $r;Array.prototype.some?$r=Array.prototype.some:$r=function(e){var t=Object(this),r=t.length>>>0,n;for(n=0;n<r;n++)if(n in t&&e.call(this,t[n],n,t))return!0;return!1};function en(e){var t=null,r=!1,n=e._d&&!isNaN(e._d.getTime());if(n&&(t=S(e),r=$r.call(t.parsedDateParts,function(a){return a!=null}),n=t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&r),e._strict&&(n=n&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=n;else return n;return e._isValid}function Xt(e){var t=fe(NaN);return e!=null?ke(S(t),e):S(t).userInvalidated=!0,t}var _a=g.momentProperties=[],_r=!1;function tn(e,t){var r,n,a,i=_a.length;if(K(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),K(t._i)||(e._i=t._i),K(t._f)||(e._f=t._f),K(t._l)||(e._l=t._l),K(t._strict)||(e._strict=t._strict),K(t._tzm)||(e._tzm=t._tzm),K(t._isUTC)||(e._isUTC=t._isUTC),K(t._offset)||(e._offset=t._offset),K(t._pf)||(e._pf=S(t)),K(t._locale)||(e._locale=t._locale),i>0)for(r=0;r<i;r++)n=_a[r],a=t[n],K(a)||(e[n]=a);return e}function Ct(e){tn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),_r===!1&&(_r=!0,g.updateOffset(this),_r=!1)}function oe(e){return e instanceof Ct||e!=null&&e._isAMomentObject!=null}function wi(e){g.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function te(e,t){var r=!0;return ke(function(){if(g.deprecationHandler!=null&&g.deprecationHandler(null,e),r){var n=[],a,i,s,u=arguments.length;for(i=0;i<u;i++){if(a="",typeof arguments[i]=="object"){a+=`
[`+i+"] ";for(s in arguments[0])E(arguments[0],s)&&(a+=s+": "+arguments[0][s]+", ");a=a.slice(0,-2)}else a=arguments[i];n.push(a)}wi(e+`
Arguments: `+Array.prototype.slice.call(n).join("")+`
`+new Error().stack),r=!1}return t.apply(this,arguments)},t)}var Sa={};function bi(e,t){g.deprecationHandler!=null&&g.deprecationHandler(e,t),Sa[e]||(wi(t),Sa[e]=!0)}g.suppressDeprecationWarnings=!1;g.deprecationHandler=null;function me(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function hh(e){var t,r;for(r in e)E(e,r)&&(t=e[r],me(t)?this[r]=t:this["_"+r]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Pr(e,t){var r=ke({},e),n;for(n in t)E(t,n)&&(Ie(e[n])&&Ie(t[n])?(r[n]={},ke(r[n],e[n]),ke(r[n],t[n])):t[n]!=null?r[n]=t[n]:delete r[n]);for(n in e)E(e,n)&&!E(t,n)&&Ie(e[n])&&(r[n]=ke({},r[n]));return r}function rn(e){e!=null&&this.set(e)}var Yr;Object.keys?Yr=Object.keys:Yr=function(e){var t,r=[];for(t in e)E(e,t)&&r.push(t);return r};var fh={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function mh(e,t,r){var n=this._calendar[e]||this._calendar.sameElse;return me(n)?n.call(t,r):n}function de(e,t,r){var n=""+Math.abs(e),a=t-n.length,i=e>=0;return(i?r?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+n}var nn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,$t=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Sr={},Je={};function w(e,t,r,n){var a=n;typeof n=="string"&&(a=function(){return this[n]()}),e&&(Je[e]=a),t&&(Je[t[0]]=function(){return de(a.apply(this,arguments),t[1],t[2])}),r&&(Je[r]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function ph(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function gh(e){var t=e.match(nn),r,n;for(r=0,n=t.length;r<n;r++)Je[t[r]]?t[r]=Je[t[r]]:t[r]=ph(t[r]);return function(a){var i="",s;for(s=0;s<n;s++)i+=me(t[s])?t[s].call(a,e):t[s];return i}}function At(e,t){return e.isValid()?(t=_i(t,e.localeData()),Sr[t]=Sr[t]||gh(t),Sr[t](e)):e.localeData().invalidDate()}function _i(e,t){var r=5;function n(a){return t.longDateFormat(a)||a}for($t.lastIndex=0;r>=0&&$t.test(e);)e=e.replace($t,n),$t.lastIndex=0,r-=1;return e}var yh={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function xh(e){var t=this._longDateFormat[e],r=this._longDateFormat[e.toUpperCase()];return t||!r?t:(this._longDateFormat[e]=r.match(nn).map(function(n){return n==="MMMM"||n==="MM"||n==="DD"||n==="dddd"?n.slice(1):n}).join(""),this._longDateFormat[e])}var vh="Invalid date";function wh(){return this._invalidDate}var bh="%d",_h=/\d{1,2}/;function Sh(e){return this._ordinal.replace("%d",e)}var Mh={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ch(e,t,r,n){var a=this._relativeTime[r];return me(a)?a(e,t,r,n):a.replace(/%d/i,e)}function Th(e,t){var r=this._relativeTime[e>0?"future":"past"];return me(r)?r(t):r.replace(/%s/i,t)}var Ma={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function re(e){return typeof e=="string"?Ma[e]||Ma[e.toLowerCase()]:void 0}function an(e){var t={},r,n;for(n in e)E(e,n)&&(r=re(n),r&&(t[r]=e[n]));return t}var kh={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Oh(e){var t=[],r;for(r in e)E(e,r)&&t.push({unit:r,priority:kh[r]});return t.sort(function(n,a){return n.priority-a.priority}),t}var Si=/\d/,X=/\d\d/,Mi=/\d{3}/,sn=/\d{4}/,Qt=/[+-]?\d{6}/,L=/\d\d?/,Ci=/\d\d\d\d?/,Ti=/\d\d\d\d\d\d?/,er=/\d{1,3}/,on=/\d{1,4}/,tr=/[+-]?\d{1,6}/,nt=/\d+/,rr=/[+-]?\d+/,Dh=/Z|[+-]\d\d:?\d\d/gi,nr=/Z|[+-]\d\d(?::?\d\d)?/gi,jh=/[+-]?\d+(\.\d{1,3})?/,Tt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,at=/^[1-9]\d?/,ln=/^([1-9]\d|\d)/,Lt;Lt={};function y(e,t,r){Lt[e]=me(t)?t:function(n,a){return n&&r?r:t}}function Eh(e,t){return E(Lt,e)?Lt[e](t._strict,t._locale):new RegExp(Fh(e))}function Fh(e){return we(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,r,n,a,i){return r||n||a||i}))}function we(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ee(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,r=0;return t!==0&&isFinite(t)&&(r=ee(t)),r}var Ar={};function A(e,t){var r,n=t,a;for(typeof e=="string"&&(e=[e]),_e(t)&&(n=function(i,s){s[t]=D(i)}),a=e.length,r=0;r<a;r++)Ar[e[r]]=n}function kt(e,t){A(e,function(r,n,a,i){a._w=a._w||{},t(r,a._w,a,i)})}function $h(e,t,r){t!=null&&E(Ar,e)&&Ar[e](t,r._a,r,e)}function ar(e){return e%4===0&&e%100!==0||e%400===0}var Z=0,xe=1,ue=2,B=3,ie=4,ve=5,Ae=6,Ph=7,Yh=8;w("Y",0,0,function(){var e=this.year();return e<=9999?de(e,4):"+"+e});w(0,["YY",2],0,function(){return this.year()%100});w(0,["YYYY",4],0,"year");w(0,["YYYYY",5],0,"year");w(0,["YYYYYY",6,!0],0,"year");y("Y",rr);y("YY",L,X);y("YYYY",on,sn);y("YYYYY",tr,Qt);y("YYYYYY",tr,Qt);A(["YYYYY","YYYYYY"],Z);A("YYYY",function(e,t){t[Z]=e.length===2?g.parseTwoDigitYear(e):D(e)});A("YY",function(e,t){t[Z]=g.parseTwoDigitYear(e)});A("Y",function(e,t){t[Z]=parseInt(e,10)});function mt(e){return ar(e)?366:365}g.parseTwoDigitYear=function(e){return D(e)+(D(e)>68?1900:2e3)};var ki=it("FullYear",!0);function Ah(){return ar(this.year())}function it(e,t){return function(r){return r!=null?(Oi(this,e,r),g.updateOffset(this,t),this):xt(this,e)}}function xt(e,t){if(!e.isValid())return NaN;var r=e._d,n=e._isUTC;switch(t){case"Milliseconds":return n?r.getUTCMilliseconds():r.getMilliseconds();case"Seconds":return n?r.getUTCSeconds():r.getSeconds();case"Minutes":return n?r.getUTCMinutes():r.getMinutes();case"Hours":return n?r.getUTCHours():r.getHours();case"Date":return n?r.getUTCDate():r.getDate();case"Day":return n?r.getUTCDay():r.getDay();case"Month":return n?r.getUTCMonth():r.getMonth();case"FullYear":return n?r.getUTCFullYear():r.getFullYear();default:return NaN}}function Oi(e,t,r){var n,a,i,s,u;if(!(!e.isValid()||isNaN(r))){switch(n=e._d,a=e._isUTC,t){case"Milliseconds":return void(a?n.setUTCMilliseconds(r):n.setMilliseconds(r));case"Seconds":return void(a?n.setUTCSeconds(r):n.setSeconds(r));case"Minutes":return void(a?n.setUTCMinutes(r):n.setMinutes(r));case"Hours":return void(a?n.setUTCHours(r):n.setHours(r));case"Date":return void(a?n.setUTCDate(r):n.setDate(r));case"FullYear":break;default:return}i=r,s=e.month(),u=e.date(),u=u===29&&s===1&&!ar(i)?28:u,a?n.setUTCFullYear(i,s,u):n.setFullYear(i,s,u)}}function Nh(e){return e=re(e),me(this[e])?this[e]():this}function Rh(e,t){if(typeof e=="object"){e=an(e);var r=Oh(e),n,a=r.length;for(n=0;n<a;n++)this[r[n].unit](e[r[n].unit])}else if(e=re(e),me(this[e]))return this[e](t);return this}function Ih(e,t){return(e%t+t)%t}var G;Array.prototype.indexOf?G=Array.prototype.indexOf:G=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function un(e,t){if(isNaN(e)||isNaN(t))return NaN;var r=Ih(t,12);return e+=(t-r)/12,r===1?ar(e)?29:28:31-r%7%2}w("M",["MM",2],"Mo",function(){return this.month()+1});w("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});w("MMMM",0,0,function(e){return this.localeData().months(this,e)});y("M",L,at);y("MM",L,X);y("MMM",function(e,t){return t.monthsShortRegex(e)});y("MMMM",function(e,t){return t.monthsRegex(e)});A(["M","MM"],function(e,t){t[xe]=D(e)-1});A(["MMM","MMMM"],function(e,t,r,n){var a=r._locale.monthsParse(e,n,r._strict);a!=null?t[xe]=a:S(r).invalidMonth=e});var Wh="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Di="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ji=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Lh=Tt,Vh=Tt;function Uh(e,t){return e?se(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ji).test(t)?"format":"standalone"][e.month()]:se(this._months)?this._months:this._months.standalone}function Gh(e,t){return e?se(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ji.test(t)?"format":"standalone"][e.month()]:se(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Bh(e,t,r){var n,a,i,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)i=fe([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(i,"").toLocaleLowerCase();return r?t==="MMM"?(a=G.call(this._shortMonthsParse,s),a!==-1?a:null):(a=G.call(this._longMonthsParse,s),a!==-1?a:null):t==="MMM"?(a=G.call(this._shortMonthsParse,s),a!==-1?a:(a=G.call(this._longMonthsParse,s),a!==-1?a:null)):(a=G.call(this._longMonthsParse,s),a!==-1?a:(a=G.call(this._shortMonthsParse,s),a!==-1?a:null))}function Hh(e,t,r){var n,a,i;if(this._monthsParseExact)return Bh.call(this,e,t,r);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(a=fe([2e3,n]),r&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!r&&!this._monthsParse[n]&&(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[n]=new RegExp(i.replace(".",""),"i")),r&&t==="MMMM"&&this._longMonthsParse[n].test(e))return n;if(r&&t==="MMM"&&this._shortMonthsParse[n].test(e))return n;if(!r&&this._monthsParse[n].test(e))return n}}function Ei(e,t){if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=D(t);else if(t=e.localeData().monthsParse(t),!_e(t))return e}var r=t,n=e.date();return n=n<29?n:Math.min(n,un(e.year(),r)),e._isUTC?e._d.setUTCMonth(r,n):e._d.setMonth(r,n),e}function Fi(e){return e!=null?(Ei(this,e),g.updateOffset(this,!0),this):xt(this,"Month")}function zh(){return un(this.year(),this.month())}function Zh(e){return this._monthsParseExact?(E(this,"_monthsRegex")||$i.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(E(this,"_monthsShortRegex")||(this._monthsShortRegex=Lh),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function qh(e){return this._monthsParseExact?(E(this,"_monthsRegex")||$i.call(this),e?this._monthsStrictRegex:this._monthsRegex):(E(this,"_monthsRegex")||(this._monthsRegex=Vh),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function $i(){function e(d,c){return c.length-d.length}var t=[],r=[],n=[],a,i,s,u;for(a=0;a<12;a++)i=fe([2e3,a]),s=we(this.monthsShort(i,"")),u=we(this.months(i,"")),t.push(s),r.push(u),n.push(u),n.push(s);t.sort(e),r.sort(e),n.sort(e),this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Kh(e,t,r,n,a,i,s){var u;return e<100&&e>=0?(u=new Date(e+400,t,r,n,a,i,s),isFinite(u.getFullYear())&&u.setFullYear(e)):u=new Date(e,t,r,n,a,i,s),u}function vt(e){var t,r;return e<100&&e>=0?(r=Array.prototype.slice.call(arguments),r[0]=e+400,t=new Date(Date.UTC.apply(null,r)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Vt(e,t,r){var n=7+t-r,a=(7+vt(e,0,n).getUTCDay()-t)%7;return-a+n-1}function Pi(e,t,r,n,a){var i=(7+r-n)%7,s=Vt(e,n,a),u=1+7*(t-1)+i+s,d,c;return u<=0?(d=e-1,c=mt(d)+u):u>mt(e)?(d=e+1,c=u-mt(e)):(d=e,c=u),{year:d,dayOfYear:c}}function wt(e,t,r){var n=Vt(e.year(),t,r),a=Math.floor((e.dayOfYear()-n-1)/7)+1,i,s;return a<1?(s=e.year()-1,i=a+be(s,t,r)):a>be(e.year(),t,r)?(i=a-be(e.year(),t,r),s=e.year()+1):(s=e.year(),i=a),{week:i,year:s}}function be(e,t,r){var n=Vt(e,t,r),a=Vt(e+1,t,r);return(mt(e)-n+a)/7}w("w",["ww",2],"wo","week");w("W",["WW",2],"Wo","isoWeek");y("w",L,at);y("ww",L,X);y("W",L,at);y("WW",L,X);kt(["w","ww","W","WW"],function(e,t,r,n){t[n.substr(0,1)]=D(e)});function Jh(e){return wt(e,this._week.dow,this._week.doy).week}var Xh={dow:0,doy:6};function Qh(){return this._week.dow}function ef(){return this._week.doy}function tf(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function rf(e){var t=wt(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}w("d",0,"do","day");w("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});w("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});w("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});w("e",0,0,"weekday");w("E",0,0,"isoWeekday");y("d",L);y("e",L);y("E",L);y("dd",function(e,t){return t.weekdaysMinRegex(e)});y("ddd",function(e,t){return t.weekdaysShortRegex(e)});y("dddd",function(e,t){return t.weekdaysRegex(e)});kt(["dd","ddd","dddd"],function(e,t,r,n){var a=r._locale.weekdaysParse(e,n,r._strict);a!=null?t.d=a:S(r).invalidWeekday=e});kt(["d","e","E"],function(e,t,r,n){t[n]=D(e)});function nf(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function af(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function dn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var sf="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Yi="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),of="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),lf=Tt,uf=Tt,df=Tt;function cf(e,t){var r=se(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?dn(r,this._week.dow):e?r[e.day()]:r}function hf(e){return e===!0?dn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function ff(e){return e===!0?dn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function mf(e,t,r){var n,a,i,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)i=fe([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(i,"").toLocaleLowerCase();return r?t==="dddd"?(a=G.call(this._weekdaysParse,s),a!==-1?a:null):t==="ddd"?(a=G.call(this._shortWeekdaysParse,s),a!==-1?a:null):(a=G.call(this._minWeekdaysParse,s),a!==-1?a:null):t==="dddd"?(a=G.call(this._weekdaysParse,s),a!==-1||(a=G.call(this._shortWeekdaysParse,s),a!==-1)?a:(a=G.call(this._minWeekdaysParse,s),a!==-1?a:null)):t==="ddd"?(a=G.call(this._shortWeekdaysParse,s),a!==-1||(a=G.call(this._weekdaysParse,s),a!==-1)?a:(a=G.call(this._minWeekdaysParse,s),a!==-1?a:null)):(a=G.call(this._minWeekdaysParse,s),a!==-1||(a=G.call(this._weekdaysParse,s),a!==-1)?a:(a=G.call(this._shortWeekdaysParse,s),a!==-1?a:null))}function pf(e,t,r){var n,a,i;if(this._weekdaysParseExact)return mf.call(this,e,t,r);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(a=fe([2e3,1]).day(n),r&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(i="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[n]=new RegExp(i.replace(".",""),"i")),r&&t==="dddd"&&this._fullWeekdaysParse[n].test(e))return n;if(r&&t==="ddd"&&this._shortWeekdaysParse[n].test(e))return n;if(r&&t==="dd"&&this._minWeekdaysParse[n].test(e))return n;if(!r&&this._weekdaysParse[n].test(e))return n}}function gf(e){if(!this.isValid())return e!=null?this:NaN;var t=xt(this,"Day");return e!=null?(e=nf(e,this.localeData()),this.add(e-t,"d")):t}function yf(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function xf(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=af(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function vf(e){return this._weekdaysParseExact?(E(this,"_weekdaysRegex")||cn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(E(this,"_weekdaysRegex")||(this._weekdaysRegex=lf),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function wf(e){return this._weekdaysParseExact?(E(this,"_weekdaysRegex")||cn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(E(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=uf),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function bf(e){return this._weekdaysParseExact?(E(this,"_weekdaysRegex")||cn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(E(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=df),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function cn(){function e(M,C){return C.length-M.length}var t=[],r=[],n=[],a=[],i,s,u,d,c;for(i=0;i<7;i++)s=fe([2e3,1]).day(i),u=we(this.weekdaysMin(s,"")),d=we(this.weekdaysShort(s,"")),c=we(this.weekdays(s,"")),t.push(u),r.push(d),n.push(c),a.push(u),a.push(d),a.push(c);t.sort(e),r.sort(e),n.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function hn(){return this.hours()%12||12}function _f(){return this.hours()||24}w("H",["HH",2],0,"hour");w("h",["hh",2],0,hn);w("k",["kk",2],0,_f);w("hmm",0,0,function(){return""+hn.apply(this)+de(this.minutes(),2)});w("hmmss",0,0,function(){return""+hn.apply(this)+de(this.minutes(),2)+de(this.seconds(),2)});w("Hmm",0,0,function(){return""+this.hours()+de(this.minutes(),2)});w("Hmmss",0,0,function(){return""+this.hours()+de(this.minutes(),2)+de(this.seconds(),2)});function Ai(e,t){w(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Ai("a",!0);Ai("A",!1);function Ni(e,t){return t._meridiemParse}y("a",Ni);y("A",Ni);y("H",L,ln);y("h",L,at);y("k",L,at);y("HH",L,X);y("hh",L,X);y("kk",L,X);y("hmm",Ci);y("hmmss",Ti);y("Hmm",Ci);y("Hmmss",Ti);A(["H","HH"],B);A(["k","kk"],function(e,t,r){var n=D(e);t[B]=n===24?0:n});A(["a","A"],function(e,t,r){r._isPm=r._locale.isPM(e),r._meridiem=e});A(["h","hh"],function(e,t,r){t[B]=D(e),S(r).bigHour=!0});A("hmm",function(e,t,r){var n=e.length-2;t[B]=D(e.substr(0,n)),t[ie]=D(e.substr(n)),S(r).bigHour=!0});A("hmmss",function(e,t,r){var n=e.length-4,a=e.length-2;t[B]=D(e.substr(0,n)),t[ie]=D(e.substr(n,2)),t[ve]=D(e.substr(a)),S(r).bigHour=!0});A("Hmm",function(e,t,r){var n=e.length-2;t[B]=D(e.substr(0,n)),t[ie]=D(e.substr(n))});A("Hmmss",function(e,t,r){var n=e.length-4,a=e.length-2;t[B]=D(e.substr(0,n)),t[ie]=D(e.substr(n,2)),t[ve]=D(e.substr(a))});function Sf(e){return(e+"").toLowerCase().charAt(0)==="p"}var Mf=/[ap]\.?m?\.?/i,Cf=it("Hours",!0);function Tf(e,t,r){return e>11?r?"pm":"PM":r?"am":"AM"}var Ri={calendar:fh,longDateFormat:yh,invalidDate:vh,ordinal:bh,dayOfMonthOrdinalParse:_h,relativeTime:Mh,months:Wh,monthsShort:Di,week:Xh,weekdays:sf,weekdaysMin:of,weekdaysShort:Yi,meridiemParse:Mf},V={},ct={},bt;function kf(e,t){var r,n=Math.min(e.length,t.length);for(r=0;r<n;r+=1)if(e[r]!==t[r])return r;return n}function Ca(e){return e&&e.toLowerCase().replace("_","-")}function Of(e){for(var t=0,r,n,a,i;t<e.length;){for(i=Ca(e[t]).split("-"),r=i.length,n=Ca(e[t+1]),n=n?n.split("-"):null;r>0;){if(a=ir(i.slice(0,r).join("-")),a)return a;if(n&&n.length>=r&&kf(i,n)>=r-1)break;r--}t++}return bt}function Df(e){return!!(e&&e.match("^[^/\\\\]*$"))}function ir(e){var t=null,r;if(V[e]===void 0&&typeof module<"u"&&module&&module.exports&&Df(e))try{t=bt._abbr,r=require,r("./locale/"+e),De(t)}catch{V[e]=null}return V[e]}function De(e,t){var r;return e&&(K(t)?r=Me(e):r=fn(e,t),r?bt=r:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),bt._abbr}function fn(e,t){if(t!==null){var r,n=Ri;if(t.abbr=e,V[e]!=null)bi("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=V[e]._config;else if(t.parentLocale!=null)if(V[t.parentLocale]!=null)n=V[t.parentLocale]._config;else if(r=ir(t.parentLocale),r!=null)n=r._config;else return ct[t.parentLocale]||(ct[t.parentLocale]=[]),ct[t.parentLocale].push({name:e,config:t}),null;return V[e]=new rn(Pr(n,t)),ct[e]&&ct[e].forEach(function(a){fn(a.name,a.config)}),De(e),V[e]}else return delete V[e],null}function jf(e,t){if(t!=null){var r,n,a=Ri;V[e]!=null&&V[e].parentLocale!=null?V[e].set(Pr(V[e]._config,t)):(n=ir(e),n!=null&&(a=n._config),t=Pr(a,t),n==null&&(t.abbr=e),r=new rn(t),r.parentLocale=V[e],V[e]=r),De(e)}else V[e]!=null&&(V[e].parentLocale!=null?(V[e]=V[e].parentLocale,e===De()&&De(e)):V[e]!=null&&delete V[e]);return V[e]}function Me(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return bt;if(!se(e)){if(t=ir(e),t)return t;e=[e]}return Of(e)}function Ef(){return Yr(V)}function mn(e){var t,r=e._a;return r&&S(e).overflow===-2&&(t=r[xe]<0||r[xe]>11?xe:r[ue]<1||r[ue]>un(r[Z],r[xe])?ue:r[B]<0||r[B]>24||r[B]===24&&(r[ie]!==0||r[ve]!==0||r[Ae]!==0)?B:r[ie]<0||r[ie]>59?ie:r[ve]<0||r[ve]>59?ve:r[Ae]<0||r[Ae]>999?Ae:-1,S(e)._overflowDayOfYear&&(t<Z||t>ue)&&(t=ue),S(e)._overflowWeeks&&t===-1&&(t=Ph),S(e)._overflowWeekday&&t===-1&&(t=Yh),S(e).overflow=t),e}var Ff=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,$f=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Pf=/Z|[+-]\d\d(?::?\d\d)?/,Pt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Mr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Yf=/^\/?Date\((-?\d+)/i,Af=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Nf={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ii(e){var t,r,n=e._i,a=Ff.exec(n)||$f.exec(n),i,s,u,d,c=Pt.length,M=Mr.length;if(a){for(S(e).iso=!0,t=0,r=c;t<r;t++)if(Pt[t][1].exec(a[1])){s=Pt[t][0],i=Pt[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(a[3]){for(t=0,r=M;t<r;t++)if(Mr[t][1].exec(a[3])){u=(a[2]||" ")+Mr[t][0];break}if(u==null){e._isValid=!1;return}}if(!i&&u!=null){e._isValid=!1;return}if(a[4])if(Pf.exec(a[4]))d="Z";else{e._isValid=!1;return}e._f=s+(u||"")+(d||""),gn(e)}else e._isValid=!1}function Rf(e,t,r,n,a,i){var s=[If(e),Di.indexOf(t),parseInt(r,10),parseInt(n,10),parseInt(a,10)];return i&&s.push(parseInt(i,10)),s}function If(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Wf(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Lf(e,t,r){if(e){var n=Yi.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(n!==a)return S(r).weekdayMismatch=!0,r._isValid=!1,!1}return!0}function Vf(e,t,r){if(e)return Nf[e];if(t)return 0;var n=parseInt(r,10),a=n%100,i=(n-a)/100;return i*60+a}function Wi(e){var t=Af.exec(Wf(e._i)),r;if(t){if(r=Rf(t[4],t[3],t[2],t[5],t[6],t[7]),!Lf(t[1],r,e))return;e._a=r,e._tzm=Vf(t[8],t[9],t[10]),e._d=vt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),S(e).rfc2822=!0}else e._isValid=!1}function Uf(e){var t=Yf.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Ii(e),e._isValid===!1)delete e._isValid;else return;if(Wi(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:g.createFromInputFallback(e)}g.createFromInputFallback=te("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function qe(e,t,r){return e??t??r}function Gf(e){var t=new Date(g.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function pn(e){var t,r,n=[],a,i,s;if(!e._d){for(a=Gf(e),e._w&&e._a[ue]==null&&e._a[xe]==null&&Bf(e),e._dayOfYear!=null&&(s=qe(e._a[Z],a[Z]),(e._dayOfYear>mt(s)||e._dayOfYear===0)&&(S(e)._overflowDayOfYear=!0),r=vt(s,0,e._dayOfYear),e._a[xe]=r.getUTCMonth(),e._a[ue]=r.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=n[t]=a[t];for(;t<7;t++)e._a[t]=n[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[B]===24&&e._a[ie]===0&&e._a[ve]===0&&e._a[Ae]===0&&(e._nextDay=!0,e._a[B]=0),e._d=(e._useUTC?vt:Kh).apply(null,n),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[B]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(S(e).weekdayMismatch=!0)}}function Bf(e){var t,r,n,a,i,s,u,d,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(i=1,s=4,r=qe(t.GG,e._a[Z],wt(W(),1,4).year),n=qe(t.W,1),a=qe(t.E,1),(a<1||a>7)&&(d=!0)):(i=e._locale._week.dow,s=e._locale._week.doy,c=wt(W(),i,s),r=qe(t.gg,e._a[Z],c.year),n=qe(t.w,c.week),t.d!=null?(a=t.d,(a<0||a>6)&&(d=!0)):t.e!=null?(a=t.e+i,(t.e<0||t.e>6)&&(d=!0)):a=i),n<1||n>be(r,i,s)?S(e)._overflowWeeks=!0:d!=null?S(e)._overflowWeekday=!0:(u=Pi(r,n,a,i,s),e._a[Z]=u.year,e._dayOfYear=u.dayOfYear)}g.ISO_8601=function(){};g.RFC_2822=function(){};function gn(e){if(e._f===g.ISO_8601){Ii(e);return}if(e._f===g.RFC_2822){Wi(e);return}e._a=[],S(e).empty=!0;var t=""+e._i,r,n,a,i,s,u=t.length,d=0,c,M;for(a=_i(e._f,e._locale).match(nn)||[],M=a.length,r=0;r<M;r++)i=a[r],n=(t.match(Eh(i,e))||[])[0],n&&(s=t.substr(0,t.indexOf(n)),s.length>0&&S(e).unusedInput.push(s),t=t.slice(t.indexOf(n)+n.length),d+=n.length),Je[i]?(n?S(e).empty=!1:S(e).unusedTokens.push(i),$h(i,n,e)):e._strict&&!n&&S(e).unusedTokens.push(i);S(e).charsLeftOver=u-d,t.length>0&&S(e).unusedInput.push(t),e._a[B]<=12&&S(e).bigHour===!0&&e._a[B]>0&&(S(e).bigHour=void 0),S(e).parsedDateParts=e._a.slice(0),S(e).meridiem=e._meridiem,e._a[B]=Hf(e._locale,e._a[B],e._meridiem),c=S(e).era,c!==null&&(e._a[Z]=e._locale.erasConvertYear(c,e._a[Z])),pn(e),mn(e)}function Hf(e,t,r){var n;return r==null?t:e.meridiemHour!=null?e.meridiemHour(t,r):(e.isPM!=null&&(n=e.isPM(r),n&&t<12&&(t+=12),!n&&t===12&&(t=0)),t)}function zf(e){var t,r,n,a,i,s,u=!1,d=e._f.length;if(d===0){S(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<d;a++)i=0,s=!1,t=tn({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[a],gn(t),en(t)&&(s=!0),i+=S(t).charsLeftOver,i+=S(t).unusedTokens.length*10,S(t).score=i,u?i<n&&(n=i,r=t):(n==null||i<n||s)&&(n=i,r=t,s&&(u=!0));ke(e,r||t)}function Zf(e){if(!e._d){var t=an(e._i),r=t.day===void 0?t.date:t.day;e._a=vi([t.year,t.month,r,t.hour,t.minute,t.second,t.millisecond],function(n){return n&&parseInt(n,10)}),pn(e)}}function qf(e){var t=new Ct(mn(Li(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Li(e){var t=e._i,r=e._f;return e._locale=e._locale||Me(e._l),t===null||r===void 0&&t===""?Xt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),oe(t)?new Ct(mn(t)):(Mt(t)?e._d=t:se(r)?zf(e):r?gn(e):Kf(e),en(e)||(e._d=null),e))}function Kf(e){var t=e._i;K(t)?e._d=new Date(g.now()):Mt(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Uf(e):se(t)?(e._a=vi(t.slice(0),function(r){return parseInt(r,10)}),pn(e)):Ie(t)?Zf(e):_e(t)?e._d=new Date(t):g.createFromInputFallback(e)}function Vi(e,t,r,n,a){var i={};return(t===!0||t===!1)&&(n=t,t=void 0),(r===!0||r===!1)&&(n=r,r=void 0),(Ie(e)&&Qr(e)||se(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=a,i._l=r,i._i=e,i._f=t,i._strict=n,qf(i)}function W(e,t,r,n){return Vi(e,t,r,n,!1)}var Jf=te("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Xt()}),Xf=te("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=W.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Xt()});function Ui(e,t){var r,n;if(t.length===1&&se(t[0])&&(t=t[0]),!t.length)return W();for(r=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](r))&&(r=t[n]);return r}function Qf(){var e=[].slice.call(arguments,0);return Ui("isBefore",e)}function e0(){var e=[].slice.call(arguments,0);return Ui("isAfter",e)}var t0=function(){return Date.now?Date.now():+new Date},ht=["year","quarter","month","week","day","hour","minute","second","millisecond"];function r0(e){var t,r=!1,n,a=ht.length;for(t in e)if(E(e,t)&&!(G.call(ht,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(n=0;n<a;++n)if(e[ht[n]]){if(r)return!1;parseFloat(e[ht[n]])!==D(e[ht[n]])&&(r=!0)}return!0}function n0(){return this._isValid}function a0(){return le(NaN)}function sr(e){var t=an(e),r=t.year||0,n=t.quarter||0,a=t.month||0,i=t.week||t.isoWeek||0,s=t.day||0,u=t.hour||0,d=t.minute||0,c=t.second||0,M=t.millisecond||0;this._isValid=r0(t),this._milliseconds=+M+c*1e3+d*6e4+u*1e3*60*60,this._days=+s+i*7,this._months=+a+n*3+r*12,this._data={},this._locale=Me(),this._bubble()}function Nt(e){return e instanceof sr}function Nr(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function i0(e,t,r){var n=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),i=0,s;for(s=0;s<n;s++)(r&&e[s]!==t[s]||!r&&D(e[s])!==D(t[s]))&&i++;return i+a}function Gi(e,t){w(e,0,0,function(){var r=this.utcOffset(),n="+";return r<0&&(r=-r,n="-"),n+de(~~(r/60),2)+t+de(~~r%60,2)})}Gi("Z",":");Gi("ZZ","");y("Z",nr);y("ZZ",nr);A(["Z","ZZ"],function(e,t,r){r._useUTC=!0,r._tzm=yn(nr,e)});var s0=/([\+\-]|\d\d)/gi;function yn(e,t){var r=(t||"").match(e),n,a,i;return r===null?null:(n=r[r.length-1]||[],a=(n+"").match(s0)||["-",0,0],i=+(a[1]*60)+D(a[2]),i===0?0:a[0]==="+"?i:-i)}function xn(e,t){var r,n;return t._isUTC?(r=t.clone(),n=(oe(e)||Mt(e)?e.valueOf():W(e).valueOf())-r.valueOf(),r._d.setTime(r._d.valueOf()+n),g.updateOffset(r,!1),r):W(e).local()}function Rr(e){return-Math.round(e._d.getTimezoneOffset())}g.updateOffset=function(){};function o0(e,t,r){var n=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=yn(nr,e),e===null)return this}else Math.abs(e)<16&&!r&&(e=e*60);return!this._isUTC&&t&&(a=Rr(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),n!==e&&(!t||this._changeInProgress?zi(this,le(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,g.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?n:Rr(this)}function l0(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function u0(e){return this.utcOffset(0,e)}function d0(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Rr(this),"m")),this}function c0(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=yn(Dh,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function h0(e){return this.isValid()?(e=e?W(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function f0(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function m0(){if(!K(this._isDSTShifted))return this._isDSTShifted;var e={},t;return tn(e,this),e=Li(e),e._a?(t=e._isUTC?fe(e._a):W(e._a),this._isDSTShifted=this.isValid()&&i0(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function p0(){return this.isValid()?!this._isUTC:!1}function g0(){return this.isValid()?this._isUTC:!1}function Bi(){return this.isValid()?this._isUTC&&this._offset===0:!1}var y0=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,x0=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function le(e,t){var r=e,n=null,a,i,s;return Nt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:_e(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(n=y0.exec(e))?(a=n[1]==="-"?-1:1,r={y:0,d:D(n[ue])*a,h:D(n[B])*a,m:D(n[ie])*a,s:D(n[ve])*a,ms:D(Nr(n[Ae]*1e3))*a}):(n=x0.exec(e))?(a=n[1]==="-"?-1:1,r={y:$e(n[2],a),M:$e(n[3],a),w:$e(n[4],a),d:$e(n[5],a),h:$e(n[6],a),m:$e(n[7],a),s:$e(n[8],a)}):r==null?r={}:typeof r=="object"&&("from"in r||"to"in r)&&(s=v0(W(r.from),W(r.to)),r={},r.ms=s.milliseconds,r.M=s.months),i=new sr(r),Nt(e)&&E(e,"_locale")&&(i._locale=e._locale),Nt(e)&&E(e,"_isValid")&&(i._isValid=e._isValid),i}le.fn=sr.prototype;le.invalid=a0;function $e(e,t){var r=e&&parseFloat(e.replace(",","."));return(isNaN(r)?0:r)*t}function Ta(e,t){var r={};return r.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(r.months,"M").isAfter(t)&&--r.months,r.milliseconds=+t-+e.clone().add(r.months,"M"),r}function v0(e,t){var r;return e.isValid()&&t.isValid()?(t=xn(t,e),e.isBefore(t)?r=Ta(e,t):(r=Ta(t,e),r.milliseconds=-r.milliseconds,r.months=-r.months),r):{milliseconds:0,months:0}}function Hi(e,t){return function(r,n){var a,i;return n!==null&&!isNaN(+n)&&(bi(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=r,r=n,n=i),a=le(r,n),zi(this,a,e),this}}function zi(e,t,r,n){var a=t._milliseconds,i=Nr(t._days),s=Nr(t._months);e.isValid()&&(n=n??!0,s&&Ei(e,xt(e,"Month")+s*r),i&&Oi(e,"Date",xt(e,"Date")+i*r),a&&e._d.setTime(e._d.valueOf()+a*r),n&&g.updateOffset(e,i||s))}var w0=Hi(1,"add"),b0=Hi(-1,"subtract");function Zi(e){return typeof e=="string"||e instanceof String}function _0(e){return oe(e)||Mt(e)||Zi(e)||_e(e)||M0(e)||S0(e)||e===null||e===void 0}function S0(e){var t=Ie(e)&&!Qr(e),r=!1,n=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,i,s=n.length;for(a=0;a<s;a+=1)i=n[a],r=r||E(e,i);return t&&r}function M0(e){var t=se(e),r=!1;return t&&(r=e.filter(function(n){return!_e(n)&&Zi(e)}).length===0),t&&r}function C0(e){var t=Ie(e)&&!Qr(e),r=!1,n=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,i;for(a=0;a<n.length;a+=1)i=n[a],r=r||E(e,i);return t&&r}function T0(e,t){var r=e.diff(t,"days",!0);return r<-6?"sameElse":r<-1?"lastWeek":r<0?"lastDay":r<1?"sameDay":r<2?"nextDay":r<7?"nextWeek":"sameElse"}function k0(e,t){arguments.length===1&&(arguments[0]?_0(arguments[0])?(e=arguments[0],t=void 0):C0(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var r=e||W(),n=xn(r,this).startOf("day"),a=g.calendarFormat(this,n)||"sameElse",i=t&&(me(t[a])?t[a].call(this,r):t[a]);return this.format(i||this.localeData().calendar(a,this,W(r)))}function O0(){return new Ct(this)}function D0(e,t){var r=oe(e)?e:W(e);return this.isValid()&&r.isValid()?(t=re(t)||"millisecond",t==="millisecond"?this.valueOf()>r.valueOf():r.valueOf()<this.clone().startOf(t).valueOf()):!1}function j0(e,t){var r=oe(e)?e:W(e);return this.isValid()&&r.isValid()?(t=re(t)||"millisecond",t==="millisecond"?this.valueOf()<r.valueOf():this.clone().endOf(t).valueOf()<r.valueOf()):!1}function E0(e,t,r,n){var a=oe(e)?e:W(e),i=oe(t)?t:W(t);return this.isValid()&&a.isValid()&&i.isValid()?(n=n||"()",(n[0]==="("?this.isAfter(a,r):!this.isBefore(a,r))&&(n[1]===")"?this.isBefore(i,r):!this.isAfter(i,r))):!1}function F0(e,t){var r=oe(e)?e:W(e),n;return this.isValid()&&r.isValid()?(t=re(t)||"millisecond",t==="millisecond"?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf())):!1}function $0(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function P0(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Y0(e,t,r){var n,a,i;if(!this.isValid())return NaN;if(n=xn(e,this),!n.isValid())return NaN;switch(a=(n.utcOffset()-this.utcOffset())*6e4,t=re(t),t){case"year":i=Rt(this,n)/12;break;case"month":i=Rt(this,n);break;case"quarter":i=Rt(this,n)/3;break;case"second":i=(this-n)/1e3;break;case"minute":i=(this-n)/6e4;break;case"hour":i=(this-n)/36e5;break;case"day":i=(this-n-a)/864e5;break;case"week":i=(this-n-a)/6048e5;break;default:i=this-n}return r?i:ee(i)}function Rt(e,t){if(e.date()<t.date())return-Rt(t,e);var r=(t.year()-e.year())*12+(t.month()-e.month()),n=e.clone().add(r,"months"),a,i;return t-n<0?(a=e.clone().add(r-1,"months"),i=(t-n)/(n-a)):(a=e.clone().add(r+1,"months"),i=(t-n)/(a-n)),-(r+i)||0}g.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";g.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function A0(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function N0(e){if(!this.isValid())return null;var t=e!==!0,r=t?this.clone().utc():this;return r.year()<0||r.year()>9999?At(r,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):me(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",At(r,"Z")):At(r,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function R0(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",r,n,a,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),r="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",i=t+'[")]',this.format(r+n+a+i)}function I0(e){e||(e=this.isUtc()?g.defaultFormatUtc:g.defaultFormat);var t=At(this,e);return this.localeData().postformat(t)}function W0(e,t){return this.isValid()&&(oe(e)&&e.isValid()||W(e).isValid())?le({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function L0(e){return this.from(W(),e)}function V0(e,t){return this.isValid()&&(oe(e)&&e.isValid()||W(e).isValid())?le({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function U0(e){return this.to(W(),e)}function qi(e){var t;return e===void 0?this._locale._abbr:(t=Me(e),t!=null&&(this._locale=t),this)}var Ki=te("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Ji(){return this._locale}var Ut=1e3,Xe=60*Ut,Gt=60*Xe,Xi=(365*400+97)*24*Gt;function Qe(e,t){return(e%t+t)%t}function Qi(e,t,r){return e<100&&e>=0?new Date(e+400,t,r)-Xi:new Date(e,t,r).valueOf()}function es(e,t,r){return e<100&&e>=0?Date.UTC(e+400,t,r)-Xi:Date.UTC(e,t,r)}function G0(e){var t,r;if(e=re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?es:Qi,e){case"year":t=r(this.year(),0,1);break;case"quarter":t=r(this.year(),this.month()-this.month()%3,1);break;case"month":t=r(this.year(),this.month(),1);break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=r(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Qe(t+(this._isUTC?0:this.utcOffset()*Xe),Gt);break;case"minute":t=this._d.valueOf(),t-=Qe(t,Xe);break;case"second":t=this._d.valueOf(),t-=Qe(t,Ut);break}return this._d.setTime(t),g.updateOffset(this,!0),this}function B0(e){var t,r;if(e=re(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(r=this._isUTC?es:Qi,e){case"year":t=r(this.year()+1,0,1)-1;break;case"quarter":t=r(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=r(this.year(),this.month()+1,1)-1;break;case"week":t=r(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=r(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=r(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Gt-Qe(t+(this._isUTC?0:this.utcOffset()*Xe),Gt)-1;break;case"minute":t=this._d.valueOf(),t+=Xe-Qe(t,Xe)-1;break;case"second":t=this._d.valueOf(),t+=Ut-Qe(t,Ut)-1;break}return this._d.setTime(t),g.updateOffset(this,!0),this}function H0(){return this._d.valueOf()-(this._offset||0)*6e4}function z0(){return Math.floor(this.valueOf()/1e3)}function Z0(){return new Date(this.valueOf())}function q0(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function K0(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function J0(){return this.isValid()?this.toISOString():null}function X0(){return en(this)}function Q0(){return ke({},S(this))}function e2(){return S(this).overflow}function t2(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}w("N",0,0,"eraAbbr");w("NN",0,0,"eraAbbr");w("NNN",0,0,"eraAbbr");w("NNNN",0,0,"eraName");w("NNNNN",0,0,"eraNarrow");w("y",["y",1],"yo","eraYear");w("y",["yy",2],0,"eraYear");w("y",["yyy",3],0,"eraYear");w("y",["yyyy",4],0,"eraYear");y("N",vn);y("NN",vn);y("NNN",vn);y("NNNN",h2);y("NNNNN",f2);A(["N","NN","NNN","NNNN","NNNNN"],function(e,t,r,n){var a=r._locale.erasParse(e,n,r._strict);a?S(r).era=a:S(r).invalidEra=e});y("y",nt);y("yy",nt);y("yyy",nt);y("yyyy",nt);y("yo",m2);A(["y","yy","yyy","yyyy"],Z);A(["yo"],function(e,t,r,n){var a;r._locale._eraYearOrdinalRegex&&(a=e.match(r._locale._eraYearOrdinalRegex)),r._locale.eraYearOrdinalParse?t[Z]=r._locale.eraYearOrdinalParse(e,a):t[Z]=parseInt(e,10)});function r2(e,t){var r,n,a,i=this._eras||Me("en")._eras;for(r=0,n=i.length;r<n;++r){switch(typeof i[r].since){case"string":a=g(i[r].since).startOf("day"),i[r].since=a.valueOf();break}switch(typeof i[r].until){case"undefined":i[r].until=1/0;break;case"string":a=g(i[r].until).startOf("day").valueOf(),i[r].until=a.valueOf();break}}return i}function n2(e,t,r){var n,a,i=this.eras(),s,u,d;for(e=e.toUpperCase(),n=0,a=i.length;n<a;++n)if(s=i[n].name.toUpperCase(),u=i[n].abbr.toUpperCase(),d=i[n].narrow.toUpperCase(),r)switch(t){case"N":case"NN":case"NNN":if(u===e)return i[n];break;case"NNNN":if(s===e)return i[n];break;case"NNNNN":if(d===e)return i[n];break}else if([s,u,d].indexOf(e)>=0)return i[n]}function a2(e,t){var r=e.since<=e.until?1:-1;return t===void 0?g(e.since).year():g(e.since).year()+(t-e.offset)*r}function i2(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].name;return""}function s2(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].narrow;return""}function o2(){var e,t,r,n=this.localeData().eras();for(e=0,t=n.length;e<t;++e)if(r=this.clone().startOf("day").valueOf(),n[e].since<=r&&r<=n[e].until||n[e].until<=r&&r<=n[e].since)return n[e].abbr;return""}function l2(){var e,t,r,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(r=a[e].since<=a[e].until?1:-1,n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return(this.year()-g(a[e].since).year())*r+a[e].offset;return this.year()}function u2(e){return E(this,"_erasNameRegex")||wn.call(this),e?this._erasNameRegex:this._erasRegex}function d2(e){return E(this,"_erasAbbrRegex")||wn.call(this),e?this._erasAbbrRegex:this._erasRegex}function c2(e){return E(this,"_erasNarrowRegex")||wn.call(this),e?this._erasNarrowRegex:this._erasRegex}function vn(e,t){return t.erasAbbrRegex(e)}function h2(e,t){return t.erasNameRegex(e)}function f2(e,t){return t.erasNarrowRegex(e)}function m2(e,t){return t._eraYearOrdinalRegex||nt}function wn(){var e=[],t=[],r=[],n=[],a,i,s,u,d,c=this.eras();for(a=0,i=c.length;a<i;++a)s=we(c[a].name),u=we(c[a].abbr),d=we(c[a].narrow),t.push(s),e.push(u),r.push(d),n.push(s),n.push(u),n.push(d);this._erasRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+r.join("|")+")","i")}w(0,["gg",2],0,function(){return this.weekYear()%100});w(0,["GG",2],0,function(){return this.isoWeekYear()%100});function or(e,t){w(0,[e,e.length],0,t)}or("gggg","weekYear");or("ggggg","weekYear");or("GGGG","isoWeekYear");or("GGGGG","isoWeekYear");y("G",rr);y("g",rr);y("GG",L,X);y("gg",L,X);y("GGGG",on,sn);y("gggg",on,sn);y("GGGGG",tr,Qt);y("ggggg",tr,Qt);kt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,r,n){t[n.substr(0,2)]=D(e)});kt(["gg","GG"],function(e,t,r,n){t[n]=g.parseTwoDigitYear(e)});function p2(e){return ts.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function g2(e){return ts.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function y2(){return be(this.year(),1,4)}function x2(){return be(this.isoWeekYear(),1,4)}function v2(){var e=this.localeData()._week;return be(this.year(),e.dow,e.doy)}function w2(){var e=this.localeData()._week;return be(this.weekYear(),e.dow,e.doy)}function ts(e,t,r,n,a){var i;return e==null?wt(this,n,a).year:(i=be(e,n,a),t>i&&(t=i),b2.call(this,e,t,r,n,a))}function b2(e,t,r,n,a){var i=Pi(e,t,r,n,a),s=vt(i.year,0,i.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}w("Q",0,"Qo","quarter");y("Q",Si);A("Q",function(e,t){t[xe]=(D(e)-1)*3});function _2(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}w("D",["DD",2],"Do","date");y("D",L,at);y("DD",L,X);y("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});A(["D","DD"],ue);A("Do",function(e,t){t[ue]=D(e.match(L)[0])});var rs=it("Date",!0);w("DDD",["DDDD",3],"DDDo","dayOfYear");y("DDD",er);y("DDDD",Mi);A(["DDD","DDDD"],function(e,t,r){r._dayOfYear=D(e)});function S2(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}w("m",["mm",2],0,"minute");y("m",L,ln);y("mm",L,X);A(["m","mm"],ie);var M2=it("Minutes",!1);w("s",["ss",2],0,"second");y("s",L,ln);y("ss",L,X);A(["s","ss"],ve);var C2=it("Seconds",!1);w("S",0,0,function(){return~~(this.millisecond()/100)});w(0,["SS",2],0,function(){return~~(this.millisecond()/10)});w(0,["SSS",3],0,"millisecond");w(0,["SSSS",4],0,function(){return this.millisecond()*10});w(0,["SSSSS",5],0,function(){return this.millisecond()*100});w(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});w(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});w(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});w(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});y("S",er,Si);y("SS",er,X);y("SSS",er,Mi);var Oe,ns;for(Oe="SSSS";Oe.length<=9;Oe+="S")y(Oe,nt);function T2(e,t){t[Ae]=D(("0."+e)*1e3)}for(Oe="S";Oe.length<=9;Oe+="S")A(Oe,T2);ns=it("Milliseconds",!1);w("z",0,0,"zoneAbbr");w("zz",0,0,"zoneName");function k2(){return this._isUTC?"UTC":""}function O2(){return this._isUTC?"Coordinated Universal Time":""}var f=Ct.prototype;f.add=w0;f.calendar=k0;f.clone=O0;f.diff=Y0;f.endOf=B0;f.format=I0;f.from=W0;f.fromNow=L0;f.to=V0;f.toNow=U0;f.get=Nh;f.invalidAt=e2;f.isAfter=D0;f.isBefore=j0;f.isBetween=E0;f.isSame=F0;f.isSameOrAfter=$0;f.isSameOrBefore=P0;f.isValid=X0;f.lang=Ki;f.locale=qi;f.localeData=Ji;f.max=Xf;f.min=Jf;f.parsingFlags=Q0;f.set=Rh;f.startOf=G0;f.subtract=b0;f.toArray=q0;f.toObject=K0;f.toDate=Z0;f.toISOString=N0;f.inspect=R0;typeof Symbol<"u"&&Symbol.for!=null&&(f[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});f.toJSON=J0;f.toString=A0;f.unix=z0;f.valueOf=H0;f.creationData=t2;f.eraName=i2;f.eraNarrow=s2;f.eraAbbr=o2;f.eraYear=l2;f.year=ki;f.isLeapYear=Ah;f.weekYear=p2;f.isoWeekYear=g2;f.quarter=f.quarters=_2;f.month=Fi;f.daysInMonth=zh;f.week=f.weeks=tf;f.isoWeek=f.isoWeeks=rf;f.weeksInYear=v2;f.weeksInWeekYear=w2;f.isoWeeksInYear=y2;f.isoWeeksInISOWeekYear=x2;f.date=rs;f.day=f.days=gf;f.weekday=yf;f.isoWeekday=xf;f.dayOfYear=S2;f.hour=f.hours=Cf;f.minute=f.minutes=M2;f.second=f.seconds=C2;f.millisecond=f.milliseconds=ns;f.utcOffset=o0;f.utc=u0;f.local=d0;f.parseZone=c0;f.hasAlignedHourOffset=h0;f.isDST=f0;f.isLocal=p0;f.isUtcOffset=g0;f.isUtc=Bi;f.isUTC=Bi;f.zoneAbbr=k2;f.zoneName=O2;f.dates=te("dates accessor is deprecated. Use date instead.",rs);f.months=te("months accessor is deprecated. Use month instead",Fi);f.years=te("years accessor is deprecated. Use year instead",ki);f.zone=te("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",l0);f.isDSTShifted=te("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",m0);function D2(e){return W(e*1e3)}function j2(){return W.apply(null,arguments).parseZone()}function as(e){return e}var F=rn.prototype;F.calendar=mh;F.longDateFormat=xh;F.invalidDate=wh;F.ordinal=Sh;F.preparse=as;F.postformat=as;F.relativeTime=Ch;F.pastFuture=Th;F.set=hh;F.eras=r2;F.erasParse=n2;F.erasConvertYear=a2;F.erasAbbrRegex=d2;F.erasNameRegex=u2;F.erasNarrowRegex=c2;F.months=Uh;F.monthsShort=Gh;F.monthsParse=Hh;F.monthsRegex=qh;F.monthsShortRegex=Zh;F.week=Jh;F.firstDayOfYear=ef;F.firstDayOfWeek=Qh;F.weekdays=cf;F.weekdaysMin=ff;F.weekdaysShort=hf;F.weekdaysParse=pf;F.weekdaysRegex=vf;F.weekdaysShortRegex=wf;F.weekdaysMinRegex=bf;F.isPM=Sf;F.meridiem=Tf;function Bt(e,t,r,n){var a=Me(),i=fe().set(n,t);return a[r](i,e)}function is(e,t,r){if(_e(e)&&(t=e,e=void 0),e=e||"",t!=null)return Bt(e,t,r,"month");var n,a=[];for(n=0;n<12;n++)a[n]=Bt(e,n,r,"month");return a}function bn(e,t,r,n){typeof e=="boolean"?(_e(t)&&(r=t,t=void 0),t=t||""):(t=e,r=t,e=!1,_e(t)&&(r=t,t=void 0),t=t||"");var a=Me(),i=e?a._week.dow:0,s,u=[];if(r!=null)return Bt(t,(r+i)%7,n,"day");for(s=0;s<7;s++)u[s]=Bt(t,(s+i)%7,n,"day");return u}function E2(e,t){return is(e,t,"months")}function F2(e,t){return is(e,t,"monthsShort")}function $2(e,t,r){return bn(e,t,r,"weekdays")}function P2(e,t,r){return bn(e,t,r,"weekdaysShort")}function Y2(e,t,r){return bn(e,t,r,"weekdaysMin")}De("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,r=D(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+r}});g.lang=te("moment.lang is deprecated. Use moment.locale instead.",De);g.langData=te("moment.langData is deprecated. Use moment.localeData instead.",Me);var ge=Math.abs;function A2(){var e=this._data;return this._milliseconds=ge(this._milliseconds),this._days=ge(this._days),this._months=ge(this._months),e.milliseconds=ge(e.milliseconds),e.seconds=ge(e.seconds),e.minutes=ge(e.minutes),e.hours=ge(e.hours),e.months=ge(e.months),e.years=ge(e.years),this}function ss(e,t,r,n){var a=le(t,r);return e._milliseconds+=n*a._milliseconds,e._days+=n*a._days,e._months+=n*a._months,e._bubble()}function N2(e,t){return ss(this,e,t,1)}function R2(e,t){return ss(this,e,t,-1)}function ka(e){return e<0?Math.floor(e):Math.ceil(e)}function I2(){var e=this._milliseconds,t=this._days,r=this._months,n=this._data,a,i,s,u,d;return e>=0&&t>=0&&r>=0||e<=0&&t<=0&&r<=0||(e+=ka(Ir(r)+t)*864e5,t=0,r=0),n.milliseconds=e%1e3,a=ee(e/1e3),n.seconds=a%60,i=ee(a/60),n.minutes=i%60,s=ee(i/60),n.hours=s%24,t+=ee(s/24),d=ee(os(t)),r+=d,t-=ka(Ir(d)),u=ee(r/12),r%=12,n.days=t,n.months=r,n.years=u,this}function os(e){return e*4800/146097}function Ir(e){return e*146097/4800}function W2(e){if(!this.isValid())return NaN;var t,r,n=this._milliseconds;if(e=re(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+n/864e5,r=this._months+os(t),e){case"month":return r;case"quarter":return r/3;case"year":return r/12}else switch(t=this._days+Math.round(Ir(this._months)),e){case"week":return t/7+n/6048e5;case"day":return t+n/864e5;case"hour":return t*24+n/36e5;case"minute":return t*1440+n/6e4;case"second":return t*86400+n/1e3;case"millisecond":return Math.floor(t*864e5)+n;default:throw new Error("Unknown unit "+e)}}function Ce(e){return function(){return this.as(e)}}var ls=Ce("ms"),L2=Ce("s"),V2=Ce("m"),U2=Ce("h"),G2=Ce("d"),B2=Ce("w"),H2=Ce("M"),z2=Ce("Q"),Z2=Ce("y"),q2=ls;function K2(){return le(this)}function J2(e){return e=re(e),this.isValid()?this[e+"s"]():NaN}function Be(e){return function(){return this.isValid()?this._data[e]:NaN}}var X2=Be("milliseconds"),Q2=Be("seconds"),em=Be("minutes"),tm=Be("hours"),rm=Be("days"),nm=Be("months"),am=Be("years");function im(){return ee(this.days()/7)}var ye=Math.round,Ke={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function sm(e,t,r,n,a){return a.relativeTime(t||1,!!r,e,n)}function om(e,t,r,n){var a=le(e).abs(),i=ye(a.as("s")),s=ye(a.as("m")),u=ye(a.as("h")),d=ye(a.as("d")),c=ye(a.as("M")),M=ye(a.as("w")),C=ye(a.as("y")),m=i<=r.ss&&["s",i]||i<r.s&&["ss",i]||s<=1&&["m"]||s<r.m&&["mm",s]||u<=1&&["h"]||u<r.h&&["hh",u]||d<=1&&["d"]||d<r.d&&["dd",d];return r.w!=null&&(m=m||M<=1&&["w"]||M<r.w&&["ww",M]),m=m||c<=1&&["M"]||c<r.M&&["MM",c]||C<=1&&["y"]||["yy",C],m[2]=t,m[3]=+e>0,m[4]=n,sm.apply(null,m)}function lm(e){return e===void 0?ye:typeof e=="function"?(ye=e,!0):!1}function um(e,t){return Ke[e]===void 0?!1:t===void 0?Ke[e]:(Ke[e]=t,e==="s"&&(Ke.ss=t-1),!0)}function dm(e,t){if(!this.isValid())return this.localeData().invalidDate();var r=!1,n=Ke,a,i;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(r=e),typeof t=="object"&&(n=Object.assign({},Ke,t),t.s!=null&&t.ss==null&&(n.ss=t.s-1)),a=this.localeData(),i=om(this,!r,n,a),r&&(i=a.pastFuture(+this,i)),a.postformat(i)}var Cr=Math.abs;function Ze(e){return(e>0)-(e<0)||+e}function lr(){if(!this.isValid())return this.localeData().invalidDate();var e=Cr(this._milliseconds)/1e3,t=Cr(this._days),r=Cr(this._months),n,a,i,s,u=this.asSeconds(),d,c,M,C;return u?(n=ee(e/60),a=ee(n/60),e%=60,n%=60,i=ee(r/12),r%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",d=u<0?"-":"",c=Ze(this._months)!==Ze(u)?"-":"",M=Ze(this._days)!==Ze(u)?"-":"",C=Ze(this._milliseconds)!==Ze(u)?"-":"",d+"P"+(i?c+i+"Y":"")+(r?c+r+"M":"")+(t?M+t+"D":"")+(a||n||e?"T":"")+(a?C+a+"H":"")+(n?C+n+"M":"")+(e?C+s+"S":"")):"P0D"}var j=sr.prototype;j.isValid=n0;j.abs=A2;j.add=N2;j.subtract=R2;j.as=W2;j.asMilliseconds=ls;j.asSeconds=L2;j.asMinutes=V2;j.asHours=U2;j.asDays=G2;j.asWeeks=B2;j.asMonths=H2;j.asQuarters=z2;j.asYears=Z2;j.valueOf=q2;j._bubble=I2;j.clone=K2;j.get=J2;j.milliseconds=X2;j.seconds=Q2;j.minutes=em;j.hours=tm;j.days=rm;j.weeks=im;j.months=nm;j.years=am;j.humanize=dm;j.toISOString=lr;j.toString=lr;j.toJSON=lr;j.locale=qi;j.localeData=Ji;j.toIsoString=te("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",lr);j.lang=Ki;w("X",0,0,"unix");w("x",0,0,"valueOf");y("x",rr);y("X",jh);A("X",function(e,t,r){r._d=new Date(parseFloat(e)*1e3)});A("x",function(e,t,r){r._d=new Date(D(e))});//! moment.js
g.version="2.30.1";dh(W);g.fn=f;g.min=Qf;g.max=e0;g.now=t0;g.utc=fe;g.unix=D2;g.months=E2;g.isDate=Mt;g.locale=De;g.invalid=Xt;g.duration=le;g.isMoment=oe;g.weekdays=$2;g.parseZone=j2;g.localeData=Me;g.isDuration=Nt;g.monthsShort=F2;g.weekdaysMin=Y2;g.defineLocale=fn;g.updateLocale=jf;g.locales=Ef;g.weekdaysShort=P2;g.normalizeUnits=re;g.relativeTimeRounding=lm;g.relativeTimeThreshold=um;g.calendarFormat=T0;g.prototype=f;g.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const cm=navigator.language,us=(e,t="HH:mm")=>g.utc(e).locale(cm).format(t),hm=p.div`
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
    color: ${e=>e.theme.colors.primaryBlue};
  }
`,fm=p.ul`
  li {
    padding-bottom: 12px;
  }

  li:not(:first-child) {
    padding-top: 12px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
`,mm=p.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${e=>e.theme.colors.secondaryLightblue};

  .icon-glass {
    width: 26px;
    height: 26px;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`,pm=p.span`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.33;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`,gm=p.span`
  font-size: 12px;
  line-height: 2;
  color: ${e=>e.theme.colors.textColor};
`,ym=p.div`
  margin-left: auto;
  margin-right: 4px;

  button:first-child {
    margin-right: 18px;
  }
`,Oa=p.button`
  padding: 0;
  border: none;
  background-color: transparent;

  & svg {
    width: 16px;
    height: 16px;
  }
`,xm=p.button`
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
`,vm=e=>h.createElement("svg",{width:16,height:16,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("g",{id:"pencil-square/outline"},h.createElement("path",{id:"Vector",d:"M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62235 21.5527 5.09933 21.201 5.451L10.582 16.07C10.0533 16.5984 9.40137 16.9867 8.685 17.2L6 18L6.8 15.315C7.01328 14.5986 7.40163 13.9467 7.93 13.418L16.862 4.487ZM16.862 4.487L19.5 7.125M18 14V18.75C18 19.3467 17.7629 19.919 17.341 20.341C16.919 20.7629 16.3467 21 15.75 21H5.25C4.65326 21 4.08097 20.7629 3.65901 20.341C3.23705 19.919 3 19.3467 3 18.75V8.25C3 7.65327 3.23705 7.08097 3.65901 6.65901C4.08097 6.23706 4.65326 6 5.25 6H10",stroke:"#9EBBFF",strokeLinecap:"round",strokeLinejoin:"round"}))),wm=e=>h.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},h.createElement("path",{d:"M9.82667 6L9.596 12M6.404 12L6.17333 6M12.8187 3.86C13.0467 3.89466 13.2733 3.93133 13.5 3.97066M12.8187 3.86L12.1067 13.1153C12.0776 13.4921 11.9074 13.8441 11.63 14.1008C11.3527 14.3575 10.9886 14.5001 10.6107 14.5H5.38933C5.0114 14.5001 4.64735 14.3575 4.36999 14.1008C4.09262 13.8441 3.92239 13.4921 3.89333 13.1153L3.18133 3.86M12.8187 3.86C12.0492 3.74367 11.2758 3.65539 10.5 3.59533M3.18133 3.86C2.95333 3.894 2.72667 3.93066 2.5 3.97M3.18133 3.86C3.95076 3.74368 4.72416 3.6554 5.5 3.59533M10.5 3.59533V2.98466C10.5 2.198 9.89333 1.542 9.10667 1.51733C8.36908 1.49376 7.63092 1.49376 6.89333 1.51733C6.10667 1.542 5.5 2.19866 5.5 2.98466V3.59533M10.5 3.59533C8.83581 3.46672 7.16419 3.46672 5.5 3.59533",stroke:"#EF5050",strokeLinecap:"round",strokeLinejoin:"round"})),bm=p.div`
  width: 100vw;
  max-width: calc(280px - 24px);
  @media only screen and (min-width: 768px) {
    max-width: calc(704px - 48px);
  }

  @media only screen and (min-width: 1440px) {
    max-width: calc(592px - 48px);
  }
`,_m=p.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`;p.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`;const Sm=p.div`
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 16px;
  font-weight: 500;
`,Mm=p(Jr)`
  width: 36px;
  height: 36px;
`;p.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 254px;
  border-radius: 10px;
  background: #ecf2ff;
  padding: 12px 24px;
  margin-bottom: 24px;
`;p.div`
  font-size: 12px;
  line-height: 2;
  margin-left: 8px;
`;p.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`;const Cm=p.div`
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
`,Tm=p(Kr)`
  stroke: ${e=>e.theme.colors.primaryBlue};
`,km=p(mi)`
  stroke: ${e=>e.theme.colors.primaryBlue};
  fill: ${e=>e.theme.colors.primaryBlue};
`,Om=p.form`
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
`,Dm=p.div`
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
`,jm=p.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${e=>e.theme.colors.secondaryBg};
  margin-bottom: 24px;
`,Da=p.p`
  color: ${e=>e.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`,Em=p.p`
  font-size: 12px;
  line-height: 2;
`,ja=20,Fm=({onClose:e})=>{const{t}=ce(),r=Ht(),[n]=h.useState(null),i=tt(gi).find(b=>b._id),[s,u]=h.useState(i.waterAmount),{handleChange:d,handleSubmit:c,values:{date:M,waterAmount:C},errors:m,setFieldValue:T}=fi({initialValues:{waterAmount:i.waterAmount.toString(),date:`${us(i.date)}`},onSubmit:b=>{r(Rs({portionId:n,formData:b})).unwrap().then(()=>{r(e())})}}),O=()=>{T("waterAmount",s?s.toString():"0")},P=()=>{const b=Number.parseInt(C)+ja;T("waterAmount",b.toString())},U=()=>{const b=Number.parseInt(C)-ja;T("waterAmount",b<=0?"0":b.toString())};return o.jsxs(bm,{onSubmit:c,children:[o.jsx(_m,{children:"Edit the entered amount of water"}),o.jsxs(jm,{children:[o.jsx(Mm,{}),o.jsxs(Da,{children:[" ",i.waterAmount,t("ml")]}),o.jsxs(Em,{children:[Ne(i.date,"hh"),":",Ne(i.date,"mm")," ",Ne(i.date,"a")]})]}),o.jsx(Sm,{children:"Correct entered data"}),o.jsxs(Da,{children:[t("addModal.Amount of water"),":"]}),o.jsxs(Cm,{children:[o.jsxs("button",{onClick:U,name:"minus",type:"button",children:[o.jsx(km,{"aria-label":"minus_button"})," "]}),o.jsxs("span",{className:"water-amount-value",children:[C,t("ml")]}),o.jsxs("button",{onClick:P,name:"plus",type:"button",children:[o.jsx(Tm,{"aria-label":"plus_button"})," "]})]}),o.jsxs(Om,{children:[o.jsxs("label",{children:[t("addModal.Recording time"),":",o.jsx("input",{name:"date",type:"time",value:M,onBlur:d}),m.date?o.jsx("div",{children:m.date}):null]}),o.jsxs("label",{children:[t("addModal.Enter the value of the water used"),":",o.jsx("input",{name:"number",value:s,onBlur:O,onChange:({target:{value:b}})=>u(Number.parseInt(b))}),m.waterAmount?o.jsx("div",{children:m.waterAmount}):null]}),o.jsxs(Dm,{children:[o.jsxs("p",{children:[C,t("ml")]}),o.jsx("button",{disabled:Object.keys(m).length>0,type:"submit",children:t("save")})]})]})]})},$m=()=>{const[e,t]=h.useState(null),r=tt(gi),[n,a]=h.useState(!1),[i,s]=h.useState(!1),[u,d]=h.useState(!1),{t:c}=ce(),M=O=>{s(!0),d(!1),O.stopPropagation()},C=(O,P)=>{a(!0),t(P),O.stopPropagation()},m=()=>{s(!1)},T=()=>{a(!1)};return o.jsx(hm,{children:r.length===0?o.jsx("p",{className:"motivation",children:c("portionsText")}):o.jsxs(o.Fragment,{children:[o.jsx(fm,{children:r==null?void 0:r.map(O=>o.jsxs(mm,{children:[o.jsx(Jr,{className:"glass"}),o.jsxs(pm,{children:[`${O.waterAmount} ${c("ml")}`," "]}),o.jsx(gm,{children:us(O.date)}),o.jsxs(ym,{children:[o.jsx(Oa,{onClick:P=>C(P),children:o.jsx(vm,{})}),n&&o.jsx(It,{$position:"center",open:a,onClose:T,children:o.jsx(Fm,{onClose:T,isEditing:u,waterPortionId:e})}),o.jsx(Oa,{children:o.jsx(wm,{})})]})]},O._id))}),o.jsxs(xm,{onClick:O=>M(O),children:[o.jsx(Kr,{}),c("addWater")]}),i&&o.jsx(It,{$position:"center",open:i,onClose:m,children:o.jsx(pi,{onClose:m,isEditing:u})})]})})},Pm=()=>{const{t:e}=ce();return o.jsxs(lh,{children:[o.jsx(uh,{children:e("today")}),o.jsx($m,{})]})},Ym=p.div`
  width: 280px;
  padding: 24px 8px;
  border-radius: 10px;
  background: ${e=>e.theme.colors.secondaryBg};
  box-shadow: ${e=>e.theme.shadows.windowShadowContainer};

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`,Am=()=>o.jsxs(Ym,{children:[o.jsx(Pm,{}),o.jsx(oh,{})]}),Im=()=>o.jsx(o1,{id:"beckground",children:o.jsxs(a1,{children:[o.jsxs(i1,{children:[o.jsx(Js,{}),o.jsx(e1,{})]}),o.jsx(s1,{children:o.jsx(Am,{})})]})});export{Im as default};
