// проходимся по i = 1 < length

// если prev < current и увеличивается 

// если prev > current и уменьшается 

// если равны, то дальше 

function isMonotinic(number) {
    let isUp = false
    let isDown = false

    for (let i = 1; i < number.length; i++) {

        let prev = number[i - 1]
        let current = number[i]

        if (prev < current) {
            if (!isUp && !isDown) {
                isUp = true
            }
            if (isDown) {
                return false
            }
        }

        if (prev > current) {
            if (!isUp && !isDown) {
                isDown = true
            }
            if (isUp) {
                return false
            }
        }

    }
    return true
}

console.log(isMonotinic([1, 2, 3, 6]))
console.log(isMonotinic([6, 3, 3, 2, 1]))
console.log(isMonotinic([1, 1, 1]))
console.log(isMonotinic([1, 10, 6]))