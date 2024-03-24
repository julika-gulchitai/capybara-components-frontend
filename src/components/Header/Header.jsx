import { HeaderContainer, Navigation, SwitchesBlock, SwitchesFloatingBlock } from './Header.styled';
import Logo from '../Logo/Logo.jsx';
import UserLogo from '../UserLogo/UserLogo.jsx';
import UserAuth from '../UserAuth/UserAuth.jsx';
import Container from '../Container/Container.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/User/selectors.js';
import { LangSwitch, ThemeSwitch } from '../SettingModal/SettingsSwitch.styled.jsx';
import { useEffect, useState } from 'react';
import { selectLanguage, selectTheme } from '../../redux/global/selectors.js';
import { setLanguage, setTheme } from '../../redux/global/GlobalSlice.js';
import i18next from 'i18next';
import { LOCALS } from '../../i18n/constants.js';
import { useMediaQuery } from 'react-responsive';
import {themeDark, themeLight} from '../../css/variablesTheme.js';

const Header = () => {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const language = useSelector(selectLanguage);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [themeValue, setThemeValue] = useState(false);
  const [languageValue, setLanguageValue] = useState(false);
  const [realThemeValue, setRealThemeValue] = useState(themeLight);

  useEffect(() => {
    setThemeValue(theme === 'dark');
    setRealThemeValue(theme === 'dark' ? themeDark : themeLight)
  }, [theme]);

  useEffect(() => {
    setLanguageValue(language === LOCALS.EN);
    i18next.changeLanguage(language);
  }, [language]);

  function handleThemeChange({ target }) {
    dispatch(setTheme(target.checked ? 'dark' : 'light'));
  }

  function handleLanguageChange({ target }) {
    dispatch(setLanguage(target.checked ? LOCALS.EN : LOCALS.UK));
  }

  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <Logo />
          {isTabletOrDesktop
            ? (<SwitchesBlock>
              <ThemeSwitch
                checked={themeValue}
                onChange={handleThemeChange}
              />
              <LangSwitch
                theme={realThemeValue}
                checked={languageValue}
                onChange={handleLanguageChange}
              />
            </SwitchesBlock>)
            : (<SwitchesFloatingBlock>
              <ThemeSwitch
                checked={themeValue}
                onChange={handleThemeChange}
              />
              <LangSwitch
                theme={realThemeValue}
                checked={languageValue}
                onChange={handleLanguageChange}
              />
            </SwitchesFloatingBlock>)
          }
          {isLoggedIn ? <UserLogo /> : <UserAuth />}
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
