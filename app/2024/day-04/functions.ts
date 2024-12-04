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
