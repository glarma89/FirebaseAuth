import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';


const AcceptChall = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                AcceptChall
            </Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
     );
}
 
export default AcceptChall;