import { ModalButtonClose, ModalContent, ModalWrapper } from './ModalWindow.styled'
import ReactDom from 'react-dom';

const ModalWindow = ({ open, onClose, children }) => {
  if (!open) return null;

  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === 'Escape') {
  //       onClose()
  //     }
  //   }
  //   document.addEventListener('keydown', handleKeyDown)
  //   return (() =>
  //     document.removeEventListener('keydown', handleKeyDown)
  //   )
  // }, [onClose])
  return ReactDom.createPortal(
    <ModalWrapper onClick={clickOutside}>
      <ModalContent >
        {children}
        <ModalButtonClose onClick={onClose}>X</ModalButtonClose>
      </ModalContent>
    </ModalWrapper>,
    document.getElementById('portal')
  )
}

export default ModalWindow