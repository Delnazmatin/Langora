import { describe, expect, test } from "vitest";
import { add } from "./formatSomthing";

describe("test", () => {
  test("return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});
