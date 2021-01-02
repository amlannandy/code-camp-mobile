import React, { useReducer, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

import Colors from '../constants/Colors';
import { login, loadUser } from '../store/actions/auth';
import isEmailValid from '../utils/emailValid';
import formReducer from '../utils/formReducer';
import ShowcaseImage from '../images/showcase.jpg';
import CustomButton from '../components/CustomButton';
import CustomTextField from '../components/CustomTextField';

const initialLoginData = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector(state => state.auth);
  const [loginData, setLoginData] = useReducer(formReducer, initialLoginData);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const loginHandler = () => {
    const { email, password } = loginData;
    if (!email || !password) {
      ToastAndroid.show('Please add an email and password', ToastAndroid.SHORT);
      return;
    }
    if (!isEmailValid(email)) {
      ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
      return;
    }
    dispatch(login(email, password, navigation));
  };

  const loginContent = (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <CustomTextField
        value={loginData.email}
        hint='Enter your email'
        inputType='email-address'
        onChangeText={text => setLoginData({ type: 'email', value: text })}
      />
      <CustomTextField
        value={loginData.password}
        hint='Enter your password'
        isPassword={true}
        onChangeText={text => setLoginData({ type: 'password', value: text })}
      />
      <CustomButton text='LOGIN' onPress={loginHandler} />
      <CustomButton
        text='REGISTER INSTEAD'
        onPress={() => navigation.navigate('register')}
      />
    </View>
  );

  if (!isLoading && isAuthenticated) {
    navigation.replace('home');
  }

  return (
    <View style={styles.screen}>
      <ImageBackground source={ShowcaseImage} style={styles.imageStyle}>
        {isLoading ? (
          <View style={styles.container}>
            <ActivityIndicator color={Colors.primary} size='large' />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        ) : (
          loginContent
        )}
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 36,
    color: 'white',
    opacity: 0.9,
    fontFamily: 'lato',
    marginBottom: 30,
  },
  loadingText: {
    fontSize: 28,
    color: 'white',
    opacity: 0.8,
    fontFamily: 'lato',
    marginTop: 15,
  },
});
