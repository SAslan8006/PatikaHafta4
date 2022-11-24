import React from 'react';
import { useEffect } from 'react';
import { Text, View ,FlatList} from 'react-native';

import { connect } from 'react-redux';

import { requestAllProducts } from '~/redux/actions';

const mapStateToProps = states => ({ app: states.app, products: states.productReducer.products, });
const mapDispatchToProps = dispatch => ({ dispatch });

const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(props => {
    const { app, products,dispatch } = props;
    console.log('PRODUCTS HOME', products.products);

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
