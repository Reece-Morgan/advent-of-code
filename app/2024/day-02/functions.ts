export const calculateSafeLevels = (input: string) => {
  let safeLevels: number = 0;

  // Split the input string by new lines
  const levels = input.split("\n");

  levels.forEach((level) => {
    // Split the level string into an array of numbers
    const numbers = level.split(" ").map(Number);
    // Flags to check if the sequence is increasing or decreasing
    let isIncreasing = true;
    let isDecreasing = true;

    // Loop through the numbers and compare adjacent numbers
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] <= numbers[i - 1]) {
        isIncreasing = false; // If any number is less than or equal to the previous, it's not increasing
      }
      if (numbers[i] >= numbers[i - 1]) {
        isDecreasing = false; // If any number is greater than or equal to the previous, it's not decreasing
      }
    }

    // Determine the result based on the flags
    if (isIncreasing || isDecreasing) {
      if (isDifferenceBetweenOneAndThree(level)) safeLevels++;
    }
  });

  return safeLevels;
};

function isDifferenceBetweenOneAndThree(level: string): boolean {
  // Split the level string into an array of strings, then convert them to numbers
  const numbers = level.split(" ").map(Number);
  console.log(numbers);

  // Loop through the numbers and calculate the difference between adjacent numbers
  for (let i = 1; i < numbers.length; i++) {
    const diff = numbers[i] - numbers[i - 1];
    if (Math.abs(diff) > 3) return false;
  }

  // Return true if all diffs are between 1 and 3
  return true;
}
