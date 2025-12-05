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
