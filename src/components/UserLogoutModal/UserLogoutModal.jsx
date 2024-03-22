import { useDispatch } from 'react-redux';
// import Notiflix from 'notiflix';
// import {
//   NOTIFICATIONS,
//   paramsForNotify,
// } from '../../constants/notifications.js';
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
  //   const params = new URLSearchParams(window.location.search);
  //   const message = params.get('message');

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  // if (message) {
  //   Notiflix.Notify(NOTIFICATIONS.INFO.LOGOUT, paramsForNotify);
  // }
  return (
    <>
      <LogOutWindow>
        <LogOutHeader>Log out</LogOutHeader>
        <LogOutText>Do you really want to leave?</LogOutText>
        <WrapBtn>
          <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
          <LogoutCancelBtn onClick={close}>Cancel</LogoutCancelBtn>
        </WrapBtn>
      </LogOutWindow>
    </>
  );
};

export default UserLogoutModal;
