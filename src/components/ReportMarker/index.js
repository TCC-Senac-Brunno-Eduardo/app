import React from 'react';
import  { Marker } from 'react-native-maps';

export default function ReportMarker(props) {

  const { coordinate, data, onPress } = props

  const handlePress = (data) => {
    onPress(data)
  }

  return (
    <Marker onPress={() => handlePress(data)} image={require('../../assets/marker.png')}  coordinate={coordinate}></Marker>
  );
}

