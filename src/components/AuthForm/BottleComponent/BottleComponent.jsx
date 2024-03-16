import { Bottle } from './BottleComponnet.styled';
import bottleMobile from '../../../assets/mobile/bottle-sign-in.svg';
import bottleTablet from '../../../assets/tablet/bottle-sing-in.svg';
import bottleDesktop from '../../../assets/desktop/bottle-for-signin.svg';
import { useMediaQuery } from 'react-responsive';

const BottleComponent = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1439px)' });

  return (
    <Bottle>
      <img
        src={isDesktop ? bottleDesktop : isTablet ? bottleTablet : bottleMobile}
        alt='bottle-sign-in'
      />
    </Bottle>
  );
};

export default BottleComponent;
