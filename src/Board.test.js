import React from "react";
import { render, fireEvent } from "@testing-library/react"
import Board from "./Board"

it("renders without crashing", function () {
    render(<Board />);
});

it("matches snapshot", function () {
    const { container } = render(<Board nrows={ 3 } ncols={ 3 } />);
    expect(container).toMatchSnapshot();
});

it('checks if clicking a cell flips the correct cells', () => {
    const { getAllByRole } = render(<Board nrows={ 3 } ncols={ 3 } />);
    const cells = getAllByRole('cell');

    // Click on the first cell
    fireEvent.click(cells[0]);

    // Verify that the clicked cell and the adjacent cells are flipped
    expect(cells[0]).toHaveClass('Cell-lit');
    expect(cells[1]).toHaveClass('Cell-lit');
    expect(cells[3]).toHaveClass('Cell-lit');
});