import{u as t,A as s,L as d,a as m,j as n,s as a}from"./index-f5f9b093.js";const c=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${e=>e.theme.colors.mainBg};
  background-repeat: no-repeat;
  background-position: bottom;
  color: ${e=>e.theme.colors.textColor};
  @media only screen and (max-width: 320px){
    background-image: url(${e=>e.theme.backgroundImage.backgroundWelcomePageMob});
  }
  @media (min-width:321px) and (max-width: 768px){
    background-image:url(${e=>e.theme.backgroundImage.backgroundWelcomePageTablet});
  }
  @media (min-width:769px) {
    background-image: url(${e=>e.theme.backgroundImage.backgroundWelcomePageDsctp});
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
`,h=t(s)`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    }
`,g=t.div`
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
`,x=t.div`
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
`,p=t.h1`
 font-size: 1.75rem;
margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.16667;
  }
  @media only screen and (min-width: 1440px) {
    line-height: 1.16667;
  }
`,w=t.h2`
  font-weight: 400;
  line-height: 1.25;
  margin: 1rem 0;
  @media only screen and (min-width: 768px) {
    letter-spacing: 1px;
  }
`,y=t.ul`
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
`,r=t.svg`
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  fill: ${e=>e.color||e.theme.colors.mainBg};
  display: inline - block;
  margin-right: 5px;
  @media only screen and (min-width: 768px) {
    width: ${e=>e.size||"40px"};
    height: ${e=>e.size||"40px"};
  }
`,u=t.div`
  border-radius: 10px;
  box-shadow: ${e=>e.theme.shadows.windowShadowContainer};
  background: ${e=>e.theme.colors.secondaryBg};
  text-align: left;
  list-style-position: inside;
  display: flex;
  @media only screen and (min-width: 768px) {
    margin-top: 1.25rem;
  }
  `,f=t.h3`
  font-size: 18px;
  line-height: 1.11111;
  margin: 0 -1rem;
  @media only screen and (min-width: 1440px) {
    margin-top: .5rem;
  }`,b=t.ul`
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
      background-color: ${e=>e.theme.colors.blue};
      margin-right: 6px;
    }
  }
`,j=t(d)`
  border-radius: 10px;
  border: none;
  padding: .5rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  box-shadow: ${e=>e.theme.shadows.buttonShadow};
  background: ${e=>e.theme.colors.blue};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: ${e=>e.theme.colors.mainBg};
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 1440px) {
    width: 24rem;
    margin-top: .5rem;
  }
`,P=({setTheme:e})=>{const{t:i}=m(),o=l=>{e(l.target.checked)};return n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"checkbox",onChange:o}),n.jsx(c,{children:n.jsx(h,{children:n.jsxs(g,{children:[n.jsxs(x,{children:[n.jsx(p,{children:i("welcomePage.Water consumption tracker")}),n.jsx(w,{children:i("welcomePage.Record daily water intake and track")}),n.jsx("h3",{children:i("welcomePage.Tracker Benefits")}),n.jsxs(y,{children:[n.jsxs("li",{children:[" ",n.jsx(r,{children:n.jsx("use",{href:`${a}#calendar`})}),i("welcomePage.Habit drive")]}),n.jsxs("li",{children:[" ",n.jsx(r,{children:n.jsx("use",{href:`${a}#presentation-chart-bar`})}),i("welcomePage.View statistics")]}),n.jsxs("li",{children:[" ",n.jsx(r,{children:n.jsx("use",{href:`${a}#wrench-schewdriver`})}),i("welcomePage.Personal rate setting")]})]}),n.jsx(j,{to:"/signup",children:i("welcomePage.Try tracker")})]}),n.jsx(u,{children:n.jsxs(b,{children:[n.jsx(f,{children:i("welcomePage.Why drink water")}),n.jsx("li",{children:i("welcomePage.Supply of nutrients to all organs")}),n.jsx("li",{children:i("welcomePage.Providing oxygen to the lungs")}),n.jsx("li",{children:n.jsx("span",{children:i("welcomePage.Maintaining the work of the heart")})}),n.jsx("li",{children:i("welcomePage.Release of processed substances")}),n.jsx("li",{children:i("welcomePage.Ensuring the stability of the internal environment")}),n.jsx("li",{children:i("welcomePage.Maintaining within the normal temperature")}),n.jsx("li",{children:i("welcomePage.Maintaining an immune system capable of resisting disease")})]})})]})})})]})};export{P as default};
