import { createFileRoute } from "@tanstack/react-router";
import { useGetTasks } from "../hooks/use-tasks";

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
        <div>
          {tasks.map((task) => (
            <ul key={task.id}>
              <li>{task.title}</li>
              <li>{task.status}</li>
              <li>{task.description}</li>
              <li>{task.priority}</li>
              <li>{task.dueDate?.toDateString()}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}
