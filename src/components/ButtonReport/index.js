import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default function ButtonReport() {
  return (
    <Button title="Reportar" accessibilityLabel="Reportar" onPress={console.log('Reportar')}>Reportar</Button>
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