import styled from 'styled-components';

export const StyledSectionWaterList = styled.div`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 209px;

  width: 592px;
  height: 680px;

  margin-left: 736px;
  margin-top: calc(-80px + 0px);

  border-radius: 10px;
  background: var(--secondary-white);
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) {
    margin-bottom: 44px;
  }

  @media only screen and (min-width: 1440px) {
    height: 680px;
  }
`;
