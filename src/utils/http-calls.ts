import axios, { AxiosResponse } from 'axios';
import { apiAuthData, auth_token } from '../constants';
import { ProcessLoginParam } from './process-login-param';
import { getStoredData } from './store-auth-data';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getStoredData(auth_token);

    if (config.url === 'oauth/token/') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      config.data = ProcessLoginParam(
        config.data.username,
        config.data.password,
        apiAuthData.client_id,
        apiAuthData.client_secret,
        apiAuthData.grant_type
      );
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  () => console.log
);

export function callGet<T>(url: string): Promise<AxiosResponse<T>> {
  return api.get<T>(url);
}

export function callPost<T, P>(
  url: string,
  body?: P
): Promise<AxiosResponse<T>> {
  return api.post<T>(url, body);
}
