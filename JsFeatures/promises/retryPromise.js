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


// заводим count и delay из параметров 

// заводим функцию cathPromise и tryPromise

// tryPromise вызывает промис и оборачивает в catch - если успех, то резолвит - если нет, то вызывает cathPromise

// catchPromise сравнивает count и реджектит - если таймер прошел, то вызывает еще раз tryPromise()

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