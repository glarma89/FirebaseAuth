import { StyleSheet } from "react-native";
import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
      'Trebuchet MS': require('../../assets/fonts/trebuc.ttf'), //./assets/fonts/trebuc.ttf
    });
  }
  
loadFonts();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20%'
    },
    text: {
        color: 'blue',
        fontSize: 'x-large',
        fontFamily: 'Trebuchet MS',
        fontWeight: 'bold'
    },
    labron: {
        //flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20%',
        position: 'relative',
        //backgroundSize: 'cover',
        //width: '100%',
        //height: '100%'
        //top: '50%',
        //left: 0,
    },
    labronMask: {
        //flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        //gap: '20%',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1
    },
    lakersLogo: {
        //flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        //gap: '20%',
        position: 'absolute',
        right: '25%',
        //bottom: '10%',
        width: '10px',
        height: '10px',
        zIndex: 3,
        //marginBottom: '-200px'
        bottom: '-50px',
    },
    textLabron: {
        //flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        //gap: '20%',
        color: 'blue',
        position: 'absolute',
        width: '300',
        height: '300',
        fontSize: '180%',
        fontWeight: 'bold',
        zIndex: 2
    },
    avatar: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        borderRadius: '50%',
        borderWidth: '1px',
        borderColor: 'blue',
        top: '3%',
        right: '1%',
        zIndex: 4
    }
    // logo: {
    //     position: 'relative',
    //     width: '100px',
    //     height: '100px',
    //     backgroundColor: 'violet',
    //     borderRadius: '28%'
    // },
    
});

export default styles;