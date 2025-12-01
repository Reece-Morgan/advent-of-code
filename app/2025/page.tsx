"use client";

import { Title } from "@aoc/components";
import { CalendarDoor } from "lib/component-library/calendar-door/calendar-door";
import styled from "styled-components";

const TwentyTwentyFive = () => {
  return (
    <>
      <Title>2025 Advent of Code</Title>
      <Text>
        This year, advent of code has been changed to 12 days instead of the
        usual 24
      </Text>
      <Wrapper>
        <CalendarDoor link="2025/day-01" isStarted={true} status="gold">
          1
        </CalendarDoor>
        <CalendarDoor link="2025/day-02" isStarted={false} status="n/a">
          2
        </CalendarDoor>
        <CalendarDoor link="2025/day-03" isStarted={false} status="n/a">
          3
        </CalendarDoor>
        <CalendarDoor link="2025/day-04" isStarted={false} status="n/a">
          4
        </CalendarDoor>
        <CalendarDoor link="2025/day-05" isStarted={false} status="n/a">
          5
        </CalendarDoor>
        <CalendarDoor link="2025/day-06" isStarted={false} status="n/a">
          6
        </CalendarDoor>
        <CalendarDoor link="2025/day-07" isStarted={false} status="n/a">
          7
        </CalendarDoor>
        <CalendarDoor link="2025/day-08" isStarted={false} status="n/a">
          8
        </CalendarDoor>
        <CalendarDoor link="2025/day-09" isStarted={false} status="n/a">
          9
        </CalendarDoor>
        <CalendarDoor link="2025/day-10" isStarted={false} status="n/a">
          10
        </CalendarDoor>
        <CalendarDoor link="2025/day-11" isStarted={false} status="n/a">
          11
        </CalendarDoor>
        <CalendarDoor link="2025/day-12" isStarted={false} status="n/a">
          12
        </CalendarDoor>
      </Wrapper>
    </>
  );
};

export default TwentyTwentyFive;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1280px;
  margin: 0 auto;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.2em;
`;
