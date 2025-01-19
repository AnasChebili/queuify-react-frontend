import { WebSocketContext } from "@/context/websocket-context";
import { connect, sendMessage } from "@/lib/websocket";
import { wsReducer } from "@/reducers/chat-websocket";
import { ReactNode } from "@tanstack/react-router";
import { useEffect, useReducer, useRef } from "react";

export const WebSocketProvider = ({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) => {
  const [state, dispatch] = useReducer(wsReducer, {
    messages: [],
    isConnected: false,
    error: null,
  });

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (ws.current == null || ws.current.readyState === WebSocket.CLOSED)
      connect(ws, dispatch, url);

    const temporaryWs = ws.current;
    return () => {
      if (temporaryWs?.readyState === WebSocket.OPEN) temporaryWs.close();
    };
  }, [url]);

  return (
    <WebSocketContext.Provider value={{ ws, state, sendMessage, dispatch }}>
      {children}
    </WebSocketContext.Provider>
  );
};
