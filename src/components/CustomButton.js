import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

const CustomButton = ({ text, onPress, color = Colors.primary }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonStyle, backgroundColor: color }}
      onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    margin: 8,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontFamily: 'lato-bold',
    fontSize: 14,
  },
});
