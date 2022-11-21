import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LoginStack } from '~/navigation/stacks/loginStack';
import { MainStack } from '~/navigation/stacks/mainStack';
import { connect } from 'react-redux';

const Navigation = connect(
  ({ app }) => ({ app }),
  undefined,
)(props => {
  return useMemo(
    () => <NavigationContainer>{props.app.loginStatus ? <MainStack /> : <LoginStack />}</NavigationContainer>,
    [props.app.loginStatus],
  );
});

export { Navigation };
