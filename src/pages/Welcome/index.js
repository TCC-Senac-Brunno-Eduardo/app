import React, { useContext, useEffect } from 'react';
import { SafeArea, Container } from './styles'
import { Text, View, Button } from 'react-native'

export default function Welcome({ navigation }) {
  return (
    <SafeArea>
      <Container>
        <Text>Bem-vindo ao Onde Não Ir!</Text>
        <Text>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Quem num gosta di mé, boa gentis num é. Si num tem leite então bota uma pinga aí cumpadi! Atirei o pau no gatis, per gatis num morreus.</Text>
        <Text>Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. A ordem dos tratores não altera o pão duris.</Text>
        <Button title='Avançar' />
      </Container>
      <Container>
        <Text>Pedi permissao aqui</Text>
        <Text>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Quem num gosta di mé, boa gentis num é. Si num tem leite então bota uma pinga aí cumpadi! Atirei o pau no gatis, per gatis num morreus.</Text>
        <Button title='Clique aqui' />
      </Container>
      <Container>
        <Text>Aproveite!</Text>
        <Text>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Quem num gosta di mé, boa gentis num é. Si num tem leite então bota uma pinga aí cumpadi! Atirei o pau no gatis, per gatis num morreus.</Text>
        <Button title='Comecar' onPress={() => navigation.navigate('Main')} />
      </Container>
    </SafeArea>
  );
}