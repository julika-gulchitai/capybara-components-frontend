import{x as b,ac as q,a as S,ad as w,D as _,N as r,ae as k,F as v,G as N,j as s,af as T,ag as c,ah as h,ai as A,aj as x,ak as E,al as F,Q as l,am as D}from"./index-68a7ab48.js";const M=({signUp:a})=>{const p=b(),u=q(),{t:e}=S(),t=w.useMediaQuery({query:"(min-width: 768px)"}),i=w.useMediaQuery({query:"(min-width: 1439px)"}),f=_().shape({email:r().email(e("auth.Please write valid email")).required(e("forgotPass.email")),password:r().min(8,e("resetPass.Password must be at least 8 characters")).max(64).required(e("auth.Password is required")),repeat_password:a?r().oneOf([k("password"),null],e("resetPass.Passwords don't match, please try again.")).min(8,e("resetPass.Password must be at least 8 characters")).required(e("resetPass.Confirm password is required")):r()}).required(),j=({email:g,password:P})=>{const m={email:g,password:P};a?p(F(m)).unwrap().then(()=>{u("/home"),l.Notify.success(e("auth.A message with a confirmation link has been sent to your email address. Please folow the link to activate your account."),{timeout:5e3,width:"460px",height:"200px",messageMaxLength:500,fontSize:"14px",position:"center-top"})}).catch(d=>{l.Notify.warning(d)}):p(D(m)).unwrap().then(()=>{u("/home")}).catch(d=>{l.Notify.warning(d)})},{register:o,handleSubmit:y,formState:{errors:n}}=v({mode:a?"onChange":"onSubmit",resolver:N(f)});return s.jsx(T,{children:s.jsxs("form",{onSubmit:y(j),children:[s.jsxs(c,{children:[s.jsx(h,{children:e("enterEmail")}),s.jsx(A,{register:o,error:n.email,id:"email",width:i?384:t?336:280,type:"email",placeholder:e("email")})]}),s.jsxs(c,{children:[s.jsx(h,{children:e("enterPassword")}),s.jsx(x,{error:n.password,register:o,id:"password",width:i?384:t?336:280,type:"password",placeholder:e("password")})]}),a&&s.jsxs(c,{children:[s.jsx(h,{children:e("repeatPassword")}),s.jsx(x,{error:n.repeat_password,register:o,id:"repeat_password",width:i?384:t?336:280,type:"repeat_password",placeholder:e("password")})]}),s.jsx(E,{type:"submit",children:e(a?"signup":"signin")})]})})};export{M as A};