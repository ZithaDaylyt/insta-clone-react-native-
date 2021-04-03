import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:3
    },
    info:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    name:{
        fontWeight: '600',
        color:'#000'
    }
});
export default styles;