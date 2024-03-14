import { useState } from 'react';
import { DailyNormaContainer, NormaWrapper } from './DailyNorma.styled';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import ModalWindow from '../ModalWindow/ModalWindow';

const DailyNorma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <DailyNormaContainer>
        <h2>My daily norma</h2>
        <NormaWrapper>
          <p>1.5 L</p>
          <button onClick={() => setIsModalOpen(true)}>Edit</button>
        </NormaWrapper>
      </DailyNormaContainer>
      {isModalOpen && (
        <ModalWindow open={open} onClose={() => setIsModalOpen(false)}>
          <DailyNormaModal
            onClose={() => setIsModalOpen(false)}
          ></DailyNormaModal>
        </ModalWindow>
      )}
    </>
  );
};

export default DailyNorma;
