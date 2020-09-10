import React from 'react'

// import the different screens
import SignUp from '../screens/Signup'
import Login from '../screens//Login'
import Main from '../screens/Main'
import Loading from '../screens/Loading'
import Products from '../screens/Products'

//Import navigation for products and basket
import BottomTabNavigator from '../navigators/BottomTabNavigator'
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
    
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default MainStackNavigator