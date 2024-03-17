import sprite from '../../assets/sprite.svg';
import {
  AddBtn,
  WaterWrap,
  InputContainer,
  InputRange,
  TodayText,
  WrapperPercentage,
} from './WaterRatioPanel.styled';

const WaterRatioPanel = () => {
  const currentDayWater = 1000;
  return (
    <WaterWrap>
      <InputContainer>
        <TodayText>Today</TodayText>
        <InputRange
          type="range"
          min="0"
          max="100"
          value={currentDayWater.percent}
          disabled
        />
        <WrapperPercentage>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </WrapperPercentage>
      </InputContainer>
      <AddBtn>
        <use href={`${sprite}#plus-circle`} />
        Add water
      </AddBtn>
    </WaterWrap>
  );
};
export default WaterRatioPanel;
