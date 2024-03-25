import 'normalize.css';

import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
   background-color:${props => props.theme.colors.mainBg};
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;
