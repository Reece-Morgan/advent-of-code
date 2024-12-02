"use client";

import { Title } from "@aoc/components";
import { dayOneInput } from "./input";
import { calculateIdDistance, calculateSimilarityScore } from "./functions";
import styled from "styled-components";

const TwentyTwentyFour_DayOne = () => {
  return (
    <>
      <Title>2024 - Day 1</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{calculateIdDistance(dayOneInput)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{calculateSimilarityScore(dayOneInput)}</Answer>
    </>
  );
};

export default TwentyTwentyFour_DayOne;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
