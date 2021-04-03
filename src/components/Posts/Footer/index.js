import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Footer = ({post}) =>{

    const [ isLiked, setIsLiked ] = useState(false);

    const onLike = () =>{
        setIsLiked(!isLiked);
    };

    return(
        <View style={styles.container}>
            <View style={styles.iconContainer}> 
                <View style={styles.icons} >
                    <TouchableOpacity onPress={onLike}>
                        {isLiked ? <FontAwesome name="heart" size={24} color="red" />: <FontAwesome name="heart-o" size={24} color="black" /> }
                    </TouchableOpacity>
                    <Feather name="message-circle" size={24} color="black"  style={{transform: [{rotateY: '180deg'}]}}/>
                    <Ionicons name="paper-plane-outline" size={24} color="black" />
                </View>
                <Feather name="bookmark" size={26} color="black" />
            </View>
            <Text>Liked by
                <Text style={styles.likes}> {post.likeCount} </Text>and <Text style={styles.likes}>others</Text>
            </Text>
            <Text style={styles.caption}><Text style={styles.likes}>{post.user.name}</Text> {post.caption}</Text>
            <Text style={styles.postedAt}>{post.comments}</Text>
            <Text style={styles.postedAt}>{post.postedAt}</Text>
            
        </View>
    )
};
export default Footer;