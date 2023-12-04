import { Title } from "@aoc/components"
import { dayFourData, testData } from "puzzle-inputs/2023/4";
import styled from "styled-components";

const TwentyTwentyThree_DayFour = () => {
    const partOne = (data: string) => {
        let totalSum = 0;
        const lines = data.trim().split(/\n/g);
        for (let i = 0; i < lines.length; i++) {
            let cardAmount = 0;
            const line = lines[i].substring(lines[i].indexOf(':') + 1);
            const arr = line.split('|');
            
            const winningNumbers = arr[0].split(/(\s+)/).filter(function(str) {
                return /\S/.test(str);
            });
            const yourNumbers = arr[1].split(/(\s+)/).filter(function(str) {
                return /\S/.test(str);
            });

            const commonNumbers = winningNumbers.filter((number) => yourNumbers.includes(number));
            if (commonNumbers.length > 0) cardAmount++;
            commonNumbers.slice(1).forEach(n => {
                cardAmount *= 2;
            })
            totalSum += cardAmount;
        }

        return totalSum;
    }

    const partTwo = () => {
        // Function for Part Two
        return 'incomplete'
    }
   
    return (
        <>
            <Title>2023 - Day 4</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne(dayFourData)}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo()}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DayFour

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
