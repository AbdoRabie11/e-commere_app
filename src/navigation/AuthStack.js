import * as React from 'react';
import SingIn from '../components/screens/signIn';
import ConfirmationCode from '../components/screens/confirmation';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SingIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmationCodeScreen"
        component={ConfirmationCode}
        options={{headerBackTitleVisible: false, title: 'Confirmation'}}
      />
    </Stack.Navigator>
  );
}
