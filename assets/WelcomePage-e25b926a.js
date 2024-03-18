import{u as n,L as a,j as e,s as t}from"./index-3caec627.js";const s="/capybara-components-frontend/assets/background-main-page-layers-5141a367.svg",o="/capybara-components-frontend/assets/background-wave-right-ab08cc25.svg",d="/capybara-components-frontend/assets/background-wave-left-4d937bc4.svg",l="/capybara-components-frontend/assets/background-main-page-f-382561be.svg",c=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:url(${o}), url(${d});
  background-repeat: no-repeat;
  background-position:bottom -75px left -916px, bottom right -1650px;
  background-size:3271px 1134px, 2725px 658px;
    @media only screen and (min-width: 768px) {
      justify-content: space-between;
      background-image:url(${l});
      background-position: bottom;
      background-size: 100%;
  }
    @media only screen and (min-width: 1440px) {
      height: calc(100svh - 72px);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background-image: url(${s}) ;
      background-repeat: no-repeat;
      background-position: bottom;
  }
`,m=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin:1rem 1.25rem 2.5rem 1.25rem;
    @media only screen and (min-width: 768px) {
      margin: 1.5rem 2rem;
      align-items: flex-start;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    margin: 4.2rem 6.5rem;
    gap: 5rem;
     }
`,p=n.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
h3{
  font-size: 18px;
  line-height: 1.11111;
  @media only screen and (min-width: 1440px) {
    margin-top: .5rem;
    margin-bottom: 1rem;
}
}
`,h=n.h1`
margin: 0;
@media only screen and (min-width: 768px) {
  font-size: 2.25rem;
  line-height: 1.16667;
  }
@media only screen and (min-width: 1440px) {
  line-height: 1.16667;
  }
`,g=n.h2`
font-weight: 400;
line-height: 1.25;
margin: 1rem 0;
@media only screen and (min-width: 768px) {
    letter-spacing: 1px;
}
`,x=n.ul`
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
`,r=n.svg`
width: ${i=>i.size||"32px"};
height: ${i=>i.size||"32px"};
fill: ${i=>i.color||"#fffff"};
display: inline - block;
margin-right: 5px;
@media only screen and (min-width: 768px) {
  width: ${i=>i.size||"40px"};
height: ${i=>i.size||"40px"};
  }
`,y=n.div`
border-radius: 10px;
box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
background: var(--secondary-white);
text-align: left;
list-style-position: inside;
display: flex;
@media only screen and (min-width: 768px) {
  margin-top: 1.25rem;

}
`,f=n.h3`
font-size: 18px;
line-height: 1.11111;
margin: 0 -1rem;
@media only screen and (min-width: 1440px) {
  margin-top: .5rem;
}`,u=n.ul`
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
`,b=n(a)`
border-radius: 10px;
border: none;
padding: .5rem;
margin-top: 1.5rem;
margin-bottom: 2.5rem;
box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
background: var(--blue);
font-weight: 500;
font-size: 18px;
line-height: 1.33333;
text-align: center;
color: var(--white);
width: 100%;
@media only screen and (min-width: 768px) {
  width: 50%;
}
@media only screen and (min-width: 1440px) {
  width: 24rem;
  margin-top: .5rem;
}
`,j=()=>e.jsx(c,{children:e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsx(h,{children:"Water consumption tracker"}),e.jsx(g,{children:"Record daily water intake and track"}),e.jsx("h3",{children:"Tracker Benefits"}),e.jsxs(x,{children:[e.jsxs("li",{children:[" ",e.jsx(r,{children:e.jsx("use",{href:`${t}#calendar`})}),"Habit drive"]}),e.jsxs("li",{children:[" ",e.jsx(r,{children:e.jsx("use",{href:`${t}#presentation-chart-bar`})}),"View statistics"]}),e.jsxs("li",{children:[" ",e.jsx(r,{children:e.jsx("use",{href:`${t}#wrench-schewdriver`})}),"Personal rate setting"]})]}),e.jsx(b,{to:"/signup",children:"Try tracker"})]}),e.jsx(y,{children:e.jsxs(u,{children:[e.jsx(f,{children:"Why drink water"}),e.jsx("li",{children:"Supply of nutrients to all organs"}),e.jsx("li",{children:"Providing oxygen to the lungs"}),e.jsx("li",{children:e.jsx("span",{children:"Maintaining the work of the heart"})}),e.jsx("li",{children:"Release of processed substances"}),e.jsx("li",{children:"Ensuring the stability of the internal environment"}),e.jsx("li",{children:"Maintaining within the normal temperature"}),e.jsx("li",{children:"Maintaining an immune system capable of resisting disease"})]})})]})});export{j as default};
