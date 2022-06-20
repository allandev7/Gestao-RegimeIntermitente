import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        marginBottom:15
    },
    btnPlus:{
        width:40,
        height:40,
        borderRadius:100,
        backgroundColor:'#1253BC',
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'flex-end',
        marginRight:'5%'
    },
    txtPlus:{
        color:'#FFF',
        fontWeight:'400'
    },
    btnSubmit:{
        width:'90%',
        height:40,
        borderRadius:10,
        alignSelf:'center',
        backgroundColor:'#1253BC',
        alignItems:"center",
        justifyContent:"center",
        marginTop:'10%'
    }
});