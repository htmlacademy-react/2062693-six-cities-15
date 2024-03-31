import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {DetailErrorMessage} from '../types/detail-error-message.ts';
import {toast} from 'react-toastify';
import {getToken} from './token.ts';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const REQUEST_TIMEOUT = Number(process.env.REACT_APP_REQUEST_TIMEOUT);

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  api.interceptors.response.use((response) => response,
    (error: AxiosError<DetailErrorMessage>) => {
      if (error.response) {
        const detailMessage = (error.response.data);

        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
