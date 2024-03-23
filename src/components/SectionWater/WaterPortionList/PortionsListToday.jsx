import { useSelector } from 'react-redux';
import { selectNotes } from '../../../redux/Water/selectors';
import { getLocaleTime } from '../../../services/getLocaleTime';
import { useState } from 'react';
import { ReactComponent as IconPlus } from '../../../assets/icon/plus-small.svg';

import {
  Edit,
  PortionsContainer,
  PortionsList,
  Volumes,
  Portion,
  Button,
  Time,
  StyledWatterAddBtn,
} from './PortionsListToday.styled';

import { ReactComponent as Icon } from '../../../assets/icon/glass.svg';
import { ReactComponent as IconPencil } from '../../../assets/icon/pencil-square.svg';
import { useTranslation } from 'react-i18next';
import TodayListModal from '../../TodayListModal/TodayListModal';
import ModalWindow from '../../ModalWindow/ModalWindow';
import EditWaterModal from '../../EditWaterModal/EditWaterModal';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';

const PortionsListToday = () => {
  const [selectedWaterPortionId, setSelectedWaterPortionId] = useState(null);
  const waterPortions = useSelector(selectNotes);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [openModalTodayList, setOpenModalTodayList] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { t } = useTranslation();

  const handleOpenModalTodayAdd = (event) => {
    setOpenModalTodayList(true);
    setIsEditing(false);
    event.stopPropagation();
  };

  const handleOpenModalTodayEdit = (event, waterPortionId) => {
    setIsEditModalOpen(true);
    setSelectedWaterPortionId(waterPortionId);
    event.stopPropagation();
  };

  const handleCloseModalTodayList = () => {
    setOpenModalTodayList(false);
  };

  const handleCloseModalEdit = () => {
    setIsEditModalOpen(false);
  };

  return (
    <PortionsContainer>
      {waterPortions.length > 0 && (<PortionsList>
            {waterPortions?.map((item) => (
              <Portion key={item._id}>
                <Icon className="glass" />
                <Volumes>{`${item.waterAmount} ${t('ml')}`} </Volumes>
                <Time>{getLocaleTime(item.date)}</Time>
                <Edit>
                  <Button onClick={(event) => handleOpenModalTodayEdit(event)}>
                    <IconPencil />
                  </Button>
                  {isEditModalOpen && (
                    <ModalWindow
                      $position={'center'}
                      open={setIsEditModalOpen}
                      onClose={handleCloseModalEdit}
                    >
                      <EditWaterModal
                        onClose={handleCloseModalEdit}
                        isEditing={isEditing}
                        waterPortionId={selectedWaterPortionId}
                      />
                    </ModalWindow>
                  )}
                  <DeleteButton id={item._id}/>
                </Edit>
              </Portion>
            ))}
          </PortionsList>)
      }
          <StyledWatterAddBtn
            onClick={(event) => handleOpenModalTodayAdd(event)}
          >
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
