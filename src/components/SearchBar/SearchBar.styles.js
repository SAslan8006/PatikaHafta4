import { StyleSheet, Platform } from 'react-native';
import { colors } from '~/themes';

export default StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  searchTitle: {
    color: 'black',
    borderWidth: 0.5,
    borderColor: colors.orange,
    borderRadius: 5,
    padding: Platform.OS === 'android' ? 0 : 5,
  },
});
