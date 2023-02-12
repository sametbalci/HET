/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootStackScreen} from '@/navigation';
import { SafeAreaView } from "react-native";

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <NavigationContainer>
        <RootStackScreen initial={'Walkthrough'} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
