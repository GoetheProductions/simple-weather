export const weatherSelector = state => state.weather.data;
export const isFetchingSelector = state => state.weather.isFetching;
export const errorSelector = state => state.weather.error;
export const warningSelector = state => state.weather.warning;
