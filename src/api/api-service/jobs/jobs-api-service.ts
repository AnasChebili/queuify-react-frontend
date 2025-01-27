import { api } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";
import {
  JobReturnSchema,
  RecurringJobReturnSchema,
  ScheduledJobsReturnSchema,
  TaskTypeSchema,
} from "@/schemas/job-schema";

export type TaskType = Zod.infer<typeof TaskTypeSchema>;
export type JobReturn = Zod.infer<typeof JobReturnSchema>;
export type RecurringJobReturn = Zod.infer<typeof RecurringJobReturnSchema>;
export type ScheduledJobsReturn = Zod.infer<typeof ScheduledJobsReturnSchema>;
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

  static async getScheduledJobs(): Promise<ScheduledJobsReturn> {
    const { data } = await api.get(ENDPOINTS.SCHEDULED);
    return data;
  }
}
