



// в цикле while проверяем значения

// если slice(i, i+ sLen), то вставляем и увиличиваем i += sLen
// если нет, то просто пушим str[i]  i++


function replaceString(str, search, replace) {
    const sLen = search.length

    let result = ''

    let i = 0

    while (i < sLen) {
        if (str.slice(i, i + sLen) === search) {
            result += replace
            i += sLen
        } else {
            result += str[i]
            i++
        }
    }

    return result
}

// console.log(replaceString('Hello world world Hello', 'world', 'there'))