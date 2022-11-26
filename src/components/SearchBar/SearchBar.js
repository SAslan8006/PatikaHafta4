import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './SearchBar.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({ setText }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." style={styles.searchTitle} onChangeText={setText} />
    </View>
  );
};
export default SearchBar;
