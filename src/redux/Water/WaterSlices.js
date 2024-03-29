import {createSlice} from '@reduxjs/toolkit';

import {
    apiDeleteWaterPortion,
    apiEditWaterPortion,
    apiGetTodayWaterPortions,
    apiAddWaterPortion,
    apiGetMonthWaterPortions
} from './WaterThunks';
import {logoutThunk} from '../User/UserThunks';

const INITIAL_STATE = {
    waterData: null,
    todayWaterData: null,
    percentage: 0,
    waterVolumes: [],
    stats: [],
    waterVolumeSum: 0,
    selectedCalendar: {
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    }
};

const waterSlice = createSlice({
    name: 'water',
    initialState: INITIAL_STATE,
    reducers: {
        setSelectedCalendar(state, {payload}) {
            state.selectedCalendar = payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(apiGetTodayWaterPortions.fulfilled, (state, {payload}) => {
                let percentage = parseInt(payload.waterVolumePercentage);
                percentage = percentage > 100 ? 100 : percentage;
                state.percentage = percentage;
                state.waterVolumes = payload.waterVolumes;
                state.waterVolumeSum = payload.waterVolumeSum;
            })

            .addCase(apiGetMonthWaterPortions.fulfilled, (state, action) => {
                state.stats = action.payload;
            })
            .addCase(apiAddWaterPortion.fulfilled, (state, {payload}) => {
                state.waterVolumes.push(payload);
                state.waterVolumeSum += payload.waterAmount;
            })

            .addCase(apiDeleteWaterPortion.fulfilled, (state, action) => {
                state.waterVolumes = state.waterVolumes.filter(
                    (portion) => portion._id !== action.payload
                );
            })
            .addCase(apiEditWaterPortion.fulfilled, (state, action) => {
                state.waterVolumes = state.waterVolumes.map((portion) =>
                    portion._id === action.payload._id
                        ? {...portion, ...action.payload}
                        : portion
                );
            })
            .addCase(logoutThunk.fulfilled, () => {
                return INITIAL_STATE;
            })
});

export const { setSelectedCalendar } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
