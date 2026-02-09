function countLetters(str) {
    if (!str) {
        return ''
    }

    let slow = 0

    let result = []

    for (let fast = 0; fast <= str.length; fast++) {
        if (fast === str.length || str[slow] !== str[fast]) {
            let count = fast - slow

            if (count === 1) {
                result.push(str[slow])
            } else {
                result.push(str[slow] + count)
            }

            slow = fast
        }
    }

    return result.join('')
}

console.log(countLetters('A')) // A
console.log(countLetters('AAAB')) // A3B
console.log(countLetters('ABCCC')) // ABC3