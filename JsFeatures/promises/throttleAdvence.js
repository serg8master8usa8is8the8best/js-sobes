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


test()