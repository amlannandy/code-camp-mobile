import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Login</Text>
      <Button onPress={() => navigation.navigate('register')} title='Reg' />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
