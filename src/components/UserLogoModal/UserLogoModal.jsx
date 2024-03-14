import React from 'react';
import {MenuButton, MenuContainer} from './UserLogoModal.styled.jsx';
import svgSprite from '../../assets/sprite.svg';

function UserLogoModal({openSettings, openLogOut, closeMenu}) {
  function handleSettingsClick(){
    openSettings()
    closeMenu()
  }

  function handleLogOutClick(){
    openLogOut()
    closeMenu()
  }

  return (
    <MenuContainer>
      <MenuButton onClick={handleSettingsClick}>
        <svg width={16} height={16}>
          <use href={`${svgSprite}#icon-cog`}/>
        </svg>
        Setting
      </MenuButton>
      <MenuButton onClick={handleLogOutClick}>
        <svg width={16} height={16}>
          <use href={`${svgSprite}#icon-exit`}/>
        </svg>
        Log out
      </MenuButton>
    </MenuContainer>
  );
}

export default UserLogoModal;