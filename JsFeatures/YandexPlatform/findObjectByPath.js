const THEME = {
    text: {
        basic: {
            primary: '#fff',
            secondary: '#000',
            tertiary: '#faa',
        },
    },
}[(text, basic, primary)]

const valueFromObject = (obj, pathArr, index) => {
    const currPath = pathArr[index]

    if (!obj.hasOwnProperty(currPath)) {
        return undefined
    } else if (index === pathArr.length - 1) {
        return obj[currPath]
    }

    return valueFromObject(obj[currPath], pathArr, index + 1)
}

const getValueByPath = (obj, path) => {
    if (!obj || !path) {
        return undefined
    }

    const pathArray = path.split(separator)

    return valueFromObject(obj, pathArray, 0)
}

console.log('1', getValueByPath(THEME, 'text.basic.primary')) // #fff
console.log('2', getValueByPath(THEME, 'text.basic.secondary')) // #000
console.log('3', getValueByPath(THEME, 'text.basic.tertiary')) // #faa
console.log('4', getValueByPath(THEME, 'text.basic.main')) // undefined
