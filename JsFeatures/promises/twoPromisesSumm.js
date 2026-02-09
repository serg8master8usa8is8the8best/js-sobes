
const addTwoPromises = async function (promise1, promise2) {
    return new Promise( async(res, rej) => {
        const [...vals] = await Promise.allSettled([promise1, promise2])


        let summ = 0
        vals.forEach((res) => {

            if ('value' in res) {
                summ  += res.value
            }

             if ('reason' in res) {
                summ  += res.reason
            }
        })

        res(summ)
    })
 
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then((res) => console.log(res))

addTwoPromises(Promise.reject(3), Promise.resolve(2)).then((res) => console.log(res))
