import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '~/screens';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignPage" component={Sign} />
    </Stack.Navigator>
  );
};

export { LoginStack };
