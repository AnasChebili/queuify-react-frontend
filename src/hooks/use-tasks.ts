import { useInfiniteQuery } from "@tanstack/react-query";
import { TasksApiService } from "../api/api-service/tasks/tasks-api-service";
import { TasksPagesSchema } from "../schemas/task-schema";

export const useGetTasks = ({ limit }: { limit: number }) => {
  return useInfiniteQuery({
    queryKey: ["tasks", limit],
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
