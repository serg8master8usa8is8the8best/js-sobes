const obj = {
    a: 1,
    b: {
        c: 3,
        d: -10,
        e: {
            f: {
                g: 1
            }
        }
    }
}


const sumRecursive = (node, sum = 0) => {

    Object.values(node).forEach((value) => {
        if (typeof value !== 'object') {
            sum += value
        } else {
            sum = sumRecursive(value, sum)
        }
    })

    return sum

}

console.log(sumRecursive(obj))