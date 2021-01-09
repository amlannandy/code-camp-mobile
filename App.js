import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/store/store';
import { checkIfAuthenticated } from './src/store/actions/auth';
import RootNavigator from './src/navigator/RootNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    lato: require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
    varela: require('./assets/fonts/Varela-Regular.ttf'),
  });
};

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loadData = async () => {
    await fetchFonts();
    const authStatus = await checkIfAuthenticated();
    setIsAuthenticated(authStatus);
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={loadData}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log('Error loading data!')}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator isAuthenticated={isAuthenticated} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
