import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import ReportMarker from '../ReportMarker';

export default function Map() {

  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [markers, setMarkers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let gpsServiceStatus = await Location.hasServicesEnabledAsync();
      if (gpsServiceStatus) {
        const { coords } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
        setLocation(coords);
        setMarkers([coords]);
      }
    })();
    console.log('useEffect -> Map')
  }, []);

  return (
    <>
      <MapView
        showsMyLocationButton={true}
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
          latitude: location.latitude,
          longitude: location.longitude,
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


