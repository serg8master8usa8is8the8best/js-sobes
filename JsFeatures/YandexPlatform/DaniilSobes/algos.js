



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

function digit(arr) {
    let stack = {}

    for (let val of arr) {
        let filterVal = String(val).split('').filter((number) => number !== '0')

        let sortedVal = filterVal.sort((a, b) => a - b)

        if (!stack[sortedVal.join('')]) {
            stack[sortedVal.join('')] = []
        }

        stack[sortedVal.join('')].push(val)
    }

    let result = []

    for (let val of Object.values(stack)) {
        result.push(val)
    }

    return result
}

console.log(digit([1230, 99, 23001, 123, 111, 300021, 101010, 90000009, 9]))
console.log(digit([11, 22]))


// [
//   [ 9 ],
//   [ 99, 90000009 ],
//   [ 111, 101010 ],
//   [ 1230, 23001, 123, 300021 ]
// ]

// 0  33  100

// если не throttle, то вызываем синхронно и запускаем таймер
// если таймер закончился, и были вызовы, то вызываем их 
// если таймер не закончился, то ничего не делаем 

// function throttle(fn, delay, ctx) {

//     let isThrottle = false
//     let prevArgs = []

//     function throttleCatch() {
//         isThrottle = true
//         setTimeout(() => {
//             isThrottle = false

//             if (prevArgs.length) {
//                 fn.apply(ctx, prevArgs)

//                 prevArgs = []
//                 isThrottle = true
//                 throttleCatch()
//             }


//         }, delay)

//     }

//     return function (...args) {

//         if (!isThrottle) {
//             fn.apply(ctx, args)

//             prevArgs = []
//             throttleCatch()
//         } else {
//             prevArgs = args
//         }


//     }

// }

function throttle(fn, delay, ctx) {

    let isThrottle = false
    let prevArgs = []
    let isCalled = false

    function throttleCall() {
        isThrottle = true

        setTimeout(() => {
            isThrottle = false
            if (isCalled) {
                fn.apply(ctx, prevArgs)
                prevArgs = []
                isCalled = false
                isThrottle = true

                throttleCall()
            }
        }, delay)
    }

    return function (...args) {

        if (isThrottle) {
            prevArgs = args
            isCalled = true
        } else {
            fn.apply(ctx, args)
            prevArgs = []
            isCalled = false

            throttleCall()
        }
    }


}

function test() {
    const start = Date.now()

    function log(text) {
        const msPassed = Date.now() - start

        console.log(`${msPassed} ${this.name} logged ${text}`)
    }

    const throttled = throttle(log, 100, { name: "me" })

    setTimeout(() => throttled('m'), 0)
    setTimeout(() => throttled('mo'), 22)
    setTimeout(() => throttled('mos'), 33)
    setTimeout(() => throttled('mosc'), 150)
    setTimeout(() => throttled('moscow'), 400)


    // 0 m
    // 100 mos
    // 200 mosc
    // 400 moscow
}


// test()

function getValues(three, type, prevValues = []) {


    if (three.type === 'added') {
        prevValues.push(three)
    }

    if (three.children) {
        three.children.forEach((node) => {
            return getValues(node, type, prevValues)
        })
    }

    return prevValues
}

function getNodes(tree, type) {
    return getValues(tree, type, [])
}

const tree = {
    type: "nested",

    children: [
        { type: "added", value: 42 },
        {
            type: "nested",
            children: [{ type: "added", value: 43 }],
        },
        { type: "added", value: 44 },
    ],
};

// console.log(getNodes(tree, "added"));