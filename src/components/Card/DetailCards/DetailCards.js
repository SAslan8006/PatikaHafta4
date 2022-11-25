import { FlatList, Image, Text, View } from 'react-native';

const DetailCards = ({ product }) => {
    const data = product.images;

    const priceWD = Math.round(product.price * (100 / (100 - product.discountPercentage)));
    const renderImages = (item) => {
        return (
            < View>
                {<Image style={{ width: 200, height: 200, marginLeft: 10, borderRadius: 10 }} source={{ uri: item.item }} />}
            </View >
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderImages}
                horizontal={true}
            />
            <Text>{product.title}</Text>
            <Text>{product.brand}</Text>
            <Text style={{ textDecorationLine: 'line-through' }}>{priceWD}</Text>
            <Text>{product.discountPercentage}%</Text>
            <Text>{product.price}</Text>
            <Text>{product.rating}</Text>
            <Text>{product.stock}</Text>
            <Text>{product.description}</Text>
        </View>
    )
}

export default DetailCards