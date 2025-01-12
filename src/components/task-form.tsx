import { CreateTaskSchema, ResponseTaskSchema } from "@/schemas/task-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Task = Zod.infer<typeof ResponseTaskSchema>;

export const TaskForm = ({ task }: { task?: Task }) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
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
    <form action="">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        {...register("title")}
        className="bg-transparent"
      />
      <label htmlFor="description">Description</label>
      <textarea
        {...register("description")}
        id="description"
        className="bg-transparent"
      ></textarea>
      <label htmlFor="status"></label>
      <select {...register("status")} id="status" className="bg-transparent">
        <option value="PENDING">Pending</option>
        <option value="IN_PROGRESS">In progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
      <label htmlFor="priority">Priority</label>
      <input
        type="number"
        {...register("priority")}
        className="bg-transparent"
      />
    </form>
  );
};
