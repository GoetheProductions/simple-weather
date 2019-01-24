import { FETCH_WEATHER, FETCH_WEATHER_WARNING, FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS } from './constants';

const defaultState = {
  data: {},
  isFetching: false,
  error: null,
  warning: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: null, // In case first attempt fails,
        warning: null,
      };

    case FETCH_WEATHER_WARNING:
      return {
        ...state,
        isFetching: false,
        warning: action.warning,
      };

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    default:
      return state;
  }
};
