import { ChatMessage as ChatMessageType } from "@/reducers/chat-websocket";

export const ChatMessage = ({ message }: { message: ChatMessageType }) => {
  if (message.type === "join") return <JoinMessage message={message} />;
  if (message.type == "message" && message.username === "randomUser")
    return <OwnMessage message={message} />;
  if (message.type === "message" && message.username !== "randomUser")
    return <OtherMessage message={message} />;
  if (message.type === "leave") return <JoinMessage message={message} />;
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

const OwnMessage = ({ message }: { message: ChatMessageType }) => {
  return (
    <section className="self-end p-2 bg-blue-400 rounded-xl w-fit">
      {message.content}
    </section>
  );
};

const OtherMessage = ({ message }: { message: ChatMessageType }) => {
  return (
    <section className="self-start p-2 bg-white rounded-xl w-fit">
      {message.content}
    </section>
  );
};
