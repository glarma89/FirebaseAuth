import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20%'
    },
    text: {
        color: 'olive',
        //fontSize: 'x-large',
        //fontFamily: 'Trebuchet MS',
        fontWeight: 'bold'
    },
    record: {
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        borderRadius: '50%',
    }
    
});

export default styles;