import{u as i,b as a,A as s,L as d,j as e,T as o,s as t}from"./index-cc7623e4.js";const l="/capybara-components-frontend/assets/background-main-page-layers-5141a367.svg",c="/capybara-components-frontend/assets/background-welcome-page-e568c387.svg",m="/capybara-components-frontend/assets/background-main-page-f-382561be.svg",h=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${n=>n.theme.colors.white};
  background-repeat: no-repeat;
  background-position: bottom;
  @media only screen and (max-width: 320px){
    background-image: url(${c});
  }
  @media (min-width:321px) and (max-width: 768px){
    background-image:url(${m});
  }
  @media (min-width:769px) {
    background-image: url(${l}), url(${a});    
  }

  @media only screen and (min-width: 768px) {
      justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
      background-size: contain;
      height: calc(100svh - 72px);
      display: flex;
      align-items: flex-start;
      justify-content: center;
  }
`,p=i(s)`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    }
`,x=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  @media only screen and (min-width: 768px) {
      margin: 1.5rem 0;
      align-items: flex-start;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    margin: 4.2rem 5.5rem 4.2rem 6.5rem;
    gap: 5rem;
  }
`,g=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
h3{
  font-size: 18px;
  line-height: 1.11111;
  @media only screen and (min-width: 768px) {
    margin-top: .5rem;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: .5rem;
    margin-bottom: 1rem;
  }
  }
`,y=i.h1`
 font-size: 1.75rem;
margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.16667;
  }
  @media only screen and (min-width: 1440px) {
    line-height: 1.16667;
  }
`,f=i.h2`
  font-weight: 400;
  line-height: 1.25;
  margin: 1rem 0;
  @media only screen and (min-width: 768px) {
    letter-spacing: 1px;
  }
`,u=i.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
  }
  li{
    display: flex;
    align-items: center;
    margin-top: 1rem;
    @media only screen and (min-width: 768px) {
      min-width: 224px;
      gap: 1rem;
    }
    @media only screen and (min-width: 1440px) {
      gap:.25rem;
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
`,r=i.svg`
  width: ${n=>n.size||"32px"};
  height: ${n=>n.size||"32px"};
  fill: ${n=>n.color||"#fffff"};
  display: inline - block;
  margin-right: 5px;
  @media only screen and (min-width: 768px) {
    width: ${n=>n.size||"40px"};
    height: ${n=>n.size||"40px"};
  }
`,w=i.div`
  border-radius: 10px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: var(--secondary-white);
  text-align: left;
  list-style-position: inside;
  display: flex;
  @media only screen and (min-width: 768px) {
    margin-top: 1.25rem;
  }
  `,b=i.h3`
  font-size: 18px;
  line-height: 1.11111;
  margin: 0 -1rem;
  @media only screen and (min-width: 1440px) {
    margin-top: .5rem;
  }`,j=i.ul`
  padding: 1.5rem 1rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-position: outside;
  @media only screen and (min-width: 768px) {
    padding: 2rem 2.5rem;
  }

  li{
    margin: 1rem 0 0;
    line-height: 1.25;
    text-indent:-1rem;
    &:before{
      content: '';
      display: inline-block;
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      background-color: var(--blue);
      margin-right: 6px;
    }
  }
`,k=i(d)`
  border-radius: 10px;
  border: none;
  padding: .5rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: ${n=>n.theme.colors.blue};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: ${n=>n.theme.colors.white};
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 1440px) {
    width: 24rem;
    margin-top: .5rem;
  }
`,$=()=>e.jsx(o,{children:e.jsx(h,{children:e.jsx(p,{children:e.jsxs(x,{children:[e.jsxs(g,{children:[e.jsx(y,{children:"Water consumption tracker"}),e.jsx(f,{children:"Record daily water intake and track"}),e.jsx("h3",{children:"Tracker Benefits"}),e.jsxs(u,{children:[e.jsxs("li",{children:[" ",e.jsx(r,{children:e.jsx("use",{href:`${t}#calendar`})}),"Habit drive"]}),e.jsxs("li",{children:[" ",e.jsx(r,{children:e.jsx("use",{href:`${t}#presentation-chart-bar`})}),"View statistics"]}),e.jsxs("li",{children:[" ",e.jsx(r,{children:e.jsx("use",{href:`${t}#wrench-schewdriver`})}),"Personal rate setting"]})]}),e.jsx(k,{to:"/signup",children:"Try tracker"})]}),e.jsx(w,{children:e.jsxs(j,{children:[e.jsx(b,{children:"Why drink water"}),e.jsx("li",{children:"Supply of nutrients to all organs"}),e.jsx("li",{children:"Providing oxygen to the lungs"}),e.jsx("li",{children:e.jsx("span",{children:"Maintaining the work of the heart"})}),e.jsx("li",{children:"Release of processed substances"}),e.jsx("li",{children:"Ensuring the stability of the internal environment"}),e.jsx("li",{children:"Maintaining within the normal temperature"}),e.jsx("li",{children:"Maintaining an immune system capable of resisting disease"})]})})]})})})});export{$ as default};
