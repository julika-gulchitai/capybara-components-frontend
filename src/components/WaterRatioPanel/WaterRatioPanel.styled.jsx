import styled from 'styled-components';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';

export const WateRatioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
    width: 704px;
    height: 95px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 23px;
    width: 592px;
    height: 90px;
  }
`;

export const RatioScale = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 356px;
    height: 95px;
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
    height: 95px;
  }
`;

export const TodayText = styled.p`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const StyledInput = styled.input`
  &[type='range'] {
    height: 8px;
    border-radius: 8px;
    appearance: none;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.secondaryBlue} 0%,
      ${(props) => props.theme.colors.secondaryBlue} ${(props) => props.value}%,
      ${(props) => props.theme.colors.secondaryLightblue} ${(props) => props.value}%,
      ${(props) => props.theme.colors.secondaryLightblue} 100%
    );
    margin-left: 10px;
    margin-right: 20px;
    margin-bottom: 4px;
  }
  &[type='range']::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    background: ${(props) => props.theme.colors.mainBg};
    border-radius: 50%;
    border: solid 1px ${(props) => props.theme.colors.primaryBlue};
    appearance: none;
  }
  @media screen and (min-width: 768px) {
    width: 322px;
  }

  @media screen and (min-width: 1440px) {
    width: 360px;
  }
`;

export const Percentage = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: 391px;
  }
  span {
    color: ${(props) => props.theme.colors.primaryBlue};
    font-size: 12px;
    line-height: 1.3;

    &::before {
      height: 8px;
      content: '|';
      color: ${(props) => props.theme.colors.secondaryLightblue};
      margin-top: 4px;
      margin-bottom: 4px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:first-child {
      margin-left: 3px;
      font-size: ${(props) => (props.$rater === 0 ? `16px` : `12px`)};
      font-weight: ${(props) => (props.$rater === 0 ? `500` : `400`)};
    }

    &:nth-child(2) {
      margin-left: 15px;
      font-size: ${(props) =>
    (props.$rater >= 50) & (props.$rater < 100) ? `16px` : `12px`};
      font-weight: ${(props) =>
    (props.$rater >= 50) & (props.$rater < 100) ? `500` : `400`};
    }
    &:last-child {
      margin-right: 3px;
      width: 40px;
      font-size: ${(props) => (props.$rater >= 100 ? `16px` : `12px`)};
      font-weight: ${(props) => (props.$raterrater >= 100 ? `500` : `400`)};
      margin-left: 4px;
    }
  }
`;

export const AddBtn = styled(ButtonStyled)`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;

  svg {
    fill: ${(props) => props.theme.colors.mainBg};
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-top: -8px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    padding: 0;
  }
`;
