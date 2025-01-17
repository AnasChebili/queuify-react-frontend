import { ChatContainer } from "./chat-container";
import { WebSocketProvider } from "./websocket-provider";

export const ChatLayout = () => {
  return (
    <WebSocketProvider url="ws://127.0.0.1:3000/websocket/chat">
      <ChatContainer></ChatContainer>
    </WebSocketProvider>
  );
};
