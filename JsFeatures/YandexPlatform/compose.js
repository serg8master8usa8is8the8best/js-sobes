const square = (x) => x * x
const time2 = (x) => x * 2
const sum = (a, b) => a + b

const compose = (...funcs) => {
    return (...nums) => {
        let res = 0

        for (let i = funcs.length - 1; i >= 0; i--) {
            if (i === funcs.length - 1) {

                if (nums.length == 2) {
                    res = funcs[i](...nums)
                } else {
                    res = funcs[i](nums[0])
                }
            } else {
                res = funcs[i](res)
            }

        }

        return res
    }


}


console.log(compose(square, time2)(2))
console.log(square(time2(2)))

console.log(compose(square, time2)(2) === square(time2(2)))
console.log(compose(square, time2, sum)(3, 4) === square(time2(sum(3, 4))))