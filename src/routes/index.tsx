import { createFileRoute } from "@tanstack/react-router";
import { useGetTasks } from "../hooks/use-tasks";
import { TasksLayout } from "../components/tasks-layout";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: tasks, isLoading, error } = useGetTasks();
  return (
    <>
      {isLoading ? (
        <div>content is loading</div>
      ) : error || !tasks ? (
        <div>{error?.message}</div>
      ) : (
        <div className="m-4">
          <TasksLayout tasks={tasks} />
        </div>
      )}
    </>
  );
}
