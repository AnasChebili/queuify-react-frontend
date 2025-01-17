import { WebSocketContext } from "@/context/websocket-context";
import { useContext } from "react";

export const useWebSocketContext = () => {
  return useContext(WebSocketContext);
};
