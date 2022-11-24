import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from "./CategoryCards.style";

const CategoryCards = ({ products, onClick }) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{products}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCards;