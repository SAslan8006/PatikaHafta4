import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/screens/Home';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export { MainStack };
