console.log(1)

setTimeout(() => {
    console.log('set timeout 1')
    Promise.resolve().then(() => {
        console.log('promise setTimeout')
    })
}, 0)

setTimeout(() => {
    console.log(
        'setTimout 2'
    )
}, 0)

Promise.resolve().then(() => {
    console.log('promise 1')
})

Promise.resolve().then(() => {
    console.log('promise 2')
})

console.log(4)

// 1
// 4
// promise 1
// promise 2
// set timeout 1
// promise setTimeout 
// setTimout 2

