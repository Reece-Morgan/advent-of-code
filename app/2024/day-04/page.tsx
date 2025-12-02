"use client";

import styled from "styled-components";
import { Title } from "@aoc/components";
import { testData, input } from "./input";
import { findXmas, countMasXShape } from "./functions";

const TwentyTwentyFour_DayFour = () => {
  return (
    <>
      <Title>2024 - Day 4</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{findXmas(input)}</Answer>
      <Subtitle>Part 2</Subtitle>
      {/* <Answer>{countMasXShape(input)}</Answer> */}
      <Answer>incomplete</Answer>
    </>
  );
};

export default TwentyTwentyFour_DayFour;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
