import React from 'react';
import {LogoWrapper} from './Logo.styled.jsx';
import svgSprite from '../../assets/sprite.svg';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../../redux/User/selectors.js';

function Logo() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <LogoWrapper to={isLoggedIn ? '/home' :'/welcome'}>
      <svg width={102} height={48}>
        <use href={`${svgSprite}#icon-logo`}/>
      </svg>
    </LogoWrapper>
  );
}

export default Logo;