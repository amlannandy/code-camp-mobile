import React, { useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import formReducer from '../utils/formReducer';
import isEmailValid from '../utils/emailValid';
import { updateUserDetails } from '../store/actions/auth';

import CustomButton from '../components/CustomButton';
import LoadingSpinner from '../components/LoadingSpinner';
import CustomTextField from '../components/CustomTextField';

const EditProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector(state => state.auth);

  const [userData, setUserData] = useReducer(formReducer, {
    name: user.name,
    email: user.email,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const updateUserDetailsHandler = () => {
    const { name, email } = userData;
    if (!name || !email) {
      ToastAndroid.show('Name or Email cannot be empty', ToastAndroid.SHORT);
      return;
    }
    if (!isEmailValid(email)) {
      ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
      return;
    }
    dispatch(updateUserDetails(name, email, navigation));
  };

  return (
    <View style={styles.screen}>
      <CustomTextField
        hint='Your Name'
        value={userData.name}
        onChangeText={text => setUserData({ type: 'name', value: text })}
      />
      <CustomTextField
        hint='Your Email'
        value={userData.email}
        onChangeText={text => setUserData({ type: 'email', value: text })}
      />
      <CustomButton
        color='green'
        text='Update Profile'
        onPress={updateUserDetailsHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
});

export default EditProfileScreen;
