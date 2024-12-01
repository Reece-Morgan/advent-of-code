import { Title } from "@aoc/components"
import styled from "styled-components";

const TwentyTwentyFour_DayX = () => {
    const partOne = () => {
        // Function for Part One
        return 'incomplete'
    }

    const partTwo = () => {
        // Function for Part Two
        return 'incomplete'
    }
   
    return (
        <>
            <Title>2024 - Day X</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne()}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo()}</Answer>
        </>
    )
}

export default TwentyTwentyFour_DayX

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
