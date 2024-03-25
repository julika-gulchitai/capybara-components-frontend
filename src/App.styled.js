import 'normalize.css';
import styled from "styled-components";

import tabImg from './assets/tablet/background-main-page.svg';
import deskImg from './assets/desktop/background-element-main-page.svg';

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  /* background-image: url(${deskImg}); */
  background-color:${props => props.theme.colors.mainBg};
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
  /* 
  @media screen and (min-width: 768px) and (max-width: 1139px) {
  body {
    background-image: url(${tabImg});
  }

  @media screen and (min-width: 1140px)  {
  body {
    background-image: url(${deskImg});
  } */
/* } */

`;
