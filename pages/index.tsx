import Link from 'next/link';
import styled from 'styled-components';
import { Title } from '@aoc/components';

const AdventOfCode = () => {
  return (
    <Wrapper>
        <Title>Advent of Code</Title>
        <StyledList>
            <List><StyledLink href='/2024'>AoC 2024</StyledLink></List>
            <List><StyledLink href='/2023'>AoC 2023</StyledLink></List>
        </StyledList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const StyledList = styled.ul`
  list-style-type: none;
  text-align: center;
  padding: 0;
`;

const List = styled.li``;

const StyledLink = styled(Link)`
  font-size: 2em;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default AdventOfCode;