import { TodayBox, TodayStile } from './Today.styled';
import PortionsListToday from '../WaterPortionList/PortionsListToday';

const Today = () => {
  return (
    <TodayBox>
      <TodayStile>Today</TodayStile>
      <PortionsListToday />
    </TodayBox>
  );
};

export default Today;
