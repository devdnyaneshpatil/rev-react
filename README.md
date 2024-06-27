# rev-react


## Use case of axios instance and Interceptor 

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com'
});

export default axiosInstance;


axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    // List of endpoints that require authentication
    const authRequiredEndpoints = ['/protected1', '/protected2'];

    if (token && authRequiredEndpoints.some(endpoint => config.url.includes(endpoint))) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
