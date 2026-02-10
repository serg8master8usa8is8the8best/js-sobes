
// сравниваем maxLevel и maxValue 

// если это массив, то пушим

// если значение, то проверяем 

function findDeepestMaxElement(array) {

    let stack = [[array, 0]]

    let maxLevel = 0
    let maxValue = -Infinity

    while (stack.length) {
        let [node, level] = stack.pop()

        if (node.length) {
            for (let item of node) {
                if (Array.isArray(item)) {
                    stack.push([item, level + 1])
                } else {
                    if (level >= maxLevel && item > maxValue) {
                        maxLevel = level
                        maxValue = item
                    }
                }
            }


        }
    }

    return maxValue
};

// Input 2: [1, [[20, 1, [101]], 2], [[-2], [[102, 100]]]]
// Output 2: 102