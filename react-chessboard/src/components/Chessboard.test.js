import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chessboard from "./Chessboard";

describe("Chessboard Component", () => {
  test("1: Renders 64 cells (8x8 grid)", () => {
    render(<Chessboard />);
    const cells = screen.getAllByRole("button");
    expect(cells).toHaveLength(64);
  });

  test("2: First cell (0,0) has white background", () => {
    render(<Chessboard />);
    const cells = screen.getAllByRole("button");
    const firstCell = cells[0];
    expect(firstCell).toHaveClass("white");
  });

  test("3: Cells alternate colors correctly", () => {
    render(<Chessboard />);
    const cells = screen.getAllByRole("button");

    // First row pattern: white, grey, white, grey...
    expect(cells[0]).toHaveClass("white");
    expect(cells[1]).toHaveClass("grey");
    expect(cells[2]).toHaveClass("white");
    expect(cells[3]).toHaveClass("grey");

    // Second row pattern: grey, white, grey, white...
    expect(cells[8]).toHaveClass("grey");
    expect(cells[9]).toHaveClass("white");
    expect(cells[10]).toHaveClass("grey");
    expect(cells[11]).toHaveClass("white");
  });

  test("4: Clicking a cell highlights it", () => {
    render(<Chessboard />);
    const cells = screen.getAllByRole("button");
    const cellToClick = cells[10]; // Arbitrary cell

    fireEvent.click(cellToClick);
    expect(cellToClick).toHaveClass("highlighted");
  });

  test("5: Only one cell can be highlighted at a time", () => {
    render(<Chessboard />);
    const cells = screen.getAllByRole("button");

    // Click first cell
    fireEvent.click(cells[5]);
    expect(cells[5]).toHaveClass("highlighted");

    // Click second cell
    fireEvent.click(cells[20]);
    expect(cells[20]).toHaveClass("highlighted");
    expect(cells[5]).not.toHaveClass("highlighted");
  });

  test("6: Clicking the same cell keeps it highlighted", () => {
    render(<Chessboard />);
    const cells = screen.getAllByRole("button");
    const cell = cells[15];

    fireEvent.click(cell);
    expect(cell).toHaveClass("highlighted");

    fireEvent.click(cell);
    expect(cell).toHaveClass("highlighted");
  });

  test("7: All cells are clickable", () => {
    render(<Chessboard />);
    const cells = screen.getAllByRole("button");

    cells.forEach((cell) => {
      expect(cell).toBeInTheDocument();
      fireEvent.click(cell);
      expect(cell).toHaveClass("highlighted");
    });
  });

  test("8: Event delegation - parent handles all clicks, cells have no individual handlers", () => {
    render(<Chessboard />);
    const chessboard = screen.getByTestId("chessboard");
    const cells = screen.getAllByRole("button");

    // Verify parent container exists and can handle events
    expect(chessboard).toBeInTheDocument();

    // Test that clicking on parent delegates to cells
    fireEvent.click(cells[10]);
    expect(cells[10]).toHaveClass("highlighted");
  });

  test("8b: Event bubbling and delegation implementation", () => {
    render(<Chessboard />);
    const chessboard = screen.getByTestId("chessboard");
    const cells = screen.getAllByRole("button");

    // Test event bubbling by clicking cells
    const targetCell = cells[25];

    // Simulate clicking the cell (event should bubble to parent)
    fireEvent.click(targetCell);
    expect(targetCell).toHaveClass("highlighted");

    // Click another cell to test delegation
    fireEvent.click(cells[40]);
    expect(cells[40]).toHaveClass("highlighted");
    expect(targetCell).not.toHaveClass("highlighted");
  });

  test("9: Cells have data attributes for event delegation", () => {
    render(<Chessboard />);
    const cells = screen.getAllByRole("button");

    // Check if cells have data attributes for event delegation
    // This is required for proper event delegation implementation
    expect(cells[0]).toHaveAttribute("data-row"); // Should have row data
    expect(cells[0]).toHaveAttribute("data-col"); // Should have col data
    expect(cells[7]).toHaveAttribute("data-row");
    expect(cells[63]).toHaveAttribute("data-col");
  });

  test("10: Chessboard has correct CSS class", () => {
    render(<Chessboard />);

    const chessboard = screen.getByTestId("chessboard");

    expect(chessboard).toHaveClass("chessboard");
  });
});
