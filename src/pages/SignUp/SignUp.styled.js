import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 280px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: var(--black);
  margin-bottom: 16px;
`;

export const StyledNavlink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: var(--blue);
  margin-top: 16px;
`;
export const MarginBetween = styled.div`
  margin-top: 16px;
`;
