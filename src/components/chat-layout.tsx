import { ChatContainer } from "./chat-container";
import { WebSocketProvider } from "./websocket-provider";

export const ChatLayout = () => {
  return (
    <WebSocketProvider
      url={`${import.meta.env.VITE_BACKEND_WEBSOCKET}/websocket/chat`}
    >
      <ChatContainer></ChatContainer>
    </WebSocketProvider>
  );
};
