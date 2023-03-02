// import React, { useRef, useState } from 'react'
// import { Text, View, TouchableOpacity } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// //import { requireNativeComponent } from 'react-native-web/dist/index'

//==== imports norm==========

// import React, { useEffect, useState } from 'react'
// import { View, Text, requireNativeComponent } from 'react-native';
// import { Camera } from 'expo-camera'
// import { Audio } from 'expo-av'
// import * as ImagePicker from 'expo-image-picker'
// import * as MediaLibrary from 'expo-media-library'
// import { useIsFocused } from '@react-navigation/native'
// import styles from './style';

//==== imports norm==========


// // const RNCamera = requireNativeComponent('RNCamera', Camera, {
// //     |                 ^
// // 920 |   nativeOnly: {
// // 921 |     accessibilityComponentType: true,
// // 922 |     accessibilityLabel: true,

// const CameraScreen = () => {
//     const cameraRef = useRef(null);
//     const [isCameraOpen, setIsCameraOpen] = useState(false);

//     const handleCamera = async () => {
//         if (cameraRef.current) {
//           setIsCameraOpen(true);
//           const options = { quality: 0.5, base64: true };
//           const data = await cameraRef.current.takePictureAsync(options);
//           console.log(data.uri);
//           setIsCameraOpen(false);
//         }
//       };

//     return ( 
//         // <View>
//         //     <Text style={{ marginTop: 30 }}>It's my CameraScreen</Text>
//         // </View>

//         <View style={styles.container}>
//             {!isCameraOpen && (
//                 <TouchableOpacity onPress={handleCamera}>
//                 <Text style={styles.cameraButton}>Take a picture</Text>
//                 </TouchableOpacity>
//             )}
//             {isCameraOpen && (
//                 <RNCamera ref={cameraRef} style={styles.preview} captureAudio={false} />
//             )}
//         </View>
//   );
// };
 
// export default CameraScreen;
//=============================================================
// import { Camera } from 'react-native-vision-camera';
// import React, { useState } from 'react';
// import { Button } from 'react-native';

// const CameraScreen = () => {
//   const [isRecording, setIsRecording] = useState(false);

//   const startRecording = async () => {
//     setIsRecording(true);
//     await Camera.startRecording({
//       path: '/path/to/video.mp4',
//       video: {
//         codec: 'H264',
//         width: 1280,
//         height: 720,
//         bitrate: 2000000,
//         frameRate: 30,
//       },
//     });
//   };

//   const stopRecording = async () => {
//     setIsRecording(false);
//     await Camera.stopRecording();
//   };

//   return (
//     <Button
//       title={isRecording ? 'Stop Recording' : 'Start Recording'}
//       onPress={isRecording ? stopRecording : startRecording}
//     />
//   );
// };

// export default CameraScreen;

//=============code norm ===============================


// const CameraScreen = () => {
// const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
// const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
// const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);

// const [galleryItems, setGalleryItems] = useState([]);

// const isFocused = useIsFocused()



// useEffect(() => {
//   (async () => {
//     const cameraStatus = await Camera.requestCameraPermissionsAsync() 
//     setHasCameraPermissions(cameraStatus.status == 'granted')

//     const audioStatus = await Audio.requestPermissionsAsync() 
//     setHasAudioPermissions(audioStatus.status == 'granted')

//     const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync() 
//     setHasGalleryPermissions(galleryStatus.status == 'granted')

//     if (galleryStatus.status == 'granted') {
//       const userGalleryMedia = await MediaLibrary.getAssetsAsync({sortBy: ['creationTime'], mediaType: ['video']})
//       setGalleryItems(userGalleryMedia)
//     }
//   })()
// }, []);

// if (!hasCameraPermissions || !hasAudioPermissions || !hasGalleryPermissions) {
//   return (
//     <View></View>
//   )
// }

//   return ( 
//     <View style={styles.container}>
//       {isFocused ?
//       <Camera
//         style={styles.camera}
//       />
//     : null}
//     </View>
//    );
// }
 
// export default CameraScreen;
//=============code norm ===============================