import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import AlbumDetail from './AlbumDetail';
import Button from './Button';

const AlbumList = () => {

    const [album, setAlbum]=useState([])

    useEffect(  ()=>{
        async function fetch ()  
        {
            try {
              const response = await axios.get('https://1579-2409-4081-2d1c-d204-9f95-406e-ab71-56ec.ngrok-free.app/songs');

              console.log(response.data);
                            setAlbum(response.data);
            } catch (error) {
              console.log(error); 
            }
        }
        fetch();
    },[]
  )
  
    return (

    <View style={{marginBottom:90}}>
      <SafeAreaView>
      <ScrollView>
      {album.map((item, index) => (
                <AlbumDetail key={index}
                    album={item}
                />
            ))}
</ScrollView>
</SafeAreaView>
    </View>
    
  )
}

export default AlbumList

const styles = StyleSheet.create({})