import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { setToken } from '../../configApi/setToken.js';
import {
  getCurrentThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
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
  isLoading: false,
  isError: null,
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
      .addCase(getCurrentThunk.fulfilled, (state, {payload}) => {
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
        const { username, email, gender, avatarURL } = payload?.user;
        state.user.username = username;
        state.user.email = email;
        state.user.gender = gender;
        state.user.avatarURL = avatarURL;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, actions) => {
          state.user = actions.payload.user;

          state.token = actions.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending, logoutThunk.pending),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logoutThunk.rejected
        ),
        (state, actions) => {
          state.isLoading = false;
          state.isError = actions.payload;
        }
      );
  },
});

export const userReducer = userSlices.reducer;
export const { setStateToken } = userSlices.actions;
