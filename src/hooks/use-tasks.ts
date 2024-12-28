import { useQuery } from "@tanstack/react-query";
import { TasksApiService } from "../api/api-service/tasks/tasks-api-service";

export const useGetTasks = () => {
  return useQuery({ queryKey: ["tasks"], queryFn: TasksApiService.getTasks });
};
