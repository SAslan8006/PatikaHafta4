import { View } from 'react-native';
import DetailCards from '~/components/cards/DetailCards';
import styles from "./Details.style";

const Details = ({ route }) => {
    const product = route.params;
    /* const renderDetail = ({ item }) => <DetailCards /> */

    return (
        <View style={styles.container}>
            <DetailCards product={product} />
            {/* <FlatList
                data={product}
                renderItem={renderDetail}
            /> */}
        </View>
    )
}

export default Details