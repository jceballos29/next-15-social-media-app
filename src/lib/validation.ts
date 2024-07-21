import { z } from "zod";

const requiredString = z.string().min(1, "Field cannot be empty");

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, hyphens, and underscores are allowed",
  ),
  password: requiredString.min(8, "Password must be at least 8 characters"),
});

export const signInSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type SignUpValues = z.infer<typeof signUpSchema>;
export type SignInValues = z.infer<typeof signInSchema>;