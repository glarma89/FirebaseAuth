import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 

// <h1>FireGram</h1>
// <h2>Your Pictures</h2>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

const Title = () => {
  return (
    <View className="title">
      <Text>FireGram</Text>
      <Text>Your Pictures</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </View>
  )
}

export default Title;