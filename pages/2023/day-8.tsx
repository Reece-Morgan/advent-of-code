import { Title } from "@aoc/components"
import { dayEightData, testData3 } from "puzzle-inputs/2023/8";
import styled from "styled-components";

const TwentyTwentyThree_DayEight = () => {
    let numberOfStepsForPartTwo = 0;
    let endsWithZ = 0;
    let currentLocationForPartTwo: string[] = [];
    
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

        while (currentLocation !== 'ZZZ') {currentLocation
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
        const lines = data.trim().split(/\n/g).filter(item => item !== "");
        const dir = lines.splice(0, 1);
        const directions = dir[0].split('');

        const locationArr: Locations[] = [];
        lines.forEach(line => {
            const matches = line.match(/(\w+) = \((\w+), (\w+)\)/);
            if (matches) locationArr.push({current: matches[1], left: matches[2], right: matches[3]})
        })

        locationArr.forEach(loc => {
            if (loc.current.endsWith('A')) currentLocationForPartTwo.push(loc.current);
        })

        let chunkSize = 10;
        let breakLoop = false;
        // TODO: Optimize this loop
        // while (endsWithZ !== currentLocationForPartTwo.length) {
        //     if (breakLoop) break;
        //     for (let i = 0; i < directions.length; i += chunkSize) {
        //         const chunk = directions.slice(i, i + chunkSize);
        //         processDirections(chunk, currentLocationForPartTwo, locationArr);
        //     }
        // }

        return 'incomplete';

        return numberOfStepsForPartTwo;
    }

    const processDirections = (directions: string[], currentLocationForPartTwo: string[], locationArr: Locations[]) => {
        directions.forEach(dir => {
            endsWithZ = 0;
            for (let l = 0; l < currentLocationForPartTwo.length; l++) {
                const currentItem = locationArr[locationArr.findIndex(item => item.current === currentLocationForPartTwo[l])];
                const nextLocation = dir === 'L' ? currentItem.left : currentItem.right;
                const newCurrentItem = locationArr[locationArr.findIndex(item => item.current === nextLocation)];
                currentLocationForPartTwo[l] = newCurrentItem.current;
                if (currentLocationForPartTwo[l].endsWith('Z')) endsWithZ++;
            }
            numberOfStepsForPartTwo++;
        });
        console.log('endsWithZ: ', endsWithZ);
        if (endsWithZ > 0) console.log('currentLocationForPartTwo: ', currentLocationForPartTwo);
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
