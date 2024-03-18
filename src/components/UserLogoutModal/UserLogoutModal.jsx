import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { NOTIFICATIONS, paramsForNotify } from '../../constants/notifications';

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

  const handleLogout = () => {
    dispatch(logoutThunk());
    Notiflix.Notify.success(NOTIFICATIONS.SUCCESS.LOGOUT, paramsForNotify);
  };

  return (
    <>
      <LogOutWindow>
        <LogOutHeader onClick={handleLogout}>Log out</LogOutHeader>
        <LogOutText>Do you really want to leave?</LogOutText>
        <WrapBtn>
          <LogoutBtn>Log out</LogoutBtn>
          <LogoutCancelBtn onClick={close}>Cancel</LogoutCancelBtn>
        </WrapBtn>
      </LogOutWindow>
    </>
  );
};

export default UserLogoutModal;
