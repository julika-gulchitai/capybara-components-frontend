import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayInfo: {},
  isLoading: false,
};

const waterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase;
  },
});
export const waterReducer = waterSlice.reducer;
