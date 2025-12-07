"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./input";
import { countTachyonBeams, countQuantumTimelines } from "./functions";

const TwentyTwentyFive_Day7 = () => {
  return (
    <>
      <Title>2025 - Day 7</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{countTachyonBeams(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{countQuantumTimelines(input)}</Answer>
    </>
  );
};

export default TwentyTwentyFive_Day7;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
