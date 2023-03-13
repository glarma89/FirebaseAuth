import React from 'react'
import useFirestore from '../hooks/useFirestore' 
import { motion } from 'framer-motion'
//import { View } from 'react-native-web';
import { StyleSheet, Text, View } from 'react-native';


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
      <View className="img-grid">
        { docs && docs.map(doc => (
            <motion.div className='img-wrap' key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImg(doc.url)}
            >
                <motion.img src={doc.url} 
                    //alt='uploaded pic'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                />
            </motion.div>
        )) }
      </View>
    )
  }
  
  export default ImageGrid;