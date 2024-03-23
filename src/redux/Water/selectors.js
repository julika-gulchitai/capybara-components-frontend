//export const selectToken = (state) => state.user.token;
//export const selectEntries = (state) => state.tracker.entries;
export const selectWaterData = (state) => state.water.waterData;
export const selectTodayWaterData = (state) => state.water.todayWaterData;
export const selectWaterIsLoading = (state) => state.water.isLoading;
export const selectNotes = (state) => state.water.waterVolumes;
export const selectWaterVolumeSum = (state) => state.water.waterVolumeSum;
export const selectStats = (state) => state.water.stats;
export const selectPercent = (state) => state.water.percentage;
export const selectSelectedWaterPortionId = (state) =>
  state.water.selectedWaterPortionId;
