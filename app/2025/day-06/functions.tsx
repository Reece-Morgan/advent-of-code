export const calculateMathProblem = (input: string): number => {
  let mathTotal = 0;

  const sums = parseColumns(input);
  console.log(sums);

  for (let i = 0; i < sums.length; i++) {
    mathTotal += evaluateColumn(sums[i]);
  }

  return mathTotal;
};

function parseColumns(input: string): string[][] {
  // Split into non-empty lines
  const rows = input
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split(/\s+/)); // split by variable whitespace

  const columnCount = rows[0].length;
  const columns: string[][] = Array.from({ length: columnCount }, () => []);

  // transpose row data into columns
  rows.forEach((row) => {
    row.forEach((value, colIndex) => {
      columns[colIndex].push(value);
    });
  });

  return columns;
}

function evaluateColumn(col: string[]): number {
  // last value in the array is the operator
  const operator = col[col.length - 1];

  // all previous values are numbers
  const numbers = col.slice(0, -1).map(Number);

  switch (operator) {
    case "*":
      return numbers.reduce((a, b) => a * b);
    case "+":
      return numbers.reduce((a, b) => a + b, 0);
    case "-":
      return numbers.reduce((a, b) => a - b);
    case "/":
      return numbers.reduce((a, b) => a / b);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}
