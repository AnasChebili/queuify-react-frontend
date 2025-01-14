import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { TaskForm } from "./task-form";
import { ResponseTaskSchema } from "@/schemas/task-schema";

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
        <TaskForm task={task} />
      </DialogContent>
    </Dialog>
  );
};
