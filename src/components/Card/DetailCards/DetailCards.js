import React from 'react';
import { FlatList,Dimensions ,Image, Text, View } from 'react-native';

const DetailCards = ({ product }) => {
    const data = product.images;
    const height = Dimensions.get("window").height/3;
    const width = Dimensions.get("window").width*0.9;
    const priceWD = Math.round(product.price * (100 / (100 - product.discountPercentage)));
    const renderImages = (item) => {
        return (
            < View>
                {<Image style={{ width: width, height: height, marginLeft: 10, borderRadius: 10, resizeMode: "contain" }} source={{ uri: item.item }} />}
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