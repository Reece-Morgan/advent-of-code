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
