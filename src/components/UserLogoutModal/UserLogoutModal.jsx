import { useDispatch } from 'react-redux';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';
import { logoutThunk } from '../../redux/User/UserThunks.js';
import {
  LogOutHeader,
  LogOutText,
  LogOutWindow,
  WrapBtn,
  LogoutBtn,
  LogoutCancelBtn,
} from './UserLogoutModal.styled.jsx';

const UserLogoutModal = ({ close }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      <LogOutWindow>
        <LogOutHeader>{t('logout')}</LogOutHeader>
        <LogOutText>{t('logOut.Do you really want to leave?')}</LogOutText>
        <WrapBtn>
          <LogoutBtn onClick={handleLogout}>{t('logout')}</LogoutBtn>
          <LogoutCancelBtn onClick={close}>
            {t('logOut.Cancel')}
          </LogoutCancelBtn>
        </WrapBtn>
      </LogOutWindow>
    </>
  );
};

export default UserLogoutModal;
