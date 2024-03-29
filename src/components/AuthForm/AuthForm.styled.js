import styled from 'styled-components';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';

export const WrapForm = styled.div`
  display: block;
  margin: 0 auto;

`;

export const LabelStyled = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 1.33333;

  color:${props => props.theme.colors.textColor};
`;
export const SignButton = styled(ButtonStyled)`
  font-size: 16px;
  width: 280px;
  margin: 0;
  line-height: 1.25;
  padding: 8px 30px;
  width: 280px;
  height: 36px;
  z-index: 100;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
    padding: 10px 30px;
    width: 336px;
    height: 44px;
  }
  @media only screen and (min-width: 1440px) {
    width: 384px;
  }
`;
export const WrapInput = styled.div`
  margin-bottom: 6px;
 `;
