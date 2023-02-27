import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import styles from './style';
import CameraScreen from '../CameraScreen/index.js'

//const Tab = createMaterialBottomTabNavigator()
const Tab = createBottomTabNavigator()

const EmptyScreen = () => {
    return <View></View>
};

const HomePage = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.text}>
                #Labron Challenge
            </Text>
            
            <View style={styles.labron}>
                <Image 
                    style={{ width: 300, height: 300 }}
                    source={require('../../pictures/Picture5.png')} // labron
                />
                <View style={styles.labronMask}>
                    <Image 
                        style={{ width: 300, height: 300 }}
                        source={require('../../pictures/Picture2.png')} // labron mask
                    />
                </View>
                <Text style={styles.textLabron}>
                    {`  Lakers wants YOU\nto be the next team\n\t    player`}
                </Text>
                <View style={styles.avatar}/>
            </View>
            
            <View style={styles.lakersLogo}>
                <Image 
                    style={{ width: 100, height: 100 }}
                    source={require('../../pictures/Picture3.png')} // lakers logo
                />
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
                        )
                    }}
                />
                <Tab.Screen
                    name='Profile' // Profile
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='user' size={24} color={color}/>
                        )
                    }}
                />
                <Tab.Screen
                    name='Add' // Add
                    component={CameraScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='plus-circle' size={24} color={color}/>
                        )
                    }}
                />
                <Tab.Screen
                    name='Notifications' // Notifications
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='bell' size={24} color={color}/>
                        )
                    }}
                />
                <Tab.Screen
                    name='Search' // Search
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='search' size={24} color={color}/>
                        )
                    }}
                />
            </Tab.Navigator>
    
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
     );
}
 
export default HomePage;