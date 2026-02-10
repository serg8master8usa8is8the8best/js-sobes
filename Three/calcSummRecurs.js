function calcSumm(obj, summ = 0) {
    if (typeof obj === 'object' && obj !== null) {
        for (let key of Object.keys(obj)) {
            summ = summ + calcSumm(obj[key], 0)
        }
    }
    if (typeof obj === 'number') {
        return summ + obj
    }

    return summ

}

function recursiveSum(obj) {
    return calcSumm(obj, 0)
};


// Input: { a: 1, b: { c: 3, d: -10, e: { f: { g: 1, }, }, }, }
// Output: -5