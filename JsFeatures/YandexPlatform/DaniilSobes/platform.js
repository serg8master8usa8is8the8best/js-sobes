function strjoin(separator, ...str) {

    return str.join(separator)

}

function strjoin(separator) {

    let resultString = ''

    let index = 1

    while (arguments[index] !== undefined) {

        if (index != 1) {
            resultString = resultString + separator + arguments[index]
        } else {
            resultString = arguments[index]
        }


        index = index + 1

    }

    return resultString

}


// const boolshit = Promise.resolve(1)
// .then(x => x +1)
// .then(x => {throw x})
// .then(x => console.log(x))
// .catch(err => console.log(err))
// .then(x => Promise.resolve(x))
// .catch(err => console.log(err))
// .then(x => console.log(x))

// 2
// undefined 

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

console.log(intersection([[8, 12], [17, 22]],
    [[5, 11], [14, 18], [20, 23]]
))


function intersection(user1, user2) {
    const result = []

    let userIteration1 = 0, userIteration2 = 0

    while (userIteration1 < user1.length || userIteration2 < user2.length) {

        const userArray1 = user1[userIteration1]
        const userArray2 = user2[userIteration2]

        console.log(userIteration1, userIteration2)



        if (userArray1[0] > userArray2[0] && userArray1[1] > userArray2[1]) {



            const interval = []

            if (userArray1[0] > userArray2[0]) {
                interval.push(userArray1[0])
            } else {
                interval.push(userArray2[0])
            }

            if (userArray1[1] > userArray2[1]) {
                interval.push(userArray1[1])
            } else {
                interval.push(userArray2[1])
            }


            result.push[interval]
        }


        if (userIteration2 < user2.length) {
            userIteration2 = userIteration2 + 1
        } else {
            userIteration2 = 0
            userIteration1 = userIteration1 + 1
        }


    }

    return result



}