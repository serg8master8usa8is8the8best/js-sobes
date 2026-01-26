const splitWordsBySeparator = (words, separator) => {
    const result = []

    for (const word of words) {
        const parts = word.split(separator)

        for (const part of parts) {
            if (part !== '') {
                result.push(part)
            }
        }
    }

    return result
}

console.log(splitWordsBySeparator(['one.two.three', 'four.five', 'six'], '.'))
console.log(splitWordsBySeparator(['1/', '/2', '/'], '/'))
