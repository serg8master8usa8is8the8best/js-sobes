let arr = [
    { path: '2', body: 'text' },
    { path: '1', body: 'text' },
    { path: '1.1.1', body: 'text' },
    { path: '1.1', body: 'text' },
    { path: '1.2', body: 'text' },


]

function filterArr(a, b) {

    let arrA = a?.path?.split('.').map(Number)
    let arrB = b?.path?.split('.').map(Number)

    let iterationLevel = Math.min(arrA.length, arrB.length)

    for (let i = 0; i < iterationLevel; i++) {
        if (arrA[i] > arrB[i]) {
            return 1
        } else if (arrA[i] < arrB[i]) {
            return -1
        } else {
            continue
        }
    }

    return arrA.length - arrB.length
}

let getPrevPath = (path) => {
    let pathArr = path.split('.')


    return pathArr.slice(0, -1).join('.')
}


function objFromArray(arr) {
    const filteredArr = arr.sort(filterArr)

    let result = []
    let map = new Map()
    for (let item of filteredArr) {
        map.set(item.path, { ...item, children: null })
    }

    for (let item of filteredArr) {
        let pathLength = item.path.split('.').length

        if (pathLength === 1) {

            result.push(map.get(item.path))

        } else {

            let parentPath = getPrevPath(item.path)

            let parent = map.get(parentPath)



            if (parent?.children && parent?.children?.length) {
                parent.children.push(map.get(item.path))
            } else {
                parent.children = [map.get(item.path)]

            }

        }
    }

    console.log(JSON.stringify(map, null, 4))
    console.log(JSON.stringify(result, null, 4))

    return result


}

objFromArray(arr)

// console.log(JSON.stringify(objFromArray(arr), null, 4))