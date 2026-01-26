export const maximumValue = (words) => {
    let maxLength = 0
    let maxNumber = 0

    words.forEach((word) => {
        if (isNaN(Number(word.trim()))) {
            for (const str of word) {
                const currentNumber = Number(str)

                if (maxNumber < currentNumber) {
                    maxNumber = currentNumber
                }
            }
        } else {
            let currentLength = word.trim().length

            if (maxLength < currentLength) {
                maxLength = currentLength
            }
        }
    })

    return Math.max(maxLength, maxNumber)
}

console.log(maximumValue(['a', 'bb', 'ccc']))
console.log(maximumValue(['1', '01', '001', '0001']))
console.log(maximumValue(['alic3', 'bob', '3', '4', '00000']))
