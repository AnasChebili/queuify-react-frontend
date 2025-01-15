import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { TasksApiService } from "../api/api-service/tasks/tasks-api-service";
import { CreateTaskSchema, TasksPagesSchema } from "../schemas/task-schema";
import { useDebugValue } from "react";

type Task = Zod.infer<typeof CreateTaskSchema>;

export const useGetTasks = ({ limit }: { limit: number }) => {
  useDebugValue(limit);
  return useInfiniteQuery({
    queryKey: ["tasks"],
    queryFn: ({ pageParam }) => TasksApiService.getTasks({ pageParam, limit }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.metadata.page == lastPage.metadata.totalPages
        ? undefined
        : lastPage.metadata.page + 1,
    select: (data) =>
      TasksPagesSchema.parse(data.pages.map((returnPage) => returnPage.data)),
  });
};

export const useGetTask = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["task", id],
    queryFn: () => TasksApiService.getTask({ id }),
  });
};

export const useUpdateTask = ({ onSuccess }: { onSuccess: () => void }) => {
  return useMutation({
    mutationFn: ({ id, task }: { id: string; task: Task }) =>
      TasksApiService.updateTask({ id, task }),
    onSuccess: onSuccess,
  });
};

export const useCreateTask = () => {
  return useMutation({
    mutationFn: ({ task }: { task: Task }) =>
      TasksApiService.createTask({ task }),
  });
};
