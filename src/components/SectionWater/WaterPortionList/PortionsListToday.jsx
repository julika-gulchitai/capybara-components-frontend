import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { selectNotes } from '../../../redux/Water/selectors';
import { getLocaleTime } from '../../../services/getLocaleTime';

import TodayListModal from '../../TodayListModal/TodayListModal';
import ModalWindow from '../../ModalWindow/ModalWindow';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import EditButton from '../EditButton/EditButton.jsx';

import {
  Edit,
  PortionsContainer,
  PortionsList,
  Volumes,
  Portion,
  Time,
  StyledWatterAddBtn,
} from './PortionsListToday.styled';

import { ReactComponent as Icon } from '../../../assets/icon/glass.svg';
import { ReactComponent as IconPlus } from '../../../assets/icon/plus-small.svg';

const PortionsListToday = () => {
  const waterPortions = useSelector(selectNotes);
  const [isEditing, setIsEditing] = useState(false);
  const [openModalTodayList, setOpenModalTodayList] = useState(false);
  const { t } = useTranslation();

  const handleOpenModalTodayAdd = (event) => {
    setOpenModalTodayList(true);
    setIsEditing(false);
    event.stopPropagation();
  };

  const handleCloseModalTodayList = () => {
    setOpenModalTodayList(false);
  };

  const sortedWaterPortions = [...waterPortions].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <PortionsContainer>
      {sortedWaterPortions.length > 0 && (
        <PortionsList>
          {sortedWaterPortions?.map((item) => (
            <Portion key={item._id}>
              <Icon className="glass" />
              <Volumes>{`${item.waterAmount} ${t('ml')}`} </Volumes>
              <Time>{getLocaleTime(item.date)}</Time>
              <Edit>
                <EditButton id={item._id} />
                <DeleteButton id={item._id} />
              </Edit>
            </Portion>
          ))}
        </PortionsList>
      )}
      <StyledWatterAddBtn onClick={(event) => handleOpenModalTodayAdd(event)}>
        <IconPlus />
        {t('addWater')}
      </StyledWatterAddBtn>
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
    </PortionsContainer>
  );
};
export default PortionsListToday;
