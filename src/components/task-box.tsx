import { Pencil } from "lucide-react";
import { ResponseTaskSchema } from "../schemas/task-schema";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TaskForm } from "./task-form";

type Task = Zod.infer<typeof ResponseTaskSchema>;

export function TaskBox({ task }: { task: Task }) {
  const [hidden, setHidden] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex cursor-pointer"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <section className="flex w-[700px] text-black">
        <section className="basis-1/3  bg-[#BCCCDC] p-5 rounded-s-lg">
          <header className="text-sm text-gray-500 ">Task</header>
          <h1 className="mt-1 text-xl text-ellipsis line-clamp-2">
            {task.title}
          </h1>
          <p className="mt-6 text-sm text-gray-500 lowercase">{task.status}</p>
        </section>

        <section className="basis-2/3 bg p-5 rounded-e-lg bg-[#F8FAFC]">
          <header className="flex justify-between">
            {task.priority && (
              <p className="text-sm text-gray-400">
                {" "}
                Priority: {task.priority}{" "}
              </p>
            )}
            {task.dueDate && (
              <p className="text-sm text-gray-400">
                Due for: {task.dueDate?.toDateString()}
              </p>
            )}
          </header>

          <p className="mt-2 text-md elipsis line-clamp-3">
            {task.description}
          </p>
        </section>
      </section>
      <section className={cn({ hidden: hidden }, "pl-2")}>
        <div
          className="px-2 py-3 rounded-full hover:bg-gray-500"
          onClick={() => setOpen(true)}
        >
          <Pencil className="h-4 text-gray-200" />
        </div>
      </section>
      <TaskForm open={open} setOpen={setOpen} />
    </div>
  );
}
