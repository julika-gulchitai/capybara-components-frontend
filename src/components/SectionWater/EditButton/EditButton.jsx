import { useState } from 'react';

import ModalWindow from '../../ModalWindow/ModalWindow.jsx';
import EditWaterModal from '../../EditWaterModal/EditWaterModal.jsx';

import { Button } from './EditButton.styled.js';

import svgSprite from '../../../assets/sprite.svg';

function EditButton({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleEditClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <Button onClick={handleEditClick}>
        <svg>
          <use href={`${svgSprite}#icon-edit`} />
        </svg>
      </Button>
      {isModalOpen && (
        <ModalWindow onClose={() => setIsModalOpen(false)}>
          <EditWaterModal id={id} onClose={() => setIsModalOpen(false)} />
        </ModalWindow>
      )}
    </>
  );
}

export default EditButton;
