import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import SignUp from "./page";

const pushMock = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));
beforeEach(() => {
  pushMock.mockClear();
});

describe("SignUp", () => {
  test("renders signup header", () => {
    render(<SignUp />);
    expect(
      screen.getByRole("heading", {
        name: "Sign Up",
      }),
    ).toBeInTheDocument();
  });

  test("renders email input", () => {
    render(<SignUp />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
  test("renders password input", () => {
    render(<SignUp />);
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  test("renders phone number input", () => {
    render(<SignUp />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
  test("renders password input", () => {
    render(<SignUp />);
    expect(screen.getByLabelText("Phone number")).toBeInTheDocument();
  });

  test("renders Confirm Password input", () => {
    render(<SignUp />);
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
  });

  test("renders age input", () => {
    render(<SignUp />);
    expect(screen.getByLabelText("Age")).toBeInTheDocument();
  });

  test("renders signup button", () => {
    render(<SignUp />);
    expect(
      screen.getByRole("button", {
        name: "Sign up",
      }),
    ).toBeInTheDocument();
  });

  test("user can type email", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    const emailInput = screen.getByLabelText("Email");
    await user.type(emailInput, "text@example.com");
    expect(emailInput).toHaveValue("text@example.com");
  });

  test("user can type phone number", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    const phoneInput = screen.getByLabelText("Phone number");
    await user.type(phoneInput, "09123456789");
    expect(phoneInput).toHaveValue("09123456789");
  });

  test("user can type password", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    const passwordInput = screen.getByLabelText("Password");
    await user.type(passwordInput, "12345678");
    expect(passwordInput).toHaveValue("12345678");
  });

  test("user can type confirm password", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    const confirmPassInput = screen.getByLabelText("Confirm Password");
    await user.type(confirmPassInput, "12345678");
    expect(confirmPassInput).toHaveValue("12345678");
  });

  test("user can type age", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    const confirmAge = screen.getByLabelText("Age");
    await user.type(confirmAge, "20");
    expect(confirmAge).toHaveValue(20);
  });

  test("show email error when email is invalid", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    const emailInput = screen.getByLabelText("Email");
    await user.type(emailInput, "invalid-email");
    await user.click(
      screen.getByRole("button", {
        name: "Sign up",
      }),
    );
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
  });

  test("shows phone number error when phone number is invalid", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    await user.type(screen.getByLabelText("Phone number"), "123");
    await user.click(
      screen.getByRole("button", {
        name: "Sign up",
      }),
    );
    expect(screen.getByText("Phone number is invalid")).toBeInTheDocument();
  });

  test("show password error when password is too short", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    const passwordInput = screen.getByLabelText("Password");
    await user.type(passwordInput, "1234");
    await user.click(
      screen.getByRole("button", {
        name: "Sign up",
      }),
    );
    expect(
      screen.getByText("Password must be at least 8 characters"),
    ).toBeInTheDocument();
  });

  test("shows error when passwords do not match", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Phone number"), "09123456789");
    await user.type(screen.getByLabelText("Password"), "12345678");
    await user.type(screen.getByLabelText("Confirm Password"), "87654321");
    await user.type(screen.getByLabelText("Age"), "20");

    await user.click(screen.getByRole("button", { name: "Sign up" }));
    expect(screen.getByText("password do not match")).toBeInTheDocument();
  });

  test("navigates to dashboard after valid submission", async () => {
    const user = userEvent.setup();
    render(<SignUp />);
    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Phone number"), "09123456789");
    await user.type(screen.getByLabelText("Password"), "12345678");
    await user.type(screen.getByLabelText("Confirm Password"), "12345678");
    await user.type(screen.getByLabelText("Age"), "20");
    await user.click(
      screen.getByRole("button", {
        name: "Sign up",
      }),
    );
    expect(pushMock).toHaveBeenCalledWith("/chooseLanguage");
  });

  test("shows error when passwords do not match", async () => {
    const user = userEvent.setup();
    render(<SignUp />);

    const emailInput = screen.getByLabelText("Email");
    const phoneInput = screen.getByLabelText("Phone number");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPassInput = screen.getByLabelText("Confirm Password");
    const ageInput = screen.getByLabelText("Age");

    await user.type(emailInput, "test@example.com");
    await user.type(phoneInput, "09123456789");
    await user.type(passwordInput, "12345678");
    await user.type(confirmPassInput, "12345678");
    await user.type(ageInput, "20");

    await user.click(screen.getByRole("button", { name: "Sign up" }));
    expect(emailInput).toHaveValue("");
    expect(phoneInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");
    expect(confirmPassInput).toHaveValue("");
    expect(ageInput).toHaveValue(null);
  });
});
