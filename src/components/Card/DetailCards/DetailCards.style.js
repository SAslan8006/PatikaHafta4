import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '~/themes';
import { text, spacing } from '~/configs';
import { color } from 'react-native-reanimated';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: text.H4,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: text.H3,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  ratingcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rating: {
    color: 'black',
  },
  stockcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: '#B1D7B4',
    padding: 5,
  },
  stock: {},
  descriptioncontainer: {padding: 10,},
  description: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
  },
  cartcard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: height * 0.15,
    margin: 5,
  },
  pricecontainer: { flexDirection: 'row' },
  priceWd : {
    textDecorationLine: 'line-through',
    fontSize: text.H3,
  },
  discount: {
    fontSize: text.H2,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'red',
  },
  price: {
    color: 'black',
    fontSize: text.H6,
    justifyContent: 'center',
    textAlign: 'center',
  },
  cart: {
    backgroundColor: colors.orange,
    padding: 10,
    borderRadius: 10,
  },
  cartText: {
    color: 'black',
  },
});
