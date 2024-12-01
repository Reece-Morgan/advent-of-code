import { Title } from "@aoc/components";
import { dayOneInput, dayOneTestData } from "puzzle-inputs/2024/1";
import styled from "styled-components";

const TwentyTwentyFour_DayX = () => {
  const partOne = (input: string) => {
    // Initialize two empty arrays to contain the list of Location IDs
    // and number object to contain total distance
    let leftIds: number[] = [];
    let rightIds: number[] = [];
    let totalDistance: number = 0;

    // Split the input string by new lines
    const lines = input.split("\n");

    // Loop through each line and split by spaces, then push the values to the corresponding arrays
    lines.forEach((line) => {
      const [left, right] = line.split(/\s+/).map(Number); // Split by spaces and convert to numbers
      leftIds.push(left);
      rightIds.push(right);
    });

    // order array from in ascending order
    leftIds.sort((a, b) => a - b);
    rightIds.sort((a, b) => a - b);

    // find the distance between both ids in the same position i.e. distance between leftIds[0] and rightIds[0]
    for (let i = 0; i < leftIds.length; i++) {
      let distance: number;
      if (leftIds[i] > rightIds[i]) {
        distance = leftIds[i] - rightIds[i];
      } else {
        distance = rightIds[i] - leftIds[i];
      }
      totalDistance += distance
    }

    return totalDistance;
  };

  const partTwo = () => {
    // Function for Part Two
    return "incomplete";
  };

  return (
    <>
      <Title>2024 - Day 1</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{partOne(dayOneInput)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{partTwo()}</Answer>
    </>
  );
};

export default TwentyTwentyFour_DayX;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
