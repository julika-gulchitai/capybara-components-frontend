import styled from '@emotion/styled';
import example from './assets/mobile/background-main-page.svg';
import 'normalize.css';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${example});
  background-color: var(--white)
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;
