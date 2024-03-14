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
    dailyNorma: '',
  },
  token: '',
  isLoggIn: false,
};

const rejectedAuthCase = () => ({ ...initialState });

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
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      state.message = payload.message;
      state.user.email = payload.email;
      state.user.avatar = payload.avatar;
      state.user.username = payload.name;
      state.token = payload.token;
      state.isLoggIn = true;
    });
  },
});

export const userReduser = userSlices.reducer;
export const { setStateToken } = userSlices.actions;
