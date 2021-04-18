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
  const { location, setLocation, coords, setCoords, showDraggableMarker, setDraggableMarkerCoords } = useContext(MapContext);
  const { showForm } = useContext(FormReportContext);

  const [ currentUserCoords, setCurrentUserCoords ] = useState();
  
  const [firstTime, setFirstTime] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const initialRegion = {
    latitude: -11.0845284,
    longitude: -48.4930971,
    latitudeDelta: 100,
    longitudeDelta: 100,
  }

  handleRegionChangeComplete = (newCoords) => {
    if(showDraggableMarker){
      setDraggableMarkerCoords(newCoords);
    }
    setCoords(newCoords);
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('O aplicativo não teve acesso ao GPS.');
        return;
      }
      
      let gpsServiceStatus = await Location.hasServicesEnabledAsync();
      if (gpsServiceStatus) {
        console.log('STEP 1 -> Permisão de GPS + Coordenadas')
        let currentPosition = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
        setFirstTime(true);
        setCurrentUserCoords({...currentPosition.coords, latitudeDelta: 0.01, longitudeDelta: 0});
        setCoords({...currentPosition.coords, latitudeDelta: 0.01, longitudeDelta: 0});
      }
    })();
  }, []);

  useEffect(() => {
    if(coords && firstTime) {
      console.log(coords)
      console.log('STEP 2 -> Com as coordenadas, vou buscar no servidor a localização completa')
      socket.emit("userLocation", coords);
      setFirstTime(false);
    }
  }, [coords]);

  useEffect(() => {
    if(location) {
      console.log('STEP 3 -> Com a localização completa, vou buscar me inscrever da cidade', location.city)
      socket.emit('room', location.city);
      socket.emit('markerCity', location.city);
    }
  }, [location]);

  useEffect(() => {
    console.log('ON SOCKET LOAD -> Set Listeners');
    socket.on('userAddress', (data) => {
      setLocation(data)
    })
    socket.on('markers', (data) => {
      setMarkers(data)
     });
    socket.on('newMarker', (data) => {
      console.log('newMarker', data)
      setMarkers(oldMarkers => [...oldMarkers, data]);
    })
  }, [socket]);
    
  useEffect(() => {
    if(!showForm) {
      setCoords(currentUserCoords)
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
        onRegionChangeComplete={handleRegionChangeComplete}
        initialRegion={coords ? coords : initialRegion}
        region={coords ? coords : initialRegion}
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


