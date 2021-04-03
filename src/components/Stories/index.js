import React from 'react'
import { View,FlatList } from 'react-native';
import Story from '../Story';


const user = [
    {
        img :require('../../images/3.jpg'),
        name : 'Kalawa'
    },
    {
        img :require('../../images/4.jpg'),
        name : 'Thenjiwe'
    },
    {
        img :require('../../images/5.jpg'),
        name : 'India'
    },
    {
        img :require('../../images/6.jpg'),
        name : 'Anathi'
    },
    {
        img :require('../../images/manprofile.jpg'),
        name : 'Alves'
    },
    {
        img :require('../../images/womenprofile.jpg'),
        name : 'Luh'
    },
];

const Stories = () =>{
    return(
        <View style={{
            borderBottomWidth:.5,
            borderBottomColor:'#2f2f2f',
            paddingBottom:5
        }}>
            <FlatList
                data ={user}
                renderItem={({item})=> <Story name={item.name} img={item.img}/>}
                keyExtractor={(item)=>item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
};
export default Stories;
