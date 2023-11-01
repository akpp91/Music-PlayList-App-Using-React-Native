import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlbumDetails = ({route}) => {
  const id= route.params?.id;
  return (
    <View>
      <Text>AlbumDetails</Text>
    </View>
  )
}

export default AlbumDetails

const styles = StyleSheet.create({})