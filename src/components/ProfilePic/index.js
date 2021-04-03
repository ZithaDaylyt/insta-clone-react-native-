import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import styles from './styles';

const ProfilePic = ({ img, size= 70 }) =>{
    return(
        <View style={[styles.container,{ width:size + 6, height:size +6}]}>
            <Image 
                source={img}
                style={[styles.image,{ width: size, height: size}]}
            />
        </View>
    )
}
export default ProfilePic;