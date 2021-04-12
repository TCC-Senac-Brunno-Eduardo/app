import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { socket, SocketContext } from './src/services/websocket'
import Main from './src/pages/Main'

export default function App() {

  const theme = {
    colors: {
      primary: 'black',
    }
  }

  useEffect(() => {
    console.log('useEffect => App')

    socket.on("connect", () => {
      console.log('Id Socket:', socket.id);
    });

    socket.on("connect_error", (error) => {
      console.log(error);
    });
  }, [])

  return (
    <>
      <SocketContext.Provider value={{socket: socket}}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </SocketContext.Provider>
    </>
  );
}



