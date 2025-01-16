import { createFileRoute } from "@tanstack/react-router";
import { useGetTasks } from "../hooks/use-tasks";
import { TasksLayout } from "../components/tasks-layout";
import { useState } from "react";
import { calculateInitialLimit } from "../utils/infinite-scroll";
import { useIntersectionObserver } from "../hooks/infinite-scroll";
import { LogOut } from "@/components/logout";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [limit] = useState(() => calculateInitialLimit());
  const {
    data: tasksPages,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetTasks({ limit });

  const loadMoreRef = useIntersectionObserver(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, hasNextPage && !isFetchingNextPage);

  if (isPending) return <LoadingIndicator />;

  if (error) return <div>{error?.message}</div>;

  return (
    <div className="flex justify-between m-4">
      <section>
        <TasksLayout tasksPages={tasksPages} />
        <div ref={loadMoreRef}>{hasNextPage && <LoadingIndicator />}</div>
      </section>
      <LogOut />
    </div>
  );
}

function LoadingIndicator() {
  return (
    <div className="flex justify-center w-full p-4">
      <div className="w-8 h-8 border-4 border-blue-500 rounded-full animate-spin border-t-transparent" />
    </div>
  );
}
