import styled from 'styled-components';
import { RadioGroup } from '@mui/material';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled.jsx';
/*import {styled} from '@mui/system';*/

export const SettingsContainer = styled.div`
  position: relative;
  
  h2 {
    font-weight: 500;
    font-size: 26px;
    line-height: 1.23;
    color: ${props => props.theme.colors.textColor};
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 256px;

  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: 960px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: ${props => props.theme.colors.textColor};
    margin-bottom: 12px;
  }
`;

export const LabelText = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: ${props => props.theme.colors.textColor};
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  flex-direction: column;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 24px;
  }
`;
export const LeftContainer = styled.div`
  height: 272px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    width: 392px;
  }
`;
export const GenderLabel = styled.label`
  @media only screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;
export const RightContainer = styled.div`
  height: 272px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const PasswordLabelText = styled.span`
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  color: ${props => props.theme.colors.textColor};
`;

export const AvatarBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  button {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: ${props => props.theme.colors.primaryBlue};
    background-color: transparent;
    border: none;
    padding: 0;

    svg {
      fill: currentColor;
      margin-right: 8px;
    }
  }

  input {
    display: none;
  }
`;

export const AvatarWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: clip;
  border-radius: 50px;

  img {
    object-fit: cover;
  }
`;

export const SaveButton = styled(ButtonStyled)`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 160px;
    align-self: end;
  }
`;

export const GenderRadio = styled(RadioGroup)`
  label {
    flex-direction: row;
    gap: 0;
    margin-right: 0;

    span {
      color: ${props => props.theme.colors.primaryBlue};
    }

    span.MuiFormControlLabel-label {
      color: ${props => props.theme.colors.textColor};
      font-size: 16px;
      line-height: 1.25;
    }
  }
`;

export const SettingsHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-right: 30px;
`;

