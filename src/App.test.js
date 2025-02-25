import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render the login form", () => {
  render(<App />);
  screen.debug();
  const appTitle = screen.getByRole("heading", { name: /App/i });
  expect(appTitle).toBeInTheDocument();

  const nameInput = screen.getByRole("textbox", {
    name: /Email/i,
  });
  expect(nameInput).toBeInTheDocument();

  const passwordInput = screen.getByRole("textbox", /password/i);
  expect(passwordInput).toBeInTheDocument();

  const loginButton = screen.getByRole("button", { name: /Login/i });
  expect(loginButton).toBeInTheDocument();
});
