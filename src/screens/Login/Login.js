import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

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
                <Image source={require('~/assets/logo.png') } style={styles.logo} />
                <Input 
                    placeholder="e-mail"
                    keyboardType="email-address"
                    value={app.username}
                    onChangeText={d => dispatch(setApp('username', d))}
                />
                <Input    
                    placeholder="password"                
                    isSecure
                    value={app.password}
                    onChangeText={d => dispatch(setApp('password', d))}
                />
            </View>
            <Button text="Login" onPress={() => dispatch(loginUserWithFB())} />
            <Button text="Sign Up" onPress={() => dispatch(createUserWithFB())} />

            {app.loginLoading && <Text>LOADING LOADING</Text>}
        </View>
    );
});

export default Login ;
