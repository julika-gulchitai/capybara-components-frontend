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
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px );
  }
`;

export const RightContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    width: calc((100% / 2) - 16px );
  }
`;