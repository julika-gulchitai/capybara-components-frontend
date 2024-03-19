import{u as i,c as te,a as ne,r as a,d as ie,e as $,f as I,g as re,o as oe,j as e,R as ae,F as E,h as N,B as Z,i as se,n as le,p as D,M as T,k as j,N as P,s as de,H as ce,l as pe,m as he}from"./index-835bd857.js";const xe=i.div`
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
  background: var(--white);
  border: 1px solid var(--secondary-white);
  border-radius: 10px;
  padding: 8px 20px;
  width: 164px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: var(--black);
    min-width: 124px;
    margin-bottom: 12px;
  }

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: var(--blue);
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
`,ue=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,me=i.div`
  /* padding: 24px 12px; */
  /* width: 280px; */
  /* display: flex; */
  /* flex-direction: column; */
  width: 256px;
  overflow: auto;
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
    /* box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: var(--blue);
    border-radius: 10px;
    padding: 8px 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    color: var(--white);
    border: none; */
    width: 256px;
    @media (min-width: 768px) {
      width: 160px;
      align-self: flex-end;
    }
    /* &:hover,
    &:focus {
      box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
    } */
    /* &:active {
      box-shadow: none;
    } */
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
`,ge=i.div`
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
`,fe=i.p`
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
`,be=i.div`
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
`,we=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,W=i.div`
  &:last-child {
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ce=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
  }
`,ye=i.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;i.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  input {
    width: auto;
  }
`;const B=i.p`
  margin-top: -16px;
  color: var(--secondary-red);
  font-size: 14px;
  line-height: 1.29;
`,ve=te().shape({norma:ne().matches(/^(0\.1|[1-9](\.\d)?|1[0-4](\.\d)?|15)$/,"The amount of water must be a number in a range from 0.1 to 15 (one digit after the decimal point is allowed)").required()}),je=({onClose:t})=>{const[n,o]=a.useState("0"),[r,s]=a.useState("0"),[d,u]=a.useState("1.8"),[h,p]=a.useState(!0),g=ie(),{gender:b}=$(I),{register:x,handleSubmit:m,formState:{errors:l}}=re({mode:"onChange",defaultValues:{},resolver:oe(ve)});a.useEffect(()=>{if(h&&n>0){const c=n*.03+r*.4;u(c.toFixed(1))}if(!h&&n>0){const c=n*.04+r*.6;u(c.toFixed(1))}},[n,r,d,h]);async function w(c){const F={waterRate:(c.norma*1e3).toString()};g(se(F)).unwrap().then(()=>{t()}).catch(L=>{console.log(L),le.Notify.failure(L.message,D)})}function v(){return b==="female"||b===null?"female":"male"}return e.jsxs(me,{children:[e.jsx("h2",{children:"My daily norma"}),e.jsxs(ge,{children:[e.jsxs("p",{children:["For girl: ",e.jsx("span",{children:"V=(M*0,03) + (T*0,4)"})]}),e.jsxs("p",{children:["For man: ",e.jsx("span",{children:"V=(M*0,04) + (T*0,6)"})]})]}),e.jsxs(fe,{children:[e.jsx("span",{children:"*"})," V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)"]}),e.jsx("h3",{children:"Calculate your rate:"}),e.jsxs("form",{action:"",onSubmit:m(w),children:[e.jsxs(ae,{defaultValue:v(),name:"radio-buttons-group",row:!0,sx:{marginBottom:"16px"},children:[e.jsx(E,{value:"female",control:e.jsx(N,{}),label:"For woman",onChange:()=>p(!0),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25,letterSpacing:"0"},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}}),e.jsx(E,{value:"male",control:e.jsx(N,{}),label:"For man",onChange:()=>p(!1),sx:{"& .MuiSvgIcon-root":{fontSize:18},"& .MuiFormControlLabel-label":{fontSize:16,lineHeight:1.25},"& .MuiRadio-colorPrimary":{color:"#407bff"},"& .MuiRadio-colorPrimary.Mui-checked":{color:"#407bff"}}})]}),e.jsxs(we,{children:[e.jsxs(W,{children:[e.jsx("label",{htmlFor:"weight",children:"Your weight in kilograms:"}),e.jsx("input",{type:"text",...x("weight"),name:"weight",id:"weight",placeholder:"0",onChange:c=>{o(c.target.value)},onFocus:c=>c.target.placeholder="",onBlur:c=>c.target.placeholder="0",autoComplete:"off"}),l.weight&&e.jsx(B,{children:l.weight.message})]}),e.jsxs(W,{children:[e.jsx("label",{htmlFor:"sports-time",children:"The time of active participation in sports or other activities with a high physical load in hours:"}),e.jsx("input",{type:"text",...x("sports"),name:"sports",id:"sports-time",placeholder:"0",onChange:c=>s(c.target.value),onFocus:c=>c.target.placeholder="",onBlur:c=>c.target.placeholder="0",autoComplete:"off"})]})]}),e.jsxs(be,{children:[e.jsx("p",{children:"The required amount of water in liters per day:"}),e.jsx("p",{children:e.jsxs("span",{children:[d," L"]})})]}),e.jsxs(Ce,{children:[e.jsx("label",{htmlFor:"norma",children:"Write down how much water you will drink:"}),e.jsx("input",{type:"text",...x("norma",{max:15}),name:"norma",id:"norma",placeholder:"0",onFocus:c=>c.target.placeholder="",onBlur:c=>c.target.placeholder="0",autoComplete:"off"}),l.norma&&e.jsx(B,{children:l.norma.message})]}),e.jsx(ye,{children:e.jsx(Z,{type:"submit",children:"Save"})})]})]})},Me=()=>{const[t,n]=a.useState(!1),{waterRate:o}=$(I),r=o/1e3;return e.jsxs(e.Fragment,{children:[e.jsxs(xe,{children:[e.jsx("h2",{children:"My daily norma"}),e.jsxs(ue,{children:[e.jsxs("p",{children:[r," L"]}),e.jsx("button",{onClick:()=>n(!0),children:"Edit"})]})]}),t&&e.jsx(T,{open:t,onClose:()=>n(!1),children:e.jsx(je,{onClose:()=>n(!1)})})]})};var V={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},H=j.createContext&&j.createContext(V),Se=["attr","size","title"];function ke(t,n){if(t==null)return{};var o=ze(t,n),r,s;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(s=0;s<d.length;s++)r=d[s],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function ze(t,n){if(t==null)return{};var o={},r=Object.keys(t),s,d;for(d=0;d<r.length;d++)s=r[d],!(n.indexOf(s)>=0)&&(o[s]=t[s]);return o}function k(){return k=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},k.apply(this,arguments)}function R(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),o.push.apply(o,r)}return o}function z(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?R(Object(o),!0).forEach(function(r){Fe(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):R(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function Fe(t,n,o){return n=Le(n),n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}function Le(t){var n=De(t,"string");return typeof n=="symbol"?n:String(n)}function De(t,n){if(typeof t!="object"||t===null)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function _(t){return t&&t.map((n,o)=>j.createElement(n.tag,z({key:o},n.attr),_(n.child)))}function M(t){return n=>j.createElement(Te,k({attr:z({},t.attr)},n),_(t.child))}function Te(t){var n=o=>{var{attr:r,size:s,title:d}=t,u=ke(t,Se),h=s||o.size||"1em",p;return o.className&&(p=o.className),t.className&&(p=(p?p+" ":"")+t.className),j.createElement("svg",k({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,r,u,{className:p,style:z(z({color:t.color||o.color},o.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&j.createElement("title",null,d),t.children)};return H!==void 0?j.createElement(H.Consumer,null,o=>n(o)):n(V)}function Oe(t){return M({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(t)}function Ee(t){return M({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"},child:[]}]})(t)}const Ne=i.div`
  display: flex;
  flex-direction: column;
  margin-top: -180px;
`,Pe=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,We=i.h2`
  color: var(--black);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`,A=i.button`
  width: 14px;
  height: 14px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  .nav {
    width: 14px;
    height: 14px;
    fill: var(--blue);
  }

  &:disabled {
    fill: var(--secondary-blue);
    cursor: not-allowed;
  }
`,Be=i.div`
  position: relative;
  width: 100%;
  column-gap: 26px;
  row-gap: 16px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    column-gap: 34px;
    row-gap: 20px;
    column-gap: 34px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 22px;
  }
`,He=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,S=i.div`
  display: none;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 0;
  transform: translate(0, -100%);
  transition: all 0.2s ease-in-out;
  width: 280px;
  height: 188px;

  background-color: var(--white);
  border-radius: 10px;
  padding: 24px 13px;
  z-index: 2;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);

  @media screen and (max-width: 768px) {
    position: fixed;
    left: ${t=>t.x-140}px;
    top: ${t=>t.y-35}px;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 16px;
    width: 292px;
  }

  @media screen and (min-width: 1440px) {
  }

  h3 {
    color: var(--blue);
    font-size: 16px;
    line-height: 1.25;
    margin: 0;
  }
  span {
    color: var(--blue);
    font-weight: 500;
    line-height: 1.33;
    font-size: 18px;
  }
  p {
    color: var(--black);
    font-size: 16px;
    line-height: 1.25;
  }
`,Re=i.div`
  color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 170px;
`,Ae=i.span`
  font-size: 16px;
  line-height: 20px;
`,$e=i.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${t=>t.$isToday?"rgba(215, 227, 255, 1)":"var( --white)"};
  display: flex;
  align-items: center;
  justify-content: center;
  outline: ${t=>t.$isOutlineVisible?"1px solid var(--secondary-orange)":"none"};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;

  &:hover ${S} {
    display: flex;
  }

  @media (min-width: 768px) {
    &:hover ${S}.right {
      left: auto;
      right: 100%;
      top: -10%;
    }

    &:hover ${S}.left {
      left: 100%;
      right: auto;
      top: -10%;
    }
  }
  @media screen and (min-width: 768px) {
    gap: 34px;
    row-gap: 20px;
    width: 34px;
    height: 34px;
  }
`,Ie=i.span`
  color: var(--secondary-blue);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  align-items: center;
  margin-top: 4px;
  line-height: 1.6;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    line-height: 1.54;
  }
  @media screen and (min-width: 1440px) {
    font-size: 12px;
    line-height: 1.5;
  }
`,Ze=()=>{const t=[31,28,31,30,31,30,31,31,30,31,30,31],n=[31,29,31,30,31,30,31,31,30,31,30,31],o=["January","February","March","April","May","June","Jule","August","September","October","November","December"],r=new Date,[s,d]=a.useState(r),[u,h]=a.useState(s.getDate()),[p,g]=a.useState(s.getMonth()),[b,x]=a.useState(s.getFullYear()),[m,l]=a.useState({x:0,y:0}),w=a.useRef(null);function v(C){return C%4===0&&C%100!==0||C%400===0}const c=v(s.getFullYear())?n:t,O=s.toLocaleString("en-US",{month:"long"}),F=()=>s.getMonth()===r.getMonth()&&s.getFullYear()===r.getFullYear();function L(){}return e.jsxs(Ne,{children:[e.jsxs(Pe,{children:[e.jsx(We,{children:"Month"}),e.jsxs(Re,{children:[e.jsx(A,{onClick:()=>{const C=new Date(b,p-1,u);x(C.getFullYear()),g(C.getMonth()),h(C.getDate()),d(C)},children:e.jsx(Oe,{className:"nav"})}),e.jsx(Ae,{children:`${o[p]}, ${b}`}),e.jsx(A,{onClick:()=>d(new Date(b,p+1,u)),disabled:F(),children:e.jsx(Ee,{className:"nav"})})]})]}),e.jsx(Be,{ref:w,children:c[p]?Array(c[p]).fill(null).map((C,U)=>{const f=U+1,q=f===r.getDate()&&p===r.getMonth()&&b===r.getFullYear(),J=f===u;let y=void 0;const K=f<=5||f>=11&&f<=15||f>=21&&f<=25||f===31;y||(y={percentage:0,recordsWaterConsumption:0});const Q=y.percentage>0&&y.percentage<100;return e.jsxs(He,{children:[e.jsxs($e,{$isToday:q,$isSelected:J,$isOutlineVisible:Q,onMouseEnter:X=>{const ee=X.target.getBoundingClientRect();l({x:m.x,y:ee.bottom})},onClick:()=>{h(f)},children:[f,e.jsx(S,{x:m.x,y:m.y,className:K?"left":"right",children:e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[f,", ",O," "]}),e.jsxs("p",{children:["Daily norma: ",e.jsx("span",{children:y.dailyNorma})]}),e.jsxs("p",{children:["Fulfillment of the daily norm:"," ",e.jsxs("span",{children:[y.percentage,"%"]})]}),e.jsxs("p",{children:["How many servings of water:"," ",e.jsx("span",{children:y.recordsWaterConsumption})]})]})})]}),e.jsxs(Ie,{children:[y.percentage,"%"]})]},`${f}-${p+1}`)}):null})]})},Ve=i.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 209px;

  width: 592px;
  height: 680px;

  margin-top: calc(-10px + 0px);

  border-radius: 10px;
  background: var(--secondary-white);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
  }

  @media only screen and (min-width: 1440px) {
    height: 680px;
  }
`;function _e(t){return M({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Trash"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M19.45,4.06H15.27v-.5a1.5,1.5,0,0,0-1.5-1.5H10.23a1.5,1.5,0,0,0-1.5,1.5v.5H4.55a.5.5,0,0,0,0,1h.72l.42,14.45a2.493,2.493,0,0,0,2.5,2.43h7.62a2.493,2.493,0,0,0,2.5-2.43l.42-14.45h.72A.5.5,0,0,0,19.45,4.06Zm-9.72-.5a.5.5,0,0,1,.5-.5h3.54a.5.5,0,0,1,.5.5v.5H9.73Zm7.58,15.92a1.5,1.5,0,0,1-1.5,1.46H8.19a1.5,1.5,0,0,1-1.5-1.46L6.26,5.06H17.74Z"},child:[]},{tag:"path",attr:{d:"M8.375,8h0a.5.5,0,0,1,1,0l.25,10a.5.5,0,0,1-1,0Z"},child:[]},{tag:"path",attr:{d:"M15.625,8.007a.5.5,0,0,0-1,0h0l-.25,10a.5.5,0,0,0,1,0Z"},child:[]}]}]}]})(t)}function Ye(t){return M({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function Ge(t){return M({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"},child:[]}]})(t)}const Y=t=>a.createElement("svg",{width:36,height:36,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M6.26099 3.13043L8.39972 32.7888V32.8696H26.8122L28.9509 3.22275V3.13043H6.26099ZM26.0557 32.0387H9.16193L7.55788 9.82376H8.43954L9.89002 29.4017C9.89851 29.5048 9.94461 29.601 10.0193 29.6714C10.094 29.7418 10.1919 29.7815 10.2939 29.7826H10.328C10.3811 29.7789 10.4329 29.7646 10.4806 29.7406C10.5282 29.7165 10.5707 29.6832 10.6056 29.6424C10.6404 29.6017 10.667 29.5544 10.6838 29.5031C10.7006 29.4519 10.7073 29.3979 10.7034 29.344L9.25294 9.82376H27.6597L26.0557 32.0387ZM27.7166 8.99286H9.19037L8.87184 4.66528C8.86183 4.5597 8.81293 4.46184 8.7349 4.39125C8.65687 4.32065 8.55546 4.28251 8.45092 4.28445C8.34378 4.29473 8.24477 4.34679 8.17474 4.42968C8.1047 4.51256 8.06913 4.61978 8.0755 4.72875L8.39404 8.99863H7.501L7.13696 3.95556H28.0807L27.7166 8.99286Z",fill:"#407BFF"}),a.createElement("path",{d:"M12.7797 13.9321C13.0452 13.9321 13.3047 13.8522 13.5255 13.7026C13.7462 13.553 13.9183 13.3403 14.0199 13.0914C14.1215 12.8426 14.1481 12.5688 14.0963 12.3047C14.0445 12.0405 13.9166 11.7979 13.7289 11.6074C13.5411 11.417 13.3019 11.2873 13.0415 11.2348C12.7811 11.1822 12.5112 11.2092 12.2659 11.3122C12.0206 11.4153 11.811 11.5898 11.6635 11.8138C11.516 12.0377 11.4373 12.301 11.4373 12.5703C11.4373 12.9315 11.5787 13.2779 11.8304 13.5332C12.0822 13.7886 12.4236 13.9321 12.7797 13.9321ZM12.7797 12.0337C12.8843 12.0337 12.9866 12.0652 13.0735 12.1241C13.1605 12.1831 13.2283 12.2669 13.2684 12.365C13.3084 12.463 13.3189 12.5709 13.2985 12.675C13.2781 12.7791 13.2277 12.8747 13.1537 12.9498C13.0797 13.0248 12.9855 13.0759 12.8829 13.0966C12.7802 13.1173 12.6739 13.1067 12.5772 13.0661C12.4806 13.0255 12.3979 12.9567 12.3398 12.8685C12.2817 12.7802 12.2507 12.6765 12.2507 12.5703C12.2507 12.428 12.3064 12.2915 12.4056 12.1909C12.5048 12.0902 12.6394 12.0337 12.7797 12.0337Z",fill:"#407BFF"}),a.createElement("path",{d:"M12.7738 18.3578C12.7772 18.6266 12.8589 18.8883 13.0087 19.1101C13.1585 19.3319 13.3696 19.5037 13.6155 19.604C13.8614 19.7042 14.1311 19.7284 14.3905 19.6734C14.6499 19.6185 14.8875 19.4869 15.0733 19.2952C15.2591 19.1035 15.3848 18.8603 15.4346 18.5962C15.4844 18.3322 15.456 18.0591 15.353 17.8114C15.2501 17.5637 15.0772 17.3524 14.856 17.2042C14.6349 17.0561 14.3755 16.9776 14.1105 16.9787C13.9332 16.9794 13.7579 17.0158 13.5946 17.0856C13.4312 17.1555 13.2832 17.2575 13.1589 17.3857C13.0346 17.5139 12.9366 17.6658 12.8705 17.8327C12.8044 17.9995 12.7715 18.178 12.7738 18.3578ZM14.6395 18.3578C14.6395 18.4639 14.6085 18.5676 14.5503 18.6559C14.4922 18.7441 14.4096 18.8129 14.3129 18.8535C14.2163 18.8941 14.1099 18.9048 14.0073 18.8841C13.9047 18.8634 13.8104 18.8122 13.7364 18.7372C13.6625 18.6622 13.6121 18.5665 13.5917 18.4624C13.5713 18.3583 13.5817 18.2505 13.6218 18.1524C13.6618 18.0543 13.7296 17.9705 13.8166 17.9116C13.9036 17.8526 14.0059 17.8211 14.1105 17.8211C14.2508 17.8211 14.3854 17.8777 14.4846 17.9783C14.5838 18.0789 14.6395 18.2154 14.6395 18.3578Z",fill:"#407BFF"}),a.createElement("path",{d:"M22.3129 18.3924C22.5784 18.3924 22.8379 18.3125 23.0587 18.1629C23.2794 18.0132 23.4515 17.8006 23.5531 17.5517C23.6547 17.3029 23.6813 17.0291 23.6295 16.765C23.5777 16.5008 23.4498 16.2582 23.2621 16.0677C23.0743 15.8773 22.8351 15.7476 22.5747 15.6951C22.3143 15.6425 22.0444 15.6695 21.7991 15.7725C21.5539 15.8756 21.3442 16.0501 21.1967 16.2741C21.0492 16.498 20.9705 16.7613 20.9705 17.0306C20.9705 17.3918 21.1119 17.7382 21.3636 17.9935C21.6154 18.2489 21.9568 18.3924 22.3129 18.3924ZM22.3129 16.4998C22.4177 16.4998 22.5202 16.5314 22.6073 16.5906C22.6944 16.6499 22.7622 16.734 22.8021 16.8324C22.842 16.9308 22.8521 17.039 22.8312 17.1432C22.8104 17.2475 22.7594 17.3431 22.6849 17.4179C22.6103 17.4927 22.5155 17.5434 22.4125 17.5634C22.3095 17.5835 22.203 17.572 22.1064 17.5305C22.0099 17.489 21.9277 17.4193 21.8702 17.3303C21.8128 17.2413 21.7827 17.137 21.7839 17.0306C21.7854 16.8893 21.8418 16.7543 21.9408 16.6549C22.0398 16.5555 22.1735 16.4998 22.3129 16.4998Z",fill:"#407BFF"}),a.createElement("path",{d:"M17.6373 15.8247C17.9028 15.8247 18.1624 15.7448 18.3831 15.5952C18.6039 15.4455 18.7759 15.2329 18.8775 14.984C18.9791 14.7352 19.0057 14.4614 18.9539 14.1972C18.9021 13.9331 18.7743 13.6905 18.5865 13.5C18.3988 13.3096 18.1596 13.1799 17.8992 13.1273C17.6388 13.0748 17.3689 13.1018 17.1236 13.2048C16.8783 13.3079 16.6687 13.4824 16.5212 13.7064C16.3737 13.9303 16.2949 14.1936 16.2949 14.4629C16.2949 14.8241 16.4364 15.1704 16.6881 15.4258C16.9399 15.6812 17.2813 15.8247 17.6373 15.8247ZM17.6373 13.9263C17.7419 13.9263 17.8442 13.9578 17.9312 14.0167C18.0182 14.0757 18.086 14.1595 18.126 14.2576C18.1661 14.3556 18.1766 14.4635 18.1562 14.5676C18.1357 14.6717 18.0854 14.7673 18.0114 14.8424C17.9374 14.9174 17.8431 14.9685 17.7405 14.9892C17.6379 15.0099 17.5315 14.9993 17.4349 14.9587C17.3382 14.9181 17.2556 14.8493 17.1975 14.761C17.1394 14.6728 17.1083 14.569 17.1083 14.4629C17.1045 14.3901 17.1153 14.3172 17.1401 14.2487C17.165 14.1802 17.2033 14.1176 17.2528 14.0647C17.3024 14.0117 17.362 13.9696 17.4281 13.9409C17.4942 13.9121 17.5654 13.8973 17.6373 13.8974V13.9263Z",fill:"#407BFF"}),a.createElement("path",{d:"M15.0776 23.5451C15.0832 23.7663 15.153 23.9809 15.2782 24.1621C15.4035 24.3433 15.5786 24.483 15.7817 24.5638C15.9848 24.6446 16.2069 24.6628 16.4201 24.6161C16.6334 24.5695 16.8283 24.4602 16.9806 24.3017C17.1329 24.1433 17.2358 23.9428 17.2763 23.7253C17.3169 23.5079 17.2933 23.2832 17.2086 23.0792C17.1239 22.8753 16.9817 22.7013 16.8 22.5789C16.6183 22.4564 16.405 22.3911 16.1868 22.3911C15.8901 22.3986 15.608 22.5235 15.4007 22.7391C15.1935 22.9547 15.0775 23.2439 15.0776 23.5451ZM16.1868 23.245C16.2453 23.245 16.3025 23.2626 16.3512 23.2956C16.3998 23.3286 16.4377 23.3754 16.4601 23.4302C16.4825 23.4851 16.4883 23.5454 16.4769 23.6036C16.4655 23.6618 16.4373 23.7153 16.396 23.7572C16.3546 23.7992 16.3019 23.8278 16.2445 23.8394C16.1872 23.8509 16.1277 23.845 16.0736 23.8223C16.0196 23.7996 15.9734 23.7611 15.9409 23.7118C15.9084 23.6624 15.891 23.6044 15.891 23.5451C15.891 23.4655 15.9222 23.3892 15.9777 23.3329C16.0331 23.2766 16.1084 23.245 16.1868 23.245Z",fill:"#407BFF"}),a.createElement("path",{d:"M20.4414 22.2929C20.6691 22.301 20.894 22.2394 21.0868 22.1163C21.2797 21.9932 21.4317 21.8142 21.523 21.6024C21.6144 21.3907 21.641 21.1559 21.5994 20.9287C21.5577 20.7014 21.4497 20.4921 21.2894 20.3278C21.1292 20.1635 20.9239 20.0519 20.7003 20.0073C20.4767 19.9627 20.2451 19.9872 20.0354 20.0777C19.8258 20.1682 19.6477 20.3205 19.5244 20.5149C19.401 20.7092 19.338 20.9367 19.3436 21.1678C19.3507 21.4619 19.4683 21.7423 19.6723 21.9514C19.8764 22.1606 20.1515 22.2827 20.4414 22.2929ZM20.4414 20.8677C20.5199 20.8677 20.5951 20.8993 20.6506 20.9556C20.706 21.0119 20.7372 21.0882 20.7372 21.1678C20.7372 21.2474 20.706 21.3237 20.6506 21.3799C20.5951 21.4362 20.5199 21.4678 20.4414 21.4678C20.3624 21.4678 20.2866 21.4364 20.2302 21.3803C20.1738 21.3242 20.1414 21.2479 20.1399 21.1678C20.1399 21.1279 20.1478 21.0884 20.163 21.0516C20.1782 21.0148 20.2005 20.9815 20.2286 20.9535C20.2566 20.9256 20.2899 20.9036 20.3265 20.8889C20.363 20.8742 20.4021 20.867 20.4414 20.8677Z",fill:"#407BFF"}),a.createElement("path",{d:"M22.7851 12.98C23.0101 12.98 23.23 12.9123 23.4171 12.7855C23.6042 12.6587 23.75 12.4785 23.8361 12.2676C23.9222 12.0567 23.9448 11.8247 23.9009 11.6008C23.857 11.377 23.7486 11.1714 23.5895 11.01C23.4304 10.8486 23.2277 10.7387 23.007 10.6941C22.7863 10.6496 22.5576 10.6725 22.3497 10.7598C22.1419 10.8472 21.9642 10.9951 21.8392 11.1848C21.7142 11.3746 21.6475 11.5977 21.6475 11.826C21.6475 12.1321 21.7673 12.4256 21.9807 12.642C22.194 12.8584 22.4834 12.98 22.7851 12.98ZM22.7851 11.5548C22.8291 11.542 22.8754 11.5398 22.9205 11.5483C22.9655 11.5568 23.0079 11.5758 23.0445 11.6038C23.081 11.6317 23.1107 11.6679 23.1311 11.7095C23.1515 11.7511 23.1621 11.7969 23.1621 11.8433C23.1621 11.8897 23.1515 11.9355 23.1311 11.9771C23.1107 12.0187 23.081 12.0549 23.0445 12.0828C23.0079 12.1108 22.9655 12.1298 22.9205 12.1383C22.8754 12.1468 22.8291 12.1446 22.7851 12.1318C22.7411 12.1446 22.6947 12.1468 22.6497 12.1383C22.6047 12.1298 22.5623 12.1108 22.5257 12.0828C22.4892 12.0549 22.4595 12.0187 22.4391 11.9771C22.4187 11.9355 22.4081 11.8897 22.4081 11.8433C22.4081 11.7969 22.4187 11.7511 22.4391 11.7095C22.4595 11.6679 22.4892 11.6317 22.5257 11.6038C22.5623 11.5758 22.6047 11.5568 22.6497 11.5483C22.6947 11.5398 22.7411 11.542 22.7851 11.5548Z",fill:"#407BFF"}),a.createElement("path",{d:"M11.6646 30.5904C11.6136 30.6142 11.568 30.6485 11.5306 30.691C11.4931 30.7335 11.4647 30.7834 11.4471 30.8375C11.4295 30.8916 11.4231 30.9488 11.4282 31.0056C11.4333 31.0623 11.4499 31.1174 11.4769 31.1674C11.5119 31.2348 11.5642 31.2913 11.6283 31.3309C11.6924 31.3705 11.7659 31.3918 11.841 31.3924C11.904 31.3942 11.9665 31.3803 12.023 31.352C13.7609 30.4488 15.6845 29.9744 17.6372 29.9672C19.7037 29.9977 21.7414 30.4634 23.6211 31.3347C23.6955 31.3741 23.78 31.3894 23.8632 31.3785C23.9464 31.3675 24.0243 31.331 24.0863 31.2737C24.1484 31.2164 24.1916 31.1412 24.2101 31.0582C24.2286 30.9752 24.2216 30.8884 24.1899 30.8096C24.1499 30.7073 24.0724 30.6246 23.9738 30.5788C21.9837 29.6554 19.8254 29.164 17.6372 29.1363C15.5614 29.1381 13.5152 29.6363 11.6646 30.5904Z",fill:"#407BFF"})),Ue=i.div`
  svg {
    width: 26px;
    height: 26px;
    fill: var(--blue);
    margin-right: 12px;
  }
`,qe=i.div`
  min-width: 264px;
  max-height: 258px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 276px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`,Je=i.h2`
  margin: 0 0 16px 0;
  text-align: left;
  color: var(--black);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`,Ke=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: inherit;
  max-height: 212px;
  @media screen and (min-width: 768px) {
    height: 260px;
  }
  @media only screen and (min-width: 1440px) {
  }
`,Qe=i.ul`
  height: 212px;
  overflow-y: auto;
  padding: 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 5px;
    background: var(--secondary-lightblue);
    border-radius: 50px;
    border: 1px solid var(--secondary-white);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-blue);
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--blue);
  }
`,Xe=i.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 38px;
  padding: 12px 0 12px 0;
  margin: 0 4px 0 0;
  border-bottom: 1px solid var(--secondary-lightblue);
`,e1=i.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & svg {
    width: 26px;
    height: 26px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
    @media only screen and (min-width: 1440px) {
    }
    & use {
      fill: var(--blue);
    }
  }
`,t1=i.div`
  display: flex;
  flex-direction: row;
  gap: 18px;

  & svg {
    width: 16px;
    height: 16px;
  }
`,n1=i.p`
  color: var(--blue);
  font-size: 18px;
  line-height: 1.33;
  margin: 0 12px 0 0;

  @media screen and (min-width: 768px) {
    margin: 0 16px 0 0;
  }
`,i1=i.p`
  color: var(--black);
  font-size: 12px;
  line-height: 2;
`,r1=i.button`
  width: 16px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  color: var(--secondary-blue);

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--secondary-blue);
    cursor: pointer;
  }
`,o1=i.button`
  width: 16px;
  height: 18px;
  padding: 0;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  color: var(--secondary-red);

  &:hover,
  &:focus {
    border-bottom: 1px solid var(--secondary-red);
    cursor: pointer;
  }
`;i.li`
  list-style: none;
`;const a1=i.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  color: var(--black);
  font-size: 18px;
  font-weight: 500;
  line-height: 133.3%;
`,s1=i.button`
  display: flex;
  gap: 8px;
  margin-left: 5px;
  color: var(--blue);
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  & svg {
    width: 16px;
    height: 16px;
    & use {
      fill: var(--blue);
    }
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--secondary-orange);
    & use {
      fill: var(--secondary-orange);
    }
  }
`,l1=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 16 16",fill:"none",...t},a.createElement("path",{d:"M8 4V12M12 8H4",stroke:"",strokeLinecap:"round",strokeLinejoin:"round"})),d1=t=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...t},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12Z",fill:""})),c1=i.div`
  width: 100vw;
  max-width: calc(280px - 24px);
  @media only screen and (min-width: 768px) {
    max-width: calc(704px - 48px);
  }

  @media only screen and (min-width: 1440px) {
    max-width: calc(592px - 48px);
  }
`,p1=i.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`,h1=i.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`,x1=i.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
`,u1=i.div`
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
    border: var(1px solid --secondary-blue);
    background: var(--white);

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
    background: var(--secondary-lightblue);
    color: var(--blue);

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`,m1=i(l1)`
  stroke: var(--blue);
`,g1=i(d1)`
  stroke: var(--blue);
  fill: var(--blue);
`,f1=i.form`
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
    border: 1px solid var(--secondary-blue);

    appearance: none;

    color: var(--blue);
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
`,b1=i.div`
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

    color: var(--white);
    background: var(--blue);

    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

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
`,w1=i.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: var(--secondary-white);
  margin-bottom: 24px;
`,C1=i(Y)`
  width: 36px;
  height: 36px;
`,y1=i.p`
  color: var(--blue);
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`,v1=i.p`
  font-size: 12px;
  line-height: 2;
`,G=({isEditing:t,data:n,onClose:o})=>{const[r,s]=a.useState(t?n.amountWater:0),[d,u]=a.useState(t?new Date(n.time):new Date),h=x=>{const{name:m}=x.currentTarget;switch(m){case"minus":s(l=>Math.max(l-50,0));break;case"plus":s(l=>Math.min(l+50,5e3));break}},p=x=>{const m=x.target.value,[l,w]=m.split(":").map(Number),v=new Date(d);v.setHours(l),v.setMinutes(w),u(v)},g=x=>{if(x.preventDefault(),r===0){P.Notify.warning("A non-zero value must be entered for the amount of water",D);return}if(r<0||r===""){P.Notify.warning("It is necessary to enter a positive value for the amount of water",D);return}o()},b=t?"Edit the entered amount of water":"Add water";return e.jsxs(c1,{children:[e.jsx(p1,{children:b}),e.jsx("div",{children:t&&e.jsxs(w1,{children:[e.jsx(C1,{}),e.jsxs(x1,{children:[n.amountWater,"ml"]}),e.jsx(v1,{children:new Date(n.time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})}),e.jsx(h1,{children:t?"Correct entered data:":"Choose a value:"}),e.jsx(y1,{children:"Amount of water:"}),e.jsxs(u1,{children:[e.jsx("button",{type:"button",name:"minus",onClick:h,disabled:r===0,children:e.jsx(g1,{"aria-label":"minus_button"})}),e.jsxs("span",{children:[r,"ml"]}),e.jsx("button",{type:"button",name:"plus",onClick:h,children:e.jsx(m1,{"aria-label":"plus_button"})})]}),e.jsxs(f1,{children:[e.jsxs("label",{children:["Recording time:",e.jsx("input",{type:"time",value:d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),onChange:p})]}),e.jsxs("label",{children:["Enter the value of the water used:",e.jsx("input",{name:"input",type:"number",value:r,onChange:x=>h(x),min:"1",max:"5000"})]}),e.jsxs(b1,{children:[e.jsxs("p",{children:[r,"ml"]}),e.jsx("button",{onClick:g,children:"Save"})]})]})]})},j1=()=>{const[t,n]=a.useState(!1),[o,r]=a.useState(null),[s,d]=a.useState(!1),[u]=a.useState([]),h=l=>new Date(l).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),p=(l,w)=>{r(l),n(!0),d(!1),w.stopPropagation()},g=()=>{n(!1)},b=l=>{n(!0),d(!1),l.stopPropagation()},x=l=>{r(l)},m=u.map(l=>e.jsxs(Xe,{children:[e.jsxs(e1,{children:[e.jsxs(Ue,{children:[" ",e.jsx(Y,{})," "]}),e.jsxs(n1,{children:[l.amountWater," ml"]}),e.jsx(i1,{children:h(l.time)})]}),e.jsxs(t1,{children:[e.jsx(r1,{onClick:w=>p(l,w),children:e.jsx(Ge,{})}),e.jsx(o1,{onClick:()=>x(l),children:e.jsx(_e,{})})]})]},l._id));return e.jsxs(qe,{children:[e.jsx(Je,{children:"Today"}),e.jsxs(Ke,{children:[e.jsx(Qe,{children:(m==null?void 0:m.length)>0?m:e.jsx("li",{children:e.jsx(a1,{children:"Did you drink water today?"})})}),e.jsxs(s1,{onClick:l=>b(l),children:[e.jsx(Ye,{}),"Add water"]})]}),t&&e.jsx(T,{$position:"center",open:t,onClose:g,children:e.jsx(G,{onClose:g,isEditing:s,data:o})})]})},M1=()=>e.jsxs(Ve,{children:[e.jsx(j1,{}),e.jsx(Ze,{})]}),S1=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 280px;
  width: 100%;
  height: 82px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 704px;
    height: 90px;
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 592px;
    height: 106px;
    gap: 32px;
  }
`,k1=i.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`,z1=i.p`
  color: var(--blue);
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 17px;
`,F1=i.input`

  &[type='range'] {
    height: 8px;
    border-radius: 8px;
    appearance: none;
    background: linear-gradient(
      to right,
      var(--secondary-blue) 0%,
      var(--secondary-blue) ${t=>t.value}%,
      var(--secondary-lightblue) ${t=>t.value}%,
      var(--secondary-lightblue) 100%
    );
    margin-left: 10px;
    margin-bottom: 4px;
    margin-right: 14px;
  }
  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: var(--white);
    border-radius: 50%;
    border: solid 1px var(--blue);
    appearance: none;
  }
  @media screen and (min-width: 768px) {
    width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
  }
  @media screen and (max-width: 767px) {
    /* max-width: 255px; */
    padding-right: 10px
    width: 100%;
    m
  }
`,L1=i.div`
  display: flex;
  justify-content: space-between;
  span {
    color: var(--blue);
    font-size: 12px;
    line-height: 1.3;
  }
`,D1=i(Z)`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    fill: none;
    stroke: var(--white);
  }
`,T1=()=>{const[r,s]=a.useState(!1),[d,u]=a.useState(!1),h=g=>{s(!0),u(!1),g.stopPropagation()},p=()=>{s(!1)};return e.jsxs(S1,{children:[e.jsxs(k1,{children:[e.jsx(z1,{children:"Today"}),e.jsx(F1,{type:"range",min:"0",max:"100",value:75,disabled:!0}),e.jsxs(L1,{children:[e.jsx("span",{children:"0%"}),e.jsx("span",{children:"50%"}),e.jsx("span",{children:"100%"})]})]}),e.jsxs(D1,{onClick:g=>h(g),children:[e.jsx("svg",{width:24,height:24,children:e.jsx("use",{href:`${de}#plus-circle`})}),"Add water"]}),r&&e.jsx(T,{$position:"center",open:r,onClose:p,children:e.jsx(G,{onClose:p,isEditing:d})})]})},E1=()=>e.jsxs(ce,{children:[e.jsxs(pe,{className:"left",children:[e.jsx(Me,{}),e.jsx(T1,{})]}),e.jsx(he,{className:"right",children:e.jsx(M1,{})})]});export{E1 as default};
