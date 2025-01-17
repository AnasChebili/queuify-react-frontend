import { sendMessage } from "@/lib/websocket";
import { WebSocketAction, WsState } from "@/reducers/chat-websocket";
import { createContext, Dispatch, MutableRefObject } from "react";

export const WebSocketContext = createContext<{
  ws: MutableRefObject<WebSocket | null>;
  state: WsState;
  sendMessage: typeof sendMessage;
  dispatch: Dispatch<WebSocketAction>;
} | null>(null);
