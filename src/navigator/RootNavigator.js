import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TestScreen from '../screens/TestScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='register' component={RegisterScreen} />
      <Stack.Screen name='home' component={TestScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
