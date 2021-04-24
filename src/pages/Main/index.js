import React, { useContext } from 'react';
import { SafeArea, Container } from './styles'

import Map from '../../components/Map'
import SearchPlace from '../../components/SearchPlace'
import ButtonCenterUser from '../../components/ButtonCenterUser' 
import ButtonReport from '../../components/ButtonReport' 
import StatusBar from '../../components/StatusBar' 
import FormReport from '../../components/FormReport' 
import LoaderFullScreen from '../../components/LoaderFullScreen' 

import { WebsocketContext } from '../../contexts/WebsocketContext';
import { MapContext } from '../../contexts/MapContext';

export default function Main() {

  const { socket } = useContext(WebsocketContext);
  const { mapViewCoords, showDraggableMarker } = useContext(MapContext);

  if(!socket?.id) return null;

  return (
    <SafeArea>
      <Container>
        <StatusBar />
        <Map />
        {!showDraggableMarker ? <ButtonReport/> : null}
        {!showDraggableMarker ? <ButtonCenterUser/> : null}
        {!showDraggableMarker ? <SearchPlace/> : null}
        <FormReport />
        {!mapViewCoords || mapViewCoords?.latitude && !mapViewCoords?.longitude ? <LoaderFullScreen /> : null }
      </Container>
    </SafeArea>
  );
}