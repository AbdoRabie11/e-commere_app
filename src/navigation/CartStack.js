import * as React from 'react';
import Cart from '../components/screens/cart';
import ProductScreen from '../components/screens/Product';
import CheckOut from '../components/screens/checkout';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerBackTitleVisible: false}}
      />
        <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        options={{headerBackTitleVisible: false}}
      />
    </Stack.Navigator>
  );
}