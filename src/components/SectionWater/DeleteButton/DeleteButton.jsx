import { useState } from 'react';
import ModalWindow from '../../ModalWindow/ModalWindow.jsx';
import DeleteModal from '../../DeleteModal/DeleteModal.jsx';
import { Button } from './DeleteButton.styled.js';
import svgSprite from '../../../assets/sprite.svg';

function DeleteButton({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleRemoveClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Button onClick={handleRemoveClick}>
        <svg>
          <use href={`${svgSprite}#icon-trash`} />
        </svg>
      </Button>
      {isModalOpen && (
        <ModalWindow onClose={() => setIsModalOpen(false)}>
          <DeleteModal id={id} onClose={() => setIsModalOpen(false)} />
        </ModalWindow>
      )}
    </>
  );
}

export default DeleteButton;
