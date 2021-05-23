import React, { createContext, useEffect, useState } from 'react';

export const MapContext = createContext();

export default function MapProvider({children}) {

  const [userLocation, setUserLocation] = useState(undefined);  
  const [userCoords, setUserCoords]  = useState(undefined);  
  const [mapViewCoords, setMapViewCoords] = useState(undefined);  
  
  const [showDraggableMarker, setShowDraggableMarker] = useState(false);  
  const [draggableMarkerCoords, setDraggableMarkerCoords] = useState(undefined);
  const [draggableMarkerLocation, setDraggableMarkerLocation] = useState(undefined);
  
  const [showMarkerInfo, setShowMarkerInfo] = useState(false);
  const [markerInfoData, setMarkerInfoData] = useState(undefined);

  return (
    <MapContext.Provider value={{
      userLocation, setUserLocation, 
      userCoords, setUserCoords,
      mapViewCoords, setMapViewCoords,
      showDraggableMarker, setShowDraggableMarker,
      draggableMarkerCoords, setDraggableMarkerCoords,
      draggableMarkerLocation, setDraggableMarkerLocation,
      showMarkerInfo, setShowMarkerInfo,
      markerInfoData, setMarkerInfoData,
    }}>
      {children}
    </MapContext.Provider>
  );
}