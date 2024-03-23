import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AdaptiveContainer } from '../../components/Container/Container.styled.jsx';

export const BackgroundContainer = styled.div`
  /* height: max-content; */
  background-repeat: no-repeat;
  /* margin-top: -64px; */
  min-height: 100svh;
  background-image: url(${props => props.theme.backgroundImage.bgSignMob});
  background-position: calc(50% + 3px) 57px;
  
  @media only screen and (min-width: 768px) {
    min-height: 100svh;
    background-image: url(${props => props.theme.backgroundImage.bgSignTab});
    background-position: calc(50% + 30px) 16px;
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${props => props.theme.backgroundImage.bgSignDesktop});
    background-position: calc(50% - 10px) -13px;
  }
`;
export const SignContainer = styled(AdaptiveContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
  padding-bottom: 40px;
  background-color: transparent;
 margin-top: -15px;

 @media only screen and (min-width: 768px){
  margin-top: -8px;
 }
  
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    padding-bottom: 0;
    padding-right: 216px;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  width: 280px;
  margin: 0 auto;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 60px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`;

export const WraperForm = styled.div`
  z-index: 100;  
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: ${props => props.theme.colors.textColor};
  margin-bottom: 16px;
  margin-top: 30px;
  @media only screen and (min-width: 1440px) {
    margin-top: 135px;
  }
`;

export const StyledNavlink = styled(NavLink)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${props => props.theme.colors.primaryBlue};
  margin-top: 16px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    color: ${props => props.theme.colors.secondaryOrange};
  }
`;
export const MarginBetween = styled.div`
  margin-top: 16px;
`;


export const ForgotNavLink = styled(StyledNavlink)`
  margin-left: 16px;
  `