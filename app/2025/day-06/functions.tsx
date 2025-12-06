export const calculateMathProblem = (input: string): number => {
  let mathTotal = 0;

  const sums = parseColumns(input);

  for (let i = 0; i < sums.length; i++) {
    mathTotal += evaluateColumn(sums[i]);
  }

  return mathTotal;
};

export const calculateCephalopodMathProblem = (input: string): number => {
  let mathTotal = 0;

  const sums = parseAllColumnsRightToLeft(input);
  // console.log(sums);

  // for (let i = 0; i < sums.length; i++) {
  //   mathTotal += evaluateColumn(sums[i]);
  // }

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


// WiP
export function parseAllColumnsRightToLeft(
  input: string
): string[][] {
  // Helper: split a mixed string like "32*" -> ["32","*"]
  const splitMixedRuns = (s: string): string[] => {
    const runs = s.match(/(\d+|[^\d]+)/g) || [];
    return runs.map(r => r); // leave everything as string
  };

  // 1) Rows -> tokens (cells) by whitespace
  const rowsTokens: string[][] = input
    .split("\n")
    .map(r => r.trim())
    .filter(r => r.length > 0)
    .map(r => r.split((/\s+/))); // split on spaces
    // TODO: split on spaces is the issue, I think

  if (rowsTokens.length === 0) return [];
  console.log("Rows Tokens:", rowsTokens);

  // 2) Determine number of printed columns
  const numCols = Math.max(...rowsTokens.map(rt => rt.length));

  // 3) Normalize each row to have numCols tokens
  for (let i = 0; i < rowsTokens.length; i++) {
    while (rowsTokens[i].length < numCols) rowsTokens[i].push("");
  }

  // 4) Gather printed columns (top -> bottom)
  const printedColumns: string[][] = [];
  for (let c = 0; c < numCols; c++) {
    printedColumns.push(rowsTokens.map(r => r[c] ?? ""));
  }

  // 5) Right-align tokens for vertical reading
  const result: string[][] = printedColumns.map(tokens => {
    const maxWidth = Math.max(...tokens.map(t => t.length));
    const padded = tokens.map(t => t.padStart(maxWidth, " "));

    // 6) Build character-columns right->left
    const charCols: string[] = [];
    for (let charCol = maxWidth - 1; charCol >= 0; charCol--) {
      let s = "";
      for (let row = 0; row < padded.length; row++) {
        s += padded[row][charCol];
      }
      s = s.trim();
      if (s.length > 0) charCols.push(s);
    }

    // 7) Split mixed runs and return as strings
    const pieces: string[] = [];
    for (const cs of charCols) {
      pieces.push(...splitMixedRuns(cs));
    }

    // 8) Move symbols to the end of the array
    const numbers: string[] = [];
    const symbols: string[] = [];
    for (const p of pieces) {
      if (/^\d+$/.test(p)) numbers.push(p);
      else symbols.push(p);
    }

    return [...numbers, ...symbols];
  });

  return result;
}
