import styled from 'styled-components';

export const MenuContainer = styled.div`
  border-radius: 10px;
  padding: 16px;
  min-width: 118px;
  height: 88px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  background-color: var(--white);
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
  color: var(--blue);
  
  transition: color 250ms ease-in-out;
  
  &:hover, &:focus{
    color: var(--secondary-orange);
  }
  
  svg{
    fill: currentColor;
  }
  
  
`;