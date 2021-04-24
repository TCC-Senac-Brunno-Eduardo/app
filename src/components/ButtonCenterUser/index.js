import React, { useContext } from 'react';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';

import { MapContext } from '../../contexts/MapContext';

export default function ButtonCenterUser() {

  const { userCoords, setMapViewCoords } = useContext(MapContext);

  const handleCenter = () => setMapViewCoords(userCoords);

  return (
    <Container>
      <Button
        icon={
          <MaterialCommunityIcons name="crosshairs-gps" size={26} color="white" type="solid" titleProps={{accessibilityHint: 'Reportar', accessibilityLabel:"Reportar", accessible:"true" }}/>
        }
        onPress={handleCenter}
        buttonStyle={{width: '100%', height: '100%', padding: 8, borderRadius: 5}}
      />
    </Container>
    
  );
}