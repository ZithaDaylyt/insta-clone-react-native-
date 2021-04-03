import React from 'react'
import { Text, View } from 'react-native'
import ProfilePic from '../../ProfilePic'
import styles from './styles';
import { Entypo } from '@expo/vector-icons';

const Header = ({img,name}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.info}>
                <ProfilePic img={img} size={30}/>
                <Text style={styles.name}>{name}</Text>
            </View>
            <Entypo name="dots-three-horizontal" size={18} color="black" />
        </View>
    )
};

export default Header;