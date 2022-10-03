import * as React from 'react';

import Account from '../components/screens/Account';
import Address from '../components/screens/Address';
import UpdateAccount from '../components/screens/udpateAccount';
import OrderScreen from '../components/screens/Orders';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{headerBackTitleVisible: false}}
      />
        <Stack.Screen
        name="UpdateAccount"
        component={UpdateAccount}
        options={{headerBackTitleVisible: false, title: 'Confirmation'}}
      />
           <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{headerBackTitleVisible: false, title: 'Confirmation'}}
      />
    </Stack.Navigator>
  );
}
