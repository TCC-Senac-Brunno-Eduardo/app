import React from 'react';
import  { Marker, Callout } from 'react-native-maps';


export default function ReportMarker(props) {

  const { coordinate, title } = props

  return (
    <Marker coordinate={coordinate}></Marker>
  );
}

