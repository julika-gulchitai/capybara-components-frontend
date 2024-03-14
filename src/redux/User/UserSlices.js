import { createSlice } from '@reduxjs/toolkit';
import setToken from '../../utils/setToken.js';
import {
  registerThunk,
  loginThunk,
  updateUserThunk,
  getCurrentThunk,
  logoutThunk,
} from './UserThunks.js';
const initialState = {
  user: {
    name: '',
    email: '',
    gender: '',
    avatar: '',
  },
  token: '',
  isLoggIn: false,
};

const rejectedAuthCase = () => ({ ...initialState });
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStateToken: {
      prepare: (token) => {
        setToken(token);
        return { payload: token };
      },
      reducer: (state, { payload }) => {
        state.token = payload;
      },
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        state.user.username = payload.name;
        state.token = payload.token;
        state.isLoggIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        state.token = payload.token;
        state.user.username = payload.name;
        state.isLoggIn = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.gender = payload.gender;
      })
      .addCase(getCurrentThunk.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.avatar = payload.avatar;
        state.user.gender = payload.gender;
        state.user.dailyNorma = payload.dailyNorma;
        state.isLoggIn = true;
      })
      .addCase(logoutThunk.fulfilled, rejectedAuthCase);
  },
});

export const userReduser = userSlice.reducer;
export const { setStateToken } = userSlice.actions;
