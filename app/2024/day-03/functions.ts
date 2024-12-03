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
