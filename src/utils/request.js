import axios from 'axios';
import { BASE_URL } from '../data/config';

export default (method, url, body = null, token = null, headers = null) => {
  const request = axios.create({
    baseURL: BASE_URL,
    validateStatus: status => status >= 200 && status < 500,
  });

  return request[method](url, body);
};
