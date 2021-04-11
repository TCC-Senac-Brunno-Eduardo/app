import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import ButtonReport from '../ButtonReport' 

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

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
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#00D6AD" />
      <MapView
        showsMyLocationButton={true}
        style={styles.map}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -11.0845284,
          longitude: -48.4930971,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0,
        }}
        userInterfaceStyle='dark'
        showsUserLocation={true}
      >
        {
          markers.length ? markers.map((marker, index) => (
            <Marker
              key={index}
              title="title"
              coordinate={{
                latitude: marker.latitude + 0.005,
                longitude: marker.longitude + 0.005,
              }}
              onPress={(e) => { e.stopPropagation(); console.log(index) }}
            />
          )) : null
        }
      </MapView>
      <ButtonReport />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});


