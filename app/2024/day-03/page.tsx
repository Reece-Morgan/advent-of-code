"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./input";
import { calculateMultiplcation } from "./functions";

const TwentyTwentyFour_DayThree = () => {
  return (
    <>
      <Title>2024 - Day 3</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{calculateMultiplcation(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>incomplete</Answer>
    </>
  );
};

export default TwentyTwentyFour_DayThree;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
