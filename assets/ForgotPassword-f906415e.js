import{y as h,a as f,n as y,p as w,a9 as o,q as j,z as g,v as S,j as e,aj as b,ak as P,a3 as q,ad as E,ae as F,al as N,am as k,E as r,G as v,w as T}from"./index-ea3a9cd5.js";const $=()=>{const i=h(),{t:s}=f(),n=y(w),t=o.useMediaQuery({query:"(min-width: 768px)"}),a=o.useMediaQuery({query:"(min-width: 1439px)"}),l=j().shape({email:g().required(s("forgotPass.Email is required"))}).required(),c=m=>{if(i(k(m.email)).unwrap().then(()=>{r.Notify.success(s("forgotPass.Password reset link is sent to your email!"),{timeout:3e3,width:"300px",height:"200px",fontSize:"14px",position:"center-top"})}).catch(x=>{r.Notify.warning(x)}),!n){r.Notify.warning(s("forgotPass.Please enter your correct email"),v);return}},{register:d,handleSubmit:p,formState:{errors:u}}=S({mode:"onSubmit",resolver:T(l)});return e.jsx(b,{children:e.jsx(P,{children:e.jsx(q,{children:e.jsxs("form",{onSubmit:p(c),children:[e.jsxs("label",{children:[e.jsx(E,{children:s("forgotPassword")}),e.jsx(F,{error:u.email,register:d,id:"email",width:a?384:t?336:280,type:"email",placeholder:s("email")})]}),e.jsx(N,{$width:a?"384px":t?"336px":"280px",type:"submit",children:s("send")})]})})})})};export{$ as default};
