import axios, { AxiosResponse } from 'axios';

export function getAxiosInstance(baseURL: string, token?: string) {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
  });

  instance.interceptors.request.use((config) => {
    return token
      ? {
          ...config,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : config;
  });

  instance.interceptors.response.use(
    function (response: AxiosResponse) {
      return response.data;
    },
    function (error: any) {
      if (error.response) {
        if (error?.response?.status === 401) {
        }
        return Promise.reject(error?.response?.data);
      }
      return Promise.reject(error);
    },
  );

  return instance;
}
