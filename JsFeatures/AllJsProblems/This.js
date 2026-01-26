// Пример 2
const personArr = {
    name: 'Bob',
    greet: () => {
        console.log(`Hello, ${this.name}!`)
    },
}
personArr.greet() // Hello, undefined!

// Пример 3
const personSet = {
    name: 'Lily',
    greet: function () {
        // this ссылается на сам объект personSet
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`)
        }, 1000)
    },
}
personSet.greet() // Hello, Lily! (после 1 секунды)

// 4
const obj46 = {
    name: 'John',
    printName() {
        console.log(this.name)
    },
    delayedPrintName() {
        setTimeout(this.printName, 1000)
    },
}

obj46.delayedPrintName() // undefined (через 1 секунду)
// не привязан контекст

// 5
const obj = { value: 42 }
const getValue = () => this.value
const boundGetValue = getValue.bind(obj)
console.log(boundGetValue()) // undefined

// 6
function sum(a, b) {
    return this.base + a + b
}

const bound1 = sum.bind({ base: 10 }, 2)
console.log(bound1.bind({ base: 5 }, 3)()) // 15
