import styled from "styled-components";
import { Link } from "react-router-dom";
import { AdaptiveContainer } from '../../components/Container/Container.styled.jsx';

export const StyledFullPage = styled.div`
  background-repeat: no-repeat;
  background-position: bottom;
  color: ${props => props.theme.colors.textColor};
  height: max-content;

  @media only screen and (min-width: 768px) {
      justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
      background-size: contain;
      height: calc(100svh - 72px);
      display: flex;
      align-items: flex-start;
      justify-content: center;
  }
`
export const AdaptivContainer = styled(AdaptiveContainer)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  
  @media only screen and (min-width: 768px) {
    margin: 1.5rem 0 0;
    align-items: flex-start;
    gap: 60px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    margin: 68px 5.5rem 4.2rem 6.5rem;
    gap: 81px;
  }
`
export const StyledInnerContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  
  @media only screen and (min-width: 1440px) {
    width: 439px;
    min-width: 439px;
  }
  
h3{
  font-size: 18px;
  line-height: 1.11111;
  @media only screen and (min-width: 768px) {
    margin-top: .5rem;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: .5rem;
    margin-bottom: 1rem;
  }
  }
`
export const StyledMainTitle = styled.h1`
 font-size: 1.75rem;
  margin: 0;
  width: 246px;
  
  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.16667;
    width: auto;
  }
  @media only screen and (min-width: 1440px) {
    line-height: 1.16667;
  }
`
export const StyledTitle = styled.h2`
  font-weight: 400;
  line-height: 1.25;
  margin: 1rem 0;
  width: 246px;
  
  @media only screen and (min-width: 768px) {
    letter-spacing: 1px;
    width: auto;
  }
`
export const StyledListLeft = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
  }
  li{
    display: flex;
    align-items: center;
    margin-top: 1rem;
    @media only screen and (min-width: 768px) {
      min-width: 224px;
      gap: 1rem;
    }
    @media only screen and (min-width: 1440px) {
      gap:.25rem;
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
`
export const StyledIconWrapper = styled.svg`
  width: ${(props) => props.size || '32px'};
  height: ${(props) => props.size || '32px'};
  fill: ${(props) => props.color || props.theme.colors.mainBg};
  display: inline - block;
  margin-right: 5px;
  @media only screen and (min-width: 768px) {
    width: ${(props) => props.size || '40px'};
    height: ${(props) => props.size || '40px'};
  }
`

export const StyledInnerContainerRight = styled.div`
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.windowShadowContainer};
  background: ${props => props.theme.colors.secondaryBg};
  text-align: left;
  list-style-position: inside;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    height: 332px;
    width: 494px;
    padding: 32px 24px;
  }

  @media only screen and (min-width: 1440px) {
    align-self: flex-end;
  }
  `
export const StyledNameList = styled.h3`
  font-size: 18px;
  line-height: 1.11;
  `

export const StyledListRight = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    line-height: 1.25;
    display: flex;
    align-items: center;

    span {
      width: 232px;

      @media only screen and (min-width: 768px) {
        width: 430px;
      }
    }

    &:before {
      content: '';
      display: inline-block;
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.primaryBlue};
      margin-right: 6px;
    }
  }
`
export const StyledWelcomeLink = styled(Link)`
  border-radius: 10px;
  border: none;
  padding: .5rem;
  margin-top: 1.5rem;

  box-shadow: ${props => props.theme.shadows.buttonShadow};
  background: ${props => props.theme.colors.primaryBlue};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: ${props => props.theme.colors.mainBg};
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 1440px) {
    width: 24rem;
    margin-top: .5rem;
    margin-bottom: 0;
  }
`

export const BackgroundContainer = styled.div`
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100vh - 64px);
  background-position: calc(50% + 593px) bottom;
  background-image: url(${props => props.theme.backgroundImage.backgroundWelcomePageMob});

  @media only screen and (min-height: 960px) and (min-width: 320px) and (max-width: 767px){
    background-position-y: bottom;
  }
  
  @media only screen and (min-width: 768px) {  
    min-height: calc(100vh - 80px);
    background-position: calc(50% + 370px) -80px;
    background-image: url(${props => props.theme.backgroundImage.backgroundWelcomePageTablet});
  }

  @media only screen and (min-height: 800px) and (min-width: 768px){
    background-position-y: bottom;
  }

  @media only screen and (min-width: 1440px) {
    min-height: calc(100vh - 72px);
    background: no-repeat calc(50% + 480px) 440px url(${props => props.theme.backgroundImage.backgroundWelcomePageDeskBottle}),
    no-repeat calc(50%) 37px url(${props => props.theme.backgroundImage.backgroundWelcomePageDsctp});
  }

  @media only screen and (min-height: 800px) and (min-width: 1440px){
    background: no-repeat calc(50% + 480px) 440px url(${props => props.theme.backgroundImage.backgroundWelcomePageDeskBottle}),
    no-repeat calc(50%) 37px/cover url(${props => props.theme.backgroundImage.backgroundWelcomePageDsctp});
  }
`;