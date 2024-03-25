import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix';

import {
  NOTIFICATIONS,
  paramsForNotify,
} from '../../constants/notifications.js';

import { MenuButton, MenuContainer } from './UserLogoModal.styled.jsx';

import svgSprite from '../../assets/sprite.svg';

function UserLogoModal({ openSettings, openLogOut, closeMenu }) {
  const { t } = useTranslation();

  function handleSettingsClick() {
    openSettings();
    closeMenu();
  }

  function handleLogOutClick() {
    openLogOut();
    closeMenu();
    Notify.success(NOTIFICATIONS.INFO.LOGOUT, paramsForNotify);
  }

  return (
    <MenuContainer>
      <MenuButton onClick={handleSettingsClick}>
        <svg width={16} height={16}>
          <use href={`${svgSprite}#icon-cog`} />
        </svg>
        {t('settingModal.Setting')}
      </MenuButton>
      <MenuButton onClick={handleLogOutClick}>
        <svg width={16} height={16}>
          <use href={`${svgSprite}#icon-exit`} />
        </svg>
        {t('logout')}
      </MenuButton>
    </MenuContainer>
  );
}

export default UserLogoModal;
