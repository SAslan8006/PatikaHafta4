import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.darkgreen,
        borderRadius: 15,
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    user: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 15
    },
    date: {
        color: 'white',
    },
    title: {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    footer: {
        alignItems: "flex-end"
    },
    dislike_container: {
        flexDirection: 'row',
        alignItems: "center",
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    dislike_count_container: {
        backgroundColor: colors.darkgreen,
        borderRadius: 20,
        margin: 3,
        padding: 6
    },
    dislike_count_text: {
        textAlign: 'center',
        color: "white",
        fontWeight: 'bold',
        fontSize: 15,
    },
    dislike_text: {
        color: colors.darkgreen,
        fontWeight: 'bold',
        fontSize: 18,
    },

})