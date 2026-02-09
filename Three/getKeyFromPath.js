function getObj(obj, path, level) {
    if (path.length - 1 === level) {
        return obj[path[level]]
    }

    return getObj(obj[path[level]], path, level + 1)
}


function getFromPath(obj, path) {

    const pathArr = path.split('.')


    return getObj(obj, pathArr, 0)

}



function getFromPathStack(obj, path) {

    let pathArr = path.split('.')
    let currentObj = obj

    for (let i = 0; i < pathArr.length; i++) {
        let key = pathArr[i]
        if (typeof currentObj && currentObj[key] && currentObj !== null) {
            currentObj = currentObj[key]
        } else {
            return undefined
        }
    }

    return currentObj

}

function get(obj, path) {
    // Ваш код здесь
    let stack = [[obj, false]]

    while (stack.length) {
        let [node, nodePath] = stack.pop()

        if (node && typeof node === 'object') {
            for (let [key, value] of Object.entries(node)) {
                let currentPath = key
                if (nodePath) {
                    currentPath = nodePath + '.' + key
                }

                console.log(currentPath, value,)

                if (currentPath === path) {
                    return value
                } else if (value && typeof value === 'object') {
                    stack.push([value, currentPath])
                }

            }
        }


    }

    return undefined
};

const obj = {
    a: {
        b: {
            c: 'data 1'
        },
        e: 'data 2'
    }
}

console.log(get(obj, 'a.b.c'))
console.log(get(obj, 'a.e'))

