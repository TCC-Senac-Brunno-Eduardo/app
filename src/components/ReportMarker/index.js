import React from 'react';
import  { Marker } from 'react-native-maps';


export default function ReportMarker(props) {

  const { coordinate, title } = props

  return (
    <Marker
      title={title}
      coordinate={coordinate}
      onPress={(e) => { e.stopPropagation(); console.log(title) }}
    />
  );
}

