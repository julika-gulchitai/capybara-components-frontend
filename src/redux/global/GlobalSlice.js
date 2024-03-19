import { createSlice } from '@reduxjs/toolkit';
import {
  editWaterRateThunk,
  getCurrentThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  updateUserThunk
} from '../User/UserThunks.js';
import {waterThunk} from '../Water/WaterThunks.js';

const initialState = {
  isLoading: false,
  error: null,
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
  extraReducers: builder => {
    builder
      .addCase(getCurrentThunk.fulfilled, handleFulfilled)
      .addCase(getCurrentThunk.pending, handlePending)
      .addCase(getCurrentThunk.rejected, handleRejected)

      .addCase(logoutThunk.pending, handlePending)
      .addCase(logoutThunk.fulfilled, handleFulfilled)
      .addCase(logoutThunk.rejected, handleRejected)

      .addCase(updateUserThunk.pending, handlePending)
      .addCase(updateUserThunk.fulfilled,handleFulfilled)
      .addCase(updateUserThunk.rejected, handleRejected)

      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, handleFulfilled)
      .addCase(registerThunk.rejected, handleRejected)

      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(loginThunk.rejected, handleRejected)

      .addCase(editWaterRateThunk.pending, handlePending)
      .addCase(editWaterRateThunk.fulfilled, handleFulfilled)
      .addCase(editWaterRateThunk.rejected, handleRejected)

      .addCase(waterThunk.pending, handlePending)
      .addCase(waterThunk.fulfilled, handleFulfilled)
      .addCase(waterThunk.rejected, handleRejected);
  },
});

export const globalReducer = globalSlice.reducer;
