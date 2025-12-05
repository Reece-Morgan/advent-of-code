"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./input";
import { findFreshIngredients } from "./functions";

const TwentyTwentyFive_Day5 = () => {
  return (
    <>
      <Title>2025 - Day 5</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{findFreshIngredients(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>incomplete</Answer>
    </>
  );
};

export default TwentyTwentyFive_Day5;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
