import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PocketData = ({ upperText, lowerText, align = 'flex-start' }) => {
  return (
    <View style={{ ...styles.container, alignItems: align }}>
      <Text style={styles.upper}>{upperText}</Text>
      <Text style={styles.lower}>{lowerText}</Text>
    </View>
  );
};

export default PocketData;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  upper: {
    color: 'grey',
    fontFamily: 'lato',
    fontSize: 14,
    marginBottom: 2,
  },
  lower: {
    color: 'black',
    fontFamily: 'lato-bold',
    fontSize: 18,
  },
});
