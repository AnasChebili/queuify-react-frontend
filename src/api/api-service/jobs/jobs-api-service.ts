import { api } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";
import {
  JobReturnSchema,
  RecurringJobReturnSchema,
  ScheduledJobsReturnSchema,
  TaskTypeSchema,
} from "@/schemas/job-schema";

type TaskType = Zod.infer<typeof TaskTypeSchema>;
type JobReturn = Zod.infer<typeof JobReturnSchema>;
type RecurringJobReturn = Zod.infer<typeof RecurringJobReturnSchema>;
type ScheduledJobsReturn = Zod.infer<typeof ScheduledJobsReturnSchema>;
export class JobsApiService {
  static async scheduleJob({
    taskType,
    scheduledFor,
  }: {
    taskType: TaskType;
    scheduledFor?: number;
  }): Promise<JobReturn> {
    const { data } = await api.post(ENDPOINTS.SCHEDULE, {
      taskType,
      scheduledFor,
    });
    return data;
  }

  static async scheduleRecurringJob({
    taskType,
  }: {
    taskType: TaskType;
  }): Promise<RecurringJobReturn> {
    const { data } = await api.post(ENDPOINTS.RECURRING, { taskType });
    return data;
  }

  static async getScheduledTasks(): Promise<ScheduledJobsReturn> {
    const { data } = await api.get(ENDPOINTS.SCHEDULED);
    return data;
  }
}
