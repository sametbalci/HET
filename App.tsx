/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootStackScreen} from '@/navigation';

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen initial={'Walkthrough'} />
    </NavigationContainer>
  );
}

export default App;
