import styled from 'styled-components';

export const ContainerWidthUk = styled.div`
  width: 198px;
`;
export const ContainerWidthEn = styled.div`
  width: 164px;
`;

export const DailyNormaContainer = styled.div`
  box-shadow: ${(props) => props.theme.shadows.secondaryShadowContainer};
  background-color: ${(props) => props.theme.colors.mainBg};
  border: 1px solid ${(props) => props.theme.colors.secondaryBg};
  border-radius: 10px;
  padding: 8px 20px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: ${(props) => props.theme.colors.textColor};
    min-width: 124px;
    margin-bottom: 12px;
  }

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: ${(props) => props.theme.colors.primaryBlue};
    margin-bottom: 0;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  button {
    font-family: inherit;
    line-height: 1.25;
    color: ${(props) => props.theme.colors.secondaryBlueLight};
    outline: none;
    border: none;
    background: transparent;
    transition: color 250ms ease-in-out;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.colors.secondaryOrange};
    }
  }
`;

export const NormaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
