import { ChatMessage } from "./chat-message";

export const ChatMessageList = () => {
  return (
    <section className="flex flex-col gap-3 items-end max-h-[400px] overflow-y-scroll">
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </section>
  );
};
