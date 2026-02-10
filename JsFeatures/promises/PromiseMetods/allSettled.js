allSettled([
    Promise.resolve(1),
    Promise.reject(),
    3,
    new Promise((resolve) => {
        setTimeout(() => resolve(4), 1000)
    }),
]).then((res) => {
    console.log('res', res)
})

// проверяем длинну промиса 
// создаем массив фиксированной длинны
// обходим все и оборачиваем в Promise.resolve()
// кладем в массив по индекусу и подписываемся на обработчик
// в finaly считаем - закончился ли count 

function allSettled(promises) {
    if (promises.length === 0) {
        return Promise.resolve([])
    }

    let res = new Array(promises.length)
    let count = 0

    return new Promise((resolve) => {
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((promiseRes) => {
                    res[index] = {
                        status: 'fullfiled',
                        value: promiseRes,
                    }
                })
                .catch((err) => {
                    res[index] = {
                        status: 'reject',
                        reason: err,
                    }
                })
                .finally(() => {
                    count++

                    if (count === promises.length) {
                        resolve(res)
                    }
                })
        })
    })
}
