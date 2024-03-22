import CalendarList from '../CalendarList/CalendarList';
import Today from '../Today/Today';
import { WaterStatistic } from './WaterTracker.styled';

const WaterTracker = () => {
  return (
    <WaterStatistic>
      <Today />
      <CalendarList />
    </WaterStatistic>
  );
};

export default WaterTracker;
