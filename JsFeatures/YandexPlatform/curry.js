function sum(a, b, c) {
    return a + b + c
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args)
        }
        return (...next) => curried(...args, ...next)
    }
}


// console.log(curry(sum)(1,2)(3))
// console.log(curry(sum)(1)(5)(3))