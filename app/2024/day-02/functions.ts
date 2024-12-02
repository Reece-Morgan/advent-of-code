export const calculateSafeLevels = (input: string) => {
  let safeLevels: number = 0;

  // Split the input string by new lines
  const levels = input.split("\n");

  levels.forEach((level) => {
    // Split the level string into an array of numbers
    const numbers = level.split(" ").map(Number);

    // Determine the result based on the flags
    if (isStrictlyIncreasing(numbers) || isStrictlyDecreasing(numbers)) {
      if (isDifferenceBetweenOneAndThree(numbers)) safeLevels++;
    }
  });

  return safeLevels;
};

export const calculateNewSafeLevels = (input: string) => {
  const reports = input.split("\n");
  let safeReportsCount = 0;

  // Process each report
  for (const report of reports) {
    const numbers = report.split(" ").map(Number);

    // If the report is already safe, count it
    if (checkIfSafe(numbers)) {
      safeReportsCount++;
    } else {
      // Check if removing one element makes the report safe
      let canBeMadeSafe = false;

      // Try removing each number one by one and check if the resulting array is safe
      for (let i = 0; i < numbers.length; i++) {
        const modifiedReport = [
          ...numbers.slice(0, i),
          ...numbers.slice(i + 1),
        ];
        if (checkIfSafe(modifiedReport)) {
          canBeMadeSafe = true;
          break;
        }
      }

      if (canBeMadeSafe) {
        safeReportsCount++;
      }
    }
  }

  return safeReportsCount;
};

function checkIfSafe(numbers: number[]): boolean {
  if (isStrictlyIncreasing(numbers) || isStrictlyDecreasing(numbers))
    return isDifferenceBetweenOneAndThree(numbers);
  return false;
}

function isStrictlyIncreasing(numbers: number[]): boolean {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] <= numbers[i - 1]) {
      return false;
    }
  }
  return true;
}

function isStrictlyDecreasing(numbers: number[]): boolean {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] >= numbers[i - 1]) {
      return false;
    }
  }
  return true;
}

function isDifferenceBetweenOneAndThree(level: number[]): boolean {
  // Loop through the numbers and calculate the difference between adjacent numbers
  for (let i = 1; i < level.length; i++) {
    const diff = level[i] - level[i - 1];
    // If the difference is greater than 3, return false
    if (Math.abs(diff) > 3) return false;
  }

  // Return true if all diffs are between 1 and 3
  return true;
}
