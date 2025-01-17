import { ChatMessageSchema } from "@/schemas/chat-schema";

export type ChatMessage = Zod.infer<typeof ChatMessageSchema>;

export type WsState = {
  messages: ChatMessage[];
  isConnected: boolean;
  error: string | null;
};

type WebSocketAction =
  | { type: "SET_MESSAGES"; payload: ChatMessage }
  | { type: "SET_CONNECTION_STATUS"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

export const wsReducer = (state: WsState, action: WebSocketAction): WsState => {
  switch (action.type) {
    case "SET_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case "SET_CONNECTION_STATUS":
      return { ...state, isConnected: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
