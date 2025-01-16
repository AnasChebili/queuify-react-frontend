import { ChatLayout } from "@/components/chat-layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/chat/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center w-svw h-svh">
      <ChatLayout />
    </div>
  );
}
