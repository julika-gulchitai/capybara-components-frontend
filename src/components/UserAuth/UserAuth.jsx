import React from 'react';
import {SignInLink} from './UserAuth.styled.jsx';
import svgSprite from '../../assets/sprite.svg';

function UserAuth() {
  return (
    <SignInLink to='/signin'>Sign in
      <svg width={28} height={28}>
        <use href={`${svgSprite}#icon-user`}/>
      </svg>
    </SignInLink>
  );
}

export default UserAuth;