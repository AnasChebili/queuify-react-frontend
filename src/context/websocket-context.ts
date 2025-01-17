import { sendMessage } from "@/lib/websocket";
import { WsState } from "@/reducers/chat-websocket";
import { createContext } from "react";

export const WebSocketContext = createContext<{
  state: WsState;
  sendMessage: typeof sendMessage;
} | null>(null);
