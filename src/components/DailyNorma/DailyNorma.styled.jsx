import styled from 'styled-components';

export const DailyNormaContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
  background-color:${props => props.theme.colors.mainBg};
  border: 1px solid var(--secondary-white);
  border-radius: 10px;
  padding: 8px 20px;
  width: 164px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: ${props => props.theme.colors.textColor};
    min-width: 124px;
    margin-bottom: 12px;
  }

  p {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color:${props => props.theme.colors.primaryBlue};
    margin-bottom: 0;
    @media (min-width: 768px) {
      font-size: 24px;
    }
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
