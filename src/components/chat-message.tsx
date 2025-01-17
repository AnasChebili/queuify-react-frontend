import { ChatMessage as ChatMessageType } from "@/reducers/chat-websocket";

export const ChatMessage = ({ message }: { message?: ChatMessageType }) => {
  return (
    <section className="p-2 bg-white rounded-xl w-fit">
      {message?.content ?? "Generate Summary"}
    </section>
  );
};
