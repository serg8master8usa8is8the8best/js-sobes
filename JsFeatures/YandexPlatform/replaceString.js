function replaceString(str, search, replace) {
    const sLen = search.length

    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + sLen) === search) {
            result += replace
            i += sLen - 1
        } else {
            result += str[i]
        }
    }

    return result
}

// console.log(replaceString('Hello world world Hello', 'world', 'there'))