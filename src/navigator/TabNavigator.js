import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='home' component={HomeScreen} />
      <Tab.Screen name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
