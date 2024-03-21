import styled from 'styled-components';
import { AdaptiveContainer } from '../../components/Container/Container.styled.jsx';
// import bgDesc from '../../assets/desktop/background-element-main-page.svg';
// import bgTab from '../../assets/tablet/background-element-home-screen.svg';
// import bgMob from '../../assets/mobile/background-element-home-screen.svg';
// import bottleDesc from '../../assets/desktop/botle-home-screen.svg';
// import bottleTab from '../../assets/tablet/bottle-home-screen.svg';
// import bottleMob from '../../assets/mobile/bottle-home-screen.svg';

export const HomeContainer = styled(AdaptiveContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 39px;
  background-color: ${(props) => props.theme.colors.mainBg};
  background-image: url(${(props) =>
    props.theme.backgroundImage.bgElemMainPageMob});
  /* height: calc(100vh - 72px); 
  background-position: top;
  */

  @media only screen and (min-width: 768px) {
    background-image: url(${(props) =>
      props.theme.backgroundImage.bgElemMainPageTab});
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    background-image: url(${(props) =>
      props.theme.backgroundImage.bgElemMainPageDsctp});
    /* background-position: bottom; */
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  padding-top: 16px;
  background-image: url(${(props) =>
    props.theme.backgroundImage.bgtBottleHscTab});
  height: 440px;

  @media only screen and (min-width: 768px) {
    height: 492px;
    background-image: url(${(props) =>
      props.theme.backgroundImage.bgtBottleHscTab});
    /* background-position: top; */
  }

  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
    padding-top: 40px;
    padding-bottom: 16px;
    /* background-position: top; */
    background-image: url(${(props) =>
        props.theme.backgroundImage.bgtBottleHscDesc}),
      url(${(props) => props.theme.backgroundImage.bgElemMainPageDsctp});
  }
`;

export const RightContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
  }
`;
