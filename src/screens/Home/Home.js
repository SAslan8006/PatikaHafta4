import { useEffect } from 'react';
import { View } from 'react-native';

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

    const { data, loading } = useFetch("https://dummyjson.com/products?limit=100");
    const { data2, loading2 } = useFetch("https://dummyjson.com/products/categories")
    /* console.log(data2) */
    const renderProducts = ({ item }) => <ProductCards products={item} />

    return (
        <View>
            <FlatList
                data={data2}
                renderItem={renderProducts}
            />
        </View>
    );
});

export default Home;
