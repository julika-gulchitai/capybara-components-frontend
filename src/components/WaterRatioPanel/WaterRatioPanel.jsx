import sprite from '../../assets/sprite.svg';
import {
  AddBtn,
  WaterWrap,
  RatioContainer,
  TodayText,
  WrapperPercentage,
} from './WaterRatioPanel.styled';

const WaterRatioPanel = () => {
  const currentDayWater = 70;
  return (
    <WaterWrap>
      <RatioContainer>
        <TodayText>Today</TodayText>
        <input
          type="range"
          min="0"
          max="100"
          value={currentDayWater}
          disabled
        />
        <WrapperPercentage>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </WrapperPercentage>
      </RatioContainer>
      <AddBtn>
        <use href={`${sprite}#plus-circle`} />
        Add water
      </AddBtn>
    </WaterWrap>
  );
};
export default WaterRatioPanel;
