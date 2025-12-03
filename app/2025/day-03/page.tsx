"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { input } from "./input";
import { calculateJoltage, calculateLargerJoltage } from "./functions";

const TwentyTwentyFive_Day3 = () => {
  return (
    <>
      <Title>2025 - Day 3</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{calculateJoltage(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{calculateLargerJoltage(input)}</Answer>
    </>
  );
};

export default TwentyTwentyFive_Day3;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
