import {
  FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_WARNING,
}
from './constants';
import dataFormatter from '../../utils/dataFormatter';
import internationalize from '../../utils/internationalize';
import request from '../../utils/request';
import { BASE_URL } from '../../data/config';

export function fetchWeather(city = 'Copenhagen') {
  const internationalizedCity = internationalize(city);
  return async (dispatch) => {
    dispatch({
      type: FETCH_WEATHER,
    });
    try {
      const response = await request('get', `${BASE_URL}/widget.example/city=${internationalizedCity}`);

      if(response.data.cod === 404) {
        dispatch({
          type: FETCH_WEATHER_WARNING,
          warning: 'We could not find the city you were looking for',
        });
      } else {
        const formattedData = dataFormatter(response);
        dispatch({
          type: FETCH_WEATHER_SUCCESS,
          payload: formattedData,
        });

        this.history.push(`/widget.example/city=${internationalizedCity}`)
      }
      
    } catch (error) {
      dispatch({
        type: FETCH_WEATHER_ERROR,
        error: 'Unfortunately, something went wrong',
      });
    }
  };
}
