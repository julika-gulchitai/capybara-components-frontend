import { createGlobalStyle } from 'styled-components';
import './variables.css';
import bgDesc from '../assets/desktop/background-main-page.svg';
import bgTab from '../assets/tablet/background-main-page.svg';
import bgMob from '../assets/mobile/background-main-page.svg';

const Global = createGlobalStyle`

h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;
}

img {
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

body{
  font-family: 'Roboto Regular';
  min-height: 100vh;
  color: var(--black);
  background-image: url(${bgDesc});
  background-position: bottom;
  background-size: 100%;
   background-repeat: no-repeat;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
input:-webkit-autofill:active { 
    color: var(--blue);
    transition: background-color 5000s ease-in-out 0s;
}

@media screen and (min-width: 768px) and (max-width: 1440px) {
    
    background-image: url(${bgTab});
    background-position: bottom;
    background-size: 100%;
    min-height: 100vh;
}

@media screen and (max-width: 767px) {
  body {
    height: fit-content;
    background-image: url(${bgMob});
    background-position: bottom;
    background-size: 100%;
    min-height: 100vh;
  }

/* 
@media screen (min-width: 1140px) {
  body {
    height: 100vh;
    max-height: 100vh;
  }
  } */

`;

export default Global;
