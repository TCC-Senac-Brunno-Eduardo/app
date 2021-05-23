import React, { useContext, useEffect } from 'react';
import { SafeArea, Container, Text, Titulo, BotaoAcao, TextoBotao } from './styles'

export default function Welcome({ navigation }) {

  return (
    <SafeArea>
      <Container >
        <Titulo>Bem-vindo ao Onde Não Ir!</Titulo>
        <Text>O aplicativo tem foco em apresentar pontos de aglomeração na sua cidade</Text>
        <Text style={{ fontWeight: '700'}}>Contribua e comaprtilhe</Text>
        <BotaoAcao onPress={() => navigation.navigate('Permission')}>
          <TextoBotao>Avançar</TextoBotao>
        </BotaoAcao>
      </Container>
    </SafeArea>
  );
}