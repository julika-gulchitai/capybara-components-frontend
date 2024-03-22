import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  apiDeleteWaterPortion,
  apiEditWaterPortion,
  apiGetTodayWaterPortions,
  apiAddWaterPortion,
  apiGetMonthWaterPortions,
} from './WaterThunks';
import { logoutThunk } from '../User/UserThunks';

const INITIAL_STATE = {
  waterData: null,
  todayWaterData: null,
  isLoading: false,
  percentage: 0,
  waterVolumes: [],
  stats: [],
  error: null,
  waterVolumeSum: [],
  currentWater: 0,
};

const waterSlice = createSlice({
  name: 'water',
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder

      .addCase(apiGetTodayWaterPortions.fulfilled, (state, { payload }) => {
        let percentage = parseInt(payload.waterVolumePercentage);
        percentage = percentage > 100 ? 100 : percentage;
        state.percentage = percentage;
        state.waterVolumes = payload.waterVolumes;
        state.isLoading = false;
      })

      .addCase(apiGetMonthWaterPortions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
      })
      .addCase(apiAddWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterVolumes.push(action.payload);
        state.waterVolumeSum += action.payload.waterAmount;
      })
      .addCase(apiDeleteWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterVolumes = state.waterVolumes.filter(
          (portion) => portion._id !== action.payload
        );
      })
      .addCase(apiEditWaterPortion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterVolumes = state.waterVolumes.map((portion) =>
          portion._id === action.payload._id
            ? { ...portion, ...action.payload }
            : portion
        );
      })
      .addCase(logoutThunk.fulfilled, () => {
        return INITIAL_STATE;
      })

      .addMatcher(
        isAnyOf(
          apiAddWaterPortion.pending,
          apiDeleteWaterPortion.pending,
          apiEditWaterPortion.pending,
          apiGetTodayWaterPortions.pending,
          apiGetMonthWaterPortions.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiAddWaterPortion.rejected,
          apiDeleteWaterPortion.rejected,
          apiEditWaterPortion.rejected,
          apiGetTodayWaterPortions.rejected,
          apiGetMonthWaterPortions.rejected
        ),
        (state) => {
          // state.isLoading = false;
          state.error = null;
        }
      ),
});

export const waterReducer = waterSlice.reducer;
