import { render , screen} from "@testing-library/react";
import App from "./App";

test('App component testing', () => {
    render(<App />);
    const app = screen.getByText(/app/i);
    expect(app).toBeInTheDocument();
});