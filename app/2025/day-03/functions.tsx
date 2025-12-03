export const calculateJoltage = (input: string): number => {
  let totalJoltage = 0;

  const banks = input.split("\n");
  for (const bank of banks) {
    // get all batteries except the last one
    const batteries = bank.slice(0, bank.length - 1);
    // find highest number
    const highestNumber = Math.max(...batteries.split("").map(Number));
    // find second highest number in batteries after highest number
    const remainingBatteries = bank.slice(
      bank.indexOf(highestNumber.toString()) + 1
    );
    const secondNumber = Math.max(...remainingBatteries.split("").map(Number));
    // combine highest and second highest number as string
    const joltage = highestNumber.toString() + secondNumber.toString();
    // add to total joltage
    totalJoltage += parseInt(joltage);
  }

  return totalJoltage;
};

export const calculateLargerJoltage = (input: string): number => {
  let totalJoltage = 0;
  const banks = input.split("\n");

  for (const bank of banks) {
    const keep = 12; // We want to keep exactly 12 batteries in each result
    const remove = bank.length - keep; // Number of batteries we are allowed to remove
    const batteries: string[] = []; // Stack to store batteries for the largest 12-digit number
    let toRemove = remove; // Track how many batteries we can still remove

    // Iterate through each battery in the current bank
    for (const battery of bank) {
      // Remove smaller batteries from the batteries if the current digit is larger
      // and we still have batteries left to remove
      while (
        toRemove > 0 &&
        batteries.length > 0 &&
        batteries[batteries.length - 1] < battery
      ) {
        batteries.pop(); // Remove the smaller battery
        toRemove--; // Decrease the removal count
      }

      // Add the current battery to the batteries
      batteries.push(battery);
    }

    // Take the first 12 from batteries (in case batteries is longer)
    const total = batteries.slice(0, keep).join("");

    // Convert the 12-digit string to a number and add it to the running total
    totalJoltage += parseInt(total);
  }

  return totalJoltage;
};
