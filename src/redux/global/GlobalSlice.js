import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import i18n from '../../i18n/i18n.js';

import {
  editWaterRateThunk,
  forgotPassword,
  getCurrentThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  updateUserThunk,
} from '../User/UserThunks.js';
import {
  apiAddWaterPortion,
  apiDeleteWaterPortion,
  apiEditWaterPortion,
  apiGetMonthWaterPortions,
  apiGetTodayWaterPortions,
} from '../Water/WaterThunks.js';

const initialState = {
  isLoading: false,
  error: null,
  theme: 'light',
  language: i18n.language,
};

function handlePending(state) {
  state.isLoading = true;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          getCurrentThunk.fulfilled,
          logoutThunk.fulfilled,
          updateUserThunk.fulfilled,
          registerThunk.fulfilled,
          editWaterRateThunk.fulfilled,
          loginThunk.fulfilled,
          apiAddWaterPortion.fulfilled,
          apiDeleteWaterPortion.fulfilled,
          apiEditWaterPortion.fulfilled,
          apiGetTodayWaterPortions.fulfilled,
          apiGetMonthWaterPortions.fulfilled,
          forgotPassword.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          getCurrentThunk.pending,
          logoutThunk.pending,
          updateUserThunk.pending,
          registerThunk.pending,
          editWaterRateThunk.pending,
          loginThunk.pending,
          apiAddWaterPortion.pending,
          apiDeleteWaterPortion.pending,
          apiEditWaterPortion.pending,
          apiGetTodayWaterPortions.pending,
          apiGetMonthWaterPortions.pending,
          forgotPassword.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getCurrentThunk.rejected,
          logoutThunk.rejected,
          updateUserThunk.rejected,
          registerThunk.rejected,
          editWaterRateThunk.rejected,
          loginThunk.rejected,
          apiAddWaterPortion.rejected,
          apiDeleteWaterPortion.rejected,
          apiEditWaterPortion.rejected,
          apiGetTodayWaterPortions.rejected,
          apiGetMonthWaterPortions.rejected,
          forgotPassword.rejected
        ),
        handleRejected
      );
  },
});

export const { setTheme, setLanguage } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
