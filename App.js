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

  const [socketConnection, setSocketConnection] = useState();

  useEffect(() => {
    console.log('useEffect => App')

    socket.on("connect", () => {
      console.log('connected =>', socket.id)
      setSocketConnection(socket);
    });

    socket.on("connect_error", (error) => {
      console.log(error);
    });
  }, [])

  return (
    <>
      <SocketContext.Provider value={{
        socket: socketConnection
      }}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </SocketContext.Provider>
    </>
  );
}



