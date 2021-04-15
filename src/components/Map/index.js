import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import ReportMarker from '../ReportMarker';

import { WebsocketContext } from '../../contexts/WebsocketContext';

export default function Map() {

  const { socket } = useContext(WebsocketContext);

  const [location, setLocation] = useState();  
  const [coords, setCoords] = useState();  
  const [markers, setMarkers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const initialRegion = {
    latitude: -11.0845284,
    longitude: -48.4930971
  }

  console.log(socket.id)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('O aplicativo não teve acesso ao GPS.');
        return;
      }
      
      let gpsServiceStatus = await Location.hasServicesEnabledAsync();
      if (gpsServiceStatus) {
        const { coords } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
        setCoords(coords);
        console.log('useEffect -> Permisão de GPS + Coordenadas', coords)
      }
    })();
  }, []);

  useEffect(() => {
    if(coords) {
      console.log('Com as coordenadas, vou buscar no servidor a localização completa')
      socket.emit("userLocation", coords);
    }
  }, [coords]);

  useEffect(() => {
    if(location) {
      console.log('Com a localização completa, vou buscar os marcadores da cidade', location.city)
      socket.emit('cityMarkers', location.city);
      socket.on(location.city, (data) => {
        setMarkers(data)
      });
    }
  }, [location]);

  useEffect(() => {
    socket.on('userAddress', (data) => {
      setLocation(data)
    })
  }, []);

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
        region={{
          latitude: coords ? coords.latitude : initialRegion.latitude,
          longitude: coords ? coords.longitude : initialRegion.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0,
        }}
      >
        {
          markers.length ? markers.map((marker, index) => (
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


