import { ChatBar } from "./chat-bar";
import { ChatMessageList } from "./chat-message-list";

export const ChatContainer = () => {
  return (
    <section className=" gap-5 text-black rounded-3xl h-[700px] w-[700px] bg-[#BCCCDC] p-3 flex flex-col justify-end ">
      <ChatMessageList />
      <ChatBar />
    </section>
  );
};
