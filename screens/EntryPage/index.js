import React from 'react'
import { Button, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
//import HomePage from '../HomePage';
import styles from './style';


const EntryPage = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.logo}>
                    {/* <View style={styles.line}/> */}
                    <Image 
                        style={{ width: 100, height: 100 }}
                        source={require('../../pictures/Picture1.png')}
                    />
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>
                {`Challenge Yourself\n   Inspire Others`}
            </Text>
            <View>
                <Button 
                    title='Go to Home Page'
                    onPress={() => navigation.navigate('Home Page')}
                >Button</Button>
                <Button 
                    title='Go to AcceptChall'
                    onPress={() => navigation.navigate('AcceptChall')}
                >Button</Button>
                <Button 
                    title='Go to CancelTheChall'
                    onPress={() => navigation.navigate('CancelTheChall')}
                >Button</Button>
                <Button 
                    title='Go to Congrats'
                    onPress={() => navigation.navigate('Congrats')}
                >Button</Button>
                <Button 
                    title='Go to CreateAccount'
                    onPress={() => navigation.navigate('CreateAccount')}
                >Button</Button>
                <Button 
                    title='Go to JoinedAChallenge'
                    onPress={() => navigation.navigate('JoinedAChallenge')}
                >Button</Button>
                <Button 
                    title='Go to Logo'
                    onPress={() => navigation.navigate('Logo')}
                >Button</Button>
                <Button 
                    title='Go to Notifications'
                    onPress={() => navigation.navigate('Notifications')}
                >Button</Button>
                <Button 
                    title='Go to RecordPage'
                    onPress={() => navigation.navigate('RecordPage')}
                >Button</Button>
                <Button 
                    title='Go to SearchFriends'
                    onPress={() => navigation.navigate('SearchFriends')}
                >Button</Button>
                <Button 
                    title='Go to SearchScreen'
                    onPress={() => navigation.navigate('SearchScreen')}
                >Button</Button>
                <Button 
                    title='Go to SettingsForRecord'
                    onPress={() => navigation.navigate('SettingsForRecord')}
                >Button</Button>
                <Button 
                    title='Go to Share'
                    onPress={() => navigation.navigate('Share')}
                >Button</Button>
                <Button 
                    title='Go to Stars'
                    onPress={() => navigation.navigate('Stars')}
                >Button</Button>
                <Button 
                    title='Go to CheckingCameraScreen'
                    onPress={() => navigation.navigate('CheckingCameraScreen')}
                >Button</Button>
            </View>
        </View>
     );
}
 
export default EntryPage;