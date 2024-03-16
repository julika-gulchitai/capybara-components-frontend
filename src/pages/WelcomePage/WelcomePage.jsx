import { useState } from 'react';
import { StyledFullPage, StyledMainContainer, StyledInnerContainerLeft, StyledMainTitle, StyledTitle, StyledListLeft, StyledNameList, StyledWelcomeButton, StyledInnerContainerRight, StyledListRight, StyledIconWrapper } from './WelcomePage.styled';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import sprite from '../../assets/sprite.svg';

const WelcomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleShowModal = () => {
    setIsOpenModal(true);
  }

  return (
    <StyledFullPage>
      <StyledMainContainer>
        <StyledInnerContainerLeft>
          <StyledMainTitle>Water consumption tracker</StyledMainTitle>
          <StyledTitle>Record daily water intake and track</StyledTitle>
          <h3 >Tracker Benefits</h3>
          <StyledListLeft>
            <li> <StyledIconWrapper><use href={`${sprite}#calendar`} /></StyledIconWrapper>
              Habit drive</li>
            <li> <StyledIconWrapper><use href={`${sprite}#presentation-chart-bar`} /></StyledIconWrapper>View statistics</li>
            <li> <StyledIconWrapper><use href={`${sprite}#wrench-schewdriver`} /></StyledIconWrapper>Personal rate setting</li>
          </StyledListLeft>
          <StyledWelcomeButton onClick={handleShowModal}>Try tracker</StyledWelcomeButton>
        </StyledInnerContainerLeft>
        <StyledInnerContainerRight>
          <StyledListRight>
            <StyledNameList>Why drink water</StyledNameList>
            <li>Supply of nutrients to all organs</li>
            <li>Providing oxygen to the lungs</li>
            <li><span>Maintaining the work of the heart</span></li>
            <li>Release of processed substances</li>
            <li>Ensuring the stability of the internal environment</li>
            <li>Maintaining within the normal temperature</li>
            <li>Maintaining an immune system capable of resisting disease</li>
          </StyledListRight>
        </StyledInnerContainerRight>
      </StyledMainContainer>
      {isOpenModal && <ModalWindow onClose={() => setIsOpenModal(false)}> Modal Window</ModalWindow>}
    </StyledFullPage>
  );
};

export default WelcomePage;
