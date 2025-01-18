import { ChatMessageSchema } from "@/schemas/chat-schema";
import { Dispatch, MutableRefObject } from "react";

type ChatMessage = Zod.infer<typeof ChatMessageSchema>;

type WebSocketAction =
  | { type: "SET_MESSAGES"; payload: ChatMessage }
  | { type: "SET_CONNECTION_STATUS"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

export const connect = async (
  ws: MutableRefObject<WebSocket | null>,
  dispatch: Dispatch<WebSocketAction>,
  url: string
) => {
  ws.current! = await new Promise((resolve, reject) => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      resolve(ws);
    };

    ws.onerror = () => {
      reject(new Error("WebSocket connection failed"));
    };
  });

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
    console.log(event);

    const message = ChatMessageSchema.parse(JSON.parse(event.data));
    dispatch({ type: "SET_MESSAGES", payload: message });
  };
};

export const sendMessage = (
  ws: MutableRefObject<WebSocket | null>,
  dispatch: Dispatch<WebSocketAction>,
  message: ChatMessage
) => {
  if (ws.current && ws.current.readyState === WebSocket.OPEN) {
    try {
      ws.current.send(JSON.stringify(message));
    } catch {
      dispatch({ type: "SET_ERROR", payload: "Failed to send message" });
    }
  } else {
    dispatch({ type: "SET_ERROR", payload: "WebSocket is not connected" });
  }
};
