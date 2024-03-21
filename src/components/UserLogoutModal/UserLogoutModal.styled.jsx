import styled from 'styled-components';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';

export const LogOutWindow = styled.div`
  padding: 8px 12px;
  flex-direction: column;
  display: flex;
  gap: 24px;
  width: 280px;

  @media screen and (min-width: 768px) {
    padding: 0;
    width: 592px;
  }
`;

export const LogOutHeader = styled.div`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.15;
`;

export const LogOutText = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const LogoutBtn = styled(ButtonStyled)`
  background-color: ${props => props.theme.colors.secondaryRed};
  color: ${props => props.theme.colors.mainBg};
  align-items: center;
  width: 100%;
  margin-top: 0;
  box-shadow: none;

  @media screen and (min-width: 768px) {
    width: 160px;
    align-self: end;
  }
`;
export const LogoutCancelBtn = styled(ButtonStyled)`
  background-color: ${props => props.theme.colors.secondaryLightblue};
  color: ${props => props.theme.colors.primaryBlue};
  align-items: center;
  width: 100%;
  margin-top: 0;
  box-shadow: none;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;
