import { Title } from "@aoc/components"
import { CalendarDoor } from "lib/component-library/calendar-door/calendar-door";
import styled from "styled-components";

const TwentyTwentyThree = () => {
    return (
        <>
            <Title>2023 Advent of Code</Title>
            <Wrapper>
                <CalendarDoor link="2023/day-1" isStarted={true} status="gold">1</CalendarDoor>
                <CalendarDoor link="2023/day-2" isStarted={true} status="gold">2</CalendarDoor>
                <CalendarDoor link="2023/day-3" isStarted={true} status="n/a">3</CalendarDoor>
                <CalendarDoor link="2023/day-4" isStarted={true} status="silver">4</CalendarDoor>
                <CalendarDoor link="2023/day-5" isStarted={true} status="n/a">5</CalendarDoor>
                <CalendarDoor link="2023/day-6" isStarted={true} status="gold">6</CalendarDoor>
                <CalendarDoor link="2023/day-7" isStarted={true} status="gold">7</CalendarDoor>
                <CalendarDoor link="2023/day-8" isStarted={true} status="silver">8</CalendarDoor>
                <CalendarDoor link="2023/day-9" isStarted={false} status="n/a">9</CalendarDoor>
                <CalendarDoor link="2023/day-10" isStarted={false} status="n/a">10</CalendarDoor>
                <CalendarDoor link="2023/day-11" isStarted={false} status="n/a">11</CalendarDoor>
                <CalendarDoor link="2023/day-12" isStarted={false} status="n/a">12</CalendarDoor>
                <CalendarDoor link="2023/day-13" isStarted={false} status="n/a">13</CalendarDoor>
                <CalendarDoor link="2023/day-14" isStarted={false} status="n/a">14</CalendarDoor>
                <CalendarDoor link="2023/day-15" isStarted={false} status="n/a">15</CalendarDoor>
                <CalendarDoor link="2023/day-16" isStarted={false} status="n/a">16</CalendarDoor>
                <CalendarDoor link="2023/day-17" isStarted={false} status="n/a">17</CalendarDoor>
                <CalendarDoor link="2023/day-18" isStarted={false} status="n/a">18</CalendarDoor>
                <CalendarDoor link="2023/day-19" isStarted={false} status="n/a">19</CalendarDoor>
                <CalendarDoor link="2023/day-20" isStarted={false} status="n/a">20</CalendarDoor>
                <CalendarDoor link="2023/day-21" isStarted={false} status="n/a">21</CalendarDoor>
                <CalendarDoor link="2023/day-22" isStarted={false} status="n/a">22</CalendarDoor>
                <CalendarDoor link="2023/day-23" isStarted={false} status="n/a">23</CalendarDoor>
                <CalendarDoor link="2023/day-24" isStarted={false} status="n/a">24</CalendarDoor>
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