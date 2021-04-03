import React from 'react'
import { Text } from 'react-native'
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

const Posts = ({post}) =>{
    return(
        <>
        <Header img={post.user.img} name={post.user.name}/>
        <Body postImg={post.postImg}/>
        <Footer post={post}/>
        </>
    )
};

export default Posts;