import React from 'react'
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import the different screens
import Basket from '../screens/Basket'
import Products from '../screens/Products'



const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
      <Tab.Navigator
      initialRouteName="Products"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
      >
        <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
     
     <Tab.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />

     
    </Tab.Navigator>
  );
}


export default BottomTabNavigator