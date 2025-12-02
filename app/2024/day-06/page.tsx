"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./input";
import { getDistinctPositions } from "./functions";

const TwentyTwentyFour_DaySix = () => {
  return (
    <>
      <Title>2024 - Day 6</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{getDistinctPositions(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>incomplete</Answer>
    </>
  );
};

export default TwentyTwentyFour_DaySix;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
