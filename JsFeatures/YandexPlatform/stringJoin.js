function strjoin(separator, ...str) {

    return str.join(separator)

}

function strjoin(separator) {

    let resultString = ''

    let index = 1

    while (arguments[index] !== undefined) {

        if (index != 1) {
            resultString = resultString + separator + arguments[index]
        } else {
            resultString = arguments[index]
        }


        index = index + 1

    }

    return resultString

}