import { Dimensions, StyleSheet } from "react-native";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        margin: 10,
        borderColor: "#bdbdbd",
        backgroundColor: "#e0e0e0",
        flexDirection: "row",
        borderRadius: 5,


    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: "contain",
        backgroundColor: "white",
        borderRadius: 5,

    },
    body_container: {
        flex: 1,
        padding: 5,
        height: height * 0.1,

    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        // top kullanılacak

    },
    price: {
        textAlign: "right",
        fontSize: 16,
        fontStyle: "italic",
        color: "black"
    },
    rate: {
        fontWeight: "bold",
        color: "green",
        fontSize: 16
    },

});