import { z } from "zod";

export const UserRequestSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const UserResponseSchema = z.object({
  email: z.string(),
  id: z.string(),
  createdAt: z.date(),
  passwordHash: z.string().nullable(),
  sub: z.string().nullable(),
  provider: z.string().nullable(),
});

export const ReturnTokenSchema = z.object({
  status: z.literal("success"),
  data: z.string(),
});
