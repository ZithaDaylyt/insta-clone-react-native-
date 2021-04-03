import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:9,
    },
    likes:{
        fontWeight:'bold',
    },
    caption:{
        marginVertical:3
    },
    postedAt:{
        color:'#8c8c8c'
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    icons:{
        flexDirection:'row',
        width:90,
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default styles;