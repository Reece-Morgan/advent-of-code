import { Title } from "@aoc/components"
import styled from "styled-components";
import { dayOneData } from '../../puzzle-inputs/2023/day-1/day-1';
import { replaceWordsWithNumbers } from "@aoc/shared-utils";

const TwentyTwentyThree_DayOne = () => {
    const fakeData = `
        two1nine
        eightwothree
        abcone2threexyz
        xtwone3four
        4nineeightseven2
        zoneight234
        7pqrstsixteen
    `;
    const formatLines = (data: string) => {
        let totalSum: number = 0;
        // Split data by newline character
        const lines = data.trim().split(/\n/g);
        for (let i = 0; i < lines.length; i++) {
            // trim whitespace
            const line = lines[i].trim();
            // remove all characters that are not numbers
            const digits = line.replace(/[^0-9]+/gi, '')
            // get first and last digits and concatenate
            const firstDigit = digits.charAt(0);
            const lastDigit = digits.charAt(digits.length - 1);
            const concatenatedNumber = firstDigit + lastDigit;
            // console.log(i, ': ', firstDigit, ' ', lastDigit, ' ', concatenatedNumber);
            // add concatenated number to total sum
            totalSum += +concatenatedNumber;
        }
        return totalSum;
    }

    const partOne = () => {
        return formatLines(dayOneData);
    }

    const partTwo = () => {
        const updatedLines = replaceWordsWithNumbers(dayOneData);

        console.log(updatedLines)
        return formatLines(updatedLines);
    }
   
    return (
        <>
            <Title>2023 - Day 1</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne()}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo()}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DayOne

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
