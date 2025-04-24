import { Pencil, Trash2 } from "lucide-react";
import { ResponseTaskSchema } from "../schemas/task-schema";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TaskDialog } from "./task-dialog";
import { useDeleteTask } from "@/hooks/use-tasks";
import { useQueryClient } from "@tanstack/react-query";

type Task = Zod.infer<typeof ResponseTaskSchema>;

const mapStatus = new Map([
  ["PENDING", "Pending"],
  ["IN_PROGRESS", "In progress"],
  ["COMPLETED", "Completed"],
]);

export function TaskBox({ task }: { task: Task }) {
  const [hidden, setHidden] = useState(true);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const deleteTaskMutation = useDeleteTask({
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });
  return (
    <div
      className="flex cursor-pointer "
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      <section className="flex text-black">
        <section className="basis-1/3  bg-[#BCCCDC] p-5 rounded-s-lg">
          <header className="text-sm text-gray-500 ">Task</header>
          <h1
            style={{
              wordBreak: "break-word", // Ensures long words break onto the next line
            }}
            className="mt-1 text-xl h-14 line-clamp-2 text-ellipsis "
          >
            {task.title}
          </h1>
          <p className="mt-6 text-sm text-gray-500 ">
            {mapStatus.get(task.status)}
          </p>
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

          <p
            style={{
              wordBreak: "break-word", // Ensures long words break onto the next line
            }}
            className="mt-2 text-md elipsis line-clamp-3"
          >
            {task.description}
          </p>
        </section>
      </section>
      <section className="flex flex-col ">
        <section className={cn({ hidden: hidden }, "pl-2")}>
          <div
            className="px-2 py-3 rounded-full hover:bg-gray-500"
            onClick={() => setOpen(true)}
          >
            <Pencil className="h-4 text-gray-200" />
          </div>
        </section>

        <section className={cn({ hidden: hidden }, "pl-2")}>
          <div
            onClick={() => deleteTaskMutation.mutate({ id: task.id })}
            className="px-2 py-3 text-red-600 rounded-full hover:bg-gray-500 hover:text-red-400"
          >
            <Trash2 className="h-4 " />
          </div>
        </section>
      </section>
      <TaskDialog open={open} setOpen={setOpen} task={task} />
    </div>
  );
}
