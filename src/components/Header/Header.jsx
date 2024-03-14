import {HeaderContainer, Navigation} from './Header.styled';
import Logo from '../Logo/Logo.jsx';
import UserLogo from '../UserLogo/UserLogo.jsx';
import UserAuth from '../UserAuth/UserAuth.jsx';

const Header = () => {

  return (
    <HeaderContainer>
      <Navigation>
        <Logo/>
        <UserAuth/>
        <UserLogo/>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
