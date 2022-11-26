import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { spacing } from '~/configs';
import colors from '~/themes/colors';

//base stylemiz
const base_style = StyleSheet.create({
  container: {
    padding: 8,
    margin: spacing.s / 2,
    borderRadius: 5,
    alignItems: 'center',
    width: '25%',
    paddingVertical: spacing.s,
    borderTopLeftRadius: spacing.s,
    borderTopRightRadius: spacing.s,
    borderBottomLeftRadius: spacing.s,
    borderBottomRightRadius: spacing.s,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 5,
    color: 'white',
  },
});
//base styleynin değerini içeri aktarıyoruz ...base_style yazarak
export default {
  ...base_style,
  primary: StyleSheet.create({
    container: {
      ...base_style.container,
      backgroundColor: colors.orange,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: colors.black,
    },
    title: {
      ...base_style.title,
      color: colors.black,
    },
  }),
};
