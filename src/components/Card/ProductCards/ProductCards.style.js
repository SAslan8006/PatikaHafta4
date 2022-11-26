import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '~/themes';
import { text, spacing } from '~/configs';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    marginVertical: height * 0.015,
    marginHorizontal: width * 0.05,
    borderColor: colors.orange,
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 5,
  },
  image: {
    width: width * 0.25,
    minHeight: height * 0.1375,
    resizeMode: 'contain',
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  body_container: {
    flex: 1,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.025,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    minHeight: height * 0.07,
  },
  title: {
    fontSize: text.H4,
    fontWeight: 'bold',
    color: 'black',
    flex: 3,
    // top kullanılacak
  },
  price: {
    textAlign: 'right',
    fontSize: text.H3,
    fontStyle: 'italic',
    color: 'black',
  },
  rate: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: text.H3,
    flex: 1,
    textAlign: 'right',
  },
});
