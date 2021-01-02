import React, { useReducer } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ToastAndroid,
} from 'react-native';

import formReducer from '../utils/formReducer';
import isEmailValid from '../utils/emailValid';
import ShowcaseImage from '../images/showcase.jpg';
import CustomButton from '../components/CustomButton';
import CustomDropdown from '../components/CustomDropdown';
import CustomTextField from '../components/CustomTextField';

const roles = [
  { label: 'User', value: 'user' },
  { label: 'Publisher', value: 'publisher ' },
];

const initialRegisterData = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: roles[0].label,
};

const RegisterScreen = ({ navigation }) => {
  const [registerData, setRegisterData] = useReducer(
    formReducer,
    initialRegisterData
  );

  const loginHandler = () => {
    const { name, email, password, confirmPassword, role } = registerData;
    if (!name || !email || !password || !confirmPassword) {
      ToastAndroid.show('Please fill all fields', ToastAndroid.SHORT);
      return;
    }
    if (password !== confirmPassword) {
      ToastAndroid.show("Passwords don't match", ToastAndroid.SHORT);
      return;
    }
    if (!isEmailValid(email)) {
      ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
      return;
    }
  };

  return (
    <View style={styles.screen}>
      <ImageBackground source={ShowcaseImage} style={styles.imageStyle}>
        <View style={styles.container}>
          <Text style={styles.heading}>Register</Text>
          <CustomTextField
            value={registerData.name}
            hint='Enter your name'
            onChangeText={text =>
              setRegisterData({ type: 'name', value: text })
            }
          />
          <CustomTextField
            value={registerData.email}
            hint='Enter your email'
            inputType='email-address'
            onChangeText={text =>
              setRegisterData({ type: 'email', value: text })
            }
          />
          <CustomTextField
            value={registerData.password}
            hint='Enter your password'
            isPassword={true}
            onChangeText={text =>
              setRegisterData({ type: 'password', value: text })
            }
          />
          <CustomTextField
            value={registerData.confirmPassword}
            hint='Confirm password'
            isPassword={true}
            onChangeText={text =>
              setRegisterData({ type: 'confirmPassword', value: text })
            }
          />
          <CustomDropdown
            value={registerData.role}
            onChange={value => setRegisterData({ type: 'role', value })}
            options={roles}
          />
          <CustomButton text='REGISTER' onPress={loginHandler} />
          <CustomButton
            text='LOGIN INSTEAD'
            onPress={() => navigation.navigate('login')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;

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
