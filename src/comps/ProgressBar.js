import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'
import { StyleSheet, Text, View } from 'react-native';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file)
    console.log(progress, url);

    useEffect(() => {
      if (url) {
        setFile(null);
      }
    }, [url, setFile])
    
    return (
      <motion.div className="progress-bar" 
        //style={{ width: progress + '%' }}
        initial={{ width: 0 }}
        animate={{ width: progress + '%'  }}
      ></motion.div>
    )
  }
  
  export default ProgressBar;