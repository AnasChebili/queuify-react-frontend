import { ReturnTasksSchema } from "../../../schemas/task-schema";
import { api } from "../../axios";
import { ENDPOINTS } from "../../endpoints";

export class TasksApiService {
  static async getTasks({
    pageParam,
    limit,
  }: {
    pageParam: number | false;
    limit: number;
  }): Promise<Zod.infer<typeof ReturnTasksSchema>> {
    const { data } = await api.get(
      `${ENDPOINTS.TASKS}?page=${pageParam}&limit=${limit}`
    );
    return data;
  }
}
