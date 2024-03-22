import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 64px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    height: 80px;
  }

  @media only screen and (min-width: 1440px) {
    height: 72px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const SwitchesBlock = styled.div`
  width: fit-content;
`;

