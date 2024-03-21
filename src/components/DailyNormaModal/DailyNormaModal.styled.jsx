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
    color: var(--black);
    line-height: 1.23;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: var(--black);
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
    border: 1px solid var(--secondary-lightblue);
    border-radius: 6px;
    outline: transparent;
    color: var(--blue);
    padding: 12px 10px;

    &::placeholder {
      color: var(--blue);
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
    color: var(--black);
    margin-bottom: 0;
  }
  span {
    line-height: 1.33;
    font-size: 18px;
    color: var(--blue);
  }
`;

export const Explanation = styled.p`
  border: 1px solid var(--secondary-lightblue);
  border-radius: 10px;
  padding: 10px;
  font-size: 12px;
  line-height: 1.33;
  color: #8f8f8f;
  margin-bottom: 24px;
  span {
    color: var(--blue);
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
    color: var(--blue);
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
  color: var(--secondary-red);
  font-size: 14px;
  line-height: 1.29;
  @media (min-width: 768px) {
    bottom: -17px;
  }
`;
