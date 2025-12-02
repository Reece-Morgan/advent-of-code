"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./input";
import { calculateInvalidIds } from "./functions";

const TwentyTwentyFive_Day2 = () => {
  return (
    <>
      <Title>2025 - Day 2</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{calculateInvalidIds(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>incomplete</Answer>
    </>
  );
};

export default TwentyTwentyFive_Day2;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
