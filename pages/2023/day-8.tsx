import { Title } from "@aoc/components"
import { dayEightData, testData, testData2, testData3 } from "puzzle-inputs/2023/8";
import styled from "styled-components";

const TwentyTwentyThree_DayEight = () => {
    interface Locations {
        current: string;
        left: string;
        right: string;
    }

    const partOne = (data: string) => {
        let numberOfSteps = 0;

        const lines = data.trim().split(/\n/g).filter(item => item !== "");
        const dir = lines.splice(0, 1);
        const directions = dir[0].split('');
        let currentLocation = "AAA";

        const locationArr: Locations[] = [];
        lines.forEach(line => {
            const matches = line.match(/(\w+) = \((\w+), (\w+)\)/);
            if (matches) locationArr.push({current: matches[1], left: matches[2], right: matches[3]})
        })

        while (currentLocation !== 'ZZZ') {
            for (let i = 0; i < directions.length; i++) {
                const nextDir = directions[i];
                const index = locationArr.findIndex(item => item.current === currentLocation);
                const currentItem = locationArr[index];
                currentLocation = nextDir === 'L' ? currentItem.left : currentItem.right;
                numberOfSteps++;
                if (currentLocation === 'ZZZ') return numberOfSteps;
            }
        }

        return 'Not at correct location';
    }

    const partTwo = (data: string) => {
        let numberOfSteps = 0;

        const lines = data.trim().split(/\n/g).filter(item => item !== "");
        const dir = lines.splice(0, 1);
        const directions = dir[0].split('');
        let currentLocation: string[] = [];

        const locationArr: Locations[] = [];
        lines.forEach(line => {
            const matches = line.match(/(\w+) = \((\w+), (\w+)\)/);
            if (matches) locationArr.push({current: matches[1], left: matches[2], right: matches[3]})
        })

        const startingLocations: string[] = [];
        locationArr.forEach(loc => {
            if (loc.current.endsWith('A')) startingLocations.push(loc.current);
        })

        currentLocation = startingLocations;

        let endsWithZ = 0;
        while (endsWithZ !== startingLocations.length) {
            for (let d = 0; d < directions.length; d++) {
                endsWithZ = 0;
                for (let l = 0; l < startingLocations.length; l++) {
                    console.log('Im trying!')
                    const nextDir = directions[d];
                    const index = locationArr.findIndex(item => item.current === currentLocation[l]);
                    const currentItem = locationArr[index];
                    const nextLocation = nextDir === 'L' ? currentItem.left : currentItem.right;
                    const newIndex = locationArr.findIndex(item => item.current === nextLocation);
                    const newCurrentItem = locationArr[newIndex];
                    currentLocation[l] = newCurrentItem.current;
                    numberOfSteps++;
                    if (currentLocation[l].endsWith('Z')) endsWithZ++;
                }
            }
        }

        return numberOfSteps / startingLocations.length;
    }
   
    return (
        <>
            <Title>2023 - Day 8</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne(dayEightData)}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo(dayEightData)}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DayEight

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
