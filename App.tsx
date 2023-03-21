/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import Home from './src/home';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


registerRootComponent(App)

export default App;
