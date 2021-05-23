import React, { useContext, useEffect } from 'react';
import { SafeArea, Container, Text, Titulo, BotaoAcao, TextoBotao } from './styles'
import * as Location from 'expo-location';

export default function Permission({ navigation }) {

  const handlePermission = async () => {
    if(await Location.hasServicesEnabledAsync()) {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('O aplicativo não teve acesso ao GPS.');
        return false;
      }
      await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
      return navigation.navigate('Main');
    }
  }

  return (
    <SafeArea>
      <Container>
        <Titulo>Disponibilize sua localização</Titulo>
        <Text>Para uma melhor experiência, compartilhe sua localização durante o uso.</Text>
        <BotaoAcao onPress={handlePermission}>
          <TextoBotao>Disponibilizar</TextoBotao>
        </BotaoAcao>
      </Container>
    </SafeArea>
  );
}