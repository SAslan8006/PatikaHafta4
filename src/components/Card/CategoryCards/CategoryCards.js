import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import styles from './CategoryCards.style';

const CategoryCards = ({ categories, onClick }) => {
  console.log('category card:', categories);
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Text style={styles.title}>{categories}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCards;
