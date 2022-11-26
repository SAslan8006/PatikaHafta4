import { useState } from 'react';
import { FlatList, View } from 'react-native';
import useFetch from '~/api/hooks/useFetch';
import CategoryCards from '~/components/Card/CategoryCards';
import Loading from '~/components/Loading';
import SearchBar from '~/components/SearchBar';
import styles from './Categories.style';

const Categories = ({ navigation }) => {
  const { data, loading } = useFetch('https://dummyjson.com/products/categories');

  const [list, setList] = useState('');
  const renderCategories = ({ item }) => <CategoryCards categories={item} onClick={() => handleOnClick(item)} />;

  const handleOnClick = category => {
    navigation.navigate('Products', { category });
  };

  const filterCategories = data.filter(category => `${category}`.toLowerCase().includes(list.toLowerCase()));

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <View style={styles.basecontainer}>
      <SearchBar setText={setList} />
      <View style={styles.container}>
        <FlatList style={styles.container} data={filterCategories} renderItem={renderCategories}/>
      </View>
    </View>
  );
};

export default Categories;
