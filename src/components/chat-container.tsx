import { useState } from "react";
import { ChatMessageList } from "./chat-message-list";
import { useWebSocketContext } from "@/hooks/websocket";

export const ChatContainer = () => {
  return (
    <section className=" gap-5 text-black rounded-3xl h-[500px] w-[500px] bg-[#BCCCDC] p-3 flex flex-col justify-end ">
      <ChatMessageList />
      <ChatBar />
    </section>
  );
};

const ChatBar = () => {
  const { state, sendMessage, dispatch } = useWebSocketContext()!;

  const [message, setMessage] = useState("");
  return (
    <form
      onSubmit={sendMessage(state, dispatch, message)}
      className="w-full p-4 bg-white rounded-2xl"
    >
      <input
        type="text"
        className="w-full border-none outline-none"
        placeholder="Chat"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};
