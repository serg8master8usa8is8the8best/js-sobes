// args, object, array, string, number, bool

function memoize(fn) {
    const cache = new Map()

    return function (...args) {
        const stringifyArguments = JSON.stringify(args)

        const cachedValue = cache.get(stringifyArguments)

        if (cachedValue) {
            console.log(
                `memoizedFn(${args
                    .map((arg) =>
                        typeof arg === 'object'
                            ? JSON.stringify(arg)
                            : String(arg)
                    )
                    .join(', ')})`
            )
            console.log(`Result: ${cache.get(key)}`)
            console.log('Invoked: false')
            console.log()
            return cachedValue
        } else {
            const result = fn(...args)

            cache.set(stringifyArguments, result)

            console.log(
                `memoizedFn(${args
                    .map((arg) =>
                        typeof arg === 'object'
                            ? JSON.stringify(arg)
                            : String(arg)
                    )
                    .join(', ')})`
            )
            console.log(`Result: ${result}`)
            console.log('Invoked: true')
            console.log()

            return result
        }
    }
}

memoSym = memoize((x, y) => x + y)
memoSomething = memoize((x, y, z, d) => x + (y / z) * d)

console.log(memoSym(3, 2))
console.log(memoSym(3, 2))
console.log(memoSym(1, 3))

console.log(memoSomething(3, 3, 6, 3))
console.log(memoSomething(3, 6, 1, 4))
console.log(memoSomething(3, 3, 6, 3))

export function memoize(fn) {
    const cache = new Map()

    return function memoized(...args) {
        const key = JSON.stringify(args)

        if (cache.has(key)) {
            console.log(
                `memoizedFn(${args
                    .map((arg) =>
                        typeof arg === 'object'
                            ? JSON.stringify(arg)
                            : String(arg)
                    )
                    .join(', ')})`
            )
            console.log(`Result: ${cache.get(key)}`)
            console.log('Invoked: false')
            console.log()
            return cache.get(key)
        }

        const result = fn(...args)
        cache.set(key, result)

        console.log(
            `memoizedFn(${args
                .map((arg) =>
                    typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
                )
                .join(', ')})`
        )
        console.log(`Result: ${result}`)
        console.log('Invoked: true')
        console.log()

        return result
    }
}
