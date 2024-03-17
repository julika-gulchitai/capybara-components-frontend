import MonthStatsTable from './MonthStatsTable/MonthStatsTable';
import { StyledSectionWaterList } from './SectionWaterList.styled';
import TodayWaterList from './TodayWaterLIst/TodayWaterList';

const SectionWaterList = () => {
  return (
    <StyledSectionWaterList>
      <TodayWaterList />
      <MonthStatsTable />
    </StyledSectionWaterList>
  );
};
export default SectionWaterList;
