import z from "zod";

export const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    phoneNumber: z
      .string()
      .min(1, "phone number is required")
      .regex(/^(?:\+98|98|0)?9\d{9}$/, "Phone number is invalid"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(1, "Confirm password is required")
      .min(8, "Confirm Password must be at least 8 characters"),
    age: z.number({ message: "age is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "password do not match",
    path: ["confirmPassword"],
  });

export type SignupType = z.infer<typeof signupSchema>;
