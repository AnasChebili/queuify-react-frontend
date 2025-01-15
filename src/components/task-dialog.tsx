import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { TaskForm } from "./task-form";
import { ResponseTaskSchema } from "@/schemas/task-schema";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

type Task = Zod.infer<typeof ResponseTaskSchema>;

export const TaskDialog = ({
  open,
  setOpen,
  task,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  task?: Task;
}) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <DialogContent className="bg-[#BCCCDC]">
        <DialogTitle>
          <header className="flex flex-col gap-1 ">
            <h1 className="text-lg text-black">Edit Task</h1>
            <DialogDescription className="text-xs text-gray-600">
              Modify and edit the task's information
            </DialogDescription>
          </header>
        </DialogTitle>
        <TaskForm task={task} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
