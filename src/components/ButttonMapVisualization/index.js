import React, { useContext } from 'react';
import { Button } from 'react-native-elements';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';

import { MapContext } from '../../contexts/MapContext';

export default function ButttonMapVisualization() {

  const { showHeatMap, setShowHeatMap } = useContext(MapContext);

  const handleVisualization = () => {
    setShowHeatMap(!showHeatMap)
  };

  return (
    <Container>
      <Button
        icon={
          <MaterialCommunityIcons name="map-search" size={26} color="white" type="solid" titleProps={{accessibilityHint: 'Visualização', accessibilityLabel:"Visualização", accessible:"true" }}/>
        }
        onPress={handleVisualization}
        buttonStyle={{width: '100%', height: '100%', padding: 8, borderRadius: 5}}
      />
    </Container>
    
  );
}