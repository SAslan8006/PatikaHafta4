import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '~/screens/Home';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: true,
          title: 'Home',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon
              name="logout"
              size={28}
              onPress={() => auth().signOut()}
            />
          ),
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export { MainStack };
