import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Map from '../../components/Map'
import ButtonReport from '../../components/ButtonReport' 
import StatusBar from '../../components/StatusBar' 

export default function Main() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar />
        <Map />
        <View style={styles.buttonContainer}>
          <ButtonReport style={styles.buttonReport} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    position: 'relative'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    width: 60,
    height: 60
  },
});