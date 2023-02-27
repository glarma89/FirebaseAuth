import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
import EntryPage from './screens/EntryPage';
import HomePage from './screens/HomePage';
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
import AcceptChall from './screens/AcceptChall';
import CancelTheChall from './screens/CancelTheChall';
import Congrats from './screens/Congrats';
import CreateAccount from './screens/CreateAccount';
import JoinedAChallenge from './screens/JoinedAChallenge';
import Logo from './screens/Logo';
import Notifications from './screens/Notifications';
import RecordPage from './screens/RecordPage';
import SearchFriends from './screens/SearchFriends';
import SearchScreen from './screens/SearchScreen';
import SettingsForRecord from './screens/SettingsForRecord';
import Share from './screens/Share';
import Stars from './screens/Stars';
//import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry Page">
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Entry Page" component={EntryPage} 
          //options={{headerShown: false}}
        />
        <Stack.Screen name="Home Page" component={HomePage} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="AcceptChall" component={AcceptChall} />
        <Stack.Screen name="CancelTheChall" component={CancelTheChall} />
        <Stack.Screen name="Congrats" component={Congrats} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="JoinedAChallenge" component={JoinedAChallenge} />
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="RecordPage" component={RecordPage} />
        <Stack.Screen name="SearchFriends" component={SearchFriends} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="SettingsForRecord" component={SettingsForRecord} />
        <Stack.Screen name="Share" component={Share} />
        <Stack.Screen name="Stars" component={Stars} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
