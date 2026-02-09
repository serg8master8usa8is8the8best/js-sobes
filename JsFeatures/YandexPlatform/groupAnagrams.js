



// function digit(arr) {

//     const valt = {}

//     arr.map((element) => {
//         const sortedElement = String(element).split('0').join('')

//         const elementArray = Array.from(sortedElement).sort((a, b) => Number(a) - Number(b))

//         const elementKey = elementArray.join('')

//         if (elementKey in valt) {
//             valt[elementKey] = [...valt[elementKey], element]
//         } else {
//             valt[elementKey] = [element]
//         }

//     })

//     return Object.values(valt)
// }

function groupAnagrams(arr) {
    let map = {}

    for (let val of arr) {
        let filterVal = String(val).split('').filter((number) => number !== '0')

        let sortedVal = filterVal.sort((a, b) => a - b)

        if (!map[sortedVal.join('')]) {
            map[sortedVal.join('')] = []
        }

        map[sortedVal.join('')].push(val)
    }

    let result = []

    for (let val of Object.values(map)) {
        result.push(val)
    }

    return result
}



console.log(groupAnagrams([1230, 99, 23001, 123, 111, 300021, 101010, 90000009, 9]))
console.log(groupAnagrams([11, 22]))


// [
//   [ 9 ],
//   [ 99, 90000009 ],
//   [ 111, 101010 ],
//   [ 1230, 23001, 123, 300021 ]
// ]

