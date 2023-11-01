import { Alert, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = (props) => {
    const imageUrl = `https://1579-2409-4081-2d1c-d204-9f95-406e-ab71-56ec.ngrok-free.app/${props.album.image}`;
    const dpimageUrl = `https://1579-2409-4081-2d1c-d204-9f95-406e-ab71-56ec.ngrok-free.app/${props.album.dpimage}`;
  return (
    

    <Card>


            <View style={{flexDirection:'row'}}>
              <CardSection>
              <View style={ {padding:15}}>
                <Image source={{uri:imageUrl}} style={styles.imageStyle}/>
              </View>
              </CardSection>

              <CardSection>
              <View style={styles.headerContainerStyle}>
                <Text>{props.album.title}</Text>
                <Text>{props.album.song}</Text>
              </View>
              </CardSection>
              </View>
              <CardSection>
              <View>
              <Image source={{uri:dpimageUrl}} style={styles.dpImgae}/>
              </View>
              </CardSection>

              <CardSection>
              <View>
              <Button 
              value='Watch Now'
              PressMe={()=>{Linking.openURL(`${props.album.url}`)
              .catch((err) => console.error('An error occurred: ', err));
            }}
              />
              </View>
              </CardSection>
      </Card>
    
  )
}

export default AlbumDetail

const styles = StyleSheet.create({
    headerContainerStyle:{
        flexDirection:'column',
        justifyContent:"space-around",
        // paddingLeft:13
        paddingTop:13
    },
    imageStyle: {
    // alignSelf:'auto',
        width: 70, 
        height: 70,
        
    },
    dpImgae:
    {
      height:500,
      width:null
    }
})
