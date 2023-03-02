import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

const EmptyScreen = () => {
    return <View></View>
};

const SettingsForRecord = ({ navigation }) => {

    const [text, setText] = useState('');

    const handleTextChange = (newText) => {
        console.log(text);
        setText(newText);
    };

    return ( 
        <View style={styles.container}>
            <View style={styles.name}>
                <Text style={styles.text}>
                    Give Your Challenge a Name
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleTextChange}
                    editable = {true}
                    maxLength = {40}
                    textContentType='text'
                    value={text}
                    secureTextEntry={false}
                    keyboardType="default"
                />
            </View>
            <View style={styles.duration}>
                <Text style={styles.text}>
                    Define Challenge Duration
                </Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>3 days</Text>                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>5 days</Text>                                                
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>1 week</Text>                                                
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.pop}>
                <Text style={styles.text}>
                    Private or Public
                </Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Private</Text>                                                
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Public</Text>                                                
                    </TouchableOpacity>
                </View>
            </View>
            
            <Tab.Navigator
                barStyle={{ backgroundColor: 'white' }}
                initialRouteName="/"
                style={styles.myNavigator}
            >
                <Tab.Screen name='Back' // Home
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="back" size={24} color="blue" />
                        ),
                        headerShown: false
                    }}/>
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
 
export default SettingsForRecord;