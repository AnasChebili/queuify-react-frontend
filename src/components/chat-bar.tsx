import { useWebSocketContext } from "@/hooks/use-websocket";
import { ChatMessage } from "@/reducers/chat-websocket";
import { useState } from "react";

export const ChatBar = () => {
  const { ws, sendMessage, dispatch } = useWebSocketContext()!;

  const [message, setMessage] = useState<ChatMessage>();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submit event fired", new Date().getTime());
        if (message?.content?.trim()) {
          console.log("aaa", message);
          sendMessage(ws, dispatch, message);
          setMessage(undefined);
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
