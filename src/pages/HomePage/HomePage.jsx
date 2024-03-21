import DailyNorma from '../../components/DailyNorma/DailyNorma';
import SectionWaterList from '../../components/SectionWaterList/SectionWaterList';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import {
  BackgroundContainer,
  HomeContainer,
  LeftContainer,
  RightContainer
} from './HomePage.styled.js';

const HomePage = () => {
  return (
    <BackgroundContainer id='beckground'>
      <HomeContainer>
      <LeftContainer>
        <DailyNorma/>
        <WaterRatioPanel/>
      </LeftContainer>
      <RightContainer>
        <SectionWaterList/>
      </RightContainer>
    </HomeContainer>
    </BackgroundContainer>
  );
};

export default HomePage;
