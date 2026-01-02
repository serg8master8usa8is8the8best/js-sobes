

function createCounter(start = 0) {
    let count = start


    return function () {
        count++
        // console.log(count)
        return count
    }
}

const counter = createCounter(5)

counter()
counter()
counter()


function createFilter(callback) {
    return function (arr) {
        return arr.filter(callback)
    }
}

const filterten = createFilter((item) => item < 10)

// console.log(filterten([1, 5, 10, 15, 20]))


function debounce(cb, delay) {
    let timer

    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => cb(...args), delay)

    }
}

const newEvent = debounce(() => { console.log('new event'), 500 })

// newEvent()
// newEvent()
// newEvent()

// throttle с контекстом и последним вызовом 

// 0 22 33 150 404

function throttle(fn, delay, ctx) {
    let isBlocked = false
    let lastArgs = null

    function throttleTimer() {
        setTimeout(() => {
            isBlocked = false
            if (lastArgs) {
                fn.apply(ctx, lastArgs)
                lastArgs = null
                isBlocked = true
                throttleTimer()
            }
        }, delay)
    }

    return function (...args) {
        if (!isBlocked) {
            fn.apply(ctx, args)
            isBlocked = true
            throttleTimer()
        } else {
            lastArgs = args
        }
    }
}

function testTrottle() {
    const start = Date.now()

    function log(text) {
        const msPassed = Date.now() - start
        // console.log(`${msPassed} ${this.name} logged${text}`)
    }

    const throttted = throttle(log, 100, { name: 'me' })

    setTimeout(() => throttted('m'), 0)
    setTimeout(() => throttted('mo'), 22)
    setTimeout(() => throttted('mos'), 33)
    setTimeout(() => throttted('mosc'), 150)
    setTimeout(() => throttted('moscow'), 401)
    // 0 m
    // 100 mos
    // 200 mosc
    // 401 moscow
}

testTrottle()