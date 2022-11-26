import { FlatList, View } from 'react-native';
import useFetch from '~/api/hooks/useFetch';
import ProductCards from '~/components/Card/ProductCards';
import Loading from '~/components/Loading';
import styles from './Products.style';

const Products = ({ route, navigation }) => {
  const category = route.params.category;

  const { data, loading } = useFetch('https://dummyjson.com/products/category/' + category);

  const renderProducts = ({ item }) => <ProductCards products={item} onPress={() => handleOnPress(item)} />;

  const handleOnPress = product => {
    navigation.navigate('Detail', product);
  };

  if (data.length == 0) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.products} renderItem={renderProducts} />
    </View>
  );
};

export default Products;
