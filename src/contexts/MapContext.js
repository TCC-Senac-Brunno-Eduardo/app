import React, { createContext, useEffect, useState } from 'react';

export const MapContext = createContext();

export default function MapProvider({children}) {

  const [location, setLocation] = useState(undefined);  
  const [coords, setCoords] = useState(undefined);  
  const [currentUserCoords, setCurrentUserCoords] = useState(undefined);

  const [showDraggableMarker, setShowDraggableMarker] = useState(false);  
  const [draggableMarkerCoords, setDraggableMarkerCoords] = useState(undefined);
  const [draggableMarkerLocation, setDraggableMarkerLocation] = useState(undefined);
    
  return (
    <MapContext.Provider value={{
      location, setLocation, 
      coords, setCoords,
      currentUserCoords, setCurrentUserCoords,
      showDraggableMarker, setShowDraggableMarker,
      draggableMarkerCoords, setDraggableMarkerCoords,
      draggableMarkerLocation, setDraggableMarkerLocation,
    }}>
      {children}
    </MapContext.Provider>
  );
}