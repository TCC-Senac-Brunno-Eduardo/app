import React, { useRef, useContext } from 'react';
import {
  Container,
  ContainerInput,
  ContainerButton,
  ClearButton
} from './styles';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env';
import { MapContext } from '../../contexts/MapContext';

export default function SearchPlace() {
  const refInput = useRef();

  const { userCoords, setMapViewCoords } = useContext(MapContext);

  const handlePlace = (data, details) => {
    setMapViewCoords({latitude: details.geometry.location.lat, longitude: details.geometry.location.lng, latitudeDelta: 0.01, longitudeDelta: 0});
    refInput.current?.blur();
  }

  const handleClear = (e) => {
    refInput.current?.clear();
    refInput.current?.setAddressText("");
    refInput.current?.blur();
  }

  const handleRenderRightButton = (e) => {
    return(
      <ContainerButton>
        <ClearButton onPress={handleClear}>
          <MaterialCommunityIcons name="close" size={32} color="black" type="solid" titleProps={{accessibilityHint: 'Limpar busca', accessibilityLabel:"Limpar busca", accessible:"true" }}/>
        </ClearButton>
      </ContainerButton>
    )
  }
  
  return (
    <Container>
      <ContainerInput>
        <GooglePlacesAutocomplete
        styles={{ row: { paddingLeft: 0 }}}
        ref={refInput}
        placeholder='Procure algum local...'
        enablePoweredByContainer={false}
        fetchDetails={true}
        onPress={(data, details) => handlePlace(data, details)}
        query={{
          key: GOOGLE_API_KEY,
          language: 'pt-BR',
          location: `${userCoords?.latitude},${userCoords?.longitude}`, 
          radius: 500
        }}
        renderRightButton={handleRenderRightButton}
      />
      </ContainerInput>
    </Container>
  )
}

