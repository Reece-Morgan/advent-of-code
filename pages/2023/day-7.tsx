import { Title } from "@aoc/components"
import { daySevenData, testData } from "puzzle-inputs/2023/7";
import styled from "styled-components";

const TwentyTwentyThree_DaySeven = () => {
    interface cards {
        hand: string;
        bid: string;
        rank: number;
        type: string;
    }

    const partOne = (data: string) => {
        let totalWinnings = 0;
        const lines = data.trim().split(/\n/g);
        let currentRank = lines.length;

        const allHands: cards[] = [];

        const fiveOfAKind: cards[] = [];
        const fourOfAKind: cards[] = [];
        const fullHouse: cards[] = [];
        const threeOfAKind: cards[] = [];
        const twoPair: cards[] = [];
        const onePair: cards[] = [];
        const highCard: cards[] = [];
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].split(' ');
            if (isFiveOfAKind(line[0])) fiveOfAKind.push({hand: line[0], bid: line[1], rank: 0, type: 'five of a kind'})
            else if (isFourOfAKind(line[0])) fourOfAKind.push({hand: line[0], bid: line[1], rank: 0, type: 'four of a kind'})
            else if (isFullHouse(line[0])) fullHouse.push({hand: line[0], bid: line[1], rank: 0, type: 'full house'})
            else if (isThreeOfAKind(line[0])) threeOfAKind.push({hand: line[0], bid: line[1], rank: 0, type: 'three of a kind'})
            else if (isTwoPair(line[0])) twoPair.push({hand: line[0], bid: line[1], rank: 0, type: 'two pair'})
            else if (isOnePair(line[0])) onePair.push({hand: line[0], bid: line[1], rank: 0, type: 'one pair'})
            else highCard.push({hand: line[0], bid: line[1], rank: 0, type: 'high card'})
        }

        fiveOfAKind.sort(customSort)
        fourOfAKind.sort(customSort)
        fullHouse.sort(customSort)
        threeOfAKind.sort(customSort)
        twoPair.sort(customSort)
        onePair.sort(customSort)
        highCard.sort(customSort)

        fiveOfAKind.forEach(item => {
            item.rank = currentRank
            currentRank--;
        })

        fourOfAKind.forEach(item => {
            item.rank = currentRank
            currentRank--;
        })

        fullHouse.forEach(item => {
            item.rank = currentRank
            currentRank--;
        })

        threeOfAKind.forEach(item => {
            item.rank = currentRank
            currentRank--;
        })

        twoPair.forEach(item => {
            item.rank = currentRank
            currentRank--;
        })

        onePair.forEach(item => {
            item.rank = currentRank
            currentRank--;
        })

        highCard.forEach(item => {
            item.rank = currentRank
            currentRank--;
        })
        
        const combinedData = allHands.concat(fiveOfAKind, fourOfAKind, fullHouse, threeOfAKind, twoPair, onePair, highCard);

        combinedData.map(item => {
            const value = +item.bid * item.rank;
            totalWinnings += value;
        })

        return totalWinnings;
    }

    const partTwo = () => {
        // Function for Part Two
        return 'incomplete'
    }

    const customSort = (a: cards, b: cards): number => {
        const cardOrder = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']
        // const indexA = cardOrder.indexOf(a.hand[0]);
        // const indexB = cardOrder.indexOf(b.hand[0]);

        // return indexA - indexB;

        for (let i = 0; i < Math.min(a.hand.length, b.hand.length); i++) {
            const charA = a.hand[i];
            const charB = b.hand[i];

            const indexA = cardOrder.indexOf(charA);
            const indexB = cardOrder.indexOf(charB);

            // Compare based on the current characters
            if (indexA !== indexB) {
                return indexA - indexB;
            }
        }

        // If all characters are the same up to the minimum length, compare based on length
        return a.hand.length - b.hand.length;
    }

    const isFiveOfAKind = (cardLabels: string) => {
        const input = cardLabels.toLowerCase();
        // check if every character matches the first one
        return input.split('').every(char => char === input[0])
    }
    
    const isFourOfAKind = (cardLabels: string) => {
        const input = cardLabels.toLowerCase();

        // Use an array to keep track of characters and times used
        const characters: string[] = []

        // Iterate through the string and check for uniqueness
        for (const char of input) {
            characters.push(char);
        }

        let isFour: boolean = false;
        const itemCount = new Map<any, number>();
        characters.forEach(item => {
            itemCount.set(item, (itemCount.get(item) || 0) + 1);
            // Check if the count is 4 for any item
            if (itemCount.get(item) === 4) {
                isFour = true;
            }
        })
        
        return isFour;
    }
    
    const isFullHouse = (cardLabels: string) => {
        const input = cardLabels.toLowerCase();

        // Count occurrences of each character
        const charCount: { [key: string]: number } = {};

        for (const char of input) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        const values = Object.values(charCount);

        return (
            values.includes(3) &&
            values.includes(2)
        );
    }
    
    const isThreeOfAKind = (cardLabels: string) => {
        const input = cardLabels.toLowerCase();

        // Use an array to keep track of characters and times used
        const characters: string[] = []

        // Iterate through the string and check for uniqueness
        for (const char of input) {
            characters.push(char);
        }

        let isThree: boolean = false;
        const itemCount = new Map<any, number>();
        characters.forEach(item => {
            itemCount.set(item, (itemCount.get(item) || 0) + 1);
            // Check if the count is 3 for any item
            if (itemCount.get(item) === 3) {
                isThree = true;
            }
        })
        
        return isThree;
    };
    
    const isTwoPair = (cardLabels: string) => {
        const input = cardLabels.toLowerCase();

        // Count occurrences of each character
        const charCount: { [key: string]: number } = {};

        for (const char of input) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        // Check if the pattern is satisfied
        const pairCounts = Object.values(charCount).filter(count => count >= 2);
        return pairCounts.length >= 2;
    }
        
    const isOnePair = (cardLabels: string) => {
        const input = cardLabels.toLowerCase();

        const charCount: { [key: string]: number } = {};

        for (const char of input) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        const pairCounts = Object.values(charCount).filter(count => count >= 2);
        return pairCounts.length >= 1;
    }
   
    return (
        <>
            <Title>2023 - Day 7</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne(daySevenData)}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo()}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DaySeven

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
