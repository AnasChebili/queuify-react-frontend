import { ChatMessageSchema } from "@/schemas/chat-schema";
import { Dispatch, MutableRefObject } from "react";

type ChatMessage = Zod.infer<typeof ChatMessageSchema>;

type WebSocketAction =
  | { type: "SET_MESSAGES"; payload: ChatMessage }
  | { type: "SET_CONNECTION_STATUS"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };
export const connect = (
  ws: MutableRefObject<WebSocket | null>,
  url: string,
  dispatch: Dispatch<WebSocketAction>
) => {
  ws.current = new WebSocket(url);

  ws.current.onopen = () => {
    dispatch({ type: "SET_CONNECTION_STATUS", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });
  };
  ws.current.onclose = (event) => {
    dispatch({ type: "SET_CONNECTION_STATUS", payload: false });
    dispatch({
      type: "SET_ERROR",
      payload: `Conenction Closed : ${event.reason}`,
    });
  };
  ws.current.onerror = () => {
    dispatch({
      type: "SET_ERROR",
      payload: "Websocket connection error occurred",
    });
  };

  ws.current.onmessage = (event) => {
    const message = ChatMessageSchema.parse(JSON.parse(event.data));
    dispatch({ type: "SET_MESSAGES", payload: message });
  };
};
