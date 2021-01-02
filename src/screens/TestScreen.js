import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from '../store/actions/auth';

const TestScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout(navigation));
  };

  return (
    <View>
      <Text>Test Screen</Text>
      <Button title='Log out' onPress={logoutHandler} />
    </View>
  );
};

export default TestScreen;
