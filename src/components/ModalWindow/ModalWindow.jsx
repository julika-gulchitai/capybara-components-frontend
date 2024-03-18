import {
  ModalButtonClose,
  ModalContent,
  ModalWrapper,
  StyledIconWrapper,
} from './ModalWindow.styled';
import ReactDom from 'react-dom';
import sprite from '../../assets/sprite.svg';
import { useEffect } from 'react';
import theme from '../../css/VariablesJSX'

const ModalWindow = ({ onClose, children }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return ReactDom.createPortal(
    <ModalWrapper onMouseDown={clickOutside}>
      <ModalContent theme={theme}>
        {children}
        <ModalButtonClose onClick={onClose}>
          <StyledIconWrapper>
            <use href={`${sprite}#x-mark`} />
          </StyledIconWrapper>
        </ModalButtonClose>
      </ModalContent>
    </ModalWrapper>,
    document.querySelector('#portal')
  );
};

export default ModalWindow;
