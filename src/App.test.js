import { render , screen} from "@testing-library/react";
import App from "./App";

test('Render with the title', () => {
    render(<App />);
    const app = screen.getByText(/app/i);
    expect(app).toBeInTheDocument();
});