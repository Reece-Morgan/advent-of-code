import { Title } from "@aoc/components"
import { dayFourData, testData } from "./input.ts";
import styled from "styled-components";

const TwentyTwentyThree_DayFour = () => {
    const partOne = (data: string) => {
        let totalSum = 0;
        const lines = data.trim().split(/\n/g);
        for (let i = 0; i < lines.length; i++) {
            let cardAmount = 0;
            const line = lines[i].substring(lines[i].indexOf(':') + 1);
            const arr = line.split('|');
            
            const winningNumbers = arr[0].split(/(\s+)/).filter(function(str) {
                return /\S/.test(str);
            });
            const yourNumbers = arr[1].split(/(\s+)/).filter(function(str) {
                return /\S/.test(str);
            });

            const commonNumbers = winningNumbers.filter((number) => yourNumbers.includes(number));
            if (commonNumbers.length > 0) cardAmount++;
            commonNumbers.slice(1).forEach(n => {
                cardAmount *= 2;
            })
            totalSum += cardAmount;
        }

        return totalSum;
    }

    type Card = {
        cardId: number;
        iterations: number;
    }

    const initializeCardData = (lines: string[]) => {
        const cardData: Card[] = []
        for (let i = 0; i < lines.length; i++) {
            const lineId = i + 1;
            const card = {cardId: lineId, iterations: 1}
            cardData.push(card);
        }
        return cardData;
    }

    const partTwo = (data: string) => {
        let totalScratchcards = 0;
        const originalLines = data.trim().split(/\n/g);
        const newLines = data.trim().split(/\n/g);
        const cardData = initializeCardData(originalLines);
        for (let i = 0; i < originalLines.length; i++) {
            const lineId = i + 1;
            const line = originalLines[i].substring(originalLines[i].indexOf(':') + 1);
            const arr = line.split('|');
            
            const winningNumbers = arr[0].split(/(\s+)/).filter(function(str) {
                return /\S/.test(str);
            });
            const yourNumbers = arr[1].split(/(\s+)/).filter(function(str) {
                return /\S/.test(str);
            });

            const commonNumbers = winningNumbers.filter((number) => yourNumbers.includes(number));

            // console.log('commonNumbers: ', i, ': ', commonNumbers);
            // console.log('winningNumbers: ', i, ': ', winningNumbers);
            // console.log('yourNumbers: ', i, ': ', yourNumbers);
            // Check if there is a next item in the array
            if (i < originalLines.length - 1) {
                let dataIndex = 0
                    for (let d = 0; d < cardData[dataIndex].iterations; d++) {
                        const id = i + 1;
                        let dupeLines: string[] = [];
                        const nextCards = originalLines.slice(id, id + commonNumbers.length);
                        const lineIds = nextCards.map(str => {
                            const match = str.match(/\d+/); // Match one or more digits
                            return match ? parseInt(match[0], 10) : NaN; // Convert the matched string to a number
                        });
                        for (let l = 0; l < lineIds.length; l++) {
                            console.log('surprise muthafucker: ', lineId)
                        }
                        dataIndex++;
                    }
                // const id = i + 1;
                // let dupeLines: string[] = [];
                // const nextCards = originalLines.slice(id, id + commonNumbers.length);
                // const lineIds = nextCards.map(str => {
                //     const match = str.match(/\d+/); // Match one or more digits
                //     return match ? parseInt(match[0], 10) : NaN; // Convert the matched string to a number
                // });
                // for (let l = 0; l < lineIds.length; l++) {
                //     cardData[lineIds[l] - 1].iterations++
                // }
                // newLines.splice(i + 1, 0, ...dupeLines);
            }
        }
            
        console.log('cardData: ', cardData);

        // console.log(originalLines)
        // console.log(newLines)
        
        // return totalScratchcards;
        return 'incomplete'
    }
   
    return (
        <>
            <Title>2023 - Day 4</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne(dayFourData)}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo(testData)}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DayFour

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
