import React, { useContext } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Map from '../../components/Map'
import ButtonReport from '../../components/ButtonReport' 
import StatusBar from '../../components/StatusBar' 
import FormReport from '../../components/FormReport' 

import { SocketContext } from '../../services/websocket';

export default function Main() {

  const { socket } = useContext(SocketContext);

  const showForm = true

  if(!socket?.id) return null

  console.log(socket.id)
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar />
        <Map />
        <View style={styles.buttonContainer}>
          <ButtonReport/>
        </View>
        {showForm ? 
          <FormReport />
        : null}
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