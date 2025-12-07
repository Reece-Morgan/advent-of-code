/**
 * The beam begins at the position marked `S` and moves downward one row at a time.
 * Empty space (`.`) lets the beam continue straight downward.
 * When a beam reaches a splitter (`^`), that beam stops and two new beams are created:
 *  one moving down-left, the other moving down-right
 * A splitter should only be counted once, even if a later beam reaches it again.
 *
 * The total number of splitters activated is returned.
 */
export const countTachyonBeams = (input: string): number => {
  let noOfSplits = 0;

  const grid = input.split("\n");
  const rows = grid.length;
  const cols = grid[0].length;

  // remember which splitter cells have already been counted
  const usedSplitters = new Set<string>();
  // memo of beam states that were already processed
  // avoids re-exploring the same cell multiple times
  const visited = new Set<string>();

  // find S (start point)
  let sr = 0,
    sc = 0;
  for (let r = 0; r < rows; r++) {
    const c = grid[r].indexOf("S");
    if (c !== -1) {
      sr = r;
      sc = c;
      break;
    }
  }

  type Beam = { r: number; c: number };
  const stack: Beam[] = [{ r: sr, c: sc }];

  while (stack.length > 0) {
    const { r, c } = stack.pop()!;

    // if this beam state was processed already, skip it
    const state = `${r},${c}`;
    if (visited.has(state)) continue;
    visited.add(state);

    // attempt to move downward
    const nr = r + 1;
    // beam falls off the grid
    if (nr >= rows) continue;

    const cell = grid[nr][c];

    if (cell === ".") {
      // empty space -> continue straight down
      stack.push({ r: nr, c });
    } else if (cell === "^") {
      // splitter encountered
      const id = `${nr},${c}`;

      // count this splitter only once overall
      if (!usedSplitters.has(id)) {
        usedSplitters.add(id);
        noOfSplits++;
      }

      // the current beam stops here.
      // spawn new beams from left & right
      if (c - 1 >= 0) stack.push({ r, c: c - 1 });
      if (c + 1 < cols) stack.push({ r, c: c + 1 });
    }
  }

  return noOfSplits;
};
