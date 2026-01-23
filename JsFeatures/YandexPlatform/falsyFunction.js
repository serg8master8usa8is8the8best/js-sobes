

function filterFalsy(obj) {


    if (obj instanceof Array) {
        return obj.filter(item => Boolean(item)).map(item => filterFalsy(item))


    } else if (obj instanceof Object) {
        const filterObject = {}

        Object.keys(obj).forEach(key => {
            if (Boolean(obj[key])) {
                filterObject[key] = filterFalsy(obj[key])
            }
        })

        return filterObject


    }

    return obj

}



console.log(filterFalsy([null, 0, false, 1]))
// [1]
console.log(filterFalsy({ 'a': null, 'b': [false, 1] }))
// {b: [1]}
console.log(filterFalsy([null, 0, 5, [0], [false, 16]]))
// [5,[],[16]]
console.log(filterFalsy({
    level1: {
        level2: {
            a: 0,
            b: [1, null, 2],
            c: { d: "", e: "value" }
        }
    }
}))