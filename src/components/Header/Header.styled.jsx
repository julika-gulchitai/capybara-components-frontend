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

export const SwitchesFloatingBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
  background-color:${props => props.theme.colors.mainBg};
  border: 1px solid var(--secondary-white);
  border-radius: 10px;
  z-index: 100;
`;