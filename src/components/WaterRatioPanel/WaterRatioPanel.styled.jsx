import styled from 'styled-components';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';

export const WaterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 24px; */
  width: 100%;

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
  margin-top: 20px;
`;

export const TodayText = styled.p`
  color: ${props => props.theme.colors.primaryBlue};
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
    background: ${props => props.theme.colors.mainBg};
    border-radius: 50%;
    border: solid 1px ${props => props.theme.colors.primaryBlue};
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
    padding-right: 10px;
    width: 100%;
  }
`;

export const WrapperPercentage = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: ${props => props.theme.colors.primaryBlue};
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
    stroke: ${props => props.theme.colors.mainBg};
  }
`;
