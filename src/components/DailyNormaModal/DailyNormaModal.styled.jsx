import styled from 'styled-components';

export const DailyNormaContainer = styled.div`
  width: 256px;
  @media (min-width: 768px) {
    width: 656px;
  }
  @media (min-width: 1440px) {
    width: 544px;
  }
  h2 {
    font-weight: 500;
    font-size: 26px;
    color: ${props => props.theme.colors.textColor};
    line-height: 1.23;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: ${props => props.theme.colors.textColor};
    margin-bottom: 16px;
  }
  button {
    width: 256px;
    @media (min-width: 768px) {
      width: 160px;
      align-self: flex-end;
    }
  }
  label {
    line-height: 1.25;
  }
  input {
    border: 1px solid ${props => props.theme.colors.secondaryLightblue};
    border-radius: 6px;
    outline: transparent;
    color: ${props => props.theme.colors.primaryBlue};
    padding: 12px 10px;

    &::placeholder {
      color: ${props => props.theme.colors.primaryBlue};
    }
  }
`;

export const Formula = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
  P {
    line-height: 1.25;
    color: ${props => props.theme.colors.textColor};
    margin-bottom: 0;
  }
  span {
    line-height: 1.33;
    font-size: 18px;
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

export const Explanation = styled.p`
  border: 1px solid ${props => props.theme.colors.secondaryLightblue};
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  line-height: 1.33;
  color: ${props => props.theme.colors.secondaryGray};
  margin-bottom: 24px;
  span {
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

export const RequiredNorma = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;

  @media (min-width: 768px) {
    gap: 6px;
  }
  p {
    max-width: 190px;
    @media (min-width: 768px) {
      max-width: 328px;
    }
  }
  span {
    line-height: 1.33;
    color: ${props => props.theme.colors.primaryBlue};
    font-weight: 700;
    font-size: 18px;
  }
`;

export const WeightAndSports = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  position: relative;
  &:last-child {
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
  input{
    background-color: ${props => props.theme.colors.mainBg};
  }
`;

export const DailyNorma = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  label {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
  }
  input{
    background-color: ${props => props.theme.colors.mainBg};
  }
`;

export const BtnWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const RadioBtns = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  input {
    width: auto;
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -33px;
  color: ${props => props.theme.colors.secondaryRed};
  font-size: 14px;
  line-height: 1.29;
  @media (min-width: 768px) {
    bottom: -17px;
  }
`;
