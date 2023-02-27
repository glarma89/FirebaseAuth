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
        flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20%',
        position: 'relative',
        //backgroundSize: 'cover',
        //width: '100%',
        //height: '100%'
        //top: 0,
        //left: 0,
    },
    // labronMask: {
    //     flex: 1,
    //     // marginTop: 30
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     gap: '20%',
    //     position: 'absolute'
    // },
    lakersLogo: {
        flex: 1,
        // marginTop: 30
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20%',
    },
    // textLabron: {
    //     flex: 1,
    //     // marginTop: 30
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     gap: '20%',
    //     color: 'blue',
    //     position: 'absolute',
    //     width: '300',
    //     height: '300',
    //     fontSize: '180%',
    //     fontWeight: 'bold'
    // },
    avatar: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        borderRadius: '50%',
        borderWidth: '1px',
        borderColor: 'blue',
        top: 0,
        right: '1%',
        bottom: '97%'
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