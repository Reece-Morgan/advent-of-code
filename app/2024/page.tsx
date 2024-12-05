"use client";

import { Title } from "@aoc/components";
import { CalendarDoor } from "lib/component-library/calendar-door/calendar-door";
import styled from "styled-components";

const TwentyTwentyFour = () => {
  return (
    <>
      <Title>2024 Advent of Code</Title>
      <Wrapper>
        <CalendarDoor link="2024/day-01" isStarted={true} status="gold">
          1
        </CalendarDoor>
        <CalendarDoor link="2024/day-02" isStarted={true} status="gold">
          2
        </CalendarDoor>
        <CalendarDoor link="2024/day-03" isStarted={true} status="gold">
          3
        </CalendarDoor>
        <CalendarDoor link="2024/day-04" isStarted={true} status="silver">
          4
        </CalendarDoor>
        <CalendarDoor link="2024/day-05" isStarted={true} status="silver">
          5
        </CalendarDoor>
        <CalendarDoor link="2024/day-06" isStarted={false} status="n/a">
          6
        </CalendarDoor>
        <CalendarDoor link="2024/day-07" isStarted={false} status="n/a">
          7
        </CalendarDoor>
        <CalendarDoor link="2024/day-08" isStarted={false} status="n/a">
          8
        </CalendarDoor>
        <CalendarDoor link="2024/day-09" isStarted={false} status="n/a">
          9
        </CalendarDoor>
        <CalendarDoor link="2024/day-10" isStarted={false} status="n/a">
          10
        </CalendarDoor>
        <CalendarDoor link="2024/day-11" isStarted={false} status="n/a">
          11
        </CalendarDoor>
        <CalendarDoor link="2024/day-12" isStarted={false} status="n/a">
          12
        </CalendarDoor>
        <CalendarDoor link="2024/day-13" isStarted={false} status="n/a">
          13
        </CalendarDoor>
        <CalendarDoor link="2024/day-14" isStarted={false} status="n/a">
          14
        </CalendarDoor>
        <CalendarDoor link="2024/day-15" isStarted={false} status="n/a">
          15
        </CalendarDoor>
        <CalendarDoor link="2024/day-16" isStarted={false} status="n/a">
          16
        </CalendarDoor>
        <CalendarDoor link="2024/day-17" isStarted={false} status="n/a">
          17
        </CalendarDoor>
        <CalendarDoor link="2024/day-18" isStarted={false} status="n/a">
          18
        </CalendarDoor>
        <CalendarDoor link="2024/day-19" isStarted={false} status="n/a">
          19
        </CalendarDoor>
        <CalendarDoor link="2024/day-20" isStarted={false} status="n/a">
          20
        </CalendarDoor>
        <CalendarDoor link="2024/day-21" isStarted={false} status="n/a">
          21
        </CalendarDoor>
        <CalendarDoor link="2024/day-22" isStarted={false} status="n/a">
          22
        </CalendarDoor>
        <CalendarDoor link="2024/day-23" isStarted={false} status="n/a">
          23
        </CalendarDoor>
        <CalendarDoor link="2024/day-24" isStarted={false} status="n/a">
          24
        </CalendarDoor>
      </Wrapper>
    </>
  );
};

export default TwentyTwentyFour;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 1280px;
  margin: 0 auto;
`;
