import React from 'react';
import { motion } from 'framer-motion'
import { StyleSheet, Text, View } from 'react-native';

const VideoModal = ({ selectedVideo, setSelectedVideo }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedVideo(null)
        }
         
    };

  return (
    // <motion.div className="backdrop" onClick={handleClick}
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    // >
      <div className="backdrop" onClick={handleClick}>
      <motion.video src={selectedVideo} alt='enlarged pic' 
        // initial={{ y: "-100vh" }}
        // animate={{ y: 0 }}
      />
      </div>
      
    // </motion.div>
  )
}

export default VideoModal;