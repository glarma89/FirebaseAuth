import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
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
                    style={{ width: 400, height: 492 }} // 300 300 // 429 492
                    //style={styles.fightingImage}
                    source={require('../../pictures/Picture7.jpg')} // fighting
                />
                <View style={styles.fightingMask}>
                    <Image 
                        style={{ width: 400, height: 492 }} // 300 300
                        source={require('../../pictures/Picture6.png')} // fighting mask 497 827
                    />
                </View>
                <View style={styles.options}>
                    <View>
                        <MaterialCommunityIcons name="unicorn" size={50} color="blue" />
                        <Text style={styles.iconsText}>Filters</Text>                    
                    </View>
                    
                    <View>
                        <Entypo name="camera" size={50} color="blue" />
                        <Text style={styles.iconsText}>Flip</Text>
                    </View>
                    
                    <View>
                        <FontAwesome name="picture-o" size={50} color="blue" />
                        <Text style={styles.iconsText}>Upload</Text>
                    </View>
                    
                    <View>
                        <MaterialIcons name="textsms" size={50} color="blue" />
                        <Text style={styles.iconsText}>Text</Text>
                    </View>
                    
                    <View>
                        <Ionicons name="play-sharp" size={50} color="blue" />
                        <Text style={styles.iconsText}>Play</Text>
                    </View>
                    
                </View>
            </View>
            <Tab.Navigator
                style={styles.myNavigator}
                //style={{ width: '100%' }}
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