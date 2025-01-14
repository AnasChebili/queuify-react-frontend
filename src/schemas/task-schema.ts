import { z } from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]),
  priority: z.number({ coerce: true }).int().nullable().optional(),
  dueDate: z
    .string()
    .optional()
    .nullable()
    .transform((str) => (str ? new Date(str) : undefined)),
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z
    .string()
    .optional()
    .transform((str) => (str ? new Date(str) : null)),
});

export const CreateTaskSchema = TaskSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  dueDate: true,
}).extend({
  dueDate: z.date().optional(),
});

export const UpdateTaskSchema = CreateTaskSchema.partial();

export const ResponseTaskSchema = TaskSchema;

export const ResponseTasksSchema = ResponseTaskSchema.array();

export const ReturnTasksSchema = z.object({
  status: z.literal("success"),
  data: ResponseTasksSchema,
  metadata: z.object({
    total: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
  }),
});

export const TasksPagesSchema = ResponseTasksSchema.array();
