import { ResponseTasksSchema } from "../schemas/task-schema";
import { TaskBox } from "./task-box";

type Tasks = Zod.infer<typeof ResponseTasksSchema>;

export function TasksLayout({ tasks }: { tasks: Tasks }) {
  return (
    <section className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskBox key={task.id} task={task} />
      ))}
    </section>
  );
}
