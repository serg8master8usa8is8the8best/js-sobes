// превый успех возвращаем
// если только все упали, то возвращаем reject с списком по порядку 

function PromiseAny(promises) {
    return new Promise((resolve, reject) => {

        if (!promises || promises.lengt === 0) {
            reject([])
            return
        }

        let rejectedPromises = new Array(promises.length)
        let count = 1


        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((data) => {
                resolve(data)
            }).catch((err) => {
                rejectedPromises[index] = err

                count++

                if (count === promises.length) {
                    reject(rejectedPromises)
                }
            })
        })
    })
}