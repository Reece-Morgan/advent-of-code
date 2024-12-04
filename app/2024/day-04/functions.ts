type Direction = [number, number]; // Representing row and column increments

export const findXmas = (input: string): number => {
  // const containing the word to be found
  const word = "XMAS";
  // Counter for how many times the word was found
  let foundWordCounter: number = 0;

  // Convert the input to a searchable grid
  const grid = convertInputToGrid(input);

  const rows = grid.length;
  const cols = grid[0].length;

  // Define all possible directions: horizontal, vertical, and diagonal
  const directions: Direction[] = [
    [0, 1], // Horizontal left to right
    [0, -1], // Horizontal right to left
    [1, 0], // Vertical top to bottom
    [-1, 0], // Vertical bottom to top
    [1, 1], // Diagonal top-left to bottom-right
    [-1, -1], // Diagonal bottom-right to top-left
    [1, -1], // Diagonal top-right to bottom-left
    [-1, 1], // Diagonal bottom-left to top-right
  ];

  // Iterate through each cell in the grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // For each direction, check if the word can be formed
      for (let [dr, dc] of directions) {
        let isFound = true;

        // Check if the word fits within bounds and matches
        for (let i = 0; i < word.length; i++) {
          const newRow = r + i * dr;
          const newCol = c + i * dc;

          if (
            newRow < 0 ||
            newRow >= rows || // Out of bounds (rows)
            newCol < 0 ||
            newCol >= cols || // Out of bounds (cols)
            grid[newRow][newCol] !== word[i] // Character doesn't match
          ) {
            isFound = false;
            break;
          }
        }

        // If found, increment the counter
        if (isFound) foundWordCounter++;
      }
    }
  }

  return foundWordCounter;
};

// Function to convert input string to a 2D array (string[][])
const convertInputToGrid = (input: string): string[][] => {
  // Split the input string into rows (by newlines)
  const rows = input.trim().split("\n");

  // Map each row to an array of characters (strings)
  return rows.map((row) => row.split(""));
};

export const countMasXShape = (input: string): number => {
  let foundMasXCounter = 0;

  const grid = convertInputToGrid(input);
  const rows = grid.length;
  const cols = grid[0].length;

  let firstHalfOfX: boolean = false;
  let secondHalfOfX: boolean = false;

  // Check for the "X" shape formed by "MAS" in two diagonal directions
  for (let r = 0; r < rows - 2; r++) {
    // Loop through each row (except the last two rows)
    for (let c = 0; c < cols; c++) {
      // Loop through each column
      // Check if we can form the "X" shape with "MAS"
      // Top-left to bottom-right diagonal
      if (r + 2 < rows && c + 2 < cols) {
        if (
          grid[r][c] === "M" &&
          grid[r + 1][c + 1] === "A" &&
          grid[r + 2][c + 2] === "S"
        ) {
          firstHalfOfX = true;
        } else if (
          grid[r][c] === "S" &&
          grid[r + 1][c + 1] === "A" &&
          grid[r + 2][c + 2] === "M"
        ) {
          firstHalfOfX = true;
        }
      }

      // Top-right to bottom-left diagonal
      if (r + 2 < rows && c - 2 >= 0) {
        if (
          grid[r][c + 2] === "M" &&
          grid[r + 1][c + 1] === "A" &&
          grid[r + 2][c] === "S"
        ) {
          secondHalfOfX = true;
        } else if (
          grid[r][c + 2] === "S" &&
          grid[r + 1][c + 1] === "A" &&
          grid[r + 2][c] === "M"
        ) {
          secondHalfOfX = true;
        }
      }

      if (firstHalfOfX && secondHalfOfX) {
        foundMasXCounter++;
        firstHalfOfX = false;
        secondHalfOfX = false;
      }
    }
  }

  return foundMasXCounter;
};
