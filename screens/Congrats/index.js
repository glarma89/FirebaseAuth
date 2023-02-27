import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';


const Congrats = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                Congrats
            </Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
     );
}
 
export default Congrats;