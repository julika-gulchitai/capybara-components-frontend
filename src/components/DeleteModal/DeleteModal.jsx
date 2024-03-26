import {useDispatch, useSelector} from 'react-redux';

import { useTranslation } from 'react-i18next';

import {apiDeleteWaterPortion, apiGetTodayWaterPortions} from '../../redux/Water/WaterThunks';

import { StyledDeleteModal } from './DeleteModal.styled';
import {selectSelectedCalendar} from '../../redux/Water/selectors.js';
import {doesRefreshNeeded} from '../../services/doesRefreshNeeded.js';

const DeleteModal = ({ onClose, id }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const selectedCalendar = useSelector(selectSelectedCalendar)

  function handleDelete() {
    dispatch(apiDeleteWaterPortion({
        portionId: id,
        shouldUpdateMonth: doesRefreshNeeded(selectedCalendar)
    }))
      .unwrap()
      .then(() => {
        dispatch(apiGetTodayWaterPortions())
        onClose()
      });
  }

  return (
    <StyledDeleteModal>
      <h2>{t('deleteModal.Delete entry')}</h2>
      <p className="text">
        {t('deleteModal.Are you sure you want to delete the entry?')}
      </p>
      <div className="wrapper-btn">
        <button onClick={onClose} className="cancel-btn">
          {t('deleteModal.Cancel')}
        </button>
        <button onClick={handleDelete} className="delete-btn">
          {t('deleteModal.Delete')}
        </button>
      </div>
    </StyledDeleteModal>
  );
};

export default DeleteModal;
