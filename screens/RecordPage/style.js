import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20%',
        
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
    },
    fighting: {
        //flex: 1,
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20%',
        position: 'relative',
        //backgroundSize: 'cover',
        //width: '100%',
        //height: '100%'
        //top: '50%',
        //left: 0,
        // width: '100%',
        // height: 'auto',
        position: 'relative',
    },
    fightingImage: {
        width: '100%',
        height: 'auto'
    },
    fightingMask: {
        //flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        //gap: '20%',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1,
        resizeMode: 'stretch' 
    },
    myNavigator: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        gap: 200
    },
    options: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        top: '3%',
        right: '1%',
        zIndex: 4,
    },
    iconsText: {
        color: 'blue',
    },
    navigator: {

    }
});

export default styles;