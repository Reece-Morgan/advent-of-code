"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { input } from "./input";
import { findFewestPaperRolls, findMostPaperRolls } from "./functions";

const TwentyTwentyFive_Day4 = () => {
  return (
    <>
      <Title>2025 - Day 4</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{findFewestPaperRolls(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{findMostPaperRolls(input)}</Answer>
    </>
  );
};

export default TwentyTwentyFive_Day4;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
