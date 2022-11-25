import { useState } from "react";
import { FlatList, View } from 'react-native';
import useFetch from '~/api/hooks/useFetch';
import CategoryCards from "~/components/Card/CategoryCards";
import Loading from "~/components/Loading";
import SearchBar from "~/components/SearchBar";

const Categories = ({ navigation }) => {
    const { data, loading } = useFetch("https://dummyjson.com/products/categories")

    const [list, setList] = useState(data);

    const renderCategories = ({ item }) => <CategoryCards categories={item} onClick={() => handleOnClick(item)} />


    const handleOnClick = (category) => {
        navigation.navigate("Products", { category });

    }
    
    const handleSearch = text => {
        const filterCategories = data.filter(category => {
            const searchedText = text.toLowerCase();
            const currentCategoryName = category.toLowerCase();
            return currentCategoryName.indexOf(searchedText) > -1
        });
        setList(filterCategories)
    }

    if (data.length == 0) {
        return <Loading />
    }

    return (
        <View>
            <SearchBar setText={handleSearch} />
            <FlatList
                data={list}
                renderItem={renderCategories}
            />
        </View>
    )
}

export default Categories