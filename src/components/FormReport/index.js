import React, { useContext } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FormReportContext } from '../../contexts/FormReportContext';

import {
  SafeArea, 
  Container, 
  ContainerHeader, 
  Title, 
  ContainerForm, 
  InputGroup, 
  TitleInput, 
  DescriptionInput, 
  ContainerAddress,
  ViewAddressContainer,
  EditAddressContainer,
  ContainerButtons
} from './styles';

export default function FormReport() {

  const { show, setShow } = useContext(FormReportContext);

  if(!show) return null;

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
              errorStyle={{ color: 'red' }}
              errorMessage=''
              maxLength={50}
            />
          </InputGroup>
          <InputGroup>
            <DescriptionInput
              placeholder='Descrição'
              errorStyle={{ color: 'red' }}
              errorMessage=''
              multiline
              maxLength={200}
            />
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
              <Text selectable style={{ textAlign: 'center' }}>Rua DASDADAS DSX, 147 - Passo D' Areia - Porto Alegre - xxxxxxxxxxxxxxxxxx</Text>
            </View>
          </ViewAddressContainer>

          <EditAddressContainer>
            <TouchableOpacity
              onPress={(e) => console.log('Editar Endereço')}
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
          <Button color={'#FF0000'} accessibilityLabel="Cancelar" title="Cancelar" onPress={(e) => setShow(!show)} />
          <Button color={'#00a830'} accessibilityLabel="Reportar" title="Reportar" onPress={(e) => console.log('Reportar')} />
        </ContainerButtons>

      </Container>
    </SafeArea>
  );
}