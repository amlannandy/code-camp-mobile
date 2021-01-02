import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/store/store';
import RootNavigator from './src/navigator/RootNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    lato: require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
    varela: require('./assets/fonts/Varela-Regular.ttf'),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log('Error loading fonts!')}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
