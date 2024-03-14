import styled from "styled-components";
import bottleImg from '../../assets/desktop/botle-home-screen.svg';
import waveRight from '../../assets/desktop/background-wave-right.svg';
import waveLeft from '../../assets/desktop/background-wave-left.svg'

export const StyledFullPage = styled.div`
height: 100vh;

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
/* background-image: url(${bottleImg}),url(${waveRight}), url(${waveLeft}) ; */
background-image: url(${bottleImg}) ;
background-repeat: no-repeat;
background-position: right bottom;
  background-size: 35% 35%;
  
@media (max-width: 768px) {
   
  }
  @media (max-width: 320px) {
  }
`

export const StyledMainContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-between;
width: 1014px;
height: 366px;
margin-bottom: 125px ;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  @media (max-width: 320px) {
    max-width: 100%;
  }
`
export const StyledInnerContainerLeft = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
width: 439px;
height: 366px;
@media (max-width: 768px) {
    
  }
  @media (max-width: 320px) {
    max-width: 90%;
  }
`

export const StyledMainTitle = styled.h1`
font-family: "Roboto", sans-serif;
font-weight: 700;
font-size: 36px;
line-height: 1.16667;
color: #2f2f2f;
text-align: left;
margin: 0;
`
export const StyledTitle = styled.h2`
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 26px;
line-height: 1.23077;
color: #2f2f2f;
margin: 1.5rem 0;
`
export const StyledListLeft = styled.ul`
margin: 0;
padding: 0;
text-align: left;

li{
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
`

export const StyledIconWrapper = styled.svg`
width: ${(props) => props.size || '40px'};
height: ${(props) => props.size || '40px'};
fill: ${(props) => props.color || '#ffffff'};
display: inline - block;
margin-right: 5px;
`;

export const StyledInnerContainerRight = styled.div`
border-radius: 10px;
box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
background: #ecf2ff;
text-align: left;
list-style-position: inside;
display: flex;
height: 332px;
`
export const StyledNameList = styled.h3`
font-family: "Roboto", sans - serif;
font-size: 18px;
line-height: 1.11111;
color: #2f2f2f;
margin: 0;
`

export const StyledListRight = styled.ul`
padding: 32px 24px;
display: flex;
flex-direction: column;
justify-content: space-between;
li{
  &:before{
content: '●';
color: #407BFF;
margin-right: 6px;
}
}
`
export const StyledWelcomeButton = styled.button`
border-radius: 10px;
padding: 10px 30px;
margin-top: 1.5rem;
width: 384px;
box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
background: #407bff;
font-family: "Roboto", sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.33333;
text-align: center;
color: #fff;
`

