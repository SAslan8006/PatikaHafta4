import { StyleSheet } from "react-native";
import { spacing } from "~/configs";
import colors from "../colors";

//base stylemiz
const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignItems: "center",

    },
    button_container: {
        padding: 8,
        margin: spacing.s / 2,
        borderRadius: 5,
        alignItems: "center",
        width: '25%',
        paddingVertical: spacing.s,
        borderTopLeftRadius: spacing.s / 2,
        borderTopRightRadius: spacing.s / 2,
        borderBottomLeftRadius: spacing.s,
        borderBottomRightRadius: spacing.s,
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: spacing.s*3,
        marginLeft: spacing.s,

    }
});
//base styleynin değerini içeri aktarıyoruz ...base_style yazarak
export default {
    ...base_style,
    primary: StyleSheet.create({
        container: {
            ...base_style.container,
            backgroundColor: colors.white,
        },
        button_container:{
            backgroundColor: colors.black,
        },
        title: {
            ...base_style.title,
            color: colors.white,
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.white,
            borderWidth: 1,
            borderColor: colors.black,
        }, 
        button_container:{
            backgroundColor: colors.black,
        },
        title: {
            ...base_style.title,
            color: colors.black,
        }
    })
}