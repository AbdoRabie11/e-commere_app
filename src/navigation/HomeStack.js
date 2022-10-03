import * as React from 'react';
import ConfirmationCode from '../components/screens/confirmation';
import Home from '../components/screens/Home';
import Product from '../components/screens/Product'
import CategoryScreen from '../components/screens/CategoryScr';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerBackTitleVisible: false}}
      />
          <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerBackTitleVisible: false,}}
      />
    </Stack.Navigator>
  );
}