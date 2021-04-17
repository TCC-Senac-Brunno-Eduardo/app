import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'react-native-elements';
import MapProvider from './src/contexts/MapContext';
import FormReportProvider from './src/contexts/FormReportContext';
import WebsocketProvider from './src/contexts/WebsocketContext';
import Main from './src/pages/Main'

export default function App() {

  const theme = {
    colors: {
      primary: 'black',
    }
  }

  useEffect(() => {
    console.log('useEffect => App')
  }, [])

  return (
    <>
      <WebsocketProvider>
        <MapProvider>
          <FormReportProvider>
            <ThemeProvider theme={theme}>
              <Main />
            </ThemeProvider>
          </FormReportProvider>
        </MapProvider>
      </WebsocketProvider>
    </>
  );
}



