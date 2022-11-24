import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '~/screens/Home';
import { connect } from 'react-redux';
import { logoutUserWithFB, setApp } from '~/redux/actions/app';

const mapDispatchToProps = dispatch => ({ dispatch });

const Stack = createStackNavigator();

const MainStack = connect(
  mapDispatchToProps,
)(props => {
  const { dispatch, app } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{
        headerShown: true, title: 'Home', headerTitleAlign: 'center', headerRight: () => (
          <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />),
      }} component={Home}
      />
    </Stack.Navigator>
  );
});

export { MainStack };
