import { ResponseTaskSchema } from "../../../schemas/task-schema";
import { api } from "../../axios";
import { ENDPOINTS } from "../../endpoints";

export class TasksApiService {
  static async getTasks(): Promise<Zod.infer<typeof ResponseTaskSchema>> {
    const { data } = await api.get(ENDPOINTS.TASKS);
    return data;
  }
}
