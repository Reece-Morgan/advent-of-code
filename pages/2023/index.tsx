import { Title } from "@aoc/components"
import { CalendarDoor } from "lib/component-library/calendar-door/calendar-door";
import styled from "styled-components";

const TwentyTwentyThree = () => {
    return (
        <>
            <Title>2023 Advent of Code</Title>
            <Wrapper>
                <CalendarDoor link="2023/day-1" isComplete={true}>1</CalendarDoor>
                <CalendarDoor link="2023/day-2" isComplete={true}>2</CalendarDoor>
                <CalendarDoor link="2023/day-3" isComplete={false}>3</CalendarDoor>
                <CalendarDoor link="2023/day-4" isComplete={false}>4</CalendarDoor>
                <CalendarDoor link="2023/day-5" isComplete={false}>5</CalendarDoor>
                <CalendarDoor link="2023/day-6" isComplete={false}>6</CalendarDoor>
                <CalendarDoor link="2023/day-7" isComplete={false}>7</CalendarDoor>
                <CalendarDoor link="2023/day-8" isComplete={false}>8</CalendarDoor>
                <CalendarDoor link="2023/day-9" isComplete={false}>9</CalendarDoor>
                <CalendarDoor link="2023/day-10" isComplete={false}>10</CalendarDoor>
                <CalendarDoor link="2023/day-11" isComplete={false}>11</CalendarDoor>
                <CalendarDoor link="2023/day-12" isComplete={false}>12</CalendarDoor>
                <CalendarDoor link="2023/day-13" isComplete={false}>13</CalendarDoor>
                <CalendarDoor link="2023/day-14" isComplete={false}>14</CalendarDoor>
                <CalendarDoor link="2023/day-15" isComplete={false}>15</CalendarDoor>
                <CalendarDoor link="2023/day-16" isComplete={false}>16</CalendarDoor>
                <CalendarDoor link="2023/day-17" isComplete={false}>17</CalendarDoor>
                <CalendarDoor link="2023/day-18" isComplete={false}>18</CalendarDoor>
                <CalendarDoor link="2023/day-19" isComplete={false}>19</CalendarDoor>
                <CalendarDoor link="2023/day-20" isComplete={false}>20</CalendarDoor>
                <CalendarDoor link="2023/day-21" isComplete={false}>21</CalendarDoor>
                <CalendarDoor link="2023/day-22" isComplete={false}>22</CalendarDoor>
                <CalendarDoor link="2023/day-23" isComplete={false}>23</CalendarDoor>
                <CalendarDoor link="2023/day-24" isComplete={false}>24</CalendarDoor>
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