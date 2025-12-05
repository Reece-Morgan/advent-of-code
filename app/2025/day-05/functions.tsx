export const findFreshIngredients = (input: string): number => {
  let ingredientCount = 0;

  var [rangesPart, ingredientsPart] = input.split("\n\n");
  var rangeLines = rangesPart.split("\n");
  var idLines = ingredientsPart.split("\n");

  // Parse the ranges into numeric tuples
  const ranges = rangeLines.map((line) => {
    const [start, end] = line.split("-").map(Number);
    return { start, end };
  });

  // Convert ids to numbers
  const ids = idLines.map(Number);

  for (const id of ids) {
    for (const r of ranges) {
      if (id >= r.start && id <= r.end) {
        ingredientCount++;
        break; // stop checking other ranges, count each ID once
      }
    }
  }

  return ingredientCount;
};

export const countAllFreshIngredients = (input: string): number => {
  let totalCount = 0;

  var [rangesPart, ingredientsPart] = input.split("\n\n");
  var rangeLines = rangesPart.split("\n");
  console.log("Range Lines:", rangeLines);

  // Parse ranges into numeric tuples
  let ranges = rangeLines.map(line => {
    const [start, end] = line.split("-").map(Number);
    return { start, end };
  });

  // Sort by start
  ranges.sort((a, b) => a.start - b.start);

  // Merge overlapping ranges
  const merged: { start: number; end: number }[] = [];

  for (const r of ranges) {
    if (merged.length === 0) {
      merged.push({ ...r });
      continue;
    }

    const last = merged[merged.length - 1];

    // Overlap or touching
    if (r.start <= last.end) {
      last.end = Math.max(last.end, r.end); // extend the range
    } else {
      merged.push({ ...r });
    }
  }

  // Count total numbers in merged ranges
  for (const m of merged) {
    totalCount += m.end - m.start + 1;
  }

  return totalCount;
};