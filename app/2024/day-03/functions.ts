export const calculateMultiplcation = (input: string): number => {
  let totalSum: number = 0;
  // Regular expression to find all mul(X,Y) patterns
  const regex = /mul[\(](\d+),(\d+)[\)]/g;

  let match;
  const results: string[] = [];

  while ((match = regex.exec(input)) !== null) {
    // Each match will contain the whole string of the match
    results.push(match[0]);
  }

  results.forEach((result) => {
    totalSum += multiplyTheNumbers(result);
  });

  return totalSum;
};

const multiplyTheNumbers = (sum: string): number => {
  // Find the positions of the opening and closing parentheses
  const start = sum.indexOf("(") + 1; // Position right after '('
  const end = sum.indexOf(")"); // Position of ')'

  // Extract the substring between the parentheses
  const numbers = sum.substring(start, end);

  // Split the substring by the comma to get the two numbers
  const [num1, num2] = numbers.split(",").map((str) => parseInt(str, 10));

  // Multiply the numbers
  const result = num1 * num2;

  return result;
};

export const calculateUpdatedMultiplication = (input: string) => {
  let totalSum = 0;
  const regex = /mul[\(](\d+),(\d+)[\)]/g;

  // Array to store the valid mul patterns
  const matches: string[] = [];

  // Track if we're in the "don't()" section
  let inDontMode = false;

  // Search the string for patterns
  let match: RegExpExecArray | null;
  let currentPos = 0;

  while ((match = regex.exec(input)) !== null) {
      // Extract the part of the string before the current match
      const beforeMatch = input.slice(currentPos, match.index);

      // Check if inside a "don't()" section
      if (beforeMatch.includes("don't()")) {
          inDontMode = true;
      }

      // Check if encountered a "do()" section after a "don't()", and exit ignore mode
      if (beforeMatch.includes("do()")) {
          inDontMode = false;
      }

      // If not in "don't()" mode, process the current match
      if (!inDontMode) {
          matches.push(match[0]);
      }

      // Update the current position to continue after the current match
      currentPos = match.index + match[0].length;
  }

  matches.forEach((match) => {
    totalSum += multiplyTheNumbers(match);
  });

  return totalSum;
};
