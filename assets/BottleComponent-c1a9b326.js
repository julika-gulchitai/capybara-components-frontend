import{u as t,B as j,d as k,e as q,f as a,g as S,h as n,i as P,a as T,j as e,T as z,P as u,k as B,n as w,l as E,o as M,m as _}from"./index-cc4d2bea.js";const N=t.div`
  display: block;
  margin: 0 auto;

`,c=t.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 1.33333;

  color: var(--black);
`,W=t(j)`
  font-size: 16px;
  width: 280px;
  margin: 0;
  line-height: 1.25;
  padding: 8px 30px;
  width: 280px;
  height: 36px;
  z-index: 100;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
    padding: 10px 30px;
    width: 336px;
    height: 44px;
  }
  @media only screen and (min-width: 1440px) {
    width: 384px;
  }
`,m=t.div`
  margin-bottom: 6px;
`,C=({signUp:s})=>{const i=k(),h=q(),r=a.useMediaQuery({query:"(min-width: 768px)"}),o=a.useMediaQuery({query:"(min-width: 1439px)"}),g=S().shape({email:n().email("Please write valid email").required("Email is required"),password:n().min(8,"Password must be at least 8 characters").max(64).required("Password is required"),repeat_password:s?n().oneOf([P("password"),null],"Passwords don't match, please try again.").min(6,"Password must be at least 8 characters").required("Confirm password is required"):n()}).required(),y=({email:b,password:v})=>{const x={email:b,password:v};s?i(B(x)).unwrap().then(()=>{h("/signin")}).catch(l=>{w.Notify.warning(l)}):i(E(x)).unwrap().then(()=>{h("/home")}).catch(l=>{w.Notify.warning(l)})},{register:d,handleSubmit:f,formState:{errors:p}}=T({mode:s?"onChange":"onSubmit",resolver:M(g)});return e.jsx(N,{children:e.jsxs("form",{onSubmit:f(y),children:[e.jsxs(m,{children:[e.jsx(c,{children:"Enter your email"}),e.jsx(z,{register:d,error:p.email,id:"email",width:o?384:r?336:280,type:"email",placeholder:"E-mail"})]}),e.jsxs(m,{children:[e.jsx(c,{children:"Enter your password"}),e.jsx(u,{error:p.password,register:d,id:"password",width:o?384:r?336:280,type:"password",placeholder:"Password"})]}),s&&e.jsxs(m,{children:[e.jsx(c,{children:"Repeat password"}),e.jsx(u,{error:p.repeat_password,register:d,id:"repeat_password",width:o?384:r?336:280,type:"repeat_password",placeholder:"Password"})]}),e.jsx(W,{type:"submit",children:s?"Sign Up":"Sign In"})]})})},R=t.div`
  display: flex;
  width: 280px;
  margin: 0 auto;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 60px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`,$=t.div`
  z-index: 100;
  @media only screen and (min-width: 768px) {
    margin-left: 32px;
  }
`,L=t.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: var(--black);
  margin-bottom: 16px;
  margin-top: 30px;
  @media only screen and (min-width: 1440px) {
    margin-top: 160px;
  }
`,O=t(_)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--blue);
  margin-top: 16px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    color: var(--secondary-orange);
  }
`,G=t.div`
  margin-top: 16px;
`,D=t.div`
margin-bottom: 20px;
  img {
    @media only screen and (min-width: 768px) {
      margin-top: 35px;
      margin-left: -250px;
    }
    @media only screen and (min-width: 1440px) {
    }
  }
`,F="/capybara-components-frontend/assets/bottle-sign-in-e09a1acd.svg",I="/capybara-components-frontend/assets/bottle-sing-in-fc1ebbfd.svg",Q="/capybara-components-frontend/assets/bottle-for-signin-6fb65f6e.svg",H=()=>{const s=a.useMediaQuery({query:"(min-width: 768px)"}),i=a.useMediaQuery({query:"(min-width: 1439px)"});return e.jsx(D,{children:e.jsx("img",{src:i?Q:s?I:F,alt:"bottle-sign-in"})})};export{C as A,H as B,G as M,O as S,L as T,R as W,$ as a};
