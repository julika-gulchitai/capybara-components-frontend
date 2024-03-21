import styled from 'styled-components';

export const LanguageContainer = styled.div`
  display: flex;
  gap: 8px;
  button {
    background-color: ${props => props.theme.colors.secondaryBlue};
    border: none;
    color: ${props => props.theme.colors.mainBg};
    font-size: 10px;
    border-radius: 2px;
    &:disabled {
      background-color: ${props => props.theme.colors.secondaryLightblue};
    }
  }
`;
