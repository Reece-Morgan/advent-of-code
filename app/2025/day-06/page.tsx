"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./input";
import { calculateMathProblem } from "./functions";

const TwentyTwentyFive_Day6 = () => {
  return (
    <>
      <Title>2025 - Day 6</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{calculateMathProblem(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>incomplete</Answer>
    </>
  );
};

export default TwentyTwentyFive_Day6;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
