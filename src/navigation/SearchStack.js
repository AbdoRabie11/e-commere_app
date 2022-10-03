import * as React from 'react';

import ProductScreen from '../components/screens/Product';

import SearchScreen from '../../src/components/screens/search'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{headerBackTitleVisible: false, title: 'Confirmation'}}
      />
    </Stack.Navigator>
  );
}