import styled from 'styled-components';

export const MenuContainer = styled.div`
  border-radius: 10px;
  padding: 16px;
  min-width: 118px;
  height: 88px;
  box-shadow: ${props => props.theme.shadows.buttonShadow};
  background-color: ${props => props.theme.colors.mainBg};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  gap: 8px;

  font-size: 16px;
  line-height: 1.25;
  color: ${props => props.theme.colors.primaryBlue};
  
  transition: color 250ms ease-in-out;
  
  &:hover, &:focus{
    color: ${props => props.theme.colors.secondaryOrange};
  }
  
  svg{
    fill: currentColor;
  }
  
  
`;