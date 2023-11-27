import { Title } from "@aoc/components"
import { CalendarDoor } from "lib/component-library/calendar-door/calendar-door";
import styled from "styled-components";

const TwentyTwentyThree = () => {
    return (
        <>
            <Title>2023 Advent of Code</Title>
            <Wrapper>
                <CalendarDoor link="2023/day-one" isComplete={true}>1</CalendarDoor>
                <CalendarDoor link="2023/day-two" isComplete={false}>2</CalendarDoor>
                <CalendarDoor link="2023/day-three" isComplete={false}>3</CalendarDoor>
                <CalendarDoor link="2023/day-four" isComplete={false}>4</CalendarDoor>
                <CalendarDoor link="2023/day-five" isComplete={false}>5</CalendarDoor>
                <CalendarDoor link="2023/day-six" isComplete={false}>6</CalendarDoor>
                <CalendarDoor link="2023/day-seven" isComplete={false}>7</CalendarDoor>
                <CalendarDoor link="2023/day-eight" isComplete={false}>8</CalendarDoor>
                <CalendarDoor link="2023/day-nine" isComplete={false}>9</CalendarDoor>
                <CalendarDoor link="2023/day-ten" isComplete={false}>10</CalendarDoor>
                <CalendarDoor link="2023/day-eleven" isComplete={false}>11</CalendarDoor>
                <CalendarDoor link="2023/day-twelve" isComplete={false}>12</CalendarDoor>
                <CalendarDoor link="2023/day-thirteen" isComplete={false}>13</CalendarDoor>
                <CalendarDoor link="2023/day-fourteen" isComplete={false}>14</CalendarDoor>
                <CalendarDoor link="2023/day-fifteen" isComplete={false}>15</CalendarDoor>
                <CalendarDoor link="2023/day-sixteen" isComplete={false}>16</CalendarDoor>
                <CalendarDoor link="2023/day-seventeen" isComplete={false}>17</CalendarDoor>
                <CalendarDoor link="2023/day-eighteen" isComplete={false}>18</CalendarDoor>
                <CalendarDoor link="2023/day-nineteen" isComplete={false}>19</CalendarDoor>
                <CalendarDoor link="2023/day-twenty" isComplete={false}>20</CalendarDoor>
                <CalendarDoor link="2023/day-twenty-one" isComplete={false}>21</CalendarDoor>
                <CalendarDoor link="2023/day-twenty-two" isComplete={false}>22</CalendarDoor>
                <CalendarDoor link="2023/day-twenty-three" isComplete={false}>23</CalendarDoor>
                <CalendarDoor link="2023/day-thwenty-four" isComplete={false}>24</CalendarDoor>
            </Wrapper>
        </>
    )
}

export default TwentyTwentyThree;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1280px;
    margin: 0 auto;
`;