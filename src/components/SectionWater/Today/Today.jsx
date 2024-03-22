import { TodayBox, TodayStile } from './Today.styled';
import PortionsListToday from '../WaterPortionList/PortionsListToday';
import '../../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

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
