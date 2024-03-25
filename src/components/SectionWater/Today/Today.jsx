import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import '../../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import { selectNotes } from '../../../redux/Water/selectors.js';

import PortionsListToday from '../WaterPortionList/PortionsListToday';

import { EmptyNotes, TodayBox, TodayStile } from './Today.styled';

const Today = () => {
  const waterPortions = useSelector(selectNotes);
  const [isEmpty, setIsEmpty] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (waterPortions.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [waterPortions]);

  return (
    <TodayBox>
      <TodayStile>{t('today')}</TodayStile>
      {isEmpty && <EmptyNotes>No notes yet</EmptyNotes>}
      <PortionsListToday />
    </TodayBox>
  );
};

export default Today;
