import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ProfileStackNavigator from './ProfileStackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'profile-stack') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <Ionicons
              name={iconName}
              color={color}
              style={{ opacity: focused ? 1 : 0.7 }}
              size={size}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fdfdfd',
        inactiveTintColor: '#fdfdfd',
        activeBackgroundColor: Colors.primary,
        inactiveBackgroundColor: Colors.primary,
        tabStyle: {
          paddingVertical: 10,
        },
        style: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name='home'
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name='profile-stack'
        component={ProfileStackNavigator}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
