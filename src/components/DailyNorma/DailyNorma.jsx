import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import { selectUser } from '../../redux/User/selectors';

import ModalWindow from '../ModalWindow/ModalWindow';
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

import {
  ContainerWidthEn,
  ContainerWidthUk,
  DailyNormaContainer,
  NormaWrapper,
} from './DailyNorma.styled';
import { selectLanguage } from '../../redux/global/selectors.js';

const DailyNorma = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUk, setIsUk] = useState(false);
  const { waterRate } = useSelector(selectUser);
  const lang = useSelector(selectLanguage);

  const { t } = useTranslation();

  useEffect(() => {
    if (lang === 'uk') {
      setIsUk(true);
    } else setIsUk(false);
  }, [lang]);

  const waterNorma = waterRate / 1000;

  return (
    <>
      {isUk ? (
        <ContainerWidthUk>
          <DailyNormaContainer>
            <h2>{t('normaModal.My daily norma')}</h2>
            <NormaWrapper>
              <p>
                {waterNorma} {t('normaModal.L')}
              </p>
              <button onClick={() => setIsModalOpen(true)}>{t('edit')}</button>
            </NormaWrapper>
          </DailyNormaContainer>
        </ContainerWidthUk>
      ) : (
        <ContainerWidthEn>
          <DailyNormaContainer>
            <h2>{t('normaModal.My daily norma')}</h2>
            <NormaWrapper>
              <p>
                {waterNorma} {t('normaModal.L')}
              </p>
              <button onClick={() => setIsModalOpen(true)}>{t('edit')}</button>
            </NormaWrapper>
          </DailyNormaContainer>
        </ContainerWidthEn>
      )}
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
