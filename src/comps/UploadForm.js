import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'video/mp4'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);  
            setError('')
        } else {
            setFile(null);
            setError('Please select an image (png or jpeg), or video (mp4)');
        }
    };

    // return (
    //   <form>
    //     <label>
    //         <input type="file" onChange={changeHandler} />
    //         <span>+</span>
    //     </label>
    //     <div className='output'></div>
    //         { error && <div className='error'>{ error }</div> }
    //         { file && <div>{ file.name }</div> }
    //         { file && <ProgressBar file={file} setFile={setFile}/> }
    //   </form>
    // )

    return (
        <View>
          <TouchableOpacity onPress={changeHandler}>
            <Text>+</Text>
          </TouchableOpacity>
          <View style={styles.output}></View>
          {error && <Text style={styles.error}>{error}</Text>}
          {file && <Text>{file.name}</Text>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </View>
      );

  }
  
  export default UploadForm;