export const calculatePassword = (input: string): number => {
  let currentNumber = 50;
  let numberOfZeroes = 0;

  const lines = input.split("\n");

  for (const line of lines) {
    const direction = line.charAt(0);
    let distance_str = line.slice(1);

    // manipulate distance to two digits. removes multiple full rotations
    // e.g 988 becomes 88 as 900 is 9 full rotations
    distance_str = distance_str.slice(distance_str.length - 2)
    const distance = parseInt(distance_str);

    if (direction === "L") {
      // move left
      if (distance < currentNumber) {
        currentNumber -= distance;
      } else {
        const remainder = distance - currentNumber;
        // max number minus remainder plus 1 for click from 0 to 99
        currentNumber = 99 - remainder + 1;
      }
    } else if (direction === "R") {
      // Move right
      if (distance + currentNumber < 100) {
        currentNumber += distance;
      } else {
        const total = distance + currentNumber;
        const remainder = total - 100;
        // min number plus remainder
        currentNumber = 0 + remainder;
      }
    }

    if (currentNumber === 100) {
      currentNumber = 0;
    }

    if (currentNumber === 0) {
      numberOfZeroes += 1;
    }
  }

  return numberOfZeroes;
};
