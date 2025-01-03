import { createFileRoute } from "@tanstack/react-router";
import { useGetTasks } from "../hooks/use-tasks";
import { TasksLayout } from "../components/tasks-layout";
import { useState } from "react";
import { calculateInitialLimit } from "../utils/infinite-scroll";
import { useIntersectionObserver } from "../hooks/infinite-scroll";
import { Counter } from "../components/counter";

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
    <div className="m-4 flex justify-between">
      <section>
        <TasksLayout tasksPages={tasksPages} />
        <div ref={loadMoreRef}>{hasNextPage && <LoadingIndicator />}</div>
      </section>
      <section>
        <Counter />
      </section>
    </div>
  );
}

function LoadingIndicator() {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent" />
    </div>
  );
}
