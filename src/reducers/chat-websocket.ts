import { ChatMessageSchema } from "@/schemas/chat-schema";

type ChatMessage = Zod.infer<typeof ChatMessageSchema>;

type WsState = {
  messages: ChatMessage[];
  isConnected: boolean;
  error: Error | null;
};

type Action = {
  type: "SET_MESSAGES" | "SET_CONNECTION_STATUS" | "SET_ERROR";
  payload: ChatMessage | boolean | Error;
};

export const wsReducer = ({
  state,
  action,
}: {
  state: WsState;
  action: Action;
}): WsState => {
  switch (action.type) {
    case "SET_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, ChatMessageSchema.parse(action.payload)],
      };
    case "SET_CONNECTION_STATUS":
      return { ...state, isConnected: action.payload as boolean };
    case "SET_ERROR":
      return { ...state, error: action.payload as Error };
    default:
      return state;
  }
};
