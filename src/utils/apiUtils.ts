import axios, { AxiosResponse } from 'axios';

type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export const fetchApi = async <T>(
  endpoint: string,
  method: RequestMethod = 'get',
  data?: any
): Promise<AxiosResponse<T>> => {
  try {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL + endpoint;

    const axiosConfig = {
      method,
      url: apiUrl,
      data,
    };

    const response: AxiosResponse<T> = await axios(axiosConfig);

    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};
