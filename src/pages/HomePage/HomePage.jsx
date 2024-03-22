import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel.jsx';
import {
  BackgroundContainer,
  HomeContainer,
  LeftContainer,
  RightContainer,
} from './HomePage.styled.js';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { format } from 'date-fns';

import WaterTracker from '../../components/SectionWater/WaterTracker/WaterTracker.jsx';

// import { apiGetTodayWaterPortions } from '../../redux/Water/WaterThunks.js';

const HomePage = () => {
  // const HomePage = (onClose) => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     const date = `${format(new Date(), 'yyyy')}-${format(
  //       new Date(),
  //       'mm'
  //     )}-${format(new Date(), 'dd')}`;
  //     dispatch(apiGetTodayWaterPortions(date));

  //     return () => {
  //       dispatch(onClose());
  //     };
  //   }, [dispatch, onClose]);

  return (
    <BackgroundContainer id="beckground">
      <HomeContainer>
        <LeftContainer>
          <DailyNorma />
          <WaterRatioPanel />
        </LeftContainer>
        <RightContainer>
          {/* <SectionWaterList/> */}
          <WaterTracker />
        </RightContainer>
      </HomeContainer>
    </BackgroundContainer>
  );
};

export default HomePage;
