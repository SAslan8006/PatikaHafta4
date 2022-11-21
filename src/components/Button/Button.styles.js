import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

//base stylemiz
const base_style = StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        borderRadius: 5,
        alignItems: "center",
        
    },
    button_container:{
        flexDirection:'row',
        alignItems:"center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 17,
        marginLeft:5,
        color:'white',
        
    }
});
//base styleynin değerini içeri aktarıyoruz ...base_style yazarak
export default {
    ...base_style,
    primary: StyleSheet.create({
        container: {
            ...base_style.container,
            backgroundColor: colors.darkgreen,
        },
        title: {
            ...base_style.title,
            color:'white',
        }
    }),
    secondary:StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: "white",
            borderWidth:1,
            borderColor:colors.darkgreen,            
        },       
        title: {
            ...base_style.title,
            color: colors.darkgreen,
        }
    })
}