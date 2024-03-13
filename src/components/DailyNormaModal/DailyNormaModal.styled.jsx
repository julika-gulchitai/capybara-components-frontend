import styled from 'styled-components';

export const DailyNormaContainer = styled.div`
  padding: 24px 12px;
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
  }
  button {
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
    background: var(--blue);
    border-radius: 10px;
    padding: 8px 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    color: var(--white);
    border: none;
    width: 256px;
    &:hover,
    &:focus {
      box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
    }
    &:active {
      box-shadow: none;
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
  color: #8f8f8f;
  margin-bottom: 24px;
  span {
    color: var(--blue);
  }
`;

export const RequiredNorma = styled.div`
  display: flex;
  align-items: center;
  p {
    max-width: 190px;
  }
  span {
    line-height: 1.33;
    color: var(--blue);
    font-weight: 700;
    font-size: 18px;
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

export const WeightAndSports = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  &:last-child {
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DailyNorma = styled.div`
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
