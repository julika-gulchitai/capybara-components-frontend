import DailyNorma from '../../components/DailyNorma/DailyNorma';
import SectionWaterList from '../../components/SectionWaterList/SectionWaterList';
import {
  HomeContainer,
  LeftContainer,
  RightContainer,
} from './HomePage.styled.js';

const HomePage = () => {
  return (
    <HomeContainer>
      <LeftContainer className="left">
        <DailyNorma />
        <WaterRatioPanel></WaterRatioPanel>
      </LeftContainer>
      <RightContainer className="right">
        <SectionWaterList />
      </RightContainer>
    </HomeContainer>
  );
};

export default HomePage;
