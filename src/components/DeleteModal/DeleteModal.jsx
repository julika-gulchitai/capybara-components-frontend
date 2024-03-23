
import { StyledDeleteModal } from './DeleteModal.styled';
import { useDispatch } from 'react-redux';
import { apiDeleteWaterPortion } from '../../redux/Water/WaterThunks';
import { useTranslation } from 'react-i18next';

const DeleteModal = ({onClose, id}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function handleDelete() {
    dispatch(apiDeleteWaterPortion(id))
      .unwrap()
      .then(() => onClose());
  }

  return (
      <StyledDeleteModal>
        <h2>Delete entry</h2>
        <p className="text">{t('deleteQuestion')}</p>
        <div className="wrapper-btn">
          <button
            onClick={onClose}
            className="cancel-btn"
          >
            {t('cancel')}
          </button>
          <button
            onClick={handleDelete}
            className="delete-btn"
          >
            {t('delete')}
          </button>
        </div>
      </StyledDeleteModal>
  );
};

export default DeleteModal;
