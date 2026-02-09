function deepestObj(obj) {

    // проверить на объект

    // создать стек с кортежем 

    // пока есть стек, то брать из него элемент и глубину

    // добавлять в стек ключи по текущей ноде 

    if (obj === null || typeof obj !== 'object') {
        return 0
    }

    let mapDepth = 0
    let stack = [[obj, 1]]

    while (stack.length) {
        let [node, depth] = stack.pop()

        if (depth > mapDepth) {
            mapDepth = depth
        }

        if (node && Object.keys(node).length) {
            for (let key of Object.keys(node)) {
                if (node.hasOwnProperty(key) && typeof node[key] === 'object')
                    stack.push([node[key], depth + 1])
            }
        }


    }

    return mapDepth
}


console.log(deepestObj({
    a: 2,
    b: {
        c: 3,
        s: {
            aa: {
                ds: {
                    aasdf: 2
                }
            }
        },
        aag: {
            d3: 3
        }
    }
}))

console.log(deepestObj({
    a: 2,
    b: {
        c: 3,
        s: 1,
    }
}))