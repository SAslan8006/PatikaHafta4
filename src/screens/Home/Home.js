import React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';

import { requestAllProducts } from '~/redux/actions';

const mapStateToProps = states => ({ app: states.app });
const mapDispatchToProps = dispatch => ({ dispatch });

const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(props => {
    const { app, dispatch } = props;

    useEffect(() => {
        dispatch(requestAllProducts());
    }, []);

    return (
        <View>
            <Text>HOME</Text>
        </View>
    );
});

export default  Home;
