import {
  ModalButtonClose,
  ModalContent,
  ModalWrapper,
} from './ModalWindow.styled';
import ReactDom from 'react-dom';

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
          X
          {/* <svg onClick={onClose}>
            <use href="../../assets/sprite.svg#arrow-left"></use>
          </svg> */}
        </ModalButtonClose>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('portal')
  );
};

export default ModalWindow;
