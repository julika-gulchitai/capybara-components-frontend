// import { ReactComponent as AddIcon } from '../../images/svg/plus_circle.svg';

import {
  AddBtn,
  ContainerWater,
  InputContainer,
  InputRange,
  TodayText,
  WrapperPercentage,
} from './WaterRatioPanel.styled';

const WaterRatioPanel = () => {
  const currentDayWater = 1500;
  return (
    <ContainerWater>
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
    </ContainerWater>
  );
};
