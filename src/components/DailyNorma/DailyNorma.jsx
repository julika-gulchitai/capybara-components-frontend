import { useState } from 'react';
import { DailyNormaContainer, NormaWrapper } from './DailyNorma.styled';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

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
        <DailyNormaModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        ></DailyNormaModal>
      )}
    </>
  );
};

export default DailyNorma;
