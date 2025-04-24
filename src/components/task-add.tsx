import { Plus } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export const TaskAdd = ({
  onClick,
}: {
  onClick: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <section className=" cursor-pointer h-[164px] border-dashed border-white rounded-lg border-2 flex justify-center items-center">
      <div
        onClick={() => onClick(true)}
        className="flex flex-col items-center justify-center p-4 transition hover:-translate-y-[1px] hover:bg-opacity-10 items hover:bg-gray-500 rounded-xl"
      >
        <Plus className="w-8 h-8" />
        <h1 className="text-xl">Add Task</h1>
      </div>
    </section>
  );
};
