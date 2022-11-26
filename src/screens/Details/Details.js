import { View } from 'react-native';
import DetailCards from '~/components/Card/DetailCards';
import styles from './Details.style';

const Details = ({ route }) => {
  const product = route.params;

  return (
    <View style={styles.container}>
      <DetailCards product={product} />
    </View>
  );
};

export default Details;
