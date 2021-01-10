import axios from 'axios';
import store from '../store/store';
import { ToastAndroid } from 'react-native';

import { TOGGLE_AUTH_LOADING } from '../store/reducers/auth';

const baseUrl = 'https://code-camp-bbsr.herokuapp.com/api/v1';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.put['Content-Type'] = 'application/json';

axiosInstance.interceptors.response.use(
  req => req,
  err => {
    const data = err.response.data;
    console.log(data);
    const route = err.response.config.url;
    if (route.startsWith('/auth')) {
      store.dispatch({ type: TOGGLE_AUTH_LOADING });
    }
    ToastAndroid.show(data.error, ToastAndroid.SHORT);
    return err;
  }
);

export default axiosInstance;
