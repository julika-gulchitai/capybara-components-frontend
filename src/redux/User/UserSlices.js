import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { setToken } from '../../utils/setToken.js';
import {
  getCurrentThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './UserThunks.js';
const initialState = {
  user: {
    name: '',
    email: '',
    gender: '',
    avatar: '',
    waterRate: '',
  },
  token: '',
  isLoggIn: false,
  isRefresh: false,
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
      .addCase(getCurrentThunk.fulfilled, (state, actions) => {
        state.user.name = actions.payload.name;
        state.token = actions.payload.token;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(getCurrentThunk.pending, (state, actions) => {
        state.isRefresh = true;
      })
      .addCase(getCurrentThunk.rejected, (state) => {
        state.isRefresh = false;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = '';
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

export const userReduser = userSlices.reducer;
export const { setStateToken } = userSlices.actions;
