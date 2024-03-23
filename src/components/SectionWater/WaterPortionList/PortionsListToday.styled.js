import styled from 'styled-components';

export const PortionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 264px;
  height: 212px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
  }

  .motivation {
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.theme.colors.primaryBlue};
  }
`;

export const PortionsList = styled.ul`
  max-height: 192px;
  overflow-y: auto;
  
  li {
    padding-bottom: 12px;
  }

  li:not(:first-child) {
    padding-top: 12px;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
`;

export const Portion = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryLightblue};

  .icon-glass {
    width: 26px;
    height: 26px;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`;

export const Volumes = styled.span`
  color: ${(props) => props.theme.colors.primaryBlue};
  font-size: 18px;
  line-height: 1.33;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`;

export const Time = styled.span`
  font-size: 12px;
  line-height: 2;
  color: ${(props) => props.theme.colors.textColor};
`;

export const Edit = styled.div`
  margin-left: auto;
  margin-right: 4px;

  button:first-child {
    margin-right: 18px;
  }
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export const StyledWatterAddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;

  color: ${props => props.theme.colors.primaryBlue};
  line-height: 1.25;
  border: none;
  background-color: transparent;

  font-size: 16px;
  font-weight: 500;

  & svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;
