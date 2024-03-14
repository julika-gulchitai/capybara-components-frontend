import {
  ModalButtonClose,
  ModalContent,
  ModalWrapper,
  StyledIconWrapper,
} from './ModalWindow.styled';
import ReactDom from 'react-dom';
import sprite from '../../assets/sprite.svg';

const ModalWindow = ({ open, onClose, children }) => {
  if (!open) return null;

  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDom.createPortal(
    <ModalWrapper onClick={clickOutside}>
      <ModalContent>
        {children}
        <ModalButtonClose onClick={onClose}>
          <StyledIconWrapper>
            <use href={`${sprite}#x-mark`} />
          </StyledIconWrapper>
        </ModalButtonClose>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('portal')
  );
};

export default ModalWindow;
