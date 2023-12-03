import { Title } from "@aoc/components"
import { findUniqueSymbols } from "@aoc/shared-utils";
import { dayThreeData, testData } from "puzzle-inputs/2023/3";
import styled from "styled-components";

const TwentyTwentyThree_DayThree = () => {
    const findSymbolIndices = (data: string, symbolsToFind: string[]) => {
        const indices: { [symbol: string]: number[] } = {};

        for (let i = 0; i < data.length; i++) {
            const currentSymbol = data[i];
            
            if (symbolsToFind.includes(currentSymbol)) {
            if (!indices[currentSymbol]) {
                indices[currentSymbol] = [];
            }

            indices[currentSymbol].push(i);
            }
        }

        return indices;
    }

    const doesIndexAlreadyExist = (newArray: number[], arrayOfArrays: number[][]): boolean => {
        return arrayOfArrays.some(existingArray =>
            existingArray.length === newArray.length &&
            existingArray.every((element, index) => element === newArray[index])
        );
    }

    const partOne = (data: string) => {
        let totalSum: number = 0;
        const allNumberIndices: number[][] = [];
        const formattedData = data.replace(/\s/g, "");

        const symbols = findUniqueSymbols(formattedData);
        symbols.splice(symbols.indexOf('.'), 1);

        const symbolIndices = findSymbolIndices(formattedData, symbols);

        const lines = data.trim().split(/\n/g);
        const lineLength = lines[0].length;

        for (let i = 0; i < symbols.length; i++) {
            const indicesArray = symbolIndices[symbols[i]];
            indicesArray.forEach(index => {
                const indexArray = [];
                indexArray.push(index - lineLength - 1)   // NW
                indexArray.push(index - lineLength)       // N
                indexArray.push(index - lineLength + 1)   // NE
                indexArray.push(index + 1)                // E
                indexArray.push(index + lineLength + 1)   // SE
                indexArray.push(index + lineLength)       // S
                indexArray.push(index + lineLength - 1)   // SW
                indexArray.push(index - 1)                // W

                // iterate through indexArray to search for any numbers
                for (let a = 0; a < indexArray.length; a++) {
                    let result = "";
                    let numberIndices = [];
                    const value = formattedData[indexArray[a]];
                    if (!isNaN(+value)) {
                        // Search previous characters for numbers
                        for (let i = indexArray[a] - 1; i >= 0 && /\d/.test(formattedData[i]); i--) {
                            result = formattedData[i] + result;
                            numberIndices.push(i)
                        }

                        // Include the character at the specified index
                        result += formattedData[indexArray[a]];
                        numberIndices.push(indexArray[a])

                        // Search next characters for numbers
                        for (let i = indexArray[a] + 1; i < formattedData.length && /\d/.test(formattedData[i]); i++) {
                            result += formattedData[i];
                            numberIndices.push(i)
                        }

                        // if the number found hasn't already been recorded, add the index to the array and the number to the total
                        const arrayAlreadyExists = doesIndexAlreadyExist(numberIndices.sort(), allNumberIndices)
                        if (!arrayAlreadyExists) {
                            allNumberIndices.push(numberIndices.sort());
                            totalSum += +result
                        }
                    } 
                }
            })
        }

        // TODO: return totalSum when issue with real data is fixed
        return totalSum;

        return 'incomplete'
    }

    const partTwo = () => {
        // Function for Part Two
        return 'incomplete'
    }
   
    return (
        <>
            <Title>2023 - Day 3</Title>
            <Subtitle>Part 1</Subtitle>
            <Answer>{partOne(dayThreeData)}</Answer>
            <Subtitle>Part 2</Subtitle>
            <Answer>{partTwo()}</Answer>
        </>
    )
}

export default TwentyTwentyThree_DayThree

const Subtitle = styled.h2`
    text-align: center;
`;

const Answer = styled.div`
    text-align: center;
`;
