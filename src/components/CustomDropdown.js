import React from 'react';
import { StyleSheet, Picker, View } from 'react-native';

const CustomDropdown = ({ value, onChange, options = [] }) => {
  return (
    <View style={styles.inputStyle}>
      <Picker selectedValue={value} onValueChange={onChange}>
        {options.map(option => (
          <Picker.Item
            key={option.value}
            label={option.label.toString()}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 16,
    backgroundColor: 'white',
    width: '85%',
    margin: 10,
    borderRadius: 5,
    color: 'black',
  },
});
