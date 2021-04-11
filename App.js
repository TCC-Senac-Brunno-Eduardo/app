import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Main from './src/pages/Main'

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#00D6AD" />
      <Main />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

