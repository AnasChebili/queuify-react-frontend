import { Fragment } from "react/jsx-runtime";
import { TasksPagesSchema } from "../schemas/task-schema";
import { TaskBox } from "./task-box";
import { TaskAdd } from "./task-add";
import { TaskDialog } from "./task-dialog";
import { useState } from "react";

type TasksPages = Zod.infer<typeof TasksPagesSchema>;

export function TasksLayout({ tasksPages }: { tasksPages: TasksPages }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="flex flex-col gap-4">
        <TaskAdd onClick={setOpen} />
        {tasksPages.map((tasks, i) => (
          <Fragment key={i}>
            {tasks.map((task) => (
              <TaskBox key={task.id} task={task} />
            ))}
          </Fragment>
        ))}
      </section>
      <TaskDialog open={open} setOpen={setOpen} />
    </>
  );
}
