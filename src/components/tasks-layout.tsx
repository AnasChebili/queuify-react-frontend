import { Fragment } from "react/jsx-runtime";
import { TasksPagesSchema } from "../schemas/task-schema";
import { TaskBox } from "./task-box";

type TasksPages = Zod.infer<typeof TasksPagesSchema>;

export function TasksLayout({ tasksPages }: { tasksPages: TasksPages }) {
  return (
    <section className="flex flex-col gap-4">
      {tasksPages.map((tasks, i) => (
        <Fragment key={i}>
          {tasks.map((task) => (
            <TaskBox key={task.id} task={task} />
          ))}
        </Fragment>
      ))}
    </section>
  );
}
