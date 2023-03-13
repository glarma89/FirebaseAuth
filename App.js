import React, { useState } from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageGrid from './src/comps/ImageGrid';
import VideoGrid from './src/comps/VideoGrid';
import Modal from './src/comps/Modal';
import VideoModal from './src/comps/VideoModal';
import Title from './src/comps/Title';
import UploadForm from './src/comps/UploadForm';


export default function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null); 

  return (
    <View style={styles}>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      <VideoGrid setSelectedVideo={setSelectedVideo} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
      { selectedVideo && <VideoModal selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/> }
    </View>
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
