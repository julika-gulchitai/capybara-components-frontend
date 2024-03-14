import styled from 'styled-components';

export const DailyNormaContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
  background: var(--white);
  border: 1px solid var(--secondary-white);
  border-radius: 10px;
  padding: 8px 20px;
  width: 164px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: var(--black);
    min-width: 124px;
    margin-bottom: 14px;
  }

  p {
    font-weight: 700;
    font-size: 22px;
    color: var(--blue);
    margin-bottom: 0;
  }

  button {
    font-family: inherit;
    line-height: 1.25;
    color: #8baeff;
    outline: none;
    border: none;
    background: transparent;
  }
`;

export const NormaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
