import { sendMessage } from "@/lib/websocket";
import { WebSocketAction, WsState } from "@/reducers/chat-websocket";
import { createContext, Dispatch } from "react";

export const WebSocketContext = createContext<{
  state: WsState;
  sendMessage: typeof sendMessage;
  dispatch: Dispatch<WebSocketAction>;
} | null>(null);
