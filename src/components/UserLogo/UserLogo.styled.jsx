import { Popover } from '@mui/material';
import styled from 'styled-components';

export const UserMenuButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${props => props.theme.colors.primaryBlue};
  
  transition: color 250ms ease-in-out;

  span {
    font-size: 18px;
    line-height: 1.33;
    text-align: right;
    color: ${props => props.theme.colors.textColor};
    margin-right: 8px;
  }

  svg {
    fill: currentColor;
  }

  &:hover, &:focus {
    color: ${(props) => props.theme.colors.secondaryOrange};
  }
`;

export const AvatarWrapper = styled.div`
  margin-right: 4px;
  width: 28px;
  height: 28px;
  overflow: clip;
  border-radius: 50px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
  }

  span {
    font-weight: 500;
    color: ${props => props.theme.colors.primaryBlue};
    margin: 2px 0 0;
    
  }
`;

export const StyledPopover = styled(Popover)(() => ({
  '& .MuiPopover-paper': {
    backgroundColor: 'transparent',
  }
}))

