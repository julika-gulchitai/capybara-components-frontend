import React, {useState} from 'react';
import {ReactComponent as IconBasket} from '../../../assets/icon/basket.svg';
import ModalWindow from '../../ModalWindow/ModalWindow.jsx';
import DeleteModal from '../../DeleteModal/DeleteModal.jsx';
import {Button} from './DeleteButton.styled.js';

function DeleteButton({id}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleRemoveClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Button onClick={handleRemoveClick}>
        <IconBasket/>
      </Button>
      {isModalOpen && (
        <ModalWindow
          onClose={() => setIsModalOpen(false)}
        >
          <DeleteModal id={id} onClose={() => setIsModalOpen(false)}/>
        </ModalWindow>
      )}
    </>
  );
}

export default DeleteButton;