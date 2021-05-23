import React, { useContext } from 'react';
import { SafeArea, Container } from './styles'

import Map from '../../components/Map'
import SearchPlace from '../../components/SearchPlace'
import ButttonMapVisualization from '../../components/ButttonMapVisualization' 
import ButtonCenterUser from '../../components/ButtonCenterUser' 
import ButtonReport from '../../components/ButtonReport' 
import StatusBar from '../../components/StatusBar' 
import FormReport from '../../components/FormReport' 
import LoaderFullScreen from '../../components/LoaderFullScreen' 
import MarkerInfo from '../../components/MarkerInfo' 

import { WebsocketContext } from '../../contexts/WebsocketContext';
import { MapContext } from '../../contexts/MapContext';

export default function Main() {

  const { socket } = useContext(WebsocketContext);
  const { mapViewCoords, showDraggableMarker, showMarkerInfo, markerInfoData } = useContext(MapContext);
  
  if(!socket?.id) return null;

  return (
    <SafeArea>
      <Container>
        <StatusBar />
        <Map />
        {!showDraggableMarker && !showMarkerInfo ? <ButttonMapVisualization/> : null}
        {!showDraggableMarker && !showMarkerInfo ? <ButtonReport/> : null}
        {!showDraggableMarker && !showMarkerInfo ? <ButtonCenterUser/> : null}
        {!showDraggableMarker && !showMarkerInfo ? <SearchPlace/> : null}
        <FormReport />
        {!mapViewCoords || mapViewCoords?.latitude && !mapViewCoords?.longitude ? <LoaderFullScreen /> : null }
        { showMarkerInfo && markerInfoData?.id ? <MarkerInfo show={showMarkerInfo} data={markerInfoData}/> : null }
      </Container>
    </SafeArea>
  );
}