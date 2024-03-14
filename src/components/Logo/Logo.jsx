import React from 'react';
import {LogoWrapper} from './Logo.styled.jsx';
import svgSprite from '../../assets/sprite.svg';

function Logo() {
  return (
    <LogoWrapper to={'/'}>
      <svg width={102} height={48}>
        <use href={`${svgSprite}#icon-logo`}/>
      </svg>
    </LogoWrapper>
  );
}

export default Logo;