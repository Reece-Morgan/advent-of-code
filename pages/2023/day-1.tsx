import { Title } from "@aoc/components";
import styled from "styled-components";
import { getDayInput, replaceWordsWithNumbers } from "@aoc/shared-utils";
import { useEffect, useState } from "react";
import { PuzzleInput } from "@aoc/types";

const TwentyTwentyThree_DayOne = () => {
  const [data, setData] = useState<PuzzleInput>({
    data: {
      puzzleInput: {
        title: "",
        testData: {
          markdown: "",
        },
        inputData: {
          markdown: "",
        },
      },
    },
  });

  useEffect(() => {
    const fetchInputData = async () => {
      const res = await getDayInput("2023 Day 1");
      setData(res);
    };
    fetchInputData();
  }, []);

  const formatLines = (data: string) => {
    let totalSum: number = 0;
    // Split data by newline character
    const lines = data.trim().split(/\n/g);
    for (let i = 0; i < lines.length; i++) {
      // trim whitespace
      const line = lines[i].trim();
      // remove all characters that are not numbers
      const digits = line.replace(/[^0-9]+/gi, "");
      // get first and last digits and concatenate
      const firstDigit = digits.charAt(0);
      const lastDigit = digits.charAt(digits.length - 1);
      const concatenatedNumber = firstDigit + lastDigit;
      // add concatenated number to total sum
      totalSum += +concatenatedNumber;
    }
    return totalSum;
  };

  const partOne = () => {
    return formatLines(data.data.puzzleInput.inputData.markdown);
  };

  const partTwo = () => {
    const updatedLines = replaceWordsWithNumbers(data.data.puzzleInput.inputData.markdown);
    return formatLines(updatedLines);
  };

  return (
    <>
      <Title>2023 - Day 1</Title>
      <Subtitle>Part 1</Subtitle>
      <Answer>{partOne()}</Answer>
      <Subtitle>Part 2</Subtitle>
      <Answer>{partTwo()}</Answer>
    </>
  );
};

export default TwentyTwentyThree_DayOne;

const Subtitle = styled.h2`
  text-align: center;
`;

const Answer = styled.div`
  text-align: center;
`;
