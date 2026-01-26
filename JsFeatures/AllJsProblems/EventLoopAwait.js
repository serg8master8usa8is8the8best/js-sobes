async function test() {
    console.log('Async start')
    await Promise.resolve().then(() => console.log('Microtask in await'))
    console.log('Async end')
}

console.log('Script start')
test()
Promise.resolve().then(() => console.log('Standalone microtask'))
console.log('Script end')

// Script start, Async start, Script end, Microtask in await, Standalone microtask, Async end
