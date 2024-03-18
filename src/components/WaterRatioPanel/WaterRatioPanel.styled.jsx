import styled from 'styled-components';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';
// import { theme } from '../../css/VariablesJSX';

export const WaterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 280px;
  width: 100%;
  height: 82px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 704px;
    height: 90px;
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: 592px;
    height: 106px;
    gap: 32px;
  }
`;

export const RatioContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const TodayText = styled.p`
  color: var(--blue);
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 17px;
`;
export const StyledInput = styled.input`

  &[type='range'] {
    height: 8px;
    border-radius: 8px;
    appearance: none;
    background: linear-gradient(
      to right,
      var(--secondary-blue) 0%,
      var(--secondary-blue) ${(props) => props.value}%,
      var(--secondary-lightblue) ${(props) => props.value}%,
      var(--secondary-lightblue) 100%
    );
    margin-left: 10px;
    margin-bottom: 4px;
    margin-right: 14px;
  }
  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: var(--white);
    border-radius: 50%;
    border: solid 1px var(--blue);
    appearance: none;
  }
  @media screen and (min-width: 768px) {
    width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
  }
  @media screen and (max-width: 767px) {
    /* max-width: 255px; */
    padding-right: 10px
    width: 100%;
    m
  }
`;

export const WrapperPercentage = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: var(--blue);
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const AddBtn = styled(ButtonStyled)`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    fill: none;
    stroke: var(--white);
  }
`;
