import { describe, expect, test } from "vitest";
import { signupSchema } from "./schema";

describe("signup schema", () => {
  test("accepts valid signup", () => {
    const result = signupSchema.safeParse({
      email: "test@example.com",
      phoneNumber: "09121234567",
      password: "12345678",
      confirmPassword: "12345678",
      age: 20,
    });
    expect(result.success).toBe(true);
  });

  test("rejects empty email", () => {
    const result = signupSchema.safeParse({
      email: "",
      phoneNumber: "09121234567",
      password: "12345678",
      confirmPassword: "12345678",
      age: 20,
    });
    expect(result.success).toBe(false);
  });

  test("rejects invalid email", () => {
    const result = signupSchema.safeParse({
      email: "test",
      phoneNumber: "09121234567",
      password: "12345678",
      confirmPassword: "12345678",
      age: 20,
    });
    expect(result.success).toBe(false);
  });

  test("rejects empty phone number", () => {
    const result = signupSchema.safeParse({
      email: "test@example.com",
      phoneNumber: "",
      password: "12345678",
      confirmPassword: "12345678",
      age: 20,
    });
    expect(result.success).toBe(false);
  });

  test("rejects invalid phone number", () => {
    const result = signupSchema.safeParse({
      email: "test@example.com",
      phoneNumber: "12345",
      password: "12345678",
      confirmPassword: "12345678",
      age: 20,
    });
    expect(result.success).toBe(false);
  });

  test("rejects password shorter than 8 characters", () => {
    const result = signupSchema.safeParse({
      email: "test@example.com",
      phoneNumber: "09121234567",
      password: "1234567",
      confirmPassword: "1234567",
      age: 20,
    });
    expect(result.success).toBe(false);
  });

  test("rejects when password do not match", () => {
    const result = signupSchema.safeParse({
      email: "test@example.com",
      phoneNumber: "09121234567",
      password: "12345678",
      confirmPassword: "87654321",
      age: 20,
    });
    expect(result.success).toBe(false);
  });

  test("rejects invalid age", () => {
    const result = signupSchema.safeParse({
      email: "test@example.com",
      phoneNumber: "09121234567",
      password: "12345678",
      confirmPassword: "12345678",
      age: "20",
    });
    expect(result.success).toBe(false);
  });
});
