import styled from 'styled-components';
import { AdaptiveContainer } from '../../components/Container/Container.styled.jsx';

export const HomeContainer = styled(AdaptiveContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 40px;
  background-color: transparent;
  padding-top: 16px;

  @media only screen and (min-width: 768px) {
    padding-top: 32px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    padding-top: 8px;
    padding-bottom: 0;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  height: 440px;

  @media only screen and (min-width: 768px) {
    height: 492px;
  }

  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
    padding-top: 32px;
    padding-bottom: 16px;
  }
`;

export const RightContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
  }
`;

export const BackgroundContainer = styled.div`
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100% - 64px);
  background-image: url(${props => props.theme.backgroundImage.bgHomeMob});
  background-position: calc(50% + 3px) 44px;
  
  @media only screen and (min-width: 768px) {
    min-height: calc(100% - 80px);
    background-image: url(${props => props.theme.backgroundImage.bgHomeTab});
    background-position: calc(50% + 9px) 8px;
  }

  @media only screen and (min-width: 1440px) {
    min-height: calc(100% - 72px);
    background-image: url(${props => props.theme.backgroundImage.bgHomeDesktop});
    background-position: calc(50% - 10px) 46px;
  }
`;
