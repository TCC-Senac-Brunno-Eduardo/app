import React, { useEffect, useContext } from 'react';
import  { View, Image, TouchableOpacity, Text } from 'react-native';

import { FormReportContext } from '../../contexts/FormReportContext';
import { MapContext } from '../../contexts/MapContext';

export default function DraggableMarker() {

  const { setShowForm } = useContext(FormReportContext);
  const { setShowDraggableMarker, setDraggableMarkerCoords, setDraggableMarkerLocation } = useContext(MapContext);

  const handleCancel = () => {
    setShowForm(true);
    setShowDraggableMarker(false);
    setDraggableMarkerCoords(undefined)
    setDraggableMarkerLocation(undefined)
  }

  const handleConfirmLocation = () => {
    setShowForm(true);
    setShowDraggableMarker(false);
  }

  return (
    <>
      <View style={{position: 'absolute', top: 40, left: 20}}>
        <TouchableOpacity onPress={handleCancel} style={{backgroundColor: '#000', padding: 16, borderRadius: 5, width: 90, height: 50}}> 
          <Text style={{textAlign: 'center', fontWeight: '700', width: '100%', color: '#fff'}}>Voltar</Text>
        </TouchableOpacity >
      </View>
      <View style={{position: 'absolute', top: '50%', left: '50%', marginTop: -49, marginLeft: -25}}>
        <Image style={{width: 50, height: 50}} source={require('../../assets/DraggableMarker/marker.png')} />
      </View>
      <View style={{flex: 0, justifyContent: 'center', position: 'absolute', bottom: 20, left: '25%', width: '50%'}}>
        <TouchableOpacity onPress={handleConfirmLocation} style={{backgroundColor: '#000', padding: 16, borderRadius: 5}}> 
          <Text style={{textAlign: 'center', fontWeight: '700', width: '100%', color: '#fff'}}>Confirmar local</Text>
        </TouchableOpacity >
      </View>
    </>
  );
}

