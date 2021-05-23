import React from 'react';
import  { Heatmap  } from 'react-native-maps';

export default function HeatMarkers(props) {

  const { data } = props

  return (
    <Heatmap points={data}></Heatmap >
  );
}

