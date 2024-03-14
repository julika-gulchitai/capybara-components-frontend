import styled from 'styled-components';

export const ButtonStyled = styled.button`
  height: 44px;
  width: ${props => props.$width};
  border-radius: 10px;
  padding: 10px 30px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  border: none;
  background-color: var(--blue);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  color: var(--white);
  margin-top: 24px;
  
  transition: box-shadow 250ms ease-in-out;

  &:hover, &:focus {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }
`