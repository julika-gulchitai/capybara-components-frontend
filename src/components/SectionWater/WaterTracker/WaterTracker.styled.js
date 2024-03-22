import styled from "styled-components";

export const WaterStatistic = styled.div`
  width: 280px;
  padding: 24px 8px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.secondaryBg};
  box-shadow: ${(props) => props.theme.shadows.windowShadowContainer};

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`;
