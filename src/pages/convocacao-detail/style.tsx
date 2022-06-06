import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        padding: 20
    },
    title: {
        color: 'black',
        fontSize: 24,
        marginVertical: 10
    },
    description: {
        color: '#333',
        fontSize: 16,
        textAlign: 'justify'
    },
    row: {
        flexDirection: "row",
        marginTop: 25
    },
    txtBold: {
        fontSize: 16,
        fontWeight: '700',
        color: 'black'
    },
    txt: {
        color: '#333',
        fontSize: 16
    },


    convocadoContainer:{
        width:400,
        height:70,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#333',
        alignItems:"center",
        justifyContent:"center",
        marginRight:20
    }
});