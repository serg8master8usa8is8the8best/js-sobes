function Count() {
    let counter = 0

    return () => {
        // console.log(counter++)
        // counter++ сначала созвращает, а потом увиличивает
        // ++counter
    }

}

const c = new Count()

c()
c()

c.counter = 0

c()

const b = new Count()

b()



for (let i = []; i.length < 3; i.push(2)) {

    setTimeout(() => {
        // console.log(current)
    }, i.length * 1000)
}

// [2,2,2]
// [2,2,2]
// [2,2,2]

// переписанный вариант 

for (let i = []; i.length < 3; i.push(2)) {

    setTimeout((current) => {
        // console.log(current)
    }, i.length * 1000, [...i])
}

// или

for (let i = []; i.length < 3; i.push(2)) {
    const current = [...i]
    setTimeout(() => {
        // console.log(current)
    }, i.length * 1000)
}


// Удалить все что противоречит чистой функции


setTimeout(() => console.log(1))

Promise.reject(2).catch(console.log)

Promise.resolve().then(() => setTimeout(() => console.log(3)))

new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4))

Promise.resolve(5).then(console.log)

setTimeout(() => console.log(6))

console.log(7)

// сначала синхронные таски 7

// микро таски  1 6 3 4

// макро таски  2 M-3 M-4 5

// 7 2 5 1