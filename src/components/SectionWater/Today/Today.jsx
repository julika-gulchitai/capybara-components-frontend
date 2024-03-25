import '../../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

import PortionsListToday from '../WaterPortionList/PortionsListToday';

import { TodayBox, TodayStile } from './Today.styled';

const Today = () => {
  const { t } = useTranslation();
  return (
    <TodayBox>
      <TodayStile>{t('today')}</TodayStile>
      <PortionsListToday />
    </TodayBox>
  );
};

export default Today;
