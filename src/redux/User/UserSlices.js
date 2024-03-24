import { createSlice } from '@reduxjs/toolkit';
import { setToken } from '../../configApi/setToken.js';
import {
  editWaterRateThunk,
  forgotPassword,
  getCurrentThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  resetPassword,
  updateUserThunk,
} from './UserThunks.js';

const initialState = {
  user: {
    username: '',
    email: '',
    gender: '',
    avatarURL: '',
    waterRate: '',
  },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const userSlices = createSlice({
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
      .addCase(getCurrentThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(updateUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })
      .addCase(editWaterRateThunk.fulfilled, (state, { payload }) => {
        state.user.waterRate = payload.waterRate;
        state.isLoggedIn = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.user.email = action.payload;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.user.password = action.payload;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const userReducer = userSlices.reducer;
export const { setStateToken } = userSlices.actions;
