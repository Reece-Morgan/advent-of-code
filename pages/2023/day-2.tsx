import { Title } from "@aoc/components"
import { dayTwoData, testData } from "puzzle-inputs/2023/day-2/day-2";
import styled from "styled-components";

const TwentyTwentyThree_DayTwo = () => {
    const checkAmountOfCubes = (cubes: string[]): boolean => {
        if (cubes[1] === "red") {
            if (+cubes[0] <= 12) return true
        } else if (cubes[1] === "green") {
            if (+cubes[0] <= 13) return true
        } else if (cubes[1] === "blue") {
            if (+cubes[0] <= 14) return true
        }
        return false;
    }
    const partOne = () => {
        let combinedIds = 0;
        let iteration = 0;
        const lines = dayTwoData.trim().split(/\n/g);
        for (let i = 0; i < lines.length; i++) {
            iteration = 0;
            const gameId = i + 1;
            const line = lines[i].substring(lines[i].indexOf(':') + 1);
            const arr = line.split(';').map(l => l.split(',')).flat(1);
            
            while (iteration < arr.length) {
                const cubeData = arr[iteration].trim().split(' ');
                const bool = checkAmountOfCubes(cubeData);
                if (!bool) break
                iteration++;
            }
            
            if (iteration === arr.length) combinedIds += gameId;
        }
        return combinedIds;
    }

    const partTwo = () => {
        let totalPower = 0;
        const lines = dayTwoData.trim().split(/\n/g);
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].substring(lines[i].indexOf(':') + 1);
            const arr = line.split(';').map(l => l.split(',')).flat(1);
            
            const maxCounts: { [key: string]: number } = {"red": 0, "green": 0, "blue": 0};

            for (const item of arr) {
                const parts = item.split(" ");
                const colour = parts[2];
                const count = parseInt(parts[1]);

                // Update the maximum count for the corresponding colour
                if (count > maxCounts[colour]) {
                    maxCounts[colour] = count;
                }
            }

            totalPower += maxCounts["red"] * maxCounts["green"] * maxCounts["blue"]
        }
        return totalPower;
    }
   
    return (
        <>
            <Title>2023 - Day 2</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne()}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo()}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DayTwo

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
