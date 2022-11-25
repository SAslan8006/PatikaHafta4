import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        marginVertical: height * 0.015,
        marginHorizontal: width * 0.05,
        borderColor: "#bdbdbd",
        backgroundColor: "#e0e0e0",
        flexDirection: "row",
        borderRadius: 5,


    },
    image: {
        width: width * 0.25,
        minHeight: height * 0.1375,
        resizeMode: "contain",
        backgroundColor: "white",
        borderRadius: 5,

    },
    body_container: {
        flex: 1,
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.025,
        justifyContent: "space-between",

    },
    header: {
        flexDirection: "row",
        minHeight: height * 0.07,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        flex: 3,
        // top kullanılacak

    },
    price: {
        textAlign: "right",
        fontSize: 16,
        fontStyle: "italic",
        color: "black",
    },
    rate: {
        fontWeight: "bold",
        color: "green",
        fontSize: 16,
        flex: 1,
        textAlign: "right",
    },

});