import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'react-native-vision-camera';

const App = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleCameraButtonPress = () => {
    setIsCameraOpen(true);
  };

  const handleCloseCamera = () => {
    setIsCameraOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cameraButton} onPress={handleCameraButtonPress}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      {isCameraOpen && <Camera style={styles.camera} />}
      {isCameraOpen && (
        <TouchableOpacity style={styles.closeButton} onPress={handleCloseCamera}>
          <Text style={styles.buttonText}>Close Camera</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButton: {
    backgroundColor: '#007aff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  camera: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  closeButton: {
    backgroundColor: '#007aff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;
