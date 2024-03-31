import axios, {AxiosError, AxiosInstance} from 'axios';
import {DetailErrorMessage} from '../types/detail-error-message.ts';
import {toast} from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const REQUEST_TIMEOUT = Number(process.env.REACT_APP_REQUEST_TIMEOUT);

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
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
