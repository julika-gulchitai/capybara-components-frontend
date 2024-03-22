export function selectIsLoading(state) {
  return state.global.isLoading;
}

export function selectError(state) {
  return state.global.error;
}

export function selectTheme(state) {
  return state.global.theme;
}

export function selectLanguage(state) {
  return state.global.language;
}
