import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const LoadingSpinner = ({ color = 'green', message = 'Loading...' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 28,
    color: 'black',
    opacity: 0.8,
    fontFamily: 'lato',
    marginTop: 15,
  },
});
