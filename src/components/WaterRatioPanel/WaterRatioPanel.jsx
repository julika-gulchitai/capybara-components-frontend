import sprite from '../../assets/sprite.svg';
import {
  AddBtn,
  WaterWrap,
  RatioContainer,
  TodayText,
  StyledInput,
  WrapperPercentage,
} from './WaterRatioPanel.styled';

const WaterRatioPanel = () => {
  const MyDailyNorma = 2000;
  const currentDayWater = 1500;
  const rater = (currentDayWater / MyDailyNorma) * 100;
  // const a = b > 100 ? b : 100;
  return (
    <WaterWrap>
      <RatioContainer>
        <TodayText>Today</TodayText>
        <StyledInput type="range" min="0" max="100" value={rater} disabled />
        <WrapperPercentage>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </WrapperPercentage>
      </RatioContainer>
      <AddBtn>
        <svg width={24} height={24}>
          <use href={`${sprite}#plus-circle`} />
        </svg>
        Add water
      </AddBtn>
    </WaterWrap>
  );
};
export default WaterRatioPanel;
