import styled from 'styled-components';
import { ReactComponent as Glass } from '../../assets/icon/glass.svg';
import TimePicker from 'rc-time-picker';

export const StyledEditWaterModal = styled.div`
  @media only screen and (min-width: 768px) {
    width: 656px;
  }

  @media only screen and (min-width: 1440px) {
    width: auto;
  }
`;

export const AddEditWater = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`;

export const EditWaterText = styled.div`
  font-size: 18px;
  line-height: 1.1;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const GlassStyle = styled(Glass)`
  width: 36px;
  height: 36px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  gap: 7px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    padding: 10px;

    gap: 10px;

    border-radius: 30px;
    border: 1px solid ${(props) => props.theme.colors.secondaryBlue};
    background: ${(props) => props.theme.colors.mainBg};

    box-shadow: ${(props) => props.theme.shadows.secondaryButtonShadow};

    color: ${(props) => props.theme.colors.primaryBlue};

    cursor: pointer;

    transition: color 250ms ease-in-out,
    border-color 250ms ease-in-out,
    box-shadow 250ms ease-in-out;

    &:hover, &:focus {
      color: ${(props) => props.theme.colors.secondaryOrange};
      border-color: ${(props) => props.theme.colors.secondaryOrange};
      box-shadow: ${(props) => props.theme.shadows.buttonShadow};
    }

    svg{
      fill: currentColor;
      width: 24px;
      height: 24px;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 92px;
    height: 36px;

    padding: 6px 10px;
    gap: 10px;

    border-radius: 40px;
    background: ${(props) => props.theme.colors.secondaryLightblue};
    color: ${(props) => props.theme.colors.primaryBlue};

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  label {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  input {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 10px;

    outline: none;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.secondaryLightblue};
    appearance: none;
    color: ${(props) => props.theme.colors.primaryBlue};
    background-color: ${(props) => props.theme.colors.mainBg};
    font-size: 16px;
    line-height: 1.25;
    text-align: left;

    @media screen and (min-width: 768px) {
      width: 544px;
  }

  label:nth-child(2) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }
`;

export const ButtonSaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  p {
    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    line-height: 1.33;
  }

  button {
    width: 100%;
    display: flex;

    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 10px 30px;

    outline: none;
    border-radius: 10px;
    border: none;

    color: ${(props) => props.theme.colors.mainBg};
    background: ${(props) => props.theme.colors.primaryBlue};

    box-shadow: ${(props) => props.theme.shadows.buttonShadow};

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    cursor: pointer;

    transition: box-shadow 250ms ease-in-out;

    &:hover, &:focus {
      box-shadow: ${props => props.theme.hovers.buttonShadow};
    }

    &:active {
      box-shadow: none;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;

    justify-content: flex-end;

    button {
      width: 160px;
    }
  }
`;

export const GlassContainer = styled.div`
  width: 254px;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border-radius: 10px;
  gap: 12px;
  background-color: ${(props) => props.theme.colors.secondaryBg};
  margin-bottom: 24px;
`;

export const TextAmount = styled.p`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`;

export const TimeValue = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 12px;
  line-height: 2;
`;

export const TextAm = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
  margin-bottom: 12px;
`;

export const StyledTP = styled(TimePicker)`
  &.rc-time-picker {
    max-width: 544px;
  }

  & .rc-time-picker-input {
    height: 44px;
    border: 1px solid ${props => props.theme.colors.secondaryLightblue};
    border-radius: 6px;
    padding: 12px 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    color: ${props => props.theme.colors.primaryBlue};

  }

  & .rc-time-picker-clear {
    top: 10px;
  }
`;
