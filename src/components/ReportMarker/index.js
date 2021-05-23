import React from 'react';
import  { Marker, Callout } from 'react-native-maps';
import { View, Text } from 'react-native'


export default function ReportMarker(props) {

  const { coordinate, data, onPress } = props

  const handlePress = (data) => {
    onPress(data)
  }

  return (
    <Marker onPress={() => handlePress(data)} coordinate={coordinate}></Marker>
  );
}

