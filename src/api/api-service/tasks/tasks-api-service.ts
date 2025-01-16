import {
  CreateTaskSchema,
  ResponseTaskSchema,
  ReturnTasksSchema,
} from "../../../schemas/task-schema";
import { api } from "../../axios";
import { ENDPOINTS } from "../../endpoints";

type Task = Zod.infer<typeof CreateTaskSchema>;
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

  static async getTask({
    id,
  }: {
    id: string;
  }): Promise<Zod.infer<typeof ResponseTaskSchema>> {
    const { data } = await api.get(`${ENDPOINTS.TASKS}/${id}`);
    return data.data;
  }

  static async updateTask({
    id,
    task,
  }: {
    id: string;
    task: Task;
  }): Promise<Zod.infer<typeof ResponseTaskSchema>> {
    const { data } = await api.put(`${ENDPOINTS.TASKS}/${id}`, task);
    return data.data;
  }

  static async createTask({
    task,
  }: {
    task: Task;
  }): Promise<Zod.infer<typeof ResponseTaskSchema>> {
    const { data } = await api.post(ENDPOINTS.TASKS, task);
    return data.data;
  }

  static async deleteTask({
    id,
  }: {
    id: string;
  }): Promise<Zod.infer<typeof ResponseTaskSchema>> {
    const { data } = await api.delete(`${ENDPOINTS.TASKS}/${id}`);
    return data.data;
  }
}
