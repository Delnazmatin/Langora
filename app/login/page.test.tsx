import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import Login from "./page";

const pushMock = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));
beforeEach(() => {
  pushMock.mockClear();
});

describe("Login", () => {
  test("render login heading", () => {
    render(<Login />);
    expect(
      screen.getByRole("heading", {
        name: "Login to your account",
      }),
    ).toBeInTheDocument();
  });

  test("renders email input", () => {
    render(<Login />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  test("renders password input", () => {
    render(<Login />);
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  test("renders login button", () => {
    render(<Login />);
    expect(
      screen.getByRole("button", {
        name: "Login",
      }),
    ).toBeInTheDocument();
  });

  test("user can type email", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const emailInput = screen.getByLabelText("Email");
    await user.type(emailInput, "test@example.com");
    expect(emailInput).toHaveValue("test@example.com");
  });

  test("user can type password", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const passwordInput = screen.getByLabelText("Password");
    await user.type(passwordInput, "12345678");
    expect(passwordInput).toHaveValue("12345678");
  });

  test("shows email error when email is invalid", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const emailInput = screen.getByLabelText("Email");
    await user.type(emailInput, "invalid-email");
    await user.click(
      screen.getByRole("button", {
        name: "Login",
      }),
    );
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
  });

  test("shows password error when password is too short", async () => {
    const user = userEvent.setup();
    render(<Login />);
    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "1234");
    await user.click(
      screen.getByRole("button", {
        name: "Login",
      }),
    );
    expect(
      screen.getByText("Password must be at least 8 characters"),
    ).toBeInTheDocument();
  });

  test("navigates to dashboard after valid submission", async () => {
    const user = userEvent.setup();
    render(<Login />);
    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "12345678");
    await user.click(
      screen.getByRole("button", {
        name: "Login",
      }),
    );
    expect(pushMock).toHaveBeenCalledWith("/dashboard");
  });
});
