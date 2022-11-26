import React from 'react';
import { View, Image } from 'react-native';

import { connect } from 'react-redux';

import { createUserWithFB, loginUserWithFB, setApp } from '~/redux/actions/app';
import styles from './styles';
import Input from '~/components/Input';
import Button from '~/components/Button';

const mapStateToProps = states => ({ app: states.app });

const mapDispatchToProps = dispatch => ({ dispatch });

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { dispatch, app } = props;
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Image source={require('~/assets/logo.png')} style={styles.logo} />
        <Input
          placeholder="Enter e-mail..."
          keyboardType="email-address"
          value={app.username}
          onChangeText={d => dispatch(setApp('username', d))}
        />
        <Input
          placeholder="Enter password..."
          isSecure
          value={app.password}
          onChangeText={d => dispatch(setApp('password', d))}
        />
      </View>
      <Button icon="login" text="Login" onPress={() => dispatch(loginUserWithFB())} />
      <Button icon="account-plus-outline" text="Sign Up" onPress={() => dispatch(createUserWithFB())} />

      {/* Loaading logo if user wait due to internet connection issue */}
      {app.loginLoading}
    </View>
  );
});

export default Login;
