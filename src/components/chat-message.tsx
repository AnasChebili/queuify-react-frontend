import { ChatMessage as ChatMessageType } from "@/reducers/chat-websocket";

export const ChatMessage = ({ message }: { message: ChatMessageType }) => {
  if (message.type === "join") return <JoinMessage message={message} />;
  return (
    <section className="p-2 bg-white rounded-xl w-fit">
      {message?.content ?? "Generate Summary"}
    </section>
  );
};

const JoinMessage = ({ message }: { message: ChatMessageType }) => {
  return (
    <section className="flex items-center w-full gap-1">
      <div className="flex-grow h-[1px] bg-gray-500"></div>
      <p className="text-xs text-gray-500">{message.content}</p>
      <div className="flex-grow h-[1px] bg-gray-500"></div>
    </section>
  );
};
