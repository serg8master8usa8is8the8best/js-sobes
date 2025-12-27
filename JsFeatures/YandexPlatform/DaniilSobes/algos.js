



function digit(arr) {

    const valt = {}

    arr.map((element) => {
        const sortedElement = String(element).split('0').join('')

        const elementArray = Array.from(sortedElement).sort((a, b) => Number(a) - Number(b))

        const elementKey = elementArray.join('')

        if (elementKey in valt) {
            valt[elementKey] = [...valt[elementKey], element]
        } else {
            valt[elementKey] = [element]
        }

    })

    return Object.values(valt)
}

// console.log(digit([1230,99,23001,123,111,300021,101010,90000009,9])
console.log(digit([11, 22]))


// [
//   [ 9 ],
//   [ 99, 90000009 ],
//   [ 111, 101010 ],
//   [ 1230, 23001, 123, 300021 ]
// ]