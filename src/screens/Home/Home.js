import React, { useEffect } from 'react';
import { Text, View,FlatList } from 'react-native';
import { connect } from 'react-redux';
import useFetch from '~/api/hooks/useFetch';

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

    const { data, loading } = useFetch("https://dummyjson.com/products?limit=100");
    const { data2, loading2 } = useFetch("https://dummyjson.com/products/categories")
    /* console.log(data2) */
    const renderProducts = ({ item }) => <ProductCards products={item} />

    return (
        <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
            {/* <Button
          title="GET PRODUCTS"
          onPress={() => dispatch(requestAllProducts())}
        /> */}

            <FlatList
                data={products.products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
});

export default Home;
