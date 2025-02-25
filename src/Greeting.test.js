import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
describe("Greetings component Testing", () => {
  test("Render with default text", () => {
    render(<Greetings />);
    const defaultGreetingsText = screen.getByText(/Hello User/i);
    expect(defaultGreetingsText).toBeInTheDocument();
  });

  test("Render with custom text", () => {
    render(<Greetings name="Suvoo" />);
    const customGreetingsText = screen.getByText("Hello Suvoo");
    expect(customGreetingsText).toBeInTheDocument();
  });
});
