const timeLimited = function (fn, t) {

    return (...args) => new Promise((resolve, reject) => {

        const timeout = setTimeout(() => {
            reject('no time')
        }, t)

        fn(...args).then((data) => {
            resolve(data)
        }).catch((err) => {

            reject(err)
        }).finaly(() => {
            clearTimeout(timeout)
        })
    })
}