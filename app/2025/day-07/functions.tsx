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

/**
 * Count the number of timelines produced by a single quantum tachyon particle
 * traversing a grid according to the "splitter" rules.
 *
 * Returns a number with the total number of finished timelines.
 * Throws an Error if the number of timelines is infinite (a reachable cycle).
 *
 * Input format: multiline string where each line is a row.
 * 'S' marks the start. '.' is empty space. '^' is a splitter.
 */
export function countQuantumTimelines(input: string): number {
  // Parse grid
  const grid = input.split("\n");
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;

  // Find start 'S'
  let sr = -1, sc = -1;
  for (let r = 0; r < rows; r++) {
    const c = grid[r].indexOf("S");
    if (c !== -1) {
      sr = r;
      sc = c;
      break;
    }
  }
  if (sr === -1) throw new Error("Start 'S' not found in input.");

  // Helpers to map (r,c) <-> id and to check bounds
  const id = (r: number, c: number) => r * cols + c;
  const inBounds = (r: number, c: number) => r >= 0 && r < rows && c >= 0 && c < cols;

  // Build neighbor function for directed graph of states.
  // Node = (r,c) meaning a beam currently at that cell (before attempting to move down).
  // Edges: from (r,c) -> next states depending on what's below (r+1,c):
  //   - if (r+1,c) out of bounds => terminal (no outgoing edges)
  //   - if grid[r+1][c] == '.' => edge to (r+1,c)
  //   - if grid[r+1][c] == '^' => edges to (r, c-1) and (r, c+1) if in bounds
  function neighbors(nodeId: number): number[] {
    const r = Math.floor(nodeId / cols);
    const c = nodeId % cols;
    const nr = r + 1;
    // falling off bottom -> no neighbors (terminal)
    if (nr >= rows) return [];
    const ch = grid[nr][c];
    if (ch === ".") {
      return [id(nr, c)];
    } else if (ch === "^") {
      const res: number[] = [];
      if (inBounds(r, c - 1)) res.push(id(r, c - 1));
      if (inBounds(r, c + 1)) res.push(id(r, c + 1));
      return res;
    } else {
      // Any unexpected character treated like '.' (or you can throw)
      return [id(nr, c)];
    }
  }

  // Compute number of paths from start node to ANY terminal using Depth-First Search + memo.
  // memo[nodeId] = count of timelines that start at nodeId and eventually finish.
  const memo = new Map<number, number>();

  // DFS that returns number of terminating timelines from node
  function dfs(node: number): number {
    // If this node leads immediately off the bottom, that's one timeline finishing.
    const r = Math.floor(node / cols);
    const c = node % cols;
    if (r + 1 >= rows) {
      return 1;
    }

    // Memo check
    if (memo.has(node)) return memo.get(node)!;


    const neigh = neighbors(node);
    // If no neighbors (i.e., falling off grid) handled above, but keep safe:
    if (neigh.length === 0) {
      memo.set(node, 1);
      return 1;
    }

    // Sum timelines across each outgoing edge. Each outgoing edge corresponds to a
    // mutually exclusive branch for each timeline currently at this node, so counts add.
    let total = 0;
    for (const nxt of neigh) {
      const cnt = dfs(nxt);
      total += cnt;
    }

    memo.set(node, total);
    return total;
  }

  const startId = id(sr, sc);
  return dfs(startId);
}