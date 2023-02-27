import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';


const CancelTheChall = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                CancelTheChall
            </Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
     );
}
 
export default CancelTheChall;