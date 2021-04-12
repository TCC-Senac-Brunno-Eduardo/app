import React, { createContext } from "react";
import io from "socket.io-client";
import { SOCKET_URL } from "../config";

export const socket = io.connect(SOCKET_URL, {
  transports: ['websocket'], 
  upgrade: false
});

export const SocketContext = createContext();