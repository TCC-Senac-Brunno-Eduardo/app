import React, { useEffect, useContext } from 'react';
import  { View, Image, TouchableOpacity, Text } from 'react-native';

import { FormReportContext } from '../../contexts/FormReportContext';
import { MapContext } from '../../contexts/MapContext';

export default function DraggableMarker() {

  const { setShowForm } = useContext(FormReportContext);
  const { setShowDraggableMarker } = useContext(MapContext);


  useEffect(() => {
    console.log('DraggableMarker')
  }, [])

  const handleConfirmLocation = () => {
    setShowForm(true);
    setShowDraggableMarker(false);
  }

  return (
    <>
      <View style={{position: 'absolute', top: '50%', left: '50%'}}>
        <Image style={{width: 50, height: 50}} source={require('../../assets/DraggableMarker/marker.jpg')} />
      </View>
      <View style={{position: 'absolute', bottom: 20, left: 20}}>
        <TouchableOpacity onPress={handleConfirmLocation}> 
          <Text>Confirmar local</Text>
        </TouchableOpacity >
      </View>
    </>
  );
}

