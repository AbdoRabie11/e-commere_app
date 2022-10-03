import React from 'react'
import { View, Text , Image} from 'react-native'
import Home from '../components/screens/Home';
import { HomeStack } from './HomeStack';
import { CartStack } from './CartStack';
import { SearchStack } from './SearchStack';
import { AccountStack } from './AccountStack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen  name="HomeStack" component={HomeStack} />
    <Tab.Screen name="CartStack" component={CartStack} />
    <Tab.Screen name="SearchStack" component={SearchStack} />
    <Tab.Screen name="AccountStack" component={AccountStack} />
  </Tab.Navigator>
  )
}
 