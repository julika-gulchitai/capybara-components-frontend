import {
  StyledFullPage,
  StyledMainContainer,
  StyledInnerContainerLeft,
  StyledMainTitle,
  StyledTitle,
  StyledListLeft,
  StyledNameList,
  StyledInnerContainerRight,
  StyledListRight,
  StyledIconWrapper,
  StyledWelcomeLink,
  AdaptivContainer,
} from './WelcomePage.styled';
import sprite from '../../assets/sprite.svg';

// import {
//   StyledFullPage,
//   StyledMainContainer,
//   StyledInnerContainerLeft,
//   StyledMainTitle,
//   StyledTitle,
//   StyledListLeft,
//   StyledNameList,
//   StyledInnerContainerRight,
//   StyledListRight,
//   StyledIconWrapper,
//   StyledWelcomeLink,
// } from './WelcomePage.styled';
// import sprite from '../../assets/sprite.svg';

import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';

const WelcomePage = ({ setTheme }) => {
  const { t } = useTranslation();
  const changeTheme = (e) => {
    setTheme(e.target.checked)
  }

  return (
    // <ThemeComponent>
    //   <StyledFullPage >
    //     <AdaptivContainer>
    //       <StyledMainContainer>
    //         <StyledInnerContainerLeft>
    //           <StyledMainTitle>Water consumption tracker</StyledMainTitle>
    //           <StyledTitle>Record daily water intake and track</StyledTitle>
    //           <h3 >Tracker Benefits</h3>
    //           <StyledListLeft>
    //             <li> <StyledIconWrapper><use href={`${sprite}#calendar`} /></StyledIconWrapper>
    //               Habit drive</li>
    //             <li> <StyledIconWrapper><use href={`${sprite}#presentation-chart-bar`} /></StyledIconWrapper>View statistics</li>
    //             <li> <StyledIconWrapper><use href={`${sprite}#wrench-schewdriver`} /></StyledIconWrapper>Personal rate setting</li>
    //           </StyledListLeft>
    //           <StyledWelcomeLink to='/signup'>Try tracker</StyledWelcomeLink>
    //         </StyledInnerContainerLeft>
    //         <StyledInnerContainerRight>
    //           <StyledListRight>
    //             <StyledNameList>Why drink water</StyledNameList>
    //             <li>Supply of nutrients to all organs</li>
    //             <li>Providing oxygen to the lungs</li>
    //             <li><span>Maintaining the work of the heart</span></li>
    //             <li>Release of processed substances</li>
    //             <li>Ensuring the stability of the internal environment</li>
    //             <li>Maintaining within the normal temperature</li>
    //             <li>Maintaining an immune system capable of resisting disease</li>
    //           </StyledListRight>
    //         </StyledInnerContainerRight>
    //       </StyledMainContainer>
    //     </AdaptivContainer>

    //   </StyledFullPage>
    // </ThemeComponent>
    <>
      {/* <ThemeComponent> */}

      <input type='checkbox' onChange={changeTheme} />
      <StyledFullPage>
        <AdaptivContainer>
          <StyledMainContainer>
            <StyledInnerContainerLeft>
              <StyledMainTitle>
                {t('welcomePage.Water consumption tracker')}
              </StyledMainTitle>
              <StyledTitle>
                {t('welcomePage.Record daily water intake and track')}
              </StyledTitle>
              <h3>{t('welcomePage.Tracker Benefits')}</h3>
              <StyledListLeft>
                <li>
                  {' '}
                  <StyledIconWrapper>
                    <use href={`${sprite}#calendar`} />
                  </StyledIconWrapper>
                  {t('welcomePage.Habit drive')}
                </li>
                <li>
                  {' '}
                  <StyledIconWrapper>
                    <use href={`${sprite}#presentation-chart-bar`} />
                  </StyledIconWrapper>
                  {t('welcomePage.View statistics')}
                </li>
                <li>
                  {' '}
                  <StyledIconWrapper>
                    <use href={`${sprite}#wrench-schewdriver`} />
                  </StyledIconWrapper>
                  {t('welcomePage.Personal rate setting')}
                </li>
              </StyledListLeft>
              <StyledWelcomeLink to="/signup">
                {t('welcomePage.Try tracker')}
              </StyledWelcomeLink>
            </StyledInnerContainerLeft>
            <StyledInnerContainerRight>
              <StyledListRight>
                <StyledNameList>
                  {t('welcomePage.Why drink water')}
                </StyledNameList>
                <li>{t('welcomePage.Supply of nutrients to all organs')}</li>
                <li>{t('welcomePage.Providing oxygen to the lungs')}</li>
                <li>
                  <span>
                    {t('welcomePage.Maintaining the work of the heart')}
                  </span>
                </li>
                <li>{t('welcomePage.Release of processed substances')}</li>
                <li>
                  {t(
                    'welcomePage.Ensuring the stability of the internal environment'
                  )}
                </li>
                <li>
                  {t('welcomePage.Maintaining within the normal temperature')}
                </li>
                <li>
                  {t(
                    'welcomePage.Maintaining an immune system capable of resisting disease'
                  )}
                </li>
              </StyledListRight>
            </StyledInnerContainerRight>
          </StyledMainContainer>
        </AdaptivContainer>
      </StyledFullPage>
      {/* </ThemeComponent> */}
    </>
  );
};

export default WelcomePage;
