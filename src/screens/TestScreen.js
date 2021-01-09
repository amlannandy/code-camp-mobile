import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout, loadUser } from '../store/actions/auth';

const TestScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

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
