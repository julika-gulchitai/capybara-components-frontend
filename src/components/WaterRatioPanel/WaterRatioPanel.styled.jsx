import styled from 'styled-components';
import { ButtonStyled } from '../CommonStyledComponents/CommonButton.styled';

export const WaterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 592px;
  height: 90px;
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
  margin-bottom: 8px;
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
  width: 178px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  svg {
    color: var(--white);
  }
`;
