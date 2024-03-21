import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/User/selectors';

import ModalWindow from '../ModalWindow/ModalWindow';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

import { DailyNormaContainer, NormaWrapper } from './DailyNorma.styled';

const DailyNorma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { waterRate } = useSelector(selectUser);

  const waterNorma = waterRate / 1000;

  return (
    <>
      <DailyNormaContainer>
        <h2>My daily norma</h2>
        <NormaWrapper>
          <p>{waterNorma} L</p>
          <button onClick={() => setIsModalOpen(true)}>Edit</button>
        </NormaWrapper>
      </DailyNormaContainer>
      {isModalOpen && (
        <ModalWindow open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <DailyNormaModal
            onClose={() => setIsModalOpen(false)}
          ></DailyNormaModal>
        </ModalWindow>
      )}
    </>
  );
};

export default DailyNorma;
