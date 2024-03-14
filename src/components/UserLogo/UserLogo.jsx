import React, {useState} from 'react';
import defaultAvatar from '../../assets/images/default_avatar.webp';
import {UserMenuButton} from './UserLogo.styled.jsx';
import svgSprite from '../../assets/sprite.svg';
import {Popover} from '@mui/material';
import UserLogoModal from '../UserLogoModal/UserLogoModal.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import Settings from '../Settings/Settings.jsx';

function UserLogo() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user_logo_modal' : undefined;

  function closeModal() {
    setIsSettingsModalOpen(false)
    setIsLogOutModalOpen(false)
  }

  return (
    <>
      <UserMenuButton onClick={handleClick}>
        <span>Alejandro</span>
        <img src={defaultAvatar} width={28} height={28} alt='user avatar'/>
        <svg width={16} height={16}>
          <use href={`${svgSprite}#icon-arrow_down`}/>
        </svg>
      </UserMenuButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}

      >
        <UserLogoModal
          closeMenu={()=>{handleClose()}}
          openSettings={()=>{setIsSettingsModalOpen(true)}}
          openLogOut={()=>{setIsLogOutModalOpen(true)}}/>
      </Popover>
      <ModalWindow open={isSettingsModalOpen || isLogOutModalOpen} onClose={() => closeModal() }>
        <Settings close={() => setIsSettingsModalOpen(false)}/>
      </ModalWindow>
    </>
  );
}

export default UserLogo;