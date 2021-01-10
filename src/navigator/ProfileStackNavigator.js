import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: 'lato-bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name='profile'
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name='edit-profile'
        component={EditProfileScreen}
        options={{ title: 'Edit your Profile' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
