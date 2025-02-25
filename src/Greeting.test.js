import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("Render with default text", () => {
  render(<Greetings />);
  const defaultGreetingsText = screen.getByText(/Hello User/i);
  expect(defaultGreetingsText).toBeInTheDocument();
});

test("Render with custom text", () => {
  render(<Greetings name="Suvo" />);
  const customGreetingsText = screen.getByText("Hello Suvo");
  expect(customGreetingsText).toBeInTheDocument();
});
