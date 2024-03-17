import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '../../assets/icon/plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/icon/minus.svg';
import { ReactComponent as Glass } from '../../assets/icon/glass.svg';

export const StyledAddWaterModal = styled.div`
  width: 100vw;
  max-width: calc(280px - 24px);
  @media only screen and (min-width: 768px) {
    max-width: calc(704px - 48px);
  }

  @media only screen and (min-width: 1440px) {
    max-width: calc(592px - 48px);
  }
`;

export const AddWater = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;

  margin-bottom: 24px;
`;

export const TextChoose = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 16px;
`;

export const FormAmount = styled.p`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 12px;
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
    border: var(1px solid --secondary-blue);
    background: var(--white);

    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);

    cursor: pointer;
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
    background: var(--secondary-lightblue);
    color: var(--blue);

    font-size: 18px;
    font-weight: 700;
    line-height: 1.33;
  }
`;

export const StyledPlusIcon = styled(PlusIcon)`
  stroke: var(--blue);
`;

export const StyledMinusIcon = styled(MinusIcon)`
  stroke: var(--blue);
  fill: var(--blue);
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

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
    margin-bottom: 24px;

    outline: none;
    border-radius: 6px;
    border: 1px solid var(--secondary-blue);

    appearance: none;

    color: var(--blue);
    font-size: 16px;
    line-height: 1.25;
    text-align: left;
  }

  label:nth-child(2) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    input,
    select {
      width: 100%;
    }
  }
`;

export const ButtonSaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;

  p {
    color: --blue;
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

    color: var(--white);
    background: var(--blue);

    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;

    cursor: pointer;
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
  background-color: var(--secondary-white);
  margin-bottom: 24px;
`;

export const GlassStyle = styled(Glass)`
  width: 36px;
  height: 36px;
`;

export const TextAmount = styled.p`
  color: var(--blue);
  font-size: 18px;
  line-height: 1.3;
  margin-right: 4px;
`;

export const TimeValue = styled.p`
  font-size: 12px;
  line-height: 2;
`;
