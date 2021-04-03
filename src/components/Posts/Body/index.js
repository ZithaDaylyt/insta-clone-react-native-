import React from 'react'
import { Image, Text } from 'react-native'
import styles from './styles';

const Body = ({postImg}) =>{
    return(
        <Image source={postImg} style={styles.image}/>
    )
};

export default Body;