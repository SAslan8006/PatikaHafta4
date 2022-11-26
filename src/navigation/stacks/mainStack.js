import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '~/screens/Home';
import Products from '~/screens/Products';
import category from '~/screens/Categories';
import Detail from '~/screens/Details';

import { connect } from 'react-redux';
import { logoutUserWithFB } from '~/redux/actions/app';

const mapDispatchToProps = dispatch => ({ dispatch });

const Stack = createStackNavigator();

const MainStack = connect(mapDispatchToProps)(props => {
  const { dispatch, app } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="category"
        options={{
          headerShown: true,
          title: 'Categories',
          headerTitleAlign: 'center',
          headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
        }}
        component={category}
      />
      <Stack.Screen
        name="Products"
        options={{
          headerShown: true,
          title: 'Products',
          headerTitleAlign: 'center',
          headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
        }}
        component={Products}
      />
      <Stack.Screen
        name="Detail"
        options={{
          headerShown: true,
          title: 'Detail',
          headerTitleAlign: 'center',
          headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
        }}
        component={Detail}
      />
    </Stack.Navigator>
  );
});

export { MainStack };
