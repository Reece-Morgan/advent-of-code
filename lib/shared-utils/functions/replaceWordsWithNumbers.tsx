export const replaceWordsWithNumbers = (inputString: string): string => {
    const wordToNumberMap: Record<string, string> = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    // Create a regular expression to match any word
    const wordRegex = new RegExp(`\\b(${Object.keys(wordToNumberMap).join('|')})\\b`, 'gi');

    // Replace words using a single regular expression
    inputString = inputString.replace(wordRegex, match => wordToNumberMap[match.toLowerCase()]);

    // Check for combined words using a single loop
    const words = Object.keys(wordToNumberMap);
    for (let i = 0; i < inputString.length; i++) {
        for (const word of words) {
            const len = word.length;
            const substring = inputString.substr(i, len);
            if (substring.toLowerCase() === word) {
                inputString = inputString.substring(0, i) + wordToNumberMap[word] + inputString.substring(i + 1);
            }
        }
    }

    return inputString;
}

