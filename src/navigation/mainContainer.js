import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home/home';
import ProductDetails from '../screens/Product/ProductDetail';
import CartScreen from '../screens/Cart/cart';

export default function Navigation() {
  const Stk = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stk.Navigator>
        <Stk.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stk.Screen
          name="Product"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stk.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false}}
        />
      </Stk.Navigator>
    </NavigationContainer>
  );
}
