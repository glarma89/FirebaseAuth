import React, { useState } from 'react';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { Camera } from 'react-native-vision-camera';


const CheckingCameraScreen = ({ navigation }) => {
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = async () => {
        setIsRecording(true);
        await Camera.startRecording({
          path: '/path/to/video.mp4',
          video: {
            codec: 'H264',
            width: 1280,
            height: 720,
            bitrate: 2000000,
            frameRate: 30,
          },
        });
      };

      const stopRecording = async () => {
        setIsRecording(false);
        await Camera.stopRecording();
      };
    
    return ( 
        <View style={styles.container}>
            <Button
                title={isRecording ? 'Stop Recording' : 'Start Recording'}
                onPress={isRecording ? stopRecording : startRecording}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
     );
}
 
export default CheckingCameraScreen;