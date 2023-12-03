export const findUniqueSymbols = (inputString: string): string[] => {
    const uniqueCharacters: Set<string> = new Set();

    for (const char of inputString) {
        if (isNaN(Number(char))) {
            uniqueCharacters.add(char);
        }
    }

    return Array.from(uniqueCharacters);
}