import axios from 'axios';

import store from '../store/store';

// const baseUrl = 'http://192.168.0.103:5000/api/v1';
const baseUrl = 'https://code-camp-bbsr.herokuapp.com/api/v1';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
//axiosInstance.defaults.headers.common['Authorization'] = store.auth.token ?? '';

export default axiosInstance;
