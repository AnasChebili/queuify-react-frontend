import { z } from "zod";

export const TaskTypeSchema = z.enum([
  "database-backup",
  "report-generation",
  "data-cleanup",
]);
