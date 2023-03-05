import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import styles from './style';

const Tab = createBottomTabNavigator()

const EmptyScreen = () => {
    return <View></View>
};

const RecordPage = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.fighting}>
                <Image 
                    style={{ width: 300, height: 300 }}
                    source={require('../../pictures/Picture7.png')} // labron
                />
                <View style={styles.fightingMask}>
                    <Image 
                        style={{ width: 300, height: 300 }}
                        source={require('../../pictures/Picture6.png')} // fighting mask
                    />
                </View>
            </View>
            <Tab.Navigator
                barStyle={{ backgroundColor: 'white' }} //'black' bar
                initialRouteName="/"
            >
                <Tab.Screen
                    name='Home' // Home
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='home' size={24} color={color}/>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name='Record' // Home
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <View style={styles.record}/>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen name='Next' 
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Foundation name="next" size={24} color="blue" />
                        ),
                        headerShown: false
                    }}/>
            </Tab.Navigator>

            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
 
export default RecordPage;