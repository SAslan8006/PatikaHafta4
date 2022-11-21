import React, { useMemo,useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { LoginStack } from '~/navigation/stacks/loginStack';
import { MainStack } from '~/navigation/stacks/mainStack';
import { connect } from 'react-redux';

const Navigation = connect(
  ({ app }) => ({ app }),
  undefined,
)(props => {
  const [userSession, setUserSession] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  return useMemo(
    () => <NavigationContainer>{userSession ? <MainStack /> : <LoginStack />}</NavigationContainer>,
    [props.app.loginStatus],
  );
});

export { Navigation };
