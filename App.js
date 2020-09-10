import React from 'react'


import MainStackNavigator from './src/navigators/MainStackNavigator'
import {SafeAreaView} from 'react-native'
// create our app's navigation stack
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


function App() {
  return (
    
      <MainStackNavigator></MainStackNavigator>
    
  
  );
}


export default App