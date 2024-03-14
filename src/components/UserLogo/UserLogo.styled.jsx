import styled from 'styled-components';

export const UserMenuButton = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  
  span{
    font-size: 18px;
    line-height: 1.33;
    text-align: right;
    color: var(--black);
    margin-right: 8px;
  }
  
  img{
    margin-right: 4px;
  }
  
  svg{
    fill: var(--blue)
  }
`;