import 'normalize.css';
<<<<<<< HEAD

import styled from "styled-components";
=======
import styled from "styled-components";

import tabImg from './assets/tablet/background-main-page.svg';
import deskImg from './assets/desktop/background-element-main-page.svg';
>>>>>>> main

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
   background-color:${props => props.theme.colors.mainBg};
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;
