import { ChatContainer } from "./chat-container";
import { WebSocketProvider } from "./websocket-provider";

export const ChatLayout = () => {
  return (
    <WebSocketProvider
      url={`${process.env.VITE_BACKEND_WEBSOCKET}/websocket/chat`}
    >
      <ChatContainer></ChatContainer>
    </WebSocketProvider>
  );
};
