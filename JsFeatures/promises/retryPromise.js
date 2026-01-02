// retru принимает 2 параметра - функция и {count: number, delay: (count) => number}

// если rejected, то вызвать count раз с задержкой в delay щ
// пока функция не вернет fullfiled или закончаться count 

function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('new error'), 1000)
    })
}

retry(test, { count: 5, delay: (retryCount) => retryCount * 1000 })
    .then((res) => console.log('res', res))
    .catch((err) => console.log('err', err))

function retry(promiseFn, config) {
    const { count, delay } = config

    let currentCount = 0

    return new Promise((resolve, reject) => {

        tryPromiseFn()

        function catchPromise() {

            currentCount++

            if (currentCount === count) {
                reject('to many ')
            }

            setTimeout(() => {
                tryPromiseFn()
            }, delay(currentCount))
        }

        function tryPromiseFn() {
            try {
                promiseFn().then((res) => resolve(res))
                    .catch(() => {
                        catchPromise()
                    })
            } catch (error) {
                catchPromise()
            }

        }



    })
}