import { StyleSheet } from 'react-native';
import { spacing } from '~/configs';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  body_container: {
    width: '70%',
    marginVertical: spacing.xs,
    alignItems: 'center',
    borderRadius: 8,
  },
  text_input: {
    margin: spacing.xxs,
  },
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: spacing.xs,
  },
});
