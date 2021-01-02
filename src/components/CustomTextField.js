import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CustomTextField = ({
  value,
  onChangeText,
  hint,
  inputType = 'default',
  isPassword = false,
}) => {
  return (
    <TextInput
      secureTextEntry={isPassword}
      style={styles.inputStyle}
      value={value}
      placeholder={hint}
      onChangeText={onChangeText}
      keyboardType={inputType}
    />
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 16,
    backgroundColor: 'white',
    padding: 10,
    width: '85%',
    margin: 10,
    borderRadius: 5,
    color: 'black',
  },
});
