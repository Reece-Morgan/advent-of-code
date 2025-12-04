export const findFewestPaperRolls = (input: string): number => {
  let rollsTotal = 0;

  const lines = input.split("\n").map((line) => line.trim());
  const h = lines.length;
  const w = lines[0].length;

  // Directions for the 8 neighbors:
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (lines[y][x] !== "@") continue;

      let adjacent = 0;

      for (const [dy, dx] of directions) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
          if (lines[ny][nx] === "@") {
            adjacent++;
          }
        }
      }

      if (adjacent < 4) {
        rollsTotal++;
      }
    }
  }

  return rollsTotal;
};

export const findMostPaperRolls = (input: string): number => {
  let rollsTotal = 0;

  let grid = input.split("\n").map((line) => line.trim());
  const h = grid.length;
  const w = grid[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // Loop until no more removable '@'
  while (true) {
    const removedThisRound = findAndMark(h, w, grid, directions);
    if (removedThisRound === 0) break;
    rollsTotal += removedThisRound;
  }

  return rollsTotal;
};

function findAndMark(
  h: number,
  w: number,
  grid: string[],
  directions: number[][]
): number {
  const toRemove: { x: number; y: number }[] = [];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (grid[y][x] !== "@") continue;

      let adjacent = 0;

      for (const [dy, dx] of directions) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
          if (grid[ny][nx] === "@") adjacent++;
        }
      }

      if (adjacent < 4) {
        toRemove.push({ x, y });
      }
    }
  }

  // Remove them
  for (const { x, y } of toRemove) {
    grid[y] = grid[y].substring(0, x) + "x" + grid[y].substring(x + 1);
  }

  return toRemove.length;
}
