import { z } from "zod";

export const UserRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password has to be at least 8 characters long"),
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

export const registerUserSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password has to be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password has to be at least 8 characters long"),
  })
  .refine((args) => args.password == args.confirmPassword, {
    message: "Password and confirm password should be identical",
    path: ["confirmPassword"],
  });
