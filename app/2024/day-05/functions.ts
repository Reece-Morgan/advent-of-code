export const getTotalOfMiddleValues = (input: string): number => {
  let totalOfMiddleNumbers: number = 0;

  const { constraints, rows } = parseData(input);

  // Check all rows and determine which one(s) are valid
  const validRows = rows.filter((row) => isValidRow(row, constraints));

  // get the middle value of each array and total them together
  validRows.forEach((row) => {
    const middleIndex = Math.floor(row.length / 2);
    totalOfMiddleNumbers += row[middleIndex];
  });

  return totalOfMiddleNumbers;
};

const parseData = (input: string) => {
  // Split the input data into two parts based on the empty line
  const [constraintsData, rowsData] = input.split("\n\n");

  // Parse the first part: pairs of numbers (format [number, number])
  const constraints: [number, number][] = constraintsData.split("\n").map((line) => {
    const [first, second] = line.split("|").map(Number);
    return [first, second];
  });

  // Parse the second part: rows of numbers (format number[])
  const rows: number[][] = rowsData.split("\n").map((line) => {
    return line.split(",").map(Number);
  });

  return { constraints, rows };
};

// Function to check if a row satisfies the order constraints
const isValidRow = (
  row: number[],
  constraints: [number, number][]
): boolean => {
  // Bool to track if the constraints have not been broken
  let constraintNotBroken: boolean = true;
  row.forEach((number) => {
    // Loop through the constraints
    for (let [first, second] of constraints) {
      // Only do any logic if the first number of the pair matches 
      // the current number from the row
      if (first === number) {
        const firstIndex = row.indexOf(first);
        const secondIndex = row.indexOf(second);
        // If the second number exists, check if it breaks a rule
        if (secondIndex !== -1) {
          if (firstIndex > secondIndex) {
            constraintNotBroken = false;
          }
        }
      }
    }
  });

  return constraintNotBroken;
};
