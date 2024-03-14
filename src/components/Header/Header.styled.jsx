import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 0 20px;
  height: 64px;

  @media only screen and (min-width: 768px) {
    height: 80px;
  }

  @media only screen and (min-width: 1440px) {
    height: 72px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

