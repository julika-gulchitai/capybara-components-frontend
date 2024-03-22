import { Bottle } from './BottleComponnet.styled';
import bottleMobileLight from '../../../assets/mobile/bottle-sign-in.svg';
import bottleTabletLight from '../../../assets/tablet/bottle-sing-in.svg';
import bottleDesktopLight from '../../../assets/desktop/bottle-for-signin.svg';
import bottleDesktopDark from '../../../assets/desktop/darkTheme/bottle-signin-dark-desc.svg'
import bottleTabletDark from '../../../assets/tablet/darkTheme/bottle-signin-dark-tab.svg'
import bottleMobileDark from '../../../assets/mobile/darkTheme/bottle-signin-dark-mob.svg'

import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/global/selectors';

const BottleComponent = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1439px)' });

  const currentTheme = useSelector(selectTheme);

  return (
    <Bottle>
      {(currentTheme === 'dark')
        ? <img
          src={isDesktop ? bottleDesktopDark : isTablet ? bottleTabletDark : bottleMobileDark}
          alt='bottle-sign-in'
        />
        : <img
          src={isDesktop ? bottleDesktopLight : isTablet ? bottleTabletLight : bottleMobileLight}
          alt='bottle-sign-in'
        />}

    </Bottle>
  );
};

export default BottleComponent;
