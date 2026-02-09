function getConcated(arr) {


    let sortedArr = arr.sort((a, b) => a.order - b.order)

    let result = ''

    for (let obj of sortedArr) {
        if (!obj.expired) {
            if (obj.value) {
                for (let i = obj.value.length - 1; i >= 0; i--) {
                    result += obj.value[i]
                }
            }
        }
    }



    return [...new Set(result)].join('')


};

console.log(getConcated([{ value: "aabb", order: 1, expired: false }, { value: "bbaa", order: 2, expired: false }]))