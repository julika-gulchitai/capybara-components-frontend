import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import {
  AddBtn,
  WateRatioContainer,
  RatioScale,
  TodayText,
  StyledInput,
  Percentage,
} from './WaterRatioPanel.styled';
import ModalWindow from '../ModalWindow/ModalWindow';
import TodayListModal from '../TodayListModal/TodayListModal';

const WaterRatioPanel = () => {
  const MyDailyNorma = 2000;
  const currentDayWater = 1700;
  const rater = (currentDayWater / MyDailyNorma) * 100;
  // const a = b > 100 ? b : 100;
  const [openModalTodayList, setOpenModalTodayList] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenModalTodayListAdd = (event) => {
    setOpenModalTodayList(true);
    setIsEditing(false);
    event.stopPropagation();
  };

  const handleCloseModalTodayList = () => {
    setOpenModalTodayList(false);
  };
  return (
    <WateRatioContainer>
      <RatioScale>
        <TodayText>Today</TodayText>
        <StyledInput type="range" min="0" max="100" value={rater} disabled />
        <Percentage $rater={rater}>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </Percentage>
      </RatioScale>
      <AddBtn onClick={(event) => handleOpenModalTodayListAdd(event)}>
        <svg width={24} height={24}>
          <use href={`${sprite}#plus-circle`} />
        </svg>
        Add water
      </AddBtn>
      {openModalTodayList && (
        <ModalWindow
          $position={'center'}
          open={openModalTodayList}
          onClose={handleCloseModalTodayList}
        >
          <TodayListModal
            onClose={handleCloseModalTodayList}
            isEditing={isEditing}
          />
        </ModalWindow>
      )}
    </WateRatioContainer>
  );
};
export default WaterRatioPanel;
