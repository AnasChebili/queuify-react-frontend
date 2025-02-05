import { useWebSocketContext } from "@/hooks/use-websocket";
import { ChatMessage } from "./chat-message";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export const ChatMessageList = () => {
  const {
    state: { messages },
  } = useWebSocketContext()!;
  const scrolltoElement = (element: HTMLDivElement) =>
    element?.scrollIntoView(false);
  return (
    <SimpleBar style={{ maxHeight: 400 }}>
      <section className="flex flex-col gap-3 rounded-3xl">
        {messages.map((message) => (
          <ChatMessage key={message.timestamp} message={message} />
        ))}
        <div ref={scrolltoElement}></div>
      </section>
    </SimpleBar>
  );
};
