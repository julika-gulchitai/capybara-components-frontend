import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SignInLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  height: 100%;
  align-items: center;
  font-size: 16px;
  line-height: 1.25;
  color: ${props => props.theme.colors.primaryBlue};
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.secondaryOrange};
  }
  svg{
    fill:${props => props.theme.colors.textColor};
  }
`;