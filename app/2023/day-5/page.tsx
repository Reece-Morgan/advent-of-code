"use client";

import { Title } from "@aoc/components";
import styled from "styled-components";

const TwentyTwentyThree_DayFive = () => {
  const partOne = () => {
    // Function for Part One
    return "incomplete";
  };

  const partTwo = () => {
    // Function for Part Two
    return "incomplete";
  };

  return (
    <>
      <Title>2023 - Day 5</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{partOne()}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{partTwo()}</Answer>
    </>
  );
};

export default TwentyTwentyThree_DayFive;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
