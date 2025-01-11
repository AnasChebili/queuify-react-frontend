import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

export const TaskForm = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <DialogContent className="bg-[#BCCCDC]">hi</DialogContent>
    </Dialog>
  );
};
