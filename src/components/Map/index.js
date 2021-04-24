import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import ReportMarker from '../ReportMarker';
import DraggableMarker from '../DraggableMarker';

import { FormReportContext } from '../../contexts/FormReportContext';
import { MapContext } from '../../contexts/MapContext';
import { WebsocketContext } from '../../contexts/WebsocketContext';

export default function Map() {

  const { socket } = useContext(WebsocketContext);
  const { showForm } = useContext(FormReportContext);
  
  const { 
    userLocation, setUserLocation, 
    userCoords, setUserCoords, 
    mapViewCoords, setMapViewCoords, 
    showDraggableMarker, setDraggableMarkerCoords 
  } = useContext(MapContext);

  const [markers, setMarkers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
 
  const requestPermissionsLocation = async () => {
    if(await Location.hasServicesEnabledAsync()) {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('O aplicativo não teve acesso ao GPS.');
        return false;
      }
      const currentPosition = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
      setUserCoords({...currentPosition.coords, latitudeDelta: 0.01, longitudeDelta: 0});
      setMapViewCoords({...currentPosition.coords, latitudeDelta: 0.01, longitudeDelta: 0});
    }
    return false;
  }

  const handleRegionChangeComplete = (newCoords) => {
    if(showDraggableMarker){
      setDraggableMarkerCoords(newCoords);
    }
    setMapViewCoords(newCoords);
  }

  useEffect(() => {
    requestPermissionsLocation();
  }, []);

  useEffect(() => {
    if(userCoords?.latitude && userCoords?.longitude) {
      console.log('STEP 2 -> Com as coordenadas, vou buscar no servidor a localização completa')
      socket.emit("userLocation", userCoords);
    }
  }, [userCoords]);

  useEffect(() => {
    if(userLocation?.city) {
      console.log('STEP 3 -> Com a localização completa, vou me inscrever da cidade e buscar marcadores', userLocation.city)
      socket.emit('room', userLocation.city);
      socket.emit('markerCity', userLocation.city);
    }
  }, [userLocation]);

  useEffect(() => {
    console.log('ON SOCKET LOAD -> Set Listeners');
    socket.on('userAddress', (data) => {
      setUserLocation(data)
    })
    socket.on('markers', (data) => {
      setMarkers(data)
     });
    socket.on('newMarker', (data) => {
      setMarkers(oldMarkers => [...oldMarkers, data]);
    })
    socket.on('deletedMarker', (markerIds) => {
      setMarkers((oldMarkers) => oldMarkers.filter(item => { return !markerIds.includes(item.id) }));
    })
  }, [socket]);
    
  useEffect(() => {
    if(!showForm) {
      setMapViewCoords(userCoords)
    }
  }, [showForm]);

  if(errorMsg) return (
    <View>
        <Text>{errorMsg}</Text>
    </View>
  );

  return (
    <>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        userInterfaceStyle='dark'
        showsUserLocation={true}
        initialRegion={{
          latitude: -11.0845284,
          longitude: -48.4930971,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
        region={mapViewCoords}
        onRegionChangeComplete={handleRegionChangeComplete}
      >
        {
          markers.length && !showDraggableMarker ? markers.map((marker, index) => (
            <ReportMarker 
              key={index} 
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude
              }}
            />
          )) : null
        }
      </MapView>
      { showDraggableMarker ? <DraggableMarker/> : null }
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  }
});


