import React from 'react';
import { FlatList, SafeAreaView, ScrollView } from 'react-native';
import Posts from '../Posts';
import Stories from '../Stories';

const postData = [
    {
        user:{
            img:require('../../images/3.jpg'),
            name:'Kalawa'
        },
        postImg: require('../../images/postImg/p2.jpg'),
        caption: '..',
        likeCount : 'Thulane',
        postedAt : '2 minutes ago',
        comments : 'View all 46 comments'
    },
    {
        user:{
            img:require('../../images/manprofile.jpg'),
            name:'Alves'
        },
        postImg: require('../../images/postImg/p1.jpg'),
        caption: 'whip bananas',
        likeCount : 'zitha',
        postedAt : '50 minutes ago',
        comments : 'View all 5 comments'
    },
    {
        user:{
            img:require('../../images/womenprofile.jpg'),
            name:'Luh'
        },
        postImg: require('../../images/postImg/p5.jpg'),
        caption: 'kitty',
        likeCount : 'forexspv',
        postedAt : '4 sec ago',
        comments : 'View all 300 comments'
    },
    {
        user:{
            img:require('../../images/5.jpg'),
            name:'India'
        },
        postImg: require('../../images/postImg/p3.jpg'),
        caption: 'new apartment9',
        likeCount : 'busta',
        postedAt : '23 hour ago',
        comments : 'view all 10 comments'
    },
    {
        user:{
            img:require('../../images/6.jpg'),
            name:'Anathi'
        },
        postImg: require('../../images/postImg/p6.jpg'),
        caption: 'love it', 
        likeCount : 'Thando',
        postedAt : '20 minutes ago',
        comments : 'View all 416 comments'
    },
    {
        user:{
            img:require('../../images/4.jpg'),
            name:'Thenjiwe'
        },
        postImg: require('../../images/postImg/p4.jpg'),
        caption: 'Nature',
        likeCount : 'sipho',
        postedAt : '1 hour ago',
        comments : 'View all 100 comments'
    },
];
const Feed = () =>{
    return(
        <SafeAreaView>
            <FlatList 
                data={postData}
                renderItem={({item})=> <Posts post={item}/>}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>item.user.name}
                scrollEnabled={true}
                ListHeaderComponent={Stories}
            />
        </SafeAreaView>
    )
};

export default Feed;