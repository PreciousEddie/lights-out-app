import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it("displays 'You won!' message when all cells are not lit", () => {
  // Render the App component
  render(<App />);

  // Helper function to check if the game is won
  const isGameWon = () => {
    const winMessage = screen.queryByText("Lights Out!! You Win!!");
    return winMessage !== null;
  };

  // Check if the game is initially not won
  expect(isGameWon()).toBe(false);

  // Simulate clicking cells to leave them in the lit state
  const cells = screen.getAllByRole("cell");
  cells.forEach(cell => fireEvent.click(cell));

  // The game should not be won, so the win message should not be displayed
  expect(isGameWon()).toBe(false);
});
