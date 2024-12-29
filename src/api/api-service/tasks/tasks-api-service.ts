import { ResponseTasksSchema } from "../../../schemas/task-schema";
import { api } from "../../axios";
import { ENDPOINTS } from "../../endpoints";

export class TasksApiService {
  static async getTasks(): Promise<Zod.infer<typeof ResponseTasksSchema>> {
    const {
      data: { data },
    } = await api.get(ENDPOINTS.TASKS);
    console.log(data);

    return ResponseTasksSchema.parse(data);
  }
}
