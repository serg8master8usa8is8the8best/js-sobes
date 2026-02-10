function flatten(array) {
    if (!array.length) {
        return []
    }

    let stack = [array]
    let result = []

    while (stack.length) {
        let node = stack.pop()

        if (Array.isArray(node)) {
            // Чтобы сохранить порядок, добавляем элементы в обратном порядке
            for (let i = node.length - 1; i >= 0; i--) {
                stack.push(node[i])
            }
        } else {
            result.push(node)
        }
    }

    return result
};

// Input 2: [1, "string", [2, [3, "4"]], { a: 1 }]
// Output 2: [1, "string", 2, 3, "4", { a: 1 }]