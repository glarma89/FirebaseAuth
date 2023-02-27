import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';


const SearchScreen = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                SearchScreen
            </Text>
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
     );
}
 
export default SearchScreen;