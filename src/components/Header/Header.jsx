import {HeaderContainer, Navigation, SwitchesBlock} from './Header.styled';
import Logo from '../Logo/Logo.jsx';
import UserLogo from '../UserLogo/UserLogo.jsx';
import UserAuth from '../UserAuth/UserAuth.jsx';
import Container from '../Container/Container.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../../redux/User/selectors.js';
import {LangSwitch, ThemeSwitch} from '../SettingModal/SettingsSwitchStyled.jsx';
import React, {useEffect, useState} from 'react';
import {selectLanguage, selectTheme} from '../../redux/global/selectors.js';
import {setLanguage, setTheme} from '../../redux/global/GlobalSlice.js';
import i18next from 'i18next';
import {LOCALS} from '../../i18n/constants.js';

const Header = () => {
  const theme = useSelector(selectTheme);
  const language = useSelector(selectLanguage);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [themeValue, setThemeValue] = useState(false);
  const [languageValue, setLanguageValue] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setThemeValue(theme === 'dark')
  }, [theme]);

  useEffect(() => {
    setLanguageValue(language === LOCALS.EN)
    i18next.changeLanguage(language);
  }, [language]);

  function handleThemeChange({target}) {
    dispatch(setTheme(target.checked ? 'dark' : 'light'))
  }

  function handleLanguageChange({target}) {
    dispatch(setLanguage(target.checked ? LOCALS.EN : LOCALS.UK))
  }

  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <Logo/>
          <SwitchesBlock>
            <ThemeSwitch
              checked={themeValue}
              onChange={handleThemeChange}
            />
            <LangSwitch
              checked={languageValue}
              onChange={handleLanguageChange}
            />
          </SwitchesBlock>
          {isLoggedIn ? <UserLogo/> : <UserAuth/>}
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
