import styled from '@emotion/styled';
// import mobImg from './assets/mobile/background-main-page.svg';
import tabImg from './assets/tablet/background-main-page.svg';
import deskImg from './assets/desktop/background-element-main-page.svg';
import 'normalize.css';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-image: url(${deskImg}); */
  background-color: var(--white)
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
