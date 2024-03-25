import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/User/selectors.js';
import { selectTheme } from '../../redux/global/selectors.js';

import UserLogoModal from '../UserLogoModal/UserLogoModal.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal.jsx';
import SettingModal from '../SettingModal/SettingModal.jsx';

import {
  AvatarWrapper,
  StyledPopover,
  UserMenuButton,
} from './UserLogo.styled.jsx';
import { themeDark, themeLight } from '../../css/variablesTheme.js';

import svgSprite from '../../assets/sprite.svg';

function UserLogo() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { username, email, avatarURL } = useSelector(selectUser);

  const currentTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(themeLight);
  useEffect(() => {
    currentTheme === 'dark' ? setTheme(themeDark) : setTheme(themeLight);
  }, [currentTheme, theme]);

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
        {username && <span>{username}</span>}
        <AvatarWrapper
          $borderColor={avatarURL ? 'transparent' : theme.colors.textColor}
        >
          {avatarURL ? (
            <img src={avatarURL} width={28} height={28} alt="user avatar" />
          ) : username ? (
            <span>{username[0].toUpperCase()}</span>
          ) : (
            <span>{email[0].toUpperCase()}</span>
          )}
        </AvatarWrapper>

        <svg width={16} height={16}>
          <use href={`${svgSprite}#icon-arrow_down`} />
        </svg>
      </UserMenuButton>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
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
          }}
        />
      </StyledPopover>
      {(isSettingsModalOpen || isLogOutModalOpen) && (
        <ModalWindow onClose={() => closeModal()}>
          {isSettingsModalOpen && (
            <SettingModal close={() => setIsSettingsModalOpen(false)} />
          )}
          {isLogOutModalOpen && (
            <UserLogoutModal close={() => setIsLogOutModalOpen(false)} />
          )}
        </ModalWindow>
      )}
    </>
  );
}

export default UserLogo;
