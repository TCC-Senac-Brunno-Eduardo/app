import React, { useContext, useState, useEffect } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FormReportContext } from '../../contexts/FormReportContext';
import { MapContext } from '../../contexts/MapContext';

import { insertMarker, reverseGeocoding } from '../../services/api';

import {
  SafeArea, 
  Container, 
  ContainerHeader, 
  Title, 
  ContainerForm, 
  InputGroup, 
  InputErrorMessage,
  TitleInput, 
  DescriptionInput, 
  ContainerAddress,
  ViewAddressContainer,
  EditAddressContainer,
  ContainerButtons,
} from './styles';

export default function FormReport() {

  const { showForm, setShowForm } = useContext(FormReportContext);
  const { coords, location, setShowDraggableMarker, draggableMarkerCoords, draggableMarkerLocation, setDraggableMarkerLocation, setDraggableMarkerCoords } = useContext(MapContext);

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [title, setTitle] = useState(null);
  const [titleError, setTitleError] = useState(null);
  const [description, setDescription] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  
  const findLocation = async () => {
    const newLocation = await reverseGeocoding(draggableMarkerCoords.latitude, draggableMarkerCoords.longitude)
    if(newLocation) {
      setDraggableMarkerLocation(newLocation)
      setButtonDisabled(false);
    } else {
      alert('Erro ao localizar endereço');
      handleCloseForm();
    }
  }
  
  useEffect(() => {
    console.log(showForm, draggableMarkerCoords, !draggableMarkerLocation)
    if(showForm && draggableMarkerCoords && !draggableMarkerLocation) {
      setButtonDisabled(true);
      findLocation();
    }
  }, [showForm, draggableMarkerCoords, draggableMarkerLocation]);

  if(!showForm) return null;
  
  const handleCloseForm = async (e) => {
    setTitle(null);
    setDescription(null);
    setButtonDisabled(false);
    setShowForm(false);
    setDraggableMarkerLocation(undefined);
    setDraggableMarkerCoords(undefined);
  }

  const handleSubmit = async (e) => {
    setButtonDisabled(true);

    if(!title) {
      setTitleError('Preencha o campo de Título');
      setButtonDisabled(false);
      return false;
    }
    setTitleError(null);

    if(!description) {
      setDescriptionError('Preencha o campo de Descrição');
      setButtonDisabled(false);
      return false;
    }
    setDescriptionError(null);

    const latitude = draggableMarkerCoords?.latitude || coords.latitude;
    const longitude = draggableMarkerCoords?.longitude || coords.longitude;
    const city = draggableMarkerLocation?.city || location.city

    const marker = await insertMarker(latitude, longitude, city, title, description);
    if(marker) {
      alert('Denuncia realizada com sucesso.');
    } else {
      alert('Não consiguimos salvar sua denuncia, tente novamente mais tarde.');
    }

    handleCloseForm();
    return false;
  }

  const handleEditAddress = async (e) => {
    setShowForm(false);
    setShowDraggableMarker(true);
    setDraggableMarkerLocation(undefined);
    setDraggableMarkerCoords(undefined);
  }

  return (
    <SafeArea>
      <Container>

        <ContainerHeader>
          <Title>Reporte uma aglomeração!</Title>
        </ContainerHeader>

        <ContainerForm>
          <InputGroup>
            <TitleInput
              placeholder='Título'
              maxLength={50}
              value={title}
              onChangeText={setTitle}
              errorStyle={titleError ? true : false}
            />
            {titleError ? <InputErrorMessage>{titleError}</InputErrorMessage> : null}
          </InputGroup>
          <InputGroup>
            <DescriptionInput
              placeholder='Descrição'
              multiline
              maxLength={200}
              value={description}
              onChangeText={setDescription}
              errorStyle={descriptionError ? true : false}
            />
            {descriptionError ? <InputErrorMessage>{descriptionError}</InputErrorMessage> : null}
          </InputGroup>
        </ContainerForm>

        <ContainerAddress>
          <ViewAddressContainer>
            <View style={{ flex: 0.1, padding: 4 }}>
              <MaterialCommunityIcons
                name="map-marker"
                size={28} color="#616161"
                type="solid"
                titleProps={{ accessibilityHint: 'Ícone de endereço', accessibilityLabel: "Ícone de endereço", accessible: "true" }}
              />
            </View>

            <View style={{ flex: 0.9, padding: 4 }}>
              <Text selectable style={{ textAlign: 'center' }}>
                {
                  !draggableMarkerCoords && location ?
                    location.full_address
                  : 
                  draggableMarkerCoords && !draggableMarkerLocation ?
                    'Carregando...'
                  : 
                  draggableMarkerLocation?.full_address
                }
                
              </Text>
            </View>
          </ViewAddressContainer>

          <EditAddressContainer>
            <TouchableOpacity
              onPress={handleEditAddress}
            >
              <MaterialCommunityIcons
                name="pencil-box-multiple"
                size={32} color="#616161"
                type="solid"
                titleProps={{ accessibilityHint: 'Editar endereço', accessibilityLabel: "Editar endereço", accessible: "true" }}
              />
            </TouchableOpacity>
          </EditAddressContainer>
        </ContainerAddress>

        <ContainerButtons>
          <Button color='#FF0000' accessibilityLabel="Cancelar" title="Cancelar" onPress={handleCloseForm} />
          <Button color='#00a830' disabled={isButtonDisabled} accessibilityLabel="Reportar" title="Reportar" onPress={handleSubmit} />
        </ContainerButtons>

      </Container>
    </SafeArea>
  );
}