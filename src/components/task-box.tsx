import { ResponseTaskSchema } from "../schemas/task-schema";

type Task = Zod.infer<typeof ResponseTaskSchema>;

export function TaskBox({ task }: { task: Task }) {
  return (
    <section className="flex w-[700px] text-black ">
      <section className="basis-1/3  bg-[#BCCCDC] p-5 rounded-s-lg">
        <header className="text-sm text-gray-500 ">Task</header>
        <h1 className=" text-xl mt-1  text-ellipsis line-clamp-2">
          {task.title}
        </h1>
        <p className="text-sm text-gray-500 lowercase mt-6">{task.status}</p>
      </section>

      <section className="basis-2/3 bg p-5 rounded-e-lg bg-[#F8FAFC]">
        <header className="flex justify-between">
          {task.priority && (
            <p className="text-gray-400 text-sm"> Priority: {task.priority} </p>
          )}
          {task.dueDate && (
            <p className="text-sm text-gray-400">
              Due for: {task.dueDate?.toDateString()}
            </p>
          )}
        </header>

        <p className="text-md elipsis line-clamp-3 mt-2">{task.description}</p>
      </section>
    </section>
  );
}
