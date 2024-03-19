import { useDispatch } from 'react-redux';

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
  };

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
