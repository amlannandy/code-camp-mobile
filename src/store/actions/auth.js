import { AsyncStorage, ToastAndroid } from 'react-native';

import {
  LOGIN,
  REGISTER,
  LOAD_USER,
  TOGGLE_AUTH_LOADING,
  LOGOUT,
} from '../reducers/auth';
import axios from '../../utils/axios';

export const login = (email, password, nav) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    const res = await axios.post('/auth/login', { email, password });
    const data = res.data;
    if (!data.success) {
      ToastAndroid.show(data.error, ToastAndroid.SHORT);
      return;
    }
    await AsyncStorage.setItem('code-camp-token', data.token);
    const userData = await getCurrentUser(data.token);
    dispatch({ type: LOGIN, payload: userData });
    nav.replace('home');
  } catch (error) {
    console.log(error);
  }
};

export const logout = nav => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    await AsyncStorage.removeItem('code-camp-token');
    dispatch({ type: LOGOUT });
    nav.replace('login');
  } catch (error) {
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    const token = await AsyncStorage.getItem('code-camp-token');
    if (!token) {
      dispatch({ type: TOGGLE_AUTH_LOADING });
      return;
    }
    const userData = await getCurrentUser(token);
    dispatch({ type: LOAD_USER, payload: userData });
  } catch (error) {
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};

export const checkIfAuthenticated = async () => {
  const token = await AsyncStorage.getItem('code-camp-token');
  return token;
};

const getCurrentUser = async token => {
  try {
    const res = await axios.get('/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res.data;
    return data.data;
  } catch (error) {}
};
