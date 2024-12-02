"use client";

import { Title } from "@aoc/components";
import styled from "styled-components";
import { input } from "./input";
import { calculateSafeLevels } from "./functions";

const TwentyTwentyFour_DayTwo = () => {
  const partTwo = () => {
    // Function for Part Two
    return "incomplete";
  };

  return (
    <>
      <Title>2024 - Day 2</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{calculateSafeLevels(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{partTwo()}</Answer>
    </>
  );
};

export default TwentyTwentyFour_DayTwo;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
