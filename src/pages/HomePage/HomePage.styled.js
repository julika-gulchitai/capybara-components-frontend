import styled from 'styled-components';
import {AdaptiveContainer} from '../../components/Container/Container.styled.jsx';

export const HomeContainer = styled(AdaptiveContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 441px;
  
  @media only screen and (min-width: 768px) {
    height: 492px;
  }
  
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px);
    height: 680px;
    padding-top: 16px;
    padding-bottom: 32px;
  }
`;

export const RightContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px );
    height: 680px;
  }
`;