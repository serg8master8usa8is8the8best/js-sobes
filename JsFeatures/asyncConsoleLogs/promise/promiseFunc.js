console.log(1)

Promise
.resolve()
.then(()=> console.log('2'))
.then(()=> console.log('3'))
.then(()=> console.log('12')).finally(() => console.log(4))
.then(()=> console.log('2'))

queueMicrotask(() => console.log('5'))

Promise.reject().then(()=> console.log('8')).catch(() => console.log(9)).then(() => console.log('10')).finally(() => console.log(11))

console.log(12)

// 1
// 12
// 2
// 5
// 3
// 9
// 12
// 10
// 4
// 11
// 2