import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { TaskForm } from "./task-form";

export const TaskDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <DialogContent className="bg-[#BCCCDC]">
        <TaskForm />
      </DialogContent>
    </Dialog>
  );
};
