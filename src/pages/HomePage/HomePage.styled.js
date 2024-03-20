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
  position: relative;
  /* height: calc(100vh - 48px); */
  background-color:${props => props.theme.colors.mainBg};
  background-image: url(${props => props.theme.backgroundImage.bgElemMainPageMob});
  background-position: top;
     padding-top: 16px;
    padding-bottom: 82px; 
  

  @media only screen and (min-width: 768px) {
    background-image: url(${props => props.theme.backgroundImage.bgElemMainPageTab});

  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    background-position: bottom;
    background-image: url(${props => props.theme.backgroundImage.bgElemMainPageDsctp});
    padding-bottom: 0; 
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.theme.backgroundImage.bgtBottleHscTab});
  height: 448px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    height: 564px;
    background-position: top;
    background-image: url(${props => props.theme.backgroundImage.bgtBottleHscTab});
    height: 481px;
    background-position: top;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 690px;
    padding-top: 16px;
    padding-bottom: 32px;
    background-position: top;
    background-image: url(${props => props.theme.backgroundImage.bgtBottleHscDesc}), url(${props => props.theme.backgroundImage.bgElemMainPageDsctp});;
     }
  `;

export const RightContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
    position: absolute;
    right: -10px;
  }
`;
