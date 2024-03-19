import styled from 'styled-components';

export const LanguageContainer = styled.div`
  display: flex;
  gap: 8px;
  button {
    background-color: var(--secondary-blue);
    border: none;
    color: var(--white);
    font-size: 10px;
    border-radius: 2px;
    &:disabled {
      background-color: var(--secondary-lightblue);
    }
  }
`;
