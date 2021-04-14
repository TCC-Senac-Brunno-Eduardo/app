import React, { useContext } from 'react';
import { SafeArea, Container } from './styles'

import Map from '../../components/Map'
import ButtonReport from '../../components/ButtonReport' 
import StatusBar from '../../components/StatusBar' 
import FormReport from '../../components/FormReport' 

import { WebsocketContext } from '../../contexts/WebsocketContext';

export default function Main() {

  const { socket } = useContext(WebsocketContext);

  if(!socket?.id) return null;

  console.log(socket.id)
  
  return (
    <SafeArea>
      <Container>
        <StatusBar />
        <Map />
        <ButtonReport/>
        <FormReport />
      </Container>
    </SafeArea>
  );
}