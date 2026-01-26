function replaceString(str, search, replace) {
    const sLen = search.length

    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + sLen) === search) {
            result += replace
            i += sLen - 1
        } else {
            result += str[i]
        }
    }

    return result
}

// console.log(replaceString('Hello world world Hello', 'world', 'there'))

Array.prototype.myFilter = function (cb) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i])
        }
    }

    return result
}

const arr = [1, 2, 3, 4, 5]

// console.log(arr.myFilter(x => x > 2))

// function reconstructTrip(tickets) {

// }

function promisify(fn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    }
}

function exampleCallbackFunction(a, b, callback) {
    if (a < 0 || b < 0) {
        callback(new Error('arguments shout be '))
    } else {
        callback(null, a + b)
    }
}

const exmaplePromiseFunction = primisify(exampleCallbackFunction)

exampleCallbackFunction(1, 2)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
