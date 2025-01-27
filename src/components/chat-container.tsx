import { useState } from "react";
import { ChatMessageList } from "./chat-message-list";
import { useWebSocketContext } from "@/hooks/use-websocket";
import { ChatMessage } from "@/reducers/chat-websocket";



export const ChatContainer = () => {
  return (
    <section className=" gap-5 text-black rounded-3xl h-[500px] w-[500px] bg-[#BCCCDC] p-3 flex flex-col justify-end ">
      <ChatMessageList />
      <ChatBar />
    </section>
    
  );
};

const ChatBar = () => {
  const { ws, sendMessage, dispatch } = useWebSocketContext()!;

  const [message, setMessage] = useState<ChatMessage>();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (message?.content?.trim()) {
          console.log(message);
          sendMessage(ws, dispatch, message);
        }
      }}
      className="w-full p-4 bg-white rounded-2xl"
    >
      <input
        type="text"
        className="w-full border-none outline-none"
        placeholder="Chat"
        value={message?.content ?? ""}
        onChange={(e) =>
          setMessage({
            type: "message",
            username: "randomUser",
            timestamp: new Date().toISOString(),
            content: e.target.value,
          })
        }
      />
    </form>
  );
};
