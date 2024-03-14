import styled from 'styled-components';
import { theme } from '../../css/VariablesJSX.jsx';

export const LogOutWindow = styled.div`
  background-color: ${theme.colors.primaryLight};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 280px;
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media screen and (min-width: 768px) {
    width: 592px;
  }
`;

export const LogOutHeader = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogOutText = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
  line-height: 20px;
`;

export const LogOutBtns = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${theme.colors.secondaryRed};
  color: ${theme.colors.primaryLight};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: box-shadow 0.3s ease, transform 0.3s ease, width 0.3s ease;
  width: 232px;
  height: 36px;
  padding: 8px 30px;
  &:not(:first-child) {
    margin-bottom: 24px;
  }
  &:not(:last-child) {
    background-color: ${theme.colors.secondaryLightBlue};
    color: ${theme.colors.primaryAccent};
  }
  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(64, 123, 255, 0.5);
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
    padding: 10px 30px;
    &:not(:last-child) {
      margin-right: 24px;
      margin-bottom: 0;
    }
    &:not(:first-child) {
      margin-bottom: 0;
    }
  }
`;

export const LogOutClose = styled.button`
  background-color: ${theme.colors.primaryLight};
  transition: transform 0.5s ease-out;
  padding: 4px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    fill: ${theme.colors.primaryLight};
    stroke: ${theme.colors.primaryAccent};
  }
  &:active {
    svg {
      transform: scale(0.9);
    }
  }
`;

export const ButtonEsc = styled.button`display: flex;
justify-content: center;
align-items: center;
gap: 10px;

font-size: 16px;
line-height: calc(20 / 16);
font-weight: 500;
text-align: center;
color: ${theme.colors.primaryAccent};
width: 100%;
padding: 8px 30px;

outline: none;
border: none;
border-radius: 10px;
background-color: ${theme.colors.secondaryLightBlue};
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);;
cursor: pointer;

&:hover {
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
}
&:active {
  box-shadow: none;
}
&:disabled {
  background-color: ${theme.colors.secondaryBlue};
  cursor: not-allowed;
}
@media screen and (min-width: 768px) {
  width: 100%};
  margin-left: 24px};
  margin-right:  24px};
  font-size: 18px;
  line-height: calc(24 / 18);
  padding: 10px 30px;
}

svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: ${theme.colors.primaryLight};
}
`;

export const ButtonLogOut = styled.button`display: flex;
justify-content: center;
align-items: center;
gap: 10px;

font-size: 16px;
line-height: calc(20 / 16);
font-weight: 500;
text-align: center;
color: ${theme.colors.primaryLight};
width: 100%;
padding: 8px 30px;

outline: none;
border: none;
border-radius: 10px;
background-color: ${theme.colors.secondaryRed};
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;

&:hover {
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
}
&:active {
  box-shadow: none;
}
&:disabled {
  background-color: ${theme.colors.secondaryBlue};
  cursor: not-allowed;
}
@media screen and (min-width: 768px) {
  width: 100%};
  margin-left: 24px};
  margin-right:  24px};
  font-size: 18px;
  line-height: calc(24 / 18);
  padding: 10px 30px;
}

svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: ${theme.colors.primaryLight};
}
`;
export const HoverCloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 4px;
  border-radius: 100%;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${theme.colors.secondaryLightBlue};
  }
`;