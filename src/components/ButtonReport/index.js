import React from 'react';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';


export default function ButtonReport() {
  return (
    <Container>
      <Button
        icon={
          <MaterialCommunityIcons name="alert" size={32} color="white" type="solid" titleProps={{accessibilityHint: 'Reportar', accessibilityLabel:"Reportar", accessible:"true" }}/>
        }
        onPress={(e) => console.log('Reportar')}
        buttonStyle={{width: '100%', height: '100%', padding: 8, borderRadius: 100}}
      />
    </Container>
    
  );
}