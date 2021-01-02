import React, { useReducer } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ToastAndroid,
} from 'react-native';

import formReducer from '../utils/formReducer';
import ShowcaseImage from '../images/showcase.jpg';
import CustomButton from '../components/CustomButton';
import CustomTextField from '../components/CustomTextField';

const initialLoginData = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {
  const [loginData, setLoginData] = useReducer(formReducer, initialLoginData);

  const loginHandler = () => {
    const { email, password } = loginData;
    if (!email || !password) {
      ToastAndroid.show('Please add an email and password', ToastAndroid.SHORT);
      return;
    }
  };

  return (
    <View style={styles.screen}>
      <ImageBackground source={ShowcaseImage} style={styles.imageStyle}>
        <View style={styles.container}>
          <Text style={styles.heading}>Login</Text>
          <CustomTextField
            hint='Enter your email'
            inputType='email-address'
            onChangeText={text => setLoginData({ type: 'email', value: text })}
          />
          <CustomTextField
            value={loginData.password}
            hint='Enter your password'
            isPassword={true}
            onChangeText={text =>
              setLoginData({ type: 'password', value: text })
            }
          />
          <CustomButton text='LOGIN' onPress={loginHandler} />
          <CustomButton
            text='REGISTER INSTEAD'
            onPress={() => navigation.navigate('register')}
          />
        </View>
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
    opacity: 60,
    fontFamily: 'lato',
    marginBottom: 30,
  },
});
