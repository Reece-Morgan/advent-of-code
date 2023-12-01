import { Title } from "@aoc/components"
import styled from "styled-components";
import { partOneData } from '../../puzzle-inputs/2023/day-1/part-1';

const TwentyTwentyThree_DayOne = () => {
    const partOne = () => {
        let totalSum: number = 0;
        // Split data by newline character
        const lines = partOneData.trim().split(/\n/g);
        for (let i = 0; i < lines.length; i++) {
            // trim whitespace
            const line = lines[i].trim();
            // remove all characters that are not numbers
            const digits = line.replace(/[^0-9]+/gi, '')
            // get first and last digits and concatenate
            const firstDigit = digits.charAt(0);
            const lastDigit = digits.charAt(digits.length - 1);
            const concatenatedNumber = firstDigit + lastDigit;
            // add concatenated number to toal sum
            totalSum += +concatenatedNumber;
        }
        return totalSum;
    }
    return (
        <>
            <Title>2023 - Day 1</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne()}</Answer>
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
