import React, {useState} from 'react';
import {AvatarWrapper, UserMenuButton} from './UserLogo.styled.jsx';
import svgSprite from '../../assets/sprite.svg';
import {Popover} from '@mui/material';
import UserLogoModal from '../UserLogoModal/UserLogoModal.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import SettingModal from '../SettingModal/SettingModal.jsx';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/User/selectors.js';
/*import UserLogoutModal from '../UserLogoutModal/UserLogoutModal.jsx';*/

function UserLogo() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const {username, email, avatarURL} = useSelector(selectUser);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'user_logo_modal' : undefined;

  function closeModal() {
    setIsSettingsModalOpen(false);
    setIsLogOutModalOpen(false);
  }

  return (
    <>
      <UserMenuButton onClick={handleClick}>
        {username && (<span>{username}</span>)}
        <AvatarWrapper $borderColor={avatarURL ? 'transparent' : '#2f2f2f'}>
          {avatarURL
            ? (<img src={avatarURL} width={28} height={28} alt='user avatar'/>)
            : username ? (<span>{username[0].toUpperCase()}</span>) : (<span>{email[0].toUpperCase()}</span>)}

        </AvatarWrapper>

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
          horizontal: 'left'
        }}
      >
        <UserLogoModal
          closeMenu={() => {
            handleClose();
          }}
          openSettings={() => {
            setIsSettingsModalOpen(true);
          }}
          openLogOut={() => {
            setIsLogOutModalOpen(true);
          }}/>
      </Popover>
      <ModalWindow open={isSettingsModalOpen || isLogOutModalOpen} onClose={() => closeModal()}>
        {isSettingsModalOpen && (<SettingModal close={() => setIsSettingsModalOpen(false)}/>)}
        {/*  {isLogOutModalOpen && (<UserLogoutModal close={() => setIsLogOutModalOpen(false)}/>)}*/}
      </ModalWindow>
    </>
  );
}

export default UserLogo;
