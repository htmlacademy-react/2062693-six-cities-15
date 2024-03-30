import axios, {AxiosInstance} from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const REQUEST_TIMEOUT = Number(process.env.REACT_APP_REQUEST_TIMEOUT);

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
