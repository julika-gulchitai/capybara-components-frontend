import React from 'react';
import { useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import { logoutThunk } from '../../redux/User/UserThunks.js';
import {
  LogOutBtns,  
  LogOutHeader,
  LogOutText,
  LogOutWindow,
  ButtonEsc,
  ButtonLogOut,   
} from './UserLogoutModal.styled.jsx';



ReactModal.setAppElement('#root');

const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .then(() => {
        dispatch({ type: 'CLEAR_USER_DATA' });
        onClose();
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <LogOutWindow>
      <LogOutHeader>
        <p>Log out</p>        
      </LogOutHeader>
      <LogOutText>
        <p>Do you really want to leave?</p>
      </LogOutText>
      <LogOutBtns>
        <ButtonEsc  $width="160px" onClick={handleCancel}>
          Cancel
        </ButtonEsc>
        <ButtonLogOut  $width="160px" onClick={handleLogout}>
          Log out
        </ButtonLogOut>
      </LogOutBtns>
    </LogOutWindow>
  );
};

export default UserLogoutModal;