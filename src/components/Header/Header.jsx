import { HeaderContainer, Navigation } from './Header.styled';
import Logo from '../Logo/Logo.jsx';
import UserLogo from '../UserLogo/UserLogo.jsx';
import UserAuth from '../UserAuth/UserAuth.jsx';
import Container from '../Container/Container.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/User/selectors.js';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <Logo />
          <LanguageSwitcher></LanguageSwitcher>
          {isLoggedIn ? <UserLogo /> : <UserAuth />}
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
