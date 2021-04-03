import React from 'react'
import { Text, View } from 'react-native';
import ProfilePic from '../ProfilePic';
import styles from './styles';


const Story = ({img,name}) =>{
    return(
        <View>
            <ProfilePic img={img}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
};

export default Story;