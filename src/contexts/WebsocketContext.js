import React, { createContext, useEffect, useState } from 'react';
import io from "socket.io-client";
import { SOCKET_URL } from "../config";


export const WebsocketContext = createContext();

export default function WebsocketProvider({children}) {

  const [socket, setSocket] = useState();
  
  useEffect(() => {
    const socket = io.connect(SOCKET_URL, {
      transports: ['websocket'], 
      upgrade: false
    });

    socket.on("connect", () => {
      setSocket(socket);
    });

    socket.on("connect_error", (error) => {
      console.log(error);
    });

  }, [])
  
  return (
    <WebsocketContext.Provider value={{socket}}>
      {children}
    </WebsocketContext.Provider>
  );
}