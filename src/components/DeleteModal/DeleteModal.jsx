import { Modal } from 'components';
import { StyledDeleteModal } from './DeleteModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { apiDeleteWaterPortion } from '../../redux/Water/WaterThunks';
import { selectDeletingWaterPortionId } from '../../redux/modal/modalsReduser';
import { useTranslation } from 'react-i18next';

const DeleteModal = (onClose) => {
  const deletingModalWaterId = useSelector(selectDeletingWaterPortionId);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Modal title={t('deleteTitle')} styledClass="logout-modal">
      <StyledDeleteModal>
        <p className="text">{t('deleteQuestion')}</p>
        <div className="wrapper-btn">
          <button
            onClick={() => {
              dispatch(onClose());
            }}
            className="cancel-btn"
          >
            {t('cancel')}
          </button>
          <button
            onClick={() => {
              dispatch(apiDeleteWaterPortion(deletingModalWaterId))
                .unwrap()
                .then(() => dispatch(onClose()));
            }}
            className="logout-btn"
          >
            {t('delete')}
          </button>
        </div>
      </StyledDeleteModal>
    </Modal>
  );
};

export default DeleteModal;
