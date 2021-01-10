import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomDropdown from '../components/CustomDropdown';
import CustomTextField from '../components/CustomTextField';

const EditProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <CustomTextField hint='Your Name' />
      <CustomTextField hint='Your Email' />
      <CustomDropdown />
      <CustomButton color='green' text='Update Profile' />
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
