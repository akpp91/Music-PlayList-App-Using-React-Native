import React from 'react';
import Header from './src/Componenet/Header';
import AlbumList from './src/Componenet/AlbumList';
import { View } from 'react-native';

function App() {
  

  return (
    <View>
    <Header hT="Taylor swift playlist"/>
    <AlbumList/>
    </View>
  );
}


export default App;
