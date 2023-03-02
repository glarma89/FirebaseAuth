import { StyleSheet, View } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 30
        //alignItems: 'flex-start', //center
        justifyContent: 'center', //center
        gap: '30px',
        //textAlign: 'left',
        alignContent: 'flex-start',
        flexDirection: 'column',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    // container > View:last-child {
    //     align-content: 'flex-end',
    //   },
    name: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 4,
        padding: 8,
        width: '80%',
        fontSize: 18,
        backgroundColor: 'white',
    },
    text: {
        color: 'black',
        fontSize: 'large',
        //fontFamily: 'Trebuchet MS',
        fontWeight: 'bold',
        //textAlign: 'left'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10%'
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'gray'
    }, 
    buttonText: {
        color: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    duration: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    pop: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    // myNavigator: {
    //     alignItems: 'center',
    //     alignContent: 'center',
    // }
});

export default styles;