import { useWebSocketContext } from "@/hooks/use-websocket";
import { ChatMessage } from "./chat-message";

export const ChatMessageList = () => {
  const {
    state: { messages },
  } = useWebSocketContext()!;
  return (
    <section className="flex flex-col gap-3 items-end max-h-[400px] overflow-y-scroll ">
      {messages.map((message) => (
        <ChatMessage key={message.timestamp} message={message} />
      ))}
    </section>
  );
};
