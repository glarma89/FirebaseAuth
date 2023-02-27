import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  
    return (
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    )
  }

export default HomeScreen;

const styles = StyleSheet.create({})
