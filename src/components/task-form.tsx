import { CreateTaskSchema, ResponseTaskSchema } from "@/schemas/task-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePickerDemo } from "./date-picker";
import { cn } from "@/lib/utils";

type Task = Zod.infer<typeof ResponseTaskSchema>;

export const TaskForm = ({ task }: { task?: Task }) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      title: task?.title,
      description: task?.description,
      status: task?.status,
      priority: task?.priority,
      dueDate: task?.dueDate,
    },
    mode: "onChange",
    resolver: zodResolver(CreateTaskSchema),
  });

  return (
    <>
      <header className="flex flex-col gap-1 ">
        <h1 className="text-lg text-black">Edit Task</h1>
        <p className="text-xs text-gray-600">
          Modify and edit the task's information
        </p>
      </header>
      <div className="my-3 w-full h-[1px] bg-gray-900 opacity-40"></div>
      <form
        onSubmit={handleSubmit(
          async (data) =>
            await new Promise<void>((resolve) =>
              setTimeout(() => {
                console.log(data);
                resolve();
              }, 1000)
            ),
          (data) => console.log(data)
        )}
        className="flex flex-col gap-3 text-sm text-black"
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className={cn(
            "bg-transparent border-[1px] border-gray-500 rounded-lg outline-none px-2 py-1 ",
            { "border-red-500": errors.title }
          )}
        />
        {errors.title && (
          <p className="-mt-2 text-xs text-red-500">{errors.title.message}</p>
        )}
        <label htmlFor="description">Description</label>
        <textarea
          {...register("description")}
          id="description"
          className={cn(
            "bg-transparent border-[1px] border-gray-500 rounded-lg outline-none px-2 py-1",
            { "border-red-500": errors.description }
          )}
        ></textarea>
        {errors.description && (
          <p className="-mt-2 text-xs text-red-500">
            {errors.description.message}
          </p>
        )}
        <label htmlFor="status">Status</label>
        <select
          {...register("status")}
          id="status"
          className={cn(
            "bg-transparent border-[1px] border-gray-500 rounded-lg outline-none px-2 py-1",
            { "border-red-500": errors.status }
          )}
        >
          <option
            value="PENDING"
            className="bg-[#BCCCDC] checked:shadow-inner "
          >
            Pending
          </option>
          <option value="IN_PROGRESS" className="bg-[#BCCCDC]">
            In progress
          </option>
          <option value="COMPLETED" className="bg-[#BCCCDC]">
            Completed
          </option>
        </select>
        {errors.status && (
          <p className="-mt-2 text-xs text-red-500">{errors.status.message}</p>
        )}
        <label htmlFor="priority">Priority</label>
        <input
          type="number"
          {...register("priority")}
          className={cn(
            "bg-transparent border-[1px] border-gray-500 rounded-lg outline-none px-2 py-1",
            { "border-red-500": errors.priority }
          )}
        />
        {errors.priority && (
          <p className="-mt-2 text-xs text-red-500">
            {errors.priority.message}
          </p>
        )}
        <label htmlFor="">Due date</label>
        <DatePickerDemo
          date={watch("dueDate")}
          setDate={(date: Date | undefined) => setValue("dueDate", date)}
        />
        {errors.dueDate && (
          <p className="-mt-2 text-xs text-red-500">{errors.dueDate.message}</p>
        )}
        <div className="my-3 w-full h-[1px] bg-gray-900 opacity-40"></div>
        <section className="flex justify-end gap-3">
          <button className="border-[1px] hover:-translate-y-1 transition border-gray-500 rounded-md h-8 px-3  ">
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className={cn(
              { "hover:-translate-y-1": !isSubmitting },
              "h-8 px-3 text-white transition bg-purple-700 rounded-md disabled:opacity-50 "
            )}
          >
            Save
          </button>
        </section>
      </form>
    </>
  );
};
