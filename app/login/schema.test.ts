import { describe, expect, test } from "vitest";
import { signinSchema } from "./schema";

describe("signinSchema", () => {
  test("accepts valid login data", () => {
    const result = signinSchema.safeParse({
      email: "test@example.com",
      password: "12345678",
    });
    expect(result.success).toBe(true);
  });

  test("rejects invalid email", () => {
    const result = signinSchema.safeParse({
      email: "invalid-email",
      password: "12345678",
    });
    expect(result.success).toBe(false);
  });

  test("rejects empty email", () => {
    const result = signinSchema.safeParse({
      email: "",
      password: "12345678",
    });
    expect(result.success).toBe(false);
  });

  test("reject password shorter than 8 character", () => {
    const result = signinSchema.safeParse({
      email: "test@example.com",
      password: "1234",
    });
    expect(result.success).toBe(false);
  });
});
