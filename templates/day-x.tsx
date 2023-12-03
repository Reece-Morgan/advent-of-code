import { Title } from "@aoc/components"
import styled from "styled-components";

const TwentyTwentyThree_DayX = () => {
    const partOne = () => {
        // Function for Part One
        return 'imcomplete'
    }

    const partTwo = () => {
        // Function for Part Two
        return 'imcomplete'
    }
   
    return (
        <>
            <Title>2023 - Day X</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne()}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo()}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DayX

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
