import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  position: relative;
  
  &::after {
    content: '';
    height: 1px;
    width: 0;
    position: absolute;
    bottom: 1px;
    left: 0;
    background-color: ${props => props.theme.colors.secondaryRed};
    
    transition: width 250ms ease-in-out;
  }

  &:hover::after {
    width: 16px;
  }

  & svg {
    width: 16px;
    height: 16px;
  }
`;