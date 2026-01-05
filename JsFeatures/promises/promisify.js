function promisify(fn) {
    return function (...args) {


        return new Promise((resolve, reject) => {

            // callback передается сюда блять!!!!!!
            // он нахуй не с неба падает 
            fn(...args, (err, result) => {
                if (err) reject(err)
                resolve(result)
            })
        })
    }
}

function exampleCallbackFunction(a, b, callback) {
    if (a < 0 || b < 0) {
        callback(new Error("errororj"))
    } else {
        callback(null, a + b)
    }
}

const exmaplePromisifyFunction = promisify(exampleCallbackFunction)

exmaplePromisifyFunction(1, 2)
    .then(res => console.log(res))
    .catch(err => console.log(err))