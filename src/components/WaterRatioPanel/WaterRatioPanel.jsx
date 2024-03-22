import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';
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
import { selectPercent } from '../../redux/Water/selectors.js';

const WaterRatioPanel = () => {
  const currentPersent = useSelector(selectPercent);
  console.log('!!!', currentPersent);
  const [openModalTodayList, setOpenModalTodayList] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { t } = useTranslation();

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
        <TodayText>{t('today')}</TodayText>
        <StyledInput
          type="range"
          min="0"
          max="100"
          value={currentPersent}
          disabled
        />
        <Percentage $rater={currentPersent}>
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </Percentage>
      </RatioScale>
      <AddBtn onClick={(event) => handleOpenModalTodayListAdd(event)}>
        <svg width={24} height={24}>
          <use href={`${sprite}#plus-circle`} />
        </svg>
        {t('addWater')}
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