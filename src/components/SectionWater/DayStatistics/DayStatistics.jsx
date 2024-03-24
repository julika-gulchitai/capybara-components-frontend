import { StyleDay, Data, Carton } from './DayStatistics.styled';
import '../../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

const DayStatistics = ({ item, index, monthName }) => {
  const { waterVolumePercentage, dailyNorma, portions } = item;
  const displayedPercentage = Math.min(100, waterVolumePercentage); // Restricting percentage to 100%
  const { t } = useTranslation();

  return (
    <Carton>
      <Data>
        <StyleDay>
          {index + 1}, {monthName}
        </StyleDay>
      </Data>
      <Data>
        {t('dayStatistics.Daily norma')}: <StyleDay>{dailyNorma}</StyleDay>
      </Data>
      <Data>
        {t('dayStatistics.Fulfillment of the daily norm')}:{' '}
        <StyleDay>{displayedPercentage}%</StyleDay>
      </Data>
      <Data>
        {t('dayStatistics.How many servings of water')}:{' '}
        <StyleDay>{portions}</StyleDay>
      </Data>
    </Carton>
  );
};

export default DayStatistics;
