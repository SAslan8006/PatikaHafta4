import React, { useEffect } from 'react';
import { Text, View, Button, TextInput, FlatList, Image, TouchableOpacity, } from 'react-native';

import { connect } from 'react-redux';
import ProductCards from '~/components/Card/ProductCards';
import { requestAllProducts } from '~/redux/actions/apiRequest';

const mapStateToProps = states => ({ products: states.productReducer.products});
const mapDispatchToProps = dispatch => ({ dispatch });

const Home = connect(
    mapStateToProps,
    mapDispatchToProps,
)(props => {
    const { counter, products, dispatch } = props;
    useEffect(() => {
        dispatch(requestAllProducts());
    }, []);

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
                <FlatList
                    data={products.products}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <ProductCards products={item} />
                        );
                    }}
                />
            </View>
        </View>
    );
});

export default Home;

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
