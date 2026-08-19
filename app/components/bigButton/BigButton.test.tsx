import { render, screen } from "@testing-library/react";
import BigButton from "./BigButton";
import userEvent from "@testing-library/user-event";

describe("Big Button", () => {
  it("renders with the given text", () => {
    render(<BigButton text="Login" type="submit" />);
    expect(
      screen.getByRole("button", {
        name: "Login",
      }),
    ).toBeInTheDocument();
  });

  it("render as a submit button", () => {
    render(<BigButton text="Login" type="submit" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("render as a button", () => {
    render(<BigButton text="Continue" type="button" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("disable the button when disabled is true", () => {
    render(<BigButton text="Login" type="submit" disabled />);
    expect(
      screen.getByRole("button", {
        name: "Login",
      }),
    ).toBeDisabled();
  });

  it("is enabled by default", () => {
    render(<BigButton type="button" text="Continue" />);
    expect(screen.getByRole("button", { name: "Continue" })).toBeEnabled();
  });

  it("calls onClick when the button is clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<BigButton text="Login" type="submit" onClick={handleClick} />);
    await user.click(screen.getByRole("button", { name: "Login" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <BigButton text="Login" type="submit" onClick={handleClick} disabled />,
    );
    await user.click(screen.getByRole("button", { name: "Login" }));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
