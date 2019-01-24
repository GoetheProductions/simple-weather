import { WIND_DIRECTIONS } from '../data/config';

const windDirectionFormatter = (degree) => {
  const val = Math.floor((degree / 22.5) + 0.5);
  const finalResult = WIND_DIRECTIONS[(val % 16)];
  return finalResult;
}


export default (response) => {
  const { data: {
    name,
    main: {
      humidity,
      temp,
    },
    wind: {
      deg,
      speed,
    }

  }} = response;

  return {
    city: name,
    temperature: `${temp}°C`,
    humidity,
    wind: `${speed} m/s ${windDirectionFormatter(deg)}`
  }
}
