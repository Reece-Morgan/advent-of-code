"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./inputs";
import { calculatePassword } from "./functions";

const TwentyTwentyFive_Day1 = () => {
  return (
    <>
      <Title>2025 - Day 1</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{calculatePassword(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>incomplete</Answer>
    </>
  );
};

export default TwentyTwentyFive_Day1;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
