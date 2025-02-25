import { render, screen } from "@testing-library/react";


test('render the submit text', () => {
    render(<div>Submit</div>);
    const submit = screen.getByText(/Submit/i);
    expect(submit).toBeInTheDocument();
});
