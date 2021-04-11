import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ButtonReport() {
  return (
    <Button
      title=""
      icon={
        <MaterialCommunityIcons name="alert" size={32} color="white" type="solid" titleProps={{accessibilityHint: 'Reportar', accessibilityLabel:"Reportar", accessible:"true" }}/>
      }
      onPress={(e) => console.log('Reportar')}
      buttonStyle={{width: '100%', height: '100%', padding: 8, borderRadius: 100}}
    />
  );
}