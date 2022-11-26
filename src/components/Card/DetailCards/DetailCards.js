import React from 'react';
import { FlatList, Dimensions, Image, Text, View } from 'react-native';
import styles from './DetailCards.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/themes';

const DetailCards = ({ product }) => {
  const data = product.images;
  const height = Dimensions.get('window').height / 3;
  const width = Dimensions.get('window').width * 0.9;
  const priceWD = Math.round(product.price * (100 / (100 - product.discountPercentage)));
  const renderImages = item => {
    return (
      <View>
        {
          <Image
            style={{ width: width, height: height, marginLeft: 10, borderRadius: 10, resizeMode: 'contain' }}
            source={{ uri: item.item }}
          />
        }
      </View>
    );
  };
  return (
    <View>
      <FlatList data={data} renderItem={renderImages} horizontal={true} />
      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.ratingcontainer}>
          <Icon name="star" size={22} color={colors.yellow} />
          <Text style={styles.rating}>{product.rating}</Text>
        </View>
        <View style={styles.stockcontainer}>
          <Text>Available : </Text>
          <Text style={styles.stock}>{product.stock}</Text>
        </View>
      </View>

      <View style={styles.descriptioncontainer}>
        <Text style={styles.title}>Description Product: </Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.cartcard}>
        <View style={{}}>
          <View style={styles.pricecontainer}>
            <Text style={styles.priceWd}>{priceWD} $</Text>
            <Text style={styles.discount}> {product.discountPercentage} %</Text>
            <Icon name="arrow-down-bold" size={20} color={'red'}/>
          </View>
          <View style={{}}>
            <Text style={styles.price}>{product.price} $</Text>
          </View>
        </View>
        <View style={styles.cart}>
          <Text style={styles.cartText}>Add Cart</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailCards;
