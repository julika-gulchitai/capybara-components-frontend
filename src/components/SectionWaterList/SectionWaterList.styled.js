import styled from 'styled-components';

export const StyledSectionWaterList = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 209px;

  width: 592px;
  height: 680px;

  margin-top: calc(-10px + 0px);

  border-radius: 10px;
  background: ${props => props.theme.colors.secondaryBg};
  box-shadow: ${props => props.theme.shadows.windowShadowContainer};

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
  }

  @media only screen and (min-width: 1440px) {
    height: 680px;
  }
`;
