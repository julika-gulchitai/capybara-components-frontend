import{i as h,a as f,c as y,d as w,U as o,e as g,k as j,g as S,j as e,a4 as b,W as P,K as q,Z as E,_ as F,a5 as N,a6 as _,n as r,p as k,o as T}from"./index-a8358e8c.js";const $=()=>{const i=h(),{t:s}=f(),n=y(w),t=o.useMediaQuery({query:"(min-width: 768px)"}),a=o.useMediaQuery({query:"(min-width: 1439px)"}),c=g().shape({email:j().required(s("forgotPass.Email is required"))}).required(),l=m=>{if(i(_(m.email)).unwrap().then(()=>{r.Notify.success(s("forgotPass.Password reset link is sent to your email!"),{timeout:3e3,width:"300px",height:"200px",fontSize:"14px",position:"center-top"})}).catch(x=>{r.Notify.warning(x)}),!n){r.Notify.warning(s("forgotPass.Please enter your correct email"),k);return}},{register:d,handleSubmit:p,formState:{errors:u}}=S({mode:"onSubmit",resolver:T(c)});return e.jsx(b,{children:e.jsx(P,{children:e.jsx(q,{children:e.jsxs("form",{onSubmit:p(l),children:[e.jsxs("label",{children:[e.jsx(E,{children:s("forgotPassword")}),e.jsx(F,{error:u.email,register:d,id:"email",width:a?384:t?336:280,type:"email",placeholder:s("email")})]}),e.jsx(N,{$width:a?"384px":t?"336px":"280px",type:"submit",children:s("send")})]})})})})};export{$ as default};