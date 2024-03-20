import styled from 'styled-components';

export const ButtonStyled = styled.button`
  height: 44px;
  width: ${props => props.$width};
  border-radius: 10px;
  padding: 10px 30px;
  box-shadow: ${props => props.theme.shadows.buttonShadow};
  border: none;
  background: ${props => props.theme.colors.primaryBlue};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  color: ${props => props.theme.colors.mainBg};
  margin-top: 24px;
  
  transition: box-shadow 250ms ease-in-out;

  &:hover, &:focus {
    box-shadow: ${props => props.theme.hovers.buttonShadow};
  }

  &:active {
    box-shadow: none;
  }
`