import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const RootNavigator = ({ isAuthenticated = false }) => {
  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? 'tab' : 'login'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='register' component={RegisterScreen} />
      <Stack.Screen name='tab' component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
