import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './ProductCards.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/themes';

const ProductCards = ({ products, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: products.thumbnail }} />
        <View style={styles.body_container}>
          <View style={styles.header}>
            <Text style={styles.title}>{products.title}</Text>
            <Icon name="star" size={22} color={colors.yellow} />
            <Text style={styles.rate}>{products.rating}</Text>
          </View>
          <Text style={styles.price}>{products.price} $</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCards;
