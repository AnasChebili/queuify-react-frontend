import { createFileRoute } from "@tanstack/react-router";
import { useGetTasks } from "../hooks/use-tasks";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: tasks, isLoading } = useGetTasks();
  return <div>Hello "/"! {isLoading ? "a" : JSON.stringify(tasks)}</div>;
}
