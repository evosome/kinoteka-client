import axios from 'axios';
import Cookies from 'js-cookie';

export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(url, {
      headers: {
        token: Cookies.get('JSESSIONID'),
      },
      withCredentials: true,
      ...params,
    }),
  post: <T>(url: string, data: any) =>
    axios.post<T>(url, data, {
      headers: {
        token: Cookies.get('JSESSIONID'),
      },
      withCredentials: true,
    }),
  put: <T>(url: string, data: any) =>
    axios.put<T>(url, data, {
      headers: {
        token: Cookies.get('JSESSIONID'),
      },
      withCredentials: true,
    }),
  delete: <T>(url: string) =>
    axios.delete<T>(url, {
      headers: {
        token: Cookies.get('JSESSIONID'),
      },
      withCredentials: true,
    }),
};