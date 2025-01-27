import { z } from "zod";

export const TaskTypeSchema = z.enum([
  "database-backup",
  "report-generation",
  "data-cleanup",
]);

export const JobReturnSchema = z.object({
  message: z.string(),
  jobId: z.any(),
  taskType: z.enum(["database-backup", "report-generation", "data-cleanup"]),
  scheduledFor: z.union([z.number(), z.string()]),
});

export const RecurringJobReturnSchema = z.object({
  message: z.string(),
  jobId: z.any(),
  taskType: z.enum(["database-backup", "report-generation", "data-cleanup"]),
});

export const ScheduledJobsReturnSchema = z
  .object({
    id: z.any(),
    taskType: z.enum(["database-backup", "report-generation", "data-cleanup"]),
    status: z.any(),
    scheduledFor: z.union([z.string(), z.date()]),
  })
  .array();
