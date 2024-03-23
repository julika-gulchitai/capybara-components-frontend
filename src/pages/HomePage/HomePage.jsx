import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import {
  BackgroundContainer,
  HomeContainer,
  LeftContainer,
  RightContainer,
} from './HomePage.styled.js';
import WaterTracker from '../../components/SectionWater/WaterTracker/WaterTracker.jsx';
// import { useSelector } from 'react-redux';
// import DeleteModal from '../../components/DeleteModal/DeleteModal.jsx';
// import { selectDeleteWaterModal } from '../../redux/modal/modalsSelectors.js';

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
