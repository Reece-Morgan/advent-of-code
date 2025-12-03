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
