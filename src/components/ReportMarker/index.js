import React from 'react';
import  { Marker } from 'react-native-maps';


export default function ReportMarker(props) {

  const { coordinate, title } = props

  return (
    <Marker coordinate={coordinate}></Marker>
  );
}

