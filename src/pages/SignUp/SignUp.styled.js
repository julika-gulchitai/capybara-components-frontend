import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  width: 280px;
  margin: 0 auto;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 60px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`;

export const WraperForm = styled.div`
  @media only screen and (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: var(--black);
  margin-bottom: 16px;
  margin-top: 30px;
  @media only screen and (min-width: 1440px) {
    margin-top: 160px;
  }
`;

export const StyledNavlink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--blue);
  margin-top: 16px;
  cursor: pointer;
  z-index: 100;
`;
export const MarginBetween = styled.div`
  margin-top: 16px;
`;
