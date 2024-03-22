import { StyleDay, Data, Carton } from './DayStatistics.styled';

const DayStatistics = ({ item, index, monthName }) => {
  const { waterVolumePercentage, dailyNorma, portions } = item;

  return (
    <Carton>
      <Data>
        <StyleDay>
          {index + 1}, {monthName}
        </StyleDay>
      </Data>
      <Data>
        Daily norma: <StyleDay>{dailyNorma}</StyleDay>
      </Data>
      <Data>
        Fulfillment of the daily norm:{' '}
        <StyleDay>{waterVolumePercentage}%</StyleDay>
      </Data>
      <Data>
        How many servings of water: <StyleDay>{portions}</StyleDay>
      </Data>
    </Carton>
  );
};

export default DayStatistics;
