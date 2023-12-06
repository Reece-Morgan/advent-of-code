import { Title } from "@aoc/components"
import { daySixData, testData } from "puzzle-inputs/2023/6";
import styled from "styled-components";

const TwentyTwentyThree_DaySix = () => {
    const partOne = (data: string) => {
        const lines = data.trim().split(/\n/g);
        const time = lines[0].substring(lines[0].indexOf(':') + 1);
        const distance = lines[1].substring(lines[1].indexOf(':') + 1);

        const arrOfTime = time.split(/(\s+)/).filter(function(str) {
            return /\S/.test(str);
        });
        const arrOfDistance = distance.split(/(\s+)/).filter(function(str) {
            return /\S/.test(str);
        });

        const timesBeatenRecord = [];
        for (let t = 0; t < arrOfTime.length; t++) {
            let waysToBeatRecord = 0;
            let holdTime = 0;
            for (let i = 0; i < +arrOfTime[t]; i++) {
                const remainingTime = +arrOfTime[t] - holdTime;
                const distanceCovered = holdTime * remainingTime;
                if (distanceCovered > +arrOfDistance[t]) {
                    waysToBeatRecord++;
                }   
                holdTime++;
            }
            timesBeatenRecord.push(waysToBeatRecord);
        }

        return timesBeatenRecord.reduce((accumulator, currentValue) => accumulator * currentValue);
    }

    const partTwo = () => {
        // Function for Part Two
        return 'incomplete'
    }
   
    return (
        <>
            <Title>2023 - Day 6</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne(daySixData)}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo()}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DaySix

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
