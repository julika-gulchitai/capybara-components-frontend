import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterTracker from '../../components/SectionWater/WaterTracker/WaterTracker.jsx';

import {
  BackgroundContainer,
  HomeContainer,
  LeftContainer,
  RightContainer,
} from './HomePage.styled.js';

const HomePage = () => {
  // const isDeleteModalOpen = useSelector(selectDeleteWaterModal);

  return (
    <BackgroundContainer id="beckground">
      <HomeContainer>
        <LeftContainer>
          <DailyNorma />
          <WaterRatioPanel />
        </LeftContainer>
        <RightContainer>
          <WaterTracker />
          {/* {isDeleteModalOpen && <DeleteModal />} */}
        </RightContainer>
      </HomeContainer>
    </BackgroundContainer>
  );
};

export default HomePage;
