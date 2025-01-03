"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./input";
import {
  getTotalOfMiddleValues,
  getValueOfIncorrectlyOrderedUpdates,
} from "./functions";

const TwentyTwentyFour_DayFive = () => {
  return (
    <>
      <Title>2024 - Day 5</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{getTotalOfMiddleValues(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{getValueOfIncorrectlyOrderedUpdates(input)}</Answer>
    </>
  );
};

export default TwentyTwentyFour_DayFive;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
